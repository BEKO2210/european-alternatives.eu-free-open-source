> **[English]** A curated directory of 293+ free and open-source alternatives to proprietary software like Google, Microsoft, and Adobe — organized in 39 categories, fully searchable, self-hostable. Built for the DACH region but useful for everyone. → [Live Site](https://BEKO2210.github.io/european-alternatives.eu-free-open-source)

# 🛡️ FOSS Alternatives

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Content: CC BY-SA 4.0](https://img.shields.io/badge/Content-CC%20BY--SA%204.0-blue.svg)](https://creativecommons.org/licenses/by-sa/4.0/)
[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-ff5d01.svg)](https://astro.build)
[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-222.svg)](https://BEKO2210.github.io/european-alternatives.eu-free-open-source)

**Deine Freiheit. Dein Code. Deine Zukunft.**

> Eine kuratierte Sammlung von 293+ kostenlosen Open-Source-Alternativen zu proprietärer Software — organisiert in 39 Kategorien, vollständig durchsuchbar, und mit dem Fokus auf Datenschutz und digitale Souveränität. Neue Tools werden jeden Montag automatisch erkannt und hinzugefügt.

🌐 **Live:** [BEKO2210.github.io/european-alternatives.eu-free-open-source](https://BEKO2210.github.io/european-alternatives.eu-free-open-source)

---

## ✨ Features

- 📦 **293+ FOSS-Tools** in 39 Kategorien (wächst automatisch)
- 🤖 **Auto-Discovery** — neue Tools werden wöchentlich via GitHub API erkannt und hinzugefügt
- 🔍 **Volltextsuche** mit Pagefind (statisch, kein Server nötig)
- 🌙 **Dark/Light Mode** mit localStorage-Persistenz
- 🔄 **Vergleichsseite**: Proprietär → FOSS Alternativen
- 📱 **Responsive Design** (Mobile-First)
- ♿ **WCAG 2.1 AA** Accessibility
- 🚀 **Statische Seite** — schnell, sicher, kein Backend
- 📡 **RSS-Feed** für neue Tools
- 🔒 **Kein Tracking**, keine Cookies, keine externen CDNs
- 📜 **Lizenzübersicht** für alle gängigen OSS-Lizenzen

---

## 🛠 Tech Stack

| Technologie | Verwendung |
|---|---|
| [Astro 4.x](https://astro.build) | Static Site Generator |
| [Tailwind CSS 3.x](https://tailwindcss.com) | Styling |
| [TypeScript](https://www.typescriptlang.org) | Typisierung |
| [Pagefind](https://pagefind.app) | Statische Volltextsuche |
| [GitHub Pages](https://pages.github.com) | Hosting |
| [GitHub Actions](https://github.com/features/actions) | CI/CD |

---

## 🚀 Quick Start

```bash
# Repository klonen
git clone https://github.com/BEKO2210/european-alternatives.eu-free-open-source.git
cd european-alternatives.eu-free-open-source

# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Produktions-Build
npm run build

# Build-Vorschau
npm run preview
```

---

## 📦 Neues Tool hinzufügen

1. Erstelle oder ergänze eine Datei in `src/data/tools/`
2. Füge einen neuen Tool-Eintrag hinzu (nutze bestehende als Vorlage):

```typescript
{
  id: 'tool-slug',
  name: 'Tool Name',
  slug: 'tool-slug',
  tagline: 'Kurze Beschreibung (max 80 Zeichen)',
  description: 'Ausführliche Beschreibung in 2-3 Sätzen.',
  website: 'https://example.com',
  github: 'https://github.com/org/repo',
  license: 'MIT',
  categories: ['kategorie-slug'],
  replacesTools: ['Proprietäres Tool'],
  selfHostable: true,
  logoPlaceholderEmoji: '🔧',
  stars: 1000,
  lastUpdated: '2024-01-01',
  tags: ['tag1', 'tag2'],
  difficulty: 'einfach',
  platforms: ['linux', 'docker', 'web'],
  featured: false,
  addedDate: '2024-01-01',
}
```

3. Exportiere das Tool im `src/data/tools/index.ts`
4. Erstelle einen Pull Request

---

## 📂 Projektstruktur

```
src/
├── components/         # Astro-Komponenten
│   ├── layout/        # BaseLayout, Navigation, Footer
│   ├── ui/            # Badge, Button, Card, SearchModal
│   ├── tools/         # ToolCard, ToolGrid, ToolDetail, ToolFilters
│   └── categories/    # CategoryCard, CategoryGrid
├── data/              # Typdefinitionen und Daten
│   ├── types.ts       # Tool & Category Interfaces
│   ├── categories.ts  # Alle 39 Kategorien
│   └── tools/         # Tool-Dateien pro Kategorie + auto-tools.ts
├── pages/             # Astro-Seiten (File-based Routing)
├── styles/            # Global CSS + Animationen
└── utils/             # Hilfs-Funktionen

scripts/
├── discover_tools.py      # Auto-Discovery: GitHub API → Tool-Einträge
├── existing_slugs.json    # Bereits bekannte Slugs (Deduplizierung)
└── new_tools_count.txt    # Ergebnis des letzten Laufs

.github/workflows/
├── deploy.yml             # Astro Build → GitHub Pages
└── auto-discover.yml      # Wöchentliche Tool-Erkennung (Mo 06:00 UTC)
```

---

## 🤖 Automatische Tool-Erkennung

Das Projekt enthält ein vollautonomes System zur Erkennung neuer FOSS-Tools:

- **Wann:** Jeden Montag um 06:00 UTC (oder manuell via GitHub Actions)
- **Wie:** Python-Script durchsucht die GitHub API mit 10 verschiedenen Queries
- **Filter:** Mindestens 500 Sterne, nicht archiviert, keine Awesome-Lists/Tutorials
- **Kategorisierung:** Automatisch anhand von GitHub Topics, Name und Beschreibung
- **Sicherheit:** Build-Test vor dem Commit — bei Fehler automatischer Rollback
- **Deployment:** Nach erfolgreichem Push wird GitHub Pages automatisch neu gebaut

Manuell auslösen: GitHub Actions → "Auto-Discover FOSS Tools" → "Run workflow"

---

## 📜 Lizenz

- **Code:** [MIT License](LICENSE)
- **Inhalte:** [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)

---

## 🤝 Community & Mitmachen

[![GitHub Issues](https://img.shields.io/github/issues/BEKO2210/european-alternatives.eu-free-open-source)](https://github.com/BEKO2210/european-alternatives.eu-free-open-source/issues)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/BEKO2210/european-alternatives.eu-free-open-source/pulls)
[![Last Commit](https://img.shields.io/github/last-commit/BEKO2210/european-alternatives.eu-free-open-source)](https://github.com/BEKO2210/european-alternatives.eu-free-open-source/commits/main)

- Lies den [Contributing Guide](CONTRIBUTING.md) um zu erfahren, wie du mitmachen kannst
- Nutze die [Issue-Templates](https://github.com/BEKO2210/european-alternatives.eu-free-open-source/issues/new/choose) um Tools vorzuschlagen oder Fehler zu melden
- Pull Requests sind jederzeit willkommen!

---

Made with ❤️ for digital freedom
