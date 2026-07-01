import type { Metadata } from "next";
import FunnelPage from "../_engine/funnel-page";
import SensitivAiFunnel from "./funnel";

export const metadata: Metadata = {
  title:
    "Claude für sensible Daten — DSGVO- & § 203-StGB-konform | Bluebatch",
  description:
    "Sie arbeiten mit Berufsgeheimnis-Daten und wollen Claude nutzen? In 3 Fragen prüfen wir, ob unser DSGVO- und § 203-StGB-konformes Claude-Setup zu Ihnen passt.",
  alternates: { canonical: "/sensitiv-ai" },
  robots: { index: false, follow: false },
};

const facts = [
  { bold: "DSGVO-konform", rest: "auf Ihrer oder dedizierter Infrastruktur." },
  { bold: "§ 203 StGB", rest: "im Blick, für Berufsgeheimnisträger." },
  { bold: "Inkl. Einrichtung", rest: "wir setzen es sauber für Sie auf." },
  { bold: "Ihre Daten bleiben bei Ihnen,", rest: "kein Abfluss an Dritte." },
];

export default function Page() {
  return (
    <FunnelPage
      preHeadline="Claude für sensible Daten"
      headline="Claude nutzen, auch bei § 203 StGB."
      description="Für alle, die mit besonders schützenswerten Daten arbeiten. In 3 kurzen Fragen finden Sie heraus, ob unser konformes Claude-Setup zu Ihnen passt."
      facts={facts}
      image={{
        src: "/images/claude-cowork.png",
        alt: "Claude DSGVO- und § 203-StGB-konform einrichten",
      }}
      startLabel="Fragebogen starten"
    >
      <SensitivAiFunnel />
    </FunnelPage>
  );
}
