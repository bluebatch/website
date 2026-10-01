import type { Metadata } from "next";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, GeoSummary, ProseColumns, DataTable, FaqContainer } from "@/components/ui";
import { OfferCard } from "@/components/cards";
import { ConsultationCtaDefault } from "@/components/sections";
import { ContactButton } from "@/components/buttons";
import KostenRechner from "./kosten-rechner";

// ENTWURF (Branch anthropic-managed-service-provider): Gerüst für die
// Repositionierung auf Managed Claude, Inhalte werden noch geschärft.

export const metadata: Metadata = {
  title: "Preise Private Claude AI Gateway: Einrichtung, Tokens, Pakete | Bluebatch",
  description:
    "Preise für das Private Claude AI Gateway: Einrichtung 1.500 € einmalig, Modellkosten nach Verbrauch 1:1 ohne Aufschlag, Onboarding-Pakete 3.000 € und 8.000 €, DATEV MCP 100 € pro Monat, Outlook Connector 500 €.",
  openGraph: {
    title: "Preise Private Claude AI Gateway: Einrichtung, Tokens, Pakete",
    description:
      "Preise für das Private Claude AI Gateway: Einrichtung 1.500 € einmalig, Modellkosten nach Verbrauch 1:1 ohne Aufschlag, Onboarding-Pakete 3.000 € und 8.000 €, DATEV MCP 100 € pro Monat, Outlook Connector 500 €.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Preise%20f%C3%BCr%20Claude%20in%20Kanzlei%20und%20Unternehmen&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Preise für Claude in Kanzlei und Unternehmen",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/preise",
  },
};

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection bodyWidth="small">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Preise</IntroBox.PreHeadline>
        </IntroBox>
        <Typo.H1 className="text-center">Preise für Claude in Kanzlei und Unternehmen</Typo.H1>
        <GeoSummary align="center">
          Das Private Claude AI Gateway kostet einmalig 1.500 € für Vertrag, Tenant-Einrichtung und Anbindung ans Gateway. Danach zahlen Sie die Modellkosten nach Verbrauch, 1:1 ohne Aufschlag aus Ihrer AWS-Rechnung durchgereicht, zum Beispiel 2,60 € je Million Input-Tokens bei Claude Sonnet 5. Eine Lizenz pro Kopf gibt es nicht. Alle Preise zzgl. USt.
        </GeoSummary>
        <div className="flex justify-center">
          <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Einmalig und wiederkehrend</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-6">
          <OfferCard
            highlight
            href="/managed-claude/onboarding"
            price="1.500 € einmalig"
            title="Einrichtung"
            description="Vertrag, Tenant-Einrichtung und Anbindung ans Gateway: Gateway, Chat, SSO, Rollen, Protokoll und Limits, startklar übergeben. Wird mit Coaching-Paket S zu 50 %, mit Paket L zu 100 % angerechnet."
            linkLabel="Zum Ablauf"
          />
          <OfferCard
            href="/managed-claude/wie-es-funktioniert"
            price="nach Verbrauch"
            title="Modellkosten"
            description="Nach Verbrauch, 1:1 ohne Aufschlag aus Ihrer AWS-Rechnung durchgereicht. Wir verdienen nicht an Ihrem Verbrauch."
            linkLabel="Wie die Abrechnung läuft"
          />
          <OfferCard
            href="/contact"
            price="optional"
            title="Laufende Betreuung"
            description="Optional, als Monatspauschale, jederzeit kündbar. Kein Pflicht-Abo."
            linkLabel="Betreuung anfragen"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" id="rechner">
        <KostenRechner />
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Modellkosten nach Verbrauch</IntroBox.Headline>
          <IntroBox.Paragraph>
            Preise je Million Tokens. 1 Million Tokens entsprechen etwa 750.000 Wörtern.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="overflow-x-auto">
          <DataTable>
            <DataTable.Head>
              <DataTable.Row>
                <DataTable.HeaderCell>Modell</DataTable.HeaderCell>
                <DataTable.HeaderCell>Einsatz</DataTable.HeaderCell>
                <DataTable.HeaderCell>Input / Mio.</DataTable.HeaderCell>
                <DataTable.HeaderCell>Output / Mio.</DataTable.HeaderCell>
              </DataTable.Row>
            </DataTable.Head>
            <DataTable.Body>
              <DataTable.Row>
                <DataTable.Cell bold>Claude Opus 5.5</DataTable.Cell>
                <DataTable.Cell>Die harten Fälle: komplexe Analysen, Agenten</DataTable.Cell>
                <DataTable.Cell>6,35 €</DataTable.Cell>
                <DataTable.Cell>31,50 €</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Claude Opus 5</DataTable.Cell>
                <DataTable.Cell>Die harten Fälle: komplexe Analysen, Agenten</DataTable.Cell>
                <DataTable.Cell>6,35 €</DataTable.Cell>
                <DataTable.Cell>31,50 €</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Claude Sonnet 5</DataTable.Cell>
                <DataTable.Cell>Der Alltag: Schreiben, Prüfen, Chat</DataTable.Cell>
                <DataTable.Cell>2,60 €</DataTable.Cell>
                <DataTable.Cell>12,60 €</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Claude Haiku 4.5</DataTable.Cell>
                <DataTable.Cell>Einfaches: sortieren, extrahieren</DataTable.Cell>
                <DataTable.Cell>1,50 €</DataTable.Cell>
                <DataTable.Cell>6,50 €</DataTable.Cell>
              </DataTable.Row>
            </DataTable.Body>
          </DataTable>
        </div>
        <Typo.Paragraph className="mx-auto mt-6 max-w-3xl text-center text-gray-600">
          Die Tokenpreise unterliegen Kursschwankungen und können daher leicht variieren.
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Ein Gateway, eine Abrechnung, Limits pro Mitarbeiter und pro Agent</IntroBox.Headline>
          <IntroBox.Paragraph>
            Verbrauchsgenau, sichtbar pro Mitarbeiter und pro Agent, gedeckelt, wo Sie es wollen.
          </IntroBox.Paragraph>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Keine Lizenz pro Kopf">
            Sie zahlen, was benutzt wird, nicht, wer angelegt ist. Erfahrungsgemäß tragen 20 bis 30 % der Belegschaft den Großteil der Nutzung.
          </ProseColumns.Item>
          <ProseColumns.Item title="Modellkosten 1:1">
            Ohne Aufschlag aus Ihrer AWS-Rechnung durchgereicht. Wir verdienen nicht an Ihrem Verbrauch.
          </ProseColumns.Item>
          <ProseColumns.Item title="Alles in einer Abrechnung">
            Chat, Routinen, Agenten und Anbindungen: eine Rechnung, eine Auswertung.
          </ProseColumns.Item>
          <ProseColumns.Item title="Sichtbar pro Mitarbeiter">
            Wer nutzt was, wie viel: pro Person, Team und Anwendung.
          </ProseColumns.Item>
          <ProseColumns.Item title="Limits pro Mitarbeiter">
            Budget pro Person oder Team, mit Warnschwelle. Erreicht ist erreicht.
          </ProseColumns.Item>
          <ProseColumns.Item title="Limits pro Agent">
            Jeder Agent ist ein eigener Verbraucher mit eigenem Budget, auch selbst gebaute. Ein Agent in der Schleife kostet maximal sein Budget, der Chat der Mitarbeiter läuft normal weiter.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Anrechnung der Einrichtung</IntroBox.Headline>
          <IntroBox.Paragraph>
            Mit einem Coaching-Paket bekommen Sie die Einrichtung (1.500 €) ganz oder zur Hälfte zurück.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="overflow-x-auto">
          <DataTable>
            <DataTable.Head>
              <DataTable.Row>
                <DataTable.HeaderCell>Paket</DataTable.HeaderCell>
                <DataTable.HeaderCell>Umfang</DataTable.HeaderCell>
                <DataTable.HeaderCell>Preis</DataTable.HeaderCell>
                <DataTable.HeaderCell>Anrechnung Einrichtung</DataTable.HeaderCell>
                <DataTable.HeaderCell>Effektiv für die Einrichtung</DataTable.HeaderCell>
              </DataTable.Row>
            </DataTable.Head>
            <DataTable.Body>
              <DataTable.Row>
                <DataTable.Cell bold>Ohne Coaching</DataTable.Cell>
                <DataTable.Cell>Nur Einrichtung</DataTable.Cell>
                <DataTable.Cell>0 €</DataTable.Cell>
                <DataTable.Cell>0 %</DataTable.Cell>
                <DataTable.Cell>1.500 €</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Paket S</DataTable.Cell>
                <DataTable.Cell>3 Personentage</DataTable.Cell>
                <DataTable.Cell>3.000 €</DataTable.Cell>
                <DataTable.Cell>50 % (750 €)</DataTable.Cell>
                <DataTable.Cell>750 €</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Paket L</DataTable.Cell>
                <DataTable.Cell>8 Personentage</DataTable.Cell>
                <DataTable.Cell>8.000 €</DataTable.Cell>
                <DataTable.Cell>100 % (1.500 €)</DataTable.Cell>
                <DataTable.Cell>0 €</DataTable.Cell>
              </DataTable.Row>
            </DataTable.Body>
          </DataTable>
        </div>
        <Typo.Paragraph className="mx-auto mt-6 max-w-3xl text-center text-gray-600">
          Alle Preise zzgl. USt. Der Outlook Connector ist in beiden Paketen inklusive.
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Die Coaching-Pakete</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={2} className="gap-6">
          <OfferCard
            href="/managed-claude/coaching/paket-s"
            price="3.000 €"
            title="Paket S: 3 Personentage"
            description="KI-Kompetenzschulung, Grundlagen, erste Arbeitsanleitungen. Outlook Connector inklusive. 50 % der Einrichtung angerechnet."
            linkLabel="Zu Paket S"
          />
          <OfferCard
            highlight
            href="/managed-claude/coaching/paket-l"
            price="8.000 €"
            title="Paket L: 8 Personentage"
            description="Alles aus Paket S plus Kanzlei-Handbuch, Routinen und Skills. Outlook Connector inklusive. 100 % der Einrichtung angerechnet."
            linkLabel="Zu Paket L"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Add-ons: zubuchen, wenn der Alltag es verlangt</IntroBox.Headline>
          <IntroBox.Paragraph>
            Zwei Anbindungen, die Kanzleien am häufigsten brauchen. Agenten und weitere Anbindungen rechnen wir nach Aufwand ab, mit Schätzung vorab.
          </IntroBox.Paragraph>
        </IntroBox>
        <SimpleGrid cols={2} className="gap-6">
          <OfferCard
            href="/managed-claude/integrationen/datev"
            price="100 € / Monat"
            title="DATEV MCP (Beta)"
            description="Die KI fragt Ihren DATEV-Bestand direkt ab, über die von DATEV vorgesehenen Schnittstellen, lesend, mit Mandantentrennung und Protokoll."
            linkLabel="Zur DATEV-Anbindung"
          />
          <OfferCard
            href="/managed-claude/integrationen/microsoft"
            price="500 € einmalig"
            title="Outlook Connector"
            description="Posteingang, Kalender und Entwürfe direkt in Claude, die Grundlage für den Mail-Agenten. Inklusive bei Coaching-Paket S oder L."
            linkLabel="Zum Outlook Connector"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer
          headline="Fragen zu den Kosten"
          intro="Was bei der Kalkulation zuerst gefragt wird."
          faqs={[
            {
              "question": "Was ist im Einrichtungspreis enthalten?",
              "answer": "Vertrag, Tenant-Einrichtung und Anbindung ans Gateway: Gateway, Chat, SSO, Rollen, Protokoll und Verbrauchslimits, startklar übergeben. Festpreis 1.500 € zzgl. USt."
            },
            {
              "question": "Was kostet der Betrieb im Monat?",
              "answer": "Die Modellkosten nach Verbrauch, gedeckelt durch Limits pro Mitarbeiter und pro Agent. Eine Hausnummer nennen wir bewusst nicht: Nach dem Scoping rechnen wir mit Ihren echten Fallzahlen und schlagen Limits vor, mit denen die Zahl planbar wird."
            },
            {
              "question": "Binden wir uns für Jahre?",
              "answer": "Nein. Der Einstieg ist ein Festpreis, der Betrieb ist Verbrauch mit Deckel, alles Weitere entscheiden Sie einzeln. Die laufende Betreuung ist jederzeit kündbar."
            },
            {
              "question": "Was kosten Agenten und Anbindungen?",
              "answer": "Schritt 3 rechnen wir nach Aufwand ab, mit Schätzung vorab. Ob sich ein Agent lohnt, wird gerechnet, nicht vermutet."
            }
          ]}
        />
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Sie wollen eine planbare Zahl?</IntroBox.Headline>
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
