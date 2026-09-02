import type { Metadata } from "next";
import ContentWrapper from "@/components/layout/content-wrapper";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import Typo from "@/components/ui/typo";
import GeoSummary from "@/components/ui/geo-summary";
import IntroBox from "@/components/ui/intro-box";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/ui/timeline-as-steps";
import { FaqContainer } from "@/components/ui/faqs";
import ContactButton from "@/components/buttons/contact-button";
import InternalLink from "@/components/buttons/internal-link";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { ogImages } from "@/lib/og";

const TITLE = "beA-Nachrichten automatisiert verarbeiten";

export const metadata: Metadata = {
  title: `${TITLE} | Bluebatch`,
  description:
    "Eingehende beA-Nachrichten automatisiert verarbeiten: entpacken, lesbar machen, klassifizieren, der Akte zuordnen und Entwürfe vorbereiten. Der Versand bleibt eine Handlung des Berufsträgers.",
  keywords: [
    "beA automatisieren",
    "beA Nachrichten verarbeiten",
    "elektronischer Rechtsverkehr Automatisierung",
    "beA Anhänge auslesen",
  ],
  openGraph: {
    title: `${TITLE} | Bluebatch`,
    description:
      "Entpacken, lesbar machen, klassifizieren, zuordnen, Entwürfe vorbereiten. Der Versand bleibt manuell.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages(TITLE, "Anwälte"),
  },
  alternates: {
    canonical: "/branchen/anwaelte/workflows/bea-nachrichten-automatisieren",
  },
};

const schritte = [
  {
    title: "Entpacken und lesbar machen",
    text: "beA-Nachrichten kommen mit strukturierten Metadaten und Anhängen. Der Workflow trennt beides sauber und macht auch gescannte PDF durchsuchbar, bevor irgendetwas ausgewertet wird.",
  },
  {
    title: "Metadaten sichern",
    text: "Absender, Aktenzeichen des Gerichts und vor allem der Zustellzeitpunkt werden aus der Nachricht übernommen und nicht aus dem Dokumententext geraten. Für alles Fristrelevante ist das der entscheidende Punkt.",
  },
  {
    title: "Klassifizieren und zuordnen",
    text: "Art des Schreibens erkennen und die passende Akte vorschlagen. Bei mehreren Kandidaten wird vorgelegt statt entschieden.",
  },
  {
    title: "Ablegen und verteilen",
    text: "Nach Bestätigung wandert die Nachricht samt Anhängen in die Akte, die Zuständigkeit wird gesetzt und Wiedervorlagen werden angelegt.",
  },
];

const faqs = [
  {
    question: "Verschickt der Workflow beA-Nachrichten?",
    answer:
      "Nein. Wir automatisieren den Eingang und die Vorbereitung, nicht den Versand. Ein Schriftsatz, der an ein Gericht geht, ist eine anwaltliche Handlung mit qualifizierter elektronischer Signatur oder aus dem eigenen Postfach des Berufsträgers. Entwürfe werden vorbereitet und abgelegt, abgeschickt wird von Hand.",
  },
  {
    question: "Wie kommt der Workflow an die beA-Nachrichten?",
    answer:
      "Über den Weg, den Ihre Kanzlei ohnehin nutzt. Bei actaport sind beA-Nachrichten nativ integriert und über die REST-API erreichbar. Bei RA-MICRO läuft beA über ein eigenes Modul im Programm, dort setzen wir an der Ablage der eingegangenen Nachrichten an. In beiden Fällen greifen wir nicht am Postfach vorbei.",
  },
  {
    question: "Was bringt das im Alltag messbar?",
    answer:
      "Den größten Effekt sehen Kanzleien beim Zustelldatum und bei der Zuordnung. Beides wird heute von Hand aus der Nachricht abgelesen und übertragen, mehrfach am Tag, und genau dort passieren Übertragungsfehler. Der zweite Effekt ist, dass Anhänge sofort durchsuchbar sind statt erst nach dem Öffnen.",
  },
  {
    question: "Was passiert bei einer Störung im Ablauf?",
    answer:
      "Der Workflow meldet sich, statt still auszufallen. Nicht verarbeitete Nachrichten bleiben sichtbar in einer Liste und der Eingang im Postfach bleibt unangetastet, sodass der übliche manuelle Weg jederzeit funktioniert. Ein Automatisierungsschritt darf nie der einzige Weg zu einer fristrelevanten Nachricht sein.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <div className="mx-auto max-w-3xl text-center">
          <Typo.H1>
            beA-Nachrichten automatisiert verarbeiten, ohne den Versand aus der
            Hand zu geben
          </Typo.H1>
          <GeoSummary align="center" className="mt-4">
            Ein beA-Workflow übernimmt in der Anwaltskanzlei den Eingang:
            Nachrichten entpacken, Anhänge durchsuchbar machen, Zustellzeitpunkt
            und Absender aus den Metadaten sichern, das Schreiben klassifizieren
            und der Akte zuordnen. Der Versand an Gerichte bleibt eine Handlung
            des Berufsträgers.
          </GeoSummary>
          <ContactButton icon="chat">Beratung anfragen</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <Typo.H2 className="mb-4 text-center">
          Der Zustellzeitpunkt ist das Wertvollste in der Nachricht
        </Typo.H2>
        <Typo.Paragraph className="text-center text-gray-600">
          Eine beA-Nachricht bringt strukturierte Metadaten mit, die im
          Kanzleialltag oft von Hand abgelesen und weiterverarbeitet werden.
          Gerade beim Zustellzeitpunkt ist das riskant, weil daran Fristen
          hängen und weil der Tag, an dem jemand die Nachricht öffnet, nicht der
          maßgebliche ist. Ein Workflow überträgt diese Angabe fehlerfrei, und
          das ist der eigentliche Gewinn.
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox size="small">
          <IntroBox.PreHeadline>Ablauf</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was mit einer eingehenden Nachricht passiert
          </IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={2} className="mt-12">
          {schritte.map((s) => (
            <SimpleCard key={s.title} align="left" className="h-full">
              <Typo.H3 className="mt-0!">{s.title}</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                {s.text}
              </Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Einführung</IntroBox.PreHeadline>
          <IntroBox.Headline>Drei Schritte bis zum Betrieb</IntroBox.Headline>
        </IntroBox>
        <div className="mt-12">
          <TimelineAsSteps>
            <TimelineAsStepsStep value={1}>
              <Typo.H3 className="mt-2!">Eingang anschauen</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Wie kommt beA heute in Ihre Kanzlei, wer sichtet, wer ordnet zu,
                wo entstehen die Übertragungen von Hand. Daraus ergibt sich der
                Anbindungsweg, nicht umgekehrt.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={2}>
              <Typo.H3 className="mt-2!">Mitlaufen lassen</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Der Workflow verarbeitet zwei Wochen parallel zum gewohnten
                Ablauf, ohne dass jemand ihm folgen muss. Danach ist die
                Trefferquote an echter Post bekannt.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={3} isLast>
              <Typo.H3 className="mt-2!">Umstellen</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Der geprüfte Ablauf wird zum Standardweg, der manuelle bleibt
                als Rückfallebene bestehen und wird nicht abgeschaltet.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
          </TimelineAsSteps>
        </div>
      </ContentWrapper>

      <ContentWrapper bodyWidth="small">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Zusammenspiel</IntroBox.PreHeadline>
          <IntroBox.Headline>Was daneben läuft</IntroBox.Headline>
          <IntroBox.Paragraph>
            Die inhaltliche Einschätzung übernimmt der{" "}
            <InternalLink
              href="/branchen/anwaelte/ki-agenten/posteingang-agent"
              variant="underline"
            >
              Posteingangs-Agent
            </InternalLink>
            , die Fristberechnung der{" "}
            <InternalLink
              href="/branchen/anwaelte/ki-agenten/fristen-agent"
              variant="underline"
            >
              Fristen-Agent
            </InternalLink>
            . Wie die Anbindung an Ihre Kanzleisoftware aussieht, hängt am
            Produkt: für RA-MICRO beschreibt es die Seite zur{" "}
            <InternalLink
              href="/branchen/anwaelte/workflows/ra-micro-anbindung"
              variant="underline"
            >
              RA-MICRO-Anbindung
            </InternalLink>
            .
          </IntroBox.Paragraph>
        </IntroBox>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer
          faqs={faqs}
          intro="Was Kanzleien uns zur beA-Automatisierung am häufigsten fragen."
        />
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
