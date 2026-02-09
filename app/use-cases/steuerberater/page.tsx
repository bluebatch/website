import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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

export const metadata: Metadata = {
  title: "Steuerberater – Use Cases",
  description:
    "Wie bluebatch Steuerberater bei Dokumentenverarbeitung, Mandantenkommunikation und DATEV-Integration unterstützt.",
  openGraph: {
    title: "Steuerberater – Use Cases",
    description:
      "Wie bluebatch Steuerberater bei Dokumentenverarbeitung, Mandantenkommunikation und DATEV-Integration unterstützt.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steuerberater – Use Cases",
    description:
      "Wie bluebatch Steuerberater bei Dokumentenverarbeitung, Mandantenkommunikation und DATEV-Integration unterstützt.",
  },
};

const useCases = [
  {
    slug: "dokumentenverarbeitung",
    title: "Dokumentenverarbeitung",
    description:
      "Belege, Rechnungen und Steuerunterlagen automatisch erfassen und klassifizieren. KI extrahiert relevante Daten und überträgt sie strukturiert – 70% weniger manuelle Erfassung.",
    image: "/images/invoice/data-extraction.webp",
  },
  {
    slug: "mandantenkommunikation",
    title: "Mandantenkommunikation",
    description:
      "KI-Chatbot für Routineanfragen, proaktive Fristenerinnerungen und automatisierte Belegkampagnen. 24/7 Erreichbarkeit, 70% weniger Routine-E-Mails.",
    image: "/images/web-portal.png",
  },
  {
    slug: "datev-jira-task-orchestration",
    title: "DATEV-Jira Orchestration",
    description:
      "Bidirektionale Synchronisation zwischen DATEV und Jira. Automatische Aufgabenerstellung, Fristenüberwachung und Eskalations-Workflows – 99,9% Fristeneinhaltung.",
    image: "/images/edi-integration.png",
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
              Automatisierung für Steuerberater
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Von der Dokumentenverarbeitung bis zur DATEV-Integration – wir
              automatisieren die repetitiven Prozesse in Ihrer Kanzlei.
              Weniger Routine, mehr Zeit für echte Beratung.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Beratung anfragen</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              3 erprobte Automatisierungslösungen für Steuerkanzleien
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage src="/images/invoice/data-extraction.webp" type="image" />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Client Logos */}
      <ContentWrapper noPadding>
        <Customer />
      </ContentWrapper>

      {/* Use Cases with alternating layout */}
      {useCases.map((useCase, index) => (
        <ContentWrapper
          key={useCase.slug}
          background={index % 2 === 1 ? "bg-gray-50" : undefined}
        >
          <SimpleGrid cols={2} className="items-center gap-12">
            {index % 2 === 0 ? (
              <>
                <div>
                  <Typo.H2 className="mb-4">{useCase.title}</Typo.H2>
                  <Typo.Paragraph className="text-gray-600 mb-6">
                    {useCase.description}
                  </Typo.Paragraph>
                  <Link
                    href={`/use-cases/steuerberater/${useCase.slug}`}
                    className="inline-flex items-center text-primary-600 font-medium hover:underline"
                  >
                    Mehr erfahren →
                  </Link>
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
                  <Link
                    href={`/use-cases/steuerberater/${useCase.slug}`}
                    className="inline-flex items-center text-primary-600 font-medium hover:underline"
                  >
                    Mehr erfahren →
                  </Link>
                </div>
              </>
            )}
          </SimpleGrid>
        </ContentWrapper>
      ))}

      {/* Contact CTA */}
      <ContentWrapper noPadding>
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
