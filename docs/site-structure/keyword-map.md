# Keyword-Map Managed Claude

Haupt- und Nebenkeywords je Seite für den Bereich Managed Claude. Die Regel
dahinter steht in den [Grundsätzen](grundsaetze.md) (ein Keyword, eine
Zielseite). Keywords der Branchen- und Blogseiten pflegt der Content-Agent
in `analytics/website-keywords-backlog.csv` und in seiner `publish-db.csv`
(beides im übergeordneten Repo `bluebatch_sales`).

## Seiten und Keywords (DataForSEO, 2026-10-02)

Recherche mit `tools/dataforseo/` (Markt Deutschland, Sprache Deutsch), 40
Seeds, Werte: Suchvolumen pro Monat / Keyword Difficulty (0 bis 100). Alle
relevanten Keywords liegen zusätzlich im Backlog
(`analytics/website-keywords-backlog.csv`, Cluster „Managed Claude“).
**Hauptkeyword** = Title, H1, GEO-Summary, URL-nah. **Nebenkeywords** =
H2, FAQ, Fließtext. Je Keyword genau **eine** Zielseite (Kannibalisierung).

| Seite | Hauptkeyword | Nebenkeywords |
| --- | --- | --- |
| `/` (Startseite, seit 2026-10-14 zugleich Managed-Claude-Hub) | claude ai deutschland 140/39, claude für unternehmen 140/0 | claude ai deutsch 3600/10, anthropic partner 30, claude von anthropic 590/0, claude ai unternehmen 70/4, claude enterprise 1300/0, claude enterprise plan 140/0, ki-lösungen für unternehmen 210/0 |
| `managed-claude/datenschutz` | claude datenschutz 480/0 | claude dsgvo 260/0, claude ai datenschutz 170/0, claude dsgvo-konform 170/0, ist claude dsgvo konform 90, claude dsgvo-konform nutzen 90/0 |
| `managed-claude/claude-app` | claude team 1900/0 | claude team plan 1300/0, claude desktop app 3600/14, claude cowork windows 390/0, claude team account 90/13, claude team vs enterprise 30 |
| `managed-claude/preise` | claude kosten 5400/0 | claude preise 3600/0, claude ai kosten 3600/17, claude enterprise pricing 480/0, claude kosten pro monat 320/0, claude enterprise kosten 140/0, claude token kosten 110/0, claude team kosten 50, claude cowork kosten 170/0 |
| `managed-claude/claude-api` | claude api key 3600/10 | anthropic api key 2900/20, claude api pricing 1600/11, claude api kosten 260/0, claude api preise 50, aws bedrock claude 140/16 |
| `managed-claude/zentrale-steuerung` | ki compliance 260/0 | ki-richtlinien für unternehmen 40/0, claude admin console 40, claude skills 8100/0 (nur Nebenkeyword, Absicht ist informativ) |
| `managed-claude/wie-es-funktioniert` | aws bedrock claude 140/16 | amazon bedrock claude 50, claude aws bedrock 50, bedrock claude 40 |
| `managed-claude/onboarding` | ki einführung 140/8 | einführung in die ki 90/6, claude cowork einrichten 40 |
| `managed-claude/coaching` | ki schulung 2400/8 | ki schulung für mitarbeiter 390/0, ki kompetenz schulung 260/2, ki coaching 260/0, ki schulung pflicht 210/7, ki-schulung für unternehmen 170/9 |
| `managed-claude/coaching/paket-m` | ki workshop für unternehmen 50/0 | ki seminare für unternehmen 30 |
| `managed-claude/coaching/paket-l` | ki beratung für unternehmen 170/6 | ki-beauftragter schulung 70/2, ki strategie für unternehmen 40 |
| `managed-claude/integrationen` | claude mcp 1000/9 | claude mcp server 320/19, claude desktop mcp 140/15, claude cowork connectors 30 |
| `managed-claude/integrationen/microsoft` | claude outlook 210/2 | claude for outlook 140/3, claude microsoft 110/0, claude outlook integration 90/0, claude for microsoft 365 70/5, claude für excel 210/7 |
| `managed-claude/integrationen/datev` | datev ki 880/0 | ki buchhaltung datev 90/0, ki datev 70/0, datev mcp server 40 (Achtung: „datev ki werkstatt“ 3600/0 ist DATEVs eigenes Produkt, nur im Fließtext abgrenzen) |
| `managed-claude/integrationen/websearch` | claude web search 50 | claude websuche 10 (kaum Volumen, Seite bleibt Feature-Seite) |
| `managed-claude/use-cases` | claude agent 2900/0 | ki-agenten für unternehmen 90/0, claude ai agent 320/14, claude agent erstellen 140/0, ki-agent claude 110/0 |

## Lücken: neue Seiten mit Keyword-Potenzial

| Vorschlag | Typ | Keywords | Begründung |
| --- | --- | --- | --- |
| `managed-claude/chatgpt-alternative` | `LANDING` | chatgpt alternative 9900/0, alternative zu chatgpt 8100/0, europäische alternative zu chatgpt 390/0, deutsche alternative zu chatgpt 110/0, chatgpt alternative europa 140/0 | Größtes Volumen bei KD 0. Viele Suchen wollen „kostenlos“, daher auf Unternehmen/DSGVO zuspitzen. |
| `blog/claude-skills` | `CONTENT` | claude skills 8100/0, best claude skills 390/0, claude skills marketplace 590/16 | Informativ, verlinkt auf zentrale-steuerung (Skills zentral verteilen). |
| `blog/claude-pro-team-enterprise` | `CONTENT` | claude pro 8100/10, claude max 3600/0, claude pro kosten 1300/0, claude team vs pro 30 | Abo-Vergleich, verlinkt auf preise und claude-app. |

## Bereits besetzt (nicht doppelt targeten)

- „claude api“ → `/blog/claude-api`, deshalb zielt claude-api auf „claude api key“.
- „ki für unternehmen“ → `/blog/ki-fuer-unternehmen`, deshalb zielt die Startseite auf „claude für unternehmen“.
- „dsgvo konforme ki“ → `/blog/dsgvo-konforme-ki-tools`; die neue Datenschutz-Seite nimmt nur Claude-Varianten.
- „claude vs chatgpt“ → `/blog/claude-cowork-vs-copilot-chatgpt`.
- „amazon bedrock“ → `/blog/amazon-bedrock`, deshalb nur „aws bedrock claude“ auf wie-es-funktioniert.
- „mcp server erstellen“ → `integrationen/mcp-server-erstellen`.

## Offen

- **Doppelt vergeben: „aws bedrock claude“** steht als Hauptkeyword bei
  `managed-claude/wie-es-funktioniert` und als Nebenkeyword bei
  `managed-claude/claude-api`. Laut „Bereits besetzt“ gehört es zu
  wie-es-funktioniert, also bei claude-api streichen.
- **`managed-claude/governance-compliance/` und Unterseiten** (Webinar,
  Studie, Schulung) haben noch keine Keyword-Recherche. Bei der Schulung
  die Abgrenzung zu `managed-claude/coaching` („ki schulung“) beachten.
