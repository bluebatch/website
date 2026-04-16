import type { Metadata } from "next";
import ContentWrapper from "@/components/layout/content-wrapper";
import ContactButton from "@/components/buttons/contact-button";
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
  },
  alternates: {
    canonical: "/roi-rechner/social-media-ads",
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
