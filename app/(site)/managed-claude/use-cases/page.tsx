import type { Metadata } from "next";
import { Gauge, Hourglass, ScrollText, ShieldCheck, UserCheck, Workflow } from "lucide-react";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, ProseColumns, TimelineAsSteps, TimelineAsStepsStep, FaqContainer } from "@/components/ui";
import {
  OfferCard,
  ComparisonCard,
  BeforeCard,
  AfterCard,
  ComparisonHeadline,
  ComparisonList,
  ComparisonListItem,
} from "@/components/cards";
import { ContactButton } from "@/components/buttons";
import { ProblemFirstHero } from "@/components/heroes";
import IconTitle from "../icon-title";
import { AgentenKacheln, PosteingangVorschau } from "./agenten-kacheln";

const description =
  "Claude Agent statt Handarbeit: Mail-Agent, Belegvorerfassung und Bescheidprüfung auf dem Private Claude AI Gateway, mit Budget je Agent und Freigabe durch Sie.";

export const metadata: Metadata = {
  title: "Claude Agent: KI-Agenten für Kanzlei und Unternehmen | Bluebatch",
  description,
  openGraph: {
    title: "Claude Agent: KI-Agenten für Kanzlei und Unternehmen",
    description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Claude%20Agent%3A%20KI-Agenten%20f%C3%BCr%20Kanzlei%20und%20Unternehmen&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Claude Agent: KI-Agenten für Kanzlei und Unternehmen",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/use-cases",
  },
};

export default function Page() {
  return (
    <>
      <ProblemFirstHero>
        <ProblemFirstHero.PainLabel>Alltag in Kanzlei und Büro</ProblemFirstHero.PainLabel>
        <ProblemFirstHero.PainHeadline>
          Jeden Morgen zwei Stunden Posteingang. Kann das nicht ein Claude Agent machen?
        </ProblemFirstHero.PainHeadline>
        <ProblemFirstHero.PainDescription>
          Mails sortieren, Belege abtippen, Bescheide gegen die Erklärung halten: Das läuft in vielen Kanzleien noch von Hand, jeden Tag, bei den Leuten, die eigentlich beraten sollen.
        </ProblemFirstHero.PainDescription>
        <ProblemFirstHero.PainImage
          src="/images/belegpruefung/problem-beleg-chaos.png"
          alt="Mitarbeiterin am Schreibtisch vor Stapeln unsortierter Belege und Post"
        />
        <ProblemFirstHero.SolutionLabel>Schritt 3 · Agenten</ProblemFirstHero.SolutionLabel>
        <ProblemFirstHero.SolutionHeadline>
          Claude-Agenten auf dem Gateway: vorsortiert, vorbereitet, zur Freigabe
        </ProblemFirstHero.SolutionHeadline>
        <ProblemFirstHero.SolutionDescription>
          Ein Claude Agent arbeitet von selbst: Die Aufgabe löst sich aus, etwa durch eine neue Mail, läuft durch, und ein Mensch entscheidet nur noch die Zweifelsfälle. Agenten laufen auf demselben Private Claude AI Gateway wie der Chat, mit denselben Rechten, demselben Protokoll und eigenem Budget. Der erste Agent ist fast immer der Mail-Agent.
        </ProblemFirstHero.SolutionDescription>
        <ProblemFirstHero.SolutionCta>
          <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
        </ProblemFirstHero.SolutionCta>
      </ProblemFirstHero>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Der erste Claude Agent ist fast immer der Mail-Agent</IntroBox.Headline>
        </IntroBox>
        <ComparisonCard className="mx-auto max-w-5xl">
          <BeforeCard className="rounded-2xl">
            <ComparisonHeadline>Heute</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>Jede Mail von Hand sichten und zuordnen</ComparisonListItem>
              <ComparisonListItem>Jede Standardanfrage neu tippen</ComparisonListItem>
              <ComparisonListItem>Nachhaken, wer was noch nicht geschickt hat</ComparisonListItem>
              <ComparisonListItem>An Fristen muss jemand denken</ComparisonListItem>
            </ComparisonList>
          </BeforeCard>
          <AfterCard className="rounded-2xl">
            <ComparisonHeadline>Mit dem Mail-Agenten</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>Vorsortiert nach Mandant und Vorgang, bevor jemand das Postfach öffnet</ComparisonListItem>
              <ComparisonListItem>Entwurf liegt vorbereitet da, mit Bezug zum Vorgang</ComparisonListItem>
              <ComparisonListItem>Fehlende Unterlagen erkannt, Erinnerung vorbereitet</ComparisonListItem>
              <ComparisonListItem>Auffälligkeiten werden gemeldet, nicht gesucht</ComparisonListItem>
            </ComparisonList>
          </AfterCard>
        </ComparisonCard>
      </ContentWrapper>

      <ContentWrapper>
        <SimpleGrid cols={2} className="items-center gap-12">
          <div>
            <IntroBox textCentered={false} size="wide">
              <IntroBox.PreHeadline>Mail-Agent</IntroBox.PreHeadline>
              <IntroBox.Headline className="lg:text-4xl!">So arbeitet der Mail-Agent</IntroBox.Headline>
            </IntroBox>
            <TimelineAsSteps>
              <TimelineAsStepsStep value={1}>
                <Typo.H3 className="mt-2!">Auslöser</Typo.H3>
                <Typo.Paragraph className="text-gray-600">Eine neue Mail trifft ein.</Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={2}>
                <Typo.H3 className="mt-2!">Zuordnen</Typo.H3>
                <Typo.Paragraph className="text-gray-600">Der Agent erkennt Mandant und Vorgang.</Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={3}>
                <Typo.H3 className="mt-2!">Entwerfen</Typo.H3>
                <Typo.Paragraph className="text-gray-600">Er schreibt die Antwort nach Ihrer Vorlage.</Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={4} isLast>
                <Typo.H3 className="mt-2!">Ergebnis</Typo.H3>
                <Typo.Paragraph className="text-gray-600">Der Entwurf liegt im Postfach, zur Freigabe.</Typo.Paragraph>
              </TimelineAsStepsStep>
            </TimelineAsSteps>
          </div>
          <PosteingangVorschau />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>KI-Agenten für Unternehmen: was Kanzleien zubuchen</IntroBox.Headline>
          <IntroBox.Paragraph>
            Jeder Agent liefert ein Ergebnis, das ein Mensch prüft. So sieht es aus, wenn Ihr Team morgens draufschaut.
          </IntroBox.Paragraph>
        </IntroBox>
        <AgentenKacheln />
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Claude Agent erstellen: so wird das gebaut</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title={<IconTitle icon={Workflow}>Auf n8n</IconTitle>}>
            Der Ablauf ist ein sichtbares Diagramm, kein Code. Sie lesen mit, was gebaut wurde.
          </ProseColumns.Item>
          <ProseColumns.Item title={<IconTitle icon={ShieldCheck}>In derselben Umgebung</IconTitle>}>
            Betrieb neben dem Gateway: keine zweite Datenschutzprüfung, keine zweite Vertragskette.
          </ProseColumns.Item>
          <ProseColumns.Item title={<IconTitle icon={UserCheck}>Der Mensch bleibt im Ablauf</IconTitle>}>
            Ein Agent bereitet vor und schlägt vor. Freigegeben und gezeichnet wird von einem Mitarbeiter, bei allem, was das Haus verlässt.
          </ProseColumns.Item>
          <ProseColumns.Item title={<IconTitle icon={Gauge}>Eigenes Budget</IconTitle>}>
            Jeder Agent ist am Gateway ein eigener Verbraucher mit eigenem Deckel und kann nie mehr verbrauchen, als Sie ihm geben.
          </ProseColumns.Item>
          <ProseColumns.Item title={<IconTitle icon={ScrollText}>Vollständiges Protokoll</IconTitle>}>
            Jeder Schritt eines Agenten ist nachvollziehbar: wer, wann, auf welcher Grundlage.
          </ProseColumns.Item>
          <ProseColumns.Item title={<IconTitle icon={Hourglass}>Wann Schritt 3 dran ist</IconTitle>}>
            Wenn Sie aus dem Alltag wissen, welcher Vorgang oft genug vorkommt, um sich zu lohnen. Vorher auf dem Papier zu raten ist teurer.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Use Cases nach Branche</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-6">
          <OfferCard
            href="/branchen/steuerberater"
            title="Steuerberater"
            description="Mail-Agent, Belegprüfung, Gutachten und DATEV mit Claude."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/branchen/anwaelte"
            title="Anwälte"
            description="Posteingang, Fristen und Schriftsatz-Entwürfe mit Claude."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/branchen/grosshandel"
            title="Großhandel"
            description="Angebote, Auftragserfassung und Chatbots auf ERP-Daten."
            linkLabel="Mehr erfahren"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Entscheidungshilfen</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-6">
          <OfferCard
            href="/managed-claude/use-cases/ki-agent-kaufen"
            title="KI-Agent kaufen"
            description="Drei Wege zum eigenen KI-Agenten mit Preis und Dauer im Vergleich."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/use-cases/ki-agent-kostenlos"
            title="KI-Agent kostenlos"
            description="Wie weit Sie ohne Budget kommen und was danach anfällt."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/use-cases/ki-chatbot-fuer-unternehmen"
            title="KI-Chatbot für Unternehmen"
            description="Die drei Bauarten, was sie kosten und welche reicht."
            linkLabel="Mehr erfahren"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer
          headline="Fragen zu Claude-Agenten"
          intro="Was vor dem ersten Agenten gefragt wird."
          faqs={[
            {
              question: "Was ist ein Claude Agent?",
              answer: "Ein Claude Agent ist ein Ablauf, in dem Claude eine Aufgabe von selbst erledigt: Er wird durch ein Ereignis ausgelöst, etwa eine neue Mail oder einen neuen Beleg, nutzt die Systeme, die Sie freigeben, und legt das Ergebnis zur Freigabe ab. Im Chat fragt ein Mensch, ein Agent arbeitet ohne Anstoß.",
            },
            {
              question: "Welche KI-Agenten für Unternehmen lohnen sich zuerst?",
              answer: "Die, deren Vorgang oft genug vorkommt. In Kanzleien ist das fast immer der Mail-Agent, danach Belegvorerfassung, Mandanten-Onboarding, wiederkehrende Auswertungen und Bescheidprüfung. Welcher bei Ihnen vorne liegt, zeigen die ersten Wochen mit dem Chat.",
            },
            {
              question: "Können wir einen Claude Agent selbst erstellen?",
              answer: "Ja. Über die Claude API des Gateways bauen Ihre Entwickler eigene Agenten, mit eigenem API-Key und eigenem Budget je Anwendung. Wer nicht selbst bauen will, lässt uns bauen: Wir setzen Agenten auf n8n um, als sichtbares Diagramm, das Ihr Team mitlesen kann.",
            },
            {
              question: "Was kostet ein KI-Agent mit Claude?",
              answer: "Den Aufbau rechnen wir nach Aufwand ab, mit Schätzung vorab. Im Betrieb zahlen Sie die Tokens laut Preisliste, gedeckelt durch das Budget des Agenten. Zur Einordnung: Eine Mail mit Claude Sonnet 5.5 zusammenzufassen kostet knapp 1 Cent.",
            },
            {
              question: "Entscheidet ein Claude AI Agent selbst?",
              answer: "Nicht bei allem, was das Haus verlässt. Ein Agent bereitet vor und schlägt vor, freigegeben und gezeichnet wird von einem Mitarbeiter. Jeder Schritt steht im Protokoll: wer, wann, auf welcher Grundlage.",
            },
            {
              question: "Wo laufen die Daten, wenn ein KI-Agent mit Claude arbeitet?",
              answer: "Auf derselben Infrastruktur wie der Chat: Claude über AWS Bedrock in der EU, über das Private Claude AI Gateway in Frankfurt. Keine zweite Datenschutzprüfung, keine zweite Vertragskette.",
            },
          ]}
        />
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Welcher Agent lohnt sich bei Ihnen?</IntroBox.Headline>
          <IntroBox.Paragraph>
            Im Scoping-Gespräch klären wir in 30 Minuten Stand der IT, Anmeldung, wer Zugriff bekommt und welche Systeme später relevant sind. Drei Tage danach haben Sie ein Angebot mit Festpreis, Verbrauchsschätzung und Limit-Vorschlag.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="flex justify-center">
          <ContactButton size="lg">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>
    </>
  );
}
