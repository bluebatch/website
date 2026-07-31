import type { Metadata } from "next";
import { ogImages } from "@/lib/og";
import Image from "next/image";
import { Clock, TrendingDown, BookOpen, Bot } from "lucide-react";
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
  title: "Prozessdoku mit KI - Kanzlei-Prozesse per Screen-Recording | Bluebatch",
  description:
    "Prozessdokumentation mit KI für Steuerkanzleien: Screen-Recording aufnehmen, KI transkribiert und schreibt den Handbuch-Artikel. Dokumentation ohne Extra-Zeit.",
  openGraph: {
    title: "Prozessdoku mit KI für Kanzleien - Bluebatch",
    description:
      "Prozessdokumentation mit KI für Steuerkanzleien: Screen-Recording aufnehmen, KI transkribiert und schreibt den Handbuch-Artikel. Dokumentation ohne Extra-Zeit.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages("Prozessdoku mit KI für Kanzleien", "Steuerberater"),
  },
  alternates: {
    canonical:
      "/branchen/steuerberater/kanzlei-organisation/prozessdoku-mit-ki",
  },
};

const vorteile = [
  {
    icon: Clock,
    title: "Keine Extra-Zeit nötig",
    body: "Die Aufnahme läuft während der normalen Arbeit mit: Der Mitarbeiter erledigt den Prozess wie immer und erklärt dabei laut, was er tut. Es gibt keinen Dokumentations-Nachmittag, der ohnehin nie stattfindet.",
  },
  {
    icon: TrendingDown,
    title: "Fehlerquote sinkt",
    body: "Standardisierte, dokumentierte Prozesse sind der wirksamste Hebel gegen Fehler: Alle arbeiten nach demselben Soll-Ablauf, Abweichungen fallen auf, und bei Vertretungen muss niemand improvisieren.",
  },
  {
    icon: BookOpen,
    title: "Wissen bleibt in der Kanzlei",
    body: "Jede Aufnahme macht Kopfwissen zu Kanzleiwissen. Kündigungen, Elternzeit oder Krankheit reißen keine Lücke mehr, weil der Ablauf als Artikel im Handbuch steht, inklusive der kleinen Kniffe, die sonst verloren gehen.",
  },
  {
    icon: Bot,
    title: "Basis für Automatisierung",
    body: "Ein sauber dokumentierter Prozess ist die halbe Automatisierung: Aus dem Artikel lässt sich direkt ablesen, welche Schritte ein Workflow oder ein KI-Agent übernehmen kann und wo die menschliche Freigabe sitzt.",
  },
];

const faqs = [
  {
    question: "Wie funktioniert Prozessdokumentation mit KI?",
    answer:
      "Der Mitarbeiter startet ein Screen-Recording, führt den Prozess einmal normal durch und kommentiert dabei laut, was er tut und warum. Eine KI transkribiert die Aufnahme und formt daraus einen strukturierten Artikel mit Schritten, Hinweisen und Ausnahmen. Der Mitarbeiter liest kurz gegen, dann wandert der Artikel ins Kanzleihandbuch.",
  },
  {
    question: "Wie viel Zeit kostet das pro Prozess?",
    answer:
      "Im Kern nur die Zeit, die der Prozess ohnehin dauert, plus wenige Minuten fürs Gegenlesen des KI-Artikels. Genau das ist der Unterschied zur klassischen Prozessdokumentation, bei der jemand nach Feierabend Anleitungen schreiben müsste.",
  },
  {
    question: "Was ist mit Mandantendaten in den Aufnahmen?",
    answer:
      "Die Verarbeitung muss zur Schweigepflicht der Kanzlei passen. Deshalb gehört zur Einrichtung ein sauberes Setup: eine DSGVO-konforme Umgebung für Transkription und Texterstellung, klare Regeln, was aufgenommen wird, und bei Bedarf Testdaten statt echter Mandanten. Wie das konkret aussieht, klären wir mit Ihrer Kanzlei vorab.",
  },
  {
    question: "Womit sollte eine Kanzlei anfangen?",
    answer:
      "Mit den Prozessen, die oft laufen und häufig Rückfragen oder Fehler erzeugen, typischerweise Posteingang, Belegwege und wiederkehrende DATEV-Abläufe. Welche das in Ihrer Kanzlei sind, zeigt die Ist-Aufnahme im Kanzlei-Digitalisierungs-Workshop.",
  },
];

export default function Page() {
  return (
    <>
      {/* Hero */}
      <ContentWrapper isFirstSection>
        <div className="text-center max-w-3xl mx-auto">
          <Typo.H1>
            Prozessdoku mit KI: aufnehmen statt aufschreiben
          </Typo.H1>
          <GeoSummary align="center" className="mt-4">
            Prozessdokumentation mit KI funktioniert so: Kanzlei-Mitarbeiter
            nehmen ihre Arbeit per Screen-Recording auf, eine KI transkribiert
            die Aufnahme und erstellt daraus automatisch einen fertigen
            Handbuch-Artikel. Die Dokumentation entsteht ohne Extra-Zeit
            nebenbei im Tagesgeschäft. Standardisierte, dokumentierte Prozesse
            senken die Fehlerquote und machen Vertretungen und Einarbeitung
            deutlich einfacher.
          </GeoSummary>
          <ContactButton icon="chat">Beratung anfragen</ContactButton>
        </div>
      </ContentWrapper>

      {/* Problem */}
      <ContentWrapper colorScheme="gray-light">
        <SimpleGrid cols={2} className="items-center gap-8 md:gap-12">
          <div>
            <Typo.H2 className="mb-4">
              Warum klassische Prozessdokumentation nie passiert
            </Typo.H2>
            <Typo.Paragraph className="text-gray-600 mb-4">
              Jede Kanzlei weiß, dass sie ihre Prozesse dokumentieren sollte.
              Trotzdem existiert die Doku fast nirgends, aus einem einfachen
              Grund: Anleitungen schreiben ist Zusatzarbeit, und Zusatzarbeit
              verliert im Tagesgeschäft immer. Wer zwischen Fristen und
              Abschlüssen wählen muss, schreibt keine Wiki-Artikel.
            </Typo.Paragraph>
            <Typo.Paragraph className="text-gray-600 mb-6">
              Die Lösung ist, das Schreiben abzuschaffen: Der Mitarbeiter macht
              seine Arbeit einmal mit laufendem Screen-Recording und erklärt
              dabei laut, was er tut. Den Rest übernimmt die KI. So füllt sich
              das{" "}
              <InternalLink
                href="/branchen/steuerberater/kanzlei-organisation/kanzleihandbuch-aufbauen"
                variant="underline"
              >
                Kanzleihandbuch
              </InternalLink>{" "}
              Prozess für Prozess, ohne dass jemand dafür Zeit blocken muss.
            </Typo.Paragraph>
          </div>
          <div className="relative aspect-video mx-auto w-1/2 md:w-full">
            <Image
              src="/images/digital-workflow.jpg"
              alt="Screen-Recording eines Kanzleiprozesses"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Ablauf */}
      <ContentWrapper colorScheme="white">
        <IntroBox size="small">
          <IntroBox.PreHeadline>So funktioniert es</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Vom Screen-Recording zum fertigen Handbuch-Artikel
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Vier Schritte, von denen nur der erste und der letzte menschliche
            Aufmerksamkeit brauchen. Dazwischen arbeitet die KI.
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="mt-12 max-w-3xl mx-auto">
          <TimelineAsSteps>
            <TimelineAsStepsStep value={1}>
              <Typo.H3>Prozess einmal mit Aufnahme durchführen</Typo.H3>
              <Typo.Paragraph>
                Der Mitarbeiter startet das Screen-Recording und erledigt den
                Prozess wie an jedem anderen Tag, etwa eine
                Umsatzsteuer-Voranmeldung oder die Belegablage für einen
                Mandanten. Dabei spricht er laut mit: was er klickt, worauf er
                achtet, welche Ausnahmen es gibt.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={2}>
              <Typo.H3>KI transkribiert die Aufnahme</Typo.H3>
              <Typo.Paragraph>
                Die KI wandelt die Tonspur in Text um und ordnet die
                Erklärungen den sichtbaren Arbeitsschritten zu. Aus einer
                halben Stunde Aufnahme wird eine strukturierte Rohfassung des
                Ablaufs.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={3}>
              <Typo.H3>KI schreibt den Artikel</Typo.H3>
              <Typo.Paragraph>
                Aus Transkript und Ablauf erstellt die KI einen fertigen
                Handbuch-Artikel: nummerierte Schritte, Hinweise, Ausnahmen,
                einheitlich formatiert im Stil des Kanzleihandbuchs. Kein
                Mitarbeiter formuliert selbst.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={4}>
              <Typo.H3>Gegenlesen und veröffentlichen</Typo.H3>
              <Typo.Paragraph>
                Der Mitarbeiter prüft den Entwurf in wenigen Minuten,
                korrigiert Details und veröffentlicht den Artikel im Wiki. Ab
                jetzt gibt es einen dokumentierten Soll-Prozess, nach dem alle
                arbeiten.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
          </TimelineAsSteps>
        </div>
      </ContentWrapper>

      {/* Vorteile */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Der Effekt</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was dokumentierte Prozesse der Kanzlei bringen
          </IntroBox.Headline>
        </IntroBox>

        <SimpleGrid cols={2} className="mt-12">
          {vorteile.map((item) => {
            const Icon = item.icon;
            return (
              <SimpleCard key={item.title} align="left">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-800">
                  <Icon className="h-6 w-6" />
                </span>
                <Typo.H3>{item.title}</Typo.H3>
                <Typo.Paragraph>{item.body}</Typo.Paragraph>
              </SimpleCard>
            );
          })}
        </SimpleGrid>

        <div className="mt-12 text-center max-w-2xl mx-auto">
          <Typo.Paragraph className="text-gray-600 mb-6">
            Welche Prozesse Ihre Kanzlei zuerst dokumentieren sollte, klären
            wir im{" "}
            <InternalLink
              href="/branchen/steuerberater/kanzlei-organisation/kanzlei-digitalisierungs-workshop"
              variant="underline"
            >
              Kanzlei-Digitalisierungs-Workshop
            </InternalLink>
            . Die Prozessdoku ist Teil der{" "}
            <InternalLink
              href="/branchen/steuerberater/kanzlei-organisation"
              variant="underline"
            >
              Kanzlei-Organisation
            </InternalLink>
            , dem Fundament jeder Automatisierung.
          </Typo.Paragraph>
          <ContactButton icon="chat">Erstgespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      {/* FAQ */}
      <ContentWrapper bodyWidth="small">
        <FaqContainer faqs={faqs}>
          <FaqContainer.Headline>
            Häufige Fragen zur Prozessdoku mit KI
          </FaqContainer.Headline>
        </FaqContainer>
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
