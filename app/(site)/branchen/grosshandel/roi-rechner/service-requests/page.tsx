import type { Metadata } from "next";
import { ogImages } from "@/lib/og";
import ContentWrapper from "@/components/layout/content-wrapper";
import ContactButton from "@/components/buttons/contact-button";
import GeoSummary from "@/components/ui/geo-summary";
import { BackToOverview } from "../shared";
import ServiceRequestsCalculator from "../(calculators)/service-requests";

export const metadata: Metadata = {
  title: "ROI-Rechner: Service Requests - Bluebatch",
  description:
    "Berechne, wie viel du mit automatisierter Bearbeitung von Kundenanfragen sparst. Interaktiver ROI-Rechner für Service Requests.",
  openGraph: {
    title: "ROI-Rechner: Service Requests - Bluebatch",
    description:
      "Berechne, wie viel du mit automatisierter Bearbeitung von Kundenanfragen sparst. Interaktiver ROI-Rechner für Service Requests.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages("ROI-Rechner: Service Requests", "Großhandel"),
  },
  alternates: {
    canonical: "/branchen/grosshandel/roi-rechner/service-requests",
  },
};

export default async function ServiceRequestsPage({
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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">ROI-Rechner: Service Requests</h1>
          <GeoSummary>
            Der ROI-Rechner für Service Requests von Bluebatch beziffert, was
            die automatisierte Bearbeitung von Kundenanfragen im Großhandel
            spart. In der Voreinstellung, 300 Anfragen im Monat zu je 20 statt
            5 Minuten bei 35 Euro Stundensatz, sind das 75 eingesparte Stunden
            und 2.125 Euro netto im Monat. Das Setup von 4.000 Euro
            amortisiert sich nach rund zwei Monaten.
          </GeoSummary>
          <ServiceRequestsCalculator initialParams={params} />
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
