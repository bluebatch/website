import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Link from "next/link";
import Typo from "@/components/ui/typo";
import DataTable from "@/components/ui/data-table";
import { FaqContainer } from "@/components/ui/faqs";
import { BlogImage, Separator, BlogLayout, BlogHero } from "@/components/blog";
import GeoSummary from "@/components/ui/geo-summary";

export const metaCustom: BlogMeta = {
  slug: "was-ist-mcp-server",
  author: "Max Hänsel",
  date: "2026-08-03",
  image: "/blog/was-ist-mcp-server/hero.png",
  tags: ["ki", "automatisierung"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title: "Was ist ein MCP-Server? Der Standard hinter KI-Agenten erklärt",
  description:
    "MCP-Server einfach erklärt: wie das Model Context Protocol KI-Assistenten mit ERP, CRM und Datenbanken verbindet, was es kostet, wie es DSGVO-konform läuft und wie der Einstieg in 15 Minuten gelingt.",
  openGraph: {
    title: "Was ist ein MCP-Server? Der Standard hinter KI-Agenten erklärt",
    description:
      "Wie das Model Context Protocol KI-Assistenten mit Unternehmenssystemen verbindet: Architektur, fertige Server, Sicherheit, Kosten und der schnelle Einstieg.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/was-ist-mcp-server/hero.png",
        width: 1200,
        height: 630,
        alt: "MCP-Server verbinden KI-Assistenten mit den Systemen im Unternehmen",
      },
    ],
  },
  alternates: {
    canonical: "/blog/was-ist-mcp-server",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          Was ist ein MCP-Server? Der Standard, der KI-Agenten mit Ihren
          Systemen verbindet
        </BlogHero.Headline>

        <GeoSummary>
          Ein MCP-Server verbindet KI-Assistenten wie Claude oder ChatGPT über
          das Model Context Protocol mit einem konkreten System, etwa einer
          Datenbank, einem CRM oder einem E-Mail-Postfach. Das Protokoll wurde
          im November 2024 von Anthropic als offener Standard veröffentlicht
          und wird inzwischen auch von OpenAI, Google und Microsoft
          unterstützt. Hunderte fertige Server existieren bereits, viele davon
          kostenlos als Open Source.
        </GeoSummary>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>12 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-08-03">3. August 2026</BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/was-ist-mcp-server/hero.png"
          alt="Modernes Büro mit einer Netzwerk-Visualisierung: MCP verbindet eine zentrale KI mit mehreren Systemen"
        />
      </BlogHero>

      <BlogLayout meta={metaCustom} metadata={metadata}>
        <BlogLayout.Content>
          <div>
            <Typo.Paragraph>
              Jeder, der einem KI-Assistenten schon einmal eine echte Aufgabe
              geben wollte, kennt die Wand: Das Modell schreibt kluge Texte,
              aber es kommt an nichts heran. Es kennt weder die Aufträge im
              ERP noch die Tickets im Helpdesk noch die Dateien auf dem
              Fileserver. Genau diese Wand reißt das Model Context Protocol
              ein, kurz MCP. Es ist der Steckstandard, über den KI-Assistenten
              und KI-Agenten auf die Systeme zugreifen, in denen die
              eigentliche Arbeit liegt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der Vergleich, der sich durchgesetzt hat: MCP ist der
              USB-C-Anschluss für KI. Vor MCP brauchte jede Kombination aus
              KI-Tool und Fachsystem eine eigene, handgebaute Integration. Mit
              MCP wird beides entkoppelt: Ein System bekommt einmal einen
              MCP-Server, und jedes MCP-fähige KI-Tool kann ihn nutzen. Dieser
              Artikel erklärt, wie das funktioniert, welche fertigen Server es
              gibt, was das mit Sicherheit und DSGVO macht, was die Einführung
              kostet und wie der erste Schritt konkret aussieht.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="definition">
            <Typo.H2>MCP kurz eingeordnet: Herkunft und Verbreitung</Typo.H2>
            <Typo.Paragraph>
              Das Model Context Protocol wurde im November 2024 von Anthropic
              veröffentlicht, dem Unternehmen hinter Claude, und zwar von
              Anfang an als offener Standard mit frei verfügbarer
              Spezifikation und Open-Source-Bausteinen. Entscheidend wurde das
              Jahr danach: OpenAI übernahm den Standard im Frühjahr 2025 für
              ChatGPT und sein Agents-Ökosystem, Google und Microsoft folgten.
              Damit ist MCP heute das, was ein Standard sein muss, um
              Investitionen zu rechtfertigen: herstellerübergreifend. Ein
              MCP-Server, der heute für Claude gebaut wird, funktioniert
              genauso mit ChatGPT, Copilot oder Gemini-basierten Werkzeugen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Für Unternehmen ist das der eigentliche Punkt. Die Frage „Auf
              welchen KI-Anbieter setzen wir?&ldquo; wird von der Frage „Wie
              schließen wir unsere Systeme an?&ldquo; getrennt. Die Anbindung
              über MCP bleibt bestehen, auch wenn das KI-Modell dahinter
              gewechselt wird.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="funktionsweise">
            <Typo.H2>Wie ein MCP-Server funktioniert</Typo.H2>

            <BlogImage
              src="/blog/was-ist-mcp-server/architektur.png"
              alt="MCP-Architektur: ein KI-Assistent mit MCP-Client spricht über mehrere MCP-Server mit Datenbank, Chat-Tool, Dateiablage und CRM"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Die Architektur hat drei Rollen. Der <strong>Host</strong> ist
              die KI-Anwendung, mit der ein Mensch arbeitet, etwa Claude,
              ChatGPT oder ein Editor wie Cursor. Im Host steckt ein{" "}
              <strong>MCP-Client</strong>, der die Verbindungen verwaltet. Und
              auf der anderen Seite steht je System ein{" "}
              <strong>MCP-Server</strong>: ein kleines Programm, das genau ein
              System nach außen anbietet, die Datenbank, das CRM, den
              Kalender. Gesprochen wird über ein schlankes, standardisiertes
              Nachrichtenformat, lokal auf demselben Rechner oder über das
              Netzwerk zu einem entfernten Server.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Ein MCP-Server bietet dem Modell dabei drei Arten von Bausteinen
              an. <strong>Tools</strong> sind Aktionen, die die KI ausführen
              darf: eine Abfrage laufen lassen, einen Datensatz anlegen, eine
              Nachricht senden. <strong>Ressourcen</strong> sind Inhalte, die
              sie lesen kann: Dateien, Tabellen, Dokumente.{" "}
              <strong>Prompts</strong> sind vorbereitete Arbeitsanweisungen
              für wiederkehrende Aufgaben. Der wichtige Mechanismus dahinter:
              Der Server <em>beschreibt</em> seine Bausteine maschinenlesbar,
              und das Modell entscheidet im Gespräch selbst, wann es welches
              Tool aufruft. Genau dieser Mechanismus macht aus einem
              Sprachmodell einen handlungsfähigen Agenten, wie wir ihn im
              Artikel{" "}
              <Link
                href="/blog/wie-baut-man-ki-agents"
                className="text-primary-600 hover:underline"
              >
                Wie baut man KI-Agents
              </Link>{" "}
              beschreiben.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="abgrenzung">
            <Typo.H2>MCP vs. API, RAG und Plugins: was ist der Unterschied?</Typo.H2>
            <Typo.Paragraph>
              Die häufigste Rückfrage in Projekten: „Wir haben doch schon
              APIs, wozu jetzt MCP?&ldquo; Die kurze Antwort: MCP ersetzt
              keine API, es setzt auf ihr auf. Ein MCP-Server ist meist ein
              dünner Übersetzer, der eine bestehende API so beschreibt, dass
              ein KI-Modell sie ohne individuelle Programmierung nutzen kann.
              Die Tabelle ordnet die Begriffe ein.
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Ansatz</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Was er leistet</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Grenze</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell bold>Klassische API</DataTable.Cell>
                  <DataTable.Cell>
                    Maschinen-Schnittstelle eines Systems für Entwickler
                  </DataTable.Cell>
                  <DataTable.Cell>
                    jede KI-Anbindung muss einzeln programmiert werden
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>RAG / Wissensdatenbank</DataTable.Cell>
                  <DataTable.Cell>
                    gibt dem Modell Dokumentenwissen zum Nachschlagen
                  </DataTable.Cell>
                  <DataTable.Cell>
                    nur Lesen von Inhalten, keine Aktionen in Systemen
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Plugins / Konnektoren</DataTable.Cell>
                  <DataTable.Cell>
                    fertige Anbindung innerhalb eines Anbieter-Ökosystems
                  </DataTable.Cell>
                  <DataTable.Cell>
                    proprietär, funktioniert nur im jeweiligen Tool
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>MCP-Server</DataTable.Cell>
                  <DataTable.Cell>
                    standardisierte Brücke zwischen beliebigen KI-Tools und
                    einem System, Lesen und Handeln
                  </DataTable.Cell>
                  <DataTable.Cell>
                    braucht ein MCP-fähiges KI-Tool als Gegenstelle
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              In der Praxis kombinieren gute Lösungen die Ansätze: Eine
              Wissensdatenbank beantwortet die Frage „Was steht in unseren
              Unterlagen?&ldquo;, MCP beantwortet die Frage „Was steht jetzt
              gerade im System, und was soll die KI damit tun?&ldquo;. Auch
              Automatisierungsplattformen wie{" "}
              <Link
                href="/blog/was-ist-n8n"
                className="text-primary-600 hover:underline"
              >
                n8n
              </Link>{" "}
              haben MCP inzwischen integriert und können sowohl MCP-Server
              bereitstellen als auch als Client fremde Server ansprechen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="fertige-server">
            <Typo.H2>Welche fertigen MCP-Server es schon gibt</Typo.H2>

            <BlogImage
              src="/blog/was-ist-mcp-server/server-katalog.png"
              alt="Übersicht fertiger MCP-Server für Chat, Code, Datenbanken, Dateien, Browser und CRM"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Der Standard lebt davon, dass für die gängigen Systeme längst
              Server existieren. Offizielle und Community-Kataloge führen
              Hunderte Einträge, die wichtigsten Kategorien für den
              Mittelstand: <strong>Kommunikation</strong> (Slack, E-Mail,
              Teams), <strong>Entwicklung</strong> (GitHub, GitLab),{" "}
              <strong>Daten</strong> (PostgreSQL und andere Datenbanken,
              Google Drive, SharePoint, lokales Dateisystem),{" "}
              <strong>Browser-Steuerung</strong> (Playwright, für alles, was
              nur eine Weboberfläche hat) und <strong>Business-Tools</strong>{" "}
              (HubSpot, Notion, Jira, zunehmend auch ERP-Anbieter). Viele
              SaaS-Hersteller liefern ihren MCP-Server inzwischen selbst mit,
              so wie sie früher eine REST-API mitgeliefert haben.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die realistische Einordnung: Für Standardsysteme muss niemand
              mehr etwas bauen. Eigenentwicklung lohnt sich dort, wo das
              System speziell ist, das selbst entwickelte Warenwirtschaftssystem,
              die Branchenlösung, die alte Access-Datenbank. Ein solcher
              Server ist mit den offiziellen SDKs für erfahrene Entwickler
              eher eine Sache von Tagen als von Monaten, weil er nur
              beschreibt und durchreicht, was das System ohnehin kann.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="clients">
            <Typo.H2>Welche KI-Tools MCP sprechen</Typo.H2>
            <Typo.Paragraph>
              Auf der Client-Seite ist die Unterstützung 2026 breit. Claude
              nutzt MCP in der Desktop-App und im Terminal-Werkzeug Claude
              Code; auch der Zugriff über die{" "}
              <Link
                href="/blog/claude-api"
                className="text-primary-600 hover:underline"
              >
                Claude API
              </Link>{" "}
              kann Server einbinden. ChatGPT unterstützt MCP über Konnektoren
              und den Entwicklermodus, Microsoft integriert den Standard in
              Copilot Studio und Windows, die Entwickler-Editoren Cursor und
              VS Code sprechen ihn ebenso. Wer heute einen{" "}
              <Link
                href="/blog/chatgpt-agent-erstellen"
                className="text-primary-600 hover:underline"
              >
                ChatGPT-Agenten erstellt
              </Link>{" "}
              oder mit Claude arbeitet, bindet Firmendaten also über denselben
              Mechanismus an.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="einstieg">
            <Typo.H2>Der Einstieg in 15 Minuten</Typo.H2>
            <Typo.Paragraph>
              Der schnellste Weg, MCP zu verstehen, ist ein harmloser erster
              Server im eigenen Alltag. Das Rezept: In der Desktop-App von
              Claude oder im Entwicklermodus von ChatGPT einen fertigen Server
              eintragen, meist ein Eintrag von wenigen Zeilen in einer
              Konfigurationsdatei oder ein Klick im Konnektoren-Menü. Ein
              guter Kandidat ist der Dateisystem-Server, beschränkt auf einen
              einzelnen Projektordner: Danach kann der Assistent Fragen wie
              „Fasse die drei neuesten Angebots-PDFs in diesem Ordner
              zusammen&ldquo; direkt beantworten, statt dass jemand Dateien
              hochlädt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Dieser Selbstversuch kostet nichts, läuft komplett lokal und
              beantwortet die Frage, die in Entscheidungsrunden am meisten
              Zeit frisst: „Was bedeutet das konkret?&ldquo; Danach lässt sich
              deutlich fundierter diskutieren, welche echten Systeme
              angeschlossen werden sollen und unter welchen Auflagen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="sicherheit">
            <Typo.H2>Sicherheit und DSGVO: die unbequemen Fragen zuerst</Typo.H2>

            <BlogImage
              src="/blog/was-ist-mcp-server/sicherheit.png"
              alt="KI-Zugriff auf Systeme über ein kontrolliertes Tor mit Freigabeschritt für schreibende Aktionen"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Ein MCP-Server gibt einem Sprachmodell Zugriff auf echte
              Systeme, und genau so muss er behandelt werden. Die
              Datenschutzfrage zuerst: Der Server selbst kann vollständig im
              eigenen Haus laufen, die Inhalte, die er liefert, wandern aber
              in das angeschlossene KI-Modell. Damit gelten dieselben Regeln
              wie für jede KI-Nutzung mit personenbezogenen Daten:
              Auftragsverarbeitungsvertrag mit dem Modellanbieter, bewusste
              Auswahl, welche Daten der Server überhaupt herausgibt, und im
              Zweifel EU-Verarbeitung, wie wir es im Beitrag zu{" "}
              <Link
                href="/blog/ki-datenschutz"
                className="text-primary-600 hover:underline"
              >
                KI und Datenschutz
              </Link>{" "}
              ausführlich behandeln.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Dazu kommt ein MCP-spezifisches Risiko: Prompt Injection. Wenn
              ein Agent Inhalte liest, die Dritte geschrieben haben, etwa
              E-Mails oder Webseiten, können darin Anweisungen versteckt sein,
              die das Modell zu ungewollten Tool-Aufrufen verleiten. Die
              wirksamen Gegenmittel sind organisatorisch wie technisch:
              Server nur mit den <strong>minimal nötigen Rechten</strong>{" "}
              betreiben, lesende und schreibende Tools trennen,{" "}
              <strong>schreibende Aktionen freigabepflichtig</strong> machen,
              solange das Vertrauen fehlt, und Tool-Aufrufe protokollieren.
              Ein MCP-Setup, das nur lesen darf und dessen Aktionen ein
              Mensch bestätigt, ist ein überschaubares Risiko. Ein Server mit
              Vollzugriff und Schreibrechten ohne Freigabe ist keines, das
              man am ersten Tag eingehen sollte.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="praxis">
            <Typo.H2>Was das im Mittelstand konkret bringt</Typo.H2>

            <BlogImage
              src="/blog/was-ist-mcp-server/praxis.png"
              alt="Isometrische Darstellung: ein Assistent verbindet ERP, E-Mail-Postfach und Kundendaten in einem Mittelstandsbetrieb"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Die Beispiele in der Fachpresse handeln gern von Banken und
              Konzernen. Die interessanteren Fälle liegen eine Nummer kleiner.
              Ein Vertriebsinnendienst fragt den Assistenten: „Was hat Kunde
              Müller in den letzten zwölf Monaten bestellt, und welche
              offenen Posten gibt es?&ldquo;, und die Antwort kommt aus
              Warenwirtschaft und Buchhaltung statt aus drei geöffneten
              Programmen. Ein Assistent liest die eingehende Bestell-Mail,
              gleicht Artikelnummern gegen das ERP ab und legt den
              Auftragsentwurf an, den ein Mensch nur noch prüft. Eine
              Steuerkanzlei lässt Belege gegen die Mandantenakte prüfen.
              Es sind dieselben Prozesse, die wir in unseren{" "}
              <Link
                href="/branchen/grosshandel"
                className="text-primary-600 hover:underline"
              >
                Großhandels-Use-Cases
              </Link>{" "}
              seit Jahren automatisieren, nur dass der Zugriffsweg jetzt
              standardisiert ist statt pro Projekt neu gebaut.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Zur Kostenfrage, die in keinem der gängigen Überblicke
              beantwortet wird: Das Protokoll und die meisten fertigen Server
              sind kostenlos. Bezahlt werden drei andere Dinge, nämlich die
              laufenden Modellkosten pro Nutzung, gegebenenfalls das Hosting
              eines eigenen Servers und vor allem die Integrationsarbeit:
              Rechte sauber schneiden, Freigaben definieren, testen. Ein
              erster nutzbarer Anschluss eines Standardsystems ist eher ein
              Projekt von Tagen, ein abgesicherter Produktivbetrieb über
              mehrere Systeme eines von Wochen, nicht von Monaten.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="grenzen">
            <Typo.H2>Grenzen: was MCP nicht löst</Typo.H2>
            <Typo.Paragraph>
              Ehrlichkeit gehört dazu: MCP macht den Zugriff standardisiert,
              aber nicht das Modell fehlerfrei. Ein Agent kann ein Tool zum
              falschen Zeitpunkt oder mit falschen Parametern aufrufen, und
              je mehr Server gleichzeitig eingebunden sind, desto mehr
              Beschreibungstext muss das Modell im Blick behalten. Für
              kritische Abläufe bleibt deshalb der Mensch im Prozess, und für
              stabil wiederkehrende Massenabläufe ist ein fest definierter
              Workflow oft die robustere und günstigere Wahl als ein frei
              entscheidender Agent. MCP ist die Brücke zu den Systemen, kein
              Ersatz für die Entscheidung, welche Prozesse ein Agent
              überhaupt steuern soll.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="fazit">
            <Typo.H2>Fazit</Typo.H2>
            <Typo.Paragraph>
              MCP hat innerhalb kurzer Zeit das größte praktische Problem der
              Unternehmens-KI gelöst: den Zugang zu den eigenen Systemen, ohne
              für jede Kombination aus Tool und System neu zu bauen. Der
              Standard ist herstellerübergreifend, das Angebot an fertigen
              Servern groß, der Selbstversuch kostenlos. Ernst nehmen muss man
              die Sicherheitsseite, mit minimalen Rechten, Freigaben für
              schreibende Aktionen und einer bewussten Datenschutz-Entscheidung.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die eigentliche Arbeit liegt damit nicht mehr im Anschluss,
              sondern in der Auswahl: Welcher Prozess trägt einen Agenten,
              welche Rechte bekommt er, wo bleibt der Mensch im Loop. Genau
              diese Fragen beantwortet Bluebatch mit deutschen Mittelständlern
              und Großhändlern, von der Prozessauswahl bis zum abgesicherten
              Betrieb.{" "}
              <Link href="/contact" className="text-primary-600 hover:underline">
                Sprechen Sie uns an
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="faq">
            <FaqContainer
              faqs={[
                {
                  question: "Was ist ein MCP-Server, einfach erklärt?",
                  answer:
                    "Ein MCP-Server ist ein kleines Programm, das ein einzelnes System, etwa eine Datenbank, ein CRM oder einen Dateiordner, für KI-Assistenten nutzbar macht. Er beschreibt dem KI-Modell standardisiert, welche Inhalte es lesen und welche Aktionen es ausführen darf. Grundlage ist das Model Context Protocol, ein offener Standard, den Anthropic im November 2024 veröffentlicht hat.",
                },
                {
                  question:
                    "Was ist der Unterschied zwischen einem MCP-Server und einer API?",
                  answer:
                    "Eine API ist die Schnittstelle eines Systems für Programmierer; jede KI-Anbindung darüber muss einzeln entwickelt werden. Ein MCP-Server setzt meist auf einer bestehenden API auf und übersetzt sie in ein Format, das jedes MCP-fähige KI-Tool ohne Individualentwicklung versteht. MCP ersetzt APIs also nicht, sondern macht sie für KI-Modelle direkt nutzbar.",
                },
                {
                  question: "Funktioniert MCP nur mit Claude?",
                  answer:
                    "Nein. MCP stammt zwar von Anthropic, ist aber ein offener Standard und wird seit 2025 auch von OpenAI, Google und Microsoft unterstützt. Claude Desktop und Claude Code, ChatGPT über Konnektoren und Entwicklermodus, Copilot Studio sowie Editoren wie Cursor und VS Code können MCP-Server ansprechen. Ein einmal gebauter Server funktioniert mit allen diesen Clients.",
                },
                {
                  question: "Welche fertigen MCP-Server gibt es?",
                  answer:
                    "Kataloge führen Hunderte fertige Server, darunter für Slack, GitHub, PostgreSQL und andere Datenbanken, Google Drive, SharePoint, das lokale Dateisystem, Browser-Steuerung per Playwright sowie Business-Tools wie HubSpot, Notion und Jira. Viele SaaS-Anbieter liefern ihren MCP-Server inzwischen selbst mit. Eigenbau lohnt sich vor allem für Spezial- und Eigenentwicklungen.",
                },
                {
                  question: "Ist der Einsatz von MCP-Servern DSGVO-konform möglich?",
                  answer:
                    "Ja, mit denselben Hausaufgaben wie bei jeder KI-Nutzung: Auftragsverarbeitungsvertrag mit dem Modellanbieter, bewusste Auswahl der Daten, die der Server herausgibt, möglichst EU-Verarbeitung und minimale Zugriffsrechte. Der MCP-Server selbst kann vollständig auf eigener Infrastruktur laufen; entscheidend ist, welche Inhalte er an das KI-Modell weitergibt.",
                },
                {
                  question: "Was kostet die Einführung eines MCP-Servers?",
                  answer:
                    "Das Protokoll und die meisten fertigen Server sind kostenlos. Kosten entstehen durch die Modellnutzung pro Aufruf, gegebenenfalls das Hosting und vor allem durch die Integrationsarbeit: Rechte definieren, Freigaben einbauen, testen. Der Anschluss eines Standardsystems ist typischerweise in Tagen machbar, ein abgesicherter Produktivbetrieb über mehrere Systeme in Wochen.",
                },
                {
                  question:
                    "Brauche ich einen eigenen MCP-Server oder reichen fertige?",
                  answer:
                    "Für Standardsysteme wie Datenbanken, Dateiablagen oder gängige SaaS-Tools reichen fast immer fertige Server. Ein eigener Server lohnt sich für selbst entwickelte oder branchenspezifische Systeme ohne fertige Anbindung. Mit den offiziellen SDKs ist das für Entwickler überschaubar, weil der Server nur beschreibt und durchreicht, was das System ohnehin kann.",
                },
              ]}
            >
              <FaqContainer.Headline>
                Häufige Fragen zu MCP-Servern
              </FaqContainer.Headline>
            </FaqContainer>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="definition">
            Herkunft und Verbreitung
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="funktionsweise">
            Wie ein MCP-Server funktioniert
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="abgrenzung">
            MCP vs. API, RAG, Plugins
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="fertige-server">
            Fertige MCP-Server
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="clients">
            Welche KI-Tools MCP sprechen
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="einstieg">
            Einstieg in 15 Minuten
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="sicherheit">
            Sicherheit und DSGVO
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="praxis">
            Praxis im Mittelstand
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="grenzen">
            Grenzen
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="fazit">
            Fazit
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="faq">
            FAQ
          </BlogLayout.NavigationItem>
        </BlogLayout.Navigation>
      </BlogLayout>
    </>
  );
}
