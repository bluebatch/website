import type { Metadata } from "next";
import { ogImages } from "@/lib/og";
import Image from "next/image";
import { BookOpenCheck, FileText, Scale } from "lucide-react";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import IntroBox from "@/components/ui/intro-box";
import GeoSummary from "@/components/ui/geo-summary";
import ContactButton from "@/components/buttons/contact-button";
import InternalLink from "@/components/buttons/internal-link";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/ui/timeline-as-steps";
import { FaqContainer } from "@/components/ui/faqs";
import type { PageConfig } from "@/lib/get-subpages";

export const pageConfig: PageConfig = {
  title: "Begleitschreiben zur Veranlagung",
  description:
    "Begleitschreiben zur Veranlagung per KI generieren: Wissensbasis aus Kanzlei-Dokumenten und BFH-Urteilen, Freigabe durch den Sachbearbeiter.",
};

export const metadata: Metadata = {
  title: "Begleitschreiben zur Steuererklärung: per KI statt Muster | Bluebatch",
  description:
    "Begleitschreiben zur Veranlagung per KI generieren: Workflow, Wissensbasis aus System-Prompt, anonymisierten Kanzlei-Dokumenten und BFH-Urteilen, Freigabe-Prinzip für Steuerkanzleien.",
  openGraph: {
    title: "Begleitschreiben zur Veranlagung mit KI - Bluebatch",
    description:
      "So generieren Steuerkanzleien Begleitschreiben zur Veranlagung per KI: Wissensbasis aus Kanzlei-Dokumenten und BFH-Urteilen, jedes Schreiben mit Freigabe durch den Sachbearbeiter.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages("Begleitschreiben zur Veranlagung mit KI", "Steuerberater"),
  },
  alternates: {
    canonical:
      "/branchen/steuerberater/claude-cowork/begleitschreiben-veranlagung",
  },
};

const wissensbasis = [
  {
    icon: FileText,
    title: "System-Prompt mit Schreiben-Logik",
    body: "Der System-Prompt definiert, was ein gutes Begleitschreiben Ihrer Kanzlei ausmacht: welche Punkte es anspricht, wie Abweichungen vom Bescheid erklärt werden, welche Tonalität gegenüber Finanzamt und Mandant gilt. Einmal formuliert, gilt er für jedes Schreiben.",
  },
  {
    icon: BookOpenCheck,
    title: "Anonymisierte Kanzlei-Dokumente",
    body: "Bewährte Begleitschreiben aus der eigenen Praxis, sorgfältig anonymisiert, zeigen der KI Stil und Aufbau Ihrer Kanzlei. Neue Schreiben klingen dadurch wie aus Ihrem Haus, nicht wie aus einem Textbaukasten, und es gelangen keine Mandantendaten in die Wissensbasis.",
  },
  {
    icon: Scale,
    title: "BFH-Urteile als fachlicher Anker",
    body: "Wo ein Begleitschreiben eine steuerliche Position begründet, stützt sich die KI auf hinterlegte BFH-Urteile und Rechtsprechung. Argumente kommen aus echten Fundstellen, die der Sachbearbeiter bei der Freigabe direkt nachvollziehen kann.",
  },
];

const faqs = [
  {
    question: "Wie funktioniert ein KI-generiertes Begleitschreiben zur Veranlagung?",
    answer:
      "Nach Abschluss der Veranlagung übergibt der Sachbearbeiter die Eckpunkte des Falls an den KI-Skill. Die KI erstellt daraus ein vollständiges Begleitschreiben auf Basis von System-Prompt, anonymisierten Kanzlei-Dokumenten und BFH-Urteilen. Der Sachbearbeiter prüft den Entwurf, passt bei Bedarf an und gibt ihn frei. Erst dann wird versendet.",
  },
  {
    question: "Was braucht die Wissensbasis, damit die Schreiben gut werden?",
    answer:
      "Drei Dinge: einen System-Prompt, der Aufbau und Tonalität der Kanzlei festlegt, eine Auswahl anonymisierter Begleitschreiben aus der eigenen Praxis als Stilvorlage und einschlägige BFH-Urteile für fachliche Begründungen. Die Anonymisierung der Kanzlei-Dokumente ist Pflicht, bevor sie in die Wissensbasis aufgenommen werden.",
  },
  {
    question: "Geht ein Schreiben auch ohne menschliche Prüfung raus?",
    answer:
      "Nein. Das Freigabe-Prinzip ist fester Bestandteil des Workflows: Jeder Entwurf landet beim zuständigen Sachbearbeiter, der ihn fachlich prüft und freigibt. Die KI beschleunigt das Formulieren, die Verantwortung für den Inhalt bleibt bei der Kanzlei.",
  },
  {
    question: "Lässt sich der Workflow auf andere Schreiben übertragen?",
    answer:
      "Ja. Dasselbe Prinzip aus System-Prompt, anonymisierten Vorlagen und Freigabe funktioniert für viele wiederkehrende Textsorten der Kanzlei, etwa Stellungnahmen oder Mandantenanschreiben. Das Begleitschreiben zur Veranlagung ist ein guter Einstieg, weil es häufig vorkommt und einem klaren Muster folgt.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <div className="text-center max-w-3xl mx-auto">
          <Typo.H1>Begleitschreiben zur Veranlagung mit KI generieren</Typo.H1>
          <GeoSummary align="center" className="mt-4">
            Steuerkanzleien generieren Begleitschreiben zur Veranlagung mit
            KI, statt jedes Schreiben manuell zu formulieren. Der Workflow
            nutzt einen System-Prompt, anonymisierte Kanzlei-Dokumente und
            BFH-Urteile als Wissensbasis, damit jedes Schreiben fachlich
            fundiert und im Stil der Kanzlei entsteht. Kein Schreiben geht
            ohne Freigabe raus: Der Sachbearbeiter prüft jeden Entwurf vor
            dem Versand.
          </GeoSummary>
          <ContactButton icon="chat">Beratung anfragen</ContactButton>
        </div>
      </ContentWrapper>

      {/* Workflow */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Der Workflow</IntroBox.PreHeadline>
          <IntroBox.Headline>
            So entsteht ein Begleitschreiben in vier Schritten
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Begleitschreiben folgen einem wiederkehrenden Muster, und genau
            deshalb eignen sie sich so gut für KI-Unterstützung. Der Ablauf
            fügt sich in die bestehende Veranlagungsarbeit ein, ohne neue
            Systeme im Tagesgeschäft.
          </IntroBox.Paragraph>
        </IntroBox>

        <TimelineAsSteps className="mt-12">
          <TimelineAsStepsStep value={1}>
            <Typo.H3>Veranlagung abschließen, Eckpunkte übergeben</Typo.H3>
            <Typo.Paragraph>
              Der Sachbearbeiter schließt die Veranlagung wie gewohnt ab und
              gibt der KI die Eckpunkte mit: Veranlagungsjahr,
              Besonderheiten des Falls, erklärungsbedürftige Positionen,
              Abweichungen zum Vorjahr.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={2}>
            <Typo.H3>KI zieht die Wissensbasis</Typo.H3>
            <Typo.Paragraph>
              Der KI-Skill kombiniert den System-Prompt der Kanzlei mit
              anonymisierten Muster-Schreiben und, wo fachlich nötig,
              BFH-Urteilen. So weiß die KI, wie ein Begleitschreiben Ihrer
              Kanzlei aufgebaut ist und womit es argumentiert.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={3}>
            <Typo.H3>Entwurf im Kanzlei-Stil</Typo.H3>
            <Typo.Paragraph>
              Die KI formuliert das vollständige Schreiben: Einordnung der
              Veranlagung, Erläuterung der relevanten Punkte, Hinweise für
              den Mandanten oder das Finanzamt, in Tonalität und Gliederung
              der Kanzlei.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={4}>
            <Typo.H3>Prüfen, freigeben, versenden</Typo.H3>
            <Typo.Paragraph>
              Der Sachbearbeiter liest den Entwurf, korrigiert bei Bedarf
              und gibt frei. Erst mit dieser Freigabe verlässt das Schreiben
              die Kanzlei. Aus Minuten Formulierungsarbeit pro Fall wird ein
              kurzer Prüfblick.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
        </TimelineAsSteps>
      </ContentWrapper>

      {/* Wissensbasis */}
      <ContentWrapper colorScheme="white">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Die Wissensbasis</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was die Wissensbasis für gute Begleitschreiben braucht
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Die Qualität der Schreiben steht und fällt mit der Wissensbasis.
            Drei Bausteine haben sich in der Praxis bewährt, aufgesetzt
            werden sie einmal, danach profitiert jedes weitere Schreiben.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={3} className="mt-12">
          {wissensbasis.map((w) => {
            const Icon = w.icon;
            return (
              <SimpleCard key={w.title} align="left">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-800">
                  <Icon className="h-6 w-6" />
                </span>
                <Typo.H3>{w.title}</Typo.H3>
                <Typo.Paragraph>{w.body}</Typo.Paragraph>
              </SimpleCard>
            );
          })}
        </SimpleGrid>
      </ContentWrapper>

      {/* Freigabe-Prinzip */}
      <ContentWrapper colorScheme="gray-light">
        <SimpleGrid cols={2} className="items-center gap-8 md:gap-12">
          <div className="relative aspect-video mx-auto w-1/2 md:w-full">
            <Image
              src="/images/document-automation.jpg"
              alt="Sachbearbeiterin prüft ein KI-generiertes Begleitschreiben vor der Freigabe"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <Typo.H2 className="mb-4">
              Das Freigabe-Prinzip: KI formuliert, die Kanzlei entscheidet
            </Typo.H2>
            <Typo.Paragraph className="text-gray-600 mb-4">
              Der Workflow ist bewusst so gebaut, dass kein Schreiben
              automatisch versendet wird. Die KI liefert einen Entwurf, der
              Sachbearbeiter bleibt die letzte Instanz. Das hält die
              fachliche Verantwortung dort, wo sie hingehört, und macht den
              Einstieg leicht: Das Team behält die Kontrolle und gewinnt
              trotzdem bei jedem Schreiben Zeit.
            </Typo.Paragraph>
            <Typo.Paragraph className="text-gray-600 mb-6">
              Das Begleitschreiben ist einer von vielen Bausteinen aus{" "}
              <InternalLink
                href="/branchen/steuerberater/claude-cowork"
                variant="underline"
              >
                Claude Cowork für Steuerberater
              </InternalLink>
              , dem Modell, bei dem KI als Werkzeug fürs Team arbeitet und
              der Mensch jede Entscheidung trifft.
            </Typo.Paragraph>
            <InternalLink href="/contact">
              Workflow für Ihre Kanzlei besprechen
            </InternalLink>
          </div>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper bodyWidth="small">
        <FaqContainer faqs={faqs} />
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
