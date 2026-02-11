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
  title: "Großhandel – Use Cases | BlueBatch",
  description:
    "Wie BlueBatch Großhändlern hilft, Bestellabwicklung und Lagerverwaltung zu automatisieren.",
  openGraph: {
    title: "Großhandel – BlueBatch Use Cases",
    description:
      "Wie BlueBatch Großhändlern hilft, Bestellabwicklung und Lagerverwaltung zu automatisieren.",
    type: "website",
    locale: "de_DE",
    siteName: "BlueBatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "BlueBatch Großhandel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Großhandel – BlueBatch Use Cases",
    description:
      "Wie BlueBatch Großhändlern hilft, Bestellabwicklung und Lagerverwaltung zu automatisieren.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/use-cases/grosshandel",
  },
};

const useCases = [
  {
    slug: "auftragserfassung",
    title: "Auftragserfassung",
    description:
      "Bestellungen aus E-Mails, PDFs, Faxen und Portalen automatisch erfassen. KI extrahiert alle Daten, validiert gegen ERP und Lager – von 2-3 Tagen auf 1-2 Stunden Bearbeitungszeit.",
    image: "/images/order-capture.jpg",
  },
  {
    slug: "bestellabwicklung",
    title: "Bestellabwicklung",
    description:
      "Von der Bestellung zur Auslieferung – vollautomatisch. Validierung, Lager-Routing, Kommissionierung und Versand orchestriert durch n8n. 80-90% schnellere Bearbeitung.",
    image: "/images/order-processing.jpg",
  },
  {
    slug: "lagerverwaltung",
    title: "Lagerverwaltung",
    description:
      "Echtzeit-Bestandssynchronisation über alle Lager und Kanäle. KI-basierte Bedarfsprognosen lösen automatisch Nachbestellungen aus. Nie wieder Fehlbestand oder Überbestand.",
    image: "/images/warehouse-software.jpg",
  },
  {
    slug: "invoice-bot",
    title: "Invoice-Bot",
    description:
      "Eingangsrechnungen automatisch erfassen, prüfen und zur Freigabe weiterleiten. KI extrahiert Beträge, Steuer und Metadaten – 80% weniger manueller Aufwand.",
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
      "ISO, FSSC, Bio, HACCP – alle Zertifikate zentral verwaltet. n8n überwacht Ablaufdaten, sendet Erinnerungen und validiert gegen Akkreditierungsstellen.",
    image: "/images/certificate-check.jpg",
  },
  {
    slug: "angebots-bot",
    title: "Angebots-Bot",
    description:
      "Von der Kundenanfrage zum professionellen Angebot in Minuten. Automatische Preisabfrage, PDF-Generierung und Follow-up – 21x höhere Qualifizierungsrate.",
    image: "/images/pricing-calculator.jpg",
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
              Automatisierung für den Großhandel
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Von der Auftragserfassung bis zur Rechnungsprüfung – wir
              automatisieren die repetitiven Prozesse, die Ihr Team ausbremsen.
              Weniger manuelle Arbeit, mehr Zeit für strategische Aufgaben.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Beratung anfragen</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              7 erprobte Automatisierungslösungen für den Großhandel
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage src="/images/wholesale-planning.jpg" type="image" />
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
                    href={`/use-cases/grosshandel/${useCase.slug}`}
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
                    href={`/use-cases/grosshandel/${useCase.slug}`}
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
