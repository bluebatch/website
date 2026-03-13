import type { Metadata } from "next";
import Link from "next/link";
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
import Customer from "@/components/sections/customer/customer";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import IntroBox from "@/components/ui/intro-box";
import BoundlessImageCard from "@/components/cards/boundless-image-card";
import SimpleCard from "@/components/cards/simple-card";
import { InternalLinkLabel } from "@/components/buttons/internal-link";

export const metadata: Metadata = {
  title: "Tools im Überblick | Bluebatch",
  description:
    "Alle Tools im Überblick: Automatisierungs-Tools (n8n, Make, Zapier, Power Automate, Workato, UiPath) und Großhandel-Tools (Navision, Easybill). Beratung, Migration und Integration durch Bluebatch.",
  openGraph: {
    title: "Tools im Überblick | Bluebatch",
    description:
      "Automatisierungs-Tools und Großhandel-Tools – wir beraten, migrieren und automatisieren.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch Tools & Integrationen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tools im Überblick | Bluebatch",
    description:
      "Automatisierungs-Tools und Großhandel-Tools – Beratung und Migration.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/tools",
  },
};

const automationTools = [
  {
    slug: "n8n",
    title: "n8n",
    shortDescription: "Workflow-Automatisierungsplattform",
    description:
      "n8n ist die Open-Source Workflow-Automatisierungsplattform, die visuelle Prozessgestaltung mit Code-Flexibilität verbindet. Mit über 1.200 Integrationen automatisieren Sie komplexe Geschäftsprozesse – self-hosted oder in der Cloud.",
    features: [
      "1.200+ Integrationen",
      "Visual Builder + Code",
      "Self-Hosted Option",
      "Enterprise-ready",
    ],
    image: "/images/digital-workflow.jpg",
  },
  {
    slug: "make",
    title: "Make (Integromat)",
    shortDescription: "Visueller Szenario-Builder",
    description:
      "Make ist die visuelle Automatisierungsplattform mit über 3.000 Integrationen. Wir beraten bei der Optimierung Ihrer Make-Szenarien und unterstützen bei der Migration zu n8n für mehr Kontrolle und Kosteneffizienz.",
    features: [
      "3.000+ Integrationen",
      "Visueller Builder",
      "KI-Module",
      "Migrationsberatung",
    ],
    image: "/images/technology-integration.jpg",
  },
  {
    slug: "zapier",
    title: "Zapier",
    shortDescription: "No-Code Automatisierung",
    description:
      "Zapier verbindet über 8.000 Apps und ist die meistgenutzte No-Code-Automatisierungsplattform. Wir helfen bei der Optimierung und beim kosteneffizienten Umstieg auf n8n – mit bis zu 90% Einsparung.",
    features: [
      "8.000+ Integrationen",
      "Einfachste Bedienung",
      "KI-Features",
      "Migrationsberatung",
    ],
    image: "/images/technology-integration.jpg",
  },
  {
    slug: "power-automate",
    title: "Microsoft Power Automate",
    shortDescription: "Microsoft-Automatisierung & RPA",
    description:
      "Power Automate ist Microsofts Automatisierungsplattform mit 1.000+ Konnektoren und Desktop-RPA. Wir beraten unabhängig und unterstützen bei der Migration zu n8n – mit bis zu 80% Kosteneinsparung.",
    features: [
      "1.000+ Konnektoren",
      "Desktop Flows (RPA)",
      "Microsoft-Ökosystem",
      "Unabhängige Beratung",
    ],
    image: "/images/technology-integration.jpg",
  },
  {
    slug: "workato",
    title: "Workato",
    shortDescription: "Enterprise iPaaS",
    description:
      "Workato ist die Enterprise-iPaaS-Plattform mit 1.200+ Konnektoren und KI-Copilot. Bei Kosten von bis zu 180.000 €/Jahr helfen wir bei der Migration zu n8n – mit bis zu 90% Einsparung.",
    features: [
      "1.200+ Konnektoren",
      "Enterprise Governance",
      "KI-Copilot",
      "Migrationsberatung",
    ],
    image: "/images/technology-integration.jpg",
  },
  {
    slug: "uipath",
    title: "UiPath",
    shortDescription: "Robotic Process Automation",
    description:
      "UiPath ist der Marktführer für RPA mit Desktop-Automatisierung, KI und Process Mining. Wir beraten zur optimalen Kombination von UiPath-RPA und n8n-API-Automatisierung.",
    features: [
      "Desktop-RPA",
      "KI & Document AI",
      "Process Mining",
      "Hybride Strategie",
    ],
    image: "/images/technology-integration.jpg",
  },
  {
    slug: "tray-io",
    title: "Tray.io (Tray.ai)",
    shortDescription: "Enterprise Automation Cloud",
    description:
      "Tray.ai ist die Enterprise-Automatisierungsplattform mit Merlin AI und 600+ Konnektoren. Wir helfen bei der kosteneffizienten Migration zu n8n – mit bis zu 90% Ersparnis.",
    features: [
      "600+ Konnektoren",
      "Merlin AI",
      "Embedded iPaaS",
      "Migrationsberatung",
    ],
    image: "/images/technology-integration.jpg",
  },
  {
    slug: "activepieces",
    title: "Activepieces",
    shortDescription: "Open-Source Automatisierung",
    description:
      "Activepieces ist eine MIT-lizenzierte Open-Source-Alternative mit 560+ Integrationen. Wir beraten zum Vergleich mit n8n und unterstützen bei der Migration zur leistungsstärkeren Plattform.",
    features: [
      "MIT-Lizenz",
      "560+ Integrationen",
      "KI-Agenten",
      "Vergleichsberatung",
    ],
    image: "/images/technology-integration.jpg",
  },
  {
    slug: "pipedream",
    title: "Pipedream",
    shortDescription: "Developer-First Automatisierung",
    description:
      "Pipedream ist die Code-native Automatisierungsplattform mit 2.800+ Integrationen. Nach der Workday-Übernahme beraten wir zur DSGVO-konformen Migration auf n8n.",
    features: [
      "2.800+ Integrationen",
      "Code-First Ansatz",
      "npm/PyPI-Zugriff",
      "Migrationsberatung",
    ],
    image: "/images/technology-integration.jpg",
  },
];

const grosshandelTools = [
  {
    slug: "navision",
    title: "Microsoft Dynamics NAV (Navision)",
    shortDescription: "Enterprise Resource Planning",
    description:
      "Microsoft Dynamics NAV – heute Dynamics 365 Business Central – ist das ERP-System für den Mittelstand. Wir automatisieren Ihre Navision-Prozesse über n8n und schaffen nahtlose Verbindungen zu Ihren anderen Systemen.",
    features: [
      "Finanzmanagement",
      "Supply Chain",
      "Microsoft-Ökosystem",
      "Cloud & On-Premise",
    ],
    image: "/images/business-analytics.jpg",
  },
  {
    slug: "easybill",
    title: "Easybill",
    shortDescription: "Cloud-Rechnungssoftware",
    description:
      "Easybill ist die deutsche Cloud-Rechnungssoftware für KMU und Freelancer. Mit ZUGFeRD, XRechnung und DATEV-Integration ist Easybill die ideale Basis für automatisierte Buchhaltungsprozesse.",
    features: [
      "ZUGFeRD & XRechnung",
      "DATEV-Export",
      "E-Commerce-Integration",
      "DSGVO-konform",
    ],
    image: "/images/invoice-processing.jpg",
  },
];

const benefits = [
  {
    icon: "🔗",
    title: "Nahtlose Integration",
    description:
      "Wir verbinden alle Ihre Tools über n8n miteinander – ohne manuelle Schnittstellen, ohne Datenverlust.",
  },
  {
    icon: "⚡",
    title: "Automatisierte Workflows",
    description:
      "Kein manueller Datentransfer mehr zwischen Systemen. Ihre Prozesse laufen automatisch und fehlerfrei.",
  },
  {
    icon: "🇩🇪",
    title: "Deutsche Expertise",
    description:
      "DSGVO-konform, deutschsprachiger Support und tiefes Verständnis für deutsche Business-Software.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Tools</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Unsere Tools im Überblick
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Von Automatisierungs-Tools wie n8n, Make und Zapier bis zu
              Großhandel-Tools wie Navision und Easybill – wir kennen alle
              Plattformen und beraten Sie unabhängig. Migration, Integration und
              Optimierung aus einer Hand.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Beratung anfragen</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              n8n • Make • Zapier • Power Automate • Navision • Easybill
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

      <ContentWrapper noPadding bodyWidth="full">
        <Customer />
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Tool-Übersicht</IntroBox.PreHeadline>
          <IntroBox.Headline>Automatisierungs-Tools</IntroBox.Headline>
          <IntroBox.Paragraph>
            Wir kennen alle Automatisierungsplattformen im Detail und beraten
            Sie unabhängig bei Migration, Integration und Optimierung.
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="space-y-8">
          {automationTools.map((tool, index) => (
            <Link
              key={tool.slug}
              href={`/tools/automation-tools/${tool.slug}`}
              className="block group"
            >
              <BoundlessImageCard
                imagePosition={index % 2 === 0 ? "right" : "left"}
                className="cursor-pointer"
              >
                <BoundlessImageCard.Content>
                  <div className="flex items-center gap-4 mb-4">
                    <div>
                      <Typo.H3 className="mb-1 group-hover:text-primary-600 transition-colors">
                        {tool.title}
                      </Typo.H3>
                      <p className="text-primary-600 font-medium">
                        {tool.shortDescription}
                      </p>
                    </div>
                  </div>
                  <Typo.Paragraph textColor="muted" spacing="lg">
                    {tool.description}
                  </Typo.Paragraph>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {tool.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-gray-700 text-sm"
                      >
                        <span className="text-primary-600">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <InternalLinkLabel>Mehr erfahren</InternalLinkLabel>
                </BoundlessImageCard.Content>

                <BoundlessImageCard.Image
                  fadeGradient
                  src={tool.image}
                  alt={tool.title}
                />
              </BoundlessImageCard>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/tools/automation-tools"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
          >
            Alle Automatisierungs-Tools ansehen
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Tool-Übersicht</IntroBox.PreHeadline>
          <IntroBox.Headline>Großhandel-Tools</IntroBox.Headline>
          <IntroBox.Paragraph>
            ERP-Integration und Rechnungsautomatisierung für den Großhandel –
            maßgeschneidert mit n8n.
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="space-y-8">
          {grosshandelTools.map((tool, index) => (
            <Link
              key={tool.slug}
              href={`/tools/grosshandel/${tool.slug}`}
              className="block group"
            >
              <BoundlessImageCard
                imagePosition={index % 2 === 0 ? "right" : "left"}
                className="cursor-pointer"
              >
                <BoundlessImageCard.Content>
                  <div className="flex items-center gap-4 mb-4">
                    <div>
                      <Typo.H3 className="mb-1 group-hover:text-primary-600 transition-colors">
                        {tool.title}
                      </Typo.H3>
                      <p className="text-primary-600 font-medium">
                        {tool.shortDescription}
                      </p>
                    </div>
                  </div>
                  <Typo.Paragraph textColor="muted" spacing="lg">
                    {tool.description}
                  </Typo.Paragraph>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {tool.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-gray-700 text-sm"
                      >
                        <span className="text-primary-600">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <InternalLinkLabel>Mehr erfahren</InternalLinkLabel>
                </BoundlessImageCard.Content>

                <BoundlessImageCard.Image
                  fadeGradient
                  src={tool.image}
                  alt={tool.title}
                />
              </BoundlessImageCard>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/tools/grosshandel"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
          >
            Alle Großhandel-Tools ansehen
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Ihr Partner</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Warum Bluebatch als Integrations-Partner?
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Wir verbinden Ihre Tools zu einem nahtlosen Gesamtsystem
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={3} className="gap-8">
          {benefits.map((benefit, index) => (
            <SimpleCard key={index}>
              <SimpleCard.Icon>
                <div className="text-5xl">{benefit.icon}</div>
              </SimpleCard.Icon>
              <Typo.H3 className="mb-3">{benefit.title}</Typo.H3>
              <Typo.Paragraph>{benefit.description}</Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
