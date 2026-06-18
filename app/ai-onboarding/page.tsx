import type { Metadata } from "next";
import { Suspense } from "react";
import ContentWrapper from "@/components/layout/content-wrapper";
import IntroBox from "@/components/ui/intro-box";
import AiOnboardingWizard from "./ai-onboarding-wizard";

export const metadata: Metadata = {
  title: "KI-Readiness-Check für den Großhandel — kostenlose Use-Case-Matrix | Bluebatch",
  description:
    "In 6 Schritten zur persönlichen KI-Use-Case-Matrix: Branche, Tool-Landschaft und KI-Erfahrung angeben und sofort sehen, welche KI-Use-Cases sich für euren Großhandel lohnen.",
  keywords: [
    "KI Readiness Check",
    "KI Use-Case Matrix",
    "KI Großhandel",
    "AI Onboarding",
    "KI Potenzialanalyse",
    "Bluebatch",
  ],
  openGraph: {
    title:
      "KI-Readiness-Check für den Großhandel — kostenlose Use-Case-Matrix | Bluebatch",
    description:
      "In 6 Schritten zur persönlichen KI-Use-Case-Matrix für euren Großhandel. Branche, Tools und KI-Erfahrung angeben und sofort Potenziale sehen.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch KI-Readiness-Check",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "KI-Readiness-Check für den Großhandel — kostenlose Use-Case-Matrix | Bluebatch",
    description:
      "In 6 Schritten zur persönlichen KI-Use-Case-Matrix für euren Großhandel.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/ai-onboarding",
  },
};

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection colorScheme="white">
        <IntroBox>
          <IntroBox.PreHeadline>KI-Readiness-Check</IntroBox.PreHeadline>
          <h1 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Welche KI-Use-Cases lohnen sich für euren Großhandel?
          </h1>
          <IntroBox.Paragraph>
            Gib einfach eure Website ein und beantworte zwei kurze Fragen zu euren Tools.
            Am Ende bekommst du eine persönliche Use-Case-Matrix als PDF, priorisiert nach
            Nutzen und Aufwand. Keine Anmeldung nötig.
          </IntroBox.Paragraph>
        </IntroBox>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <Suspense fallback={null}>
          <AiOnboardingWizard />
        </Suspense>
      </ContentWrapper>
    </>
  );
}
