import type { Metadata } from "next";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, GeoSummary, ProseColumns, TimelineAsSteps, TimelineAsStepsStep } from "@/components/ui";
import { ConsultationCtaDefault } from "@/components/sections";
import { ContactButton } from "@/components/buttons";

// ENTWURF (Branch anthropic-managed-service-provider): Gerüst für die
// Repositionierung auf Managed Claude, Inhalte werden noch geschärft.

export const metadata: Metadata = {
  title: "Managed Claude Onboarding: in wenigen Tagen startklar | Bluebatch",
  description:
    "Das Managed Claude Onboarding: AWS-Konto in der EU, Claude über Bedrock, Claude Desktop für bis zu 10 Nutzer, Modellregeln, Nachweis-Paket und Team-Onboarding. 1.500 € Festpreis.",
  openGraph: {
    title: "Managed Claude Onboarding: in wenigen Tagen startklar",
    description:
      "Das Managed Claude Onboarding: AWS-Konto in der EU, Claude über Bedrock, Claude Desktop für bis zu 10 Nutzer, Modellregeln, Nachweis-Paket und Team-Onboarding. 1.500 € Festpreis.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Onboarding%3A%20in%20wenigen%20Tagen%20startklar&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Onboarding: in wenigen Tagen startklar",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/onboarding",
  },
};

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection bodyWidth="small">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Onboarding</IntroBox.PreHeadline>
        </IntroBox>
        <Typo.H1 className="text-center">Onboarding: in wenigen Tagen startklar</Typo.H1>
        <GeoSummary align="center">
          Das Onboarding von Managed Claude bringt euer Team in wenigen Tagen zur Arbeit mit Claude. Bluebatch richtet das AWS-Konto in der EU, Claude über Amazon Bedrock, Claude Desktop für bis zu 10 Nutzer und die Modellregeln ein und liefert das Nachweis-Paket. Festpreis: 1.500 € einmalig.
        </GeoSummary>
        <div className="flex justify-center">
          <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>In vier Schritten startklar</IntroBox.Headline>
        </IntroBox>
        <div className="mx-auto max-w-3xl">
          <TimelineAsSteps>
            <TimelineAsStepsStep value={1}>
              <Typo.H3 className="mt-2!">Kurzer Check</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Drei Fragen klären, ob das Setup zu euch passt: vertrauliche Daten, Claude-App fürs Team, vorhandenes AWS-Konto.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={2}>
              <Typo.H3 className="mt-2!">Gespräch, 30 Minuten</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Nutzerzahl, AWS-Konto, Datenarten und der erste Anwendungsfall. Danach steht der Plan.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={3}>
              <Typo.H3 className="mt-2!">Setup</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                AWS-Konto in der EU, Claude über Amazon Bedrock, Claude Desktop, Modellregeln und Nachweis-Paket. Dauer: wenige Tage.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={4}>
              <Typo.H3 className="mt-2!">Übergabe und Start</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Onboarding fürs Team, Doku an euch. Auf Wunsch betreuen wir weiter, das Konto bleibt in jedem Fall eures.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
          </TimelineAsSteps>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Was im Setup steckt</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="AWS-Konto in der EU">
            Wir nutzen euer bestehendes Konto oder legen es gemeinsam mit euch an. Es gehört in jedem Fall euch.
          </ProseColumns.Item>
          <ProseColumns.Item title="Claude über Bedrock">
            Modellzugang mit EU-Profil, Opus 5 und Sonnet 5, Modellregeln nach euren Vorgaben.
          </ProseColumns.Item>
          <ProseColumns.Item title="Claude Desktop">
            Für bis zu 10 Nutzer eingerichtet, verteilt über eure Geräteverwaltung, mit SSO.
          </ProseColumns.Item>
          <ProseColumns.Item title="Nachweis-Paket">
            Datenfluss, Löschkonzept, TOMs und unsere Verschwiegenheitserklärung für eure Prüfung.
          </ProseColumns.Item>
          <ProseColumns.Item title="Onboarding fürs Team">
            Einführung in Cowork und Code mit euren ersten Anwendungsfällen.
          </ProseColumns.Item>
          <ProseColumns.Item title="Dokumentation">
            Alles, was eingerichtet wurde, geht an euch. Ihr seid nicht von uns abhängig.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Bereit für den Start?</IntroBox.Headline>
          <IntroBox.Paragraph>
            30 Minuten reichen: Wie viele Nutzer, gibt es schon ein AWS-Konto, welche Daten sollen zu Claude und womit startet ihr. Danach wisst ihr, ob das Setup passt.
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
