import type { Metadata } from "next";
import Image from "next/image";
import ContentWrapper from "@/components/layout/content-wrapper";
import SimpleGrid from "@/components/layout/simple-grid";
import Typo from "@/components/ui/typo";
import GeoSummary from "@/components/ui/geo-summary";
import DataTable from "@/components/ui/data-table";
import KpiCard from "@/components/cards/kpi-card";
import ProseColumns from "@/components/ui/prose-columns";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/ui/timeline-as-steps";
import { FaqContainer } from "@/components/ui/faqs";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import ContactButton from "@/components/buttons/contact-button";
import InternalLink from "@/components/buttons/internal-link";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnCallToAction,
  Hero2ColumnSubtext,
  Hero2ColumnImage,
} from "@/components/heroes/hero-2-column";

export const metadata: Metadata = {
  title: "Software zur Angebotserstellung: 3 Wege im Vergleich | Bluebatch",
  description:
    "Welche Software zur Angebotserstellung sich für Unternehmen mit 50 bis 1.000 Mitarbeitenden lohnt: Rechnungsprogramm, CPQ-System oder Automatisierung auf dem vorhandenen ERP. Mit Preis und Einführungsdauer je Weg.",
  openGraph: {
    title:
      "Software zur Angebotserstellung: die drei Wege mit Preis und Dauer",
    description:
      "Verzeichnisse listen Produkte, ohne die Auswahlfrage zu beantworten. Hier stehen die drei Wege nebeneinander, jeweils mit Kosten und Einführungsdauer.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/software-angebotserstellung/hero.png",
        width: 1200,
        height: 630,
        alt: "Stapel gedruckter Angebote auf einem Schreibtisch",
      },
    ],
  },
  alternates: {
    canonical: "/services/software-angebotserstellung",
  },
};

const faqs = [
  {
    question: "Was kostet eine Software zur Angebotserstellung?",
    answer:
      "Das hängt vom Weg ab. Ein Rechnungsprogramm mit Angebotsfunktion liegt bei etwa 10 bis 30 Euro pro Nutzer und Monat. Ein CPQ-System kostet in der Regel 50 bis 150 Euro pro Nutzer und Monat, dazu kommt ein Einführungsprojekt im vier- bis fünfstelligen Bereich. Die Automatisierung auf dem vorhandenen ERP kostet bei uns 1.000 Euro Setup einmalig und 50 Euro Betrieb pro Monat, unabhängig von der Zahl der Nutzer.",
  },
  {
    question: "Brauche ich überhaupt eine eigene Angebotssoftware?",
    answer:
      "Wenn Sie bereits ein ERP oder eine Warenwirtschaft mit Angebotsmodul haben, meistens nicht. Der Engpass liegt dann selten am fehlenden Dokument, sondern am Zusammensuchen von Preisen, Konditionen und Verfügbarkeiten davor. Eine zweite Software löst das nicht, sie verlagert es. Prüfen Sie zuerst, an welcher Stelle im Ablauf die Zeit tatsächlich verloren geht.",
  },
  {
    question: "Was ist der Unterschied zwischen Angebotssoftware und CPQ?",
    answer:
      "Angebotssoftware im engeren Sinn erzeugt ein sauberes Angebotsdokument mit fortlaufender Nummer und Ihrem Layout. CPQ steht für Configure, Price, Quote und geht deutlich weiter: Das System kennt die zulässigen Produktvarianten, rechnet Preise regelbasiert aus und verhindert unmögliche Kombinationen. CPQ lohnt sich ab hoher Variantenzahl, für ein Standardsortiment ist es überdimensioniert.",
  },
  {
    question:
      "Lässt sich Angebotserstellung ohne neue Software automatisieren?",
    answer:
      "Ja. Wenn die Daten bereits im ERP, im CRM und in der Preisliste liegen, lässt sich der Weg von der Anfrage zum fertigen Angebotsentwurf automatisieren, ohne ein zweites System einzuführen. Die Automatisierung liest die Anfrage, holt Artikel, Preise und Kundenkonditionen aus den bestehenden Systemen und legt den Entwurf im ERP an. Freigegeben wird weiterhin von Hand.",
  },
  {
    question: "Wie lange dauert die Einführung?",
    answer:
      "Ein Rechnungsprogramm ist an einem Tag eingerichtet. Ein CPQ-System braucht typischerweise drei bis neun Monate, weil das Produktmodell und die Preisregeln erst abgebildet werden müssen. Eine Automatisierung auf dem vorhandenen ERP steht bei uns nach fünf Arbeitstagen als Pilot für eine Angebotsart.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Angebotserstellung</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Software zur Angebotserstellung: die drei Wege und was sie
              wirklich kosten
            </Hero2ColumnHeadline>

            <GeoSummary>
              Für die Angebotserstellung gibt es drei Wege: ein
              Rechnungsprogramm mit Angebotsfunktion für etwa 10 bis 30 Euro je
              Nutzer und Monat, ein CPQ-System für 50 bis 150 Euro je Nutzer und
              Monat plus Einführungsprojekt, oder die Automatisierung auf dem
              vorhandenen ERP für 1.000 Euro Setup und 50 Euro im Monat. Diese
              Seite ordnet die drei Wege für Unternehmen mit 50 bis 1.000
              Mitarbeitenden ein und nennt zu jedem Preis und Einführungsdauer.
            </GeoSummary>

            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Auswahl klären, 30 Minuten
              </ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Ohne Systemwechsel • Preis und Dauer je Weg • Pilot in 5
              Arbeitstagen
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/software-angebotserstellung/hero.png"
              type="image"
              alt="Stapel gedruckter Angebote auf einem Schreibtisch als Sinnbild für manuelle Angebotserstellung"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Bewusst vor der Produktfrage: der Ist-Zustand ist die Zahl, gegen die
          jedes Werkzeug antreten muss. Genau die fehlt im gesamten SERP. */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Die Frage vor der Software</Typo.H2>
        <Typo.Paragraph>
          Wer nach Software zur Angebotserstellung sucht, bekommt Verzeichnisse
          mit fünfundzwanzig Produkten pro Seite und Vergleichsportale, die drei
          Hersteller vorstellen. Was dort fehlt, ist die Zahl, gegen die jedes
          dieser Werkzeuge antreten muss: was die Angebotserstellung heute
          kostet, so wie sie gerade läuft.
        </Typo.Paragraph>
        <Typo.Paragraph>
          Rechnen Sie das zuerst aus. Nehmen Sie die Zahl der Angebote pro
          Monat, die durchschnittliche Bearbeitungszeit und den internen
          Stundensatz. Ein Vertriebsinnendienst, der 200 Angebote im Monat
          schreibt und pro Angebot 45 Minuten braucht, bindet 150 Stunden. Bei
          60 Euro Stundensatz sind das 9.000 Euro im Monat, allein für das
          Erstellen.
        </Typo.Paragraph>

        <SimpleGrid cols={3} className="my-10">
          <KpiCard valueText="200" subtitle="Angebote pro Monat" />
          <KpiCard valueText="45 min" subtitle="je Angebot im Schnitt" />
          <KpiCard
            valueText="9.000 €"
            subtitle="gebundene Arbeitszeit im Monat"
            variant="danger"
          />
        </SimpleGrid>

        <Typo.Paragraph>
          Entscheidend ist die zweite Frage: Wo genau gehen diese 45 Minuten
          hin? In den meisten Betrieben nicht in das Dokument. Das Dokument
          erzeugt das ERP in zwei Minuten. Die Zeit verschwindet davor, beim
          Zusammensuchen von Artikelnummern, Staffelpreisen,
          Kundenkonditionen und Lieferzeiten aus drei verschiedenen Quellen.
        </Typo.Paragraph>

        <Image
          src="/images/software-angebotserstellung/angebotsweg.png"
          alt="Ablauf der Angebotserstellung von der Anfrage bis zum Versand: die Zeit geht in Preise suchen, Konditionen prüfen und Kalkulation, nicht in das Dokument"
          width={1200}
          height={675}
          className="w-full h-auto rounded-2xl my-8"
        />

        <Typo.Paragraph>
          Das ist der Grund, warum ein zusätzliches Angebotsprogramm bei
          Unternehmen mit bestehendem ERP so oft enttäuscht: Es verbessert den
          Schritt, der ohnehin schnell war, und lässt die drei davor unberührt.
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper>
        <Typo.H2>Die drei Wege im Vergleich</Typo.H2>
        <Typo.Paragraph>
          Das Angebot am Markt zerfällt in drei Gruppen, die selten
          nebeneinander gestellt werden, weil sie von verschiedenen Anbietern
          verkauft werden. Die Preise unten sind Spannen aus öffentlich
          einsehbaren Angeboten, die Zeile zur Automatisierung ist unser
          eigenes, festes Angebot.
        </Typo.Paragraph>

        <Image
          src="/images/software-angebotserstellung/drei-wege.png"
          alt="Die drei Wege zur Angebotserstellung: Rechnungsprogramm, CPQ-System und Automatisierung auf dem vorhandenen ERP"
          width={1200}
          height={675}
          className="w-full h-auto rounded-2xl my-8"
        />

        <ProseColumns cols={3}>
          <ProseColumns.Item title="Rechnungsprogramm mit Angebotsfunktion">
            <Typo.Paragraph className="text-gray-600">
              Werkzeuge wie sevdesk, Lexware oder vergleichbare Programme.
              Angebot schreiben, in Rechnung umwandeln, fertig. Eingerichtet an
              einem Tag, etwa 10 bis 30 Euro je Nutzer und Monat.
            </Typo.Paragraph>
            <Typo.Paragraph className="text-gray-600">
              Passt für Betriebe ohne ERP und mit überschaubarem Sortiment. Wer
              bereits eine Warenwirtschaft hat, kauft hier eine Funktion ein
              zweites Mal.
            </Typo.Paragraph>
          </ProseColumns.Item>
          <ProseColumns.Item title="CPQ-System">
            <Typo.Paragraph className="text-gray-600">
              Configure, Price, Quote. Das System kennt die zulässigen
              Varianten, rechnet regelbasiert und verhindert unmögliche
              Kombinationen. Typisch 50 bis 150 Euro je Nutzer und Monat plus
              Einführungsprojekt, drei bis neun Monate.
            </Typo.Paragraph>
            <Typo.Paragraph className="text-gray-600">
              Lohnt sich bei echter Variantenvielfalt, etwa im Maschinen- und
              Anlagenbau. Für ein Katalogsortiment ist der Aufwand nicht zu
              rechtfertigen.
            </Typo.Paragraph>
          </ProseColumns.Item>
          <ProseColumns.Item title="Automatisierung auf dem vorhandenen ERP">
            <Typo.Paragraph className="text-gray-600">
              Kein zweites System. Die Anfrage wird gelesen, Artikel, Preise und
              Kundenkonditionen kommen aus ERP und CRM, der Entwurf entsteht
              direkt im ERP. 1.000 Euro Setup einmalig, 50 Euro im Monat.
            </Typo.Paragraph>
            <Typo.Paragraph className="text-gray-600">
              Passt, wenn die Daten schon da sind und die Zeit beim
              Zusammensuchen verloren geht. Das ist der Normalfall ab etwa 50
              Mitarbeitenden.
            </Typo.Paragraph>
          </ProseColumns.Item>
        </ProseColumns>

        <DataTable className="my-10">
          <DataTable.Row>
            <DataTable.HeaderCell>Weg</DataTable.HeaderCell>
            <DataTable.HeaderCell>Kosten</DataTable.HeaderCell>
            <DataTable.HeaderCell>Bis zum Einsatz</DataTable.HeaderCell>
            <DataTable.HeaderCell>Zweites System nötig</DataTable.HeaderCell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell bold>Rechnungsprogramm</DataTable.Cell>
            <DataTable.Cell>10 bis 30 € je Nutzer und Monat</DataTable.Cell>
            <DataTable.Cell>1 Tag</DataTable.Cell>
            <DataTable.Cell>Ja</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell bold>CPQ-System</DataTable.Cell>
            <DataTable.Cell>
              50 bis 150 € je Nutzer und Monat, dazu Einführungsprojekt
            </DataTable.Cell>
            <DataTable.Cell>3 bis 9 Monate</DataTable.Cell>
            <DataTable.Cell>Ja</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell bold>Automatisierung auf dem ERP</DataTable.Cell>
            <DataTable.Cell>
              1.000 € Setup einmalig, 50 € im Monat, unabhängig von der
              Nutzerzahl
            </DataTable.Cell>
            <DataTable.Cell>5 Arbeitstage bis zum Piloten</DataTable.Cell>
            <DataTable.Cell>Nein</DataTable.Cell>
          </DataTable.Row>
        </DataTable>

        <Typo.Paragraph>
          Der Unterschied bei den Kosten liegt weniger im Monatspreis als im
          Abrechnungsmodell. Rechnungsprogramm und CPQ rechnen je Nutzer ab, die
          Rechnung wächst also mit dem Vertriebsteam. Bei zwölf Personen im
          Innendienst liegt ein CPQ-System schnell bei über 1.000 Euro im Monat,
          bevor das erste Angebot geschrieben ist.
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Welcher Weg zu Ihnen passt</Typo.H2>
        <Typo.Paragraph>
          Vier Fragen trennen die drei Wege zuverlässiger als jede
          Funktionsliste. Feature-Häkchen helfen an dieser Stelle nicht, weil
          alle drei Gruppen ein Angebotsdokument erzeugen können.
        </Typo.Paragraph>

        <DataTable className="my-10">
          <DataTable.Row>
            <DataTable.HeaderCell>Frage</DataTable.HeaderCell>
            <DataTable.HeaderCell>Antwort</DataTable.HeaderCell>
            <DataTable.HeaderCell>Weg</DataTable.HeaderCell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell bold>
              Haben Sie ein ERP oder eine Warenwirtschaft?
            </DataTable.Cell>
            <DataTable.Cell>Nein</DataTable.Cell>
            <DataTable.Cell>Rechnungsprogramm</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell bold>
              Konfigurieren Ihre Kunden Produkte aus Optionen?
            </DataTable.Cell>
            <DataTable.Cell>Ja, mit Abhängigkeiten</DataTable.Cell>
            <DataTable.Cell>CPQ-System</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell bold>
              Liegen Preise und Konditionen bereits im System?
            </DataTable.Cell>
            <DataTable.Cell>Ja, aber verteilt</DataTable.Cell>
            <DataTable.Cell>Automatisierung</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell bold>
              Geht die Zeit für das Dokument oder für die Recherche davor drauf?
            </DataTable.Cell>
            <DataTable.Cell>Für die Recherche</DataTable.Cell>
            <DataTable.Cell>Automatisierung</DataTable.Cell>
          </DataTable.Row>
        </DataTable>

        <Typo.Paragraph>
          Wenn drei der vier Antworten auf dieselbe Spalte zeigen, ist die
          Entscheidung gefallen. Zeigen sie in zwei Richtungen, liegt das
          meistens daran, dass ein Teil des Sortiments konfigurierbar ist und
          der Rest nicht. Dann lohnt es sich, mit der Angebotsart zu beginnen,
          die das größte Volumen hat, statt beide Fälle in einem Werkzeug lösen
          zu wollen.
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper>
        <Typo.H2>Wie wir die Angebotserstellung automatisieren</Typo.H2>
        <Typo.Paragraph>
          Wir führen kein zweites System ein. Wir setzen auf das ERP auf, das
          bei Ihnen schon läuft, und nehmen den Teil ab, der vor dem Dokument
          liegt. Der Pilot umfasst eine Angebotsart und steht nach fünf
          Arbeitstagen.
        </Typo.Paragraph>

        <TimelineAsSteps className="my-10">
          <TimelineAsStepsStep value={1}>
            <Typo.H3>Angebotsart festlegen</Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              Wir nehmen die Angebotsart mit dem größten Volumen, nicht die
              komplizierteste. Dazu 20 echte Angebote der letzten Wochen als
              Referenz.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={2}>
            <Typo.H3>Datenquellen anbinden</Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              Lesender Zugriff auf ERP, Preisliste und CRM. Keine Migration,
              keine Änderung an Ihren Stammdaten.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={3}>
            <Typo.H3>Entwurf erzeugen lassen</Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              Aus der eingehenden Anfrage entsteht ein Angebotsentwurf im ERP,
              mit Artikeln, Staffelpreisen und Kundenkonditionen.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={4}>
            <Typo.H3>Gegen die Referenz prüfen</Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              Die Entwürfe werden gegen die 20 echten Angebote gehalten.
              Abweichungen gehen zurück in die Regeln, bis die Trefferquote
              steht.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={5} isLast>
            <Typo.H3>Freigabe bleibt bei Ihnen</Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              Der Innendienst prüft und gibt frei wie vorher. Automatisiert ist
              das Zusammensuchen, nicht die Entscheidung.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
        </TimelineAsSteps>

        <Typo.Paragraph>
          Für den Großhandel gibt es diesen Ablauf als fertigen Baustein: der{" "}
          <InternalLink href="/branchen/grosshandel/ki-agenten/angebots-bot">
            Angebots-Bot
          </InternalLink>{" "}
          erzeugt Angebotsentwürfe aus eingehenden Anfragen. Wie der Ablauf im
          Handel konkret aussieht, steht in unserem Beitrag zur{" "}
          <InternalLink href="/blog/automatische-angebotserstellung-grosshandel">
            automatischen Angebotserstellung im Großhandel
          </InternalLink>
          . Welche Systeme sonst noch im Spiel sind, ordnet der Überblick zur{" "}
          <InternalLink href="/blog/grosshandel-software">
            Software im Großhandel
          </InternalLink>{" "}
          ein.
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Häufige Fragen</Typo.H2>
        <FaqContainer faqs={faqs} />
      </ContentWrapper>

      <ConsultationCtaDefault buttonText="Auswahl klären, 30 Minuten" />
    </>
  );
}
