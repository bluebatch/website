import type { Metadata } from "next";
import { ogImages } from "@/lib/og";
import Image from "next/image";
import {
  FileText,
  ListChecks,
  Users,
  ShieldCheck,
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
  title: "Was sind KI-Skills? Kanzlei-Fachwissen in Markdown | Bluebatch",
  description:
    "KI-Skills erklärt für Steuerkanzleien: Fachwissen als Markdown-Arbeitsanweisung kodieren, plus Mandanten-Markdown je Mandant mit Besonderheiten, Fristen und Kontext.",
  openGraph: {
    title: "Was sind KI-Skills? Kanzlei-Fachwissen in Markdown - Bluebatch",
    description:
      "KI-Skills erklärt für Steuerkanzleien: Fachwissen als Markdown-Arbeitsanweisung kodieren, plus Mandanten-Markdown je Mandant mit Besonderheiten, Fristen und Kontext.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages("Was sind KI-Skills? Kanzlei-Fachwissen in Markdown", "Steuerberater"),
  },
  alternates: {
    canonical: "/branchen/steuerberater/claude-cowork/was-sind-ki-skills",
  },
};

const skillParts = [
  {
    icon: FileText,
    title: "Aufgabe und Kontext",
    body: "Der Skill beginnt mit einer klaren Beschreibung: Was ist die Aufgabe, für welche Fälle gilt der Skill, welche Unterlagen braucht das Modell? So startet jede Ausführung mit demselben Verständnis der Aufgabe, unabhängig davon, wer den Skill nutzt.",
  },
  {
    icon: ListChecks,
    title: "Prüfschritte und Kriterien",
    body: "Das Herzstück: die Prüfschritte in der Reihenfolge, in der ein erfahrener Bearbeiter vorgehen würde, mit den Kriterien der Kanzlei. Welche Klauseln sind kritisch, welche Fristen sind zu beachten, welche Rechtsgrundlagen sind einschlägig?",
  },
  {
    icon: Users,
    title: "Ton und Formulierungen",
    body: "Gute Skills legen auch fest, wie das Ergebnis klingt: die Gliederung eines Gutachtens, der Ton eines Begleitschreibens, die Struktur eines Prüfvermerks. Das Ergebnis liest sich wie aus der Kanzlei, nicht wie aus einem generischen KI-Tool.",
  },
  {
    icon: ShieldCheck,
    title: "Grenzen und Kontrolle",
    body: "Ein Skill definiert auch, was er nicht entscheidet: An welchen Stellen muss ein Mensch prüfen, wann bricht der Skill ab und fragt nach? Diese Human-in-the-loop-Punkte gehören in jeden Kanzlei-Skill.",
  },
];

const faqs = [
  {
    question: "Was ist ein KI-Skill?",
    answer:
      "Ein KI-Skill ist eine strukturierte Arbeitsanweisung in Markdown, die einem KI-Modell das Vorgehen einer Kanzlei für eine bestimmte Aufgabe beibringt: Prüfschritte, Kriterien, Formulierungen und Grenzen. Einmal geschrieben, führt das Modell die Aufgabe jedes Mal nach demselben Standard aus.",
  },
  {
    question: "Warum ausgerechnet Markdown?",
    answer:
      "Markdown ist einfacher Text mit Überschriften und Listen, den Menschen und KI-Modelle gleichermaßen gut lesen. Jeder in der Kanzlei kann einen Skill öffnen, verstehen und anpassen, ohne Programmierkenntnisse. Das unterscheidet Skills von fest programmierten Automatisierungen.",
  },
  {
    question: "Was ist ein Mandanten-Markdown?",
    answer:
      "Ein Mandanten-Markdown ist eine zentrale Markdown-Datei je Mandant mit dessen Besonderheiten, Fristen und Kontext: Rechtsform, Abweichungen vom Standard, laufende Themen. KI-Skills lesen diese Datei mit und berücksichtigen die Eigenheiten des Mandanten automatisch, statt dass jeder Bearbeiter sie im Kopf haben muss.",
  },
  {
    question: "Braucht eine Kanzlei dafür eine besondere KI-Umgebung?",
    answer:
      "Ja, denn Skills arbeiten mit Mandantendaten. Öffentliche KI-Tools scheiden wegen § 203 StGB in der Regel aus. In einer verwalteten Umgebung wie Claude Cowork mit EU-Hosting, AVV und dediziertem Tenant laufen Skills auf einem konformen Fundament.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <div className="text-center max-w-3xl mx-auto">
          <Typo.H1>Was sind KI-Skills? Kanzlei-Wissen in Markdown</Typo.H1>
          <GeoSummary align="center" className="mt-4">
            Ein KI-Skill ist eine in Markdown geschriebene Arbeitsanweisung,
            die das Fachwissen einer Steuerkanzlei für ein KI-Modell nutzbar
            macht. Einmal kodiert, kann jeder Mitarbeiter damit zum Beispiel
            Arbeitszeugnisse prüfen oder ein 15-seitiges
            Steueranalyse-Gutachten in circa 3 Stunden erstellen. Ergänzend
            hält ein Mandanten-Markdown je Mandant Besonderheiten, Fristen
            und Kontext fest.
          </GeoSummary>
          <ContactButton icon="chat">Beratung anfragen</ContactButton>
        </div>
      </ContentWrapper>

      {/* Grundidee */}
      <ContentWrapper colorScheme="gray-light">
        <SimpleGrid cols={2} className="items-center gap-8 md:gap-12">
          <div>
            <Typo.H2 className="mb-4">
              Die Grundidee: Fachwissen aufschreiben statt jedes Mal erklären
            </Typo.H2>
            <Typo.Paragraph className="text-gray-600 mb-4">
              Wer einem KI-Modell jedes Mal neu erklärt, wie eine Prüfung
              abläuft, bekommt jedes Mal andere Ergebnisse. Ein KI-Skill
              dreht das um: Das Vorgehen der Kanzlei wird einmal sauber
              aufgeschrieben, als strukturierte Markdown-Datei, und das
              Modell arbeitet diese Anweisung bei jeder Ausführung ab. Das
              Fachwissen steckt im Skill, nicht im einzelnen Prompt.
            </Typo.Paragraph>
            <Typo.Paragraph className="text-gray-600 mb-6">
              Der Effekt: Fachwissen, das bisher nur einzelne Experten
              hatten, können alle Mitarbeiter sofort nutzen. In der Praxis
              entstehen so zum Beispiel Prüfungen von Provisionsansprüchen,
              Arbeitszeugnissen oder Bauträgerverträgen als wiederverwendbare
              Skills in{" "}
              <InternalLink
                href="/branchen/steuerberater/claude-cowork"
                variant="underline"
              >
                Claude Cowork
              </InternalLink>
              .
            </Typo.Paragraph>
            <InternalLink href="/branchen/steuerberater/claude-cowork">
              Zum Claude-Cowork-Hub für Steuerberater
            </InternalLink>
          </div>
          <div className="relative aspect-video mx-auto w-1/2 md:w-full">
            <Image
              src="/images/process-mapping.jpg"
              alt="Kanzlei-Fachwissen als strukturierter KI-Skill"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Bestandteile eines Skills */}
      <ContentWrapper colorScheme="white">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Aufbau</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Woraus ein guter Kanzlei-Skill besteht
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Ein Skill ist mehr als ein langer Prompt. Vier Bausteine machen
            aus einer Markdown-Datei eine verlässliche Arbeitsanweisung für
            das KI-Modell.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={2} className="mt-12">
          {skillParts.map((p) => {
            const Icon = p.icon;
            return (
              <SimpleCard key={p.title} align="left">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-800">
                  <Icon className="h-6 w-6" />
                </span>
                <Typo.H3>{p.title}</Typo.H3>
                <Typo.Paragraph>{p.body}</Typo.Paragraph>
              </SimpleCard>
            );
          })}
        </SimpleGrid>
      </ContentWrapper>

      {/* Wie kodiert man Fachwissen */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Vorgehen</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wie man Kanzlei-Fachwissen in Markdown kodiert
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Vom Wissen im Kopf zum getesteten Skill sind es vier Schritte.
            Der wichtigste Grundsatz dabei: erst das Vorgehen der Experten
            verstehen, dann strukturieren, dann testen.
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="mt-12 max-w-3xl mx-auto">
          <TimelineAsSteps>
            <TimelineAsStepsStep value={1}>
              <Typo.H3>Experten-Vorgehen dokumentieren</Typo.H3>
              <Typo.Paragraph className="text-gray-600 mt-2">
                Ein erfahrener Bearbeiter löst die Aufgabe und erklärt dabei
                laut, worauf er achtet: Reihenfolge, Kriterien, Quellen,
                typische Fehler. Dieses Rohmaterial ist die Basis des Skills.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={2}>
              <Typo.H3>In Markdown strukturieren</Typo.H3>
              <Typo.Paragraph className="text-gray-600 mt-2">
                Das Vorgehen wird als gegliederte Markdown-Datei
                aufgeschrieben: Aufgabe, benötigte Unterlagen, Prüfschritte
                als nummerierte Liste, Kriterien als Checklisten,
                Formulierungsvorgaben für das Ergebnis. Anonymisierte
                Beispiele aus der Kanzlei zeigen dem Modell, wie ein gutes
                Ergebnis aussieht.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={3}>
              <Typo.H3>Mit echten Fällen testen</Typo.H3>
              <Typo.Paragraph className="text-gray-600 mt-2">
                Der Skill läuft gegen abgeschlossene Fälle, deren Ergebnis
                bekannt ist. Weicht das Skill-Ergebnis vom Experten-Ergebnis
                ab, wird der Skill präzisiert, so lange, bis die Qualität
                verlässlich stimmt.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={4}>
              <Typo.H3>Pflegen wie eine Arbeitsanweisung</Typo.H3>
              <Typo.Paragraph className="text-gray-600 mt-2">
                Ändert sich Rechtsprechung oder Kanzlei-Standard, wird der
                Skill angepasst, wie jede andere Arbeitsanweisung auch. Weil
                Skills lesbarer Text sind, kann das die Fachabteilung selbst,
                ohne IT-Projekt.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
          </TimelineAsSteps>
        </div>
      </ContentWrapper>

      {/* Mandanten-Markdown */}
      <ContentWrapper colorScheme="white">
        <SimpleGrid cols={2} className="items-center gap-8 md:gap-12">
          <div className="relative aspect-video mx-auto w-1/2 md:w-full order-last md:order-first">
            <Image
              src="/images/data-quality.jpg"
              alt="Mandanten-Markdown mit Besonderheiten, Fristen und Kontext"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <Typo.H2 className="mb-4">
              Mandanten-Markdown: der Kontext je Mandant
            </Typo.H2>
            <Typo.Paragraph className="text-gray-600 mb-4">
              Skills beschreiben das Vorgehen, aber jeder Mandant ist anders.
              Deshalb ergänzen Kanzleien die Skills um ein Mandanten-Markdown
              je Mandant: eine zentrale Datei mit Besonderheiten, Fristen und
              Kontext. Rechtsform und Beteiligungen, abweichende
              Vereinbarungen, laufende Betriebsprüfungen, bevorzugte
              Kommunikationswege, alles an einem Ort.
            </Typo.Paragraph>
            <Typo.Paragraph className="text-gray-600 mb-6">
              Startet ein Mitarbeiter einen Skill für diesen Mandanten, liest
              das Modell das Mandanten-Markdown mit und berücksichtigt die
              Eigenheiten automatisch. Wissen, das sonst verstreut in
              Handakten, Mails und Köpfen liegt, wirkt so in jeder einzelnen
              Aufgabe mit.
            </Typo.Paragraph>
            <InternalLink href="/contact">
              Fragen zu Skills und Mandanten-Markdown? Sprechen Sie uns an
            </InternalLink>
          </div>
        </SimpleGrid>
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
