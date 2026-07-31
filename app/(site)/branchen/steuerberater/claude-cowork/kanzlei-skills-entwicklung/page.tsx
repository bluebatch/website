import type { Metadata } from "next";
import { ogImages } from "@/lib/og";
import Image from "next/image";
import {
  BookOpenCheck,
  FileCode2,
  FlaskConical,
  GraduationCap,
} from "lucide-react";
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

export const metadata: Metadata = {
  title: "Kanzlei-Skills entwickeln lassen - Fachwissen als KI-Skill | Bluebatch",
  description:
    "Bluebatch kodiert das Fachwissen Ihrer Steuerkanzlei als wiederverwendbare KI-Skills in Markdown: Wissens-Extraktion, Test mit echten Fällen, Schulung des Teams.",
  openGraph: {
    title: "Kanzlei-Skills entwickeln lassen - Bluebatch",
    description:
      "Bluebatch kodiert das Fachwissen Ihrer Steuerkanzlei als wiederverwendbare KI-Skills in Markdown: Wissens-Extraktion, Test mit echten Fällen, Schulung des Teams.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages("Kanzlei-Skills entwickeln lassen", "Steuerberater"),
  },
  alternates: {
    canonical: "/branchen/steuerberater/claude-cowork/kanzlei-skills-entwicklung",
  },
};

const deliverables = [
  {
    icon: BookOpenCheck,
    title: "Wissens-Extraktion mit Ihren Experten",
    body: "In strukturierten Sessions holen wir das Wissen aus den Köpfen Ihrer Berufsträger und erfahrenen Mitarbeiter: Prüfkriterien, Argumentationslinien, Formulierungen, typische Fallstricke. Genau das Wissen, das heute nur bei einzelnen Personen liegt und mit jeder Kündigung die Kanzlei verlassen würde.",
  },
  {
    icon: FileCode2,
    title: "Skill in Markdown, lesbar und pflegbar",
    body: "Das extrahierte Wissen kodieren wir als KI-Skill in Markdown: eine klar strukturierte Arbeitsanweisung, die das KI-Modell Schritt für Schritt durch die Aufgabe führt. Markdown ist bewusst gewählt: Jeder in der Kanzlei kann den Skill lesen, prüfen und später selbst anpassen, ohne Programmierkenntnisse.",
  },
  {
    icon: FlaskConical,
    title: "Test mit echten Fällen",
    body: "Ein Skill ist erst fertig, wenn er an der Praxis besteht. Wir testen jeden Skill mit echten, abgeschlossenen Fällen aus Ihrer Kanzlei und vergleichen die Ergebnisse mit dem, was Ihre Experten damals erarbeitet haben. Abweichungen fließen zurück in den Skill, bis die Qualität stimmt.",
  },
  {
    icon: GraduationCap,
    title: "Schulung des Teams",
    body: "Zum Abschluss schulen wir Ihre Mitarbeiter im Umgang mit den neuen Skills: Wie starte ich einen Skill, wie gebe ich den Fall hinein, wie kontrolliere ich das Ergebnis? Das Ziel: Jeder im Team nutzt das Expertenwissen der Kanzlei, nicht nur die Experten selbst.",
  },
];

const faqs = [
  {
    question: "Was kostet die Entwicklung eines Kanzlei-Skills?",
    answer:
      "Das hängt vom Umfang des Skills ab: Ein fokussierter Prüf-Skill mit klaren Kriterien ist deutlich schneller entwickelt als ein Skill, der komplette Gutachten strukturiert. Preistreiber sind die Zahl der Experten-Sessions und der Testaufwand mit echten Fällen. Eine konkrete Einschätzung geben wir nach einem kurzen Gespräch über den gewünschten Skill.",
  },
  {
    question: "Wie lange dauert die Entwicklung?",
    answer:
      "Von der ersten Experten-Session bis zum getesteten, geschulten Skill vergehen typischerweise wenige Wochen. Die Kalenderzeit bestimmt vor allem die Verfügbarkeit Ihrer Experten für Wissens-Extraktion und Testphase, der reine Aufwand auf Kanzleiseite bleibt überschaubar.",
  },
  {
    question: "Ist das mit § 203 StGB vereinbar?",
    answer:
      "Ja, wenn die Umgebung stimmt. Die Skills laufen in Claude Cowork, einer verwalteten Claude-Umgebung mit EU-Hosting, AVV und dediziertem Tenant, in der Kanzleidaten nicht zum Training von KI-Modellen verwendet werden. Für die Testphase arbeiten wir auf Wunsch mit anonymisierten Fällen.",
  },
  {
    question: "Wem gehört der fertige Skill?",
    answer:
      "Ihrer Kanzlei. Der Skill ist eine Markdown-Datei mit Ihrem Fachwissen, die bei Ihnen liegt und die Sie selbst weiterpflegen können. Sie sind nicht an Bluebatch gebunden, um den Skill zu nutzen oder anzupassen.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <div className="text-center max-w-3xl mx-auto">
          <Typo.H1>
            Kanzlei-Skills: Wir kodieren Ihr Fachwissen als KI-Skills
          </Typo.H1>
          <GeoSummary align="center" className="mt-4">
            Bluebatch kodiert das Fachwissen Ihrer Steuerkanzlei als
            wiederverwendbare KI-Skills in Markdown: Wissens-Extraktion mit
            Ihren Experten, Test mit echten Fällen, Schulung des Teams.
            Kanzleien prüfen damit Provisionsansprüche, Arbeitszeugnisse und
            Bauträgerverträge per Skill und erstellen ein 15-seitiges
            Steueranalyse-Gutachten in circa 3 Stunden. Die Skills laufen in
            der DSGVO- und § 203-konformen Claude-Cowork-Umgebung.
          </GeoSummary>
          <ContactButton icon="chat">Skill-Projekt anfragen</ContactButton>
        </div>
      </ContentWrapper>

      {/* Was ist ein Skill */}
      <ContentWrapper colorScheme="gray-light">
        <SimpleGrid cols={2} className="items-center gap-8 md:gap-12">
          <div>
            <Typo.H2 className="mb-4">
              Was ein KI-Skill ist, in einem Absatz
            </Typo.H2>
            <Typo.Paragraph className="text-gray-600 mb-4">
              Ein KI-Skill ist eine Arbeitsanweisung in Markdown, die das
              Vorgehen Ihrer besten Leute für ein KI-Modell nachvollziehbar
              macht: Welche Unterlagen werden geprüft, in welcher Reihenfolge,
              nach welchen Kriterien, und wie sieht das Ergebnis aus? Einmal
              kodiert, führt das Modell die Aufgabe jedes Mal nach demselben
              Standard aus, egal wer in der Kanzlei den Skill startet.
            </Typo.Paragraph>
            <Typo.Paragraph className="text-gray-600 mb-6">
              Die Skills laufen in{" "}
              <InternalLink
                href="/branchen/steuerberater/claude-cowork"
                variant="underline"
              >
                Claude Cowork
              </InternalLink>
              , der verwalteten, DSGVO- und § 203-konformen Claude-Umgebung
              für Kanzleien. Das Fachwissen bleibt dabei in einer Umgebung,
              über die Ihre Kanzlei die Kontrolle behält.
            </Typo.Paragraph>
            <InternalLink href="/contact">
              Unverbindlich besprechen, welcher Skill zuerst lohnt
            </InternalLink>
          </div>
          <div className="relative aspect-video mx-auto w-1/2 md:w-full">
            <Image
              src="/images/document-automation.jpg"
              alt="Fachwissen der Kanzlei als KI-Skill kodieren"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Was Bluebatch liefert */}
      <ContentWrapper colorScheme="white">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Das Angebot</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was Bluebatch bei der Skill-Entwicklung liefert
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Kanzlei-Skills-Entwicklung ist ein klar umrissenes Projekt mit
            vier Bausteinen: vom Wissen im Kopf Ihrer Experten bis zum
            getesteten Skill, den das ganze Team nutzt.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={2} className="mt-12">
          {deliverables.map((d) => {
            const Icon = d.icon;
            return (
              <SimpleCard key={d.title} align="left">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-800">
                  <Icon className="h-6 w-6" />
                </span>
                <Typo.H3>{d.title}</Typo.H3>
                <Typo.Paragraph>{d.body}</Typo.Paragraph>
              </SimpleCard>
            );
          })}
        </SimpleGrid>
      </ContentWrapper>

      {/* Ablauf */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Der Ablauf</IntroBox.PreHeadline>
          <IntroBox.Headline>
            In vier Schritten zum einsatzbereiten Kanzlei-Skill
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Jedes Skill-Projekt folgt demselben erprobten Ablauf. Ihre
            Experten investieren gezielt Zeit in den Schritten, in denen ihr
            Wissen gebraucht wird, den Rest übernehmen wir.
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="mt-12 max-w-3xl mx-auto">
          <TimelineAsSteps>
            <TimelineAsStepsStep value={1}>
              <Typo.H3>Auswahl des Skills</Typo.H3>
              <Typo.Paragraph className="text-gray-600 mt-2">
                Gemeinsam wählen wir die Aufgabe mit dem besten Verhältnis aus
                Häufigkeit, Zeitaufwand und Standardisierbarkeit. Bewährt
                haben sich wiederkehrende Prüfungen wie Provisionsansprüche
                von Versicherungsvermittlern, Arbeitszeugnisse oder
                Bauträgerverträge und AGB.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={2}>
              <Typo.H3>Wissens-Extraktion</Typo.H3>
              <Typo.Paragraph className="text-gray-600 mt-2">
                In moderierten Sessions dokumentieren wir, wie Ihre Experten
                die Aufgabe heute lösen: Prüfschritte, Kriterien, Quellen,
                Formulierungen. Daraus entsteht die erste Fassung des Skills
                in Markdown, die Ihre Experten gegenlesen und korrigieren.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={3}>
              <Typo.H3>Test mit echten Fällen</Typo.H3>
              <Typo.Paragraph className="text-gray-600 mt-2">
                Der Skill läuft gegen abgeschlossene Fälle aus Ihrer Praxis.
                Ihre Experten bewerten die Ergebnisse, wir schärfen den Skill
                nach, bis die Ergebnisse dem Kanzlei-Standard entsprechen.
                Human-in-the-loop bleibt dabei Prinzip: Der Skill bereitet
                vor, die Freigabe bleibt beim Menschen.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={4}>
              <Typo.H3>Rollout und Schulung</Typo.H3>
              <Typo.Paragraph className="text-gray-600 mt-2">
                Wir richten den Skill in Ihrer Claude-Cowork-Umgebung ein und
                schulen das Team an echten Aufgaben. Danach kann jeder
                Mitarbeiter die Prüfung oder den Entwurf starten, auf dem
                Niveau, das bisher Ihren Experten vorbehalten war.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
          </TimelineAsSteps>
        </div>
      </ContentWrapper>

      {/* Für wen */}
      <ContentWrapper colorScheme="white">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Für wen es sich lohnt</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wann sich Kanzlei-Skills für Ihre Kanzlei rechnen
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Kanzlei-Skills lohnen sich immer dann, wenn wertvolles Wissen an
            wenigen Personen hängt und dieselbe Aufgabe regelmäßig
            wiederkehrt.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={3} className="mt-12">
          <SimpleCard align="left">
            <Typo.H3>Wissen hängt an Einzelpersonen</Typo.H3>
            <Typo.Paragraph>
              Bestimmte Prüfungen oder Gutachten kann nur ein Berufsträger
              oder eine erfahrene Fachkraft. Als Skill kodiert steht dieses
              Wissen sofort dem ganzen Team zur Verfügung und geht auch bei
              einem Weggang nicht verloren.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <Typo.H3>Wiederkehrende Prüfungen</Typo.H3>
            <Typo.Paragraph>
              Provisionsansprüche, Arbeitszeugnisse, Vertragswerke: Aufgaben,
              die immer wieder nach demselben Muster ablaufen, sind ideale
              Skill-Kandidaten. Einmal kodiert, läuft jede Prüfung nach
              demselben Standard.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <Typo.H3>Aufwendige Textprodukte</Typo.H3>
            <Typo.Paragraph>
              Wo heute Tage in ein Gutachten fließen, strukturiert ein Skill
              die Arbeit: In der Praxis entsteht ein 15-seitiges
              Steueranalyse-Gutachten per KI-Skill in circa 3 Stunden, das
              der Berufsträger anschließend prüft und verantwortet.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>

        <div className="text-center mt-12">
          <Typo.Paragraph className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Im Erstgespräch identifizieren wir die Aufgabe mit dem größten
            Hebel und schätzen Aufwand und Nutzen für Ihre Kanzlei ein.
          </Typo.Paragraph>
          <ContactButton icon="chat">Erstgespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      {/* FAQ */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer faqs={faqs} />
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
