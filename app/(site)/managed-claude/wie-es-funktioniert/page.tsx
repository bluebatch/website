import type { Metadata } from "next";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, GeoSummary, ProseColumns, DataTable } from "@/components/ui";
import { OfferCard } from "@/components/cards";
import { ConsultationCtaDefault } from "@/components/sections";
import { ContactButton } from "@/components/buttons";

// ENTWURF (Branch anthropic-managed-service-provider): Gerüst für die
// Repositionierung auf Managed Claude, Inhalte werden noch geschärft.

export const metadata: Metadata = {
  title: "Wie das Private Claude AI Gateway funktioniert | Bluebatch",
  description:
    "Architektur und Rechtsrahmen des Private Claude AI Gateway: Ihr Konto, SSO und Rollen, Claude über AWS Bedrock Frankfurt, zero data retention, AVV nach Art. 28 DSGVO, § 203 StGB, § 43e BRAO und § 62a StBerG.",
  openGraph: {
    title: "Wie das Private Claude AI Gateway funktioniert",
    description:
      "Architektur und Rechtsrahmen des Private Claude AI Gateway: Ihr Konto, SSO und Rollen, Claude über AWS Bedrock Frankfurt, zero data retention, AVV nach Art. 28 DSGVO, § 203 StGB, § 43e BRAO und § 62a StBerG.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Wie%20das%20Private%20Claude%20AI%20Gateway%20funktioniert&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Wie das Private Claude AI Gateway funktioniert",
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
      <ContentWrapper isFirstSection bodyWidth="small">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Wie es funktioniert</IntroBox.PreHeadline>
        </IntroBox>
        <Typo.H1 className="text-center">Wie das Private Claude AI Gateway funktioniert</Typo.H1>
        <GeoSummary align="center">
          Beim Private Claude AI Gateway melden sich Mitarbeiter per SSO an und arbeiten in der Claude-App mit Chat, Co-Work und Projekten. Jede Anfrage läuft über das Gateway in Ihrem eigenen Konto zu Claude auf AWS Bedrock in Frankfurt, mit dedizierter Anbindung statt geteiltem Consumer-Dienst. § 203 StGB, § 43e BRAO, § 62a StBerG und Art. 28 DSGVO sind ab Tag 1 vertraglich abgedeckt.
        </GeoSummary>
        <div className="flex justify-center">
          <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Ihr Konto: wir richten ein, Sie besitzen</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Mitarbeiter">
            Anmeldung per SSO, Rollen und Rechte je Team. Jeder sieht nur, was seine Rolle sehen darf.
          </ProseColumns.Item>
          <ProseColumns.Item title="Ihre App">
            Chat, Co-Work und Projekte. Verlauf, Dokumente und Protokoll bleiben in Ihrer Umgebung.
          </ProseColumns.Item>
          <ProseColumns.Item title="AWS Bedrock, Region Frankfurt">
            Dedizierte Anbindung, kein geteilter Consumer-Dienst. Anthropic Claude über AWS.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Was vertraglich zugesichert ist</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Kein Training mit Ihren Daten">
            Vertraglich zugesichert, nicht nur behauptet.
          </ProseColumns.Item>
          <ProseColumns.Item title="Kein Verlauf beim Anbieter">
            Zero data retention: Anfragen werden beim Modellanbieter nicht gespeichert.
          </ProseColumns.Item>
          <ProseColumns.Item title="Datenresidenz dokumentiert">
            Verarbeitung ausschließlich im Europäischen Wirtschaftsraum.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Rechtliches Rahmenwerk</IntroBox.Headline>
          <IntroBox.Paragraph>
            Claude ohne Vertragsrahmen: Für § 203 StGB gibt es kein Agreement, die Verarbeitung ist nicht auf die EU beschränkt, und Connectoren leiten Daten teilweise über die USA. Bluebatch schließt diese Lücke.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="overflow-x-auto">
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
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>§ 203 StGB und § 62a StBerG, die Kurzfassung</IntroBox.Headline>
          <IntroBox.Paragraph>
            Zwei Ebenen, beide müssen erfüllt sein: § 203 StGB ist Strafrecht, § 62a StBerG Ihr Berufsrecht. Beide erlauben seit 2017 ausdrücklich, IT-Dienstleister einzubeziehen. Für Anwälte gilt dasselbe mit § 43e BRAO.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="overflow-x-auto">
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
        </div>
        <Typo.Paragraph className="mx-auto mt-6 max-w-3xl text-center text-gray-600">
          Der praktische Punkt: § 62a StBerG verlangt eine dokumentierte Auswahl. Das ist kein Hindernis, sondern eine Aufgabe, und Sie bekommen von uns die Unterlagen, mit denen sie erledigt ist.
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Kein Lock-in</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Alles gehört Ihnen">
            Konto, Zugänge, Kanzlei-Handbuch und Abläufe gehören Ihnen.
          </ProseColumns.Item>
          <ProseColumns.Item title="Läuft ohne uns weiter">
            Wenn Sie uns morgen nicht mehr brauchen, läuft alles weiter.
          </ProseColumns.Item>
          <ProseColumns.Item title="Offene Standards">
            Anbindungen laufen über MCP und bleiben nutzbar, auch bei einem Wechsel des Clients.
          </ProseColumns.Item>
        </ProseColumns>
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

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
