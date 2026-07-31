import type { Metadata } from "next";
import { ogImages } from "@/lib/og";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import GeoSummary from "@/components/ui/geo-summary";
import ContactButton from "@/components/buttons/contact-button";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { ProductTileGrid } from "@/components/cards/product-tile";

export const metadata: Metadata = {
  title: "Workflows für den Großhandel | Bluebatch",
  description:
    "Automatisierte Workflows für den Großhandel: Auftragserfassung, Bestellabwicklung, Lagerverwaltung, 3-Wege-Rechnungsprüfung, Zertifikatsprüfung und easybill-Automation.",
  openGraph: {
    title: "Workflows für den Großhandel - Bluebatch",
    description:
      "Automatisierte Workflows für den Großhandel: Auftragserfassung, Bestellabwicklung, Lagerverwaltung, 3-Wege-Rechnungsprüfung, Zertifikatsprüfung und easybill-Automation.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages("Workflows für den Großhandel", "Großhandel"),
  },
  alternates: {
    canonical: "/branchen/grosshandel/workflows",
  },
};

const workflows = [
  {
    href: "/branchen/grosshandel/workflows/auftragserfassung",
    title: "Auftragserfassung",
    description:
      "Bestellungen aus E-Mails, PDFs, Faxen und Portalen automatisch erfassen. KI extrahiert alle Daten, validiert gegen ERP und Lager - von 2-3 Tagen auf 1-2 Stunden.",
    image: "/images/auftragserfassung/hero.png",
    linkLabel: "Zur Auftragserfassung",
  },
  {
    href: "/branchen/grosshandel/workflows/bestellabwicklung",
    title: "Bestellabwicklung",
    description:
      "Von der Bestellung zur Auslieferung - vollautomatisch. KI orchestriert Validierung, Lager-Routing, Kommissionierung und Versand. 80-90% schnellere Bearbeitung.",
    image: "/images/order-processing.jpg",
    linkLabel: "Zur Bestellabwicklung",
  },
  {
    href: "/branchen/grosshandel/workflows/lagerverwaltung",
    title: "Lagerverwaltung",
    description:
      "Echtzeit-Bestandssynchronisation über alle Lager und Kanäle. Bedarfsprognosen und automatische Nachbestellungen - nie wieder Fehl- oder Überbestand.",
    image: "/images/warehouse-software.jpg",
    linkLabel: "Zur Lagerverwaltung",
  },
  {
    href: "/branchen/grosshandel/workflows/3-wege-rechnungspruefung",
    title: "3-Wege-Rechnungsprüfung",
    description:
      "Automatischer Abgleich von Bestellung, Wareneingang und Rechnung. Toleranzregeln filtern relevante Abweichungen, Ausnahmen gehen an die richtigen Freigeber.",
    image: "/images/invoice-verification.jpg",
    linkLabel: "Zur 3-Wege-Rechnungsprüfung",
  },
  {
    href: "/branchen/grosshandel/workflows/zertifikatspruefung-lieferanten",
    title: "Zertifikatsprüfung Lieferanten",
    description:
      "ISO, FSSC, Bio, HACCP - alle Zertifikate zentral verwaltet. Ablaufdaten werden überwacht, Erinnerungen versendet, Nachweise gegen Akkreditierungsstellen validiert.",
    image: "/images/certificate-check.jpg",
    linkLabel: "Zur Zertifikatsprüfung",
  },
  {
    href: "/branchen/grosshandel/workflows/ai-automation-with-easybill",
    title: "KI-Automatisierung mit easybill",
    description:
      "Rechnungen, Angebote und Kundendaten in easybill vollautomatisch verwalten - von ZUGFeRD/XRechnung bis zum Mahnwesen. 80% weniger manuelle Buchhaltungsarbeit.",
    image: "/images/process-automation.jpg",
    linkLabel: "Zur easybill-Automation",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <Typo.H1>Workflows für den Großhandel</Typo.H1>
          <GeoSummary align="center" className="mt-4">
            Workflows automatisieren die Kernprozesse im Großhandel Schritt für
            Schritt: Auftragserfassung aus E-Mails und PDFs, Bestellabwicklung,
            Lagerverwaltung, 3-Wege-Rechnungsprüfung, Zertifikatsprüfung und
            easybill-Automation. Bluebatch baut diese sechs Workflows auf
            n8n-Basis mit Anbindung an ERP-Systeme wie Navision und easybill.
            Das Ergebnis: 80-90% schnellere Bearbeitung, unter 1% Fehlerquote,
            jeder Schritt nachvollziehbar protokolliert.
          </GeoSummary>
          <ContactButton icon="chat">Beratung anfragen</ContactButton>
        </div>

        <ProductTileGrid items={workflows} cols={3} />
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
