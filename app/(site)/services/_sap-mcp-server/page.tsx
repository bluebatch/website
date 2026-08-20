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
  title: "SAP MCP Server: KI-Agenten an S/4HANA und ECC anbinden | Bluebatch",
  description:
    "Ein SAP MCP Server verbindet KI-Agenten mit echten SAP-Daten. Welche der drei Bezugswege für Geschäftsdaten taugt, wie der Zugriff technisch läuft und was Aufbau und Betrieb kosten.",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: "SAP MCP Server: der Weg vom KI-Agenten zu echten SAP-Daten",
    description: meta.description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages("SAP MCP Server", "Services"),
  },
  twitter: {
    card: "summary_large_image",
    title: "SAP MCP Server: der Weg vom KI-Agenten zu echten SAP-Daten",
    description: meta.description,
    images: ogImages("SAP MCP Server", "Services").map((i) => i.url),
  },
  alternates: {
    canonical: "/services/sap-mcp-server",
  },
};

const faqs = [
  {
    question: "Was ist ein SAP MCP Server?",
    answer:
      "Ein MCP-Server ist eine kleine Vermittlungsschicht zwischen einem KI-Agenten und einem Fachsystem. Er beschreibt dem Agenten in einem einheitlichen Format, welche Abfragen und Aktionen es gibt, und führt sie danach gegen das System aus. Bei SAP heißt das: Der Server nimmt eine Frage wie „Welche Aufträge dieses Kunden sind noch offen?“ entgegen, übersetzt sie in einen OData-Aufruf oder einen Funktionsbaustein und gibt die Antwort strukturiert zurück. Model Context Protocol ist der offene Standard dahinter, veröffentlicht von Anthropic Ende 2024 und inzwischen von praktisch allen größeren KI-Anbietern unterstützt.",
  },
  {
    question: "Hat SAP einen eigenen offiziellen MCP-Server?",
    answer:
      "SAP hat mehrere, aber nicht für den Zweck, den die meisten suchen. Von den acht offiziellen Servern richten sich sieben an Entwicklerinnen und Entwickler, die SAP-Software bauen: Fiori, CAP, UI5, MDK, UI5 Web Components, die Agent Skills dazu und ADT für ABAP. Der achte liefert Daten aus SAP LeanIX, also Enterprise-Architektur. Für Aufträge, Bestände, Lieferanten oder Rechnungen ist keiner davon der richtige Andockpunkt. Wer Geschäftsdaten braucht, nimmt einen Server auf OData oder RFC, entweder aus der Open-Source-Landschaft oder als eigene Entwicklung.",
  },
  {
    question: "Welche SAP-Systeme lassen sich anbinden?",
    answer:
      "S/4HANA On-Premise und in der Cloud, SAP ECC über das OData-Gateway und SAP Business One über dessen Service Layer. Entscheidend ist nicht die Produktlinie, sondern ob es für die gewünschten Daten eine saubere Schnittstelle gibt: einen freigegebenen OData-Service, eine CDS View oder einen BAPI-Funktionsbaustein. Wo die fehlt, ist das Anlegen dieser Schnittstelle der eigentliche erste Arbeitsschritt, nicht der MCP-Server.",
  },
  {
    question: "Ist der Zugriff sicher und DSGVO-konform?",
    answer:
      "Der MCP-Server bringt keine eigene Berechtigungslogik mit, und das ist die wichtigste Eigenschaft überhaupt. Er meldet sich mit einem technischen Benutzer an, und dieser Benutzer hat genau die Rechte, die ihm im SAP-Rollenkonzept zugewiesen wurden. Sauber gebaut liest der Agent damit nie mehr, als der Zugang hergibt. Für die DSGVO zählt zusätzlich, wo das Sprachmodell läuft und ob personenbezogene Daten überhaupt nach draußen gehen. Ein Betrieb in einer europäischen Region oder in der eigenen Umgebung löst diesen Teil.",
  },
  {
    question: "Darf ein KI-Agent auch in SAP schreiben?",
    answer:
      "Technisch ja, über BAPIs oder schreibende OData-Services. In der Praxis ist der erste Schritt fast immer lesend, und das aus gutem Grund: Ein falsch verstandener Lesezugriff erzeugt eine falsche Auskunft, ein falsch verstandener Schreibzugriff einen falschen Beleg. Der übliche Weg ist, den Agenten den Vorgang vorbereiten zu lassen und die Freigabe bei einem Menschen zu belassen, bis die Trefferquote über Wochen belegt ist.",
  },
  {
    question: "Was kostet ein SAP MCP Server?",
    answer:
      "Für den Server selbst liegt der Aufbau eines ersten, lesenden Anwendungsfalls bei uns ab 1.000 Euro einmalig, der Betrieb ab 50 Euro im Monat. Der größere Posten ist meist nicht der Server, sondern die SAP-Seite: Berechtigungsrolle, ein Testsystem zum Entwickeln und je nach Landschaft der Cloud Connector. Wie lange das dauert, hängt an genau diesen Punkten. Liegen Rolle und Testsystem bereit, ist ein erster Anwendungsfall in wenigen Arbeitstagen möglich. Muss beides erst geschaffen werden, sind mehrere Wochen realistisch, und das ist auch die Spanne, die andere Anbieter für einen ersten Use Case nennen.",
  },
  {
    question: "Brauchen wir dafür SAP-Beratung im Haus?",
    answer:
      "Jemanden mit Zugriff auf das Berechtigungskonzept brauchen Sie auf jeden Fall, und diese Person entscheidet über das Tempo des Projekts. Das kann die eigene SAP-Betreuung sein oder Ihr Systemhaus. Die Entwicklung des MCP-Servers selbst setzt keine ABAP-Kenntnisse voraus, solange die Daten über OData oder freigegebene Funktionsbausteine erreichbar sind.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>MCP & Integration</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              SAP MCP Server: der Weg vom KI-Agenten zu echten SAP-Daten
            </Hero2ColumnHeadline>
            <GeoSummary>
              Ein SAP MCP Server ist die Vermittlungsschicht, über die ein
              KI-Agent Daten aus S/4HANA, ECC oder Business One abfragt, statt
              sie aus einem Excel-Export zu lesen. Der Begriff meint dabei drei
              verschiedene Dinge, und das führt in die Irre: Von den acht
              offiziellen MCP-Servern, die SAP selbst veröffentlicht hat, sind
              sieben Werkzeuge für die Softwareentwicklung, und keiner liefert
              Auftrags- oder Bestandsdaten. Diese Seite trennt die drei
              Bezugswege, zeigt den technischen Weg einer Anfrage bis ins
              SAP-System und beziffert Aufwand und Betrieb: ab 1.000 Euro
              einmalig für einen ersten lesenden Anwendungsfall, ab 50 Euro im
              Monat Betrieb. Für Unternehmen mit 50 bis 1.000 Mitarbeitenden,
              die SAP im Einsatz haben und KI daran anschließen wollen.
            </GeoSummary>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Anwendungsfall prüfen, 30 Minuten
              </ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              S/4HANA • ECC • Business One • OData, RFC und CDS Views
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/sap-mcp-server/hero.png"
              type="image"
              alt="Leerer Besprechungsraum mit langem Holztisch und dunklem Bildschirm an der Stirnwand im Morgenlicht"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Die Zahl, die den ganzen Suchbegriff erklärt */}
      <ContentWrapper colorScheme="gradient-primary-dark">
        <StatsList
          cols={3}
          textColor="text-white"
          stats={[
            { value: 8, label: "offizielle MCP-Server von SAP" },
            { value: 7, label: "davon Werkzeuge für die Entwicklung" },
            {
              value: 0,
              label: "davon liefern Auftrags- oder Bestandsdaten",
            },
          ]}
        />
      </ContentWrapper>

      {/* Kernsektion: die Trennung, die im Netz niemand macht */}
      <ContentWrapper>
        <IntroBox size="small">
          <IntroBox.PreHeadline>Der Kern der Sache</IntroBox.PreHeadline>
          <IntroBox.Headline>
            „SAP MCP Server" bezeichnet drei verschiedene Dinge
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Wer den Begriff sucht, landet zuerst bei SAP selbst und findet dort
            eine wachsende Zahl offizieller Server. Das wirkt wie die Antwort,
            ist aber die falsche Abzweigung, sobald es um Geschäftsdaten geht.
            Erst wenn die drei Bezugswege auseinanderliegen, wird die
            Entscheidung einfach.
          </IntroBox.Paragraph>
        </IntroBox>

        <Image
          src="/images/sap-mcp-server/bezugswege.png"
          alt="Drei gleichrangige Bezugswege für einen SAP MCP Server: offiziell von SAP, Community-Server, fertiger Konnektor"
          width={1200}
          height={675}
          className="w-full h-auto rounded-2xl my-8"
        />

        <SimpleGrid cols={3}>
          <SimpleCard align="left">
            <Typo.H3>Offiziell von SAP</Typo.H3>
            <Typo.Paragraph>
              SAP hat acht MCP-Server veröffentlicht, die meisten davon quelloffen
              unter Apache-2.0. Sieben richten sich an Menschen, die
              SAP-Software bauen: Fiori, CAP, UI5, MDK, UI5 Web Components, die
              zugehörigen Agent Skills und ADT für den Zugriff auf ABAP-Objekte.
              Der achte liefert Enterprise-Architektur aus LeanIX. Für ein
              Entwicklungsteam ist das wertvoll. Für die Frage, welche
              Kundenaufträge offen sind, ist keiner davon zuständig.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <Typo.H3>Community-Server</Typo.H3>
            <Typo.Paragraph>
              Daneben ist eine große Open-Source-Landschaft entstanden, deutlich
              über achtzig Server. Der für Geschäftsdaten interessante Teil legt
              OData-Services offen oder ruft Funktionsbausteine per RFC auf,
              gegen S/4HANA ebenso wie gegen ECC. Das ist der Weg, den die
              meisten am Ende gehen, meist als angepasste Variante eines
              bestehenden Projekts statt als Neuentwicklung von null.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <Typo.H3>Fertiger Konnektor</Typo.H3>
            <Typo.Paragraph>
              Mehrere Anbieter verkaufen SAP-Zugriff als fertiges Produkt, teils
              als Treiber, teils als Cloud-Dienst. Der Aufbau ist damit kürzer,
              die Abhängigkeit dafür dauerhaft, und die Preise stehen fast nie
              öffentlich. Sinnvoll, wenn viele Systeme gleichzeitig
              angeschlossen werden sollen. Für einen einzelnen Anwendungsfall
              ist es der teuerste der drei Wege.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* Der technische Weg */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Wie eine Frage tatsächlich bis in SAP läuft</Typo.H2>
        <Typo.Paragraph>
          Der Ablauf ist unspektakulärer, als die Beschreibungen vermuten
          lassen, und genau deshalb lohnt es sich, ihn einmal ganz durchzugehen.
          Jemand stellt eine Frage in normaler Sprache. Der KI-Agent entscheidet,
          dass er dafür Daten braucht, und ruft eine der Funktionen auf, die der
          MCP-Server ihm beschrieben hat. Der Server übersetzt diesen Aufruf in
          eine SAP-Abfrage, meldet sich mit einem technischen Benutzer an und
          gibt das Ergebnis strukturiert zurück. Der Agent formuliert daraus die
          Antwort.
        </Typo.Paragraph>

        <Image
          src="/images/sap-mcp-server/datenweg.png"
          alt="Prozesskette von der Frage über den KI-Agenten und den MCP-Server zur Berechtigungsprüfung und nach SAP"
          width={1200}
          height={675}
          className="w-full h-auto rounded-2xl my-8"
        />

        <Typo.Paragraph>
          Die vierte Station ist die wichtigste. Ein MCP-Server bringt keine
          eigene Rechteverwaltung mit, er erbt sie vollständig aus SAP. Was der
          technische Benutzer sehen darf, sieht der Agent, und was ihm fehlt,
          fehlt auch dem Agenten. Das ist eine gute Nachricht, weil es das
          bestehende Rollenkonzept zur einzigen Wahrheit macht, statt ein
          zweites danebenzustellen. Es ist zugleich der Grund, warum
          Berechtigungen weiter unten einen eigenen Abschnitt bekommen.
        </Typo.Paragraph>

        <Typo.Paragraph>
          Der zweite Punkt, der in der Praxis überrascht: Ein Kundenauftrag
          verteilt sich in SAP über mehrere Tabellen und oft über mehrere
          Module. Kein einzelner Aufruf liefert das vollständige Bild. Ein
          brauchbarer MCP-Server bildet deshalb keine Tabellen ab, sondern
          fachliche Fragen, und legt hinter jede Frage die Aufrufe, die
          zusammen die Antwort ergeben. Wer stattdessen rohen Tabellenzugriff
          freigibt, bekommt einen Agenten, der viel liest und wenig versteht.
        </Typo.Paragraph>
      </ContentWrapper>

      {/* Schnittstellen-Tabelle */}
      <ContentWrapper>
        <Typo.H2>Welche Schnittstelle wofür taugt</Typo.H2>
        <Typo.Paragraph>
          SAP bietet mehrere Wege nach innen, und die Wahl entscheidet über den
          Aufwand. Diese Übersicht ordnet die vier üblichen ein.
        </Typo.Paragraph>

        <DataTable>
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Schnittstelle</DataTable.HeaderCell>
              <DataTable.HeaderCell>Liefert</DataTable.HeaderCell>
              <DataTable.HeaderCell>Passt, wenn</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            <DataTable.Row>
              <DataTable.Cell bold>OData über das Gateway</DataTable.Cell>
              <DataTable.Cell>
                Geschäftsobjekte wie Aufträge, Belege, Stammdaten, lesend und
                schreibend
              </DataTable.Cell>
              <DataTable.Cell>
                der Standardweg für fast alle Anwendungsfälle, sofern der
                Service freigegeben ist
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>RFC und BAPI</DataTable.Cell>
              <DataTable.Cell>
                geprüfte Vorgänge inklusive der Logik dahinter
              </DataTable.Cell>
              <DataTable.Cell>
                etwas geschrieben oder ausgelöst werden soll und es dafür einen
                Baustein gibt
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>CDS Views</DataTable.Cell>
              <DataTable.Cell>
                fertig verknüpfte Auswertungen über mehrere Tabellen
              </DataTable.Cell>
              <DataTable.Cell>
                die Frage eine Auswertung ist und nicht ein einzelner Beleg
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>ADT</DataTable.Cell>
              <DataTable.Cell>
                Quelltext und Entwicklungsobjekte, keine Geschäftsdaten
              </DataTable.Cell>
              <DataTable.Cell>
                ein Entwicklungsteam KI-gestützt an ABAP arbeitet, für den
                Fachbereich der falsche Weg
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable.Body>
        </DataTable>

        <Typo.Paragraph>
          In einer gewachsenen Landschaft ist die häufigste Antwort auf die
          Frage „welche Schnittstelle?" zunächst: keine der vier, jedenfalls
          nicht für dieses Feld. Z-Tabellen und eigene Erweiterungen sind selten
          über einen freigegebenen Service erreichbar. Dann steht am Anfang des
          Projekts nicht der MCP-Server, sondern das Bereitstellen genau der
          Schnittstelle, die fehlt.
        </Typo.Paragraph>
      </ContentWrapper>

      {/* Preis und Dauer, der Differenzierer */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Was das kostet und wie lange es dauert</Typo.H2>
        <Typo.Paragraph>
          Im deutschsprachigen Netz beantwortet diese Frage niemand. Die
          derzeit führende Seite zum Thema führt eine eigene Überschrift „Was
          kostet das?" und nennt darunter keine einzige Zahl. Deshalb hier die
          Zahlen, die bei uns gelten, getrennt nach den beiden Teilen, die sich
          sehr unterschiedlich verhalten.
        </Typo.Paragraph>

        <Image
          src="/images/sap-mcp-server/aufwand.png"
          alt="Vergleich des Aufwands: der MCP-Server selbst gegen die Voraussetzungen auf SAP-Seite"
          width={1200}
          height={675}
          className="w-full h-auto rounded-2xl my-8"
        />

        <ProseColumns cols={2}>
          <ProseColumnsItem title="Der Teil, den wir bauen">
            Ein erster lesender Anwendungsfall, also eine klar umrissene Frage
            gegen einen freigegebenen Service, beginnt bei 1.000 Euro einmalig.
            Der Betrieb liegt ab 50 Euro im Monat, beim Hosting in der eigenen
            Umgebung kommt ein kleiner Server ab etwa 15 Euro dazu. Unsere
            eigene Arbeit daran ist in wenigen Arbeitstagen erledigt. Jeder
            weitere Anwendungsfall auf demselben Server ist deutlich günstiger,
            weil Anmeldung, Protokollierung und Betrieb schon stehen.
          </ProseColumnsItem>
          <ProseColumnsItem title="Der Teil, der auf SAP-Seite dazukommt">
            Hier liegt die Kalenderzeit. Eine Berechtigungsrolle muss
            zugeschnitten und freigegeben werden, ein Testsystem zum Entwickeln
            bereitstehen, bei On-Premise-Landschaften der Cloud Connector
            eingerichtet sein. Sind diese drei Dinge vorhanden, geht ein erster
            Anwendungsfall in ein bis zwei Wochen live. Müssen sie erst
            geschaffen werden, sind mehrere Wochen realistisch, und genau
            daraus entstehen die sechs bis zehn Wochen, die andere Anbieter für
            einen ersten Use Case nennen.
          </ProseColumnsItem>
        </ProseColumns>

        <Typo.H3>Wogegen das antreten muss</Typo.H3>
        <Typo.Paragraph>
          Die interessantere Rechnung ist die des Ist-Zustands, weil sie in
          keinem Angebot steht. Ein Beispiel aus dem Vertriebsinnendienst: Wenn
          eine Person am Tag fünfzehn Auskünfte aus SAP heraussucht, Lieferstatus,
          Restmengen, letzter Preis, und jede davon inklusive Suchen und
          Zurückrufen sechs Minuten dauert, sind das anderthalb Stunden am Tag.
          Auf einen Monat gerechnet rund dreißig Stunden. Bei einem internen
          Stundensatz von 45 Euro liegt der Ist-Zustand also bei etwa 1.350 Euro
          im Monat, für eine einzige Person und eine einzige Art von Auskunft.
          Rechnen Sie mit Ihren eigenen Zahlen nach, bevor Sie ein Angebot
          bewerten. Meistens ist das Ergebnis eindeutiger als erwartet.
        </Typo.Paragraph>
      </ContentWrapper>

      {/* Berechtigungen */}
      <ContentWrapper>
        <Typo.H2>Berechtigungen sind das Projektrisiko Nummer eins</Typo.H2>
        <Typo.Paragraph>
          Wenn ein solches Vorhaben ins Stocken gerät, liegt es fast nie an der
          Technik. Es liegt daran, dass niemand entscheiden möchte, was ein
          technischer Benutzer sehen darf. Diese Frage ist berechtigt und
          verdient eine Antwort, aber sie gehört an den Anfang und nicht in die
          Woche vor dem geplanten Start.
        </Typo.Paragraph>

        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <Typo.H3>Was gut funktioniert</Typo.H3>
            <Typo.Paragraph>
              Eine eigene, eng geschnittene Rolle für den technischen Benutzer,
              die ausschließlich die Objekte des ersten Anwendungsfalls
              freigibt, zunächst rein lesend. Dazu eine Protokollierung jedes
              Aufrufs, sodass jederzeit nachvollziehbar ist, welche Frage welchen
              Zugriff ausgelöst hat. Damit lässt sich die Rolle später Schritt
              für Schritt erweitern, ohne die Grundsatzdiskussion neu zu führen.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <Typo.H3>Was schiefgeht</Typo.H3>
            <Typo.Paragraph>
              Ein vorhandener Sammelbenutzer mit weiten Rechten, weil es
              schneller geht. Das funktioniert im Test sofort und wird
              spätestens beim ersten Audit zum Problem, weil sich nicht mehr
              belegen lässt, worauf der Agent hätte zugreifen können. Der
              zweite Klassiker ist die Rolle, die auf dem Produktivsystem
              angelegt wird, weil es kein Testsystem gibt.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* Einordnung */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Wann sich das lohnt und wann noch nicht</Typo.H2>

        <ProseColumns cols={2}>
          <ProseColumnsItem title="Fangen Sie an, wenn">
            dieselbe Auskunft mehrmals täglich von Hand aus SAP geholt wird, die
            gewünschten Daten über einen freigegebenen OData-Service oder eine
            CDS View erreichbar sind und es jemanden gibt, der über
            Berechtigungen entscheiden darf. In dieser Lage ist ein erster
            lesender Anwendungsfall ein überschaubares Vorhaben mit einem
            Ergebnis, das sich in Stunden messen lässt.
          </ProseColumnsItem>
          <ProseColumnsItem title="Warten Sie noch, wenn">
            die gesuchten Daten nur in Z-Tabellen ohne Schnittstelle liegen, es
            kein Testsystem gibt oder der eigentliche Wunsch ein schreibender
            Zugriff auf Belege ist, ohne dass vorher etwas Lesendes im Einsatz
            war. Dann ist der MCP-Server nicht das Problem, das gelöst werden
            muss, sondern der letzte Schritt einer Kette, die vorne beginnt.
          </ProseColumnsItem>
        </ProseColumns>

        <Typo.Paragraph>
          Wenn Sie noch am Anfang stehen und zuerst wissen wollen, was ein
          MCP-Server technisch überhaupt ist und wie das Protokoll funktioniert,
          steht das ausführlich in{" "}
          <InternalLink href="/blog/was-ist-mcp-server" variant="underline">
            unserer Einführung zu MCP-Servern
          </InternalLink>
          . Geht es Ihnen dagegen weniger um SAP als um die Frage, wie ein
          eigener Server für ein beliebiges System entsteht, ist{" "}
          <InternalLink
            href="/services/mcp-server-erstellen"
            variant="underline"
          >
            unsere Übersicht zum Erstellen eines MCP-Servers
          </InternalLink>{" "}
          der passendere Einstieg. Und wenn die Anbindung Teil eines größeren
          Vorhabens im Handel ist, zeigt{" "}
          <InternalLink href="/blog/ki-workflow-erp" variant="underline">
            unser Beitrag zu KI-Workflows am ERP
          </InternalLink>{" "}
          die Anwendungsfälle im Zusammenhang.
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
