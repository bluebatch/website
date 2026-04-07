import type { Metadata } from "next";
import ContentWrapper from "@/components/layout/content-wrapper";
import ContactButton from "@/components/buttons/contact-button";
import { BackToOverview } from "../shared";
import DocumentCalculator from "../(calculators)/document";

export const metadata: Metadata = {
  title: "ROI-Rechner: Dokumentenprüfung – Bluebatch",
  description:
    "Berechne, wie viel du mit automatisierter Dokumentenprüfung sparst. Interaktiver ROI-Rechner für Rechnungen, Lieferscheine und Bestellungen.",
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
          <DocumentCalculator initialParams={params} />
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
