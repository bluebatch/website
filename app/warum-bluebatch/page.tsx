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
import Customer from "@/components/customer/customer";
import ConsultationCtaDefault from "@/components/consultation-cta-default";
import SimpleCard from "@/components/cards/simple-card";
import BoundlessImageCard from "@/components/cards/boundless-image-card";
import IntroBox from "@/components/intro-box";
import Icon from "@/components/icon";

export const metadata: Metadata = {
  title: "Warum BlueBatch? Enterprise IT-Experten, keine Agentur | BlueBatch",
  description:
    "Wir sind keine n8n-Agentur. Wir sind Enterprise IT-Experten mit Development Background und tiefem Datenverständnis. Wir verstehen, wo Systeme welche Daten verarbeiten – für DSGVO-konforme Workflows.",
  openGraph: {
    title: "Warum BlueBatch? Enterprise IT-Experten, keine Agentur",
    description:
      "Enterprise IT-Background, tiefes Datenverständnis, DSGVO-Expertise. Wir verstehen Datenstrukturen und System-Architekturen.",
    type: "website",
    locale: "de_DE",
    siteName: "BlueBatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "BlueBatch - Enterprise IT Experten",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Warum BlueBatch? Enterprise IT-Experten, keine Agentur",
    description:
      "Enterprise IT-Background, tiefes Datenverständnis, DSGVO-Expertise. Wir verstehen Datenstrukturen und System-Architekturen.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/warum-bluebatch",
  },
};

const agencyVsExperts = [
  {
    category: "Technische Tiefe",
    agencyPoints: [
      "Standard-Workflows & Templates",
      "Oberflächliche Integration",
      "Keine Custom Node Development",
      "Marketing- & Sales-fokussiert",
      "Begrenzte Monitoring-Tools",
    ],
    expertsPoints: [
      "Custom Development auf SDK-Ebene",
      "Performance Engineering & Optimization",
      "TypeScript/Node.js Expertise",
      "Deep Technical Integration",
      "npm Package Publishing",
    ],
    image: "/images/web-development.jpg",
  },
  {
    category: "Team-Struktur",
    agencyPoints: [
      "Marketing- & Sales-getrieben",
      "Projektbasierte Teams",
      "Begrenzte technische Tiefe",
      "Externe Consultants",
      "Hohe Fluktuation",
    ],
    expertsPoints: [
      "DevOps Engineers & Data Engineers",
      "IT Architects & Security Specialists",
      "Hub-and-Spoke Model",
      "Langfristige Team-Stabilität",
      "Interne Development Capacity",
    ],
    image: "/images/team-collaboration.jpg",
  },
  {
    category: "Skalierung & Performance",
    agencyPoints: [
      "Basic Single-Instance Setup",
      "Begrenzte Load Capacity",
      "Keine High Availability",
      "Standard Cloud-Hosting",
      "Manuelle Deployments",
    ],
    expertsPoints: [
      "Redis Queue Mode für High-Volume",
      "Kubernetes Orchestration",
      "Auto-Scaling & Load Balancing",
      "Multi-Region Deployments",
      "Zero-Downtime Migrations",
    ],
    image: "/images/process-automation.jpg",
  },
  {
    category: "Datenverständnis & DSGVO",
    agencyPoints: [
      "Standard Security Setup",
      "Oberflächliches Datenverständnis",
      "Basis-Compliance",
      "Keine Datenfluss-Analyse",
      "Generische Datenschutz-Templates",
    ],
    expertsPoints: [
      "Tiefes Verständnis von Datenstrukturen",
      "Datenfluss-Analyse zwischen Systemen",
      "DSGVO-Architektur Design",
      "ISO 27001 Compliance",
      "Security Audits & Penetration Testing",
    ],
    image: "/images/technology-integration.jpg",
  },
  {
    category: "Support & Wartung",
    agencyPoints: [
      "Keine 24/7 Support",
      "Hohe Stundensätze für Changes",
      "Abhängigkeit von Availability",
      "Begrenzte SLAs",
      "Reaktiver Support",
    ],
    expertsPoints: [
      "Dedicated Support mit SLA-Garantien",
      "24/7 Monitoring & Alerting",
      "Fixe Wartungsverträge",
      "Proactive Optimization",
      "Transparente Kosten",
    ],
    image: "/images/team-meeting.jpg",
  },
  {
    category: "Integration & Legacy",
    agencyPoints: [
      "Standard REST APIs only",
      "Keine Legacy-Integration",
      "Begrenzte Protokoll-Expertise",
      "Cloud-First Ansatz",
      "Keine On-Premise Experience",
    ],
    expertsPoints: [
      "On-Premise ERP Integration",
      "SOAP/XML Services",
      "Proprietäre Protokolle",
      "VPN & Network-Level Integration",
      "Hybrid Cloud Architectures",
    ],
    image: "/images/factory.jpg",
  },
];

const technicalExpertise = [
  {
    title: "Custom Node Development",
    description:
      "Echte TypeScript/Node.js Entwicklung auf SDK-Ebene. npm Package Publishing, komplexe OAuth2 Flows, Performance-kritische Implementierungen.",
    iconSrc: "/icons/process.svg",
    features: [
      "TypeScript & Node.js SDK",
      "npm Registry Publishing",
      "Complex Auth Flows",
      "Performance Optimization",
    ],
  },
  {
    title: "Enterprise Infrastructure",
    description:
      "Multi-Region Deployments, Auto-Scaling, Zero-Downtime Migrations. Custom Monitoring & Alerting mit Prometheus & Grafana.",
    iconSrc: "/icons/building.svg",
    features: [
      "Kubernetes Orchestration",
      "Auto-Scaling Setup",
      "Zero-Downtime Migration",
      "Custom Monitoring",
    ],
  },
  {
    title: "Legacy-Integration",
    description:
      "Deep Integration mit On-Premise ERP, SOAP/XML Services, proprietären Protokollen. VPN & Network-Level Integration.",
    iconSrc: "/icons/factory.svg",
    features: [
      "On-Premise ERP Integration",
      "SOAP/XML Services",
      "Proprietary Protocols",
      "VPN Integration",
    ],
  },
  {
    title: "Datenarchitektur & Compliance",
    description:
      "Wir verstehen Datenstrukturen und Datenflüsse zwischen Systemen. Diese Expertise ermöglicht DSGVO-konforme Architekturen mit Verschlüsselung, Access Control und ISO 27001 Compliance.",
    iconSrc: "/icons/rocket.svg",
    features: [
      "Datenfluss-Analyse",
      "DSGVO-Architektur",
      "ISO 27001",
      "Security Audits",
    ],
  },
];

const whatAgenciesCantDo = [
  {
    title: "Kein echtes Custom Development",
    description:
      "Agenturen nutzen Standard-Templates und vorgefertigte Workflows. Custom Node Development auf SDK-Ebene? Fehlanzeige.",
    impact: "Limitiert auf Standard-Integrationen",
  },
  {
    title: "Keine Enterprise-Grade Infrastructure",
    description:
      "Basic Single-Instance Setup statt Multi-Region Deployments. Keine Auto-Scaling Architectures oder Zero-Downtime Migrations.",
    impact: "Performance-Probleme bei Scale",
  },
  {
    title: "Oberflächliches Datenverständnis",
    description:
      "Fehlende Expertise in Datenfluss-Analyse und System-Architektur. Kein tiefes Verständnis wo welche Daten verarbeitet werden.",
    impact: "DSGVO-Risiken durch fehlendes Datenverständnis",
  },
  {
    title: "Keine langfristige Ownership",
    description:
      "Projektbasierte Arbeit ohne Continuous Optimization. Hohe Stundensätze für jede kleine Änderung.",
    impact: "Vendor Lock-in & hohe TCO",
  },
];

const ourApproach = [
  {
    title: "Hub-and-Spoke Model",
    description:
      "Zentrales Automation-Team etabliert Standards und Platform Support. Departmental Teams entwickeln spezifische Workflows.",
    benefit: "Skalierbar & Wartbar",
  },
  {
    title: "DevOps-First Mindset",
    description:
      "Infrastructure as Code, CI/CD Pipelines, Automated Testing. Monitoring & Alerting von Tag 1.",
    benefit: "Zuverlässig & Transparent",
  },
  {
    title: "Continuous Optimization",
    description:
      "Proactive Refactoring, Performance Tuning, Security Updates. Langfristige technische Ownership statt Projekt-Denken.",
    benefit: "Planbare Kosten",
  },
];

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Warum BlueBatch?</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Keine Agentur. Echte IT-Experten.
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Wir sind kein Marketing-Team mit n8n-Zugang. Wir sind Enterprise
              IT-Profis mit Development Background und tiefem Datenverständnis.
              Wir verstehen, wo Systeme welche Daten verarbeiten – die Basis für
              DSGVO-konforme, stabile und performante n8n-Workflows.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Unterschied verstehen</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              DevOps • Security • Performance • DSGVO
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage src="/images/team-meeting.jpg" type="image" />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Introduction */}
      <ContentWrapper>
        <div className="max-w-4xl mx-auto text-center">
          <Typo.Paragraph className="text-xl text-gray-700 leading-relaxed">
            Der Unterschied zwischen einer n8n-Agentur und einem Enterprise
            IT-Team ist fundamental: Agenturen verkaufen Workflows. Wir bauen
            stabile, skalierbare Systeme. Agenturen nutzen Templates. Wir
            entwickeln Custom Nodes. Agenturen verstehen Prozesse. Wir verstehen
            Datenstrukturen und können einschätzen, wo Systeme welche Daten
            verarbeiten.
          </Typo.Paragraph>
        </div>
      </ContentWrapper>

      {/* Client Logos */}
      <ContentWrapper noPadding>
        <Customer />
      </ContentWrapper>

      {/* Agentur vs. Experten Comparison */}
      <ContentWrapper background="bg-gray-50">
        <IntroBox>
          <IntroBox.Headline>Der fundamentale Unterschied</IntroBox.Headline>
          <IntroBox.Paragraph>
            Was typische n8n-Agenturen anbieten vs. was Enterprise IT-Teams
            leisten
          </IntroBox.Paragraph>
        </IntroBox>

        {/* Legend/Header */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid md:grid-cols-[1fr_12rem_1fr] items-center">
            <div className="text-center">
              <span className="text-lg font-bold text-red-900 uppercase tracking-wider">
                Typische Agentur
              </span>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <div className="w-full h-0.5 bg-gray-300"></div>
            </div>
            <div className="text-center">
              <span className="text-lg font-bold text-primary-900 uppercase tracking-wider">
                Enterprise IT-Team
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-16">
          {agencyVsExperts.map((item, index) => (
            <div key={index} className="max-w-5xl mx-auto">
              {/* Mobile Headline */}
              <div className="md:hidden mb-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  {item.category.split(" & ").map((part, idx, arr) => (
                    <span key={idx}>
                      {idx > 0 && "& "}
                      {part}
                      {idx < arr.length - 1 && <br />}
                    </span>
                  ))}
                </h3>
              </div>

              {/* Two Column Comparison */}
              <div className="grid md:grid-cols-[1fr_16rem_1fr] items-stretch gap-6 md:gap-0">
                {/* Agency Column - Left */}
                <div className="relative bg-white rounded-lg p-6 border-2 border-red-200 z-10 ">
                  <ul className="space-y-3 ">
                    {item.agencyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Icon.Cross
                          size="sm"
                          className="text-red-500 mt-0.5 flex-shrink-0"
                        />
                        <span className="text-sm text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                  {/* Connection Dot - Right Edge */}
                  <div className="hidden md:block absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 bg-red-400 rounded-full border-2 border-white shadow-sm"></div>
                </div>

                {/* Connection Line - Middle */}
                <div className="hidden md:flex relative items-center justify-center">
                  {/* Horizontal line connecting the dots */}
                  <div className="absolute left-0 right-0 h-0.5 bg-gray-400 z-1000"></div>

                  {/* Text positioned on top of the line */}
                  <div
                    className={`relative bg-gray-50 px-4 py-2 rounded-lg z-10 ${
                      item.category.includes(" & ") ? "pb-20" : "pb-10"
                    }`}
                  >
                    <h3 className="text-lg md:text-xl font-bold text-center text-gray-900 leading-tight">
                      {item.category.split(" & ").map((part, idx, arr) => (
                        <span key={idx}>
                          {idx > 0 && "& "}
                          {part}
                          {idx < arr.length - 1 && <br />}
                        </span>
                      ))}
                    </h3>
                  </div>
                </div>

                {/* IT-Team Column - Right */}
                <div className="relative bg-white rounded-lg p-6 border-2 border-primary-200">
                  {/* Connection Dot - Left Edge */}
                  <div className="hidden md:block absolute top-1/2 -left-2 -translate-y-1/2 w-4 h-4 bg-primary-400 rounded-full border-2 border-white shadow-sm"></div>

                  <ul className="space-y-3">
                    {item.expertsPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Icon.Checkmark
                          size="sm"
                          className="text-primary-600 mt-0.5 flex-shrink-0"
                        />
                        <span className="text-sm text-gray-900 font-medium">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentWrapper>

      {/* Technical Expertise */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Enterprise IT</IntroBox.PreHeadline>
          <IntroBox.Headline>Unsere technische Expertise</IntroBox.Headline>
          <IntroBox.Paragraph>
            Was uns von Standard-Agenturen unterscheidet
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={2} className="gap-8">
          {technicalExpertise.map((item, index) => (
            <SimpleCard
              key={index}
              icon={
                <Image
                  src={item.iconSrc}
                  alt={item.title}
                  width={64}
                  height={64}
                />
              }
            >
              <Typo.H3 className="mb-3">{item.title}</Typo.H3>
              <Typo.Paragraph className="text-gray-600 mb-6">
                {item.description}
              </Typo.Paragraph>
              <div className="bg-gray-50 rounded-lg p-4 mt-auto">
                <div className="grid grid-cols-2 gap-3">
                  {item.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-gray-700 text-sm"
                    >
                      <Icon.Checkmark
                        size="sm"
                        className="text-primary-600 flex-shrink-0 mt-0.5"
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      {/* What Agencies Can't Do */}
      <ContentWrapper background="bg-gradient-to-br from-red-50 to-orange-50">
        <IntroBox>
          <IntroBox.PreHeadline>Grenzen</IntroBox.PreHeadline>
          <IntroBox.Headline>Was Agenturen NICHT können</IntroBox.Headline>
          <IntroBox.Paragraph>
            Die technischen Grenzen von Standard n8n-Agenturen
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={2} className="gap-6">
          {whatAgenciesCantDo.map((item, index) => (
            <div
              key={index}
              className="bg-white border-l-4 border-red-500 rounded-lg p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon.Cross size="lg" className="text-red-500 flex-shrink-0" />
                <Typo.H3 disableMargin className="text-lg">
                  {item.title}
                </Typo.H3>
              </div>
              <Typo.Paragraph className="text-gray-600 mb-4">
                {item.description}
              </Typo.Paragraph>
              <div className="bg-red-50 px-4 py-2 rounded-lg">
                <span className="text-sm font-semibold text-red-700">
                  Konsequenz: {item.impact}
                </span>
              </div>
            </div>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      {/* Our Approach */}
      <ContentWrapper>
        <BoundlessImageCard imagePosition="left">
          <BoundlessImageCard.Image
            src="/images/technology-integration.jpg"
            alt="Enterprise IT Approach"
          />
          <BoundlessImageCard.Content>
            <Typo.H2 className="mb-6">Unser Enterprise IT-Ansatz</Typo.H2>
            <div className="space-y-6">
              {ourApproach.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon.Checkmark className="text-primary-600" />
                    <h4 className="font-semibold text-gray-900">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <span className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                    <Icon.Checkmark size="sm" className="text-primary-600" />
                    {item.benefit}
                  </span>
                </div>
              ))}
            </div>
          </BoundlessImageCard.Content>
        </BoundlessImageCard>
      </ContentWrapper>

      {/* Data Understanding & DSGVO */}
      <ContentWrapper background="bg-primary-900">
        <IntroBox dark>
          <IntroBox.PreHeadline>Datenverständnis</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Datenverständnis ist der Schlüssel zu DSGVO-Compliance
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Wir verstehen Datenstrukturen und können einschätzen, wo Systeme
            welche Daten verarbeiten. Diese Expertise ermöglicht uns,
            DSGVO-konforme Lösungen zu entwickeln – mit echter Data Residency,
            Verschlüsselung und ISO 27001 Compliance. Hosting-Optionen:
            On-Premise, Private Cloud oder Managed Cloud.
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-5xl font-bold text-white mb-2">
                Datenfluss
              </div>
              <p className="text-primary-100">Analyse & Verständnis</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">Flexibel</div>
              <p className="text-primary-100">Alle Hosting-Optionen</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">
                ISO 27001
              </div>
              <p className="text-primary-100">Security Standards</p>
            </div>
          </div>
        </div>
      </ContentWrapper>

      {/* Long-term Ownership */}
      <ContentWrapper background="bg-gray-50">
        <BoundlessImageCard imagePosition="right">
          <BoundlessImageCard.Content>
            <Typo.H2 className="mb-6">
              Langfristige Ownership statt Projekt-Denken
            </Typo.H2>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Continuous Optimization
                </h4>
                <p className="text-gray-600">
                  Proactive Refactoring, Performance Tuning, Security Updates.
                  Wir optimieren kontinuierlich, nicht nur bei bezahlten
                  Projekten.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Transparente Wartungsverträge
                </h4>
                <p className="text-gray-600">
                  Fixe monatliche Kosten statt unerwarteter Stundensätze.
                  Planbare Budgets mit inkludierten Entwicklungsstunden.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Knowledge Transfer
                </h4>
                <p className="text-gray-600">
                  Wir dokumentieren, schulen Ihr Team und übergeben Know-how.
                  Keine Vendor Lock-in Strategien.
                </p>
              </div>
            </div>
          </BoundlessImageCard.Content>

          <BoundlessImageCard.Image
            src="/images/business-analytics.jpg"
            alt="Long-term Partnership"
          />
        </BoundlessImageCard>
      </ContentWrapper>

      {/* CTA Section */}
      <ContentWrapper background="bg-primary-600">
        <IntroBox dark>
          <IntroBox.PreHeadline>Jetzt starten</IntroBox.PreHeadline>
          <IntroBox.Headline>Bereit für echte IT-Expertise?</IntroBox.Headline>
          <IntroBox.Paragraph>
            Lassen Sie uns in einem unverbindlichen Gespräch klären, ob
            Standard-Agentur-Lösungen ausreichen – oder ob Sie Enterprise
            IT-Expertise brauchen.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="flex gap-4 justify-center">
          <ContactButton size="lg">Kostenlose Beratung</ContactButton>
        </div>
      </ContentWrapper>

      {/* Contact CTA */}
      <ContentWrapper noPadding>
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
