import type { Metadata } from "next";
import { ogImages } from "@/lib/og";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import GeoSummary from "@/components/ui/geo-summary";
import ContactButton from "@/components/buttons/contact-button";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { ProductTileGrid } from "@/components/cards/product-tile";

export const metadata: Metadata = {
  title: "KI-Chatbots für den Großhandel | Bluebatch",
  description:
    "KI-Chatbots mit ERP-Anbindung für den Großhandel: Bestände, Preise und Lieferzeiten direkt aus Ihren Systemen beantworten - für Kunden und Mitarbeiter, rund um die Uhr.",
  openGraph: {
    title: "KI-Chatbots für den Großhandel - Bluebatch",
    description:
      "KI-Chatbots mit ERP-Anbindung für den Großhandel: Bestände, Preise und Lieferzeiten direkt aus Ihren Systemen beantworten - für Kunden und Mitarbeiter, rund um die Uhr.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages("KI-Chatbots für den Großhandel", "Großhandel"),
  },
  alternates: {
    canonical: "/branchen/grosshandel/chatbots",
  },
};

const chatbots = [
  {
    href: "/branchen/grosshandel/chatbots/ki-chatbot-grosshandel",
    title: "KI-Chatbot mit ERP-Anbindung",
    badge: "Chatbot #01",
    role: "Ansprechpartner rund um die Uhr",
    stat: "5 Tage",
    description:
      "Pilot für Ihren Großhandel: Open WebUI als sichere Chat-Oberfläche, fertige Connectoren zu Ebootis, MS Navision und SharePoint. 1.000 € Setup, 50 € pro Monat Betrieb, in 5 Tagen live.",
    image: "/images/ki-chatbot-grosshandel/hero-chatbot.png",
    features: [
      "Antwortet direkt aus ERP und SharePoint",
      "Bestände, Preise, Lieferzeiten in Echtzeit",
      "Sichere Chat-Oberfläche (Open WebUI)",
      { label: "Einsatzbereit bis Go-Live", badge: "5 Tage" },
    ],
    linkLabel: "Zum KI-Chatbot",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <Typo.H1>KI-Chatbots für den Großhandel</Typo.H1>
          <GeoSummary align="center" className="mt-4">
            Ein KI-Chatbot mit ERP-Anbindung beantwortet Kunden- und
            Mitarbeiterfragen direkt aus Ihren Systemen: Bestände, Preise und
            Lieferzeiten in Echtzeit, rund um die Uhr. Bluebatch liefert den
            Chatbot mit Connectoren zu Navision, Ebootis und SharePoint - ab
            1.000 € Setup, in 5 Tagen live.
          </GeoSummary>
          <ContactButton icon="chat">Beratung anfragen</ContactButton>
        </div>

        <ProductTileGrid items={chatbots} cols={2} />
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
