import type { Metadata } from "next";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, GeoSummary, ProseColumns, TimelineAsSteps, TimelineAsStepsStep } from "@/components/ui";
import { ConsultationCtaDefault } from "@/components/sections";
import { ContactButton } from "@/components/buttons";

// ENTWURF (Branch anthropic-managed-service-provider): Gerüst für die
// Repositionierung auf Managed Claude, Inhalte werden noch geschärft.

export const metadata: Metadata = {
  title: "Claude Onboarding: in wenigen Wochen produktiv | Bluebatch",
  description:
    "Claude Onboarding mit Bluebatch: Bestandsaufnahme, Einrichtung, Integration und Schulung. So kommt euer Team strukturiert und datenschutzkonform mit Claude an den Start.",
  openGraph: {
    title: "Claude Onboarding: in wenigen Wochen produktiv",
    description:
      "Claude Onboarding mit Bluebatch: Bestandsaufnahme, Einrichtung, Integration und Schulung. So kommt euer Team strukturiert und datenschutzkonform mit Claude an den Start.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Claude%20Onboarding%3A%20strukturiert%20an%20den%20Start&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Claude Onboarding: strukturiert an den Start",
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
        <Typo.H1 className="text-center">Claude Onboarding: strukturiert an den Start</Typo.H1>
        <GeoSummary align="center">
          Das Claude Onboarding von Bluebatch bringt ein Team in wenigen Wochen von der ersten Lizenz zur produktiven Nutzung. Es umfasst Bestandsaufnahme, Einrichtung von Single Sign-on und Rechten, die ersten Integrationen etwa zu Microsoft 365 und Schulungen pro Abteilung.
        </GeoSummary>
        <div className="flex justify-center">
          <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Die Phasen im Onboarding</IntroBox.Headline>
        </IntroBox>
        <div className="mx-auto max-w-3xl">
          <TimelineAsSteps>
            <TimelineAsStepsStep value={1}>
              <Typo.H3 className="mt-2!">Kick-off und Bestandsaufnahme</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Ziele, Teams, Systeme und Datenschutz-Rahmen klären. Ergebnis ist ein Einführungsplan mit den ersten Use Cases.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={2}>
              <Typo.H3 className="mt-2!">Setup</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Claude-Organisation anlegen, SSO und Nutzerverwaltung einrichten, Projekte und Berechtigungen strukturieren.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={3}>
              <Typo.H3 className="mt-2!">Integrationen</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Die wichtigsten Datenquellen anbinden, zum Beispiel Microsoft 365, DATEV oder eure Websuche.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={4}>
              <Typo.H3 className="mt-2!">Schulung und Go-live</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Schulungen pro Team, Vorlagen für typische Aufgaben, danach Übergang in den laufenden Betrieb.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
          </TimelineAsSteps>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Was ihr am Ende habt</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Eingerichtete Organisation">
            Alle Nutzer, Rollen und Projekte sauber aufgesetzt und dokumentiert.
          </ProseColumns.Item>
          <ProseColumns.Item title="Angebundene Systeme">
            Claude greift auf die Daten zu, die euer Team wirklich braucht, mit klaren Rechten.
          </ProseColumns.Item>
          <ProseColumns.Item title="Befähigtes Team">
            Jede Abteilung weiß, wofür sie Claude einsetzt, und hat Vorlagen für den Einstieg.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Bereit für den Start?</IntroBox.Headline>
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
