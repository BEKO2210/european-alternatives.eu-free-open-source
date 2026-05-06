#!/usr/bin/env python3
"""
Refresh the `lastUpdated` field of every tool entry from GitHub's
real `pushed_at` timestamp.

Reads every src/data/tools/*.ts file plus the AUTO_TOOLS_JSON block in
auto-tools.ts, extracts the `github` URL of each tool, queries the
GitHub API once per repo, and rewrites the `lastUpdated` value in
place. Designed to be:

  - Idempotent (no-op if the date is already up to date).
  - Safe for the auto-tools.ts JSON block: when an auto-tool's date
    changes we update both the JSON block and the regenerated TS
    array entry, so the next discover_tools.py run sees consistent
    state.
  - Conservative on writes: only files that actually changed are
    re-written, so git diff stays small.

Usage:
    GITHUB_TOKEN=ghp_xxx python scripts/refresh_last_updated.py

Environment:
    GITHUB_TOKEN   - PAT or workflow token (required for sane rate limit)
    REPO_ROOT      - default '.'
    DRY_RUN        - 'true' to print intended changes without writing
    MAX_PER_RUN    - cap repos checked per invocation (default: 0 = no cap)
"""

from __future__ import annotations

import json
import os
import re
import sys
import time
from datetime import datetime, timezone
from pathlib import Path
from typing import Iterable

import requests

# ---------------------------------------------------------------------------

GITHUB_TOKEN = os.environ.get("GITHUB_TOKEN", "")
REPO_ROOT = Path(os.environ.get("REPO_ROOT", ".")).resolve()
DRY_RUN = os.environ.get("DRY_RUN", "false").lower() == "true"
MAX_PER_RUN = int(os.environ.get("MAX_PER_RUN", "0"))  # 0 = unlimited

GITHUB_API = "https://api.github.com"
HEADERS: dict[str, str] = {"Accept": "application/vnd.github+json"}
if GITHUB_TOKEN:
    HEADERS["Authorization"] = f"Bearer {GITHUB_TOKEN}"

TOOLS_DIR = REPO_ROOT / "src" / "data" / "tools"
AUTO_TS = TOOLS_DIR / "auto-tools.ts"

# ---------------------------------------------------------------------------

GITHUB_URL_RE = re.compile(
    r"^https?://github\.com/([^/]+)/([^/?#]+?)(?:\.git)?/?$",
    re.IGNORECASE,
)


def log(msg: str) -> None:
    ts = datetime.now(timezone.utc).strftime("%H:%M:%S")
    print(f"[{ts}] {msg}", flush=True)


def parse_github(url: str) -> tuple[str, str] | None:
    m = GITHUB_URL_RE.match(url.strip())
    if not m:
        return None
    return m.group(1), m.group(2)


# ---------------------------------------------------------------------------
# GitHub fetcher with rate-limit handling
# ---------------------------------------------------------------------------


def fetch_pushed_at(owner: str, repo: str) -> str | None:
    url = f"{GITHUB_API}/repos/{owner}/{repo}"
    for attempt in range(3):
        try:
            r = requests.get(url, headers=HEADERS, timeout=20)
        except requests.RequestException as exc:
            log(f"  network error for {owner}/{repo}: {exc}")
            time.sleep(2 * (attempt + 1))
            continue

        if r.status_code == 200:
            data = r.json()
            pushed = data.get("pushed_at") or data.get("updated_at")
            return pushed[:10] if pushed else None

        if r.status_code in (301, 302):
            new_loc = r.json().get("url") or r.headers.get("Location")
            if new_loc and "/repos/" in new_loc:
                # follow once, the Location is /repos/owner/name on github API
                m = re.search(r"/repos/([^/]+)/([^/?#]+)", new_loc)
                if m:
                    return fetch_pushed_at(m.group(1), m.group(2))

        if r.status_code == 404:
            return "404"  # explicit 'not found' marker; caller may keep old date

        if r.status_code in (403, 429):
            reset = r.headers.get("X-RateLimit-Reset")
            if reset:
                wait = max(int(reset) - int(time.time()) + 5, 5)
                log(f"  rate-limited, sleeping {wait}s")
                time.sleep(wait)
                continue
            time.sleep(60)
            continue

        log(f"  HTTP {r.status_code} for {owner}/{repo}")
        return None
    return None


# ---------------------------------------------------------------------------
# Manual category .ts files (everything except auto-tools.ts)
# ---------------------------------------------------------------------------

# Match a single tool object's github + lastUpdated fields. We capture the
# entire object so we can rewrite lastUpdated within it without touching
# anything else. Matches single-line OR multi-line value wrappings.
TOOL_OBJECT_RE = re.compile(
    r"\{[^{}]*?slug:\s*'(?P<slug>[^']+)'.*?github:\s*'(?P<github>https?://github\.com/[^']+)'.*?lastUpdated:\s*'(?P<date>[^']+)'.*?\}",
    re.DOTALL,
)


def list_manual_files() -> list[Path]:
    return sorted(
        p
        for p in TOOLS_DIR.glob("*.ts")
        if p.name not in {"index.ts", "auto-tools.ts"}
    )


def collect_targets() -> list[tuple[str, str, str, str, str]]:
    """Returns [(file_kind, slug, owner, repo, current_date)] for every
    tool with a github URL. file_kind is 'manual:<filename>' or 'auto'."""
    out: list[tuple[str, str, str, str, str]] = []

    # Manual files
    for f in list_manual_files():
        text = f.read_text()
        for m in TOOL_OBJECT_RE.finditer(text):
            slug, gh, date = m.group("slug"), m.group("github"), m.group("date")
            parsed = parse_github(gh)
            if not parsed:
                continue
            out.append((f"manual:{f.name}", slug, parsed[0], parsed[1], date))

    # Auto-tools JSON block
    if AUTO_TS.exists():
        text = AUTO_TS.read_text()
        m = re.search(
            r"/\*\s*AUTO_TOOLS_JSON\s*\n(.*?)\nEND_AUTO_TOOLS_JSON\s*\*/",
            text,
            re.DOTALL,
        )
        if m:
            for tool in json.loads(m.group(1)):
                gh = tool.get("github", "")
                parsed = parse_github(gh)
                if not parsed:
                    continue
                out.append(
                    (
                        "auto",
                        tool.get("slug", ""),
                        parsed[0],
                        parsed[1],
                        tool.get("lastUpdated", ""),
                    )
                )

    return out


# ---------------------------------------------------------------------------
# Writers
# ---------------------------------------------------------------------------


def update_manual_file(path: Path, slug: str, new_date: str) -> bool:
    """Rewrite lastUpdated for a single slug inside a manual category .ts.
    Returns True if file changed."""
    text = path.read_text()
    # Slug-anchored single-tool replace. We deliberately keep the regex
    # tight so we never overwrite a different tool's date.
    pattern = re.compile(
        r"(slug:\s*'" + re.escape(slug) + r"'[^{}]*?lastUpdated:\s*')([^']+)(')",
        re.DOTALL,
    )
    new_text, n = pattern.subn(lambda m: m.group(1) + new_date + m.group(3), text, count=1)
    if n == 0 or new_text == text:
        return False
    path.write_text(new_text)
    return True


def regenerate_auto_tools(updates: dict[str, str]) -> bool:
    """Apply a slug->new_date dict to auto-tools.ts JSON block AND
    rewrite the TypeScript array. Reuses the helpers from
    discover_tools.py for consistent formatting."""
    if not AUTO_TS.exists():
        return False
    text = AUTO_TS.read_text()
    m = re.search(
        r"/\*\s*AUTO_TOOLS_JSON\s*\n(.*?)\nEND_AUTO_TOOLS_JSON\s*\*/",
        text,
        re.DOTALL,
    )
    if not m:
        return False

    tools = json.loads(m.group(1))
    changed = False
    for t in tools:
        new_date = updates.get(t.get("slug", ""))
        if new_date and t.get("lastUpdated") != new_date:
            t["lastUpdated"] = new_date
            changed = True
    if not changed:
        return False

    sys.path.insert(0, str(Path(__file__).resolve().parent))
    from discover_tools import _ts_escape, _ts_string_array  # noqa: WPS433

    json_block = json.dumps(tools, indent=2, ensure_ascii=False)
    out_lines = [
        "import type { Tool } from '../types';",
        "",
        "/* AUTO_TOOLS_JSON",
        json_block,
        "END_AUTO_TOOLS_JSON */",
        "",
        "export const autoDiscoveredTools: Tool[] = [",
    ]
    for tool in tools:
        out_lines.append("  {")
        out_lines.append(f"    id: '{_ts_escape(tool['id'])}',")
        out_lines.append(f"    name: '{_ts_escape(tool['name'])}',")
        out_lines.append(f"    slug: '{_ts_escape(tool['slug'])}',")
        out_lines.append(f"    tagline: '{_ts_escape(tool['tagline'])}',")
        out_lines.append("    description:")
        out_lines.append(f"      '{_ts_escape(tool['description'])}',")
        out_lines.append(f"    website: '{_ts_escape(tool['website'])}',")
        if tool.get("github"):
            out_lines.append(f"    github: '{_ts_escape(tool['github'])}',")
        out_lines.append(f"    license: '{_ts_escape(tool['license'])}',")
        out_lines.append(
            f"    categories: {_ts_string_array(tool['categories'])},"
        )
        out_lines.append(
            f"    replacesTools: {_ts_string_array(tool['replacesTools'])},"
        )
        out_lines.append(
            f"    selfHostable: {'true' if tool['selfHostable'] else 'false'},"
        )
        if tool.get("hostedService"):
            out_lines.append(f"    hostedService: '{_ts_escape(tool['hostedService'])}',")
        if tool.get("logoPlaceholderEmoji"):
            out_lines.append(
                f"    logoPlaceholderEmoji: '{tool['logoPlaceholderEmoji']}',"
            )
        if tool.get("logoUrl"):
            out_lines.append(f"    logoUrl: '{_ts_escape(tool['logoUrl'])}',")
        if tool.get("stars") is not None:
            out_lines.append(f"    stars: {tool['stars']},")
        out_lines.append(f"    lastUpdated: '{tool['lastUpdated']}',")
        out_lines.append(f"    tags: {_ts_string_array(tool['tags'])},")
        out_lines.append(f"    difficulty: '{tool['difficulty']}',")
        out_lines.append(
            f"    platforms: {_ts_string_array(tool['platforms'])},"
        )
        out_lines.append(
            f"    featured: {'true' if tool['featured'] else 'false'},"
        )
        out_lines.append(f"    addedDate: '{tool['addedDate']}',")
        if tool.get("simpleIconsSlug"):
            out_lines.append(
                f"    simpleIconsSlug: '{_ts_escape(tool['simpleIconsSlug'])}',"
            )
        out_lines.append("  },")
    out_lines.append("];")
    out_lines.append("")
    AUTO_TS.write_text("\n".join(out_lines))
    return True


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------


def main() -> None:
    log("=" * 60)
    log("Refresh lastUpdated from GitHub pushed_at")
    log("=" * 60)
    if not GITHUB_TOKEN:
        log("WARNING: no GITHUB_TOKEN set — rate limits will be tight")

    targets = collect_targets()
    log(f"Tools to check: {len(targets)}")
    if MAX_PER_RUN > 0 and len(targets) > MAX_PER_RUN:
        log(f"MAX_PER_RUN={MAX_PER_RUN}; truncating")
        targets = targets[:MAX_PER_RUN]

    auto_updates: dict[str, str] = {}
    manual_changes = 0
    skipped_404 = 0

    for kind, slug, owner, repo, old_date in targets:
        new_date = fetch_pushed_at(owner, repo)
        if new_date is None:
            continue
        if new_date == "404":
            skipped_404 += 1
            continue
        if new_date == old_date:
            continue
        log(f"  {slug:30}  {old_date} -> {new_date}  ({owner}/{repo})")
        if DRY_RUN:
            continue
        if kind == "auto":
            auto_updates[slug] = new_date
        else:
            file_name = kind.split(":", 1)[1]
            if update_manual_file(TOOLS_DIR / file_name, slug, new_date):
                manual_changes += 1

    if not DRY_RUN and auto_updates:
        if regenerate_auto_tools(auto_updates):
            log(f"Auto-tools updated: {len(auto_updates)} dates rewritten")

    log("=" * 60)
    log(
        f"Done. Manual file changes: {manual_changes}; "
        f"auto-tool updates: {len(auto_updates)}; "
        f"404s skipped: {skipped_404}"
    )
    log("=" * 60)


if __name__ == "__main__":
    main()
