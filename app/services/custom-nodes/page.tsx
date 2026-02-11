import type { Metadata } from "next";
import Image from "next/image";
import ContentWrapper from "@/components/content-wrapper";
import Typo from "@/components/typo";
import SimpleGrid from "@/components/simple-grid";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnCallToAction,
  Hero2ColumnSubtext,
  Hero2ColumnImage,
} from "@/components/hero-components/hero-2-column";
import ContactButton from "@/components/buttons/contact-button";
import Customer, { allLogos } from "@/components/customer/customer";
import ConsultationCtaDefault from "@/components/consultation-cta-default";
import SimpleCard from "@/components/cards/simple-card";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/timeline-as-steps";
import PhaseCard, {
  PhaseCardHeader,
  PhaseCardTitle,
  PhaseCardBadge,
  PhaseCardDescription,
} from "@/components/cards/phase-card";
import IntroBox from "@/components/intro-box";

export const metadata: Metadata = {
  title: "Custom n8n Node Development | BlueBatch",
  description:
    "Maßgeschneiderte n8n Nodes für Ihre spezifischen Anforderungen. TypeScript, Node.js, SDK – professionelle Entwicklung und Wartung.",
  openGraph: {
    title: "Custom n8n Node Development | BlueBatch",
    description:
      "Es gibt keinen Node für Ihre App? Wir entwickeln Custom n8n Nodes für jede Integration.",
    type: "website",
    locale: "de_DE",
    siteName: "BlueBatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "BlueBatch Custom Nodes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom n8n Node Development | BlueBatch",
    description: "Maßgeschneiderte n8n Nodes für jede API und jedes System.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/services/custom-nodes",
  },
};

const useCases = [
  {
    title: "Legacy-System Integration",
    description:
      "Ein 15 Jahre altes proprietäres CRM-System mit nicht-standardisierter REST API. Custom Node ermöglicht nahtlose Lead-Synchronisation mit HubSpot, Mailchimp und Slack.",
    benefit: "20+ Stunden/Monat manuelle Arbeit eingespart",
    timeline: "2-3 Wochen",
    image: "/images/technology-integration.jpg",
  },
  {
    title: "E-Commerce Inventory Sync",
    description:
      "Multi-System-Synchronisation zwischen Shopify, proprietärem ERP und POS-Systemen. Real-time Inventory-Updates mit Conflict Resolution.",
    benefit: "Stockouts um 80% reduziert, Überbestände um 40%",
    timeline: "4-5 Wochen",
    image: "/images/warehouse-software.jpg",
  },
  {
    title: "DATEV-Integration",
    description:
      "Custom DATEV Node mit OCR-Integration für Rechnungsverarbeitung. Intelligente Dokumentenklassifizierung und automatisches Booking mit Approval-Workflow.",
    benefit: "70% der Rechnungen vollautomatisch verarbeitet",
    timeline: "6-8 Wochen",
    image: "/images/datev-integration.jpg",
  },
];

const techStack = [
  {
    name: "TypeScript",
    description:
      "Type-safe Development für robuste und wartbare Nodes. Bessere IDE-Unterstützung und Fehlervermeidung.",
    iconSrc: "/icons/process.svg",
  },
  {
    name: "Node.js",
    description:
      "Asynchrone I/O für effiziente API-Kommunikation. Zugriff auf das gesamte npm-Ökosystem.",
    iconSrc: "/icons/factory.svg",
  },
  {
    name: "n8n SDK",
    description:
      "Offizielles n8n Node SDK für schnelle Entwicklung. Declarative und Programmatic Styles.",
    iconSrc: "/icons/building.svg",
  },
  {
    name: "CI/CD",
    description:
      "Automated Testing und Deployment-Pipelines. GitHub Actions für kontinuierliche Integration.",
    iconSrc: "/icons/rocket.svg",
  },
];

const customNodeScenarios = [
  {
    title: "Proprietäre APIs",
    description: "Unternehmenseigene APIs, die nicht öffentlich verfügbar sind",
    iconSrc: "/icons/building.svg",
    gradient: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",
  },
  {
    title: "Legacy-Systeme",
    description: "Veraltete ERP/CRM-Systeme mit speziellen Datenformaten",
    iconSrc: "/icons/factory.svg",
    gradient:
      "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200",
  },
  {
    title: "Nischen-Services",
    description: "Spezialisierte Branchenlösungen ohne bestehende Integration",
    iconSrc: "/icons/chart.svg",
    gradient: "bg-gradient-to-br from-green-50 to-green-100 border-green-200",
  },
  {
    title: "Spezielle Auth",
    description:
      "JWT, komplexe OAuth2-Flows oder proprietäre Authentifizierung",
    iconSrc: "/icons/process.svg",
    gradient:
      "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200",
  },
  {
    title: "Interne Systeme",
    description: "Firmeninterne Tools, Datenbanken und Microservices",
    iconSrc: "/icons/building.svg",
    gradient: "bg-gradient-to-br from-red-50 to-red-100 border-red-200",
  },
  {
    title: "Performance-Kritisch",
    description: "Optimierte Nodes für High-Volume Workloads",
    iconSrc: "/icons/rocket.svg",
    gradient: "bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200",
  },
];

const developmentPhases = [
  {
    number: "1",
    title: "Setup & Scaffolding",
    duration: "1-2 Stunden",
    description:
      "Repository erstellen mit npm create @n8n/node • Development-Environment konfigurieren • Git-Repository initialisieren",
  },
  {
    number: "2",
    title: "Planung & Design",
    duration: "1-3 Tage",
    description:
      "API-Dokumentation analysieren • Authentifizierungsmethode identifizieren • Datenmodell verstehen (Input/Output) • Error Cases identifizieren",
  },
  {
    number: "3",
    title: "Implementation",
    duration: "3-10 Tage",
    description:
      "Credentials erstellen (API Key, OAuth2) • Node-Logik entwickeln • UI-Properties definieren • Lokales Testing durchführen",
  },
  {
    number: "4",
    title: "Quality Assurance",
    duration: "2-3 Tage",
    description:
      "Linting und Code Review • Documentation schreiben • Beispiel-Workflows erstellen",
  },
  {
    number: "5",
    title: "Deployment",
    duration: "1-2 Tage",
    description:
      "Production Build erstellen • npm Registry Publish • Installation testen",
  },
];

const apiTypes = [
  "REST APIs (JSON, XML)",
  "GraphQL APIs",
  "SOAP/XML Services",
  "Webhooks & Real-time",
  "WebSocket Connections",
  "Legacy-Systeme",
];

const authMethods = [
  "API Key (Header/Query)",
  "OAuth2 (alle Grant Types)",
  "JWT mit Auto-Refresh",
  "Basic Auth",
  "Custom Auth Flows",
  "Certificate-based Auth",
];

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>n8n Services</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>Custom Node Development</Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              &quot;Es gibt keinen Node für meine App&quot; – wir entwickeln
              ihn. Professionelle TypeScript-Entwicklung für jede API, jedes
              System, jede Integration. Von Legacy-ERP bis moderne
              Cloud-Services.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Node-Entwicklung anfragen
              </ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              TypeScript • Node.js • n8n SDK • Langfristige Wartung
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage src="/images/web-development.jpg" type="image" />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Introduction Text */}
      <ContentWrapper>
        <div className="max-w-4xl mx-auto text-center">
          <Typo.Paragraph className="text-xl text-gray-700 leading-relaxed">
            Die n8n Community bietet über 400 fertige Integrationen – doch für
            spezialisierte Geschäftsprozesse, proprietäre APIs oder
            Legacy-Systeme reicht das oft nicht aus. Genau hier kommen Custom
            Nodes ins Spiel: Maßgeschneiderte Integrationen, die perfekt auf
            Ihre individuellen Anforderungen zugeschnitten sind.
          </Typo.Paragraph>
        </div>
      </ContentWrapper>

      {/* When Custom Nodes Are Needed */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.Headline>Wann brauchen Sie Custom Nodes?</IntroBox.Headline>
          <IntroBox.Paragraph>
            Obwohl n8n 400+ eingebaute Nodes bietet, gibt es viele Szenarien, in
            denen Custom Nodes unverzichtbar sind
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={3} className="gap-6">
          {customNodeScenarios.map((scenario, index) => (
            <SimpleCard
              key={index}
              background={scenario.gradient}
              icon={
                <Image
                  src={scenario.iconSrc}
                  alt={scenario.title}
                  width={48}
                  height={48}
                />
              }
            >
              <Typo.H3 className="mb-2">{scenario.title}</Typo.H3>
              <Typo.Paragraph className="text-gray-600 text-sm">
                {scenario.description}
              </Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      {/* Real-World Examples */}
      <ContentWrapper background="bg-gray-50">
        <IntroBox>
          <IntroBox.Headline>Erfolgreiche Projekte</IntroBox.Headline>
          <IntroBox.Paragraph>
            Reale Beispiele unserer Custom Node Entwicklungen
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="space-y-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <SimpleGrid cols={2} className="items-center">
                {index % 2 === 0 ? (
                  <>
                    <div className="p-8">
                      <Typo.H3 className="mb-4">{useCase.title}</Typo.H3>
                      <Typo.Paragraph className="text-gray-600 mb-6">
                        {useCase.description}
                      </Typo.Paragraph>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="text-primary-600 font-semibold">
                            Benefit:
                          </span>
                          <span className="text-gray-700">
                            {useCase.benefit}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-primary-600 font-semibold">
                            Timeline:
                          </span>
                          <span className="text-gray-700">
                            {useCase.timeline}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="relative h-80">
                      <Image
                        src={useCase.image}
                        alt={useCase.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative h-80">
                      <Image
                        src={useCase.image}
                        alt={useCase.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <Typo.H3 className="mb-4">{useCase.title}</Typo.H3>
                      <Typo.Paragraph className="text-gray-600 mb-6">
                        {useCase.description}
                      </Typo.Paragraph>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="text-primary-600 font-semibold">
                            Benefit:
                          </span>
                          <span className="text-gray-700">
                            {useCase.benefit}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-primary-600 font-semibold">
                            Timeline:
                          </span>
                          <span className="text-gray-700">
                            {useCase.timeline}
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </SimpleGrid>
            </div>
          ))}
        </div>
      </ContentWrapper>

      {/* Tech Stack */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.Headline>Technologie-Stack</IntroBox.Headline>
          <IntroBox.Paragraph>
            Modern, robust und zukunftssicher
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={4} className="gap-6">
          {techStack.map((tech, index) => (
            <SimpleCard
              key={index}
              icon={
                <Image
                  src={tech.iconSrc}
                  alt={tech.name}
                  width={64}
                  height={64}
                />
              }
            >
              <Typo.H3 className="mb-3">{tech.name}</Typo.H3>
              <Typo.Paragraph className="text-gray-600 text-sm">
                {tech.description}
              </Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      {/* Development Process */}
      <ContentWrapper background="bg-gray-50" bodyWidth="small">
        <IntroBox>
          <IntroBox.Headline>Entwicklungsprozess</IntroBox.Headline>
          <IntroBox.Paragraph>
            Von der Konzeption bis zum Production-Deployment
          </IntroBox.Paragraph>
        </IntroBox>

        <TimelineAsSteps>
          {developmentPhases.map((phase, index) => (
            <TimelineAsStepsStep
              key={phase.number}
              value={phase.number}
              isLast={index === developmentPhases.length - 1}
            >
              <PhaseCard>
                <PhaseCardHeader>
                  <PhaseCardTitle>{phase.title}</PhaseCardTitle>
                  <PhaseCardBadge>{phase.duration}</PhaseCardBadge>
                </PhaseCardHeader>
                <PhaseCardDescription>{phase.description}</PhaseCardDescription>
              </PhaseCard>
            </TimelineAsStepsStep>
          ))}
        </TimelineAsSteps>
      </ContentWrapper>

      {/* Integration Capabilities */}
      <ContentWrapper>
        <SimpleGrid cols={2} className="gap-12">
          <div>
            <Typo.H2 className="mb-6">Unterstützte API-Typen</Typo.H2>
            <div className="space-y-3">
              {apiTypes.map((api, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg"
                >
                  <span className="text-primary-600">✓</span>
                  <span className="font-medium text-gray-900">{api}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Typo.H2 className="mb-6">Authentifizierung</Typo.H2>
            <div className="space-y-3">
              {authMethods.map((method, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg"
                >
                  <span className="text-primary-600">✓</span>
                  <span className="font-medium text-gray-900">{method}</span>
                </div>
              ))}
            </div>
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Client Logos */}
      <ContentWrapper noPadding>
        <Customer />
      </ContentWrapper>

      {/* Contact CTA */}
      <ContentWrapper noPadding>
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
