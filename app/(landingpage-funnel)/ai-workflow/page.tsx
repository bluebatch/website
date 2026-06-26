import type { Metadata } from "next";
import FunnelPage from "../_engine/funnel-page";
import AiWorkflowFunnel from "./funnel";

export const metadata: Metadata = {
  title:
    "AI Workflow für 399 € — Prozesse im Maschinenbau automatisieren | Bluebatch",
  description:
    "AI Workflow Schulung für 399 €. Wir bauen mit euch den ersten echten Workflow: von der Anfrage zum Angebot, Bestellabwicklung, Maschinendaten & Doku. Für Maschinenbauer und Veredler.",
  keywords: [
    "AI Workflow",
    "KI Workflow Maschinenbau",
    "Prozesse automatisieren",
    "n8n Maschinenbau",
    "KI Veredler",
    "Bluebatch",
  ],
  openGraph: {
    title: "AI Workflow für 399 € — Prozesse im Maschinenbau automatisieren",
    description:
      "Wir bauen mit euch den ersten echten Workflow: Anfrage → Angebot, Bestellabwicklung, Maschinendaten & Doku.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
  },
  alternates: { canonical: "/ai-workflow" },
  robots: { index: false, follow: false },
};

const facts = [
  { bold: "399 €", rest: "— und ihr geht mit einem echten Workflow raus" },
  { bold: "Anfrage → Angebot, Bestellabwicklung,", rest: "Doku, QS" },
  { bold: "Für Maschinenbau & Veredler", rest: "statt Theorie-Folien" },
  { bold: "Egal ob n8n, Make", rest: "oder noch gar nichts läuft" },
  { bold: "Wir bauen mit,", rest: "nicht nur zuschauen" },
];

export default function Page() {
  return (
    <FunnelPage
      preHeadline="AI Workflow · 399 €"
      headline="Bau deinen ersten echten AI-Workflow, der dir Arbeit abnimmt."
      description="Sag uns, welchen Prozess du loswerden willst. Wir bauen mit dir den Workflow, der von der Anfrage bis zur Auftragsabwicklung mitarbeitet."
      facts={facts}
      image={{
        src: "/images/workflow-automation-hub.jpg",
        alt: "AI Workflow Automatisierung für Maschinenbau und Veredler",
      }}
      startLabel="Workflow-Check starten"
    >
      <AiWorkflowFunnel />
    </FunnelPage>
  );
}
