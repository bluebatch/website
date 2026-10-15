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
import InsolvenzverwalterFunnel from "./funnel";

// Ads-Einstieg für lead-gen/insolvenzverwalter/meta-ads. Inhalte und Grenzen
// („Was wir NICHT behaupten“): lead-gen/insolvenzverwalter/research/problem-statement.md
// Insbesondere: § 203 StGB nennt Insolvenzverwalter nicht, also keine
// Strafbarkeits-Drohung; die KI liefert Entwürfe, entscheiden tut der Verwalter.

const description =
  "Eigenes Claude für Insolvenzkanzleien: Admin-Portal, AV-Vertrag und Verschwiegenheitsverpflichtung, Verarbeitung in der EU. Startpaket 5.000 €. In 3 Fragen prüfen.";

export const metadata: Metadata = {
  title: "Claude für Insolvenzverwalter: eigenes Claude für die Kanzlei | Bluebatch",
  description,
  openGraph: {
    title: "Claude für Insolvenzverwalter",
    description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Claude%20f%C3%BCr%20Insolvenzverwalter&eyebrow=Private%20Claude",
        width: 1200,
        height: 630,
        alt: "Claude für Insolvenzverwalter",
      },
    ],
  },
  alternates: { canonical: "/claude-insolvenzverwalter" },
  robots: { index: false },
};

const facts = [
  { bold: "Eigenes Claude", rest: "für Verwalter, Sachbearbeitung und Buchhaltung." },
  { bold: "AV-Vertrag und Verschwiegenheit,", rest: "schriftlich mit deutschem Vertragspartner." },
  { bold: "Kein Training", rest: "mit Ihren Verfahrensdaten, Verarbeitung in der EU." },
  { bold: "Admin-Portal", rest: "für Team, Kosten und Regeln." },
];

const problems = [
  {
    title: "Schuldnerauskünfte nach § 97 InsO",
    body: "Was der Geschäftsführer offenbart, darf ohne seine Zustimmung nicht gegen ihn verwendet werden. Solche Protokolle gehören nicht in ein privates Chat-Konto.",
  },
  {
    title: "Lohndaten der ganzen Belegschaft",
    body: "Insolvenzgeld, Pfändungen, Entgeltumwandlung: Für diese Tabellen brauchen Sie einen AV-Vertrag nach Art. 28 DSGVO, kein Verbraucher-Abo.",
  },
  {
    title: "Haftung und Nachweis",
    body: "Sie haften nach § 60 InsO persönlich. Fragen Gericht, Gläubigerausschuss oder der GOI-Auditor, wo Verfahrensdaten verarbeitet werden, brauchen Sie eine belegbare Antwort.",
  },
  {
    title: "Private KI-Konten im Team",
    body: "Wer unter Zeitdruck steht, nutzt längst ChatGPT oder Claude mit privatem Konto. Ohne Kanzlei-Lösung wissen Sie nicht, welche Akten dort liegen.",
  },
];

const useCases = [
  "Entwürfe für Gutachten",
  "Berichte nach § 156 InsO",
  "Forderungsanmeldungen vorprüfen",
  "Kontoauszüge für die Anfechtung",
  "Insolvenzgeld-Listen",
  "Gläubigerpost",
];

const faqs = [
  PRIVATE_CLAUDE_FAQ.wasIstDas,
  {
    question: "Gilt § 203 StGB für Insolvenzverwalter?",
    answer:
      "§ 203 StGB nennt Rechtsanwälte, Insolvenzverwalter nicht ausdrücklich. Für Ihre anwaltlichen Mandate gelten § 203 StGB und § 43e BRAO sicher. Wir unterschreiben deshalb AV-Vertrag und Verschwiegenheitsverpflichtung, egal in welcher Rolle Sie gerade arbeiten.",
  },
  PRIVATE_CLAUDE_FAQ.datenort,
  PRIVATE_CLAUDE_FAQ.kosten,
  {
    question: "Schreibt Claude unsere Gutachten?",
    answer:
      "Claude liefert Entwürfe, Zusammenfassungen und Auswertungen. Prüfen und entscheiden tun Sie und Ihr Team, wie bei jeder Zuarbeit.",
  },
];

export default function Page() {
  return (
    <>
      <FunnelPage
        variant="mobile-first"
        preHeadline="Claude für Insolvenzverwalter"
        headline="Claude für Ihre Verfahren, ohne private Konten."
        description="Ein eigenes Claude für die ganze Kanzlei: zentral verwaltet, vertraglich abgesichert, verarbeitet in der EU."
        facts={facts}
        offer={{
          price: "5.000 €",
          label: "Startpaket mit Einrichtung, Onboarding und 5 Tagen Coaching. Danach nur Verbrauch.",
        }}
        media={<UsageScreen compact />}
        startLabel="In 3 Fragen prüfen"
      >
        <InsolvenzverwalterFunnel />
      </FunnelPage>

      <ProblemSection
        preHeadline="Das Problem"
        headline="Warum ein privates KI-Konto in der Insolvenzkanzlei nicht reicht"
        items={problems}
        useCases={useCases}
      />

      <PortalSection />

      <PriceSection />

      <StartSteps contract="AV-Vertrag nach Art. 28 DSGVO und schriftliche Verschwiegenheitsverpflichtung, für anwaltliche Mandate nach § 43e BRAO." />

      <ContentWrapper colorScheme="white" bodyWidth="small">
        <FaqContainer
          headline="Häufige Fragen"
          intro="Was Insolvenzkanzleien vor dem Start fragen."
          faqs={faqs}
        />
      </ContentWrapper>

      <ClosingCta
        headline="Claude in Ihrer Kanzlei sehen?"
        text="In einem kurzen Gespräch zeigen wir Ihnen Claude und das Portal und klären, wie der Start bei Ihnen aussieht."
      />
    </>
  );
}
