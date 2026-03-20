import type { Metadata } from "next";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import Link from "next/link";
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
  mainRewrite: "/wholesale-ai",
  rewrites: [
    {
      source: "/wholesale-ai",
    },
  ],
};

export const metadata: Metadata = {
  title: "Wholesale AI für den Großhandel - Use Cases | Bluebatch",
  description:
    "Wholesale AI: Wie Bluebatch Großhändlern hilft, Bestellabwicklung und Lagerverwaltung mit KI zu automatisieren.",
  openGraph: {
    title: "Wholesale AI - Bluebatch Use Cases für den Großhandel",
    description:
      "Wholesale AI: Wie Bluebatch Großhändlern hilft, Bestellabwicklung und Lagerverwaltung mit KI zu automatisieren.",
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
    title: "Wholesale AI - Bluebatch Use Cases für den Großhandel",
    description:
      "Wholesale AI: Wie Bluebatch Großhändlern hilft, Bestellabwicklung und Lagerverwaltung mit KI zu automatisieren.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/wholesale-ai",
  },
};

const useCases = [
  {
    slug: "auftragserfassung",
    title: "Auftragserfassung",
    description:
      "Bestellungen aus E-Mails, PDFs, Faxen und Portalen automatisch erfassen. Unsere KI für den Großhandel extrahiert alle Daten, validiert gegen ERP und Lager - von 2-3 Tagen auf 1-2 Stunden Bearbeitungszeit.",
    image: "/images/order-capture.jpg",
  },
  {
    slug: "bestellabwicklung",
    title: "AI im Wholesale: Bestellabwicklung",
    description:
      "Von der Bestellung zur Auslieferung - vollautomatisch. KI für den Großhandel orchestriert Validierung, Lager-Routing, Kommissionierung und Versand durch n8n. 80-90% schnellere Bearbeitung im Lead to Cash Prozess.",
    image: "/images/order-processing.jpg",
  },
  {
    slug: "lagerverwaltung",
    title: "Lagerverwaltung",
    description:
      "Echtzeit-Bestandssynchronisation über alle Lager und Kanäle. AI im Wholesale erstellt Bedarfsprognosen und löst automatisch Nachbestellungen aus. Nie wieder Fehlbestand oder Überbestand.",
    image: "/images/warehouse-software.jpg",
  },
  {
    slug: "invoice-bot",
    title: "Invoice-Bot",
    description:
      "Eingangsrechnungen automatisch erfassen, prüfen und zur Freigabe weiterleiten. KI für den Großhandel extrahiert Beträge, Steuer und Metadaten - 80% weniger manueller Aufwand.",
    image: "/images/invoice-processing.jpg",
  },
  {
    slug: "3-wege-rechnungspruefung",
    title: "3-Wege-Rechnungsprüfung",
    description:
      "Automatischer Abgleich von Bestellung, Wareneingang und Rechnung. Toleranzregeln filtern relevante Abweichungen, Exception Routing bringt Ausnahmen zu den richtigen Freigebern.",
    image: "/images/invoice-verification.jpg",
  },
  {
    slug: "zertifikatspruefung-lieferanten",
    title: "Zertifikatsprüfung Lieferanten",
    description:
      "ISO, FSSC, Bio, HACCP - alle Zertifikate zentral verwaltet. n8n überwacht Ablaufdaten, sendet Erinnerungen und validiert gegen Akkreditierungsstellen.",
    image: "/images/certificate-check.jpg",
  },
  {
    slug: "angebots-bot",
    title: "Angebots-Bot",
    description:
      "Von der Kundenanfrage zum professionellen Angebot in Minuten. AI im Wholesale übernimmt Preisabfrage, PDF-Generierung und Follow-up - 21x höhere Qualifizierungsrate.",
    image: "/images/pricing-calculator.jpg",
  },
  {
    slug: "ai-automation-with-easybill",
    title: "KI-Automatisierung mit easybill",
    description:
      "Rechnungen, Angebote und Kundendaten in easybill vollautomatisch verwalten. Von der Dokumentenerstellung über ZUGFeRD/XRechnung bis zum Mahnwesen - 80% weniger manuelle Buchhaltungsarbeit.",
    image: "/images/process-automation.jpg",
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
            <Hero2ColumnPreHeadline>Branchenlösungen</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Wholesale AI: Automatisierung für den Großhandel
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Mit Wholesale AI automatisieren wir die repetitiven Prozesse, die
              Ihr Team ausbremsen - vom Lead to Cash Prozess über die
              Auftragserfassung bis zur Rechnungsprüfung. Weniger manuelle
              Arbeit, mehr Zeit für strategische Aufgaben.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Beratung anfragen</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              8 erprobte KI-Lösungen für den Großhandel
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/wholesale-planning.jpg"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Client Logos */}
      <ContentWrapper noPadding bodyWidth="full">
        <Customer />
      </ContentWrapper>

      {/* Use Cases with alternating layout */}
      {useCases.map((useCase, index) => (
        <ContentWrapper
          key={useCase.slug}
          colorScheme={index % 2 === 1 ? "gray-light" : undefined}
        >
          <SimpleGrid cols={2} className="items-center gap-12">
            {index % 2 === 0 ? (
              <>
                <div>
                  <Typo.H2 className="mb-4">{useCase.title}</Typo.H2>
                  <Typo.Paragraph className="text-gray-600 mb-6">
                    {useCase.description}
                  </Typo.Paragraph>
                  <InternalLink href={resolveHref(`/use-cases/grosshandel/${useCase.slug}`)}>
                    Mehr erfahren
                  </InternalLink>
                </div>
                <div className="relative aspect-video">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="relative aspect-video">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <Typo.H2 className="mb-4">{useCase.title}</Typo.H2>
                  <Typo.Paragraph className="text-gray-600 mb-6">
                    {useCase.description}
                  </Typo.Paragraph>
                  <InternalLink href={resolveHref(`/use-cases/grosshandel/${useCase.slug}`)}>
                    Mehr erfahren
                  </InternalLink>
                </div>
              </>
            )}
          </SimpleGrid>
        </ContentWrapper>
      ))}

      {/* Contact CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
