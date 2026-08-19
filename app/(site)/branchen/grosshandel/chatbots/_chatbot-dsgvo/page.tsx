import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ogImages } from "@/lib/og";
import ContentWrapper from "@/components/layout/content-wrapper";
import SimpleGrid from "@/components/layout/simple-grid";
import Typo from "@/components/ui/typo";
import GeoSummary from "@/components/ui/geo-summary";
import IntroBox from "@/components/ui/intro-box";
import DataTable from "@/components/ui/data-table";
import NumberedList from "@/components/ui/numbered-list";
import ProseColumns, { ProseColumnsItem } from "@/components/ui/prose-columns";
import ComplianceNoticeBox from "@/components/ui/compliance-notice-box";
import { FaqContainer } from "@/components/ui/faqs";
import Hero2Column, {
  Hero2ColumnCallToAction,
  Hero2ColumnDescription,
  Hero2ColumnHeadline,
  Hero2ColumnImage,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnTextColumn,
} from "@/components/heroes/hero-2-column";
import HeroStatBand from "@/components/heroes/hero-stat-band";
import SimpleCard from "@/components/cards/simple-card";
import ComparisonCard, {
  AfterCard,
  BeforeCard,
  ComparisonFooter,
  ComparisonHeadline,
  ComparisonList,
  ComparisonListItem,
} from "@/components/cards/comparison-card";
import CrossSellGrid from "@/components/sections/cross-sell-grid";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import ContactButton from "@/components/buttons/contact-button";

export const metadata: Metadata = {
  title: "Chatbot DSGVO-konform: Pflichten, AI Act, ERP-Anbindung | Bluebatch",
  description:
    "Was ein DSGVO-konformer Chatbot wirklich braucht: die zehn Pflichten, die AI-Act-Transparenzpflicht seit dem 2. August 2026 und der Sonderfall Chatbot mit ERP-Zugriff.",
  openGraph: {
    title: "Chatbot DSGVO-konform betreiben, auch mit ERP-Anbindung",
    description:
      "Die zehn Pflichten, die AI-Act-Transparenzpflicht seit August 2026 und der Sonderfall Chatbot mit ERP-Zugriff, mit Zahlen für beide Betriebswege.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages("Chatbot DSGVO-konform betreiben", "Datenschutz"),
  },
  alternates: {
    canonical: "/branchen/grosshandel/chatbots/chatbot-dsgvo",
  },
};

const faqs = [
  {
    question: "Ist ein Chatbot automatisch DSGVO-konform, wenn der Anbieter in der EU sitzt?",
    answer:
      "Nein. Der EU-Serverstandort löst nur den Drittlandtransfer nach Art. 44 ff. DSGVO. Rechtsgrundlage, Informationspflicht, Auftragsverarbeitungsvertrag, Löschkonzept und die Frage, ob Ihre Eingaben zum Training verwendet werden, bleiben unabhängig davon offen. Ein EU-Rechenzentrum ist eine notwendige, keine hinreichende Bedingung.",
  },
  {
    question: "Muss ich kennzeichnen, dass der Nutzer mit einer KI spricht?",
    answer:
      "Ja. Artikel 50 der KI-Verordnung gilt seit dem 2. August 2026 und verlangt, dass Menschen vor Beginn der Interaktion erfahren, dass sie mit einem KI-System kommunizieren. Ein Satz zu Beginn des Chats reicht in der Regel aus. Die Pflicht entfällt nur, wenn das aus dem Kontext für eine verständige Person ohnehin offensichtlich ist, und darauf sollten Sie sich nicht verlassen.",
  },
  {
    question: "Wie hoch ist das Bußgeld, wenn die Kennzeichnung fehlt?",
    answer:
      "Verstöße gegen Artikel 50 fallen unter Artikel 99 Absatz 4 der KI-Verordnung: bis zu 15 Millionen Euro oder 3 Prozent des weltweiten Jahresumsatzes, je nachdem, welcher Betrag höher ist. Die häufig zitierten 35 Millionen Euro beziehungsweise 7 Prozent gelten für verbotene Praktiken nach Artikel 5 und damit nicht für einen Kundenchat. Für kleine und mittlere Unternehmen gilt nach Artikel 99 Absatz 6 der jeweils niedrigere Betrag.",
  },
  {
    question: "Brauche ich eine Einwilligung, oder reicht berechtigtes Interesse?",
    answer:
      "Für einen Chatbot, der Sachfragen beantwortet und die Konversation nach kurzer Frist löscht, trägt in der Regel das berechtigte Interesse nach Art. 6 Abs. 1 lit. f DSGVO. Sobald der Chat gespeichert, mit einem Kundenkonto verknüpft, für Marketing ausgewertet oder an Dritte weitergegeben wird, brauchen Sie eine Einwilligung. Die Frage entscheidet sich am Verwendungszweck, nicht an der Technik.",
  },
  {
    question: "Was ändert sich, wenn der Chatbot an das ERP angebunden ist?",
    answer:
      "Der Umfang. Ein Bot auf öffentlichen Website-Texten verarbeitet die Daten des Besuchers. Ein Bot mit ERP-Zugriff verarbeitet zusätzlich Kunden- und Auftragsdaten aus dem Bestandssystem, also Daten von Personen, die gerade gar nicht chatten. Damit brauchen Sie eine Zweckbindung für diesen Zugriff, ein Berechtigungskonzept, das die ERP-Rechte des Nutzers durchreicht, und Art.-32-Maßnahmen für die Verbindung selbst.",
  },
  {
    question: "Wann muss das Sprachmodell im eigenen Haus laufen?",
    answer:
      "Wenn Sie den Modellbetreiber nicht als weiteren Auftragsverarbeiter in die Kette nehmen wollen oder dürfen. Das ist der Fall bei Gesundheits-, Bonitäts- oder Personaldaten, bei Kundenverträgen mit ausdrücklichem Verbot der Weitergabe an Unterauftragnehmer und immer dann, wenn der Chatbot auf Daten zugreift, die Ihr Datenschutzbeauftragter nicht außer Haus sehen will. Für reine Bestands- und Preisauskünfte ist ein EU-Anbieter mit sauberem Vertrag meist ausreichend.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Datenschutz</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Chatbot DSGVO-konform betreiben, auch mit ERP-Anbindung
            </Hero2ColumnHeadline>
            <GeoSummary>
              Ein Chatbot ist DSGVO-konform, wenn Rechtsgrundlage,
              Informationspflicht, Auftragsverarbeitungsvertrag, Serverstandort
              und Löschkonzept geklärt sind und seit dem 2. August 2026
              zusätzlich die Kennzeichnung als KI-System nach Artikel 50 der
              KI-Verordnung steht. Diese Seite geht die zehn Pflichten durch und
              beantwortet die Frage, die bei einem Chatbot mit ERP-Zugriff
              dazukommt: welche Daten das System sieht, die dem Fragenden gar
              nicht gehören. Bluebatch betreibt solche Chatbots wahlweise beim
              EU-Anbieter oder vollständig im eigenen Haus, ab 1.000 € Setup und
              50 € pro Monat, in fünf Arbeitstagen.
            </GeoSummary>
            <Hero2ColumnDescription>
              Die meisten Anleitungen zu diesem Thema behandeln ein
              FAQ-Widget auf der Startseite. Für einen Großhändler ist das der
              harmlose Fall. Interessant wird es, sobald der Bot auf die Frage
              &bdquo;Ist die Position lieferbar und was kostet sie für diesen
              Kunden?&ldquo; antwortet, denn dann verarbeitet er Daten aus dem
              ERP.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Datenschutzfragen klären</ContactButton>
            </Hero2ColumnCallToAction>
            <HeroStatBand
              stats={[
                { value: "02.08.2026", label: "AI-Act-Pflicht in Kraft" },
                { value: "10", label: "Pflichten in der Checkliste" },
                { value: "3 %", label: "Umsatzrahmen nach Art. 99(4)" },
                { value: "5 Tage", label: "bis zum Piloten im Haus" },
              ]}
            />
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/chatbot-dsgvo/hero.png"
              alt="Leerer Besprechungsraum mit aufgeschlagenem Ringordner und geschlossenem Laptop auf einem Holztisch"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <ComplianceNoticeBox variant="warning">
          <ComplianceNoticeBox.Label>Seit dem 2. August 2026 scharf</ComplianceNoticeBox.Label>
          <ComplianceNoticeBox.Headline>
            Ihr Chatbot muss sich als KI zu erkennen geben
          </ComplianceNoticeBox.Headline>
          <ComplianceNoticeBox.Body>
            Artikel 50 der KI-Verordnung gilt seit dem 2. August 2026. Wer ein
            KI-System betreibt, das direkt mit Menschen interagiert, muss dafür
            sorgen, dass diese Menschen vor Beginn der Interaktion erfahren,
            dass sie mit einer Maschine sprechen. Ein Satz im Chatfenster
            genügt. Was nicht genügt: ein Hinweis, der erst in der
            Datenschutzerklärung steht, oder ein Bot mit menschlichem Vornamen
            und Portraitfoto, bei dem der Hinweis fehlt.
          </ComplianceNoticeBox.Body>
          <ComplianceNoticeBox.Footnote>
            Bußgeldrahmen nach Art. 99 Abs. 4 KI-VO: bis zu 15 Mio. € oder 3 %
            des weltweiten Jahresumsatzes, je nachdem, welcher Betrag höher ist.
            Für kleine und mittlere Unternehmen gilt nach Art. 99 Abs. 6 der
            jeweils niedrigere Betrag. Die vielzitierten 35 Mio. € beziehungsweise
            7 % betreffen verbotene Praktiken nach Art. 5 und damit keinen
            Kundenchat.
          </ComplianceNoticeBox.Footnote>
        </ComplianceNoticeBox>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Der eigentliche Prüfpunkt</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Nicht der Chatbot ist das Problem, sondern welche Daten er sieht
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Datenschutzrechtlich ist ein Chatbot kein eigener Tatbestand. Er ist
            eine Oberfläche, hinter der Daten fließen. Deshalb führt jede
            Prüfung, die bei der Software anfängt, ins Leere. Sinnvoll ist die
            Frage, welche drei Datenarten das System berührt, denn für jede gilt
            etwas anderes.
          </IntroBox.Paragraph>
        </IntroBox>

        <ProseColumns className="mt-10">
          <ProseColumnsItem title="Daten der Person, die chattet">
            Die Eingaben im Chatfenster, dazu IP-Adresse, Zeitstempel und
            Sitzungskennung. Das ist der Fall, den jede Anleitung im Netz
            behandelt. Rechtsgrundlage ist meist das berechtigte Interesse,
            solange die Konversation nach kurzer Frist gelöscht wird und nicht
            für Marketing ausgewertet wird.
          </ProseColumnsItem>
          <ProseColumnsItem title="Daten der Mitarbeiter, die ihn nutzen">
            Sobald der Chatbot intern läuft, entsteht ein Protokoll darüber, wer
            wann was gefragt hat. Das ist eine Verhaltens- und
            Leistungserfassung im Sinne von § 87 Abs. 1 Nr. 6 BetrVG und damit
            mitbestimmungspflichtig, wenn ein Betriebsrat existiert. Dieser
            Punkt fehlt in praktisch jeder Chatbot-Checkliste und ist der
            häufigste Grund, warum ein Pilot kurz vor dem Rollout stehen bleibt.
          </ProseColumnsItem>
          <ProseColumnsItem title="Daten aus dem ERP, die der Bot abruft">
            Kundenstammdaten, Konditionen, Auftrags- und Lieferhistorie. Diese
            Personen chatten gar nicht, ihre Daten werden trotzdem verarbeitet,
            weil das System sie zur Beantwortung heranzieht. Hier brauchen Sie
            eine eigene Zweckbindung, ein Berechtigungskonzept, das die
            ERP-Rechte des fragenden Nutzers durchreicht, statt dem Bot einen
            Vollzugriff zu geben, und Maßnahmen nach Art. 32 DSGVO für die
            Verbindung selbst.
          </ProseColumnsItem>
        </ProseColumns>

        <div className="mt-12">
          <Image
            src="/images/chatbot-dsgvo/datenwege.png"
            alt="Zwei Datenwege im Vergleich: oben Besucher über Chatbot-Anbieter und Anbietermodell zu einem Server außerhalb der EU, unten Mitarbeiter über Chatbot im Haus und eigenes Modell zu ERP und Dateiablage"
            width={1600}
            height={900}
            className="w-full rounded-2xl border border-gray-200"
          />
          <Typo.Paragraph className="mt-4 text-sm text-gray-600">
            Der Unterschied zwischen den beiden Wegen ist nicht die
            Antwortqualität, sondern die Zahl der Stellen, mit denen Sie einen
            Vertrag brauchen und deren Löschverhalten Sie nachweisen müssen.
          </Typo.Paragraph>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Die Checkliste</IntroBox.PreHeadline>
          <IntroBox.Headline>Zehn Pflichten und wer sie erfüllt</IntroBox.Headline>
          <IntroBox.Paragraph>
            Die meisten Listen im Netz enden bei der Aufzählung. Die
            interessantere Spalte ist die dritte: ob der Punkt beim Anbieter
            liegt oder bei Ihnen. Genau daran entscheidet sich, wie viel Arbeit
            ein Betriebsweg wirklich macht.
          </IntroBox.Paragraph>
        </IntroBox>

        <DataTable className="mt-10">
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Pflicht</DataTable.HeaderCell>
              <DataTable.HeaderCell>Grundlage</DataTable.HeaderCell>
              <DataTable.HeaderCell>Wer erfüllt sie</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            <DataTable.Row>
              <DataTable.Cell bold>Rechtsgrundlage festlegen</DataTable.Cell>
              <DataTable.Cell>Art. 6 DSGVO</DataTable.Cell>
              <DataTable.Cell>
                Immer Sie. Berechtigtes Interesse für reine Sachauskunft,
                Einwilligung, sobald gespeichert oder ausgewertet wird.
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Datenschutzerklärung ergänzen</DataTable.Cell>
              <DataTable.Cell>Art. 13 DSGVO</DataTable.Cell>
              <DataTable.Cell>
                Immer Sie. Der Chatbot gehört als eigener Verarbeitungsvorgang
                hinein, samt Empfänger und Speicherdauer.
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Auftragsverarbeitungsvertrag</DataTable.Cell>
              <DataTable.Cell>Art. 28 DSGVO</DataTable.Cell>
              <DataTable.Cell>
                Mit jedem Anbieter in der Kette, also auch mit dem Betreiber des
                Sprachmodells. Läuft das Modell im eigenen Haus, entfällt dieser
                Vertrag ersatzlos.
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Serverstandort klären</DataTable.Cell>
              <DataTable.Cell>Art. 44 ff. DSGVO</DataTable.Cell>
              <DataTable.Cell>
                Anbieter, nachweisen müssen Sie es. Bei Verarbeitung außerhalb
                der EU brauchen Sie ein Transfer-Instrument und eine
                Transferfolgenabschätzung.
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Kein Training auf Ihren Eingaben</DataTable.Cell>
              <DataTable.Cell>Art. 28 Abs. 3 DSGVO</DataTable.Cell>
              <DataTable.Cell>
                Anbieter, aber nur wenn es vertraglich steht. Ein Opt-out im
                Konto ist keine vertragliche Zusicherung.
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Löschkonzept und Fristen</DataTable.Cell>
              <DataTable.Cell>Art. 5 Abs. 1 lit. e DSGVO</DataTable.Cell>
              <DataTable.Cell>
                Gemeinsam. Üblich sind 30 bis 90 Tage für Konversationen. Prüfen
                Sie, ob die Frist im Produkt einstellbar ist oder nur auf dem
                Papier steht.
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Auskunft und Löschung umsetzen</DataTable.Cell>
              <DataTable.Cell>Art. 15, 17 DSGVO</DataTable.Cell>
              <DataTable.Cell>
                Immer Sie, technisch der Anbieter. Fragen Sie konkret, wie eine
                einzelne Konversation gefunden und gelöscht wird.
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Technische Maßnahmen</DataTable.Cell>
              <DataTable.Cell>Art. 32 DSGVO</DataTable.Cell>
              <DataTable.Cell>
                Gemeinsam. Bei ERP-Anbindung gehört die Verbindung selbst dazu,
                nicht nur das Chatfenster.
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Kennzeichnung als KI-System</DataTable.Cell>
              <DataTable.Cell>Art. 50 KI-VO</DataTable.Cell>
              <DataTable.Cell>
                Immer Sie als Betreiber. Gilt seit dem 2. August 2026 und ist
                der Punkt, den ältere Checklisten nicht enthalten.
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Mitbestimmung beim internen Einsatz</DataTable.Cell>
              <DataTable.Cell>§ 87 Abs. 1 Nr. 6 BetrVG</DataTable.Cell>
              <DataTable.Cell>
                Immer Sie, und zwar vor dem Rollout. Betrifft jeden Chatbot, den
                Mitarbeiter nutzen, nicht nur den Kundenchat.
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable.Body>
        </DataTable>

        <Typo.Paragraph className="mt-6 text-sm text-gray-600">
          Sechs der zehn Punkte liegen unabhängig vom Anbieter bei Ihnen. Das
          ist der Grund, warum die Auswahl eines &bdquo;DSGVO-konformen&ldquo;
          Produkts allein nichts entscheidet.
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Die Entscheidung</IntroBox.PreHeadline>
          <IntroBox.Headline>
            EU-Anbieter oder Modell im eigenen Haus
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Beides ist zulässig. Der Unterschied liegt darin, wie lang die Kette
            der Auftragsverarbeiter wird und wie viel davon Sie im Zweifel selbst
            nachweisen können.
          </IntroBox.Paragraph>
        </IntroBox>

        <ComparisonCard className="mt-12">
          <BeforeCard>
            <ComparisonHeadline>Anbieter mit EU-Hosting</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                Zwei bis drei Auftragsverarbeiter in der Kette: Chatbot-Anbieter,
                Hoster, Modellbetreiber
              </ComparisonListItem>
              <ComparisonListItem>
                Laufende Kosten typischerweise 29 € bis 200 € pro Monat, je nach
                Tarif und Sitzplätzen
              </ComparisonListItem>
              <ComparisonListItem>
                Löschfristen und Trainingsausschluss stehen im Vertrag des
                Anbieters, nicht in Ihrer Hand
              </ComparisonListItem>
              <ComparisonListItem>
                ERP-Zugriff bedeutet, dass Ihre Stammdaten die eigene
                Infrastruktur verlassen
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>
              Ausreichend für Kundenchat auf öffentlichen Inhalten und für
              interne Sachauskünfte ohne besondere Datenkategorien.
            </ComparisonFooter>
          </BeforeCard>
          <AfterCard>
            <ComparisonHeadline>Betrieb im eigenen Haus</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                Kein zusätzlicher Auftragsverarbeiter, wenn Modell und
                Oberfläche auf Ihrer Infrastruktur laufen
              </ComparisonListItem>
              <ComparisonListItem>
                Bei uns 1.000 € Setup einmalig und 50 € Betrieb pro Monat, ohne
                Lizenz pro Nutzer; ein eigener Server beginnt bei etwa 15 € im
                Monat
              </ComparisonListItem>
              <ComparisonListItem>
                Löschfristen und Protokollierung stellen Sie selbst ein und
                können sie einer Prüfung direkt vorführen
              </ComparisonListItem>
              <ComparisonListItem>
                Die ERP-Daten verlassen das Haus nicht, das Berechtigungskonzept
                des ERP bleibt wirksam
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>
              Der Weg für Chatbots mit Zugriff auf Konditionen, Kundenhistorie
              oder Personaldaten, und für Kundenverträge, die Unterauftragnehmer
              ausschließen.
            </ComparisonFooter>
          </AfterCard>
        </ComparisonCard>

        <div className="mt-12">
          <Image
            src="/images/chatbot-dsgvo/verantwortung.png"
            alt="Zwei gleich große Karten im Vergleich: beim Anbieter im EU-Hosting liegen Serverstandort, Löschfristen und Modellbetrieb in fremder Hand, im Eigenbetrieb in eigener"
            width={1600}
            height={900}
            className="w-full rounded-2xl border border-gray-200"
          />
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Ausschlusskriterien</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Drei Antworten, nach denen die Prüfung beendet ist
          </IntroBox.Headline>
        </IntroBox>

        <SimpleGrid cols={3} className="mt-10">
          <SimpleCard>
            <Typo.H3>&bdquo;Wir nutzen Ihre Daten zur Verbesserung&ldquo;</Typo.H3>
            <Typo.Paragraph>
              Wenn der Trainingsausschluss nicht im Auftragsverarbeitungsvertrag
              steht, sondern nur als Schalter im Konto existiert, ist er keine
              Zusicherung. Lassen Sie sich die Klausel zeigen, nicht die
              Einstellung.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3>Kein Unterauftragnehmer-Verzeichnis</Typo.H3>
            <Typo.Paragraph>
              Art. 28 Abs. 2 DSGVO verlangt, dass Sie wissen, wer noch in der
              Kette hängt. Ein Anbieter, der sein Modell nicht benennt, kann die
              Frage nach dem Serverstandort gar nicht beantworten.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3>Löschfrist nicht einstellbar</Typo.H3>
            <Typo.Paragraph>
              Eine Speicherdauer, die im Produkt nicht konfigurierbar ist,
              können Sie nicht an Ihr Löschkonzept anpassen. Dann gilt die
              Frist des Anbieters, und die müssen Sie im
              Verarbeitungsverzeichnis so dokumentieren.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Vorgehen</IntroBox.PreHeadline>
          <IntroBox.Headline>In fünf Schritten durch die Prüfung</IntroBox.Headline>
          <IntroBox.Paragraph>
            Die Reihenfolge ist wichtig. Wer mit der Produktauswahl anfängt,
            prüft am Ende Verträge für einen Anwendungsfall, den er noch nicht
            beschrieben hat.
          </IntroBox.Paragraph>
        </IntroBox>

        <NumberedList className="mt-10 text-base">
          <NumberedList.Item title="Anwendungsfall beschreiben.">
            Wer fragt, welche Quellen antworten, welche Daten dabei berührt
            werden. Ein Satz pro Quelle reicht, aber er muss geschrieben sein.
          </NumberedList.Item>
          <NumberedList.Item title="Datenarten trennen.">
            Besucherdaten, Mitarbeiterdaten, ERP-Daten. Für jede Art die
            Rechtsgrundlage getrennt festlegen, sie ist selten dieselbe.
          </NumberedList.Item>
          <NumberedList.Item title="Betriebsweg wählen.">
            EU-Anbieter oder eigenes Haus, entlang der Frage, welche
            Datenkategorien das Haus verlassen dürfen. Erst danach lohnt der
            Blick auf Tarife.
          </NumberedList.Item>
          <NumberedList.Item title="Verträge und Verzeichnis nachziehen.">
            Auftragsverarbeitungsvertrag mit jedem Glied der Kette,
            Verarbeitungsverzeichnis ergänzen, Datenschutzerklärung erweitern.
          </NumberedList.Item>
          <NumberedList.Item title="Kennzeichnung und Betriebsrat.">
            Hinweis auf das KI-System im Chatfenster, und beim internen Einsatz
            die Mitbestimmung vor dem Rollout klären, nicht danach.
          </NumberedList.Item>
        </NumberedList>

        <div className="mt-12">
          <Image
            src="/images/chatbot-dsgvo/fristen.png"
            alt="Zeitleiste der KI-Verordnung mit vier Terminen, hervorgehoben ist der 2. August 2026 mit der Transparenzpflicht für Chatbots"
            width={1600}
            height={900}
            className="w-full rounded-2xl border border-gray-200"
          />
          <Typo.Paragraph className="mt-4 text-sm text-gray-600">
            Die KI-Verordnung greift gestaffelt. Für einen Chatbot ist nur der
            dritte Termin relevant, und der liegt bereits hinter uns.
          </Typo.Paragraph>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <FaqContainer faqs={faqs}>
          <FaqContainer.Headline>
            Häufige Fragen zum DSGVO-konformen Chatbot
          </FaqContainer.Headline>
        </FaqContainer>
      </ContentWrapper>

      <ContentWrapper>
        <Typo.H2>Weiterlesen</Typo.H2>
        <Typo.Paragraph>
          Wie ein Chatbot mit ERP-Anbindung technisch entsteht, steht in{" "}
          <Link href="/branchen/grosshandel/chatbots/ki-chatbot-implementierung">
            KI-Chatbot erstellen, der eure ERP-Daten kennt
          </Link>
          . Was er kostet, rechnet{" "}
          <Link href="/branchen/grosshandel/chatbots/was-kostet-ein-chatbot">
            Was kostet ein Chatbot
          </Link>{" "}
          durch. Für den Datenschutz beim Einsatz fertiger Assistenten ist{" "}
          <Link href="/blog/chatgpt-dsgvo-konform-nutzen">
            ChatGPT DSGVO-konform nutzen
          </Link>{" "}
          der passende Nachbarartikel, und die grundsätzliche Einordnung liefert{" "}
          <Link href="/blog/ki-datenschutz">KI und Datenschutz</Link>.
        </Typo.Paragraph>

        <CrossSellGrid>
          <CrossSellGrid.Eyebrow>Weiterführend</CrossSellGrid.Eyebrow>
          <CrossSellGrid.Headline>Passend zum Thema</CrossSellGrid.Headline>
          <CrossSellGrid.Card href="/branchen/grosshandel/chatbots">
            <CrossSellGrid.Title>KI-Chatbots für den Großhandel</CrossSellGrid.Title>
            <CrossSellGrid.Description>
              Der Überblick über alle Chatbot-Varianten mit ERP-Anbindung.
            </CrossSellGrid.Description>
          </CrossSellGrid.Card>
          <CrossSellGrid.Card href="/branchen/grosshandel/private-ai">
            <CrossSellGrid.Title>Private AI im Großhandel</CrossSellGrid.Title>
            <CrossSellGrid.Description>
              Sprachmodelle auf eigener Infrastruktur, wenn die Daten das Haus
              nicht verlassen dürfen.
            </CrossSellGrid.Description>
          </CrossSellGrid.Card>
          <CrossSellGrid.Card href="/blog/dsgvo-konforme-ki-tools">
            <CrossSellGrid.Title>DSGVO-konforme KI-Tools</CrossSellGrid.Title>
            <CrossSellGrid.Description>
              Der Vergleich der Werkzeuge, die sich datenschutzrechtlich
              betreiben lassen.
            </CrossSellGrid.Description>
          </CrossSellGrid.Card>
        </CrossSellGrid>
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
