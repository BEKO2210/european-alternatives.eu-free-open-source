# FOSS Alternatives 2.0.0

![FOSS Alternatives 2.0 cover](https://raw.githubusercontent.com/BEKO2210/european-alternatives.eu-free-open-source/v2.0.0/public/og-image.png)

**Released: 2026-08-11**

FOSS Alternatives 2.0 is the accumulated major product and platform milestone since v1.0.0. It is not a breaking public API migration.

## English

### Highlights

- Explore 600+ FOSS tools in 40 categories across 1,326 generated German and English pages.
- Use complete bilingual routes and translations, card or list views, responsive filtering, Pagefind search, proprietary-to-FOSS comparisons, and practical self-hosting guidance.
- Enjoy a refreshed dark/light red design with responsive navigation.
- Rely on stricter catalogue quality: automated discovery accepts recognized FOSS licenses, and duplicate data such as the BorgBackup entry has been cleaned up.

### Quality & accessibility

- Improved WCAG contrast, keyboard focus behavior, labels, search-dialog controls, 24 px footer link targets, and reduced-motion support.
- Added intrinsic image dimensions, stable shared logos, and bounded preview retries for faster, more predictable layouts.
- Improved discoverability with structured data, a noindex 404 page, better sitemap and language metadata, and more focused Pagefind indexing.

### Platform & operations

- Upgraded to Astro 7, Tailwind CSS 4, and TypeScript-backed Astro checks.
- Restored npm 10 lockfile compatibility and aligned automation with Node.js 22.
- Serialized GitHub Pages deployments and disabled production deployments for pull requests.

### Upgrade/developer notes

Use **Node.js 22.13+** and **npm 10+**. For a clean local verification:

```sh
npm ci
npm run check
npm run lint
npm run build
```

No public API migration is required. Contributors should refresh dependencies with `npm ci` and resolve any Astro, TypeScript, or lint findings before submitting changes.

### Project links

- [Live directory](https://beko2210.github.io/european-alternatives.eu-free-open-source/)
- [Source repository](https://github.com/BEKO2210/european-alternatives.eu-free-open-source)
- [Contributing guide](https://github.com/BEKO2210/european-alternatives.eu-free-open-source/blob/v2.0.0/CONTRIBUTING.md)
- [Changelog](https://github.com/BEKO2210/european-alternatives.eu-free-open-source/blob/v2.0.0/CHANGELOG.md)

### Attribution & licensing

Application code is licensed under the [MIT License](https://github.com/BEKO2210/european-alternatives.eu-free-open-source/blob/v2.0.0/LICENSE). Catalogue content and documentation are licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Product names, trademarks, and logos remain the property of their respective owners.

---

## Deutsch

FOSS Alternatives 2.0 ist der über v1.0.0 hinaus gewachsene große Produkt- und Plattformmeilenstein. Es handelt sich nicht um eine inkompatible Migration einer öffentlichen API.

### Highlights

- Entdecke mehr als 600 FOSS-Tools in 40 Kategorien auf 1.326 generierten deutschen und englischen Seiten.
- Nutze vollständig zweisprachige Routen und Übersetzungen, Karten- oder Listenansicht, responsive Filter, Pagefind-Suche, Vergleiche proprietärer Angebote mit FOSS und praxisnahe Self-Hosting-Hilfen.
- Erlebe ein überarbeitetes rot akzentuiertes Design im Dark/Light-Modus mit responsiver Navigation.
- Verlasse dich auf höhere Katalogqualität: Die automatische Erkennung akzeptiert anerkannte FOSS-Lizenzen; doppelte Daten wie der BorgBackup-Eintrag wurden bereinigt.

### Qualität & Barrierefreiheit

- Verbesserte WCAG-Kontraste, Tastaturfokus, Beschriftungen, Suchdialog-Steuerung, 24-Pixel-Zielflächen für Footer-Links und Unterstützung für reduzierte Bewegung.
- Intrinsische Bildabmessungen, stabile gemeinsame Logos und begrenzte Wiederholungsversuche für Vorschauen sorgen für schnellere, berechenbarere Layouts.
- Strukturierte Daten, eine von der Indexierung ausgeschlossene 404-Seite sowie verbesserte Sitemap-, Sprach- und Pagefind-Daten erhöhen die Auffindbarkeit.

### Plattform & Betrieb

- Aktualisiert auf Astro 7, Tailwind CSS 4 und TypeScript-gestützte Astro-Prüfungen.
- Kompatibilität der Sperrdatei mit npm 10 wiederhergestellt und Automatisierung auf Node.js 22 abgestimmt.
- GitHub-Pages-Deployments werden serialisiert; Pull Requests lösen keine Produktionsbereitstellung aus.

### Hinweise für Upgrade und Entwicklung

Erforderlich sind **Node.js 22.13+** und **npm 10+**. Eine saubere lokale Prüfung erfolgt mit:

```sh
npm ci
npm run check
npm run lint
npm run build
```

Eine Migration einer öffentlichen API ist nicht erforderlich. Mitwirkende sollten Abhängigkeiten über `npm ci` installieren und Astro-, TypeScript- oder Lint-Befunde vor dem Einreichen beheben.

### Projektlinks

- [Live-Verzeichnis](https://beko2210.github.io/european-alternatives.eu-free-open-source/)
- [Quellcode-Repository](https://github.com/BEKO2210/european-alternatives.eu-free-open-source)
- [Mitwirkungsleitfaden](https://github.com/BEKO2210/european-alternatives.eu-free-open-source/blob/v2.0.0/CONTRIBUTING.md)
- [Changelog](https://github.com/BEKO2210/european-alternatives.eu-free-open-source/blob/v2.0.0/CHANGELOG.md)

### Namensnennung & Lizenzierung

Der Anwendungscode steht unter der [MIT-Lizenz](https://github.com/BEKO2210/european-alternatives.eu-free-open-source/blob/v2.0.0/LICENSE). Kataloginhalte und Dokumentation stehen unter [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Produktnamen, Marken und Logos bleiben Eigentum ihrer jeweiligen Rechteinhaber.
