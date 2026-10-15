import type { Metadata } from "next";
import FunnelPage from "../_engine/funnel-page";
import ClaudeCoworkFunnel from "./funnel";

export const metadata: Metadata = {
  title: "Claude Cowork Schulung für 399 €: KI, die im Alltag mitarbeitet | Bluebatch",
  description:
    "Kompakte Claude Cowork Schulung für 399 €. In 4 Stunden lernt ihr, wie Claude Cowork Dokumente, Mails und Auswertungen für euch erledigt. Online, kleine Gruppe, am eigenen Fall.",
  keywords: [
    "Claude Cowork Schulung",
    "Claude Cowork",
    "KI Schulung",
    "Claude Schulung",
    "AI Schulung",
    "Bluebatch",
  ],
  openGraph: {
    title: "Claude Cowork Schulung für 399 €",
    description:
      "In 4 Stunden mit Claude Cowork loslegen: Dokumente, Mails, Tabellen, Recherche. Online, kleine Gruppe, am eigenen Fall.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
  },
  alternates: { canonical: "/claude-cowork-schulung" },
  robots: { index: false },
};

const facts = [
  { bold: "399 €,", rest: "kompakt an einem Vormittag, kein Tagesseminar." },
  { bold: "Am eigenen Fall,", rest: "nicht an Demo-Beispielen." },
  { bold: "Für jede Branche:", rest: "Dokumente, Mails, Tabellen und Recherche." },
  { bold: "Kleine Gruppe,", rest: "höchstens 8 Teilnehmer." },
];

export default function Page() {
  return (
    <FunnelPage
      variant="mobile-first"
      preHeadline="Schulung · 399 € · online"
      headline="Claude Cowork Schulung: KI, die im Alltag mitarbeitet."
      description="An einem Vormittag zeigen wir euch, wie Claude Cowork Dokumente, Mails und Auswertungen für euch erledigt, an euren eigenen Aufgaben."
      facts={facts}
      offer={{
        price: "399 €",
        label: "4 Stunden online, kleine Gruppe. Danach arbeitet ihr selbstständig mit Claude Cowork.",
      }}
      image={{
        src: "/images/claude-cowork.png",
        alt: "Claude Cowork Schulung",
      }}
      startLabel="Schulung anfragen"
    >
      <ClaudeCoworkFunnel />
    </FunnelPage>
  );
}
