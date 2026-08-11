<p align="center">
  <a href="https://beko2210.github.io/european-alternatives.eu-free-open-source/">
    <img src="public/icon.png" alt="FOSS Alternatives logo" width="128" height="128">
  </a>
</p>

<h1 align="center">FOSS Alternatives</h1>

<p align="center">
  A curated, bilingual directory of genuinely free and open-source alternatives
  to proprietary software.
</p>

<p align="center">
  <a href="https://github.com/BEKO2210/european-alternatives.eu-free-open-source/actions/workflows/deploy.yml"><img alt="Deploy status" src="https://github.com/BEKO2210/european-alternatives.eu-free-open-source/actions/workflows/deploy.yml/badge.svg"></a>
  <a href="https://astro.build/"><img alt="Astro 7" src="https://img.shields.io/badge/Astro-7-BC52EE?logo=astro&logoColor=white"></a>
  <a href="https://tailwindcss.com/"><img alt="Tailwind CSS 4" src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white"></a>
  <a href="https://opensource.org/license/mit"><img alt="Code license: MIT" src="https://img.shields.io/badge/code-MIT-green"></a>
  <a href="https://creativecommons.org/licenses/by-sa/4.0/"><img alt="Content license: CC BY-SA 4.0" src="https://img.shields.io/badge/content-CC_BY--SA_4.0-blue"></a>
</p>

<p align="center">
  <a href="https://beko2210.github.io/european-alternatives.eu-free-open-source/"><strong>Visit the live directory</strong></a>
  ·
  <a href="README.de.md">Deutsch</a>
  ·
  <a href="CONTRIBUTING.md">Contributing</a>
</p>

FOSS Alternatives helps people find transparent, privacy-respecting software
they can inspect, modify, and often self-host. The catalogue contains more than
600 tools across 40 categories and is available in German and English. Entries
must use a recognized free-software or open-source license; source-available
licenses such as BSL and SSPL are excluded.

## Features

- More than 600 curated FOSS tools with dedicated detail pages
- 40 categories spanning everyday apps, infrastructure, creative tools, and development
- German and English routes with a persistent language switcher
- Static full-text search powered by Pagefind
- Card and compact list views with filters and sorting
- Proprietary-to-FOSS comparison and self-hosting guides
- Dark and light themes without third-party tracking or cookies
- Responsive, accessible, fully static output deployed to GitHub Pages
- Weekly license-gated discovery of new projects through the GitHub API
- RSS feed and sitemap generation

## Technology

| Component | Purpose |
| --- | --- |
| [Astro 7](https://astro.build/) | Static site generation |
| [Tailwind CSS 4](https://tailwindcss.com/) | Styling |
| [TypeScript](https://www.typescriptlang.org/) | Typed application and catalogue data |
| [Pagefind](https://pagefind.app/) | Static full-text search |
| [GitHub Actions](https://github.com/features/actions) | Validation, discovery, and deployment |
| [GitHub Pages](https://pages.github.com/) | Hosting |

## Getting started

Requirements:

- Node.js 22.13 or newer
- npm 10 or newer

```bash
git clone https://github.com/BEKO2210/european-alternatives.eu-free-open-source.git
cd european-alternatives.eu-free-open-source
npm ci
npm run dev
```

The development server prints the local URL. To create and inspect a production
build:

```bash
npm run check
npm run lint
npm run build
npm run preview
```

## Project structure

```text
src/
├── components/       Reusable Astro components
├── data/             Categories, tool records, and shared types
├── i18n/             German and English UI strings and route helpers
├── layouts/          Shared page layouts and metadata
├── pages/            File-based German and English routes
├── styles/           Global Tailwind and site styles
└── utils/            Shared utilities
public/               Static images, icons, and generated assets
scripts/              Catalogue discovery and maintenance scripts
.github/workflows/     CI, deployment, and scheduled maintenance
```

## Contributing

Contributions in English or German are welcome. You can:

- [suggest a FOSS tool](https://github.com/BEKO2210/european-alternatives.eu-free-open-source/issues/new?template=tool-vorschlag.yml),
- [report incorrect or outdated information](https://github.com/BEKO2210/european-alternatives.eu-free-open-source/issues/new?template=fehler-melden.yml), or
- submit a pull request for catalogue, documentation, accessibility, or code improvements.

Before opening a pull request, read [CONTRIBUTING.md](CONTRIBUTING.md), keep the
change focused, and verify it locally:

```bash
npm ci
npm run check
npm run lint
npm run build
```

New catalogue entries belong in the appropriate file under `src/data/tools/`.
Use an existing record as a template, provide German and English copy, use a
valid SPDX license identifier, and register the slug in
`scripts/existing_slugs.json` to prevent automated duplicates.

## Automated discovery

The weekly `Auto-Discover FOSS Tools` workflow searches public GitHub
repositories, validates candidates against the project's license allowlist,
rejects known source-available projects, categorizes accepted tools, and runs a
production build before committing generated data. Maintainers can also run the
workflow manually with configurable star and result limits.

Automation accelerates discovery; it does not relax the project's FOSS-only
policy. Corrections and false-positive reports are always welcome.

## Licensing

- Application code is provided under the MIT License.
- Catalogue text and other editorial content are provided under
  [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

See the site's [license overview](https://beko2210.github.io/european-alternatives.eu-free-open-source/lizenzuebersicht/)
for plain-language information about licenses used by catalogue entries.

---

Built for digital freedom, privacy, and software choice.
