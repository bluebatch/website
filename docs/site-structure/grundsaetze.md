# Grundsätze der Site-Struktur

Was für alle Seiten gilt: Seitentypen, Status und die Regeln, nach denen
die Website aufgebaut ist. Welche Seiten es konkret gibt und geben soll,
steht im [Zielbild](zielbild.md).

## Seitentypen

| Typ | Kürzel | Zweck |
| --- | --- | --- |
| Hub | `HUB` | Verteiler: bündelt ein Thema und sammelt interne Links |
| Money Page | `MONEY` | Verkauft ein konkretes Angebot, Ziel jeder Conversion-Kette |
| Landing Page | `LANDING` | Externer Einstieg über SEO-Keyword oder Ads, führt zur Money Page |
| Content Page | `CONTENT` | Informiert, baut Topical Authority auf, verlinkt nach oben |
| Tool Page | `TOOL` | Interaktives Werkzeug wie ein Rechner: qualifiziert Leads, verkauft nicht selbst und führt Richtung Kontakt |
| System | `SYS` | Pflicht- und Betriebsseiten ohne SEO-Rolle |
| Ordner | `ORDNER` | Nur URL-Präfix ohne eigene Seite (heute nur `managed-claude/`) |

## Status

Den Status liest `node scripts/generate-zielbild.mjs` aus `app/` ab und
schreibt ihn ins Zielbild. Von Hand gepflegt werden nur Typ, Beschreibung
und die Markierungen.

| Status | Bedeutung |
| --- | --- |
| `live` | Route existiert und ist veröffentlicht |
| `live, noindex` | Veröffentlicht, aber `robots: { index: false }` (Funnel-Seiten, Rechtliches) |
| `unveröffentlicht` | Gebaut, aber nicht erreichbar: Ordner beginnt mit `_` oder `metaCustom.publish: false` |
| `geplant` | Die Seite gibt es noch nicht |
| `nur Ordner` | Typ `ORDNER`, keine eigene Seite |

| Markierung | Bedeutung |
| --- | --- |
| `#eingefroren` | Bleibt stehen, wird nicht weiter ausgebaut (Private-AI-Hubs) |
| `#future` | Bleibt stehen, vorerst keine neuen Seiten (Workflows-Hubs) |

## Positionierung

- **Fokus Claude Managed Service Provider (seit 2026-10).** Hauptangebot
  der ganzen Website ist Claude von Anthropic als Managed Service.
  Startseite und Hauptnavigation erzählen diese Geschichte, nicht mehr n8n.
  Priorität innerhalb des Angebots: **1. Claude App** (Claude für Teams und
  Enterprise einführen und betreiben), **2. Claude API** (Claude in eigene
  Systeme bringen), **3. Use Cases** (wir setzen konkrete Anwendungen auf
  Claude um). n8n und die übrigen Automation-Tools bleiben unter „Weitere
  Tools“, sind aber kein Hauptthema mehr.
- **Branchen: später Use Cases statt Technik.** Die Branchen-Hubs bleiben
  vorerst, wie sie sind. Mittelfristig rücken sie weg von Private AI und
  Co. hin zu „Was kann ich mit Claude in meiner Branche umsetzen?“.
  Private-AI-Hubs sind eingefroren, Workflows-Hubs sind Future.

## Aufbau der Branchen

- **Doppelte Hub-Struktur:** `branchen/` ist Hub, jede Branche darunter ist
  wieder ein Hub, darunter liegen die Themen-Unter-Hubs (Hub, Hub, Hub,
  Seiten).
- **Symmetrie der Fokus-Branchen:** Jede Branche hat eine stabile Basis von
  vier Themen-Unter-Hubs, jeder Unter-Hub zielt auf **5 Money Pages und
  5 Content Pages**. Drei Themen sind gleich (private-ai, ki-agenten,
  workflows), das vierte ist branchenspezifisch: Steuerberater und Anwälte
  haben **claude-cowork** (§ 203-StGB-konforme Verarbeitung), der
  Großhandel hat **ki-assistenten** (Claude, ChatGPT, Copilot aus der
  Cloud).
- **Skalierungsprinzip:** Die Unter-Hubs bleiben stabil, **neue Seiten
  entstehen darunter**, getrieben von Suchvolumen und Suchintention, ohne
  die Struktur umzubauen. Zusätzliche kleinere Hubs je Branche sind
  erlaubt, wenn ein Keyword-Cluster es trägt (Beispiele: `chatbots/` im
  Großhandel, weil „Chatbot“ eigenes Suchvolumen hat, und
  `kanzlei-organisation/` bei den Steuerberatern). Pflicht dabei: die
  Querverlinkung nach der [Verlinkungslogik](verlinkung.md).
- **Unter-Hubs nach Nutzungsmodell, nicht nach Technik:** private-ai = „Wo
  läuft die KI?“ (eigene Umgebung), ki-assistenten bzw. claude-cowork =
  „KI als Werkzeug fürs Team“ (der Mensch arbeitet, die KI hilft),
  ki-agenten = „KI als digitaler Mitarbeiter“ (die KI erledigt Aufgaben,
  der Mensch gibt frei), workflows = „fest automatisierte Prozesse“. Jede
  Hub-Seite erklärt diese Abgrenzung.

## Seiten und Inhalte

- **Content Pages beantworten Suchfragen, keine Produkt-Dubletten.**
  Content = „Was ist X?“, „Wie arbeitet X?“, „Wie führt man X erfolgreich
  ein?“ plus die Katalog-Detailseiten (z. B. mail-agent). Money = konkrete
  Angebote (Implementierung, Workshop, Betrieb) **plus Kosten- und
  Dauer-Seiten** („Was kostet X?“), denn Preisfragen sind Bottom-Funnel.
  Content und Money zum selben Thema sind erlaubt, aber nie als bloße
  Dublette („mail-agent“ neben „mail-agent-implementierung“ reicht allein
  nicht).
- **Preise sichtbar.** Hat ein Angebot einen festen Preis, steht er auf der
  Money Page, im Hero über die `PriceCard`. Bestellt wird über das
  Kontaktformular, bezahlt per Rechnung nach der Bestellung. Einen Checkout
  gibt es nicht.
- **Hubs sind designte Einstiege, keine Templates.** Jeder Hub wird
  individuell aufs Thema zugeschnitten. Money- und Content-Links werden
  **natürlich eingestreut**, ohne sichtbare „hier beginnt die
  Kauf-Sektion“ und ohne reine Listen-Übersichten (die hatten wir, laut
  SEO-Daten hat sie niemand genutzt). Wiederverwendbare Bausteine wie
  `ProductTile` ja, eine Template-Engine nein.
- **Blogs sind immer Content.** Ein **Blogpost ist eine Momentaufnahme,
  von einem Menschen geschrieben** (Meinung, Erfahrung, Aktualität). Eine
  **Content Page ist recherchiert und evergreen**, sie wird gepflegt statt
  ersetzt. Generische Suchintention gehört in den Blog, branchenspezifische
  als Content Page in den Unter-Hub, und der Blogartikel verlinkt auf die
  Branchen-Versionen. Einzelne Artikel stehen nicht im Zielbild.
- **Tools liegen unter `managed-claude/weitere-tools/`.** Tool-Seiten sind
  Content, auf die Branchen-, Angebots- und Blogseiten kontextuell
  verlinken. **n8n ist dort ein eigener Hub**, die früheren n8n-Services
  (Hosting, Wartung, Schulungen, Custom Nodes, Performance,
  Zertifizierung) sind seine Unterseiten.
- **GEO-Kurzbeschreibung im Hero, auf jeder Seite.** Direkt unter der H1
  steht eine Kurzbeschreibung über `GeoSummary`
  (`components/ui/geo-summary.tsx`) bzw. `Hero2ColumnDescription geo`.
  Vorgabe aus der GEO-Recherche: **40 bis 60 Wörter, 2 bis 3 Sätze,
  answer-first** (Satz 1 beantwortet „Was ist das und für wen?“), mit
  konkreten Zahlen und Namen, ohne mehrdeutige Pronomen. Das ist das
  Format, das LLMs am zuverlässigsten als Antwort übernehmen. Markiert mit
  `data-geo="summary"`.
- **Kannibalisierung: ein Keyword, eine Zielseite.** Zwei indexierbare
  Seiten dürfen nicht denselben Title oder dieselbe H1 haben; Seiten zum
  gleichen Thema in verschiedenen Branchen werden branchenspezifisch
  formuliert. Hauptkeywords je Seite stehen in der
  [Keyword-Map](keyword-map.md). Wächter:
  `tests/seo/duplicate-titles.spec.ts` (Fehler bei exakt gleichen Titles
  oder H1s, Warnung bei gleichen Wörtern in anderer Reihenfolge).

## Technik und URLs

- **Die Ordnerstruktur ist die URL-Struktur.** Jeder Knoten im Zielbild ist
  ein Ordner unter `app/`.
- **Layout-Trennung per Route Group:** Hauptseiten unter `app/(site)/` mit
  Navigation und Footer, Funnel-Landingpages unter
  `app/(landingpage-funnel)/` mit Minimal-Layout als Sackgasse (Regeln:
  `.claude/rules/landingpage-funnel.md`). Die URLs bleiben davon
  unberührt.
- **Die Folder-URL ist kanonisch.** Alte URLs stehen als `legacyRedirects`
  in der Page-Config (301 auf die Folder-Route). Die Keyword-Alias-Rewrites
  (`rewrites: [{ source }]`) bleiben und kanonisieren auf die Folder-URL.
  Jeder Umzug folgt demselben Prinzip: alte URL in `legacyRedirects`.
- **Unveröffentlichte Seiten:** Ein Ordner mit `_` davor ist für Next.js
  privat und wird nicht ausgeliefert. Städte unter `standorte/` nutzen
  stattdessen `metaCustom.publish: false`. Beides hält die Seite aus der
  Sitemap.
- **Breadcrumbs ab Ebene 2** auf allen Seiten, mit BreadcrumbList-Schema
  (`components/layout/breadcrumbs.tsx`). Sie geben Orientierung bei bis zu
  vier URL-Ebenen. Das Segment `managed-claude` wird ausgeblendet.
- **Klicktiefe höchstens 4:** Keine Seite liegt mehr als vier Klicks von der
  Startseite entfernt (`tests/seo/link-depth.spec.ts`, Fehler ab fünf).
- **Das Website-Repo ist self-contained.** Tests laden keine
  Google-Credentials und keine GSC- oder GA4-Daten. Fragen, die echte
  Rankings oder Traffic brauchen (Kannibalisierung nach Rankings, Link
  Equity, Priorisierung), beantwortet der Website-Agent außerhalb dieses
  Repos und gibt konkrete Änderungen ins Repo.
