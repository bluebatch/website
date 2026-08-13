import type { Metadata } from "next";
import Image from "next/image";
import { ogImages } from "@/lib/og";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import IntroBox from "@/components/ui/intro-box";
import DataTable from "@/components/ui/data-table";
import ProseColumns from "@/components/ui/prose-columns";
import GeoSummary from "@/components/ui/geo-summary";
import { FaqContainer } from "@/components/ui/faqs";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnCallToAction,
  Hero2ColumnImage,
} from "@/components/heroes/hero-2-column";
import { HubDiagram } from "@/components/diagrams";
import ProsCons from "@/components/sections/pros-cons";
import SimpleCard from "@/components/cards/simple-card";
import ContactButton from "@/components/buttons/contact-button";
import InternalLink from "@/components/buttons/internal-link";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";

const meta = {
  title: "MCP-Server erstellen lassen: fertig nutzen oder bauen | Bluebatch",
  description:
    "Wann reicht ein fertiger MCP-Server und wann muss einer gebaut werden? Die Entscheidungsregel je System, mit Preis und Dauer. Pilot ab 1.000 € Setup in 5 Arbeitstagen.",
  ogDescription:
    "MCP-Server für eure Systeme: fertige Server prüfen, Eigenbau nur wo nötig. Mit Rechtemodell, Preis und Dauer statt nur Projektwochen.",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: [
    "MCP Server erstellen",
    "MCP Server entwickeln lassen",
    "Model Context Protocol",
    "MCP Server SAP",
    "MCP Server PostgreSQL",
    "ERP an KI anbinden",
    "Bluebatch",
  ],
  openGraph: {
    title: meta.title,
    description: meta.ogDescription,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages("MCP-Server erstellen", "Services"),
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.ogDescription,
    images: ogImages("MCP-Server erstellen", "Services"),
  },
  alternates: {
    canonical: "/services/mcp-server-erstellen",
  },
};

export default function Page() {
  return (
    <>
      {/* 1. HERO */}
      <ContentWrapper colorScheme="gray-light" isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Services</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              MCP-Server erstellen lassen: erst prüfen, dann bauen
            </Hero2ColumnHeadline>
            <GeoSummary>
              Ein MCP-Server macht ein vorhandenes System für KI-Agenten
              ansprechbar. Bluebatch prüft zuerst, ob es für euer System schon
              einen gepflegten Server gibt, und baut nur dort einen eigenen, wo
              keiner existiert oder der vorhandene nicht das kann, was ihr
              braucht. Ein Server für einen Anwendungsfall kostet 1.000 Euro
              Setup und 50 Euro Betrieb pro Monat, der Pilot steht in fünf
              Arbeitstagen.
            </GeoSummary>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Systeme durchsprechen
              </ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/mcp-server-erstellen/hero.png"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 2. DIE AUSGANGSLAGE */}
      <ContentWrapper colorScheme="white">
        <IntroBox>
          <IntroBox.PreHeadline>Die erste Frage</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Muss überhaupt gebaut werden?
          </IntroBox.Headline>
          <IntroBox.Subline>
            Wer nach einer MCP-Anbindung sucht, bekommt von Agenturen fast
            immer dieselbe Antwort: wir entwickeln euch einen Server. Das ist
            in einem Teil der Fälle richtig und in einem anderen Teil
            überflüssig. Die Ausgangslage entscheidet, und die lässt sich pro
            System in wenigen Minuten klären.
          </IntroBox.Subline>
        </IntroBox>

        <HubDiagram
          className="mt-10"
          center={{ label: "MCP-Server", sublabel: "übersetzt und begrenzt" }}
          spokes={[
            { label: "ERP", sublabel: "Artikel, Bestände" },
            { label: "Datenbank", sublabel: "Auswertungen" },
            { label: "Dateiablage", sublabel: "Dokumente" },
            { label: "Fachsystem", sublabel: "eigene Logik" },
          ]}
          caption="Der Agent spricht ein Protokoll, nicht vier Schnittstellen."
        />

        <DataTable className="mt-10">
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Ausgangslage</DataTable.HeaderCell>
              <DataTable.HeaderCell>Typische Systeme</DataTable.HeaderCell>
              <DataTable.HeaderCell>Was zu tun ist</DataTable.HeaderCell>
              <DataTable.HeaderCell>Aufwand</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            <DataTable.Row>
              <DataTable.Cell bold>
                Hersteller pflegt einen eigenen Server
              </DataTable.Cell>
              <DataTable.Cell>
                große SaaS-Plattformen, Entwicklerwerkzeuge, seit 2026 auch SAP
                für die ABAP-Entwicklung
              </DataTable.Cell>
              <DataTable.Cell>
                Server einbinden, Zugang und Rechte festlegen, Grenzen testen
              </DataTable.Cell>
              <DataTable.Cell bold>Stunden bis Tage</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>
                Nur ein Community-Server vorhanden
              </DataTable.Cell>
              <DataTable.Cell>
                Datenbanken wie PostgreSQL, Chat- und Ablagedienste, viele
                Nischenwerkzeuge
              </DataTable.Cell>
              <DataTable.Cell>
                Pflegestand und Rechtemodell prüfen, ergänzen oder ersetzen
              </DataTable.Cell>
              <DataTable.Cell bold>Tage</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>
                Saubere API, aber kein Server
              </DataTable.Cell>
              <DataTable.Cell>
                Branchen-ERP mit dokumentierter Schnittstelle, eigene
                Fachanwendungen
              </DataTable.Cell>
              <DataTable.Cell>
                eigener Server, der genau die benötigten Aufrufe freigibt
              </DataTable.Cell>
              <DataTable.Cell bold>rund eine Woche</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Keine brauchbare API</DataTable.Cell>
              <DataTable.Cell>
                Altsysteme, Datenbankzugriff ohne Fachlogik, gewachsene
                Eigenentwicklungen
              </DataTable.Cell>
              <DataTable.Cell>
                erst einen Zugang schaffen, dann den Server darauf setzen
              </DataTable.Cell>
              <DataTable.Cell bold>Wochen, Festpreis nach Analyse</DataTable.Cell>
            </DataTable.Row>
          </DataTable.Body>
        </DataTable>

        <Typo.Paragraph className="mt-8 max-w-3xl">
          Nur die unteren beiden Zeilen sind ein Bauprojekt. Für die oberen
          beiden zahlt ihr Entwicklungsaufwand für etwas, das es schon gibt.
          Was ein MCP-Server technisch ist und wie er sich von einer klassischen
          Schnittstelle unterscheidet, steht ausführlich unter{" "}
          <InternalLink href="/blog/was-ist-mcp-server" variant="underline">
            was ist ein MCP-Server
          </InternalLink>
          .
        </Typo.Paragraph>
      </ContentWrapper>

      {/* 3. GRENZEN FERTIGER SERVER */}
      <ContentWrapper colorScheme="gradient-cool">
        <IntroBox>
          <IntroBox.PreHeadline>Was fertige Server leisten</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Vorhanden heißt nicht passend
          </IntroBox.Headline>
          <IntroBox.Subline>
            Ein fertiger Server ist der schnellste Weg zu einem ersten
            Ergebnis. Er ist aber für den Zweck gebaut, den sein Autor im Kopf
            hatte, und das ist selten euer Zweck. Diese Prüfung kostet eine
            Stunde und spart im Zweifel ein Projekt.
          </IntroBox.Subline>
        </IntroBox>

        <ProsCons className="mt-10">
          <ProsCons.Pros>
            <ProsCons.Item
              title="Sofort einsatzbereit"
              description="Einbinden, Zugangsdaten hinterlegen, fertig. Für Dateiablagen, Web-Abrufe und Standarddatenbanken ist das eine Sache von Stunden, nicht von Projektwochen."
            />
            <ProsCons.Item
              title="Der Standard trägt die Wartung"
              description="Das Model Context Protocol ist offen und wird von Claude, ChatGPT, VS Code und Cursor unterstützt. Ein Server, der heute funktioniert, funktioniert auch mit dem Client, auf den ihr nächstes Jahr wechselt."
            />
            <ProsCons.Item
              title="Gute Vorlage für den Eigenbau"
              description="Auch wenn ein fertiger Server nicht passt, zeigt er den sinnvollen Zuschnitt der Werkzeuge. Das verkürzt die eigene Entwicklung spürbar."
            />
          </ProsCons.Pros>
          <ProsCons.Cons>
            <ProsCons.Item
              title="Der Herstellername sagt nichts über den Inhalt"
              description="SAP hat 2026 einen eigenen MCP-Server vorgestellt, zunächst experimentell in den ABAP Development Tools für VS Code. Der richtet sich an die ABAP-Entwicklung. Wer Bestellstatus und Lagerbestände abfragen will, hat damit noch keinen Zugang zu Geschäftsdaten."
            />
            <ProsCons.Item
              title="Die offizielle Liste ist kürzer geworden"
              description="Im Referenz-Repository stehen nur noch sieben Server, darunter Dateisystem, Git und Zeitzonen. Die früheren Referenz-Server für PostgreSQL, GitHub, Slack und Google Drive liegen im Archiv. Was heute zählt, ist wer den Server tatsächlich pflegt, nicht wo er einmal stand."
            />
            <ProsCons.Item
              title="Rechte sind oft alles oder nichts"
              description="Viele Community-Server reichen einen kompletten Datenbankzugang durch. Für einen Agenten, der Preise sehen darf, aber keine Stammdaten ändern, ist das zu grob. Genau daran scheitert der Produktivbetrieb, nicht an der Technik."
            />
          </ProsCons.Cons>
        </ProsCons>

        <div className="relative mt-12 aspect-video w-full overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/images/mcp-server-erstellen/pruefung.png"
            alt="Prüfweg von der Systemliste zur Entscheidung zwischen fertigem Server und Eigenbau"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </div>
      </ContentWrapper>

      {/* 4. RECHTE */}
      <ContentWrapper colorScheme="white">
        <IntroBox>
          <IntroBox.PreHeadline>Der eigentliche Aufwand</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Nicht der Server ist die Arbeit, sondern die Rechte
          </IntroBox.Headline>
          <IntroBox.Subline>
            Ein MCP-Server beschreibt und reicht durch, was das System ohnehin
            kann. Der Aufwand steckt in der Frage, was ein Agent davon sehen
            und auslösen darf. Wir bauen jeden Server nach demselben Muster,
            so wie den Server für das ERP e.bootis.
          </IntroBox.Subline>
        </IntroBox>

        <ProseColumns cols={3} className="mt-12">
          <ProseColumns.Item title="Lesen als Standard">
            Der Agent bekommt Zugriff auf genau die Felder, die für den
            Anwendungsfall nötig sind, nicht auf die Tabelle dahinter. Ein
            Agent für Lieferauskünfte sieht Bestände und Termine, aber keine
            Einkaufskonditionen. Der Zuschnitt entsteht im Server, nicht im
            Prompt, und lässt sich deshalb nicht überreden.
          </ProseColumns.Item>
          <ProseColumns.Item title="Schreiben nur mit Freigabe">
            Alles, was den Datenbestand verändert, also Bestellungen anlegen,
            Stammdaten ändern, Belege buchen, läuft über eine ausdrückliche
            Freigabe. Der Agent bereitet vor, ein Mensch bestätigt. Erst wenn
            ein Vorgang über Wochen fehlerfrei vorbereitet wurde, lohnt die
            Diskussion über automatische Freigabe.
          </ProseColumns.Item>
          <ProseColumns.Item title="Jeder Aufruf im Protokoll">
            Wer hat wann welches Werkzeug mit welchen Parametern aufgerufen,
            und was kam zurück? Ohne dieses Protokoll ist weder Fehlersuche
            noch Prüfung möglich. Es ist außerdem die Grundlage dafür, den
            Rechteschnitt später enger zu ziehen, statt ihn zu raten.
          </ProseColumns.Item>
        </ProseColumns>

        <Typo.Paragraph className="mt-8 max-w-3xl">
          Wie das an einem konkreten ERP aussieht, zeigt der{" "}
          <InternalLink
            href="/services/tools/ebootis/mcp-server"
            variant="underline"
          >
            MCP-Server für e.bootis
          </InternalLink>
          : kontrolliertes Lesen und Schreiben über die OpenEngine,
          rollenbasiert und protokolliert. Dieselbe Bauweise setzen wir auf
          jedes System, das eine belastbare Schnittstelle hat.
        </Typo.Paragraph>
      </ContentWrapper>

      {/* 5. PREIS UND DAUER */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Was es kostet</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Preis und Dauer, nicht nur Projektwochen
          </IntroBox.Headline>
          <IntroBox.Subline>
            Anbieter für MCP-Entwicklung nennen fast durchgehend eine Dauer und
            keinen Preis. Das macht Angebote unvergleichbar, weil eine Woche
            Entwicklung je nach Haus zwischen wenigen Tausend und
            fünfstelligen Beträgen liegt. Deshalb stehen hier beide Zahlen.
          </IntroBox.Subline>
        </IntroBox>

        <DataTable className="mt-10">
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Leistung</DataTable.HeaderCell>
              <DataTable.HeaderCell>Preis</DataTable.HeaderCell>
              <DataTable.HeaderCell>Dauer</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            <DataTable.Row>
              <DataTable.Cell bold>
                Vorhandenen Server einbinden und absichern
              </DataTable.Cell>
              <DataTable.Cell>im Betrieb enthalten</DataTable.Cell>
              <DataTable.Cell>Stunden bis Tage</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>
                Eigener Server für einen Anwendungsfall
              </DataTable.Cell>
              <DataTable.Cell bold>
                1.000 € Setup, 50 € pro Monat
              </DataTable.Cell>
              <DataTable.Cell bold>5 Arbeitstage</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>
                Weiteres System am selben Agenten
              </DataTable.Cell>
              <DataTable.Cell>je System einzeln kalkuliert</DataTable.Cell>
              <DataTable.Cell>Tage</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>
                Altsystem ohne nutzbare Schnittstelle
              </DataTable.Cell>
              <DataTable.Cell>Festpreis nach Analyse</DataTable.Cell>
              <DataTable.Cell>Wochen</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>
                Marktüblich bei Agenturen zum Vergleich
              </DataTable.Cell>
              <DataTable.Cell>meist kein Preis genannt</DataTable.Cell>
              <DataTable.Cell>1 Woche bis 4 Wochen</DataTable.Cell>
            </DataTable.Row>
          </DataTable.Body>
        </DataTable>

        <Typo.Paragraph className="mt-8 max-w-3xl">
          Dazu kommen in jedem Fall die Modellkosten, die sich nach Nutzung
          richten, und beim Eigenbetrieb ein Server ab etwa 15 Euro im Monat.
          Was ein Agent im laufenden Betrieb tatsächlich verbraucht, rechnen
          wir unter{" "}
          <InternalLink href="/services/ki-agent-kostenlos" variant="underline">
            KI-Agent kostenlos
          </InternalLink>{" "}
          an einem Beispiel durch.
        </Typo.Paragraph>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/mcp-server-erstellen/aufwand.png"
              alt="Aufwandsvergleich zwischen vorhandenem Server, Eigenbau und Altsystem"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <SimpleCard align="left" className="rounded-2xl">
            <div className="flex items-start justify-between gap-3">
              <Typo.H3 className="mt-0! mb-0!">Pilot für ein System</Typo.H3>
              <span className="shrink-0 rounded-full bg-primary-50 px-3 py-1 text-sm font-bold text-primary-700">
                1.000 €
              </span>
            </div>
            <Typo.Paragraph className="mt-3">
              Ein Anwendungsfall, ein System, ein Rechteschnitt. Nach fünf
              Arbeitstagen entscheidet ihr am laufenden Betrieb, ob weitere
              Systeme dazukommen.
            </Typo.Paragraph>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              {[
                "Prüfung, ob ein fertiger Server reicht",
                "Server auf eurer Infrastruktur",
                "Rechte nach Rolle, Schreiben mit Freigabe",
                "Protokoll über jeden Aufruf",
                "50 € Betrieb pro Monat, keine Lizenz pro Kopf",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <SimpleCard.Footer>
              <ContactButton icon="calendar">Erstgespräch buchen</ContactButton>
            </SimpleCard.Footer>
          </SimpleCard>
        </div>
      </ContentWrapper>

      {/* 6. ABLAUF */}
      <ContentWrapper colorScheme="white">
        <IntroBox>
          <IntroBox.PreHeadline>Wie wir vorgehen</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Von der Systemliste zum laufenden Server
          </IntroBox.Headline>
        </IntroBox>

        <div className="relative mt-10 aspect-video w-full overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/images/mcp-server-erstellen/ablauf.png"
            alt="Ablauf in vier Schritten von der Systemaufnahme bis zum Betrieb"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 70vw"
          />
        </div>

        <ProseColumns cols={2} wide className="mt-12">
          <ProseColumns.Item title="Erst die Aufgabe, dann das System">
            Wir fangen nicht bei der Systemliste an, sondern bei einer Aufgabe,
            die heute Zeit kostet. Daraus ergibt sich, welche Systeme
            überhaupt angebunden werden müssen. In der Praxis ist es fast immer
            eines mehr als gedacht und zwei weniger als geplant.
          </ProseColumns.Item>
          <ProseColumns.Item title="Prüfen vor bauen">
            Für jedes betroffene System klären wir, ob ein gepflegter Server
            existiert und was er freigibt. Das Ergebnis ist eine kurze Liste
            mit drei Spalten: vorhanden, ergänzen, bauen. Erst danach reden wir
            über Aufwand.
          </ProseColumns.Item>
          <ProseColumns.Item title="Rechteschnitt vor Funktionsumfang">
            Bevor der erste Aufruf steht, legen wir fest, was der Agent sehen
            und auslösen darf. Das ist die Entscheidung, die später kaum noch
            zu korrigieren ist, wenn sie einmal zu weit gefasst wurde.
          </ProseColumns.Item>
          <ProseColumns.Item title="Betrieb mit Protokoll">
            Der Server läuft auf eurer Infrastruktur, jeder Aufruf steht im
            Protokoll. Nach den ersten Wochen ziehen wir den Rechteschnitt
            anhand der tatsächlichen Nutzung enger, statt ihn vorher zu raten.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      {/* 7. FAQ */}
      <ContentWrapper colorScheme="gray-light">
        <FaqContainer
          faqs={[
            {
              question: "Was kostet es, einen MCP-Server erstellen zu lassen?",
              answer:
                "Bei uns kostet ein eigener MCP-Server für einen Anwendungsfall 1.000 € Setup einmalig und 50 € Betrieb pro Monat, mit Go-live in fünf Arbeitstagen. Ein bereits vorhandener Server wird nur eingebunden und abgesichert, das ist im Betrieb enthalten. Altsysteme ohne nutzbare Schnittstelle bekommen einen Festpreis nach einer kurzen Analyse. Am Markt nennen Anbieter für MCP-Entwicklung meist nur Projektdauern von einer bis vier Wochen und keinen Preis.",
            },
            {
              question:
                "Gibt es für SAP, PostgreSQL oder Microsoft 365 nicht längst fertige MCP-Server?",
              answer:
                "Für viele dieser Systeme gibt es Server, aber nicht unbedingt den, den ihr braucht. SAP hat 2026 einen eigenen MCP-Server vorgestellt, der zunächst experimentell in den ABAP Development Tools für VS Code steckt und sich an die ABAP-Entwicklung richtet, nicht an Auswertungen über Bestellungen und Bestände. Bei Datenbanken wie PostgreSQL liegt die Frage weniger am Server als am Rechteschnitt: ein durchgereichter Vollzugriff ist für den Produktivbetrieb zu grob. Wir prüfen deshalb pro System, ob einbinden reicht.",
            },
            {
              question:
                "Wie viele offizielle MCP-Server gibt es und wo finde ich sie?",
              answer:
                "Das Referenz-Repository des Protokolls enthält nur noch sieben Server, unter anderem für Dateisystem, Git, Web-Abruf und Zeitzonen. Die früheren Referenz-Server für PostgreSQL, GitHub, Slack und Google Drive wurden in ein Archiv verschoben. Alles andere kommt heute von den Herstellern selbst oder aus der Community und ist über die MCP-Registry auffindbar. Das entscheidende Kriterium ist nicht die Herkunft, sondern ob jemand den Server aktiv pflegt.",
            },
            {
              question:
                "Kann ein Agent über MCP auch Daten ändern oder nur lesen?",
              answer:
                "Beides, aber nicht ohne Unterschied. Lesen ist bei uns der Standard und auf die Felder begrenzt, die der Anwendungsfall braucht. Alles, was den Datenbestand verändert, läuft über eine ausdrückliche Freigabe durch einen Menschen: der Agent bereitet den Vorgang vor, jemand bestätigt ihn. Über automatische Freigaben reden wir erst, wenn ein Vorgang über Wochen fehlerfrei vorbereitet wurde und das Protokoll das belegt.",
            },
            {
              question: "Läuft der Server bei uns oder bei euch?",
              answer:
                "Auf eurer Infrastruktur, entweder im eigenen Rechenzentrum oder in eurer Cloud-Umgebung. Der MCP-Server ist die Stelle, an der Geschäftsdaten das System verlassen, deshalb gehört er in eure Hand und nicht in unsere. Wir bauen, dokumentieren und betreiben ihn auf Wunsch mit, aber die Zugänge und das Protokoll liegen bei euch.",
            },
            {
              question:
                "Was passiert, wenn wir später den KI-Client wechseln?",
              answer:
                "Nichts am Server. Genau dafür ist das Model Context Protocol da: es ist ein offener Standard, den Claude, ChatGPT, VS Code und Cursor unterstützen. Ein Server, den ihr heute für einen Client baut, funktioniert auch mit dem nächsten. Das ist der wesentliche Unterschied zu einer Integration, die direkt gegen die API eines Anbieters gebaut wurde.",
            },
          ]}
        >
          <FaqContainer.Headline>
            Häufige Fragen zu MCP-Servern im Unternehmen
          </FaqContainer.Headline>
        </FaqContainer>
      </ContentWrapper>

      {/* 8. FINAL CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
