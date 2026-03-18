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
import DataTable from "@/components/ui/data-table";
import ProsCons from "@/components/sections/pros-cons";
import IndustryFit from "@/components/sections/industry-fit";
import ToolComparisonTable from "@/components/sections/tool-comparison-table";

export const metadata: Metadata = {
  title:
    "Microsoft Power Automate: Ehrliche Analyse, Kosten & Alternativen | Bluebatch",
  description:
    "Power Automate im Detail: Cloud Flows, Desktop RPA, Copilot AI, echte Kosten ab 15,- €/User/Monat und versteckte Preisfallen. Unabhängige Analyse mit Vergleichsmatrix.",
  openGraph: {
    title:
      "Microsoft Power Automate: Ehrliche Analyse, Kosten & Alternativen | Bluebatch",
    description:
      "Power Automate ehrlich bewertet: Stärken, Grenzen, echte Preise und Vergleich mit n8n, Make und Zapier.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch Power Automate Analyse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Microsoft Power Automate: Ehrliche Analyse, Kosten & Alternativen | Bluebatch",
    description:
      "Power Automate: echte Kosten, versteckte Limits und wann sich Alternativen lohnen.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/tools/automation-tools/power-automate",
  },
};

const staerken = [
  {
    title: "Unschlagbare M365-Integration",
    description:
      "Kein anderes Tool kommt an die native Tiefe heran: Teams Adaptive Cards, SharePoint List-Events, Outlook-Trigger, Dynamics 365 Dataverse und Power BI Alerts – alles nativ, ohne Custom-Konnektoren.",
  },
  {
    title: "Kostenloser Einstieg mit M365",
    description:
      "Jede Microsoft 365-Lizenz enthält Power Automate mit Standard-Konnektoren und 6.000 API-Requests pro Tag. Für einfache Outlook-SharePoint-Teams-Workflows entstehen keine Zusatzkosten.",
  },
  {
    title: "Desktop RPA integriert",
    description:
      "Power Automate Desktop vereint Cloud-Automatisierung und Robotic Process Automation in einer Plattform. Attended und Unattended Modes, Screen Recording und Self-Healing UI Flows mit KI-Unterstützung.",
  },
  {
    title: "AI Builder & Copilot",
    description:
      "Flow-Erstellung per natürlicher Sprache, Copilot Expression Editing ohne Syntaxkenntnisse, Generative Actions via LLMs und Intelligent Document Processing. KI durchdringt jeden Bereich der Plattform.",
  },
  {
    title: "Enterprise Governance",
    description:
      "DLP-Policies mit Runtime Enforcement, Managed Environments, Trigger Blocking, Tenant-Level Analytics und das Automation Center. Für Compliance-Teams ein starkes Argument.",
  },
  {
    title: "Process Mining",
    description:
      "Automatische Prozessanalyse mit Bottleneck-Erkennung, Rework Detection und ROI-Dashboards – direkt in der Plattform. Konkurriert mit Celonis, ist aber mit 5.000,- €/Monat/Tenant auch entsprechend teuer.",
  },
];

const probleme = [
  {
    title: "Vendor Lock-in",
    description:
      "Flows lassen sich nicht exportieren oder in andere Plattformen migrieren. Einmal investiert, ist der Wechsel extrem aufwendig. Die gesamte Automatisierungslogik lebt im Microsoft-Ökosystem.",
  },
  {
    title: "Premium-Konnektoren kosten extra",
    description:
      "Salesforce, SAP, Oracle, ServiceNow und sogar SQL-Datenbanken erfordern eine Premium-Lizenz (15,- €/User/Monat). Microsoft hat SQL-Konnektoren nachträglich von Standard zu Premium umklassifiziert.",
  },
  {
    title: "6.000 API-Calls/Tag Limit",
    description:
      "M365-Nutzer erhalten nur 6.000 API-Requests pro Tag, Standard-O365-User sogar nur 2.000 pro 24 Stunden. Bei datenintensiven Prozessen wird schnell gedrosselt – Flows schlagen dann einfach fehl.",
  },
  {
    title: "Debugging ist eine Qual",
    description:
      "Vage Fehlermeldungen, kein robustes Version Control und eingeschränkte Ausführungsprotokolle. Step-into für Conditions ist neu, aber von echtem Debugging (wie bei n8n mit Execution Data und Logs) weit entfernt.",
  },
  {
    title: "Kein Self-Hosting möglich",
    description:
      "Daten liegen immer bei Microsoft. Für Unternehmen mit strengen DSGVO-Anforderungen und dem Wunsch nach Datensouveränität auf eigener Infrastruktur gibt es keine Option.",
  },
  {
    title: "Lizenz-Dschungel",
    description:
      "Premium, Process, Hosted RPA, AI Builder, Process Mining – jedes Feature hat seinen eigenen Preis. Die Gesamtkosten sind schwer vorherzusagen und steigen bei Skalierung überproportional.",
  },
];

export default function Page() {
  return (
    <>
      {/* 1. Hero */}
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Tools</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Microsoft Power Automate – ehrlich bewertet
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Power Automate ist Microsofts Automatisierungsplattform mit Cloud
              Flows, Desktop RPA und Copilot-KI. Gartner-Leader seit 7 Jahren,
              über 14.800 Unternehmen weltweit, tief in M365 integriert. Aber
              auch: versteckte Kosten, API-Limits und starker Vendor Lock-in.
              Hier ist die ganze Geschichte.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Power Automate Beratung anfragen
              </ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Cloud Flows &bull; Desktop RPA &bull; AI Builder &bull; Process
              Mining
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/technology-integration.jpg"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 2. Was ist Power Automate? */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>Überblick</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was ist Microsoft Power Automate?
          </IntroBox.Headline>
        </IntroBox>

        <Typo.Paragraph>
          Microsoft Power Automate (früher Microsoft Flow) ist eine
          cloudbasierte Workflow-Automatisierungsplattform und Teil der
          Microsoft Power Platform – neben Power Apps, Power BI, Power Pages und
          Copilot Studio. Alle teilen sich Microsoft Dataverse als gemeinsame
          Datenschicht.
        </Typo.Paragraph>
        <Typo.Paragraph>
          Die Plattform vereint drei Kernbereiche: <strong>Cloud Flows</strong>{" "}
          für automatisierte, geplante und manuell ausgelöste Workflows zwischen
          Cloud-Diensten. <strong>Desktop Flows (RPA)</strong> für die
          Automatisierung von Desktop-Anwendungen, Legacy-Systemen und Websites
          per Robotic Process Automation. Und <strong>Process Mining</strong>{" "}
          für die Analyse und Optimierung bestehender Geschäftsprozesse.
        </Typo.Paragraph>
        <Typo.Paragraph>
          Die Zahlen sind beeindruckend: Über 1.000 zertifizierte Konnektoren
          mit 12.000+ verfügbaren Aktionen, Gartner-Leader im Magic Quadrant für
          Enterprise Low-Code seit 7 Jahren in Folge, und Copilot-KI in
          praktisch jeder Funktion. Power Automate ist de facto die
          Standard-Automatisierung für Microsoft-Shops – und genau da liegt
          sowohl die größte Stärke als auch die größte Einschränkung.
        </Typo.Paragraph>
      </ContentWrapper>

      {/* 3. Stärken & Probleme */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Pro & Contra</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Stärken und Grenzen von Power Automate
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Wo Microsoft Power Automate seine Stärken ausspielt – und wo die
            Grenzen liegen. Konkret und ehrlich.
          </IntroBox.Paragraph>
        </IntroBox>

        <ProsCons>
          <ProsCons.Pros>
            {staerken.map((item, index) => (
              <ProsCons.Item
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </ProsCons.Pros>
          <ProsCons.Cons>
            {probleme.map((item, index) => (
              <ProsCons.Item
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </ProsCons.Cons>
        </ProsCons>
      </ContentWrapper>

      {/* 4. Kosten & Betrieb */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>Preise</IntroBox.PreHeadline>
          <IntroBox.Headline>Kosten und Betrieb</IntroBox.Headline>
          <IntroBox.Paragraph>
            Die echten Preise von Power Automate – inklusive der Add-ons, die
            Microsofts Marketing gerne verschweigt.
          </IntroBox.Paragraph>
        </IntroBox>

        <DataTable>
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Plan</DataTable.HeaderCell>
              <DataTable.HeaderCell>Preis</DataTable.HeaderCell>
              <DataTable.HeaderCell>Was ist enthalten?</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            <DataTable.Row>
              <DataTable.Cell bold>M365 inkludiert</DataTable.Cell>
              <DataTable.Cell>0,- €</DataTable.Cell>
              <DataTable.Cell>
                Standard-Konnektoren, 6.000 API-Requests/Tag, keine
                Premium-Konnektoren
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Power Automate Premium</DataTable.Cell>
              <DataTable.Cell>15,- €/User/Monat</DataTable.Cell>
              <DataTable.Cell>
                Unbegrenzte Cloud Flows, Standard + Premium-Konnektoren,
                Attended Desktop Flows (RPA)
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Power Automate Process</DataTable.Cell>
              <DataTable.Cell>150,- €/Bot/Monat</DataTable.Cell>
              <DataTable.Cell>
                Unattended RPA, ein Bot führt mehrere Flows aus (aber nur einen
                gleichzeitig)
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Hosted RPA Add-on</DataTable.Cell>
              <DataTable.Cell>215,- €/Bot/Monat</DataTable.Cell>
              <DataTable.Cell>
                Microsoft-gehostete VM für Unattended Bots
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>AI Builder</DataTable.Cell>
              <DataTable.Cell>500,- €/Unit/Monat</DataTable.Cell>
              <DataTable.Cell>
                KI-Modelle für Dokumentenverarbeitung, Texterkennung,
                Sentimentanalyse
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Process Mining</DataTable.Cell>
              <DataTable.Cell>5.000,- €/Tenant/Monat</DataTable.Cell>
              <DataTable.Cell>
                Prozessanalyse und -optimierung – konkurriert mit Celonis
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable.Body>
        </DataTable>

        <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
          <Typo.H3 className="mb-4 text-lg">Typische Kostenfallen</Typo.H3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              &bull; Premium-Konnektoren (Salesforce, SAP, Oracle) erfordern die
              15,- €/User/Monat-Lizenz – bei 50 Usern sind das 9.000,- €/Jahr nur für
              den Zugang
            </li>
            <li>
              &bull; SQL-Datenbank-Konnektoren wurden nachträglich von Standard
              zu Premium umklassifiziert – plötzlich Mehrkosten
            </li>
            <li>
              &bull; AI Builder mit 5 Units kostet 2.500,- €/Monat (30.000,- €/Jahr) –
              vergleichbare KI-Integration über OpenAI API kostet einen
              Bruchteil
            </li>
            <li>
              &bull; Process Mining mit 5.000,- €/Monat (60.000,- €/Jahr) ist für den
              Mittelstand kaum tragbar
            </li>
            <li>
              &bull; Parallelausführung von RPA erfordert je eine separate
              Bot-Lizenz (150,- €/Monat pro Bot)
            </li>
          </ul>
        </div>
      </ContentWrapper>

      {/* 5. KI & Agentic AI */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Künstliche Intelligenz</IntroBox.PreHeadline>
          <IntroBox.Headline>KI und Agentic AI</IntroBox.Headline>
          <IntroBox.Paragraph>
            Microsoft investiert massiv in KI-Integration. Was davon heute schon
            nutzbar ist und was es kostet.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={2} className="gap-8">
          <SimpleCard>
            <Typo.H3 className="mb-3 text-xl">Copilot im Flow Editor</Typo.H3>
            <Typo.Paragraph textColor="muted" size="sm">
              Flows per natürlicher Sprache beschreiben und generieren lassen.
              Copilot Expression Editing erstellt komplexe Formeln ohne
              Syntaxkenntnisse. Seit Dezember 2025 allgemein verfügbar. Senkt
              die Einstiegsbarriere für Citizen Developer deutlich.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3 className="mb-3 text-xl">
              AI Builder (500,- €/Unit/Monat)
            </Typo.H3>
            <Typo.Paragraph textColor="muted" size="sm">
              Vorgefertigte und trainierbare KI-Modelle: Dokumentenverarbeitung,
              OCR, Sentimentanalyse. Der neue Document Processing Agent
              überwacht und validiert Workflows autonom. Leistungsstark, aber
              die Kosten von 500,- € pro Unit und Monat sind erheblich.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3 className="mb-3 text-xl">Generative Actions</Typo.H3>
            <Typo.Paragraph textColor="muted" size="sm">
              KI-gestützte Schritte direkt in Cloud Flows: automatische
              Zusammenfassungen, Datenanreicherung, E-Mail-Entwürfe und
              Next-Best-Action-Empfehlungen via LLMs. Abhängig vom
              Azure-AI-Ökosystem und entsprechenden Lizenzen.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3 className="mb-3 text-xl">
              Copilot Studio Integration
            </Typo.H3>
            <Typo.Paragraph textColor="muted" size="sm">
              Power Automate-Flows lassen sich als Aktionen in Copilot Studio
              einbinden – für KI-Agenten, die eigenständig Geschäftsprozesse
              ausführen. Self-Healing UI Flows reparieren
              Desktop-Automatisierungen automatisch bei UI-Änderungen. Die
              Vision ist überzeugend, die Umsetzung noch im Aufbau.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 6. Brancheneignung */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Zielgruppe</IntroBox.PreHeadline>
          <IntroBox.Headline>Brancheneignung</IntroBox.Headline>
          <IntroBox.Paragraph>
            Für wen Power Automate die richtige Wahl ist – und für wen nicht.
          </IntroBox.Paragraph>
        </IntroBox>

        <IndustryFit>
          <IndustryFit.Good>
            <IndustryFit.GoodItem title="Microsoft-zentrische Enterprises">
              Wer M365, Dynamics 365 und Azure intensiv nutzt, bekommt eine
              nahtlose Automatisierung, die kein anderes Tool so bieten kann.
            </IndustryFit.GoodItem>
            <IndustryFit.GoodItem title="Behörden und Großkonzerne">
              Enterprise Governance, DLP-Policies und das Admin Center erfüllen
              strenge Compliance-Anforderungen.
            </IndustryFit.GoodItem>
            <IndustryFit.GoodItem title="Citizen-Developer-Initiativen">
              Fachabteilungen automatisieren mit Copilot und dem visuellen
              Designer eigenständig, ohne IT-Abhängigkeit.
            </IndustryFit.GoodItem>
            <IndustryFit.GoodItem title="RPA-Bedarf plus Cloud">
              Die einzige Plattform, die Desktop RPA und Cloud Flows unter einem
              Dach vereint.
            </IndustryFit.GoodItem>
          </IndustryFit.Good>
          <IndustryFit.Poor>
            <IndustryFit.PoorItem title="Nicht-Microsoft-Umgebungen">
              Wer Google Workspace, Slack und AWS einsetzt, zahlt für
              Premium-Konnektoren und bekommt eine weniger tiefe Integration.
            </IndustryFit.PoorItem>
            <IndustryFit.PoorItem title="Startups und budgetbewusste Teams">
              Premium-Konnektoren, AI Builder und Add-ons treiben die Kosten
              schnell auf tausende Euro pro Monat.
            </IndustryFit.PoorItem>
            <IndustryFit.PoorItem title="DSGVO-kritische Anwendungen">
              Kein Self-Hosting möglich, Daten liegen immer auf Azure-Servern.
              Für maximale Datensouveränität ungeeignet.
            </IndustryFit.PoorItem>
            <IndustryFit.PoorItem title="Technische Teams mit Code-Anforderungen">
              Nur Expressions statt echtem JavaScript/Python. Kein natives Git,
              kein richtiges Debugging.
            </IndustryFit.PoorItem>
          </IndustryFit.Poor>
        </IndustryFit>
      </ContentWrapper>

      {/* 7. Vergleichsmatrix */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Vergleich</IntroBox.PreHeadline>
          <IntroBox.Headline>Power Automate im Vergleich</IntroBox.Headline>
          <IntroBox.Paragraph>
            Wie sich Power Automate gegen n8n, Make und Zapier schlägt – bei den
            Kriterien, die in der Praxis zählen.
          </IntroBox.Paragraph>
        </IntroBox>

        <ToolComparisonTable currentTool="power-automate" />
      </ContentWrapper>

      {/* 8. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
