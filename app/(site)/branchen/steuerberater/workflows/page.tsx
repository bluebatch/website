import type { Metadata } from "next";
import { resolveHref } from "@/lib/get-canonical-path";
import Image from "next/image";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import SimpleGrid from "@/components/layout/simple-grid";
import GeoSummary from "@/components/ui/geo-summary";
import ContactButton from "@/components/buttons/contact-button";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import InternalLink from "@/components/buttons/internal-link";

export const metadata: Metadata = {
  title: "Workflows für Steuerberater | Bluebatch",
  description:
    "Automatisierte Workflows für Steuerkanzleien: Belegprüfung, Dokumentenverarbeitung, DATEV-Jira-Sync, E-Rechnung und Mandanten-Onboarding - zuverlässig und GoBD-konform.",
  openGraph: {
    title: "Workflows für Steuerberater - Bluebatch",
    description:
      "Automatisierte Workflows für Steuerkanzleien: Belegprüfung, Dokumentenverarbeitung, DATEV-Jira-Sync, E-Rechnung und Mandanten-Onboarding - zuverlässig und GoBD-konform.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch Workflows für Steuerberater",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Workflows für Steuerberater - Bluebatch",
    description:
      "Automatisierte Workflows für Steuerkanzleien: Belegprüfung, Dokumentenverarbeitung, DATEV-Jira-Sync, E-Rechnung und Mandanten-Onboarding - zuverlässig und GoBD-konform.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/branchen/steuerberater/workflows",
  },
};

const workflows = [
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
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <div className="text-center max-w-3xl mx-auto">
          <Typo.H1>Workflows für Steuerberater</Typo.H1>
          <GeoSummary align="center" className="mt-4">
            Workflows automatisieren wiederkehrende Kanzlei-Prozesse Schritt für
            Schritt: Belegprüfung mit GoBD-Validierung, Dokumentenverarbeitung
            per KI-OCR, DATEV-Jira-Synchronisation, E-Rechnungs-Verarbeitung
            und Mandanten-Onboarding. Bluebatch baut diese fünf Workflows für
            Steuerkanzleien - zuverlässig, nachvollziehbar und mit bis zu 85%
            weniger manuellem Aufwand.
          </GeoSummary>
          <ContactButton icon="chat">Beratung anfragen</ContactButton>
        </div>
      </ContentWrapper>

      {workflows.map((workflow, index) => {
        const imageRight = index % 2 === 0;
        return (
          <ContentWrapper
            key={workflow.slug}
            colorScheme={index % 2 === 1 ? "gray-light" : undefined}
          >
            <SimpleGrid cols={2} className="items-center gap-8 md:gap-12">
              <div className={imageRight ? "" : "md:order-2"}>
                <Typo.H2 className="mb-4">{workflow.title}</Typo.H2>
                <Typo.Paragraph className="text-gray-600 mb-6">
                  {workflow.description}
                </Typo.Paragraph>
                <InternalLink
                  href={resolveHref(
                    `/branchen/steuerberater/workflows/${workflow.slug}`,
                  )}
                >
                  {workflow.title}
                </InternalLink>
              </div>
              <div
                className={`relative aspect-video mx-auto w-1/2 md:w-full ${
                  imageRight ? "" : "md:order-1"
                }`}
              >
                <Image
                  src={workflow.image}
                  alt={workflow.title}
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </SimpleGrid>
          </ContentWrapper>
        );
      })}

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
