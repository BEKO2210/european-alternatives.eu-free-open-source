#!/usr/bin/env python3
"""
One-shot polish pass for src/data/tools/auto-tools.ts.

Reads the AUTO_TOOLS_JSON block, applies the following corrections,
then regenerates the .ts file:

  1) Category overrides for known mis-categorisations (the discover
     script's keyword-scoring is brittle: anything with "docker" or
     "database" in its description gets shoved into 'container' or
     'datenbanken' even when that is wildly off — Coolify is not a
     database, casaOS is not a container, etc.)
  2) Tagline cleanup: strip the dumb trailing "..." truncations and
     uninformative leading boilerplate ("An open source ", "🚀 ", emoji
     prefixes), shorten to 110 chars at a sentence boundary.
  3) simpleIconsSlug: filled in from the same KNOWN_SIMPLE_ICONS map
     used by discover_tools.py (re-imported below to stay in sync).
  4) replacesTools: re-derived from CATEGORY_REPLACES for the
     corrected category (so re-categorised tools no longer claim to
     replace 'Oracle, MSSQL').
"""

import json
import pathlib
import re
import sys

# Make the existing CATEGORY_REPLACES, CATEGORY_EMOJI and
# KNOWN_SIMPLE_ICONS reachable without re-typing them.
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
from discover_tools import (  # type: ignore  # noqa: E402
    CATEGORY_EMOJI,
    CATEGORY_REPLACES,
    KNOWN_SIMPLE_ICONS,
    _ts_escape,
    _ts_string_array,
)

REPO_ROOT = pathlib.Path(__file__).resolve().parents[1]
AUTO_TS = REPO_ROOT / "src" / "data" / "tools" / "auto-tools.ts"

# ---------------------------------------------------------------------------
# Hand-curated category overrides for tools the discover script got wrong.
# Slug -> correct category. Slugs match what's already in auto-tools.ts.
# ---------------------------------------------------------------------------
SLUG_CATEGORY_OVERRIDES: dict[str, str] = {
    # PaaS / deployment platforms — were stuffed into 'datenbanken' or
    # 'container' just because their descriptions mention "database" or
    # "docker". They actually replace Vercel/Heroku/Netlify.
    "coolify": "ci-cd",
    "dokploy": "ci-cd",
    "dokku": "ci-cd",
    "kubero": "ci-cd",
    "uncloud": "ci-cd",
    "zane-ops": "ci-cd",
    "autobase": "ci-cd",
    "encore": "backend-frameworks",
    "nixopus": "ci-cd",
    "automatisch": "ci-cd",  # Zapier alternative: workflow automation
    "flagsmith": "backend-frameworks",  # feature flags
    "olares": "betriebssysteme",
    "casaos": "betriebssysteme",
    "yunohost": "betriebssysteme",
    "puter": "betriebssysteme",
    "ansible-nas": "betriebssysteme",
    # Mis-named auto entries that landed in betriebssysteme by accident
    "android": "vpn",  # actually a WireGuard Android client
    "degoog": "suchmaschinen",  # search-engine aggregator
    "windows-on-reins": "firewall",  # Windows hardening / privacy script
    "obtainium": "dev-tools",  # Android app side-loader / updater
    # Virtualisation / hypervisor
    "proxmoxve": "betriebssysteme",
    # Dashboard / startpage
    "homepage": "backend-frameworks",
    "dashy": "backend-frameworks",
    "glance": "backend-frameworks",
    "sun-panel": "backend-frameworks",
    "astroluma": "backend-frameworks",
    "jump": "backend-frameworks",
    "dashboard-icons": "dev-tools",
    "excalidash": "backend-frameworks",  # Excalidraw dashboard
    "nginx-ui": "backend-frameworks",
    # E-Commerce / payments
    "btcpayserver": "e-commerce",
    "bitcart": "e-commerce",
    "hyperswitch": "e-commerce",
    # Document / office
    "documenso": "buerosoftware",
    "stirling-pdf": "buerosoftware",
    "bentopdf": "buerosoftware",
    "compresspdf": "buerosoftware",
    "ironcalc": "buerosoftware",
    "personal-management-system": "buerosoftware",
    "taxhacker": "buerosoftware",
    "ezbookkeeping": "erp",
    "wallos": "erp",
    "lago": "erp",
    "meteroid": "erp",
    "trip": "karten",  # POI map + trip planner — actually maps not erp
    "invio": "erp",  # 'Self-hosted invoicing' — was in cloud-speicher!
    "dumbassets": "erp",  # asset/inventory tracker
    # Notes / memos / read-later / bookmarks / habits
    "memos": "notizen",
    "memories": "fotos",
    "easynotes": "notizen",
    "react-glass-keep": "notizen",
    "linkding": "notizen",
    "linkace": "notizen",
    "karakeep": "notizen",
    "neohabit": "notizen",
    "preptrack": "notizen",
    "donetick": "projektmanagement",
    "kitchenowl": "notizen",
    "mealie": "notizen",
    "grocy": "notizen",
    "wanderer": "karten",
    "archivebox": "notizen",
    "jotty": "notizen",
    # 'portabase' description is actually about a multi-engine DB backup
    # tool, not the Portabase personal-data app. Belongs in backup.
    "portabase": "backup",
    "silverbullet": "notizen",
    "deepwiki-open": "wiki",
    "pandawiki": "wiki",
    "docat": "wiki",
    "alexandrie": "wiki",
    "evidence": "analytics",
    "freshlytics": "analytics",
    "shynet": "analytics",
    "litlyx": "analytics",
    "swetrix": "analytics",
    "tianji": "analytics",
    # Photo / gallery
    "photofield": "fotos",
    "photoview": "fotos",
    "ownphotos": "fotos",
    "fireshare": "video-audio",
    "metube": "video-audio",
    "hometube": "video-audio",
    "mediacms": "medienserver",
    "ganymede": "medienserver",
    "seanime": "medienserver",
    "audiomuse-ai": "medienserver",
    "owncast": "medienserver",
    "musicrecognizer": "video-audio",
    "handbrake-web": "video-audio",
    "your-spotify": "analytics",
    "calibre-web-automated": "medienserver",
    "media-stack": "medienserver",
    "pmm": "monitoring",  # Percona DB Monitoring & Management
    # Network / monitoring / status / uptime
    "uptrace": "monitoring",
    "watchyourlan": "monitoring",
    "netalertx": "monitoring",
    "autokuma": "monitoring",
    "beszel": "monitoring",
    "pulse": "monitoring",
    "logdy-core": "monitoring",
    "wakapi": "zeiterfassung",
    "teslamate": "monitoring",
    "openstatus": "monitoring",
    "scanopy": "monitoring",  # auto-updating network diagrams
    "evidently": "monitoring",  # ML / LLM observability
    "helicone": "monitoring",
    "openllmetry": "monitoring",
    # Privacy / security / firewall
    "checkov": "monitoring",
    "portmaster": "firewall",
    "safeline": "firewall",
    "macos-fortress": "firewall",
    "simplewall": "firewall",
    "privacy-settings": "firewall",
    "firezone": "vpn",
    "pentagi": "firewall",
    "wholeaked": "firewall",
    "social-amnesia": "social-media",
    "watomatic": "kommunikation",
    "local-sheriff": "firewall",
    "athena": "firewall",  # Android firewall + adblock
    "core": "firewall",  # privacy-preserving security camera
    "clearcam": "firewall",  # security camera with object detection
    "strix": "firewall",  # camera stream finder / recon
    "whoami-project": "firewall",  # privacy / anonymity Linux distro
    "super": "firewall",  # SPR Wi-Fi router for home
    # Auth / identity / passwords / 2fa
    "voidauth": "backend-frameworks",
    "tinyauth": "backend-frameworks",
    "pocket-id": "backend-frameworks",
    "swifty": "passwort-manager",
    "passwordpusher": "passwort-manager",
    "2fauth": "passwort-manager",
    "databunker": "backend-frameworks",  # Customer PII vault
    "bricksllm": "backend-frameworks",  # LLM API gateway
    "truthy": "backend-frameworks",  # NestJS auth+CMS API
    # Browsers / front-ends
    "neko": "browser",
    "virtualbrowser": "browser",
    "librefox": "browser",
    "libreddit": "social-media",
    "alternative-frontends": "browser",
    "websurfx": "suchmaschinen",
    # Code / pastebin / git / forge
    "opengist": "code-hosting",
    "onedev": "code-hosting",
    "rustpad": "dev-tools",
    "term-everything": "dev-tools",
    "yaade": "dev-tools",
    "cloudmacs": "dev-tools",
    "browser-extension": "dev-tools",
    "omni-tools": "dev-tools",
    "self-hosted-ai-starter-kit": "dev-tools",
    "system-prompts-and-models-of-ai-tools": "ki-ml",  # prompt collection
    "public-apis": "dev-tools",
    "register": "dev-tools",
    "framework": "dev-tools",
    "core-app": "dev-tools",
    "community": "dev-tools",
    "olivetin": "dev-tools",  # web UI for shell commands
    "agent": "dev-tools",  # autopilot code agent
    # CMS / link-in-bio / status / trackers
    "littlelink-server": "cms",
    "atomic-server": "cms",
    "waline": "cms",
    "isso": "cms",
    "slash": "cms",
    "smartstore": "e-commerce",
    "vrite": "cms",
    "vaahcms": "cms",
    "brightbean-studio": "social-media",  # social-media management platform
    "webstudio": "ssg",  # Webflow alternative website builder
    "learnhouse": "cms",  # learning / course platform
    "career-ops": "projektmanagement",  # AI job-search system
    # Communication / chat / video
    "spacebarchat": "kommunikation",
    "rocket-chat-electron": "kommunikation",
    "ethora": "kommunikation",
    "bark-server": "kommunikation",
    "toxic": "kommunikation",
    "baresip": "videokonferenzen",
    "switchai": "ki-ml",
    "server": "kommunikation",  # screego screen sharing
    "conduit": "ki-ml",  # OpenWebUI mobile client
    "insights-lm-public": "ki-ml",  # NotebookLM alternative
    "coze-loop": "ki-ml",  # AI Agent Optimisation
    "opensail": "ki-ml",  # AI agentic coding tool
    "db-gpt": "ki-ml",  # AI data assistant
    # DNS / ad-block
    "blocky": "dns-adblock",
    # Calendar / contacts / scheduling
    "cal-diy": "kalender",
    "manage-my-damn-life-nextjs": "kalender",
    "deck": "projektmanagement",  # Nextcloud Kanban board
    "contacts": "kalender",
    "calendar": "kalender",
    # File / storage
    "filebrowser": "cloud-speicher",
    "gokapi": "cloud-speicher",
    "gallery": "fotos",
    # GPS / maps
    "dawarich": "karten",
    "geopulse": "karten",
    # Misc backups / sync
    "borgmatic": "backup",
    # Health / fitness
    "juggluco": "notizen",
    # Server-tools / sandbox / proxy
    "microsandbox": "dev-tools",
    "sablier": "container",
    "portr": "vpn",
    "opentrashmail": "email-server",
    "bracket": "projektmanagement",  # self-hosted tournament system
    "oikos": "notizen",  # family planner
    # Database backup utilities — these *are* db-related, keep
    "databasus": "backup",
    # Media downloaders / RSS
    "magnetissimo": "medienserver",
    "bitmagnet": "medienserver",
    "fadcam": "video-audio",
    "stable-diffusion-android": "ki-ml",
    # Phishing / status page
    "pinry": "fotos",
    "foss-photo-libraries": "fotos",
    # Project mgmt / kanban / wiki
    "project-management": "projektmanagement",
    "trek": "projektmanagement",
    "docs": "wiki",
    "helpdesk": "crm",
    # AI / LLM stuff
    "langchain": "ki-ml",
    "langgraph": "ki-ml",
    "langfuse": "ki-ml",
    "khoj": "ki-ml",
    "llama-gpt": "ki-ml",
    "unsloth": "ki-ml",
    "local-deep-research": "ki-ml",
    "refact": "ki-ml",
    "continue": "dev-tools",
    "mlflow": "ki-ml",
}

# Slug overrides: leave 'tags' override empty for now. Future runs can
# extend; we only do the obvious wins this pass.

# Slugs whose simpleIconsSlug we want to add by hand (in addition to
# the KNOWN_SIMPLE_ICONS map, for entries that don't share a slug).
EXTRA_SIMPLE_ICONS: dict[str, str] = {
    "memos": "memos",
    "borgbackup": "borgbackup",
}

# ---------------------------------------------------------------------------
# Tagline cleanup
# ---------------------------------------------------------------------------
LEADING_BOILERPLATE = re.compile(
    r"^(?:[✨-➿\U0001F000-\U0001FAFF☀-⛿⌀-⏿⬀-⯿]+\s+|"
    r"(?:An?\s+(?:awesome|powerful|great|simple|complete|fully)?\s*open[\s-]source\s+)|"
    r"(?:Open[\s-]source\s+)|"
    r"(?:The\s+open[\s-]source\s+))",
    re.IGNORECASE,
)

def clean_tagline(t: str) -> str:
    """Trim leading boilerplate emoji + 'open-source' phrases, drop the
    auto-truncated '…' tail, cap at 110 chars at a sentence boundary."""
    s = (t or "").strip()
    # drop the dumb auto-truncated trailing ellipsis
    s = re.sub(r"\s*\.\.\.+$", "", s)
    # collapse double whitespace
    s = re.sub(r"\s+", " ", s).strip()
    # strip leading boilerplate up to one match
    m = LEADING_BOILERPLATE.match(s)
    if m:
        rest = s[m.end():]
        if rest:
            s = rest[0].upper() + rest[1:]
    if len(s) > 110:
        # cut at sentence boundary if possible
        dot = s.find(". ")
        if 30 < dot < 110:
            s = s[: dot + 1]
        else:
            cut = s.rfind(" ", 0, 107)
            s = (s[:cut] if cut > 60 else s[:107]) + "…"
    return s

# ---------------------------------------------------------------------------
# Simple icons resolver
# ---------------------------------------------------------------------------

def resolve_simple_icon(slug: str) -> str | None:
    if slug in EXTRA_SIMPLE_ICONS:
        return EXTRA_SIMPLE_ICONS[slug]
    base = re.sub(r"-(app|server|core|community|ce|oss|ng|ngx)$", "", slug)
    return KNOWN_SIMPLE_ICONS.get(slug) or KNOWN_SIMPLE_ICONS.get(base)

# ---------------------------------------------------------------------------
# Main pass
# ---------------------------------------------------------------------------

def main() -> None:
    src = AUTO_TS.read_text()
    m = re.search(
        r"/\*\s*AUTO_TOOLS_JSON\s*\n(.*?)\nEND_AUTO_TOOLS_JSON\s*\*/",
        src,
        re.DOTALL,
    )
    if not m:
        print("AUTO_TOOLS_JSON block not found", file=sys.stderr)
        sys.exit(1)
    tools = json.loads(m.group(1))

    cat_changes = 0
    tagline_changes = 0
    icon_added = 0

    for t in tools:
        slug = t.get("slug", "")

        # Category override
        if slug in SLUG_CATEGORY_OVERRIDES:
            new_cat = SLUG_CATEGORY_OVERRIDES[slug]
            if t.get("categories", [None])[0] != new_cat:
                t["categories"] = [new_cat]
                t["replacesTools"] = list(CATEGORY_REPLACES.get(new_cat, []))
                t["logoPlaceholderEmoji"] = CATEGORY_EMOJI.get(
                    new_cat, t.get("logoPlaceholderEmoji", "🔧")
                )
                cat_changes += 1

        # Tagline cleanup
        original_tag = t.get("tagline", "")
        new_tag = clean_tagline(original_tag)
        if new_tag != original_tag:
            t["tagline"] = new_tag
            tagline_changes += 1

        # simpleIconsSlug
        if not t.get("simpleIconsSlug"):
            si = resolve_simple_icon(slug)
            if si:
                t["simpleIconsSlug"] = si
                icon_added += 1

    # ── Re-emit auto-tools.ts ─────────────────────────────────────────
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

    print(f"Tools processed     : {len(tools)}")
    print(f"Category overrides  : {cat_changes}")
    print(f"Tagline cleanups    : {tagline_changes}")
    print(f"simpleIconsSlug add : {icon_added}")


if __name__ == "__main__":
    main()
