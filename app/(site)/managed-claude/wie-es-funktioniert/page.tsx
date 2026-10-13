import type { Metadata } from "next";
import { Ban, BookOpen, DoorOpen, Gauge, History, KeyRound, MapPin, Monitor, Plug, ScrollText, Users, Braces } from "lucide-react";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, ProseColumns, DataTable, FaqContainer } from "@/components/ui";
import { OfferCard } from "@/components/cards";
import { ContactButton, InternalLink } from "@/components/buttons";
import {
  Hero2Column,
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnCallToAction,
} from "@/components/heroes";
import IconTitle from "../icon-title";
import { ArchitekturGrafik, KonfigMock } from "./architektur-grafik";

const description =
  "Wie Claude über Amazon Bedrock in Frankfurt in Ihrem Konto läuft: SSO, Gateway mit Rechten und Protokoll, kein Training, AVV, § 203 StGB und § 62a StBerG.";

export const metadata: Metadata = {
  title: "AWS Bedrock Claude: Architektur, Datenschutz, Rechtsrahmen | Bluebatch",
  description,
  openGraph: {
    title: "AWS Bedrock Claude: Architektur, Datenschutz, Rechtsrahmen",
    description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=So%20l%C3%A4uft%20Claude%20%C3%BCber%20AWS%20Bedrock%20in%20Ihrem%20Konto&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "So läuft Claude über AWS Bedrock in Ihrem Konto",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/wie-es-funktioniert",
  },
};

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Wie es funktioniert</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>So läuft Claude über AWS Bedrock in Ihrem Konto</Hero2ColumnHeadline>
            <Hero2ColumnDescription geo>
              Beim Private Claude AI Gateway läuft Claude von Anthropic über AWS Bedrock in der Region Frankfurt, angebunden über Ihr eigenes Konto. Mitarbeiter melden sich per SSO in Claude Desktop an, jede Anfrage geht über das Gateway mit Rechten, Protokoll und Limits zu den Claude-Modellen auf Amazon Bedrock. § 203 StGB, § 43e BRAO, § 62a StBerG und Art. 28 DSGVO sind ab Tag 1 vertraglich abgedeckt.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
              <InternalLink href="/managed-claude/preise" className="self-center sm:ml-4">
                Preise ansehen
              </InternalLink>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <ArchitekturGrafik />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Amazon Bedrock liefert Claude, das Gateway den Arbeitsplatz</IntroBox.Headline>
          <IntroBox.Paragraph>
            Bedrock stellt die Claude-Modelle als Schnittstelle bereit. Damit alle Mitarbeiter damit arbeiten können, sicher und nachvollziehbar, sitzt das Gateway davor. Wir richten ein, Sie besitzen.
          </IntroBox.Paragraph>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title={<IconTitle icon={Users}>Anmeldung und Rollen</IconTitle>}>
            Anmeldung per SSO mit dem Firmenkonto. Admins sehen alles im Team, Mitglieder nutzen Claude und sehen den eigenen Verbrauch.
          </ProseColumns.Item>
          <ProseColumns.Item title={<IconTitle icon={Gauge}>Verbrauch und Limits</IconTitle>}>
            Kosten je Person und Modell, Budgets in Euro für die Organisation und je Person. Ist ein Limit erreicht, lehnt das Gateway weitere Anfragen ab.
          </ProseColumns.Item>
          <ProseColumns.Item title={<IconTitle icon={Plug}>Connectors</IconTitle>}>
            Microsoft 365, Websuche und eigene MCP-Server einmal zentral anbinden, für alle oder ausgewählte Personen.
          </ProseColumns.Item>
          <ProseColumns.Item title={<IconTitle icon={BookOpen}>Anweisungen und Skills</IconTitle>}>
            Firmenweite Anweisungen wie der Kanzlei-Stil und Skills, die Claude in jeder Unterhaltung mitbekommt.
          </ProseColumns.Item>
          <ProseColumns.Item title={<IconTitle icon={Monitor}>Claude Desktop zentral eingerichtet</IconTitle>}>
            Eine Datei verbindet Claude Desktop mit dem Gateway, danach holt sich die App ihre Konfiguration selbst.
          </ProseColumns.Item>
          <ProseColumns.Item title={<IconTitle icon={Braces}>Schnittstelle für eigene Apps</IconTitle>}>
            Agenten und eigene Anwendungen nutzen dasselbe Gateway per API, mit eigenem Budget je Anwendung.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Was vertraglich zugesichert ist</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title={<IconTitle icon={Ban}>Kein Training mit Ihren Daten</IconTitle>}>
            Vertraglich zugesichert, nicht nur behauptet.
          </ProseColumns.Item>
          <ProseColumns.Item title={<IconTitle icon={History}>Kein Verlauf beim Anbieter</IconTitle>}>
            Zero data retention: Anfragen werden beim Modellanbieter nicht gespeichert.
          </ProseColumns.Item>
          <ProseColumns.Item title={<IconTitle icon={MapPin}>Datenresidenz dokumentiert</IconTitle>}>
            Verarbeitung ausschließlich im Europäischen Wirtschaftsraum, Region Frankfurt.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Rechtliches Rahmenwerk</IntroBox.Headline>
          <IntroBox.Paragraph>
            Claude ohne Vertragsrahmen: Für § 203 StGB gibt es kein Agreement, die Verarbeitung ist nicht auf die EU beschränkt, und Connectoren leiten Daten teilweise über die USA. Bluebatch schließt diese Lücke.
          </IntroBox.Paragraph>
        </IntroBox>
        <DataTable>
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Thema</DataTable.HeaderCell>
              <DataTable.HeaderCell>Claude ohne Vertragsrahmen</DataTable.HeaderCell>
              <DataTable.HeaderCell>Mit dem Bluebatch-Gateway</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            <DataTable.Row>
              <DataTable.Cell bold>§ 203 StGB</DataTable.Cell>
              <DataTable.Cell>Kein Agreement, Verarbeitung von Mandantendaten nicht garantiert</DataTable.Cell>
              <DataTable.Cell bold>Vertraglich abgesicherter Rahmen</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Datenverarbeitung</DataTable.Cell>
              <DataTable.Cell>Nicht auf die EU beschränkt</DataTable.Cell>
              <DataTable.Cell bold>Ausschließlich im Europäischen Wirtschaftsraum</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Connectoren</DataTable.Cell>
              <DataTable.Cell>Teilweise über die USA</DataTable.Cell>
              <DataTable.Cell bold>Über das Gateway in Ihrem Konto</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>DSGVO</DataTable.Cell>
              <DataTable.Cell>Kein individueller AVV</DataTable.Cell>
              <DataTable.Cell bold>Sauberer AVV nach Art. 28 DSGVO</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Speicherung</DataTable.Cell>
              <DataTable.Cell>Verlauf beim Anbieter</DataTable.Cell>
              <DataTable.Cell bold>Zero data retention</DataTable.Cell>
            </DataTable.Row>
          </DataTable.Body>
        </DataTable>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>§ 203 StGB und § 62a StBerG, die Kurzfassung</IntroBox.Headline>
          <IntroBox.Paragraph>
            Zwei Ebenen, beide müssen erfüllt sein: § 203 StGB ist Strafrecht, § 62a StBerG Ihr Berufsrecht. Beide erlauben seit 2017 ausdrücklich, IT-Dienstleister einzubeziehen. Für Anwälte gilt dasselbe mit § 43e BRAO.
          </IntroBox.Paragraph>
        </IntroBox>
        <DataTable>
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Frage</DataTable.HeaderCell>
              <DataTable.HeaderCell>Antwort</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            <DataTable.Row>
              <DataTable.Cell bold>Was ausscheidet</DataTable.Cell>
              <DataTable.Cell>Consumer-KI: keine Verpflichtung des Anbieters, kein Geheimhaltungsschutz, kein kontrollierter Löschzyklus</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Was zulässig ist</DataTable.Cell>
              <DataTable.Cell>Dienstleister einbeziehen, soweit erforderlich, nach § 203 Abs. 3 S. 2 StGB, berufsrechtlich umgesetzt in § 62a StBerG</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Was das verlangt</DataTable.Cell>
              <DataTable.Cell>Sorgfältige Auswahl, Verpflichtung zur Verschwiegenheit in Textform mit Belehrung, Kontrolle der Unterauftragnehmer, besondere Anforderungen im Ausland</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Was wir liefern</DataTable.Cell>
              <DataTable.Cell>Verpflichtungserklärung, AV-Vertrag nach Art. 28 DSGVO, dokumentierte Maßnahmen, Verarbeitung in Frankfurt, Benennung aller Unterauftragnehmer</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Was bei Ihnen bleibt</DataTable.Cell>
              <DataTable.Cell>Die berufsrechtliche Bewertung und die Dokumentation Ihrer Auswahl. Wir liefern die Unterlagen, keine Rechtsberatung.</DataTable.Cell>
            </DataTable.Row>
          </DataTable.Body>
        </DataTable>
        <Typo.Paragraph className="mx-auto mt-6 max-w-3xl text-center text-gray-600">
          Der praktische Punkt: § 62a StBerG verlangt eine dokumentierte Auswahl. Das ist kein Hindernis, sondern eine Aufgabe, und Sie bekommen von uns die Unterlagen, mit denen sie erledigt ist.
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Kein Lock-in</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title={<IconTitle icon={KeyRound}>Alles gehört Ihnen</IconTitle>}>
            Konto, Zugänge, Kanzlei-Handbuch und Abläufe gehören Ihnen.
          </ProseColumns.Item>
          <ProseColumns.Item title={<IconTitle icon={DoorOpen}>Läuft ohne uns weiter</IconTitle>}>
            Wenn Sie uns morgen nicht mehr brauchen, läuft alles weiter.
          </ProseColumns.Item>
          <ProseColumns.Item title={<IconTitle icon={ScrollText}>Offene Standards</IconTitle>}>
            Anbindungen laufen über MCP und bleiben nutzbar, auch bei einem Wechsel des Clients.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper>
        <SimpleGrid cols={2} className="items-center gap-12">
          <div>
            <IntroBox textCentered={false} size="wide">
              <IntroBox.PreHeadline>Managed Claude Interface</IntroBox.PreHeadline>
              <IntroBox.Headline className="lg:text-4xl!">Zentral gesteuert, für jede Person nachvollziehbar</IntroBox.Headline>
              <IntroBox.Subline>
                Ordner-Freigaben, Netzwerk, gesperrte Werkzeuge, Connectors und Anweisungen legen Sie im Kundenportal fest. Welche Konfiguration eine Person in Claude Desktop tatsächlich bekommt, sehen Sie auf einen Blick.
              </IntroBox.Subline>
            </IntroBox>
            <InternalLink href="/managed-claude/zentrale-steuerung">Zum Managed Claude Interface</InternalLink>
          </div>
          <KonfigMock />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Was in der Private-Umgebung nicht geht</IntroBox.Headline>
          <IntroBox.Paragraph>
            Transparenz vorab: Diese Funktionen der öffentlichen Claude-App gibt es über das Gateway nicht.
          </IntroBox.Paragraph>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Speech to Text">
            Diktieren und Sprachmodus sind nicht verfügbar. Eingaben erfolgen per Text oder Dokument.
          </ProseColumns.Item>
          <ProseColumns.Item title="Mobile-App">
            Die mobile Claude-App kann nicht mit dem Gateway genutzt werden.
          </ProseColumns.Item>
          <ProseColumns.Item title="Design">
            Die Design-Funktionen von Claude sind nicht enthalten.
          </ProseColumns.Item>
          <ProseColumns.Item title="Chat-Speicherung">
            Chats liegen nur auf dem jeweiligen Endgerät und lassen sich nicht auf einem anderen Gerät abrufen.
          </ProseColumns.Item>
          <ProseColumns.Item title="Claude Marketplace">
            Standard-Apps aus dem Claude Marketplace, zum Beispiel der Google-Drive-Connector, sind nicht verfügbar.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Mehr zum Berufsrecht</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={2} className="gap-6">
          <OfferCard
            href="/branchen/steuerberater/private-ai/ki-steuerberater-62a-stberg"
            title="KI für Steuerberater nach § 62a StBerG"
            description="Vertragskette und Gateway für Steuerkanzleien im Detail."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/branchen/anwaelte/ki-anwaltskanzlei-43e-brao"
            title="KI für Anwaltskanzleien nach § 43e BRAO"
            description="Dieselbe Struktur für Anwaltskanzleien."
            linkLabel="Mehr erfahren"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer
          headline="Fragen zu Claude auf AWS Bedrock"
          intro="Was IT und Berufsträger vor dem Start wissen wollen."
          faqs={[
            {
              question: "Was ist AWS Bedrock?",
              answer: "Amazon Bedrock ist der Dienst von AWS, über den Unternehmen KI-Modelle verschiedener Anbieter per Schnittstelle nutzen, darunter Claude von Anthropic. Die Modelle laufen auf AWS-Infrastruktur in der gewählten Region, beim Private Claude AI Gateway in Frankfurt.",
            },
            {
              question: "Ist Claude auf AWS Bedrock dasselbe Claude wie bei claude.ai?",
              answer: "Es sind dieselben Modelle von Anthropic, also Opus, Sonnet und Haiku. Der Unterschied liegt im Weg: Über Bedrock laufen die Anfragen über AWS in Frankfurt statt über den Consumer-Dienst. Einige Funktionen der öffentlichen Claude-App, etwa die mobile App oder der Sprachmodus, gibt es in der Private-Umgebung nicht.",
            },
            {
              question: "Was passiert mit unseren Daten bei Bedrock Claude?",
              answer: "Kein Training mit Ihren Daten ist vertraglich zugesichert, beim Modellanbieter wird kein Verlauf gespeichert (zero data retention), und die Verarbeitung läuft im Europäischen Wirtschaftsraum. Alle Unterauftragnehmer sind benannt, der AV-Vertrag nach Art. 28 DSGVO liegt vor.",
            },
            {
              question: "Was leistet das Gateway, was Amazon Bedrock allein nicht kann?",
              answer: "Bedrock liefert das Modell als Schnittstelle. Das Gateway macht daraus einen Arbeitsplatz für alle Mitarbeiter: Anmeldung per SSO, Rollen, Protokoll, Limits in Euro je Person, Connectors wie Microsoft 365 und die zentrale Konfiguration von Claude Desktop.",
            },
            {
              question: "Brauchen wir für Claude auf AWS Bedrock eigenes AWS-Know-how?",
              answer: "Nein. Die Einrichtung übernehmen wir gemeinsam mit Ihrer IT, startklar in maximal einer Woche. Konto, Zugänge und Konfiguration gehören Ihnen, und wenn Sie uns nicht mehr brauchen, läuft alles weiter.",
            },
          ]}
        />
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Fragen zu Architektur oder Rechtsrahmen?</IntroBox.Headline>
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
