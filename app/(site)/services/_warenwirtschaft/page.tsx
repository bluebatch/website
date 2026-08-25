import type { Metadata } from "next";
import Image from "next/image";
import { ogImages } from "@/lib/og";
import ContentWrapper from "@/components/layout/content-wrapper";
import SimpleGrid from "@/components/layout/simple-grid";
import Typo from "@/components/ui/typo";
import GeoSummary from "@/components/ui/geo-summary";
import IntroBox from "@/components/ui/intro-box";
import DataTable from "@/components/ui/data-table";
import NumberedList from "@/components/ui/numbered-list";
import ProseColumns, { ProseColumnsItem } from "@/components/ui/prose-columns";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/ui/timeline-as-steps";
import SimpleCard from "@/components/cards/simple-card";
import KpiCard from "@/components/cards/kpi-card";
import ProsCons from "@/components/sections/pros-cons";
import RoiCalculation from "@/components/sections/roi-calculation";
import { FaqContainer } from "@/components/ui/faqs";
import StatsLeadHero from "@/components/heroes/stats-lead-hero";
import ContactButton from "@/components/buttons/contact-button";
import InternalLink from "@/components/buttons/internal-link";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";

const meta = {
  title: "Warenwirtschaft: was das System abdeckt und wo ERP anfängt",
  description:
    "Vier Fachquellen ziehen die Grenze zwischen Warenwirtschaft und ERP unterschiedlich, die autoritativste sagt, dass es sie so nicht gibt. Was ein WaWi wirklich leistet, was die Handarbeit daneben kostet und wann Ergänzen billiger ist als Ersetzen.",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: "Warenwirtschaft: Aufgaben, ERP-Abgrenzung und Kosten",
    description: meta.description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages("Warenwirtschaft", "Services"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Warenwirtschaft: Aufgaben, ERP-Abgrenzung und Kosten",
    description: meta.description,
    images: ogImages("Warenwirtschaft", "Services").map((i) => i.url),
  },
  alternates: {
    canonical: "/services/warenwirtschaft",
  },
};

const faqs = [
  {
    question: "Was ist Warenwirtschaft?",
    answer:
      "Warenwirtschaft umfasst alle Abläufe, die den Weg einer Ware durch das Unternehmen steuern: Bedarf ermitteln, beim Lieferanten bestellen, Wareneingang buchen, einlagern, kommissionieren, verkaufen und versenden. Ein Warenwirtschaftssystem, kurz WaWi oder WWS, bildet diesen Kreislauf digital ab und führt dabei die Bestände, die Artikelstammdaten und die zugehörigen Belege. Es ist damit das System, das jederzeit beantworten kann, was von einem Artikel da ist, was davon schon verkauft und was noch bestellt ist.",
  },
  {
    question: "Was ist der Unterschied zwischen Warenwirtschaft und ERP?",
    answer:
      "Die verbreitete Antwort lautet: Warenwirtschaft steuert den Warenfluss, ein ERP steuert zusätzlich Finanzbuchhaltung, Personal und Controlling. Diese Antwort ist brauchbar, aber sie ist keine harte Grenze. Die Wikipedia hält ausdrücklich fest, dass der Übergang zwischen beiden Systemtypen nicht klar definiert ist, während Anbieterseiten die Trennung als eindeutig darstellen. Praktisch heißt das: Der Funktionsumfang zweier Produkte sagt mehr aus als ihr Etikett. Fast jedes am Markt verkaufte Warenwirtschaftssystem für den Mittelstand bringt heute Faktura und Teile der Buchhaltung mit, und fast jedes ERP enthält eine Warenwirtschaft.",
  },
  {
    question: "Was kostet ein Warenwirtschaftssystem?",
    answer:
      "Die im Markt genannten Zahlen sind schwer vergleichbar, weil die Einheiten wechseln. Für Cloud-Systeme werden rund 40 bis 170 Euro je Nutzer und Monat genannt, an anderer Stelle 50 bis 150 Euro je Nutzer und Monat. Für On-Premise-Lizenzen stehen 600 bis 1.200 Euro einmalig je Nutzer im Raum, zuzüglich 15 bis 20 Prozent Wartung im Jahr. Einstiegsprodukte für Kleinbetriebe werden dagegen pauschal je Installation abgerechnet, etwa ab 54,90 Euro im Monat für drei bis fünf Arbeitsplätze. Der größte und am seltensten genannte Posten ist das Einführungsprojekt: Eine Quelle beziffert es mit rund 10.000 Euro bis weit über 150.000 Euro.",
  },
  {
    question: "Braucht ein Großhändler mit 50 bis 1.000 Mitarbeitenden ein neues Warenwirtschaftssystem?",
    answer:
      "In den meisten Fällen, die wir sehen, nicht. Wenn das vorhandene System die Bestände korrekt führt und die Belege sauber erzeugt, kommt der Schmerz selten aus dem System, sondern aus der Handarbeit daneben: abgetippte PDF-Bestellungen, händisch abgeglichene Auftragsbestätigungen, Bestände, die zwischen Shop und WaWi zweimal gepflegt werden. Diese Arbeit lässt sich abnehmen, ohne das System zu wechseln. Ein Systemwechsel ist dann angebracht, wenn das WaWi Prozesse gar nicht abbilden kann, wenn der Hersteller den Support einstellt oder wenn es keine Schnittstelle nach außen gibt.",
  },
  {
    question: "Was lässt sich in der Warenwirtschaft automatisieren?",
    answer:
      "Automatisierbar ist alles, was Regeln folgt und eine eindeutige Datenquelle hat: Bestellungen aus PDF und E-Mail auslesen und als Auftrag anlegen, Auftragsbestätigungen gegen die Bestellung prüfen, Bestände zwischen Systemen abgleichen, Nachbestellungen bei Unterschreiten eines Meldebestands auslösen, Belege erzeugen und versenden. Nicht automatisierbar ist alles, was eine Abwägung enthält: Lieferantenauswahl, Preisverhandlung, Sortimentsentscheidungen, der Umgang mit Ausnahmen und Reklamationen. Die brauchbare Trennlinie ist nicht einfach oder schwer, sondern regelbasiert oder abwägend.",
  },
];

export default function Page() {
  return (
    <>
      <StatsLeadHero>
        <StatsLeadHero.PreHeadline>Warenwirtschaft</StatsLeadHero.PreHeadline>
        <StatsLeadHero.Headline>
          Warenwirtschaft: was das System abdeckt und wo ERP anfängt
        </StatsLeadHero.Headline>
        <GeoSummary>
          Warenwirtschaft steuert den Weg der Ware vom Bedarf bis zum Versand,
          ein Warenwirtschaftssystem bildet diesen Kreislauf ab und führt
          Bestände, Stammdaten und Belege. Wer den Begriff nachschlägt, findet
          fünf Fachquellen mit drei, fünf, fünf, sechs und sieben Aufgaben für
          denselben Vorgang, und eine Abgrenzung zum ERP, die sich frontal
          widerspricht: Vier Quellen ziehen eine klare Grenze, die
          autoritativste hält fest, dass der Übergang nicht klar definiert ist.
          Diese Seite räumt das auf, rechnet vor, was die Handarbeit neben dem
          System kostet, bei 600 Aufträgen im Monat rund 510 Arbeitsstunden
          oder 14.280 Euro im Jahr, und trennt regelbasierte von abwägenden
          Schritten. Für Händler und produzierende Betriebe mit 50 bis 1.000
          Mitarbeitenden, die bereits ein System im Einsatz haben.
        </GeoSummary>
        <StatsLeadHero.Cta>
          <ContactButton icon="chat">
            Warenwirtschaft durchsprechen, 30 Minuten
          </ContactButton>
        </StatsLeadHero.Cta>
        <StatsLeadHero.Stats>
          <KpiCard
            valueText="3 bis 7"
            subtitle="Aufgaben je nach Quelle, für denselben Vorgang"
          />
          <KpiCard
            valueText="14.280 €"
            subtitle="Handarbeit neben dem System, pro Jahr"
          />
          <KpiCard
            valueText="0 von 6"
            subtitle="gelesene Quellen behandeln ergänzen statt ersetzen"
          />
        </StatsLeadHero.Stats>
        <StatsLeadHero.Media
          src="/images/warenwirtschaft/hero.png"
          alt="Leerer Gang in einem Großhandelslager am frühen Morgen, Regale mit Kartons, ein einzelnes Handterminal auf einem Rollwagen"
        />
      </StatsLeadHero>

      <ContentWrapper>
        <IntroBox size="small">
          <IntroBox.PreHeadline>Der Ausgangspunkt</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Warum die Frage überhaupt schwer zu beantworten ist
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Wer nach Warenwirtschaft sucht, landet auf zwei Sorten Seiten: in
            Lexikonartikeln, die den Begriff sauber definieren und danach
            aufhören, und auf Anbieterseiten, die ab dem zweiten Absatz ein
            Produkt verkaufen. Beide beantworten die Frage nicht, die im
            Mittelstand tatsächlich ansteht. Die lautet nämlich fast nie, was
            Warenwirtschaft ist, sondern ob das vorhandene System noch reicht.
          </IntroBox.Paragraph>
        </IntroBox>

        <Typo.Paragraph>
          Für diese Seite haben wir die sechs Fachbeiträge gelesen, die zu
          diesem Begriff vorne stehen: ein ERP-Lexikon, zwei Wissensbereiche von
          Softwareherstellern, den Wikipedia-Artikel, einen Herstellerblog und
          eine Vergleichsseite. Das Ergebnis ist unangenehm eindeutig. Die
          Quellen widersprechen sich in drei Punkten, und keine einzige erwähnt,
          dass es die anderen gibt.
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper colorScheme="gradient-primary-dark">
        <Typo.H2 className="text-white">
          Die ERP-Abgrenzung: vier Antworten, die sich ausschließen
        </Typo.H2>
        <Typo.Paragraph className="text-white/90">
          Diese Frage ist keine Begriffsklauberei. An ihr hängt, ob ein Betrieb
          ein zweites System kauft oder das vorhandene erweitert. Wer die Grenze
          für scharf hält, sucht bei jedem neuen Bedarf ein neues Produkt. Wer
          weiß, dass sie unscharf ist, prüft zuerst, was schon da ist.
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper>
        <DataTable>
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Quelle</DataTable.HeaderCell>
              <DataTable.HeaderCell>Position zur Grenze</DataTable.HeaderCell>
              <DataTable.HeaderCell>Folge für die Praxis</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            <DataTable.Row>
              <DataTable.Cell bold>Enzyklopädie</DataTable.Cell>
              <DataTable.Cell>
                Der Übergang zwischen Warenwirtschaftssystem und ERP-System ist
                nicht klar definiert. Abgegrenzt wird allenfalls über den
                Funktionsumfang.
              </DataTable.Cell>
              <DataTable.Cell>
                Produkte einzeln prüfen, das Etikett sagt nichts
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Vergleichsportal</DataTable.Cell>
              <DataTable.Cell>
                Jedes ERP enthält eine Warenwirtschaft, aber nicht jede
                Warenwirtschaft ist ein ERP. Klare Teilmengenbeziehung.
              </DataTable.Cell>
              <DataTable.Cell>
                Ein ERP kann ein WaWi ersetzen, umgekehrt nicht
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Herstellerblog</DataTable.Cell>
              <DataTable.Cell>
                Das Warenwirtschaftssystem ist ein Teilmodul eines
                unternehmensweiten ERP-Systems.
              </DataTable.Cell>
              <DataTable.Cell>
                WaWi als Baustein, nicht als eigenständige Kategorie
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>ERP-Lexikon und Wissensbereich</DataTable.Cell>
              <DataTable.Cell>
                WaWi steuert den Warenfluss, ERP integriert zusätzlich
                Buchhaltung, Personalwesen, Controlling und CRM. Saubere
                Trennung nach Funktionsbereichen.
              </DataTable.Cell>
              <DataTable.Cell>
                Zwei Kategorien, Wechsel bei wachsendem Bedarf
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable.Body>
        </DataTable>

        <Image
          src="/images/warenwirtschaft/erp-grenze.png"
          alt="Diagramm mit zwei überlappenden Feldern Warenwirtschaft und ERP, dazwischen ein unscharfer Überlappungsbereich mit Faktura und Buchhaltung"
          width={1200}
          height={675}
          className="my-8 w-full rounded-xl"
        />

        <Typo.Paragraph>
          Vier Quellen behaupten eine klare Grenze, die fünfte sagt ausdrücklich,
          dass es sie nicht gibt. Auflösen lässt sich das nur, indem man
          aufhört, nach der Definition zu fragen, und stattdessen nach dem
          Funktionsumfang fragt. In der Praxis ist die Grenze längst
          verschwommen: Fast jedes Warenwirtschaftssystem, das heute an den
          Mittelstand verkauft wird, bringt Faktura mit, viele auch eine
          Anbindung an die Buchhaltung. Umgekehrt ist die Warenwirtschaft in
          jedem ERP enthalten.
        </Typo.Paragraph>

        <Typo.Paragraph>
          Die brauchbare Faustregel für ein Auswahlgespräch lautet deshalb nicht
          Warenwirtschaft oder ERP, sondern: Führt das System die Bestände als
          führende Quelle, oder holt es sie sich woanders her? Genau daran
          entscheidet sich, welches System bei einer Automatisierung angebunden
          wird und welches nur mitliest.
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>
          Was ein Warenwirtschaftssystem abdeckt, ohne Zählerei
        </Typo.H2>
        <Typo.Paragraph>
          Die gelesenen Quellen nennen drei, fünf, fünf, sechs beziehungsweise
          fünf plus sieben Aufgaben für denselben Vorgang. Das wirkt nach
          fehlendem Konsens, ist aber vor allem eine Frage der Schnittführung:
          Ob der Wareneingang eine eigene Stufe ist oder zum Einkauf gehört, ist
          eine Darstellungsentscheidung, keine fachliche. Der Kreislauf
          darunter ist bei allen derselbe.
        </Typo.Paragraph>

        <TimelineAsSteps>
          <TimelineAsStepsStep value={1} index={0}>
            <Typo.H3 className="mt-1!">Bedarf ermitteln</Typo.H3>
            <Typo.Paragraph>
              Meldebestände, Absatzverlauf und offene Kundenaufträge ergeben, was nachbestellt werden muss. Der Schritt ist zu großen Teilen rechenbar, wird aber in vielen Betrieben von Hand überschrieben.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={2} index={1}>
            <Typo.H3 className="mt-1!">Bestellen</Typo.H3>
            <Typo.Paragraph>
              Bestellung an den Lieferanten, Auftragsbestätigung zurück, Termine und Preise abgleichen. Der Abgleich ist der Schritt, der am zuverlässigsten liegen bleibt.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={3} index={2}>
            <Typo.H3 className="mt-1!">Wareneingang buchen</Typo.H3>
            <Typo.Paragraph>
              Liefermenge gegen Bestellung prüfen, Abweichungen dokumentieren, Bestand erhöhen. Ab hier stimmt der Bestand oder er stimmt für den Rest des Prozesses nicht mehr.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={4} index={3}>
            <Typo.H3 className="mt-1!">Lagern und disponieren</Typo.H3>
            <Typo.Paragraph>
              Lagerplätze, Chargen, Mindesthaltbarkeiten, Umlagerungen. Der Bereich, in dem sich Warenwirtschaft und Lagerverwaltung überschneiden.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={5} index={4}>
            <Typo.H3 className="mt-1!">Verkaufen und fakturieren</Typo.H3>
            <Typo.Paragraph>
              Kundenauftrag anlegen, Verfügbarkeit prüfen, Lieferschein und Rechnung erzeugen. Der Punkt, an dem die meisten Betriebe die meiste Tipparbeit haben.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={6} index={5} isLast>
            <Typo.H3 className="mt-1!">Kommissionieren und versenden</Typo.H3>
            <Typo.Paragraph>
              Picken, packen, Versandpapiere, Übergabe an den Dienstleister, Bestand abbuchen. Schließt den Kreis zurück zum Bedarf.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
        </TimelineAsSteps>

        <Image
          src="/images/warenwirtschaft/kreislauf.png"
          alt="Kreisförmiges Ablaufdiagramm des Warenkreislaufs mit sechs beschrifteten Stationen von Bedarf bis Versand"
          width={1200}
          height={675}
          className="my-8 w-full rounded-xl"
        />

        <Typo.Paragraph>
          Wer diese sechs Stationen mit den Zählungen der Fachquellen
          vergleicht, sieht, dass niemand etwas Anderes meint. Für die Auswahl
          eines Systems ist die Anzahl der Stufen deshalb kein Kriterium. Ein
          Kriterium ist dagegen, an welchen dieser Stationen im eigenen Betrieb
          heute noch Papier, PDF oder eine zweite Excel-Datei im Spiel ist.
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper>
        <Typo.H2>Was die Handarbeit neben dem System kostet</Typo.H2>
        <Typo.Paragraph>
          Keine der sechs gelesenen Seiten rechnet vor, was der Ist-Zustand
          kostet. Damit fehlt die Vergleichsgröße, gegen die jede Anschaffung
          und jede Automatisierung antreten müsste. Die folgende Rechnung
          schließt diese Lücke mit offengelegten Annahmen. Sie beschreibt einen
          Händler, der ein funktionierendes Warenwirtschaftssystem im Einsatz
          hat, und zählt nur die Arbeit, die daneben von Hand passiert.
        </Typo.Paragraph>

        <RoiCalculation className="my-8">
          <RoiCalculation.Assumption>
            Händler mit 600 Kundenaufträgen im Monat, davon 45 Prozent als PDF
            oder Fließtext per E-Mail. 180 Lieferantenbestellungen im Monat.
            Bestandsabgleich zwischen Shop und Warenwirtschaft zweimal je Woche.
            Innendienst, Vollkosten 28 Euro je Stunde.
          </RoiCalculation.Assumption>
          <RoiCalculation.Row label="Aufträge abtippen: 270 × 6 Minuten">
            27 Stunden im Monat
          </RoiCalculation.Row>
          <RoiCalculation.Row label="Auftragsbestätigungen gegen Bestellung prüfen: 180 × 3 Minuten">
            9 Stunden im Monat
          </RoiCalculation.Row>
          <RoiCalculation.Row label="Bestände abgleichen: 8,7 × 45 Minuten">
            6,5 Stunden im Monat
          </RoiCalculation.Row>
          <RoiCalculation.Row label="Summe Arbeitszeit im Jahr" highlight>
            510 Stunden
          </RoiCalculation.Row>
          <RoiCalculation.Total label="Kosten der Handarbeit im Jahr">
            14.280 €
          </RoiCalculation.Total>
          <RoiCalculation.Source>
            Vollkostensatz 28 Euro je Stunde Innendienst, derselbe Standard wie
            in unserem ROI-Rechner. Der Anteil der Aufträge, die als PDF oder
            E-Mail hereinkommen, liegt in unseren Großhandelsprojekten zwischen
            40 und 55 Prozent; hier ist die Mitte angesetzt. Zeiten je Vorgang
            konservativ geschätzt.
          </RoiCalculation.Source>
        </RoiCalculation>

        <Typo.Paragraph>
          Der Punkt an dieser Rechnung ist nicht die Genauigkeit, sondern die
          Größenordnung. 510 Stunden sind rund ein Drittel einer Vollzeitstelle,
          und keine dieser Stunden bringt eine Entscheidung hervor. Sie
          entstehen an den Übergängen zwischen Systemen und Formaten. Ein neues
          Warenwirtschaftssystem beseitigt diese Übergänge nicht automatisch,
          weil die Bestellungen weiter als PDF hereinkommen.
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Was die Systeme kosten, auf eine Einheit gebracht</Typo.H2>
        <Typo.Paragraph>
          Preise nennt der Markt durchaus. Vergleichbar sind sie trotzdem nicht,
          weil die Einheiten wechseln: Mal wird je Nutzer und Monat gerechnet,
          mal pauschal je Installation für eine Handvoll Arbeitsplätze, mal
          einmalig je Lizenz. Die folgende Tabelle bringt die im Markt genannten
          Spannen auf eine gemeinsame Bezugsgröße von 25 Nutzern.
        </Typo.Paragraph>

        <DataTable>
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Modell</DataTable.HeaderCell>
              <DataTable.HeaderCell>Genannte Spanne</DataTable.HeaderCell>
              <DataTable.HeaderCell>Bei 25 Nutzern im Jahr</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            <DataTable.Row>
              <DataTable.Cell bold>Cloud, je Nutzer</DataTable.Cell>
              <DataTable.Cell>40 bis 170 € je Nutzer und Monat</DataTable.Cell>
              <DataTable.Cell>12.000 bis 51.000 €</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Cloud, zweite Quelle</DataTable.Cell>
              <DataTable.Cell>50 bis 150 € je Nutzer und Monat</DataTable.Cell>
              <DataTable.Cell>15.000 bis 45.000 €</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>On-Premise-Lizenz</DataTable.Cell>
              <DataTable.Cell>
                600 bis 1.200 € einmalig je Nutzer, plus 15 bis 20 % Wartung
              </DataTable.Cell>
              <DataTable.Cell>
                15.000 bis 30.000 € einmalig, danach 2.250 bis 6.000 € im Jahr
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Einstiegsprodukt, je Installation</DataTable.Cell>
              <DataTable.Cell>
                ab 54,90 € im Monat für 3 bis 5 Arbeitsplätze
              </DataTable.Cell>
              <DataTable.Cell>
                rechnerisch rund 3.300 €, aber anderer Funktionsumfang
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Einführungsprojekt</DataTable.Cell>
              <DataTable.Cell>
                rund 10.000 € bis weit über 150.000 €
              </DataTable.Cell>
              <DataTable.Cell>
                einmalig, unabhängig vom Lizenzmodell
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable.Body>
        </DataTable>

        <Image
          src="/images/warenwirtschaft/kostenvergleich.png"
          alt="Balkendiagramm mit drei beschrifteten Kostenmodellen für 25 Nutzer, Cloud je Nutzer deutlich höher als Einstiegsprodukt je Installation"
          width={1200}
          height={675}
          className="my-8 w-full rounded-xl"
        />

        <Typo.Paragraph>
          Der auffälligste Bruch steht in der vierten Zeile. Ein Einstiegspreis
          von 54,90 Euro im Monat wirkt neben 40 bis 170 Euro je Nutzer wie ein
          Schnäppchen, gilt aber je Installation für drei bis fünf
          Arbeitsplätze. Rechnet man ihn auf 25 Nutzer hoch, landet man bei rund
          11 Euro je Nutzer und Monat, also bei einem Viertel bis einem
          Fünfzehntel der übrigen Angebote. Der Unterschied ist kein Rabatt,
          sondern ein anderer Produktzuschnitt: Diese Systeme sind für Betriebe
          mit wenigen Arbeitsplätzen gebaut und bringen weder Mehrlager noch
          Chargenführung noch offene Schnittstellen mit.
        </Typo.Paragraph>

        <Typo.Paragraph>
          Der zweite Punkt ist die letzte Zeile. Das Einführungsprojekt ist der
          größte und am stärksten schwankende Posten, und von den sechs
          gelesenen Quellen nennt ihn genau eine. Wer die Lizenzkosten
          vergleicht und die Einführung ausblendet, vergleicht den kleineren
          Teil der Rechnung.
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper>
        <Typo.H2>Wo ein Warenwirtschaftssystem stark ist und wo es aufhört</Typo.H2>

        <ProsCons className="my-8">
          <ProsCons.Pros>
            <ProsCons.Item
              title="Ein führender Bestand"
              description="Der wichtigste Beitrag ist eine einzige verbindliche Antwort auf die Frage, was da ist. Alles Weitere hängt daran, von der Verfügbarkeitsprüfung im Verkauf bis zur Disposition."
            />
            <ProsCons.Item
              title="Belege ohne Zweitpflege"
              description="Auftrag, Lieferschein und Rechnung entstehen aus denselben Daten. Das ist der Grund, warum selbst ein altes System selten das eigentliche Problem ist."
            />
            <ProsCons.Item
              title="Nachvollziehbarkeit"
              description="Chargen, Seriennummern und Bewegungsdaten sind dokumentiert. Für Betriebe mit Rückverfolgungspflichten ist das nicht optional."
            />
          </ProsCons.Pros>
          <ProsCons.Cons>
            <ProsCons.Item
              title="Die Eingänge bleiben unstrukturiert"
              description="Das System verarbeitet, was in seinen Masken landet. Wie die Bestellung aus dem PDF-Anhang dorthin kommt, ist keine Funktion der Warenwirtschaft, sondern Handarbeit davor."
            />
            <ProsCons.Item
              title="Abgleiche zwischen Systemen"
              description="Shop, Marktplatz, Kasse und Warenwirtschaft führen jeweils eigene Bestände. Ohne Schnittstelle entsteht genau die Doppelpflege, die in der Rechnung oben mit 6,5 Stunden im Monat steht."
            />
            <ProsCons.Item
              title="Ausnahmen"
              description="Teillieferung, abweichender Preis, kurzfristige Umdisposition: Der Standardweg ist abgebildet, der Sonderfall landet im Postfach eines Mitarbeitenden."
            />
          </ProsCons.Cons>
        </ProsCons>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Regelbasiert oder abwägend: die brauchbare Trennlinie</Typo.H2>
        <Typo.Paragraph>
          Die gelesenen Quellen streifen das Thema Automatisierung, ziehen die
          Linie aber nirgends systematisch. Sie verläuft nicht zwischen einfach
          und schwer, sondern zwischen Schritten, die einer Regel folgen und
          eine eindeutige Datenquelle haben, und Schritten, die eine Abwägung
          enthalten.
        </Typo.Paragraph>

        <SimpleGrid cols={2}>
          <SimpleCard>
            <Typo.H3>Lässt sich abgeben</Typo.H3>
            <Typo.Paragraph>
              Bestellungen aus PDF und E-Mail auslesen und als Auftrag anlegen.
              Auftragsbestätigungen gegen die Bestellung prüfen und nur die
              Abweichungen melden. Bestände zwischen Shop und Warenwirtschaft
              abgleichen. Nachbestellungen beim Unterschreiten des
              Meldebestands vorbereiten. Belege erzeugen und versenden.
              Lieferscheine und Rechnungen einander zuordnen.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3>Bleibt Kopfarbeit</Typo.H3>
            <Typo.Paragraph>
              Welcher Lieferant bei gleichem Preis den Zuschlag bekommt. Ob ein
              Artikel ins Sortiment kommt oder ausgelistet wird. Wie mit einer
              Reklamation umgegangen wird, die außerhalb der Regel liegt. Wann
              eine Teillieferung akzeptiert und wann sie zurückgewiesen wird.
              Und die Preisverhandlung selbst.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>

        <Image
          src="/images/warenwirtschaft/trennlinie.png"
          alt="Zweispaltige Gegenüberstellung, links vier ausgefüllte Kästen mit regelbasierten Schritten, rechts drei umrandete Kästen mit abwägenden Entscheidungen"
          width={1200}
          height={675}
          className="my-8 w-full rounded-xl"
        />

        <Typo.Paragraph>
          Nützlich an dieser Trennung ist, dass sie unabhängig vom eingesetzten
          System gilt. Die linke Spalte lässt sich an nahezu jedes
          Warenwirtschaftssystem andocken, das eine Schnittstelle oder wenigstens
          einen Import kennt. Ein Systemwechsel ist dafür in aller Regel nicht
          nötig.
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper>
        <Typo.H2>Ergänzen oder ersetzen: vier Fragen, die es entscheiden</Typo.H2>
        <Typo.Paragraph>
          Das ist die Frage, mit der Betriebe mit 50 bis 1.000 Mitarbeitenden
          tatsächlich in ein Gespräch kommen, und sie ist die einzige, die in
          keiner der sechs gelesenen Quellen vorkommt. Zwei davon behandeln sie
          ausdrücklich nicht: Sie schreiben für jemanden, der noch kein System
          hat. Die häufigere Lage ist die andere.
        </Typo.Paragraph>

        <NumberedList>
          <NumberedList.Item title="Stimmen die Bestände?">
            Wenn die Zahlen im System mit dem Lager übereinstimmen, ist das
            System gesund. Stimmen sie nicht, liegt es meist an einem Prozess
            davor, etwa an Wareneingängen, die erst am Folgetag gebucht werden.
            Ein neues System erbt dieses Verhalten unverändert.
          </NumberedList.Item>
          <NumberedList.Item title="Gibt es einen Weg nach außen?">
            Eine dokumentierte Schnittstelle, eine Datenbanksicht oder wenigstens
            ein geplanter Import und Export reichen. Existiert davon nichts, ist
            Ergänzen tatsächlich versperrt, und das ist eines der wenigen guten
            Argumente für einen Wechsel.
          </NumberedList.Item>
          <NumberedList.Item title="Fehlt eine Funktion oder fehlt die Zuarbeit?">
            Kann das System Chargen, Mehrlager oder Fremdwährungen gar nicht,
            hilft keine Automatisierung. Liegt der Schmerz dagegen bei
            Tipparbeit, Abgleichen und Nachfassen, dann fehlt nicht die
            Funktion, sondern die Zuarbeit davor.
          </NumberedList.Item>
          <NumberedList.Item title="Wie lange trägt der Hersteller das Produkt noch?">
            Ein angekündigtes Supportende oder eine eingestellte Produktlinie
            setzt eine Frist, unabhängig davon, wie gut das System heute läuft.
            Dann ist der Wechsel eine Termin- und keine Funktionsfrage.
          </NumberedList.Item>
        </NumberedList>

        <ProseColumns>
          <ProseColumnsItem title="Wann sich Ergänzen lohnt">
            Wenn drei der vier Fragen für das vorhandene System sprechen. Dann
            ist der schnellste Hebel, die Handarbeit an den Übergängen
            abzunehmen: Aufträge aus dem Postfach, Abgleich der
            Auftragsbestätigungen, Bestände zwischen den Systemen. Der Aufwand
            dafür liegt bei uns bei 1.000 Euro einmalig und 50 Euro im Monat je
            Anwendungsfall, der erste Pilot steht in fünf Arbeitstagen.
          </ProseColumnsItem>
          <ProseColumnsItem title="Wann Ersetzen richtig ist">
            Wenn das System eine fachliche Anforderung strukturell nicht abbilden
            kann, wenn es keinen Weg nach außen gibt oder wenn der Hersteller
            das Ende angekündigt hat. Dann ist die Auswahl ein eigenes Projekt
            mit eigenem Budget, und die Einführung ist darin der größere Posten,
            nicht die Lizenz.
          </ProseColumnsItem>
        </ProseColumns>

        <Typo.Paragraph>
          Wenn Sie an dieser Stelle konkreter weiterlesen wollen: Welche
          Warenwirtschaftssysteme für Großhändler mit 50 bis 1.000
          Mitarbeitenden überhaupt infrage kommen, vergleicht unser Beitrag zum{" "}
          <InternalLink
            href="/blog/warenwirtschaftssystem-grosshandel"
            variant="underline"
          >
            Warenwirtschaftssystem im Großhandel
          </InternalLink>
          . Wie die Auftragsseite dieses Prozesses aussieht, wenn die
          Handarbeit tatsächlich abgenommen wird, steht in unserem Beitrag zum{" "}
          <InternalLink
            href="/blog/auftragsabwicklung-optimieren"
            variant="underline"
          >
            Optimieren der Auftragsabwicklung
          </InternalLink>
          . Und was auf der Rechnungsseite danach passiert, behandelt die Seite
          zur{" "}
          <InternalLink
            href="/services/digitale-rechnungsverarbeitung"
            variant="underline"
          >
            digitalen Rechnungsverarbeitung
          </InternalLink>
          .
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
