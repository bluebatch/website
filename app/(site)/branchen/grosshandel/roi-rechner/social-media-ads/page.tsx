import type { Metadata } from "next";
import { ogImages } from "@/lib/og";
import ContentWrapper from "@/components/layout/content-wrapper";
import ContactButton from "@/components/buttons/contact-button";
import GeoSummary from "@/components/ui/geo-summary";
import { BackToOverview } from "../shared";
import SocialMediaAdsCalculator from "../(calculators)/social-media-ads";

export const metadata: Metadata = {
  title: "ROI-Rechner: Social Media Ads - Bluebatch",
  description:
    "Berechne den ROI deiner Social Media Kampagnen. Interaktiver Rechner für Lead-Generierung, Conversion Funnel und ROAS.",
  openGraph: {
    title: "ROI-Rechner: Social Media Ads - Bluebatch",
    description:
      "Berechne den ROI deiner Social Media Kampagnen. Interaktiver Rechner für Lead-Generierung, Conversion Funnel und ROAS.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages("ROI-Rechner: Social Media Ads", "Großhandel"),
  },
  alternates: {
    canonical: "/branchen/grosshandel/roi-rechner/social-media-ads",
  },
};

export default async function SocialMediaAdsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const params = await searchParams;

  return (
    <>
      <ContentWrapper isFirstSection colorScheme="gray-light">
        <div className="space-y-6">
          <BackToOverview />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">ROI-Rechner: Social Media Ads</h1>
          <GeoSummary>
            Der ROI-Rechner für Social Media Ads von Bluebatch beziffert, was
            die automatisierte Erstellung von Anzeigen und Posts im Großhandel
            bringt. In der Voreinstellung, 20 geplante Posts im Monat zu je 30
            statt 120 Minuten bei 40 Euro Stundensatz, sind das 30 eingesparte
            Stunden und 700 Euro netto im Monat. Der Hebel liegt hier vor allem
            in der Menge: Wer heute 8 Posts in 16 Stunden schafft, kommt danach
            auf 20 Posts in 10 Stunden. Das Setup von 12.000 Euro amortisiert
            sich in dieser Voreinstellung nach gut 17 Monaten.
          </GeoSummary>
          <SocialMediaAdsCalculator initialParams={params} />
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-dark">
        <div className="text-center py-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Bereit, eure Prozesse zu automatisieren?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Wir rechnen euren konkreten Case durch und zeigen euch in 30
            Minuten, welche Workflows sich bei euch am meisten lohnen.
          </p>
          <ContactButton size="lg" icon="calendar">
            Kostenlose Erstberatung buchen
          </ContactButton>
        </div>
      </ContentWrapper>
    </>
  );
}
