import type { Metadata } from "next";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, ProseColumns, TimelineAsSteps, TimelineAsStepsStep, FaqContainer } from "@/components/ui";
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
import { SetupScreen } from "@/components/mockups/portal-screens";
import GoLivePlan from "./go-live-plan";

const description =
  "KI-Einführung mit dem Private Claude AI Gateway: Vertrag, Einrichtung, Claude Desktop und Cowork einrichten. In einer Woche startklar, 1.500 € Festpreis.";

export const metadata: Metadata = {
  title: "KI-Einführung: in einer Woche startklar mit Claude | Bluebatch",
  description,
  openGraph: {
    title: "KI-Einführung: in einer Woche startklar mit Claude",
    description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=KI-Einf%C3%BChrung%3A%20vom%20Vertrag%20zum%20ersten%20Prompt&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "KI-Einführung: vom Vertrag zum ersten Prompt",
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
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Schritt 1 · Onboarding</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>KI-Einführung: vom Vertrag zum ersten Prompt</Hero2ColumnHeadline>
            <Hero2ColumnDescription geo>
              Die KI-Einführung mit dem Private Claude AI Gateway führt in vier Schritten von der Unterschrift zum ersten Prompt: Vertrag und Geheimhaltung, Tenant-Einrichtung, Anbindung von Claude Desktop und Schulung. Gateway und Chat sind maximal eine Woche nach Auftrag startklar, die Einrichtung kostet 1.500 € Festpreis.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Festpreis zzgl. USt. Mit einem{" "}
              <InternalLink href="/managed-claude/coaching" variant="underline">
                Coaching-Paket
              </InternalLink>{" "}
              wird die Einrichtung voll angerechnet.
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <GoLivePlan />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Roadmap für den Go-live</IntroBox.PreHeadline>
          <IntroBox.Headline>Die KI-Einführung in vier Schritten</IntroBox.Headline>
          <IntroBox.Paragraph>
            Von der Unterschrift bis zum ersten Prompt, ohne Umwege. Die Einführung in die KI beginnt mit der rechtlichen Basis, nicht mit der Technik.
          </IntroBox.Paragraph>
        </IntroBox>
        <StepJourneyRow>
          <StepJourneyRow.Step n={1}>
            <StepJourneyRow.Title>Vertrag und Geheimhaltung</StepJourneyRow.Title>
            <StepJourneyRow.Description>
              AVV, Geheimhaltungsvereinbarung und Vertrag werden unterzeichnet. Die rechtliche Basis steht.
            </StepJourneyRow.Description>
          </StepJourneyRow.Step>
          <StepJourneyRow.Step n={2}>
            <StepJourneyRow.Title>Tenant-Einrichtung</StepJourneyRow.Title>
            <StepJourneyRow.Description>
              Bluebatch richtet Tenant und Zugänge ein: Claude über AWS Bedrock in Frankfurt, Anmeldung, Rollen und Limits.
            </StepJourneyRow.Description>
          </StepJourneyRow.Step>
          <StepJourneyRow.Step n={3}>
            <StepJourneyRow.Title>Anbindung</StepJourneyRow.Title>
            <StepJourneyRow.Description>
              Claude Desktop wird mit dem Gateway verbunden, per Self-Service oder durch Ihr IT-Team.
            </StepJourneyRow.Description>
          </StepJourneyRow.Step>
          <StepJourneyRow.Step n={4}>
            <StepJourneyRow.Title>Schulung</StepJourneyRow.Title>
            <StepJourneyRow.Description>
              Auf Wunsch schulen wir Ihr Team im Umgang mit Claude, als Coaching-Paket M oder L, jeweils mit KI-Kompetenzschulung nach Art. 4 EU AI Act.
            </StepJourneyRow.Description>
          </StepJourneyRow.Step>
        </StepJourneyRow>
      </ContentWrapper>

      <ContentWrapper>
        <SimpleGrid cols={2} className="items-center gap-12! lg:gap-16!">
          <div>
            <IntroBox textCentered={false} size="wide">
              <IntroBox.PreHeadline>Anbindung</IntroBox.PreHeadline>
              <IntroBox.Headline>Claude Desktop und Cowork einrichten</IntroBox.Headline>
              <IntroBox.Paragraph className="mb-6!">
                Im Portal unter Einrichtung liegt die passende Datei: claude.reg für ein Windows-Konto, claude-machine.reg für alle Konten eines Rechners, ai_gateway.json für Mac und Windows. Einmal einspielen, Claude Desktop neu starten, per SSO anmelden. Die Einstellungen Ihrer Organisation holt sich die App danach selbst.
              </IntroBox.Paragraph>
            </IntroBox>
            <ProseColumns cols={2}>
              <ProseColumns.Item title="Cowork mit Grenzen">
                Für Cowork legen Sie fest, welche Ordner Claude sehen darf, zum Beispiel C:\Akten nur lesend. Alles außerhalb bleibt unsichtbar.
              </ProseColumns.Item>
              <ProseColumns.Item title="Je Person steuerbar">
                Wer Chat, Cowork oder Code nutzt, welche Anweisungen und welches Banner gelten, stellen Admins im Portal ein.
              </ProseColumns.Item>
            </ProseColumns>
            <InternalLink href="/managed-claude/zentrale-steuerung" className="mt-2">
              Zur zentralen Steuerung
            </InternalLink>
          </div>
          <SetupScreen sidebar={false} />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>1.500 € Festpreis</IntroBox.PreHeadline>
          <IntroBox.Headline>Was zur Einrichtung gehört</IntroBox.Headline>
          <IntroBox.Paragraph>
            Einmalig, ohne Lizenz pro Kopf. Danach zahlen Sie nur die Modellkosten nach Verbrauch, siehe{" "}
            <InternalLink href="/managed-claude/preise" variant="underline">
              Preise
            </InternalLink>
            .
          </IntroBox.Paragraph>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Gateway und Chat">
            Startklar übergeben, alle Mitarbeiter haben Zugang.
          </ProseColumns.Item>
          <ProseColumns.Item title="SSO, Rollen und Protokoll">
            Anmeldung mit Ihrem bestehenden Konto, Rechte je Team, Protokollierung aktiv.
          </ProseColumns.Item>
          <ProseColumns.Item title="Limits">
            Verbrauchslimits pro Mitarbeiter hinterlegt, mit Warnschwelle.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Nach dem Go-live</IntroBox.PreHeadline>
          <IntroBox.Headline>Zwei Coaching-Pakete, die Einrichtung wird angerechnet</IntroBox.Headline>
          <IntroBox.Paragraph>
            5 oder 10 Personentage. Bei beiden Paketen rechnen wir die Einrichtung (1.500 €) und den Outlook Connector (500 €) zu 100 % an. Alle Preise zzgl. USt.
          </IntroBox.Paragraph>
        </IntroBox>
        <SimpleGrid cols={2} className="mx-auto max-w-5xl">
          <OfferCard
            href="/managed-claude/coaching/paket-m"
            price="5.000 €"
            title="Paket M: KI-Workshop, 5 Personentage"
            description="KI-Kompetenzschulung mit Zertifikat, Grundlagen, erste Arbeitsanleitungen und Routinen, Grundgerüst für das Kanzlei-Handbuch."
            linkLabel="Zu Paket M"
          />
          <OfferCard
            highlight
            href="/managed-claude/coaching/paket-l"
            price="10.000 €"
            title="Paket L: KI-Beratung, 10 Personentage"
            description="Alles aus Paket M, dazu rund drei Monate Begleitung, fertiges Kanzlei-Handbuch, KI-Beauftragte im Haus und KI-Strategie."
            linkLabel="Zu Paket L"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Sie entscheiden zuerst nur über Schritt 1</IntroBox.Headline>
          <IntroBox.Paragraph>
            Der ist klein, hat einen Festpreis und ist umkehrbar. Schulung, Agenten, Systemanbindung und DATEV entscheiden Sie, wenn Sie aus dem Alltag wissen, was sich lohnt.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="mx-auto max-w-3xl">
          <TimelineAsSteps>
            <TimelineAsStepsStep value={1}>
              <Typo.H3 className="mt-2!">Scoping-Gespräch, 30 Minuten</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Stand der IT, Anmeldung, wer Zugriff bekommt, welche Systeme später relevant sind. Mit Ihnen, Ihrer IT und uns.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={2}>
              <Typo.H3 className="mt-2!">Angebot, 3 Tage danach</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Einrichtung zum Festpreis, mit Verbrauchsschätzung und Limit-Vorschlag.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={3}>
              <Typo.H3 className="mt-2!">Einrichtung, maximal 1 Woche nach Auftrag</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Gateway und Chat startklar, alle Mitarbeiter haben Zugang. Wir, gemeinsam mit Ihrer IT.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={4}>
              <Typo.H3 className="mt-2!">Rückblick nach 4 bis 6 Wochen</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Was wird genutzt, wo lohnt sich Schritt 2, welcher Vorgang ist der Kandidat für Schritt 3. Gemeinsam.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
          </TimelineAsSteps>
        </div>
      </ContentWrapper>

      <ContentWrapper bodyWidth="small">
        <FaqContainer
          headline="Fragen zur KI-Einführung"
          intro="Was vor dem Start gefragt wird."
          faqs={[
            {
              question: "Wie lange dauert die KI-Einführung?",
              answer:
                "Gateway und Chat sind maximal eine Woche nach Auftrag startklar. Davor liegen das Scoping-Gespräch (30 Minuten) und das Angebot, das Sie drei Tage danach bekommen.",
            },
            {
              question: "Was kostet die Einrichtung?",
              answer:
                "1.500 € einmalig, Festpreis zzgl. USt. Dazu kommen die Modellkosten nach Verbrauch, ohne Lizenz pro Kopf. Buchen Sie Paket M oder Paket L, wird die Einrichtung zu 100 % angerechnet.",
            },
            {
              question: "Wie richte ich Claude Cowork ein?",
              answer:
                "Im Portal unter Einrichtung die passende Datei laden (claude.reg, claude-machine.reg oder ai_gateway.json), einspielen, Claude Desktop neu starten und per SSO anmelden. Welche Ordner Claude in Cowork sehen darf, legen Admins im Portal fest.",
            },
            {
              question: "Was muss unsere IT vorbereiten?",
              answer:
                "Wenig. Im Scoping-Gespräch klären wir mit Ihrer IT die Anmeldung per SSO, wer Zugriff bekommt und welche Systeme später relevant sind. Die Datei für Claude Desktop spielt jeder selbst ein, oder Ihre IT verteilt sie zentral.",
            },
            {
              question: "Gehört eine Schulung zur Einführung in die KI dazu?",
              answer:
                "Die Einrichtung selbst enthält keine Schulung. Auf Wunsch schulen wir Ihr Team mit Paket M oder Paket L, beide mit KI-Kompetenzschulung nach Art. 4 EU AI Act und Zertifikat je Mitarbeiter.",
            },
          ]}
        />
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Bereit für den Go-live?</IntroBox.Headline>
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
