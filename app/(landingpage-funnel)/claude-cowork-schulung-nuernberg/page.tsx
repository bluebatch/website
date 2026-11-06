import type { Metadata } from "next";
import FunnelPage from "../_engine/funnel-page";
import ClaudeCoworkNuernbergFunnel from "./funnel";

export const metadata: Metadata = {
  title: "Claude Cowork Schulung Nürnberg: 1-Tages-Workshop am 10.12.2026 | Bluebatch",
  description:
    "Claude Cowork Workshop vor Ort in Nürnberg am 10.12.2026. Ein Tag, 800 €. Ihr lernt, wie Claude Cowork Dokumente, Mails und Auswertungen für euch erledigt, am eigenen Fall.",
  keywords: [
    "Claude Cowork Schulung Nürnberg",
    "Claude Cowork Workshop",
    "KI Schulung Nürnberg",
    "Claude Schulung",
    "Bluebatch",
  ],
  openGraph: {
    title: "Claude Cowork Workshop in Nürnberg, 10.12.2026",
    description:
      "Ein Tag vor Ort in Nürnberg, 800 €: Claude Cowork für Dokumente, Mails, Tabellen und Recherche, am eigenen Fall.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
  },
  alternates: { canonical: "/claude-cowork-schulung-nuernberg" },
  robots: { index: false },
};

const facts = [
  { bold: "10.12.2026 in Nürnberg,", rest: "ein ganzer Tag vor Ort." },
  { bold: "800 €,", rest: "Workshop am eigenen Fall, nicht an Demo-Beispielen." },
  { bold: "Für jede Branche:", rest: "Dokumente, Mails, Tabellen und Recherche." },
  { bold: "Direkt anmelden,", rest: "in unter einer Minute." },
];

export default function Page() {
  return (
    <FunnelPage
      variant="mobile-first"
      preHeadline="Workshop · 800 € · Nürnberg · 10.12.2026"
      headline="Claude Cowork Schulung in Nürnberg: ein Tag, danach arbeitet KI im Alltag mit."
      description="Einen Tag vor Ort zeigen wir euch, wie Claude Cowork Dokumente, Mails und Auswertungen für euch erledigt, an euren eigenen Aufgaben."
      facts={facts}
      offer={{
        price: "800 €",
        label: "1-Tages-Workshop vor Ort in Nürnberg am 10.12.2026.",
      }}
      image={{
        src: "/images/claude-cowork.png",
        alt: "Claude Cowork Schulung Nürnberg",
      }}
      startLabel="Jetzt anmelden"
    >
      <ClaudeCoworkNuernbergFunnel />
    </FunnelPage>
  );
}
