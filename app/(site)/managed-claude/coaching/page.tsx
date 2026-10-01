import type { Metadata } from "next";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, GeoSummary, ProseColumns, TimelineAsSteps, TimelineAsStepsStep, DataTable } from "@/components/ui";
import { OfferCard } from "@/components/cards";
import { ConsultationCtaDefault } from "@/components/sections";
import { ContactButton } from "@/components/buttons";

// ENTWURF (Branch anthropic-managed-service-provider): Gerüst für die
// Repositionierung auf Managed Claude, Inhalte werden noch geschärft.

export const metadata: Metadata = {
  title: "Coaching und Kanzlei-Handbuch: Schritt 2 mit Claude | Bluebatch",
  description:
    "Coaching für das Private Claude AI Gateway: Schulung, Kanzlei-Handbuch, Skills und Routinen an Ihren echten Fällen, mit zertifizierter KI-Kompetenzschulung nach Art. 4 EU AI Act. Paket S 3.000 €, Paket L 8.000 €.",
  openGraph: {
    title: "Coaching und Kanzlei-Handbuch: Schritt 2 mit Claude",
    description:
      "Coaching für das Private Claude AI Gateway: Schulung, Kanzlei-Handbuch, Skills und Routinen an Ihren echten Fällen, mit zertifizierter KI-Kompetenzschulung nach Art. 4 EU AI Act. Paket S 3.000 €, Paket L 8.000 €.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Coaching%3A%20das%20Team%20wird%20gut%2C%20das%20Wissen%20bleibt%20im%20Haus&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Coaching: das Team wird gut, das Wissen bleibt im Haus",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/coaching",
  },
};

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection bodyWidth="small">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Schritt 2 · Coaching</IntroBox.PreHeadline>
        </IntroBox>
        <Typo.H1 className="text-center">Coaching: das Team wird gut, das Wissen bleibt im Haus</Typo.H1>
        <GeoSummary align="center">
          Das Coaching ist Schritt 2 des Private Claude AI Gateway: Bluebatch erklärt Modelle, App, Chat, Co-Work und Projekte und baut mit Ihrem Team Arbeitsanleitungen, Routinen und das Kanzlei-Handbuch an echten Fällen. Inklusive zertifizierter KI-Kompetenzschulung nach Art. 4 EU AI Act. Paket S kostet 3.000 €, Paket L 8.000 €, die Einrichtung wird angerechnet.
        </GeoSummary>
        <div className="flex justify-center">
          <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Zwei Coaching-Pakete, die Einrichtung wird angerechnet</IntroBox.Headline>
          <IntroBox.Paragraph>
            3 oder 8 Personentage. Je mehr Coaching, desto mehr der Einrichtung (1.500 €) bekommen Sie zurück. Alle Preise zzgl. USt.
          </IntroBox.Paragraph>
        </IntroBox>
        <SimpleGrid cols={2} className="gap-6">
          <OfferCard
            href="/managed-claude/coaching/paket-s"
            price="3.000 €"
            title="Paket S: 3 Personentage"
            description="KI-Kompetenzschulung, Grundlagen und erste Arbeitsanleitungen. Outlook Connector inklusive. 50 % der Einrichtung werden angerechnet."
            linkLabel="Zu Paket S"
          />
          <OfferCard
            highlight
            href="/managed-claude/coaching/paket-l"
            price="8.000 €"
            title="Paket L: 8 Personentage"
            description="Alles aus Paket S plus Kanzlei-Handbuch, Routinen und Skills. Outlook Connector inklusive. 100 % der Einrichtung werden angerechnet."
            linkLabel="Zu Paket L"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Schulung und Coaching: was wir erklären, was wir gemeinsam bauen</IntroBox.Headline>
          <IntroBox.Paragraph>
            Schritt 2 hat zwei Hälften: In der einen erklären wir, was es gibt. In der anderen legen wir es gemeinsam an, an Ihren echten Fällen, nicht an Übungsbeispielen.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="overflow-x-auto">
          <DataTable>
            <DataTable.Head>
              <DataTable.Row>
                <DataTable.HeaderCell>Die Grundlagen</DataTable.HeaderCell>
                <DataTable.HeaderCell>Was wir erklären</DataTable.HeaderCell>
                <DataTable.HeaderCell>Was wir gemeinsam machen</DataTable.HeaderCell>
              </DataTable.Row>
            </DataTable.Head>
            <DataTable.Body>
              <DataTable.Row>
                <DataTable.Cell bold>KI-Kompetenzschulung (Art. 4 EU AI Act)</DataTable.Cell>
                <DataTable.Cell>Was KI kann und was nicht, welche Pflichten Sie als Betreiber treffen, wo der Berufsträger zeichnet</DataTable.Cell>
                <DataTable.Cell bold>Alle Mitarbeiter durchlaufen die Schulung und erhalten ein Zertifikat, der Nachweis wird prüfbar abgelegt</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Die Modelle</DataTable.Cell>
                <DataTable.Cell>Ein schnelles für Einfaches, ein Standardmodell für den Alltag, ein starkes für schwierige Fälle</DataTable.Cell>
                <DataTable.Cell bold>Wir legen fest, welches Modell bei Ihnen für welche Aufgabe voreingestellt ist</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Die App</DataTable.Cell>
                <DataTable.Cell>Wie Anmeldung, Oberfläche, Rechte und Ablage zusammenhängen</DataTable.Cell>
                <DataTable.Cell bold>Wir richten Ihre Teams und Rollen ein und räumen die Oberfläche auf</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Chat</DataTable.Cell>
                <DataTable.Cell>Eine Frage, eine Antwort. Der Einstieg für jeden Mitarbeiter</DataTable.Cell>
                <DataTable.Cell bold>Jeder im Team führt seine ersten echten Vorgänge durch, begleitet</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Co-Work</DataTable.Cell>
                <DataTable.Cell>Der Text steht neben dem Gespräch, einzelne Abschnitte werden gezielt überarbeitet</DataTable.Cell>
                <DataTable.Cell bold>Wir schreiben ein echtes Schriftstück von der ersten bis zur fertigen Fassung</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Projekte</DataTable.Cell>
                <DataTable.Cell>Ein Arbeitsbereich pro Mandat oder Thema, mit Unterlagen, Zusammenhang und Anleitung</DataTable.Cell>
                <DataTable.Cell bold>Wir legen die ersten Projekte an und entscheiden den Zuschnitt: pro Mandant, Vorgang oder Team</DataTable.Cell>
              </DataTable.Row>
            </DataTable.Body>
          </DataTable>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Fünf Bausteine: aus Nutzung wird ein System</IntroBox.Headline>
        </IntroBox>
        <div className="overflow-x-auto">
          <DataTable>
            <DataTable.Head>
              <DataTable.Row>
                <DataTable.HeaderCell>Baustein</DataTable.HeaderCell>
                <DataTable.HeaderCell>Was wir erklären</DataTable.HeaderCell>
                <DataTable.HeaderCell>Was wir gemeinsam machen</DataTable.HeaderCell>
              </DataTable.Row>
            </DataTable.Head>
            <DataTable.Body>
              <DataTable.Row>
                <DataTable.Cell bold>Arbeitsanleitungen (Skills)</DataTable.Cell>
                <DataTable.Cell>Eine aufgeschriebene Arbeitsweise, die die KI bei Bedarf lädt: die Kapitel Ihres Handbuchs</DataTable.Cell>
                <DataTable.Cell bold>Wir schreiben die ersten Anleitungen zusammen. Sie diktieren die Fachlichkeit, wir bringen sie in Form</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Routinen</DataTable.Cell>
                <DataTable.Cell>Abläufe, die immer gleich laufen: auf Knopfdruck oder zu einem festen Zeitpunkt</DataTable.Cell>
                <DataTable.Cell bold>Wir legen die ersten Routinen an, zum Beispiel die Montagsübersicht, die heute jemand von Hand baut</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Anbindungen (MCP-Server)</DataTable.Cell>
                <DataTable.Cell>Die Verbindung zu Ihren Systemen, damit die KI nachfragen kann statt zu raten</DataTable.Cell>
                <DataTable.Cell bold>Wir gehen durch, welche Systeme sich lohnen, und nutzen die erste Anbindung im Alltag</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Plugins</DataTable.Cell>
                <DataTable.Cell>Fertige Pakete, die die App um ein Thema erweitern: Anleitungen und Werkzeuge im Bündel</DataTable.Cell>
                <DataTable.Cell bold>Wir richten die passenden Pakete ein und zeigen, wie Sie eigene daraus machen</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Die Ablage</DataTable.Cell>
                <DataTable.Cell>Zwei Ebenen: das Handbuch mit Anleitungen und Routinen, die Projekte mit den Unterlagen</DataTable.Cell>
                <DataTable.Cell bold>Wir bauen beide Strukturen zusammen auf, damit sie in einem Jahr noch benutzbar sind</DataTable.Cell>
              </DataTable.Row>
            </DataTable.Body>
          </DataTable>
        </div>
        <Typo.Paragraph className="mx-auto mt-6 max-w-3xl text-center text-gray-600">
          Der Unterschied zu einer Schulung, die Sie sonst buchen: Danach haben Ihre Leute nicht etwas gehört, sie haben etwas gebaut, das im Haus bleibt.
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Drei Monate Coaching</IntroBox.Headline>
        </IntroBox>
        <div className="mx-auto max-w-3xl">
          <TimelineAsSteps>
            <TimelineAsStepsStep value={1}>
              <Typo.H3 className="mt-2!">Monat 1: Grundlagen</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Modelle, App, Chat, Co-Work und Projekte, inklusive KI-Kompetenzschulung nach Art. 4 EU AI Act.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={2}>
              <Typo.H3 className="mt-2!">Monat 2: Gemeinsam bauen</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Die ersten Arbeitsanleitungen und Routinen entstehen an echten Fällen.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={3}>
              <Typo.H3 className="mt-2!">Monat 3: Selbst weitermachen</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Ihre Leute schreiben, wir lesen gegen. Das Team baut selbst aus, die Ablage steht. Zertifikat je Mitarbeiter über die KI-Kompetenzschulung.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
          </TimelineAsSteps>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Die zertifizierte KI-Kompetenzschulung nach Art. 4 EU AI Act</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Warum">
            Art. 4 verpflichtet Betreiber seit Februar 2025, die KI-Kompetenz des Personals sicherzustellen, unabhängig vom Werkzeug und auch dann, wenn heute nur privat mit KI gearbeitet wird.
          </ProseColumns.Item>
          <ProseColumns.Item title="Für wen">
            Alle Mitarbeiter, die mit der KI arbeiten, nicht nur die Berufsträger.
          </ProseColumns.Item>
          <ProseColumns.Item title="Inhalt">
            Funktionsweise und Grenzen, Umgang mit Mandantendaten, Erkennen falscher Ergebnisse, Dokumentation, Zuständigkeit und Freigabe.
          </ProseColumns.Item>
          <ProseColumns.Item title="Ergebnis">
            Ein Zertifikat je Mitarbeiter als Schulungsnachweis, plus Teilnehmerliste für Ihre Ablage.
          </ProseColumns.Item>
          <ProseColumns.Item title="Wofür der Nachweis taugt">
            Belegbar gegenüber Kammer, Mandanten und Versicherer. Ein Schulungsnachweis, kein amtliches Zertifikat, und das sagen wir bewusst so.
          </ProseColumns.Item>
          <ProseColumns.Item title="Wenn neue Leute kommen">
            Die Unterlagen bleiben im Kanzlei-Handbuch. Neue Mitarbeiter werden nachgeschult, ohne dass Sie uns dafür brauchen.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Welches Paket passt?</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={2} className="gap-6">
          <OfferCard
            href="/managed-claude/coaching/paket-s"
            price="3.000 €"
            title="Paket S"
            description="Für den soliden Start: Grundlagen, Kompetenzschulung, erste Anleitungen."
            linkLabel="Zu Paket S"
          />
          <OfferCard
            highlight
            href="/managed-claude/coaching/paket-l"
            price="8.000 €"
            title="Paket L"
            description="Für ein System, das bleibt: Kanzlei-Handbuch, Routinen und Skills."
            linkLabel="Zu Paket L"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Welches Coaching passt zu Ihrem Team?</IntroBox.Headline>
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
