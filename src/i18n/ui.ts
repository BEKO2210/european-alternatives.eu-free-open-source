export const languages = {
  de: 'Deutsch',
  en: 'English',
} as const;

export const defaultLang = 'de' as const;

export const ui = {
  de: {
    // Navigation
    'nav.categories': 'Kategorien',
    'nav.tools': 'Tools',
    'nav.comparison': 'Vergleich',
    'nav.guides': 'Guides',
    'nav.about': 'Über uns',
    'nav.search': 'Suche...',
    'nav.searchOpen': 'Suche öffnen (Strg+K)',
    'nav.themeToggle': 'Farbschema wechseln',
    'nav.menuOpen': 'Menü öffnen',
    'nav.home': 'FOSS Alternatives Startseite',
    'nav.mainNav': 'Hauptnavigation',

    // Navigation hrefs (path after base)
    'nav.href.categories': 'kategorien/',
    'nav.href.tools': 'tools/',
    'nav.href.comparison': 'vergleich/',
    'nav.href.guides': 'selbst-hosten/',
    'nav.href.about': 'ueber-uns/',

    // Footer
    'footer.tagline': 'Deine Freiheit. Dein Code. Deine Zukunft.',
    'footer.subtitle': 'Kostenlose Open-Source-Alternativen zu proprietärer Software.',
    'footer.navigation': 'Navigation',
    'footer.categories': 'Kategorien',
    'footer.allTools': 'Alle Tools',
    'footer.comparison': 'Vergleich',
    'footer.selfHost': 'Selbst hosten',
    'footer.licenseOverview': 'Lizenzübersicht',
    'footer.aboutUs': 'Über uns',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutz',
    'footer.contribute': 'Mitmachen',
    'footer.contributeText': 'Ein Tool fehlt? Daten veraltet? Hilf mit, diese Sammlung aktuell und vollständig zu halten!',
    'footer.suggestTool': 'Tool vorschlagen',
    'footer.viewOnGithub': 'Auf GitHub ansehen',
    'footer.license': 'Inhalt: CC BY-SA 4.0 · Code: MIT',

    // Footer hrefs (path after base)
    'footer.href.categories': 'kategorien/',
    'footer.href.tools': 'tools/',
    'footer.href.comparison': 'vergleich/',
    'footer.href.selfHost': 'selbst-hosten/',
    'footer.href.licenseOverview': 'lizenzuebersicht/',
    'footer.href.about': 'ueber-uns/',
    'footer.href.imprint': 'impressum/',
    'footer.href.privacy': 'datenschutz/',
    'footer.href.contribute': 'mitmachen/',

    // BaseLayout
    'layout.skipToContent': 'Zum Inhalt springen',
    'layout.backToTop': 'Zurück nach oben',
    'layout.defaultDescription': 'FOSS Alternatives – Deine Freiheit. Dein Code. Deine Zukunft. Finde kostenlose Open-Source-Alternativen zu proprietärer Software.',

    // ToolCard
    'tool.selfHostable': 'Selbst hostbar',
    'tool.lastUpdated': 'Zuletzt:',
    'tool.viewDetails': 'Details ansehen →',
    'tool.months.0': 'Jan',
    'tool.months.1': 'Feb',
    'tool.months.2': 'Mär',
    'tool.months.3': 'Apr',
    'tool.months.4': 'Mai',
    'tool.months.5': 'Jun',
    'tool.months.6': 'Jul',
    'tool.months.7': 'Aug',
    'tool.months.8': 'Sep',
    'tool.months.9': 'Okt',
    'tool.months.10': 'Nov',
    'tool.months.11': 'Dez',

    // ToolDetail
    'detail.home': 'Startseite',
    'detail.website': 'Website',
    'detail.github': 'GitHub',
    'detail.difficulty': 'Schwierigkeit',
    'detail.lastCheck': 'Letzte Prüfung',
    'detail.staleWarning': '⚠ Über 18 Monate alt',
    'detail.description': 'Beschreibung',
    'detail.platforms': 'Plattformen',
    'detail.replacesTools': 'Ersetzt folgende proprietäre Tools',
    'detail.selfHost': 'Selbst hosten',
    'detail.selfHostText': 'kann auf eigener Infrastruktur betrieben werden. Besuche die offizielle Dokumentation für eine Installationsanleitung.',
    'detail.toDocs': 'Zur Dokumentation →',
    'detail.categories': 'Kategorien',
    'detail.tags': 'Tags',
    'detail.relatedTools': 'Ähnliche Tools',
    'detail.backTo': '← Zurück zu',
    'detail.restricted': 'Eingeschränkt',
    'detail.archived': 'Archiviert',
    'detail.reason': 'Grund:',
    'detail.preview': 'Vorschau',

    // ToolFilters
    'filters.search': 'Suche',
    'filters.searchPlaceholder': 'Tool-Name...',
    'filters.category': 'Kategorie',
    'filters.allCategories': 'Alle Kategorien',
    'filters.license': 'Lizenz',
    'filters.allLicenses': 'Alle Lizenzen',
    'filters.sort': 'Sortierung',
    'filters.sortName': 'Name (A-Z)',
    'filters.sortStars': 'Beliebtheit (Stars)',
    'filters.sortDate': 'Neueste zuerst',
    'filters.selfHostOnly': 'Nur selbst-hostbar',
    'filters.easySetup': 'Einfache Einrichtung',
    'filters.dockerAvailable': 'Docker verfügbar',

    // SearchModal
    'search.placeholder': 'Tools, Kategorien oder proprietäre Software suchen...',
    'search.hint': 'Beginne zu tippen, um Tools und Kategorien zu finden...',
    'search.noResults': 'Keine Ergebnisse für',
    'search.buildOnly': 'Suche ist nur im Build-Modus verfügbar.',
    'search.label': 'Suche',

    // MaintenanceBadge
    'maintenance.active': '✓ Aktiv gepflegt',
    'maintenance.maintained': '✓ Maintained',
    'maintenance.slow': '⚡ Langsam gepflegt',
    'maintenance.restricted': '⚠ Eingeschränkt',
    'maintenance.archived': '✗ Archiviert',

    // CategoryCard
    'category.replaces': 'Ersetzt:',
    'category.tools': 'Tools',

    // ToolGrid
    'grid.noTools': 'Keine Tools gefunden.',

    // Category page
    'catPage.home': 'Startseite',
    'catPage.categories': 'Kategorien',
    'catPage.replaces': 'Ersetzt:',
    'catPage.openSourceTools': 'Open-Source-Tools',

    // Difficulty labels
    'difficulty.einfach': '● Einfach',
    'difficulty.mittel': '●● Mittel',
    'difficulty.fortgeschritten': '●●● Fortgeschritten',

    // Tool/Category path prefixes
    'path.tool': 'tool',
    'path.category': 'kategorie',
  },

  en: {
    // Navigation
    'nav.categories': 'Categories',
    'nav.tools': 'Tools',
    'nav.comparison': 'Comparison',
    'nav.guides': 'Guides',
    'nav.about': 'About',
    'nav.search': 'Search...',
    'nav.searchOpen': 'Open search (Ctrl+K)',
    'nav.themeToggle': 'Toggle theme',
    'nav.menuOpen': 'Open menu',
    'nav.home': 'FOSS Alternatives Home',
    'nav.mainNav': 'Main navigation',

    // Navigation hrefs (path after base, with en/ prefix)
    'nav.href.categories': 'en/categories/',
    'nav.href.tools': 'en/tools/',
    'nav.href.comparison': 'en/comparison/',
    'nav.href.guides': 'en/self-hosting/',
    'nav.href.about': 'en/about/',

    // Footer
    'footer.tagline': 'Your freedom. Your code. Your future.',
    'footer.subtitle': 'Free open-source alternatives to proprietary software.',
    'footer.navigation': 'Navigation',
    'footer.categories': 'Categories',
    'footer.allTools': 'All Tools',
    'footer.comparison': 'Comparison',
    'footer.selfHost': 'Self-Hosting',
    'footer.licenseOverview': 'License Overview',
    'footer.aboutUs': 'About',
    'footer.imprint': 'Legal Notice',
    'footer.privacy': 'Privacy',
    'footer.contribute': 'Contribute',
    'footer.contributeText': 'Missing a tool? Outdated data? Help keep this collection up to date and complete!',
    'footer.suggestTool': 'Suggest a tool',
    'footer.viewOnGithub': 'View on GitHub',
    'footer.license': 'Content: CC BY-SA 4.0 · Code: MIT',

    // Footer hrefs (path after base, with en/ prefix)
    'footer.href.categories': 'en/categories/',
    'footer.href.tools': 'en/tools/',
    'footer.href.comparison': 'en/comparison/',
    'footer.href.selfHost': 'en/self-hosting/',
    'footer.href.licenseOverview': 'en/license-overview/',
    'footer.href.about': 'en/about/',
    'footer.href.imprint': 'en/legal-notice/',
    'footer.href.privacy': 'en/privacy/',
    'footer.href.contribute': 'en/contribute/',

    // BaseLayout
    'layout.skipToContent': 'Skip to content',
    'layout.backToTop': 'Back to top',
    'layout.defaultDescription': 'FOSS Alternatives – Your freedom. Your code. Your future. Find free open-source alternatives to proprietary software.',

    // ToolCard
    'tool.selfHostable': 'Self-hostable',
    'tool.lastUpdated': 'Last:',
    'tool.viewDetails': 'View details →',
    'tool.months.0': 'Jan',
    'tool.months.1': 'Feb',
    'tool.months.2': 'Mar',
    'tool.months.3': 'Apr',
    'tool.months.4': 'May',
    'tool.months.5': 'Jun',
    'tool.months.6': 'Jul',
    'tool.months.7': 'Aug',
    'tool.months.8': 'Sep',
    'tool.months.9': 'Oct',
    'tool.months.10': 'Nov',
    'tool.months.11': 'Dec',

    // ToolDetail
    'detail.home': 'Home',
    'detail.website': 'Website',
    'detail.github': 'GitHub',
    'detail.difficulty': 'Difficulty',
    'detail.lastCheck': 'Last check',
    'detail.staleWarning': '⚠ Over 18 months old',
    'detail.description': 'Description',
    'detail.platforms': 'Platforms',
    'detail.replacesTools': 'Replaces the following proprietary tools',
    'detail.selfHost': 'Self-Hosting',
    'detail.selfHostText': 'can be self-hosted on your own infrastructure. Visit the official documentation for installation instructions.',
    'detail.toDocs': 'Documentation →',
    'detail.categories': 'Categories',
    'detail.tags': 'Tags',
    'detail.relatedTools': 'Similar Tools',
    'detail.backTo': '← Back to',
    'detail.restricted': 'Limited',
    'detail.archived': 'Archived',
    'detail.reason': 'Reason:',
    'detail.preview': 'Preview',

    // ToolFilters
    'filters.search': 'Search',
    'filters.searchPlaceholder': 'Tool name...',
    'filters.category': 'Category',
    'filters.allCategories': 'All categories',
    'filters.license': 'License',
    'filters.allLicenses': 'All licenses',
    'filters.sort': 'Sort',
    'filters.sortName': 'Name (A-Z)',
    'filters.sortStars': 'Popularity (Stars)',
    'filters.sortDate': 'Newest first',
    'filters.selfHostOnly': 'Self-hostable only',
    'filters.easySetup': 'Easy setup',
    'filters.dockerAvailable': 'Docker available',

    // SearchModal
    'search.placeholder': 'Search tools, categories or proprietary software...',
    'search.hint': 'Start typing to find tools and categories...',
    'search.noResults': 'No results for',
    'search.buildOnly': 'Search is only available in build mode.',
    'search.label': 'Search',

    // MaintenanceBadge
    'maintenance.active': '✓ Actively maintained',
    'maintenance.maintained': '✓ Maintained',
    'maintenance.slow': '⚡ Slowly maintained',
    'maintenance.restricted': '⚠ Limited',
    'maintenance.archived': '✗ Archived',

    // CategoryCard
    'category.replaces': 'Replaces:',
    'category.tools': 'Tools',

    // ToolGrid
    'grid.noTools': 'No tools found.',

    // Category page
    'catPage.home': 'Home',
    'catPage.categories': 'Categories',
    'catPage.replaces': 'Replaces:',
    'catPage.openSourceTools': 'Open Source Tools',

    // Difficulty labels
    'difficulty.einfach': '● Easy',
    'difficulty.mittel': '●● Medium',
    'difficulty.fortgeschritten': '●●● Advanced',

    // Tool/Category path prefixes
    'path.tool': 'en/tool',
    'path.category': 'en/category',
  },
} as const;

// English category translations
export const categoryTranslations: Record<string, { name: string; description: string; replaces: string }> = {
  'betriebssysteme': {
    name: 'Operating Systems',
    description: 'Free and open-source operating systems as alternatives to proprietary systems like Windows and macOS. From desktop Linux distributions to specialized systems.',
    replaces: 'Windows, macOS',
  },
  'buerosoftware': {
    name: 'Office Software',
    description: 'Open-source office applications for word processing, spreadsheets and presentations. Full-featured alternatives to Microsoft Office and Google Docs.',
    replaces: 'Microsoft Office, Google Docs',
  },
  'browser': {
    name: 'Browsers',
    description: 'Privacy-friendly open-source web browsers that respect your privacy. Powerful alternatives to Chrome and Edge without tracking.',
    replaces: 'Chrome, Edge',
  },
  'email-clients': {
    name: 'Email Clients',
    description: 'Free email programs for desktop and mobile devices. Secure and feature-rich alternatives to Outlook and Apple Mail.',
    replaces: 'Outlook, Apple Mail',
  },
  'email-server': {
    name: 'Email Servers & Services',
    description: 'Self-hostable email servers and privacy-friendly email services. Independent alternatives to Gmail Server and Microsoft Exchange.',
    replaces: 'Gmail Server, Exchange',
  },
  'cloud-speicher': {
    name: 'Cloud Storage & Sync',
    description: 'Self-hosted cloud storage and synchronization solutions. Keep full control over your data instead of using Google Drive, Dropbox or OneDrive.',
    replaces: 'Google Drive, Dropbox, OneDrive',
  },
  'passwort-manager': {
    name: 'Password Managers',
    description: 'Secure open-source password managers for storing and managing your credentials. Trusted alternatives to LastPass and 1Password.',
    replaces: 'LastPass, 1Password',
  },
  'kommunikation': {
    name: 'Communication & Chat',
    description: 'Encrypted and privacy-friendly messengers and chat platforms. Secure alternatives to WhatsApp, Slack and Microsoft Teams.',
    replaces: 'WhatsApp, Slack, Teams',
  },
  'videokonferenzen': {
    name: 'Video Conferencing',
    description: 'Open-source video conferencing solutions for meetings and webinars. Privacy-friendly alternatives to Zoom, Google Meet and Teams.',
    replaces: 'Zoom, Google Meet, Teams',
  },
  'kalender': {
    name: 'Calendar & Contacts',
    description: 'Free calendar and contact management with open standards like CalDAV and CardDAV. Independent alternatives to Google Calendar and iCloud.',
    replaces: 'Google Calendar, iCloud',
  },
  'suchmaschinen': {
    name: 'Search Engines',
    description: 'Privacy-friendly search engines that do not track your queries. Independent alternatives to Google and Bing.',
    replaces: 'Google, Bing',
  },
  'social-media': {
    name: 'Social Media',
    description: 'Decentralized and free social networks in the Fediverse and beyond. Ad-free alternatives to Twitter/X, Instagram, Facebook, YouTube and Reddit.',
    replaces: 'Twitter/X, Instagram, Facebook, YouTube, Reddit',
  },
  'code-hosting': {
    name: 'Code Hosting & Git',
    description: 'Self-hostable Git platforms for source code management and collaboration. Powerful alternatives to GitHub, Bitbucket and Azure DevOps.',
    replaces: 'GitHub, Bitbucket, Azure DevOps',
  },
  'ci-cd': {
    name: 'CI/CD Pipelines',
    description: 'Open-source solutions for Continuous Integration and Continuous Deployment. Automated build and deployment pipelines as alternatives to GitHub Actions, Jenkins and CircleCI.',
    replaces: 'GitHub Actions, Jenkins, CircleCI',
  },
  'container': {
    name: 'Containers & Orchestration',
    description: 'Free container runtimes and orchestration tools for modern application deployment. Open alternatives to Docker Hub and Kubernetes EKS.',
    replaces: 'Docker Hub, Kubernetes EKS',
  },
  'datenbanken': {
    name: 'Databases',
    description: 'Powerful open-source database systems for relational and NoSQL use cases. Proven alternatives to Oracle and Microsoft SQL Server.',
    replaces: 'Oracle, MSSQL',
  },
  'cms': {
    name: 'CMS & Website Builders',
    description: 'Open-source content management systems and website builders for every need. Flexible alternatives to WordPress.com, Squarespace and Wix.',
    replaces: 'WordPress.com, Squarespace, Wix',
  },
  'e-commerce': {
    name: 'E-Commerce',
    description: 'Free online shop systems and e-commerce platforms for self-hosting. Powerful alternatives to Shopify and Magento Commerce.',
    replaces: 'Shopify, Magento Commerce',
  },
  'analytics': {
    name: 'Web Analytics',
    description: 'Privacy-compliant web analytics tools without cookies and tracking. GDPR-friendly alternatives to Google Analytics and Mixpanel.',
    replaces: 'Google Analytics, Mixpanel',
  },
  'monitoring': {
    name: 'Monitoring & Observability',
    description: 'Open-source monitoring and observability platforms for infrastructure and applications. Comprehensive alternatives to Datadog, New Relic and PagerDuty.',
    replaces: 'Datadog, New Relic, PagerDuty',
  },
  'vpn': {
    name: 'VPN Solutions',
    description: 'Free VPN solutions for secure and encrypted network connections. Transparent alternatives to NordVPN and ExpressVPN.',
    replaces: 'NordVPN, ExpressVPN',
  },
  'firewall': {
    name: 'Firewall & Network Security',
    description: 'Open-source firewall and network security solutions for businesses and individuals. Powerful alternatives to Cisco and proprietary solutions.',
    replaces: 'Cisco, proprietary',
  },
  'ki-ml': {
    name: 'AI & Machine Learning',
    description: 'Open AI models and machine learning frameworks for text, images and more. Transparent alternatives to ChatGPT API, Midjourney and DALL-E.',
    replaces: 'ChatGPT API, Midjourney, DALL-E',
  },
  'notizen': {
    name: 'Notes & Knowledge Management',
    description: 'Free note-taking and knowledge management apps for personal and team use. Privacy-friendly alternatives to Notion, Evernote and Obsidian.',
    replaces: 'Notion, Evernote, Obsidian',
  },
  'projektmanagement': {
    name: 'Task & Project Management',
    description: 'Open-source tools for task and project management with Kanban, Gantt and more. Versatile alternatives to Asana, Monday, Jira and Trello.',
    replaces: 'Asana, Monday, Jira, Trello',
  },
  'video-audio': {
    name: 'Video & Audio Editing',
    description: 'Professional open-source tools for video and audio editing and production. Creative alternatives to Adobe Premiere, Final Cut and Audition.',
    replaces: 'Adobe Premiere, Final Cut, Audition',
  },
  'bildbearbeitung': {
    name: 'Image Editing & Design',
    description: 'Free image editing and design tools for designers and creatives. Powerful alternatives to Adobe Photoshop, Illustrator and Figma.',
    replaces: 'Adobe Photoshop, Illustrator, Figma',
  },
  'zeiterfassung': {
    name: 'Time Tracking',
    description: 'Open-source time tracking tools for freelancers and teams. Simple and transparent alternatives to Harvest, Toggl and Clockify Pro.',
    replaces: 'Harvest, Toggl, Clockify Pro',
  },
  'erp': {
    name: 'ERP Systems',
    description: 'Comprehensive open-source ERP systems for enterprise resource planning. Cost-effective alternatives to SAP Business One and Oracle ERP.',
    replaces: 'SAP Business One, Oracle ERP',
  },
  'crm': {
    name: 'CRM Systems',
    description: 'Free CRM systems for customer relationship management and sales. Flexible alternatives to Salesforce and HubSpot.',
    replaces: 'Salesforce, HubSpot',
  },
  'wiki': {
    name: 'Wiki & Documentation',
    description: 'Open-source wiki and documentation platforms for teams and organizations. Collaborative alternatives to Confluence, Notion and GitBook.',
    replaces: 'Confluence, Notion, GitBook',
  },
  'backup': {
    name: 'Backup Solutions',
    description: 'Reliable open-source backup tools for data and system backups. Secure alternatives to Backblaze and Acronis.',
    replaces: 'Backblaze, Acronis',
  },
  'dns-adblock': {
    name: 'DNS & Ad-Blocking',
    description: 'Self-hosted DNS servers and ad blockers for your network. Privacy-friendly alternatives to Google DNS and commercial filtering solutions.',
    replaces: 'Google DNS, commercial filters',
  },
  'objekt-speicher': {
    name: 'Object & File Storage',
    description: 'S3-compatible open-source object storage and distributed file systems. Self-hosted alternatives to Amazon S3 and Google Cloud Storage.',
    replaces: 'Amazon S3, Google Cloud Storage',
  },
  'medienserver': {
    name: 'Media Servers',
    description: 'Free media servers for your movie, series and music collection. Feature-rich alternatives to Plex Premium and Emby.',
    replaces: 'Plex Premium, Emby',
  },
  'dev-tools': {
    name: 'Development Tools & IDEs',
    description: 'Open-source development environments and programming tools for software developers. Powerful alternatives to JetBrains Suite and Visual Studio.',
    replaces: 'JetBrains Suite, Visual Studio',
  },
  'backend-frameworks': {
    name: 'API & Backend Frameworks',
    description: 'Open-source backend frameworks and API platforms for modern web applications. Self-hostable alternatives to Firebase and Supabase Pro.',
    replaces: 'Firebase, Supabase Pro',
  },
  'ssg': {
    name: 'Static Site Generators',
    description: 'Fast open-source static site generators for performant websites. Developer-friendly alternatives to Webflow and Framer.',
    replaces: 'Webflow, Framer',
  },
  'karten': {
    name: 'Map Services',
    description: 'Free map services and geodata platforms based on OpenStreetMap. Independent alternatives to Google Maps API and Mapbox.',
    replaces: 'Google Maps API, Mapbox',
  },
  'fotos': {
    name: 'Photo Management',
    description: 'Self-hosted photo management and gallery solutions for private photo collections. Privacy-friendly alternatives to Google Photos, iCloud Photos and Amazon Photos.',
    replaces: 'Google Photos, iCloud Photos, Amazon Photos',
  },
};
