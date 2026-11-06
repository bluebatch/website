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

// Agenda in 3 Teilen (Clara, t-0175, Quellen: support.claude.com).
const agenda = [
  {
    teil: "Teil 1",
    zeit: "9:00 bis 12:30 Uhr",
    title: "Claude Cowork kennenlernen",
    nutzen:
      "Du weißt, was die App kann, und hast sie am Ende dieses Teils eingerichtet.",
    punkte: [
      { bold: "Ordner freigeben:", rest: "Claude liest und schreibt Dateien direkt in deinen Ordnern, ohne Hoch- und Herunterladen." },
      { bold: "Anweisungen und Projekte:", rest: "Ordner-Anweisungen, globale Anweisungen und Projekte mit eigenen Dateien und Gedächtnis." },
      { bold: "Ergebnisse, die du weiterverwendest:", rest: "Excel mit funktionierenden Formeln, PowerPoint und formatierte Dokumente." },
      { bold: "Anbindungen und Plugins:", rest: "Connectors zu deinen Tools, Plugins bündeln Skills, Connectors und Sub-Agenten." },
      { bold: "Browser und geplante Aufgaben:", rest: "Claude bedient Webseiten und füllt Formulare, wiederkehrende Aufgaben laufen nach Zeitplan in der Cloud." },
    ],
  },
  {
    teil: "Teil 2",
    zeit: "13:30 bis 14:30 Uhr",
    title: "Was „agentisch“ bedeutet",
    nutzen:
      "Du verstehst den Unterschied zu einem Chat und weißt, wann du Claude arbeiten lässt.",
    punkte: [
      { bold: "Chat vs. Agent:", rest: "Du beschreibst das Ziel, Claude plant die Schritte und führt sie selbst aus." },
      { bold: "Teilaufgaben und Parallelarbeit:", rest: "Claude zerlegt größere Aufträge in Sub-Aufgaben und arbeitet sie nebeneinander ab." },
      { bold: "Lange Aufgaben:", rest: "Claude arbeitet weiter, ohne dass du daneben sitzt, und du kannst unterwegs eingreifen." },
      { bold: "Berechtigungen:", rest: "Manuell, Auto oder ohne Rückfrage. Du entscheidest, wie viel Kontrolle du behältst." },
      { bold: "Grenzen:", rest: "Wo Claude Fehler macht und warum du Ergebnisse prüfst." },
    ],
  },
  {
    teil: "Teil 3",
    zeit: "14:30 bis 17:00 Uhr",
    title: "Praxis: so arbeitest du damit",
    nutzen:
      "Du gehst mit eigenen, funktionierenden Abläufen und einem Plan nach Hause.",
    punkte: [
      { bold: "Deine eigenen Aufgaben:", rest: "Mails, Dokumente, Tabellen oder Recherche aus deinem Alltag, direkt in Cowork gelöst." },
      { bold: "Eigene Skills:", rest: "Wiederkehrende Aufgaben einmal anlegen und danach immer gleich abrufen." },
      { bold: "Datenschutz im Alltag:", rest: "Welche Daten in Claude dürfen, welche Schutzfunktionen es gibt (z. B. Rückfrage vor dem Löschen von Dateien) und was du im Team festlegst." },
      { bold: "Gute Aufträge formulieren:", rest: "Ziel, Kontext, Ergebnisformat, damit du nicht mehrfach nachbessern musst." },
      { bold: "Umsetzungsplan:", rest: "Was du als Nächstes automatisierst, in welcher Reihenfolge. Zum Schluss Fragen." },
    ],
  },
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
        <h2 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
          So läuft der Tag
        </h2>
        <p className="mb-8 text-gray-700">
          Drei Teile, ein Tag. Du lernst die App kennen, verstehst, was
          „agentisch“ heißt, und arbeitest dann mit deinen eigenen Aufgaben.
        </p>
        <div className="mb-12 space-y-6">
          {agenda.map((t, i) => (
            <div key={t.teil}>
              {i === 1 && (
                <p className="mb-6 text-sm font-semibold text-gray-500">
                  12:30 bis 13:30 Uhr · Mittagspause
                </p>
              )}
              <section className="rounded-2xl border border-gray-200 p-5 sm:p-6">
                <p className="text-sm font-semibold text-primary-800">
                  {t.teil} · {t.zeit}
                </p>
                <h3 className="mt-1 text-xl font-bold text-gray-900">
                  {t.title}
                </h3>
                <p className="mt-2 text-gray-700">{t.nutzen}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
                  {t.punkte.map((p) => (
                    <li key={p.bold}>
                      <strong className="text-gray-900">{p.bold}</strong>{" "}
                      {p.rest}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          ))}
        </div>

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
