import type { Metadata } from "next";
import Image from "next/image";
import { BookOpenCheck, FileText, Scale, UserCheck } from "lucide-react";
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
  title: "Gutachten mit KI",
  description:
    "Steuerliche Gutachten und verbindliche Auskünfte mit KI entwerfen: 15 Seiten in circa 3 Stunden, geprüft vom Steuerberater.",
};

export const metadata: Metadata = {
  title: "Steuerliche Gutachten mit KI erstellen - Steuerberater | Bluebatch",
  description:
    "Steuerliche Gutachten und verbindliche Auskünfte mit KI: 15-seitiges Steueranalyse-Gutachten in circa 3 Stunden. Wissensbasis aus Kanzlei-Dokumenten und BFH-Urteilen, geprüft vom Steuerberater.",
  openGraph: {
    title: "Steuerliche Gutachten mit KI erstellen - Bluebatch",
    description:
      "15-seitiges Steueranalyse-Gutachten in circa 3 Stunden: KI-Entwurf auf Basis von System-Prompt, anonymisierten Kanzlei-Dokumenten und BFH-Urteilen, geprüft und verantwortet vom Steuerberater.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
  },
  alternates: {
    canonical: "/branchen/steuerberater/claude-cowork/gutachten-mit-ki",
  },
};

const wissensbasis = [
  {
    icon: FileText,
    title: "System-Prompt mit Kanzlei-Standards",
    body: "Der System-Prompt legt fest, wie ein Gutachten Ihrer Kanzlei aufgebaut ist: Gliederung, Prüfungsreihenfolge, Zitierweise, Tonalität. Er ist einmal sauber formuliert und sorgt dafür, dass jeder Entwurf dem Qualitätsstandard der Kanzlei folgt statt einem generischen KI-Stil.",
  },
  {
    icon: BookOpenCheck,
    title: "Anonymisierte Kanzlei-Dokumente",
    body: "Frühere Gutachten und Stellungnahmen der Kanzlei, sorgfältig anonymisiert, zeigen der KI, wie gute Arbeit in Ihrem Haus aussieht. Die KI übernimmt Argumentationsmuster und Formulierungen, die sich in Ihrer Praxis bewährt haben, ohne dass Mandantendaten in die Wissensbasis gelangen.",
  },
  {
    icon: Scale,
    title: "BFH-Urteile und Rechtsprechung",
    body: "Einschlägige BFH-Urteile und relevante Rechtsprechung liegen der KI als Quellen vor. Der Entwurf argumentiert entlang der tatsächlichen Fundstellen statt aus dem Gedächtnis des Modells, und jede zitierte Entscheidung lässt sich beim Prüfen direkt nachschlagen.",
  },
];

const faqs = [
  {
    question: "Wie lange dauert ein Gutachten mit KI wirklich?",
    answer:
      "Ein 15-seitiges Steueranalyse-Gutachten entsteht mit einem eingerichteten KI-Skill in circa 3 Stunden, inklusive der fachlichen Prüfung durch den Steuerberater. Ohne KI bindet dieselbe Aufgabe erfahrungsgemäß mehrere Arbeitstage eines Berufsträgers. Die Ersparnis kommt vor allem aus dem ersten Entwurf: Recherche strukturieren, Gliederung aufbauen und Rohtext formulieren übernimmt die KI.",
  },
  {
    question: "Woraus besteht die Wissensbasis für KI-Gutachten?",
    answer:
      "Aus drei Bausteinen: einem System-Prompt, der Aufbau und Qualitätsstandards der Kanzlei festlegt, anonymisierten Kanzlei-Dokumenten wie früheren Gutachten und Stellungnahmen sowie einschlägigen BFH-Urteilen. So argumentiert der Entwurf im Stil der Kanzlei und entlang echter Fundstellen.",
  },
  {
    question: "Wer trägt die Verantwortung für das Ergebnis?",
    answer:
      "Der Steuerberater. Die KI liefert einen Entwurf, kein fertiges Gutachten. Jeder Entwurf wird fachlich geprüft: Sachverhalt, Rechtsgrundlagen, zitierte Urteile und Schlussfolgerungen. Erst nach dieser Prüfung wird das Gutachten freigegeben. Gegenüber dem Mandanten verantwortet der Berufsträger das Ergebnis wie bei jedem manuell erstellten Gutachten.",
  },
  {
    question: "Ist das mit § 203 StGB und der DSGVO vereinbar?",
    answer:
      "Ja, wenn die Umgebung stimmt. Claude Cowork läuft in einer verwalteten, § 203-konformen Umgebung, und die Wissensbasis enthält ausschließlich anonymisierte Dokumente. Welche Umgebung für Ihre Kanzlei passt, klären wir vor der Einrichtung, von Claude Cowork bis zu Private AI in eigener Infrastruktur.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <div className="text-center max-w-3xl mx-auto">
          <Typo.H1>Steuerliche Gutachten mit KI erstellen</Typo.H1>
          <GeoSummary align="center" className="mt-4">
            Steuerkanzleien erstellen mit KI steuerliche Gutachten und
            Entwürfe für verbindliche Auskünfte auf fachlichem Niveau: Ein
            15-seitiges Steueranalyse-Gutachten entsteht in circa 3 Stunden
            statt in mehreren Tagen. Als Wissensbasis dienen ein
            System-Prompt, anonymisierte Kanzlei-Dokumente und einschlägige
            BFH-Urteile. Der Steuerberater prüft jeden Entwurf fachlich und
            verantwortet das Ergebnis gegenüber dem Mandanten.
          </GeoSummary>
          <ContactButton icon="chat">Beratung anfragen</ContactButton>
        </div>
      </ContentWrapper>

      {/* Warum Gutachten der stärkste Cowork-Use-Case sind */}
      <ContentWrapper colorScheme="gray-light">
        <SimpleGrid cols={2} className="items-center gap-8 md:gap-12">
          <div>
            <Typo.H2 className="mb-4">
              Tage an Recherche und Formulierung, auf Stunden verdichtet
            </Typo.H2>
            <Typo.Paragraph className="text-gray-600 mb-4">
              Gutachten und verbindliche Auskünfte gehören zu den
              wertvollsten Leistungen einer Kanzlei, und zu den
              aufwendigsten: Rechtsprechung sichten, Sachverhalt
              strukturieren, sauber argumentieren, alles belegen. Genau
              dieser Ablauf lässt sich mit einem KI-Skill drastisch
              beschleunigen: Ein 15-seitiges Steueranalyse-Gutachten
              entsteht in circa 3 Stunden.
            </Typo.Paragraph>
            <Typo.Paragraph className="text-gray-600 mb-6">
              Die fachliche Tiefe kommt dabei nicht aus dem Sprachmodell
              allein, sondern aus der Wissensbasis der Kanzlei. Der Ansatz
              ist Teil von{" "}
              <InternalLink
                href="/branchen/steuerberater/claude-cowork"
                variant="underline"
              >
                Claude Cowork für Steuerberater
              </InternalLink>
              : KI als Werkzeug fürs Team, der Mensch bleibt fachlich am
              Steuer.
            </Typo.Paragraph>
            <InternalLink href="/branchen/steuerberater/claude-cowork">
              Zum Claude-Cowork-Hub für Steuerberater
            </InternalLink>
          </div>
          <div className="relative aspect-video mx-auto w-1/2 md:w-full">
            <Image
              src="/images/tax-consulting-workspace.jpg"
              alt="Steuerberater prüft ein KI-erstelltes Gutachten am Arbeitsplatz"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Ablauf */}
      <ContentWrapper colorScheme="white" bodyWidth="small">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Der Ablauf</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Vom Sachverhalt zum geprüften Gutachten in fünf Schritten
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Der Weg ist immer derselbe, egal ob Steueranalyse-Gutachten oder
            Entwurf für eine verbindliche Auskunft. Die KI übernimmt
            Struktur und Rohtext, der Steuerberater das Urteil.
          </IntroBox.Paragraph>
        </IntroBox>

        <TimelineAsSteps className="mt-12">
          <TimelineAsStepsStep value={1}>
            <Typo.H3>Sachverhalt erfassen</Typo.H3>
            <Typo.Paragraph>
              Der Bearbeiter beschreibt den Fall: Ausgangslage, steuerliche
              Fragestellung, relevante Eckdaten. Das kann stichpunktartig
              geschehen, die KI fragt nach, wenn Angaben fehlen.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={2}>
            <Typo.H3>Wissensbasis anwenden</Typo.H3>
            <Typo.Paragraph>
              Der KI-Skill kombiniert den System-Prompt der Kanzlei mit
              anonymisierten Kanzlei-Dokumenten und einschlägigen
              BFH-Urteilen. Aufbau, Argumentationsstil und Fundstellen
              kommen aus dieser Basis, nicht aus dem freien Modellwissen.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={3}>
            <Typo.H3>Entwurf generieren</Typo.H3>
            <Typo.Paragraph>
              Die KI erstellt den vollständigen Gutachten-Entwurf:
              Sachverhaltsdarstellung, rechtliche Würdigung entlang der
              Rechtsprechung, Ergebnis und Empfehlung, in der Gliederung der
              Kanzlei.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={4}>
            <Typo.H3>Fachliche Prüfung durch den Steuerberater</Typo.H3>
            <Typo.Paragraph>
              Der Berufsträger prüft Sachverhalt, Rechtsgrundlagen, jede
              zitierte Entscheidung und die Schlussfolgerungen. Was nicht
              trägt, wird korrigiert oder neu angefordert. Dieser Schritt
              ist nicht optional, er ist der Kern des Modells.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={5}>
            <Typo.H3>Finalisieren und verantworten</Typo.H3>
            <Typo.Paragraph>
              Nach der Prüfung wird das Gutachten finalisiert und geht an
              den Mandanten, mit der Unterschrift und in der Verantwortung
              des Steuerberaters, wie jedes andere Gutachten der Kanzlei
              auch.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
        </TimelineAsSteps>
      </ContentWrapper>

      {/* Wissensbasis */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Die Wissensbasis</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Drei Bausteine machen aus einem Sprachmodell einen Fach-Skill
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Ein generisches KI-Tool schreibt generische Texte. Fachliches
            Niveau entsteht erst, wenn das Modell mit dem Wissen der
            Kanzlei arbeitet. Drei Bausteine gehören dazu.
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

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-800">
            <UserCheck className="h-6 w-6" />
          </span>
          <Typo.H3>Der Steuerberater bleibt verantwortlich</Typo.H3>
          <Typo.Paragraph className="text-gray-600">
            Die KI erstellt Entwürfe, keine Beratung. Freigegeben wird nur,
            was der Berufsträger geprüft hat. Damit Mandantendaten dabei
            geschützt bleiben, gehört die Frage nach der richtigen Umgebung
            an den Anfang jedes Projekts, von der verwalteten
            Cowork-Umgebung bis zu{" "}
            <InternalLink
              href="/branchen/steuerberater/private-ai"
              variant="underline"
            >
              Private AI in eigener Infrastruktur
            </InternalLink>
            .
          </Typo.Paragraph>
        </div>
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
