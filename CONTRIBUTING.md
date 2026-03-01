# Mitmachen / Contributing

Willkommen! Wir freuen uns, dass du zu diesem Projekt beitragen möchtest.
Jeder Beitrag — ob ein neues Tool, eine Korrektur oder ein Verbesserungsvorschlag — ist willkommen.

> **[English]** Contributions are welcome! You can suggest new tools via [Issues](https://github.com/BEKO2210/european-alternatives.eu-free-open-source/issues) or submit them directly via Pull Request. This guide is written in German, but PRs in English are perfectly fine.

---

## Wege mitzumachen

### 1. Tool vorschlagen (Issue)

Der einfachste Weg: Erstelle ein Issue mit dem Template **"Tool-Vorschlag"**.
Du musst nur das Formular ausfüllen — wir kümmern uns um den Rest.

[Neues Tool vorschlagen](https://github.com/BEKO2210/european-alternatives.eu-free-open-source/issues/new?template=tool-vorschlag.yml)

### 2. Tool direkt per Pull Request hinzufügen

Wenn du das Tool selbst eintragen möchtest:

#### Schritt 1: Repository forken und klonen

```bash
git clone https://github.com/DEIN-USERNAME/european-alternatives.eu-free-open-source.git
cd european-alternatives.eu-free-open-source
npm install
```

#### Schritt 2: Passende Kategorie-Datei finden

Die Tools sind nach Kategorien in `src/data/tools/` organisiert. Finde die passende Datei
(z.B. `browser.ts` für Browser, `vpn.ts` für VPN-Lösungen).

Alle 39 Kategorie-Slugs findest du in `src/data/categories.ts`.

#### Schritt 3: Tool-Eintrag hinzufügen

Füge einen neuen Eintrag in das Array der passenden Datei ein.
Das Tool muss dem `Tool` Interface aus `src/data/types.ts` entsprechen:

```typescript
{
  id: 'mein-tool',                    // Eindeutiger Slug (URL-safe, lowercase)
  name: 'Mein Tool',                  // Anzeigename
  slug: 'mein-tool',                  // Gleich wie id
  tagline: 'Kurze Beschreibung.',     // Max ~80 Zeichen
  description: 'Ausführliche Beschreibung in 2-3 Sätzen. Was macht das Tool? Warum ist es besonders?',
  website: 'https://example.com',
  github: 'https://github.com/org/repo',   // Optional
  license: 'MIT',                     // SPDX-Identifier (MIT, GPL-3.0, AGPL-3.0, Apache-2.0, ...)
  categories: ['browser'],            // Ein oder mehrere Kategorie-Slugs
  replacesTools: ['Chrome', 'Edge'],  // Welche proprietären Tools es ersetzt
  selfHostable: true,
  logoPlaceholderEmoji: '🌐',         // Fallback-Emoji falls kein Logo
  lastUpdated: '2026-03-01',          // ISO-Datum
  tags: ['privacy', 'web'],           // Relevante Tags
  difficulty: 'einfach',              // 'einfach' | 'mittel' | 'fortgeschritten'
  platforms: ['linux', 'windows', 'macos', 'web'],  // Aus: web, linux, windows, macos, android, ios, docker
  featured: false,                    // Auf false lassen
  addedDate: '2026-03-01',           // Heutiges Datum
}
```

#### Schritt 4: Slug registrieren

Füge den Slug deines Tools zu `scripts/existing_slugs.json` hinzu.
Das verhindert, dass das Auto-Discovery-System ein Duplikat erstellt.

#### Schritt 5: Build testen

```bash
npm run build
```

Der Build muss fehlerfrei durchlaufen.

#### Schritt 6: Pull Request erstellen

```bash
git checkout -b add-tool/mein-tool
git add .
git commit -m "feat: add Mein Tool to browser category"
git push origin add-tool/mein-tool
```

Erstelle dann einen PR auf GitHub.

### 3. Fehler melden

Falsche Informationen, kaputte Links, veraltete Daten?
Erstelle ein Issue mit dem Template **"Fehler melden"**.

[Fehler melden](https://github.com/BEKO2210/european-alternatives.eu-free-open-source/issues/new?template=fehler-melden.yml)

---

## Code Style

- **TypeScript** — Nutze die bestehenden Dateien als Vorlage
- **Struktur beibehalten** — Keine neuen Ordner oder Dateien anlegen, wenn es eine passende gibt
- **Keine Design-Änderungen** — Kein CSS, kein Layout, keine Komponenten ändern
- **Keine neuen Kategorien** — Nur die 39 existierenden Slugs aus `src/data/categories.ts` verwenden

---

## Was ein guter Tool-Eintrag beinhaltet

- Alle Pflichtfelder vollständig ausgefüllt
- Korrekte SPDX-Lizenz-ID (nicht "Open Source" oder "Free")
- Mindestens ein Kategorie-Slug aus den bestehenden 39 Kategorien
- Aussagekräftige `tagline` (kurz) und `description` (2-3 Sätze)
- Korrekte `replacesTools` — welche bekannten proprietären Tools ersetzt es?
- Ein Emoji als `logoPlaceholderEmoji` das zum Tool passt
- Aktuelle Datumsangaben in `lastUpdated` und `addedDate`

---

## Verhaltenskodex

- Respektvoller, konstruktiver Umgang miteinander
- Keine Diskriminierung, Belästigung oder persönliche Angriffe
- Sachliche Diskussionen — wir bewerten Software, nicht Menschen
- Beiträge in Deutsch und Englisch sind gleichermaßen willkommen
