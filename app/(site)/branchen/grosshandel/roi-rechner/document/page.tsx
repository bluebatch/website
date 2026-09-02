import type { Metadata } from "next";
import Link from "next/link";
import { ogImages } from "@/lib/og";
import ContentWrapper from "@/components/layout/content-wrapper";
import ContactButton from "@/components/buttons/contact-button";
import GeoSummary from "@/components/ui/geo-summary";
import { BackToOverview } from "../shared";
import DocumentCalculator from "../(calculators)/document";

export const metadata: Metadata = {
  title: "ROI-Rechner: Dokumentenprüfung - Bluebatch",
  description:
    "Berechne, wie viel du mit automatisierter Dokumentenprüfung sparst. Interaktiver ROI-Rechner für Rechnungen, Lieferscheine und Bestellungen.",
  openGraph: {
    title: "ROI-Rechner: Dokumentenprüfung - Bluebatch",
    description:
      "Berechne, wie viel du mit automatisierter Dokumentenprüfung sparst. Interaktiver ROI-Rechner für Rechnungen, Lieferscheine und Bestellungen.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages("ROI-Rechner: Dokumentenprüfung", "Großhandel"),
  },
  alternates: {
    canonical: "/branchen/grosshandel/roi-rechner/document",
  },
};

export default async function DocumentPage({
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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">ROI-Rechner: Dokumentenprüfung</h1>
          <GeoSummary>
            Der ROI-Rechner für Dokumentenprüfung von Bluebatch beziffert, was
            die automatisierte Prüfung von Rechnungen, Lieferscheinen und
            Bestellungen im Großhandel spart. In der Voreinstellung, 200
            Dokumente im Monat zu je 5 statt 25 Minuten bei 40 Euro
            Stundensatz, sind das rund 67 eingesparte Stunden und 2.167 Euro
            netto im Monat. Das Setup von 4.000 Euro amortisiert sich nach
            knapp zwei Monaten.
          </GeoSummary>
          <DocumentCalculator initialParams={params} />
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Weitere ROI-Rechner</h2>
          <p className="text-gray-700">
            Dokumentenprüfung ist nur der Anfang. Berechne auch dein Einsparpotenzial mit dem <Link href="/branchen/grosshandel/roi-rechner/service-requests" className="text-primary hover:underline">ROI-Rechner für Service Requests</Link> oder dem <Link href="/branchen/grosshandel/roi-rechner/social-media-ads" className="text-primary hover:underline">ROI-Rechner für Social-Media-Anzeigen</Link>.
          </p>
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
