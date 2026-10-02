import type { Metadata } from "next";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, GeoSummary, ProseColumns, TimelineAsSteps, TimelineAsStepsStep, DataTable } from "@/components/ui";
import { OfferCard } from "@/components/cards";
import { ConsultationCtaDefault } from "@/components/sections";
import { ContactButton } from "@/components/buttons";

// ENTWURF (Branch anthropic-managed-service-provider): Gerüst für die
// Repositionierung auf Managed Claude, Inhalte werden noch geschärft.

export const metadata: Metadata = {
  title: "Managed Claude Interface: Compliance der Claude-App zentral steuern | Bluebatch",
  description:
    "Das Managed Claude Interface steuert die Compliance der Claude-App zentral über Profile: Ordner für alle Nutzer freigeben, Tools und Connectoren sperren, Modelle und Limits je Rolle festlegen. Teil des Private Claude AI Gateway.",
  openGraph: {
    title: "Managed Claude Interface: Compliance der Claude-App zentral steuern",
    description:
      "Das Managed Claude Interface steuert die Compliance der Claude-App zentral über Profile: Ordner für alle Nutzer freigeben, Tools und Connectoren sperren, Modelle und Limits je Rolle festlegen. Teil des Private Claude AI Gateway.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Compliance%20der%20Claude-App%20zentral%20steuern&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Compliance der Claude-App zentral steuern",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/zentrale-steuerung",
  },
};

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection bodyWidth="small">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Managed Claude Interface</IntroBox.PreHeadline>
        </IntroBox>
        <Typo.H1 className="text-center">Compliance der Claude-App zentral steuern</Typo.H1>
        <GeoSummary align="center">
          Das Managed Claude Interface ist die zentrale Steuerung der Claude-App im Private Claude AI Gateway. Über Profile legen Sie einmal fest, was für alle Nutzer, ein Team oder eine Rolle gilt: welche Ordner freigegeben sind, welche Tools und Connectoren gesperrt sind und welche Modelle genutzt werden dürfen. Die Regeln greifen zentral, ohne dass jemand jedes Gerät einzeln einrichtet.
        </GeoSummary>
        <div className="flex justify-center">
          <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Was Sie zentral steuern</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Ordner freigeben">
            Ordner wie das Kanzlei-Handbuch oder die Vorlagen für alle Nutzer freigeben. Sensible Ablagen nur für die Rollen, die sie brauchen.
          </ProseColumns.Item>
          <ProseColumns.Item title="Tools sperren">
            Einzelne Tools, Connectoren oder Funktionen sperren, etwa die Websuche für ein Team oder Schreibzugriffe auf angebundene Systeme.
          </ProseColumns.Item>
          <ProseColumns.Item title="Modelle je Profil">
            Festlegen, wer welches Modell nutzt: Haiku und Sonnet für alle, Opus für die harten Fälle bei ausgewählten Rollen.
          </ProseColumns.Item>
          <ProseColumns.Item title="Limits je Profil">
            Verbrauchsbudgets pro Person, Team oder Rolle, mit Warnschwelle.
          </ProseColumns.Item>
          <ProseColumns.Item title="Skills und Plugins verteilen">
            Arbeitsanleitungen und Pakete einmal zentral ausrollen, statt sie auf jedem Rechner einzeln einzurichten.
          </ProseColumns.Item>
          <ProseColumns.Item title="Alles protokolliert">
            Jede Änderung an einem Profil ist nachvollziehbar: wer, wann, was.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>So funktionieren Profile</IntroBox.Headline>
        </IntroBox>
        <div className="mx-auto max-w-3xl">
          <TimelineAsSteps>
            <TimelineAsStepsStep value={1}>
              <Typo.H3 className="mt-2!">Profil anlegen</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Zum Beispiel „Alle Mitarbeiter", „Lohnbuchhaltung" oder „Berufsträger".
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={2}>
              <Typo.H3 className="mt-2!">Regeln festlegen</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Freigegebene Ordner, erlaubte und gesperrte Tools, Modelle und Limits.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={3}>
              <Typo.H3 className="mt-2!">Nutzern zuweisen</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Profile hängen an Rollen, zum Beispiel an Ihren SSO-Gruppen. Neue Mitarbeiter bekommen automatisch das richtige Profil.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={4}>
              <Typo.H3 className="mt-2!">Zentral wirksam</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Änderungen greifen für alle Nutzer des Profils, ohne Gerät für Gerät nachzuziehen.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
          </TimelineAsSteps>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Beispiel: drei Profile in einer Steuerkanzlei</IntroBox.Headline>
          <IntroBox.Paragraph>
            So kann eine Aufteilung aussehen. Die Profile legen wir im Onboarding gemeinsam mit Ihnen fest.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="overflow-x-auto">
          <DataTable>
            <DataTable.Head>
              <DataTable.Row>
                <DataTable.HeaderCell>Profil</DataTable.HeaderCell>
                <DataTable.HeaderCell>Freigegebene Ordner</DataTable.HeaderCell>
                <DataTable.HeaderCell>Tools</DataTable.HeaderCell>
                <DataTable.HeaderCell>Modelle</DataTable.HeaderCell>
              </DataTable.Row>
            </DataTable.Head>
            <DataTable.Body>
              <DataTable.Row>
                <DataTable.Cell bold>Alle Mitarbeiter</DataTable.Cell>
                <DataTable.Cell>Kanzlei-Handbuch, Vorlagen</DataTable.Cell>
                <DataTable.Cell>Websuche, Outlook Connector</DataTable.Cell>
                <DataTable.Cell>Haiku, Sonnet</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Berufsträger</DataTable.Cell>
                <DataTable.Cell>Zusätzlich Mandantenakten</DataTable.Cell>
                <DataTable.Cell>Zusätzlich DATEV lesend</DataTable.Cell>
                <DataTable.Cell>Zusätzlich Opus</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Auszubildende</DataTable.Cell>
                <DataTable.Cell>Kanzlei-Handbuch</DataTable.Cell>
                <DataTable.Cell>Externe Connectoren gesperrt</DataTable.Cell>
                <DataTable.Cell>Haiku, Sonnet</DataTable.Cell>
              </DataTable.Row>
            </DataTable.Body>
          </DataTable>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Warum zentral</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Compliance statt Vertrauen">
            Was nicht erlaubt ist, ist gesperrt, und nicht nur in einer Richtlinie verboten.
          </ProseColumns.Item>
          <ProseColumns.Item title="Nachweisbar">
            Die Profile dokumentieren, wer worauf Zugriff hat. Das hilft bei der dokumentierten Auswahl nach § 62a StBerG.
          </ProseColumns.Item>
          <ProseColumns.Item title="Weniger Aufwand für die IT">
            Keine Einzelkonfiguration pro Gerät. Eine Änderung, alle Nutzer.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Weiter geht es hier</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-6">
          <OfferCard
            href="/managed-claude/claude-app"
            title="Claude App"
            description="Der Chat für jeden Mitarbeiter, gesteuert über Profile."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/wie-es-funktioniert"
            title="Wie es funktioniert"
            description="Architektur und Rechtsrahmen des Gateways."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/onboarding"
            title="Onboarding"
            description="Wann und wie die ersten Profile angelegt werden."
            linkLabel="Mehr erfahren"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Compliance zentral steuern?</IntroBox.Headline>
          <IntroBox.Paragraph>
            Im Scoping-Gespräch klären wir in 30 Minuten Stand der IT, Anmeldung, wer Zugriff bekommt und welche Systeme später relevant sind. Drei Tage danach haben Sie ein Angebot mit Festpreis, Verbrauchsschätzung und Limit-Vorschlag.
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
