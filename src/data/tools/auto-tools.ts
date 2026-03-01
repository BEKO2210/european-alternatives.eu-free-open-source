import type { Tool } from '../types';

/* AUTO_TOOLS_JSON
[
  {
    "id": "coolify",
    "name": "Coolify",
    "slug": "coolify",
    "tagline": "An open-source, self-hostable PaaS alternative to Vercel, Heroku & Netlify that lets you easily deploy static sites, ...",
    "description": "An open-source, self-hostable PaaS alternative to Vercel, Heroku & Netlify that lets you easily deploy static sites, databases, full-stack applications and 280+ one-click services on your own servers.",
    "website": "https://coolify.io",
    "github": "https://github.com/coollabsio/coolify",
    "license": "Apache-2.0",
    "categories": [
      "datenbanken"
    ],
    "replacesTools": [
      "Oracle",
      "MSSQL"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "🗄️",
    "stars": 51179,
    "lastUpdated": "2026-03-01",
    "tags": [
      "coolify",
      "databases",
      "deployment",
      "docker",
      "docker-compose",
      "inertiajs",
      "laravel"
    ],
    "difficulty": "einfach",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-01"
  },
  {
    "id": "dokploy",
    "name": "Dokploy",
    "slug": "dokploy",
    "tagline": "Open Source Alternative to Vercel, Netlify and Heroku.",
    "description": "Open Source Alternative to Vercel, Netlify and Heroku.",
    "website": "https://dokploy.com/",
    "github": "https://github.com/Dokploy/dokploy",
    "license": "MIT",
    "categories": [
      "datenbanken"
    ],
    "replacesTools": [
      "Oracle",
      "MSSQL"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "🗄️",
    "stars": 31076,
    "lastUpdated": "2026-02-28",
    "tags": [
      "backend",
      "backups",
      "databases",
      "deployment",
      "devops",
      "docker",
      "frontend"
    ],
    "difficulty": "einfach",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-01"
  },
  {
    "id": "focalboard",
    "name": "Focalboard",
    "slug": "focalboard",
    "tagline": "Focalboard is an open source, self-hosted alternative to Trello, Notion, and Asana.",
    "description": "Focalboard is an open source, self-hosted alternative to Trello, Notion, and Asana.",
    "website": "https://www.focalboard.com",
    "github": "https://github.com/mattermost-community/focalboard",
    "license": "MIT",
    "categories": [
      "projektmanagement"
    ],
    "replacesTools": [
      "Asana",
      "Monday",
      "Jira",
      "Trello"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "✅",
    "stars": 25913,
    "lastUpdated": "2026-02-23",
    "tags": [
      "asana",
      "collaboration",
      "goal-tracking",
      "golang",
      "hacktoberfest",
      "kanban-board",
      "notion"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-01"
  },
  {
    "id": "signoz",
    "name": "Signoz",
    "slug": "signoz",
    "tagline": "SigNoz is an open-source observability platform native to OpenTelemetry with logs, traces and metrics in a single app...",
    "description": "SigNoz is an open-source observability platform native to OpenTelemetry with logs, traces and metrics in a single application. An open-source alternative to DataDog, NewRelic, etc. 🔥 🖥.   👉  Open source Application Performance Monitoring (APM) & Observability tool",
    "website": "https://signoz.io",
    "github": "https://github.com/SigNoz/signoz",
    "license": "MIT",
    "categories": [
      "monitoring"
    ],
    "replacesTools": [
      "Datadog",
      "New Relic",
      "PagerDuty"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "📈",
    "stars": 25908,
    "lastUpdated": "2026-02-28",
    "tags": [
      "apm",
      "application-monitoring",
      "distributed-tracing",
      "go",
      "good-first-issue",
      "jaeger",
      "log"
    ],
    "difficulty": "fortgeschritten",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-01"
  },
  {
    "id": "automatisch",
    "name": "Automatisch",
    "slug": "automatisch",
    "tagline": "The open source Zapier alternative. Build workflow automation without spending time and money.",
    "description": "The open source Zapier alternative. Build workflow automation without spending time and money.",
    "website": "https://automatisch.io",
    "github": "https://github.com/automatisch/automatisch",
    "license": "MIT",
    "categories": [
      "backend-frameworks"
    ],
    "replacesTools": [
      "Firebase",
      "Supabase Pro"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "⚙️",
    "stars": 13732,
    "lastUpdated": "2026-02-11",
    "tags": [
      "automation",
      "automatisch",
      "low-code",
      "no-code",
      "open-source",
      "self-hosted",
      "workflow"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-01"
  },
  {
    "id": "notesnook",
    "name": "Notesnook",
    "slug": "notesnook",
    "tagline": "A fully open source & end-to-end encrypted note taking alternative to Evernote.",
    "description": "A fully open source & end-to-end encrypted note taking alternative to Evernote.",
    "website": "https://notesnook.com/",
    "github": "https://github.com/streetwriters/notesnook",
    "license": "GPL-3.0",
    "categories": [
      "notizen"
    ],
    "replacesTools": [
      "Notion",
      "Evernote",
      "Obsidian"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "📝",
    "stars": 13732,
    "lastUpdated": "2026-02-27",
    "tags": [
      "asp-net-core",
      "dotnet-core",
      "electron",
      "foss",
      "hacktoberfest",
      "note-managment",
      "note-taking"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-01"
  },
  {
    "id": "documenso",
    "name": "Documenso",
    "slug": "documenso",
    "tagline": "The Open Source DocuSign Alternative.",
    "description": "The Open Source DocuSign Alternative.",
    "website": "https://documenso.com",
    "github": "https://github.com/documenso/documenso",
    "license": "AGPL-3.0",
    "categories": [
      "datenbanken"
    ],
    "replacesTools": [
      "Oracle",
      "MSSQL"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "🗄️",
    "stars": 12455,
    "lastUpdated": "2026-03-01",
    "tags": [
      "digital-signature",
      "document-signing",
      "docusign-alternative",
      "e-signature",
      "esign",
      "esignature",
      "next-auth"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-01"
  },
  {
    "id": "openpanel",
    "name": "Openpanel",
    "slug": "openpanel",
    "tagline": "OpenPanel is an open-source web and product analytics platform, an open-source alternative to Mixpanel with optional ...",
    "description": "OpenPanel is an open-source web and product analytics platform, an open-source alternative to Mixpanel with optional self-hosting.",
    "website": "https://openpanel.dev",
    "github": "https://github.com/Openpanel-dev/openpanel",
    "license": "AGPL-3.0",
    "categories": [
      "analytics"
    ],
    "replacesTools": [
      "Google Analytics",
      "Mixpanel"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "📊",
    "stars": 5398,
    "lastUpdated": "2026-02-27",
    "tags": [
      "alternative",
      "analytics",
      "open-source",
      "privacy",
      "productanalytics",
      "webanalytics"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-01"
  },
  {
    "id": "colanode",
    "name": "Colanode",
    "slug": "colanode",
    "tagline": "Open-source and local-first Slack and Notion alternative that puts you in control of your data",
    "description": "Open-source and local-first Slack and Notion alternative that puts you in control of your data",
    "website": "https://colanode.com",
    "github": "https://github.com/colanode/colanode",
    "license": "Apache-2.0",
    "categories": [
      "kommunikation"
    ],
    "replacesTools": [
      "WhatsApp",
      "Slack",
      "Microsoft Teams"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "💬",
    "stars": 4615,
    "lastUpdated": "2026-02-21",
    "tags": [
      "chat",
      "chat-application",
      "crdt",
      "editor",
      "electron",
      "knowledge-base",
      "local-first"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-01"
  },
  {
    "id": "peppermint",
    "name": "Peppermint",
    "slug": "peppermint",
    "tagline": "An open source issue management & help desk solution. A zendesk & jira alternative",
    "description": "An open source issue management & help desk solution. A zendesk & jira alternative",
    "website": "https://peppermint.sh",
    "github": "https://github.com/Peppermint-Lab/peppermint",
    "license": "MIT",
    "categories": [
      "crm"
    ],
    "replacesTools": [
      "Salesforce",
      "HubSpot"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "🤝",
    "stars": 3045,
    "lastUpdated": "2025-09-21",
    "tags": [
      "crm",
      "customer-relationship-management",
      "docker",
      "full-stack",
      "helpdesk",
      "issue-tracker",
      "javascript"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-01"
  },
  {
    "id": "opengist",
    "name": "Opengist",
    "slug": "opengist",
    "tagline": "Self-hosted pastebin powered by Git, open-source alternative to Github Gist.",
    "description": "Self-hosted pastebin powered by Git, open-source alternative to Github Gist.",
    "website": "https://opengist.io",
    "github": "https://github.com/thomiceli/opengist",
    "license": "AGPL-3.0",
    "categories": [
      "container"
    ],
    "replacesTools": [
      "Docker Hub",
      "Kubernetes EKS"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "📦",
    "stars": 3006,
    "lastUpdated": "2026-02-25",
    "tags": [
      "docker",
      "gist",
      "git",
      "go",
      "golang",
      "pastebin",
      "pastebin-service"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-01"
  },
  {
    "id": "willow",
    "name": "Willow",
    "slug": "willow",
    "tagline": "Open source, local, and self-hosted Amazon Echo/Google Home competitive Voice Assistant alternative",
    "description": "Open source, local, and self-hosted Amazon Echo/Google Home competitive Voice Assistant alternative",
    "website": "https://heywillow.io/",
    "github": "https://github.com/HeyWillow/willow",
    "license": "Apache-2.0",
    "categories": [
      "ki-ml"
    ],
    "replacesTools": [
      "ChatGPT API",
      "Midjourney",
      "DALL-E"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "🤖",
    "stars": 2979,
    "lastUpdated": "2026-02-13",
    "tags": [
      "alexa",
      "deep-learning",
      "echo",
      "esp-adf",
      "esp-idf",
      "esp32",
      "google-home"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-01"
  },
  {
    "id": "sorry-cypress",
    "name": "Sorry Cypress",
    "slug": "sorry-cypress",
    "tagline": "Open-source, free, self-hosted alternative to Cypress Dashboard",
    "description": "Open-source, free, self-hosted alternative to Cypress Dashboard",
    "website": "https://sorry-cypress.dev",
    "github": "https://github.com/sorry-cypress/sorry-cypress",
    "license": "MIT",
    "categories": [
      "monitoring"
    ],
    "replacesTools": [
      "Datadog",
      "New Relic",
      "PagerDuty"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "📈",
    "stars": 2814,
    "lastUpdated": "2025-09-14",
    "tags": [
      "cypress",
      "cypress-dashboard",
      "cypress-io",
      "cypress-tests",
      "dashboard",
      "e2e-tests",
      "hacktoberfest"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-01"
  },
  {
    "id": "openrecall",
    "name": "Openrecall",
    "slug": "openrecall",
    "tagline": "OpenRecall is a fully open-source, privacy-first alternative to proprietary solutions like Microsoft's Windows Recall.",
    "description": "OpenRecall is a fully open-source, privacy-first alternative to proprietary solutions like Microsoft's Windows Recall. With OpenRecall, you can easily access your digital history, enhancing your memory and productivity without compromising your privacy.",
    "website": "https://github.com/openrecall/openrecall",
    "github": "https://github.com/openrecall/openrecall",
    "license": "AGPL-3.0",
    "categories": [
      "ki-ml"
    ],
    "replacesTools": [
      "ChatGPT API",
      "Midjourney",
      "DALL-E"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "🤖",
    "stars": 2759,
    "lastUpdated": "2025-09-24",
    "tags": [
      "ai",
      "alternative",
      "history",
      "macos",
      "ocr",
      "open-source",
      "privacy"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "windows",
      "macos"
    ],
    "featured": false,
    "addedDate": "2026-03-01"
  },
  {
    "id": "checkcle",
    "name": "Checkcle",
    "slug": "checkcle",
    "tagline": "CheckCle is a self-hosted, open-source monitoring platform for seamless, real-time full-stack systems, applications, ...",
    "description": "CheckCle is a self-hosted, open-source monitoring platform for seamless, real-time full-stack systems, applications, and infrastructure. It provides real-time uptime monitoring, distributed checks, incident tracking, and alerts. All deployable anywhere.",
    "website": "https://checkcle.io",
    "github": "https://github.com/operacle/checkcle",
    "license": "MIT",
    "categories": [
      "monitoring"
    ],
    "replacesTools": [
      "Datadog",
      "New Relic",
      "PagerDuty"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "📈",
    "stars": 2364,
    "lastUpdated": "2026-02-26",
    "tags": [
      "alternative",
      "api",
      "checkcle",
      "container",
      "docker",
      "full-stack",
      "go"
    ],
    "difficulty": "fortgeschritten",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-01"
  },
  {
    "id": "notediscovery",
    "name": "Notediscovery",
    "slug": "notediscovery",
    "tagline": "Your Self-Hosted Knowledge Base",
    "description": "Your Self-Hosted Knowledge Base",
    "website": "https://www.notediscovery.com",
    "github": "https://github.com/gamosoft/NoteDiscovery",
    "license": "MIT",
    "categories": [
      "notizen"
    ],
    "replacesTools": [
      "Notion",
      "Evernote",
      "Obsidian"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "📝",
    "stars": 2353,
    "lastUpdated": "2026-02-23",
    "tags": [
      "alternative",
      "docker",
      "evernote",
      "fastapi",
      "free",
      "hosted",
      "knowledge-base"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-01"
  },
  {
    "id": "open-higgsfield-ai",
    "name": "Open Higgsfield Ai",
    "slug": "open-higgsfield-ai",
    "tagline": "Open-source alternative to Higgsfield AI — Free AI image generation & cinema studio with 20+ models (Flux, SDXL, Midj...",
    "description": "Open-source alternative to Higgsfield AI — Free AI image generation & cinema studio with 20+ models (Flux, SDXL, Midjourney, Ideogram). Self-hosted, customizable, MIT licensed.",
    "website": "https://github.com/Anil-matcha/Open-Higgsfield-AI",
    "github": "https://github.com/Anil-matcha/Open-Higgsfield-AI",
    "license": "MIT",
    "categories": [
      "ki-ml"
    ],
    "replacesTools": [
      "ChatGPT API",
      "Midjourney",
      "DALL-E"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "🤖",
    "stars": 2333,
    "lastUpdated": "2026-02-27",
    "tags": [
      "ai-art-generator",
      "ai-image-generation",
      "ai-video-generation",
      "cinematic",
      "content-creation",
      "creative-tools",
      "flux-1"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-01"
  },
  {
    "id": "litlyx",
    "name": "Litlyx",
    "slug": "litlyx",
    "tagline": "Powerful Analytics Solution. Setup in 30 seconds. Display all your data on a Simple, AI-powered dashboard. Fully self...",
    "description": "Powerful Analytics Solution. Setup in 30 seconds. Display all your data on a Simple, AI-powered dashboard. Fully self-hostable and GDPR compliant. Alternative to Google Analytics, MixPanel, Plausible, Umami & Matomo.",
    "website": "https://litlyx.com",
    "github": "https://github.com/Litlyx/litlyx",
    "license": "Apache-2.0",
    "categories": [
      "analytics"
    ],
    "replacesTools": [
      "Google Analytics",
      "Mixpanel"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "📊",
    "stars": 1681,
    "lastUpdated": "2025-12-03",
    "tags": [
      "ai",
      "analytics",
      "angular",
      "charts",
      "data",
      "data-analysis",
      "data-visualization"
    ],
    "difficulty": "einfach",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-01"
  },
  {
    "id": "paddler",
    "name": "Paddler",
    "slug": "paddler",
    "tagline": "Open-source LLM load balancer and serving platform for self-hosting LLMs at scale 🏓🦙 Alternative to projects like llm...",
    "description": "Open-source LLM load balancer and serving platform for self-hosting LLMs at scale 🏓🦙 Alternative to projects like llm-d, Docker Model Runner, etc but with less moving parts and simple deployments built around ggml ecosystem. Runs on CPU and GPU.",
    "website": "https://paddler.intentee.com",
    "github": "https://github.com/intentee/paddler",
    "license": "Apache-2.0",
    "categories": [
      "ki-ml"
    ],
    "replacesTools": [
      "ChatGPT API",
      "Midjourney",
      "DALL-E"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "🤖",
    "stars": 1471,
    "lastUpdated": "2026-02-25",
    "tags": [
      "ai",
      "llamacpp",
      "llm",
      "llmops",
      "load-balancer"
    ],
    "difficulty": "einfach",
    "platforms": [
      "linux",
      "macos",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-01"
  },
  {
    "id": "authgear-server",
    "name": "Authgear Server",
    "slug": "authgear-server",
    "tagline": "Open source Auth0/Clerk/Firebase alternative.",
    "description": "Open source Auth0/Clerk/Firebase alternative. Passkeys, SSO, MFA, passwordless, biometric login. Self-hosted or cloud. Enterprise-ready for SaaS & mobile apps",
    "website": "https://www.authgear.com",
    "github": "https://github.com/authgear/authgear-server",
    "license": "Apache-2.0",
    "categories": [
      "backend-frameworks"
    ],
    "replacesTools": [
      "Firebase",
      "Supabase Pro"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "⚙️",
    "stars": 1431,
    "lastUpdated": "2026-02-27",
    "tags": [
      "2fa",
      "auth0",
      "authentication",
      "biometric",
      "clerk-alternative",
      "firebase-alternative",
      "identity"
    ],
    "difficulty": "fortgeschritten",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-01"
  },
  {
    "id": "nixopus",
    "name": "Nixopus",
    "slug": "nixopus",
    "tagline": "Open Source Alternative to vercel, heroku, netlify with simplified workflows",
    "description": "Open Source Alternative to vercel, heroku, netlify with simplified workflows",
    "website": "https://nixopus.com",
    "github": "https://github.com/raghavyuva/nixopus",
    "license": "MIT",
    "categories": [
      "ci-cd"
    ],
    "replacesTools": [
      "GitHub Actions",
      "Jenkins",
      "CircleCI"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "🔄",
    "stars": 1375,
    "lastUpdated": "2026-02-28",
    "tags": [
      "ci-cd",
      "coolify",
      "deployment",
      "file-manager",
      "golang",
      "heroku",
      "homelab"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-01"
  },
  {
    "id": "courselit",
    "name": "Courselit",
    "slug": "courselit",
    "tagline": "Create/Sell courses and digital downloads and publish blogs on your own branded website.",
    "description": "Create/Sell courses and digital downloads and publish blogs on your own branded website. An open source alternative to Teachable, Thinkific, Podia and the likes.",
    "website": "https://courselit.app",
    "github": "https://github.com/codelitdev/courselit",
    "license": "AGPL-3.0",
    "categories": [
      "cms"
    ],
    "replacesTools": [
      "WordPress.com",
      "Squarespace",
      "Wix"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "🌍",
    "stars": 1111,
    "lastUpdated": "2026-02-28",
    "tags": [
      "blog",
      "cms",
      "cms-framework",
      "course",
      "courses",
      "elearning",
      "ghost"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-01"
  },
  {
    "id": "littlelink-server",
    "name": "Littlelink Server",
    "slug": "littlelink-server",
    "tagline": "A lightweight, open source, stateless, and self-hosted alternative to linktree in a Docker container!",
    "description": "A lightweight, open source, stateless, and self-hosted alternative to linktree in a Docker container!",
    "website": "https://links.technotim.com",
    "github": "https://github.com/timothystewart6/littlelink-server",
    "license": "MIT",
    "categories": [
      "container"
    ],
    "replacesTools": [
      "Docker Hub",
      "Kubernetes EKS"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "📦",
    "stars": 1105,
    "lastUpdated": "2026-02-26",
    "tags": [
      "docker",
      "express",
      "javascript",
      "link",
      "linktree",
      "node",
      "nodejs"
    ],
    "difficulty": "einfach",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-01"
  },
  {
    "id": "peekaping",
    "name": "Peekaping",
    "slug": "peekaping",
    "tagline": "Open Source Uptime Kuma Alternative",
    "description": "Open Source Uptime Kuma Alternative",
    "website": "https://peekaping.com",
    "github": "https://github.com/0xfurai/peekaping",
    "license": "MIT",
    "categories": [
      "monitoring"
    ],
    "replacesTools": [
      "Datadog",
      "New Relic",
      "PagerDuty"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "📈",
    "stars": 1043,
    "lastUpdated": "2026-02-21",
    "tags": [
      "monitor",
      "monitoring",
      "self-hosted",
      "selfhosted",
      "telemetry",
      "uptime",
      "uptime-monitoring"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-01"
  },
  {
    "id": "aegra",
    "name": "Aegra",
    "slug": "aegra",
    "tagline": "Open source LangGraph Platform alternative - Self-hosted AI agent backend with FastAPI and PostgreSQL.",
    "description": "Open source LangGraph Platform alternative - Self-hosted AI agent backend with FastAPI and PostgreSQL. Zero vendor lock-in, full control over your agent infrastructure.",
    "website": "https://aegra.dev",
    "github": "https://github.com/ibbybuilds/aegra",
    "license": "Apache-2.0",
    "categories": [
      "backend-frameworks"
    ],
    "replacesTools": [
      "Firebase",
      "Supabase Pro"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "⚙️",
    "stars": 644,
    "lastUpdated": "2026-02-27",
    "tags": [
      "fastapi",
      "langchain",
      "langggraph",
      "langgraph-agents",
      "langgraph-platform-alternative",
      "opensource-langgraph-platform",
      "postgres"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-01"
  }
]
END_AUTO_TOOLS_JSON */

export const autoDiscoveredTools: Tool[] = [
  {
    id: 'coolify',
    name: 'Coolify',
    slug: 'coolify',
    tagline: 'An open-source, self-hostable PaaS alternative to Vercel, Heroku & Netlify that lets you easily deploy static sites, ...',
    description:
      'An open-source, self-hostable PaaS alternative to Vercel, Heroku & Netlify that lets you easily deploy static sites, databases, full-stack applications and 280+ one-click services on your own servers.',
    website: 'https://coolify.io',
    github: 'https://github.com/coollabsio/coolify',
    license: 'Apache-2.0',
    categories: ['datenbanken'],
    replacesTools: ['Oracle', 'MSSQL'],
    selfHostable: true,
    logoPlaceholderEmoji: '🗄️',
    stars: 51179,
    lastUpdated: '2026-03-01',
    tags: ['coolify', 'databases', 'deployment', 'docker', 'docker-compose', 'inertiajs', 'laravel'],
    difficulty: 'einfach',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'dokploy',
    name: 'Dokploy',
    slug: 'dokploy',
    tagline: 'Open Source Alternative to Vercel, Netlify and Heroku.',
    description:
      'Open Source Alternative to Vercel, Netlify and Heroku.',
    website: 'https://dokploy.com/',
    github: 'https://github.com/Dokploy/dokploy',
    license: 'MIT',
    categories: ['datenbanken'],
    replacesTools: ['Oracle', 'MSSQL'],
    selfHostable: true,
    logoPlaceholderEmoji: '🗄️',
    stars: 31076,
    lastUpdated: '2026-02-28',
    tags: ['backend', 'backups', 'databases', 'deployment', 'devops', 'docker', 'frontend'],
    difficulty: 'einfach',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'focalboard',
    name: 'Focalboard',
    slug: 'focalboard',
    tagline: 'Focalboard is an open source, self-hosted alternative to Trello, Notion, and Asana.',
    description:
      'Focalboard is an open source, self-hosted alternative to Trello, Notion, and Asana.',
    website: 'https://www.focalboard.com',
    github: 'https://github.com/mattermost-community/focalboard',
    license: 'MIT',
    categories: ['projektmanagement'],
    replacesTools: ['Asana', 'Monday', 'Jira', 'Trello'],
    selfHostable: true,
    logoPlaceholderEmoji: '✅',
    stars: 25913,
    lastUpdated: '2026-02-23',
    tags: ['asana', 'collaboration', 'goal-tracking', 'golang', 'hacktoberfest', 'kanban-board', 'notion'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'signoz',
    name: 'Signoz',
    slug: 'signoz',
    tagline: 'SigNoz is an open-source observability platform native to OpenTelemetry with logs, traces and metrics in a single app...',
    description:
      'SigNoz is an open-source observability platform native to OpenTelemetry with logs, traces and metrics in a single application. An open-source alternative to DataDog, NewRelic, etc. 🔥 🖥.   👉  Open source Application Performance Monitoring (APM) & Observability tool',
    website: 'https://signoz.io',
    github: 'https://github.com/SigNoz/signoz',
    license: 'MIT',
    categories: ['monitoring'],
    replacesTools: ['Datadog', 'New Relic', 'PagerDuty'],
    selfHostable: true,
    logoPlaceholderEmoji: '📈',
    stars: 25908,
    lastUpdated: '2026-02-28',
    tags: ['apm', 'application-monitoring', 'distributed-tracing', 'go', 'good-first-issue', 'jaeger', 'log'],
    difficulty: 'fortgeschritten',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'automatisch',
    name: 'Automatisch',
    slug: 'automatisch',
    tagline: 'The open source Zapier alternative. Build workflow automation without spending time and money.',
    description:
      'The open source Zapier alternative. Build workflow automation without spending time and money.',
    website: 'https://automatisch.io',
    github: 'https://github.com/automatisch/automatisch',
    license: 'MIT',
    categories: ['backend-frameworks'],
    replacesTools: ['Firebase', 'Supabase Pro'],
    selfHostable: true,
    logoPlaceholderEmoji: '⚙️',
    stars: 13732,
    lastUpdated: '2026-02-11',
    tags: ['automation', 'automatisch', 'low-code', 'no-code', 'open-source', 'self-hosted', 'workflow'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'notesnook',
    name: 'Notesnook',
    slug: 'notesnook',
    tagline: 'A fully open source & end-to-end encrypted note taking alternative to Evernote.',
    description:
      'A fully open source & end-to-end encrypted note taking alternative to Evernote.',
    website: 'https://notesnook.com/',
    github: 'https://github.com/streetwriters/notesnook',
    license: 'GPL-3.0',
    categories: ['notizen'],
    replacesTools: ['Notion', 'Evernote', 'Obsidian'],
    selfHostable: true,
    logoPlaceholderEmoji: '📝',
    stars: 13732,
    lastUpdated: '2026-02-27',
    tags: ['asp-net-core', 'dotnet-core', 'electron', 'foss', 'hacktoberfest', 'note-managment', 'note-taking'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'documenso',
    name: 'Documenso',
    slug: 'documenso',
    tagline: 'The Open Source DocuSign Alternative.',
    description:
      'The Open Source DocuSign Alternative.',
    website: 'https://documenso.com',
    github: 'https://github.com/documenso/documenso',
    license: 'AGPL-3.0',
    categories: ['datenbanken'],
    replacesTools: ['Oracle', 'MSSQL'],
    selfHostable: true,
    logoPlaceholderEmoji: '🗄️',
    stars: 12455,
    lastUpdated: '2026-03-01',
    tags: ['digital-signature', 'document-signing', 'docusign-alternative', 'e-signature', 'esign', 'esignature', 'next-auth'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'openpanel',
    name: 'Openpanel',
    slug: 'openpanel',
    tagline: 'OpenPanel is an open-source web and product analytics platform, an open-source alternative to Mixpanel with optional ...',
    description:
      'OpenPanel is an open-source web and product analytics platform, an open-source alternative to Mixpanel with optional self-hosting.',
    website: 'https://openpanel.dev',
    github: 'https://github.com/Openpanel-dev/openpanel',
    license: 'AGPL-3.0',
    categories: ['analytics'],
    replacesTools: ['Google Analytics', 'Mixpanel'],
    selfHostable: true,
    logoPlaceholderEmoji: '📊',
    stars: 5398,
    lastUpdated: '2026-02-27',
    tags: ['alternative', 'analytics', 'open-source', 'privacy', 'productanalytics', 'webanalytics'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'colanode',
    name: 'Colanode',
    slug: 'colanode',
    tagline: 'Open-source and local-first Slack and Notion alternative that puts you in control of your data',
    description:
      'Open-source and local-first Slack and Notion alternative that puts you in control of your data',
    website: 'https://colanode.com',
    github: 'https://github.com/colanode/colanode',
    license: 'Apache-2.0',
    categories: ['kommunikation'],
    replacesTools: ['WhatsApp', 'Slack', 'Microsoft Teams'],
    selfHostable: true,
    logoPlaceholderEmoji: '💬',
    stars: 4615,
    lastUpdated: '2026-02-21',
    tags: ['chat', 'chat-application', 'crdt', 'editor', 'electron', 'knowledge-base', 'local-first'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'peppermint',
    name: 'Peppermint',
    slug: 'peppermint',
    tagline: 'An open source issue management & help desk solution. A zendesk & jira alternative',
    description:
      'An open source issue management & help desk solution. A zendesk & jira alternative',
    website: 'https://peppermint.sh',
    github: 'https://github.com/Peppermint-Lab/peppermint',
    license: 'MIT',
    categories: ['crm'],
    replacesTools: ['Salesforce', 'HubSpot'],
    selfHostable: true,
    logoPlaceholderEmoji: '🤝',
    stars: 3045,
    lastUpdated: '2025-09-21',
    tags: ['crm', 'customer-relationship-management', 'docker', 'full-stack', 'helpdesk', 'issue-tracker', 'javascript'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'opengist',
    name: 'Opengist',
    slug: 'opengist',
    tagline: 'Self-hosted pastebin powered by Git, open-source alternative to Github Gist.',
    description:
      'Self-hosted pastebin powered by Git, open-source alternative to Github Gist.',
    website: 'https://opengist.io',
    github: 'https://github.com/thomiceli/opengist',
    license: 'AGPL-3.0',
    categories: ['container'],
    replacesTools: ['Docker Hub', 'Kubernetes EKS'],
    selfHostable: true,
    logoPlaceholderEmoji: '📦',
    stars: 3006,
    lastUpdated: '2026-02-25',
    tags: ['docker', 'gist', 'git', 'go', 'golang', 'pastebin', 'pastebin-service'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'willow',
    name: 'Willow',
    slug: 'willow',
    tagline: 'Open source, local, and self-hosted Amazon Echo/Google Home competitive Voice Assistant alternative',
    description:
      'Open source, local, and self-hosted Amazon Echo/Google Home competitive Voice Assistant alternative',
    website: 'https://heywillow.io/',
    github: 'https://github.com/HeyWillow/willow',
    license: 'Apache-2.0',
    categories: ['ki-ml'],
    replacesTools: ['ChatGPT API', 'Midjourney', 'DALL-E'],
    selfHostable: true,
    logoPlaceholderEmoji: '🤖',
    stars: 2979,
    lastUpdated: '2026-02-13',
    tags: ['alexa', 'deep-learning', 'echo', 'esp-adf', 'esp-idf', 'esp32', 'google-home'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'sorry-cypress',
    name: 'Sorry Cypress',
    slug: 'sorry-cypress',
    tagline: 'Open-source, free, self-hosted alternative to Cypress Dashboard',
    description:
      'Open-source, free, self-hosted alternative to Cypress Dashboard',
    website: 'https://sorry-cypress.dev',
    github: 'https://github.com/sorry-cypress/sorry-cypress',
    license: 'MIT',
    categories: ['monitoring'],
    replacesTools: ['Datadog', 'New Relic', 'PagerDuty'],
    selfHostable: true,
    logoPlaceholderEmoji: '📈',
    stars: 2814,
    lastUpdated: '2025-09-14',
    tags: ['cypress', 'cypress-dashboard', 'cypress-io', 'cypress-tests', 'dashboard', 'e2e-tests', 'hacktoberfest'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'openrecall',
    name: 'Openrecall',
    slug: 'openrecall',
    tagline: 'OpenRecall is a fully open-source, privacy-first alternative to proprietary solutions like Microsoft\'s Windows Recall.',
    description:
      'OpenRecall is a fully open-source, privacy-first alternative to proprietary solutions like Microsoft\'s Windows Recall. With OpenRecall, you can easily access your digital history, enhancing your memory and productivity without compromising your privacy.',
    website: 'https://github.com/openrecall/openrecall',
    github: 'https://github.com/openrecall/openrecall',
    license: 'AGPL-3.0',
    categories: ['ki-ml'],
    replacesTools: ['ChatGPT API', 'Midjourney', 'DALL-E'],
    selfHostable: true,
    logoPlaceholderEmoji: '🤖',
    stars: 2759,
    lastUpdated: '2025-09-24',
    tags: ['ai', 'alternative', 'history', 'macos', 'ocr', 'open-source', 'privacy'],
    difficulty: 'mittel',
    platforms: ['linux', 'windows', 'macos'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'checkcle',
    name: 'Checkcle',
    slug: 'checkcle',
    tagline: 'CheckCle is a self-hosted, open-source monitoring platform for seamless, real-time full-stack systems, applications, ...',
    description:
      'CheckCle is a self-hosted, open-source monitoring platform for seamless, real-time full-stack systems, applications, and infrastructure. It provides real-time uptime monitoring, distributed checks, incident tracking, and alerts. All deployable anywhere.',
    website: 'https://checkcle.io',
    github: 'https://github.com/operacle/checkcle',
    license: 'MIT',
    categories: ['monitoring'],
    replacesTools: ['Datadog', 'New Relic', 'PagerDuty'],
    selfHostable: true,
    logoPlaceholderEmoji: '📈',
    stars: 2364,
    lastUpdated: '2026-02-26',
    tags: ['alternative', 'api', 'checkcle', 'container', 'docker', 'full-stack', 'go'],
    difficulty: 'fortgeschritten',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'notediscovery',
    name: 'Notediscovery',
    slug: 'notediscovery',
    tagline: 'Your Self-Hosted Knowledge Base',
    description:
      'Your Self-Hosted Knowledge Base',
    website: 'https://www.notediscovery.com',
    github: 'https://github.com/gamosoft/NoteDiscovery',
    license: 'MIT',
    categories: ['notizen'],
    replacesTools: ['Notion', 'Evernote', 'Obsidian'],
    selfHostable: true,
    logoPlaceholderEmoji: '📝',
    stars: 2353,
    lastUpdated: '2026-02-23',
    tags: ['alternative', 'docker', 'evernote', 'fastapi', 'free', 'hosted', 'knowledge-base'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'open-higgsfield-ai',
    name: 'Open Higgsfield Ai',
    slug: 'open-higgsfield-ai',
    tagline: 'Open-source alternative to Higgsfield AI — Free AI image generation & cinema studio with 20+ models (Flux, SDXL, Midj...',
    description:
      'Open-source alternative to Higgsfield AI — Free AI image generation & cinema studio with 20+ models (Flux, SDXL, Midjourney, Ideogram). Self-hosted, customizable, MIT licensed.',
    website: 'https://github.com/Anil-matcha/Open-Higgsfield-AI',
    github: 'https://github.com/Anil-matcha/Open-Higgsfield-AI',
    license: 'MIT',
    categories: ['ki-ml'],
    replacesTools: ['ChatGPT API', 'Midjourney', 'DALL-E'],
    selfHostable: true,
    logoPlaceholderEmoji: '🤖',
    stars: 2333,
    lastUpdated: '2026-02-27',
    tags: ['ai-art-generator', 'ai-image-generation', 'ai-video-generation', 'cinematic', 'content-creation', 'creative-tools', 'flux-1'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'litlyx',
    name: 'Litlyx',
    slug: 'litlyx',
    tagline: 'Powerful Analytics Solution. Setup in 30 seconds. Display all your data on a Simple, AI-powered dashboard. Fully self...',
    description:
      'Powerful Analytics Solution. Setup in 30 seconds. Display all your data on a Simple, AI-powered dashboard. Fully self-hostable and GDPR compliant. Alternative to Google Analytics, MixPanel, Plausible, Umami & Matomo.',
    website: 'https://litlyx.com',
    github: 'https://github.com/Litlyx/litlyx',
    license: 'Apache-2.0',
    categories: ['analytics'],
    replacesTools: ['Google Analytics', 'Mixpanel'],
    selfHostable: true,
    logoPlaceholderEmoji: '📊',
    stars: 1681,
    lastUpdated: '2025-12-03',
    tags: ['ai', 'analytics', 'angular', 'charts', 'data', 'data-analysis', 'data-visualization'],
    difficulty: 'einfach',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'paddler',
    name: 'Paddler',
    slug: 'paddler',
    tagline: 'Open-source LLM load balancer and serving platform for self-hosting LLMs at scale 🏓🦙 Alternative to projects like llm...',
    description:
      'Open-source LLM load balancer and serving platform for self-hosting LLMs at scale 🏓🦙 Alternative to projects like llm-d, Docker Model Runner, etc but with less moving parts and simple deployments built around ggml ecosystem. Runs on CPU and GPU.',
    website: 'https://paddler.intentee.com',
    github: 'https://github.com/intentee/paddler',
    license: 'Apache-2.0',
    categories: ['ki-ml'],
    replacesTools: ['ChatGPT API', 'Midjourney', 'DALL-E'],
    selfHostable: true,
    logoPlaceholderEmoji: '🤖',
    stars: 1471,
    lastUpdated: '2026-02-25',
    tags: ['ai', 'llamacpp', 'llm', 'llmops', 'load-balancer'],
    difficulty: 'einfach',
    platforms: ['linux', 'macos', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'authgear-server',
    name: 'Authgear Server',
    slug: 'authgear-server',
    tagline: 'Open source Auth0/Clerk/Firebase alternative.',
    description:
      'Open source Auth0/Clerk/Firebase alternative. Passkeys, SSO, MFA, passwordless, biometric login. Self-hosted or cloud. Enterprise-ready for SaaS & mobile apps',
    website: 'https://www.authgear.com',
    github: 'https://github.com/authgear/authgear-server',
    license: 'Apache-2.0',
    categories: ['backend-frameworks'],
    replacesTools: ['Firebase', 'Supabase Pro'],
    selfHostable: true,
    logoPlaceholderEmoji: '⚙️',
    stars: 1431,
    lastUpdated: '2026-02-27',
    tags: ['2fa', 'auth0', 'authentication', 'biometric', 'clerk-alternative', 'firebase-alternative', 'identity'],
    difficulty: 'fortgeschritten',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'nixopus',
    name: 'Nixopus',
    slug: 'nixopus',
    tagline: 'Open Source Alternative to vercel, heroku, netlify with simplified workflows',
    description:
      'Open Source Alternative to vercel, heroku, netlify with simplified workflows',
    website: 'https://nixopus.com',
    github: 'https://github.com/raghavyuva/nixopus',
    license: 'MIT',
    categories: ['ci-cd'],
    replacesTools: ['GitHub Actions', 'Jenkins', 'CircleCI'],
    selfHostable: true,
    logoPlaceholderEmoji: '🔄',
    stars: 1375,
    lastUpdated: '2026-02-28',
    tags: ['ci-cd', 'coolify', 'deployment', 'file-manager', 'golang', 'heroku', 'homelab'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'courselit',
    name: 'Courselit',
    slug: 'courselit',
    tagline: 'Create/Sell courses and digital downloads and publish blogs on your own branded website.',
    description:
      'Create/Sell courses and digital downloads and publish blogs on your own branded website. An open source alternative to Teachable, Thinkific, Podia and the likes.',
    website: 'https://courselit.app',
    github: 'https://github.com/codelitdev/courselit',
    license: 'AGPL-3.0',
    categories: ['cms'],
    replacesTools: ['WordPress.com', 'Squarespace', 'Wix'],
    selfHostable: true,
    logoPlaceholderEmoji: '🌍',
    stars: 1111,
    lastUpdated: '2026-02-28',
    tags: ['blog', 'cms', 'cms-framework', 'course', 'courses', 'elearning', 'ghost'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'littlelink-server',
    name: 'Littlelink Server',
    slug: 'littlelink-server',
    tagline: 'A lightweight, open source, stateless, and self-hosted alternative to linktree in a Docker container!',
    description:
      'A lightweight, open source, stateless, and self-hosted alternative to linktree in a Docker container!',
    website: 'https://links.technotim.com',
    github: 'https://github.com/timothystewart6/littlelink-server',
    license: 'MIT',
    categories: ['container'],
    replacesTools: ['Docker Hub', 'Kubernetes EKS'],
    selfHostable: true,
    logoPlaceholderEmoji: '📦',
    stars: 1105,
    lastUpdated: '2026-02-26',
    tags: ['docker', 'express', 'javascript', 'link', 'linktree', 'node', 'nodejs'],
    difficulty: 'einfach',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'peekaping',
    name: 'Peekaping',
    slug: 'peekaping',
    tagline: 'Open Source Uptime Kuma Alternative',
    description:
      'Open Source Uptime Kuma Alternative',
    website: 'https://peekaping.com',
    github: 'https://github.com/0xfurai/peekaping',
    license: 'MIT',
    categories: ['monitoring'],
    replacesTools: ['Datadog', 'New Relic', 'PagerDuty'],
    selfHostable: true,
    logoPlaceholderEmoji: '📈',
    stars: 1043,
    lastUpdated: '2026-02-21',
    tags: ['monitor', 'monitoring', 'self-hosted', 'selfhosted', 'telemetry', 'uptime', 'uptime-monitoring'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'aegra',
    name: 'Aegra',
    slug: 'aegra',
    tagline: 'Open source LangGraph Platform alternative - Self-hosted AI agent backend with FastAPI and PostgreSQL.',
    description:
      'Open source LangGraph Platform alternative - Self-hosted AI agent backend with FastAPI and PostgreSQL. Zero vendor lock-in, full control over your agent infrastructure.',
    website: 'https://aegra.dev',
    github: 'https://github.com/ibbybuilds/aegra',
    license: 'Apache-2.0',
    categories: ['backend-frameworks'],
    replacesTools: ['Firebase', 'Supabase Pro'],
    selfHostable: true,
    logoPlaceholderEmoji: '⚙️',
    stars: 644,
    lastUpdated: '2026-02-27',
    tags: ['fastapi', 'langchain', 'langggraph', 'langgraph-agents', 'langgraph-platform-alternative', 'opensource-langgraph-platform', 'postgres'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
];
