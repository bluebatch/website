import type { Metadata } from "next";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
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
import { RoiCalculation, StepJourneyRow } from "@/components/sections";
import { ContactButton, InternalLink } from "@/components/buttons";
import CertificateMock from "@/components/mockups/certificate-mock";
import PriceCard from "./price-card";

// Paket M ersetzt Paket S (3 PT): die alte URL leitet per 301 hierher.
export const rewriteSiteConfig: RewriteSiteConfig = {
  legacyRedirects: ["/managed-claude/coaching/paket-s"],
  rewrites: [],
};

const description =
  "KI-Workshop für Unternehmen: 5 Personentage Coaching für Claude mit KI-Kompetenzschulung und Zertifikat. 5.000 €, Einrichtung und Outlook voll angerechnet.";

export const metadata: Metadata = {
  title: "KI-Workshop für Unternehmen: Paket M, 5 Tage Coaching | Bluebatch",
  description,
  openGraph: {
    title: "KI-Workshop für Unternehmen: Paket M, 5 Tage Coaching",
    description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=KI-Workshop%20f%C3%BCr%20Unternehmen%3A%20Paket%20M&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "KI-Workshop für Unternehmen: Paket M",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/coaching/paket-m",
  },
};

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Coaching · Paket M</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>KI-Workshop für Unternehmen: Paket&nbsp;M</Hero2ColumnHeadline>
            <Hero2ColumnDescription geo>
              Paket M ist der KI-Workshop für Unternehmen von Bluebatch: 5 Personentage Coaching für 5.000 € zzgl. USt. rund um das Private Claude AI Gateway. Ihr Team lernt Modelle, App, Chat, Co-Work und Projekte, absolviert die KI-Kompetenzschulung nach Art. 4 EU AI Act mit Zertifikat und baut die ersten Arbeitsanleitungen und das Grundgerüst des Kanzlei-Handbuchs.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Paket M anfragen</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Lieber mit Begleitung über rund drei Monate?{" "}
              <InternalLink href="/managed-claude/coaching/paket-l" variant="underline">
                Paket L ansehen
              </InternalLink>
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <PriceCard />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Inhalt</IntroBox.PreHeadline>
          <IntroBox.Headline>Was im KI-Workshop passiert</IntroBox.Headline>
          <IntroBox.Paragraph>
            Fünf Personentage, Termine nach Absprache. Kein Seminar mit Folien und Übungsbeispielen: Wir arbeiten an Ihren echten Fällen, und was entsteht, bleibt im Haus.
          </IntroBox.Paragraph>
        </IntroBox>
        <StepJourneyRow className="mt-10">
          <StepJourneyRow.Step n={1}>
            <StepJourneyRow.Title>KI-Kompetenz</StepJourneyRow.Title>
            <StepJourneyRow.Description>
              Schulung nach Art. 4 EU AI Act für alle, die mit der KI arbeiten, Zertifikat je Mitarbeiter und Teilnehmerliste für die Ablage.
            </StepJourneyRow.Description>
          </StepJourneyRow.Step>
          <StepJourneyRow.Step n={2}>
            <StepJourneyRow.Title>Modelle und App</StepJourneyRow.Title>
            <StepJourneyRow.Description>
              Welches Modell bei Ihnen wofür voreingestellt ist. Teams und Rollen eingerichtet, Oberfläche aufgeräumt.
            </StepJourneyRow.Description>
          </StepJourneyRow.Step>
          <StepJourneyRow.Step n={3}>
            <StepJourneyRow.Title>Chat, Co-Work, Projekte</StepJourneyRow.Title>
            <StepJourneyRow.Description>
              Jeder führt erste echte Vorgänge durch. Ein Schriftstück entsteht bis zur fertigen Fassung, die ersten Projekte sind angelegt.
            </StepJourneyRow.Description>
          </StepJourneyRow.Step>
          <StepJourneyRow.Step n={4}>
            <StepJourneyRow.Title>Anleitungen und Routinen</StepJourneyRow.Title>
            <StepJourneyRow.Description>
              Sie diktieren die Fachlichkeit, wir bringen sie in Form. Dazu die erste Routine, zum Beispiel die Montagsübersicht.
            </StepJourneyRow.Description>
          </StepJourneyRow.Step>
          <StepJourneyRow.Step n={5}>
            <StepJourneyRow.Title>Kanzlei-Handbuch</StepJourneyRow.Title>
            <StepJourneyRow.Description>
              Das Grundgerüst steht: Handbuch mit Anleitungen und Routinen, Projekte mit den Unterlagen. Outlook läuft im Alltag.
            </StepJourneyRow.Description>
          </StepJourneyRow.Step>
        </StepJourneyRow>
      </ContentWrapper>

      <ContentWrapper>
        <SimpleGrid cols={2} className="items-center gap-10! lg:gap-16!">
          <div>
            <IntroBox textCentered={false} size="wide">
              <IntroBox.PreHeadline>Rechenbeispiel</IntroBox.PreHeadline>
              <IntroBox.Headline>Was Paket M unterm Strich kostet</IntroBox.Headline>
              <IntroBox.Paragraph className="mb-4!">
                Die Einrichtung des Gateways (1.500 €) und den Outlook Connector (500 €) rechnen wir bei Paket M zu 100 % an. Wer beides gebucht hat, zahlt für Einrichtung, Outlook Connector und fünf Tage Coaching zusammen 5.000 €. Das Coaching selbst kostet damit effektiv 3.000 € zusätzlich.
              </IntroBox.Paragraph>
            </IntroBox>
            <Typo.Paragraph className="text-gray-600">
              Dazu kommen nur die Modellkosten nach Verbrauch, ohne Lizenz pro Kopf. Was das für Ihr Team bedeutet, steht auf der Seite{" "}
              <InternalLink href="/managed-claude/preise" variant="underline">
                Preise
              </InternalLink>
              .
            </Typo.Paragraph>
          </div>
          <RoiCalculation className="rounded-2xl">
            <RoiCalculation.Assumption>
              Sie buchen die Einrichtung, den Outlook Connector und Paket M.
            </RoiCalculation.Assumption>
            <div className="py-2">
              <RoiCalculation.Row label="Einrichtung Gateway, einmalig">1.500 €</RoiCalculation.Row>
              <RoiCalculation.Row label="Outlook Connector, einmalig">500 €</RoiCalculation.Row>
              <RoiCalculation.Row label="Paket M, 5 Personentage">5.000 €</RoiCalculation.Row>
              <RoiCalculation.Row label="Anrechnung Einrichtung" highlight>
                − 1.500 €
              </RoiCalculation.Row>
              <RoiCalculation.Row label="Anrechnung Outlook Connector" highlight>
                − 500 €
              </RoiCalculation.Row>
            </div>
            <RoiCalculation.Total label="Gesamt">5.000 €</RoiCalculation.Total>
            <RoiCalculation.Source>Alle Preise zzgl. USt. Modellkosten nach Verbrauch kommen hinzu.</RoiCalculation.Source>
          </RoiCalculation>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gradient-cool">
        <SimpleGrid cols={2} className="items-center gap-12! lg:gap-16!">
          <div>
            <IntroBox textCentered={false} size="wide">
              <IntroBox.PreHeadline>Ergebnis</IntroBox.PreHeadline>
              <IntroBox.Headline>Was Ihr Team nach dem Workshop kann</IntroBox.Headline>
            </IntroBox>
            <ProseColumns cols={2} className="mt-8">
              <ProseColumns.Item title="KI-Kompetenz belegt">
                Alle Mitarbeiter haben die Schulung nach Art. 4 EU AI Act durchlaufen und ein Zertifikat erhalten.
              </ProseColumns.Item>
              <ProseColumns.Item title="Sicher in der App">
                Jeder kennt Chat, Co-Work und Projekte und hat erste echte Vorgänge begleitet durchgeführt.
              </ProseColumns.Item>
              <ProseColumns.Item title="Erste Anleitungen">
                Die ersten Skills und Routinen für wiederkehrende Aufgaben sind geschrieben und im Einsatz.
              </ProseColumns.Item>
              <ProseColumns.Item title="Handbuch angelegt">
                Das Grundgerüst des Kanzlei-Handbuchs steht, Ihr Team füllt es weiter.
              </ProseColumns.Item>
            </ProseColumns>
          </div>
          <div>
            <CertificateMock compact />
            <p className="mx-auto mt-5 max-w-sm text-center text-sm text-gray-500">
              Muster. Ein Schulungsnachweis, kein amtliches Zertifikat.
            </p>
          </div>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Paket M oder Paket L</IntroBox.PreHeadline>
          <IntroBox.Headline>Kompakt starten oder drei Monate begleitet?</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={2} wide className="mx-auto mt-10 max-w-5xl">
          <ProseColumns.Item title="Paket M passt, wenn …">
            Ihr Team schnell sicher mit Claude arbeiten soll, die Pflicht nach Art. 4 erledigt sein soll und die ersten Anleitungen stehen sollen. Den Ausbau übernehmen Ihre Leute danach selbst.
          </ProseColumns.Item>
          <ProseColumns.Item title="Paket L passt besser, wenn …">
            Sie rund drei Monate Begleitung wollen, ein fertiges Kanzlei-Handbuch, eine KI-Beauftragte oder einen KI-Beauftragten im Haus und eine KI-Strategie für die nächsten Vorgänge.
          </ProseColumns.Item>
        </ProseColumns>
        <SimpleGrid cols={2} className="mx-auto mt-10 max-w-5xl">
          <OfferCard
            highlight
            href="/managed-claude/coaching/paket-l"
            price="10.000 €"
            title="Paket L: KI-Beratung, 10 Personentage"
            description="Alles aus Paket M, dazu rund drei Monate Begleitung, fertiges Handbuch, KI-Beauftragte im Haus und KI-Strategie."
            linkLabel="Zu Paket L"
          />
          <OfferCard
            href="/managed-claude/coaching"
            title="KI-Schulung im Überblick"
            description="Beide Pakete im Vergleich, die Grundlagen und die zertifizierte KI-Kompetenzschulung."
            linkLabel="Zum Coaching-Überblick"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer
          headline="Fragen zum KI-Workshop"
          intro="Was vor der Buchung von Paket M gefragt wird."
          faqs={[
            {
              question: "Was kostet der KI-Workshop für Unternehmen?",
              answer:
                "Paket M umfasst 5 Personentage und kostet 5.000 € zzgl. USt. Die Einrichtung (1.500 €) und der Outlook Connector (500 €) werden zu 100 % angerechnet, effektiv kommen also 3.000 € hinzu.",
            },
            {
              question: "Ist Paket M ein KI-Seminar?",
              answer:
                "Nein. Anders als die meisten KI-Seminare für Unternehmen arbeiten wir nicht an Übungsbeispielen, sondern an Ihren echten Fällen und in Ihrer Organisation im Private Claude AI Gateway. Was entsteht, bleibt im Haus: Anleitungen, Routinen und das Grundgerüst des Kanzlei-Handbuchs.",
            },
            {
              question: "Wie läuft die Anrechnung?",
              answer:
                "Die Einrichtung des Gateways kostet 1.500 €, der Outlook Connector 500 €. Buchen Sie Paket M, schreiben wir beides voll gut, zusammen bis zu 2.000 €. Ohne Outlook Connector werden die 1.500 € der Einrichtung angerechnet.",
            },
            {
              question: "Bekommen alle Mitarbeiter ein Zertifikat?",
              answer:
                "Ja. Alle Mitarbeiter, die mit der KI arbeiten, durchlaufen die KI-Kompetenzschulung nach Art. 4 EU AI Act und erhalten ein Zertifikat als Schulungsnachweis, plus Teilnehmerliste für Ihre Ablage. Ein Schulungsnachweis, kein amtliches Zertifikat.",
            },
            {
              question: "Was ist aus Paket S geworden?",
              answer:
                "Paket S mit 3 Personentagen gibt es nicht mehr, Paket M ersetzt es. Damit bleibt mehr Zeit für die ersten Anleitungen und das Handbuch, und Einrichtung und Outlook Connector werden jetzt voll angerechnet.",
            },
          ]}
        />
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Paket M buchen?</IntroBox.Headline>
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
