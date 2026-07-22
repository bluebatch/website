import type { Metadata } from "next";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import ContactButton from "@/components/buttons/contact-button";

export const metadata: Metadata = {
  title: "Private AI für den Großhandel | Bluebatch",
  description:
    "Private AI für den Großhandel: Sprachmodelle in eigener Umgebung nutzen - EU-Hosting, kein Training mit Ihren Produkt-, Preis- und Kundendaten, volle Kontrolle.",
  openGraph: {
    title: "Private AI für den Großhandel - Bluebatch",
    description:
      "Private AI für den Großhandel: Sprachmodelle in eigener Umgebung nutzen - EU-Hosting, kein Training mit Ihren Produkt-, Preis- und Kundendaten, volle Kontrolle.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
  },
  alternates: {
    canonical: "/branchen/grosshandel/private-ai",
  },
};

export default function Page() {
  return (
    <ContentWrapper isFirstSection>
      <div className="text-center max-w-3xl mx-auto">
        <Typo.H1>Private AI für den Großhandel</Typo.H1>
        <Typo.Paragraph className="text-gray-600 mt-4 mb-8">
          Produktdaten, Preise und Kundendaten gehören nicht in öffentliche
          KI-Tools. Mit Private AI nutzt Ihr Betrieb moderne Sprachmodelle in
          einer eigenen, geschützten Umgebung: EU-Hosting, kein Training mit
          Ihren Daten, volle Kontrolle über jede Anfrage.
        </Typo.Paragraph>
        <ContactButton icon="chat">Beratung anfragen</ContactButton>
      </div>
    </ContentWrapper>
  );
}
