import type { Metadata } from "next";
import FunnelPage from "../_engine/funnel-page";
import {
  ClosingCta,
  CompareSection,
  PRIVATE_CLAUDE_FAQ,
  PortalSection,
  PriceSection,
  StartSteps,
} from "../_engine/private-claude-sections";
import { ContentWrapper } from "@/components/layout";
import { FaqContainer } from "@/components/ui";
import { UsageScreen } from "@/components/mockups";
import MaPrivateEquityFunnel from "./funnel";
import MaPrivateEquityUseCases from "./use-cases";

// Ads-Einstieg für lead-gen/ma-private-equity/meta-ads. Inhalte und Grenzen
// („Was wir NICHT behaupten“): lead-gen/ma-private-equity/research/problem-statement.md
// Insbesondere: keine Strafbarkeits- oder Insiderhandels-Drohung, MAR nur bei
// börsennotierten Beteiligten, kein DORA-Versprechen, keine Clean-Team-Trennung
// innerhalb einer Organisation versprechen.

const description =
  "Eigenes Claude für Deal-Teams: Admin-Portal, schriftliche Verschwiegenheitsverpflichtung, Verarbeitung in der EU. Startpaket 5.000 €. In 3 Fragen prüfen.";

export const metadata: Metadata = {
  title:
    "Claude für M&A und Private Equity: eigenes Claude fürs Deal-Team | Bluebatch",
  description,
  openGraph: {
    title: "Claude für M&A und Private Equity",
    description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Claude%20f%C3%BCr%20M%26A%20und%20Private%20Equity&eyebrow=Private%20Claude",
        width: 1200,
        height: 630,
        alt: "Claude für M&A und Private Equity",
      },
    ],
  },
  alternates: { canonical: "/claude-ma-private-equity" },
  robots: { index: false },
};

const facts = [
  {
    bold: "Eigenes Claude",
    rest: "für Partner, Investment-Team und Analysten.",
  },
  {
    bold: "Verschwiegenheit schriftlich,",
    rest: "mit deutschem Vertragspartner.",
  },
  {
    bold: "Kein Training",
    rest: "mit Ihren Deal-Unterlagen, Verarbeitung in der EU.",
  },
  { bold: "Admin-Portal:", rest: "Sie entscheiden, wer Zugang hat." },
];

const faqs = [
  PRIVATE_CLAUDE_FAQ.wasIstDas,
  {
    question: "Reicht das für unser NDA?",
    answer:
      "Das hängt vom Wortlaut ab. Viele NDAs erlauben die Weitergabe an Berater und Dienstleister, die selbst zur Vertraulichkeit verpflichtet sind. Wir unterschreiben eine schriftliche Verschwiegenheitsverpflichtung, Claude trainiert nicht mit Ihren Daten. Bei strengen NDAs prüfen Sie den Wortlaut am besten vorab mit Ihrem Anwalt.",
  },
  {
    question: "Gilt § 203 StGB für uns?",
    answer:
      "Für M&A-Boutiquen und Fonds in der Regel nicht. Für Wirtschaftsprüfer, Steuerberater und Anwälte im Transaction-Team schon. Für sie unterschreiben wir zusätzlich die Verpflichtung nach § 203 StGB.",
  },
  PRIVATE_CLAUDE_FAQ.datenort,
  PRIVATE_CLAUDE_FAQ.kosten,
];

export default function Page() {
  return (
    <>
      <FunnelPage
        variant="mobile-first"
        preHeadline="Claude für M&A, Private Equity und VC"
        headline="Claude für Deal-Teams, ohne private Konten."
        description="Ein eigenes Claude für Ihr Haus: zentral verwaltet, zur Vertraulichkeit verpflichtet, verarbeitet in der EU."
        facts={facts}
        offer={{
          price: "5.000 €",
          label:
            "Startpaket mit Einrichtung, Onboarding und 5 Tagen Coaching. Danach nur Verbrauch.",
        }}
        media={<UsageScreen compact />}
        startLabel="In 3 Fragen prüfen"
      >
        <MaPrivateEquityFunnel />
      </FunnelPage>

      <MaPrivateEquityUseCases />

      <CompareSection
        preHeadline="Warum ein eigenes Claude"
        headline="Privates KI-Konto oder Claude für das Deal-Team?"
        before={{
          title: "Privates KI-Konto",
          items: [
            "Kein Vertraulichkeitsvertrag, wie ihn Ihr NDA für Representatives meist verlangt",
            "Inhalte aus dem Datenraum außerhalb jeder Protokollierung",
            "Keine Antwort, wenn Compliance nach Tool, Anbieter und Zugriff fragt",
            "Deal-Unterlagen in privaten Konten einzelner Leute",
          ],
        }}
        after={{
          title: "Ihr Claude über Bluebatch",
          items: [
            "Schriftliche Verschwiegenheitsverpflichtung von Bluebatch",
            "Betrieb in Frankfurt, Verarbeitung in der EU, kein Training",
            "Zugang nur für Ihr Team, gesperrt mit einem Klick",
            "Ein Anbieter, ein Vertrag, ein Portal als Antwort für Compliance",
          ],
          footer: "Kosten nach Verbrauch, mit Limit",
        }}
      />

      <PortalSection />

      <PriceSection />

      <StartSteps contract="AV-Vertrag nach Art. 28 DSGVO und schriftliche Verschwiegenheitsverpflichtung von Bluebatch." />

      <ContentWrapper colorScheme="white" bodyWidth="small">
        <FaqContainer
          headline="Häufige Fragen"
          intro="Was Deal-Teams vor dem Start fragen."
          faqs={faqs}
        />
      </ContentWrapper>

      <ClosingCta
        headline="Claude in Ihrem Deal-Team sehen?"
        text="In einem kurzen Gespräch zeigen wir Ihnen Claude und das Portal und klären, wie der Start bei Ihnen aussieht."
      />
    </>
  );
}
