import type { Metadata } from "next";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import GeoSummary from "@/components/ui/geo-summary";
import ContactButton from "@/components/buttons/contact-button";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { ProductTileGrid } from "@/components/cards/product-tile";

export const metadata: Metadata = {
  title: "KI-Agenten für den Großhandel | Bluebatch",
  description:
    "KI-Agenten für den Großhandel: Angebots-Bot und Invoice-Bot arbeiten wie digitale Mitarbeiter - von der Kundenanfrage zum Angebot, von der Eingangsrechnung zur Freigabe.",
  openGraph: {
    title: "KI-Agenten für den Großhandel - Bluebatch",
    description:
      "KI-Agenten für den Großhandel: Angebots-Bot und Invoice-Bot arbeiten wie digitale Mitarbeiter - von der Kundenanfrage zum Angebot, von der Eingangsrechnung zur Freigabe.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
  },
  alternates: {
    canonical: "/branchen/grosshandel/ki-agenten",
  },
};

const agents = [
  {
    href: "/branchen/grosshandel/ki-agenten/angebots-bot",
    title: "Angebots-Bot",
    badge: "Agent #01",
    role: "Sachbearbeiter Vertrieb",
    stat: "21x",
    description:
      "Von der Kundenanfrage zum professionellen Angebot in Minuten. Der Agent übernimmt Preisabfrage, PDF-Generierung und Follow-up - 21x höhere Qualifizierungsrate.",
    image: "/images/pricing-calculator.jpg",
    features: [
      "Liest Kundenanfragen und erkennt Positionen",
      "Preisabfrage gegen ERP und Preislisten",
      "Erstellt fertige Angebots-PDFs",
      "Automatisches Follow-up",
    ],
    linkLabel: "Zum Angebots-Bot",
  },
  {
    href: "/branchen/grosshandel/ki-agenten/invoice-bot",
    title: "Invoice-Bot",
    badge: "Agent #02",
    role: "Sachbearbeiter Buchhaltung",
    stat: "-80%",
    description:
      "Eingangsrechnungen automatisch erfassen, prüfen und zur Freigabe weiterleiten. Der Agent extrahiert Beträge, Steuer und Metadaten - 80% weniger manueller Aufwand.",
    image: "/images/invoice/invoice-end-to-end-process.jpg",
    features: [
      "Erfasst Rechnungen aus Mail und Scan",
      "Extrahiert Beträge, Steuer und Metadaten",
      "Prüft gegen Bestellung und Wareneingang",
      "Leitet zur richtigen Freigabe weiter",
    ],
    linkLabel: "Zum Invoice-Bot",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <Typo.H1>KI-Agenten für den Großhandel</Typo.H1>
          <GeoSummary align="center" className="mt-4">
            KI-Agenten arbeiten wie digitale Mitarbeiter im Großhandel: Der
            Angebots-Bot verwandelt Kundenanfragen in fertige Angebote mit 21x
            höherer Qualifizierungsrate, der Invoice-Bot verarbeitet
            Eingangsrechnungen mit 80% weniger Aufwand. Bluebatch
            implementiert beide Agenten mit ERP-Anbindung - Ihr Team gibt
            frei.
          </GeoSummary>
          <ContactButton icon="chat">Beratung anfragen</ContactButton>
        </div>

        <ProductTileGrid items={agents} cols={2} />
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
