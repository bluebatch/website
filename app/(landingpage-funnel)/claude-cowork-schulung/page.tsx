import type { Metadata } from "next";
import FunnelPage from "../_engine/funnel-page";
import ClaudeCoworkFunnel from "./funnel";

export const metadata: Metadata = {
  title:
    "Claude CoWork Schulung für 399 € — KI, die in eurem Maschinenbau-Alltag arbeitet | Bluebatch",
  description:
    "Kompakte Claude CoWork Schulung für 399 €. In 4 Stunden lernt ihr, wie ihr Angebote, technische Doku und Auftragsabwicklung mit Claude CoWork beschleunigt. Kleine Gruppe, direkt am eigenen Fall.",
  keywords: [
    "Claude CoWork Schulung",
    "Claude CoWork",
    "KI Schulung Maschinenbau",
    "KI Veredler",
    "AI Schulung",
    "Bluebatch",
  ],
  openGraph: {
    title: "Claude CoWork Schulung für 399 € — KI für euren Maschinenbau-Alltag",
    description:
      "In 4 Stunden mit Claude CoWork loslegen: Angebote, technische Doku, Auftragsabwicklung. Kleine Gruppe, direkt am eigenen Fall.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
  },
  alternates: { canonical: "/claude-cowork-schulung" },
  robots: { index: false, follow: false },
};

const facts = [
  { bold: "399 €", rest: "— kompakt an einem Vormittag, kein Tagesseminar" },
  { bold: "Direkt am eigenen Fall,", rest: "nicht an Demo-Spielzeug" },
  { bold: "Für Maschinenbau & Veredler", rest: "gemacht, nicht generisch" },
  { bold: "Kleine Gruppe", rest: "— max. 8 Teilnehmer, echte Fragen" },
  { bold: "Danach arbeitet ihr live", rest: "mit Claude CoWork" },
];

export default function Page() {
  return (
    <FunnelPage
      preHeadline="Schulung · 399 € · online"
      headline="Claude CoWork Schulung: KI, die in eurem Alltag wirklich mitarbeitet."
      description="In einem kompakten Vormittag zeigen wir euch, wie ihr Angebote, technische Doku und Auftragsabwicklung mit Claude CoWork beschleunigt."
      facts={facts}
      image={{
        src: "/images/claude-cowork.png",
        alt: "Claude CoWork Schulung für Maschinenbau und Veredler",
      }}
      startLabel="Schulung starten"
    >
      <ClaudeCoworkFunnel />
    </FunnelPage>
  );
}
