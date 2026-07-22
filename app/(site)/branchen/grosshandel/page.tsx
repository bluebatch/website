import type { Metadata } from "next";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
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

export const rewriteSiteConfig: RewriteSiteConfig = {
  legacyRedirects: ["/wholesale-ai"],
  rewrites: [],
};

export const metadata: Metadata = {
  title: "KI für den Großhandel - Private AI, Agenten & Workflows | Bluebatch",
  description:
    "KI für den Großhandel: Private AI, KI-Assistenten wie Claude und ChatGPT, KI-Agenten, Chatbots und Workflows für Auftragserfassung, Bestellabwicklung und Rechnungsprüfung.",
  openGraph: {
    title: "KI für den Großhandel - Bluebatch",
    description:
      "KI für den Großhandel: Private AI, KI-Assistenten, KI-Agenten, Chatbots und Workflows für Auftragserfassung, Bestellabwicklung und Rechnungsprüfung.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch Großhandel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KI für den Großhandel - Bluebatch",
    description:
      "KI für den Großhandel: Private AI, KI-Assistenten, KI-Agenten, Chatbots und Workflows für Auftragserfassung, Bestellabwicklung und Rechnungsprüfung.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/branchen/grosshandel",
  },
};

const topics = [
  {
    id: "private-ai",
    href: "/branchen/grosshandel/private-ai",
    title: "Private AI",
    linkLabel: "Mehr über Private AI",
    description:
      "Produktdaten, Preise und Kundendaten gehören nicht in öffentliche KI-Tools. Mit Private AI läuft die KI in Ihrer eigenen Umgebung: EU-Hosting, kein Training mit Ihren Daten, volle Kontrolle.",
    image: "/images/machine-learning.jpg",
  },
  {
    id: "ki-assistenten",
    href: "/branchen/grosshandel/ki-assistenten",
    title: "KI-Assistenten",
    linkLabel: "Mehr über KI-Assistenten",
    description:
      "Claude, ChatGPT und Copilot als Werkzeug für Ihr Team: Ihre Mitarbeiter arbeiten, die KI hilft — bei Angebotstexten, Produktdaten, Auswertungen und der täglichen Mail-Flut.",
    image: "/images/business-professional.jpg",
  },
  {
    id: "ki-agenten",
    href: "/branchen/grosshandel/ki-agenten",
    title: "KI-Agenten",
    linkLabel: "Alle KI-Agenten ansehen",
    description:
      "KI-Agenten arbeiten wie digitale Mitarbeiter: Der Angebots-Bot beantwortet Anfragen mit fertigen Angeboten, der Invoice-Bot verarbeitet Eingangsrechnungen. Ihr Team gibt frei.",
    image: "/images/agentic-ai.jpg",
  },
  {
    id: "chatbots",
    href: "/branchen/grosshandel/chatbots",
    title: "Chatbots",
    linkLabel: "Mehr über KI-Chatbots",
    description:
      "KI-Chatbots mit ERP-Anbindung beantworten Kunden- und Mitarbeiterfragen direkt aus Ihren Systemen: Bestände, Preise, Lieferzeiten — rund um die Uhr, ohne Warteschleife.",
    image: "/images/ki-chatbot-grosshandel/hero-chatbot.png",
  },
  {
    id: "workflows",
    href: "/branchen/grosshandel/workflows",
    title: "Workflows",
    linkLabel: "Alle Workflows ansehen",
    description:
      "Fest automatisierte Prozesse: Auftragserfassung, Bestellabwicklung, Lagerverwaltung, 3-Wege-Rechnungsprüfung, Zertifikatsprüfung und easybill-Automation — zuverlässig und nachvollziehbar.",
    image: "/images/digital-workflow.jpg",
  },
  {
    id: "roi-rechner",
    href: "/branchen/grosshandel/roi-rechner",
    title: "ROI-Rechner",
    linkLabel: "Ersparnis berechnen",
    description:
      "Lohnt sich Automatisierung für Ihren Betrieb? Rechnen Sie in 2 Minuten aus, was Dokumentenverarbeitung, Service-Anfragen und Kampagnen-Automatisierung bei Ihnen einsparen.",
    image: "/images/cost-savings.jpg",
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
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Branchen</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              KI für den Großhandel: Automatisierung, die sich rechnet
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Von der Auftragserfassung über die Bestellabwicklung bis zur
              Rechnungsprüfung - wir automatisieren die repetitiven Prozesse in
              Ihrem Betrieb. Weniger manuelle Arbeit, schnellere Durchlaufzeiten.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Beratung anfragen</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Private AI, KI-Assistenten, KI-Agenten, Chatbots und Workflows
              für den Großhandel
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/digital-marketplace.jpg"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Client Logos */}
      <ContentWrapper noPadding bodyWidth="full">
        <Customer />
      </ContentWrapper>

      {/* Die Unter-Hubs: Private AI, KI-Assistenten, KI-Agenten, Chatbots, Workflows + ROI */}
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
