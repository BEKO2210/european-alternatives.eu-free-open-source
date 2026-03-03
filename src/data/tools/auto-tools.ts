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
  },
  {
    "id": "webstudio",
    "name": "Webstudio",
    "slug": "webstudio",
    "tagline": "Open source website builder and Webflow alternative.",
    "description": "Open source website builder and Webflow alternative. Webstudio is an advanced visual builder that connects to any headless CMS, supports all CSS properties, and can be hosted anywhere, including with us.",
    "website": "https://webstudio.is",
    "github": "https://github.com/webstudio-is/webstudio",
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
    "stars": 8270,
    "lastUpdated": "2026-03-01",
    "tags": [
      "accessibility",
      "alternative",
      "cloudflare",
      "cloudflare-workers",
      "design",
      "free",
      "frontend"
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
    "id": "webiny-js",
    "name": "Webiny Js",
    "slug": "webiny-js",
    "tagline": "Open-source serverless enterprise CMS.",
    "description": "Open-source serverless enterprise CMS. Includes a headless CMS, page builder, form builder, and file manager. Easy to customize and expand. Deploys to AWS.",
    "website": "https://www.webiny.com",
    "github": "https://github.com/webiny/webiny-js",
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
    "stars": 7939,
    "lastUpdated": "2026-03-01",
    "tags": [
      "aws",
      "aws-lambda",
      "cloud",
      "cms",
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
    "id": "coroot",
    "name": "Coroot",
    "slug": "coroot",
    "tagline": "Coroot is an open-source observability and APM tool with AI-powered Root Cause Analysis.",
    "description": "Coroot is an open-source observability and APM tool with AI-powered Root Cause Analysis. It combines metrics, logs, traces, continuous profiling, and SLO-based alerting with predefined dashboards and inspections.",
    "website": "https://coroot.com",
    "github": "https://github.com/coroot/coroot",
    "license": "Apache-2.0",
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
    "stars": 7446,
    "lastUpdated": "2026-02-26",
    "tags": [
      "ai",
      "alerting",
      "apm",
      "dashboard",
      "database-monitoring",
      "distributed-tracing",
      "ebpf"
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
    "id": "evidently",
    "name": "Evidently",
    "slug": "evidently",
    "tagline": "Evidently is ​​an open-source ML and LLM observability framework.",
    "description": "Evidently is ​​an open-source ML and LLM observability framework. Evaluate, test, and monitor any AI-powered system or data pipeline. From tabular data to Gen AI. 100+ metrics.",
    "website": "https://discord.gg/xZjKRaNp8b",
    "github": "https://github.com/evidentlyai/evidently",
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
    "stars": 7253,
    "lastUpdated": "2026-02-27",
    "tags": [
      "data-drift",
      "data-quality",
      "data-science",
      "data-validation",
      "generative-ai",
      "hacktoberfest",
      "html-report"
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
    "id": "hertzbeat",
    "name": "Hertzbeat",
    "slug": "hertzbeat",
    "tagline": "An AI-powered next-generation open source real-time observability system.",
    "description": "An AI-powered next-generation open source real-time observability system.",
    "website": "https://hertzbeat.apache.org/",
    "github": "https://github.com/apache/hertzbeat",
    "license": "Apache-2.0",
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
    "stars": 7106,
    "lastUpdated": "2026-03-01",
    "tags": [
      "agent",
      "ai",
      "alerting",
      "database",
      "grafana",
      "linux",
      "llm"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux"
    ],
    "featured": false,
    "addedDate": "2026-03-01"
  },
  {
    "id": "openllmetry",
    "name": "Openllmetry",
    "slug": "openllmetry",
    "tagline": "Open-source observability for your GenAI or LLM application, based on OpenTelemetry",
    "description": "Open-source observability for your GenAI or LLM application, based on OpenTelemetry",
    "website": "https://www.traceloop.com/openllmetry",
    "github": "https://github.com/traceloop/openllmetry",
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
    "stars": 6867,
    "lastUpdated": "2026-03-01",
    "tags": [
      "artifical-intelligence",
      "datascience",
      "generative-ai",
      "good-first-issue",
      "good-first-issues",
      "help-wanted",
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
    "id": "oneuptime",
    "name": "Oneuptime",
    "slug": "oneuptime",
    "tagline": "Complete open-source monitoring and observability platform.",
    "description": "Complete open-source monitoring and observability platform.",
    "website": "https://oneuptime.com",
    "github": "https://github.com/OneUptime/oneuptime",
    "license": "Apache-2.0",
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
    "stars": 6528,
    "lastUpdated": "2026-03-01",
    "tags": [
      "devops",
      "incident-management",
      "incident-response",
      "monitoring",
      "observability",
      "on-call",
      "status-page"
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
    "id": "coze-loop",
    "name": "Coze Loop",
    "slug": "coze-loop",
    "tagline": "Next-generation AI Agent Optimization Platform: Cozeloop addresses challenges in AI agent development by providing fu...",
    "description": "Next-generation AI Agent Optimization Platform: Cozeloop addresses challenges in AI agent development by providing full-lifecycle management capabilities from development, debugging, and evaluation to monitoring.",
    "website": "https://github.com/coze-dev/coze-loop",
    "github": "https://github.com/coze-dev/coze-loop",
    "license": "Apache-2.0",
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
    "stars": 5332,
    "lastUpdated": "2026-02-28",
    "tags": [
      "agent",
      "agent-evaluation",
      "agent-observability",
      "agentops",
      "ai",
      "coze",
      "eino"
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
    "id": "helicone",
    "name": "Helicone",
    "slug": "helicone",
    "tagline": "🧊 Open source LLM observability platform. One line of code to monitor, evaluate, and experiment. YC W23 🍓",
    "description": "🧊 Open source LLM observability platform. One line of code to monitor, evaluate, and experiment. YC W23 🍓",
    "website": "https://www.helicone.ai",
    "github": "https://github.com/Helicone/helicone",
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
    "stars": 5164,
    "lastUpdated": "2026-02-25",
    "tags": [
      "agent-monitoring",
      "analytics",
      "evaluation",
      "gpt",
      "langchain",
      "large-language-models",
      "llama-index"
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
    "id": "apostrophe",
    "name": "Apostrophe",
    "slug": "apostrophe",
    "tagline": "A full-featured, open-source content management framework built with Node.js that empowers organizations by combining...",
    "description": "A full-featured, open-source content management framework built with Node.js that empowers organizations by combining in-context editing and headless architecture in a full-stack JS environment.",
    "website": "https://apostrophecms.com",
    "github": "https://github.com/apostrophecms/apostrophe",
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
    "stars": 4529,
    "lastUpdated": "2026-02-27",
    "tags": [
      "apostrophe",
      "cms",
      "cms-framework",
      "jamstack",
      "javascript",
      "node",
      "node-js"
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
    "id": "uptrace",
    "name": "Uptrace",
    "slug": "uptrace",
    "tagline": "Open source APM: OpenTelemetry traces, metrics, and logs",
    "description": "Open source APM: OpenTelemetry traces, metrics, and logs",
    "website": "https://uptrace.dev/get/hosted/open-source-apm",
    "github": "https://github.com/uptrace/uptrace",
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
    "stars": 4109,
    "lastUpdated": "2026-01-21",
    "tags": [
      "apm",
      "application-monitoring",
      "clickhouse",
      "distributed-tracing",
      "golang",
      "logs",
      "metrics"
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
    "id": "terminusdb",
    "name": "Terminusdb",
    "slug": "terminusdb",
    "tagline": "TerminusDB is a distributed, collaborative database designed for building, sharing, versioning, and reasoning on stru...",
    "description": "TerminusDB is a distributed, collaborative database designed for building, sharing, versioning, and reasoning on structured data.",
    "website": "https://terminusdb.org",
    "github": "https://github.com/terminusdb/terminusdb",
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
    "stars": 3203,
    "lastUpdated": "2026-03-01",
    "tags": [
      "acid",
      "cms",
      "collaboration",
      "database",
      "document-database",
      "graph-database",
      "headless"
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
    "id": "pezzo",
    "name": "Pezzo",
    "slug": "pezzo",
    "tagline": "🕹️ Open-source, developer-first LLMOps platform designed to streamline prompt design, version management, instant del...",
    "description": "🕹️ Open-source, developer-first LLMOps platform designed to streamline prompt design, version management, instant delivery, collaboration, troubleshooting, observability and more.",
    "website": "https://pezzo.ai",
    "github": "https://github.com/pezzolabs/pezzo",
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
    "stars": 3191,
    "lastUpdated": "2025-06-28",
    "tags": [
      "ai",
      "devtools",
      "gpt-3",
      "gpt-4",
      "hacktoberfest",
      "javascript",
      "langchain"
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
    "id": "lmnr",
    "name": "Lmnr",
    "slug": "lmnr",
    "tagline": "Laminar - open-source observability platform purpose-built for AI agents. YC S24.",
    "description": "Laminar - open-source observability platform purpose-built for AI agents. YC S24.",
    "website": "https://laminar.sh",
    "github": "https://github.com/lmnr-ai/lmnr",
    "license": "Apache-2.0",
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
    "stars": 2639,
    "lastUpdated": "2026-03-01",
    "tags": [
      "agents",
      "ai",
      "ai-observability",
      "aiops",
      "analytics",
      "developer-tools",
      "evals"
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
    "id": "openlit",
    "name": "Openlit",
    "slug": "openlit",
    "tagline": "Open source platform for AI Engineering: OpenTelemetry-native LLM Observability, GPU Monitoring, Guardrails, Evaluati...",
    "description": "Open source platform for AI Engineering: OpenTelemetry-native LLM Observability, GPU Monitoring, Guardrails, Evaluations, Prompt Management, Vault, Playground. 🚀💻 Integrates with 50+ LLM Providers, VectorDBs, Agent Frameworks and GPUs.",
    "website": "https://docs.openlit.io",
    "github": "https://github.com/openlit/openlit",
    "license": "Apache-2.0",
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
    "stars": 2254,
    "lastUpdated": "2026-03-01",
    "tags": [
      "ai-observability",
      "amd-gpu",
      "clickhouse",
      "distributed-tracing",
      "genai",
      "gpu-monitoring",
      "grafana"
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
    "id": "sveltia-cms",
    "name": "Sveltia Cms",
    "slug": "sveltia-cms",
    "tagline": "Git-based headless CMS. Successor to Netlify CMS (now Decap CMS). Modern UX, first-class i18n support, mobile support...",
    "description": "Git-based headless CMS. Successor to Netlify CMS (now Decap CMS). Modern UX, first-class i18n support, mobile support + 100s of improvements. Framework-agnostic, open source & free.",
    "website": "https://sveltiacms.app/en/",
    "github": "https://github.com/sveltia/sveltia-cms",
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
    "stars": 2169,
    "lastUpdated": "2026-03-01",
    "tags": [
      "cms",
      "content-management",
      "content-management-system",
      "dam",
      "dark-mode",
      "decap-cms",
      "digital-asset-management"
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
    "id": "vrite",
    "name": "Vrite",
    "slug": "vrite",
    "tagline": "Open-source developer content platform",
    "description": "Open-source developer content platform",
    "website": "https://vrite.io",
    "github": "https://github.com/vriteio/vrite",
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
    "stars": 1973,
    "lastUpdated": "2025-10-28",
    "tags": [
      "blogging",
      "cms",
      "collaboration",
      "content-management",
      "documentation",
      "headless",
      "headless-cms"
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
    "id": "gigapipe",
    "name": "Gigapipe",
    "slug": "gigapipe",
    "tagline": "⭐️ The Open-Source Polyglot Observability Warehouse: Light, Fast, Cloud Native, Drop-in Grafana LGTMP alternative :ro...",
    "description": "⭐️ The Open-Source Polyglot Observability Warehouse: Light, Fast, Cloud Native, Drop-in Grafana LGTMP alternative :rocket: Indie All-in-One Opentelemetry, Loki, Prometheus, Tempo, Pyroscope On-Prem Alternative :star:",
    "website": "https://gigapipe.com",
    "github": "https://github.com/metrico/gigapipe",
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
    "stars": 1635,
    "lastUpdated": "2026-02-02",
    "tags": [
      "clickhouse",
      "gigapipe",
      "grafana",
      "lgtm",
      "logql",
      "logs",
      "loki"
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
    "id": "atomic-server",
    "name": "Atomic Server",
    "slug": "atomic-server",
    "tagline": "An open source headless CMS / real-time database.",
    "description": "An open source headless CMS / real-time database. Powerful table editor, full-text search, and SDKs for JS / React / Svelte.",
    "website": "https://atomicserver.eu",
    "github": "https://github.com/ontola/atomic-server",
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
    "stars": 1506,
    "lastUpdated": "2026-02-23",
    "tags": [
      "actix",
      "atomic-data",
      "cli",
      "database",
      "library",
      "linked-data",
      "rdf"
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
    "id": "sonicjs",
    "name": "Sonicjs",
    "slug": "sonicjs",
    "tagline": "SonicJS - The edge-native headless CMS for Cloudflare Workers.",
    "description": "SonicJS - The edge-native headless CMS for Cloudflare Workers. Sub-100ms response times, zero cold starts, TypeScript-first. Built on D1, R2, and Hono.",
    "website": "https://sonicjs.com",
    "github": "https://github.com/SonicJs-Org/sonicjs",
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
    "stars": 1478,
    "lastUpdated": "2026-03-01",
    "tags": [
      "api",
      "backend",
      "cloudflare-d1",
      "cloudflare-r2",
      "cloudflare-workers",
      "cms",
      "content-management"
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
    "id": "smartstore",
    "name": "Smartstore",
    "slug": "smartstore",
    "tagline": "A modular, scalable and ultra-fast open-source all-in-one eCommerce platform built on ASP.NET Core 10",
    "description": "A modular, scalable and ultra-fast open-source all-in-one eCommerce platform built on ASP.NET Core 10",
    "website": "http://www.smartstore.com/",
    "github": "https://github.com/smartstore/Smartstore",
    "license": "AGPL-3.0",
    "categories": [
      "e-commerce"
    ],
    "replacesTools": [
      "Shopify",
      "Magento Commerce"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "🛒",
    "stars": 1465,
    "lastUpdated": "2026-02-28",
    "tags": [
      "asp-net",
      "aspnet",
      "aspnet-core",
      "aspnetcore",
      "azure",
      "bootstrap",
      "cms"
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
    "id": "grafana-operator",
    "name": "Grafana Operator",
    "slug": "grafana-operator",
    "tagline": "An operator for Grafana that installs and manages Grafana instances, Dashboards and Datasources through Kubernetes/Op...",
    "description": "An operator for Grafana that installs and manages Grafana instances, Dashboards and Datasources through Kubernetes/OpenShift CRs",
    "website": "https://grafana.github.io/grafana-operator/docs/",
    "github": "https://github.com/grafana/grafana-operator",
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
    "stars": 1280,
    "lastUpdated": "2026-02-28",
    "tags": [
      "community",
      "go",
      "golang",
      "grafana",
      "grafana-operator",
      "hacktober",
      "k8s"
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
    "id": "measure",
    "name": "Measure",
    "slug": "measure",
    "tagline": "Measure is an open-source tool to monitor mobile apps.",
    "description": "Measure is an open-source tool to monitor mobile apps. We connect the dots between user actions, app events, network calls, logs, and errors to make debugging production issues easy!",
    "website": "https://measure.sh",
    "github": "https://github.com/measure-sh/measure",
    "license": "Apache-2.0",
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
    "stars": 1179,
    "lastUpdated": "2026-03-01",
    "tags": [
      "android",
      "anr",
      "crash",
      "crash-reporting",
      "crashlytics",
      "flutter",
      "ios"
    ],
    "difficulty": "einfach",
    "platforms": [
      "linux",
      "android",
      "ios"
    ],
    "featured": false,
    "addedDate": "2026-03-01"
  },
  {
    "id": "openam",
    "name": "Openam",
    "slug": "openam",
    "tagline": "OpenAM is an open-source access management solution for identity authentication, authorization, and federation.",
    "description": "OpenAM is an open-source access management solution for identity authentication, authorization, and federation. It provides single sign-on, adaptive authentication, and centralized policy control, enabling secure access to web, mobile, and cloud applications",
    "website": "https://www.openidentityplatform.org/openam",
    "github": "https://github.com/OpenIdentityPlatform/OpenAM",
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
    "stars": 865,
    "lastUpdated": "2026-02-15",
    "tags": [
      "aaa",
      "access",
      "access-management",
      "accounting",
      "active-directory",
      "authentication",
      "authorization"
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
    "id": "apt",
    "name": "Apt",
    "slug": "apt",
    "tagline": "AI Productivity Tool - Free and open source, improve user productivity, and protect privacy and data security.",
    "description": "AI Productivity Tool - Free and open source, improve user productivity, and protect privacy and data security. Including but not limited to: built-in local exclusive ChatGPT, DeepSeek, Phi, Qwen and other models, one-click batch intelligent processing of pictures, videos, audio, etc.",
    "website": "https://github.com/rnchg/APT",
    "github": "https://github.com/rnchg/APT",
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
    "stars": 775,
    "lastUpdated": "2025-12-13",
    "tags": [
      "ai",
      "ai-framework",
      "aigc",
      "audio-processing",
      "chatgpt",
      "computer-vision",
      "deep-learning"
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
    "id": "nhost",
    "name": "Nhost",
    "slug": "nhost",
    "tagline": "The Open Source Firebase Alternative with GraphQL.",
    "description": "The Open Source Firebase Alternative with GraphQL.",
    "website": "https://nhost.io",
    "github": "https://github.com/nhost/nhost",
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
    "stars": 9089,
    "lastUpdated": "2026-03-01",
    "tags": [
      "authentication",
      "backend",
      "backend-as-a-service",
      "database",
      "firebase",
      "flutter",
      "graphql"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-02"
  },
  {
    "id": "swanlab",
    "name": "Swanlab",
    "slug": "swanlab",
    "tagline": "⚡️SwanLab - an open-source, modern-design AI training tracking and visualization tool.",
    "description": "⚡️SwanLab - an open-source, modern-design AI training tracking and visualization tool. Supports Cloud / Self-hosted use. Integrated with PyTorch / Transformers / verl / LLaMA Factory / ms-swift / Ultralytics / MMEngine / Keras etc.",
    "website": "https://swanlab.cn",
    "github": "https://github.com/SwanHubX/SwanLab",
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
    "stars": 3622,
    "lastUpdated": "2026-03-02",
    "tags": [
      "data-science",
      "deep-learning",
      "llm",
      "logging",
      "machine-learning",
      "mlops",
      "model-versioning"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "macos"
    ],
    "featured": false,
    "addedDate": "2026-03-02"
  },
  {
    "id": "lsp-ai",
    "name": "Lsp Ai",
    "slug": "lsp-ai",
    "tagline": "LSP-AI is an open-source language server that serves as a backend for AI-powered functionality, designed to assist an...",
    "description": "LSP-AI is an open-source language server that serves as a backend for AI-powered functionality, designed to assist and empower software engineers, not replace them.",
    "website": "https://github.com/SilasMarvin/lsp-ai",
    "github": "https://github.com/SilasMarvin/lsp-ai",
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
    "stars": 3140,
    "lastUpdated": "2025-01-07",
    "tags": [
      "ai",
      "auto-completion",
      "developer-tools",
      "ide",
      "language-client",
      "llama",
      "llamacpp"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "macos"
    ],
    "featured": false,
    "addedDate": "2026-03-02"
  },
  {
    "id": "octobase",
    "name": "Octobase",
    "slug": "octobase",
    "tagline": "🐙 OctoBase is the open-source database behind AFFiNE, local-first, yet collaborative.",
    "description": "🐙 OctoBase is the open-source database behind AFFiNE, local-first, yet collaborative. A light-weight, scalable, data engine written in Rust.",
    "website": "https://octobase.dev",
    "github": "https://github.com/toeverything/OctoBase",
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
    "stars": 1901,
    "lastUpdated": "2025-03-05",
    "tags": [
      "collaborative",
      "crdt",
      "database",
      "decentralized-storage",
      "p2p",
      "rust",
      "self-contained"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-02"
  },
  {
    "id": "graft",
    "name": "Graft",
    "slug": "graft",
    "tagline": "Graft is an open-source transactional storage engine optimized for lazy, partial, and strongly consistent replication...",
    "description": "Graft is an open-source transactional storage engine optimized for lazy, partial, and strongly consistent replication—perfect for edge, offline-first, and distributed applications.",
    "website": "https://graft.rs",
    "github": "https://github.com/orbitinghail/graft",
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
    "stars": 1409,
    "lastUpdated": "2026-03-01",
    "tags": [
      "database",
      "edge",
      "replication",
      "sqlite",
      "storage",
      "storage-engine"
    ],
    "difficulty": "fortgeschritten",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-02"
  },
  {
    "id": "audiomuse-ai",
    "name": "Audiomuse Ai",
    "slug": "audiomuse-ai",
    "tagline": "AudioMuse-AI is an Open Source Dockerized environment that brings automatic playlist generation to Jellyfin, Navidrom...",
    "description": "AudioMuse-AI is an Open Source Dockerized environment that brings automatic playlist generation to Jellyfin, Navidrome, LMS, Lyrion and Emby. Using powerful tools like Librosa and ONNX, it performs sonic analysis on your audio files locally, allowing you to curate the perfect playlist for any mood or occasion without relying on external APIs.",
    "website": "https://neptunehub.github.io/AudioMuse-AI/",
    "github": "https://github.com/NeptuneHub/AudioMuse-AI",
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
    "stars": 1319,
    "lastUpdated": "2026-02-28",
    "tags": [
      "clap",
      "docker",
      "emby",
      "jellyfin",
      "jellyfin-plugin",
      "k3s",
      "kubernetes"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-02"
  },
  {
    "id": "learnhouse",
    "name": "Learnhouse",
    "slug": "learnhouse",
    "tagline": "The Next-gen Open Source learning platform for everyone ✨",
    "description": "The Next-gen Open Source learning platform for everyone ✨",
    "website": "https://learnhouse.app",
    "github": "https://github.com/learnhouse/learnhouse",
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
    "stars": 1309,
    "lastUpdated": "2026-03-01",
    "tags": [
      "ai",
      "ai-powered",
      "api",
      "cms",
      "education",
      "educational",
      "headless"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-02"
  },
  {
    "id": "browserable",
    "name": "Browserable",
    "slug": "browserable",
    "tagline": "Open source and self-hostable browser automation library for AI agents",
    "description": "Open source and self-hostable browser automation library for AI agents",
    "website": "https://browserable.ai",
    "github": "https://github.com/browserable/browserable",
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
    "stars": 1162,
    "lastUpdated": "2025-08-27",
    "tags": [
      "ai-agents",
      "ai-tools",
      "browser-automation",
      "browser-use",
      "browser-use-js",
      "deep-research",
      "javascript"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-02"
  },
  {
    "id": "alchemy-cms",
    "name": "Alchemy Cms",
    "slug": "alchemy-cms",
    "tagline": "Alchemy is the Open Source Rails CMS framework for the component based web that can be used as classic server side re...",
    "description": "Alchemy is the Open Source Rails CMS framework for the component based web that can be used as classic server side rendered or headless CMS.",
    "website": "https://www.alchemy-cms.com",
    "github": "https://github.com/AlchemyCMS/alchemy_cms",
    "license": "BSD-3-Clause",
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
    "stars": 890,
    "lastUpdated": "2026-03-01",
    "tags": [
      "admin",
      "alchemy-cms",
      "cms",
      "content-management-system",
      "rails",
      "rails-engine",
      "ruby"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-02"
  },
  {
    "id": "mix-core",
    "name": "Mix.core",
    "slug": "mix-core",
    "tagline": "🚀 A future-proof enterprise web CMS supporting both headless and decoupled approaches.",
    "description": "🚀 A future-proof enterprise web CMS supporting both headless and decoupled approaches. Build any type of app with customizable APIs on ASP.NET Core/.NET Core. Completely open-source and designed for flexibility.",
    "website": "https://mixcore.org",
    "github": "https://github.com/mixcore/mix.core",
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
    "stars": 881,
    "lastUpdated": "2026-01-29",
    "tags": [
      "angular",
      "asp",
      "asp-net-core",
      "asp-net-core-content-management-system",
      "bootstrap",
      "cms",
      "content-management-system"
    ],
    "difficulty": "fortgeschritten",
    "platforms": [
      "linux",
      "web"
    ],
    "featured": false,
    "addedDate": "2026-03-02"
  },
  {
    "id": "mesh",
    "name": "Mesh",
    "slug": "mesh",
    "tagline": "Gentics Mesh - The open source headless CMS for developers",
    "description": "Gentics Mesh - The open source headless CMS for developers",
    "website": "https://getmesh.io",
    "github": "https://github.com/gentics/mesh",
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
    "stars": 589,
    "lastUpdated": "2026-02-26",
    "tags": [
      "api-first",
      "cms",
      "cms-api",
      "gentics-mesh",
      "graphql-api",
      "headless-cms"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-02"
  },
  {
    "id": "truthy",
    "name": "Truthy",
    "slug": "truthy",
    "tagline": "Open source headless CMS API written using NestJS, that has pre built modules like User Management, Role Management, ...",
    "description": "Open source headless CMS API written using NestJS, that has pre built modules like User Management, Role Management, Permission Management, Email Module, Account Settings, OTP, Throttling, RBAC support, Localization, and many more.",
    "website": "https://github.com/gobeam/truthy",
    "github": "https://github.com/gobeam/truthy",
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
    "stars": 589,
    "lastUpdated": "2025-02-01",
    "tags": [
      "api",
      "api-rest",
      "awesome-nestjs-boilerplate",
      "boilerplate",
      "cms",
      "demo",
      "headless-cms"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-02"
  },
  {
    "id": "flextype",
    "name": "Flextype",
    "slug": "flextype",
    "tagline": "Modern Open Source Flat Files Content Management System.",
    "description": "Modern Open Source Flat Files Content Management System.",
    "website": "https://awilum.github.io/flextype",
    "github": "https://github.com/flextype/flextype",
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
    "stars": 588,
    "lastUpdated": "2022-11-19",
    "tags": [
      "api",
      "cms",
      "content",
      "content-management",
      "content-management-system",
      "doctrine",
      "flat-file"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-02"
  },
  {
    "id": "vaahcms",
    "name": "Vaahcms",
    "slug": "vaahcms",
    "tagline": "VaahCMS is a laravel based open-source web application development platform shipped with a headless content managemen...",
    "description": "VaahCMS is a laravel based open-source web application development platform shipped with a headless content management system (CMS).",
    "website": "https://vaah.dev/cms",
    "github": "https://github.com/webreinvent/vaahcms",
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
    "stars": 574,
    "lastUpdated": "2026-02-16",
    "tags": [
      "admin",
      "application",
      "backend",
      "buefy",
      "bulma",
      "cms",
      "content-management"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-02"
  },
  {
    "id": "copilotkit",
    "name": "Copilotkit",
    "slug": "copilotkit",
    "tagline": "The Frontend for Agents & Generative UI. React + Angular",
    "description": "The Frontend for Agents & Generative UI. React + Angular",
    "website": "https://docs.copilotkit.ai",
    "github": "https://github.com/CopilotKit/CopilotKit",
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
    "logoUrl": "https://avatars.githubusercontent.com/u/131273140?v=4",
    "stars": 29123,
    "lastUpdated": "2026-03-02",
    "tags": [
      "agent",
      "agent-native",
      "agentic-ai",
      "agents",
      "ai",
      "ai-agent",
      "ai-assistant"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-02"
  },
  {
    "id": "jaaz",
    "name": "Jaaz",
    "slug": "jaaz",
    "tagline": "The world's first open-source multimodal creative assistant  This is a substitute for Canva and Manus that prioritize...",
    "description": "The world's first open-source multimodal creative assistant  This is a substitute for Canva and Manus that prioritizes privacy and is usable locally.",
    "website": "https://jaaz.app",
    "github": "https://github.com/11cafe/jaaz",
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
    "logoUrl": "https://avatars.githubusercontent.com/u/152708197?v=4",
    "stars": 5924,
    "lastUpdated": "2026-03-02",
    "tags": [
      "agent",
      "ai",
      "aiagent",
      "aiimage",
      "aiimagegenerator",
      "aitool",
      "aitools"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-02"
  },
  {
    "id": "taskcafe",
    "name": "Taskcafe",
    "slug": "taskcafe",
    "tagline": "An open source project management tool with Kanban boards",
    "description": "An open source project management tool with Kanban boards",
    "website": "https://github.com/JordanKnott/taskcafe",
    "github": "https://github.com/JordanKnott/taskcafe",
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
    "logoUrl": "https://avatars.githubusercontent.com/u/11680844?v=4",
    "stars": 5180,
    "lastUpdated": "2023-07-23",
    "tags": [
      "golang",
      "gqlgen",
      "graphql",
      "kanban-board",
      "project-management",
      "react",
      "typescript"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-02"
  },
  {
    "id": "silverbullet",
    "name": "Silverbullet",
    "slug": "silverbullet",
    "tagline": "An open source personal productivity platform built on Markdown, turbo charged with the scripting power of Lua",
    "description": "An open source personal productivity platform built on Markdown, turbo charged with the scripting power of Lua",
    "website": "https://silverbullet.md",
    "github": "https://github.com/silverbulletmd/silverbullet",
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
    "logoUrl": "https://avatars.githubusercontent.com/u/108344757?v=4",
    "stars": 4777,
    "lastUpdated": "2026-03-02",
    "tags": [
      "end-user-programming",
      "knowledge-management",
      "lua",
      "markdown",
      "note-taking",
      "personal-knowledge-management"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-02"
  },
  {
    "id": "ant-media-server",
    "name": "Ant Media Server",
    "slug": "ant-media-server",
    "tagline": "Ant Media Server — Ultra-low latency streaming engine with WebRTC (~0.5s), SRT, RTMP, HLS, CMAF, adaptive bitrate, tr...",
    "description": "Ant Media Server — Ultra-low latency streaming engine with WebRTC (~0.5s), SRT, RTMP, HLS, CMAF, adaptive bitrate, transcoding & scaling",
    "website": "https://antmedia.io",
    "github": "https://github.com/ant-media/Ant-Media-Server",
    "license": "MIT",
    "categories": [
      "medienserver"
    ],
    "replacesTools": [
      "Plex Premium",
      "Emby"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "🎵",
    "logoUrl": "https://avatars.githubusercontent.com/u/4112691?v=4",
    "stars": 4638,
    "lastUpdated": "2026-03-02",
    "tags": [
      "abr",
      "android-sdk",
      "ant-media",
      "broadcast",
      "cmaf",
      "hls",
      "ios-sdk"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "android",
      "ios"
    ],
    "featured": false,
    "addedDate": "2026-03-02"
  },
  {
    "id": "kaneo",
    "name": "Kaneo",
    "slug": "kaneo",
    "tagline": "🎯 All you need. Nothing you don't. Open source project management that works for you, not against you.",
    "description": "🎯 All you need. Nothing you don't. Open source project management that works for you, not against you.",
    "website": "https://kaneo.app/",
    "github": "https://github.com/usekaneo/kaneo",
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
    "logoUrl": "https://avatars.githubusercontent.com/u/192649426?v=4",
    "stars": 3245,
    "lastUpdated": "2026-03-01",
    "tags": [
      "hacktoberfest",
      "hono",
      "issue-management",
      "issue-tracker",
      "jira-alternative",
      "kanban",
      "linear-alternative"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-02"
  },
  {
    "id": "actionview",
    "name": "Actionview",
    "slug": "actionview",
    "tagline": "An issue tracking tool based on laravel+reactjs for small and medium-sized enterprises, open-source and free, similar...",
    "description": "An issue tracking tool based on laravel+reactjs for small and medium-sized enterprises, open-source and free, similar to Jira.",
    "website": "https://actionview.cn",
    "github": "https://github.com/lxerxa/actionview",
    "license": "Apache-2.0",
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
    "logoUrl": "https://avatars.githubusercontent.com/u/5182909?v=4",
    "stars": 1815,
    "lastUpdated": "2023-09-03",
    "tags": [
      "board",
      "gantt",
      "issue-tracker",
      "jira",
      "kanban",
      "project-management",
      "scrum-board"
    ],
    "difficulty": "fortgeschritten",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-02"
  },
  {
    "id": "bareos",
    "name": "Bareos",
    "slug": "bareos",
    "tagline": "Bareos is a cross-network Open Source backup solution (licensed under AGPLv3) which preserves, archives, and recovers...",
    "description": "Bareos is a cross-network Open Source backup solution (licensed under AGPLv3) which preserves, archives, and recovers data from all major operating systems.",
    "website": "http://www.bareos.org",
    "github": "https://github.com/bareos/bareos",
    "license": "MIT",
    "categories": [
      "backup"
    ],
    "replacesTools": [
      "Backblaze",
      "Acronis"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "💾",
    "logoUrl": "https://avatars.githubusercontent.com/u/2871017?v=4",
    "stars": 1175,
    "lastUpdated": "2026-02-25",
    "tags": [
      "archiving",
      "backup",
      "backup-solution",
      "backup-utility",
      "bareos",
      "ceph",
      "compression"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-02"
  },
  {
    "id": "project-management",
    "name": "Project Management",
    "slug": "project-management",
    "tagline": "An open source Project management tool based on Laravel and Filament",
    "description": "An open source Project management tool based on Laravel and Filament",
    "website": "https://devaslanphp.github.io/project-management",
    "github": "https://github.com/devaslanphp/project-management",
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
    "logoUrl": "https://avatars.githubusercontent.com/u/113593495?v=4",
    "stars": 1047,
    "lastUpdated": "2024-08-01",
    "tags": [
      "alpinejs",
      "chartjs",
      "filament",
      "filament-excel",
      "filament-notifications",
      "filament-tables",
      "helpdesk"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-02"
  },
  {
    "id": "cubytext",
    "name": "Cubytext",
    "slug": "cubytext",
    "tagline": "An open-source knowledge management app.",
    "description": "An open-source knowledge management app.",
    "website": "https://github.com/vincentdchan/CubyText",
    "github": "https://github.com/vincentdchan/CubyText",
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
    "logoUrl": "https://avatars.githubusercontent.com/u/2352832?v=4",
    "stars": 772,
    "lastUpdated": "2022-10-11",
    "tags": [
      "gui-application",
      "knowledge-graph",
      "local-first",
      "note-taking",
      "privacy",
      "privacy-first",
      "productivity"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-02"
  },
  {
    "id": "idurar-erp-crm",
    "name": "Idurar Erp Crm",
    "slug": "idurar-erp-crm",
    "tagline": "Free Open Source ERP CRM Software Accounting Invoicing | Node Js React",
    "description": "Free Open Source ERP CRM Software Accounting Invoicing | Node Js React",
    "website": "https://cloud.idurarapp.com",
    "github": "https://github.com/idurar/idurar-erp-crm",
    "license": "AGPL-3.0",
    "categories": [
      "erp"
    ],
    "replacesTools": [
      "SAP Business One",
      "Oracle ERP"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "🏭",
    "logoUrl": "https://avatars.githubusercontent.com/u/50052356?v=4",
    "stars": 8214,
    "lastUpdated": "2025-08-16",
    "tags": [
      "accounting",
      "accounting-software",
      "crm",
      "crm-platform",
      "crm-system",
      "e-commerce",
      "ecommerce"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-03"
  },
  {
    "id": "openakita",
    "name": "Openakita",
    "slug": "openakita",
    "tagline": "An open-source AI assistant framework with skills and agent architecture",
    "description": "An open-source AI assistant framework with skills and agent architecture",
    "website": "http://openakita.ai",
    "github": "https://github.com/openakita/openakita",
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
    "logoUrl": "https://avatars.githubusercontent.com/u/258245504?v=4",
    "stars": 908,
    "lastUpdated": "2026-03-02",
    "tags": [
      "agent",
      "ai",
      "assistant",
      "automation",
      "claw",
      "clawd",
      "clawdbot"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-03"
  },
  {
    "id": "hello-halo",
    "name": "Hello Halo",
    "slug": "hello-halo",
    "tagline": "Open-source Claude Code GUI — like Claude Cowork.",
    "description": "Open-source Claude Code GUI — like Claude Cowork. Visual AI assistant with remote access, file management, and built-in AI browser.",
    "website": "https://hello-halo.cc/",
    "github": "https://github.com/openkursar/hello-halo",
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
    "logoUrl": "https://avatars.githubusercontent.com/u/224754962?v=4",
    "stars": 592,
    "lastUpdated": "2026-03-02",
    "tags": [
      "agent",
      "claudecode",
      "cowork"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-03"
  },
  {
    "id": "ethora",
    "name": "Ethora",
    "slug": "ethora",
    "tagline": "Open-source engine for chat 💬, AI assistants 🤖 & wallets 🪪.",
    "description": "Open-source engine for chat 💬, AI assistants 🤖 & wallets 🪪. React, Typescript, Python, XMPP. Build future apps with chat, AI agents and web3.",
    "website": "https://ethora.com/",
    "github": "https://github.com/dappros/ethora",
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
    "logoUrl": "https://avatars.githubusercontent.com/u/63907257?v=4",
    "stars": 521,
    "lastUpdated": "2025-10-07",
    "tags": [
      "ai-chat",
      "chat-sdk",
      "chat-widget",
      "chatbot",
      "developer-tools",
      "ejabberd",
      "ethereum"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-03"
  },
  {
    "id": "astroplate",
    "name": "Astroplate",
    "slug": "astroplate",
    "tagline": "Astroplate is a free starter template built with Astro, TailwindCSS & TypeScript providing everything you need to jum...",
    "description": "Astroplate is a free starter template built with Astro, TailwindCSS & TypeScript providing everything you need to jumpstart your Astro project. Get started with Astroplate and save yourself hours of work!",
    "website": "https://zeon.studio/preview?project=astroplate",
    "github": "https://github.com/zeon-studio/astroplate",
    "license": "MIT",
    "categories": [
      "ssg"
    ],
    "replacesTools": [
      "Webflow",
      "Framer"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "🚀",
    "logoUrl": "https://avatars.githubusercontent.com/u/122345747?v=4",
    "stars": 1018,
    "lastUpdated": "2026-03-02",
    "tags": [
      "astro",
      "astro-boilerplate",
      "astro-template",
      "astro-theme",
      "astrobuild",
      "boilerplate-template",
      "jamstack"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-03"
  },
  {
    "id": "nextplate",
    "name": "Nextplate",
    "slug": "nextplate",
    "tagline": "Nextplate is a free starter template built with Next.js and TailwindCSS.",
    "description": "Nextplate is a free starter template built with Next.js and TailwindCSS. It provides you with almost everything you need to jump-start your Next.js project. Try Nextplate and save yourself hours of work.",
    "website": "https://zeon.studio/preview?project=nextplate",
    "github": "https://github.com/zeon-studio/nextplate",
    "license": "MIT",
    "categories": [
      "ssg"
    ],
    "replacesTools": [
      "Webflow",
      "Framer"
    ],
    "selfHostable": true,
    "logoPlaceholderEmoji": "🚀",
    "logoUrl": "https://avatars.githubusercontent.com/u/122345747?v=4",
    "stars": 513,
    "lastUpdated": "2026-02-25",
    "tags": [
      "boilerplate-template",
      "jamstack",
      "jamstack-theme",
      "js-boilerplate",
      "mit-license",
      "next-js",
      "nextjs-blog"
    ],
    "difficulty": "mittel",
    "platforms": [
      "linux",
      "docker"
    ],
    "featured": false,
    "addedDate": "2026-03-03"
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
  {
    id: 'webstudio',
    name: 'Webstudio',
    slug: 'webstudio',
    tagline: 'Open source website builder and Webflow alternative.',
    description:
      'Open source website builder and Webflow alternative. Webstudio is an advanced visual builder that connects to any headless CMS, supports all CSS properties, and can be hosted anywhere, including with us.',
    website: 'https://webstudio.is',
    github: 'https://github.com/webstudio-is/webstudio',
    license: 'AGPL-3.0',
    categories: ['cms'],
    replacesTools: ['WordPress.com', 'Squarespace', 'Wix'],
    selfHostable: true,
    logoPlaceholderEmoji: '🌍',
    stars: 8270,
    lastUpdated: '2026-03-01',
    tags: ['accessibility', 'alternative', 'cloudflare', 'cloudflare-workers', 'design', 'free', 'frontend'],
    difficulty: 'fortgeschritten',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'webiny-js',
    name: 'Webiny Js',
    slug: 'webiny-js',
    tagline: 'Open-source serverless enterprise CMS.',
    description:
      'Open-source serverless enterprise CMS. Includes a headless CMS, page builder, form builder, and file manager. Easy to customize and expand. Deploys to AWS.',
    website: 'https://www.webiny.com',
    github: 'https://github.com/webiny/webiny-js',
    license: 'MIT',
    categories: ['cms'],
    replacesTools: ['WordPress.com', 'Squarespace', 'Wix'],
    selfHostable: true,
    logoPlaceholderEmoji: '🌍',
    stars: 7939,
    lastUpdated: '2026-03-01',
    tags: ['aws', 'aws-lambda', 'cloud', 'cms', 'graphql', 'headless', 'headless-cms'],
    difficulty: 'einfach',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'coroot',
    name: 'Coroot',
    slug: 'coroot',
    tagline: 'Coroot is an open-source observability and APM tool with AI-powered Root Cause Analysis.',
    description:
      'Coroot is an open-source observability and APM tool with AI-powered Root Cause Analysis. It combines metrics, logs, traces, continuous profiling, and SLO-based alerting with predefined dashboards and inspections.',
    website: 'https://coroot.com',
    github: 'https://github.com/coroot/coroot',
    license: 'Apache-2.0',
    categories: ['monitoring'],
    replacesTools: ['Datadog', 'New Relic', 'PagerDuty'],
    selfHostable: true,
    logoPlaceholderEmoji: '📈',
    stars: 7446,
    lastUpdated: '2026-02-26',
    tags: ['ai', 'alerting', 'apm', 'dashboard', 'database-monitoring', 'distributed-tracing', 'ebpf'],
    difficulty: 'fortgeschritten',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'evidently',
    name: 'Evidently',
    slug: 'evidently',
    tagline: 'Evidently is ​​an open-source ML and LLM observability framework.',
    description:
      'Evidently is ​​an open-source ML and LLM observability framework. Evaluate, test, and monitor any AI-powered system or data pipeline. From tabular data to Gen AI. 100+ metrics.',
    website: 'https://discord.gg/xZjKRaNp8b',
    github: 'https://github.com/evidentlyai/evidently',
    license: 'Apache-2.0',
    categories: ['ki-ml'],
    replacesTools: ['ChatGPT API', 'Midjourney', 'DALL-E'],
    selfHostable: true,
    logoPlaceholderEmoji: '🤖',
    stars: 7253,
    lastUpdated: '2026-02-27',
    tags: ['data-drift', 'data-quality', 'data-science', 'data-validation', 'generative-ai', 'hacktoberfest', 'html-report'],
    difficulty: 'mittel',
    platforms: ['linux', 'macos'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'hertzbeat',
    name: 'Hertzbeat',
    slug: 'hertzbeat',
    tagline: 'An AI-powered next-generation open source real-time observability system.',
    description:
      'An AI-powered next-generation open source real-time observability system.',
    website: 'https://hertzbeat.apache.org/',
    github: 'https://github.com/apache/hertzbeat',
    license: 'Apache-2.0',
    categories: ['monitoring'],
    replacesTools: ['Datadog', 'New Relic', 'PagerDuty'],
    selfHostable: true,
    logoPlaceholderEmoji: '📈',
    stars: 7106,
    lastUpdated: '2026-03-01',
    tags: ['agent', 'ai', 'alerting', 'database', 'grafana', 'linux', 'llm'],
    difficulty: 'mittel',
    platforms: ['linux'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'openllmetry',
    name: 'Openllmetry',
    slug: 'openllmetry',
    tagline: 'Open-source observability for your GenAI or LLM application, based on OpenTelemetry',
    description:
      'Open-source observability for your GenAI or LLM application, based on OpenTelemetry',
    website: 'https://www.traceloop.com/openllmetry',
    github: 'https://github.com/traceloop/openllmetry',
    license: 'Apache-2.0',
    categories: ['ki-ml'],
    replacesTools: ['ChatGPT API', 'Midjourney', 'DALL-E'],
    selfHostable: true,
    logoPlaceholderEmoji: '🤖',
    stars: 6867,
    lastUpdated: '2026-03-01',
    tags: ['artifical-intelligence', 'datascience', 'generative-ai', 'good-first-issue', 'good-first-issues', 'help-wanted', 'llm'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'oneuptime',
    name: 'Oneuptime',
    slug: 'oneuptime',
    tagline: 'Complete open-source monitoring and observability platform.',
    description:
      'Complete open-source monitoring and observability platform.',
    website: 'https://oneuptime.com',
    github: 'https://github.com/OneUptime/oneuptime',
    license: 'Apache-2.0',
    categories: ['monitoring'],
    replacesTools: ['Datadog', 'New Relic', 'PagerDuty'],
    selfHostable: true,
    logoPlaceholderEmoji: '📈',
    stars: 6528,
    lastUpdated: '2026-03-01',
    tags: ['devops', 'incident-management', 'incident-response', 'monitoring', 'observability', 'on-call', 'status-page'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'coze-loop',
    name: 'Coze Loop',
    slug: 'coze-loop',
    tagline: 'Next-generation AI Agent Optimization Platform: Cozeloop addresses challenges in AI agent development by providing fu...',
    description:
      'Next-generation AI Agent Optimization Platform: Cozeloop addresses challenges in AI agent development by providing full-lifecycle management capabilities from development, debugging, and evaluation to monitoring.',
    website: 'https://github.com/coze-dev/coze-loop',
    github: 'https://github.com/coze-dev/coze-loop',
    license: 'Apache-2.0',
    categories: ['monitoring'],
    replacesTools: ['Datadog', 'New Relic', 'PagerDuty'],
    selfHostable: true,
    logoPlaceholderEmoji: '📈',
    stars: 5332,
    lastUpdated: '2026-02-28',
    tags: ['agent', 'agent-evaluation', 'agent-observability', 'agentops', 'ai', 'coze', 'eino'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'helicone',
    name: 'Helicone',
    slug: 'helicone',
    tagline: '🧊 Open source LLM observability platform. One line of code to monitor, evaluate, and experiment. YC W23 🍓',
    description:
      '🧊 Open source LLM observability platform. One line of code to monitor, evaluate, and experiment. YC W23 🍓',
    website: 'https://www.helicone.ai',
    github: 'https://github.com/Helicone/helicone',
    license: 'Apache-2.0',
    categories: ['ki-ml'],
    replacesTools: ['ChatGPT API', 'Midjourney', 'DALL-E'],
    selfHostable: true,
    logoPlaceholderEmoji: '🤖',
    stars: 5164,
    lastUpdated: '2026-02-25',
    tags: ['agent-monitoring', 'analytics', 'evaluation', 'gpt', 'langchain', 'large-language-models', 'llama-index'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'apostrophe',
    name: 'Apostrophe',
    slug: 'apostrophe',
    tagline: 'A full-featured, open-source content management framework built with Node.js that empowers organizations by combining...',
    description:
      'A full-featured, open-source content management framework built with Node.js that empowers organizations by combining in-context editing and headless architecture in a full-stack JS environment.',
    website: 'https://apostrophecms.com',
    github: 'https://github.com/apostrophecms/apostrophe',
    license: 'MIT',
    categories: ['cms'],
    replacesTools: ['WordPress.com', 'Squarespace', 'Wix'],
    selfHostable: true,
    logoPlaceholderEmoji: '🌍',
    stars: 4529,
    lastUpdated: '2026-02-27',
    tags: ['apostrophe', 'cms', 'cms-framework', 'jamstack', 'javascript', 'node', 'node-js'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'uptrace',
    name: 'Uptrace',
    slug: 'uptrace',
    tagline: 'Open source APM: OpenTelemetry traces, metrics, and logs',
    description:
      'Open source APM: OpenTelemetry traces, metrics, and logs',
    website: 'https://uptrace.dev/get/hosted/open-source-apm',
    github: 'https://github.com/uptrace/uptrace',
    license: 'AGPL-3.0',
    categories: ['monitoring'],
    replacesTools: ['Datadog', 'New Relic', 'PagerDuty'],
    selfHostable: true,
    logoPlaceholderEmoji: '📈',
    stars: 4109,
    lastUpdated: '2026-01-21',
    tags: ['apm', 'application-monitoring', 'clickhouse', 'distributed-tracing', 'golang', 'logs', 'metrics'],
    difficulty: 'fortgeschritten',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'terminusdb',
    name: 'Terminusdb',
    slug: 'terminusdb',
    tagline: 'TerminusDB is a distributed, collaborative database designed for building, sharing, versioning, and reasoning on stru...',
    description:
      'TerminusDB is a distributed, collaborative database designed for building, sharing, versioning, and reasoning on structured data.',
    website: 'https://terminusdb.org',
    github: 'https://github.com/terminusdb/terminusdb',
    license: 'Apache-2.0',
    categories: ['datenbanken'],
    replacesTools: ['Oracle', 'MSSQL'],
    selfHostable: true,
    logoPlaceholderEmoji: '🗄️',
    stars: 3203,
    lastUpdated: '2026-03-01',
    tags: ['acid', 'cms', 'collaboration', 'database', 'document-database', 'graph-database', 'headless'],
    difficulty: 'fortgeschritten',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'pezzo',
    name: 'Pezzo',
    slug: 'pezzo',
    tagline: '🕹️ Open-source, developer-first LLMOps platform designed to streamline prompt design, version management, instant del...',
    description:
      '🕹️ Open-source, developer-first LLMOps platform designed to streamline prompt design, version management, instant delivery, collaboration, troubleshooting, observability and more.',
    website: 'https://pezzo.ai',
    github: 'https://github.com/pezzolabs/pezzo',
    license: 'Apache-2.0',
    categories: ['ki-ml'],
    replacesTools: ['ChatGPT API', 'Midjourney', 'DALL-E'],
    selfHostable: true,
    logoPlaceholderEmoji: '🤖',
    stars: 3191,
    lastUpdated: '2025-06-28',
    tags: ['ai', 'devtools', 'gpt-3', 'gpt-4', 'hacktoberfest', 'javascript', 'langchain'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'lmnr',
    name: 'Lmnr',
    slug: 'lmnr',
    tagline: 'Laminar - open-source observability platform purpose-built for AI agents. YC S24.',
    description:
      'Laminar - open-source observability platform purpose-built for AI agents. YC S24.',
    website: 'https://laminar.sh',
    github: 'https://github.com/lmnr-ai/lmnr',
    license: 'Apache-2.0',
    categories: ['monitoring'],
    replacesTools: ['Datadog', 'New Relic', 'PagerDuty'],
    selfHostable: true,
    logoPlaceholderEmoji: '📈',
    stars: 2639,
    lastUpdated: '2026-03-01',
    tags: ['agents', 'ai', 'ai-observability', 'aiops', 'analytics', 'developer-tools', 'evals'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'openlit',
    name: 'Openlit',
    slug: 'openlit',
    tagline: 'Open source platform for AI Engineering: OpenTelemetry-native LLM Observability, GPU Monitoring, Guardrails, Evaluati...',
    description:
      'Open source platform for AI Engineering: OpenTelemetry-native LLM Observability, GPU Monitoring, Guardrails, Evaluations, Prompt Management, Vault, Playground. 🚀💻 Integrates with 50+ LLM Providers, VectorDBs, Agent Frameworks and GPUs.',
    website: 'https://docs.openlit.io',
    github: 'https://github.com/openlit/openlit',
    license: 'Apache-2.0',
    categories: ['monitoring'],
    replacesTools: ['Datadog', 'New Relic', 'PagerDuty'],
    selfHostable: true,
    logoPlaceholderEmoji: '📈',
    stars: 2254,
    lastUpdated: '2026-03-01',
    tags: ['ai-observability', 'amd-gpu', 'clickhouse', 'distributed-tracing', 'genai', 'gpu-monitoring', 'grafana'],
    difficulty: 'fortgeschritten',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'sveltia-cms',
    name: 'Sveltia Cms',
    slug: 'sveltia-cms',
    tagline: 'Git-based headless CMS. Successor to Netlify CMS (now Decap CMS). Modern UX, first-class i18n support, mobile support...',
    description:
      'Git-based headless CMS. Successor to Netlify CMS (now Decap CMS). Modern UX, first-class i18n support, mobile support + 100s of improvements. Framework-agnostic, open source & free.',
    website: 'https://sveltiacms.app/en/',
    github: 'https://github.com/sveltia/sveltia-cms',
    license: 'MIT',
    categories: ['cms'],
    replacesTools: ['WordPress.com', 'Squarespace', 'Wix'],
    selfHostable: true,
    logoPlaceholderEmoji: '🌍',
    stars: 2169,
    lastUpdated: '2026-03-01',
    tags: ['cms', 'content-management', 'content-management-system', 'dam', 'dark-mode', 'decap-cms', 'digital-asset-management'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'vrite',
    name: 'Vrite',
    slug: 'vrite',
    tagline: 'Open-source developer content platform',
    description:
      'Open-source developer content platform',
    website: 'https://vrite.io',
    github: 'https://github.com/vriteio/vrite',
    license: 'MIT',
    categories: ['cms'],
    replacesTools: ['WordPress.com', 'Squarespace', 'Wix'],
    selfHostable: true,
    logoPlaceholderEmoji: '🌍',
    stars: 1973,
    lastUpdated: '2025-10-28',
    tags: ['blogging', 'cms', 'collaboration', 'content-management', 'documentation', 'headless', 'headless-cms'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'gigapipe',
    name: 'Gigapipe',
    slug: 'gigapipe',
    tagline: '⭐️ The Open-Source Polyglot Observability Warehouse: Light, Fast, Cloud Native, Drop-in Grafana LGTMP alternative :ro...',
    description:
      '⭐️ The Open-Source Polyglot Observability Warehouse: Light, Fast, Cloud Native, Drop-in Grafana LGTMP alternative :rocket: Indie All-in-One Opentelemetry, Loki, Prometheus, Tempo, Pyroscope On-Prem Alternative :star:',
    website: 'https://gigapipe.com',
    github: 'https://github.com/metrico/gigapipe',
    license: 'AGPL-3.0',
    categories: ['monitoring'],
    replacesTools: ['Datadog', 'New Relic', 'PagerDuty'],
    selfHostable: true,
    logoPlaceholderEmoji: '📈',
    stars: 1635,
    lastUpdated: '2026-02-02',
    tags: ['clickhouse', 'gigapipe', 'grafana', 'lgtm', 'logql', 'logs', 'loki'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'atomic-server',
    name: 'Atomic Server',
    slug: 'atomic-server',
    tagline: 'An open source headless CMS / real-time database.',
    description:
      'An open source headless CMS / real-time database. Powerful table editor, full-text search, and SDKs for JS / React / Svelte.',
    website: 'https://atomicserver.eu',
    github: 'https://github.com/ontola/atomic-server',
    license: 'MIT',
    categories: ['datenbanken'],
    replacesTools: ['Oracle', 'MSSQL'],
    selfHostable: true,
    logoPlaceholderEmoji: '🗄️',
    stars: 1506,
    lastUpdated: '2026-02-23',
    tags: ['actix', 'atomic-data', 'cli', 'database', 'library', 'linked-data', 'rdf'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'sonicjs',
    name: 'Sonicjs',
    slug: 'sonicjs',
    tagline: 'SonicJS - The edge-native headless CMS for Cloudflare Workers.',
    description:
      'SonicJS - The edge-native headless CMS for Cloudflare Workers. Sub-100ms response times, zero cold starts, TypeScript-first. Built on D1, R2, and Hono.',
    website: 'https://sonicjs.com',
    github: 'https://github.com/SonicJs-Org/sonicjs',
    license: 'MIT',
    categories: ['cms'],
    replacesTools: ['WordPress.com', 'Squarespace', 'Wix'],
    selfHostable: true,
    logoPlaceholderEmoji: '🌍',
    stars: 1478,
    lastUpdated: '2026-03-01',
    tags: ['api', 'backend', 'cloudflare-d1', 'cloudflare-r2', 'cloudflare-workers', 'cms', 'content-management'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'smartstore',
    name: 'Smartstore',
    slug: 'smartstore',
    tagline: 'A modular, scalable and ultra-fast open-source all-in-one eCommerce platform built on ASP.NET Core 10',
    description:
      'A modular, scalable and ultra-fast open-source all-in-one eCommerce platform built on ASP.NET Core 10',
    website: 'http://www.smartstore.com/',
    github: 'https://github.com/smartstore/Smartstore',
    license: 'AGPL-3.0',
    categories: ['e-commerce'],
    replacesTools: ['Shopify', 'Magento Commerce'],
    selfHostable: true,
    logoPlaceholderEmoji: '🛒',
    stars: 1465,
    lastUpdated: '2026-02-28',
    tags: ['asp-net', 'aspnet', 'aspnet-core', 'aspnetcore', 'azure', 'bootstrap', 'cms'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'grafana-operator',
    name: 'Grafana Operator',
    slug: 'grafana-operator',
    tagline: 'An operator for Grafana that installs and manages Grafana instances, Dashboards and Datasources through Kubernetes/Op...',
    description:
      'An operator for Grafana that installs and manages Grafana instances, Dashboards and Datasources through Kubernetes/OpenShift CRs',
    website: 'https://grafana.github.io/grafana-operator/docs/',
    github: 'https://github.com/grafana/grafana-operator',
    license: 'Apache-2.0',
    categories: ['container'],
    replacesTools: ['Docker Hub', 'Kubernetes EKS'],
    selfHostable: true,
    logoPlaceholderEmoji: '📦',
    stars: 1280,
    lastUpdated: '2026-02-28',
    tags: ['community', 'go', 'golang', 'grafana', 'grafana-operator', 'hacktober', 'k8s'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'measure',
    name: 'Measure',
    slug: 'measure',
    tagline: 'Measure is an open-source tool to monitor mobile apps.',
    description:
      'Measure is an open-source tool to monitor mobile apps. We connect the dots between user actions, app events, network calls, logs, and errors to make debugging production issues easy!',
    website: 'https://measure.sh',
    github: 'https://github.com/measure-sh/measure',
    license: 'Apache-2.0',
    categories: ['monitoring'],
    replacesTools: ['Datadog', 'New Relic', 'PagerDuty'],
    selfHostable: true,
    logoPlaceholderEmoji: '📈',
    stars: 1179,
    lastUpdated: '2026-03-01',
    tags: ['android', 'anr', 'crash', 'crash-reporting', 'crashlytics', 'flutter', 'ios'],
    difficulty: 'einfach',
    platforms: ['linux', 'android', 'ios'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'openam',
    name: 'Openam',
    slug: 'openam',
    tagline: 'OpenAM is an open-source access management solution for identity authentication, authorization, and federation.',
    description:
      'OpenAM is an open-source access management solution for identity authentication, authorization, and federation. It provides single sign-on, adaptive authentication, and centralized policy control, enabling secure access to web, mobile, and cloud applications',
    website: 'https://www.openidentityplatform.org/openam',
    github: 'https://github.com/OpenIdentityPlatform/OpenAM',
    license: 'MIT',
    categories: ['backend-frameworks'],
    replacesTools: ['Firebase', 'Supabase Pro'],
    selfHostable: true,
    logoPlaceholderEmoji: '⚙️',
    stars: 865,
    lastUpdated: '2026-02-15',
    tags: ['aaa', 'access', 'access-management', 'accounting', 'active-directory', 'authentication', 'authorization'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'apt',
    name: 'Apt',
    slug: 'apt',
    tagline: 'AI Productivity Tool - Free and open source, improve user productivity, and protect privacy and data security.',
    description:
      'AI Productivity Tool - Free and open source, improve user productivity, and protect privacy and data security. Including but not limited to: built-in local exclusive ChatGPT, DeepSeek, Phi, Qwen and other models, one-click batch intelligent processing of pictures, videos, audio, etc.',
    website: 'https://github.com/rnchg/APT',
    github: 'https://github.com/rnchg/APT',
    license: 'MIT',
    categories: ['ki-ml'],
    replacesTools: ['ChatGPT API', 'Midjourney', 'DALL-E'],
    selfHostable: true,
    logoPlaceholderEmoji: '🤖',
    stars: 775,
    lastUpdated: '2025-12-13',
    tags: ['ai', 'ai-framework', 'aigc', 'audio-processing', 'chatgpt', 'computer-vision', 'deep-learning'],
    difficulty: 'mittel',
    platforms: ['linux', 'macos'],
    featured: false,
    addedDate: '2026-03-01',
  },
  {
    id: 'nhost',
    name: 'Nhost',
    slug: 'nhost',
    tagline: 'The Open Source Firebase Alternative with GraphQL.',
    description:
      'The Open Source Firebase Alternative with GraphQL.',
    website: 'https://nhost.io',
    github: 'https://github.com/nhost/nhost',
    license: 'MIT',
    categories: ['backend-frameworks'],
    replacesTools: ['Firebase', 'Supabase Pro'],
    selfHostable: true,
    logoPlaceholderEmoji: '⚙️',
    stars: 9089,
    lastUpdated: '2026-03-01',
    tags: ['authentication', 'backend', 'backend-as-a-service', 'database', 'firebase', 'flutter', 'graphql'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-02',
  },
  {
    id: 'swanlab',
    name: 'Swanlab',
    slug: 'swanlab',
    tagline: '⚡️SwanLab - an open-source, modern-design AI training tracking and visualization tool.',
    description:
      '⚡️SwanLab - an open-source, modern-design AI training tracking and visualization tool. Supports Cloud / Self-hosted use. Integrated with PyTorch / Transformers / verl / LLaMA Factory / ms-swift / Ultralytics / MMEngine / Keras etc.',
    website: 'https://swanlab.cn',
    github: 'https://github.com/SwanHubX/SwanLab',
    license: 'Apache-2.0',
    categories: ['ki-ml'],
    replacesTools: ['ChatGPT API', 'Midjourney', 'DALL-E'],
    selfHostable: true,
    logoPlaceholderEmoji: '🤖',
    stars: 3622,
    lastUpdated: '2026-03-02',
    tags: ['data-science', 'deep-learning', 'llm', 'logging', 'machine-learning', 'mlops', 'model-versioning'],
    difficulty: 'mittel',
    platforms: ['linux', 'macos'],
    featured: false,
    addedDate: '2026-03-02',
  },
  {
    id: 'lsp-ai',
    name: 'Lsp Ai',
    slug: 'lsp-ai',
    tagline: 'LSP-AI is an open-source language server that serves as a backend for AI-powered functionality, designed to assist an...',
    description:
      'LSP-AI is an open-source language server that serves as a backend for AI-powered functionality, designed to assist and empower software engineers, not replace them.',
    website: 'https://github.com/SilasMarvin/lsp-ai',
    github: 'https://github.com/SilasMarvin/lsp-ai',
    license: 'MIT',
    categories: ['ki-ml'],
    replacesTools: ['ChatGPT API', 'Midjourney', 'DALL-E'],
    selfHostable: true,
    logoPlaceholderEmoji: '🤖',
    stars: 3140,
    lastUpdated: '2025-01-07',
    tags: ['ai', 'auto-completion', 'developer-tools', 'ide', 'language-client', 'llama', 'llamacpp'],
    difficulty: 'mittel',
    platforms: ['linux', 'macos'],
    featured: false,
    addedDate: '2026-03-02',
  },
  {
    id: 'octobase',
    name: 'Octobase',
    slug: 'octobase',
    tagline: '🐙 OctoBase is the open-source database behind AFFiNE, local-first, yet collaborative.',
    description:
      '🐙 OctoBase is the open-source database behind AFFiNE, local-first, yet collaborative. A light-weight, scalable, data engine written in Rust.',
    website: 'https://octobase.dev',
    github: 'https://github.com/toeverything/OctoBase',
    license: 'AGPL-3.0',
    categories: ['datenbanken'],
    replacesTools: ['Oracle', 'MSSQL'],
    selfHostable: true,
    logoPlaceholderEmoji: '🗄️',
    stars: 1901,
    lastUpdated: '2025-03-05',
    tags: ['collaborative', 'crdt', 'database', 'decentralized-storage', 'p2p', 'rust', 'self-contained'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-02',
  },
  {
    id: 'graft',
    name: 'Graft',
    slug: 'graft',
    tagline: 'Graft is an open-source transactional storage engine optimized for lazy, partial, and strongly consistent replication...',
    description:
      'Graft is an open-source transactional storage engine optimized for lazy, partial, and strongly consistent replication—perfect for edge, offline-first, and distributed applications.',
    website: 'https://graft.rs',
    github: 'https://github.com/orbitinghail/graft',
    license: 'Apache-2.0',
    categories: ['datenbanken'],
    replacesTools: ['Oracle', 'MSSQL'],
    selfHostable: true,
    logoPlaceholderEmoji: '🗄️',
    stars: 1409,
    lastUpdated: '2026-03-01',
    tags: ['database', 'edge', 'replication', 'sqlite', 'storage', 'storage-engine'],
    difficulty: 'fortgeschritten',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-02',
  },
  {
    id: 'audiomuse-ai',
    name: 'Audiomuse Ai',
    slug: 'audiomuse-ai',
    tagline: 'AudioMuse-AI is an Open Source Dockerized environment that brings automatic playlist generation to Jellyfin, Navidrom...',
    description:
      'AudioMuse-AI is an Open Source Dockerized environment that brings automatic playlist generation to Jellyfin, Navidrome, LMS, Lyrion and Emby. Using powerful tools like Librosa and ONNX, it performs sonic analysis on your audio files locally, allowing you to curate the perfect playlist for any mood or occasion without relying on external APIs.',
    website: 'https://neptunehub.github.io/AudioMuse-AI/',
    github: 'https://github.com/NeptuneHub/AudioMuse-AI',
    license: 'AGPL-3.0',
    categories: ['container'],
    replacesTools: ['Docker Hub', 'Kubernetes EKS'],
    selfHostable: true,
    logoPlaceholderEmoji: '📦',
    stars: 1319,
    lastUpdated: '2026-02-28',
    tags: ['clap', 'docker', 'emby', 'jellyfin', 'jellyfin-plugin', 'k3s', 'kubernetes'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-02',
  },
  {
    id: 'learnhouse',
    name: 'Learnhouse',
    slug: 'learnhouse',
    tagline: 'The Next-gen Open Source learning platform for everyone ✨',
    description:
      'The Next-gen Open Source learning platform for everyone ✨',
    website: 'https://learnhouse.app',
    github: 'https://github.com/learnhouse/learnhouse',
    license: 'AGPL-3.0',
    categories: ['ki-ml'],
    replacesTools: ['ChatGPT API', 'Midjourney', 'DALL-E'],
    selfHostable: true,
    logoPlaceholderEmoji: '🤖',
    stars: 1309,
    lastUpdated: '2026-03-01',
    tags: ['ai', 'ai-powered', 'api', 'cms', 'education', 'educational', 'headless'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-02',
  },
  {
    id: 'browserable',
    name: 'Browserable',
    slug: 'browserable',
    tagline: 'Open source and self-hostable browser automation library for AI agents',
    description:
      'Open source and self-hostable browser automation library for AI agents',
    website: 'https://browserable.ai',
    github: 'https://github.com/browserable/browserable',
    license: 'MIT',
    categories: ['ki-ml'],
    replacesTools: ['ChatGPT API', 'Midjourney', 'DALL-E'],
    selfHostable: true,
    logoPlaceholderEmoji: '🤖',
    stars: 1162,
    lastUpdated: '2025-08-27',
    tags: ['ai-agents', 'ai-tools', 'browser-automation', 'browser-use', 'browser-use-js', 'deep-research', 'javascript'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-02',
  },
  {
    id: 'alchemy-cms',
    name: 'Alchemy Cms',
    slug: 'alchemy-cms',
    tagline: 'Alchemy is the Open Source Rails CMS framework for the component based web that can be used as classic server side re...',
    description:
      'Alchemy is the Open Source Rails CMS framework for the component based web that can be used as classic server side rendered or headless CMS.',
    website: 'https://www.alchemy-cms.com',
    github: 'https://github.com/AlchemyCMS/alchemy_cms',
    license: 'BSD-3-Clause',
    categories: ['cms'],
    replacesTools: ['WordPress.com', 'Squarespace', 'Wix'],
    selfHostable: true,
    logoPlaceholderEmoji: '🌍',
    stars: 890,
    lastUpdated: '2026-03-01',
    tags: ['admin', 'alchemy-cms', 'cms', 'content-management-system', 'rails', 'rails-engine', 'ruby'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-02',
  },
  {
    id: 'mix-core',
    name: 'Mix.core',
    slug: 'mix-core',
    tagline: '🚀 A future-proof enterprise web CMS supporting both headless and decoupled approaches.',
    description:
      '🚀 A future-proof enterprise web CMS supporting both headless and decoupled approaches. Build any type of app with customizable APIs on ASP.NET Core/.NET Core. Completely open-source and designed for flexibility.',
    website: 'https://mixcore.org',
    github: 'https://github.com/mixcore/mix.core',
    license: 'MIT',
    categories: ['cms'],
    replacesTools: ['WordPress.com', 'Squarespace', 'Wix'],
    selfHostable: true,
    logoPlaceholderEmoji: '🌍',
    stars: 881,
    lastUpdated: '2026-01-29',
    tags: ['angular', 'asp', 'asp-net-core', 'asp-net-core-content-management-system', 'bootstrap', 'cms', 'content-management-system'],
    difficulty: 'fortgeschritten',
    platforms: ['linux', 'web'],
    featured: false,
    addedDate: '2026-03-02',
  },
  {
    id: 'mesh',
    name: 'Mesh',
    slug: 'mesh',
    tagline: 'Gentics Mesh - The open source headless CMS for developers',
    description:
      'Gentics Mesh - The open source headless CMS for developers',
    website: 'https://getmesh.io',
    github: 'https://github.com/gentics/mesh',
    license: 'Apache-2.0',
    categories: ['cms'],
    replacesTools: ['WordPress.com', 'Squarespace', 'Wix'],
    selfHostable: true,
    logoPlaceholderEmoji: '🌍',
    stars: 589,
    lastUpdated: '2026-02-26',
    tags: ['api-first', 'cms', 'cms-api', 'gentics-mesh', 'graphql-api', 'headless-cms'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-02',
  },
  {
    id: 'truthy',
    name: 'Truthy',
    slug: 'truthy',
    tagline: 'Open source headless CMS API written using NestJS, that has pre built modules like User Management, Role Management, ...',
    description:
      'Open source headless CMS API written using NestJS, that has pre built modules like User Management, Role Management, Permission Management, Email Module, Account Settings, OTP, Throttling, RBAC support, Localization, and many more.',
    website: 'https://github.com/gobeam/truthy',
    github: 'https://github.com/gobeam/truthy',
    license: 'MIT',
    categories: ['cms'],
    replacesTools: ['WordPress.com', 'Squarespace', 'Wix'],
    selfHostable: true,
    logoPlaceholderEmoji: '🌍',
    stars: 589,
    lastUpdated: '2025-02-01',
    tags: ['api', 'api-rest', 'awesome-nestjs-boilerplate', 'boilerplate', 'cms', 'demo', 'headless-cms'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-02',
  },
  {
    id: 'flextype',
    name: 'Flextype',
    slug: 'flextype',
    tagline: 'Modern Open Source Flat Files Content Management System.',
    description:
      'Modern Open Source Flat Files Content Management System.',
    website: 'https://awilum.github.io/flextype',
    github: 'https://github.com/flextype/flextype',
    license: 'MIT',
    categories: ['cms'],
    replacesTools: ['WordPress.com', 'Squarespace', 'Wix'],
    selfHostable: true,
    logoPlaceholderEmoji: '🌍',
    stars: 588,
    lastUpdated: '2022-11-19',
    tags: ['api', 'cms', 'content', 'content-management', 'content-management-system', 'doctrine', 'flat-file'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-02',
  },
  {
    id: 'vaahcms',
    name: 'Vaahcms',
    slug: 'vaahcms',
    tagline: 'VaahCMS is a laravel based open-source web application development platform shipped with a headless content managemen...',
    description:
      'VaahCMS is a laravel based open-source web application development platform shipped with a headless content management system (CMS).',
    website: 'https://vaah.dev/cms',
    github: 'https://github.com/webreinvent/vaahcms',
    license: 'MIT',
    categories: ['cms'],
    replacesTools: ['WordPress.com', 'Squarespace', 'Wix'],
    selfHostable: true,
    logoPlaceholderEmoji: '🌍',
    stars: 574,
    lastUpdated: '2026-02-16',
    tags: ['admin', 'application', 'backend', 'buefy', 'bulma', 'cms', 'content-management'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-02',
  },
  {
    id: 'copilotkit',
    name: 'Copilotkit',
    slug: 'copilotkit',
    tagline: 'The Frontend for Agents & Generative UI. React + Angular',
    description:
      'The Frontend for Agents & Generative UI. React + Angular',
    website: 'https://docs.copilotkit.ai',
    github: 'https://github.com/CopilotKit/CopilotKit',
    license: 'MIT',
    categories: ['ki-ml'],
    replacesTools: ['ChatGPT API', 'Midjourney', 'DALL-E'],
    selfHostable: true,
    logoPlaceholderEmoji: '🤖',
    logoUrl: 'https://avatars.githubusercontent.com/u/131273140?v=4',
    stars: 29123,
    lastUpdated: '2026-03-02',
    tags: ['agent', 'agent-native', 'agentic-ai', 'agents', 'ai', 'ai-agent', 'ai-assistant'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-02',
  },
  {
    id: 'jaaz',
    name: 'Jaaz',
    slug: 'jaaz',
    tagline: 'The world\'s first open-source multimodal creative assistant  This is a substitute for Canva and Manus that prioritize...',
    description:
      'The world\'s first open-source multimodal creative assistant  This is a substitute for Canva and Manus that prioritizes privacy and is usable locally.',
    website: 'https://jaaz.app',
    github: 'https://github.com/11cafe/jaaz',
    license: 'MIT',
    categories: ['ki-ml'],
    replacesTools: ['ChatGPT API', 'Midjourney', 'DALL-E'],
    selfHostable: true,
    logoPlaceholderEmoji: '🤖',
    logoUrl: 'https://avatars.githubusercontent.com/u/152708197?v=4',
    stars: 5924,
    lastUpdated: '2026-03-02',
    tags: ['agent', 'ai', 'aiagent', 'aiimage', 'aiimagegenerator', 'aitool', 'aitools'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-02',
  },
  {
    id: 'taskcafe',
    name: 'Taskcafe',
    slug: 'taskcafe',
    tagline: 'An open source project management tool with Kanban boards',
    description:
      'An open source project management tool with Kanban boards',
    website: 'https://github.com/JordanKnott/taskcafe',
    github: 'https://github.com/JordanKnott/taskcafe',
    license: 'MIT',
    categories: ['projektmanagement'],
    replacesTools: ['Asana', 'Monday', 'Jira', 'Trello'],
    selfHostable: true,
    logoPlaceholderEmoji: '✅',
    logoUrl: 'https://avatars.githubusercontent.com/u/11680844?v=4',
    stars: 5180,
    lastUpdated: '2023-07-23',
    tags: ['golang', 'gqlgen', 'graphql', 'kanban-board', 'project-management', 'react', 'typescript'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-02',
  },
  {
    id: 'silverbullet',
    name: 'Silverbullet',
    slug: 'silverbullet',
    tagline: 'An open source personal productivity platform built on Markdown, turbo charged with the scripting power of Lua',
    description:
      'An open source personal productivity platform built on Markdown, turbo charged with the scripting power of Lua',
    website: 'https://silverbullet.md',
    github: 'https://github.com/silverbulletmd/silverbullet',
    license: 'MIT',
    categories: ['notizen'],
    replacesTools: ['Notion', 'Evernote', 'Obsidian'],
    selfHostable: true,
    logoPlaceholderEmoji: '📝',
    logoUrl: 'https://avatars.githubusercontent.com/u/108344757?v=4',
    stars: 4777,
    lastUpdated: '2026-03-02',
    tags: ['end-user-programming', 'knowledge-management', 'lua', 'markdown', 'note-taking', 'personal-knowledge-management'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-02',
  },
  {
    id: 'ant-media-server',
    name: 'Ant Media Server',
    slug: 'ant-media-server',
    tagline: 'Ant Media Server — Ultra-low latency streaming engine with WebRTC (~0.5s), SRT, RTMP, HLS, CMAF, adaptive bitrate, tr...',
    description:
      'Ant Media Server — Ultra-low latency streaming engine with WebRTC (~0.5s), SRT, RTMP, HLS, CMAF, adaptive bitrate, transcoding & scaling',
    website: 'https://antmedia.io',
    github: 'https://github.com/ant-media/Ant-Media-Server',
    license: 'MIT',
    categories: ['medienserver'],
    replacesTools: ['Plex Premium', 'Emby'],
    selfHostable: true,
    logoPlaceholderEmoji: '🎵',
    logoUrl: 'https://avatars.githubusercontent.com/u/4112691?v=4',
    stars: 4638,
    lastUpdated: '2026-03-02',
    tags: ['abr', 'android-sdk', 'ant-media', 'broadcast', 'cmaf', 'hls', 'ios-sdk'],
    difficulty: 'mittel',
    platforms: ['linux', 'android', 'ios'],
    featured: false,
    addedDate: '2026-03-02',
  },
  {
    id: 'kaneo',
    name: 'Kaneo',
    slug: 'kaneo',
    tagline: '🎯 All you need. Nothing you don\'t. Open source project management that works for you, not against you.',
    description:
      '🎯 All you need. Nothing you don\'t. Open source project management that works for you, not against you.',
    website: 'https://kaneo.app/',
    github: 'https://github.com/usekaneo/kaneo',
    license: 'MIT',
    categories: ['projektmanagement'],
    replacesTools: ['Asana', 'Monday', 'Jira', 'Trello'],
    selfHostable: true,
    logoPlaceholderEmoji: '✅',
    logoUrl: 'https://avatars.githubusercontent.com/u/192649426?v=4',
    stars: 3245,
    lastUpdated: '2026-03-01',
    tags: ['hacktoberfest', 'hono', 'issue-management', 'issue-tracker', 'jira-alternative', 'kanban', 'linear-alternative'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-02',
  },
  {
    id: 'actionview',
    name: 'Actionview',
    slug: 'actionview',
    tagline: 'An issue tracking tool based on laravel+reactjs for small and medium-sized enterprises, open-source and free, similar...',
    description:
      'An issue tracking tool based on laravel+reactjs for small and medium-sized enterprises, open-source and free, similar to Jira.',
    website: 'https://actionview.cn',
    github: 'https://github.com/lxerxa/actionview',
    license: 'Apache-2.0',
    categories: ['projektmanagement'],
    replacesTools: ['Asana', 'Monday', 'Jira', 'Trello'],
    selfHostable: true,
    logoPlaceholderEmoji: '✅',
    logoUrl: 'https://avatars.githubusercontent.com/u/5182909?v=4',
    stars: 1815,
    lastUpdated: '2023-09-03',
    tags: ['board', 'gantt', 'issue-tracker', 'jira', 'kanban', 'project-management', 'scrum-board'],
    difficulty: 'fortgeschritten',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-02',
  },
  {
    id: 'bareos',
    name: 'Bareos',
    slug: 'bareos',
    tagline: 'Bareos is a cross-network Open Source backup solution (licensed under AGPLv3) which preserves, archives, and recovers...',
    description:
      'Bareos is a cross-network Open Source backup solution (licensed under AGPLv3) which preserves, archives, and recovers data from all major operating systems.',
    website: 'http://www.bareos.org',
    github: 'https://github.com/bareos/bareos',
    license: 'MIT',
    categories: ['backup'],
    replacesTools: ['Backblaze', 'Acronis'],
    selfHostable: true,
    logoPlaceholderEmoji: '💾',
    logoUrl: 'https://avatars.githubusercontent.com/u/2871017?v=4',
    stars: 1175,
    lastUpdated: '2026-02-25',
    tags: ['archiving', 'backup', 'backup-solution', 'backup-utility', 'bareos', 'ceph', 'compression'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-02',
  },
  {
    id: 'project-management',
    name: 'Project Management',
    slug: 'project-management',
    tagline: 'An open source Project management tool based on Laravel and Filament',
    description:
      'An open source Project management tool based on Laravel and Filament',
    website: 'https://devaslanphp.github.io/project-management',
    github: 'https://github.com/devaslanphp/project-management',
    license: 'MIT',
    categories: ['projektmanagement'],
    replacesTools: ['Asana', 'Monday', 'Jira', 'Trello'],
    selfHostable: true,
    logoPlaceholderEmoji: '✅',
    logoUrl: 'https://avatars.githubusercontent.com/u/113593495?v=4',
    stars: 1047,
    lastUpdated: '2024-08-01',
    tags: ['alpinejs', 'chartjs', 'filament', 'filament-excel', 'filament-notifications', 'filament-tables', 'helpdesk'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-02',
  },
  {
    id: 'cubytext',
    name: 'Cubytext',
    slug: 'cubytext',
    tagline: 'An open-source knowledge management app.',
    description:
      'An open-source knowledge management app.',
    website: 'https://github.com/vincentdchan/CubyText',
    github: 'https://github.com/vincentdchan/CubyText',
    license: 'MIT',
    categories: ['notizen'],
    replacesTools: ['Notion', 'Evernote', 'Obsidian'],
    selfHostable: true,
    logoPlaceholderEmoji: '📝',
    logoUrl: 'https://avatars.githubusercontent.com/u/2352832?v=4',
    stars: 772,
    lastUpdated: '2022-10-11',
    tags: ['gui-application', 'knowledge-graph', 'local-first', 'note-taking', 'privacy', 'privacy-first', 'productivity'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-02',
  },
  {
    id: 'idurar-erp-crm',
    name: 'Idurar Erp Crm',
    slug: 'idurar-erp-crm',
    tagline: 'Free Open Source ERP CRM Software Accounting Invoicing | Node Js React',
    description:
      'Free Open Source ERP CRM Software Accounting Invoicing | Node Js React',
    website: 'https://cloud.idurarapp.com',
    github: 'https://github.com/idurar/idurar-erp-crm',
    license: 'AGPL-3.0',
    categories: ['erp'],
    replacesTools: ['SAP Business One', 'Oracle ERP'],
    selfHostable: true,
    logoPlaceholderEmoji: '🏭',
    logoUrl: 'https://avatars.githubusercontent.com/u/50052356?v=4',
    stars: 8214,
    lastUpdated: '2025-08-16',
    tags: ['accounting', 'accounting-software', 'crm', 'crm-platform', 'crm-system', 'e-commerce', 'ecommerce'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-03',
  },
  {
    id: 'openakita',
    name: 'Openakita',
    slug: 'openakita',
    tagline: 'An open-source AI assistant framework with skills and agent architecture',
    description:
      'An open-source AI assistant framework with skills and agent architecture',
    website: 'http://openakita.ai',
    github: 'https://github.com/openakita/openakita',
    license: 'Apache-2.0',
    categories: ['ki-ml'],
    replacesTools: ['ChatGPT API', 'Midjourney', 'DALL-E'],
    selfHostable: true,
    logoPlaceholderEmoji: '🤖',
    logoUrl: 'https://avatars.githubusercontent.com/u/258245504?v=4',
    stars: 908,
    lastUpdated: '2026-03-02',
    tags: ['agent', 'ai', 'assistant', 'automation', 'claw', 'clawd', 'clawdbot'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-03',
  },
  {
    id: 'hello-halo',
    name: 'Hello Halo',
    slug: 'hello-halo',
    tagline: 'Open-source Claude Code GUI — like Claude Cowork.',
    description:
      'Open-source Claude Code GUI — like Claude Cowork. Visual AI assistant with remote access, file management, and built-in AI browser.',
    website: 'https://hello-halo.cc/',
    github: 'https://github.com/openkursar/hello-halo',
    license: 'MIT',
    categories: ['ki-ml'],
    replacesTools: ['ChatGPT API', 'Midjourney', 'DALL-E'],
    selfHostable: true,
    logoPlaceholderEmoji: '🤖',
    logoUrl: 'https://avatars.githubusercontent.com/u/224754962?v=4',
    stars: 592,
    lastUpdated: '2026-03-02',
    tags: ['agent', 'claudecode', 'cowork'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-03',
  },
  {
    id: 'ethora',
    name: 'Ethora',
    slug: 'ethora',
    tagline: 'Open-source engine for chat 💬, AI assistants 🤖 & wallets 🪪.',
    description:
      'Open-source engine for chat 💬, AI assistants 🤖 & wallets 🪪. React, Typescript, Python, XMPP. Build future apps with chat, AI agents and web3.',
    website: 'https://ethora.com/',
    github: 'https://github.com/dappros/ethora',
    license: 'AGPL-3.0',
    categories: ['ki-ml'],
    replacesTools: ['ChatGPT API', 'Midjourney', 'DALL-E'],
    selfHostable: true,
    logoPlaceholderEmoji: '🤖',
    logoUrl: 'https://avatars.githubusercontent.com/u/63907257?v=4',
    stars: 521,
    lastUpdated: '2025-10-07',
    tags: ['ai-chat', 'chat-sdk', 'chat-widget', 'chatbot', 'developer-tools', 'ejabberd', 'ethereum'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-03',
  },
  {
    id: 'astroplate',
    name: 'Astroplate',
    slug: 'astroplate',
    tagline: 'Astroplate is a free starter template built with Astro, TailwindCSS & TypeScript providing everything you need to jum...',
    description:
      'Astroplate is a free starter template built with Astro, TailwindCSS & TypeScript providing everything you need to jumpstart your Astro project. Get started with Astroplate and save yourself hours of work!',
    website: 'https://zeon.studio/preview?project=astroplate',
    github: 'https://github.com/zeon-studio/astroplate',
    license: 'MIT',
    categories: ['ssg'],
    replacesTools: ['Webflow', 'Framer'],
    selfHostable: true,
    logoPlaceholderEmoji: '🚀',
    logoUrl: 'https://avatars.githubusercontent.com/u/122345747?v=4',
    stars: 1018,
    lastUpdated: '2026-03-02',
    tags: ['astro', 'astro-boilerplate', 'astro-template', 'astro-theme', 'astrobuild', 'boilerplate-template', 'jamstack'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-03',
  },
  {
    id: 'nextplate',
    name: 'Nextplate',
    slug: 'nextplate',
    tagline: 'Nextplate is a free starter template built with Next.js and TailwindCSS.',
    description:
      'Nextplate is a free starter template built with Next.js and TailwindCSS. It provides you with almost everything you need to jump-start your Next.js project. Try Nextplate and save yourself hours of work.',
    website: 'https://zeon.studio/preview?project=nextplate',
    github: 'https://github.com/zeon-studio/nextplate',
    license: 'MIT',
    categories: ['ssg'],
    replacesTools: ['Webflow', 'Framer'],
    selfHostable: true,
    logoPlaceholderEmoji: '🚀',
    logoUrl: 'https://avatars.githubusercontent.com/u/122345747?v=4',
    stars: 513,
    lastUpdated: '2026-02-25',
    tags: ['boilerplate-template', 'jamstack', 'jamstack-theme', 'js-boilerplate', 'mit-license', 'next-js', 'nextjs-blog'],
    difficulty: 'mittel',
    platforms: ['linux', 'docker'],
    featured: false,
    addedDate: '2026-03-03',
  },
];
