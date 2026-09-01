import type { Metadata } from "next";
import Image from "next/image";
import { ogImages } from "@/lib/og";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import GeoSummary from "@/components/ui/geo-summary";
import IntroBox from "@/components/ui/intro-box";
import DataTable from "@/components/ui/data-table";
import ProseColumns, { ProseColumnsItem } from "@/components/ui/prose-columns";
import StatsList from "@/components/ui/stats-list";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/ui/timeline-as-steps";
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
import WorkflowDiagram from "@/components/sections/workflow-diagram";
import ProsCons from "@/components/sections/pros-cons";
import CrossSellGrid from "@/components/sections/cross-sell-grid";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import ContactButton from "@/components/buttons/contact-button";

const meta = {
  title: "KI-Chatbot erstellen: Anleitung für den Großhandel | Bluebatch",
  description:
    "KI-Chatbot erstellen, der Bestände, Preise und Auftragsstatus aus dem eigenen ERP beantwortet: Voraussetzungen, Ablauf in 5 Tagen, Rollenverteilung und die Grenzen von Baukasten-Tools.",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: "KI-Chatbot erstellen für den Großhandel",
    description: meta.description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages("KI-Chatbot erstellen", "Großhandel"),
  },
  twitter: {
    card: "summary_large_image",
    title: "KI-Chatbot erstellen für den Großhandel",
    description: meta.description,
    images: ogImages("KI-Chatbot erstellen", "Großhandel").map((i) => i.url),
  },
  alternates: {
    canonical: "/branchen/grosshandel/chatbots/ki-chatbot-implementierung",
  },
};

const faqs = [
  {
    question: "Wie erstellt man einen KI-Chatbot?",
    answer:
      "In drei Schritten, und der erste hat nichts mit dem Chatbot zu tun. Erstens: festlegen, welche Fragen er beantworten soll und aus welchem System die Antwort kommt. Zweitens: die Datenquellen anbinden, also ERP, Dateiablage oder Shop, samt Berechtigungslogik. Drittens: eine Chat-Oberfläche davorsetzen. Der dritte Schritt ist der einfachste, er dauert bei uns einen halben Tag. Die ersten beiden entscheiden, ob der Chatbot brauchbare Antworten gibt oder plausibel klingende falsche.",
  },
  {
    question: "Kann man einen KI-Chatbot ohne Programmierkenntnisse erstellen?",
    answer:
      "Für einen Chatbot auf öffentlichen Texten ja, dafür reicht jeder Baukasten. Sobald der Bot Bestände, kundenindividuelle Preise oder Auftragsstatus beantworten soll, braucht es einen API-Zugang zum ERP und eine Logik, die prüft, wer welche Zahl sehen darf. Das ist keine Programmierarbeit im klassischen Sinn, wir bauen es in n8n zusammen, aber es ist auch nichts, was man in einem Baukasten zusammenklickt.",
  },
  {
    question: "Was brauchen wir, bevor es losgehen kann?",
    answer:
      "Drei Dinge: einen Linux-Server mit Docker (oder wir hosten mit), einen technisch freigeschalteten API-Zugang zu eurem ERP und eine benannte Person, die entscheidet, welche Felder der Bot lesen darf. Der dritte Punkt ist erfahrungsgemäß der, der Projekte aufhält, nicht die Technik.",
  },
  {
    question: "Wie lange dauert es, einen KI-Chatbot zu erstellen?",
    answer:
      "Der Pilot ist in fünf Arbeitstagen live, wenn die API-Zugänge stehen. Tag 1 Installation und SSO, Tag 2 der erste Connector ins ERP, Tag 3 und 4 die weiteren Systeme plus Test mit echten Daten, Tag 5 Onboarding der Sachbearbeiter. Was danach dauert, ist nicht der Bau, sondern das Nachschärfen der Antworten im echten Betrieb.",
  },
  {
    question: "Reicht nicht ChatGPT mit hochgeladenen Dateien?",
    answer:
      "Für einmalige Fragen an ein Dokument ja. Für den laufenden Betrieb nicht, weil eine hochgeladene Preisliste am nächsten Tag veraltet ist und weil jeder Nutzer alles sieht, was in der Datei steht. Im Großhandel scheitert genau daran der Ansatz: Kunde A darf Kunde Bs Konditionen nicht sehen, und der Bestand von gestern ist keine Auskunft, sondern ein Risiko.",
  },
  {
    question: "Welche ERP-Systeme könnt ihr anbinden?",
    answer:
      "Fertige Connectoren haben wir für e.bootis, Microsoft Navision und SharePoint, damit ist dieser Block Konfiguration statt Projektarbeit. Andere Systeme binden wir über deren REST- oder OData-Schnittstelle an. Wenn euer ERP gar keine API hat, ist das der Punkt, an dem wir ehrlich abraten, statt einen Datenbank-Direktzugriff zu bauen.",
  },
  {
    question: "Was kostet es, einen KI-Chatbot erstellen zu lassen?",
    answer:
      "Bei uns 1.000 € einmalig für den Piloten inklusive einer Datenquelle und 50 € pro Monat Betrieb, ohne Mindestlaufzeit. Die Marktpreise und die Rechnung dahinter stehen auf unserer Seite zu den Chatbot-Kosten.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
        <Hero2ColumnTextColumn>
          <Hero2ColumnPreHeadline>Umsetzung</Hero2ColumnPreHeadline>
          <Hero2ColumnHeadline>
            KI-Chatbot erstellen, der eure ERP-Daten kennt
          </Hero2ColumnHeadline>
          <GeoSummary>
            Einen KI-Chatbot erstellen heißt im Großhandel nicht, ein Tool zu
            konfigurieren, sondern eure Datenquellen anzubinden: ERP,
            Dateiablage, Preislisten, samt Berechtigungen. Bluebatch baut den
            Piloten in fünf Arbeitstagen auf eurer eigenen Infrastruktur, mit
            fertigen Connectoren zu e.bootis, Microsoft Navision und SharePoint,
            für 1.000 € Setup und 50 € Betrieb pro Monat.
          </GeoSummary>
          <Hero2ColumnDescription>
            Jede Anleitung im Netz endet bei &bdquo;Baukasten öffnen, Fragen
            hinterlegen, Widget einbinden&ldquo;. Das funktioniert für einen
            Bot, der eure Öffnungszeiten kennt. Diese Seite beschreibt den
            anderen Fall: einen Chatbot, der auf die Frage &bdquo;Sind die 200
            Stück lieferbar und was kosten sie für diesen Kunden?&ldquo; eine
            Zahl nennt, die stimmt.
          </Hero2ColumnDescription>
          <Hero2ColumnCallToAction>
            <ContactButton icon="chat">Pilot besprechen</ContactButton>
          </Hero2ColumnCallToAction>
        </Hero2ColumnTextColumn>
        <Hero2ColumnMediaColumn>
          <Hero2ColumnImage
            src="/images/ki-chatbot-implementierung/hero-implementierung.png"
            alt="Arbeitsplatz im Großhandel mit Bildschirm, auf dem eine Chat-Oberfläche neben Artikeldaten läuft"
          />
        </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 1. Antwort zuerst: drei Wege, und wann welcher trägt */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Die kurze Antwort</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Es gibt drei Wege, und sie unterscheiden sich nur in einem Punkt
          </IntroBox.Headline>
          <IntroBox.Subline>
            Nämlich darin, woher der Chatbot seine Antwort nimmt. Alles andere,
            Oberfläche, Sprachmodell, Design, ist inzwischen austauschbar.
          </IntroBox.Subline>
        </IntroBox>
        <DataTable>
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Weg</DataTable.HeaderCell>
              <DataTable.HeaderCell>
                Woher die Antwort kommt
              </DataTable.HeaderCell>
              <DataTable.HeaderCell>Trägt, wenn</DataTable.HeaderCell>
              <DataTable.HeaderCell>Scheitert an</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            <DataTable.Row>
              <DataTable.Cell bold>Baukasten-Tool</DataTable.Cell>
              <DataTable.Cell>
                Hinterlegte Frage-Antwort-Paare und eure Website-Texte
              </DataTable.Cell>
              <DataTable.Cell>
                Die Fragen sich wiederholen und die Antwort sich selten ändert:
                Öffnungszeiten, Versandbedingungen, Ansprechpartner
              </DataTable.Cell>
              <DataTable.Cell>
                Jeder Frage nach einer Zahl, die im ERP steht
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>
                Sprachmodell mit hochgeladenen Dateien
              </DataTable.Cell>
              <DataTable.Cell>
                Ein Dokumentenstapel, den jemand manuell hochlädt
              </DataTable.Cell>
              <DataTable.Cell>
                Es um einen abgeschlossenen Text geht, etwa ein Handbuch oder
                eine Norm
              </DataTable.Cell>
              <DataTable.Cell>
                Aktualität und Berechtigungen: die Preisliste von gestern und
                jeder sieht alles
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Chatbot auf euren Systemen</DataTable.Cell>
              <DataTable.Cell>
                Live-Abfrage in ERP, Dateiablage und Shop, gefiltert nach
                Benutzerrechten
              </DataTable.Cell>
              <DataTable.Cell>
                Die Antwort tagesaktuell und kundenabhängig sein muss:
                Lagerbestand, Konditionen, Auftragsstatus
              </DataTable.Cell>
              <DataTable.Cell>
                Einem ERP ohne Schnittstelle, sonst an nichts
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable.Body>
        </DataTable>
        <Image
          src="/images/ki-chatbot-implementierung/drei-wege.png"
          alt="Drei gleichrangige Karten nebeneinander: Baukasten, Dateien und eigene Systeme als die drei Quellen, aus denen ein Chatbot seine Antwort nimmt"
          width={1400}
          height={760}
          className="my-8 h-auto w-full rounded-2xl"
          sizes="(min-width: 1024px) 60vw, 100vw"
        />
        <Typo.Paragraph>
          Die 18 Ergebnisse, die Google zu &bdquo;KI-Chatbot erstellen&ldquo;
          ausspielt, beschreiben durchgehend die ersten beiden Wege. Für einen
          Händler mit gepflegtem Artikelstamm und kundenindividuellen Preisen
          ist das die falsche Anleitung, nicht weil sie schlecht wäre, sondern
          weil sie eine andere Aufgabe löst.
        </Typo.Paragraph>
      </ContentWrapper>

      {/* 2. Voraussetzungen */}
      <ContentWrapper>
        <Typo.H2>Was vorhanden sein muss, bevor gebaut wird</Typo.H2>
        <Typo.Paragraph>
          Wir haben noch kein Chatbot-Projekt an der Technik scheitern sehen.
          Gescheitert sind die, bei denen eine dieser drei Fragen offen blieb.
        </Typo.Paragraph>
        <Image
          src="/images/ki-chatbot-implementierung/voraussetzungen.png"
          alt="Ablaufkette von links nach rechts: API-Zugang, Freigabe der Felder und ein Anwendungsfall führen dazu, dass der Chatbot startet"
          width={1400}
          height={760}
          className="my-8 h-auto w-full rounded-2xl"
          sizes="(min-width: 1024px) 70vw, 100vw"
        />
        <ProseColumns cols={3}>
          <ProseColumnsItem title="Ein API-Zugang, der freigeschaltet ist">
            Nicht &bdquo;unser ERP hat eine Schnittstelle&ldquo;, sondern ein
            Benutzer mit Leserechten, dessen Zugang tatsächlich offen ist. Bei
            e.bootis, Navision und SharePoint bringen wir den Connector mit,
            bei anderen Systemen läuft es über REST oder OData. Hat euer ERP
            keine API, raten wir ab, statt am Vorbei einen Direktzugriff auf die
            Datenbank zu bauen.
          </ProseColumnsItem>
          <ProseColumnsItem title="Eine Person, die über Felder entscheidet">
            Jemand muss sagen, welche Felder der Bot lesen darf und welche
            nicht. Deckungsbeitrag, Einkaufspreis und Kreditlimit stehen im
            selben Datensatz wie der Lagerbestand. Diese Entscheidung kann
            niemand von außen treffen, und sie ist der häufigste Grund, warum
            ein Projekt zwei Wochen liegen bleibt.
          </ProseColumnsItem>
          <ProseColumnsItem title="Ein Anwendungsfall mit einem Fragesteller">
            &bdquo;Der Bot soll alles können&ldquo; ergibt einen Bot, der nichts
            richtig kann. Startet mit einer Gruppe und ihren zehn häufigsten
            Fragen: meist der Innendienst mit Bestand, Preis und Lieferzeit.
            Alles Weitere kommt danach dazu, das ist billiger als der Versuch,
            es vorher zu erraten.
          </ProseColumnsItem>
        </ProseColumns>
      </ContentWrapper>

      {/* 3. Wie eine Frage durchs System läuft */}
      <ContentWrapper colorScheme="gray">
        <Typo.H2>Was beim Erstellen technisch entsteht</Typo.H2>
        <Typo.Paragraph>
          Ein Chatbot auf euren Daten ist kein Modell, das etwas gelernt hat,
          sondern eine Kette, die bei jeder Frage neu durchlaufen wird. Genau
          deshalb ist die Antwort tagesaktuell, und deshalb lässt sich
          nachvollziehen, woher eine Zahl stammt.
        </Typo.Paragraph>
        <WorkflowDiagram>
          <WorkflowDiagram.Trigger
            title="Frage im Chat"
            subtitle="Innendienst, Vertrieb oder Kundenportal"
          />
          <WorkflowDiagram.Step
            n={1}
            title="Anmeldung prüfen"
            description="Der Bot weiß über SSO, wer fragt. Daraus ergibt sich, welche Kunden, Preise und Belege überhaupt sichtbar sind."
          />
          <WorkflowDiagram.Step
            n={2}
            title="Frage in eine Abfrage übersetzen"
            description="Das Sprachmodell entscheidet nur, welches System gefragt wird und wonach. Die Zahlen selbst erfindet es nicht."
          />
          <WorkflowDiagram.Step
            n={3}
            title="Daten live holen"
            description="Artikelstamm, Lagerbestand, Preisliste des Kunden, Auftragsstatus oder das passende Dokument aus SharePoint."
          />
          <WorkflowDiagram.Step
            n={4}
            title="Antwort formulieren, mit Quelle"
            description="Die Antwort nennt Artikelnummer, Stand und Herkunft, damit der Sachbearbeiter sie gegenprüfen kann, statt sie glauben zu müssen."
          />
          <WorkflowDiagram.Sink
            title="Antwort im Chat"
            subtitle="Nachvollziehbar bis zum Feld im ERP"
          />
          <WorkflowDiagram.Footnote tone="info">
            Der entscheidende Unterschied zu einem Baukasten liegt in Schritt 1
            und 3. Ohne Schritt 1 sieht jeder alles, ohne Schritt 3 antwortet
            der Bot aus einem Datenstand von vorgestern.
          </WorkflowDiagram.Footnote>
        </WorkflowDiagram>
      </ContentWrapper>

      {/* 4. Ablauf in 5 Tagen */}
      <ContentWrapper>
        <Typo.H2>Der Ablauf: fünf Arbeitstage bis zum Piloten</Typo.H2>
        <Typo.Paragraph>
          Das ist kein Richtwert, sondern der Zuschnitt, in dem wir den Piloten
          anbieten. Voraussetzung sind die drei Punkte von oben. Fehlt der
          API-Zugang, verschiebt sich alles ab Tag 2.
        </Typo.Paragraph>
        <TimelineAsSteps>
          <TimelineAsStepsStep value={1}>
            <Typo.H3 className="mt-1!">
              Umgebung aufsetzen und Anmeldung anbinden
            </Typo.H3>
            <Typo.Paragraph>
              Open WebUI als Chat-Oberfläche auf eurem Server, dazu Azure AD
              oder euer bestehendes SSO. Ab hier ist klar, wer fragt, und das
              ist die Grundlage für jede Berechtigungsregel danach.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={2}>
            <Typo.H3 className="mt-1!">Erster Connector ins ERP</Typo.H3>
            <Typo.Paragraph>
              API-Zugang einrichten und die erste Datenquelle verbinden, in der
              Regel Artikelstamm und Lagerbestand. Am Ende des Tages beantwortet
              der Bot die erste echte Bestandsfrage.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={3}>
            <Typo.H3 className="mt-1!">
              Weitere Systeme und die Berechtigungslogik
            </Typo.H3>
            <Typo.Paragraph>
              Preise und Konditionen, Auftragsstatus, Dokumente aus SharePoint.
              Hier wird festgelegt, welche Rolle welche Felder sieht, und hier
              entscheidet sich, ob der Bot im Kundenkontakt einsetzbar ist.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={4}>
            <Typo.H3 className="mt-1!">Test mit echten Daten</Typo.H3>
            <Typo.Paragraph>
              Wir fahren die zehn häufigsten Fragen gegen den Bot und
              vergleichen jede Antwort mit dem ERP. Was abweicht, wird
              nachgeschärft. Dieser Tag entscheidet über das Vertrauen der
              Sachbearbeiter, nicht das Design der Oberfläche.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={5} isLast>
            <Typo.H3 className="mt-1!">Onboarding und Übergabe</Typo.H3>
            <Typo.Paragraph>
              Einweisung der Sachbearbeiter, Beispiel-Prompts für die typischen
              Fragen, Übergabe der Workflows. Die liegen in n8n auf eurer
              Infrastruktur und gehören euch, auch wenn ihr danach ohne uns
              weitermacht.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
        </TimelineAsSteps>
      </ContentWrapper>

      {/* 5. Rollenverteilung */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Wer was macht</Typo.H2>
        <Typo.Paragraph>
          Der Aufwand auf eurer Seite ist überschaubar, aber er ist nicht null.
          Diese Punkte lassen sich nicht auslagern, weil nur ihr sie
          beantworten könnt.
        </Typo.Paragraph>
        <DataTable>
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Aufgabe</DataTable.HeaderCell>
              <DataTable.HeaderCell>Bei euch</DataTable.HeaderCell>
              <DataTable.HeaderCell>Bei uns</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            <DataTable.Row>
              <DataTable.Cell bold>Server und Betrieb</DataTable.Cell>
              <DataTable.Cell>
                Linux-Server mit Docker bereitstellen, oder wir hosten mit
              </DataTable.Cell>
              <DataTable.Cell>
                Installation, Updates, Monitoring des Chatbots
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>ERP-Zugang</DataTable.Cell>
              <DataTable.Cell>
                Technischen Benutzer mit Leserechten anlegen und freischalten
              </DataTable.Cell>
              <DataTable.Cell>
                Connector konfigurieren, Felder mappen, Abfragen bauen
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Sichtbarkeit von Feldern</DataTable.Cell>
              <DataTable.Cell>
                Entscheiden, welche Rolle Einkaufspreise, Margen und Belege
                sieht
              </DataTable.Cell>
              <DataTable.Cell>
                Die Entscheidung in Regeln übersetzen und testbar machen
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Fachliche Prüfung</DataTable.Cell>
              <DataTable.Cell>
                Zwei Sachbearbeiter, die an Tag 4 die Antworten gegenlesen
              </DataTable.Cell>
              <DataTable.Cell>
                Abweichungen nachschärfen, bis die Antworten tragen
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Nach dem Piloten</DataTable.Cell>
              <DataTable.Cell>
                Entscheiden, ob und welche Quellen dazukommen
              </DataTable.Cell>
              <DataTable.Cell>
                Betrieb für 50 € im Monat, Erweiterung nach Aufwand
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable.Body>
        </DataTable>
      </ContentWrapper>

      {/* 6. Ehrliche Abgrenzung */}
      <ContentWrapper>
        <Typo.H2>Wann ihr das braucht, und wann ein Baukasten reicht</Typo.H2>
        <Typo.Paragraph>
          Wir bauen keinen Chatbot, wenn ein Baukasten die Aufgabe erledigt. Die
          Trennlinie ist ziemlich scharf.
        </Typo.Paragraph>
        <ProsCons>
          <ProsCons.Pros>
            <ProsCons.Item
              title="Die Antwort steht im ERP"
              description="Bestand, Lieferzeit, Auftragsstatus, offene Posten. Alles, was sich täglich ändert, kann nur aus dem System kommen, nicht aus einer gepflegten Antwortliste."
            />
            <ProsCons.Item
              title="Die Antwort hängt vom Kunden ab"
              description="Preislisten, Rabattstaffeln, Rahmenverträge. Sobald zwei Kunden dieselbe Frage stellen und zwei verschiedene Zahlen bekommen müssen, ist ein Baukasten raus."
            />
            <ProsCons.Item
              title="Es gibt etwas zu schützen"
              description="Einkaufspreise, Margen, fremde Belege. Ein Chatbot ohne Berechtigungslogik ist im Mehrkunden-Kontext kein Werkzeug, sondern ein Datenschutzvorfall mit Chat-Oberfläche."
            />
            <ProsCons.Item
              title="Die Daten sollen im Haus bleiben"
              description="Self-hosted auf eurer Infrastruktur, Workflows in n8n, kein Artikelstamm bei einem SaaS-Anbieter. Für viele Händler ist das die Bedingung, unter der das Thema überhaupt startet."
            />
          </ProsCons.Pros>
          <ProsCons.Cons>
            <ProsCons.Item
              title="Die Fragen sind allgemein"
              description="Öffnungszeiten, Versandkosten, Ansprechpartner, Rückgabebedingungen. Dafür genügt ein Baukasten-Tool, und der ist in einem Nachmittag eingerichtet."
            />
            <ProsCons.Item
              title="Das ERP hat keine Schnittstelle"
              description="Ohne API bleibt nur ein Direktzugriff auf die Datenbank oder ein nächtlicher Export. Beides bauen wir nicht, weil beides beim ersten Update bricht."
            />
            <ProsCons.Item
              title="Der Artikelstamm ist ungepflegt"
              description="Ein Chatbot macht schlechte Stammdaten sichtbar, er repariert sie nicht. Wenn Bestände regelmäßig nicht stimmen, ist das zuerst ein Datenthema."
            />
          </ProsCons.Cons>
        </ProsCons>
      </ContentWrapper>

      {/* 7. Ergebnis in Zahlen */}
      <ContentWrapper colorScheme="gradient-night">
        <Typo.H2>Der Pilot in Zahlen</Typo.H2>
        <StatsList
          cols={4}
          textColor="text-white"
          stats={[
            { value: 5, label: "Arbeitstage bis Go-live" },
            { value: 1000, suffix: " €", label: "Setup, einmalig pauschal" },
            { value: 50, suffix: " €", label: "Betrieb pro Monat" },
            { value: 3, label: "Systeme im Piloten angebunden" },
          ]}
        />
      </ContentWrapper>

      {/* 8. FAQ */}
      <ContentWrapper bodyWidth="small">
        <FaqContainer faqs={faqs}>
          <FaqContainer.Headline>
            KI-Chatbot erstellen: häufige Fragen
          </FaqContainer.Headline>
        </FaqContainer>
      </ContentWrapper>

      {/* 9. Cross-Sell */}
      <ContentWrapper colorScheme="gray-light">
        <CrossSellGrid>
          <CrossSellGrid.Eyebrow>Passend dazu</CrossSellGrid.Eyebrow>
          <CrossSellGrid.Headline>
            Weiter im Thema KI-Chatbot
          </CrossSellGrid.Headline>
          <CrossSellGrid.Card href="/branchen/grosshandel/chatbots/ki-chatbot-grosshandel">
            <CrossSellGrid.Title>
              KI-Chatbot mit ERP-Anbindung
            </CrossSellGrid.Title>
            <CrossSellGrid.Description>
              Was der fertige Chatbot beantwortet: Stammdaten, Bestände,
              Aufträge, Belege, Preise und Lieferanten im Überblick.
            </CrossSellGrid.Description>
          </CrossSellGrid.Card>
          <CrossSellGrid.Card href="/branchen/grosshandel/chatbots/was-kostet-ein-chatbot">
            <CrossSellGrid.Title>
              Was kostet ein KI-Chatbot?
            </CrossSellGrid.Title>
            <CrossSellGrid.Description>
              Marktpreise, die drei echten Kostentreiber und die Rechnung, ab
              wann sich der Pilot trägt.
            </CrossSellGrid.Description>
          </CrossSellGrid.Card>
          <CrossSellGrid.Card href="/branchen/grosshandel/chatbots/was-ist-ein-ki-chatbot">
            <CrossSellGrid.Title>
              Was ist ein KI-Chatbot?
            </CrossSellGrid.Title>
            <CrossSellGrid.Description>
              Die Abgrenzung zwischen regelbasiertem Bot, Sprachmodell und
              KI-Agent, und wann welche Stufe genügt.
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
