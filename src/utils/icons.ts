import * as SimpleIcons from 'simple-icons';

export const TOOL_ICON_MAP: Record<string, string> = {
  // Betriebssysteme
  'ubuntu': 'ubuntu',
  'debian': 'debian',
  'fedora': 'fedora',
  'linux-mint': 'linuxmint',
  'nixos': 'nixos',
  'arch-linux': 'archlinux',
  'opensuse': 'opensuse',
  // Office
  'libreoffice': 'libreoffice',
  'onlyoffice': 'onlyoffice',
  'collabora': 'collaboraonline',
  // Browser
  'firefox': 'firefoxbrowser',
  'brave': 'brave',
  'chromium': 'chromium',
  'tor-browser': 'torbrowser',
  // Email
  'thunderbird': 'thunderbird',
  'protonmail': 'protonmail',
  'tutanota': 'tutanota',
  // Cloud/Storage
  'nextcloud': 'nextcloud',
  'seafile': 'seafile',
  // Password
  'bitwarden': 'bitwarden',
  'keepass': 'keepass',
  'vaultwarden': 'vaultwarden',
  // Chat/Comm
  'matrix': 'matrix',
  'element': 'element',
  'signal': 'signal',
  'telegram': 'telegram',
  'mattermost': 'mattermost',
  'rocket-chat': 'rocketchat',
  'zulip': 'zulip',
  // Git/Code
  'gitea': 'gitea',
  'gitlab': 'gitlab',
  'forgejo': 'forgejo',
  'github': 'github',
  'codeberg': 'codeberg',
  // CI/CD
  'jenkins': 'jenkins',
  'drone': 'drone',
  // Container
  'docker': 'docker',
  'podman': 'podman',
  'kubernetes': 'kubernetes',
  'portainer': 'portainer',
  'rancher': 'rancher',
  // Datenbanken
  'postgresql': 'postgresql',
  'mysql': 'mysql',
  'mariadb': 'mariadb',
  'sqlite': 'sqlite',
  'clickhouse': 'clickhouse',
  // CMS
  'wordpress': 'wordpress',
  'ghost': 'ghost',
  'drupal': 'drupal',
  'joomla': 'joomla',
  'strapi': 'strapi',
  'directus': 'directus',
  // Analytics
  'matomo': 'matomo',
  'plausible': 'plausible',
  'umami': 'umami',
  // Monitoring
  'prometheus': 'prometheus',
  'grafana': 'grafana',
  // VPN
  'wireguard': 'wireguard',
  'openvpn': 'openvpn',
  // KI/ML
  'ollama': 'ollama',
  'pytorch': 'pytorch',
  'tensorflow': 'tensorflow',
  'huggingface': 'huggingface',
  'langchain': 'langchain',
  // Notizen
  'obsidian': 'obsidian',
  'joplin': 'joplin',
  'logseq': 'logseq',
  'notion': 'notion',
  // Projektmanagement
  'jira': 'jira',
  'openproject': 'openproject',
  'plane': 'plane',
  'trello': 'trello',
  // Video/Audio
  'vlc': 'vlc',
  'kdenlive': 'kdenlive',
  'obs-studio': 'obsstudio',
  'ffmpeg': 'ffmpeg',
  'audacity': 'audacity',
  // Bildbearbeitung
  'gimp': 'gimp',
  'inkscape': 'inkscape',
  'krita': 'krita',
  'blender': 'blender',
  // Dev-Tools
  'vim': 'vim',
  'neovim': 'neovim',
  'emacs': 'gnuemacs',
  'git': 'git',
  // Suchmaschinen
  'searxng': 'searxng',
  // SSG
  'astro': 'astro',
  'hugo': 'hugo',
  'jekyll': 'jekyll',
  'gatsby': 'gatsby',
  'eleventy': 'eleventy',
  'nuxt': 'nuxt',
  // Backend
  'supabase': 'supabase',
  'pocketbase': 'pocketbase',
  'appwrite': 'appwrite',
  'firebase': 'firebase',
  // E-Commerce
  'woocommerce': 'woocommerce',
  // ERP
  'odoo': 'odoo',
  'erpnext': 'erpnext',
  // Wiki
  'confluence': 'confluence',
  'bookstack': 'bookstack',
  // Backup
  'duplicati': 'duplicati',
  // DNS
  'pihole': 'pihole',
  'adguard': 'adguard',
  // Object Storage
  'ceph': 'ceph',
  // Medienserver
  'jellyfin': 'jellyfin',
  'plex': 'plex',
  'emby': 'emby',
  'kodi': 'kodi',
  // Fotos
  'immich': 'immich',
  'ente': 'ente',
  'piwigo': 'piwigo',
  // Karten
  'openstreetmap': 'openstreetmap',
  'maplibre': 'maplibre',
  // Videokonferenzen
  'jitsi': 'jitsi',
  'bigbluebutton': 'bigbluebutton',
  // Social
  'mastodon': 'mastodon',
  'pixelfed': 'pixelfed',
  'peertube': 'peertube',
  'lemmy': 'lemmy',
  'diaspora': 'diaspora',
  // Auto-discovered (SimpleIcons verfuegbar)
  'coolify': 'coolify',
  'nhost': 'nhost',
  'apostrophe': 'apostrophe',
  'payload': 'payloadcms',
  'tinacms': 'tina',
  'grafana-operator': 'grafana',
};

export function getSimpleIcon(toolSlug: string): { svg: string; color: string } | null {
  const iconSlug = TOOL_ICON_MAP[toolSlug];
  if (!iconSlug) return null;

  const key = `si${iconSlug.charAt(0).toUpperCase()}${iconSlug.slice(1)}`;
  const icon = (SimpleIcons as Record<string, { svg: string; hex: string }>)[key];
  if (!icon) return null;

  return { svg: icon.svg, color: `#${icon.hex}` };
}

export function getIconForTool(toolSlug: string, emoji: string): string {
  const icon = getSimpleIcon(toolSlug);
  if (!icon) return emoji;
  return icon.svg;
}
