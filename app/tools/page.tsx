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
  title: "Tools & Integrationen | Bluebatch",
  description:
    "Die Tools, die wir automatisieren: n8n, Microsoft Dynamics NAV (Navision) und Easybill. Nahtlose Integration und Workflow-Automatisierung durch Bluebatch.",
  openGraph: {
    title: "Tools & Integrationen | Bluebatch",
    description:
      "n8n, Navision und Easybill – wir verbinden und automatisieren Ihre Business-Tools.",
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
    title: "Tools & Integrationen | Bluebatch",
    description:
      "Die Tools, die wir automatisieren: n8n, Navision und Easybill.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/tools",
  },
};

const tools = [
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
              Die Tools, die wir automatisieren
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Von Workflow-Automatisierung über ERP bis Buchhaltung – wir
              verbinden und automatisieren Ihre wichtigsten Business-Tools über
              n8n. Nahtlos, zuverlässig und DSGVO-konform.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Beratung anfragen</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              n8n • Navision • Easybill
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

      <ContentWrapper noPadding border="T">
        <Customer />
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox>
          <IntroBox.Headline>Unsere Tool-Expertise</IntroBox.Headline>
          <IntroBox.Paragraph>
            Wir kennen diese Tools im Detail und automatisieren Ihre Prozesse
            mit maßgeschneiderten n8n-Workflows.
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="space-y-8">
          {tools.map((tool, index) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
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
                  <Typo.Paragraph className="text-gray-600 mb-6">
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
      </ContentWrapper>

      <ContentWrapper background="bg-gray-50">
        <IntroBox>
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

      <ContentWrapper noPadding>
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
