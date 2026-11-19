import type { Metadata } from "next";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import {
  Typo,
  IntroBox,
  FaqContainer,
  ProseColumns,
  TimelineAsSteps,
  TimelineAsStepsStep,
} from "@/components/ui";
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
import { ContactButton, InternalLink } from "@/components/buttons";
import { LocalServersScreen } from "@/components/mockups";

const description =
  "Claude Plugins entwickeln lassen bei Bluebatch: Skills, eigene MCP-Server und lokale Server als .mcpb, getestet auf Windows und macOS und über das Gateway an alle ausgeliefert. Ab 2.500 €.";

export const metadata: Metadata = {
  title: "Claude Plugins entwickeln lassen: Skills und MCP-Server | Bluebatch",
  description,
  openGraph: {
    title: "Claude Plugins entwickeln lassen: Skills und MCP-Server",
    description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Claude%20Plugins%20entwickeln%20lassen&eyebrow=Integrationen",
        width: 1200,
        height: 630,
        alt: "Claude Plugins entwickeln lassen",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/integrationen/plugin-entwicklung",
  },
};

const faqs = [
  {
    question: "Was kostet die Entwicklung eines Claude Plugins?",
    answer:
      "Ein Plugin kostet bei uns ab 2.500 € zzgl. USt. Abgerechnet wird nach Aufwand, den wir nach dem ersten Gespräch schätzen. Der Aufwand hängt vor allem davon ab, ob ein eigener MCP-Server nötig ist, wie die Anmeldung am System läuft und ob Claude dort nur lesen oder auch schreiben soll.",
  },
  {
    question: "Was ist der Unterschied zu „MCP-Server erstellen lassen“?",
    answer:
      "Dort geht es um einen einzelnen Server für ein System, den wir betreiben, ab 1.000 € Setup und 50 € im Monat. Die Plugin-Entwicklung ist für ganze Abläufe: Skills, die beschreiben, wie Ihr Team arbeitet, zusammen mit den Servern, die dafür nötig sind, auch lokal auf dem Rechner, und ausgerollt an alle.",
  },
  {
    question: "Wann braucht es einen lokalen MCP-Server?",
    answer:
      "Wenn Claude etwas erreichen soll, das nur vom Rechner aus erreichbar ist: ein Netzlaufwerk, eine installierte Fachsoftware oder ein System hinter der Firewall. Dann bauen wir den Server als MCP-Bundle (.mcpb), das Claude Desktop auf dem Rechner startet. Die Daten laufen dabei über keinen weiteren Server.",
  },
  {
    question: "Läuft das Plugin auf Windows und macOS?",
    answer:
      "Ja, wir testen auf beiden Systemen. Lokale Server liefern wir bevorzugt als Programmdatei je System, dann muss auf den Rechnern weder Node noch Python installiert sein.",
  },
  {
    question: "Brauche ich dafür das Private Claude AI Gateway?",
    answer:
      "Über das Gateway ist es am einfachsten: Plugin hochladen, Bibliothek zuweisen, auf Wunsch automatisch installieren. Ein Plugin ist aber ein normales Paket für Claude. Nutzen Sie Claude Team oder Enterprise, bekommen Sie es als Datei für den Marketplace Ihrer Organisation.",
  },
  {
    question: "Wie kommen spätere Änderungen auf die Rechner?",
    answer:
      "Im Gateway laden wir eine neue Version hoch und schalten sie aktiv. Claude Desktop holt sie beim nächsten Abgleich, nach etwa zehn Minuten. Ein neues Rollout über die IT ist nicht nötig.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Integrationen · Plugin-Entwicklung</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Claude Plugins <span className="hyphens-manual">entwickeln</span> lassen
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription geo>
              Bluebatch entwickelt Claude Plugins für Unternehmen und Kanzleien: Skills für Ihre Abläufe, eigene
              MCP-Server für Systeme ohne Anbindung an Claude und lokale Server als .mcpb für Laufwerke und
              Fachsoftware. Ausgeliefert wird über das Private Claude AI Gateway an alle Mitarbeiter, ab 2.500 €.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Plugin anfragen</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Nur ein Server für ein System?{" "}
              <InternalLink href="/managed-claude/integrationen/mcp-server-erstellen" variant="underline">
                MCP-Server erstellen lassen
              </InternalLink>
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <PriceCard>
              <PriceCard.Head>
                <PriceCard.Label>Plugin-Entwicklung</PriceCard.Label>
                <PriceCard.Price>
                  <PriceCard.Amount>ab 2.500 €</PriceCard.Amount>
                  <PriceCard.Unit>zzgl. USt., nach Aufwand</PriceCard.Unit>
                </PriceCard.Price>
              </PriceCard.Head>
              <PriceCard.Items>
                <PriceCard.Item>Ablauf und Systeme gemeinsam aufnehmen</PriceCard.Item>
                <PriceCard.Item>Skills für die Arbeitsweise Ihres Teams</PriceCard.Item>
                <PriceCard.Item>MCP-Server remote oder lokal als .mcpb</PriceCard.Item>
                <PriceCard.Item>Getestet in Cowork auf Windows und macOS</PriceCard.Item>
                <PriceCard.Item>Ausgerollt über das Gateway, auf Wunsch automatisch installiert</PriceCard.Item>
              </PriceCard.Items>
              <PriceCard.Note>Den Aufwand schätzen wir vorab. Bezahlung per Rechnung.</PriceCard.Note>
            </PriceCard>
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Wann es sich lohnt</IntroBox.PreHeadline>
          <IntroBox.Headline className="text-balance">Drei Gründe für ein eigenes Plugin</IntroBox.Headline>
          <IntroBox.Paragraph>
            Claude kann viel, aber nicht Ihre Abläufe und nicht Ihre Systeme. Ein Plugin bringt beides mit, für das ganze
            Team in derselben Fassung.
          </IntroBox.Paragraph>
        </IntroBox>
        <ProseColumns cols={3} className="mx-auto mt-10 max-w-6xl">
          <ProseColumns.Item title="Jeder macht es anders">
            Antwortschreiben, Angebote, Fristenkontrolle: Wenn jeder Mitarbeiter eigene Prompts baut, schwankt das
            Ergebnis. Skills schreiben fest, wie Ihr Team die Aufgabe erledigt, und Claude hält sich daran.
          </ProseColumns.Item>
          <ProseColumns.Item title="Das System fehlt">
            Für Microsoft 365 oder DATEV gibt es fertige Connectors. Für Ihre Kanzleisoftware, Ihr ERP oder Ihr DMS oft
            nicht. Dann bauen wir den MCP-Server, über den Claude das System sicher nutzt.
          </ProseColumns.Item>
          <ProseColumns.Item title="Die Daten bleiben auf dem Rechner">
            Akten auf dem Laufwerk, eine installierte Fachsoftware, eine Datenbank hinter der Firewall: Ein lokaler
            Server als .mcpb läuft auf dem Rechner der Person, ohne dass die Daten über einen weiteren Server gehen.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper>
        <SimpleGrid cols={2} className="items-center gap-12">
          <div>
            <IntroBox textCentered={false}>
              <IntroBox.PreHeadline>Was wir bauen</IntroBox.PreHeadline>
              <IntroBox.Headline>Skills, Server und alles, was dazugehört</IntroBox.Headline>
            </IntroBox>
            <Typo.List className="text-gray-600">
              <Typo.ListItem>
                <strong>Skills:</strong> Arbeitsanleitungen, die Claude selbst zieht, wenn die Aufgabe passt. Mit
                Vorlagen, Beispielen und Prüfschritten aus Ihrem Alltag.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Remote-MCP-Server:</strong> für Cloud-Systeme und eigene Schnittstellen, mit Anmeldung je Person
                und klar beschriebenen Werkzeugen wie „Mandant suchen“ statt „Zugriff auf die Datenbank“.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Lokale MCP-Server als .mcpb:</strong> für Laufwerke, Fachsoftware und Systeme hinter der
                Firewall, als Programmdatei je System, ohne Node oder Python auf den Rechnern.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Auslieferung:</strong> Bibliothek, Zuweisung an Personen, automatische Installation und
                Freigaben im Gateway eingerichtet.
              </Typo.ListItem>
            </Typo.List>
            <InternalLink href="/managed-claude/plugins">So verteilt das Gateway Plugins</InternalLink>
          </div>
          <div className="min-w-0">
            <LocalServersScreen sidebar={false} />
          </div>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <SimpleGrid cols={2} className="items-start gap-12">
          <div>
            <IntroBox textCentered={false} size="wide">
              <IntroBox.PreHeadline>Ablauf</IntroBox.PreHeadline>
              <IntroBox.Headline className="lg:text-4xl!">Vom Gespräch bis auf alle Rechner</IntroBox.Headline>
            </IntroBox>
            <Typo.Paragraph textColor="muted">
              Ein Plugin entsteht an einem echten Ablauf, nicht am Reißbrett. Wir fangen mit einer Gruppe an, die ihn
              täglich macht, und rollen erst aus, wenn es dort sitzt.
            </Typo.Paragraph>
          </div>
          <TimelineAsSteps>
            <TimelineAsStepsStep value={1}>
              <Typo.H3 className="mt-1!">Ablauf aufnehmen</Typo.H3>
              <Typo.Paragraph textColor="muted">
                Im Gespräch klären wir, welche Aufgabe das Plugin übernimmt, welche Systeme es braucht und wer es nutzt.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={2}>
              <Typo.H3 className="mt-1!">Schätzung</Typo.H3>
              <Typo.Paragraph textColor="muted">
                Sie bekommen den Umfang und den geschätzten Aufwand schriftlich, bevor wir anfangen.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={3}>
              <Typo.H3 className="mt-1!">Bauen und testen</Typo.H3>
              <Typo.Paragraph textColor="muted">
                Skills und Server entstehen mit Ihren Beispielen. Getestet wird in Cowork auf Windows und macOS.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={4}>
              <Typo.H3 className="mt-1!">Pilotgruppe</Typo.H3>
              <Typo.Paragraph textColor="muted">
                Eine kleine Bibliothek nur für die Pilotgruppe. Was dort auffällt, fließt in die nächste Version.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={5}>
              <Typo.H3 className="mt-1!">Ausrollen</Typo.H3>
              <Typo.Paragraph textColor="muted" spacing="none">
                Plugin in die Bibliothek für alle, auf Wunsch automatisch installiert. Spätere Versionen kommen nach
                etwa zehn Minuten auf allen Rechnern an.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
          </TimelineAsSteps>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Beispiele</IntroBox.PreHeadline>
          <IntroBox.Headline className="text-balance">So kann ein Plugin aussehen</IntroBox.Headline>
          <IntroBox.Paragraph>Drei typische Fälle, gekürzt. Ihr Plugin richtet sich nach Ihrem Ablauf.</IntroBox.Paragraph>
        </IntroBox>
        <ProseColumns cols={3} className="mx-auto mt-10 max-w-6xl">
          <ProseColumns.Item title="Steuerkanzlei: Mandantenpost">
            Skills für Antwortschreiben, Unterlagen anfordern und Bescheide prüfen. Ein lokaler Server liest die Akte
            auf dem Kanzlei-Laufwerk, der Microsoft-365-Connector legt den Entwurf in Outlook ab.
          </ProseColumns.Item>
          <ProseColumns.Item title="Anwaltskanzlei: Schriftsätze">
            Skills mit Aufbau, Zitierweise und Prüfschritten der Kanzlei. Ein lokaler Server sucht im Aktenordner nach
            Vorlagen und früheren Schriftsätzen zum selben Thema.
          </ProseColumns.Item>
          <ProseColumns.Item title="Großhandel: Angebote">
            Ein Skill rechnet Angebote nach Ihren Regeln für Staffeln und Rabatte. Ein MCP-Server liest Artikel, Preise
            und Bestände aus dem ERP, freigegeben nur zum Lesen.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Preis</IntroBox.PreHeadline>
          <IntroBox.Headline className="text-balance">Was den Aufwand bestimmt</IntroBox.Headline>
          <IntroBox.Paragraph>
            Ein Plugin startet bei 2.500 € zzgl. USt. Wie viel Arbeit darüber hinaus nötig ist, hängt an wenigen Fragen,
            die wir im ersten Gespräch klären.
          </IntroBox.Paragraph>
        </IntroBox>
        <ProseColumns cols={3} className="mx-auto mt-10 max-w-6xl">
          <ProseColumns.Item title="Braucht es einen eigenen Server?">
            Skills auf vorhandenen Connectors sind schnell gebaut. Ein eigener MCP-Server für ein System ohne Anbindung
            ist der größte Posten.
          </ProseColumns.Item>
          <ProseColumns.Item title="Lesen oder auch schreiben?">
            Nur lesen ist einfacher und sicherer. Schreibrechte brauchen mehr Prüfungen, etwa Rückfragen vor jeder
            Änderung.
          </ProseColumns.Item>
          <ProseColumns.Item title="Wie meldet man sich an?">
            Ohne Anmeldung, mit Schlüssel oder per Single Sign-on über Entra ID: Je nach System ist das ein kleiner oder
            ein großer Teil der Arbeit.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline className="text-balance">Passt eher etwas anderes?</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-6">
          <OfferCard
            href="/managed-claude/integrationen/mcp-server-erstellen"
            title="MCP-Server erstellen lassen"
            price="ab 1.000 €"
            description="Ein einzelner Server für ein System, von uns betrieben."
            linkLabel="Zum MCP-Server"
          />
          <OfferCard
            href="/managed-claude/plugins"
            title="Plugins im Gateway"
            description="Skills und Server selbst pflegen und an alle verteilen, auch automatisch."
            linkLabel="Zu den Plugins"
          />
          <OfferCard
            href="/blog/claude-plugins"
            title="Was sind Claude Plugins?"
            description="Bausteine, .mcpb und die Wege, Plugins im Unternehmen zu verteilen."
            linkLabel="Zum Artikel"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper bodyWidth="small" colorScheme="gray-light">
        <FaqContainer
          faqs={faqs}
          headline="Fragen zur Plugin-Entwicklung"
          intro="Was Geschäftsführung und IT vor dem ersten Plugin wissen wollen."
        />
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline className="text-balance">Welcher Ablauf soll Ihr erstes Plugin werden?</IntroBox.Headline>
          <IntroBox.Paragraph>
            Erzählen Sie uns in 30 Minuten, welche Aufgabe Ihr Team täglich Zeit kostet und welche Systeme dabei im Spiel
            sind. Danach bekommen Sie eine Schätzung mit Umfang und Aufwand.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="flex justify-center">
          <ContactButton size="lg">Plugin anfragen</ContactButton>
        </div>
      </ContentWrapper>
    </>
  );
}
