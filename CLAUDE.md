# 🤖 CLAUDE CODE — AUFGABE

Repository: https://github.com/BEKO2210/european-alternatives.eu-free-open-source

---

## 🔍 PHASE 1 — ANALYSE (PFLICHT, BEVOR DU IRGENDETWAS TUST)

Lese und analysiere das gesamte Repository vollständig:

1. Lese `src/data/types.ts` → verstehe das `Tool` Interface exakt
2. Lese `src/data/categories.ts` → merke dir alle category-slugs
3. Lese `src/data/tools/index.ts` → verstehe wie Tools aggregiert werden
4. Lese mindestens 2 bestehende Tool-Dateien aus `src/data/tools/` → verstehe das exakte Format
5. Lese `astro.config.mjs` → verstehe das Build-System
6. Lese `package.json` → verstehe die Build-Befehle

Erst wenn du alles gelesen hast, fahre fort.

---

## 🎯 DEINE AUFGABE

Baue ein vollautomatisches System das:

1. **Jeden Montag um 06:00 UTC** die GitHub API abfragt
2. Neue hochwertige FOSS-Tools findet und **automatisch kategorisiert**
3. Die Tools **direkt in die Webseite einfügt** — kein PR, kein manueller Schritt
4. Einen **Build-Test** durchführt und bei Fehler automatisch zurückrollt
5. Die Änderungen **direkt zu main committet und pusht**

---

## 📂 DATEIEN DIE DU ERSTELLST

Erstelle exakt diese Dateien:

```
scripts/discover_tools.py
scripts/existing_slugs.json        ← initial: []
.github/workflows/auto-discover.yml
```

Die generierten Tool-Daten kommen in:
```
src/data/tools/auto-tools.ts       ← automatisch erstellt/akkumulierend aktualisiert
```

---

## 🚫 NICHT ERLAUBT

- Keine CSS-Änderungen
- Keine Layout-Änderungen
- Keine Änderungen an bestehenden Komponenten
- Kein Refactoring bestehender Dateien
- Das Projekt bleibt optisch **exakt gleich**

---

## 📋 ANFORDERUNGEN AN `discover_tools.py`

### GitHub API Suche
Verwende mindestens diese 10 Search-Queries:
```
self-hosted open-source alternative stars:>500
open-source privacy self-hosted stars:>500
open-source devops infrastructure stars:>1000
open-source monitoring observability stars:>1000
open-source security privacy tool stars:>500
open-source identity authentication sso stars:>500
self-hosted communication messaging stars:>500
open-source cms headless stars:>500
open-source AI LLM self-hosted stars:>1000
open-source database storage stars:>1000
```

### Filter-Logik (zwingend)
```
MIN_STARS >= 500           (via Env-Variable konfigurierbar)
not archived
not disabled
has description (min 15 Zeichen)
slug not in existing_slugs.json
```

Schließe außerdem aus: awesome-lists, tutorial-repos, learning-repos, demo-repos, example-repos.

### Automatische Kategorisierung
Erkenne Kategorien anhand von:
- GitHub Topics des Repos
- Repo-Name
- Beschreibung

Verwende **ausschließlich die category-slugs** die du in Phase 1 aus `categories.ts` gelesen hast.
Keine neuen Kategorien erfinden. Fallback: erste passende Kategorie oder "misc" falls vorhanden.

### Tool-Datenstruktur
Jeder Eintrag muss **exakt** dem `Tool` Interface entsprechen das du in `types.ts` gelesen hast.
Alle Pflichtfelder müssen korrekt befüllt sein — keine Felder auslassen oder erfinden.

### Akkumulierende Speicherung
`auto-tools.ts` wird nicht neu erstellt, sondern **erweitert**.
Alte Tools bleiben erhalten, neue werden hinzugefügt.
Speichere alle bisherigen Tools als JSON in einem Kommentar-Block innerhalb der Datei,
damit das Script sie beim nächsten Lauf wieder einlesen kann.

### index.ts Patch
Füge `autoDiscoveredTools` automatisch in `index.ts` ein:
- Import-Zeile einmalig hinzufügen (falls noch nicht vorhanden)
- Spread `...autoDiscoveredTools` in das bestehende Export-Array einfügen
- Nur dann wenn noch nicht vorhanden — kein doppeltes Einfügen

### Rate-Limit Handling
- Prüfe `X-RateLimit-Remaining` Header nach jeder Antwort
- Bei 403: warte bis `X-RateLimit-Reset` Timestamp + 5s, dann retry
- Maximal 3 Versuche pro Request
- 2 Sekunden Pause zwischen Search-Queries

---

## ⚙️ ANFORDERUNGEN AN DEN GITHUB ACTIONS WORKFLOW

### Trigger
```yaml
on:
  schedule:
    - cron: "0 6 * * 1"
  workflow_dispatch:
    inputs:
      min_stars:
        default: "500"
      max_per_run:
        default: "25"
      dry_run:
        default: "false"
```

### Permissions
```yaml
permissions:
  contents: write
```

### Steps — in genau dieser Reihenfolge

1. `actions/checkout@v4` mit `token: ${{ secrets.GITHUB_TOKEN }}` und `fetch-depth: 0`
2. Git Identity setzen: `github-actions[bot]` / `41898282+github-actions[bot]@users.noreply.github.com`
3. Python 3.12 einrichten + `pip install requests`
4. Python Script ausführen (Env-Variablen: `GITHUB_TOKEN`, `MIN_STARS`, `MAX_PER_RUN`, `REPO_ROOT=.`)
5. Ergebnis lesen aus `scripts/new_tools_count.txt`
6. Wenn neue Tools vorhanden: Node.js 20 + `npm ci`
7. `npm run build` ausführen — **Build-Test**
8. Bei Build-Fehler: `git checkout --` auf generierte Dateien → **Rollback**
9. Bei Build-Erfolg und nicht dry-run: `git add` → `git commit` → `git push origin main`

### Commit-Message
```
🤖 Auto-Discovery: +N FOSS Tools [YYYY-MM-DD]

[skip ci]
```

`[skip ci]` ist zwingend — verhindert endlose Workflow-Schleife.

### Sicherheit
- Niemals einen Token hardcodieren
- Ausschließlich `${{ secrets.GITHUB_TOKEN }}` verwenden

---

## ✅ ABSCHLUSS

Führe nach dem Erstellen aller Dateien aus:
```bash
npm run build
```

Wenn der Build fehlschlägt, analysiere den Fehler und korrigiere ihn.
Das System muss nach deiner Arbeit einen erfolgreichen Build liefern.

---

## 🔑 KERNPRINZIP

Das System muss **vollständig autonom** laufen:

- Kein manueller Eingriff nach dem Setup
- Kein PR-Review nötig
- Neue Tools erscheinen automatisch auf der Website jeden Montag
- Bei Build-Fehler → automatischer Rollback → Website bleibt stabil
