# Doku der Website

Struktur, Planung und Recherche-Grundlagen für bluebatch.io. Der Code liegt
in `app/` und `components/`, hier steht, wie die Seiten zusammenhängen und
was noch kommt.

## Site-Struktur

| Dokument | Inhalt |
| --- | --- |
| [Grundsätze](site-structure/grundsaetze.md) | Seitentypen, Status, Positionierung und die Regeln, nach denen die Website aufgebaut ist |
| [Zielbild](site-structure/zielbild.md) | Alle Seiten als Baum nach URL, mit Typ und Status je Seite (live, unveröffentlicht, geplant) |
| [Zielbild als Mindmap](site-structure/zielbild.html) | Dieselben Daten zum Aufklappen, Filtern und Suchen. Datei im Browser öffnen |
| [Navigation](site-structure/navigation.md) | Mega-Menüs, Handy-Menü und Footer |
| [Verlinkung](site-structure/verlinkung.md) | Welche Seite wohin verlinkt, und die Regeln dazu |
| [Keyword-Map](site-structure/keyword-map.md) | Haupt- und Nebenkeywords je Seite im Bereich Managed Claude |
| [Roadmap](site-structure/roadmap.md) | Offene und erledigte Schritte, Entscheidungen |

## Recherche-Grundlagen

| Dokument | Inhalt |
| --- | --- |
| [keywords.md](keywords.md) | Top-50-Keywords aus der Search Console (Stand März 2026, noch mit den alten URLs aus der n8n-Zeit) |
| [german-cities.md](german-cities.md) | Deutsche Großstädte ab 100.000 Einwohnern mit Umlandstädten, Grundlage für `standorte/` |

## Neue Seite anlegen

1. **Einordnen:** Zeile im [Zielbild](site-structure/zielbild.md) an der
   richtigen Stelle einfügen, mit Typ und Status `geplant`.
2. **Bauen:** aus der Komponenten-Library (`.claude/rules/component-library.md`
   im übergeordneten Repo), mit GEO-Kurzbeschreibung und genau einem
   Abschluss-CTA.
3. **Status aktualisieren:** `node scripts/generate-zielbild.mjs` schreibt
   den Status ins Zielbild und erzeugt die Mindmap neu. Beide Dateien
   mitcommitten.
4. **Ist es ein Hub?** Dann Navigation, Handy-Menü und Breadcrumb-Label
   ergänzen und die [Navigation](site-structure/navigation.md) anpassen.

`node scripts/generate-zielbild.mjs --check` prüft nur und endet mit
Fehler, wenn der Status veraltet ist oder eine Seite in `app/` im Zielbild
fehlt.
