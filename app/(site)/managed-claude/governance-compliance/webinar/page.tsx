import type { Metadata } from "next";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { IntroBox, ProseColumns, FaqContainer } from "@/components/ui";
import { OfferCard, PriceCard } from "@/components/cards";
import {
  Hero2Column,
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnCallToAction,
  Hero2ColumnSubtext,
} from "@/components/heroes";
import { StepJourneyRow } from "@/components/sections";
import { ContactButton, InternalLink } from "@/components/buttons";

const description =
  "Kostenloses Webinar: Governance, Compliance und Guardrails für Claude Enterprise konfigurieren. Rollen, Freigaben, Datenregeln und rechtlicher Rahmen.";

export const metadata: Metadata = {
  title: "Webinar: Governance für Claude Enterprise, kostenlos | Bluebatch",
  description,
  openGraph: {
    title: "Webinar: Governance, Compliance und Guardrails für Claude Enterprise",
    description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Webinar%3A%20Governance%20f%C3%BCr%20Claude%20Enterprise&eyebrow=Kostenlos",
        width: 1200,
        height: 630,
        alt: "Webinar: Governance für Claude Enterprise",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/governance-compliance/webinar",
  },
};

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Governance &amp; Compliance · Webinar</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Webinar: Governance, Compliance und Guardrails für Claude Enterprise
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription geo>
              Das kostenlose Webinar von Bluebatch zeigt, wie Unternehmen Governance, Compliance und Guardrails für Claude
              Enterprise von Anthropic konfigurieren: Rollen und Zugänge, Freigaben für Connectors und Skills, Regeln für
              Daten und der rechtliche Rahmen von DSGVO bis EU AI Act. Gedacht für IT, Admins, Datenschutz und
              Compliance.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="calendar">Kostenlos anmelden</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Lieber selbst einrichten lernen?{" "}
              <InternalLink href="/managed-claude/governance-compliance/schulung" variant="underline">
                Zur Schulung ab 850 €
              </InternalLink>
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <PriceCard>
              <PriceCard.Head>
                <PriceCard.Label>Webinar</PriceCard.Label>
                <PriceCard.Price>
                  <PriceCard.Amount>0 €</PriceCard.Amount>
                  <PriceCard.Unit>kostenlos, online</PriceCard.Unit>
                </PriceCard.Price>
              </PriceCard.Head>
              <PriceCard.Items>
                <PriceCard.Item>Rollen, Single Sign-on und Admin-Rechte</PriceCard.Item>
                <PriceCard.Item>Connectors, Skills und Tools freigeben oder sperren</PriceCard.Item>
                <PriceCard.Item>Aufbewahrung, Protokolle und Exporte</PriceCard.Item>
                <PriceCard.Item>DSGVO, Art. 4 EU AI Act und Betriebsrat</PriceCard.Item>
                <PriceCard.Item>Zeit für Ihre Fragen</PriceCard.Item>
              </PriceCard.Items>
              <PriceCard.Note>Kostenlos und unverbindlich. Den Termin schicken wir Ihnen nach der Anmeldung.</PriceCard.Note>
            </PriceCard>
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Inhalt</IntroBox.PreHeadline>
          <IntroBox.Headline>Was im Webinar drankommt</IntroBox.Headline>
          <IntroBox.Paragraph>
            Vom ersten Login bis zur Frage, was der Betriebsrat mitbestimmt. Ein Überblick über alles, was Sie für Claude
            im Unternehmen regeln sollten.
          </IntroBox.Paragraph>
        </IntroBox>
        <StepJourneyRow className="mt-10">
          <StepJourneyRow.Step n={1}>
            <StepJourneyRow.Title>Rollen und Zugänge</StepJourneyRow.Title>
            <StepJourneyRow.Description>
              Anmeldung per Single Sign-on, Benutzer und Gruppen anlegen, wer Admin ist und wer neue Funktionen freigibt.
            </StepJourneyRow.Description>
          </StepJourneyRow.Step>
          <StepJourneyRow.Step n={2}>
            <StepJourneyRow.Title>Freigaben</StepJourneyRow.Title>
            <StepJourneyRow.Description>
              Welche Connectors, Skills und Tools das Team nutzen darf, und ob Claude im Internet suchen darf.
            </StepJourneyRow.Description>
          </StepJourneyRow.Step>
          <StepJourneyRow.Step n={3}>
            <StepJourneyRow.Title>Daten</StepJourneyRow.Title>
            <StepJourneyRow.Description>
              Wie lange Chats aufbewahrt werden, was protokolliert wird und wie Sie Nachweise für Prüfungen exportieren.
            </StepJourneyRow.Description>
          </StepJourneyRow.Step>
          <StepJourneyRow.Step n={4}>
            <StepJourneyRow.Title>Rechtlicher Rahmen</StepJourneyRow.Title>
            <StepJourneyRow.Description>
              DSGVO und Auftragsverarbeitung, KI-Kompetenz nach Art. 4 EU AI Act, Berufsgeheimnisse und der Betriebsrat.
            </StepJourneyRow.Description>
          </StepJourneyRow.Step>
          <StepJourneyRow.Step n={5}>
            <StepJourneyRow.Title>Ihre Fragen</StepJourneyRow.Title>
            <StepJourneyRow.Description>
              Zum Schluss ist Zeit für das, was bei Ihnen gerade offen ist.
            </StepJourneyRow.Description>
          </StepJourneyRow.Step>
        </StepJourneyRow>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Für wen</IntroBox.PreHeadline>
          <IntroBox.Headline>Wer im Webinar richtig ist</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3} className="mx-auto mt-10 max-w-6xl">
          <ProseColumns.Item title="IT und Admins">
            Sie richten Claude ein oder werden es bald tun und wollen wissen, welche Einstellungen es gibt und welche Sie
            von Anfang an setzen sollten.
          </ProseColumns.Item>
          <ProseColumns.Item title="Datenschutz und Compliance">
            Sie müssen Claude freigeben oder prüfen und brauchen einen Überblick, was technisch geregelt werden kann und
            was in Richtlinien gehört.
          </ProseColumns.Item>
          <ProseColumns.Item title="Geschäftsführung">
            Sie entscheiden über den Einsatz von Claude und wollen wissen, welche Pflichten auf Sie zukommen und wie andere
            Unternehmen das lösen.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="gradient-cool">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Nach dem Webinar</IntroBox.PreHeadline>
          <IntroBox.Headline>Tiefer einsteigen</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={3} className="mx-auto mt-10 max-w-6xl">
          <OfferCard
            highlight
            href="/managed-claude/governance-compliance/schulung"
            price="ab 850 €"
            title="Schulung"
            description="Die Einstellungen selbst vornehmen, Schritt für Schritt. 850 € pro Teilnehmer oder 7.500 € pro Gruppe."
            linkLabel="Zur Schulung"
          />
          <OfferCard
            href="/managed-claude/governance-compliance/studie"
            price="1.000 €"
            title="Studie"
            description="Sechs Wochen Fragebogen im geladenen Kreis, die Ergebnisse sind enthalten."
            linkLabel="Zur Studie"
          />
          <OfferCard
            href="/managed-claude/governance-compliance"
            title="Governance und Compliance"
            description="Alle Formate und Preise im Überblick."
            linkLabel="Zum Überblick"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer
          headline="Fragen zum Webinar"
          intro="Was vor der Anmeldung gefragt wird."
          faqs={[
            {
              question: "Was kostet das Webinar?",
              answer: "Nichts. Das Webinar ist kostenlos und unverbindlich, es entsteht keine Rechnung.",
            },
            {
              question: "Wann findet das Webinar statt?",
              answer:
                "Nach der Anmeldung schicken wir Ihnen den nächsten Termin und den Link per Mail. Passt der Termin nicht, nennen wir Ihnen einen weiteren.",
            },
            {
              question: "Brauche ich Claude Enterprise für das Webinar?",
              answer:
                "Nein. Das Webinar hilft auch, wenn Sie Claude erst einführen wollen und vorher wissen möchten, welche Regeln Sie brauchen.",
            },
            {
              question: "Was ist der Unterschied zur Schulung?",
              answer:
                "Das Webinar gibt den Überblick: was es zu regeln gibt und warum. In der Schulung richten Sie die Einstellungen selbst ein. Sie kostet 850 € pro Teilnehmer oder 7.500 € pro Gruppe eines Unternehmens, zzgl. USt.",
            },
          ]}
        />
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Platz im Webinar sichern</IntroBox.Headline>
          <IntroBox.Paragraph>
            Kostenlos anmelden, den Termin schicken wir Ihnen per Mail. Schreiben Sie gern dazu, welche Fragen Sie
            mitbringen.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="flex justify-center">
          <ContactButton size="lg">Kostenlos anmelden</ContactButton>
        </div>
      </ContentWrapper>
    </>
  );
}
