# Changelog

Alle wesentlichen Änderungen an diesem Projekt werden in dieser Datei dokumentiert.

Das Format basiert auf [Keep a Changelog](https://keepachangelog.com/de/1.1.0/)
und dieses Projekt folgt [Semantic Versioning](https://semver.org/lang/de/).

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
