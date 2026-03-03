# Changelog

Alle wesentlichen Änderungen an diesem Projekt werden in dieser Datei dokumentiert.

Das Format basiert auf [Keep a Changelog](https://keepachangelog.com/de/1.1.0/)
und dieses Projekt folgt [Semantic Versioning](https://semver.org/lang/de/).

## [1.3.1] - 2026-03-03

### Changed

- Homepage-Randomisierung shuffled jetzt aus **allen 350 Tools** und **allen 40 Kategorien** statt aus einem vorselektierten Pool (vorher: nur 18 Tools / 12 Kategorien als Kandidaten)
- Alle Items werden als HTML im DOM gerendert, Client-Side Fisher-Yates-Shuffle waehlt 6 zufaellige aus
- Seitengroesse: 1.4 MB roh, **118 KB gzipped** (akzeptabel)

### Fixed

- **Progressive Enhancement**: Erste 6 Tools und 6 Kategorien sind standardmaessig sichtbar (kein `display:none`), damit Nutzer ohne JavaScript keinen leeren Bereich sehen
- JS-Fallback: Bei deaktiviertem/blockiertem JavaScript werden die 6 Build-Zeit-Items angezeigt statt eines leeren Grids

---

## [1.3.0] - 2026-03-03

### Added

- Neue Kategorie **Fotoverwaltung** (`fotos`) — Google Photos, iCloud Photos, Amazon Photos Alternativen
- 6 neue Foto-Tools: Immich, PhotoPrism, Ente, LibrePhotos, Piwigo, Lychee (mit Icons)
- SimpleIcons-Mappings fuer Immich, Ente, Piwigo
- PNG-Logos fuer PhotoPrism, LibrePhotos, Lychee heruntergeladen
- 12 neue Such-Queries im Auto-Discovery-Workflow (32 total): Fotos, Browser, Git, Social Media, Video, Bild, Zeit, DNS, SSG, Karten, Suchmaschinen
- Fotos-Kategorie komplett in discover_tools.py registriert (Keywords, Emoji, Replaces)

### Changed

- Homepage: Statische Featured-Tools durch **6 zufaellige Tools** ersetzt (Client-Side JS, bei jedem Seitenbesuch neu)
- Homepage: Alle Kategorien durch **6 zufaellige Kategorien** ersetzt (symmetrisches Grid)
- MAX_PER_RUN von 25 auf 40 erhoeht (Workflow + Script)
- Gesamtstatistik: 350+ Tools in 40 Kategorien, 401 Seiten

---

## [1.2.0] - 2026-03-03

### Fixes

- MinIO als "restricted" markiert (Web-UI hinter Enterprise-Paywall seit Mai 2025)
- Redis, CockroachDB korrekt lizenz-bewertet und als restricted markiert

### Features

- Simple Icons Integration: echte SVG-Logos für 80+ Tools (inline, kein CDN)
- Maintenance Status Badges (active/maintained/slow/restricted/archived)
- Scroll-to-Top Button
- OG-Image für Social Media Sharing
- lastUpdated Warnung wenn Tool > 18 Monate nicht gepflegt
- Twitter Image Meta-Tag ergänzt

### Fixes

- README Zahlenangaben aktualisiert (342+ Tools)
- Meta-Tags / OG-Tags vervollständigt

---

## [1.1.0] - 2026-03-02

### Fixed

- 12 falsche GitHub-Links in browser.ts und email-clients.ts korrigiert (zeigten auf falschen User statt auf offizielle Repos wie mozilla-firefox/firefox, brave/brave-browser, GNOME/geary, etc.)
- MinIO als nicht-featured markiert und Hinweis auf Dual-Licensing-Modell (AGPL-3.0/kommerziell) ergänzt

### Added

- Auto-Discovery: 10 zusätzliche Suchqueries für unterrepräsentierte Kategorien (KI-Agenten, Notizen, Projektmanagement, Video/Audio, Bildbearbeitung, Backup, Medienserver, ERP, Wiki, Kalender)
- Auto-Discovery: Neue Keyword-Mappings für KI-Assistenten (ai-agent, ai-assistant, chatbot, autonomous-agent, local-ai, ollama)
- Auto-Discovery: logoUrl-Support — GitHub-Avatar des Repository-Owners wird als Tool-Logo verwendet
- ToolCard und ToolDetail: Fallback-Kette für Logos (lokales PNG → GitHub-Avatar → Buchstaben-Fallback)

---

## [1.0.0] - 2026-03-01

### Added

- 293 FOSS-Tools (237 manuell kuratiert + 56 automatisch entdeckt) in 39 Kategorien
- 27 verschiedene Open-Source-Lizenzen dokumentiert
- Volltextsuche mit Pagefind (statisch, kein Server nötig)
- Dark/Light Mode mit localStorage-Persistenz
- Vergleichsseite: Proprietär → FOSS Alternativen
- Responsive Design (Mobile-First)
- WCAG 2.1 AA Accessibility
- RSS-Feed für neue Tools
- Lizenzübersicht mit Erklärungen
- Automatische Tool-Erkennung via GitHub API (wöchentlich, Mo 06:00 UTC)
- GitHub Actions CI/CD Pipeline (Build + Deploy auf GitHub Pages)
- Issue-Templates für Tool-Vorschläge und Fehlermeldungen
- Contributing Guide (Deutsch/Englisch)
- Pull Request Template mit Checkliste
