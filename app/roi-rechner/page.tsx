import type { Metadata } from "next";
import ContentWrapper from "@/components/layout/content-wrapper";
import IntroBox from "@/components/ui/intro-box";
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
  },
  alternates: {
    canonical: "/roi-rechner",
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
          <IntroBox.Paragraph>
            Stellt eure Werte ein und seht sofort, wie schnell sich ein
            KI-Workflow amortisiert. Keine Anmeldung, keine versteckten Kosten.
          </IntroBox.Paragraph>
        </IntroBox>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <RoiCategoryPicker />
      </ContentWrapper>
    </>
  );
}
