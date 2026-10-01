import type { Metadata } from "next";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, GeoSummary, ProseColumns, TimelineAsSteps, TimelineAsStepsStep } from "@/components/ui";
import { ConsultationCtaDefault } from "@/components/sections";
import { ContactButton } from "@/components/buttons";

// ENTWURF (Branch anthropic-managed-service-provider): Gerüst für die
// Repositionierung auf Managed Claude, Inhalte werden noch geschärft.

export const metadata: Metadata = {
  title: "Wie Managed Claude funktioniert: Ablauf und Verantwortung | Bluebatch",
  description:
    "So funktioniert Managed Claude mit Bluebatch: Anthropic liefert das Modell, Bluebatch richtet ein, integriert und betreibt, euer Team arbeitet mit Claude. Rollen und Ablauf im Überblick.",
  openGraph: {
    title: "Wie Managed Claude funktioniert: Ablauf und Verantwortung",
    description:
      "So funktioniert Managed Claude mit Bluebatch: Anthropic liefert das Modell, Bluebatch richtet ein, integriert und betreibt, euer Team arbeitet mit Claude. Rollen und Ablauf im Überblick.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Wie%20Managed%20Claude%20funktioniert&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Wie Managed Claude funktioniert",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/wie-es-funktioniert",
  },
};

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection bodyWidth="small">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Wie es funktioniert</IntroBox.PreHeadline>
        </IntroBox>
        <Typo.H1 className="text-center">Wie Managed Claude funktioniert</Typo.H1>
        <GeoSummary align="center">
          Managed Claude verteilt die Arbeit auf drei Rollen: Anthropic liefert Claude als Modell und App, Bluebatch richtet Claude ein, bindet eure Systeme an und betreibt alles laufend, euer Team nutzt Claude im Alltag. Ihr bekommt einen festen Ansprechpartner statt einer Lizenz, um die sich niemand kümmert.
        </GeoSummary>
        <div className="flex justify-center">
          <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Wer macht was?</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Anthropic">
            Stellt Claude bereit: das Modell, die Claude App und die API. Vertragspartner für Lizenzen und Nutzung.
          </ProseColumns.Item>
          <ProseColumns.Item title="Bluebatch">
            Richtet Claude ein, verwaltet Nutzer und Rechte, baut Integrationen und Use Cases und kümmert sich um den Betrieb.
          </ProseColumns.Item>
          <ProseColumns.Item title="Euer Team">
            Arbeitet mit Claude im Alltag, gibt Feedback und entscheidet, welche Prozesse als Nächstes dran sind.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Der Ablauf</IntroBox.Headline>
        </IntroBox>
        <div className="mx-auto max-w-3xl">
          <TimelineAsSteps>
            <TimelineAsStepsStep value={1}>
              <Typo.H3 className="mt-2!">Bestandsaufnahme</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Welche Teams, welche Systeme, welche Daten? Wir klären, wo Claude den größten Hebel hat und was datenschutzrechtlich zu beachten ist.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={2}>
              <Typo.H3 className="mt-2!">Einrichtung</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Lizenzen, Single Sign-on, Rollen und Projekte werden aufgesetzt. Die ersten Integrationen kommen dazu.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={3}>
              <Typo.H3 className="mt-2!">Befähigung</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Schulungen pro Team, Vorlagen und Skills für wiederkehrende Aufgaben, damit Claude im Alltag ankommt.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={4}>
              <Typo.H3 className="mt-2!">Laufender Betrieb</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Wir betreuen Nutzer, Kosten und Integrationen, spielen Neuerungen von Anthropic ein und bauen weitere Use Cases.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
          </TimelineAsSteps>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Fragen zum Ablauf?</IntroBox.Headline>
          <IntroBox.Paragraph>
            In 30 Minuten klären wir, wo Claude bei euch den größten Hebel hat, welche Systeme angebunden werden und wie der Start aussieht.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="flex justify-center">
          <ContactButton size="lg">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
