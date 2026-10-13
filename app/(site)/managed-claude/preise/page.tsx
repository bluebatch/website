import type { Metadata } from "next";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, GeoSummary, ProseColumns, DataTable, FaqContainer } from "@/components/ui";
import { OfferCard } from "@/components/cards";
import { ContactButton, InternalLink } from "@/components/buttons";
import { HeroStatBand } from "@/components/heroes";
import KostenRechner from "./kosten-rechner";
import { LimitsMock, ModellWahl, Rechenbeispiel } from "./preis-grafiken";

const description =
  "Was Claude im Unternehmen kostet: 1.500 € Einrichtung, keine Lizenz pro Kopf, Tokens ab 0,13 € je 1 Mio. Mit Kostenrechner, Preisliste und Coaching-Paketen.";

export const metadata: Metadata = {
  title: "Claude Kosten: Tokenpreise, Einrichtung und Pakete | Bluebatch",
  description,
  openGraph: {
    title: "Claude Kosten: Tokenpreise, Einrichtung und Pakete",
    description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Claude%20Kosten%20f%C3%BCr%20Kanzleien%20und%20Unternehmen&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Claude Kosten für Kanzleien und Unternehmen",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/preise",
  },
};

// Kundenpreise netto je 1 Mio. Tokens, Stand 12.10.2026
const TOKEN_PRICES = [
  { model: "Claude Opus 5.5", input: "5,15 €", output: "25,74 €", write5m: "6,44 €", write1h: "10,30 €", read: "0,26 €" },
  { model: "Claude Opus 5", input: "6,35 €", output: "31,50 €", write5m: "8,05 €", write1h: "12,87 €", read: "0,65 €" },
  { model: "Claude Sonnet 5.5", input: "2,60 €", output: "12,60 €", write5m: "3,22 €", write1h: "5,15 €", read: "0,13 €" },
  { model: "Claude Sonnet 5", input: "2,60 €", output: "12,60 €", write5m: "3,22 €", write1h: "5,15 €", read: "0,26 €" },
  { model: "Claude Sonnet 4.6", input: "3,87 €", output: "19,31 €", write5m: "4,83 €", write1h: "7,73 €", read: "0,39 €" },
  { model: "Claude Haiku 5.5", input: "0,13 €", output: "0,65 €", write5m: "0,17 €", write1h: "0,26 €", read: "0,02 €" },
  { model: "Claude Haiku 5.5, Prompt über 100K Tokens*", input: "0,65 €", output: "3,22 €", write5m: "0,81 €", write1h: "1,29 €", read: "0,07 €" },
  { model: "Claude Haiku 4.5", input: "1,50 €", output: "6,50 €", write5m: "1,61 €", write1h: "2,58 €", read: "0,13 €" },
];

const PRICE_COLUMNS = [
  { key: "input", label: "Input" },
  { key: "output", label: "Output" },
  { key: "write5m", label: "Cache schreiben 5 Min." },
  { key: "write1h", label: "Cache schreiben 1 Std." },
  { key: "read", label: "Cache lesen" },
] as const;

const CREDIT_ROWS = [
  { name: "Ohne Coaching", scope: "Nur Einrichtung", price: "0 €", credited: null, total: "1.500 €", totalNote: "mit Outlook 2.000 €" },
  { name: "Paket M", scope: "5 Personentage", price: "5.000 €", credited: "bis 2.000 €", total: "5.000 €", totalNote: null },
  { name: "Paket L", scope: "10 Personentage", price: "10.000 €", credited: "bis 2.000 €", total: "10.000 €", totalNote: null },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection bodyWidth="small">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Preise Managed Claude</IntroBox.PreHeadline>
        </IntroBox>
        <Typo.H1 className="text-center">Claude Kosten für Kanzleien und Unternehmen</Typo.H1>
        <GeoSummary align="center">
          Claude über das Private Claude AI Gateway von Bluebatch kostet einmalig 1.500 € für die Einrichtung. Danach zahlen Sie nur die Modellkosten nach Verbrauch, zum Beispiel 2,60 € je 1 Million Input-Tokens bei Claude Sonnet 5.5, ohne Lizenz pro Kopf. Mit Coaching-Paket M oder L werden Einrichtung und Outlook Connector voll angerechnet. Alle Preise zzgl. USt.
        </GeoSummary>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
          <InternalLink href="#rechner" resolve={false}>
            Kosten berechnen
          </InternalLink>
        </div>
        <HeroStatBand
          className="mt-12"
          stats={[
            { value: "1.500 €", label: "Einrichtung einmalig" },
            { value: "0 €", label: "Lizenz pro Kopf" },
            { value: "ab 0,13 €", label: "je 1 Mio. Tokens" },
            { value: "100 %", label: "Anrechnung mit Coaching" },
          ]}
        />
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" id="rechner">
        <KostenRechner />
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Claude Preise im Überblick: einmalig und laufend</IntroBox.Headline>
          <IntroBox.Paragraph>
            Ein Festpreis für den Start, danach Verbrauch. Alles Weitere entscheiden Sie einzeln, wenn der Alltag zeigt, was sich lohnt.
          </IntroBox.Paragraph>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-6">
          <OfferCard
            highlight
            href="/managed-claude/onboarding"
            price="1.500 € einmalig"
            title="Einrichtung"
            description="Vertrag, Tenant-Einrichtung und Anbindung ans Gateway: Chat, SSO, Rollen, Protokoll und Limits, startklar in maximal einer Woche. Mit Coaching-Paket M oder L zu 100 % angerechnet."
            linkLabel="Zum Ablauf"
          />
          <OfferCard
            href="/managed-claude/preise#modellkosten"
            price="nach Verbrauch"
            title="Modellkosten"
            description="Abgerechnet wird je 1 Million Tokens laut Preisliste, je Modell. Sichtbar pro Mitarbeiter und gedeckelt über Limits."
            linkLabel="Zur Preisliste"
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

      <ContentWrapper colorScheme="gray-light" id="modellkosten">
        <IntroBox textCentered>
          <IntroBox.Headline>Claude Token Kosten: die Preisliste je Modell</IntroBox.Headline>
          <IntroBox.Paragraph>
            Netto, je 1 Million Tokens, Stand Oktober 2026. Input ist alles, was Claude liest (Frage, Dokument, Anweisungen), Output ist die Antwort. Eine Seite deutscher Text sind grob 700 Tokens.
          </IntroBox.Paragraph>
        </IntroBox>
        <DataTable>
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell className="sticky left-0 z-20 min-w-44">Modell</DataTable.HeaderCell>
              {PRICE_COLUMNS.map((c) => (
                <DataTable.HeaderCell key={c.key} className="text-right">
                  {c.label}
                </DataTable.HeaderCell>
              ))}
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            {TOKEN_PRICES.map((row) => (
              <DataTable.Row key={row.model} className="odd:bg-white">
                <DataTable.Cell bold className="sticky left-0 z-10 bg-inherit">
                  {row.model}
                </DataTable.Cell>
                {PRICE_COLUMNS.map((c) => (
                  <DataTable.Cell key={c.key} className="whitespace-nowrap text-right tabular-nums">
                    {row[c.key]}
                  </DataTable.Cell>
                ))}
              </DataTable.Row>
            ))}
          </DataTable.Body>
        </DataTable>
        <div className="mx-auto mt-6 max-w-3xl space-y-2 text-center text-sm text-gray-600">
          <p className="text-xs text-gray-400 md:hidden">Tabelle seitlich wischen für die Cache-Preise.</p>
          <p>* Liegt der Prompt einer Anfrage über 100.000 Tokens, gilt für die ganze Anfrage dieser Preis.</p>
          <p>
            Cache: Teile, die in vielen Anfragen gleich bleiben, etwa lange Anweisungen oder ein Dokument, das Sie mehrfach befragen, hält Claude 5 Minuten oder 1 Stunde vor. Das Ablegen kostet etwas mehr als normaler Input, jedes weitere Lesen nur einen Bruchteil.
          </p>
          <p>Die Tokenpreise unterliegen Kursschwankungen und können daher leicht variieren.</p>
        </div>

        <SimpleGrid cols={2} className="mt-16 items-start gap-6">
          <div>
            <Typo.H3 className="mt-0! mb-4">Welches Modell wofür?</Typo.H3>
            <ModellWahl />
          </div>
          <div>
            <Typo.H3 className="mt-0! mb-4">Was kostet eine Aufgabe?</Typo.H3>
            <Rechenbeispiel />
          </div>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper>
        <SimpleGrid cols={2} className="items-center gap-12">
          <div>
            <IntroBox textCentered={false} size="wide">
              <IntroBox.PreHeadline>Verbrauch und Limits</IntroBox.PreHeadline>
              <IntroBox.Headline className="lg:text-4xl!">Claude Kosten pro Monat: sichtbar und gedeckelt</IntroBox.Headline>
              <IntroBox.Subline>
                Ein Gateway, eine Abrechnung. Im Kundenportal sehen Sie jeden Tag, wer wie viel verbraucht, und setzen Budgets, die das Gateway hart einhält.
              </IntroBox.Subline>
            </IntroBox>
            <ProseColumns cols={2} className="mt-8 gap-6!">
              <ProseColumns.Item title="Keine Lizenz pro Kopf">
                Sie zahlen, was benutzt wird, nicht, wer angelegt ist. Meist tragen 20 bis 30 % der Belegschaft den Großteil der Nutzung.
              </ProseColumns.Item>
              <ProseColumns.Item title="Sichtbar pro Mitarbeiter">
                Kosten und Tokens je Person, je Modell und je Zeitraum, alles in einer Auswertung.
              </ProseColumns.Item>
              <ProseColumns.Item title="Limits pro Mitarbeiter">
                Budget für die ganze Organisation und je Person, täglich, wöchentlich oder alle 30 Tage. Erreicht ist erreicht.
              </ProseColumns.Item>
              <ProseColumns.Item title="Limits pro Agent">
                Jeder Agent ist ein eigener Verbraucher mit eigenem Budget. Ein Agent in der Schleife kostet maximal sein Budget.
              </ProseColumns.Item>
            </ProseColumns>
          </div>
          <LimitsMock />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" id="coaching-pakete">
        <IntroBox textCentered>
          <IntroBox.Headline>Coaching-Pakete: Einrichtung und Outlook voll angerechnet</IntroBox.Headline>
          <IntroBox.Paragraph>
            Mit Paket M oder L bekommen Sie die Einrichtung (1.500 €) und den Outlook Connector (500 €) zu 100 % angerechnet, zusammen bis zu 2.000 €.
          </IntroBox.Paragraph>
        </IntroBox>
        <SimpleGrid cols={2} className="gap-6">
          <OfferCard
            href="/managed-claude/coaching/paket-m"
            price="5.000 €"
            title="Paket M: 5 Personentage"
            description="Schulung zu Modellen, App, Chat, Co-Work und Projekten, KI-Kompetenzschulung mit Zertifikat, erste Arbeitsanleitungen und Routinen, Grundgerüst für das Kanzlei-Handbuch. Einrichtung und Outlook Connector zu 100 % angerechnet."
            linkLabel="Zu Paket M"
          />
          <OfferCard
            highlight
            href="/managed-claude/coaching/paket-l"
            price="10.000 €"
            title="Paket L: 10 Personentage"
            description="Alles aus Paket M, dazu rund drei Monate Begleitung, ein fertiges Kanzlei-Handbuch, eine KI-Beauftragte oder ein KI-Beauftragter im Haus und Ihre KI-Strategie. Einrichtung und Outlook Connector zu 100 % angerechnet."
            linkLabel="Zu Paket L"
          />
        </SimpleGrid>
        <DataTable className="mt-10">
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Paket</DataTable.HeaderCell>
              <DataTable.HeaderCell className="text-right">Paketpreis</DataTable.HeaderCell>
              <DataTable.HeaderCell className="text-right">Angerechnet</DataTable.HeaderCell>
              <DataTable.HeaderCell className="text-right">Einmalig gesamt</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            {CREDIT_ROWS.map((row) => (
              <DataTable.Row key={row.name}>
                <DataTable.Cell>
                  <span className="block font-semibold text-gray-900">{row.name}</span>
                  <span className="block text-xs text-gray-500">{row.scope}</span>
                </DataTable.Cell>
                <DataTable.Cell className="whitespace-nowrap text-right tabular-nums">{row.price}</DataTable.Cell>
                <DataTable.Cell className={`whitespace-nowrap text-right tabular-nums ${row.credited ? "text-green-700" : ""}`}>
                  {row.credited ?? "0 €"}
                </DataTable.Cell>
                <DataTable.Cell className="whitespace-nowrap text-right tabular-nums">
                  <span className="block font-semibold text-gray-900">{row.total}</span>
                  {row.totalNote && <span className="block text-xs text-gray-500">{row.totalNote}</span>}
                </DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable.Body>
        </DataTable>
        <Typo.Paragraph className="mx-auto mt-6 max-w-3xl text-center text-gray-600">
          Einmalig gesamt = Einrichtung, Outlook Connector und Paket nach Anrechnung. Mit Paket M zahlen Sie für alles zusammen 5.000 €, mit Paket L 10.000 €. Alle Preise zzgl. USt.
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Add-ons: zubuchen, wenn der Alltag es verlangt</IntroBox.Headline>
          <IntroBox.Paragraph>
            Die Anbindungen, die Kanzleien am häufigsten brauchen. Agenten und weitere Anbindungen rechnen wir nach Aufwand ab, mit Schätzung vorab.
          </IntroBox.Paragraph>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-6">
          <OfferCard
            href="/managed-claude/integrationen/microsoft"
            price="500 € einmalig"
            title="Outlook Connector"
            description="Posteingang, Kalender und Entwürfe direkt in Claude, die Grundlage für den Mail-Agenten. Mit Coaching-Paket M oder L voll angerechnet."
            linkLabel="Zum Outlook Connector"
          />
          <OfferCard
            href="/managed-claude/integrationen/datev"
            price="100 € / Monat"
            title="DATEV MCP (Beta)"
            description="Claude fragt Ihren DATEV-Bestand direkt ab, über die von DATEV vorgesehenen Schnittstellen, lesend, mit Mandantentrennung und Protokoll."
            linkLabel="Zur DATEV-Anbindung"
          />
          <OfferCard
            href="/managed-claude/integrationen/websearch"
            price="inklusive"
            title="Websuche (Brave)"
            description="Claude recherchiert im Netz, standardmäßig dabei. Der Admin legt fest, ob Claude vor jeder Suche nachfragt."
            linkLabel="Zur Websuche"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer
          headline="Fragen zu den Claude Kosten"
          intro="Was bei der Kalkulation zuerst gefragt wird."
          faqs={[
            {
              question: "Was kostet Claude pro Monat?",
              answer: "Das hängt vom Verbrauch ab, nicht von der Zahl der Köpfe. Als Erfahrungswert rechnen wir mit etwa 40 € im Monat für normale Nutzer, 100 € für Heavy User und 300 € für Experten, die viel mit Opus und Agenten arbeiten. Über Limits pro Mitarbeiter und für die ganze Organisation legen Sie die Obergrenze selbst fest.",
            },
            {
              question: "Wie setzen sich die Claude Preise bei Bluebatch zusammen?",
              answer: "Aus drei Teilen: Einrichtung des Gateways einmalig 1.500 €, Modellkosten nach Verbrauch laut Preisliste je 1 Million Tokens und, wenn Sie wollen, Coaching und Add-ons. Mit Coaching-Paket M (5.000 €) oder L (10.000 €) werden Einrichtung und Outlook Connector zu 100 % angerechnet. Alle Preise zzgl. USt.",
            },
            {
              question: "Was kosten Tokens bei Claude?",
              answer: "Mit Claude Sonnet 5.5 kosten 1 Million Input-Tokens 2,60 € und 1 Million Output-Tokens 12,60 €. Eine Mail mit Verlauf zusammenzufassen kostet damit knapp 1 Cent. Haiku 5.5 ist rund zwanzigmal günstiger, Opus 5.5 etwa doppelt so teuer wie Sonnet 5.5.",
            },
            {
              question: "Was ist der Unterschied zu den Kosten von Claude Team oder Claude Enterprise?",
              answer: "Claude Team und Claude Enterprise sind Abos direkt bei Anthropic und werden pro Kopf und Monat abgerechnet, auch für Kollegen, die Claude kaum nutzen. Über das Gateway zahlen Sie keine Lizenz pro Kopf, sondern die Tokens, die tatsächlich verbraucht werden. Dazu kommt der Rahmen für Kanzleien: eigenes Konto, AWS Frankfurt, Unterlagen für § 203 StGB und § 62a StBerG.",
            },
            {
              question: "Was kostet Claude Cowork?",
              answer: "Cowork ist in Claude Desktop enthalten und kostet über das Gateway keine eigene Lizenz. Abgerechnet werden die Tokens, die Cowork bei der Arbeit verbraucht. Weil Cowork Aufgaben in mehreren Schritten erledigt und dabei Dateien liest, liegt der Verbrauch pro Aufgabe höher als bei einer Chat-Frage. Die Limits pro Person gelten auch hier.",
            },
            {
              question: "Binden wir uns für Jahre?",
              answer: "Nein. Der Einstieg ist ein Festpreis, der Betrieb ist Verbrauch mit Deckel, alles Weitere entscheiden Sie einzeln. Die laufende Betreuung ist optional und jederzeit kündbar.",
            },
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
    </>
  );
}
