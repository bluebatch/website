import type { Metadata } from "next";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, ProseColumns, FaqContainer } from "@/components/ui";
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
import { RoiCalculation, StepJourneyRow } from "@/components/sections";
import { ContactButton, InternalLink } from "@/components/buttons";

const description =
  "Schulung Governance, Compliance und Guardrails für Claude Enterprise: 850 € pro Teilnehmer oder 7.500 € pro Gruppe, zzgl. USt. Bezahlung per Rechnung.";

export const metadata: Metadata = {
  title: "Schulung: Governance für Claude Enterprise | Bluebatch",
  description,
  openGraph: {
    title: "Schulung: Governance, Compliance und Guardrails für Claude Enterprise",
    description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Schulung%3A%20Governance%20f%C3%BCr%20Claude%20Enterprise&eyebrow=Governance%20%26%20Compliance",
        width: 1200,
        height: 630,
        alt: "Schulung: Governance für Claude Enterprise",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/governance-compliance/schulung",
  },
};

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Governance &amp; Compliance · Schulung</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Schulung: Governance, Compliance und Guardrails für Claude Enterprise
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription geo>
              Die Schulung von Bluebatch zeigt IT, Admins und Compliance, wie sie Governance und Guardrails für Claude
              Enterprise von Anthropic selbst einrichten: Rollen, Freigaben, Regeln für Daten und den rechtlichen Rahmen.
              Sie kostet 850 € pro Teilnehmer oder 7.500 € pro Gruppe eines Unternehmens, jeweils zzgl. USt., bezahlt per
              Rechnung.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Schulung bestellen</ContactButton>
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
                <PriceCard.Label>Schulung</PriceCard.Label>
                <PriceCard.Price>
                  <PriceCard.Amount>850 €</PriceCard.Amount>
                  <PriceCard.Unit>pro Teilnehmer, zzgl. USt.</PriceCard.Unit>
                </PriceCard.Price>
                <PriceCard.Or />
                <PriceCard.Price size="sm">
                  <PriceCard.Amount>7.500 €</PriceCard.Amount>
                  <PriceCard.Unit>pro Gruppe eines Unternehmens, zzgl. USt.</PriceCard.Unit>
                </PriceCard.Price>
              </PriceCard.Head>
              <PriceCard.Items>
                <PriceCard.Item>Rollen, Single Sign-on und Admin-Rechte einrichten</PriceCard.Item>
                <PriceCard.Item>Connectors, Skills und Tools freigeben oder sperren</PriceCard.Item>
                <PriceCard.Item>Aufbewahrung, Protokolle und Exporte festlegen</PriceCard.Item>
                <PriceCard.Item>DSGVO, Art. 4 EU AI Act und Betriebsrat einordnen</PriceCard.Item>
              </PriceCard.Items>
              <PriceCard.Note>Bezahlung per Rechnung nach der Bestellung.</PriceCard.Note>
            </PriceCard>
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Inhalt</IntroBox.PreHeadline>
          <IntroBox.Headline>Was Sie in der Schulung einrichten</IntroBox.Headline>
          <IntroBox.Paragraph>
            Kein Vortrag über KI-Ethik: Sie lernen die Einstellungen kennen, die Claude im Unternehmen absichern, und
            wissen danach, welche Sie wie setzen.
          </IntroBox.Paragraph>
        </IntroBox>
        <StepJourneyRow className="mt-10">
          <StepJourneyRow.Step n={1}>
            <StepJourneyRow.Title>Rollen und Zugänge</StepJourneyRow.Title>
            <StepJourneyRow.Description>
              Single Sign-on, Benutzer und Gruppen, Admin-Rechte und wer neue Funktionen freigibt.
            </StepJourneyRow.Description>
          </StepJourneyRow.Step>
          <StepJourneyRow.Step n={2}>
            <StepJourneyRow.Title>Freigaben</StepJourneyRow.Title>
            <StepJourneyRow.Description>
              Connectors, Skills und Tools für das Team freigeben oder sperren, Websuche an oder aus.
            </StepJourneyRow.Description>
          </StepJourneyRow.Step>
          <StepJourneyRow.Step n={3}>
            <StepJourneyRow.Title>Daten</StepJourneyRow.Title>
            <StepJourneyRow.Description>
              Aufbewahrung von Chats, Protokolle und Exporte als Nachweis für Prüfungen.
            </StepJourneyRow.Description>
          </StepJourneyRow.Step>
          <StepJourneyRow.Step n={4}>
            <StepJourneyRow.Title>Rechtlicher Rahmen</StepJourneyRow.Title>
            <StepJourneyRow.Description>
              DSGVO und Auftragsverarbeitung, KI-Kompetenz nach Art. 4 EU AI Act, Berufsgeheimnisse und Betriebsrat.
            </StepJourneyRow.Description>
          </StepJourneyRow.Step>
          <StepJourneyRow.Step n={5}>
            <StepJourneyRow.Title>Ihre Richtlinie</StepJourneyRow.Title>
            <StepJourneyRow.Description>
              Was technisch eingestellt wird und was in eine KI-Richtlinie für die Mitarbeiter gehört.
            </StepJourneyRow.Description>
          </StepJourneyRow.Step>
        </StepJourneyRow>
      </ContentWrapper>

      <ContentWrapper>
        <SimpleGrid cols={2} className="items-center gap-10! lg:gap-16!">
          <div>
            <IntroBox textCentered={false} size="wide">
              <IntroBox.PreHeadline>Rechenbeispiel</IntroBox.PreHeadline>
              <IntroBox.Headline>Ab wann sich die Gruppe lohnt</IntroBox.Headline>
              <IntroBox.Paragraph className="mb-4!">
                Einzelne Plätze kosten 850 € pro Teilnehmer. Für eine Gruppe aus Ihrem Unternehmen zahlen Sie pauschal
                7.500 €. Ab neun Teilnehmern ist die Gruppe günstiger.
              </IntroBox.Paragraph>
            </IntroBox>
            <Typo.Paragraph className="text-gray-600">
              Die Gruppe schulen wir nur für Ihr Unternehmen, den Termin stimmen wir nach der Bestellung mit Ihnen ab.
            </Typo.Paragraph>
          </div>
          <RoiCalculation className="rounded-2xl">
            <RoiCalculation.Assumption>Neun Personen aus Ihrem Unternehmen nehmen teil.</RoiCalculation.Assumption>
            <div className="py-2">
              <RoiCalculation.Row label="9 Einzelplätze à 850 €">7.650 €</RoiCalculation.Row>
              <RoiCalculation.Row label="Gruppe für Ihr Unternehmen">7.500 €</RoiCalculation.Row>
            </div>
            <RoiCalculation.Total label="Ersparnis mit der Gruppe">150 €</RoiCalculation.Total>
            <RoiCalculation.Source>Alle Preise zzgl. USt.</RoiCalculation.Source>
          </RoiCalculation>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gradient-cool">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Einzelplatz oder Gruppe</IntroBox.PreHeadline>
          <IntroBox.Headline>Welche Variante passt?</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={2} wide className="mx-auto mt-10 max-w-5xl">
          <ProseColumns.Item title="Einzelplatz für 850 € passt, wenn …">
            eine oder wenige Personen Claude verantworten, zum Beispiel die IT-Leitung und die oder der
            Datenschutzbeauftragte.
          </ProseColumns.Item>
          <ProseColumns.Item title="Gruppe für 7.500 € passt, wenn …">
            mehrere Personen aus IT, Datenschutz, Compliance und Fachbereichen zusammen lernen sollen, ab neun
            Teilnehmern auch günstiger.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Passend dazu</IntroBox.PreHeadline>
          <IntroBox.Headline>Weitere Formate</IntroBox.Headline>
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
            href="/managed-claude/governance-compliance/studie"
            price="1.000 €"
            title="Studie"
            description="Sechs Wochen Fragebogen im geladenen Kreis, die Ergebnisse sind enthalten."
            linkLabel="Zur Studie"
          />
          <OfferCard
            href="/managed-claude/coaching"
            price="ab 5.000 €"
            title="Coaching für das ganze Team"
            description="Wie Ihre Mitarbeiter mit Claude arbeiten, inklusive Zertifikat nach Art. 4 EU AI Act."
            linkLabel="Zum Coaching"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer
          headline="Fragen zur Schulung"
          intro="Was vor der Bestellung gefragt wird."
          faqs={[
            {
              question: "Was kostet die Schulung?",
              answer:
                "850 € pro Teilnehmer oder 7.500 € pro Gruppe eines Unternehmens, jeweils zzgl. USt. Ab neun Teilnehmern ist die Gruppe günstiger.",
            },
            {
              question: "Wie bezahle ich?",
              answer:
                "Per Rechnung. Sie bestellen über das Formular, wir bestätigen die Bestellung und den Termin, danach kommt eine normale Rechnung.",
            },
            {
              question: "Für wen ist die Schulung?",
              answer:
                "Für alle, die Claude im Unternehmen einrichten, freigeben oder prüfen: IT und Admins, Datenschutz, Compliance und Informationssicherheit.",
            },
            {
              question: "Was ist der Unterschied zum Coaching?",
              answer:
                "Die Schulung richtet sich an die Verantwortlichen und dreht sich um Einstellungen und Regeln. Im Coaching lernt das ganze Team, mit Claude zu arbeiten, inklusive Zertifikat nach Art. 4 EU AI Act.",
            },
          ]}
        />
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Schulung bestellen</IntroBox.Headline>
          <IntroBox.Paragraph>
            Schreiben Sie uns, ob Sie Einzelplätze oder eine Gruppe möchten. Wir bestätigen die Bestellung, stimmen den
            Termin ab und schicken danach die Rechnung.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="flex justify-center">
          <ContactButton size="lg">Schulung bestellen</ContactButton>
        </div>
      </ContentWrapper>
    </>
  );
}
