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
    "Workato: Ehrliche Analyse, echte Kosten & Alternativen | Bluebatch",
  description:
    "Workato im Detail: Enterprise iPaaS mit 1.200+ Konnektoren, Gartner-Leader seit 7 Jahren. Aber: 15.000,- bis 180.000,- €+/Jahr ohne öffentliche Preise. Unabhängige Analyse mit Vergleich.",
  openGraph: {
    title:
      "Workato: Ehrliche Analyse, echte Kosten & Alternativen | Bluebatch",
    description:
      "Workato ehrlich bewertet: Enterprise-Stärken, echte Kosten und wann sich günstigere Alternativen lohnen.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch Workato Analyse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Workato: Ehrliche Analyse, echte Kosten & Alternativen | Bluebatch",
    description:
      "Workato: Enterprise iPaaS mit 15K–180K+ €/Jahr. Stärken, Grenzen und günstigere Alternativen.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/tools/workato",
  },
};

const staerken = [
  {
    title: "Enterprise-Grade Governance",
    description:
      "SOC 1 & 2 Type 2, HIPAA, ISO 27001 & 27701, PCI-DSS 4.0, GDPR, IRAP und NIST 800-171A. Granulare RBAC, Multi-Environment-Support, SSO via SAML 2.0 und 1-Jahr-Audit-Log-Retention nativ. Für regulierte Branchen ein Schwergewicht.",
  },
  {
    title: "Recipe Copilot & KI-Suite",
    description:
      "Fünf spezialisierte Copilots: Recipe Copilot generiert Workflows aus natürlicher Sprache, Performance Copilot optimiert Kosten und Sicherheit, Formula Copilot erstellt komplexe Transformationen, Mapper Copilot ordnet Felder automatisch zu, Connector Copilot unterstützt beim Bau eigener Konnektoren.",
  },
  {
    title: "On-Premises Agent (OPA)",
    description:
      "Sicherer Zugriff auf lokale Systeme ohne eingehende Firewall-Änderungen – nur ausgehender Traffic auf Port 443. Läuft auf Windows, Linux, macOS und als Docker-Image. OPA-Groups ermöglichen Load Balancing und Hochverfügbarkeit für hybride Deployments.",
  },
  {
    title: "Embedded iPaaS",
    description:
      "White-Label-Integration für SaaS-Anbieter, die ihren Kunden native Integrationen anbieten wollen. API Platform zum Erstellen, Verwalten und Bereitstellen von APIs basierend auf Workato-Recipes. Ein Alleinstellungsmerkmal im iPaaS-Markt.",
  },
  {
    title: "Workato Genies (Agentic AI)",
    description:
      "Vorgebaute KI-Agenten für Sales, IT, Security, HR und Customer Experience. Genies führen mehrstufige Geschäftsprozesse autonom aus – von Employee Onboarding bis Quote-to-Cash. Agent Studio ermöglicht das Erstellen eigener Genies.",
  },
  {
    title: "Enterprise MCP-Plattform",
    description:
      "Industrie-erste Enterprise-Plattform für das Model Context Protocol. Genies können als MCP-Clients mit Drittanbieter-Servern interagieren und als MCP-Server von externen KI-Agenten aufgerufen werden. Roadmap: 100+ MCP-Server bis Ende 2026.",
  },
];

const probleme = [
  {
    title: "Extrem hohe Kosten",
    description:
      "Einstiegspreise ab ca. 15.000,- €/Jahr, typische Enterprise-Deployments bei 50.000,- bis 180.000,- €+/Jahr. Dazu kommen Add-ons für Advanced Compliance, API Platform, Workbot, Data Monitoring und Bulk Data Processing. Der Faktor gegenüber Open-Source-Alternativen liegt bei 10–50x.",
  },
  {
    title: "Völlig intransparente Preisgestaltung",
    description:
      "Keine öffentliche Preisliste. Jedes Angebot erfordert ein Gespräch mit dem Sales-Team. Das Task-basierte Modell macht Kosten schwer vorhersagbar. Jede Vertragsverlängerung wird zur Preisverhandlung.",
  },
  {
    title: "Begrenzte Code-Flexibilität",
    description:
      "Low-Code-Plattform ohne native Programmiersprache. Für komplexe Datentransformationen (ETL/ELT) und individuelle API-Logik stoßen Nutzer an die Grenzen. Custom Code-Optionen existieren, sind aber eingeschränkt.",
  },
  {
    title: "Performance bei hohem Volumen",
    description:
      "Nutzerberichte zeigen Probleme: 400.000 Records führten zu einem 6-Stunden-Ausfall. Große Job-Queues können die Plattform zum Einfrieren bringen. Deployment-Downtimes stören den operativen Betrieb.",
  },
  {
    title: "Schwerer Vendor Lock-in",
    description:
      "Recipes sind proprietär und nicht portabel. Eine Migration zu einer anderen Plattform erfordert den Neuaufbau aller Workflows. Bei Kosten von 100.000,- €+/Jahr entsteht eine hohe Abhängigkeit, die Preiserhöhungen schwer verhandelbar macht.",
  },
  {
    title: "Nicht für kleine Unternehmen",
    description:
      "Preis, Komplexität und Mindestpaket (1 Million Tasks) übersteigen die Bedürfnisse von KMU und Startups deutlich. Workato ist für Fortune-500-Budgets konzipiert – für den Mittelstand gibt es bessere Optionen.",
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
              Workato – die teure Enterprise-iPaaS, ehrlich bewertet
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Workato ist Gartner-Leader seit 7 Jahren, hat 12.000+ Kunden und
              eine Bewertung von ehemals 5,7 Milliarden €. Leistungsstark,
              enterprise-tauglich, KI-Vorreiter. Aber auch: 15.000,- €
              bis 180.000,- €+/Jahr ohne öffentliche Preise. Hier ist die ehrliche
              Einordnung.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Workato-Beratung anfragen
              </ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Enterprise iPaaS &bull; 1.200+ Konnektoren &bull; Agentic AI
              &bull; 15K–180K+ €/Jahr
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

      {/* 2. Was ist Workato? */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>Überblick</IntroBox.PreHeadline>
          <IntroBox.Headline>Was ist Workato?</IntroBox.Headline>
        </IntroBox>

        <div className="space-y-6">
          <Typo.Paragraph>
            Workato ist eine Enterprise-iPaaS-Plattform (Integration Platform as
            a Service), gegründet 2013 in Mountain View, Kalifornien. Die
            Gründer um CEO Vijay Tella bringen tiefe Enterprise-Integration-Erfahrung
            mit – sie entwickelten zuvor BusinessWorks bei TIBCO, und Tella war
            als Chief Strategy Officer bei Oracle für Fusion Middleware
            verantwortlich.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Die Plattform orchestriert Workflows, Daten und KI-Agenten über
            1.200+ vorgebaute Konnektoren. Im Kern steht der{" "}
            <strong>Recipe Builder</strong> – ein visueller Low-Code-Editor, in
            dem Automatisierungen als &quot;Recipes&quot; erstellt werden.
            Trigger-Action-Modell, If/Else-Logik, Schleifen, Fehlerbehandlung
            und Sub-Recipes für wiederverwendbare Bausteine.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Die Zahlen: 12.000+ Kunden weltweit, 700+ davon mit über 100.000,- €
            ARR. 35% ARR-Wachstum (FY2026), Gartner iPaaS-Leader seit 7 Jahren
            mit &quot;Furthest in Vision&quot; zwei Jahre in Folge. 4.9/5 Sterne
            auf Gartner Peer Insights mit der höchsten Anzahl an Reviews.
            Gesamtfinanzierung: 421 Millionen €. Aber: Die Bewertung fiel von
            5,7 Milliarden € (2021) auf geschätzte 1,7 Milliarden € am
            Sekundärmarkt.
          </Typo.Paragraph>
        </div>
      </ContentWrapper>

      {/* 3. Stärken & Probleme */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Pro & Contra</IntroBox.PreHeadline>
          <IntroBox.Headline>Stärken und Schwächen</IntroBox.Headline>
          <IntroBox.Paragraph>
            Was Workato für Enterprise-Kunden attraktiv macht – und wo die
            Plattform an ihre Grenzen stößt.
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
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>Preise</IntroBox.PreHeadline>
          <IntroBox.Headline>Kosten und Betrieb</IntroBox.Headline>
          <IntroBox.Paragraph>
            Workato veröffentlicht keine Preise. Diese Zahlen basieren auf
            Marktrecherche, Nutzerberichten und öffentlich zugänglichen
            Quellen.
          </IntroBox.Paragraph>
        </IntroBox>

        <DataTable>
            <DataTable.Head>
              <DataTable.Row>
                <DataTable.HeaderCell>Deployment-Größe</DataTable.HeaderCell>
                <DataTable.HeaderCell>Typische Kosten/Jahr</DataTable.HeaderCell>
                <DataTable.HeaderCell>Details</DataTable.HeaderCell>
              </DataTable.Row>
            </DataTable.Head>
            <DataTable.Body>
              <DataTable.Row>
                <DataTable.Cell bold>Starter (1 Mio. Tasks)</DataTable.Cell>
                <DataTable.Cell bold>15.000,- € – 50.000,- €</DataTable.Cell>
                <DataTable.Cell>
                  Basispaket, begrenzte Konnektoren und Workspaces, keine
                  erweiterten Compliance-Features
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Mid-Market</DataTable.Cell>
                <DataTable.Cell bold className="text-primary-700">
                  50.000,- € – 120.000,- €
                </DataTable.Cell>
                <DataTable.Cell>
                  Mehrere Umgebungen, RBAC, On-Prem Agent, höhere
                  Task-Volumina, Workbot-Integration
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Enterprise (5 Mio.+ Tasks)</DataTable.Cell>
                <DataTable.Cell bold className="text-primary-700">
                  120.000,- € – 180.000,- €+
                </DataTable.Cell>
                <DataTable.Cell>
                  Listenpreis ca. 180.000,- €, mit Rabatten 84.000,- € – 128.000,- €.
                  Advanced Compliance, API Platform, Bulk Data Processing
                </DataTable.Cell>
              </DataTable.Row>
            </DataTable.Body>
          </DataTable>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <Typo.H3 className="mb-4 text-lg">Preismodell</Typo.H3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  &bull; <strong>Task-basiert:</strong> Abrechnung nach
                  ausgeführten Aktionen/Transaktionen
                </li>
                <li>
                  &bull; <strong>Keine öffentliche Preisliste:</strong> Jedes
                  Angebot nur über Sales
                </li>
                <li>
                  &bull; <strong>Vertragslaufzeit:</strong> Typisch 1–3 Jahre
                </li>
                <li>
                  &bull; <strong>Mengenrabatte:</strong> Bei höheren
                  Task-Volumina möglich
                </li>
              </ul>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <Typo.H3 className="mb-4 text-lg">Kostentreiber</Typo.H3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  &bull; Advanced Compliance (SOC2, HIPAA-Features)
                </li>
                <li>&bull; API Platform für API-Management</li>
                <li>&bull; Enterprise Workbot (Slack/Teams-Chatbots)</li>
                <li>&bull; Data Monitoring und Bulk Data Processing</li>
                <li>&bull; On-Prem Agent für hybride Deployments</li>
              </ul>
            </div>
          </div>
      </ContentWrapper>

      {/* 5. KI und Agentic AI */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Künstliche Intelligenz</IntroBox.PreHeadline>
          <IntroBox.Headline>KI und Agentic AI</IntroBox.Headline>
          <IntroBox.Paragraph>
            Workato investiert aggressiv in KI – von Copilots im Editor bis zu
            autonomen Agenten, die ganze Geschäftsprozesse übernehmen.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={2} className="gap-8">
            <SimpleCard>
              <Typo.H3 className="mb-3 text-xl">
                Fünf spezialisierte Copilots
              </Typo.H3>
              <Typo.Paragraph textColor="muted" size="sm">
                <strong>Recipe Copilot</strong> generiert Workflows aus
                natürlicher Sprache. <strong>Performance Copilot</strong>{" "}
                optimiert auf Kosten, Sicherheit und Qualität.{" "}
                <strong>Formula Copilot</strong> erstellt komplexe
                Datentransformationen mit Schritt-für-Schritt-Anleitung.{" "}
                <strong>Mapper Copilot</strong> schlägt Feldzuordnungen
                automatisch vor. <strong>Connector Copilot</strong> hilft beim
                Bau eigener Konnektoren.
              </Typo.Paragraph>
            </SimpleCard>
            <SimpleCard>
              <Typo.H3 className="mb-3 text-xl">
                Workato Genies (Agentic AI)
              </Typo.H3>
              <Typo.Paragraph textColor="muted" size="sm">
                Vorgebaute KI-Agenten für Sales, IT, Security, HR und Customer
                Experience. Jeder Genie hat eine spezifische Mission und kann
                mehrstufige Geschäftsprozesse autonom ausführen. Agent Studio
                ermöglicht die Erstellung eigener Genies für individuelle
                Anforderungen.
              </Typo.Paragraph>
            </SimpleCard>
            <SimpleCard>
              <Typo.H3 className="mb-3 text-xl">
                Enterprise MCP-Plattform
              </Typo.H3>
              <Typo.Paragraph textColor="muted" size="sm">
                Die industrie-erste Enterprise-Plattform für das Model Context
                Protocol. Genies interagieren als MCP-Clients mit
                Drittanbieter-Servern und als MCP-Server mit externen
                KI-Agenten. Sicherer, kontrollierter Zugriff auf
                Unternehmensdaten. Start mit 8 vorgebauten Servern, Ziel: 100+
                bis Ende 2026.
              </Typo.Paragraph>
            </SimpleCard>
            <SimpleCard>
              <Typo.H3 className="mb-3 text-xl">
                KI-Einordnung
              </Typo.H3>
              <Typo.Paragraph textColor="muted" size="sm">
                Workato ist im Bereich Agentic AI und Enterprise MCP aktuell
                führend im iPaaS-Markt. Die KI-Features sind produktionsreif
                und tief in die Plattform integriert. Aber: Sie sind Teil des
                Gesamtpakets – und damit Teil der 50.000,- bis 180.000,- €+/Jahr, die
                Workato kostet. Open-Source-Alternativen bieten vergleichbare
                KI-Integration über OpenAI, Anthropic und LangChain-Nodes.
              </Typo.Paragraph>
            </SimpleCard>
          </SimpleGrid>
      </ContentWrapper>

      {/* 6. Brancheneignung */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Zielgruppe</IntroBox.PreHeadline>
          <IntroBox.Headline>Brancheneignung</IntroBox.Headline>
          <IntroBox.Paragraph>
            Für welche Unternehmen Workato wirklich Sinn macht – und wo das
            Budget besser investiert wäre.
          </IntroBox.Paragraph>
        </IntroBox>

        <IndustryFit>
          <IndustryFit.Good>
            <IndustryFit.GoodItem title="Große Enterprise-IT-Abteilungen">
              Mit 500+ Mitarbeitern, komplexen Integrationsanforderungen und dem Budget
              für 50.000,- bis 180.000,- €+/Jahr. Workato wurde für Fortune-500-Unternehmen
              gebaut.
            </IndustryFit.GoodItem>
            <IndustryFit.GoodItem title="RevOps-Teams">
              Revenue Operations ist der größte Workato-Adopter mit 48% der KI-Use-Cases.
              Lead-to-Cash, CRM-Synchronisation und Pipeline-Management sind
              Kernstärken.
            </IndustryFit.GoodItem>
            <IndustryFit.GoodItem title="Regulierte Branchen (SOC2/HIPAA)">
              Wer native SOC2 Type 2, HIPAA, PCI-DSS und ISO 27001 Zertifizierung
              braucht, findet bei Workato ein reifes Compliance-Paket.
            </IndustryFit.GoodItem>
            <IndustryFit.GoodItem title="SaaS-Anbieter (Embedded iPaaS)">
              Die White-Label-Plattform ermöglicht es, Integrationen nativ in das
              eigene Produkt einzubauen.
            </IndustryFit.GoodItem>
          </IndustryFit.Good>
          <IndustryFit.Poor>
            <IndustryFit.PoorItem title="KMU und Startups">
              Mindestens 15.000,- €/Jahr Einstieg plus Add-ons. Für den Mittelstand gibt es
              Alternativen, die 90% der Funktionalität zum Bruchteil der
              Kosten bieten.
            </IndustryFit.PoorItem>
            <IndustryFit.PoorItem title="Budgetbewusste Unternehmen">
              Ohne öffentliche Preise und mit Task-basierter Abrechnung sind die Kosten schwer
              planbar. Jede Skalierung treibt die Rechnung nach oben.
            </IndustryFit.PoorItem>
            <IndustryFit.PoorItem title="Teams mit Kostentransparenz-Anspruch">
              Wer eine klare Preisliste und vorhersagbare Kosten braucht, wird bei
              Workato frustriert. Jedes Angebot ist eine Black Box.
            </IndustryFit.PoorItem>
            <IndustryFit.PoorItem title="DSGVO mit Self-Hosting-Pflicht">
              Workato ist ein US-Unternehmen mit Cloud-Servern in den USA. Kein
              Self-Hosting möglich. Für maximale Datensouveränität
              ungeeignet.
            </IndustryFit.PoorItem>
          </IndustryFit.Poor>
        </IndustryFit>
      </ContentWrapper>

      {/* 7. Vergleichsmatrix */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Vergleich</IntroBox.PreHeadline>
          <IntroBox.Headline>Workato im Vergleich</IntroBox.Headline>
          <IntroBox.Paragraph>
            Wie sich Workato gegen n8n, Make und Zapier schlägt – mit Fokus
            auf die Kriterien, die Unternehmen bei der Entscheidung wirklich
            bewegen.
          </IntroBox.Paragraph>
        </IntroBox>

        <ToolComparisonTable currentTool="workato" />
      </ContentWrapper>

      {/* 8. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
