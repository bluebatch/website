import type { Metadata } from "next";
import { ContentWrapper } from "@/components/layout";
import { IntroBox } from "@/components/ui";
import {
  Hero2Column,
  Hero2ColumnTextColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnCallToAction,
  Hero2ColumnSubtext,
} from "@/components/heroes";
import { StepJourneyRow } from "@/components/sections";
import { ContactButton, InternalLink } from "@/components/buttons";

// Gerüst: Inhalte, Ablauf und Preis folgen von Max (t-0084).
const description =
  "KI-Compliance-Workshop für Unternehmen: In 10 Personentagen gehen wir mit Ihrem Team die AI Compliance für Claude Enterprise durch. Angebot auf Anfrage.";

export const metadata: Metadata = {
  title: "Compliance-Workshop für Enterprise: KI-Compliance | Bluebatch",
  description,
  openGraph: {
    title: "Compliance-Workshop für Enterprise: KI-Compliance in 10 Personentagen",
    description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Compliance-Workshop%20f%C3%BCr%20Enterprise&eyebrow=Governance%20%26%20Compliance",
        width: 1200,
        height: 630,
        alt: "Compliance-Workshop für Enterprise",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/governance-compliance/workshop",
  },
};

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Governance &amp; Compliance · Enterprise</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>Compliance-Workshop: KI-Compliance für Ihr Unternehmen</Hero2ColumnHeadline>
            <Hero2ColumnDescription geo>
              Der Compliance-Workshop von Bluebatch ist das Enterprise-Angebot für Unternehmen mit Claude Enterprise: In
              10 Personentagen gehen wir mit Ihrem Team die KI-Compliance einmal vollständig durch. Das Angebot erstellen
              wir auf Anfrage.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Für den Einstieg gibt es die{" "}
              <InternalLink href="/managed-claude/governance-compliance/schulung" variant="underline">
                Schulung zu Governance und Guardrails
              </InternalLink>{" "}
              und das{" "}
              <InternalLink href="/managed-claude/governance-compliance/webinar" variant="underline">
                kostenlose Governance-Webinar
              </InternalLink>
              .
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
        </Hero2Column>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Ablauf</IntroBox.PreHeadline>
          <IntroBox.Headline>So läuft der Compliance-Workshop</IntroBox.Headline>
          <IntroBox.Paragraph>Die Module und der Zeitplan folgen in Kürze.</IntroBox.Paragraph>
        </IntroBox>
        <StepJourneyRow className="mt-10">
          <StepJourneyRow.Step n={1}>
            <StepJourneyRow.Title>Bestandsaufnahme</StepJourneyRow.Title>
            <StepJourneyRow.Description>Details folgen.</StepJourneyRow.Description>
          </StepJourneyRow.Step>
          <StepJourneyRow.Step n={2}>
            <StepJourneyRow.Title>Compliance durchgehen</StepJourneyRow.Title>
            <StepJourneyRow.Description>Details folgen.</StepJourneyRow.Description>
          </StepJourneyRow.Step>
          <StepJourneyRow.Step n={3}>
            <StepJourneyRow.Title>Ergebnis</StepJourneyRow.Title>
            <StepJourneyRow.Description>Details folgen.</StepJourneyRow.Description>
          </StepJourneyRow.Step>
        </StepJourneyRow>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Angebot</IntroBox.PreHeadline>
          <IntroBox.Headline>10 Personentage, Preis auf Anfrage</IntroBox.Headline>
          <IntroBox.Paragraph>
            Umfang und Preis stimmen wir mit Ihnen ab. Wie der Workshop zum Rest von Governance &amp; Compliance passt,
            zeigt die{" "}
            <InternalLink href="/managed-claude/governance-compliance" variant="underline">
              Übersicht Governance und Compliance
            </InternalLink>
            .
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="mt-8 flex justify-center">
          <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>
    </>
  );
}
