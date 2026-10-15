import type { Metadata } from "next";
import FunnelPage from "../_engine/funnel-page";
import {
  ClosingCta,
  PRIVATE_CLAUDE_FAQ,
  PortalSection,
  PriceSection,
  ProblemSection,
  StartSteps,
} from "../_engine/private-claude-sections";
import { ContentWrapper } from "@/components/layout";
import { FaqContainer } from "@/components/ui";
import { UsageScreen } from "@/components/mockups";
import SensitivAi2Funnel from "./funnel";

// Zweite Fassung von /sensitiv-ai zum Vergleich: Handy zuerst, Portal-Funktionen,
// Startpaket 5.000 € und Kurz-Preisliste. /sensitiv-ai bleibt unverändert.

const description =
  "Eigenes Claude für Berufsgeheimnisträger: Admin-Portal, AV-Vertrag und Verschwiegenheitsverpflichtung nach § 203 StGB, Verarbeitung in der EU. Startpaket 5.000 €.";

export const metadata: Metadata = {
  title: "Claude für sensible Daten: DSGVO und § 203 StGB | Bluebatch",
  description,
  openGraph: {
    title: "Claude für sensible Daten",
    description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Claude%20f%C3%BCr%20sensible%20Daten&eyebrow=Private%20Claude",
        width: 1200,
        height: 630,
        alt: "Claude für sensible Daten",
      },
    ],
  },
  alternates: { canonical: "/sensitiv-ai-2" },
  robots: { index: false },
};

const facts = [
  { bold: "DSGVO-konform", rest: "mit AV-Vertrag, Verarbeitung in der EU." },
  { bold: "§ 203 StGB:", rest: "Verschwiegenheitsverpflichtung für Berufsgeheimnisträger." },
  { bold: "Admin-Portal", rest: "für Team, Kosten und Regeln." },
  { bold: "Kein Training", rest: "mit Ihren Daten." },
];

const problems = [
  {
    title: "§ 203 StGB",
    body: "Berufsgeheimnisse dürfen nur an Dienstleister gehen, die zur Verschwiegenheit verpflichtet sind. Ein KI-Abo ohne diese Verpflichtung reicht dafür nicht.",
  },
  {
    title: "DSGVO",
    body: "Für Mandanten-, Patienten- oder Personaldaten brauchen Sie einen AV-Vertrag nach Art. 28 DSGVO und eine klare Antwort, wo die Daten verarbeitet werden.",
  },
  {
    title: "Private KI-Konten im Team",
    body: "Ohne offizielle Lösung nutzt das Team private Konten. Dann wissen Sie nicht, welche Unterlagen dort liegen.",
  },
  {
    title: "Nachweis",
    body: "Fragen Kammer, Datenschutzbeauftragte oder Mandanten, wie Sie KI einsetzen, sind Vertrag, Portal und Konfiguration je Person Ihr Beleg.",
  },
];

const audiences = [
  "Anwaltskanzleien",
  "Steuerkanzleien",
  "Wirtschaftsprüfer",
  "Ärzte und Therapeuten",
  "Versicherungen",
];

const faqs = [
  PRIVATE_CLAUDE_FAQ.wasIstDas,
  {
    question: "Für wen gilt § 203 StGB?",
    answer:
      "Unter anderem für Ärzte, Psychotherapeuten, Rechtsanwälte, Steuerberater, Wirtschaftsprüfer und Mitarbeitende privater Kranken-, Unfall- und Lebensversicherungen, jeweils mit ihren Mitarbeitenden.",
  },
  PRIVATE_CLAUDE_FAQ.datenort,
  PRIVATE_CLAUDE_FAQ.kosten,
];

export default function Page() {
  return (
    <>
      <FunnelPage
        variant="mobile-first"
        preHeadline="Claude für sensible Daten"
        headline="Claude nutzen, auch bei § 203 StGB."
        description="Ihr eigenes Claude mit Admin-Portal, AV-Vertrag und Verschwiegenheitsverpflichtung. Verarbeitet in der EU."
        facts={facts}
        offer={{
          price: "5.000 €",
          label: "Startpaket mit Einrichtung, Onboarding und 5 Tagen Coaching. Danach nur Verbrauch.",
        }}
        media={<UsageScreen compact />}
        startLabel="In 3 Fragen prüfen"
      >
        <SensitivAi2Funnel />
      </FunnelPage>

      <ProblemSection
        preHeadline="Warum ein eigenes Claude"
        headline="Warum ein normales KI-Abo nicht reicht"
        items={problems}
        useCasesTitle="Für wen"
        useCases={audiences}
      />

      <PortalSection />

      <PriceSection />

      <StartSteps contract="AV-Vertrag nach Art. 28 DSGVO und Verschwiegenheitsverpflichtung nach § 203 StGB." />

      <ContentWrapper colorScheme="white" bodyWidth="small">
        <FaqContainer
          headline="Häufige Fragen"
          intro="Was Berufsgeheimnisträger vor dem Start fragen."
          faqs={faqs}
        />
      </ContentWrapper>

      <ClosingCta
        headline="Claude für Ihre sensiblen Daten?"
        text="In einem kurzen Gespräch zeigen wir Ihnen Claude und das Portal und klären, wie der Start bei Ihnen aussieht."
      />
    </>
  );
}
