import type { Metadata } from "next";
import Image from "next/image";
import { ogImages } from "@/lib/og";
import ContentWrapper from "@/components/layout/content-wrapper";
import SimpleGrid from "@/components/layout/simple-grid";
import Typo from "@/components/ui/typo";
import GeoSummary from "@/components/ui/geo-summary";
import IntroBox from "@/components/ui/intro-box";
import DataTable from "@/components/ui/data-table";
import ProseColumns, { ProseColumnsItem } from "@/components/ui/prose-columns";
import StatsList from "@/components/ui/stats-list";
import SimpleCard from "@/components/cards/simple-card";
import RoiCalculation from "@/components/sections/roi-calculation";
import { FaqContainer } from "@/components/ui/faqs";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnCallToAction,
  Hero2ColumnSubtext,
  Hero2ColumnImage,
} from "@/components/heroes/hero-2-column";
import ContactButton from "@/components/buttons/contact-button";
import InternalLink from "@/components/buttons/internal-link";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";

const meta = {
  title: "Digitale Rechnungsverarbeitung: 25 oder 2.065 Euro | Bluebatch",
  description:
    "Dasselbe Wort steht für zwei völlig verschiedene Produkte, deshalb reicht die Preisspanne von 25 bis 2.065 Euro im Monat. Was hinter dem Begriff steckt, welcher Schritt Software wird und was die Handarbeit heute wirklich kostet.",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: "Digitale Rechnungsverarbeitung: zwei Produkte, ein Wort",
    description: meta.description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages("Digitale Rechnungsverarbeitung", "Services"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Digitale Rechnungsverarbeitung: zwei Produkte, ein Wort",
    description: meta.description,
    images: ogImages("Digitale Rechnungsverarbeitung", "Services").map(
      (i) => i.url,
    ),
  },
  alternates: {
    canonical: "/services/digitale-rechnungsverarbeitung",
  },
};

const faqs = [
  {
    question: "Was ist digitale Rechnungsverarbeitung?",
    answer:
      "Digitale Rechnungsverarbeitung bezeichnet den gesamten Weg einer Eingangsrechnung ohne Papier und ohne manuelles Abtippen: vom Eingang über das maschinelle Auslesen der Rechnungsdaten, den Abgleich mit Bestellung und Wareneingang, die Freigabe und die Buchung bis zur revisionssicheren Archivierung. Der Begriff ist unscharf, weil er im Markt für zwei sehr verschiedene Produkte verwendet wird: für eine vollständige Dokumentenplattform und für ein reines Freigabewerkzeug auf dem Rechnungseingang. Genau daher stammt die Preisspanne von 25 bis über 2.000 Euro im Monat.",
  },
  {
    question: "Was kostet digitale Rechnungsverarbeitung?",
    answer:
      "Die im Markt genannten Preise liegen zwischen 25 Euro im Monat für ein Freigabewerkzeug mit unbegrenzten Nutzern und 340 bis 2.065 Euro im Monat für eine gestaffelte Dokumentenplattform, dort zuzüglich 0,69 Euro je Rechnung über dem Kontingent und 17 Euro im Monat je zusätzlichem Buchhaltungsnutzer. Das ist Faktor 83 zwischen dem günstigsten und dem teuersten Paket. Vier von sechs untersuchten Anbieter- und Fachseiten nennen überhaupt keinen Preis. Bei uns beginnt ein erster Anwendungsfall bei 1.000 Euro einmalig und 50 Euro im Monat im Betrieb, der Pilot steht in fünf Arbeitstagen.",
  },
  {
    question: "Wie viele Schritte hat die Rechnungsverarbeitung?",
    answer:
      "Darauf gibt es keine verbindliche Antwort. Die gängigen Darstellungen kommen auf drei, fünf oder sieben Schritte für exakt denselben Vorgang, je nachdem wie fein sie Erfassung, Prüfung und Freigabe auftrennen. Keine der Quellen erwähnt, dass es die anderen Zählungen gibt. Praktisch relevant ist die Anzahl nicht. Relevant ist, welcher dieser Schritte in Ihrem Haus heute jemand von Hand macht und wie lange er dafür braucht.",
  },
  {
    question:
      "Ist digitale Rechnungsverarbeitung dasselbe wie die E-Rechnung?",
    answer:
      "Nein. Die E-Rechnung ist ein Datenformat, also XRechnung oder ZUGFeRD, und eine gesetzliche Pflicht. Seit dem 1. Januar 2025 muss jedes inländische Unternehmen E-Rechnungen empfangen können, ausstellen muss sie ab dem 1. Januar 2027, wer mehr als 800.000 Euro Vorjahresumsatz hat, und ab dem 1. Januar 2028 alle. Digitale Rechnungsverarbeitung ist dagegen der Prozess dahinter, und der betrifft auch alle Rechnungen, die weiterhin als PDF oder auf Papier hereinkommen. Die Formatpflicht erledigen Sie mit einem Empfangskanal, den Prozess erledigt sie nicht.",
  },
  {
    question: "Was lässt sich an der Rechnungsverarbeitung automatisieren?",
    answer:
      "Alles, was einer Regel folgt: die Rechnung aus dem Postfach holen und zuordnen, Rechnungsnummer, Datum, Betrag, Steuersätze und Positionen auslesen, gegen Bestellung und Wareneingang abgleichen, nach hinterlegten Regeln kontieren, Skontofristen überwachen und GoBD-konform archivieren. Nicht automatisierbar sind die Entscheidungen: die Freigabe selbst, die Klärung einer Abweichung mit dem Lieferanten und die Frage, ob eine Preisdifferenz akzeptiert wird. Der automatisierbare Teil ist der größere, aber der weniger anspruchsvolle.",
  },
  {
    question: "Ab wie vielen Rechnungen lohnt sich das?",
    answer:
      "Die im Markt genannte Untergrenze liegt bei etwa 20 Rechnungen im Monat, das gilt aber für ein Freigabewerkzeug für wenige Euro. Für einen angebundenen Prozess mit ERP-Abgleich rechnet es sich nach unserer Erfahrung ab etwa 200 Eingangsrechnungen im Monat, weil erst dann der Abgleich mit Bestellung und Wareneingang genug Arbeitszeit bindet, um den Aufbau zu tragen. Bei 500 Rechnungen im Monat kommen wir auf rund 1.800 Arbeitsstunden im Jahr allein für die Handarbeit.",
  },
  {
    question: "Brauchen wir dafür ein Dokumentenmanagementsystem?",
    answer:
      "Für die Verarbeitung nicht. Gebraucht wird ein revisionssicherer Ablageort für die Belege und ein lesender Zugang auf Bestell- und Wareneingangsdaten. Beides lässt sich mit einem vorhandenen ERP und einem einfachen Archiv abbilden. Eine ausgewachsene Dokumentenplattform lohnt sich dann, wenn Sie ohnehin Verträge, Personalakten und Projektunterlagen darin führen wollen. Dann kaufen Sie allerdings ein Archivsystem und lösen die Rechnungsverarbeitung nebenbei mit, nicht umgekehrt.",
  },
  {
    question: "Wie lange müssen Rechnungen aufbewahrt werden?",
    answer:
      "Acht Jahre. Die frühere Zehnjahresfrist wurde mit dem Vierten Bürokratieentlastungsgesetz auf acht Jahre verkürzt, geregelt in § 14b Abs. 1 UStG. Die Aufbewahrung muss revisionssicher sein, also unveränderbar, jederzeit lesbar und im Zugriff. Bei einer E-Rechnung ist das strukturierte Format aufzubewahren, nicht nur eine daraus erzeugte Bildansicht.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>
              Finanzen & Buchhaltung
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Digitale Rechnungsverarbeitung: warum dasselbe Wort 25 und 2.065
              Euro im Monat kostet
            </Hero2ColumnHeadline>
            <GeoSummary>
              Digitale Rechnungsverarbeitung ist der papierlose Weg einer
              Eingangsrechnung vom Postfach über Erfassung, Abgleich, Freigabe
              und Buchung bis ins Archiv. Wer den Begriff nachschlägt, findet
              Prozessmodelle mit drei, fünf oder sieben Schritten und Preise
              zwischen 25 und 2.065 Euro im Monat, ohne dass eine Quelle den
              Unterschied erklärt. Diese Seite erklärt ihn, trennt Schritt für
              Schritt, was Software übernimmt und was Entscheidung bleibt, und
              rechnet den Ist-Zustand durch: bei 500 Eingangsrechnungen im Monat
              sind das rund 1.800 Arbeitsstunden oder 50.400 Euro im Jahr. Für
              Großhändler und produzierende Betriebe mit 50 bis 1.000
              Mitarbeitenden. Ein erster Anwendungsfall liegt bei uns ab 1.000
              Euro einmalig und 50 Euro im Monat, der Pilot steht in fünf
              Arbeitstagen.
            </GeoSummary>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Rechnungseingang durchsprechen, 30 Minuten
              </ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Erfassung • Abgleich mit Bestellung und Wareneingang • Freigabe
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/digitale-rechnungsverarbeitung/hero.png"
              type="image"
              alt="Bürovorlage mit einem Scanner und übervollen Ablagekörben voller Papierrechnungen im Morgenlicht"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Der Befund, der die Seite begründet */}
      <ContentWrapper colorScheme="gradient-primary-dark">
        <StatsList
          cols={3}
          textColor="text-white"
          stats={[
            { value: 83, label: "Faktor zwischen billigstem und teuerstem Paket" },
            { value: 6, label: "gelesene Anbieter- und Fachseiten" },
            { value: 2, label: "davon nennen überhaupt einen Preis" },
          ]}
        />
      </ContentWrapper>

      {/* Kernsektion 1: der Preis-Widerspruch */}
      <ContentWrapper>
        <IntroBox size="small">
          <IntroBox.PreHeadline>Der Ausgangspunkt</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Zwei Produkte, ein Wort, und niemand sagt es dazu
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Wer nach digitaler Rechnungsverarbeitung sucht, landet auf zwei
            Sorten von Angeboten, die sich beide so nennen. Legt man die Preise
            nebeneinander, sieht das nach einem Markt aus, in dem niemand weiß,
            was die Sache wert ist. Tatsächlich werden hier zwei verschiedene
            Kaufentscheidungen unter demselben Begriff verkauft.
          </IntroBox.Paragraph>
        </IntroBox>

        <DataTable>
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Quelle</DataTable.HeaderCell>
              <DataTable.HeaderCell>Preis</DataTable.HeaderCell>
              <DataTable.HeaderCell>Wofür</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            <DataTable.Row>
              <DataTable.Cell bold>
                Dokumentenplattform, Platz 1 der Suchergebnisse
              </DataTable.Cell>
              <DataTable.Cell>
                340 bis 2.065 € im Monat, gestaffelt, plus 0,69 € je Rechnung
                über dem Kontingent, plus 17 € im Monat je zusätzlichem
                Buchhaltungsnutzer
              </DataTable.Cell>
              <DataTable.Cell>
                Vollständiges Archivsystem mit Erkennung, Workflow und
                Revisionssicherheit
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Freigabewerkzeug, Platz 7</DataTable.Cell>
              <DataTable.Cell>
                25 € im Monat für das ganze Unternehmen, unbegrenzte Nutzer und
                Dokumente, Schulung optional 200 € je Stunde
              </DataTable.Cell>
              <DataTable.Cell>
                Freigabestrecke auf dem Rechnungseingang, Ablage bleibt, wo sie
                ist
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>
                Vier weitere Anbieter- und Fachseiten
              </DataTable.Cell>
              <DataTable.Cell>kein Preis</DataTable.Cell>
              <DataTable.Cell>
                Erklärartikel, die im eigenen Produkt enden, ohne es zu
                bepreisen
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable.Body>
        </DataTable>

        <Image
          src="/images/digitale-rechnungsverarbeitung/preisspanne.png"
          alt="Zwei Balken im Vergleich: der Monatspreis eines Freigabe-Werkzeugs ist ein Bruchteil des Preises einer Dokumentenplattform"
          width={1200}
          height={675}
          className="w-full h-auto rounded-2xl my-8"
        />

        <Typo.Paragraph>
          Faktor 13,6 zwischen den beiden Einstiegspreisen, Faktor 83 zwischen
          dem billigsten und dem teuersten Paket. Keine der beiden Seiten
          erwähnt, dass es die andere Kategorie gibt. Der Unterschied ist kein
          Qualitätsunterschied, sondern ein Umfangsunterschied: Das eine ist ein
          Archivsystem, in dem die Rechnungsverarbeitung ein Modul unter
          mehreren ist. Das andere ist eine Freigabestrecke, die den Beleg an
          das weitergibt, was Sie schon haben. Wer das nicht trennt, vergleicht
          in einer Ausschreibung Angebote, die gar nicht dasselbe anbieten.
        </Typo.Paragraph>

        <Typo.Paragraph>
          Dasselbe Muster zeigt sich bei der Dauer, und es fällt genauso wenig
          jemandem auf: Der Plattformanbieter nennt zehn Wochen für die
          Einführung eines durchgängigen Beschaffungsprozesses, der Anbieter des
          Freigabewerkzeugs eine Amortisation nach drei bis vier Wochen. Beide
          Angaben können stimmen. Sie beziehen sich nur auf verschiedene Dinge.
        </Typo.Paragraph>
      </ContentWrapper>

      {/* Kernsektion 2: der Schrittzahl-Widerspruch */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Zwischen drei und sieben Schritten, je nachdem wen man fragt</Typo.H2>
        <Typo.Paragraph>
          Fast jede Erklärseite zum Thema bringt ein Prozessmodell mit. Das
          wirkt nach Standard, ist aber keiner. Für exakt denselben Vorgang,
          nämlich den Weg einer Eingangsrechnung vom Postfach ins Archiv,
          reichen die Darstellungen von drei bis sieben Stationen. Auch hier
          erwähnt keine Quelle, dass es die anderen gibt.
        </Typo.Paragraph>

        <DataTable>
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Quelle</DataTable.HeaderCell>
              <DataTable.HeaderCell>Schritte</DataTable.HeaderCell>
              <DataTable.HeaderCell>Benennung</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            <DataTable.Row>
              <DataTable.Cell bold>Beschaffungsplattform</DataTable.Cell>
              <DataTable.Cell>drei</DataTable.Cell>
              <DataTable.Cell>
                Eingang, Abgleich und Workflow, Archivierung und Prüfung
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Dokumentenplattform</DataTable.Cell>
              <DataTable.Cell>fünf</DataTable.Cell>
              <DataTable.Cell>
                Eingang, Erkennung, Datenprüfung, Freigabeworkflow, Archivierung
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Herstellerblog</DataTable.Cell>
              <DataTable.Cell>fünf</DataTable.Cell>
              <DataTable.Cell>
                Eingang, Erfassung und Prüfung, Freigabe, Buchung, Archivierung
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Ausgabenmanagement-Blog</DataTable.Cell>
              <DataTable.Cell>sieben</DataTable.Cell>
              <DataTable.Cell>
                Eingang, Erfassung, Prüfung, Bearbeitung, Freigabe, Buchung,
                Archivierung
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Beratungsseite</DataTable.Cell>
              <DataTable.Cell>sieben</DataTable.Cell>
              <DataTable.Cell>
                Erfassung, Indexierung, Validierung, Freigabe, Bestellabgleich,
                Buchung, Archivierung
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable.Body>
        </DataTable>

        <Image
          src="/images/digitale-rechnungsverarbeitung/schritte.png"
          alt="Prozesskette mit sechs Stationen: Eingang, Erfassung, Prüfung, Freigabe, Buchung, Archivierung"
          width={1200}
          height={675}
          className="w-full h-auto rounded-2xl my-8"
        />

        <Typo.Paragraph>
          Der Unterschied ist keiner in der Sache, sondern einer in der
          Auflösung. Ob Erfassung und Prüfung eine Station sind oder zwei, ob
          die Freigabe als eigener Schritt zählt oder Teil des Workflows ist,
          entscheidet nur darüber, wie das Schaubild aussieht. Wer drei dieser
          Artikel liest, hat am Ende drei Modelle und keine Entscheidung. Die
          nützlichere Frage steht in der nächsten Sektion: nicht wie viele
          Schritte es gibt, sondern welcher davon bei Ihnen von Hand läuft.
        </Typo.Paragraph>
      </ContentWrapper>

      {/* Kernsektion 3: die Trennung, die niemand macht */}
      <ContentWrapper>
        <Typo.H2>Welcher Schritt wird Software, welcher bleibt Mensch</Typo.H2>
        <Typo.Paragraph>
          Von den sechs gelesenen Quellen streift genau eine diese Frage, und
          zwar in einem Halbsatz. Alle anderen empfehlen an dieser Stelle ein
          System und hören auf. Dabei entscheidet genau diese Trennung darüber,
          was ein Vorhaben kostet und was es überhaupt bringen kann. Die
          Trennlinie verläuft nicht zwischen wichtig und unwichtig, sondern
          zwischen Regel und Abwägung.
        </Typo.Paragraph>

        <Image
          src="/images/digitale-rechnungsverarbeitung/trennung.png"
          alt="Zweispuriges Diagramm: Auslesen, Abgleichen und Ablegen übernimmt Software, Freigeben, Klären und Entscheiden bleibt beim Menschen"
          width={1200}
          height={675}
          className="w-full h-auto rounded-2xl my-8"
        />

        <DataTable>
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Aufgabe</DataTable.HeaderCell>
              <DataTable.HeaderCell>Erledigt das</DataTable.HeaderCell>
              <DataTable.HeaderCell>Warum</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            <DataTable.Row>
              <DataTable.Cell bold>
                Beleg aus dem Postfach holen und zuordnen
              </DataTable.Cell>
              <DataTable.Cell>Software</DataTable.Cell>
              <DataTable.Cell>
                Absender, Betreff und Anhangstyp reichen aus, um eine Rechnung
                von einer Bestellbestätigung zu unterscheiden. Das ist eine
                Klassifikation, keine Beurteilung.
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>
                Rechnungsdaten auslesen und kontieren
              </DataTable.Cell>
              <DataTable.Cell>Software</DataTable.Cell>
              <DataTable.Cell>
                Nummer, Datum, Nettobetrag, Steuersätze und Positionen stehen im
                Beleg. Bei einer E-Rechnung sind sie ohnehin strukturiert, bei
                PDF und Papier übernimmt das die Texterkennung.
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>
                Gegen Bestellung und Wareneingang abgleichen
              </DataTable.Cell>
              <DataTable.Cell>Software</DataTable.Cell>
              <DataTable.Cell>
                Der Abgleich von Menge, Preis und Position ist reine
                Rechenarbeit. Die Daten liegen bereits im ERP. Hier steckt der
                größte Zeitblock der Handarbeit.
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Skontofristen überwachen</DataTable.Cell>
              <DataTable.Cell>Software</DataTable.Cell>
              <DataTable.Cell>
                Ein Zahlungsziel ist ein Datum. Ob es erreichbar ist, hängt am
                Freigabestand, und den kennt das System besser als der
                Kalender an der Wand.
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>
                Revisionssicher archivieren
              </DataTable.Cell>
              <DataTable.Cell>Software</DataTable.Cell>
              <DataTable.Cell>
                Unveränderbar ablegen, protokollieren, acht Jahre auffindbar
                halten. Ein Regelsatz ohne Ermessensspielraum.
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Freigabe erteilen</DataTable.Cell>
              <DataTable.Cell>Mensch</DataTable.Cell>
              <DataTable.Cell>
                Wer freigibt, haftet dafür, dass die Leistung so erbracht wurde.
                Das lässt sich vorbereiten und erinnern, aber nicht ersetzen.
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Abweichung entscheiden</DataTable.Cell>
              <DataTable.Cell>Mensch</DataTable.Cell>
              <DataTable.Cell>
                Eine Teillieferung, eine Preisdifferenz von zwei Prozent, eine
                nachträgliche Fracht: Ob das durchgeht, hängt an Absprachen, die
                in keinem Datensatz stehen.
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Klärfall mit dem Lieferanten</DataTable.Cell>
              <DataTable.Cell>Mensch</DataTable.Cell>
              <DataTable.Cell>
                Der Anruf, bei dem geklärt wird, warum zwei Paletten berechnet
                und eine geliefert wurde, ist der Teil, der Zeit kostet und
                bleibt.
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable.Body>
        </DataTable>

        <Typo.Paragraph>
          Die Aufteilung hat eine Konsequenz, die man ehrlich benennen sollte:
          Software nimmt Ihnen nicht die Verantwortung für die Rechnung ab, sie
          nimmt Ihnen das Zusammensuchen der Grundlage ab. Fünf der acht
          Aufgaben lassen sich abgeben, und es sind die stupideren fünf. Genau
          deshalb funktioniert es: Die Freigabe dauert nicht deshalb elf Tage,
          weil das Entscheiden so lange braucht, sondern weil der Beleg vorher
          durch vier Hände geht, bevor er auf dem richtigen Schreibtisch landet.
        </Typo.Paragraph>
      </ContentWrapper>

      {/* Der stärkste Hebel: die Ist-Zustands-Rechnung */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Was die Handarbeit heute kostet</Typo.H2>
        <Typo.Paragraph>
          Vier der sechs gelesenen Quellen sprechen von erheblicher
          Zeitersparnis, ohne eine einzige Zahl zu nennen. Zwei beziffern
          wenigstens den Ist-Zustand, eine mit 30 Minuten je Rechnung, die
          andere mit 17 Euro je Papierrechnung gegenüber 7 Euro je digitaler.
          Keine rechnet es für ein konkretes Haus durch. Deshalb hier die
          Rechnung, die fehlt. Sie ist bewusst niedriger angesetzt als die
          Marktangaben, damit Sie sie mit Ihren eigenen Zahlen nachrechnen
          können.
        </Typo.Paragraph>

        <RoiCalculation className="my-8">
          <RoiCalculation.Assumption>
            Großhändler mit 120 Mitarbeitenden, 500 Eingangsrechnungen im Monat,
            also 6.000 im Jahr. Innendienst und Buchhaltung, Vollkosten 28 Euro
            je Stunde.
          </RoiCalculation.Assumption>
          <RoiCalculation.Row label="Erfassen und kontieren: 6 Minuten je Rechnung">
            600 Stunden
          </RoiCalculation.Row>
          <RoiCalculation.Row label="Abgleich mit Bestellung und Wareneingang: 5 Minuten">
            500 Stunden
          </RoiCalculation.Row>
          <RoiCalculation.Row label="Freigabe einholen und nachfassen: 4 Minuten">
            400 Stunden
          </RoiCalculation.Row>
          <RoiCalculation.Row label="Buchen und ablegen: 3 Minuten">
            300 Stunden
          </RoiCalculation.Row>
          <RoiCalculation.Row label="Summe: 18 Minuten je Rechnung" highlight>
            1.800 Stunden
          </RoiCalculation.Row>
          <RoiCalculation.Total label="Kosten der Handarbeit im Jahr">
            50.400 €
          </RoiCalculation.Total>
          <RoiCalculation.Source>
            Vollkostensatz 28 €/Stunde, derselbe Standard wie in unserem
            ROI-Rechner. 18 Minuten je Rechnung entsprechen 8,40 € Bearbeitungskosten,
            also gut der Hälfte der im Markt genannten 17 € je Papierrechnung.
          </RoiCalculation.Source>
        </RoiCalculation>

        <Typo.H3>Und was davon übrig bleibt</Typo.H3>
        <Typo.Paragraph>
          Die zweite Rechnung ist die wichtigere, weil sie zeigt, welcher Teil
          nicht verschwindet. Die Klärfälle bleiben, und sie werden nicht
          schneller. Wir setzen sie mit 15 Prozent der Rechnungen an, was
          konservativ ist, und geben ihnen zwölf zusätzliche Minuten.
        </Typo.Paragraph>

        <RoiCalculation className="my-8">
          <RoiCalculation.Assumption>
            Dieselben 6.000 Rechnungen im Jahr, nach der Automatisierung von
            Erfassung, Abgleich, Buchung und Ablage.
          </RoiCalculation.Assumption>
          <RoiCalculation.Row label="Sichtkontrolle der maschinell erfassten Daten: 2 Minuten je Rechnung">
            200 Stunden
          </RoiCalculation.Row>
          <RoiCalculation.Row label="Freigabe per Klick, ohne Nachfassen: 2 Minuten">
            200 Stunden
          </RoiCalculation.Row>
          <RoiCalculation.Row label="Klärfälle: 15 Prozent der Rechnungen, je 12 Minuten zusätzlich">
            180 Stunden
          </RoiCalculation.Row>
          <RoiCalculation.Row label="Summe Arbeitszeit im Jahr" highlight>
            580 Stunden
          </RoiCalculation.Row>
          <RoiCalculation.Total label="Ersparnis gegenüber der Handarbeit">
            34.160 €
          </RoiCalculation.Total>
          <RoiCalculation.Source>
            1.220 eingesparte Stunden zu 28 €. Ohne Softwarekosten gerechnet,
            die je nach Produktkategorie zwischen 300 und 24.780 € im Jahr
            liegen.
          </RoiCalculation.Source>
        </RoiCalculation>

        <Image
          src="/images/digitale-rechnungsverarbeitung/kostenblock.png"
          alt="Zwei Balken im Vergleich: die Arbeitszeit heute deutlich höher als die Arbeitszeit nach der Automatisierung"
          width={1200}
          height={675}
          className="w-full h-auto rounded-2xl my-8"
        />

        <Typo.H3>Wo diese Rechnung kippt</Typo.H3>
        <Typo.Paragraph>
          Der größte Einzelposten ist der Abgleich mit Bestellung und
          Wareneingang, 500 Stunden im Jahr. Der fällt nur weg, wenn beide
          tatsächlich im System stehen. Wird ein Teil der Bestellungen weiterhin
          telefonisch ausgelöst oder werden Wareneingänge erst am Monatsende
          gebucht, hat die Software nichts, wogegen sie prüfen könnte. Dann
          bleibt dieser Block erhalten und die Ersparnis schrumpft von 34.160
          auf rund 20.000 Euro. Das ist immer noch eine tragfähige Rechnung,
          aber es ist eine andere, und man sollte es vorher wissen statt
          hinterher.
        </Typo.Paragraph>
        <Typo.Paragraph>
          Der zweite Punkt, an dem es kippt, ist die Belegqualität. Eine
          E-Rechnung im Format XRechnung oder ZUGFeRD liefert die Daten
          strukturiert, da liegt die Erkennungsquote faktisch bei hundert
          Prozent. Ein eingescanntes Papierdokument mit handschriftlicher
          Lieferscheinnummer liefert sie nicht. Je höher Ihr Anteil an
          E-Rechnungen, desto besser rechnet sich das Vorhaben, und dieser
          Anteil steigt ohnehin von selbst, weil ab 2028 alle inländischen
          B2B-Rechnungen elektronisch ausgestellt werden müssen.
        </Typo.Paragraph>
      </ContentWrapper>

      {/* Größenklasse */}
      <ContentWrapper>
        <Typo.H2>Für wen die vorhandenen Ratgeber geschrieben sind</Typo.H2>
        <Typo.Paragraph>
          Beide Quellen, die überhaupt eine Zielgruppe benennen, benennen eine
          andere als Ihre. Der Anbieter des Freigabewerkzeugs schreibt
          ausdrücklich für Betriebe unter zwanzig Mitarbeitenden und nennt
          Gastronomie mit mehreren Standorten und Handwerksbetriebe ab zehn
          Mitarbeitern als Beispiel, ab etwa zwanzig Rechnungen im Monat. Die
          Plattform auf Platz 1 referenziert 60.000 Eingangsrechnungen im Jahr,
          350 Systemnutzer und zehn Wochen Einführungszeit. Dazwischen, also bei
          50 bis 1.000 Mitarbeitenden und drei- bis vierstelligen
          Rechnungszahlen im Monat, schreibt niemand.
        </Typo.Paragraph>

        <ProseColumns cols={2}>
          <ProseColumnsItem title="Was in dieser Größe anders ist">
            Die Freigabe läuft nicht über eine Abteilung, sondern über fünf bis
            zwölf Personen, die alle noch etwas anderes zu tun haben. Deshalb
            liegt der Engpass nicht bei der Erfassung, sondern beim Nachfassen.
            Ein System, das nur schneller erfasst, aber die Freigabe unverändert
            lässt, verkürzt die Durchlaufzeit kaum. Umgekehrt bringt eine reine
            Freigabestrecke ohne Abgleich den größten Zeitblock nicht weg.
          </ProseColumnsItem>
          <ProseColumnsItem title="Was sich nicht lohnt">
            Der Plattformkauf als Einstieg. Eine Dokumentenplattform rechnet
            sich, wenn Sie ohnehin Verträge, Personalakten und
            Projektunterlagen revisionssicher führen wollen. Wird sie nur wegen
            der Eingangsrechnungen angeschafft, zahlen Sie ein Archivsystem und
            nutzen ein Modul davon. Der umgekehrte Weg, erst den Prozess
            anbinden und die Ablage später entscheiden, hält beide Optionen
            offen.
          </ProseColumnsItem>
        </ProseColumns>
      </ContentWrapper>

      {/* Preis und Dauer bei uns */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Was der Aufbau bei uns kostet und wie lange er dauert</Typo.H2>

        <ProseColumns cols={2}>
          <ProseColumnsItem title="Der Teil, den wir bauen">
            Ein erster Anwendungsfall beginnt bei 1.000 Euro einmalig, der
            Betrieb bei 50 Euro im Monat. Bis der Pilot läuft, vergehen in der
            Regel fünf Arbeitstage. Wir fangen mit Erfassung und Zuordnung an,
            weil das Ergebnis nach wenigen Tagen sichtbar ist und weil sich
            daran zeigt, wie gut die Belegqualität wirklich ist. Abgleich,
            Freigabestrecke und Buchung sind eigene Anwendungsfälle auf
            derselben Grundlage und deutlich günstiger, weil Anbindung,
            Protokollierung und Betrieb dann schon stehen. Eine Gesamtsumme für
            alle vier nennen wir bewusst nicht, sie hängt an Ihrer
            Systemlandschaft.
          </ProseColumnsItem>
          <ProseColumnsItem title="Der Teil, der bei Ihnen liegt">
            Gebraucht wird ein lesender Zugang auf Bestellungen, Wareneingänge
            und Kreditorenstamm, ein Postfach für den Rechnungseingang und eine
            Person aus der Buchhaltung, die die Freigaberegeln festlegt: ab
            welchem Betrag wer zeichnet, welche Abweichung noch durchgeht, was
            ein Klärfall ist. An dieser Klärung scheitern solche Vorhaben, nicht
            an der Technik. Wer sie vorher trifft, spart zwei Abstimmungsrunden
            im Nachhinein.
          </ProseColumnsItem>
        </ProseColumns>

        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <Typo.H3>Womit wir anfangen würden</Typo.H3>
            <Typo.Paragraph>
              Mit dem Abgleich, sobald die Erfassung steht. Er ist der größte
              Zeitblock und der am klarsten geregelte. Wie das im Detail
              aussieht, zeigt unser Workflow zur{" "}
              <InternalLink
                href="/branchen/grosshandel/workflows/3-wege-rechnungspruefung"
                variant="underline"
              >
                dreistufigen Rechnungsprüfung
              </InternalLink>
              , und wie die Erfassung technisch gebaut wird, steht im Beitrag
              zum{" "}
              <InternalLink
                href="/blog/e-rechnung-automatisieren"
                variant="underline"
              >
                Automatisieren der E-Rechnung
              </InternalLink>
              .
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <Typo.H3>Womit wir nicht anfangen würden</Typo.H3>
            <Typo.Paragraph>
              Mit der Ablösung des Archivs. Das ist der Teil, der am meisten
              Aufmerksamkeit bekommt, weil er nach Ordnung aussieht, und der am
              wenigsten Arbeitszeit spart. Ein revisionssicheres Archiv ist
              Pflicht, aber es ist der letzte Schritt der Kette und kein guter
              erster. Wer dort beginnt, hat nach drei Monaten eine saubere
              Ablage und unverändert 1.800 Stunden Handarbeit davor.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>

        <Typo.Paragraph>
          Wenn Sie den Prozess von der anderen Seite her ansehen wollen: Was auf
          der Lieferantenseite davor passiert, steht auf unserer Seite zum{" "}
          <InternalLink href="/services/lieferantenmanagement" variant="underline">
            Lieferantenmanagement
          </InternalLink>
          . Wie ein fertiger Rechnungs-Agent im Großhandel aussieht, zeigt der{" "}
          <InternalLink
            href="/branchen/grosshandel/ki-agenten/invoice-bot"
            variant="underline"
          >
            Invoice-Bot
          </InternalLink>
          . Und wenn Sie zuerst wissen wollen, was so ein Vorhaben insgesamt
          kostet, ist unsere Übersicht zu{" "}
          <InternalLink href="/services/was-kostet-ki" variant="underline">
            den Kosten von KI-Projekten
          </InternalLink>{" "}
          der breitere Einstieg.
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper>
        <FaqContainer faqs={faqs} />
      </ContentWrapper>

      <ContentWrapper>
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
