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
import ProseColumns, { ProseColumnsItem } from "@/components/ui/prose-columns";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/ui/timeline-as-steps";
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
import SimpleCard from "@/components/cards/simple-card";
import ProsCons from "@/components/sections/pros-cons";
import CrossSellGrid from "@/components/sections/cross-sell-grid";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import ContactButton from "@/components/buttons/contact-button";

const meta = {
  title:
    "Was ist ein KI-Chatbot? Definition und Einsatz im Großhandel | Bluebatch",
  description:
    "Ein KI-Chatbot versteht frei formulierte Fragen und beantwortet sie aus Ihren eigenen Daten. Die drei Stufen regelbasiert, LLM und KI-Agent, was im Großhandel dazugehört und wo die Grenzen liegen.",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: "Was ist ein KI-Chatbot? Definition und Einsatz im Großhandel",
    description: meta.description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages("Was ist ein KI-Chatbot?", "Großhandel"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Was ist ein KI-Chatbot? Definition und Einsatz im Großhandel",
    description: meta.description,
    images: ogImages("Was ist ein KI-Chatbot?", "Großhandel").map(
      (i) => i.url,
    ),
  },
  alternates: {
    canonical: "/branchen/grosshandel/chatbots/was-ist-ein-ki-chatbot",
  },
};

const faqs = [
  {
    question: "Was ist ein KI-Chatbot einfach erklärt?",
    answer:
      "Ein Programm, das frei formulierte Fragen versteht und in normaler Sprache antwortet. Der Unterschied zum klassischen Chatbot: Er folgt keinem vorgegebenen Dialogbaum, sondern erfasst, was gemeint ist, auch wenn die Frage anders gestellt wird als erwartet. Die Antwort zieht er aus den Daten, die man ihm zugänglich macht, im Großhandel typischerweise aus ERP, Preislisten und Dokumentenablage.",
  },
  {
    question: "Was ist der Unterschied zwischen Chatbot und KI-Chatbot?",
    answer:
      "Ein klassischer Chatbot arbeitet regelbasiert: Er kennt eine feste Liste von Fragen und die dazugehörigen Antworten und steigt aus, sobald jemand davon abweicht. Ein KI-Chatbot nutzt ein Sprachmodell und versteht auch Formulierungen, die niemand vorher eingepflegt hat. Praktisch merkt man den Unterschied daran, wie oft der Bot sagt, dass er die Frage nicht versteht.",
  },
  {
    question: "Was ist der Unterschied zwischen einem KI-Chatbot und einem KI-Agenten?",
    answer:
      "Der Chatbot antwortet, der Agent handelt. Ein KI-Chatbot sagt Ihnen, dass von Artikel 4711 noch 120 Stück am Lager sind. Ein KI-Agent legt daraus auf Zuruf die Bestellung an, prüft das Kreditlimit und schickt die Auftragsbestätigung raus. Technisch ist der Agent ein Chatbot mit Schreibrechten und mehrstufiger Aufgabenplanung, und genau deshalb braucht er strengere Freigaben.",
  },
  {
    question: "Woher weiß ein KI-Chatbot etwas über unsere Artikel und Preise?",
    answer:
      "Nicht aus dem Sprachmodell, sondern aus einer Anbindung an Ihre Systeme. Das Modell selbst kennt Ihren Katalog nicht und darf ihn auch nicht raten. Üblich ist, dass der Chatbot bei jeder Frage live die passenden Datensätze aus ERP, Warenwirtschaft oder Dateiablage holt und seine Antwort nur daraus bildet. Steht die Information nicht in den Daten, muss er das sagen, statt etwas zu erfinden.",
  },
  {
    question: "Kann ein KI-Chatbot kundenindividuelle Preise anzeigen?",
    answer:
      "Ja, wenn die Berechtigungen sauber abgebildet sind. Er muss erkennen, wer fragt, und darf pro Anfrage nur die Preisliste, die Staffeln und die Rahmenverträge dieses einen Kunden sehen. Das ist im B2B-Handel der heikelste Teil des Projekts und der Grund, warum ein Chatbot für Ihren Innendienst deutlich schneller live geht als einer für Ihr Kundenportal.",
  },
  {
    question: "Muss man Kunden sagen, dass sie mit einer KI schreiben?",
    answer:
      "Ja. Der EU AI Act verlangt, dass Menschen erkennen können, dass sie mit einem KI-System interagieren, und diese Transparenzpflicht gilt seit dem 2. August 2026 in vollem Umfang. Praktisch reicht ein deutlicher Hinweis im Chatfenster. Dazu kommt die DSGVO-Seite: Auftragsverarbeitungsvertrag mit dem Modellanbieter, oder das Modell läuft von vornherein auf Ihrer eigenen Infrastruktur.",
  },
  {
    question: "Ab welcher Unternehmensgröße lohnt sich das?",
    answer:
      "Die Frage ist nicht die Mitarbeiterzahl, sondern wie oft dieselbe Auskunft gegeben wird. Wenn Ihr Innendienst jeden Tag Bestände, Liefertermine und Preise aus dem ERP heraussucht und am Telefon weitergibt, trägt der Fall schon bei einer Handvoll Sachbearbeitern. Wenn Anfragen selten sind und jede anders aussieht, ist ein Chatbot der falsche Hebel.",
  },
];

export default function Page() {
  return (
    <>
      <Hero2Column>
        <Hero2ColumnTextColumn>
          <Hero2ColumnPreHeadline>Grundlagen</Hero2ColumnPreHeadline>
          <Hero2ColumnHeadline>Was ist ein KI-Chatbot?</Hero2ColumnHeadline>
          <GeoSummary>
            Ein KI-Chatbot ist ein Programm, das frei formulierte Fragen mit
            einem Sprachmodell versteht und aus angebundenen Daten beantwortet,
            statt einem festen Dialogbaum zu folgen. Im Großhandel heißt das:
            Er beantwortet Fragen zu Beständen, Preisen und Aufträgen direkt aus
            ERP und Dateiablage. Der Nutzen entsteht nicht am Chatfenster,
            sondern an der Datenanbindung dahinter.
          </GeoSummary>
          <Hero2ColumnCallToAction>
            <ContactButton icon="chat">Anwendungsfall besprechen</ContactButton>
          </Hero2ColumnCallToAction>
          <Hero2ColumnSubtext>
            Diese Seite erklärt den Begriff und wird dann konkret: die drei
            Stufen, die Datenfrage im Handel und die Grenzen.
          </Hero2ColumnSubtext>
        </Hero2ColumnTextColumn>
        <Hero2ColumnMediaColumn>
          <Hero2ColumnImage
            src="/images/was-ist-ein-ki-chatbot/hero-definition.png"
            type="image"
          />
        </Hero2ColumnMediaColumn>
      </Hero2Column>

      {/* 1. Die Definition, ausgeschrieben */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Definition</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Verstehen statt Erkennen: Das ist der eigentliche Unterschied
          </IntroBox.Headline>
        </IntroBox>

        <div className="mt-8">
          <Typo.Paragraph>
            Chatbots gibt es seit Jahrzehnten. Was sie bis vor Kurzem
            gemeinsam hatten: Jemand musste vorher jede Frage vorhersehen. Der
            Bot glich die Eingabe mit einer Liste von Stichwörtern ab, fand
            einen Treffer und spielte die hinterlegte Antwort aus. Traf er
            nichts, kam der Satz, den alle kennen: &bdquo;Das habe ich leider
            nicht verstanden.&ldquo;
          </Typo.Paragraph>
          <Typo.Paragraph>
            Ein KI-Chatbot arbeitet anders. Er nutzt ein großes Sprachmodell,
            also ein Modell, das Sprache statistisch modelliert und deshalb
            auch Formulierungen versteht, die niemand vorher eingepflegt hat.
            &bdquo;Habt ihr die 3x1,5er Leitung noch da?&ldquo; und &bdquo;Wie
            ist der Bestand bei NYM-J 3x1,5?&ldquo; landen bei derselben
            Antwort, ohne dass jemand beide Varianten hinterlegt hat.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Der zweite, im Alltag wichtigere Teil der Definition wird oft
            unterschlagen: <strong>Woher die Antwort kommt.</strong> Das
            Sprachmodell kennt Ihren Artikelstamm nicht. Es weiß nicht, was bei
            Ihnen am Lager liegt, welchen Preis Kunde Müller bekommt und ob der
            Auftrag von gestern schon kommissioniert ist. Ein KI-Chatbot, der
            in einem Unternehmen etwas taugt, holt sich diese Daten bei jeder
            einzelnen Frage aus den Systemen, in denen sie stehen, und bildet
            seine Antwort ausschließlich daraus. Ohne diese Anbindung haben Sie
            keinen Unternehmens-Chatbot, sondern ein zweites ChatGPT-Fenster.
          </Typo.Paragraph>
        </div>
      </ContentWrapper>

      {/* 2. Die drei Stufen */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Einordnung</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Regelbasierter Bot, KI-Chatbot, KI-Agent
          </IntroBox.Headline>
          <IntroBox.Subline>
            Die drei Begriffe werden durcheinandergeworfen, auch von Anbietern.
            Sie beschreiben aber drei klar unterscheidbare Stufen mit sehr
            unterschiedlichem Aufwand.
          </IntroBox.Subline>
        </IntroBox>

        <DataTable className="mt-10">
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Kriterium</DataTable.HeaderCell>
              <DataTable.HeaderCell>Regelbasierter Chatbot</DataTable.HeaderCell>
              <DataTable.HeaderCell>KI-Chatbot</DataTable.HeaderCell>
              <DataTable.HeaderCell>KI-Agent</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            <DataTable.Row>
              <DataTable.Cell bold>Versteht</DataTable.Cell>
              <DataTable.Cell>
                Vorher definierte Stichwörter und Menüpfade
              </DataTable.Cell>
              <DataTable.Cell>
                Frei formulierte Fragen, auch unerwartete
              </DataTable.Cell>
              <DataTable.Cell>
                Frei formulierte Aufträge über mehrere Schritte
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Antwortquelle</DataTable.Cell>
              <DataTable.Cell>Redaktionell gepflegte Texte</DataTable.Cell>
              <DataTable.Cell>
                Live-Abfrage aus ERP, Datenbank, Dokumenten
              </DataTable.Cell>
              <DataTable.Cell>
                Dieselben Quellen, zusätzlich schreibender Zugriff
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Darf handeln</DataTable.Cell>
              <DataTable.Cell>Nein</DataTable.Cell>
              <DataTable.Cell>Nein, nur Auskunft geben</DataTable.Cell>
              <DataTable.Cell>
                Ja: Auftrag anlegen, Mail senden, Ticket eröffnen
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Pflegeaufwand</DataTable.Cell>
              <DataTable.Cell>
                Hoch und dauerhaft, jeder neue Fall von Hand
              </DataTable.Cell>
              <DataTable.Cell>
                Gering, die Daten pflegen Sie ohnehin
              </DataTable.Cell>
              <DataTable.Cell>
                Gering, dafür laufende Kontrolle der Aktionen
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Risiko bei Fehler</DataTable.Cell>
              <DataTable.Cell>
                Bot antwortet nicht, Kunde ruft an
              </DataTable.Cell>
              <DataTable.Cell>
                Falsche Auskunft, korrigierbar im Gespräch
              </DataTable.Cell>
              <DataTable.Cell>
                Falsche Buchung im System, muss storniert werden
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Sinnvoll, wenn</DataTable.Cell>
              <DataTable.Cell>
                Wenige, immer gleiche Standardfragen
              </DataTable.Cell>
              <DataTable.Cell>
                Viele Auskünfte aus Daten, die schon da sind
              </DataTable.Cell>
              <DataTable.Cell>
                Der Auskunftsfall läuft stabil und soll weitergehen
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable.Body>
        </DataTable>

        <Typo.Paragraph className="mt-8 text-gray-600">
          Die praktische Empfehlung fällt fast immer gleich aus: Fangen Sie in
          der mittleren Spalte an. Der regelbasierte Bot löst im Handel zu
          wenig, um den Pflegeaufwand zu rechtfertigen, und der Agent setzt
          voraus, dass Sie den Auskunftsfall schon im Griff haben. Wie die
          Ausbaustufe aussieht, wenn der Bot handeln darf, steht bei den{" "}
          <Link
            href="/branchen/grosshandel/ki-agenten"
            className="text-primary-600 hover:underline"
          >
            KI-Agenten für den Großhandel
          </Link>
          . Wenn Sie die drei Bauarten ohne Großhandels-Bezug gegeneinander
          stellen wollen, samt Preisrahmen und Berechtigungsfrage, hilft die
          branchenübergreifende Übersicht zum{" "}
          <Link
            href="/services/ki-chatbot-fuer-unternehmen"
            className="text-primary-600 hover:underline"
          >
            KI-Chatbot für Unternehmen
          </Link>
          .
        </Typo.Paragraph>
      </ContentWrapper>

      {/* 3. Wie er technisch arbeitet */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Funktionsweise</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was zwischen Frage und Antwort passiert
          </IntroBox.Headline>
          <IntroBox.Subline>
            Vier Schritte, jedes Mal. Der interessante Teil ist Schritt zwei,
            nicht das Sprachmodell.
          </IntroBox.Subline>
        </IntroBox>

        <TimelineAsSteps className="mt-10">
          <TimelineAsStepsStep value={1}>
            <Typo.H3>Die Frage wird eingeordnet</Typo.H3>
            <Typo.Paragraph>
              Das Modell erkennt, worum es geht und welche Angaben fehlen. Aus
              &bdquo;Wann kommt meine Bestellung?&ldquo; wird die Erkenntnis,
              dass eine Auftragsnummer oder ein Kundenbezug nötig ist, und der
              Bot fragt danach, statt zu raten.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={2}>
            <Typo.H3>Die passenden Daten werden geholt</Typo.H3>
            <Typo.Paragraph>
              Jetzt greift die Anbindung: Der Bot fragt Ihr ERP nach genau
              diesem Auftrag, sucht den Artikel im Stamm oder findet den
              Absatz im hinterlegten Dokument. Er bekommt Datensätze, keine
              Vermutungen. Dieser Schritt entscheidet über die Qualität der
              ganzen Lösung.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={3}>
            <Typo.H3>Die Antwort wird formuliert</Typo.H3>
            <Typo.Paragraph>
              Das Sprachmodell macht aus den Datensätzen einen verständlichen
              Satz. Wichtig ist die Regel dahinter: Was nicht in den
              gelieferten Daten steht, darf nicht in der Antwort stehen. Findet
              der Bot nichts, sagt er das.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={4} isLast>
            <Typo.H3>Die Quelle wird mitgeliefert</Typo.H3>
            <Typo.Paragraph>
              Auftragsnummer, Artikelnummer, Dokumentname. Ohne Beleg prüft
              niemand nach, und ohne Prüfung entsteht kein Vertrauen. In der
              Praxis ist das der Punkt, an dem Innendienst-Teams anfangen, dem
              Bot tatsächlich zu glauben.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
        </TimelineAsSteps>

        <div className="relative mt-12 aspect-[16/9] w-full">
          <Image
            src="/images/was-ist-ein-ki-chatbot/funktionsweise.png"
            alt="Ablauf in vier Schritten: Frage verstehen, Daten holen aus ERP und Dokumenten, Antwort bilden, Quelle nennen"
            fill
            className="object-contain"
            sizes="(min-width: 1024px) 900px, 100vw"
          />
        </div>
      </ContentWrapper>

      {/* 4. Die Datenfrage im Handel */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Großhandel</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Warum ein Handels-Chatbot mehr braucht als eine FAQ-Seite
          </IntroBox.Headline>
          <IntroBox.Subline>
            Fast alles, was über KI-Chatbots geschrieben wird, denkt an einen
            Endkunden im Onlineshop. Im Großhandel sieht die Datenlage anders
            aus, und daran scheitern die Standardlösungen.
          </IntroBox.Subline>
        </IntroBox>

        <ProseColumns cols={2} className="mt-12">
          <ProseColumnsItem title="Artikelstammdaten sind nicht flach">
            Ein Shop-Chatbot kommt mit Name, Bild und Preis aus. Im Handel
            hängen an einem Artikel Verpackungseinheiten, Mengenstaffeln,
            Mindestabnahmen, Ersatz- und Nachfolgeartikel sowie
            Cross-References auf Hersteller- und Wettbewerbsnummern. Wer nach
            &bdquo;der Nummer vom Hersteller&ldquo; fragt, muss trotzdem Ihren
            Artikel finden.
          </ProseColumnsItem>
          <ProseColumnsItem title="Preise sind kundenindividuell">
            Es gibt nicht den Preis, sondern den Preis für diesen Kunden, in
            dieser Menge, unter diesem Rahmenvertrag. Ein Chatbot, der einen
            Listenpreis nennt, wo ein Kontraktpreis gilt, richtet mehr Schaden
            an als er Zeit spart.
          </ProseColumnsItem>
          <ProseColumnsItem title="Bestände sind eine Momentaufnahme">
            Verfügbar heißt im Handel nicht dasselbe wie im Lager liegend:
            reservierte Mengen, offene Kundenaufträge, erwarteter Wareneingang.
            Eine ehrliche Antwort nennt frei verfügbare Menge und den nächsten
            Zulauf, keine einzelne Zahl.
          </ProseColumnsItem>
          <ProseColumnsItem title="Klassifikationen sind selten vollständig">
            ETIM oder eCl@ss sind im technischen Handel Standard, aber im
            eigenen Bestand oft lückenhaft gepflegt. Der Chatbot macht diese
            Lücken sichtbar, weil er genau dort nichts findet. Das ist
            unangenehm, aber nützlich.
          </ProseColumnsItem>
        </ProseColumns>

        <div className="relative mt-12 aspect-[16/9] w-full">
          <Image
            src="/images/was-ist-ein-ki-chatbot/datenquellen.png"
            alt="Der KI-Chatbot als zentraler Knoten, angebunden an Artikelstamm, Preislisten, Lagerbestand, Auftragsstatus und Dokumente"
            fill
            className="object-contain"
            sizes="(min-width: 1024px) 900px, 100vw"
          />
        </div>
      </ContentWrapper>

      {/* 5. Berechtigungen */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Berechtigungen</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Die Frage, die im B2B über das ganze Projekt entscheidet
          </IntroBox.Headline>
        </IntroBox>

        <div className="mt-8">
          <Typo.Paragraph>
            Sobald ein KI-Chatbot Kundendaten sieht, muss er wissen, wer gerade
            fragt, und darf ausschließlich die Daten dieses einen Kunden in die
            Antwort nehmen. Klingt selbstverständlich, ist aber der Punkt, an
            dem Projekte hängen bleiben: Die Berechtigungslogik steckt im ERP,
            und sie muss auf jede einzelne Abfrage angewandt werden, nicht
            einmalig beim Aufsetzen.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Daraus folgt eine sehr praktische Reihenfolge. Ein Chatbot{" "}
            <strong>für den eigenen Innendienst</strong> ist deutlich einfacher:
            Die Kolleginnen und Kollegen dürfen ohnehin alles sehen, was im ERP
            steht, es kommen keine neuen Berechtigungsfragen dazu. Ein Chatbot{" "}
            <strong>für das Kundenportal</strong> ist derselbe Bot mit einer
            zusätzlichen, harten Anforderung an Authentifizierung und
            Mandantentrennung.
          </Typo.Paragraph>
        </div>

        <SimpleGrid cols={2} className="mt-10">
          <SimpleCard>
            <Typo.H3>Intern zuerst</Typo.H3>
            <Typo.Paragraph className="text-sm">
              Innendienst, Vertrieb, Einkauf und Lager fragen dasselbe, was sie
              heute im ERP heraussuchen. Kein neues Berechtigungskonzept, keine
              Außenwirkung bei einer Fehlauskunft, sofort messbarer Nutzen in
              gesparter Suchzeit.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3>Extern danach</Typo.H3>
            <Typo.Paragraph className="text-sm">
              Für Kunden gilt dieselbe Technik, aber mit Login, sauberer
              Mandantentrennung und einem klaren Hinweis, dass hier eine KI
              antwortet. Der Schritt lohnt sich, wenn intern belegt ist, dass
              die Antworten stimmen.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 6. Grenzen */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Ehrlich betrachtet</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wofür ein KI-Chatbot taugt und wofür nicht
          </IntroBox.Headline>
        </IntroBox>

        <ProsCons className="mt-10">
          <ProsCons.Pros>
            <ProsCons.Item
              title="Wiederkehrende Auskünfte aus vorhandenen Daten"
              description="Bestand, Preis, Liefertermin, Auftragsstatus, Datenblatt. Alles, wonach heute jemand im ERP sucht, um es am Telefon vorzulesen."
            />
            <ProsCons.Item
              title="Suche in gewachsenen Dokumentenablagen"
              description="Technische Datenblätter, Rahmenverträge, Zertifikate. Der Bot findet die Stelle im Dokument, nicht nur den Dateinamen."
            />
            <ProsCons.Item
              title="Einarbeitung neuer Mitarbeiter"
              description="Wer neu im Innendienst ist, fragt den Bot statt die Kollegin am Nachbartisch. Der unterschätzte Nutzen bei knappem Personal."
            />
            <ProsCons.Item
              title="Anfragen außerhalb der Geschäftszeiten"
              description="Auskünfte, die sonst bis zum nächsten Morgen liegen bleiben, sind sofort da, ohne dass jemand Bereitschaft hat."
            />
          </ProsCons.Pros>
          <ProsCons.Cons>
            <ProsCons.Item
              title="Verbindliche Zusagen ohne Kontrolle"
              description="Ein zugesagter Liefertermin oder ein genannter Preis kann im Zweifel bindend sein. Alles, was Vertragswirkung entfaltet, gehört hinter eine menschliche Freigabe."
            />
            <ProsCons.Item
              title="Technische Beratung mit Haftungsfolge"
              description="Bei Auslegung, Eignung oder Sicherheit ist eine plausibel klingende Fehlempfehlung teuer. Der Bot darf Datenblätter zeigen, nicht die Eignung beurteilen."
            />
            <ProsCons.Item
              title="Daten, die es nicht gibt"
              description="Was im ERP nicht gepflegt ist, kann der Chatbot nicht beantworten. Ein Bot behebt keine Stammdatenlücken, er macht sie sichtbar."
            />
            <ProsCons.Item
              title="Der Ersatz für den persönlichen Draht"
              description="Reklamationen, Preisverhandlungen und Eskalationen bleiben Menschenarbeit. Der Bot schafft dafür Zeit, er übernimmt es nicht."
            />
          </ProsCons.Cons>
        </ProsCons>
      </ContentWrapper>

      {/* 7. Rechtliches */}
      <ContentWrapper colorScheme="primary-dark">
        <IntroBox dark>
          <IntroBox.PreHeadline>Rahmenbedingungen</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Zwei Pflichten, die vor dem Go-live geklärt sein müssen
          </IntroBox.Headline>
        </IntroBox>

        <SimpleGrid cols={2} className="mt-10">
          <SimpleCard className="bg-white/10! border-white/20! text-white">
            <Typo.H3 className="text-white!">Transparenz nach EU AI Act</Typo.H3>
            <Typo.Paragraph className="text-sm text-white/80!">
              Wer mit einem KI-System schreibt, muss das erkennen können. Die
              Transparenzpflichten der Verordnung gelten seit dem 2. August 2026
              vollständig. Für einen Chatbot bedeutet das keinen Aufwand,
              sondern einen deutlichen Hinweis im Chatfenster, den man nicht
              wegdesignen darf.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard className="bg-white/10! border-white/20! text-white">
            <Typo.H3 className="text-white!">Datenschutz und Hosting</Typo.H3>
            <Typo.Paragraph className="text-sm text-white/80!">
              Sobald Kundendaten in Anfragen an ein Modell fließen, braucht es
              einen Auftragsverarbeitungsvertrag mit dem Anbieter und eine
              geklärte Frage nach dem Verarbeitungsort. Die Alternative, die
              beides erledigt: Das Modell läuft auf Ihrer eigenen
              Infrastruktur.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 8. FAQ */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Häufige Fragen</IntroBox.PreHeadline>
          <IntroBox.Headline>KI-Chatbots kurz beantwortet</IntroBox.Headline>
        </IntroBox>
        <FaqContainer faqs={faqs} />
      </ContentWrapper>

      {/* 9. Weiterführend */}
      <ContentWrapper>
        <CrossSellGrid>
          <CrossSellGrid.Eyebrow>Weiterführend</CrossSellGrid.Eyebrow>
          <CrossSellGrid.Headline>
            Vom Begriff zur Umsetzung
          </CrossSellGrid.Headline>
          <CrossSellGrid.Card href="/branchen/grosshandel/chatbots/ki-chatbot-grosshandel">
            <CrossSellGrid.Title>
              KI-Chatbot mit ERP-Anbindung
            </CrossSellGrid.Title>
            <CrossSellGrid.Description>
              Der Pilot für den Innendienst: Connectoren zu e.bootis, Navision
              und SharePoint, in fünf Tagen live.
            </CrossSellGrid.Description>
          </CrossSellGrid.Card>
          <CrossSellGrid.Card href="/branchen/grosshandel/chatbots">
            <CrossSellGrid.Title>
              KI-Chatbots für den Großhandel
            </CrossSellGrid.Title>
            <CrossSellGrid.Description>
              Der Überblick über alle Chatbot-Varianten und die passenden
              Anwendungsfälle.
            </CrossSellGrid.Description>
          </CrossSellGrid.Card>
          <CrossSellGrid.Card href="/branchen/grosshandel">
            <CrossSellGrid.Title>KI im Großhandel</CrossSellGrid.Title>
            <CrossSellGrid.Description>
              Alle Workflows, Agenten und Assistenten, die wir für Großhändler
              umsetzen.
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
