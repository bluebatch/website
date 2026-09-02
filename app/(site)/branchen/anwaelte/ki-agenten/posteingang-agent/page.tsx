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

const TITLE = "Posteingangs-Agent für Anwaltskanzleien";

export const metadata: Metadata = {
  title: `${TITLE}: beA, Mail und Scan | Bluebatch`,
  description:
    "Der Posteingangs-Agent liest beA-Nachrichten, E-Mails und Scans, ordnet sie der Akte zu und schlägt den nächsten Schritt vor. Die Zuordnung bestätigt ein Mensch, angebunden an actaport und RA-MICRO.",
  keywords: [
    "Posteingang Kanzlei automatisieren",
    "beA Posteingang KI",
    "Dokumente zuordnen Kanzlei",
    "Kanzlei Posteingang Software",
  ],
  openGraph: {
    title: `${TITLE}: beA, Mail und Scan`,
    description:
      "Posteingang lesen, der Akte zuordnen und den nächsten Schritt vorschlagen. Bestätigt wird von Hand.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages(TITLE, "Anwälte"),
  },
  alternates: {
    canonical: "/branchen/anwaelte/ki-agenten/posteingang-agent",
  },
};

const leistet = [
  {
    title: "Kanäle zusammenführen",
    text: "beA-Nachrichten, E-Mails an die Kanzleiadresse und eingescannte Papierpost laufen in einem Eingang zusammen. Heute prüft das Sekretariat drei Orte, oft mehrfach am Tag.",
  },
  {
    title: "Inhalt erfassen",
    text: "Der Agent liest das Schreiben samt Anhängen und erkennt, worum es geht: Gerichtspost, Gegenanwalt, Mandantenrückfrage, Rechnung, Werbung. Das ist die Einschätzung, die kein festes Regelwerk leistet.",
  },
  {
    title: "Akte zuordnen",
    text: "Aus Aktenzeichen, Beteiligten und Betreff schlägt der Agent die passende Akte vor. Bei mehreren Kandidaten legt er sie mit Begründung vor, statt zu raten.",
  },
  {
    title: "Nächsten Schritt vorschlagen",
    text: "Fristbezug prüfen, Wiedervorlage anlegen, Weiterleitung an den zuständigen Berufsträger oder Rückfrage. Der Vorschlag steht am Dokument, die Entscheidung trifft ein Mensch.",
  },
];

const faqs = [
  {
    question: "Legt der Agent Dokumente selbst in der Akte ab?",
    answer:
      "Erst nach Bestätigung. Der Agent bereitet die Zuordnung vor und legt sie vor, ein Mensch bestätigt oder korrigiert mit einem Klick. Nach einigen Wochen ist die Trefferquote so hoch, dass das Bestätigen Sekunden dauert, aber der Schritt bleibt. Eine falsch abgelegte Gerichtspost ist teurer als jede eingesparte Minute.",
  },
  {
    question: "Was passiert bei unklaren Fällen?",
    answer:
      "Der Agent sagt, dass er unsicher ist, statt sich für eine Variante zu entscheiden. Unklare Vorgänge landen in einer eigenen Liste mit den Kandidaten, die er in Betracht gezogen hat. Das ist die wichtigste Eigenschaft eines Agenten im Kanzleibetrieb: zu wissen, wann er nicht weiterweiß.",
  },
  {
    question: "Funktioniert das mit RA-MICRO?",
    answer:
      "Ja, auf dem Weg, den RA-MICRO hergibt. Da für Drittsysteme keine offene REST-API dokumentiert ist, läuft die Anbindung über die Dokumentenablage, über Exporte und über das beA-Postfach. Bei actaport geht es direkter über die REST-API. Welcher Weg für Ihre Installation gilt, klären wir in der Bestandsaufnahme.",
  },
  {
    question: "Wie lange dauert die Einführung?",
    answer:
      "Nach der Bestandsaufnahme rechnen wir mit drei bis vier Wochen bis zum produktiven Betrieb für einen Eingangskanal. Die ersten zwei Wochen läuft der Agent üblicherweise mit, ohne dass jemand seinen Vorschlägen folgen muss, damit die Trefferquote an echter Post sichtbar wird.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <div className="mx-auto max-w-3xl text-center">
          <Typo.H1>
            Posteingangs-Agent: beA, Mail und Scan in einem geprüften Eingang
          </Typo.H1>
          <GeoSummary align="center" className="mt-4">
            Der Posteingangs-Agent liest in der Anwaltskanzlei beA-Nachrichten,
            E-Mails und eingescannte Papierpost, erkennt das Thema, schlägt die
            passende Akte vor und benennt den nächsten Schritt. Bestätigt wird
            von Hand. Angebunden an actaport über die REST-API und an RA-MICRO
            über Ablage und Export.
          </GeoSummary>
          <ContactButton icon="chat">Beratung anfragen</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <Typo.H2 className="mb-4 text-center">
          Der Eingang ist der Engpass, nicht die Bearbeitung
        </Typo.H2>
        <Typo.Paragraph className="text-center text-gray-600">
          In den meisten Kanzleien geht die Zeit nicht im Schriftsatz verloren,
          sondern davor: Post sichten, zuordnen, verteilen, und das über drei
          getrennte Kanäle. Der Vorgang ist gleichförmig genug für Software und
          gleichzeitig zu uneindeutig für feste Regeln. Genau in diese Lücke
          gehört ein Agent.
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox size="small">
          <IntroBox.PreHeadline>Leistung</IntroBox.PreHeadline>
          <IntroBox.Headline>Was der Agent übernimmt</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={2} className="mt-12">
          {leistet.map((l) => (
            <SimpleCard key={l.title} align="left" className="h-full">
              <Typo.H3 className="mt-0!">{l.title}</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                {l.text}
              </Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Ablauf</IntroBox.PreHeadline>
          <IntroBox.Headline>Ein Posteingang von A bis Z</IntroBox.Headline>
        </IntroBox>
        <div className="mt-12">
          <TimelineAsSteps>
            <TimelineAsStepsStep value={1}>
              <Typo.H3 className="mt-2!">Eingang abholen</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Neue beA-Nachricht, Mail oder Scan wird erkannt, Anhänge werden
                entpackt und lesbar gemacht, auch bei gescannten PDF.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={2}>
              <Typo.H3 className="mt-2!">Einordnen</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Der Agent bestimmt Art des Schreibens, Beteiligte, Aktenbezug
                und ob ein Fristbezug im Raum steht.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={3}>
              <Typo.H3 className="mt-2!">Vorschlag vorlegen</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Akte, Zuständigkeit und nächster Schritt stehen am Dokument,
                inklusive Begründung und Sicherheit der Einschätzung.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={4} isLast>
              <Typo.H3 className="mt-2!">Bestätigen und ablegen</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Ein Klick bestätigt, dann übernimmt der Workflow die Ablage in
                der Kanzleisoftware und legt Wiedervorlagen an.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
          </TimelineAsSteps>
        </div>
      </ContentWrapper>

      <ContentWrapper bodyWidth="small">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Passt dazu</IntroBox.PreHeadline>
          <IntroBox.Headline>Was daneben Sinn ergibt</IntroBox.Headline>
          <IntroBox.Paragraph>
            Erkennt der Agent ein fristauslösendes Schreiben, übernimmt der{" "}
            <InternalLink
              href="/branchen/anwaelte/ki-agenten/fristen-agent"
              variant="underline"
            >
              Fristen-Agent
            </InternalLink>{" "}
            die Berechnung. Die Ablage danach erledigen die{" "}
            <InternalLink
              href="/branchen/anwaelte/workflows/bea-nachrichten-automatisieren"
              variant="underline"
            >
              Workflows für beA-Nachrichten
            </InternalLink>
            .
          </IntroBox.Paragraph>
        </IntroBox>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer
          faqs={faqs}
          intro="Was Kanzleien uns zum Posteingangs-Agenten am häufigsten fragen."
        />
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
