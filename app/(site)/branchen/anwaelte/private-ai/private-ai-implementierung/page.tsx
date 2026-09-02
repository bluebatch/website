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

const TITLE = "Private AI in der Anwaltskanzlei einführen";

export const metadata: Metadata = {
  title: `${TITLE} | Bluebatch`,
  description:
    "Private AI für Ihre Kanzlei umsetzen: Hardware oder dedizierter EU-Server, offene Modelle, Anbindung an das Kanzlei-Verzeichnis und ein erster produktiver Use Case. Betriebsfertig übergeben.",
  keywords: [
    "Private AI einführen Kanzlei",
    "lokales LLM Anwaltskanzlei",
    "KI Server Kanzlei",
    "Ollama vLLM Kanzlei",
  ],
  openGraph: {
    title: `${TITLE} | Bluebatch`,
    description:
      "Hardware oder dedizierter EU-Server, offene Modelle, Anbindung ans Kanzlei-Verzeichnis, erster produktiver Use Case.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages(TITLE, "Anwälte"),
  },
  alternates: {
    canonical: "/branchen/anwaelte/private-ai/private-ai-implementierung",
  },
};

const leistungen = [
  {
    title: "Infrastruktur",
    text: "GPU-Server im Kanzleinetz oder dediziert in einem deutschen Rechenzentrum, dimensioniert auf Ihre Kanzleigröße. Wir beschaffen nicht, wir rechnen vor, was die geplante Nutzung wirklich braucht.",
  },
  {
    title: "Modellbetrieb",
    text: "Offene Modelle wie Llama oder Mistral über Ollama oder vLLM, mit einer Oberfläche fürs Team. Modellwechsel bleiben möglich, ohne dass die Arbeitsumgebung neu gelernt werden muss.",
  },
  {
    title: "Zugang und Rollen",
    text: "Anbindung an Ihr bestehendes Verzeichnis, damit es keinen zweiten Benutzerkreis gibt. Rollen entscheiden, wer welche Räume und welche Dokumente sieht.",
  },
  {
    title: "Erster Use Case",
    text: "Ein Anwendungsfall geht mit live, meist Zusammenfassen langer Dokumente oder ein Entwurfs-Workflow. Eine Umgebung ohne konkreten Nutzen wird nach zwei Wochen nicht mehr geöffnet.",
  },
  {
    title: "Berufsrechtliche Unterlagen",
    text: "AVV und die Anlage nach § 43e Abs. 3 BRAO als IT-Lieferung, dazu die Dokumentation der Auswahl nach Abs. 2. Zur Prüfung durch Ihre Seite, nicht als Rechtsberatung.",
  },
  {
    title: "Übergabe und Betrieb",
    text: "Dokumentation, Einweisung des Teams und auf Wunsch laufender Betrieb mit Monitoring und Updates. Sie können die Umgebung auch vollständig selbst weiterführen.",
  },
];

const faqs = [
  {
    question: "Wie lange dauert die Einführung?",
    answer:
      "Für eine kleine bis mittlere Kanzlei rechnen wir mit vier bis sechs Wochen von der Entscheidung bis zum produktiven ersten Use Case. Der größte Teil davon ist nicht Technik, sondern die Klärung, welche Daten in welchen Raum dürfen und wer im Team womit arbeitet.",
  },
  {
    question: "Was kostet eine private KI-Umgebung?",
    answer:
      "Der Einstieg ist der Use-Case-Workshop für 1.750 € einmalig, in dem Bedarf, Weg und Dimensionierung geklärt werden. Die Umsetzung läuft als fest kalkuliertes Paket ab 8.000 €, laufender Betrieb und Ausbau über feste Engineer-Kapazität ab 3.000 € pro Monat. Hardware oder Serverbetrieb kommen dazu und werden transparent durchgereicht.",
  },
  {
    question: "Sind offene Modelle für juristische Arbeit gut genug?",
    answer:
      "Für Zusammenfassen, Strukturieren, Umformulieren und das Erschließen langer Dokumente ja. Bei anspruchsvoller Argumentation liegen Frontier-Modelle weiterhin vorn. Deshalb ist die Entscheidung nicht endgültig: Über dieselbe Umgebung lässt sich ein EU-API-Modell hinter derselben Vertragskette einbinden, pro Anwendungsfall entschieden.",
  },
  {
    question: "Was passiert, wenn die Kanzlei wächst?",
    answer:
      "Die Umgebung wächst mit. Mehr Nutzer heißt in der Regel nicht sofort mehr Hardware, sondern zunächst bessere Auslastung. Wenn doch, ist der Schritt eine Erweiterung, kein Neuaufbau, weil Modelle und Oberfläche gleich bleiben.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <div className="mx-auto max-w-3xl text-center">
          <Typo.H1>
            Private AI in der Anwaltskanzlei einführen: von der Entscheidung bis
            zum Betrieb
          </Typo.H1>
          <GeoSummary align="center" className="mt-4">
            Wir bauen Anwaltskanzleien eine geschützte KI-Umgebung: offene
            Sprachmodelle auf eigener Hardware oder auf einem dedizierten
            EU-Server, angebunden an das Kanzlei-Verzeichnis, inklusive erstem
            produktivem Anwendungsfall und der Vertragskette nach § 43e Abs. 3
            BRAO. Übergabe betriebsfertig, auf Wunsch mit laufender Wartung.
          </GeoSummary>
          <ContactButton icon="chat">Erstgespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Leistungsumfang</IntroBox.PreHeadline>
          <IntroBox.Headline>Was wir übernehmen</IntroBox.Headline>
          <IntroBox.Paragraph>
            Kein Beratungsprojekt mit Foliensatz am Ende, sondern eine laufende
            Umgebung, in der am letzten Tag echte Kanzleiarbeit passiert.
          </IntroBox.Paragraph>
        </IntroBox>
        <SimpleGrid cols={3} className="mt-12">
          {leistungen.map((l) => (
            <SimpleCard key={l.title} align="left" className="h-full">
              <Typo.H3 className="mt-0!">{l.title}</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                {l.text}
              </Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper bodyWidth="small">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Ablauf</IntroBox.PreHeadline>
          <IntroBox.Headline>Vier Schritte bis zum Betrieb</IntroBox.Headline>
        </IntroBox>
        <div className="mt-12">
          <TimelineAsSteps>
            <TimelineAsStepsStep value={1}>
              <Typo.H3 className="mt-2!">Bestand und Bedarf</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Welche Kanzleisoftware läuft, welche Daten sollen erreichbar
                sein, wer arbeitet womit. Ergebnis ist die Entscheidung
                zwischen eigenem Haus und dediziertem Server.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={2}>
              <Typo.H3 className="mt-2!">Aufbau der Umgebung</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Server, Modelle, Oberfläche, Anbindung an Ihr Verzeichnis und
                die Rollen. Parallel entstehen AVV und die Anlage nach Abs. 3
                zur Prüfung durch Ihre Seite.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={3}>
              <Typo.H3 className="mt-2!">Erster Use Case</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Ein Anwendungsfall geht produktiv, eng geschnitten und mit
                Freigabe. Das Team arbeitet damit, während wir noch da sind.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={4} isLast>
              <Typo.H3 className="mt-2!">Übergabe</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Dokumentation, Einweisung, und die Entscheidung, ob Sie selbst
                weiterbetreiben oder wir die Wartung übernehmen.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
          </TimelineAsSteps>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Einordnung</IntroBox.PreHeadline>
          <IntroBox.Headline>Was danach kommt</IntroBox.Headline>
          <IntroBox.Paragraph>
            Steht die Umgebung, ist der übliche nächste Schritt die{" "}
            <InternalLink
              href="/branchen/anwaelte/private-ai/kanzlei-wissensdatenbank"
              variant="underline"
            >
              Wissensdatenbank auf den eigenen Schriftsätzen
            </InternalLink>
            . Den berufsrechtlichen Rahmen dazu beschreibt unsere Seite zu{" "}
            <InternalLink
              href="/branchen/anwaelte/ki-anwaltskanzlei-43e-brao"
              variant="underline"
            >
              KI in der Anwaltskanzlei nach § 43e BRAO
            </InternalLink>
            .
          </IntroBox.Paragraph>
        </IntroBox>
      </ContentWrapper>

      <ContentWrapper bodyWidth="small">
        <FaqContainer
          faqs={faqs}
          intro="Was Kanzleien vor der Einführung am häufigsten wissen wollen."
        />
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
