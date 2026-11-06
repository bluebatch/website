import type { Metadata } from "next";
import FunnelPage from "../_engine/funnel-page";
import { ContentWrapper } from "@/components/layout";
import { FaqContainer } from "@/components/ui";
import ClaudeCoworkNuernbergFunnel from "./funnel";

export const metadata: Metadata = {
  title: "Claude Cowork Schulung Nürnberg: 1 Tag Workshop am 10.12.2026",
  description:
    "Ein Tag vor Ort in Nürnberg: Claude Cowork im Arbeitsalltag einsetzen und mit eigenen Abläufen nach Hause gehen. 800 € netto, nur 15 Plätze. Jetzt anmelden.",
  keywords: [
    "Claude Cowork Schulung Nürnberg",
    "Claude Cowork Workshop",
    "KI Schulung Nürnberg",
    "Claude Schulung",
    "Bluebatch",
  ],
  openGraph: {
    title: "Claude Cowork Schulung Nürnberg: 1 Tag Workshop am 10.12.2026",
    description:
      "Ein Tag vor Ort in Nürnberg, 9 bis 17 Uhr: Claude Cowork für Mails, Dokumente und Recherche, an deinen eigenen Aufgaben. 800 € netto, nur 15 Plätze.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
  },
  alternates: { canonical: "/claude-cowork-schulung-nuernberg" },
  robots: { index: false, follow: true },
};

const facts = [
  { bold: "Do, 10.12.2026,", rest: "9 bis 17 Uhr." },
  { bold: "Nürnberg vor Ort,", rest: "genaue Adresse folgt mit der Anmeldebestätigung." },
  { bold: "800 € netto", rest: "pro Person, Rechnung per Mail." },
  { bold: "Max. 15 Teilnehmer,", rest: "damit Zeit für deine Fragen bleibt." },
];

const ablauf = [
  { zeit: "9:00", text: "Start: Ziele, Erwartungen, Claude Cowork einrichten" },
  { zeit: "10:30", text: "Erste echte Aufgaben lösen: Mails, Dokumente, Recherche" },
  { zeit: "12:30", text: "Mittagspause" },
  { zeit: "13:30", text: "Eigene Skills bauen für deine wiederkehrenden Aufgaben" },
  { zeit: "15:30", text: "Datenschutz und sichere Nutzung im Alltag" },
  { zeit: "16:30", text: "Umsetzungsplan und Fragen" },
  { zeit: "17:00", text: "Ende" },
];

const fuerWen = [
  "Geschäftsführer, Selbstständige und Teams, die KI produktiv nutzen wollen",
  "Keine Programmierkenntnisse nötig",
  "Mitbringen: Laptop, einen Claude-Zugang (Bezahlplan) und 2 bis 3 echte Aufgaben aus deinem Alltag",
];

const faqs = [
  {
    question: "Wann und wo findet der Workshop statt?",
    answer:
      "Am 10.12.2026 von 9 bis 17 Uhr in Nürnberg. Die genaue Adresse bekommst du mit der Bestätigung.",
  },
  {
    question: "Was kostet die Teilnahme?",
    answer:
      "800 € netto pro Person, zuzüglich Mehrwertsteuer. Du bekommst eine Rechnung.",
  },
  {
    question: "Brauche ich Vorkenntnisse?",
    answer: "Nein. Du solltest Claude schon einmal geöffnet haben, mehr nicht.",
  },
  {
    question: "Was muss ich mitbringen?",
    answer:
      "Laptop, einen Claude-Zugang mit Bezahlplan und zwei bis drei echte Aufgaben.",
  },
  {
    question: "Wie viele Teilnehmer sind dabei?",
    answer: "Maximal 15, damit Zeit für deine Fragen bleibt.",
  },
  {
    question: "Was passiert mit meinen Daten im Workshop?",
    answer:
      "Du entscheidest, welche Beispiele du nutzt. Anonymisierte Daten reichen.",
  },
];

export default function Page() {
  return (
    <>
      <FunnelPage
        variant="mobile-first"
        preHeadline="Workshop vor Ort · Do, 10.12.2026 · 9 bis 17 Uhr"
        headline="Claude Cowork Schulung Nürnberg: Ein Tag, danach arbeitet KI für dich."
        description="Du bringst deine echten Aufgaben mit. Am Abend laufen Mails, Dokumente und Recherche in Minuten statt Stunden. 800 € netto, nur 15 Plätze."
        facts={facts}
        image={{
          src: "/images/claude-cowork.png",
          alt: "Claude Cowork Workshop in Nürnberg",
        }}
        startLabel="Platz sichern"
      >
        <ClaudeCoworkNuernbergFunnel />
      </FunnelPage>

      <ContentWrapper colorScheme="white" bodyWidth="small">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
          So läuft der Tag
        </h2>
        <ol className="mb-12 space-y-3">
          {ablauf.map((a) => (
            <li key={a.zeit} className="flex gap-4">
              <span className="w-14 shrink-0 font-semibold text-primary-800">
                {a.zeit}
              </span>
              <span className="text-gray-700">{a.text}</span>
            </li>
          ))}
        </ol>

        <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
          Für wen der Workshop passt
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-gray-700">
          {fuerWen.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer headline="Häufige Fragen" faqs={faqs} />
      </ContentWrapper>
    </>
  );
}
