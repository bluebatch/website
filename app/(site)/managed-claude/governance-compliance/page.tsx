import type { Metadata } from "next";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, ProseColumns, FaqContainer } from "@/components/ui";
import { OfferCard } from "@/components/cards";
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
import { NetworkScreen } from "@/components/mockups";

// Hub für Governance, Compliance und Guardrails. Darunter drei Money Pages mit
// sichtbarem Preis: Webinar (kostenlos), Studie (1.000 €) und Schulung (ab
// 850 €). Bestellt wird per Formular, bezahlt per Rechnung nach der Bestellung.

const description =
  "Governance, Compliance und Guardrails für Claude Enterprise: kostenloses Webinar, Studie für 1.000 € und Schulung ab 850 €. Alle Preise auf einen Blick.";

export const metadata: Metadata = {
  title: "Governance und Compliance für Claude Enterprise | Bluebatch",
  description,
  openGraph: {
    title: "Governance und Compliance für Claude Enterprise",
    description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Governance%20und%20Compliance%20f%C3%BCr%20Claude%20Enterprise&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Governance und Compliance für Claude Enterprise",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/governance-compliance",
  },
};

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Governance &amp; Compliance</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>Governance und Compliance für Claude Enterprise</Hero2ColumnHeadline>
            <Hero2ColumnDescription geo>
              Governance und Compliance für Claude Enterprise heißt: festlegen, wer Claude wofür nutzen darf, und das
              technisch absichern. Bluebatch zeigt Unternehmen, wie sie Rollen, Freigaben und Guardrails einrichten, im
              kostenlosen Webinar, in einer Studie für 1.000 € und in einer Schulung ab 850 € pro Teilnehmer. Bezahlt
              wird per Rechnung nach der Bestellung.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Frage stellen</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Erst mal reinschauen?{" "}
              <InternalLink href="/managed-claude/governance-compliance/webinar" variant="underline">
                Zum kostenlosen Webinar
              </InternalLink>
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <NetworkScreen sidebar={false} />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Angebote und Preise</IntroBox.PreHeadline>
          <IntroBox.Headline>Webinar, Studie, Schulung oder Workshop</IntroBox.Headline>
          <IntroBox.Paragraph>
            Drei Formate mit festem Preis: Sie bestellen über das Formular auf der jeweiligen Seite, die Rechnung kommt
            nach der Bestellung. Den Compliance-Workshop für Enterprise bieten wir auf Anfrage an.
          </IntroBox.Paragraph>
        </IntroBox>
        <SimpleGrid cols={4} className="mx-auto mt-10 max-w-7xl">
          <OfferCard
            href="/managed-claude/governance-compliance/webinar"
            price="Kostenlos"
            title="Webinar"
            description="Governance, Compliance und Guardrails für Claude Enterprise konfigurieren: der Überblick in einer Sitzung."
            linkLabel="Zum Webinar"
          />
          <OfferCard
            highlight
            href="/managed-claude/governance-compliance/studie"
            price="1.000 €"
            title="Studie"
            description="Sechs Wochen Fragebogen im geladenen Kreis, die Ergebnisse zur Compliance mit Claude Enterprise inklusive."
            linkLabel="Zur Studie"
          />
          <OfferCard
            href="/managed-claude/governance-compliance/schulung"
            price="ab 850 €"
            title="Schulung"
            description="Rollen, Freigaben und Datenregeln selbst einrichten. 850 € pro Teilnehmer oder 7.500 € pro Gruppe."
            linkLabel="Zur Schulung"
          />
          <OfferCard
            href="/managed-claude/governance-compliance/workshop"
            price="Auf Anfrage"
            title="Compliance-Workshop"
            description="Das Enterprise-Angebot: In 10 Personentagen gehen wir mit Ihrem Team die KI-Compliance einmal vollständig durch."
            linkLabel="Zum Compliance-Workshop"
          />
        </SimpleGrid>
        <Typo.Paragraph className="mt-8 text-center text-sm text-gray-500">
          Alle Preise zzgl. USt.
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Worum es geht</IntroBox.PreHeadline>
          <IntroBox.Headline>Drei Begriffe, eine Frage: Wer darf was?</IntroBox.Headline>
          <IntroBox.Paragraph>
            Sobald Claude im ganzen Unternehmen läuft, reicht ein Login für alle nicht mehr. Es braucht Regeln, wer welche
            Daten, Tools und Funktionen nutzen darf, und Einstellungen, die diese Regeln durchsetzen.
          </IntroBox.Paragraph>
        </IntroBox>
        <ProseColumns cols={3} className="mx-auto mt-10 max-w-6xl">
          <ProseColumns.Item title="Governance">
            Wer Claude nutzt, in welcher Rolle und mit welchen Rechten. Dazu gehören Single Sign-on, Benutzer und Gruppen,
            Admins und die Frage, wer neue Funktionen freigibt.
          </ProseColumns.Item>
          <ProseColumns.Item title="Compliance">
            Der rechtliche Rahmen: DSGVO und Auftragsverarbeitung, KI-Kompetenz nach Art. 4 EU AI Act, Berufsgeheimnisse
            und die Mitbestimmung des Betriebsrats.
          </ProseColumns.Item>
          <ProseColumns.Item title="Guardrails">
            Die technischen Grenzen: welche Connectors, Skills und Tools freigegeben sind, ob Claude ins Internet darf, wie
            lange Chats aufbewahrt werden und was protokolliert wird.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="gradient-cool">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Bestellung</IntroBox.PreHeadline>
          <IntroBox.Headline>So bestellen Sie</IntroBox.Headline>
          <IntroBox.Paragraph>Keine Kreditkarte, kein Shop. Sie bestellen, wir bestätigen, die Rechnung folgt.</IntroBox.Paragraph>
        </IntroBox>
        <StepJourneyRow className="mt-10">
          <StepJourneyRow.Step n={1}>
            <StepJourneyRow.Title>Format wählen</StepJourneyRow.Title>
            <StepJourneyRow.Description>
              Webinar, Studie oder Schulung. Der Preis steht auf jeder Seite, ohne Anfrage.
            </StepJourneyRow.Description>
          </StepJourneyRow.Step>
          <StepJourneyRow.Step n={2}>
            <StepJourneyRow.Title>Bestellen</StepJourneyRow.Title>
            <StepJourneyRow.Description>
              Über das Formular auf der Seite. Wir bestätigen die Bestellung und stimmen den Termin mit Ihnen ab.
            </StepJourneyRow.Description>
          </StepJourneyRow.Step>
          <StepJourneyRow.Step n={3}>
            <StepJourneyRow.Title>Rechnung</StepJourneyRow.Title>
            <StepJourneyRow.Description>
              Nach der Bestellung bekommen Sie eine normale Rechnung. Das Webinar ist kostenlos.
            </StepJourneyRow.Description>
          </StepJourneyRow.Step>
        </StepJourneyRow>
      </ContentWrapper>

      <ContentWrapper>
        <SimpleGrid cols={2} className="items-center gap-10! lg:gap-16!">
          <IntroBox textCentered={false} size="wide">
            <IntroBox.PreHeadline>Bei Managed Claude</IntroBox.PreHeadline>
            <IntroBox.Headline>Regeln, die schon eingebaut sind</IntroBox.Headline>
            <IntroBox.Paragraph>
              Wer Claude über Bluebatch nutzt, stellt Rollen, Freigaben, Anweisungen, Connectors und Netzwerkregeln
              zentral im{" "}
              <InternalLink href="/managed-claude/zentrale-steuerung" variant="underline">
                Managed Claude Interface
              </InternalLink>{" "}
              ein. Wo die Daten liegen und welche Unterlagen es für den Datenschutz gibt, steht auf der Seite{" "}
              <InternalLink href="/managed-claude/datenschutz" variant="underline">
                Claude und Datenschutz
              </InternalLink>
              .
            </IntroBox.Paragraph>
          </IntroBox>
          <IntroBox textCentered={false} size="wide">
            <IntroBox.PreHeadline>Für die tägliche Arbeit</IntroBox.PreHeadline>
            <IntroBox.Headline>Und wenn das ganze Team lernen soll?</IntroBox.Headline>
            <IntroBox.Paragraph>
              Webinar, Studie und Schulung richten sich an Admins, IT und Compliance. Wie Ihre Mitarbeiter mit Claude
              arbeiten, Chat, Co-Work und Projekte inklusive Zertifikat nach Art. 4 EU AI Act, lernen sie im{" "}
              <InternalLink href="/managed-claude/coaching" variant="underline">
                Coaching für Claude
              </InternalLink>
              .
            </IntroBox.Paragraph>
          </IntroBox>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer
          headline="Fragen zu Governance und Compliance"
          intro="Was vor der Bestellung gefragt wird."
          faqs={[
            {
              question: "Was kosten Webinar, Studie und Schulung?",
              answer:
                "Das Webinar ist kostenlos. Die Teilnahme an der Studie kostet 1.000 €, die Ergebnisse sind enthalten. Die Schulung kostet 850 € pro Teilnehmer oder 7.500 € pro Gruppe eines Unternehmens. Alle Preise zzgl. USt.",
            },
            {
              question: "Wie bezahle ich?",
              answer:
                "Per Rechnung. Sie bestellen über das Formular, wir bestätigen die Bestellung und schicken danach eine normale Rechnung. Eine Kreditkarte oder Vorkasse brauchen Sie nicht.",
            },
            {
              question: "Für wen sind die Angebote gedacht?",
              answer:
                "Für alle, die Claude im Unternehmen verantworten: IT-Leitung und Admins, Datenschutz und Compliance, Geschäftsführung. Für die tägliche Arbeit der Mitarbeiter mit Claude gibt es das Coaching.",
            },
            {
              question: "Muss ich Claude Enterprise schon nutzen?",
              answer:
                "Nein. Die Inhalte helfen auch, wenn Sie Claude erst einführen wollen und vorher klären möchten, welche Regeln Sie brauchen. Ob Sie Claude Enterprise direkt bei Anthropic oder Managed Claude über Bluebatch nutzen, spielt für die Fragen von Governance und Compliance keine große Rolle.",
            },
            {
              question: "Mit welchem Format fange ich an?",
              answer:
                "Mit dem kostenlosen Webinar, wenn Sie einen Überblick wollen. Mit der Schulung, wenn Sie die Einstellungen selbst vornehmen. Mit der Studie, wenn Sie wissen wollen, wie andere Unternehmen Claude regeln.",
            },
          ]}
        />
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Fragen zu Governance und Compliance?</IntroBox.Headline>
          <IntroBox.Paragraph>
            Schreiben Sie uns, welches Format Sie interessiert oder wo Sie gerade stehen. Wir melden uns innerhalb eines
            Werktags.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="flex justify-center">
          <ContactButton size="lg">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>
    </>
  );
}
