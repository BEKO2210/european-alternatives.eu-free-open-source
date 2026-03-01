#!/usr/bin/env python3
"""
Auto-Discovery Script for FOSS Tools.

Searches GitHub for high-quality open-source tools, categorizes them,
and generates TypeScript data files for the european-alternatives website.

Usage:
    python scripts/discover_tools.py

Environment Variables:
    GITHUB_TOKEN  - GitHub API token (required)
    MIN_STARS     - Minimum star count (default: 500)
    MAX_PER_RUN   - Maximum new tools per run (default: 25)
    DRY_RUN       - If "true", don't write files (default: "false")
    REPO_ROOT     - Path to repository root (default: ".")
"""

import json
import os
import re
import sys
import time
from datetime import datetime, timezone

import requests

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

GITHUB_TOKEN = os.environ.get("GITHUB_TOKEN", "")
MIN_STARS = int(os.environ.get("MIN_STARS", "500"))
MAX_PER_RUN = int(os.environ.get("MAX_PER_RUN", "25"))
DRY_RUN = os.environ.get("DRY_RUN", "false").lower() == "true"
REPO_ROOT = os.environ.get("REPO_ROOT", ".")

SEARCH_QUERIES = [
    "self-hosted open-source alternative stars:>500",
    "open-source privacy self-hosted stars:>500",
    "open-source devops infrastructure stars:>1000",
    "open-source monitoring observability stars:>1000",
    "open-source security privacy tool stars:>500",
    "open-source identity authentication sso stars:>500",
    "self-hosted communication messaging stars:>500",
    "open-source cms headless stars:>500",
    "open-source AI LLM self-hosted stars:>1000",
    "open-source database storage stars:>1000",
]

GITHUB_API = "https://api.github.com"
HEADERS = {
    "Accept": "application/vnd.github+json",
}
if GITHUB_TOKEN:
    HEADERS["Authorization"] = f"Bearer {GITHUB_TOKEN}"

# Repos to exclude (awesome-lists, tutorials, demos, etc.)
EXCLUDE_PATTERNS = [
    r"^awesome[-_]",
    r"[-_]awesome$",
    r"^tutorial",
    r"[-_]tutorial",
    r"^learn[-_]",
    r"[-_]learning",
    r"^demo[-_]",
    r"[-_]demo$",
    r"^example[-_]",
    r"[-_]examples?$",
    r"^sample[-_]",
    r"[-_]samples?$",
    r"^curated[-_]",
    r"^list[-_]of[-_]",
]

# Valid category slugs from categories.ts
VALID_CATEGORIES = [
    "betriebssysteme", "buerosoftware", "browser", "email-clients",
    "email-server", "cloud-speicher", "passwort-manager", "kommunikation",
    "videokonferenzen", "kalender", "suchmaschinen", "social-media",
    "code-hosting", "ci-cd", "container", "datenbanken", "cms",
    "e-commerce", "analytics", "monitoring", "vpn", "firewall", "ki-ml",
    "notizen", "projektmanagement", "video-audio", "bildbearbeitung",
    "zeiterfassung", "erp", "crm", "wiki", "backup", "dns-adblock",
    "objekt-speicher", "medienserver", "dev-tools", "backend-frameworks",
    "ssg", "karten",
]

# Mapping from keywords/topics to category slugs
KEYWORD_TO_CATEGORY = {
    # betriebssysteme
    "operating-system": "betriebssysteme", "linux-distribution": "betriebssysteme",
    "linux-distro": "betriebssysteme",
    # buerosoftware
    "office": "buerosoftware", "office-suite": "buerosoftware",
    "document-editor": "buerosoftware", "spreadsheet": "buerosoftware",
    "word-processor": "buerosoftware",
    # browser
    "browser": "browser", "web-browser": "browser",
    # email-clients
    "email-client": "email-clients", "mail-client": "email-clients",
    # email-server
    "email-server": "email-server", "mail-server": "email-server",
    "smtp": "email-server", "imap": "email-server",
    # cloud-speicher
    "cloud-storage": "cloud-speicher", "file-sync": "cloud-speicher",
    "file-sharing": "cloud-speicher", "file-storage": "cloud-speicher",
    "nextcloud": "cloud-speicher", "owncloud": "cloud-speicher",
    # passwort-manager
    "password-manager": "passwort-manager", "password": "passwort-manager",
    "credentials": "passwort-manager", "vault": "passwort-manager",
    # kommunikation
    "chat": "kommunikation", "messaging": "kommunikation",
    "messenger": "kommunikation", "communication": "kommunikation",
    "instant-messaging": "kommunikation", "team-chat": "kommunikation",
    "slack-alternative": "kommunikation",
    # videokonferenzen
    "video-conferencing": "videokonferenzen", "webrtc": "videokonferenzen",
    "video-chat": "videokonferenzen", "video-call": "videokonferenzen",
    "zoom-alternative": "videokonferenzen",
    # kalender
    "calendar": "kalender", "contacts": "kalender", "caldav": "kalender",
    "carddav": "kalender",
    # suchmaschinen
    "search-engine": "suchmaschinen", "metasearch": "suchmaschinen",
    # social-media
    "social-media": "social-media", "social-network": "social-media",
    "fediverse": "social-media", "mastodon": "social-media",
    "activitypub": "social-media", "microblogging": "social-media",
    "decentralized-social": "social-media",
    # code-hosting
    "git-server": "code-hosting", "code-hosting": "code-hosting",
    "forge": "code-hosting", "gitea": "code-hosting", "gitlab": "code-hosting",
    "code-review": "code-hosting",
    # ci-cd
    "ci-cd": "ci-cd", "continuous-integration": "ci-cd",
    "continuous-deployment": "ci-cd", "cicd": "ci-cd",
    "build-automation": "ci-cd", "pipeline": "ci-cd",
    # container
    "container": "container", "docker": "container",
    "kubernetes": "container", "k8s": "container",
    "container-orchestration": "container", "container-runtime": "container",
    # datenbanken
    "database": "datenbanken", "sql": "datenbanken", "nosql": "datenbanken",
    "postgresql": "datenbanken", "mysql": "datenbanken", "sqlite": "datenbanken",
    "time-series-database": "datenbanken", "graph-database": "datenbanken",
    # cms
    "cms": "cms", "content-management": "cms", "headless-cms": "cms",
    "website-builder": "cms", "blog-engine": "cms",
    # e-commerce
    "ecommerce": "e-commerce", "e-commerce": "e-commerce",
    "online-shop": "e-commerce", "shopping-cart": "e-commerce",
    # analytics
    "analytics": "analytics", "web-analytics": "analytics",
    "privacy-analytics": "analytics",
    # monitoring
    "monitoring": "monitoring", "observability": "monitoring",
    "alerting": "monitoring", "metrics": "monitoring", "apm": "monitoring",
    "uptime": "monitoring", "log-management": "monitoring",
    # vpn
    "vpn": "vpn", "wireguard": "vpn", "openvpn": "vpn",
    # firewall
    "firewall": "firewall", "network-security": "firewall",
    "ids": "firewall", "ips": "firewall", "waf": "firewall",
    # ki-ml
    "artificial-intelligence": "ki-ml", "machine-learning": "ki-ml",
    "deep-learning": "ki-ml", "llm": "ki-ml", "ai": "ki-ml",
    "nlp": "ki-ml", "neural-network": "ki-ml",
    "large-language-model": "ki-ml", "generative-ai": "ki-ml",
    "text-generation": "ki-ml", "image-generation": "ki-ml",
    # notizen
    "note-taking": "notizen", "notes": "notizen",
    "knowledge-management": "notizen", "knowledge-base": "notizen",
    "personal-knowledge": "notizen", "pkm": "notizen",
    # projektmanagement
    "project-management": "projektmanagement",
    "task-management": "projektmanagement", "kanban": "projektmanagement",
    "todo": "projektmanagement", "issue-tracker": "projektmanagement",
    "scrum": "projektmanagement",
    # video-audio
    "video-editing": "video-audio", "video-editor": "video-audio",
    "audio-editing": "video-audio", "audio-editor": "video-audio",
    "media-production": "video-audio",
    # bildbearbeitung
    "image-editing": "bildbearbeitung", "image-editor": "bildbearbeitung",
    "graphic-design": "bildbearbeitung", "vector-graphics": "bildbearbeitung",
    "photo-editing": "bildbearbeitung", "3d-modeling": "bildbearbeitung",
    # zeiterfassung
    "time-tracking": "zeiterfassung", "timesheet": "zeiterfassung",
    "time-management": "zeiterfassung",
    # erp
    "erp": "erp", "enterprise-resource-planning": "erp",
    "accounting": "erp", "invoicing": "erp",
    # crm
    "crm": "crm", "customer-relationship": "crm", "sales": "crm",
    # wiki
    "wiki": "wiki", "documentation": "wiki", "docs": "wiki",
    "knowledge-wiki": "wiki",
    # backup
    "backup": "backup", "disaster-recovery": "backup",
    "data-backup": "backup", "snapshot": "backup",
    # dns-adblock
    "dns": "dns-adblock", "adblock": "dns-adblock", "ad-blocker": "dns-adblock",
    "dns-server": "dns-adblock", "pihole": "dns-adblock",
    # objekt-speicher
    "object-storage": "objekt-speicher", "s3-compatible": "objekt-speicher",
    "s3": "objekt-speicher", "minio": "objekt-speicher",
    "distributed-storage": "objekt-speicher",
    # medienserver
    "media-server": "medienserver", "plex-alternative": "medienserver",
    "music-server": "medienserver", "video-streaming": "medienserver",
    "media-streaming": "medienserver",
    # dev-tools
    "ide": "dev-tools", "code-editor": "dev-tools",
    "development-tools": "dev-tools", "developer-tools": "dev-tools",
    "terminal": "dev-tools", "text-editor": "dev-tools",
    # backend-frameworks
    "backend": "backend-frameworks", "api-framework": "backend-frameworks",
    "baas": "backend-frameworks", "backend-as-a-service": "backend-frameworks",
    "authentication": "backend-frameworks", "sso": "backend-frameworks",
    "identity": "backend-frameworks", "oauth": "backend-frameworks",
    "auth": "backend-frameworks",
    # ssg
    "static-site-generator": "ssg", "static-site": "ssg",
    "jamstack": "ssg",
    # karten
    "maps": "karten", "geolocation": "karten",
    "openstreetmap": "karten", "gis": "karten", "geocoding": "karten",
}

# Description keywords (lower priority - used when topics don't match)
DESC_KEYWORD_TO_CATEGORY = {
    "monitoring": "monitoring", "dashboard": "monitoring",
    "database": "datenbanken", "sql": "datenbanken",
    "chat": "kommunikation", "messaging": "kommunikation",
    "email": "email-server", "mail server": "email-server",
    "file sync": "cloud-speicher", "cloud storage": "cloud-speicher",
    "password": "passwort-manager",
    "vpn": "vpn", "wireguard": "vpn",
    "firewall": "firewall",
    "container": "container", "docker": "container", "kubernetes": "container",
    "ci/cd": "ci-cd", "continuous integration": "ci-cd",
    "cms": "cms", "content management": "cms",
    "ecommerce": "e-commerce", "online shop": "e-commerce",
    "analytics": "analytics", "web analytics": "analytics",
    "machine learning": "ki-ml", "artificial intelligence": "ki-ml",
    "llm": "ki-ml", "language model": "ki-ml",
    "note": "notizen", "knowledge management": "notizen",
    "project management": "projektmanagement", "kanban": "projektmanagement",
    "task management": "projektmanagement",
    "video edit": "video-audio", "audio edit": "video-audio",
    "image edit": "bildbearbeitung", "photo edit": "bildbearbeitung",
    "graphic design": "bildbearbeitung",
    "time track": "zeiterfassung",
    "erp": "erp", "accounting": "erp",
    "crm": "crm",
    "wiki": "wiki", "documentation platform": "wiki",
    "backup": "backup",
    "dns": "dns-adblock", "ad block": "dns-adblock",
    "object storage": "objekt-speicher", "s3 compatible": "objekt-speicher",
    "media server": "medienserver",
    "ide": "dev-tools", "code editor": "dev-tools",
    "api": "backend-frameworks", "backend": "backend-frameworks",
    "authentication": "backend-frameworks", "auth": "backend-frameworks",
    "sso": "backend-frameworks", "identity": "backend-frameworks",
    "static site": "ssg",
    "map": "karten", "geolocation": "karten",
    "calendar": "kalender",
    "search engine": "suchmaschinen",
    "social network": "social-media", "fediverse": "social-media",
    "git server": "code-hosting", "code hosting": "code-hosting",
    "browser": "browser",
    "office": "buerosoftware",
    "operating system": "betriebssysteme",
    "self-hosted": None,
    "selfhosted": None,
    "self hosted": None,
    "privacy": None,
    "open source": None,
    "open-source": None,
}

# Emoji per category
CATEGORY_EMOJI = {
    "betriebssysteme": "🖥️", "buerosoftware": "📄", "browser": "🌐",
    "email-clients": "📧", "email-server": "📮", "cloud-speicher": "☁️",
    "passwort-manager": "🔑", "kommunikation": "💬", "videokonferenzen": "📹",
    "kalender": "📅", "suchmaschinen": "🔍", "social-media": "📱",
    "code-hosting": "🗃️", "ci-cd": "🔄", "container": "📦",
    "datenbanken": "🗄️", "cms": "🌍", "e-commerce": "🛒",
    "analytics": "📊", "monitoring": "📈", "vpn": "🛡️",
    "firewall": "🔥", "ki-ml": "🤖", "notizen": "📝",
    "projektmanagement": "✅", "video-audio": "🎬", "bildbearbeitung": "🎨",
    "zeiterfassung": "⏱️", "erp": "🏭", "crm": "🤝",
    "wiki": "📚", "backup": "💾", "dns-adblock": "🚫",
    "objekt-speicher": "🗃️", "medienserver": "🎵", "dev-tools": "⌨️",
    "backend-frameworks": "⚙️", "ssg": "🚀", "karten": "🗺️",
}

# replacesTools per category (from categories.ts replacesCategory)
CATEGORY_REPLACES = {
    "betriebssysteme": ["Windows", "macOS"],
    "buerosoftware": ["Microsoft Office", "Google Docs"],
    "browser": ["Chrome", "Edge"],
    "email-clients": ["Outlook", "Apple Mail"],
    "email-server": ["Gmail-Server", "Exchange"],
    "cloud-speicher": ["Google Drive", "Dropbox", "OneDrive"],
    "passwort-manager": ["LastPass", "1Password"],
    "kommunikation": ["WhatsApp", "Slack", "Microsoft Teams"],
    "videokonferenzen": ["Zoom", "Google Meet", "Teams"],
    "kalender": ["Google Calendar", "iCloud"],
    "suchmaschinen": ["Google", "Bing"],
    "social-media": ["Twitter/X", "Instagram", "Facebook"],
    "code-hosting": ["GitHub", "Bitbucket", "Azure DevOps"],
    "ci-cd": ["GitHub Actions", "Jenkins", "CircleCI"],
    "container": ["Docker Hub", "Kubernetes EKS"],
    "datenbanken": ["Oracle", "MSSQL"],
    "cms": ["WordPress.com", "Squarespace", "Wix"],
    "e-commerce": ["Shopify", "Magento Commerce"],
    "analytics": ["Google Analytics", "Mixpanel"],
    "monitoring": ["Datadog", "New Relic", "PagerDuty"],
    "vpn": ["NordVPN", "ExpressVPN"],
    "firewall": ["Cisco", "proprietary"],
    "ki-ml": ["ChatGPT API", "Midjourney", "DALL-E"],
    "notizen": ["Notion", "Evernote", "Obsidian"],
    "projektmanagement": ["Asana", "Monday", "Jira", "Trello"],
    "video-audio": ["Adobe Premiere", "Final Cut", "Audition"],
    "bildbearbeitung": ["Adobe Photoshop", "Illustrator", "Figma"],
    "zeiterfassung": ["Harvest", "Toggl", "Clockify Pro"],
    "erp": ["SAP Business One", "Oracle ERP"],
    "crm": ["Salesforce", "HubSpot"],
    "wiki": ["Confluence", "Notion", "GitBook"],
    "backup": ["Backblaze", "Acronis"],
    "dns-adblock": ["Google DNS", "kommerzielle Filter"],
    "objekt-speicher": ["Amazon S3", "Google Cloud Storage"],
    "medienserver": ["Plex Premium", "Emby"],
    "dev-tools": ["JetBrains Suite", "Visual Studio"],
    "backend-frameworks": ["Firebase", "Supabase Pro"],
    "ssg": ["Webflow", "Framer"],
    "karten": ["Google Maps API", "Mapbox"],
}


# ---------------------------------------------------------------------------
# Helper Functions
# ---------------------------------------------------------------------------


def log(msg: str) -> None:
    """Print a timestamped log message."""
    ts = datetime.now(timezone.utc).strftime("%H:%M:%S")
    print(f"[{ts}] {msg}", flush=True)


def github_request(url: str, params: dict | None = None, max_retries: int = 3) -> requests.Response | None:
    """Make a GitHub API request with rate-limit handling and retries."""
    for attempt in range(1, max_retries + 1):
        try:
            resp = requests.get(url, headers=HEADERS, params=params, timeout=30)
        except requests.RequestException as exc:
            log(f"  Request error (attempt {attempt}/{max_retries}): {exc}")
            if attempt < max_retries:
                time.sleep(2 * attempt)
            continue

        # Check rate limit
        remaining = resp.headers.get("X-RateLimit-Remaining")
        if remaining is not None:
            log(f"  Rate limit remaining: {remaining}")

        if resp.status_code == 200:
            return resp

        if resp.status_code == 403:
            reset_ts = resp.headers.get("X-RateLimit-Reset")
            if reset_ts:
                wait_until = int(reset_ts) + 5
                now = int(time.time())
                wait_seconds = max(wait_until - now, 1)
                log(f"  Rate limited (403). Waiting {wait_seconds}s until reset...")
                time.sleep(wait_seconds)
            else:
                log(f"  403 Forbidden (attempt {attempt}/{max_retries}). Waiting 60s...")
                time.sleep(60)
            continue

        if resp.status_code == 422:
            log(f"  Unprocessable Entity (422) - query may be too complex. Skipping.")
            return None

        log(f"  HTTP {resp.status_code} (attempt {attempt}/{max_retries})")
        if attempt < max_retries:
            time.sleep(2 * attempt)

    log("  Max retries reached. Skipping request.")
    return None


def is_excluded_repo(name: str) -> bool:
    """Check if repo name matches exclusion patterns."""
    name_lower = name.lower()
    for pattern in EXCLUDE_PATTERNS:
        if re.search(pattern, name_lower):
            return True
    return False


def make_slug(name: str) -> str:
    """Convert a repository name to a URL-safe slug."""
    slug = name.lower()
    slug = re.sub(r"[^a-z0-9]+", "-", slug)
    slug = slug.strip("-")
    return slug


def categorize_repo(topics: list[str], name: str, description: str) -> str | None:
    """Determine the best category for a repo based on topics, name, and description."""
    category_scores: dict[str, int] = {}

    # Score from topics (highest weight)
    for topic in topics:
        topic_lower = topic.lower()
        cat = KEYWORD_TO_CATEGORY.get(topic_lower)
        if cat:
            category_scores[cat] = category_scores.get(cat, 0) + 3

    # Score from repo name
    name_lower = name.lower()
    for keyword, cat in KEYWORD_TO_CATEGORY.items():
        if cat and keyword in name_lower:
            category_scores[cat] = category_scores.get(cat, 0) + 2

    # Score from description (lowest weight)
    desc_lower = (description or "").lower()
    for keyword, cat in DESC_KEYWORD_TO_CATEGORY.items():
        if cat and keyword in desc_lower:
            category_scores[cat] = category_scores.get(cat, 0) + 1

    if not category_scores:
        return None

    # Return highest-scoring category
    best = max(category_scores, key=lambda c: category_scores[c])
    return best


def detect_platforms(topics: list[str], description: str) -> list[str]:
    """Detect platforms from topics and description."""
    platforms = []
    combined = " ".join(topics).lower() + " " + (description or "").lower()

    if "web" in topics or "webapp" in topics or "web-app" in combined:
        platforms.append("web")
    if "linux" in combined:
        platforms.append("linux")
    if "windows" in combined:
        platforms.append("windows")
    if "macos" in combined or "mac" in combined or "darwin" in combined:
        platforms.append("macos")
    if "android" in combined:
        platforms.append("android")
    if "ios" in combined or "iphone" in combined:
        platforms.append("ios")
    if "docker" in combined or "container" in combined:
        platforms.append("docker")

    # Default: assume linux + docker for self-hosted tools
    if not platforms:
        platforms = ["linux", "docker"]
    elif "linux" not in platforms:
        platforms.insert(0, "linux")

    return platforms


def detect_difficulty(stars: int, topics: list[str], description: str) -> str:
    """Estimate difficulty based on project characteristics."""
    combined = " ".join(topics).lower() + " " + (description or "").lower()

    easy_keywords = ["easy", "simple", "lightweight", "minimal", "beginner"]
    hard_keywords = ["enterprise", "complex", "advanced", "cluster", "distributed"]

    if any(kw in combined for kw in easy_keywords) or stars > 30000:
        return "einfach"
    if any(kw in combined for kw in hard_keywords):
        return "fortgeschritten"
    return "mittel"


def get_existing_slugs_from_ts_files(repo_root: str) -> set[str]:
    """Read all .ts files in src/data/tools/ to extract existing slugs."""
    slugs = set()
    tools_dir = os.path.join(repo_root, "src", "data", "tools")
    if not os.path.isdir(tools_dir):
        return slugs

    for filename in os.listdir(tools_dir):
        if not filename.endswith(".ts") or filename == "index.ts":
            continue
        filepath = os.path.join(tools_dir, filename)
        try:
            content = open(filepath, encoding="utf-8").read()
            # Match slug: 'some-slug' or slug: "some-slug"
            for match in re.finditer(r"slug:\s*['\"]([^'\"]+)['\"]", content):
                slugs.add(match.group(1))
        except (OSError, UnicodeDecodeError):
            pass

    return slugs


def load_existing_slugs_json(repo_root: str) -> set[str]:
    """Load slugs from existing_slugs.json."""
    path = os.path.join(repo_root, "scripts", "existing_slugs.json")
    if not os.path.isfile(path):
        return set()
    try:
        with open(path, encoding="utf-8") as f:
            data = json.load(f)
        return set(data) if isinstance(data, list) else set()
    except (json.JSONDecodeError, OSError):
        return set()


def save_existing_slugs_json(repo_root: str, slugs: set[str]) -> None:
    """Save slugs to existing_slugs.json."""
    path = os.path.join(repo_root, "scripts", "existing_slugs.json")
    with open(path, "w", encoding="utf-8") as f:
        json.dump(sorted(slugs), f, indent=2, ensure_ascii=False)
        f.write("\n")


def load_auto_tools_json(repo_root: str) -> list[dict]:
    """Load previously auto-discovered tools from the JSON block in auto-tools.ts."""
    path = os.path.join(repo_root, "src", "data", "tools", "auto-tools.ts")
    if not os.path.isfile(path):
        return []
    try:
        content = open(path, encoding="utf-8").read()
        match = re.search(
            r"/\*\s*AUTO_TOOLS_JSON\s*\n(.*?)\nEND_AUTO_TOOLS_JSON\s*\*/",
            content,
            re.DOTALL,
        )
        if match:
            return json.loads(match.group(1))
    except (OSError, json.JSONDecodeError, UnicodeDecodeError) as exc:
        log(f"Warning: Could not parse existing auto-tools.ts JSON block: {exc}")
    return []


def generate_auto_tools_ts(tools: list[dict], repo_root: str) -> None:
    """Generate / overwrite auto-tools.ts with the full set of tools."""
    path = os.path.join(repo_root, "src", "data", "tools", "auto-tools.ts")

    # Build JSON block for next run
    json_block = json.dumps(tools, indent=2, ensure_ascii=False)

    # Build TypeScript
    lines = [
        "import type { Tool } from '../types';",
        "",
        f"/* AUTO_TOOLS_JSON",
        json_block,
        "END_AUTO_TOOLS_JSON */",
        "",
        "export const autoDiscoveredTools: Tool[] = [",
    ]

    for tool in tools:
        lines.append("  {")
        lines.append(f"    id: '{_ts_escape(tool['id'])}',")
        lines.append(f"    name: '{_ts_escape(tool['name'])}',")
        lines.append(f"    slug: '{_ts_escape(tool['slug'])}',")
        lines.append(f"    tagline: '{_ts_escape(tool['tagline'])}',")
        lines.append(f"    description:")
        lines.append(f"      '{_ts_escape(tool['description'])}',")
        lines.append(f"    website: '{_ts_escape(tool['website'])}',")
        if tool.get("github"):
            lines.append(f"    github: '{_ts_escape(tool['github'])}',")
        lines.append(f"    license: '{_ts_escape(tool['license'])}',")
        lines.append(f"    categories: {_ts_string_array(tool['categories'])},")
        lines.append(f"    replacesTools: {_ts_string_array(tool['replacesTools'])},")
        lines.append(f"    selfHostable: {'true' if tool['selfHostable'] else 'false'},")
        if tool.get("hostedService"):
            lines.append(f"    hostedService: '{_ts_escape(tool['hostedService'])}',")
        if tool.get("logoPlaceholderEmoji"):
            lines.append(f"    logoPlaceholderEmoji: '{tool['logoPlaceholderEmoji']}',")
        if tool.get("stars") is not None:
            lines.append(f"    stars: {tool['stars']},")
        lines.append(f"    lastUpdated: '{tool['lastUpdated']}',")
        lines.append(f"    tags: {_ts_string_array(tool['tags'])},")
        lines.append(f"    difficulty: '{tool['difficulty']}',")
        lines.append(f"    platforms: {_ts_string_array(tool['platforms'])},")
        lines.append(f"    featured: {'true' if tool['featured'] else 'false'},")
        lines.append(f"    addedDate: '{tool['addedDate']}',")
        lines.append("  },")

    lines.append("];")
    lines.append("")

    with open(path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))


def _ts_escape(s: str) -> str:
    """Escape a string for use in a TypeScript single-quoted string."""
    s = str(s)
    s = s.replace("\\", "\\\\")
    s = s.replace("'", "\\'")
    s = s.replace("\n", " ")
    s = s.replace("\r", "")
    return s


def _ts_string_array(items: list) -> str:
    """Format a list of strings as a TypeScript array literal."""
    escaped = [f"'{_ts_escape(item)}'" for item in items]
    return "[" + ", ".join(escaped) + "]"


def patch_index_ts(repo_root: str) -> None:
    """Add auto-tools import and spread to index.ts if not already present."""
    path = os.path.join(repo_root, "src", "data", "tools", "index.ts")
    with open(path, encoding="utf-8") as f:
        content = f.read()

    changed = False

    # Add import if missing
    import_line = "import { autoDiscoveredTools } from './auto-tools';"
    if "autoDiscoveredTools" not in content:
        # Insert import after the last existing import
        last_import_idx = content.rfind("import ")
        if last_import_idx >= 0:
            end_of_line = content.index("\n", last_import_idx)
            content = content[:end_of_line + 1] + import_line + "\n" + content[end_of_line + 1:]
        else:
            content = import_line + "\n" + content
        changed = True

    # Add spread if missing
    if "...autoDiscoveredTools" not in content:
        # Find the closing of the allTools array and insert before it
        bracket_match = re.search(r"(\.\.\.kartenTools,?\s*)\n(\];)", content)
        if bracket_match:
            insert_pos = bracket_match.end(1)
            content = content[:insert_pos] + "\n  ...autoDiscoveredTools," + content[insert_pos:]
            changed = True
        else:
            # Fallback: find last spread and add after it
            last_spread = None
            for m in re.finditer(r"^\s*\.\.\.\w+Tools,?$", content, re.MULTILINE):
                last_spread = m
            if last_spread:
                insert_pos = last_spread.end()
                content = content[:insert_pos] + "\n  ...autoDiscoveredTools," + content[insert_pos:]
                changed = True

    if changed:
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        log("Patched index.ts with autoDiscoveredTools import + spread.")
    else:
        log("index.ts already contains autoDiscoveredTools. No patch needed.")


def write_count_file(repo_root: str, count: int) -> None:
    """Write the new tools count to a file for the workflow to read."""
    path = os.path.join(repo_root, "scripts", "new_tools_count.txt")
    with open(path, "w") as f:
        f.write(str(count))


# ---------------------------------------------------------------------------
# Main Discovery Logic
# ---------------------------------------------------------------------------


def search_github_repos() -> dict[str, dict]:
    """Search GitHub using predefined queries. Returns dict keyed by full_name."""
    repos: dict[str, dict] = {}

    for i, query in enumerate(SEARCH_QUERIES):
        log(f"Query {i + 1}/{len(SEARCH_QUERIES)}: {query}")

        # Fetch first 2 pages (up to 200 results per query)
        for page in range(1, 3):
            resp = github_request(
                f"{GITHUB_API}/search/repositories",
                params={
                    "q": query,
                    "sort": "stars",
                    "order": "desc",
                    "per_page": 100,
                    "page": page,
                },
            )
            if not resp:
                break

            data = resp.json()
            items = data.get("items", [])
            log(f"  Page {page}: {len(items)} results (total: {data.get('total_count', '?')})")

            for repo in items:
                full_name = repo["full_name"]
                if full_name not in repos:
                    repos[full_name] = repo

            if len(items) < 100:
                break

        # 2-second pause between queries
        if i < len(SEARCH_QUERIES) - 1:
            time.sleep(2)

    log(f"Total unique repos found: {len(repos)}")
    return repos


def filter_and_categorize(
    repos: dict[str, dict],
    known_slugs: set[str],
) -> list[dict]:
    """Filter repos and convert to tool data dicts."""
    today = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    new_tools: list[dict] = []

    for full_name, repo in repos.items():
        name = repo["name"]
        stars = repo.get("stargazers_count", 0)
        archived = repo.get("archived", False)
        disabled = repo.get("disabled", False)
        description = repo.get("description") or ""
        topics = repo.get("topics") or []
        license_info = repo.get("license") or {}
        license_spdx = license_info.get("spdx_id", "Unknown")
        if license_spdx == "NOASSERTION":
            license_spdx = "Unknown"
        homepage = repo.get("homepage") or ""
        pushed_at = repo.get("pushed_at", today)
        html_url = repo.get("html_url", f"https://github.com/{full_name}")

        # --- Filters ---
        if archived or disabled:
            continue
        if stars < MIN_STARS:
            continue
        if len(description.strip()) < 15:
            continue
        if is_excluded_repo(name):
            continue

        slug = make_slug(name)
        if slug in known_slugs:
            continue

        # --- Categorize ---
        category = categorize_repo(topics, name, description)
        if not category:
            continue

        # --- Build tool data ---
        # Clean name: capitalize, remove common suffixes
        clean_name = name.replace("-", " ").replace("_", " ")
        clean_name = " ".join(w.capitalize() for w in clean_name.split())

        # Tagline: first sentence or truncated description
        tagline = description.strip()
        if len(tagline) > 120:
            # Try to cut at sentence boundary
            dot_pos = tagline.find(". ")
            if 30 < dot_pos < 120:
                tagline = tagline[:dot_pos + 1]
            else:
                tagline = tagline[:117] + "..."

        # Website
        website = homepage.strip() if homepage.strip() else html_url

        # Tags from topics (max 7, cleaned)
        tags = [t.lower().replace(" ", "-") for t in topics[:7]]
        if not tags:
            tags = [make_slug(w) for w in description.split()[:3]]

        tool_data = {
            "id": slug,
            "name": clean_name,
            "slug": slug,
            "tagline": tagline,
            "description": description.strip(),
            "website": website,
            "github": html_url,
            "license": license_spdx if license_spdx != "Unknown" else "MIT",
            "categories": [category],
            "replacesTools": CATEGORY_REPLACES.get(category, []),
            "selfHostable": True,
            "logoPlaceholderEmoji": CATEGORY_EMOJI.get(category, "🔧"),
            "stars": stars,
            "lastUpdated": pushed_at[:10] if pushed_at else today,
            "tags": tags,
            "difficulty": detect_difficulty(stars, topics, description),
            "platforms": detect_platforms(topics, description),
            "featured": False,
            "addedDate": today,
        }

        new_tools.append(tool_data)
        known_slugs.add(slug)

        if len(new_tools) >= MAX_PER_RUN:
            log(f"Reached MAX_PER_RUN limit ({MAX_PER_RUN}).")
            break

    # Sort by stars descending
    new_tools.sort(key=lambda t: t.get("stars", 0), reverse=True)
    return new_tools


def main() -> None:
    log("=" * 60)
    log("FOSS Tool Auto-Discovery Script")
    log("=" * 60)
    log(f"MIN_STARS={MIN_STARS}  MAX_PER_RUN={MAX_PER_RUN}  DRY_RUN={DRY_RUN}")
    log(f"REPO_ROOT={os.path.abspath(REPO_ROOT)}")

    if not GITHUB_TOKEN:
        log("WARNING: No GITHUB_TOKEN set. API rate limits will be very restrictive.")

    # 1. Collect all known slugs
    log("Loading existing slugs...")
    slugs_from_ts = get_existing_slugs_from_ts_files(REPO_ROOT)
    slugs_from_json = load_existing_slugs_json(REPO_ROOT)
    known_slugs = slugs_from_ts | slugs_from_json
    log(f"Known slugs: {len(known_slugs)} ({len(slugs_from_ts)} from .ts, {len(slugs_from_json)} from JSON)")

    # 2. Load previously auto-discovered tools
    existing_auto_tools = load_auto_tools_json(REPO_ROOT)
    log(f"Existing auto-discovered tools: {len(existing_auto_tools)}")

    # Also add their slugs to known set
    for t in existing_auto_tools:
        known_slugs.add(t["slug"])

    # 3. Search GitHub
    log("Searching GitHub for FOSS tools...")
    repos = search_github_repos()

    # 4. Filter and categorize
    log("Filtering and categorizing repos...")
    new_tools = filter_and_categorize(repos, known_slugs)
    log(f"New tools discovered: {len(new_tools)}")

    for t in new_tools:
        log(f"  + {t['name']} ({t['slug']}) [{t['categories'][0]}] ★{t['stars']}")

    # 5. Write results
    write_count_file(REPO_ROOT, len(new_tools))

    if DRY_RUN:
        log("DRY RUN — not writing files.")
        return

    if len(new_tools) == 0:
        log("No new tools found. Nothing to update.")
        return

    # Merge: existing + new
    all_auto_tools = existing_auto_tools + new_tools
    log(f"Total auto-discovered tools (existing + new): {len(all_auto_tools)}")

    # 6. Generate auto-tools.ts
    log("Generating auto-tools.ts...")
    generate_auto_tools_ts(all_auto_tools, REPO_ROOT)

    # 7. Patch index.ts
    log("Patching index.ts...")
    patch_index_ts(REPO_ROOT)

    # 8. Update existing_slugs.json
    new_slugs_for_json = slugs_from_json | {t["slug"] for t in new_tools}
    save_existing_slugs_json(REPO_ROOT, new_slugs_for_json)
    log(f"Updated existing_slugs.json with {len(new_slugs_for_json)} slugs.")

    log("=" * 60)
    log(f"Done! {len(new_tools)} new tools added.")
    log("=" * 60)


if __name__ == "__main__":
    main()
