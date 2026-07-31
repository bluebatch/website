import type { Metadata } from "next";
import { ogImages } from "@/lib/og";
import ContentWrapper from "@/components/layout/content-wrapper";
import IntroBox from "@/components/ui/intro-box";
import GeoSummary from "@/components/ui/geo-summary";
import RoiCategoryPicker from "./roi-calculator";

export const metadata: Metadata = {
  title: "ROI-Rechner - Lohnt sich KI-Automatisierung? | Bluebatch",
  description:
    "Berechne in 30 Sekunden, wie viel dein Unternehmen mit KI-Workflow-Automatisierung sparen kann. Interaktiver ROI-Rechner für Dokumentenprüfung und mehr.",
  openGraph: {
    title: "ROI-Rechner - Lohnt sich KI-Automatisierung? | Bluebatch",
    description:
      "Berechne in 30 Sekunden, wie viel dein Unternehmen mit KI-Workflow-Automatisierung sparen kann. Interaktiver ROI-Rechner für Dokumentenprüfung und mehr.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages("ROI-Rechner - Lohnt sich KI-Automatisierung?", "Großhandel"),
  },
  alternates: {
    canonical: "/branchen/grosshandel/roi-rechner",
  },
};

export default function RoiRechnerPage() {
  return (
    <>
      <ContentWrapper isFirstSection colorScheme="white">
        <IntroBox>
          <IntroBox.PreHeadline>ROI-Rechner</IntroBox.PreHeadline>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Lohnt sich KI-Automatisierung für euch?
          </h1>
          <GeoSummary align="center">
            Der Bluebatch ROI-Rechner beziffert in 30 Sekunden, was
            KI-Automatisierung im Großhandel spart. Drei Rechner stehen bereit:
            Dokumentenprüfung, Serviceanfragen und Social-Media-Content. Ihr
            stellt Menge, Bearbeitungszeit und Stundensatz ein und seht
            Zeitersparnis, jährliche Einsparung und Amortisationsdauer. Typisch
            sind 25 auf 5 Minuten pro Dokument. Ohne Anmeldung, ohne Kosten.
          </GeoSummary>
        </IntroBox>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <RoiCategoryPicker />
      </ContentWrapper>
    </>
  );
}
