import type { Metadata } from "next";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import SimpleGrid from "@/components/layout/simple-grid";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnCallToAction,
  Hero2ColumnSubtext,
  Hero2ColumnImage,
} from "@/components/heroes/hero-2-column";
import ContactButton from "@/components/buttons/contact-button";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import IntroBox from "@/components/ui/intro-box";
import SimpleCard from "@/components/cards/simple-card";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/ui/timeline-as-steps";
import TabGroup, {
  TabNavigation,
  TabItem,
  TabContent,
} from "@/components/ui/tab-group";
import BoundlessImageCard from "@/components/cards/boundless-image-card";

export const metadata: Metadata = {
  title: "microtech ERP-Automatisierung mit n8n | Bluebatch",
  description:
    "microtech ERP (ehemals BüroPlus) automatisieren: GraphQL API, SQL-Replikation nach PostgreSQL, Auftragsimport, Bestandsabgleich und DATEV-Export per n8n.",
  openGraph: {
    title: "microtech ERP-Automatisierung mit n8n | Bluebatch",
    description:
      "microtech ERP automatisieren – GraphQL API, PostgreSQL-Replikation, Auftragsimport und Multi-Channel-Bestandsabgleich via n8n.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch microtech ERP Automatisierung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "microtech ERP-Automatisierung mit n8n | Bluebatch",
    description:
      "microtech ERP automatisieren: GraphQL API, SQL-Replikation, Auftragsimport, DATEV-Export.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/tools/grosshandel/microtech-bueroplus",
  },
};

export default function Page() {
  return (
    <>
      {/* Hero */}
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Tools</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              microtech ERP – Automatisierung per GraphQL und PostgreSQL
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              microtech ERP (ehemals BüroPlus) ist das Warenwirtschaftssystem
              für den deutschen Mittelstand. Wir automatisieren Ihre
              Auftragsverarbeitung, Bestandsführung und E-Commerce-Anbindung
              über n8n – per GraphQL API oder SQL-Replikation nach PostgreSQL.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                microtech-Automatisierung anfragen
              </ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              GraphQL API -- SQL-Replikation -- E-Commerce -- DATEV
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/business-analytics.jpg"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Quick Navigation */}
      <ContentWrapper>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#was-ist-microtech"
            className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary-300 hover:text-primary-600 transition-colors"
          >
            Was ist microtech?
          </a>
          <a
            href="#schnittstellen"
            className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary-300 hover:text-primary-600 transition-colors"
          >
            API & Schnittstellen
          </a>
          <a
            href="#automatisierungen"
            className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary-300 hover:text-primary-600 transition-colors"
          >
            Automatisierungen
          </a>
          <a
            href="#voraussetzungen"
            className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary-300 hover:text-primary-600 transition-colors"
          >
            Voraussetzungen
          </a>
          <a
            href="#prozess"
            className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary-300 hover:text-primary-600 transition-colors"
          >
            Unser Prozess
          </a>
        </div>
      </ContentWrapper>

      {/* Was ist microtech ERP? */}
      <ContentWrapper colorScheme="gray-light">
        <div id="was-ist-microtech" className="scroll-mt-24" />
        <IntroBox>
          <IntroBox.PreHeadline>Hintergrund</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was ist microtech ERP?
          </IntroBox.Headline>
        </IntroBox>

        <div className="max-w-3xl mx-auto">
          <Typo.Paragraph>
            microtech ERP ist ein modulares ERP-System aus Deutschland, das seit
            über 36 Jahren im Mittelstand eingesetzt wird. Ursprünglich unter dem
            Namen BüroPlus bekannt, wurde das Produkt im Rahmen der Generation
            24 zu microtech ERP umbenannt. Die aktuelle Version ist Gen. 24 und
            bringt eine grundlegend modernisierte Architektur mit, darunter eine
            GraphQL-Schnittstelle für den programmatischen Zugriff.
          </Typo.Paragraph>

          <Typo.H3 className="mt-8 mb-3">
            Drei Editionen – und warum die Enterprise-Edition entscheidend ist
          </Typo.H3>
          <Typo.Paragraph>
            microtech ERP gibt es in drei Editionen: Basic, Core und Enterprise.
            Für Automatisierungsprojekte ist die Enterprise-Edition die
            relevante, denn nur sie bietet Zugriff auf die GraphQL API. Wer mit
            Basic oder Core arbeitet, kann trotzdem automatisieren – allerdings
            nur über die SQL-Replikation nach PostgreSQL, die ausschließlich
            Lesezugriff bietet. Schreibzugriff auf microtech-Daten von außen
            setzt die Enterprise-Edition voraus.
          </Typo.Paragraph>

          <Typo.H3 className="mt-8 mb-3">Module und Aufbau</Typo.H3>
          <Typo.Paragraph>
            Das Kernmodul ist die Warenwirtschaft – sie ist in jeder Edition
            enthalten und umfasst Auftragsverarbeitung, Einkauf, Beschaffung,
            Lagerverwaltung und Adressverwaltung. Weitere Module sind optional
            zubuchbar:
          </Typo.Paragraph>
          <Typo.List>
            <Typo.ListItem>
              Finanzbuchhaltung (FiBu) mit DATEV-Schnittstelle
            </Typo.ListItem>
            <Typo.ListItem>
              Lohn und Gehalt
            </Typo.ListItem>
            <Typo.ListItem>
              Logistik (erweiterte Lagerverwaltung mit Chargen- und
              Seriennummernverfolgung)
            </Typo.ListItem>
            <Typo.ListItem>
              Kasse (POS-Anbindung)
            </Typo.ListItem>
            <Typo.ListItem>
              Produktion (Stücklisten, Fertigungsaufträge)
            </Typo.ListItem>
            <Typo.ListItem>
              DMS (Dokumentenmanagement)
            </Typo.ListItem>
          </Typo.List>

          <Typo.H3 className="mt-8 mb-3">Typische Anwender</Typo.H3>
          <Typo.Paragraph>
            microtech ERP wird vor allem von mittelständischen Großhändlern,
            E-Commerce-Unternehmen, Einzelhändlern und produzierenden Betrieben
            in Deutschland eingesetzt. Eine besondere Stärke sind die nativen
            E-Commerce-Connectoren: Shopware 5 und 6, Magento, OXID, Amazon und
            eBay sind direkt integriert. Damit eignet sich microtech besonders
            für Unternehmen, die Omnichannel-Vertrieb betreiben und ihren
            Artikelstamm, Bestand und Auftragsfluss zentral in einem System
            verwalten wollen.
          </Typo.Paragraph>
        </div>
      </ContentWrapper>

      {/* API & Schnittstellen */}
      <ContentWrapper>
        <div id="schnittstellen" className="scroll-mt-24" />
        <IntroBox>
          <IntroBox.PreHeadline>Technik</IntroBox.PreHeadline>
          <IntroBox.Headline>
            API und Schnittstellen im Detail
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Es gibt keinen nativen n8n-Node für microtech. Wir arbeiten mit HTTP
            Request Nodes für GraphQL und dem PostgreSQL-Node für die
            SQL-Replikation. Im Folgenden die drei Integrationswege, die
            microtech bietet.
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="max-w-3xl mx-auto">
          <TabGroup defaultValue="graphql">
            <TabNavigation>
              <TabItem value="graphql">GraphQL API</TabItem>
              <TabItem value="sql">SQL-Replikation</TabItem>
              <TabItem value="connectbase">ConnectBASE (archiviert)</TabItem>
            </TabNavigation>

            <TabContent value="graphql">
              <Typo.H3 className="mb-3">
                GraphQL API (Gen. 24 Enterprise)
              </Typo.H3>
              <Typo.Paragraph>
                Die GraphQL API ist der modernste Integrationsweg und nur in der
                Enterprise-Edition verfügbar. Sie läuft über HTTP/2 und setzt ein
                TLS-Zertifikat voraus, das in der microtech Serverkonfiguration
                (BpConfig.exe) hinterlegt wird. Ohne korrekt konfiguriertes
                Zertifikat lässt sich die API nicht ansprechen.
              </Typo.Paragraph>
              <Typo.Paragraph>
                Das GraphQL-Schema verwendet die{" "}
                <code className="bg-gray-100 px-1 rounded text-sm">tbl...</code>-Namenskonvention
                für Tabellen – dieselbe Struktur, die auch intern in der
                microtech-Datenbank verwendet wird. Über die API sind sowohl Lese-
                als auch Schreibzugriffe möglich, was sie zum einzigen Weg macht,
                Daten programmatisch in microtech anzulegen oder zu ändern.
              </Typo.Paragraph>
              <Typo.Paragraph>
                In n8n setzen wir dafür den HTTP Request Node ein: Er sendet
                GraphQL-Queries und -Mutations an den microtech-Server, authentifiziert
                über das TLS-Zertifikat.
              </Typo.Paragraph>
              <a
                href="https://hilfe.microtech.de/99_beta/graphql/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md hover:border-primary-300 transition-all group"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">GraphQL API-Dokumentation</p>
                  <p className="text-sm text-gray-500">hilfe.microtech.de/99_beta/graphql/</p>
                </div>
              </a>
            </TabContent>

            <TabContent value="sql">
              <Typo.H3 className="mb-3">
                SQL-Replikation nach PostgreSQL
              </Typo.H3>
              <Typo.Paragraph>
                Die SQL-Replikation ist in allen Editionen verfügbar und repliziert
                microtech-Tabellen in eine PostgreSQL-Datenbank. Das Ergebnis ist
                eine lesbare Kopie der ERP-Daten, auf die externe Systeme direkt
                per SQL zugreifen können – ideal für BI-Tools, Dashboards,
                Reporting und datengetriebene Automatisierungen.
              </Typo.Paragraph>
              <Typo.Paragraph>
                Die Einrichtung erfordert einen PostgreSQL-Server, einen
                dedizierten Datenbank-Benutzer und die Konfiguration der
                Replikation in microtech. Nach der Einrichtung werden die Tabellen
                automatisch synchronisiert, sodass n8n über den nativen
                PostgreSQL-Node direkt auf die Daten zugreifen kann.
              </Typo.Paragraph>
              <Typo.Paragraph>
                Wichtig: Die SQL-Replikation bietet ausschließlich Lesezugriff.
                Daten können darüber ausgelesen und weiterverarbeitet, aber nicht
                zurück nach microtech geschrieben werden.
              </Typo.Paragraph>
              <a
                href="https://hilfe.microtech.de/04_moduluebergreifend/sql-replikation/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md hover:border-primary-300 transition-all group"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">SQL-Replikation Dokumentation</p>
                  <p className="text-sm text-gray-500">hilfe.microtech.de/04_moduluebergreifend/sql-replikation/</p>
                </div>
              </a>
            </TabContent>

            <TabContent value="connectbase">
              <Typo.H3 className="mb-3">
                ConnectBASE REST API (archiviert)
              </Typo.H3>
              <Typo.Paragraph>
                ConnectBASE war eine C#-basierte REST API eines Drittanbieters, die
                über Swagger-Dokumentation und API-Key-Authentifizierung verfügte.
              </Typo.Paragraph>
              <Typo.Paragraph>
                Seit Juni 2024 ist das Projekt archiviert und wird nicht mehr
                gepflegt. ConnectBASE hatte ohnehin erhebliche Einschränkungen: Kein
                Zugriff auf Dokumente oder Bilder, keine Löschoperationen und nur
                eingeschränkte Erstellungsmöglichkeiten. Wir erwähnen es hier der
                Vollständigkeit halber – für neue Projekte empfehlen wir
                ausschließlich die GraphQL API oder die SQL-Replikation.
              </Typo.Paragraph>
              <a
                href="https://github.com/mbcomdev/ConnectBASE"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md hover:border-primary-300 transition-all group"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">ConnectBASE auf GitHub</p>
                  <p className="text-sm text-gray-500">github.com/mbcomdev/ConnectBASE</p>
                </div>
              </a>
            </TabContent>
          </TabGroup>
        </div>
      </ContentWrapper>

      {/* Konkrete Automatisierungen */}
      <ContentWrapper colorScheme="gray-light">
        <div id="automatisierungen" className="scroll-mt-24" />
        <IntroBox>
          <IntroBox.PreHeadline>Praxis</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Konkrete Automatisierungen mit microtech
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Keine abstrakten Versprechen – so sehen reale Workflows aus, die wir
            für microtech-Kunden umsetzen.
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="space-y-8">
          <BoundlessImageCard imagePosition="right" ratio="3-2">
            <BoundlessImageCard.Content>
              <Typo.H3 className="mb-3">
                Auftragsimport aus Shopware, Amazon und eBay
              </Typo.H3>
              <Typo.Paragraph textColor="muted">
                Wenn eine Bestellung in Shopware, Amazon oder eBay eingeht, fängt
                ein n8n-Workflow sie per Webhook oder Polling ab. Der Workflow
                prüft die Bestelldaten, löst den Kunden im microtech-Adressstamm
                auf (oder legt ihn automatisch an) und erstellt per GraphQL
                Mutation einen Auftrag in microtech. Anschließend wird der
                Lagerbestand aktualisiert und – je nach Konfiguration – automatisch
                ein Lieferschein generiert. Das gesamte Verfahren dauert wenige
                Sekunden und erspart die manuelle Erfassung, die bei
                Multichannel-Händlern schnell Stunden pro Tag verschlingt.
              </Typo.Paragraph>
            </BoundlessImageCard.Content>
            <BoundlessImageCard.Image src="/images/order-processing.jpg" alt="Auftragsimport aus Shopware, Amazon und eBay" fadeGradient />
          </BoundlessImageCard>

          <BoundlessImageCard imagePosition="left" ratio="3-2">
            <BoundlessImageCard.Content>
              <Typo.H3 className="mb-3">
                Bestandsabgleich über mehrere Kanäle
              </Typo.H3>
              <Typo.Paragraph textColor="muted">
                Überverkäufe sind eines der teuersten Probleme im
                Multichannel-Vertrieb. Unser Workflow prüft alle fünf Minuten den
                aktuellen Lagerbestand per PostgreSQL-Abfrage (oder GraphQL-Query
                bei Enterprise), vergleicht ihn mit den in Shopware, Amazon und eBay
                hinterlegten Beständen und pusht Änderungen per API an die
                jeweiligen Plattformen. Dadurch sind Bestände kanalübergreifend
                nahezu in Echtzeit synchron – ohne dass jemand manuell Zahlen
                abtippen muss.
              </Typo.Paragraph>
            </BoundlessImageCard.Content>
            <BoundlessImageCard.Image src="/images/warehouse-software.jpg" alt="Bestandsabgleich über mehrere Kanäle" fadeGradient />
          </BoundlessImageCard>

          <BoundlessImageCard imagePosition="right" ratio="3-2">
            <BoundlessImageCard.Content>
              <Typo.H3 className="mb-3">
                DATEV-Export automatisieren
              </Typo.H3>
              <Typo.Paragraph textColor="muted">
                Die monatliche oder wöchentliche Übergabe der Buchungsdaten an den
                Steuerberater ist ein wiederkehrender manueller Prozess, der sich
                vollständig automatisieren lässt. Ein n8n-Workflow liest die
                relevanten Buchungssätze per PostgreSQL aus, formatiert sie im
                DATEV-kompatiblen Format und übergibt sie entweder per E-Mail an
                den Steuerberater oder lädt sie direkt in DATEV Unternehmen online
                hoch. Das spart nicht nur Zeit, sondern reduziert auch
                Übertragungsfehler.
              </Typo.Paragraph>
            </BoundlessImageCard.Content>
            <BoundlessImageCard.Image src="/images/datev-integration.jpg" alt="DATEV-Export automatisieren" fadeGradient />
          </BoundlessImageCard>

          <BoundlessImageCard imagePosition="left" ratio="3-2">
            <BoundlessImageCard.Content>
              <Typo.H3 className="mb-3">
                Kundenstammdaten-Synchronisation
              </Typo.H3>
              <Typo.Paragraph textColor="muted">
                Wenn ein neuer Kunde in Shopware registriert oder eine erste
                Bestellung aufgibt, erstellt ein n8n-Workflow automatisch den
                Kundenstammdatensatz in microtech per GraphQL Mutation. Dabei
                werden Preisgruppen zugewiesen, Kreditlimits gesetzt und
                Zahlungsbedingungen hinterlegt. Der umgekehrte Weg funktioniert
                ebenfalls: Änderungen im microtech-Kundenstamm (neue
                Lieferadresse, geänderte Preisgruppe) werden per Polling erkannt
                und in Shopware zurückgeschrieben.
              </Typo.Paragraph>
            </BoundlessImageCard.Content>
            <BoundlessImageCard.Image src="/images/data-flow.jpg" alt="Kundenstammdaten-Synchronisation" fadeGradient />
          </BoundlessImageCard>
        </div>
      </ContentWrapper>

      {/* Voraussetzungen */}
      <ContentWrapper>
        <div id="voraussetzungen" className="scroll-mt-24" />
        <IntroBox>
          <IntroBox.PreHeadline>Voraussetzungen</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was Sie für die Automatisierung brauchen
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Transparenz ist uns wichtig. Damit wir microtech automatisieren
            können, müssen folgende Voraussetzungen erfüllt sein.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={2} className="gap-8">
          <SimpleCard className="border-t-4 border-t-primary-500">
            <Typo.H3 className="mb-3 text-xl">
              Für GraphQL-Zugriff (Lesen + Schreiben)
            </Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                microtech Gen. 24 in der Enterprise-Edition
              </Typo.ListItem>
              <Typo.ListItem>
                Windows Server mit konfiguriertem TLS-Zertifikat
              </Typo.ListItem>
              <Typo.ListItem>
                Netzwerkzugang zum microtech-Server (VPN oder sichere
                Verbindung, da microtech primär on-premise läuft)
              </Typo.ListItem>
              <Typo.ListItem>
                GraphQL-Port in der Firewall freigegeben
              </Typo.ListItem>
            </Typo.List>
          </SimpleCard>

          <SimpleCard className="border-t-4 border-t-green-500">
            <Typo.H3 className="mb-3 text-xl">
              Für SQL-Replikation (nur Lesen)
            </Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                Beliebige microtech-Edition (Basic, Core oder Enterprise)
              </Typo.ListItem>
              <Typo.ListItem>
                PostgreSQL-Server (kann auf demselben oder einem separaten
                Server laufen)
              </Typo.ListItem>
              <Typo.ListItem>
                Dedizierter PostgreSQL-Benutzer und Datenbank für die
                Replikation
              </Typo.ListItem>
              <Typo.ListItem>
                Netzwerkzugang zum PostgreSQL-Server
              </Typo.ListItem>
            </Typo.List>
          </SimpleCard>
        </SimpleGrid>

        <div className="max-w-3xl mx-auto mt-8">
          <Typo.Paragraph>
            Wichtig zu wissen: microtech ist primär ein On-Premise-System. Eine
            Cloud-Variante existiert nur als Hybrid-Modell. Das bedeutet, dass
            für die Anbindung in der Regel ein VPN-Tunnel oder eine andere
            sichere Verbindung zwischen Ihrem Netzwerk und unserem
            n8n-Server eingerichtet werden muss. Wir unterstützen Sie bei der
            Konfiguration.
          </Typo.Paragraph>
        </div>
      </ContentWrapper>

      {/* Prozess */}
      <ContentWrapper colorScheme="gray-light">
        <div id="prozess" className="scroll-mt-24" />
        <IntroBox>
          <IntroBox.PreHeadline>Unser Prozess</IntroBox.PreHeadline>
          <IntroBox.Headline>
            So läuft ein microtech-Automatisierungsprojekt ab
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Von der Bestandsaufnahme bis zum laufenden Betrieb – in fünf
            Schritten
          </IntroBox.Paragraph>
        </IntroBox>

        <TimelineAsSteps>
          <TimelineAsStepsStep value={1}>
            <Typo.H3 className="mb-2">
              Bestandsaufnahme und Editionsprüfung
            </Typo.H3>
            <Typo.Paragraph textColor="muted">
              Wir prüfen Ihre microtech-Installation: Welche Edition (Basic,
              Core, Enterprise) ist im Einsatz? Welche Module sind lizenziert?
              Ist die GraphQL API verfügbar oder arbeiten wir mit
              SQL-Replikation? Auf dieser Basis definieren wir den technisch
              machbaren Integrationsweg.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={2}>
            <Typo.H3 className="mb-2">
              Infrastruktur und Schnittstellenkonfiguration
            </Typo.H3>
            <Typo.Paragraph textColor="muted">
              TLS-Zertifikat in BpConfig.exe einrichten (für GraphQL),
              PostgreSQL-Server aufsetzen und Replikation konfigurieren (für
              SQL-Zugriff), VPN-Tunnel oder sichere Netzwerkverbindung
              herstellen. Wir kümmern uns um die technische Einrichtung
              gemeinsam mit Ihrem IT-Team oder microtech-Partner.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={3}>
            <Typo.H3 className="mb-2">Workflow-Entwicklung</Typo.H3>
            <Typo.Paragraph textColor="muted">
              Aufbau der n8n-Workflows für Ihre konkreten Anwendungsfälle:
              Auftragsimport, Bestandsabgleich, DATEV-Export,
              Kundenstammdaten-Sync oder andere Prozesse. Jeder Workflow wird
              mit Testdaten validiert, bevor er produktiv geht.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={4}>
            <Typo.H3 className="mb-2">
              Testbetrieb und Feinschliff
            </Typo.H3>
            <Typo.Paragraph textColor="muted">
              Die Workflows laufen parallel zum bestehenden Prozess. Wir
              vergleichen Ergebnisse, fangen Sonderfälle ab (Stornierungen,
              Teillieferungen, Retouren) und optimieren Fehlerbehandlung und
              Logging, bis alles zuverlässig läuft.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={5}>
            <Typo.H3 className="mb-2">
              Produktivbetrieb und Monitoring
            </Typo.H3>
            <Typo.Paragraph textColor="muted">
              Nach der Freigabe übernehmen die Workflows den produktiven
              Betrieb. Wir richten Monitoring und Fehlerbenachrichtigungen ein,
              damit Probleme sofort erkannt werden. Bei microtech-Updates
              (neue Generation, Schema-Änderungen) passen wir die Workflows
              entsprechend an.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
        </TimelineAsSteps>
      </ContentWrapper>

      {/* CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
