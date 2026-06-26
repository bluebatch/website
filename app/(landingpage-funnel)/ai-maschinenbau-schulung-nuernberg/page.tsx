import type { Metadata } from "next";
import FunnelPage from "../_engine/funnel-page";
import MaschinenbauNuernbergFunnel from "./funnel";

export const metadata: Metadata = {
  title:
    "AI Maschinenbau Schulung Nürnberg — Closed Room für Maschinenbauer & Veredler | Bluebatch",
  description:
    "Closed-Room AI-Schulung in Nürnberg, nur für Maschinenbauer und Veredler. Kleine Runde, echte Use-Cases, voneinander lernen. Jetzt Platz im nächsten Termin sichern.",
  keywords: [
    "AI Schulung Nürnberg",
    "KI Maschinenbau Schulung",
    "KI Veredler",
    "AI Webinar Maschinenbau",
    "Closed Room KI",
    "Bluebatch",
  ],
  openGraph: {
    title: "AI Maschinenbau Schulung Nürnberg — Closed Room",
    description:
      "Closed-Room AI-Schulung in Nürnberg, nur für Maschinenbauer und Veredler. Kleine Runde, echte Use-Cases.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
  },
  alternates: { canonical: "/ai-maschinenbau-schulung-nuernberg" },
  robots: { index: false, follow: false },
};

const facts = [
  { bold: "Closed Room in Nürnberg", rest: "— nur euer Schlag Mensch" },
  {
    bold: "Nur Maschinenbau & Veredler",
    rest: "— gleiche Probleme, echter Austausch",
  },
  { bold: "Kleine Runde", rest: "— max. 10 Teilnehmer" },
  { bold: "Echte Use-Cases", rest: "statt Vortrag von der Bühne" },
  { bold: "Ganztägig", rest: "— mit konkreten Ideen zum Mitnehmen" },
];

export default function Page() {
  return (
    <FunnelPage
      preHeadline="Präsenz · Nürnberg · Closed Room"
      headline="AI Maschinenbau Schulung in Nürnberg: kleine Runde, echte Praxis."
      description="Ein Tag mit anderen Maschinenbauern und Veredlern. Keine Bühne, kein Berieseln, sondern echte Use-Cases und Austausch auf Augenhöhe."
      facts={facts}
      image={{
        src: "/images/team-collaboration.jpg",
        alt: "AI Maschinenbau Schulung Nürnberg, Closed Room für Maschinenbauer und Veredler",
      }}
      startLabel="Passung checken"
    >
      <MaschinenbauNuernbergFunnel />
    </FunnelPage>
  );
}
