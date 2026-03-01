# CLAUDE CODE — Projektdokumentation

Repository: https://github.com/BEKO2210/european-alternatives.eu-free-open-source

---

## Status

Das Auto-Discovery-System ist **implementiert und läuft autonom**.
Jeden Montag um 06:00 UTC werden neue FOSS-Tools automatisch erkannt, kategorisiert,
in die Webseite eingefügt, gebaut und deployed — ohne manuellen Eingriff.

**Aktueller Stand:** 287 Tools (237 manuell kuratiert + 50 automatisch entdeckt) in 39 Kategorien.

---

## Architektur

### Manuelle Tool-Daten
```
src/data/types.ts              # Tool & Category Interfaces
src/data/categories.ts         # 39 Kategorien mit Slugs
src/data/tools/*.ts            # 39 Dateien, je eine pro Kategorie (237 Tools)
src/data/tools/index.ts        # Aggregiert alle Tools inkl. auto-tools
```

### Auto-Discovery-System
```
scripts/discover_tools.py      # Python-Script: GitHub API → Tool-Einträge
scripts/existing_slugs.json    # Bereits bekannte Slugs (Deduplizierung)
scripts/new_tools_count.txt    # Ergebnis des letzten Laufs
src/data/tools/auto-tools.ts   # Automatisch generierte Tool-Einträge (akkumulierend)
```

### CI/CD Workflows
```
.github/workflows/deploy.yml          # Astro Build → GitHub Pages
.github/workflows/auto-discover.yml   # Wöchentliche Tool-Erkennung
```

### Datenfluss
```
GitHub API Search
    ↓
discover_tools.py (Filter, Kategorisierung, Deduplizierung)
    ↓
auto-tools.ts (neue Einträge angehängt)
    ↓
index.ts (importiert autoDiscoveredTools via Spread)
    ↓
npm run build (Astro SSG + Pagefind)
    ↓
deploy.yml (GitHub Pages via workflow_dispatch)
```

---

## Deployment-Pipeline

### Normaler Push → Deploy
- Push auf `main` → `deploy.yml` triggert automatisch
- Baut Astro-Seite + Pagefind-Index
- Deployed auf GitHub Pages

### Auto-Discovery → Deploy
- `auto-discover.yml` läuft wöchentlich (Mo 06:00 UTC) oder manuell
- Findet neue Tools via GitHub API (10 Search-Queries)
- Schreibt nach `auto-tools.ts`, committed und pusht
- **Wichtig:** GitHub's `GITHUB_TOKEN` löst keine weiteren Workflows aus.
  Daher triggert der Workflow `deploy.yml` explizit per API-Call (`workflow_dispatch`)
- Bei Build-Fehler: automatischer Rollback auf vorherigen Stand

---

## Konfiguration

### Env-Variablen (Auto-Discovery)
| Variable | Default | Beschreibung |
|---|---|---|
| `GITHUB_TOKEN` | Secret | GitHub API Authentifizierung |
| `MIN_STARS` | `500` | Mindestanzahl GitHub-Sterne |
| `MAX_PER_RUN` | `25` | Maximale neue Tools pro Lauf |
| `DRY_RUN` | `false` | Testlauf ohne Commit/Push |
| `REPO_ROOT` | `.` | Projekt-Wurzelverzeichnis |

### Manueller Trigger
Der Auto-Discovery-Workflow kann jederzeit über GitHub Actions → "Auto-Discover FOSS Tools" → "Run workflow" manuell ausgelöst werden. Parameter (`min_stars`, `max_per_run`, `dry_run`) sind dort konfigurierbar.

---

## Kategorien

Ausschließlich die 39 Slugs aus `src/data/categories.ts` verwenden:

`betriebssysteme`, `buerosoftware`, `browser`, `email-clients`, `email-server`,
`cloud-speicher`, `passwort-manager`, `kommunikation`, `videokonferenzen`, `kalender`,
`suchmaschinen`, `social-media`, `code-hosting`, `ci-cd`, `container`, `datenbanken`,
`cms`, `e-commerce`, `analytics`, `monitoring`, `vpn`, `firewall`, `ki-ml`, `notizen`,
`projektmanagement`, `video-audio`, `bildbearbeitung`, `zeiterfassung`, `erp`, `crm`,
`wiki`, `backup`, `dns-adblock`, `objekt-speicher`, `medienserver`, `dev-tools`,
`backend-frameworks`, `ssg`, `karten`

Keine neuen Kategorien erfinden.

---

## Verbote

- Keine CSS-Änderungen
- Keine Layout-Änderungen
- Keine Änderungen an bestehenden Komponenten
- Kein Refactoring bestehender Dateien
- Das Projekt bleibt optisch **exakt gleich**

---

## Wartung

### Neues manuelles Tool hinzufügen
1. Passende Datei in `src/data/tools/` öffnen
2. Tool-Objekt hinzufügen (muss `Tool` Interface aus `types.ts` entsprechen)
3. Slug zu `scripts/existing_slugs.json` hinzufügen (verhindert Auto-Discovery-Duplikat)

### Auto-Discovery debuggen
1. Workflow-Logs prüfen: GitHub Actions → "Auto-Discover FOSS Tools"
2. Lokal testen: `python scripts/discover_tools.py` (braucht `GITHUB_TOKEN` Env-Variable)
3. `scripts/new_tools_count.txt` zeigt Ergebnis des letzten Laufs
4. Dry-Run über UI: `dry_run: true` — findet Tools, committed aber nicht

### Build lokal testen
```bash
npm ci
npm run build
```
Muss fehlerfrei durchlaufen. 337+ Seiten werden generiert (Tools + Kategorien + statische Seiten).
