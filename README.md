<p align="center">
  <img src="https://raw.githubusercontent.com/BEKO2210/european-alternatives.eu-free-open-source/main/public/icon.png" alt="European Alternatives Icon" width="180">
</p>

# FOSS Alternatives

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Content: CC BY-SA 4.0](https://img.shields.io/badge/Content-CC%20BY--SA%204.0-blue.svg)](https://creativecommons.org/licenses/by-sa/4.0/)
[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-ff5d01.svg)](https://astro.build)
[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-222.svg)](https://BEKO2210.github.io/european-alternatives.eu-free-open-source)

**Deine Freiheit. Dein Code. Deine Zukunft.**

> Eine kuratierte Sammlung von 500+ echten Open-Source-Alternativen zu proprietärer Software — organisiert in 40 Kategorien, vollständig durchsuchbar, zweisprachig (DE/EN), und mit dem Fokus auf Datenschutz und digitale Souveränität. **Strikt FOSS**: keine SSPL, BSL, „source-available" oder proprietären Einträge. Neue Tools werden jeden Montag automatisch via GitHub-API erkannt, gegen eine OSI/FSF-Lizenz-Allowlist gefiltert und hinzugefügt.

🌐 **Live:** [BEKO2210.github.io/european-alternatives.eu-free-open-source](https://BEKO2210.github.io/european-alternatives.eu-free-open-source)

---

## ✨ Features

- 📦 **500+ FOSS-Tools** in 40 Kategorien (wächst automatisch)
- 🛡️ **Strikt FOSS-kuratiert** — Auto-Discovery filtert gegen eine OSI/FSF-Lizenz-Allowlist; non-FOSS Re-Lizenzierungen (SSPL, BSL, VPL, „source-available") sind über eine Blocklist dauerhaft ausgeschlossen, inklusive der bekannten Beispiele MongoDB, Redis (→ Valkey), CockroachDB, HashiCorp Stack, Sentry, Elastic, Outline und Vtiger
- 🤖 **Auto-Discovery** — neue Tools werden wöchentlich via GitHub API erkannt, kategorisiert und committed; bei Build-Fehler automatischer Rollback
- 🖼️ **Hero-Section** mit dedizierten Bildern für Desktop (16:9) & Mobil (9:16), automatisch beschnitten via `object-fit: cover`, theme-aware (hell/dunkel) — gesteuert über CSS-Variablen, robust gegen aggressive CSS-Minifier-Optimierungen
- 🃏 **Polierte Karten** im Vercel-/Raycast-Stil — engere Hierarchie, dezente Hover-States, kein „red glow"
- 📋 **Kompakte Listen-Ansicht** auf `/tools/` (Toggle Karten ⇄ Liste, Persistenz in localStorage) — ~5× mehr Einträge pro Screen, alternativeto.net-Stil
- 🪄 **Sticky Pill-Filter-Bar** (DevHunt-Stil) mit Glass-Background bei Scroll, Live-Filter, aktivem Filter-Counter und „Alle Filter zurücksetzen"
- 🎲 **Dynamische Startseite** — 6 zufällige Tools und 6 zufällige Kategorien bei jedem Besuch (Progressive Enhancement, funktioniert auch ohne JS)
- 🔍 **Volltextsuche** mit Pagefind (statisch, kein Server nötig)
- 🖼️ **Tool-Vorschau-Screenshots** mit automatischem Retry gegen mshots-Placeholder + sichtbarem Lade-Zustand
- 🌙 **Dark/Light Mode** mit localStorage-Persistenz, kein Flash beim Laden
- 🌍 **Mehrsprachig** — Deutsch und Englisch mit Sprachumschalter (DE/EN Toggle), 806 Seiten in beiden Sprachen
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
│   ├── ui/            # Badge, Button, Card, SearchModal, LanguageToggle
│   ├── tools/         # ToolCard, ToolGrid, ToolDetail, ToolFilters
│   └── categories/    # CategoryCard, CategoryGrid
├── data/              # Typdefinitionen und Daten
│   ├── types.ts       # Tool & Category Interfaces
│   ├── categories.ts  # Alle 40 Kategorien
│   └── tools/         # Tool-Dateien pro Kategorie + auto-tools.ts
├── i18n/              # Internationalisierung (DE/EN)
│   ├── ui.ts          # 266 übersetzte UI-Strings
│   └── utils.ts       # Sprach-Erkennung und Pfad-Übersetzung
├── pages/             # Astro-Seiten (File-based Routing)
│   └── en/            # Englische Seiten (13 Vorlagen)
├── styles/            # Global CSS + Animationen
└── utils/             # Hilfs-Funktionen

public/
├── hero/                     # Hero-Hintergrundbilder
│   ├── desktop-dark.png      #   Desktop 16:9, Dark-Theme
│   ├── desktop-light.png     #   Desktop 16:9, Light-Theme
│   ├── mobile-dark.png       #   Mobil 9:16, Dark-Theme
│   └── mobile-light.png      #   Mobil 9:16, Light-Theme
├── logos/                    # Tool-Logos
└── icon.png, og-image.*      # Branding

scripts/
├── discover_tools.py         # Auto-Discovery + OSI/FSF-Lizenz-Allowlist
├── existing_slugs.json       # Bereits bekannte + dauerhaft blockierte Slugs
└── new_tools_count.txt       # Ergebnis des letzten Laufs

.github/workflows/
├── deploy.yml             # Astro Build → GitHub Pages
└── auto-discover.yml      # Wöchentliche Tool-Erkennung (Mo 06:00 UTC)
```

---

## 🤖 Automatische Tool-Erkennung

Das Projekt enthält ein vollautonomes System zur Erkennung neuer FOSS-Tools:

- **Wann:** Jeden Montag um 06:00 UTC (oder manuell via GitHub Actions)
- **Wie:** Python-Script durchsucht die GitHub API mit ~60 verschiedenen Queries (Mainstream + Long-Tail-Nischen wie E2E-Crypto, P2P/Federated, Smart Home, Personal Finance, Learning/A11y, Whiteboards, Booking, Recipes, …)
- **Star-Schwelle:** Standard 200 (war früher 500), durch ENV-Variable `MIN_STARS` änderbar
- **Pflicht-Eigenschaften pro Tool:** Beschreibung ≥ 15 Zeichen UND Owner-Avatar (Logo) — sonst wird der Eintrag verworfen, damit kein leerer Karten-Stub im Katalog landet
- **Lizenz-Gate:** Nur Repos mit einer Lizenz aus der OSI/FSF-Allowlist (MIT, Apache-2.0, GPL-2.0/3.0, AGPL-3.0, LGPL, MPL-2.0, BSD-2/3, ISC, EUPL, Unlicense, Public Domain, …) werden aufgenommen. „Unknown"/`NOASSERTION`, SSPL, BSL-1.1, VPL, Custom-Lizenzen werden grundsätzlich abgelehnt — kein stilles Umetikettieren als MIT mehr.
- **Slug-Blocklist:** Bekannte Re-Lizenzierungen (Redis SSPL, MongoDB SSPL, CockroachDB BSL, Sentry BSL, Elastic SSPL, kompletter HashiCorp-BSL-Stack, Outline BSL, Vtiger VPL …) sind dauerhaft ausgeschlossen, auch wenn die GitHub-API sie liefert.
- **Kategorisierung:** Automatisch anhand von GitHub Topics, Name und Beschreibung
- **Sicherheit:** Build-Test vor dem Commit — bei Fehler automatischer Rollback
- **Deployment:** Nach erfolgreichem Push wird GitHub Pages automatisch neu gebaut

### Manuell auslösen (Standard- oder Bulk-Run)

GitHub Actions → "Auto-Discover FOSS Tools" → "Run workflow". Im Dialog
können Parameter überschrieben werden:

- `min_stars` (Default `200`) — runter z. B. auf `100` für mehr Kandidaten
- `max_per_run` (Default `150`) — rauf z. B. auf `500` für einen
  einmaligen Bulk-Lauf Richtung 1000+ Einträge
- `dry_run` (`true`/`false`) — Testlauf ohne Commit/Push

Beispiel für einen einmaligen Bulk-Run zur Katalog-Vergrößerung:
`min_stars=100`, `max_per_run=500`, `dry_run=false`. Die License-
Allowlist und der Beschreibung+Logo-Filter bleiben dabei aktiv, sodass
kein non-FOSS-Eintrag und keine leeren Karten reinkommen.

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
## Star History

[![Star History Chart](https://api.star-history.com/image?repos=BEKO2210/european-alternatives.eu-free-open-source&type=date&legend=top-left)](https://www.star-history.com/?repos=BEKO2210%2Feuropean-alternatives.eu-free-open-source&type=date&legend=top-left)

Made with ❤️ for digital freedom


> **[English]** A curated directory of 500+ genuinely free and open-source alternatives to proprietary software like Google, Microsoft, and Adobe — organized in 40 categories, fully searchable, self-hostable, available in German and English. Built for the DACH region but useful for everyone. Strictly FOSS: no SSPL, BSL, "source-available" or proprietary entries — the auto-discovery script enforces an OSI/FSF-approved license allowlist. → [Live Site](https://BEKO2210.github.io/european-alternatives.eu-free-open-source)
