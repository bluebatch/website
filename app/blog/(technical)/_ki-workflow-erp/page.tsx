import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Link from "next/link";
import Typo from "@/components/ui/typo";
import DataTable from "@/components/ui/data-table";
import { FaqContainer } from "@/components/ui/faqs";
import { BlogImage, Separator, BlogLayout, BlogHero } from "@/components/blog";

export const metaCustom: BlogMeta = {
  slug: "ki-workflow-erp",
  author: "Max Hänsel",
  date: "2026-06-09",
  image: "/blog/ki-workflow-erp/hero.png",
  tags: ["ki", "automatisierung"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title:
    "KI-Workflows für ERP: SAP, Datev und Business Central intelligent automatisieren",
  description:
    "Wie LLMs und AI-Agents Belege erkennen, Aufträge klassifizieren und Stammdaten anreichern und das Ergebnis sauber ins SAP, Datev oder Business Central zurückschreiben.",
  openGraph: {
    title:
      "KI-Workflows für ERP-Systeme: SAP, Datev und Business Central",
    description:
      "Sieben praxiserprobte Szenarien, Architektur-Stack, ERP-spezifische APIs, GoBD-Compliance und ein 4-Wochen-Pilot-Plan für den deutschen Mittelstand.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/ki-workflow-erp/hero.png",
        width: 1200,
        height: 630,
        alt: "KI-Workflow im ERP-Kontext: Belegerkennung mit Buchungsvorschlag in einer deutschen Mittelstands-Buchhaltung",
      },
    ],
  },
  alternates: {
    canonical: "/blog/ki-workflow-erp",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          KI-Workflows für ERP-Systeme: SAP, Datev und Business Central
          intelligent automatisieren
        </BlogHero.Headline>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>14 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-06-09">
            9. Juni 2026
          </BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/ki-workflow-erp/hero.png"
          alt="KI-Workflow im ERP-Kontext mit Belegerkennung und Buchungsvorschlag in einer deutschen Mittelstands-Buchhaltung"
        />
      </BlogHero>

      <BlogLayout>
        <BlogLayout.Content>
          <div>
            <Typo.Paragraph>
              ERP-Automatisierung ist nicht neu. Schnittstellen, Mappings und
              regelbasierte Workflows verbinden seit Jahren SAP, Datev und
              Business Central mit Webshops, CRM und DMS. Was 2026 hinzukommt:
              ein LLM oder ein AI-Agent sitzt zwischen Eingangsdaten und ERP
              und trifft eine Entscheidung, eine Extraktion oder eine
              Klassifikation. Das ERP bleibt das System of Record. Die KI ist
              das Hirn davor.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Dieser Guide nimmt die Perspektive des deutschen Mittelstands
              (50 bis 1.000 Mitarbeitende) ein und beantwortet sieben Fragen,
              die wir in fast jedem Pilotprojekt hören: Wo lohnt sich KI im
              ERP-Kontext wirklich? Wie sieht ein realistischer Stack aus?
              Welche Schnittstelle nimmt man für SAP, Business Central oder
              Datev? Was kostet das? Wie wird das Ganze GoBD-konform? Was
              passiert mit dem Betriebsrat? Und wie startet man ohne ein
              Sechs-Monats-Beratungsprojekt?
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wer einen breiteren Überblick zur regelbasierten
              ERP-Automatisierung sucht, findet ihn im{" "}
              <Link
                href="/blog/erp-workflows-automatisieren"
                className="text-primary-600 hover:underline"
              >
                Guide zu ERP-Workflows mit n8n
              </Link>
              . Dieser Artikel geht einen Schritt weiter und fokussiert
              ausschließlich auf Workflows, in denen ein LLM eine
              Entscheidung trifft.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="einsatzszenarien">
              Sieben Szenarien, in denen KI und ERP zusammenwirken
            </Typo.H2>
            <Typo.Paragraph>
              Nicht jeder ERP-Prozess profitiert von KI. Die folgenden sieben
              Szenarien haben sich 2026 als robust und mit überschaubarem
              Setup wirtschaftlich erwiesen. Reihenfolge nach Reifegrad und
              ROI-Sicherheit, beginnend mit dem Use Case, der die geringste
              Einstiegshürde hat.
            </Typo.Paragraph>

            <Typo.H3>1. Belegerkennung und automatische Buchung</Typo.H3>
            <Typo.Paragraph>
              Eingehende Rechnungen werden per E-Mail oder Portal angeliefert,
              ein LLM extrahiert Felder, schlägt Kontierung, Steuerschlüssel
              und Kostenstellen vor und schreibt die Buchung als Vorschlag in
              Datev, SAP oder Lexware. Wo klassische Template-OCR scheitert
              (jeder Lieferant hat ein eigenes Layout), versteht das LLM den
              Beleg layoutfrei. Praxisberichte zeigen Dunkelbuchungsquoten von
              60 bis 80 Prozent nach sechs bis zwölf Monaten. Bei 5.000
              Eingangsrechnungen pro Jahr bedeutet das eine Ersparnis von
              etwa 400 Mannstunden, ausführliche Zahlen weiter unten im
              ROI-Abschnitt.
            </Typo.Paragraph>

            <Typo.H3>2. Auftrags-Klassifikation eingehender Bestellungen</Typo.H3>
            <Typo.Paragraph>
              30 bis 60 Prozent der B2B-Bestellungen kommen weiterhin per
              E-Mail mit Freitext, PDF-Anhang oder Excel-Liste. Ein LLM
              klassifiziert Mail-Eingänge (Bestellung, Storno, Anfrage,
              Reklamation), extrahiert Positionen, matcht Artikel über
              Embedding-Suche gegen den ERP-Stamm und legt bei hoher
              Confidence direkt einen Sales Order in SAP Business One oder
              Business Central an. Bei Unsicherheit übernimmt der Innendienst.
              Ergebnis: 5 bis 15 Minuten Bearbeitungszeit pro Auftrag
              entfallen, ein Tag schnellere Lieferfähigkeit.
            </Typo.Paragraph>

            <Typo.H3>3. Bestandsprognose und Demand Forecasting</Typo.H3>
            <Typo.Paragraph>
              Hier ist das LLM nicht der Hauptakteur. Klassisches ML (XGBoost,
              Prophet, LSTM) ist treffsicherer für reine Zeitreihen. Der
              LLM-Layer kommt ins Spiel, wenn externe Faktoren wie Wetter,
              News oder Branchen-Events in das Forecast-Modell strukturiert
              eingespielt werden. Ergebnis im ERP: realistischere
              Mindestbestände, weniger Sicherheitspuffer, fundiertere
              Bestellvorschläge in der Disposition. Typische Effekte: 10 bis
              25 Prozent reduzierte Sicherheitsbestände, 5 bis 15 Prozent
              weniger Out-of-Stocks.
            </Typo.Paragraph>

            <Typo.H3>4. Lieferanten-Risiko-Klassifikation</Typo.H3>
            <Typo.Paragraph>
              Ein Crawler holt täglich Nachrichten zu allen aktiven
              Lieferanten, ein LLM klassifiziert nach Schweregrad
              (Insolvenzantrag, Sanktionierung, Werksbrand, CEO-Wechsel,
              Quartalszahlen) und schreibt einen Risiko-Score in ein
              Custom-Feld im Vendor-Master. Der Einkauf bekommt nur Alerts,
              wenn ein Schwellenwert überschritten wird. Bei
              Single-Source-Lieferanten kann ein vermiedener Produktionsstopp
              den Business Case allein tragen.
            </Typo.Paragraph>

            <Typo.H3>5. Stammdaten-Anreicherung über Web und LLM</Typo.H3>
            <Typo.Paragraph>
              Lückenhafte CRM- oder ERP-Datensätze (Branche, NACE-Code,
              Mitarbeiterzahl, USt-ID, Handelsregister) werden automatisch
              ergänzt. Ein Web-Scraper holt Firmenwebsite und
              Handelsregister-Auszug, ein LLM extrahiert strukturierte
              Felder und schreibt sie in den ERP-Geschäftspartner. 10.000
              Stammdatensätze sind so in zwei Wochen statt sechs Monaten
              angereichert, mit besserer Segmentierbarkeit für Marketing
              und Vertrieb.
            </Typo.Paragraph>

            <Typo.H3>6. Reklamationsanalyse mit Sentiment und Routing</Typo.H3>
            <Typo.Paragraph>
              Eingehende Service-Mails werden vom LLM klassifiziert
              (Reklamation, Anfrage, Lob), nach Sentiment bewertet und nach
              Thema sortiert (Produktqualität, Lieferung, Rechnung). Ein
              Ticket wird im ERP-Service-Modul oder CRM angelegt, mit
              automatischer Priorität und Zuweisung. Ein dokumentierter
              Mittelstandsfall (Fuchs Lubricants mit Esker): 84 Prozent
              Auto-Klassifikation, Antwortzeit von 24 bis 48 Stunden auf 6
              Stunden, zwei FTE Service-Backoffice auf 1,2 FTE reduziert.
            </Typo.Paragraph>

            <Typo.H3>7. Self-Service-Status-Anfragen via RAG-Chatbot</Typo.H3>
            <Typo.Paragraph>
              Innendienst und Außendienst fragen den Bot „Wie ist der
              Lieferstatus für Auftrag 12345?" oder „Wie viele Stück Artikel
              4711 haben wir noch?" Der Bot übersetzt die Frage in eine
              Function-Calling-Abfrage gegen das ERP-API, ruft die aktuelle
              Antwort ab und antwortet natürlichsprachlich. Wichtig: Die
              ERP-Berechtigungen werden weitergereicht, der Bot sieht nicht
              mehr als der Nutzer dürfte. 70 bis 90 Prozent der
              Routineanfragen erledigt der Bot in Sekunden statt die zwei bis
              fünf Minuten Innendienst-Recherche pro Anfrage.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="architektur-stack">
              Architektur eines KI-ERP-Workflows
            </Typo.H2>
            <Typo.Paragraph>
              Es gibt keinen One-Stack-fits-all, aber die Bausteine sind
              universell. Ein typischer Workflow durchläuft sechs Layer.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/ki-workflow-erp/architektur-stack.png"
              alt="Architektur-Diagramm eines KI-ERP-Workflows mit Trigger, Vorverarbeitung, LLM-Layer, Orchestrator, Confidence-Gate und ERP-Anbindung"
              width={1200}
              height={630}
            />

            <Typo.H3>Trigger und Vorverarbeitung</Typo.H3>
            <Typo.Paragraph>
              Trigger sind in der Praxis E-Mail-Postfächer (IMAP, Microsoft
              Graph), Webhooks aus Webshop oder EDI-Gateway, Datei-Drops auf
              SFTP oder OneDrive, oder ein Scheduler (alle 5 bis 15
              Minuten). Business Central kann selbst Webhooks pushen über
              die Subscriptions-API mit validationToken-Handshake. Vor dem
              LLM steht oft eine OCR-Stufe (Azure Document Intelligence,
              AWS Textract oder lokales Tesseract plus LayoutLM), die
              PDF-Anhänge in Volltext und strukturierte Felder zerlegt.
            </Typo.Paragraph>

            <Typo.H3>LLM-Layer</Typo.H3>
            <Typo.Paragraph>
              Vier Optionen stehen 2026 zur Wahl: Cloud-LLMs (Claude Sonnet
              4.6, GPT-5.4, Gemini, Mistral Le Chat), europäische Modelle
              (Mistral Large, Aleph Alpha Luminous), lokal gehostete
              Open-Weight-Modelle (Llama 3.3 70B via Ollama auf eigener
              GPU-Hardware), oder ein Hybrid-Setup über ein AI-Gateway wie
              LiteLLM oder Portkey. Empfehlung für die meisten
              Mittelstandsprojekte: Cloud-LLM in einer EU-Region (Anthropic
              über AWS Bedrock Frankfurt, Azure OpenAI in West Europe oder
              Sweden Central) für die Standard-Use-Cases, plus On-Prem-LLM
              optional für hochsensible Daten.
            </Typo.Paragraph>

            <Typo.H3>Orchestrator</Typo.H3>
            <Typo.Paragraph>
              Vier praktische Optionen für den DACH-Mittelstand: n8n
              (Open-Source, self-hosted DSGVO-tauglich, native AI-Nodes,
              seit Mai 2026 strategische SAP-Partnerschaft mit Einbettung in
              Joule Studio), Microsoft Power Automate (natürliche Wahl bei
              M365- und Business-Central-Stacks), Make (visuell stark, gut
              für No-Code-Teams), oder Custom-Code mit LangGraph oder
              LangChain (für komplexe Multi-Agent-Setups). Ein Tool-Vergleich
              für Mittelstands-Workloads steht im{" "}
              <Link
                href="/blog/n8n-vs-zapier-vergleich"
                className="text-primary-600 hover:underline"
              >
                n8n-vs-Zapier-Vergleich
              </Link>
              .
            </Typo.Paragraph>

            <Typo.H3>Confidence-Gate und Human-in-the-loop</Typo.H3>
            <Typo.Paragraph>
              Jede KI-Antwort liefert einen Confidence-Score mit. Bei
              Buchungen ist die typische Schwelle 0,90 bis 0,95, bei
              Stammdaten reichen oft 0,80. Drei Patterns für das
              Approval-Gate: Hard-Gate (Mensch muss aktiv bestätigen,
              Default für Buchungen), Soft-Gate (KI schreibt, Mensch reviewt
              nachgelagert in einer Queue), Human-on-the-Loop (Mensch sieht
              nur Stichproben und Eskalationen). n8n unterstützt das HITL-
              Pattern nativ über Wait-Nodes mit Teams-, Slack- oder
              E-Mail-Approval.
            </Typo.Paragraph>

            <Typo.H3>Logging und Error Handling</Typo.H3>
            <Typo.Paragraph>
              Pflicht für jeden ERP-Use-Case: Idempotenz (Operationen müssen
              wiederholbar sein, ERP-seitig Upsert statt Insert), Audit
              Trail (Prompt, Modell-Version, Ausgabe, Confidence, Reviewer,
              Zeitstempel pro Entscheidung), Retries mit exponentiellem
              Backoff (CSRF-Tokens und Session-Timeouts sind häufige
              Fehlerquellen bei SAP B1), Dead-Letter-Queue mit Alert bei
              dreimaligem Fehlversuch, und Observability über Langfuse,
              Arize oder Helicone für LLM-spezifische Metriken.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="erp-anbindungen">
              ERP-spezifische Integrations-Details
            </Typo.H2>
            <Typo.Paragraph>
              Die Wahl der Schnittstelle ist häufig der Engpass des
              Projekts. Eine Übersicht der wichtigsten ERP-Familien im
              deutschen Mittelstand.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/ki-workflow-erp/erp-anbindungen.png"
              alt="Matrix mit ERP-Anbindungen für KI-Workflows: SAP Business One, S/4HANA, Business Central und Datev"
              width={1200}
              height={630}
            />

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>ERP-System</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Schnittstelle</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Auth</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Anmerkung</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell bold>SAP Business One</DataTable.Cell>
                  <DataTable.Cell>Service Layer (OData v4)</DataTable.Cell>
                  <DataTable.Cell>Basic, B1SESSION-Cookie</DataTable.Cell>
                  <DataTable.Cell>Session-Timeout 30 Min, CSRF-Token bei Writes</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>SAP S/4HANA Cloud</DataTable.Cell>
                  <DataTable.Cell>OData v2/v4 (API Business Hub)</DataTable.Cell>
                  <DataTable.Cell>OAuth 2.0 (BTP)</DataTable.Cell>
                  <DataTable.Cell>keine RFC im Public Cloud, OData ist Standard</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>SAP S/4HANA On-Prem</DataTable.Cell>
                  <DataTable.Cell>OData plus BAPI/RFC</DataTable.Cell>
                  <DataTable.Cell>OAuth, x.509 oder RFC-Login</DataTable.Cell>
                  <DataTable.Cell>RFC oft via HTTP-RFC-Wrapper</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Business Central</DataTable.Cell>
                  <DataTable.Cell>REST v2.0 plus Webhooks plus Custom APIs (AL)</DataTable.Cell>
                  <DataTable.Cell>OAuth 2.0 / Entra ID</DataTable.Cell>
                  <DataTable.Cell>Throttling 10 calls/s pro Tenant</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Dynamics NAV (älter)</DataTable.Cell>
                  <DataTable.Cell>SOAP Web Services / OData v3</DataTable.Cell>
                  <DataTable.Cell>NTLM / Windows-Auth</DataTable.Cell>
                  <DataTable.Cell>Migrationskandidat, REST nur via Custom</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Datev</DataTable.Cell>
                  <DataTable.Cell>XML-Schnittstelle online plus EXTF-CSV plus DATEVconnect (REST)</DataTable.Cell>
                  <DataTable.Cell>OAuth 2.0 / OIDC</DataTable.Cell>
                  <DataTable.Cell>Belegtransfer-Watch-Folder ist Pragmatiker-Lösung</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>microtech büro+</DataTable.Cell>
                  <DataTable.Cell>ADO-Import/Export, COM-API</DataTable.Cell>
                  <DataTable.Cell>lokal</DataTable.Cell>
                  <DataTable.Cell>CSV-Drop in Watch-Folder häufig schnellste Lösung</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Sage 100 / Lexware</DataTable.Cell>
                  <DataTable.Cell>DATEV-Schnittstelle, CSV-Import, Sage-API, Lexoffice-API</DataTable.Cell>
                  <DataTable.Cell>API-Key</DataTable.Cell>
                  <DataTable.Cell>Lexoffice Cloud hat gute REST-API</DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.H3>SAP Business One und S/4HANA</Typo.H3>
            <Typo.Paragraph>
              SAP Business One nutzt den Service Layer mit OData v4
              (Endpoint typisch https://server:50000/b1s/v1/). Login per POST
              auf /Login mit UserName, Password und CompanyDB liefert ein
              B1SESSION-Cookie zurück. Seit FP 2405 ist OData v3 deprecated
              und v4 Standard. Praxis-Stolpersteine: Session-Timeout (Default
              30 Min), CSRF-Tokens bei modifizierenden Calls, Filter-Syntax
              mit dem dollar-filter-Parameter. Ein vorbereitetes n8n-Template
              für SAP-B1-Journal-Entries gibt es im n8n-Workflow-Katalog.
            </Typo.Paragraph>
            <Typo.Paragraph>
              SAP S/4HANA in der Public Cloud erlaubt nur OData v2/v4 und
              REST/SOAP, keine RFC. On-Prem und Private Cloud erlauben
              zusätzlich BAPI/RFC. Für externe KI-Workflows ist OData fast
              immer das Mittel der Wahl. Der Klassiker-Stolperstein:
              CSRF-Token-Fetch (GET mit X-CSRF-Token: Fetch, das erhaltene
              Token mit POST mitschicken) und Batch-Requests via dollar-batch
              für Multi-Operationen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Joule und Joule Studio sind SAPs eigene Agenten-Plattform (GA
              seit Q1 2026), mit 2.500+ vorgebauten Skills. Joule Studio
              bekommt seit Mai 2026 n8n nativ eingebettet, sodass externe
              AI-Workflows als Tools per MCP konsumierbar werden. Für
              klassische S/4HANA-On-Prem- oder B1-Kunden ist Joule noch
              nicht relevant, ein eigener Stack dominiert.
            </Typo.Paragraph>

            <Typo.H3>Microsoft Dynamics 365 Business Central</Typo.H3>
            <Typo.Paragraph>
              Business Central setzt auf REST API v2.0
              (https://api.businesscentral.dynamics.com/v2.0/) mit OAuth 2.0
              über Microsoft Entra ID. Coverage der Standard-Entities
              (Customers, Vendors, Items, SalesOrders, JournalLines) ist gut,
              aber nicht hundertprozentig. Lücken füllt man mit AL-Extensions,
              die Custom API Pages exposen (PageType=API, mit APIPublisher,
              APIGroup und APIVersion). Webhooks pusht BC selbst über die
              Subscriptions-API. n8n hat einen nativen BC-Konnektor.
              Praxis-Limit: Throttling auf zehn Calls pro Sekunde pro Tenant
              und Eventual-Consistency bei Webhooks.
            </Typo.Paragraph>

            <Typo.H3>Datev</Typo.H3>
            <Typo.Paragraph>
              Datev ist die dominante Buchhaltungslösung im DACH-Mittelstand,
              und mit Abstand am sperrigsten zu integrieren. Es gibt drei
              Pfade. Erstens das DATEV-Format CSV (EXTF), der Klassiker.
              Dateinamen-Konvention EXTF_Buchungsstapel_Kundennummer_Zeitstempel.csv,
              Header-Zeile mit Formatversion (510), Kategorie (21 für
              Buchungsstapel, 16 für Debitoren/Kreditoren, 20 für Konten).
              Robust und dokumentiert, aber dateibasiert und nicht in
              Echtzeit. Eignet sich für monatliche Batch-Übergaben aus einem
              Vorsystem.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Zweitens die DATEV-XML-Schnittstelle online mit Belegtransfer.
              Eine ZIP-Datei mit document.xml plus Beleg-PDF wird über den
              Belegtransfer-Client nach Datev Unternehmen Online geladen,
              Buchung und Beleg sind per Hash verkettet. Das ist der heutige
              Standard für die Übergabe von Belegen aus einem Vorsystem an
              die Datev-Buchhaltung. Drittens DATEVconnect online (REST mit
              OAuth 2.0/OIDC), der moderne Weg für Software-Anbieter mit
              mehreren Mandanten. Erfordert eine kommerzielle Vereinbarung
              mit Datev und ist meist nur dann gerechtfertigt, wenn man die
              API einem breiteren Kundenstamm anbietet.
            </Typo.Paragraph>

            <Typo.H3>microtech büro+, Sage, Lexware</Typo.H3>
            <Typo.Paragraph>
              Diese Mittelstands-ERPs haben oft keine moderne REST-API.
              microtech büro+ arbeitet mit ADO-Import/Export auf
              Microsoft-DB-Schicht und einer COM-API. Sage 100 bietet eine
              eigene API plus AppDesigner und einen DATEV-Connect-Export.
              Lexware Office als Cloud-Lösung hat eine ordentliche REST-API
              mit OAuth (lexoffice-API), Lexware Buchhaltung als
              Desktop-Variante vorwiegend CSV/Excel-Import und DATEV-Export.
              Für KI-Workflows ist hier der pragmatische Weg: Trigger über
              Mail oder Webhook, LLM verarbeitet, Output als CSV oder XML in
              einen überwachten Ordner, das ERP zieht es selbst rein.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="dsgvo-und-gobd">
              DSGVO, GoBD und Betriebsrat
            </Typo.H2>
            <Typo.Paragraph>
              ERP-Daten enthalten fast immer Personenbezug, ob es um Kunden,
              Lieferanten, Mitarbeiter oder Ansprechpartner geht. Compliance
              ist deshalb kein Add-on, sondern Voraussetzung.
            </Typo.Paragraph>

            <Typo.H3>DSGVO</Typo.H3>
            <Typo.Paragraph>
              Jeder Prompt mit Kunden-, Lieferanten- oder Mitarbeiterdaten
              ist DSGVO-relevant. Minimal-Setup: AVV mit dem LLM-Anbieter
              (OpenAI Enterprise, Azure OpenAI, Anthropic Enterprise,
              Mistral haben das standardmäßig, ChatGPT Free oder Plus ist
              für Geschäftsbetrieb nicht geeignet), Region in der EU (Azure
              OpenAI West Europe oder Sweden Central, Anthropic über AWS
              Frankfurt oder GCP europe-west), vertraglich gesichertes
              No-Training-Opt-out, Datenminimierung im Prompt und
              Prompt-Injection-Härtung bei der Verarbeitung von User-Content
              wie eingehenden E-Mails. Mehr Hintergrund im{" "}
              <Link
                href="/blog/dsgvo-konforme-ki-tools"
                className="text-primary-600 hover:underline"
              >
                Guide zu DSGVO-konformen KI-Tools
              </Link>
              .
            </Typo.Paragraph>

            <Typo.H3>On-Prem-LLMs als Alternative</Typo.H3>
            <Typo.Paragraph>
              Für hochsensible Daten (Personalakten, große
              Mandanten-Datenbestände bei Steuerberatern, Vertragsdetails)
              lohnen On-Prem-Optionen. Mistral Large bietet eine Enterprise-
              Version mit On-Prem-Deployment, Aleph Alpha Luminous ist
              deutsche Datenhoheit und Bundeswehr-tauglich, Llama 3.3 70B
              läuft auf Open Weights via Ollama und liefert in vielen
              Use-Cases brauchbare Qualität. Hardware: 2 mal A6000 oder 1
              mal H100 für brauchbare Latenz unter Last. Faustregel:
              Cloud-LLM für Recherche und Rich-Text-Aufgaben, On-Prem oder
              EU-Modell für alles mit Personenbezug oder kritischen
              Geschäftsdaten.
            </Typo.Paragraph>

            <Typo.H3>GoBD-Konformität</Typo.H3>
            <Typo.Paragraph>
              Für buchhaltungsnahe Workflows gelten die GoBD. Vier konkrete
              Anforderungen: Unveränderbarkeit (Logs revisionssicher in
              WORM-Storage oder Append-only-DB), Nachvollziehbarkeit (jede
              KI-Entscheidung mit Modell-Version, Prompt-Version,
              Eingangsdaten und Ausgabe reproduzierbar), Verfahrensdoku
              (schriftliche Beschreibung des Workflows, Kontrollen und
              Fehlerverhalten) und Vier-Augen-Prinzip bei Buchungen (KI
              macht Vorschlag, Mensch oder eine dokumentierte Auto-Freigabe-
              Regel führt die Buchung aus). Ohne diese vier Schichten ist
              ein KI-zu-Datev-Workflow nicht prüfungsfest.
            </Typo.Paragraph>

            <Typo.H3>Betriebsrat und DSFA</Typo.H3>
            <Typo.Paragraph>
              In mitbestimmten Unternehmen (mehr als fünf Mitarbeitende und
              gewählter Betriebsrat) gilt ein KI-Tool, das
              Mitarbeiter-Verhalten oder -Leistung beobachten kann (zum
              Beispiel Reklamationsanalyse mit Bearbeiterzuweisung), als
              mitbestimmungspflichtig nach Paragraf 87 BetrVG. Das
              Bundesarbeitsgericht hat die Anforderungen 2026 verschärft.
              Eine Betriebsvereinbarung KI mit Mustertexten findet sich im
              Bitkom-Leitfaden 2026. Eine Datenschutz-Folgenabschätzung
              nach Artikel 35 DSGVO ist Pflicht, sobald automatische
              Entscheidungen mit Personenbezug oder umfangreiches Monitoring
              im Spiel sind. Ein reiner Belegextraktor ohne Personenbezug
              ist meist nicht mitbestimmungspflichtig, aber eine
              DSFA-Vorprüfung lohnt trotzdem.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="roi-business-case">
              ROI und 12-Monats-Business-Case
            </Typo.H2>
            <Typo.Paragraph>
              Die Mathematik eines KI-ERP-Projekts ist überschaubar:
              Mannstunden-Ersparnis mal Stundensatz minus Lizenzen, API-
              Kosten und Setup. Die typischen Größenordnungen 2026.
            </Typo.Paragraph>

            <Typo.H3>Setup einmalig</Typo.H3>
            <Typo.Paragraph>
              Tooling-Lizenzen liegen zwischen 0 Euro (n8n self-hosted) und
              3.000 Euro (Power Automate Premium für 25 User). Implementierung
              intern dauert 15 bis 40 Personentage je Use Case
              (IT/Fachbereich gemischt). Mit externer Agenturbegleitung sind
              10.000 bis 60.000 Euro pro Use Case realistisch, abhängig von
              Komplexität und ERP-Schnittstelle. Hardware bei
              On-Prem-LLM-Setup: 8.000 bis 25.000 Euro für eine
              GPU-Workstation (RTX 6000 Ada oder 2 mal L40S).
            </Typo.Paragraph>

            <Typo.H3>Laufende Kosten pro Monat</Typo.H3>
            <Typo.Paragraph>
              Cloud-LLM-API ist stark volumen-abhängig. Faustpreise 2026 pro
              Million Token In/Out: GPT-5.4 bei 2,50 USD / 15 USD, Claude
              Sonnet 4.6 bei 3 USD / 15 USD, Claude Haiku 4.5 bei 1 USD / 5
              USD, Mistral Large 2 bei rund 2 EUR / 6 EUR. Mit
              Prompt-Caching sind etwa 90 Prozent Rabatt auf Cached-Input
              möglich, was bei wiederkehrenden System-Prompts erheblich ins
              Gewicht fällt. Infrastruktur (n8n-Hosting auf 4 vCPU mit 8 GB
              RAM und Logging-Stack) liegt bei 60 bis 150 Euro. Maintenance
              durch eine interne FTE mit 10 bis 30 Prozent Auslastung sind
              800 bis 3.000 Euro im Monat.
            </Typo.Paragraph>

            <Typo.H3>Konkretes Beispiel: 5.000 Eingangsrechnungen pro Jahr</Typo.H3>
            <Typo.Paragraph>
              Annahmen: deutsche GmbH mit 200 Mitarbeitenden, monatlich rund
              420 Eingangsrechnungen, vollkostenrechneter
              Buchhalter-Stundensatz 45 Euro. Heute werden pro Beleg sieben
              Minuten gebraucht (Erfassung, Kontierung, Buchung), das ergibt
              583 Mannstunden pro Jahr und 26.235 Euro Personalkosten. Mit
              KI-Workflow sinkt die Bearbeitungszeit pro Beleg auf
              durchschnittlich 1,5 Minuten (nur Review der unsicheren 20 bis
              30 Prozent), also 125 Mannstunden und 5.625 Euro Personalkosten
              pro Jahr.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/ki-workflow-erp/roi-belegerkennung.png"
              alt="ROI-Vergleich für KI-Belegerkennung bei 5.000 Eingangsrechnungen pro Jahr im ersten Jahr und ab Jahr 2"
              width={1200}
              height={630}
            />

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Posten</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Manuell (heute)</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Mit KI-Workflow</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell bold>Zeit pro Beleg</DataTable.Cell>
                  <DataTable.Cell>7 Min</DataTable.Cell>
                  <DataTable.Cell>1,5 Min (Review)</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Mannstunden/Jahr</DataTable.Cell>
                  <DataTable.Cell>583 h</DataTable.Cell>
                  <DataTable.Cell>125 h</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Personalkosten/Jahr</DataTable.Cell>
                  <DataTable.Cell>26.235 EUR</DataTable.Cell>
                  <DataTable.Cell>5.625 EUR</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Software-Lizenz/Jahr</DataTable.Cell>
                  <DataTable.Cell>0</DataTable.Cell>
                  <DataTable.Cell>1.200 EUR (n8n + LLM-API)</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>LLM-API-Kosten/Jahr</DataTable.Cell>
                  <DataTable.Cell>0</DataTable.Cell>
                  <DataTable.Cell>900 EUR (5.000 Belege)</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Setup einmalig</DataTable.Cell>
                  <DataTable.Cell>0</DataTable.Cell>
                  <DataTable.Cell>12.000 EUR (25 PT intern)</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Jahr 1 Gesamt</DataTable.Cell>
                  <DataTable.Cell>26.235 EUR</DataTable.Cell>
                  <DataTable.Cell>19.725 EUR</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Ab Jahr 2 jährlich</DataTable.Cell>
                  <DataTable.Cell>26.235 EUR</DataTable.Cell>
                  <DataTable.Cell>7.725 EUR</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Ersparnis ab Jahr 2</DataTable.Cell>
                  <DataTable.Cell>0</DataTable.Cell>
                  <DataTable.Cell>18.510 EUR (71 Prozent)</DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              Amortisation: 13 bis 14 Monate inklusive Setup. Dunkelbuchungs-
              quote: realistisch 60 bis 80 Prozent in den ersten sechs
              Monaten, 75 bis 85 Prozent nach zwölf Monaten mit Feedback-
              Schleife. Wer in unter sechs Monaten 95 Prozent Dunkelbuchung
              verspricht, hat den deutschen Mittelstand nie gesehen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wo der ROI besser ausfällt: hohe Beleg- oder Auftragsmengen
              (über 10.000 pro Jahr), wiederkehrende Strukturen, viel
              mailbasierter Eingangsprozess. Wo der ROI enttäuscht:
              heterogene Belege mit hoher Sonderfall-Rate, schlecht gepflegte
              ERP-Stammdaten (jedes semantische Match scheitert), Branchen
              mit komplexer USt-Logik (Bauleistungen, EU-Reverse-Charge in
              Sondersituationen), kleine Volumen unter 1.000 Belegen pro
              Jahr.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="fallstricke">
              Sechs typische Fallstricke
            </Typo.H2>
            <Typo.H3>Halluzinationen bei Buchungslogik</Typo.H3>
            <Typo.Paragraph>
              LLMs erzeugen probabilistische Ausgaben, nicht deterministische.
              Sie schlagen mit Selbstbewusstsein falsche Konten vor, gerade
              bei seltenen Buchungssachverhalten. Gegenmaßnahmen: Das LLM
              macht den Vorschlag, nicht die Buchung. Eine Regelschicht prüft
              Plausibilität (Eingangsrechnung von ausländischem Lieferant
              schlägt Reverse-Charge-Check vor). Confidence-Scores kommen
              nicht nur vom Modell, sondern auch aus der Regel-Validierung.
              Bei seltenen Buchungsarten gilt ein harter Mensch-Gate.
            </Typo.Paragraph>

            <Typo.H3>Unzureichende Datenqualität im ERP</Typo.H3>
            <Typo.Paragraph>
              Wenn der Kreditorenstamm zwölf Schreibweisen von „Deutsche
              Telekom AG" enthält, schlägt das semantische Matching in 30
              Prozent der Fälle auf den falschen Lieferanten. Vor dem
              KI-Projekt steht eine Stammdaten-Bereinigung, sonst wird das
              Matching unbrauchbar. Faustregel aus Pilotprojekten: jeden
              Euro, den man in Stammdatenqualität investiert, spart man im
              KI-Projekt doppelt.
            </Typo.Paragraph>

            <Typo.H3>Fehlende Standardisierung der Eingangsdaten</Typo.H3>
            <Typo.Paragraph>
              PDFs aus 80 verschiedenen Lieferanten-ERPs haben 80
              verschiedene Layouts. Moderne LLMs gehen damit deutlich besser
              um als alte template-basierte OCR, aber Edge Cases bleiben:
              handschriftliche Stempel, eingescannte Faxe, um 90 Grad
              rotierte Bilder. Vorverarbeitung mit De-Skew,
              OCR-Confidence-Schwelle und Layout-Analyse (LayoutLM oder
              Azure Document Intelligence) ist Pflicht.
            </Typo.Paragraph>

            <Typo.H3>Maintenance-Aufwand für Prompts</Typo.H3>
            <Typo.Paragraph>
              Prompts altern. Wenn das LLM-Anbieter-Modell ein Update bekommt
              (Claude Sonnet 4.5 auf 4.6, GPT-4o auf 5.4), ändert sich oft
              das Verhalten subtil. Eine Prompt-Regression-Suite mit 50 bis
              100 historischen Fällen vor jedem Modell-Update durchlaufen zu
              lassen ist Pflicht. Prompts versionieren wie Code, in Git oder
              spezialisierten Tools wie Langfuse oder PromptLayer.
            </Typo.Paragraph>

            <Typo.H3>Vendor-Lock-in (OpenAI vs. Anthropic vs. Mistral)</Typo.H3>
            <Typo.Paragraph>
              Prompts sind nicht modell-portabel. Was bei GPT funktioniert,
              scheitert manchmal bei Claude, und umgekehrt. Mitigation: ein
              AI-Gateway wie LiteLLM, Portkey oder OpenRouter zwischen
              Anwendung und Modell, Function-Calling über einen Adapter pro
              Anbieter abstrahieren, Multi-Provider als Failover (Primär
              Claude, bei 5xx oder Cost-Spike fallback auf GPT). Die
              Erfahrung 2026 zeigt: einmal in einem Anbieter-Stack
              vergraben, sind Migrationen teuer.
            </Typo.Paragraph>

            <Typo.H3>Unrealistische Erwartungen</Typo.H3>
            <Typo.Paragraph>
              Branchenstudien beziffern die Misserfolgsrate von KI-Projekten
              im Mittelstand auf 90 bis 95 Prozent. In der Mehrheit der
              Fälle ist es nicht die Technik, sondern Erwartungsmanagement,
              Datenqualität und fehlende Skalierungsstrategie. Wer einen
              KI-ERP-Workflow als „Wir installieren das mal" startet, hat
              die Wahrscheinlichkeit gegen sich. Der Pilot-Plan im nächsten
              Abschnitt bringt Struktur.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="pilot-plan">
              4-Wochen-Pilot-Plan
            </Typo.H2>
            <Typo.Paragraph>
              Ein pragmatischer Einstieg, der in vier Wochen eine fundierte
              Go/No-Go-Entscheidung liefert. Funktioniert für jeden der
              sieben Use-Cases am Anfang, am häufigsten zuerst für
              Belegerkennung oder Auftrags-Klassifikation eingesetzt.
            </Typo.Paragraph>

            <Typo.H3>Woche 1: Use Case und Datenmaterial</Typo.H3>
            <Typo.Paragraph>
              Workshop mit dem Fachbereich (Buchhaltung, Einkauf, Vertrieb
              je nach Szenario), Engpass identifizieren in Stunden pro
              Woche, Euro pro Monat oder Service-Level. Erfolgskriterium
              definieren („70 Prozent der Eingangsrechnungen werden mit
              Confidence über 0,9 ohne Korrektur durchgebucht"). Datenexport
              vorbereiten: 200 bis 500 historische Beispiele, davon 80
              Prozent für Prompt-Tuning und 20 Prozent als goldenes Testset
              zurückbehalten. Output: One-Pager mit Problem, Lösung,
              Erfolgskriterium und Datenmaterial.
            </Typo.Paragraph>

            <Typo.H3>Woche 2: PoC im Sandbox-ERP</Typo.H3>
            <Typo.Paragraph>
              ERP-Sandbox oder Test-Mandant aufsetzen, mindestens einen
              Schreib-User mit limitiertem Scope. n8n, Make oder Power
              Automate installieren, LLM-Zugang einrichten (zum Beispiel
              Anthropic via AWS Bedrock Frankfurt). Ersten Workflow End-to-
              End bauen, mit einem oder zwei historischen Beispielen.
              Hauptsache, es läuft komplett durch. Output: ein
              funktionierender Demo-Workflow für einen Beispielfall.
            </Typo.Paragraph>

            <Typo.H3>Woche 3: Pilot mit echter Freigabe</Typo.H3>
            <Typo.Paragraph>
              Workflow mit Hard-Gate auf Mensch. Die KI macht einen
              Vorschlag, der Mensch klickt „Freigeben" in n8n, Teams oder
              per Mail. Mit echten Eingangsdaten parallel zum bestehenden
              Prozess laufen lassen, mindestens 50 bis 100 Vorgänge. Jeder
              KI-Entscheid wird vollständig geloggt mit Eingabe, Ausgabe,
              Confidence und finaler Buchung. Output: ein Auswertungsdatensatz.
            </Typo.Paragraph>

            <Typo.H3>Woche 4: Auswertung und Skalierungsentscheidung</Typo.H3>
            <Typo.Paragraph>
              Genauigkeit, Confidence-Verteilung und Korrektur-Rate gegen
              das Erfolgskriterium aus Woche 1 messen. Häufigste
              Fehlerklassen identifizieren (Prompt, Daten oder Edge-Case).
              Skalierungs-ROI für zwölf Monate schätzen. Go/No-Go-
              Entscheidung mit Roadmap für Produktivnahme (Sicherheits-
              konzept, Verfahrensdoku GoBD, Betriebsrat-Anhörung,
              Anwender-Schulung).
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="workflow-beispiele">
              Zwei Workflow-Beispiele im Detail
            </Typo.H2>
            <Typo.Paragraph>
              Wie sich Architektur, Schnittstellen und Compliance in zwei
              konkreten Workflows manifestieren, die in dieser Form bei
              deutschen Mittelständlern in Produktion laufen.
            </Typo.Paragraph>

            <Typo.H3>Beispiel 1: KI-gestützte Belegerkennung mit Datev-Übergabe</Typo.H3>
            <Typo.Paragraph>
              Ausgangslage: GmbH mit 250 Mitarbeitenden bekommt 480
              Eingangsrechnungen pro Monat, 60 Prozent per PDF im
              Mail-Anhang, 30 Prozent im Lieferantenportal und 10 Prozent
              per Post (eingescannt). Ziel: 75 Prozent ohne manuelle
              Eingriffe in Datev Unternehmen Online, inklusive korrektem
              Buchungsvorschlag.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/ki-workflow-erp/datev-belegerkennung-workflow.png"
              alt="Workflow-Diagramm der 8 Schritte einer KI-gestützten Belegerkennung mit Datev-Belegtransfer-Übergabe"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Schritt 1 bis 2: Trigger und Vorverarbeitung. Ein n8n-Workflow
              polled alle fünf Minuten ein dediziertes Postfach
              rechnungen@firma.de über IMAP, alternativ Microsoft-Graph-
              Webhook für Echtzeit. Anhang und Bodytext werden isoliert.
              Das PDF geht an Azure Document Intelligence, der Output ist
              Volltext plus strukturierte Felder (Tabellen, Key-Value-Paare,
              Positions-Koordinaten). Bei OCR-Confidence unter 0,7
              Eskalation an Inbox „needs-human".
            </Typo.Paragraph>
            <Typo.Paragraph>
              Schritt 3 bis 4: LLM-Extraktion und Regel-Validierung. Claude
              Sonnet 4.6 über AWS Bedrock Frankfurt bekommt einen
              System-Prompt mit der Datev-Buchungsregel (Sachkonten-Stamm,
              Steuerschlüssel, Kostenstellen, KOST-Träger) plus den
              OCR-Text. JSON-Schema-Output mit Lieferant, Rechnungsnummer,
              Datum, Netto, USt-Betrag, USt-Satz, Sachkonto-Vorschlag,
              Gegenkonto, Kostenstelle und Confidence. Die Regel-Schicht
              prüft Plausibilität: passt der USt-Satz zur Nettoberechnung,
              existiert der Sachkonto-Vorschlag im Mandanten, ist der
              Lieferant im Kreditorenstamm (Match über USt-ID, Name+PLZ oder
              IBAN).
            </Typo.Paragraph>
            <Typo.Paragraph>
              Schritt 5: Confidence-Gate. Bei kombinierter Confidence aus
              LLM und Regel von mindestens 0,9 geht der Vorgang direkt in
              die Datev-Belegtransfer-ZIP. Bei 0,7 bis 0,9 erhält der
              zuständige Buchhalter eine Microsoft-Teams-Card mit Vorschlag
              und Freigabe-/Korrektur-/Ablehnen-Buttons. Bei unter 0,7
              Eskalation in die Inbox.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Schritt 6 bis 8: Datev-Übergabe, Logging und Feedback-Loop.
              Der Workflow baut die document.xml mit Buchung-Beleg-Hash-
              Verknüpfung, packt zusammen mit dem PDF in eine ZIP und lädt
              sie über den Belegtransfer-Watch-Folder hoch. Jeder Schritt
              landet in einer Postgres-Audit-Tabelle mit Vorgangs-ID,
              Zeitstempel, Schritt, Eingabe-Hash, Ausgabe, Confidence und
              Reviewer (GoBD-konform). Korrekturen aus Schritt 5 fließen in
              eine Few-Shot-Bibliothek, die im System-Prompt als
              Negativbeispiele eingebaut wird. Monatliche Prompt-Regression
              gegen das goldene Testset.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Was läuft typisch schief in den ersten vier Wochen Pilot:
              USt-Sonderfälle (Reverse-Charge bei EU-Lieferanten),
              Sammelrechnungen mit unterschiedlichen Kostenstellen,
              gekrümmt eingescannte Belege. Dafür greift der Mensch-Gate.
            </Typo.Paragraph>

            <Typo.H3>Beispiel 2: Intelligente Auftrags-Klassifikation für SAP Business One</Typo.H3>
            <Typo.Paragraph>
              Ausgangslage: B2B-Großhandel mit 180 Mitarbeitenden. Bestellungen
              kommen über vier Kanäle, 40 Prozent über den Webshop
              (strukturiert), 20 Prozent über das B2B-Portal (EDIFACT), 30
              Prozent per E-Mail (Freitext plus PDF) und 10 Prozent
              telefonisch. Ziel: die 30 Prozent E-Mail-Bestellungen ohne
              manuelle Erfassung in SAP Business One als Sales Order anlegen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Microsoft-Graph-Webhook auf bestellung@firma.de oder
              alternativ ein n8n IMAP-Trigger startet die Pipeline. GPT-5.4
              oder Claude Sonnet 4.6 klassifiziert in einer ersten Stufe
              (Bestellung, Anfrage, Storno, Rechnungsfrage, Spam) und
              extrahiert in einer zweiten Stufe Kunden-Kennzeichen, Kontakt,
              Positionen mit Artikel-Freitext, Menge, Einheit und
              Wunschtermin, Lieferadresse und Sonderkonditionen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Kunden-Matching läuft per Service-Layer-Call gegen
              BusinessPartners (Filter auf USt-ID oder E-Mail-Domain), bei
              Mehrdeutigkeit folgt ein LLM-basierter Adress-Match. Pro
              Position semantische Suche im Artikel-Embedding-Store (vorab
              indexierter Items-Stamm, alle 24 Stunden refreshed), Top-3-
              Treffer werden vom LLM validiert. Bei Confidence über 0,9
              Auto-Match, sonst Innendienst-Card. Verfügbarkeit gegen
              Items.OnHand und MRP-Termin prüfen, bei Knappheit Flag im
              Order-Kommentar.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Bei voller Confidence (alle Positionen über 0,9 und
              Kunden-Match über 0,95) erfolgt die Auto-Anlage per POST gegen
              https://b1server:50000/b1s/v1/Orders mit B1SESSION-Cookie und
              CSRF-Token. JSON-Payload mit CardCode, DocDate, DocDueDate
              und DocumentLines. Eine automatische Auftragsbestätigung mit
              SAP-Order-Nummer geht zurück an den Kunden. KPI: Eskalations-
              Rate unter 25 Prozent nach drei Monaten.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Was läuft typisch schief: Kundenartikelnummern, die nicht im
              SAP gepflegt sind, Mengen-Einheits-Verwechslungen (Stück vs.
              Karton), Sonderkonditionen, die nicht im Auftragstext stehen,
              aber in der Kundenakte hinterlegt sind. Eine semantische
              Suche mit Kunden-spezifischem Fallback (Lookup in
              kundenartikel-Mapping) löst die meisten Fälle.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="naechste-schritte">
              Wie es weitergeht
            </Typo.H2>
            <Typo.Paragraph>
              Der Einstieg ist nicht die Technik, sondern die Auswahl des
              richtigen ersten Use-Cases. Wer zuerst Belegerkennung oder
              Auftrags-Klassifikation pilotiert, hat in vier Wochen eine
              fundierte Datenbasis für die Skalierungsentscheidung und
              minimiert das Risiko, sich an einem schwierigen Edge-Case zu
              verheddern.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Tiefer in einzelne Bausteine geht es im{" "}
              <Link
                href="/blog/n8n-ki-agenten-erstellen"
                className="text-primary-600 hover:underline"
              >
                Guide zu KI-Agenten mit n8n
              </Link>
              ,{" "}
              <Link
                href="/blog/wie-baut-man-ki-agents"
                className="text-primary-600 hover:underline"
              >
                Bauplan für KI-Agents
              </Link>{" "}
              und im{" "}
              <Link
                href="/blog/agentic-ai-im-grosshandel"
                className="text-primary-600 hover:underline"
              >
                Agentic-AI-Guide für den Großhandel
              </Link>
              . Wer den Belegerkennungs-Use-Case lieber an einen Spezialisten
              vergibt, statt selbst zu bauen, findet im{" "}
              <Link
                href="/3-wege-abgleich-rechnungspruefung"
                className="text-primary-600 hover:underline"
              >
                Service Rechnungsprüfung
              </Link>{" "}
              eine fertige Lösung. Bluebatch begleitet deutsche
              Mittelständler bei diesen Entscheidungen.{" "}
              <Link
                href="/contact"
                className="text-primary-600 hover:underline"
              >
                Sprechen Sie uns an
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="faq">
            <FaqContainer
              faqs={[
                {
                  question:
                    "Brauche ich überhaupt ein ERP-API für KI-Workflows, oder kann die KI direkt in die SAP-Datenbank schreiben?",
                  answer:
                    "Direktschreiben in die ERP-Datenbank ist ein Anti-Pattern. Sie umgehen damit die ERP-eigene Geschäftslogik (Validierungen, Buchungsregeln, Trigger, Audit-Felder) und riskieren Datenkorruption sowie Wartungsverträge. Nehmen Sie die offizielle Schnittstelle: Service Layer bei SAP B1, OData bei S/4HANA und Business Central, DATEV-XML-Schnittstelle bei Datev, oder bei älteren Systemen den dokumentierten CSV/XML-Importweg.",
                },
                {
                  question:
                    "Welches LLM eignet sich am besten für deutsche Buchhaltungs-Use-Cases?",
                  answer:
                    "Für deutschsprachige Belegextraktion und Buchungslogik sind Claude Sonnet 4.6, GPT-5.4 und Mistral Large 2 aktuell etwa gleichauf. Bei Datenschutzauflagen (Belege mit Personendaten) ist Mistral Le Chat Enterprise auf EU-Servern oder Anthropic über AWS Bedrock Frankfurt die pragmatische Wahl. Aleph Alpha Luminous lohnt sich, wenn Datenhoheit Pflicht ist (öffentliche Hand, sensible Branchen).",
                },
                {
                  question:
                    "Wie verhindere ich, dass die KI falsche Buchungen ins ERP schreibt?",
                  answer:
                    "Vier Schichten: erstens strukturiertes Output-Format mit Schema-Validierung (falsches Schema = sofortige Ablehnung), zweitens Regel-Validierung auf Plausibilität (USt-Sätze, Konten-Existenz, Steuerschlüssel-Kombinationen), drittens Confidence-Gate (alles unter Schwelle geht an einen Menschen), viertens ein Audit-Log für jede Entscheidung. Eine direkte LLM-zu-ERP-Verbindung ohne diese Schichten ist nicht GoBD-konform.",
                },
                {
                  question:
                    "Was kostet so ein Projekt wirklich?",
                  answer:
                    "Für einen ersten Use Case sind 15.000 bis 40.000 Euro Setup realistisch (intern oder mit Agentur), 2.000 bis 6.000 Euro Software-Lizenzen pro Jahr und 500 bis 3.000 Euro LLM-API-Kosten pro Jahr (skaliert mit Belegvolumen). Bei sauberen Voraussetzungen liegt die Amortisation zwischen 8 und 18 Monaten. Bei vielen Edge Cases oder schlechter Stammdatenqualität kann es deutlich länger werden.",
                },
                {
                  question:
                    "Muss ich den Betriebsrat einbinden?",
                  answer:
                    "Sobald der Workflow Mitarbeiter-Verhalten beobachten oder Mitarbeitern Aufgaben zuweisen kann (Reklamationsanalyse, Bestelltickets), ist Mitbestimmung nach Paragraf 87 BetrVG fast immer einschlägig. Das Bundesarbeitsgericht hat 2026 die Anforderungen verschärft. Eine Betriebsvereinbarung KI mit Mustertexten findet sich im Bitkom-Leitfaden 2026. Ein reiner Belegextraktor ohne Personenbezug ist meist nicht mitbestimmungspflichtig, eine DSFA-Vorprüfung lohnt trotzdem.",
                },
                {
                  question:
                    "Kann ich mit n8n oder Power Automate alles bauen, oder brauche ich Custom-Code?",
                  answer:
                    "n8n, Make und Power Automate decken 80 Prozent der Mittelstands-Use-Cases ab. Für komplexe Multi-Agent-Setups, hohe Throughput-Anforderungen (über fünf Workflows pro Sekunde sustained) oder eng integrierte UI-Frontends lohnt sich Custom-Code mit LangGraph oder LangChain. Eine pragmatische Aufteilung: n8n als Orchestrator, Custom-Service nur für schwierige LLM-Calls (Prompt-Versionierung, Caching, Multi-Provider-Routing).",
                },
              ]}
            >
              <FaqContainer.Headline>
                Häufige Fragen zu KI-Workflows mit ERP
              </FaqContainer.Headline>
            </FaqContainer>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="einsatzszenarien">
            Sieben Einsatzszenarien
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="architektur-stack">
            Architektur-Stack
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="erp-anbindungen">
            ERP-Anbindungen
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="dsgvo-und-gobd">
            DSGVO und GoBD
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="roi-business-case">
            ROI und Business Case
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="fallstricke">
            Typische Fallstricke
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="pilot-plan">
            4-Wochen-Pilot-Plan
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="workflow-beispiele">
            Workflow-Beispiele
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="faq">
            FAQ
          </BlogLayout.NavigationItem>
        </BlogLayout.Navigation>
      </BlogLayout>
    </>
  );
}
