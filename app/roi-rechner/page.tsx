import type { Metadata } from "next";
import ContentWrapper from "@/components/layout/content-wrapper";
import IntroBox from "@/components/ui/intro-box";
import RoiCategoryPicker from "./roi-calculator";

export const metadata: Metadata = {
  title: "ROI-Rechner – Lohnt sich KI-Automatisierung? | Bluebatch",
  description:
    "Berechne in 30 Sekunden, wie viel dein Unternehmen mit KI-Workflow-Automatisierung sparen kann. Interaktiver ROI-Rechner für Dokumentenprüfung und mehr.",
};

export default function RoiRechnerPage() {
  return (
    <>
      <ContentWrapper isFirstSection colorScheme="white">
        <IntroBox>
          <IntroBox.PreHeadline>ROI-Rechner</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Lohnt sich KI-Automatisierung für euch?
          </IntroBox.Headline>
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
