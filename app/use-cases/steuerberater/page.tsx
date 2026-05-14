import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "KI für Steuerberater - Use Cases | Bluebatch",
  description:
    "KI für Steuerberater: Belegprüfung, Dokumentenverarbeitung, Mandantenkommunikation, DATEV-Sync, E-Rechnung, Onboarding und Jahresabschluss automatisieren.",
  openGraph: {
    title: "KI für Steuerberater - Bluebatch Use Cases",
    description:
      "KI für Steuerberater: Belegprüfung, Dokumentenverarbeitung, Mandantenkommunikation, DATEV-Sync, E-Rechnung, Onboarding und Jahresabschluss automatisieren.",
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
    title: "KI für Steuerberater - Bluebatch Use Cases",
    description:
      "KI für Steuerberater: Belegprüfung, Dokumentenverarbeitung, Mandantenkommunikation, DATEV-Sync, E-Rechnung, Onboarding und Jahresabschluss automatisieren.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/use-cases/steuerberater",
  },
};

const useCases = [
  {
    slug: "belegpruefung",
    title: "Belegprüfung automatisieren",
    description:
      "Manuelle Belegprüfung bindet 3-6 h/Monat pro Mandant. KI-Belegerfassung mit GoBD-Validierung senkt den Aufwand um 85% und Fehler auf unter 0,1%.",
    image: "/images/belegpruefung/hero-belegcheck.png",
  },
  {
    slug: "dokumentenverarbeitung",
    title: "Dokumentenverarbeitung",
    description:
      "Belegerfassung bindet 41 h/Monat pro Mandant. KI-OCR klassifiziert und extrahiert Belege in unter 1 Min und spart 1.500-3.000 €/Mo.",
    image: "/images/dokumentenverarbeitung/hero-document-flow.png",
  },
  {
    slug: "mandantenkommunikation",
    title: "Mandantenkommunikation",
    description:
      "Routine-Mailanfragen kosten 3-5 h/Tag pro Sachbearbeiter. KI klärt FAQ, Fristen und Belegnachforderungen und verkürzt den Belegrücklauf von 8 auf 3 Wochen.",
    image: "/images/mandantenkommunikation/hero-side-visual.png",
  },
  {
    slug: "datev-jira-task-orchestration",
    title: "DATEV-Jira Orchestration",
    description:
      "Doppelpflege DATEV und Jira kostet 20-30 h/Woche. Bidirektionaler Sync senkt den Aufwand pro Vorgang von 25 auf 2 Min und steigert SLA-Treffer um 30%.",
    image: "/images/datev-jira/timeline-visual.png",
  },
  {
    slug: "e-rechnung-verarbeitung",
    title: "E-Rechnung KI",
    description:
      "E-Rechnungs-Pflicht 2025 trifft jeden Mandanten. KI parst XRechnung und ZUGFeRD, validiert per KoSIT und senkt Kosten von 11,50 € auf 0,10 € pro Rechnung.",
    image: "/images/e-rechnung/format-xrechnung.png",
  },
  {
    slug: "mandanten-onboarding",
    title: "KI-Mandanten-Onboarding",
    description:
      "Manuelles Onboarding dauert 4-8 h pro Mandant. KI-Workflow für GwG/KYC, DATEV-Anlage und Vollmachten senkt Aufwand um 85% und Fehler um 80%.",
    image: "/images/mandanten-onboarding/hero-welcome.png",
  },
  {
    slug: "jahresabschluss-ki",
    title: "KI-Jahresabschluss",
    description:
      "Jahresabschluss bindet 40-200 h pro Mandant. KI mappt SKR auf HGB, erstellt Anhang und Lagebericht und entzerrt den Saison-Peak um 60-80%.",
    image: "/images/jahresabschluss/card-mapping.png",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Branchenlösungen</Hero2ColumnPreHeadline>
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
              7 erprobte Automatisierungslösungen für Steuerkanzleien
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

      {/* Use Cases with alternating layout — Mobile: Headline → Text → Link → Image (50% centred) */}
      {useCases.map((useCase, index) => {
        const imageRight = index % 2 === 0;
        return (
          <ContentWrapper
            key={useCase.slug}
            colorScheme={index % 2 === 1 ? "gray-light" : undefined}
          >
            <SimpleGrid cols={2} className="items-center gap-8 md:gap-12">
              <div className={imageRight ? "" : "md:order-2"}>
                <Typo.H2 className="mb-4">{useCase.title}</Typo.H2>
                <Typo.Paragraph className="text-gray-600 mb-6">
                  {useCase.description}
                </Typo.Paragraph>
                <InternalLink
                  href={resolveHref(`/use-cases/steuerberater/${useCase.slug}`)}
                >
                  {useCase.title}
                </InternalLink>
              </div>
              <div
                className={`relative aspect-video mx-auto w-1/2 md:w-full ${
                  imageRight ? "" : "md:order-1"
                }`}
              >
                <Image
                  src={useCase.image}
                  alt={useCase.title}
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
