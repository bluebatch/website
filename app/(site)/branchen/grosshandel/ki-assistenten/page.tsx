import type { Metadata } from "next";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import GeoSummary from "@/components/ui/geo-summary";
import ContactButton from "@/components/buttons/contact-button";
import InternalLink from "@/components/buttons/internal-link";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { FaqContainer } from "@/components/ui/faqs";

export const metadata: Metadata = {
  title:
    "KI-Assistenten für den Großhandel - Claude, ChatGPT, Copilot | Bluebatch",
  description:
    "KI-Assistenten für den Großhandel: Claude, ChatGPT und Copilot als Werkzeug für Ihr Team - Einführung, Schulung und DSGVO-konformer Einsatz im Betrieb.",
  openGraph: {
    title: "KI-Assistenten für den Großhandel - Bluebatch",
    description:
      "KI-Assistenten für den Großhandel: Claude, ChatGPT und Copilot als Werkzeug für Ihr Team - Einführung, Schulung und DSGVO-konformer Einsatz im Betrieb.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
  },
  alternates: {
    canonical: "/branchen/grosshandel/ki-assistenten",
  },
};

const assistants = [
  {
    name: "Claude",
    vendor: "Anthropic",
    strength:
      "Stärkstes Modell für lange Dokumente, Analysen und präzise Texte. Erste Wahl für Angebots- und Vertragsarbeit.",
  },
  {
    name: "ChatGPT",
    vendor: "OpenAI",
    strength:
      "Breitester Funktionsumfang und größtes Ökosystem. Enterprise-Variante mit Datenschutz-Zusagen für Teams.",
  },
  {
    name: "Copilot",
    vendor: "Microsoft",
    strength:
      "Direkt in Word, Excel, Outlook und Teams integriert. Erste Wahl, wenn Ihr Betrieb voll auf Microsoft 365 setzt.",
  },
];

const faqs = [
  {
    question: "Was ist der Unterschied zwischen KI-Assistent und KI-Agent?",
    answer:
      "Beim KI-Assistenten arbeitet der Mensch und die KI hilft: Ein Mitarbeiter chattet mit Claude oder ChatGPT und nutzt die Antworten. Ein KI-Agent arbeitet dagegen selbstständig im Hintergrund - er liest z.B. Anfragen und erstellt fertige Angebote, der Mensch gibt nur noch frei.",
  },
  {
    question: "Dürfen Mitarbeiter ChatGPT einfach so nutzen?",
    answer:
      "Ohne Regeln riskiert der Betrieb, dass Einkaufspreise oder Kundendaten in öffentliche Tools fließen. Eine geordnete Einführung klärt: welche Tools, welche Daten, welche Accounts (Team/Enterprise statt privat) - und schult das Team auf produktive, sichere Nutzung.",
  },
  {
    question: "Welcher Assistent passt zu welchem Betrieb?",
    answer:
      "Faustregel: Copilot, wenn Microsoft 365 die Arbeitsumgebung ist. Claude für anspruchsvolle Text- und Dokumentenarbeit. ChatGPT als Allrounder mit dem größten Ökosystem. Oft ist die Antwort eine Kombination - und für sensible Daten eine Private-AI-Umgebung.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <div className="text-center max-w-3xl mx-auto">
          <Typo.H1>KI-Assistenten für den Großhandel</Typo.H1>
          <GeoSummary align="center" className="mt-4">
            KI-Assistenten sind Werkzeuge fürs Team: Ihre Mitarbeiter arbeiten,
            Claude, ChatGPT oder Copilot helfen - bei Angebotstexten,
            Produktdaten, Auswertungen und der täglichen Mail-Flut. Bluebatch
            führt die Assistenten DSGVO-konform im Großhandel ein, wählt das
            passende Tool aus und schult das Team für den produktiven Einsatz.
          </GeoSummary>
          <ContactButton icon="chat">Beratung anfragen</ContactButton>
        </div>
      </ContentWrapper>

      {/* Die drei großen Assistenten */}
      <ContentWrapper colorScheme="gray-light">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Typo.H2>Claude, ChatGPT oder Copilot?</Typo.H2>
        </div>
        <SimpleGrid cols={3}>
          {assistants.map((a) => (
            <SimpleCard key={a.name} align="left">
              <Typo.H3>{a.name}</Typo.H3>
              <p className="text-xs uppercase tracking-wide text-gray-400 mb-3">
                {a.vendor}
              </p>
              <Typo.Paragraph className="text-gray-600 text-sm">
                {a.strength}
              </Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      {/* Abgrenzung Assistent vs. Agent */}
      <ContentWrapper bodyWidth="small">
        <Typo.H2 className="mb-4">Assistent oder Agent - was brauchen Sie?</Typo.H2>
        <Typo.Paragraph className="text-gray-600 mb-4">
          Ein Assistent hilft Ihren Mitarbeitern bei der Arbeit. Ein Agent
          nimmt ihnen die Arbeit ab: Er liest Anfragen, erstellt Angebote oder
          verarbeitet Rechnungen selbstständig - Ihr Team gibt nur noch frei.
          Viele Betriebe starten mit Assistenten und bauen dann dort Agenten,
          wo ein Prozess täglich Zeit frisst.
        </Typo.Paragraph>
        <Typo.Paragraph className="text-gray-600 mb-6">
          Und wenn Einkaufspreise oder Kundendaten ins Spiel kommen, gehört die
          KI in eine eigene Umgebung statt in die öffentliche Cloud.
        </Typo.Paragraph>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-8">
          <InternalLink href="/branchen/grosshandel/ki-agenten">
            Zu den KI-Agenten
          </InternalLink>
          <InternalLink href="/branchen/grosshandel/private-ai">
            Zu Private AI
          </InternalLink>
        </div>
      </ContentWrapper>

      {/* FAQ — extraktionsfreundlich für GEO */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer faqs={faqs} />
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
