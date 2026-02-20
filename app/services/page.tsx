import type { Metadata } from "next";
import Link from "next/link";
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
import IntroBox from "@/components/intro-box";
import BoundlessImageCard from "@/components/cards/boundless-image-card";
import SimpleCard from "@/components/cards/simple-card";

export const metadata: Metadata = {
  title: "n8n Services | Bluebatch",
  description:
    "Professionelle n8n Services: Hosting, Wartung, Custom Nodes, Schulungen und Performance Scaling. Ihr Partner für Enterprise n8n.",
  openGraph: {
    title: "n8n Services | Bluebatch",
    description:
      "Von Hosting bis High-Performance Scaling – alle n8n Services aus einer Hand.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch n8n Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "n8n Services | Bluebatch",
    description:
      "Professionelle n8n Services für Ihr Unternehmen. Hosting, Wartung, Entwicklung und mehr.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/services",
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
    icon: "🏆",
    title: "Alles aus einer Hand",
    description:
      "Von Hosting bis Scaling – alle n8n Services von einem Partner. Keine Schnittstellenprobleme, klare Verantwortung.",
  },
  {
    icon: "🔒",
    title: "Enterprise-ready",
    description:
      "Production-tested Lösungen für Enterprise-Kunden. High Availability, Security, Compliance.",
  },
  {
    icon: "⚡",
    title: "Schneller ROI",
    description:
      "Messbare Ergebnisse innerhalb von 90 Tagen. 200-240% ROI bei Automatisierungsprojekten.",
  },
  {
    icon: "🇩🇪",
    title: "Made in Germany",
    description:
      "Deutschsprachiger Support, DSGVO-konform, Server in der EU. Ihre Daten bleiben in Deutschland.",
  },
];

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Services</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Professionelle n8n Services
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Von Hosting über Wartung bis zu Custom Development und Schulungen
              – wir sind Ihr Full-Service-Partner für Enterprise n8n. Alles aus
              einer Hand, made in Germany.
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
      <ContentWrapper noPadding border="T">
        <Customer />
      </ContentWrapper>

      {/* Services Grid */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.Headline>Unsere Services</IntroBox.Headline>
          <IntroBox.Paragraph>
            Maßgeschneiderte Lösungen für jede Phase Ihrer n8n-Journey – vom
            ersten Setup bis zur Enterprise-Skalierung.
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="space-y-8">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
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
                  <span className="inline-flex items-center text-primary-600 font-medium group-hover:underline">
                    Mehr erfahren →
                  </span>
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
      <ContentWrapper background="bg-gray-50">
        <IntroBox>
          <IntroBox.Headline>
            Warum Bluebatch als n8n Partner?
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Ihr Full-Service-Partner für Enterprise n8n
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={4} className="gap-8">
          {benefits.map((benefit, index) => (
            <SimpleCard
              key={index}
              icon={<div className="text-5xl">{benefit.icon}</div>}
            >
              <Typo.H3 className="mb-3">{benefit.title}</Typo.H3>
              <Typo.Paragraph>{benefit.description}</Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      {/* CTA Section */}
      <ContentWrapper background="bg-primary-900">
        <IntroBox dark>
          <IntroBox.Headline>
            Nicht sicher, welcher Service der richtige ist?
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Wir beraten Sie gerne kostenlos und unverbindlich. In einem kurzen
            Gespräch finden wir heraus, welche Services Ihrem Unternehmen am
            meisten helfen.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="flex gap-4 justify-center">
          <ContactButton size="lg">Kostenlose Beratung anfragen</ContactButton>
        </div>
      </ContentWrapper>

      {/* Contact CTA */}
      <ContentWrapper noPadding>
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
