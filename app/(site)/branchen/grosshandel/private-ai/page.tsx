import type { Metadata } from "next";
import Image from "next/image";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import SimpleGrid from "@/components/layout/simple-grid";
import GeoSummary from "@/components/ui/geo-summary";
import ContactButton from "@/components/buttons/contact-button";
import InternalLink from "@/components/buttons/internal-link";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { FaqContainer } from "@/components/ui/faqs";

export const metadata: Metadata = {
  title: "Private AI für den Großhandel - KI in eigener Umgebung | Bluebatch",
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

const faqs = [
  {
    question: "Was ist Private AI im Großhandel?",
    answer:
      "Private AI bedeutet, dass Sprachmodelle wie Llama oder Mistral in einer eigenen, geschützten Umgebung laufen - auf EU-Servern oder im eigenen Haus. Produktdaten, Einkaufspreise, Konditionen und Kundendaten verlassen die kontrollierte Umgebung nicht und werden nie zum Training fremder Modelle verwendet.",
  },
  {
    question: "Warum nicht einfach ChatGPT nutzen?",
    answer:
      "Für allgemeine Aufgaben sind Cloud-Assistenten wie ChatGPT oder Claude völlig legitim. Kritisch wird es bei Geschäftsgeheimnissen: Einkaufspreise, Margen, Lieferantenkonditionen und Kundendaten gehören nicht in öffentliche Tools. Private AI trennt sauber: Sensibles läuft intern, Generisches darf in die Cloud.",
  },
  {
    question: "Womit setzt Bluebatch Private AI um?",
    answer:
      "Typischer Stack: Open WebUI als Chat-Oberfläche für das Team, vLLM als performanter Modell-Server, angebunden an ERP (z.B. Navision) und Dokumentenablage. Gehostet in der EU oder on-premise, einsatzbereit in wenigen Tagen.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <div className="text-center max-w-3xl mx-auto">
          <Typo.H1>Private AI für den Großhandel</Typo.H1>
          <GeoSummary align="center" className="mt-4">
            Private AI heißt: Ihr Großhandel nutzt moderne Sprachmodelle in
            einer eigenen, geschützten Umgebung statt in öffentlichen KI-Tools.
            Bluebatch richtet dafür Open WebUI und vLLM mit EU-Hosting ein -
            angebunden an ERP-Systeme wie Navision, ohne Training mit Ihren
            Produkt-, Preis- und Kundendaten, einsatzbereit in wenigen Tagen.
          </GeoSummary>
          <ContactButton icon="chat">Beratung anfragen</ContactButton>
        </div>
      </ContentWrapper>

      {/* Abgrenzung: Wo läuft die KI? */}
      <ContentWrapper colorScheme="gray-light">
        <SimpleGrid cols={2} className="items-center gap-8 md:gap-12">
          <div>
            <Typo.H2 className="mb-4">
              Einkaufspreise gehören nicht in fremde Clouds
            </Typo.H2>
            <Typo.Paragraph className="text-gray-600 mb-4">
              Marge, Konditionen, Kundenlisten - das sind die Kronjuwelen eines
              Großhändlers. Bevor KI produktiv wird, muss geklärt sein, wo
              diese Daten verarbeitet werden. Private AI beantwortet das
              strukturell: Die Modelle laufen auf Infrastruktur, die Sie
              kontrollieren.
            </Typo.Paragraph>
            <Typo.Paragraph className="text-gray-600 mb-6">
              Für unkritische Alltagsaufgaben bleiben{" "}
              <InternalLink
                href="/branchen/grosshandel/ki-assistenten"
                variant="underline"
              >
                Cloud-Assistenten wie Claude und ChatGPT
              </InternalLink>{" "}
              das richtige Werkzeug. Auf der privaten Basis laufen dagegen{" "}
              <InternalLink
                href="/branchen/grosshandel/ki-agenten"
                variant="underline"
              >
                KI-Agenten
              </InternalLink>{" "}
              und{" "}
              <InternalLink
                href="/branchen/grosshandel/chatbots"
                variant="underline"
              >
                Chatbots mit ERP-Anbindung
              </InternalLink>
              , die mit echten Geschäftsdaten arbeiten.
            </Typo.Paragraph>
            <InternalLink href="/branchen/grosshandel/workflows">
              Auch die Workflows laufen auf dieser Basis
            </InternalLink>
          </div>
          <div className="relative aspect-video mx-auto w-1/2 md:w-full">
            <Image
              src="/images/machine-learning.jpg"
              alt="Private AI Infrastruktur im Großhandel"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* FAQ — extraktionsfreundlich für GEO */}
      <ContentWrapper bodyWidth="small">
        <FaqContainer faqs={faqs} />
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
