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
  },
  {
    "id": "prompts-chat",
    "name": "Prompts.chat",
    "slug": "prompts-chat",
    "tagline": "f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the community. Free and open source — self-...",
    "description": "f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the community. Free and open source — self-host for your organization with complete privacy.",
    "website": "https://prompts.chat",
    "github": "https://github.com/f/prompts.chat",
    "license": "CC0-1.0",
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
    "stars": 149301,
    "lastUpdated": "2026-03-01",
    "tags": [
      "ai",
      "artificial-intelligence",
      "awesome-list",
      "chatgpt",
      "chatgpt-prompts",
      "claude",
      "gemini"
    ],
    "difficulty": "einfach",
    "platforms": [
      "linux",
      "macos"
    ],
    "featured": false,
    "addedDate": "2026-03-01"
  },
  {
    "id": "langfuse",
    "name": "Langfuse",
    "slug": "langfuse",
    "tagline": "🪢 Open source LLM engineering platform: LLM Observability, metrics, evals, prompt management, playground, datasets.",
    "description": "🪢 Open source LLM engineering platform: LLM Observability, metrics, evals, prompt management, playground, datasets. Integrates with OpenTelemetry, Langchain, OpenAI SDK, LiteLLM, and more. 🍊YC W23",
    "website": "https://langfuse.com/docs",
    "github": "https://github.com/langfuse/langfuse",
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
    "stars": 22445,
    "lastUpdated": "2026-02-28",
    "tags": [
      "analytics",
      "autogen",
      "evaluation",
      "langchain",
      "large-language-models",
      "llama-index",
      "llm"
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
    "id": "goreplay",
    "name": "Goreplay",
    "slug": "goreplay",
    "tagline": "GoReplay is an open-source tool for capturing and replaying live HTTP traffic into a test environment in order to con...",
    "description": "GoReplay is an open-source tool for capturing and replaying live HTTP traffic into a test environment in order to continuously test your system with real data. It can be used to increase confidence in code deployments, configuration changes and infrastructure changes.",
    "website": "https://goreplay.org",
    "github": "https://github.com/probelabs/goreplay",
    "license": "MIT",
    "categories": [
      "dev-tools"
    ],
    "replacesTools": [
      "JetBrains Suite",
      "Visual Studio"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "⌨️",
    "stars": 19249,
    "lastUpdated": "2026-01-27",
    "tags": [
      "devops",
      "go",
      "qa",
      "testing",
      "testing-tools"
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
    "id": "self-hosting-guide",
    "name": "Self Hosting Guide",
    "slug": "self-hosting-guide",
    "tagline": "Self-Hosting Guide. Learn all about  locally hosting (on premises & private web servers) and managing software applic...",
    "description": "Self-Hosting Guide. Learn all about  locally hosting (on premises & private web servers) and managing software applications by yourself or your organization. Including Cloud, LLMs, WireGuard, Automation, Home Assistant, and Networking.",
    "website": "https://github.com/mikeroyal/Self-Hosting-Guide",
    "github": "https://github.com/mikeroyal/Self-Hosting-Guide",
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
    "stars": 18784,
    "lastUpdated": "2025-06-27",
    "tags": [
      "authentication",
      "awesome",
      "awesome-list",
      "decentralized",
      "docker-compose",
      "home-assistant",
      "home-automation"
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
    "id": "openobserve",
    "name": "Openobserve",
    "slug": "openobserve",
    "tagline": "OpenObserve is an open-source observability platform for logs, metrics, traces, and frontend monitoring.",
    "description": "OpenObserve is an open-source observability platform for logs, metrics, traces, and frontend monitoring. A cost-effective alternative to Datadog, Splunk, and Elasticsearch with 140x lower storage costs and single binary deployment.",
    "website": "https://openobserve.ai",
    "github": "https://github.com/openobserve/openobserve",
    "license": "AGPL-3.0",
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
    "stars": 18036,
    "lastUpdated": "2026-03-01",
    "tags": [
      "analytics",
      "apm",
      "datadog",
      "elasticsearch",
      "grafana",
      "jaeger",
      "kibana"
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
    "id": "encore",
    "name": "Encore",
    "slug": "encore",
    "tagline": "Open source framework for building robust type-safe distributed systems with declarative infrastructure",
    "description": "Open source framework for building robust type-safe distributed systems with declarative infrastructure",
    "website": "https://encore.dev",
    "github": "https://github.com/encoredev/encore",
    "license": "MPL-2.0",
    "categories": [
      "datenbanken"
    ],
    "replacesTools": [
      "Oracle",
      "MSSQL"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "🗄️",
    "stars": 11509,
    "lastUpdated": "2026-02-27",
    "tags": [
      "api",
      "aws",
      "backend",
      "backend-framework",
      "cloud",
      "cloud-native",
      "database"
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
    "id": "meetily",
    "name": "Meetily",
    "slug": "meetily",
    "tagline": "Privacy first, AI meeting assistant with 4x faster Parakeet/Whisper live transcription, speaker diarization, and Olla...",
    "description": "Privacy first, AI meeting assistant with 4x faster Parakeet/Whisper live transcription, speaker diarization, and Ollama summarization built on Rust. 100% local processing. no cloud required. Meetily (Meetly Ai - https://meetily.ai) is the #1 Self-hosted,  Open-source Ai meeting note taker for macOS & Windows.",
    "website": "https://meetily.ai",
    "github": "https://github.com/Zackriya-Solutions/meetily",
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
    "stars": 10082,
    "lastUpdated": "2026-02-28",
    "tags": [
      "ai",
      "ai-meeting-assistant",
      "llm",
      "local-ai",
      "mac",
      "meeting-minutes",
      "meeting-notes"
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
    "id": "blinko",
    "name": "Blinko",
    "slug": "blinko",
    "tagline": "An open-source, self-hosted personal AI note tool prioritizing privacy, built using TypeScript .",
    "description": "An open-source, self-hosted personal AI note tool prioritizing privacy, built using TypeScript .",
    "website": "https://blinko.space",
    "github": "https://github.com/blinkospace/blinko",
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
    "stars": 9510,
    "lastUpdated": "2026-02-12",
    "tags": [
      "markdown",
      "memos",
      "nextjs",
      "notebook",
      "openai",
      "postgres",
      "react"
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
    "id": "hyperdx",
    "name": "Hyperdx",
    "slug": "hyperdx",
    "tagline": "Resolve production issues, fast.",
    "description": "Resolve production issues, fast. An open source observability platform unifying session replays, logs, metrics, traces and errors powered by ClickHouse and OpenTelemetry.",
    "website": "https://hyperdx.io/",
    "github": "https://github.com/hyperdxio/hyperdx",
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
    "stars": 9346,
    "lastUpdated": "2026-02-28",
    "tags": [
      "alerting",
      "analytics",
      "apm",
      "application-monitoring",
      "clickhouse",
      "dashboard",
      "frontend-monitoring"
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
    "id": "highlight",
    "name": "Highlight",
    "slug": "highlight",
    "tagline": "highlight.io: The open source, full-stack monitoring platform.",
    "description": "highlight.io: The open source, full-stack monitoring platform. Error monitoring, session replay, logging, distributed tracing, and more.",
    "website": "https://app.highlight.io",
    "github": "https://github.com/highlight/highlight",
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
    "stars": 9166,
    "lastUpdated": "2026-02-27",
    "tags": [
      "apm",
      "full-stack",
      "golang",
      "metrics",
      "monitoring",
      "observability",
      "open-source"
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
    "id": "checkov",
    "name": "Checkov",
    "slug": "checkov",
    "tagline": "Prevent cloud misconfigurations and find vulnerabilities during build-time in infrastructure as code, container image...",
    "description": "Prevent cloud misconfigurations and find vulnerabilities during build-time in infrastructure as code, container images and open source packages with Checkov by Bridgecrew.",
    "website": "https://www.checkov.io/",
    "github": "https://github.com/bridgecrewio/checkov",
    "license": "Apache-2.0",
    "categories": [
      "container"
    ],
    "replacesTools": [
      "Docker Hub",
      "Kubernetes EKS"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "📦",
    "stars": 8491,
    "lastUpdated": "2026-02-24",
    "tags": [
      "aws",
      "aws-security",
      "azure",
      "cloudformation",
      "compliance",
      "devops",
      "gcp"
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
    "id": "openstatus",
    "name": "Openstatus",
    "slug": "openstatus",
    "tagline": "🫖 Status page with uptime monitoring & API monitoring as code   🫖",
    "description": "🫖 Status page with uptime monitoring & API monitoring as code   🫖",
    "website": "https://openstatus.dev",
    "github": "https://github.com/openstatusHQ/openstatus",
    "license": "AGPL-3.0",
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
    "stars": 8395,
    "lastUpdated": "2026-02-28",
    "tags": [
      "bun",
      "drizzle-orm",
      "monitoring",
      "monitoring-as-code",
      "nextjs",
      "observability",
      "on-call"
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
    "id": "lesspass",
    "name": "Lesspass",
    "slug": "lesspass",
    "tagline": ":key: stateless open source password manager",
    "description": ":key: stateless open source password manager",
    "website": "https://www.lesspass.com",
    "github": "https://github.com/lesspass/lesspass",
    "license": "GPL-3.0",
    "categories": [
      "passwort-manager"
    ],
    "replacesTools": [
      "LastPass",
      "1Password"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "🔑",
    "stars": 5983,
    "lastUpdated": "2026-02-28",
    "tags": [
      "anonymous",
      "lesspass",
      "password",
      "password-manager",
      "passwords",
      "privacy",
      "self-hosted"
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
    "id": "oxicloud",
    "name": "Oxicloud",
    "slug": "oxicloud",
    "tagline": "☁️ Ultra-fast, secure & lightweight self-hosted cloud storage — your files, photos, calendars & contacts, all in one ...",
    "description": "☁️ Ultra-fast, secure & lightweight self-hosted cloud storage — your files, photos, calendars & contacts, all in one place. Built in Rust.",
    "website": "https://github.com/DioCrafts/OxiCloud",
    "github": "https://github.com/DioCrafts/OxiCloud",
    "license": "MIT",
    "categories": [
      "cloud-speicher"
    ],
    "replacesTools": [
      "Google Drive",
      "Dropbox",
      "OneDrive"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "☁️",
    "stars": 2614,
    "lastUpdated": "2026-02-26",
    "tags": [
      "cloud",
      "cloud-storage",
      "dropbox",
      "file-share",
      "file-sync",
      "file-upload",
      "nas"
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
    "id": "projectsend",
    "name": "Projectsend",
    "slug": "projectsend",
    "tagline": "ProjectSend is a free, open source software that lets you share files with your clients, focused on ease of use and p...",
    "description": "ProjectSend is a free, open source software that lets you share files with your clients, focused on ease of use and privacy. It supports clients groups, system users roles, statistics, multiple languages, detailed logs... and much more!",
    "website": "https://www.projectsend.org/",
    "github": "https://github.com/projectsend/projectsend",
    "license": "GPL-2.0",
    "categories": [
      "cloud-speicher"
    ],
    "replacesTools": [
      "Google Drive",
      "Dropbox",
      "OneDrive"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "☁️",
    "stars": 1825,
    "lastUpdated": "2026-02-25",
    "tags": [
      "clients-oriented",
      "file-sharing",
      "free-software",
      "open-source",
      "php",
      "projectsend",
      "self-hosted"
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
    "id": "beecount",
    "name": "Beecount",
    "slug": "beecount",
    "tagline": "🐝 开源记账App，支持iCloud/自建服务器同步(Supabase/WebDAV/S3)，AI智能记账 | Open-source finance tracker with iCloud & self-hosted sync (S...",
    "description": "🐝 开源记账App，支持iCloud/自建服务器同步(Supabase/WebDAV/S3)，AI智能记账 | Open-source finance tracker with iCloud & self-hosted sync (Supabase/WebDAV/S3), AI-powered bookkeeping, cross-platform, privacy-first",
    "website": "https://github.com/TNT-Likely/BeeCount",
    "github": "https://github.com/TNT-Likely/BeeCount",
    "license": "MIT",
    "categories": [
      "erp"
    ],
    "replacesTools": [
      "SAP Business One",
      "Oracle ERP"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "🏭",
    "stars": 1183,
    "lastUpdated": "2026-02-27",
    "tags": [
      "account",
      "accounting",
      "accounting-app",
      "chinese",
      "expense-tracker",
      "finance-app",
      "flutter"
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
    "id": "bricksllm",
    "name": "Bricksllm",
    "slug": "bricksllm",
    "tagline": "🔒 Enterprise-grade API gateway that helps you monitor and impose cost or rate limits per API key.",
    "description": "🔒 Enterprise-grade API gateway that helps you monitor and impose cost or rate limits per API key. Get fine-grained access control and monitoring per user, application, or environment. Supports OpenAI, Azure OpenAI, Anthropic, vLLM, and open-source LLMs.",
    "website": "https://trybricks.ai/",
    "github": "https://github.com/bricks-cloud/BricksLLM",
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
    "stars": 1161,
    "lastUpdated": "2025-01-05",
    "tags": [
      "ai",
      "anthropic",
      "api",
      "artificial-intelligence",
      "azure",
      "docker",
      "generative-ai"
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
    "id": "agent",
    "name": "Agent",
    "slug": "agent",
    "tagline": "Ship your code, on autopilot. An open source agent that lives on your machines 24/7 and keeps your apps running. 🦀",
    "description": "Ship your code, on autopilot. An open source agent that lives on your machines 24/7 and keeps your apps running. 🦀",
    "website": "https://stakpak.dev",
    "github": "https://github.com/stakpak/agent",
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
    "stars": 1038,
    "lastUpdated": "2026-02-28",
    "tags": [
      "agent",
      "ai-agent",
      "autonomous-agent",
      "devops",
      "devops-agents",
      "devtool",
      "generative-ai"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "macos"
    ],
    "featured": false,
    "addedDate": "2026-03-01"
  },
  {
    "id": "sharkord",
    "name": "Sharkord",
    "slug": "sharkord",
    "tagline": "Lightweight, self-hosted, open-source chat server with voice, video, text, and screen sharing.",
    "description": "Lightweight, self-hosted, open-source chat server with voice, video, text, and screen sharing. Built for small groups who want privacy, simplicity, and full control over their data.",
    "website": "https://sharkord.com",
    "github": "https://github.com/Sharkord/sharkord",
    "license": "MIT",
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
    "stars": 1037,
    "lastUpdated": "2026-03-01",
    "tags": [
      "bun",
      "chat",
      "data-ownership",
      "mediasoup",
      "messaging",
      "privacy",
      "realtime"
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
    "id": "swetrix",
    "name": "Swetrix",
    "slug": "swetrix",
    "tagline": "📈 Swetrix is a cookie-less, open source, privacy-first web analytics, website speed monitoring and error tracking ser...",
    "description": "📈 Swetrix is a cookie-less, open source, privacy-first web analytics, website speed monitoring and error tracking service that you can host yourself or use in the cloud. Get started for free!",
    "website": "https://swetrix.com",
    "github": "https://github.com/Swetrix/swetrix",
    "license": "AGPL-3.0",
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
    "stars": 891,
    "lastUpdated": "2026-03-01",
    "tags": [
      "charts",
      "clickhouse",
      "docker",
      "gdpr",
      "google-analytics",
      "metrics",
      "monitoring"
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
    "id": "eclaire",
    "name": "Eclaire",
    "slug": "eclaire",
    "tagline": "Local-first, open-source AI assistant for your data.",
    "description": "Local-first, open-source AI assistant for your data. Unify tasks, notes, docs, photos, and bookmarks. Private, self-hosted, and extensible via APIs.",
    "website": "https://eclaire.co",
    "github": "https://github.com/eclaire-labs/eclaire",
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
    "stars": 810,
    "lastUpdated": "2026-02-25",
    "tags": [
      "ai",
      "ai-assistant",
      "automation",
      "bookmark-manager",
      "bookmarks",
      "data-extraction",
      "document-processing"
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
    "id": "geopulse",
    "name": "Geopulse",
    "slug": "geopulse",
    "tagline": "A self-hosted, privacy-first location tracking platform.",
    "description": "A self-hosted, privacy-first location tracking platform. The perfect open-source alternative to Google Timeline with automatic trip detection, Immich integration, and detailed analytics.",
    "website": "https://tess1o.github.io/geopulse/",
    "github": "https://github.com/tess1o/geopulse",
    "license": "MIT",
    "categories": [
      "analytics"
    ],
    "replacesTools": [
      "Google Analytics",
      "Mixpanel"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "📊",
    "stars": 613,
    "lastUpdated": "2026-02-27",
    "tags": [
      "gps-tracker",
      "gps-tracking",
      "java",
      "owntracks",
      "postgis",
      "postgis-database",
      "postgres"
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
    "id": "thiss-link",
    "name": "Thiss.link",
    "slug": "thiss-link",
    "tagline": "🔥 MagLit - Privacy Respecting Encrypted Link Shortener with Password Protection and Torrent Magnet Links support",
    "description": "🔥 MagLit - Privacy Respecting Encrypted Link Shortener with Password Protection and Torrent Magnet Links support",
    "website": "https://maglit.me",
    "github": "https://github.com/NayamAmarshe/thiss.link",
    "license": "AGPL-3.0",
    "categories": [
      "passwort-manager"
    ],
    "replacesTools": [
      "LastPass",
      "1Password"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "🔑",
    "stars": 594,
    "lastUpdated": "2026-02-24",
    "tags": [
      "encryption",
      "foss",
      "free",
      "linkshortener",
      "nextjs",
      "open-source",
      "privacy"
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
    "id": "relay",
    "name": "Relay",
    "slug": "relay",
    "tagline": "✉️ Open-Source Email API for Developers. Self-hosted Alternative to SES, Mailgun, SendGrid.",
    "description": "✉️ Open-Source Email API for Developers. Self-hosted Alternative to SES, Mailgun, SendGrid.",
    "website": "https://relay.hyvor.com",
    "github": "https://github.com/hyvor/relay",
    "license": "AGPL-3.0",
    "categories": [
      "email-server"
    ],
    "replacesTools": [
      "Gmail-Server",
      "Exchange"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "📮",
    "stars": 524,
    "lastUpdated": "2026-02-28",
    "tags": [
      "email",
      "smtp"
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
    "id": "super",
    "name": "Super",
    "slug": "super",
    "tagline": "📡 SPR: Open Source, secure, user friendly and fast wifi routers for your home.",
    "description": "📡 SPR: Open Source, secure, user friendly and fast wifi routers for your home. One wifi password per device. Ad Blocking & Privacy Blocklists. Policy Based Network Access",
    "website": "https://www.supernetworks.org/",
    "github": "https://github.com/spr-networks/super",
    "license": "BSD-3-Clause",
    "categories": [
      "vpn"
    ],
    "replacesTools": [
      "NordVPN",
      "ExpressVPN"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "🛡️",
    "stars": 502,
    "lastUpdated": "2026-02-26",
    "tags": [
      "adblock",
      "alerting",
      "coredns",
      "golang",
      "homelab",
      "internet-filtering",
      "nftables"
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
    "id": "payload",
    "name": "Payload",
    "slug": "payload",
    "tagline": "Payload is the open-source, fullstack Next.js framework, giving you instant backend superpowers.",
    "description": "Payload is the open-source, fullstack Next.js framework, giving you instant backend superpowers. Get a full TypeScript backend and admin panel instantly. Use Payload as a headless CMS or for building powerful applications.",
    "website": "https://payloadcms.com",
    "github": "https://github.com/payloadcms/payload",
    "license": "MIT",
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
    "stars": 40870,
    "lastUpdated": "2026-03-01",
    "tags": [
      "cms",
      "content-management",
      "content-management-system",
      "express",
      "graphql",
      "headless",
      "headless-cms"
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
    "id": "onyx",
    "name": "Onyx",
    "slug": "onyx",
    "tagline": "Open Source AI Platform - AI Chat with advanced features that works with every LLM",
    "description": "Open Source AI Platform - AI Chat with advanced features that works with every LLM",
    "website": "https://onyx.app",
    "github": "https://github.com/onyx-dot-app/onyx",
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
    "stars": 17626,
    "lastUpdated": "2026-03-01",
    "tags": [
      "ai",
      "ai-chat",
      "chatgpt",
      "chatui",
      "enterprise-search",
      "gen-ai",
      "information-retrieval"
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
    "id": "tinacms",
    "name": "Tinacms",
    "slug": "tinacms",
    "tagline": "A fully open-source headless CMS that supports Markdown and Visual Editing",
    "description": "A fully open-source headless CMS that supports Markdown and Visual Editing",
    "website": "https://tina.io",
    "github": "https://github.com/tinacms/tinacms",
    "license": "Apache-2.0",
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
    "stars": 13176,
    "lastUpdated": "2026-02-26",
    "tags": [
      "cms",
      "content-management-system",
      "forestry",
      "markdown",
      "nextjs",
      "react",
      "tina"
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
    "id": "casdoor",
    "name": "Casdoor",
    "slug": "casdoor",
    "tagline": "An open-source AI-first Identity and Access Management (IAM) /AI MCP gateway and auth server with web UI supporting M...",
    "description": "An open-source AI-first Identity and Access Management (IAM) /AI MCP gateway and auth server with web UI supporting MCP, A2A, OAuth 2.1, OIDC, SAML, CAS, LDAP, SCIM, WebAuthn, TOTP, MFA, Face ID, Google Workspace, Azure AD",
    "website": "https://casdoor.org",
    "github": "https://github.com/casdoor/casdoor",
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
    "stars": 13088,
    "lastUpdated": "2026-02-28",
    "tags": [
      "ai-gateway",
      "auth",
      "authentication",
      "authn",
      "casdoor",
      "faceid",
      "iam"
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
    "id": "cas",
    "name": "Cas",
    "slug": "cas",
    "tagline": "Apereo CAS - Identity & Single Sign On for all earthlings and beyond.",
    "description": "Apereo CAS - Identity & Single Sign On for all earthlings and beyond.",
    "website": "https://apereo.github.io/cas/",
    "github": "https://github.com/apereo/cas",
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
    "stars": 11293,
    "lastUpdated": "2026-03-01",
    "tags": [
      "authentication",
      "authorization",
      "aws",
      "duosecurity",
      "fido",
      "identity-provider",
      "java"
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
    "id": "dicedb",
    "name": "Dicedb",
    "slug": "dicedb",
    "tagline": "Open-source, low-latency key/value engine built on Valkey with hierarchical storage tiers.",
    "description": "Open-source, low-latency key/value engine built on Valkey with hierarchical storage tiers.",
    "website": "https://dicedb.io/",
    "github": "https://github.com/dicedb/dicedb",
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
    "stars": 10694,
    "lastUpdated": "2026-02-12",
    "tags": [
      "cache",
      "database",
      "key-value",
      "key-value-store",
      "nosql",
      "redis",
      "storage-engine"
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
  {
    id: 'prompts-chat',
    name: 'Prompts.chat',
    slug: 'prompts-chat',
    tagline: 'f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the community. Free and open source — self-...',
    description:
      'f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the community. Free and open source — self-host for your organization with complete privacy.',
    website: 'https://prompts.chat',
    github: 'https://github.com/f/prompts.chat',
    license: 'CC0-1.0',
    categories: ['ki-ml'],
    replacesTools: ['ChatGPT API', 'Midjourney', 'DALL-E'],
    selfHostable: true,
    logoPlaceholderEmoji: '🤖',
    stars: 149301,
    lastUpdated: '2026-03-01',
    tags: ['ai', 'artificial-intelligence', 'awesome-list', 'chatgpt', 'chatgpt-prompts', 'claude', 'gemini'],
    difficulty: 'einfach',
    platforms: ['linux', 'macos'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'langfuse',
    name: 'Langfuse',
    slug: 'langfuse',
    tagline: '🪢 Open source LLM engineering platform: LLM Observability, metrics, evals, prompt management, playground, datasets.',
    description:
      '🪢 Open source LLM engineering platform: LLM Observability, metrics, evals, prompt management, playground, datasets. Integrates with OpenTelemetry, Langchain, OpenAI SDK, LiteLLM, and more. 🍊YC W23',
    website: 'https://langfuse.com/docs',
    github: 'https://github.com/langfuse/langfuse',
    license: 'MIT',
    categories: ['monitoring'],
    replacesTools: ['Datadog', 'New Relic', 'PagerDuty'],
    selfHostable: true,
    logoPlaceholderEmoji: '📈',
    stars: 22445,
    lastUpdated: '2026-02-28',
    tags: ['analytics', 'autogen', 'evaluation', 'langchain', 'large-language-models', 'llama-index', 'llm'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'goreplay',
    name: 'Goreplay',
    slug: 'goreplay',
    tagline: 'GoReplay is an open-source tool for capturing and replaying live HTTP traffic into a test environment in order to con...',
    description:
      'GoReplay is an open-source tool for capturing and replaying live HTTP traffic into a test environment in order to continuously test your system with real data. It can be used to increase confidence in code deployments, configuration changes and infrastructure changes.',
    website: 'https://goreplay.org',
    github: 'https://github.com/probelabs/goreplay',
    license: 'MIT',
    categories: ['dev-tools'],
    replacesTools: ['JetBrains Suite', 'Visual Studio'],
    selfHostable: true,
    logoPlaceholderEmoji: '⌨️',
    stars: 19249,
    lastUpdated: '2026-01-27',
    tags: ['devops', 'go', 'qa', 'testing', 'testing-tools'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'self-hosting-guide',
    name: 'Self Hosting Guide',
    slug: 'self-hosting-guide',
    tagline: 'Self-Hosting Guide. Learn all about  locally hosting (on premises & private web servers) and managing software applic...',
    description:
      'Self-Hosting Guide. Learn all about  locally hosting (on premises & private web servers) and managing software applications by yourself or your organization. Including Cloud, LLMs, WireGuard, Automation, Home Assistant, and Networking.',
    website: 'https://github.com/mikeroyal/Self-Hosting-Guide',
    github: 'https://github.com/mikeroyal/Self-Hosting-Guide',
    license: 'MIT',
    categories: ['backend-frameworks'],
    replacesTools: ['Firebase', 'Supabase Pro'],
    selfHostable: true,
    logoPlaceholderEmoji: '⚙️',
    stars: 18784,
    lastUpdated: '2025-06-27',
    tags: ['authentication', 'awesome', 'awesome-list', 'decentralized', 'docker-compose', 'home-assistant', 'home-automation'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'openobserve',
    name: 'Openobserve',
    slug: 'openobserve',
    tagline: 'OpenObserve is an open-source observability platform for logs, metrics, traces, and frontend monitoring.',
    description:
      'OpenObserve is an open-source observability platform for logs, metrics, traces, and frontend monitoring. A cost-effective alternative to Datadog, Splunk, and Elasticsearch with 140x lower storage costs and single binary deployment.',
    website: 'https://openobserve.ai',
    github: 'https://github.com/openobserve/openobserve',
    license: 'AGPL-3.0',
    categories: ['monitoring'],
    replacesTools: ['Datadog', 'New Relic', 'PagerDuty'],
    selfHostable: true,
    logoPlaceholderEmoji: '📈',
    stars: 18036,
    lastUpdated: '2026-03-01',
    tags: ['analytics', 'apm', 'datadog', 'elasticsearch', 'grafana', 'jaeger', 'kibana'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'encore',
    name: 'Encore',
    slug: 'encore',
    tagline: 'Open source framework for building robust type-safe distributed systems with declarative infrastructure',
    description:
      'Open source framework for building robust type-safe distributed systems with declarative infrastructure',
    website: 'https://encore.dev',
    github: 'https://github.com/encoredev/encore',
    license: 'MPL-2.0',
    categories: ['datenbanken'],
    replacesTools: ['Oracle', 'MSSQL'],
    selfHostable: true,
    logoPlaceholderEmoji: '🗄️',
    stars: 11509,
    lastUpdated: '2026-02-27',
    tags: ['api', 'aws', 'backend', 'backend-framework', 'cloud', 'cloud-native', 'database'],
    difficulty: 'fortgeschritten',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'meetily',
    name: 'Meetily',
    slug: 'meetily',
    tagline: 'Privacy first, AI meeting assistant with 4x faster Parakeet/Whisper live transcription, speaker diarization, and Olla...',
    description:
      'Privacy first, AI meeting assistant with 4x faster Parakeet/Whisper live transcription, speaker diarization, and Ollama summarization built on Rust. 100% local processing. no cloud required. Meetily (Meetly Ai - https://meetily.ai) is the #1 Self-hosted,  Open-source Ai meeting note taker for macOS & Windows.',
    website: 'https://meetily.ai',
    github: 'https://github.com/Zackriya-Solutions/meetily',
    license: 'MIT',
    categories: ['ki-ml'],
    replacesTools: ['ChatGPT API', 'Midjourney', 'DALL-E'],
    selfHostable: true,
    logoPlaceholderEmoji: '🤖',
    stars: 10082,
    lastUpdated: '2026-02-28',
    tags: ['ai', 'ai-meeting-assistant', 'llm', 'local-ai', 'mac', 'meeting-minutes', 'meeting-notes'],
    difficulty: 'mittel',
    platforms: ['linux', 'windows', 'macos'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'blinko',
    name: 'Blinko',
    slug: 'blinko',
    tagline: 'An open-source, self-hosted personal AI note tool prioritizing privacy, built using TypeScript .',
    description:
      'An open-source, self-hosted personal AI note tool prioritizing privacy, built using TypeScript .',
    website: 'https://blinko.space',
    github: 'https://github.com/blinkospace/blinko',
    license: 'GPL-3.0',
    categories: ['notizen'],
    replacesTools: ['Notion', 'Evernote', 'Obsidian'],
    selfHostable: true,
    logoPlaceholderEmoji: '📝',
    stars: 9510,
    lastUpdated: '2026-02-12',
    tags: ['markdown', 'memos', 'nextjs', 'notebook', 'openai', 'postgres', 'react'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'hyperdx',
    name: 'Hyperdx',
    slug: 'hyperdx',
    tagline: 'Resolve production issues, fast.',
    description:
      'Resolve production issues, fast. An open source observability platform unifying session replays, logs, metrics, traces and errors powered by ClickHouse and OpenTelemetry.',
    website: 'https://hyperdx.io/',
    github: 'https://github.com/hyperdxio/hyperdx',
    license: 'MIT',
    categories: ['monitoring'],
    replacesTools: ['Datadog', 'New Relic', 'PagerDuty'],
    selfHostable: true,
    logoPlaceholderEmoji: '📈',
    stars: 9346,
    lastUpdated: '2026-02-28',
    tags: ['alerting', 'analytics', 'apm', 'application-monitoring', 'clickhouse', 'dashboard', 'frontend-monitoring'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'highlight',
    name: 'Highlight',
    slug: 'highlight',
    tagline: 'highlight.io: The open source, full-stack monitoring platform.',
    description:
      'highlight.io: The open source, full-stack monitoring platform. Error monitoring, session replay, logging, distributed tracing, and more.',
    website: 'https://app.highlight.io',
    github: 'https://github.com/highlight/highlight',
    license: 'MIT',
    categories: ['monitoring'],
    replacesTools: ['Datadog', 'New Relic', 'PagerDuty'],
    selfHostable: true,
    logoPlaceholderEmoji: '📈',
    stars: 9166,
    lastUpdated: '2026-02-27',
    tags: ['apm', 'full-stack', 'golang', 'metrics', 'monitoring', 'observability', 'open-source'],
    difficulty: 'fortgeschritten',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'checkov',
    name: 'Checkov',
    slug: 'checkov',
    tagline: 'Prevent cloud misconfigurations and find vulnerabilities during build-time in infrastructure as code, container image...',
    description:
      'Prevent cloud misconfigurations and find vulnerabilities during build-time in infrastructure as code, container images and open source packages with Checkov by Bridgecrew.',
    website: 'https://www.checkov.io/',
    github: 'https://github.com/bridgecrewio/checkov',
    license: 'Apache-2.0',
    categories: ['container'],
    replacesTools: ['Docker Hub', 'Kubernetes EKS'],
    selfHostable: true,
    logoPlaceholderEmoji: '📦',
    stars: 8491,
    lastUpdated: '2026-02-24',
    tags: ['aws', 'aws-security', 'azure', 'cloudformation', 'compliance', 'devops', 'gcp'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'openstatus',
    name: 'Openstatus',
    slug: 'openstatus',
    tagline: '🫖 Status page with uptime monitoring & API monitoring as code   🫖',
    description:
      '🫖 Status page with uptime monitoring & API monitoring as code   🫖',
    website: 'https://openstatus.dev',
    github: 'https://github.com/openstatusHQ/openstatus',
    license: 'AGPL-3.0',
    categories: ['monitoring'],
    replacesTools: ['Datadog', 'New Relic', 'PagerDuty'],
    selfHostable: true,
    logoPlaceholderEmoji: '📈',
    stars: 8395,
    lastUpdated: '2026-02-28',
    tags: ['bun', 'drizzle-orm', 'monitoring', 'monitoring-as-code', 'nextjs', 'observability', 'on-call'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'lesspass',
    name: 'Lesspass',
    slug: 'lesspass',
    tagline: ':key: stateless open source password manager',
    description:
      ':key: stateless open source password manager',
    website: 'https://www.lesspass.com',
    github: 'https://github.com/lesspass/lesspass',
    license: 'GPL-3.0',
    categories: ['passwort-manager'],
    replacesTools: ['LastPass', '1Password'],
    selfHostable: true,
    logoPlaceholderEmoji: '🔑',
    stars: 5983,
    lastUpdated: '2026-02-28',
    tags: ['anonymous', 'lesspass', 'password', 'password-manager', 'passwords', 'privacy', 'self-hosted'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'oxicloud',
    name: 'Oxicloud',
    slug: 'oxicloud',
    tagline: '☁️ Ultra-fast, secure & lightweight self-hosted cloud storage — your files, photos, calendars & contacts, all in one ...',
    description:
      '☁️ Ultra-fast, secure & lightweight self-hosted cloud storage — your files, photos, calendars & contacts, all in one place. Built in Rust.',
    website: 'https://github.com/DioCrafts/OxiCloud',
    github: 'https://github.com/DioCrafts/OxiCloud',
    license: 'MIT',
    categories: ['cloud-speicher'],
    replacesTools: ['Google Drive', 'Dropbox', 'OneDrive'],
    selfHostable: true,
    logoPlaceholderEmoji: '☁️',
    stars: 2614,
    lastUpdated: '2026-02-26',
    tags: ['cloud', 'cloud-storage', 'dropbox', 'file-share', 'file-sync', 'file-upload', 'nas'],
    difficulty: 'einfach',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'projectsend',
    name: 'Projectsend',
    slug: 'projectsend',
    tagline: 'ProjectSend is a free, open source software that lets you share files with your clients, focused on ease of use and p...',
    description:
      'ProjectSend is a free, open source software that lets you share files with your clients, focused on ease of use and privacy. It supports clients groups, system users roles, statistics, multiple languages, detailed logs... and much more!',
    website: 'https://www.projectsend.org/',
    github: 'https://github.com/projectsend/projectsend',
    license: 'GPL-2.0',
    categories: ['cloud-speicher'],
    replacesTools: ['Google Drive', 'Dropbox', 'OneDrive'],
    selfHostable: true,
    logoPlaceholderEmoji: '☁️',
    stars: 1825,
    lastUpdated: '2026-02-25',
    tags: ['clients-oriented', 'file-sharing', 'free-software', 'open-source', 'php', 'projectsend', 'self-hosted'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'beecount',
    name: 'Beecount',
    slug: 'beecount',
    tagline: '🐝 开源记账App，支持iCloud/自建服务器同步(Supabase/WebDAV/S3)，AI智能记账 | Open-source finance tracker with iCloud & self-hosted sync (S...',
    description:
      '🐝 开源记账App，支持iCloud/自建服务器同步(Supabase/WebDAV/S3)，AI智能记账 | Open-source finance tracker with iCloud & self-hosted sync (Supabase/WebDAV/S3), AI-powered bookkeeping, cross-platform, privacy-first',
    website: 'https://github.com/TNT-Likely/BeeCount',
    github: 'https://github.com/TNT-Likely/BeeCount',
    license: 'MIT',
    categories: ['erp'],
    replacesTools: ['SAP Business One', 'Oracle ERP'],
    selfHostable: true,
    logoPlaceholderEmoji: '🏭',
    stars: 1183,
    lastUpdated: '2026-02-27',
    tags: ['account', 'accounting', 'accounting-app', 'chinese', 'expense-tracker', 'finance-app', 'flutter'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'bricksllm',
    name: 'Bricksllm',
    slug: 'bricksllm',
    tagline: '🔒 Enterprise-grade API gateway that helps you monitor and impose cost or rate limits per API key.',
    description:
      '🔒 Enterprise-grade API gateway that helps you monitor and impose cost or rate limits per API key. Get fine-grained access control and monitoring per user, application, or environment. Supports OpenAI, Azure OpenAI, Anthropic, vLLM, and open-source LLMs.',
    website: 'https://trybricks.ai/',
    github: 'https://github.com/bricks-cloud/BricksLLM',
    license: 'MIT',
    categories: ['ki-ml'],
    replacesTools: ['ChatGPT API', 'Midjourney', 'DALL-E'],
    selfHostable: true,
    logoPlaceholderEmoji: '🤖',
    stars: 1161,
    lastUpdated: '2025-01-05',
    tags: ['ai', 'anthropic', 'api', 'artificial-intelligence', 'azure', 'docker', 'generative-ai'],
    difficulty: 'fortgeschritten',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'agent',
    name: 'Agent',
    slug: 'agent',
    tagline: 'Ship your code, on autopilot. An open source agent that lives on your machines 24/7 and keeps your apps running. 🦀',
    description:
      'Ship your code, on autopilot. An open source agent that lives on your machines 24/7 and keeps your apps running. 🦀',
    website: 'https://stakpak.dev',
    github: 'https://github.com/stakpak/agent',
    license: 'Apache-2.0',
    categories: ['ki-ml'],
    replacesTools: ['ChatGPT API', 'Midjourney', 'DALL-E'],
    selfHostable: true,
    logoPlaceholderEmoji: '🤖',
    stars: 1038,
    lastUpdated: '2026-02-28',
    tags: ['agent', 'ai-agent', 'autonomous-agent', 'devops', 'devops-agents', 'devtool', 'generative-ai'],
    difficulty: 'mittel',
    platforms: ['linux', 'macos'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'sharkord',
    name: 'Sharkord',
    slug: 'sharkord',
    tagline: 'Lightweight, self-hosted, open-source chat server with voice, video, text, and screen sharing.',
    description:
      'Lightweight, self-hosted, open-source chat server with voice, video, text, and screen sharing. Built for small groups who want privacy, simplicity, and full control over their data.',
    website: 'https://sharkord.com',
    github: 'https://github.com/Sharkord/sharkord',
    license: 'MIT',
    categories: ['kommunikation'],
    replacesTools: ['WhatsApp', 'Slack', 'Microsoft Teams'],
    selfHostable: true,
    logoPlaceholderEmoji: '💬',
    stars: 1037,
    lastUpdated: '2026-03-01',
    tags: ['bun', 'chat', 'data-ownership', 'mediasoup', 'messaging', 'privacy', 'realtime'],
    difficulty: 'einfach',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'swetrix',
    name: 'Swetrix',
    slug: 'swetrix',
    tagline: '📈 Swetrix is a cookie-less, open source, privacy-first web analytics, website speed monitoring and error tracking ser...',
    description:
      '📈 Swetrix is a cookie-less, open source, privacy-first web analytics, website speed monitoring and error tracking service that you can host yourself or use in the cloud. Get started for free!',
    website: 'https://swetrix.com',
    github: 'https://github.com/Swetrix/swetrix',
    license: 'AGPL-3.0',
    categories: ['monitoring'],
    replacesTools: ['Datadog', 'New Relic', 'PagerDuty'],
    selfHostable: true,
    logoPlaceholderEmoji: '📈',
    stars: 891,
    lastUpdated: '2026-03-01',
    tags: ['charts', 'clickhouse', 'docker', 'gdpr', 'google-analytics', 'metrics', 'monitoring'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'eclaire',
    name: 'Eclaire',
    slug: 'eclaire',
    tagline: 'Local-first, open-source AI assistant for your data.',
    description:
      'Local-first, open-source AI assistant for your data. Unify tasks, notes, docs, photos, and bookmarks. Private, self-hosted, and extensible via APIs.',
    website: 'https://eclaire.co',
    github: 'https://github.com/eclaire-labs/eclaire',
    license: 'MIT',
    categories: ['ki-ml'],
    replacesTools: ['ChatGPT API', 'Midjourney', 'DALL-E'],
    selfHostable: true,
    logoPlaceholderEmoji: '🤖',
    stars: 810,
    lastUpdated: '2026-02-25',
    tags: ['ai', 'ai-assistant', 'automation', 'bookmark-manager', 'bookmarks', 'data-extraction', 'document-processing'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'geopulse',
    name: 'Geopulse',
    slug: 'geopulse',
    tagline: 'A self-hosted, privacy-first location tracking platform.',
    description:
      'A self-hosted, privacy-first location tracking platform. The perfect open-source alternative to Google Timeline with automatic trip detection, Immich integration, and detailed analytics.',
    website: 'https://tess1o.github.io/geopulse/',
    github: 'https://github.com/tess1o/geopulse',
    license: 'MIT',
    categories: ['analytics'],
    replacesTools: ['Google Analytics', 'Mixpanel'],
    selfHostable: true,
    logoPlaceholderEmoji: '📊',
    stars: 613,
    lastUpdated: '2026-02-27',
    tags: ['gps-tracker', 'gps-tracking', 'java', 'owntracks', 'postgis', 'postgis-database', 'postgres'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'thiss-link',
    name: 'Thiss.link',
    slug: 'thiss-link',
    tagline: '🔥 MagLit - Privacy Respecting Encrypted Link Shortener with Password Protection and Torrent Magnet Links support',
    description:
      '🔥 MagLit - Privacy Respecting Encrypted Link Shortener with Password Protection and Torrent Magnet Links support',
    website: 'https://maglit.me',
    github: 'https://github.com/NayamAmarshe/thiss.link',
    license: 'AGPL-3.0',
    categories: ['passwort-manager'],
    replacesTools: ['LastPass', '1Password'],
    selfHostable: true,
    logoPlaceholderEmoji: '🔑',
    stars: 594,
    lastUpdated: '2026-02-24',
    tags: ['encryption', 'foss', 'free', 'linkshortener', 'nextjs', 'open-source', 'privacy'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'relay',
    name: 'Relay',
    slug: 'relay',
    tagline: '✉️ Open-Source Email API for Developers. Self-hosted Alternative to SES, Mailgun, SendGrid.',
    description:
      '✉️ Open-Source Email API for Developers. Self-hosted Alternative to SES, Mailgun, SendGrid.',
    website: 'https://relay.hyvor.com',
    github: 'https://github.com/hyvor/relay',
    license: 'AGPL-3.0',
    categories: ['email-server'],
    replacesTools: ['Gmail-Server', 'Exchange'],
    selfHostable: true,
    logoPlaceholderEmoji: '📮',
    stars: 524,
    lastUpdated: '2026-02-28',
    tags: ['email', 'smtp'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'super',
    name: 'Super',
    slug: 'super',
    tagline: '📡 SPR: Open Source, secure, user friendly and fast wifi routers for your home.',
    description:
      '📡 SPR: Open Source, secure, user friendly and fast wifi routers for your home. One wifi password per device. Ad Blocking & Privacy Blocklists. Policy Based Network Access',
    website: 'https://www.supernetworks.org/',
    github: 'https://github.com/spr-networks/super',
    license: 'BSD-3-Clause',
    categories: ['vpn'],
    replacesTools: ['NordVPN', 'ExpressVPN'],
    selfHostable: true,
    logoPlaceholderEmoji: '🛡️',
    stars: 502,
    lastUpdated: '2026-02-26',
    tags: ['adblock', 'alerting', 'coredns', 'golang', 'homelab', 'internet-filtering', 'nftables'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'payload',
    name: 'Payload',
    slug: 'payload',
    tagline: 'Payload is the open-source, fullstack Next.js framework, giving you instant backend superpowers.',
    description:
      'Payload is the open-source, fullstack Next.js framework, giving you instant backend superpowers. Get a full TypeScript backend and admin panel instantly. Use Payload as a headless CMS or for building powerful applications.',
    website: 'https://payloadcms.com',
    github: 'https://github.com/payloadcms/payload',
    license: 'MIT',
    categories: ['cms'],
    replacesTools: ['WordPress.com', 'Squarespace', 'Wix'],
    selfHostable: true,
    logoPlaceholderEmoji: '🌍',
    stars: 40870,
    lastUpdated: '2026-03-01',
    tags: ['cms', 'content-management', 'content-management-system', 'express', 'graphql', 'headless', 'headless-cms'],
    difficulty: 'einfach',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'onyx',
    name: 'Onyx',
    slug: 'onyx',
    tagline: 'Open Source AI Platform - AI Chat with advanced features that works with every LLM',
    description:
      'Open Source AI Platform - AI Chat with advanced features that works with every LLM',
    website: 'https://onyx.app',
    github: 'https://github.com/onyx-dot-app/onyx',
    license: 'MIT',
    categories: ['ki-ml'],
    replacesTools: ['ChatGPT API', 'Midjourney', 'DALL-E'],
    selfHostable: true,
    logoPlaceholderEmoji: '🤖',
    stars: 17626,
    lastUpdated: '2026-03-01',
    tags: ['ai', 'ai-chat', 'chatgpt', 'chatui', 'enterprise-search', 'gen-ai', 'information-retrieval'],
    difficulty: 'fortgeschritten',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'tinacms',
    name: 'Tinacms',
    slug: 'tinacms',
    tagline: 'A fully open-source headless CMS that supports Markdown and Visual Editing',
    description:
      'A fully open-source headless CMS that supports Markdown and Visual Editing',
    website: 'https://tina.io',
    github: 'https://github.com/tinacms/tinacms',
    license: 'Apache-2.0',
    categories: ['cms'],
    replacesTools: ['WordPress.com', 'Squarespace', 'Wix'],
    selfHostable: true,
    logoPlaceholderEmoji: '🌍',
    stars: 13176,
    lastUpdated: '2026-02-26',
    tags: ['cms', 'content-management-system', 'forestry', 'markdown', 'nextjs', 'react', 'tina'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'casdoor',
    name: 'Casdoor',
    slug: 'casdoor',
    tagline: 'An open-source AI-first Identity and Access Management (IAM) /AI MCP gateway and auth server with web UI supporting M...',
    description:
      'An open-source AI-first Identity and Access Management (IAM) /AI MCP gateway and auth server with web UI supporting MCP, A2A, OAuth 2.1, OIDC, SAML, CAS, LDAP, SCIM, WebAuthn, TOTP, MFA, Face ID, Google Workspace, Azure AD',
    website: 'https://casdoor.org',
    github: 'https://github.com/casdoor/casdoor',
    license: 'Apache-2.0',
    categories: ['backend-frameworks'],
    replacesTools: ['Firebase', 'Supabase Pro'],
    selfHostable: true,
    logoPlaceholderEmoji: '⚙️',
    stars: 13088,
    lastUpdated: '2026-02-28',
    tags: ['ai-gateway', 'auth', 'authentication', 'authn', 'casdoor', 'faceid', 'iam'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'cas',
    name: 'Cas',
    slug: 'cas',
    tagline: 'Apereo CAS - Identity & Single Sign On for all earthlings and beyond.',
    description:
      'Apereo CAS - Identity & Single Sign On for all earthlings and beyond.',
    website: 'https://apereo.github.io/cas/',
    github: 'https://github.com/apereo/cas',
    license: 'Apache-2.0',
    categories: ['backend-frameworks'],
    replacesTools: ['Firebase', 'Supabase Pro'],
    selfHostable: true,
    logoPlaceholderEmoji: '⚙️',
    stars: 11293,
    lastUpdated: '2026-03-01',
    tags: ['authentication', 'authorization', 'aws', 'duosecurity', 'fido', 'identity-provider', 'java'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'dicedb',
    name: 'Dicedb',
    slug: 'dicedb',
    tagline: 'Open-source, low-latency key/value engine built on Valkey with hierarchical storage tiers.',
    description:
      'Open-source, low-latency key/value engine built on Valkey with hierarchical storage tiers.',
    website: 'https://dicedb.io/',
    github: 'https://github.com/dicedb/dicedb',
    license: 'MIT',
    categories: ['datenbanken'],
    replacesTools: ['Oracle', 'MSSQL'],
    selfHostable: true,
    logoPlaceholderEmoji: '🗄️',
    stars: 10694,
    lastUpdated: '2026-02-12',
    tags: ['cache', 'database', 'key-value', 'key-value-store', 'nosql', 'redis', 'storage-engine'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
];
