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
import { FaqContainer } from "@/components/ui/faqs";
import SimpleCard from "@/components/cards/simple-card";
import OfferCard from "@/components/cards/offer-card";
import RoiCalculation, {
  RoiAssumption,
  RoiRow,
  RoiTotal,
  RoiSource,
} from "@/components/sections/roi-calculation";
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
  title: "Was kostet KI? Die Rechnung statt der nächsten Preisspanne | Bluebatch",
  description:
    "Was kostet KI im Unternehmen wirklich? Drei Kostenblöcke, der Ist-Zustand als Vergleichsgröße und feste Zahlen: 1.000 € Setup, 50 € pro Monat, Pilot in 5 Arbeitstagen.",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: "Was kostet KI? Die Rechnung statt der nächsten Preisspanne",
    description: meta.description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages("Was kostet KI", "Services"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Was kostet KI? Die Rechnung statt der nächsten Preisspanne",
    description: meta.description,
    images: ogImages("Was kostet KI", "Services").map((i) => i.url),
  },
  alternates: {
    canonical: "/services/was-kostet-ki",
  },
};

const faqs = [
  {
    question: "Was kostet KI im Monat?",
    answer:
      "Für einen einzelnen Anwendungsfall auf eigener Infrastruktur sind es bei uns 50 € Betrieb pro Monat plus die Modellkosten, die sich nach der Nutzung richten. Bei 400 verarbeiteten Vorgängen im Monat liegen die Modellkosten in der Größenordnung von 10 €, weil pro Vorgang nur wenige tausend Token anfallen. Am Markt reichen die Angaben für den laufenden Betrieb von 25 € bis 10.000 € pro Monat, und beide Enden sind ernst gemeint: Das untere meint eine No-Code-Lizenz ohne eigene Daten, das obere ein Programm über mehrere Abteilungen. Die Frage nach dem Monatspreis ist deshalb nur sinnvoll, wenn dabeisteht, wie viele Vorgänge über das System laufen.",
  },
  {
    question: "Warum nennen alle Anbieter andere Zahlen?",
    answer:
      "Weil sie unterschiedliche Dinge bepreisen und das nicht dazusagen. Ein Anbieter, der 3.000 € für einen Chatbot nennt, meint einen Chatbot auf Ihren öffentlichen Texten. Ein anderer, der für dieselbe Beschreibung 10.000 € nennt, rechnet die Anbindung an ein System schon mit ein. Der Unterschied ist nicht der Stundensatz, sondern die Frage, ob das System auf Ihre eigenen Daten zugreift. Sobald es das tut, kostet nicht mehr die KI, sondern die Schnittstelle, und die ist bei jedem Unternehmen anders.",
  },
  {
    question: "Was kostet die Anbindung an unser ERP?",
    answer:
      "Das ist die teuerste Position und gleichzeitig die, die in kaum einem Angebot beziffert ist. Bei einem System mit dokumentierter Schnittstelle, klaren Berechtigungen und einem Ansprechpartner in der IT ist die Anbindung Teil unseres Pilotpreises von 1.000 €. Teuer wird es, wenn es keine API gibt, wenn Preise und Konditionen kundenindividuell in Zusatztabellen liegen oder wenn erst geklärt werden muss, wer im System was sehen darf. Am Markt werden für eine Integration 15.000 bis 50.000 € bei vier bis zwölf Wochen genannt. Deshalb klären wir die Schnittstelle vor dem Angebot und nicht danach.",
  },
  {
    question: "Welche Kosten werden am häufigsten vergessen?",
    answer:
      "Die eigenen Stunden. Jedes KI-Projekt braucht Menschen, die den Prozess kennen: den Fachbereich, der sagt, welche Fälle Sonderfälle sind, und die IT, die den Zugang zum System aufmacht. Für einen ersten Anwendungsfall sind das erfahrungsgemäß drei Tage im Fachbereich und ein Tag in der IT. Diese Tage stehen in keinem Angebot, verzögern aber mehr Projekte als jede technische Frage. Der zweite regelmäßig vergessene Posten sind die Modellkosten, die mit der Nutzung wachsen und deshalb kein fester Betrag sind.",
  },
  {
    question: "Ab wann rechnet sich das?",
    answer:
      "Rechnen Sie es an einem Prozess durch, nicht an der Technik. Wenn 400 Bestellungen im Monat je 24 Minuten Handarbeit brauchen, sind das 160 Stunden, bei 28 € Vollkosten je Stunde also 4.480 € pro Monat. Gegen diese Zahl tritt jedes Angebot an. Bei uns kostet der erste Anwendungsfall 1.000 € einmalig, rund 900 € an internen Tagen und etwa 60 € pro Monat. Wichtig ist die ehrliche Gegenrechnung: Die Zeitersparnis fällt nur an, wenn das Volumen wirklich da ist. Bei 40 Bestellungen im Monat statt 400 trägt derselbe Aufwand nicht.",
  },
  {
    question: "Lohnt sich eine Lizenz oder eine eigene Lösung?",
    answer:
      "Das entscheidet die Kopfzahl, nicht der Einstiegspreis. Eine Lizenz pro Nutzer liegt am Markt bei 20 bis 100 € im Monat. Bei zehn Nutzern ist sie günstiger als jede Eigenentwicklung, bei achtzig Nutzern kostet sie über drei Jahre einen fünfstelligen Betrag, während eine eigene Lösung auf eigener Infrastruktur bei ihren 50 € bleibt. Der Kipppunkt liegt meist zwischen zwanzig und dreißig Nutzern. Solange Sie darunter sind, ist die Lizenz die vernünftige Wahl, und wir sagen das auch.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Preise</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Was kostet KI? Erst die Rechnung, dann die Zahl
            </Hero2ColumnHeadline>
            <GeoSummary>
              KI im Unternehmen kostet in drei Blöcken: Setup einmalig, Betrieb
              monatlich und interne Stunden. Bei Bluebatch sind das 1.000 €
              Setup, 50 € Betrieb pro Monat und rund vier Personentage im
              eigenen Haus, für einen produktiven Anwendungsfall in 5
              Arbeitstagen. Ob sich das lohnt, entscheidet nicht der Preis,
              sondern was der Prozess heute manuell kostet.
            </GeoSummary>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Eigenen Fall durchrechnen, 30 Minuten
              </ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Fester Pilotpreis • Eigene Infrastruktur • Keine Lizenz pro Kopf
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/was-kostet-ki/hero.png"
              type="image"
              alt="Angebot auf einem leeren Konferenztisch, die Preiszeile ist noch nicht ausgefüllt"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Unsere Zahlen zuerst, damit alle Marktzahlen darunter einen Bezug haben */}
      <ContentWrapper colorScheme="gradient-primary-dark">
        <StatsList
          cols={3}
          textColor="text-white"
          stats={[
            { value: 1000, suffix: " €", label: "Setup, einmalig pauschal" },
            { value: 50, suffix: " €", label: "Betrieb pro Monat" },
            { value: 5, label: "Arbeitstage bis zum Piloten" },
          ]}
        />
      </ContentWrapper>

      {/* Der ehrliche Einstieg: der Markt widerspricht sich, und niemand sagt es */}
      <ContentWrapper>
        <IntroBox size="small">
          <IntroBox.PreHeadline>Der Befund</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Vier Ratgeber, vier Antworten, Faktor zehn dazwischen
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Wer diese Frage stellt, bekommt keine Spanne, sondern vier Spannen,
            die sich gegenseitig ausschließen. Wir haben die vier Seiten
            gelesen, die zu „was kostet KI" ganz oben stehen, und ihre Zahlen
            nebeneinandergelegt. Das Ergebnis ist keine Preisdiskussion, es ist
            ein Definitionsproblem: Die Quellen bepreisen unterschiedliche
            Dinge, ohne es zu sagen.
          </IntroBox.Paragraph>
        </IntroBox>

        <Image
          src="/images/was-kostet-ki/spannen.png"
          alt="Vier Kostenspannen aus vier Quellen, die sich nicht überschneiden"
          width={1200}
          height={675}
          className="w-full h-auto rounded-2xl my-8"
        />

        <DataTable>
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Frage</DataTable.HeaderCell>
              <DataTable.HeaderCell>Antwort A</DataTable.HeaderCell>
              <DataTable.HeaderCell>Antwort B</DataTable.HeaderCell>
              <DataTable.HeaderCell>Faktor</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            <DataTable.Row>
              <DataTable.Cell bold>Einfacher Chatbot</DataTable.Cell>
              <DataTable.Cell>ab 3.000 €</DataTable.Cell>
              <DataTable.Cell>10.000 €</DataTable.Cell>
              <DataTable.Cell>3x</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Laufender Betrieb</DataTable.Cell>
              <DataTable.Cell>ab 25 € pro Monat</DataTable.Cell>
              <DataTable.Cell>bis 50.000 € pro Monat</DataTable.Cell>
              <DataTable.Cell>2.000x</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Jahresbudget Mittelstand</DataTable.Cell>
              <DataTable.Cell>15.000 bis 25.000 €</DataTable.Cell>
              <DataTable.Cell>25.000 bis 150.000 €</DataTable.Cell>
              <DataTable.Cell>6x</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Eine Systemanbindung</DataTable.Cell>
              <DataTable.Cell>im Projektpreis enthalten</DataTable.Cell>
              <DataTable.Cell>15.000 bis 50.000 €</DataTable.Cell>
              <DataTable.Cell>offen</DataTable.Cell>
            </DataTable.Row>
          </DataTable.Body>
        </DataTable>

        <Typo.Paragraph>
          Die zweite Zeile ist die aufschlussreichste. Zwischen 25 € und 50.000 €
          im Monat liegt kein Missverständnis über Qualität, sondern die Frage,
          ob das System an Ihre Daten kommt. Ein Werkzeug, das nur mit
          öffentlichen Texten arbeitet, ist eine Lizenz. Ein System, das
          Bestellungen anlegt oder Rechnungen vorkontiert, ist eine Integration.
          Deshalb ist die erste Frage nie der Preis, sondern woher die Software
          ihre Daten nimmt.
        </Typo.Paragraph>
      </ContentWrapper>

      {/* Der eigentliche Rechenweg: drei Blöcke statt einer Zahl */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Drei Kostenblöcke, und einer fehlt fast immer</Typo.H2>
        <Typo.Paragraph>
          Jedes KI-Vorhaben zerfällt in dieselben drei Blöcke. Die ersten beiden
          stehen in jedem Angebot, weil sie Rechnungen sind. Der dritte steht in
          keinem, weil ihn niemand stellt, und genau er entscheidet, ob ein
          Projekt in Wochen oder in Quartalen fertig wird.
        </Typo.Paragraph>

        <Image
          src="/images/was-kostet-ki/kostenbloecke.png"
          alt="Setup, Betrieb und interner Aufwand als drei gleich große Kostenblöcke"
          width={1200}
          height={675}
          className="w-full h-auto rounded-2xl my-8"
        />

        <ProseColumns cols={3}>
          <ProseColumnsItem title="Setup, einmalig">
            Der Aufbau: Prozess aufnehmen, Regeln festlegen, Schnittstelle
            anbinden, testen. Am Markt reicht das von 3.000 € für eine
            Standardlösung bis zu 50.000 € für ein Programm über mehrere
            Systeme. Bei uns ist dieser Block für einen Anwendungsfall pauschal
            und liegt bei 1.000 €, weil wir mit einer Aufgabe anfangen statt mit
            einer Plattform.
          </ProseColumnsItem>
          <ProseColumnsItem title="Betrieb, monatlich">
            Was nach dem Start weiterläuft: Hosting, Wartung, Modellkosten. Die
            ersten beiden sind fest, die Modellkosten wachsen mit der Nutzung.
            Bei einem Server im Eigenbetrieb fangen die Infrastrukturkosten bei
            etwa 15 € im Monat an. Unser Betrieb kostet 50 € im Monat, die
            Modellkosten kommen nutzungsabhängig dazu und liegen bei mittleren
            Volumen im niedrigen zweistelligen Bereich.
          </ProseColumnsItem>
          <ProseColumnsItem title="Interner Aufwand, in Stunden">
            Ihre eigenen Leute. Der Fachbereich muss sagen, welche Fälle
            Sonderfälle sind, die IT muss den Zugang aufmachen. Für einen ersten
            Anwendungsfall sind das etwa drei Tage im Fachbereich und ein Tag in
            der IT. Ratgeber setzen an dieser Stelle oft ein KI-Fachgehalt von
            80.000 bis 120.000 € im Jahr an. Für ein Handelsunternehmen ist das
            die falsche Größe: Sie stellen niemanden ein, Sie geben Stunden ab.
          </ProseColumnsItem>
        </ProseColumns>
      </ContentWrapper>

      {/* Die Vergleichsgröße, die im Markt niemand ausrechnet */}
      <ContentWrapper>
        <IntroBox size="small">
          <IntroBox.PreHeadline>Die Vergleichsgröße</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Erst ausrechnen, was der Weg heute kostet
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Keine der vier gelesenen Quellen tut das, und ohne diese Zahl ist
            jedes Angebot unbewertbar. 4.990 € sind billig oder teuer, je
            nachdem, was daneben steht. Hier die Rechnung an einem Prozess, den
            fast jeder Großhändler kennt: Bestellungen, die per Mail, Fax oder
            PDF hereinkommen und von Hand ins ERP wandern.
          </IntroBox.Paragraph>
        </IntroBox>

        <Image
          src="/images/was-kostet-ki/ist-zustand.png"
          alt="Der manuelle Weg einer Bestellung in fünf Schritten, Abtippen und Nachfragen dauern am längsten"
          width={1200}
          height={675}
          className="w-full h-auto rounded-2xl my-8"
        />

        <RoiCalculation>
          <RoiAssumption>
            400 Bestellungen pro Monat, im Schnitt 24 Minuten Bearbeitung je
            Bestellung
          </RoiAssumption>
          <RoiRow label="Zeit pro Monat (400 × 24 Min)">160 Stunden</RoiRow>
          <RoiRow label="Vollkosten Innendienst">28 € / h</RoiRow>
          <RoiRow label="Kosten des Ist-Zustands pro Monat" highlight>
            4.480 €
          </RoiRow>
          <RoiTotal label="Kosten des Ist-Zustands pro Jahr">53.760 €</RoiTotal>
          <RoiSource>
            Stundensatz und Bearbeitungszeit wie in unserem ROI-Rechner für
            Dokumentenprozesse
          </RoiSource>
        </RoiCalculation>

        <Typo.Paragraph>
          Diese 53.760 € sind nicht das Einsparpotenzial, sondern der Maßstab.
          Ein System, das die Bearbeitung von 24 auf 10 Minuten drückt, spart 14
          Minuten je Bestellung, also rund 2.600 € im Monat. Dem stehen im
          ersten Jahr 1.000 € Setup, rund 900 € an internen Tagen und etwa 60 €
          laufend pro Monat gegenüber. Der ehrliche Teil dieser Rechnung ist die
          Menge: Bei 40 Bestellungen im Monat statt 400 trägt derselbe Aufwand
          nicht, und dann raten wir ab. Wie der Ablauf im Detail aussieht, steht
          auf unserer Seite zur{" "}
          <InternalLink
            href="/branchen/grosshandel/workflows/auftragserfassung"
            variant="underline"
          >
            automatisierten Auftragserfassung
          </InternalLink>
          , eigene Werte können Sie im{" "}
          <InternalLink
            href="/branchen/grosshandel/roi-rechner/document"
            variant="underline"
          >
            ROI-Rechner für Dokumentenprozesse
          </InternalLink>{" "}
          einsetzen.
        </Typo.Paragraph>
      </ContentWrapper>

      {/* Was den Preis wirklich treibt */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Was den Preis nach oben treibt</Typo.H2>
        <Typo.Paragraph>
          Nicht das Modell und nicht die Oberfläche. Teuer wird ein KI-Projekt
          an vier Stellen, und alle vier liegen in Ihrem Haus, nicht beim
          Dienstleister. Wer sie vorher kennt, kann sie eingrenzen, statt sie
          später als Nachtrag zu bezahlen.
        </Typo.Paragraph>

        <SimpleGrid cols={2}>
          <SimpleCard>
            <Typo.H3>Keine Schnittstelle</Typo.H3>
            <Typo.Paragraph>
              Hat das Zielsystem eine dokumentierte API, ist die Anbindung Teil
              des Pilotpreises. Muss stattdessen ein Export gebaut, eine
              Datenbank direkt gelesen oder eine Oberfläche ferngesteuert
              werden, wird aus einem Tagesthema ein Wochenthema. Diese Frage
              gehört vor das Angebot, nicht hinein.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3>Kundenindividuelle Konditionen</Typo.H3>
            <Typo.Paragraph>
              Im Handel ist der Preis selten der Listenpreis. Staffeln,
              Sonderkonditionen und Jahresvereinbarungen liegen oft in
              Zusatztabellen, die außerhalb der Standardlogik gepflegt werden.
              Jede dieser Tabellen ist eine eigene Regel, die das System kennen
              und die jemand bestätigen muss.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3>Ungeklärte Berechtigungen</Typo.H3>
            <Typo.Paragraph>
              Sobald ein System schreiben darf, wird aus einer technischen eine
              organisatorische Frage: Wer darf welchen Vorgang auslösen, was
              wird protokolliert, wo hört die Automatik auf und beginnt die
              Freigabe. Das kostet keine Entwicklungszeit, aber
              Entscheidungszeit, und die ist der häufigste Grund für Verzug.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3>Zu großer erster Zuschnitt</Typo.H3>
            <Typo.Paragraph>
              Der teuerste Fehler ist, mit einer Plattform für alle Abteilungen
              zu beginnen. Dann verhandeln fünf Bereiche über Anforderungen,
              bevor irgendetwas läuft. Ein einzelner Anwendungsfall mit echten
              Daten beantwortet dieselben Fragen in fünf Arbeitstagen, und zwar
              belegbar statt auf dem Papier.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* Drei-Jahres-Sicht: der Kipppunkt */}
      <ContentWrapper>
        <Typo.H2>Über drei Jahre gerechnet dreht sich das Bild</Typo.H2>
        <Typo.Paragraph>
          Der Einstiegspreis ist die schlechteste Entscheidungsgrundlage, weil
          die beiden Modelle unterschiedlich mitwachsen. Eine Lizenz pro Nutzer
          liegt am Markt bei 20 bis 100 € im Monat und skaliert mit Ihrer
          Kopfzahl. Eine Lösung auf eigener Infrastruktur skaliert mit der
          Menge der Vorgänge, nicht mit der Zahl der Menschen, die sie nutzen.
        </Typo.Paragraph>

        <DataTable>
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Über drei Jahre</DataTable.HeaderCell>
              <DataTable.HeaderCell>Lizenz pro Nutzer</DataTable.HeaderCell>
              <DataTable.HeaderCell>Eigene Lösung</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            <DataTable.Row>
              <DataTable.Cell bold>10 Nutzer</DataTable.Cell>
              <DataTable.Cell>7.200 bis 36.000 €</DataTable.Cell>
              <DataTable.Cell>2.800 €</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>30 Nutzer</DataTable.Cell>
              <DataTable.Cell>21.600 bis 108.000 €</DataTable.Cell>
              <DataTable.Cell>2.800 €</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>80 Nutzer</DataTable.Cell>
              <DataTable.Cell>57.600 bis 288.000 €</DataTable.Cell>
              <DataTable.Cell>2.800 €</DataTable.Cell>
            </DataTable.Row>
          </DataTable.Body>
        </DataTable>

        <Typo.Paragraph>
          Die rechte Spalte enthält 1.000 € Setup und 50 € Betrieb über 36
          Monate, ohne Modellkosten, weil die von der Menge abhängen und nicht
          von der Nutzerzahl. Die Tabelle spricht nicht gegen Lizenzen. Sie
          sagt nur, wo der Kipppunkt liegt: Solange wenige Personen mit einem
          Standardwerkzeug arbeiten, ist die Lizenz die vernünftige Wahl.
          Sobald ein Prozess dahintersteht, der jeden Tag hunderte Vorgänge
          erzeugt, zahlen Sie mit der Lizenz für Sitzplätze statt für Arbeit.
        </Typo.Paragraph>
      </ContentWrapper>

      {/* Weiterführend: die konkreten Preisfragen je Anwendungsfall */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Konkrete Preise je Anwendungsfall</Typo.H2>
        <Typo.Paragraph>
          Diese Seite beantwortet die Frage allgemein. Sobald klar ist, worum es
          geht, wird die Antwort genauer. Für die drei häufigsten Einstiege
          haben wir sie einzeln durchgerechnet.
        </Typo.Paragraph>

        <SimpleGrid cols={3}>
          <OfferCard
            href="/branchen/grosshandel/chatbots/was-kostet-ein-chatbot"
            title="Was kostet ein Chatbot"
            price="ab 1.000 €"
            description="Preise und Dauer für einen Chatbot, der auf Ihre eigenen Inhalte antwortet, mit dem Unterschied zwischen Auskunft und Anbindung."
          />
          <OfferCard
            href="/services/ki-agent-kaufen"
            title="KI-Agent kaufen"
            price="ab 1.000 €"
            description="Die drei Bezugswege mit Preis und Dauer nebeneinander, inklusive der Frage, wem der Agent nach der Übergabe gehört."
          />
          <OfferCard
            href="/branchen/grosshandel/roi-rechner"
            title="ROI selbst rechnen"
            description="Eigene Mengen, eigene Bearbeitungszeiten, eigener Stundensatz. Die Rechnung von oben mit Ihren Zahlen statt mit unseren."
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper>
        <Typo.H2>Häufige Fragen zu KI-Kosten</Typo.H2>
        <FaqContainer faqs={faqs} />
      </ContentWrapper>

      <ConsultationCtaDefault />
    </>
  );
}
