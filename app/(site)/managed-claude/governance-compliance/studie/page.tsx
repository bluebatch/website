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
  "Studie Claude Enterprise Compliance: sechs Wochen Fragebogen in einem geladenen Kreis von Unternehmen. Teilnahme 1.000 € zzgl. USt., Ergebnisse inklusive.";

export const metadata: Metadata = {
  title: "Studie: Compliance mit Claude Enterprise | Bluebatch",
  description,
  openGraph: {
    title: "Studie: Compliance mit Claude Enterprise",
    description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Studie%3A%20Compliance%20mit%20Claude%20Enterprise&eyebrow=Governance%20%26%20Compliance",
        width: 1200,
        height: 630,
        alt: "Studie: Compliance mit Claude Enterprise",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/governance-compliance/studie",
  },
};

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Governance &amp; Compliance · Studie</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>Studie: Compliance mit Claude Enterprise</Hero2ColumnHeadline>
            <Hero2ColumnDescription geo>
              Die Studie „Claude Enterprise Compliance“ von Bluebatch untersucht, wie Unternehmen Claude regeln und
              absichern. Teilnehmer beantworten über sechs Wochen einen Fragebogen und gehören zu einem kleinen, geladenen
              Kreis von Unternehmen. Die Teilnahme kostet 1.000 € zzgl. USt., die Ergebnisse der Studie sind enthalten.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Teilnahme bestellen</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Erst einen Überblick?{" "}
              <InternalLink href="/managed-claude/governance-compliance/webinar" variant="underline">
                Zum kostenlosen Webinar
              </InternalLink>
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <PriceCard>
              <PriceCard.Head>
                <PriceCard.Label>Studie</PriceCard.Label>
                <PriceCard.Price>
                  <PriceCard.Amount>1.000 €</PriceCard.Amount>
                  <PriceCard.Unit>Teilnahme, zzgl. USt.</PriceCard.Unit>
                </PriceCard.Price>
              </PriceCard.Head>
              <PriceCard.Items>
                <PriceCard.Item>Fragebogen über die nächsten sechs Wochen</PriceCard.Item>
                <PriceCard.Item>Exklusiver, geladener Kreis von Unternehmen</PriceCard.Item>
                <PriceCard.Item>Thema: Compliance mit Claude Enterprise</PriceCard.Item>
                <PriceCard.Item>Ergebnisse der Studie inklusive</PriceCard.Item>
              </PriceCard.Items>
              <PriceCard.Note>Bezahlung per Rechnung nach der Bestellung.</PriceCard.Note>
            </PriceCard>
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Ablauf</IntroBox.PreHeadline>
          <IntroBox.Headline>Sechs Wochen bis zu den Ergebnissen</IntroBox.Headline>
          <IntroBox.Paragraph>
            Die Studie läuft in den nächsten sechs Wochen. Sie beantworten den Fragebogen, wir werten aus und schicken
            Ihnen die Ergebnisse.
          </IntroBox.Paragraph>
        </IntroBox>
        <StepJourneyRow className="mt-10">
          <StepJourneyRow.Step n={1}>
            <StepJourneyRow.Title>Bestellen</StepJourneyRow.Title>
            <StepJourneyRow.Description>
              Über das Formular. Wir bestätigen Ihre Teilnahme, die Rechnung folgt.
            </StepJourneyRow.Description>
          </StepJourneyRow.Step>
          <StepJourneyRow.Step n={2}>
            <StepJourneyRow.Title>Fragebogen</StepJourneyRow.Title>
            <StepJourneyRow.Description>
              Sie beantworten über sechs Wochen die Fragen zu Ihrem Umgang mit Claude im Unternehmen.
            </StepJourneyRow.Description>
          </StepJourneyRow.Step>
          <StepJourneyRow.Step n={3}>
            <StepJourneyRow.Title>Auswertung</StepJourneyRow.Title>
            <StepJourneyRow.Description>
              Wir werten die Antworten aller Teilnehmer gemeinsam aus.
            </StepJourneyRow.Description>
          </StepJourneyRow.Step>
          <StepJourneyRow.Step n={4}>
            <StepJourneyRow.Title>Ergebnisse</StepJourneyRow.Title>
            <StepJourneyRow.Description>
              Sie bekommen die Ergebnisse der Studie, ohne Aufpreis.
            </StepJourneyRow.Description>
          </StepJourneyRow.Step>
        </StepJourneyRow>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Themen</IntroBox.PreHeadline>
          <IntroBox.Headline>Worum es in der Studie geht</IntroBox.Headline>
          <IntroBox.Paragraph>
            Compliance mit Claude Enterprise: wie Unternehmen Claude im Alltag regeln, technisch absichern und
            nachweisen.
          </IntroBox.Paragraph>
        </IntroBox>
        <ProseColumns cols={3} className="mx-auto mt-10 max-w-6xl">
          <ProseColumns.Item title="Regeln">
            Wer Claude nutzen darf, in welcher Rolle, und wer neue Funktionen freigibt.
          </ProseColumns.Item>
          <ProseColumns.Item title="Guardrails">
            Welche Connectors, Skills und Tools freigegeben sind und welche Grenzen technisch gesetzt werden.
          </ProseColumns.Item>
          <ProseColumns.Item title="Nachweise">
            Wie Unternehmen Datenschutz, KI-Kompetenz nach Art. 4 EU AI Act und Aufbewahrung dokumentieren.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="gradient-cool">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Weitere Formate</IntroBox.PreHeadline>
          <IntroBox.Headline>Governance und Compliance mit Bluebatch</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={3} className="mx-auto mt-10 max-w-6xl">
          <OfferCard
            href="/managed-claude/governance-compliance/webinar"
            price="Kostenlos"
            title="Webinar"
            description="Governance, Compliance und Guardrails für Claude Enterprise: der Überblick in einer Sitzung."
            linkLabel="Zum Webinar"
          />
          <OfferCard
            highlight
            href="/managed-claude/governance-compliance/schulung"
            price="ab 850 €"
            title="Schulung"
            description="Rollen, Freigaben und Datenregeln selbst einrichten. 850 € pro Teilnehmer oder 7.500 € pro Gruppe."
            linkLabel="Zur Schulung"
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
          headline="Fragen zur Studie"
          intro="Was vor der Teilnahme gefragt wird."
          faqs={[
            {
              question: "Was kostet die Teilnahme an der Studie?",
              answer:
                "Die Teilnahme kostet 1.000 € zzgl. USt. Die Ergebnisse der Studie sind enthalten, dafür zahlen Sie nichts extra. Die Rechnung kommt nach der Bestellung.",
            },
            {
              question: "Wer kann teilnehmen?",
              answer:
                "Die Studie läuft in einem kleinen, geladenen Kreis. Wir laden Unternehmen gezielt ein. Sie haben keine Einladung, möchten aber dabei sein? Dann bestellen Sie über das Formular, wir melden uns.",
            },
            {
              question: "Wie lange dauert die Studie?",
              answer:
                "Der Fragebogen läuft über die nächsten sechs Wochen. Danach werten wir aus und schicken Ihnen die Ergebnisse.",
            },
            {
              question: "Muss ich Claude Enterprise schon nutzen?",
              answer:
                "Es geht um Compliance mit Claude Enterprise. Am meisten haben Sie davon, wenn Sie Claude im Unternehmen nutzen oder die Einführung gerade planen.",
            },
          ]}
        />
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Bei der Studie dabei sein?</IntroBox.Headline>
          <IntroBox.Paragraph>
            Bestellen Sie Ihre Teilnahme für 1.000 € zzgl. USt. Wir bestätigen, schicken die Rechnung und den Fragebogen.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="flex justify-center">
          <ContactButton size="lg">Teilnahme bestellen</ContactButton>
        </div>
      </ContentWrapper>
    </>
  );
}
