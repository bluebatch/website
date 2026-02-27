import type { Metadata } from "next";
import Link from "next/link";
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
  title: "Personaldienstleister – Use Cases | Bluebatch",
  description:
    "Personaldienstleister Automatisierung: Bewerber-Screening, Chatbot-Recruiting, digitales Onboarding, AÜG-Compliance und Zeiterfassung. Jetzt Zeitarbeit digitalisieren.",
  openGraph: {
    title: "Personaldienstleister – Bluebatch Use Cases",
    description:
      "KI-Automatisierung für Personaldienstleister: Bewerber-Matching, Chatbot-Recruiting, digitales Onboarding, Compliance und Zeiterfassung.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch Personaldienstleister",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Personaldienstleister – Bluebatch Use Cases",
    description:
      "KI-Automatisierung für Personaldienstleister: Bewerber-Matching, Chatbot-Recruiting, digitales Onboarding, Compliance und Zeiterfassung.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/use-cases/personaldienstleister",
  },
};

const useCases = [
  {
    slug: "bewerber-screening",
    title: "Bewerber-Screening & KI-Matching",
    description:
      "Eingehende Bewerbungen in Sekunden analysieren, Profile automatisch vervollständigen und Kandidaten intelligent mit offenen Stellen matchen. 30% schnelleres Matching, 80% weniger manuelles Screening.",
    image: "/images/machine-learning.jpg",
  },
  {
    slug: "bewerberkommunikation",
    title: "Bewerberkommunikation & Chatbot-Recruiting",
    description:
      "KI-Chatbot für 24/7-Bewerberkommunikation: Vorqualifizierung, Terminvereinbarung und mehrsprachige Betreuung. Disponenten gewinnen 60% ihrer Zeit für wertschöpfende Aufgaben zurück.",
    image: "/images/communication-tools.jpg",
  },
  {
    slug: "digitales-onboarding",
    title: "Digitales Onboarding & Dokumentenmanagement",
    description:
      "Vom AÜG-Vertrag bis zum Einsatzstart – volldigitales Onboarding mit e-Signatur, automatischer Dokumentenprüfung und Self-Service-Portal. 60% schnellere Einarbeitung.",
    image: "/images/document-automation.jpg",
  },
  {
    slug: "compliance-ueberwachung",
    title: "Compliance-Überwachung & Fristenmanagement",
    description:
      "Höchstüberlassungsdauer, Equal Pay, Branchenzuschläge und das neue Tarifwerk 2026 – automatisch überwacht mit Echtzeit-Warnungen. 100% Fristeneinhaltung, null Bußgeldrisiko.",
    image: "/images/compliance-signs.jpg",
  },
  {
    slug: "zeiterfassung-abrechnung",
    title: "Zeiterfassung, Abrechnung & Rechnungsstellung",
    description:
      "Von der mobilen Zeiterfassung über die tarifkonforme Lohnabrechnung bis zur automatischen Rechnungsstellung – durchgängig digital, ohne Medienbrüche. 90% weniger Abrechnungsfehler.",
    image: "/images/business-analytics.jpg",
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
              Automatisierung für Personaldienstleister
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Von der Bewerberverwaltung bis zur Lohnabrechnung – wir
              automatisieren die repetitiven Prozesse in Ihrer
              Personaldienstleistung. Weniger Verwaltung, mehr Zeit für
              Kandidaten und Kunden.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Beratung anfragen</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              5 erprobte Automatisierungslösungen für Personaldienstleister
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            {/* @TODO: replace with Personaldienstleister-specific hero image showing staffing agency office or recruiter at work */}
            <Hero2ColumnImage
              src="/images/human-resources.jpg"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Industry Context */}
      <ContentWrapper>
        <SimpleGrid cols={2} className="items-center gap-12">
          <div>
            <Typo.H2 className="mb-4">
              Warum Digitalisierung für Zeitarbeit jetzt entscheidend ist
            </Typo.H2>
            <Typo.Paragraph className="text-gray-600 mb-4">
              73% der Personaldienstleister sehen die Digitalisierung als
              größte Herausforderung – aber nur 22% fühlen sich gut
              aufgestellt. Das neue DGB/GVP-Tarifwerk ab 2026 erhöht die
              Anforderungen an Transparenz und digitale Nachvollziehbarkeit
              zusätzlich.
            </Typo.Paragraph>
            <Typo.Paragraph className="text-gray-600">
              Bluebatch unterstützt Personaldienstleister bei der
              Automatisierung ihrer Kernprozesse: Von der
              KI-gestützten Bewerbervermittlung über die Compliance-Überwachung
              nach AÜG bis zur durchgängig digitalen Zeiterfassung und
              Abrechnung. Unsere Lösungen integrieren sich nahtlos in
              bestehende Systeme wie zvoove, Landwehr L1 und DATEV.
            </Typo.Paragraph>
          </div>
          <div>
            {/* @TODO: replace with infographic showing PDL digitalization statistics or automation workflow diagram */}
            <Image
              src="/images/digital-workflow.jpg"
              alt="Digitalisierung in der Zeitarbeit und Personaldienstleistung"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Client Logos */}
      <ContentWrapper noPadding>
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
                  <InternalLink href={`/use-cases/personaldienstleister/${useCase.slug}`}>
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
                  <InternalLink href={`/use-cases/personaldienstleister/${useCase.slug}`}>
                    Mehr erfahren
                  </InternalLink>
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
