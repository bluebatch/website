import type { Metadata } from "next";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import Link from "next/link";
import { resolveHref } from "@/lib/get-canonical-path";
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

export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-implementierung",
  rewrites: [
    {
      source: "/ki-implementierung",
    },
  ],
};

export const metadata: Metadata = {
  title: "KI-Implementierung & Services | Bluebatch",
  description:
    "Implementierung von KI vom Experten: Professionelle Services für KI Agenten Integration, Prozess Automation und Systemintegration. Ihre Softwareentwicklung Firma für n8n.",
  keywords: [
    "Implementierung von KI",
    "KI Agenten Integration",
    "KI Agenten Beratung",
    "Systemintegration Beratung",
    "Prozesse aufsetzen",
    "Schnittstellen Management",
    "Automatisierung Prozess",
    "Prozess Automation",
    "Softwareentwicklung Firma",
    "Consulting Services IT",
  ],
  openGraph: {
    title: "Implementierung von KI & Services | Bluebatch",
    description:
      "KI erfolgreich implementieren – von KI Agenten Integration bis Prozess Automation, alle Services aus einer Hand.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch KI Services und Implementierung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Implementierung von KI & Services | Bluebatch",
    description:
      "KI erfolgreich implementieren für Ihr Unternehmen. Consulting Services IT, Prozess Automation und mehr.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/ki-implementierung",
  },
};

const services = [
  {
    slug: "n8n-hosting",
    title: "n8n Hosting",
    shortDescription: "Self-Hosting auf Ihrer Infrastruktur",
    description:
      "Professionelles n8n Hosting auf Ihrer eigenen Infrastruktur – OnPrem oder Cloud. Maximale Datenkontrolle, DSGVO-konform und kosteneffizient. Unbegrenzte Workflows ab €50/Monat.",
    icon: "🏢",
    features: [
      "100% Datenkontrolle",
      "DSGVO-konform",
      "OnPrem oder Cloud",
      "Ab €50/Monat",
    ],
    color: "from-blue-500 to-blue-600",
    image: "/images/technology-integration.jpg",
  },
  {
    slug: "workflow-wartung",
    title: "Workflow-Wartung",
    shortDescription: "Servicevertrag mit 99,9% Uptime",
    description:
      "Professionelle Wartung Ihrer n8n-Workflows. 24/7 Monitoring, proaktive Updates, Performance-Optimierung. Fokussieren Sie sich auf Ihr Business – wir kümmern uns um die Technik.",
    icon: "🔧",
    features: [
      "24/7 Monitoring",
      "Proaktive Updates",
      "99,9% Uptime SLA",
      "Ab €250/Monat",
    ],
    color: "from-green-500 to-green-600",
    image: "/images/business-analytics.jpg",
  },
  {
    slug: "custom-nodes",
    title: "Custom Node Development",
    shortDescription: "Maßgeschneiderte Integrationen",
    description:
      "Es gibt keinen Node für Ihre App? Wir entwickeln Custom n8n Nodes für jede API, jedes System. TypeScript, Node.js, professionelle Entwicklung und langfristige Wartung.",
    icon: "💻",
    features: [
      "Jede API-Integration",
      "TypeScript & Node.js",
      "Langfristige Wartung",
      "Ab 3-7 Tage",
    ],
    color: "from-purple-500 to-purple-600",
    image: "/images/web-development.jpg",
  },
  {
    slug: "schulungen",
    title: "Schulungen & Workshops",
    shortDescription: "Befähigen Sie Ihr Team",
    description:
      "Praxisorientierte n8n Schulungen für Ihr Team. Vor-Ort, Online oder Hybrid. Von Grundlagen bis Enterprise-Features. Individuell auf Ihre Anforderungen zugeschnitten.",
    icon: "🎓",
    features: [
      "Vor-Ort / Online",
      "Max. 10 Teilnehmer",
      "Zertifizierung",
      "Individuelle Inhalte",
    ],
    color: "from-orange-500 to-orange-600",
    image: "/images/training-seminar.jpg",
  },
  {
    slug: "performance-scaling",
    title: "Performance Scaling",
    shortDescription: "Von 23 auf 162 Requests/Sekunde",
    description:
      "n8n laggt oder crashed? Wir lösen Performance-Probleme mit Redis, RabbitMQ und Docker Swarm. 7x höherer Throughput, 0% Fehlerrate, 99,9% Uptime garantiert.",
    icon: "🚀",
    features: [
      "7x Performance-Gain",
      "Queue Mode Setup",
      "High Availability",
      "Ab €1.500 Audit",
    ],
    color: "from-red-500 to-red-600",
    image: "/images/process-automation.jpg",
  },
];

const benefits = [
  {
    iconSrc: "/icons/handshake.svg",
    title: "Schnittstellen Management aus einer Hand",
    description:
      "Von Hosting bis Scaling – alle n8n Services von einem Partner. Professionelles Schnittstellen Management, klare Verantwortung.",
  },
  {
    iconSrc: "/icons/enterprise.svg",
    title: "Enterprise-ready",
    description:
      "Production-tested Lösungen für Enterprise-Kunden. High Availability, Security, Compliance.",
  },
  {
    iconSrc: "/icons/return-of-investment.svg",
    title: "Schneller ROI",
    description:
      "Messbare Ergebnisse innerhalb von 90 Tagen. 200-240% ROI bei Automatisierungsprojekten.",
  },
  {
    iconSrc: "/icons/flag-for-flag-germany.svg",
    title: "Made in Germany",
    description:
      "Deutschsprachiger Support, DSGVO-konform, Server in der EU. Ihre Daten bleiben in Deutschland.",
  },
];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  await enforceMainRewrite(rewriteSiteConfig, searchParams);

  return (
    <>
      {/* Hero Section */}
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Services</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              KI-Implementierung & Professionelle Services
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Implementierung von KI vom Experten: Von KI Agenten Integration über
              Schnittstellen Management bis zu Prozess Automation – wir sind
              Ihre Softwareentwicklung Firma für Enterprise n8n. Consulting
              Services IT aus einer Hand, made in Germany.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Beratung anfragen</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              5 Services • Enterprise-ready • DSGVO-konform
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/business-automation.jpg"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Client Logos */}
      <ContentWrapper noPadding bodyWidth="full">
        <Customer />
      </ContentWrapper>

      {/* Services Grid */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.Headline>Unsere Services für KI Agenten Beratung</IntroBox.Headline>
          <IntroBox.Paragraph>
            Maßgeschneiderte Lösungen für jede Phase Ihrer KI-Integration –
            vom Prozesse aufsetzen über Systemintegration Beratung bis zur
            Enterprise-Skalierung.
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="space-y-8">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={resolveHref(`/services/${service.slug}`)}
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
                        {service.title}
                      </Typo.H3>
                      <p className="text-primary-600 font-medium">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>
                  <Typo.Paragraph className="text-gray-600 mb-6">
                    {service.description}
                  </Typo.Paragraph>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, idx) => (
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
                  src={service.image}
                  alt={service.title}
                />
              </BoundlessImageCard>
            </Link>
          ))}
        </div>
      </ContentWrapper>

      {/* Benefits */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.Headline>
            Warum Bluebatch für Automatisierung Prozess & Implementierung von KI?
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Ihr Full-Service-Partner für Enterprise n8n und KI Agenten
            Integration
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={4} className="gap-8">
          {benefits.map((benefit, index) => (
            <SimpleCard key={index}>
              <SimpleCard.Icon
                src={benefit.iconSrc}
                alt={benefit.title}
                color="primary"
              />
              <Typo.H3 className="mb-3">{benefit.title}</Typo.H3>
              <Typo.Paragraph>{benefit.description}</Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      {/* CTA Section */}
      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark>
          <IntroBox.Headline>
            Nicht sicher, welcher Service der richtige ist?
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Wir beraten Sie gerne kostenlos und unverbindlich. In einem kurzen
            Gespräch finden wir heraus, welche Consulting Services IT und
            Prozess Automation Ihrem Unternehmen am meisten helfen.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="flex gap-4 justify-center">
          <ContactButton size="lg">Kostenlose Beratung anfragen</ContactButton>
        </div>
      </ContentWrapper>

      {/* Contact CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
