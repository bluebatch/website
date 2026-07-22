import type { Metadata } from "next";
import { resolveHref } from "@/lib/get-canonical-path";
import Image from "next/image";
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
import InternalLink from "@/components/buttons/internal-link";

export const metadata: Metadata = {
  title:
    "KI für Steuerberater - Private AI, KI-Agenten & Workflows | Bluebatch",
  description:
    "KI für Steuerberater: Private AI, Claude Cowork, KI-Agenten für Mandantenkommunikation und Workflows für Belegprüfung, E-Rechnung und Jahresabschluss.",
  openGraph: {
    title: "KI für Steuerberater - Bluebatch",
    description:
      "KI für Steuerberater: Private AI, Claude Cowork, KI-Agenten für Mandantenkommunikation und Workflows für Belegprüfung, E-Rechnung und Jahresabschluss.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch Steuerberater",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KI für Steuerberater - Bluebatch",
    description:
      "KI für Steuerberater: Private AI, Claude Cowork, KI-Agenten für Mandantenkommunikation und Workflows für Belegprüfung, E-Rechnung und Jahresabschluss.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/branchen/steuerberater",
  },
};

const topics = [
  {
    id: "private-ai",
    href: "/branchen/steuerberater/private-ai",
    title: "Private AI",
    linkLabel: "Mehr über Private AI",
    description:
      "Mandantendaten gehören nicht in öffentliche KI-Tools. Mit Private AI nutzt Ihre Kanzlei moderne Sprachmodelle in einer geschützten Umgebung: EU-Hosting, AVV, dedizierter Tenant und kein Training mit Ihren Daten - konform mit DSGVO und § 203 StGB.",
    image: "/images/machine-learning.jpg",
  },
  {
    id: "claude-cowork",
    href: "/branchen/steuerberater/claude-cowork",
    title: "Claude Cowork",
    linkLabel: "Mehr über Claude Cowork",
    description:
      "Claude DSGVO- und § 203-StGB-konform für Steuerberater und Wirtschaftsprüfer: verwaltete Umgebung, EU-Hosting, AVV, dedizierter Tenant, kein Training mit Ihren Daten.",
    image: "/images/claude-cowork.png",
  },
  {
    id: "ki-agenten",
    href: "/branchen/steuerberater/ki-agenten",
    title: "KI-Agenten",
    linkLabel: "Alle KI-Agenten ansehen",
    description:
      "KI-Agenten arbeiten wie digitale Sachbearbeiter: Der Mail Agent beantwortet Mandanten-Mails, die Mandantenkommunikation klärt FAQ und Fristen, der KI-Jahresabschluss entzerrt den Saison-Peak. Ihr Team prüft und gibt frei.",
    image: "/images/agentic-ai.jpg",
  },
  {
    id: "workflows",
    href: "/branchen/steuerberater/workflows",
    title: "Workflows",
    linkLabel: "Alle Workflows ansehen",
    description:
      "Workflows automatisieren wiederkehrende Prozesse Schritt für Schritt: Belegprüfung, Dokumentenverarbeitung, DATEV-Jira-Sync, E-Rechnung und Mandanten-Onboarding - zuverlässig, nachvollziehbar und GoBD-konform.",
    image: "/images/digital-workflow.jpg",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Branchen</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              KI für Steuerberater: Automatisierung für die Kanzlei
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Von der Belegprüfung über die Mandantenkommunikation bis zum
              Jahresabschluss - wir automatisieren die repetitiven Prozesse in
              Ihrer Kanzlei. Weniger Routine, mehr Zeit für echte Beratung.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Beratung anfragen</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Private AI, Claude Cowork, KI-Agenten und Workflows für
              Steuerkanzleien
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/tax-consulting-workspace.jpg"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Client Logos */}
      <ContentWrapper noPadding bodyWidth="full">
        <Customer />
      </ContentWrapper>

      {/* Die vier Oberpunkte: Private AI, Claude Cowork, KI-Agenten, Workflows */}
      {topics.map((topic, index) => {
        const imageRight = index % 2 === 0;
        return (
          <ContentWrapper
            key={topic.id}
            id={topic.id}
            colorScheme={index % 2 === 1 ? "gray-light" : undefined}
          >
            <SimpleGrid cols={2} className="items-center gap-8 md:gap-12">
              <div className={imageRight ? "" : "md:order-2"}>
                <Typo.H2 className="mb-4">{topic.title}</Typo.H2>
                <Typo.Paragraph className="text-gray-600 mb-6">
                  {topic.description}
                </Typo.Paragraph>
                <InternalLink href={resolveHref(topic.href)}>
                  {topic.linkLabel}
                </InternalLink>
              </div>
              <div
                className={`relative aspect-video mx-auto w-1/2 md:w-full ${
                  imageRight ? "" : "md:order-1"
                }`}
              >
                <Image
                  src={topic.image}
                  alt={topic.title}
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </SimpleGrid>
          </ContentWrapper>
        );
      })}

      {/* Contact CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
