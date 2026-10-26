# Zielbild: Seitenbaum von bluebatch.io

Alle Seiten der Website, live und geplant, als Baum nach URL. Der Baum ist
die Quelle für die Mindmap [`zielbild.html`](zielbild.html) (im Browser
öffnen). Seitentypen, Status und Grundsätze stehen in
[`grundsaetze.md`](grundsaetze.md).

<!-- zielbild:stand -->
**Stand 2026-10-26:** 393 Seiten im Baum, davon 242 live, 81 unveröffentlicht und 70 geplant.
<!-- /zielbild:stand -->

## So wird der Baum gepflegt

- **Neue Seite: zuerst hier einordnen, dann bauen.** Zeile an der richtigen
  Stelle einfügen, Status `geplant` reicht.
- **Status nicht von Hand pflegen.** `node scripts/generate-zielbild.mjs`
  liest den Status aus `app/` ab, schreibt ihn hier in jede Zeile und
  erzeugt `zielbild.html` neu. Mit `--check` prüft es nur und meldet
  Abweichungen und Seiten, die im Baum fehlen.
- **Zeilenformat:** `` - `segment` TYP · status · Beschreibung ``.
  Das Segment ist der letzte Teil der URL, der volle Pfad ergibt sich aus
  der Einrückung (zwei Leerzeichen je Ebene). Zeilen in `_kursiv_` sind
  Gruppen ohne eigene URL. `` `*` `` steht für alle Unterseiten eines
  Ordners (Blog-Artikel, Städte).
- **Markierungen** am Zeilenende: `#eingefroren` (kein weiterer Ausbau),
  `#future` (bleibt stehen, keine neuen Seiten).

<!-- zielbild:start -->

## Startseite

- `/` HUB · live · Hauptseite Managed Claude: Marke, Einstieg und Verteiler aller Managed-Claude-Seiten (seit 2026-10-14; `/managed-claude` leitet per 308 auf `/`)

## Managed Claude

- `managed-claude/` ORDNER · nur Ordner · Nur URL-Präfix ohne eigene Seite. Im Mega-Menü ist „Managed Claude“ nur Auslöser, die Breadcrumbs blenden das Segment aus
  - _So arbeiten wir_
    - `wie-es-funktioniert` CONTENT · live · Ablauf, Rollen, Verantwortung Kunde und Bluebatch
    - `datenschutz` MONEY · live · Claude Datenschutz und DSGVO: Bedrock EU, § 203 StGB, Unterlagen
    - `onboarding` MONEY · live · Go-live-Roadmap, Einrichtung
    - `coaching/` HUB · live · Schulung, Kanzlei-Handbuch, KI-Kompetenzschulung
      - `paket-m` MONEY · live · 5 PT, 5.000 €, Einrichtung und Outlook zu 100 % angerechnet (`paket-s` leitet per 301 hierher)
      - `paket-l` MONEY · live · 10 PT, 10.000 €, Einrichtung und Outlook zu 100 % angerechnet
    - `preise` MONEY · live · Preise und Kostenrechner
    - `was-kostet-ki` MONEY · live · Kostenfrage allgemein, früher `services/was-kostet-ki`
  - _Angebot, nach Priorität_
    - `claude-app/` HUB · live · Prio 1: Claude für Teams und Enterprise einführen und betreiben
    - `zentrale-steuerung` MONEY · live · Managed Claude Interface: Profile, Ordner-Freigaben, Tools sperren
    - `claude-api/` HUB · live · Prio 2: Claude per API in eigene Systeme und Prozesse
    - `use-cases/` HUB · live · Prio 3: Wir bauen Use Cases auf Claude
      - `ki-agent-kaufen` MONEY · live
      - `ki-agent-kostenlos` CONTENT · live
      - `ki-chatbot-fuer-unternehmen` MONEY · live
    - `governance-compliance/` HUB · live · Governance, Compliance und Guardrails für Claude Enterprise. Jede Unterseite zeigt ihren Preis, bestellt wird per Formular, bezahlt per Rechnung nach der Bestellung
      - `webinar` MONEY · live · Kostenloses Webinar: Governance, Compliance und Guardrails für Claude Enterprise von Anthropic konfigurieren
      - `studie` MONEY · live · Studie Claude Enterprise Compliance: geladener Kreis, Fragebogen über 6 Wochen, Teilnahme 1.000 €, Ergebnisse inklusive
      - `schulung` MONEY · live · 850 € pro Teilnehmer oder 7.500 € pro Gruppe eines Unternehmens. Keyword-Abgrenzung zu `coaching/` („ki schulung“) beachten
  - _Integrationen_
    - `integrationen/` HUB · live · Claude an die Systeme der Kunden anbinden
      - `datev` MONEY · live · Claude und DATEV
      - `microsoft` MONEY · live · Claude und Microsoft 365 (Outlook, Teams, SharePoint)
      - `websearch` MONEY · live · Claude mit Websuche
      - `mcp-server-erstellen` MONEY · live · Eigene MCP-Server, früher `services/mcp-server-erstellen`
  - _Einstiege aus der Suche_
    - `chatgpt-alternative` LANDING · geplant · ChatGPT-Alternative für Unternehmen, auf DSGVO zugespitzt (Lücke aus der [Keyword-Map](keyword-map.md))
  - _Nebenthema_
    - `weitere-tools/` HUB · live · Software-Ökosystem, Ziel kontextueller Links aus Branchen, Angebot und Blog
      - `n8n/` HUB · live · n8n als eigenes Thema, die früheren n8n-Services darunter
        - `n8n-hosting` MONEY · live
        - `workflow-wartung` MONEY · live
        - `schulungen` MONEY · live
        - `custom-nodes` MONEY · live
        - `performance-scaling` MONEY · live
        - `zertifizierung` MONEY · live · auch Trust
      - `make` CONTENT · live · Automation-Tool
      - `zapier` CONTENT · live · Automation-Tool
      - `power-automate` CONTENT · live · Automation-Tool
      - `activepieces` CONTENT · live · Automation-Tool
      - `pipedream` CONTENT · live · Automation-Tool
      - `tray-io` CONTENT · live · Automation-Tool
      - `uipath` CONTENT · live · Automation-Tool
      - `workato` CONTENT · live · Automation-Tool
      - `freshworks` CONTENT · live · Automation-Tool
      - `navision` CONTENT · live · Großhandel-Tool
      - `easybill` CONTENT · live · Großhandel-Tool
      - `microtech-bueroplus` CONTENT · live · Großhandel-Tool
      - `ebootis/` HUB · live · e.bootis ERP: Tool-Portrait und Integrations-Hub
        - `ki-assessment` MONEY · live · 500 € Festpreis
        - `n8n-integration` MONEY · live
        - `chatbot-integration` MONEY · live
        - `mcp-server` MONEY · live
        - `openengine-schnittstellen` CONTENT · live
        - `ki-anwendungsfaelle` CONTENT · live
        - `edi-automatisierung` CONTENT · live
  - _Geparkt, Zuordnung offen_
    - `digitale-rechnungsverarbeitung` CONTENT · unveröffentlicht · Aus der Repositionierung geparkt
    - `dokumentenmanagement-software` CONTENT · unveröffentlicht · Aus der Repositionierung geparkt
    - `ki-chatbot-kostenlos` CONTENT · unveröffentlicht · Aus der Repositionierung geparkt
    - `lieferantenmanagement` CONTENT · unveröffentlicht · Aus der Repositionierung geparkt
    - `sap-mcp-server` CONTENT · unveröffentlicht · Aus der Repositionierung geparkt
    - `software-angebotserstellung` CONTENT · unveröffentlicht · Aus der Repositionierung geparkt
    - `warenwirtschaft` CONTENT · unveröffentlicht · Aus der Repositionierung geparkt

## Branchen

- `branchen/` HUB · live · Verteiler nach Zielgruppe. Vorerst unverändert, später Fokus „Was kann ich mit Claude umsetzen?“
  - `grosshandel/` HUB · live · Branchen-Hub
    - `private-ai/` HUB · live · „Wo läuft die KI?“ #eingefroren
      - `implementierung-open-webui` MONEY · geplant
      - `implementierung-vllm` MONEY · geplant
      - `managed-private-ai` MONEY · geplant
      - `private-ai-schulung` MONEY · geplant
      - `was-kostet-private-ai` MONEY · geplant · Preise und Dauer
      - `was-ist-private-ai` CONTENT · geplant
      - `lokale-llms-fuer-produktdaten` CONTENT · geplant
      - `dsgvo-ki-im-grosshandel` CONTENT · geplant
      - `private-ai-vs-cloud-ki` CONTENT · geplant
      - `private-ai-erfolgreich-einfuehren` CONTENT · geplant
    - `ki-assistenten/` HUB · live · „KI als Werkzeug fürs Team“: Claude, ChatGPT, Copilot
      - `claude-einfuehrung` MONEY · geplant
      - `chatgpt-enterprise-einfuehrung` MONEY · geplant
      - `copilot-einfuehrung` MONEY · geplant
      - `ki-assistenten-schulung` MONEY · geplant
      - `was-kosten-ki-assistenten` MONEY · geplant · Preise und Lizenzen
      - `was-ist-ein-ki-assistent` CONTENT · geplant
      - `assistent-oder-agent` CONTENT · geplant · Abgrenzungsseite
      - `claude-vs-chatgpt-vs-copilot` CONTENT · geplant
      - `ki-assistenten-dsgvo` CONTENT · geplant
      - `ki-assistenten-erfolgreich-einfuehren` CONTENT · geplant
    - `ki-agenten/` HUB · live · „KI als digitaler Mitarbeiter“: Agenten-Katalog
      - `angebots-bot-implementierung` MONEY · geplant
      - `invoice-bot-implementierung` MONEY · geplant
      - `ki-agenten-workshop` MONEY · geplant
      - `ki-agenten-betrieb` MONEY · geplant
      - `was-kostet-ein-ki-agent` MONEY · geplant · Preise und Dauer
      - `angebots-bot` CONTENT · live · Katalog
      - `invoice-bot` CONTENT · live · Katalog
      - `was-ist-ein-ki-agent` CONTENT · live
      - `ki-agent-vs-workflow` CONTENT · geplant · Abgrenzung
      - `ki-agenten-erfolgreich-einfuehren` CONTENT · geplant
    - `chatbots/` HUB · live · KI-Chatbots für Kunden und Website. Eigener Hub, weil „Chatbot“ eigenes Suchvolumen hat
      - `ki-chatbot-implementierung` MONEY · live
      - `chatbot-erp-anbindung` MONEY · geplant · Navision, easybill
      - `chatbot-betrieb` MONEY · geplant
      - `chatbot-workshop` MONEY · geplant
      - `was-kostet-ein-chatbot` MONEY · live · Preise und Dauer
      - `ki-chatbot-grosshandel` CONTENT · live · Katalog
      - `was-ist-ein-ki-chatbot` CONTENT · live
      - `chatbot-vs-ki-agent` CONTENT · geplant · Abgrenzung
      - `chatbot-dsgvo` CONTENT · unveröffentlicht
      - `chatbot-erfolgreich-einfuehren` CONTENT · geplant
    - `workflows/` HUB · live · „Fest automatisierte Prozesse“: Workflow-Katalog #future
      - `auftragserfassung-implementierung` MONEY · geplant
      - `rechnungspruefung-implementierung` MONEY · geplant
      - `easybill-automation-implementierung` MONEY · geplant
      - `workflow-audit-grosshandel` MONEY · geplant
      - `was-kostet-workflow-automatisierung` MONEY · geplant · Preise und Dauer
      - `auftragserfassung` CONTENT · live · Katalog
      - `bestellabwicklung` CONTENT · live · Katalog
      - `lagerverwaltung` CONTENT · live · Katalog
      - `3-wege-rechnungspruefung` CONTENT · live · Katalog
      - `zertifikatspruefung-lieferanten` CONTENT · live · Katalog
      - `ai-automation-with-easybill` CONTENT · live · Katalog
    - `roi-rechner/` TOOL · live · Conversion-Assist des Großhandel-Hubs
      - `document` TOOL · live · Rechner Dokumentenverarbeitung
      - `service-requests` TOOL · live · Rechner Service-Anfragen
      - `social-media-ads` TOOL · live · Rechner Social-Media-Ads
  - `steuerberater/` HUB · live · Branchen-Hub, Fokus-Branche
    - `private-ai/` HUB · live · „Wo läuft die KI?“ #eingefroren
      - `implementierung-open-webui` MONEY · geplant
      - `implementierung-vllm` MONEY · geplant
      - `managed-private-ai` MONEY · geplant
      - `dsgvo-203-audit` MONEY · geplant
      - `was-kostet-private-ai` MONEY · geplant · Preise und Dauer
      - `ki-steuerberater-62a-stberg` MONEY · live · Vertragskette und Gateway nach § 62a StBerG, Schwesterseite zu `anwaelte/ki-anwaltskanzlei-43e-brao`
      - `was-ist-private-ai` CONTENT · geplant
      - `open-webui-fuer-kanzleien` CONTENT · geplant
      - `lokale-llms-fuer-kanzleien` CONTENT · geplant
      - `paragraph-203-und-ki` CONTENT · geplant
      - `private-ai-erfolgreich-einfuehren` CONTENT · geplant
      - `kanzlei-wissensdatenbank` CONTENT · live · Durchsuchbares Kanzlei-Wissen inklusive Call-Aufzeichnungen
    - `claude-cowork/` HUB · live · „KI als Werkzeug fürs Team“, § 203-konform
      - `implementierung-claude-cowork` MONEY · geplant
      - `claude-cowork-schulung` MONEY · geplant
      - `claude-cowork-managed` MONEY · geplant
      - `claude-cowork-datev-integration` MONEY · geplant
      - `was-kostet-claude-cowork` MONEY · geplant · Preise und Dauer
      - `kanzlei-skills-entwicklung` MONEY · live · Fachwissen als KI-Skills kodieren lassen
      - `was-ist-claude-cowork` CONTENT · geplant
      - `claude-cowork-use-cases` CONTENT · geplant
      - `claude-cowork-vs-copilot` CONTENT · geplant
      - `claude-cowork-dsgvo-203` CONTENT · geplant
      - `claude-cowork-erfolgreich-einfuehren` CONTENT · geplant
      - `was-sind-ki-skills` CONTENT · live · Inklusive Mandanten-Markdown je Mandant
      - `gutachten-mit-ki` CONTENT · live · Gutachten und verbindliche Auskünfte, rund 3 Stunden statt Tagen
      - `pruef-skills` CONTENT · live · Provisionsanspruch, Arbeitszeugnis, Bauträger und AGB
      - `begleitschreiben-veranlagung` CONTENT · live
      - `diktat-zu-text` CONTENT · live · Spracheingabe zur fertigen Mail, rund 150 Stunden im Jahr
    - `ki-agenten/` HUB · live · „KI als digitaler Mitarbeiter“: Agenten-Katalog als Kachel-Grid
      - `mail-agent-implementierung` MONEY · geplant
      - `mandantenkommunikation-implementierung` MONEY · geplant
      - `jahresabschluss-agent-implementierung` MONEY · geplant
      - `ki-agenten-workshop` MONEY · geplant
      - `was-kostet-ein-ki-agent` MONEY · geplant · Preise und Dauer
      - `mail-agent` CONTENT · live · Katalog
      - `mandantenkommunikation` CONTENT · live · Katalog
      - `jahresabschluss-ki` CONTENT · live · Katalog
      - `einspruch-agent` CONTENT · live · Katalog: Einspruch mit Recherche und Schriftsatz, 2 statt 8 Stunden
      - `bwa-analyse-agent` CONTENT · live · Katalog: BWA-Analyse und Steuer-Forecast
      - `beratungsanlaesse-agent` CONTENT · live · Katalog: Anlässe aus Mandantendaten, Vorauszahlungs-Check
      - `mandanten-chatbot` CONTENT · live · Katalog: Support-Bot mit Kanzlei-Wissensbasis
      - `was-ist-ein-ki-agent` CONTENT · geplant
      - `ki-agenten-erfolgreich-einfuehren` CONTENT · geplant
    - `workflows/` HUB · live · „Fest automatisierte Prozesse“: Workflow-Katalog #future
      - `belegpruefung-implementierung` MONEY · geplant
      - `e-rechnung-implementierung` MONEY · geplant
      - `datev-jira-sync-implementierung` MONEY · geplant
      - `workflow-audit-kanzlei` MONEY · geplant
      - `was-kostet-workflow-automatisierung` MONEY · geplant · Preise und Dauer
      - `fibu-monatsreview-implementierung` MONEY · live
      - `belegpruefung` CONTENT · live · Katalog
      - `dokumentenverarbeitung` CONTENT · live · Katalog
      - `datev-jira-task-orchestration` CONTENT · live · Katalog
      - `e-rechnung-verarbeitung` CONTENT · live · Katalog
      - `mandanten-onboarding` CONTENT · live · Katalog
      - `fibu-monatsreview` CONTENT · live · Katalog: Buchungen prüfen per MCP und DATEV Connect, inklusive Kreditoren- und Ordnungsmäßigkeitsprüfung
      - `anlage-v-mit-ki` CONTENT · live
      - `buchungsstapel-per-ki` CONTENT · live
      - `bankabgleich-automatisieren` CONTENT · live
      - `bewirtungsbelege-per-ki` CONTENT · live · Auch handschriftlich
      - `beleg-upload-automatisieren` CONTENT · live · GetMyInvoices, DUO und lexware je Mandant
      - `honorarprozess-automatisieren` CONTENT · live · Mahnwesen, Serienrechnung, SEPA
      - `kassenmeldepflicht` CONTENT · live · Formular, XML, ELSTER-Import
      - `lohnprozess-automatisieren` CONTENT · live · Bis White-Label
    - `kanzlei-organisation/` HUB · live · Prozesse, Handbuch, internes Onboarding: die Kanzlei als Betrieb
      - `kanzlei-digitalisierungs-workshop` MONEY · live
      - `kanzleihandbuch-aufbauen` CONTENT · live · Inklusive Muster-Vorlage
      - `prozessdoku-mit-ki` CONTENT · live · Screen-Recording zum Artikel, senkt die Fehlerquote
      - `mitarbeiter-onboarding-digital` CONTENT · live · DATEV-fit in einer Woche
      - `rollenbasierte-kanzlei` CONTENT · live · Rollen und Dashboards
      - `ticketsystem-kanzlei` CONTENT · live · Statt Mail-Chaos
  - `anwaelte/` HUB · live · Dritte Fokus-Branche, Struktur wie Steuerberater. Zwei Kanzleisoftwares im Fokus: actaport (REST-API) und RA-MICRO (keine offene REST-API, Anbindung über Ablage, Export, beA)
    - `actaport-cloud-connector` CONTENT · live · actaport-Anbindung (REST-API, n8n, beA) erklärt
    - `actaport-cloud-connector-implementierung` MONEY · live · Connector zu actaport bauen
    - `ki-anwaltskanzlei-43e-brao` MONEY · live · Vertragskette und Gateway nach § 43e BRAO, Schwesterseite zu `steuerberater/private-ai/ki-steuerberater-62a-stberg`. Slug bewusst gleich wie die Pexon-Seite (Partner-Cluster)
    - `private-ai/` HUB · live · „Wo läuft die KI?“ #eingefroren
      - `private-ai-implementierung` MONEY · live · Umgebung bauen und übergeben
      - `kanzlei-wissensdatenbank` CONTENT · live · RAG auf eigenen Schriftsätzen
    - `claude-cowork/` HUB · live · Verwaltete KI fürs Team
      - `schriftsatz-entwuerfe` MONEY · live · Rohling aus der Aktenlage
      - `rechtsrecherche-mit-ki` CONTENT · live · Einstieg mit Fundstellen
    - `ki-agenten/` HUB · live · Vorschlag, Prüfung, Ausführung
      - `posteingang-agent` MONEY · live · beA, Mail und Scan zuordnen
      - `fristen-agent` MONEY · live · Fristen erkennen und rechnen
    - `workflows/` HUB · live · Feste Abläufe mit n8n #future
      - `ra-micro-anbindung` MONEY · live · Ohne offene API anbinden
      - `bea-nachrichten-automatisieren` MONEY · live · Eingang verarbeiten

## Blog

- `blog/` HUB · live · Blog-Übersicht
  - `*` CONTENT · 79 live, 6 unveröffentlicht · Blog-Artikel sind immer Content und werden hier nicht einzeln gepflegt

## Standorte

- `standorte/` HUB · live · Lokales SEO, nur über den Footer verlinkt
  - `*` LANDING · 67 unveröffentlicht, 13 live · Eine Seite je Stadt, bis zu 6 Keyword-Aliasse je Stadt. Unveröffentlichte Städte haben `publish: false`

## Funnel-Landingpages

- _Ads-Einstiege: Minimal-Layout, noindex, nicht in der Sitemap_
  - `sensitiv-ai` LANDING · live, noindex · Passt zum Private-AI-Hub
  - `sensitiv-ai-2` LANDING · live, noindex · Vergleichsfassung: Handy zuerst, Portal, Startpaket 5.000 €
  - `claude-insolvenzverwalter` LANDING · live, noindex · Private Claude für Insolvenzkanzleien (Meta iv-run-0001)
  - `claude-ma-private-equity` LANDING · live, noindex · Private Claude für M&A, PE und VC (Meta ma-run-0001)
  - `claude-cowork-schulung` LANDING · live, noindex · Passt zum Cowork-Hub, branchenoffen, 399 €
  - `impressum-funnel` SYS · live, noindex · Impressum im Funnel-Layout
  - `datenschutz-funnel` SYS · live, noindex · Datenschutz im Funnel-Layout

## Unternehmen

- `contact` MONEY · live · Ziel aller Conversion-Ketten
- `mit-euch-wachsen` CONTENT · live · Prozess und Positionierung (Trust)
- `team` CONTENT · live · Trust
- `karriere` CONTENT · live · Trust und Recruiting. Stellen aus `lib/career-jobs.ts`, Bewerbung nur per Formular (`/api/karriere` an das Google Sheet „Bewerbungen“, nicht HubSpot)

## Rechtliches

- `impressum` SYS · live, noindex
- `datenschutz` SYS · live, noindex

<!-- zielbild:end -->
