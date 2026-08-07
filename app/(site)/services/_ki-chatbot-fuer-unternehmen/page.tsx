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
import TabGroup, {
  TabNavigation,
  TabItem,
  TabContent,
} from "@/components/ui/tab-group";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/ui/timeline-as-steps";
import { FaqContainer } from "@/components/ui/faqs";
import OfferCard from "@/components/cards/offer-card";
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
  title: "KI-Chatbot für Unternehmen: Bauart, Kosten, Ablauf | Bluebatch",
  description:
    "KI-Chatbot für Unternehmen: die drei Bauarten im Vergleich, was jede kostet und wann sie passt. Pilot auf eigener Infrastruktur für 1.000 € Setup in 5 Arbeitstagen.",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: "KI-Chatbot für Unternehmen: Bauart, Kosten, Ablauf",
    description: meta.description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages("KI-Chatbot für Unternehmen", "Services"),
  },
  twitter: {
    card: "summary_large_image",
    title: "KI-Chatbot für Unternehmen: Bauart, Kosten, Ablauf",
    description: meta.description,
    images: ogImages("KI-Chatbot für Unternehmen", "Services").map(
      (i) => i.url,
    ),
  },
  alternates: {
    canonical: "/services/ki-chatbot-fuer-unternehmen",
  },
};

const faqs = [
  {
    question: "Was kostet ein KI-Chatbot für Unternehmen?",
    answer:
      "Das hängt an der Bauart, nicht am Anbieter. Ein Website-Chatbot, der nur auf Ihren öffentlichen Texten antwortet, kostet am Markt etwa 200 bis 2.500 € pro Monat und ist in Tagen eingerichtet. Ein Chatbot auf Ihren internen Daten kostet bei uns 1.000 € Setup und 50 € Betrieb pro Monat, weil er auf Ihrer eigenen Infrastruktur läuft und keine Lizenz pro Mitarbeiter kennt. Am Markt liegen vergleichbare Projekte mit Systemanbindung eher zwischen 5.000 und 15.000 € einmalig.",
  },
  {
    question: "Woran erkenne ich, welche Bauart wir brauchen?",
    answer:
      "An einer einzigen Frage: Steht die Antwort, die Ihre Leute suchen, auf Ihrer Website? Wenn ja, reicht ein Website-Chatbot. Wenn die Antwort in ERP, Warenwirtschaft, Dateiablage oder Preisliste liegt, brauchen Sie einen Chatbot mit Systemanbindung, und damit auch Berechtigungen. Soll der Chatbot am Ende nicht nur antworten, sondern etwas auslösen, also einen Auftrag anlegen oder eine Bestellung vorbereiten, reden Sie über einen KI-Agenten.",
  },
  {
    question: "Wie lange dauert die Einführung?",
    answer:
      "Unser Pilot mit Anbindung an eine Datenquelle steht in fünf Arbeitstagen. Ein reiner Website-Chatbot ist bei Standardanbietern in ein bis zwei Tagen live. Projekte, die von Anfang an mehrere Systeme, Berechtigungen und Freigabeprozesse abdecken sollen, laufen realistisch über mehrere Wochen, und genau deshalb fangen wir mit einer Datenquelle an.",
  },
  {
    question: "Wer darf welche Daten sehen?",
    answer:
      "Der Chatbot erbt die Rechte des Fragenden, er vergibt keine eigenen. Die Anmeldung läuft über Ihr bestehendes SSO, und vor jeder Antwort prüft der Workflow, welche Datensätze dieser Person zustehen. Ein Vertriebsmitarbeiter sieht damit die Konditionen seiner Kunden, nicht die aller. Ohne diese Prüfung ist ein Chatbot auf Unternehmensdaten kein Effizienzprojekt, sondern ein Datenleck mit Chatfenster.",
  },
  {
    question: "Bleiben unsere Daten im Unternehmen?",
    answer:
      "Ja. Der Chatbot läuft auf Ihrer eigenen Infrastruktur, die Workflows liegen in n8n und gehören Ihnen. Es gibt keinen Zwang, Ihre Stammdaten in die Cloud eines Anbieters zu kopieren. Welches Sprachmodell die Formulierung übernimmt, entscheiden Sie separat, und diese Entscheidung lässt sich später ändern, ohne den Rest neu zu bauen.",
  },
  {
    question: "Was passiert nach dem Piloten?",
    answer:
      "Der Pilot hat keine Mindestlaufzeit. Nach fünf Arbeitstagen wissen Sie mit echten Fragen aus Ihrem Betrieb, ob der Anwendungsfall trägt. Wenn ja, kommen weitere Datenquellen dazu, jede einzeln und mit derselben Rechteprüfung. Wenn nein, haben Sie 1.000 € ausgegeben statt ein Jahresbudget.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>KI-Chatbots</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              KI-Chatbot für Unternehmen: erst die Bauart, dann das Budget
            </Hero2ColumnHeadline>
            <GeoSummary>
              Ein KI-Chatbot für Unternehmen gibt es in drei Bauarten: auf
              Website-Texten, auf internen Systemen oder als handelnder
              KI-Agent. Sie unterscheiden sich um den Faktor zwanzig im Preis
              und um Wochen in der Dauer. Bluebatch baut die mittlere Variante
              als Piloten in fünf Arbeitstagen, für 1.000 € Setup und 50 €
              Betrieb pro Monat, auf Ihrer eigenen Infrastruktur.
            </GeoSummary>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Bauart klären, 30 Minuten
              </ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Eigene Infrastruktur • Keine Lizenz pro Mitarbeiter • Pilot in 5
              Arbeitstagen
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/ki-chatbot-fuer-unternehmen/hero-bauart.png"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Zahlen früh, weil sie die Auswahlfrage mitbeantworten */}
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

      {/* Kernsektion: die drei Bauarten */}
      <ContentWrapper>
        <IntroBox size="small">
          <IntroBox.PreHeadline>Die kurze Antwort</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Drei Bauarten, und der Unterschied liegt beim Zugriff
          </IntroBox.Headline>
          <IntroBox.Subline>
            Alle drei werden unter demselben Wort verkauft. Sie unterscheiden
            sich nicht in der Oberfläche, sondern darin, worauf der Chatbot
            zugreifen darf und ob er am Ende nur antwortet oder auch etwas
            auslöst.
          </IntroBox.Subline>
        </IntroBox>

        <Image
          src="/images/ki-chatbot-fuer-unternehmen/bauarten.png"
          alt="Die drei Bauarten eines KI-Chatbots für Unternehmen im Vergleich: Website-Chatbot auf Website-Texten, Daten-Chatbot auf internen Systemen, KI-Agent, der handelt"
          width={1400}
          height={788}
          className="my-12 w-full rounded-2xl"
        />

        <TabGroup defaultValue="website">
          <TabNavigation>
            <TabItem value="website">Website-Chatbot</TabItem>
            <TabItem value="daten">Chatbot auf Unternehmensdaten</TabItem>
            <TabItem value="agent">KI-Agent</TabItem>
          </TabNavigation>

          <TabContent value="website">
            <Typo.H3 className="mb-4">
              Kennt das, was ohnehin öffentlich steht
            </Typo.H3>
            <Typo.Paragraph className="text-gray-700 mb-6">
              Der Chatbot wird auf Ihre Website, Ihre FAQ und Ihre
              Produktbeschreibungen trainiert und beantwortet damit die Fragen,
              die heute per Kontaktformular kommen. Er hat keinen Zugang zu
              Ihren Systemen, deshalb ist er schnell und deshalb ist er
              begrenzt.
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                Kann: Öffnungszeiten, Leistungsumfang, Standardfragen,
                Lead-Erfassung
              </Typo.ListItem>
              <Typo.ListItem>
                Kann nicht: Lagerbestand, Auftragsstatus, kundenindividuelle
                Preise
              </Typo.ListItem>
              <Typo.ListItem>
                Marktpreis: etwa 200 bis 2.500 € pro Monat, meist als Abo mit
                Seat-Lizenz
              </Typo.ListItem>
              <Typo.ListItem>
                Passt, wenn die gesuchte Antwort tatsächlich auf Ihrer Website
                steht
              </Typo.ListItem>
            </Typo.List>
          </TabContent>

          <TabContent value="daten">
            <Typo.H3 className="mb-4">
              Kennt Ihre Systeme, mit den Rechten des Fragenden
            </Typo.H3>
            <Typo.Paragraph className="text-gray-700 mb-6">
              Diese Bauart holt die Antwort aus ERP, Warenwirtschaft,
              Dateiablage oder Preisliste. Damit wird aus dem Chatbot ein
              Auskunftssystem für den Innendienst, und damit wird die Frage
              „wer darf was sehen" zur wichtigsten Anforderung im Projekt.
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                Kann: Bestände, Auftragsstatus, Konditionen, Dokumente aus der
                Ablage
              </Typo.ListItem>
              <Typo.ListItem>
                Braucht: Anmeldung über Ihr SSO und eine Rechteprüfung vor jeder
                Antwort
              </Typo.ListItem>
              <Typo.ListItem>
                Bei uns: 1.000 € Setup, 50 € Betrieb pro Monat, keine Lizenz pro
                Mitarbeiter
              </Typo.ListItem>
              <Typo.ListItem>
                Passt, wenn Ihre Leute heute in drei Systemen suchen, um eine
                Frage zu beantworten
              </Typo.ListItem>
            </Typo.List>
          </TabContent>

          <TabContent value="agent">
            <Typo.H3 className="mb-4">
              Antwortet nicht nur, sondern löst etwas aus
            </Typo.H3>
            <Typo.Paragraph className="text-gray-700 mb-6">
              Ein KI-Agent legt den Auftrag an, bereitet die Bestellung vor oder
              schreibt zurück. Das ist kein größerer Chatbot, sondern ein
              anderes Risikoprofil: Sobald geschrieben statt gelesen wird,
              brauchen Sie Freigaben, Protokoll und einen definierten Weg
              zurück.
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                Kann: Vorgänge anlegen, Daten schreiben, Prozesse anstoßen
              </Typo.ListItem>
              <Typo.ListItem>
                Braucht: Freigabeschritte, Protokollierung, klare Grenzen pro
                Vorgang
              </Typo.ListItem>
              <Typo.ListItem>
                Dauer: Wochen statt Tage, weil die Freigabelogik mitentwickelt
                wird
              </Typo.ListItem>
              <Typo.ListItem>
                Passt, wenn die Auskunft längst steht und der manuelle Schritt
                danach das Problem ist
              </Typo.ListItem>
            </Typo.List>
          </TabContent>
        </TabGroup>
      </ContentWrapper>

      {/* Entscheidungstabelle */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Entscheidungshilfe</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Fünf typische Fragen und die Bauart, die sie beantwortet
          </IntroBox.Headline>
        </IntroBox>
        <DataTable className="mt-10">
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Die Frage im Alltag</DataTable.HeaderCell>
              <DataTable.HeaderCell>Bauart</DataTable.HeaderCell>
              <DataTable.HeaderCell>Warum</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            <DataTable.Row>
              <DataTable.Cell bold>
                „Bis wann liefert ihr nach Österreich?"
              </DataTable.Cell>
              <DataTable.Cell>Website-Chatbot</DataTable.Cell>
              <DataTable.Cell>
                Die Antwort steht auf Ihrer Versandseite. Systemanbindung wäre
                Aufwand ohne Gegenwert.
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>
                „Haben wir Artikel 4711 noch auf Lager?"
              </DataTable.Cell>
              <DataTable.Cell>Unternehmensdaten</DataTable.Cell>
              <DataTable.Cell>
                Die Antwort ändert sich stündlich und steht nur im ERP. Ohne
                Anbindung rät der Chatbot.
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>
                „Welchen Preis hat dieser Kunde bei uns?"
              </DataTable.Cell>
              <DataTable.Cell>Unternehmensdaten</DataTable.Cell>
              <DataTable.Cell>
                Kundenindividuelle Konditionen sind der Fall, in dem die
                Rechteprüfung nicht optional ist.
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>
                „Wo liegt die Zeichnung zu diesem Projekt?"
              </DataTable.Cell>
              <DataTable.Cell>Unternehmensdaten</DataTable.Cell>
              <DataTable.Cell>
                Dateiablagen sind der unterschätzte Fall: viel Suchzeit, wenig
                Integrationsaufwand.
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>
                „Leg mir daraus bitte den Auftrag an."
              </DataTable.Cell>
              <DataTable.Cell>KI-Agent</DataTable.Cell>
              <DataTable.Cell>
                Ab hier wird geschrieben statt gelesen. Das braucht Freigaben,
                nicht nur ein besseres Modell.
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable.Body>
        </DataTable>
      </ContentWrapper>

      {/* Die Lücke, die im Markt niemand füllt */}
      <ContentWrapper>
        <Typo.H2>
          Berechtigungen sind die eigentliche Arbeit, nicht der Chatbot
        </Typo.H2>
        <Typo.Paragraph>
          Sobald ein Chatbot interne Daten kennt, entscheidet nicht mehr die
          Antwortqualität über den Erfolg, sondern die Frage, ob jede Antwort
          nur an die Person geht, die sie sehen darf. Wir haben noch kein
          Chatbot-Projekt am Sprachmodell scheitern sehen. Gescheitert sind die,
          bei denen diese drei Punkte offen blieben.
        </Typo.Paragraph>

        <Image
          src="/images/ki-chatbot-fuer-unternehmen/berechtigungen.png"
          alt="Ablauf einer Chatbot-Anfrage: Frage, Rechte prüfen, Lagerbestand abfragen, Antwort"
          width={1400}
          height={788}
          className="my-12 w-full rounded-2xl"
        />

        <ProseColumns cols={3}>
          <ProseColumnsItem title="Wer fragt gerade?">
            Ohne Anmeldung gibt es keine Rechte, und ohne Rechte gibt es nur
            zwei Möglichkeiten: alle sehen alles oder niemand sieht etwas
            Nützliches. Deshalb steht die Anbindung an Ihr bestehendes SSO am
            Anfang und nicht am Ende.
          </ProseColumnsItem>
          <ProseColumnsItem title="Was steht dieser Person zu?">
            Die Prüfung gehört vor die Antwort, nicht in den Prompt. Ein
            Sprachmodell, dem man im Text mitteilt, es möge bestimmte Daten
            nicht nennen, ist keine Berechtigung, sondern eine Bitte. Der
            Workflow filtert vorher.
          </ProseColumnsItem>
          <ProseColumnsItem title="Was passiert bei Unsicherheit?">
            Ein Chatbot, der bei fehlender Datenlage etwas Plausibles erfindet,
            ist schlimmer als keiner. Der richtige Ausgang ist eine ehrliche
            Fehlanzeige mit Verweis auf die Quelle, und die messen wir im
            Piloten mit echten Fragen aus Ihrem Betrieb.
          </ProseColumnsItem>
        </ProseColumns>
      </ContentWrapper>

      {/* Ablauf */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Ablauf</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Fünf Arbeitstage bis zum ersten produktiven Piloten
          </IntroBox.Headline>
          <IntroBox.Subline>
            Eine Datenquelle, eine Nutzergruppe, echte Fragen. Alles Weitere
            kommt erst, wenn dieser Teil trägt.
          </IntroBox.Subline>
        </IntroBox>
        <TimelineAsSteps>
          <TimelineAsStepsStep value={1}>
            <Typo.H3 className="mt-1!">Umgebung und Anmeldung</Typo.H3>
            <Typo.Paragraph>
              Die Chat-Oberfläche läuft auf Ihrem Server, die Anmeldung über Ihr
              bestehendes SSO. Ab hier ist klar, wer fragt, und das ist die
              Grundlage jeder Rechteregel danach.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={2}>
            <Typo.H3 className="mt-1!">Die erste Datenquelle</Typo.H3>
            <Typo.Paragraph>
              In der Regel Artikelstamm und Lagerbestand, weil dort die meisten
              Rückfragen entstehen. Am Ende des Tages beantwortet der Chatbot
              die erste echte Bestandsfrage.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={3}>
            <Typo.H3 className="mt-1!">Rechteprüfung</Typo.H3>
            <Typo.Paragraph>
              Der Workflow filtert vor der Antwort, welche Datensätze der
              fragenden Person zustehen. Getestet wird mit zwei Konten aus
              unterschiedlichen Abteilungen, nicht mit einem Admin-Zugang.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={4}>
            <Typo.H3 className="mt-1!">Echte Fragen statt Demo-Fragen</Typo.H3>
            <Typo.Paragraph>
              Eine kleine Nutzergruppe stellt einen Tag lang die Fragen, die
              sonst per Zuruf laufen. Falsche und ausweichende Antworten werden
              protokolliert, nicht weggeredet.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={5}>
            <Typo.H3 className="mt-1!">Übergabe und Entscheidung</Typo.H3>
            <Typo.Paragraph>
              Sie bekommen den Piloten, die Workflows und die Auswertung, welche
              Fragen er sicher beantwortet hat. Auf dieser Grundlage
              entscheiden Sie über die nächste Datenquelle, nicht auf Grundlage
              einer Demo.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
        </TimelineAsSteps>
      </ContentWrapper>

      {/* Interne Einstiege */}
      <ContentWrapper>
        <Typo.H2>Wenn Sie schon wissen, wohin es gehen soll</Typo.H2>
        <Typo.Paragraph>
          Für den Großhandel gibt es die Variante mit fertigen Connectoren zu
          e.bootis, Microsoft Navision und SharePoint bereits als
          durchgerechnetes Angebot. Wer den Chatbot lieber selbst betreiben und
          weiterbauen will, steigt über die{" "}
          <InternalLink href="/services/schulungen" variant="underline">
            n8n-Schulungen
          </InternalLink>{" "}
          ein.
        </Typo.Paragraph>
        <SimpleGrid cols={2} className="mt-10">
          <OfferCard
            href="/branchen/grosshandel/chatbots/ki-chatbot-grosshandel"
            title="KI-Chatbot für den Großhandel"
            price="ab 1.000 €"
            description="Die Variante mit fertigen Connectoren zu e.bootis, Microsoft Navision und SharePoint. In fünf Tagen live, 50 € Betrieb pro Monat."
          />
          <OfferCard
            href="/services/schulungen"
            title="n8n-Schulung für Ihr Team"
            description="Wenn der Chatbot im Haus bleiben und wachsen soll: Ihre Leute lernen, die Workflows dahinter selbst zu bauen und zu ändern."
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <FaqContainer faqs={faqs} />
      </ContentWrapper>

      <ContentWrapper>
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
