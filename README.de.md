<p align="center">
  <a href="https://beko2210.github.io/european-alternatives.eu-free-open-source/">
    <img src="public/icon.png" alt="Logo von FOSS Alternatives" width="128" height="128">
  </a>
</p>

<h1 align="center">FOSS Alternatives</h1>

<p align="center">
  Ein kuratiertes, zweisprachiges Verzeichnis wirklich freier und quelloffener
  Alternativen zu proprietärer Software.
</p>

<p align="center">
  <a href="https://github.com/BEKO2210/european-alternatives.eu-free-open-source/actions/workflows/deploy.yml"><img alt="Deployment-Status" src="https://github.com/BEKO2210/european-alternatives.eu-free-open-source/actions/workflows/deploy.yml/badge.svg"></a>
  <a href="https://astro.build/"><img alt="Astro 7" src="https://img.shields.io/badge/Astro-7-BC52EE?logo=astro&logoColor=white"></a>
  <a href="https://tailwindcss.com/"><img alt="Tailwind CSS 4" src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white"></a>
  <a href="https://opensource.org/license/mit"><img alt="Code-Lizenz: MIT" src="https://img.shields.io/badge/code-MIT-green"></a>
  <a href="https://creativecommons.org/licenses/by-sa/4.0/"><img alt="Inhaltslizenz: CC BY-SA 4.0" src="https://img.shields.io/badge/content-CC_BY--SA_4.0-blue"></a>
</p>

<p align="center">
  <a href="https://beko2210.github.io/european-alternatives.eu-free-open-source/"><strong>Zum Verzeichnis</strong></a>
  ·
  <a href="README.md">English</a>
  ·
  <a href="CONTRIBUTING.md">Mitwirken</a>
</p>

FOSS Alternatives hilft dabei, transparente und datenschutzfreundliche Software
zu finden, die sich prüfen, verändern und häufig selbst hosten lässt. Der Katalog
umfasst mehr als 600 Tools in 40 Kategorien und ist auf Deutsch und Englisch
verfügbar. Einträge müssen eine anerkannte freie oder Open-Source-Lizenz
verwenden; Source-available-Lizenzen wie BSL und SSPL sind ausgeschlossen.

## Funktionen

- Mehr als 600 kuratierte FOSS-Tools mit eigenen Detailseiten
- 40 Kategorien für Alltagsanwendungen, Infrastruktur, Kreativwerkzeuge und Entwicklung
- Deutsche und englische Routen mit dauerhaft verfügbarem Sprachumschalter
- Statische Volltextsuche mit Pagefind
- Karten- und kompakte Listenansicht mit Filtern und Sortierung
- Vergleich proprietärer Software mit FOSS sowie Anleitungen zum Selbsthosten
- Helles und dunkles Design ohne Tracking durch Dritte oder Cookies
- Responsive, barrierearme und vollständig statische Ausgabe auf GitHub Pages
- Wöchentliche, lizenzgeprüfte Erkennung neuer Projekte über die GitHub API
- RSS-Feed und Sitemap

## Technologie

| Komponente | Zweck |
| --- | --- |
| [Astro 7](https://astro.build/) | Statische Website-Generierung |
| [Tailwind CSS 4](https://tailwindcss.com/) | Gestaltung |
| [TypeScript](https://www.typescriptlang.org/) | Typisierte Anwendungs- und Katalogdaten |
| [Pagefind](https://pagefind.app/) | Statische Volltextsuche |
| [GitHub Actions](https://github.com/features/actions) | Prüfung, Erkennung und Deployment |
| [GitHub Pages](https://pages.github.com/) | Hosting |

## Erste Schritte

Voraussetzungen:

- Node.js 22.13 oder neuer
- npm 10 oder neuer

```bash
git clone https://github.com/BEKO2210/european-alternatives.eu-free-open-source.git
cd european-alternatives.eu-free-open-source
npm ci
npm run dev
```

Der Entwicklungsserver gibt die lokale URL aus. Ein Produktions-Build lässt
sich so erstellen und prüfen:

```bash
npm run check
npm run lint
npm run build
npm run preview
```

## Projektstruktur

```text
src/
├── components/       Wiederverwendbare Astro-Komponenten
├── data/             Kategorien, Tool-Einträge und gemeinsame Typen
├── i18n/             Deutsche und englische UI-Texte und Routing-Helfer
├── layouts/          Gemeinsame Seitenlayouts und Metadaten
├── pages/            Dateibasierte deutsche und englische Routen
├── styles/           Globale Tailwind- und Website-Styles
└── utils/            Gemeinsam verwendete Hilfsfunktionen
public/               Statische Bilder, Icons und generierte Assets
scripts/              Skripte für Katalogerkennung und Wartung
.github/workflows/     CI, Deployment und geplante Wartung
```

## Mitwirken

Beiträge auf Deutsch oder Englisch sind willkommen. Du kannst:

- [ein FOSS-Tool vorschlagen](https://github.com/BEKO2210/european-alternatives.eu-free-open-source/issues/new?template=tool-vorschlag.yml),
- [falsche oder veraltete Angaben melden](https://github.com/BEKO2210/european-alternatives.eu-free-open-source/issues/new?template=fehler-melden.yml) oder
- einen Pull Request für Katalog-, Dokumentations-, Barrierefreiheits- oder Codeverbesserungen einreichen.

Lies vor einem Pull Request [CONTRIBUTING.md](CONTRIBUTING.md), beschränke die
Änderung auf ein klar umrissenes Thema und prüfe sie lokal:

```bash
npm ci
npm run check
npm run lint
npm run build
```

Neue Katalogeinträge gehören in die passende Datei unter `src/data/tools/`.
Nutze einen bestehenden Eintrag als Vorlage, verfasse deutsche und englische
Texte, verwende eine gültige SPDX-Lizenzkennung und trage den Slug in
`scripts/existing_slugs.json` ein, um automatisch erzeugte Duplikate zu verhindern.

## Automatisierte Erkennung

Der wöchentliche Workflow `Auto-Discover FOSS Tools` durchsucht öffentliche
GitHub-Repositorys, prüft Kandidaten anhand der Lizenz-Allowlist des Projekts,
lehnt bekannte Source-available-Projekte ab, kategorisiert akzeptierte Tools und
führt vor dem Commit der generierten Daten einen Produktions-Build aus.
Maintainer können den Workflow mit konfigurierbaren Mindest-Sternen und
Ergebnislimits auch manuell starten.

Die Automatisierung beschleunigt die Erkennung, lockert aber nicht die
FOSS-only-Richtlinie des Projekts. Korrekturen und Meldungen falsch eingeordneter
Projekte sind jederzeit willkommen.

## Lizenzierung

- Der Anwendungscode steht unter der MIT-Lizenz.
- Katalogtexte und andere redaktionelle Inhalte stehen unter
  [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

Die [Lizenzübersicht](https://beko2210.github.io/european-alternatives.eu-free-open-source/lizenzuebersicht/)
der Website erklärt die in den Katalogeinträgen verwendeten Lizenzen verständlich.

---

Erstellt für digitale Freiheit, Datenschutz und freie Softwarewahl.
