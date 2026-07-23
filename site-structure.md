# Site-Struktur — Zielbild (Draft)

> Stand 2026-07-22. Die **Struktur ist umgesetzt** (Branch
> `refactor/site-structure`); Seiten mit `(geplant)` werden stückweise gebaut.
> Struktur = native Folder-/URL-Struktur. Links der Pfad, rechts Typ + Inhalt.
> Marker: ohne Marker = existiert schon unter dieser URL · `(geplant)` = neu
> zu bauen · `(Umzug)` = existiert, liegt heute aber unter anderer URL.
> Regel: Neue Seiten zuerst hier einordnen (Typ + Knoten), dann bauen.

## Seitentypen (Legende)

| Typ | Kürzel | Zweck |
|---|---|---|
| Routenknoten / Hub | `[HUB]` | Verteiler, bündelt ein Thema, sammelt interne Links |
| Money Page | `[MONEY]` | Verkauft ein konkretes Angebot, Ziel jeder Conversion-Kette |
| Landing Page | `[LANDING]` | Externer Einstieg (SEO-Keyword, Ads), führt zur Money Page |
| Content Page | `[CONTENT]` | Informiert, baut Topical Authority auf, verlinkt nach oben |
| Tool Page | `[TOOL]` | Interaktives Werkzeug (Rechner, Konfigurator): qualifiziert und wärmt Leads auf, verkauft aber nicht selbst — Conversion-Assist Richtung Kontakt |
| System | `[SYS]` | Pflicht-/Betriebsseiten ohne SEO-Rolle |

Grundsätze:

- **Doppelte Hub-Struktur bei Branchen:** `branchen/` ist Hub, jede Branche
  darunter ist selbst wieder ein Hub, darunter vier Themen-Unter-Hubs
  (Hub → Hub → Hub → Pages).
- **Symmetrie der Fokus-Branchen:** Jede Branche hat eine stabile Basis von
  vier Themen-Unter-Hubs, jeder Unter-Hub zielt auf **5 Money Pages +
  5 Content Pages**. Drei Themen sind identisch (private-ai, ki-agenten,
  workflows), das vierte ist branchenspezifisch: Steuerberater (und später
  Anwälte) haben **claude-cowork** (§ 203-StGB-konforme Verarbeitung),
  Großhandel hat **ki-assistenten** (Claude, ChatGPT, Copilot aus der Cloud).
- **Skalierungsprinzip (der Grund für die doppelte Hub-Struktur):** Die
  Unter-Hubs bleiben stabil; **neue Seiten entstehen unterhalb der Hubs**,
  getrieben von Suchvolumen und Suchintention — ohne die Struktur umzureißen.
  Zusätzliche kleinere Hubs je Branche sind erlaubt, wenn ein Keyword-Cluster
  es trägt (Beispiel: **chatbots/ im Großhandel** — „Chatbot" hat eigenes
  Suchvolumen und gehört als Wort in die Hub-Ebene). Pflicht dabei:
  Cross-Verlinkung gemäß Verlinkungslogik.
- **Positionierung der vier Unter-Hubs (Nutzungsmodell, nicht Technik):**
  private-ai = „Wo läuft die KI?" (eigene Umgebung) · ki-assistenten bzw.
  claude-cowork = „KI als Werkzeug fürs Team" (Mensch arbeitet, KI hilft) ·
  ki-agenten = „KI als digitaler Mitarbeiter" (KI erledigt Aufgaben, Mensch
  gibt frei) · workflows = „fest automatisierte Prozesse". Jede Hub-Seite
  erklärt diese Abgrenzung.
- **Content Pages beantworten Suchfragen, keine Produkt-Dubletten:** Content =
  „Was ist X?", „Wie arbeitet X?", „Wie führt man X erfolgreich ein?" plus die
  Katalog-Detailseiten (z.B. mail-agent). Money = konkrete Angebote
  (Implementierung, Workshop, Managed) **plus Kosten-/Dauer-Seiten** („Was
  kostet X?") — Preisfragen sind Bottom-Funnel und zählen als Money. Content
  und Money zum selben Thema bleiben erlaubt, aber nie als bloße Dublette
  („mail-agent" vs. „mail-agent-implementierung" allein reicht nicht).
- **Tools liegen unter Services** (ein Nav-Button weniger). Tool-Seiten sind
  Content, auf die Branchen-, Service- und Blog-Seiten kontextuell verlinken.
- **Blogs sind grundsätzlich Content** — einzelne Artikel werden hier nicht
  gelistet. Abgrenzung zur Content Page: Ein **Blogpost ist eine
  Momentaufnahme, von einem Menschen geschrieben** (Meinung, Erfahrung,
  Aktualität). Eine **Content Page ist recherchiert und evergreen** — sie wird
  gepflegt statt ersetzt. Generische Suchintention → Blog, branchenspezifische
  → Content Page im Unter-Hub; der Blog-Artikel verlinkt auf die
  Branchen-Versionen.
- **Hubs sind designte Einstiege, keine Templates:** Jeder Unter-Hub wird
  individuell aufs Thema zugeschnitten. Money- und Content-Links werden
  **natürlich eingestreut** — es darf keine sichtbare „hier beginnt die
  Kauf-Sektion" geben und keine reinen Listen-Übersichten (die hatten wir:
  laut SEO-Daten hat sie niemand genutzt). Wiederverwendbare Bausteine
  (ProductTile & Co.) ja, Template-Engine nein.
- **GEO-Kurzbeschreibung im Hero (jede Seite):** Jede Seite beginnt direkt
  unter der H1 mit einer Kurzbeschreibung via `GeoSummary`-Komponente
  (`components/ui/geo-summary.tsx`). Spezifikation aus der GEO-Recherche:
  **40-60 Wörter, 2-3 Sätze, answer-first** (Satz 1 = „Was ist das und für
  wen?"), mit konkreten Zahlen/Entitäten, ohne mehrdeutige Pronomen — das
  Format, das LLMs am zuverlässigsten als Antwort extrahieren. Markiert mit
  `data-geo="summary"`.
- **Layout-Trennung per Route Group:** Hauptseiten unter `app/(site)/`
  (Navigation + Footer), Funnel-LPs unter `app/(landingpage-funnel)/`
  (Minimal-Chrome, Sackgasse). URLs bleiben davon unberührt.
- **Folder-URL ist kanonisch, keine mainRewrites mehr:** Alte Flat-URLs stehen
  als `legacyRedirects` in der Page-Config (301 auf die Folder-Route). Die
  Keyword-Alias-Rewrites (`rewrites: [{source}]`, ~530 Stück, SEO-Strategie)
  bleiben bestehen und kanonisieren auf die Folder-URL. Bei allen Umzügen in
  diesem Draft gilt dasselbe Prinzip: alte URL → `legacyRedirects`.

## Mindmap (Zielbild)

```
/
├── (Homepage) ................................ [MONEY]  Brand + Einstieg
│
├── branchen/ ................................. [HUB]    Verteiler nach Zielgruppe
│   │
│   ├── grosshandel/ .......................... [HUB]    Branchen-Hub (Hub-Hub)
│   │   │
│   │   ├── private-ai/ ....................... [HUB]     „Wo läuft die KI?" (heute Dummy)
│   │   │   ├── implementierung-open-webui .... [MONEY]   (geplant)
│   │   │   ├── implementierung-vllm .......... [MONEY]   (geplant)
│   │   │   ├── managed-private-ai ............ [MONEY]   (geplant)
│   │   │   ├── private-ai-schulung ........... [MONEY]   (geplant)
│   │   │   ├── was-kostet-private-ai ......... [MONEY]   (geplant) Preise & Dauer
│   │   │   ├── was-ist-private-ai ............ [CONTENT] (geplant)
│   │   │   ├── lokale-llms-fuer-produktdaten . [CONTENT] (geplant)
│   │   │   ├── dsgvo-ki-im-grosshandel ....... [CONTENT] (geplant)
│   │   │   ├── private-ai-vs-cloud-ki ........ [CONTENT] (geplant)
│   │   │   └── private-ai-erfolgreich-einfuehren [CONTENT] (geplant)
│   │   │
│   │   ├── ki-assistenten/ ................... [HUB]     „KI als Werkzeug fürs
│   │   │   │                                    Team": Claude, ChatGPT, Copilot
│   │   │   ├── claude-einfuehrung ............ [MONEY]   (geplant)
│   │   │   ├── chatgpt-enterprise-einfuehrung  [MONEY]   (geplant)
│   │   │   ├── copilot-einfuehrung ........... [MONEY]   (geplant)
│   │   │   ├── ki-assistenten-schulung ....... [MONEY]   (geplant)
│   │   │   ├── was-kosten-ki-assistenten ..... [MONEY]   (geplant) Preise & Lizenzen
│   │   │   ├── was-ist-ein-ki-assistent ...... [CONTENT] (geplant)
│   │   │   ├── assistent-oder-agent .......... [CONTENT] (geplant) Abgrenzungs-Seite!
│   │   │   ├── claude-vs-chatgpt-vs-copilot .. [CONTENT] (geplant)
│   │   │   ├── ki-assistenten-dsgvo .......... [CONTENT] (geplant)
│   │   │   └── ki-assistenten-erfolgreich-einfuehren [CONTENT] (geplant)
│   │   │
│   │   ├── ki-agenten/ ....................... [HUB]     „KI als digitaler
│   │   │   │                                    Mitarbeiter" — Agenten-Katalog
│   │   │   ├── angebots-bot-implementierung .. [MONEY]   (geplant)
│   │   │   ├── invoice-bot-implementierung ... [MONEY]   (geplant)
│   │   │   ├── ki-agenten-workshop ........... [MONEY]   (geplant)
│   │   │   ├── ki-agenten-betrieb ............ [MONEY]   (geplant)
│   │   │   ├── was-kostet-ein-ki-agent ....... [MONEY]   (geplant) Preise & Dauer
│   │   │   ├── angebots-bot .................. [CONTENT] Katalog
│   │   │   ├── invoice-bot ................... [CONTENT] Katalog
│   │   │   ├── was-ist-ein-ki-agent .......... [CONTENT] (geplant)
│   │   │   ├── ki-agent-vs-workflow .......... [CONTENT] (geplant) Abgrenzung
│   │   │   └── ki-agenten-erfolgreich-einfuehren [CONTENT] (geplant)
│   │   │
│   │   ├── chatbots/ ......................... [HUB]     KI-Chatbots für
│   │   │   │                                    Kunden & Website — eigener Hub,
│   │   │   │                                    „Chatbot" hat eigenes Suchvolumen
│   │   │   ├── ki-chatbot-implementierung .... [MONEY]   (geplant)
│   │   │   ├── chatbot-erp-anbindung ......... [MONEY]   (geplant) Navision/easybill
│   │   │   ├── chatbot-betrieb ............... [MONEY]   (geplant)
│   │   │   ├── chatbot-workshop .............. [MONEY]   (geplant)
│   │   │   ├── was-kostet-ein-chatbot ........ [MONEY]   (geplant) Preise & Dauer
│   │   │   ├── ki-chatbot-grosshandel ........ [CONTENT] Katalog
│   │   │   ├── was-ist-ein-ki-chatbot ........ [CONTENT] (geplant)
│   │   │   ├── chatbot-vs-ki-agent ........... [CONTENT] (geplant) Abgrenzung
│   │   │   ├── chatbot-dsgvo ................. [CONTENT] (geplant)
│   │   │   └── chatbot-erfolgreich-einfuehren  [CONTENT] (geplant)
│   │   │
│   │   ├── workflows/ ........................ [HUB]     „Fest automatisierte
│   │   │   │                                    Prozesse" — Workflow-Katalog
│   │   │   ├── auftragserfassung-implementierung [MONEY] (geplant)
│   │   │   ├── rechnungspruefung-implementierung [MONEY] (geplant)
│   │   │   ├── easybill-automation-implementierung [MONEY] (geplant)
│   │   │   ├── workflow-audit-grosshandel .... [MONEY]   (geplant)
│   │   │   ├── was-kostet-workflow-automatisierung [MONEY] (geplant) Preise & Dauer
│   │   │   ├── auftragserfassung ............. [CONTENT] Katalog
│   │   │   ├── bestellabwicklung ............. [CONTENT] Katalog
│   │   │   ├── lagerverwaltung ............... [CONTENT] Katalog
│   │   │   ├── 3-wege-rechnungspruefung ...... [CONTENT] Katalog
│   │   │   ├── zertifikatspruefung-lieferanten [CONTENT] Katalog
│   │   │   └── ai-automation-with-easybill ... [CONTENT] Katalog
│   │   │
│   │   └── roi-rechner/ ...................... [TOOL]
│   │       │                                    Conversion-Assist des Großhandel-Hubs
│   │       ├── document ...................... [TOOL]   Rechner Dokumentenverarbeitung
│   │       ├── service-requests .............. [TOOL]   Rechner Service-Anfragen
│   │       └── social-media-ads .............. [TOOL]   Rechner Social-Media-Ads
│   │
│   ├── anwaelte/ ............................. [HUB]    (geplant) dritte Fokus-Branche;
│   │                                            Struktur analog Steuerberater
│   │                                            (§ 203 → claude-cowork relevant)
│   │
│   └── steuerberater/ ........................ [HUB]    Branchen-Hub, Fokus-Branche
│       │
│       ├── private-ai/ ....................... [HUB]     „Wo läuft die KI?" (heute Dummy)
│       │   ├── implementierung-open-webui .... [MONEY]   (geplant)
│       │   ├── implementierung-vllm .......... [MONEY]   (geplant)
│       │   ├── managed-private-ai ............ [MONEY]   (geplant)
│       │   ├── dsgvo-203-audit ............... [MONEY]   (geplant)
│       │   ├── was-kostet-private-ai ......... [MONEY]   (geplant) Preise & Dauer
│       │   ├── was-ist-private-ai ............ [CONTENT] (geplant)
│       │   ├── open-webui-fuer-kanzleien ..... [CONTENT] (geplant)
│       │   ├── lokale-llms-fuer-kanzleien .... [CONTENT] (geplant)
│       │   ├── paragraph-203-und-ki .......... [CONTENT] (geplant)
│       │   └── private-ai-erfolgreich-einfuehren [CONTENT] (geplant)
│       │
│       ├── claude-cowork/ .................... [HUB]     „KI als Werkzeug fürs Team",
│       │   │                                    § 203-konform (heute einzelne Seite)
│       │   ├── implementierung-claude-cowork . [MONEY]   (geplant)
│       │   ├── claude-cowork-schulung ........ [MONEY]   (geplant)
│       │   ├── claude-cowork-managed ......... [MONEY]   (geplant)
│       │   ├── claude-cowork-datev-integration [MONEY]   (geplant)
│       │   ├── was-kostet-claude-cowork ...... [MONEY]   (geplant) Preise & Dauer
│       │   ├── was-ist-claude-cowork ......... [CONTENT] (geplant)
│       │   ├── claude-cowork-use-cases ....... [CONTENT] (geplant)
│       │   ├── claude-cowork-vs-copilot ...... [CONTENT] (geplant)
│       │   ├── claude-cowork-dsgvo-203 ....... [CONTENT] (geplant)
│       │   └── claude-cowork-erfolgreich-einfuehren [CONTENT] (geplant)
│       │
│       ├── ki-agenten/ ....................... [HUB]     „KI als digitaler Mitarbeiter"
│       │   │                                    — Agenten-Katalog (Kachel-Grid)
│       │   ├── mail-agent-implementierung .... [MONEY]   (geplant)
│       │   ├── mandantenkommunikation-impl. .. [MONEY]   (geplant)
│       │   ├── jahresabschluss-agent-impl. ... [MONEY]   (geplant)
│       │   ├── ki-agenten-workshop ........... [MONEY]   (geplant)
│       │   ├── was-kostet-ein-ki-agent ....... [MONEY]   (geplant) Preise & Dauer
│       │   ├── mail-agent .................... [CONTENT] Katalog
│       │   ├── mandantenkommunikation ........ [CONTENT] Katalog
│       │   ├── jahresabschluss-ki ............ [CONTENT] Katalog
│       │   ├── was-ist-ein-ki-agent .......... [CONTENT] (geplant)
│       │   └── ki-agenten-erfolgreich-einfuehren [CONTENT] (geplant)
│       │
│       └── workflows/ ........................ [HUB]     „Fest automatisierte Prozesse"
│           │                                    — Workflow-Katalog
│           ├── belegpruefung-implementierung . [MONEY]   (geplant)
│           ├── e-rechnung-implementierung .... [MONEY]   (geplant)
│           ├── datev-jira-sync-implementierung [MONEY]   (geplant)
│           ├── workflow-audit-kanzlei ........ [MONEY]   (geplant)
│           ├── was-kostet-workflow-automatisierung [MONEY] (geplant) Preise & Dauer
│           ├── belegpruefung ................. [CONTENT] Katalog
│           ├── dokumentenverarbeitung ........ [CONTENT] Katalog
│           ├── datev-jira-task-orchestration . [CONTENT] Katalog
│           ├── e-rechnung-verarbeitung ....... [CONTENT] Katalog
│           └── mandanten-onboarding .......... [CONTENT] Katalog
│
├── services/ ................................. [HUB]    Angebots-Verteiler
│   ├── n8n-hosting ........................... [MONEY]
│   ├── workflow-wartung ...................... [MONEY]
│   ├── schulungen ............................ [MONEY]
│   ├── custom-nodes .......................... [MONEY]
│   ├── performance-scaling ................... [MONEY]
│   ├── zertifizierung ........................ [MONEY]  auch Trust
│   │
│   └── tools/ ................................ [HUB]    Software-
│       │                                       Ökosystem; Ziel kontextueller Links
│       │                                       aus Branchen, Services und Blog
│       ├── n8n ............................... [CONTENT] wichtigste Tool-Seite
│       ├── make .............................. [CONTENT] Automation-Tool
│       ├── zapier ............................ [CONTENT] Automation-Tool
│       ├── power-automate .................... [CONTENT] Automation-Tool
│       ├── activepieces ...................... [CONTENT] Automation-Tool
│       ├── pipedream ......................... [CONTENT] Automation-Tool
│       ├── tray-io ........................... [CONTENT] Automation-Tool
│       ├── uipath ............................ [CONTENT] Automation-Tool
│       ├── workato ........................... [CONTENT] Automation-Tool
│       ├── freshworks ........................ [CONTENT] Automation-Tool
│       ├── navision .......................... [CONTENT] Großhandel-Tool
│       ├── easybill .......................... [CONTENT] Großhandel-Tool
│       └── microtech-bueroplus ............... [CONTENT] Großhandel-Tool
│
├── blog/ ..................................... [HUB]    Blog-Übersicht
│   └── <artikel> (~60 Stück) ................. [CONTENT] Blogs sind immer Content
│
├── standorte/ ................................ [HUB]    lokales SEO
│   └── <stadt> ............................... [LANDING] 12 live, +68 unpublished;
│                                                je Stadt bis zu 6 Keyword-Aliasse
│
├── (Funnel-Landingpages) ..................... [LANDING] Ads-Einstiege, isoliert per
│   │                                            Minimal-Layout, alle noindex,
│   │                                            nicht in der Sitemap.
│   │                                            Guard: tests/technical/funnel-isolation
│   │                                            Regeln: .claude/rules/landingpage-funnel.md
│   ├── sensitiv-ai ........................... [LANDING] passt zum Private-AI-Hub
│   ├── ai-onboarding ......................... [LANDING]
│   ├── ai-workflow ........................... [LANDING]
│   ├── claude-cowork-schulung ................ [LANDING] passt zum Cowork-Hub
│   ├── ai-maschinenbau-schulung-nuernberg .... [LANDING]
│   ├── chat .................................. [SYS]    Chat-Funnel
│   ├── impressum-funnel ...................... [SYS]    Impressum im Funnel-Layout
│   └── datenschutz-funnel .................... [SYS]    Datenschutz im Funnel-Layout
│
├── contact ................................... [MONEY]  finales Ziel aller Ketten
├── mit-euch-wachsen .......................... [CONTENT] Prozess & Positionierung (Trust)
├── team ...................................... [CONTENT] Trust
│
├── impressum ................................. [SYS]
└── datenschutz ............................... [SYS]
```

## Navigation (Zielbild)

Vier Buttons statt fünf: **Über uns · Services · Branchen · Blog** plus
Kontakt-CTA. Tools-Button entfällt (Tools-Sektion im Services-Mega-Menü).

**Hub-first-Prinzip (löst unser Platzproblem):** Die Navigation erreicht nur
Hubs, nie einzelne Money-/Content-Seiten. Das Mega-Menü geht maximal bis
Ebene 3 (Branchen → Großhandel → private-ai). Ab dort navigiert man über die
Hub-Seiten selbst — die Hubs SIND die vierte Navigationsebene. Jede Seite
bleibt so in maximal 2 Klicks erreichbar: Nav → Hub → Seite.

### Desktop (Mega-Menüs)

```
[Logo]   Über uns ▾   Services ▾   Branchen ▾   Blog ▾          [Kontakt-CTA]

Branchen ▾ ──────────────────────────────────────────────
│  GROSSHANDEL (→ Hub)        STEUERBERATER (→ Hub)
│  ├─ Private AI              ├─ Private AI
│  ├─ KI-Assistenten          ├─ Claude Cowork
│  ├─ KI-Agenten              ├─ KI-Agenten
│  ├─ Chatbots                └─ Workflows
│  ├─ Workflows
│  └─ ROI-Rechner [TOOL]      (ANWÄLTE als dritte Spalte, sobald live)

Services ▾ ──────────────────────────────────────────────
│  SERVICES (→ Hub)           TOOLS (→ services/tools/)
│  ├─ n8n Hosting             ├─ n8n
│  ├─ Workflow-Wartung        ├─ Make
│  ├─ Schulungen              ├─ Zapier
│  ├─ Custom Nodes            ├─ Power Automate
│  ├─ Performance Scaling     └─ Alle Tools → Hub
│  └─ Zertifizierung          

Über uns ▾: Mit euch wachsen · Team · Kontakt
Blog ▾:     die 5 neuesten Artikel · Alle Artikel → Hub
```

Erreichbar aus der Desktop-Nav: alle Hubs, alle 6 Service-Money-Pages, Top-4-
Tools, ROI-Rechner. NICHT in der Nav (bewusst, via Hub 1 Klick entfernt):
alle Money-/Content-/Katalog-Seiten der Unter-Hubs, restliche 9 Tools,
einzelne Rechner, Standorte (nur Footer), Blog-Artikel jenseits der Top 5.

### Mobile (Drawer, max. 1 Akkordeon-Ebene)

Lehre aus der Vergangenheit: keine tiefen Verschachtelungen. Der Drawer hat
genau eine Akkordeon-Ebene; darunter sind es flache Listen mit tappbaren
Gruppen-Überschriften (Überschrift = Link auf den Hub).

```
☰ Drawer
├─ Über uns
├─ Services ▾              (Akkordeon)
│   ├─ Alle Services → Hub
│   ├─ n8n Hosting · Wartung · Schulungen ·
│   │  Custom Nodes · Performance · Zertifizierung
│   └─ Tools → Hub         (einzelne Tools NICHT im Drawer)
├─ Branchen ▾              (Akkordeon)
│   ├─ Großhandel → Hub            (Gruppen-Überschrift, tappbar)
│   │   Private AI · KI-Assistenten · KI-Agenten · Chatbots ·
│   │   Workflows · ROI-Rechner
│   └─ Steuerberater → Hub         (Gruppen-Überschrift, tappbar)
│       Private AI · Claude Cowork · KI-Agenten · Workflows
├─ Blog                    (direkter Link, kein Akkordeon)
└─ [Kontakt-CTA, sticky am Drawer-Ende]
```

Erreichbar aus der Mobile-Nav: alle Hubs (identisch mit Desktop bis auf
Top-Tools und Blog-Teaser, die mobil entfallen). Alles andere über die
Hub-Seiten — die übernehmen mobil die Rolle des Mega-Menüs. Deshalb müssen
Hubs mobil hervorragend navigierbar sein, aber als designte, thematische
Einstiege (siehe Grundsatz „Hubs sind designte Einstiege"), nicht als
Listen-Übersicht.

### Footer (Desktop: 4 Spalten · Mobile: gleiche Inhalte, gestapelt)

Der Footer spiegelt die Pillars, keine Einzelseiten: keine einzelnen
Service-Angebote (die trägt das Services-Mega-Menü), stattdessen die drei
Branchen (inkl. der geplanten dritten), die Hub-Einstiege und die
Unternehmens-Seiten.

```
BRANCHEN            SERVICES & WISSEN    UNTERNEHMEN         RECHTLICHES
Großhandel          Services             Mit euch wachsen    Impressum
Steuerberater       Tools                Team                Datenschutz
Anwälte (bald)      Blog                 Standorte
                                         Kontakt
```

Der Footer trägt, was nicht in die Hauptnav gehört: **Standorte** (einziger
Einstieg neben SEO) und die Rechtsseiten. ROI-Rechner ist bewusst NICHT im
Footer — er gehört zum Großhandel und ist über dessen Mega-Menü-Spalte und
Hub-Seite verlinkt. Funnel-Seiten tauchen weder in Nav noch Footer auf
(Sackgassen-Prinzip). Mobile: identische Linkliste, Spalten untereinander
gestapelt — kein Inhalt wird mobil weggelassen.

## Verlinkungslogik (von wo → nach wo)

Grundprinzip: **Content sammelt Traffic → reicht ihn an Hubs/Money Pages
weiter → Money Pages konvertieren.** Links fließen „nach oben" zur Conversion,
Money Pages verlinken selbst nur sparsam nach außen.

```
Blog-Artikel ──────────────┬──> passende Content Page (Agent/Workflow/Thema)
   (kontextuell, 2-4 Links)└──> passendes Software-Portrait (services/tools/…)

Software-Portrait ─────────┬──> Services (Hosting, Wartung)
  (services/tools/, CONTENT)└──> Branchen-Content-Pages mit Tool-Bezug

Tool Page ([TOOL], z.B. ───==> contact (CTA nach Nutzung); wird von Content-
  roi-rechner)                 und Money-Pages der eigenen Branche verlinkt,
                               verlinkt selbst kaum nach außen

Content Page ──────────────┬──> ihre Money-Schwester (gleiches Thema!)
  (in Unter-Hubs)          ├──> eigener Unter-Hub hoch
                           ├──> 1-2 verwandte Content Pages (quer)
                           └──> contact (CTA); im Großhandel zusätzlich
                                branchen/grosshandel/roi-rechner

Money Page ────────────────┬──> contact (CTA, primär)
                           └──> max. 1 Link zurück zur Content-Schwester

Unter-Hub ─────────────────┬──> eigene Money + Content Pages (runter)
                           └──> contact (CTA)

Branchen-Hub ──────────────┬──> seine vier Unter-Hubs (runter)
                           └──> contact (CTA)

Standort-Seite ────────────┬──> Services
                           └──> mit-euch-wachsen (Trust)

Funnel-LP ─────────────────==> nur eigenes Formular / Kontakt (keine Ausgänge)
```

### Regeln

1. Jede Content Page verlinkt mindestens 1× auf eine Money Page oder ihren Hub —
   bevorzugt auf die Money-Schwester zum selben Thema.
2. Blog-Artikel verlinken auf „ihre" Branche: Großhandel-Artikel → Großhandel-Welt,
   StB-Artikel → Steuerberater-Welt, Cowork-/Private-AI-Artikel → die Unter-Hubs.
3. Content Pages verlinken quer nur innerhalb der eigenen Branche
   (kein Großhandel ↔ StB).
4. Hubs listen alle Kinder, Kinder verlinken zurück auf den Hub (Breadcrumb-Logik).
5. Funnel-LPs bleiben Sackgassen: kein Nav-Eintrag, keine ausgehenden Streu-Links,
   noindex Pflicht. Technisch durchgesetzt via app/(landingpage-funnel)/layout.tsx
   und tests/technical/funnel-isolation.spec.ts.
6. Neue Seiten zuerst hier einordnen (Typ + Knoten), dann bauen.

## Nächste Schritte (Umsetzung des Zielbilds)

- [x] **Tools → services/tools/ umgezogen:** Ordner verschieben, `legacyRedirects`
      für alle /tools/-URLs, Tools-Button aus der Nav, Tools-Sektion ins
      Services-Mega-Menü.
- [x] **ROI-Rechner → branchen/grosshandel/roi-rechner umgezogen:** inkl.
      Unterseiten, `legacyRedirects`, Nav-Eintrag im Services-Menü entfernen,
      vom Großhandel-Hub verlinken.
- [x] **Großhandel-Unter-Hubs angelegt** (private-ai, ki-assistenten, ki-agenten,
      chatbots, workflows) und die 9 bestehenden Use-Case-Seiten einsortieren
      (2 → ki-agenten, 1 → chatbots, 6 → workflows, jeweils `legacyRedirects`).
- [ ] **Money Pages bauen** — pro Unter-Hub 5, Priorität nach Fokus:
      zuerst Steuerberater (private-ai, claude-cowork), dann Großhandel.
- [ ] **Fehlende Content Pages bauen** — Fragen-Cluster je Unter-Hub („Was ist…",
      „… erfolgreich einführen", Abgrenzung Assistent/Agent) plus Private-AI-
      und Cowork-/Assistenten-Cluster beider Branchen.
- [x] **PDL-Rückbau:** Nav-/Footer-Einträge raus, `branchen/personaldienstleister/`
      + Unterseiten per 301 auf `branchen/` umleiten.
- [x] **Breadcrumbs:** auf allen Seiten ab Ebene 2 eingebaut, inkl.
      BreadcrumbList-Schema (components/layout/breadcrumbs.tsx).
- [ ] **GEO-Hero-Kurzbeschreibung** auf allen Seiten nachrüsten (siehe
      Grundsatz), beginnend mit Hubs und Money Pages.
- [x] **Kannibalisierungs-Onsite-Guard:** tests/seo/duplicate-titles.spec.ts —
      Hard-Fail bei exakt gleichen Titles/H1s auf zwei indexierbaren Seiten,
      Warnung bei gleichen Wörtern in anderer Reihenfolge. Self-contained,
      keine Google-Daten.
- [ ] **Kannibalisierungs-Steuerung (echte Rankings):** macht der
      **Website-Agent** mit seinen SEO-Daten außerhalb dieses Repos — das
      Website-Repo bleibt self-containing, Tests laden keine
      Google-Credentials und keine GSC-Daten. Der Agent gibt konkrete
      Anpassungen ins Repo.
- [x] **GA4 aus der Test-Suite entfernt (self-containing):** Die GA4-Brücke
      ist gekappt, der Link-Equity-Test (lief mangels Daten nie) ist gelöscht;
      Orphan-Detection ist ein reiner Ja/Nein-Check. Traffic-basierte Fragen
      (Link Equity, Priorisierung) übernimmt der Website-Agent.
- [x] **Link-Depth-Test verschärft:** Hard-Fail ab >4 Klicks — keine Seite
      darf mehr als 4 Klicks von der Startseite entfernt sein
      (tests/seo/link-depth.spec.ts).
- [ ] **StB-Blog-Cluster ausbauen** parallel zum Aufbau der Fokus-Branche.
