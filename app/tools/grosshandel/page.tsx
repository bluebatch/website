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
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import IntroBox from "@/components/ui/intro-box";
import BoundlessImageCard from "@/components/cards/boundless-image-card";
import SimpleCard from "@/components/cards/simple-card";
import { InternalLinkLabel } from "@/components/buttons/internal-link";

export const metadata: Metadata = {
  title: "Großhandel-Tools im Überblick | Bluebatch",
  description:
    "Großhandel-Tools für Automatisierung: Microsoft Dynamics NAV (Navision) und Easybill. ERP-Integration, Rechnungsautomatisierung und DATEV-Anbindung durch Bluebatch.",
  openGraph: {
    title: "Großhandel-Tools im Überblick | Bluebatch",
    description:
      "Navision und Easybill – ERP-Integration und Rechnungsautomatisierung für den Großhandel.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch Großhandel-Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Großhandel-Tools im Überblick | Bluebatch",
    description:
      "Navision und Easybill – ERP-Integration und Rechnungsautomatisierung für den Großhandel.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/tools/grosshandel",
  },
};

const tools = [
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
    title: "ERP-Integration",
    description:
      "Wir verbinden Navision und Easybill nahtlos mit Ihren bestehenden Systemen – automatisch und fehlerfrei.",
  },
  {
    icon: "⚡",
    title: "Prozessautomatisierung",
    description:
      "Von Auftragsimport über Rechnungserstellung bis Lagerabgleich – Ihre Großhandelsprozesse laufen vollautomatisch.",
  },
  {
    icon: "🇩🇪",
    title: "Deutsche Expertise",
    description:
      "DSGVO-konform, deutschsprachiger Support und tiefes Verständnis für deutsche Großhandels-Software.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Großhandel-Tools</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Großhandel-Tools im Überblick
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Navision und Easybill – wir automatisieren Ihre
              Großhandelsprozesse mit maßgeschneiderten n8n-Workflows.
              ERP-Integration, Rechnungsautomatisierung und DATEV-Anbindung aus
              einer Hand.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Beratung anfragen</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>Navision • Easybill</Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/business-analytics.jpg"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Expertise</IntroBox.PreHeadline>
          <IntroBox.Headline>Unsere Großhandel-Expertise</IntroBox.Headline>
          <IntroBox.Paragraph>
            Wir kennen diese Tools im Detail und automatisieren Ihre
            Großhandelsprozesse mit maßgeschneiderten n8n-Workflows.
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="space-y-8">
          {tools.map((tool, index) => (
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
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Ihr Partner</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Warum Bluebatch als Integrations-Partner?
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Wir verbinden Ihre Großhandel-Tools zu einem nahtlosen Gesamtsystem
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
