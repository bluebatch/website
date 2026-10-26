# Roadmap der Site-Struktur

Was am Zielbild noch offen ist und was schon umgesetzt wurde. Welche
einzelnen Seiten noch fehlen, zeigt das [Zielbild](zielbild.md) mit dem
Status `geplant` (in der Mindmap über den Filter „geplant“).

## Offen

### Managed Claude

- [ ] **Seiten aus der Keyword-Map:** `managed-claude/chatgpt-alternative`
      (im Zielbild als geplant), Blog „claude skills“ und Blog „Claude Pro,
      Team, Enterprise“. Details in der [Keyword-Map](keyword-map.md).
- [ ] **Gerüstseiten schärfen:** claude-app/, claude-api/, use-cases/ und
      integrationen/ sind live, aber noch dünn. Unter claude-app/ und
      claude-api/ fehlen eigene Unterseiten.
- [ ] **Weitere Basisseiten unter „So arbeiten wir“**, zum Beispiel Betrieb
      und Support.
- [ ] **Governance & Compliance:** Termin und Dauer des Webinars, Dauer und
      Format der Schulung nachtragen, sobald festgelegt. Keyword-Recherche
      für den Hub und die drei Seiten.
- [ ] **Geparkte Seiten** unter `managed-claude/_…` (sieben Stück aus der
      Repositionierung) einem Hub zuordnen oder löschen.
- [ ] **Keyword-Konflikt „aws bedrock claude“** zwischen wie-es-funktioniert
      und claude-api auflösen.

### Branchen

- [ ] **Branchen-Hubs** auf „Was kann ich mit Claude umsetzen?“ ausrichten.
      Private AI bleibt eingefroren, Workflows Future.
- [ ] **Money Pages bauen,** fünf pro Unter-Hub. Reihenfolge: zuerst
      Steuerberater (claude-cowork), dann Großhandel.
- [ ] **Fehlende Content Pages** je Unter-Hub: „Was ist …“, „… erfolgreich
      einführen“, Abgrenzung Assistent und Agent.
- [ ] **Steuerberater-Blogcluster** parallel zum Aufbau der Fokus-Branche
      ausbauen.

### Querschnitt

- [ ] **GEO-Kurzbeschreibung** auf allen Seiten nachrüsten, zuerst Hubs und
      Money Pages (Vorgabe in den [Grundsätzen](grundsaetze.md)).
- [ ] **Kannibalisierung nach echten Rankings** steuert der Website-Agent
      außerhalb dieses Repos und gibt konkrete Änderungen ins Repo.

## Erledigt

### Repositionierung auf Claude Managed Service Provider (Oktober 2026)

- [x] **Umbau umgesetzt** (2026-10-01): Seiten verschoben, Redirects in
      `next.config.ts`, Navigation, Footer und Handy-Menü,
      Breadcrumb-Labels, Startseite umpositioniert, Gerüstseiten angelegt.
- [x] **`managed-claude/` angelegt** mit den Basisseiten (wie-es-funktioniert,
      onboarding, preise), den drei Angebots-Hubs (claude-app, claude-api,
      use-cases) und dem Hub integrationen/ (datev, microsoft, websearch).
- [x] **`services/` nach `managed-claude/weitere-tools/` umgezogen:**
      n8n-Services unter `weitere-tools/n8n/`, Tool-Porträts unter
      `weitere-tools/`, alle alten URLs als `legacyRedirects` (301).
- [x] **Interne Links** auf `services/…` im ganzen Repo auf die neuen URLs
      umgestellt, nicht nur über Redirects.
- [x] **Keywords eingebaut** laut Keyword-Map: Title, H1, GEO-Summary und FAQ
      je Seite (2026-10-13).
- [x] **Design-Runde Managed Claude** (2026-10-13): farbige Nav-Icons mit
      Markenlogos, eigene Heroes je Seite, Mock-Screenshots
      (`components/mockups/`), Managed Claude Interface mit allen
      Portal-Funktionen, Coaching als Paket M (5 PT) und Paket L (10 PT) mit
      voller Anrechnung von Einrichtung und Outlook Connector,
      Token-Kundenpreise aus dem Preisblatt des Gateways.
- [x] **Startseite = Managed-Claude-Hub** (2026-10-14): Inhalte des Hubs auf
      `/`, `/managed-claude` per 308 auf `/`, Mega-Menü-Auslöser ohne Link,
      Breadcrumbs ohne das Segment. Keyword-Aliasse der alten Startseite
      (`/n8n-automatisierung`, `/ki-agentur`, `/ai-agentur`) hängen am
      n8n-Hub. Kundenlogos als Logo-Kacheln; Bewertungskarten mit Zitat
      erst, wenn Kunden ihren Wortlaut freigeben.
- [x] **`managed-claude/datenschutz`** gebaut (2026-10-14).
- [x] **Governance & Compliance** gebaut (2026-10-26): Hub mit Webinar
      (kostenlos), Studie (1.000 €) und Schulung (850 € bzw. 7.500 €), Preise
      sichtbar über `PriceCard`, Eintrag im Mega-Menü unter „Angebot“.
- [x] **Doku neu aufgeteilt** (2026-10-26): `site-structure.md` in
      `docs/site-structure/` zerlegt, Zielbild mit automatischem Status und
      Mindmap (`zielbild.html`).

### Vorher (bis Juli 2026)

- [x] **Tools nach `services/tools/`** umgezogen (heute
      `managed-claude/weitere-tools/`), Tools-Button aus der Navigation.
- [x] **ROI-Rechner nach `branchen/grosshandel/roi-rechner`** umgezogen,
      vom Großhandel-Hub verlinkt.
- [x] **Großhandel-Unter-Hubs angelegt** (private-ai, ki-assistenten,
      ki-agenten, chatbots, workflows) und die neun bestehenden
      Use-Case-Seiten einsortiert.
- [x] **Personaldienstleister zurückgebaut:** Navigation und Footer
      bereinigt, `branchen/personaldienstleister/` per 301 auf `branchen/`.
- [x] **Breadcrumbs** ab Ebene 2 auf allen Seiten, mit
      BreadcrumbList-Schema.
- [x] **Kannibalisierungs-Wächter** `tests/seo/duplicate-titles.spec.ts`.
- [x] **GA4 aus der Test-Suite entfernt:** Die Test-Suite ist
      self-contained, der Link-Equity-Test ist gelöscht, die
      Orphan-Erkennung ist ein reiner Ja-Nein-Check.
- [x] **Klicktiefe verschärft:** Fehler ab mehr als vier Klicks
      (`tests/seo/link-depth.spec.ts`).

## Entscheidungen

### Einsortierung der 50 Steuerberater-Use-Cases

Quelle: `strategy/steuerberater/steuerberater-50-cases.md` im
übergeordneten Repo `bluebatch_sales`. Alle 50 Cases sind eingeordnet:

- **28 Cases wurden zu eigenen Seiten** in den Steuerberater-Hubs
  (private-ai +1, claude-cowork +6, ki-agenten +4, workflows +10,
  kanzlei-organisation +7). Eng verwandte Cases teilen sich bewusst eine
  Seite, etwa die drei Prüf-Skills, Mahnwesen und Serienrechnung, Rollen
  und Dashboards.
- **Fünfter Steuerberater-Hub `kanzlei-organisation/`** nach dem
  Skalierungsprinzip: Kanzleihandbuch, Prozessdoku, internes Onboarding.
  Eigenes Keyword-Cluster („Kanzlei als Betrieb“), das in keinen der vier
  KI-Hubs passt.
- **8 Cases decken bestehende Seiten ab** und werden dort als Abschnitte
  ergänzt: Belegerfassung und Kontierung, Reverse-Charge- und
  Duplikat-Erkennung (belegpruefung bzw. dokumentenverarbeitung),
  Beleg-Nachforderung und Mandantenportal (mandantenkommunikation),
  30-Tage-Onboarding und Vorab-Kurs (mandanten-onboarding), E-Rechnung
  (e-rechnung-verarbeitung), allgemeine Workflow-Automation mit n8n, Zapier
  oder Make (Workflows-Hub).
- **6 Vertriebs- und Marketing-Cases gehen in den Blog,** nicht in die
  Hubs: Setter-Closer-Vertrieb, YouTube-Funnel, Social Recruiting,
  Positionierung, Value-Based Pricing, Lead-Magnet. Das ist nicht unser
  Produktangebot (generische, beratende Suchintention gehört in den Blog),
  als Artikel zahlen sie trotzdem aufs Steuerberater-Cluster ein.
