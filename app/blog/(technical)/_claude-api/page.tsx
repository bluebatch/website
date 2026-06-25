import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Link from "next/link";
import Typo from "@/components/ui/typo";
import DataTable from "@/components/ui/data-table";
import { FaqContainer } from "@/components/ui/faqs";
import { BlogImage, Separator, BlogLayout, BlogHero } from "@/components/blog";

export const metaCustom: BlogMeta = {
  slug: "claude-api",
  author: "Max Hänsel",
  date: "2026-07-15",
  image: "/blog/claude-api/hero.png",
  tags: ["ki", "datenschutz"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title: "Claude API: Anthropics Modelle direkt im Mittelstand nutzen",
  description:
    "Die Claude API verständlich erklärt: wie die Messages-API funktioniert, welche Modellfamilien es gibt, wie EU-Datenresidenz und DSGVO geregelt sind und wann der direkte Anthropic-Zugang die richtige Wahl ist.",
  openGraph: {
    title: "Claude API: Anthropics Modelle direkt im Mittelstand nutzen",
    description:
      "Direkter Anthropic-Zugang statt Umweg: wie die Claude API mit der Messages-API, Tool Use und MCP funktioniert, wie Daten in der EU bleiben, was AVV und Zero Data Retention leisten und wann sie besser passt als ein Cloud-Marktplatz.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/claude-api/hero.png",
        width: 1200,
        height: 630,
        alt: "Ein Mittelstands-Team bindet die Claude API in die eigene Anwendung ein",
      },
    ],
  },
  alternates: {
    canonical: "/blog/claude-api",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          Claude API: Anthropics Modelle direkt im Mittelstand nutzen
        </BlogHero.Headline>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>12 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-07-15">15. Juli 2026</BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/claude-api/hero.png"
          alt="Ein Mittelstands-Entwicklerteam bindet die Claude API in die eigene Anwendung ein"
        />
      </BlogHero>

      <BlogLayout>
        <BlogLayout.Content>
          <div>
            <Typo.Paragraph>
              Wer Claude nicht nur im Chatfenster nutzen, sondern in eigene
              Anwendungen einbauen will, kommt an der Claude API von Anthropic
              kaum vorbei. Sie ist der direkte Draht zu den Modellen: keine
              Oberfläche, keine fertige App, sondern eine Schnittstelle, über die
              die eigene Software mit dem Modell spricht. Damit lassen sich
              eingehende Anfragen klassifizieren, Dokumente zusammenfassen,
              Stammdaten anreichern oder ganze Assistenten bauen, eingebettet in
              die eigenen Abläufe statt in ein fremdes Tool.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Dieser Beitrag erklärt, was die Claude API ist, wie die zentrale
              Messages-API funktioniert, welche Modellfamilien es gibt, wie es um
              EU-Datenresidenz und DSGVO steht und wann der direkte Zugang die
              richtige Wahl ist, verglichen mit dem Umweg über einen Cloud-Marktplatz
              wie{" "}
              <Link
                href="/blog/amazon-bedrock"
                className="text-primary-600 hover:underline"
              >
                Amazon Bedrock
              </Link>
              . Es geht weniger um Code-Details als um die Frage, wie der direkte
              Modellzugang im Mittelstand sinnvoll und datenschutzbewusst eingesetzt
              wird.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="was-ist-claude-api">Was ist die Claude API?</Typo.H2>
            <Typo.Paragraph>
              Die Claude API ist der direkte Zugang zu Anthropics Sprachmodellen
              über eine programmierbare Schnittstelle. Die eigene Anwendung
              schickt eine Anfrage, das Modell antwortet, alles über das
              öffentliche Internet oder eine abgesicherte Anbindung. Anders als
              beim Chatprodukt steuert man jede Anfrage selbst und kann das Modell
              tief in eigene Systeme einbetten, vom internen Tool bis zum
              kundenseitigen Assistenten.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der Reiz des direkten Zugangs liegt in der Aktualität und in der
              vollen Funktionsbreite. Neue Modellversionen und neue Funktionen
              sind hier zuerst verfügbar, oft Wochen vor den Cloud-Marktplätzen
              anderer Anbieter. Wer also möglichst nah am aktuellen Stand arbeiten
              will, ist mit der Direkt-API gut bedient. Den breiteren Rahmen rund um
              den verantwortungsvollen Einsatz liefert unser Überblick zum{" "}
              <Link
                href="/blog/ki-datenschutz"
                className="text-primary-600 hover:underline"
              >
                KI-Datenschutz
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="messages-api">
              Die Messages-API: ein Endpunkt für alles
            </Typo.H2>
            <Typo.Paragraph>
              Im Kern läuft fast alles über einen einzigen Endpunkt, die
              Messages-API. Man schickt eine Liste von Nachrichten hin und bekommt
              die Antwort des Modells zurück. Das klingt simpel, und genau das ist
              die Stärke: Auch fortgeschrittene Funktionen sind keine getrennten
              Schnittstellen, sondern Bestandteile desselben Endpunkts. Das hält die
              Anbindung schlank und verständlich.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-api/claude-api-ueberblick.png"
              alt="Die Messages-API als einziger Endpunkt: Request rein, Response raus, mit Tool Use, Structured Outputs und Streaming als Features desselben Endpunkts"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Zwei Komfortfunktionen sind für den produktiven Einsatz besonders
              relevant. Beim Streaming kommt die Antwort Stück für Stück, was
              gerade bei langen Texten die wahrgenommene Wartezeit deutlich senkt
              und Zeitüberschreitungen vermeidet. Über die Steuerung der
              Antwortlänge legt man eine Obergrenze fest, damit Ausgaben nicht
              mitten im Satz abbrechen. Beides gehört zu einer sauberen Integration
              dazu und ist über dieselbe Schnittstelle zugänglich.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wichtig zu wissen: Die API ist zustandslos. Sie merkt sich kein
              Gespräch von selbst. Wer einen Dialog über mehrere Schritte führen
              will, schickt den bisherigen Verlauf bei jeder Anfrage mit. Das gibt
              volle Kontrolle darüber, was das Modell zu sehen bekommt, verlagert
              aber die Verantwortung für den Gesprächskontext in die eigene
              Anwendung.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="modelle">
              Die Modellfamilien: Opus, Sonnet, Haiku
            </Typo.H2>
            <Typo.Paragraph>
              Claude ist keine einzelne KI, sondern eine Familie von Modellen mit
              unterschiedlichem Zuschnitt. Für die Praxis lassen sie sich grob in
              drei Stufen einordnen, plus ein Spitzenmodell für die anspruchsvollsten
              Aufgaben. Alle laufen über dieselbe Schnittstelle, sodass der Wechsel
              meist nur eine geänderte Modellangabe ist.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-api/modellfamilie.png"
              alt="Die Modellfamilien qualitativ: Opus am fähigsten, Sonnet ausgewogen, Haiku schnell und günstig, Fable als Spitzenmodell, alle über eine Schnittstelle"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Die Opus-Modelle sind die fähigsten für komplexe Aufgaben, langes
              eigenständiges Arbeiten und anspruchsvolle Analysen. Sonnet bietet die
              beste Balance aus Geschwindigkeit und Qualität und ist für viele
              produktive Anwendungen die naheliegende Wahl. Haiku ist das schnellste
              und günstigste Modell, ideal für einfache, hochvolumige Aufgaben wie
              Klassifikation. Darüber steht ein Spitzenmodell für die schwierigsten
              Fälle. Welche genauen Versionen aktuell sind, ändert sich laufend,
              deshalb sollte eine Anwendung sich auf die Modellfamilie stützen, nicht
              auf eine eingefrorene Versionsnummer.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Eine praktische Eigenschaft moderner Claude-Modelle ist das
              adaptive Nachdenken: Das Modell entscheidet selbst, wie viel
              Denkaufwand eine Aufgabe braucht, und man steuert die Tiefe über eine
              einfache Aufwandsstufe statt über ein festes Token-Budget. Für den
              Mittelstand heißt das vor allem, dass man Qualität und Kosten je nach
              Aufgabe austarieren kann, ohne tief in die Mechanik einzusteigen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="bausteine">
              Mehr als Text: Tool Use, MCP und feste Formate
            </Typo.H2>
            <Typo.Paragraph>
              Die Claude API kann deutlich mehr, als nur Text zu erzeugen. Drumherum
              gibt es Bausteine, die genau die Aufgaben abnehmen, an denen eigene
              KI-Projekte sonst hängen bleiben. Mit Tool Use ruft das Modell
              definierte Werkzeuge auf, etwa eine Datenbankabfrage oder eine
              Berechnung, und die eigene Anwendung führt sie aus. So entsteht aus
              einem Sprachmodell ein handelnder Assistent.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-api/api-bausteine.png"
              alt="Bausteine der Claude API: Tool Use für Werkzeuge, MCP für Anbindungen, Structured Outputs für feste Formate, Prompt Caching zur Kostensenkung und Batch für große Mengen"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Über das Model Context Protocol, kurz MCP, lassen sich standardisierte
              Anbindungen an externe Systeme herstellen, ohne für jedes Tool eine
              eigene Brücke zu bauen. Structured Outputs erzwingen ein festes
              Ausgabeformat, sodass die Antwort verlässlich als sauberes JSON
              zurückkommt und sich direkt weiterverarbeiten lässt. Wer das
              Grundprinzip solcher agentischen Bausteine tool-unabhängig verstehen
              will, findet die Einordnung in unserem Leitfaden{" "}
              <Link
                href="/blog/ki-agenten-erstellen"
                className="text-primary-600 hover:underline"
              >
                KI-Agenten erstellen
              </Link>
              .
            </Typo.Paragraph>
            <Typo.Paragraph>
              Zwei weitere Bausteine zielen direkt auf die Kosten. Beim Prompt
              Caching werden wiederkehrende Teile einer Anfrage zwischengespeichert
              und beim nächsten Mal deutlich günstiger abgerechnet, was bei festen
              Anweisungen oder großem Kontext erheblich spart. Für große, nicht
              zeitkritische Mengen gibt es die Stapelverarbeitung, die zum halben
              Preis abrechnet. Beides sind die wirksamsten Hebel, um die laufenden
              Kosten im Griff zu behalten.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="datenschutz">
              EU-Datenresidenz, DSGVO und Datennutzung
            </Typo.H2>
            <Typo.Paragraph>
              Für deutsche Unternehmen ist die wichtigste Frage nicht, was die API
              kann, sondern wo die Daten verarbeitet werden und was mit ihnen
              passiert. Anthropic bietet hier mehrere Stellschrauben, die den
              datenschutzbewussten Einsatz möglich machen. Über eine
              Datenresidenz-Einstellung lässt sich die Verarbeitung gezielt in der
              EU halten, sodass Prompts und Antworten nicht unkontrolliert ins
              Ausland fließen.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-api/eu-datenresidenz.png"
              alt="Datenschutz-Stellschrauben der Claude API: Verarbeitung in der EU, keine Speicherung der Inhalte über Zero Data Retention und keine Nutzung der Daten für Modelltraining"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Bei der Datennutzung ist die Position für den geschäftlichen
              API-Zugang klar: Eingaben und Ausgaben über die API werden
              standardmäßig nicht zum Training der Modelle verwendet. Für
              Unternehmen mit besonders strengen Anforderungen gibt es zusätzlich
              die Option einer Datenaufbewahrung von null, bei der die Inhalte nach
              der Verarbeitung nicht gespeichert werden. Damit lässt sich die
              Datenspur auf das absolute Minimum reduzieren.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Vertraglich gehört dazu ein Auftragsverarbeitungsvertrag, der die
              Rollen nach DSGVO regelt. Ein ehrlicher Vorbehalt bleibt: Anthropic
              ist ein US-Unternehmen, sodass auch bei EU-Verarbeitung ein
              Drittland-Restrisiko im Raum steht, das sich vertraglich verkleinern,
              aber nicht vollständig wegdefinieren lässt. Und die wichtigste
              Trennung: Anthropic liefert die Werkzeuge und den Vertrag, aber die
              DSGVO-Konformität der konkreten Anwendung verantwortet immer der Kunde
              als Verantwortlicher. Die Aussagen hier sind eine allgemeine
              Einordnung und kein Rechtsrat. Welche Tools sich nach diesen Kriterien
              grundsätzlich eignen, ordnet unser Überblick zu{" "}
              <Link
                href="/blog/dsgvo-konforme-ki-tools"
                className="text-primary-600 hover:underline"
              >
                DSGVO-konformen KI-Tools
              </Link>{" "}
              ein.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="kosten">Was kostet die Claude API?</Typo.H2>
            <Typo.Paragraph>
              Die Claude API rechnet nutzungsbasiert ab, getrennt nach Eingabe und
              Ausgabe und gestaffelt nach Modell. Die fähigeren Modelle kosten pro
              Texteinheit mehr als die schnellen, günstigen. Es gibt keine feste
              Grundgebühr, man zahlt für das, was man verbraucht. Das macht den
              Einstieg unkompliziert und passt zu variabler Last.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die konkreten Beträge je Modell ändern sich häufig, deshalb nennen wir
              hier bewusst keine Zahlen. Wichtiger als der Tarif eines einzelnen
              Modells ist für die Planung die Struktur: Die laufenden Kosten
              skalieren mit der Nutzung, und die wirksamsten Hebel zur Senkung sind
              die Wahl des passenden Modells je Aufgabe, das Zwischenspeichern
              wiederkehrender Prompt-Teile und die Stapelverarbeitung für große
              Mengen. Wer von Anfang an Limits und ein Kostenmonitoring setzt,
              behält die Ausgaben verlässlich im Griff. Wie sich das beim
              OpenAI-Pendant darstellt, zeigt unser Beitrag zu den{" "}
              <Link
                href="/blog/openai-api-kosten"
                className="text-primary-600 hover:underline"
              >
                OpenAI-API-Kosten
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="vergleich">
              Direkt-API, Bedrock, Azure oder selbst hosten?
            </Typo.H2>
            <Typo.Paragraph>
              Die Direkt-API ist nicht der einzige Weg zu Claude. Es lohnt sich, die
              Alternativen ehrlich gegeneinander zu stellen, denn die richtige Wahl
              hängt vom Reifegrad und von der bestehenden IT-Landschaft ab.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-api/vergleich-optionen.png"
              alt="Vergleich von Claude Direkt-API, Amazon Bedrock, Azure OpenAI und Selbst-Hosting entlang Datenkontrolle, Betriebsaufwand und Aktualität der Modelle"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Der direkte Anthropic-Zugang punktet vor allem mit Aktualität und
              voller Funktionsbreite: neue Modelle und Funktionen zuerst, ein
              Vertragspartner, EU-Datenresidenz und Zero Data Retention als Optionen.
              Über einen Cloud-Marktplatz wie Amazon Bedrock bekommt man dafür die
              native Einbettung in eine bestehende Cloud-Welt mit Rechteverwaltung,
              Abrechnung und mehreren Modellanbietern unter einem Dach, allerdings
              erscheinen die neuesten Versionen dort oft zeitversetzt.
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Option</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Datenkontrolle</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Aufwand</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Aktualität</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell bold>Direkt-API</DataTable.Cell>
                  <DataTable.Cell>EU-Region, ZDR möglich</DataTable.Cell>
                  <DataTable.Cell>gering</DataTable.Cell>
                  <DataTable.Cell>am aktuellsten</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Amazon Bedrock</DataTable.Cell>
                  <DataTable.Cell>hoch, EU-Region möglich</DataTable.Cell>
                  <DataTable.Cell>gering, managed</DataTable.Cell>
                  <DataTable.Cell>oft zeitversetzt</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Azure OpenAI</DataTable.Cell>
                  <DataTable.Cell>hoch, EU-Region möglich</DataTable.Cell>
                  <DataTable.Cell>gering, managed</DataTable.Cell>
                  <DataTable.Cell>OpenAI-zentriert</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Selbst hosten</DataTable.Cell>
                  <DataTable.Cell>maximal</DataTable.Cell>
                  <DataTable.Cell>sehr hoch</DataTable.Cell>
                  <DataTable.Cell>nur Open Source</DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              Azure OpenAI ist die naheliegende Wahl für Häuser, die ohnehin
              Microsoft-nativ arbeiten, allerdings auf die OpenAI-Modellfamilie
              fokussiert und damit kein Weg zu Claude. Das andere Extrem ist das
              Selbst-Hosten eines Open-Source-Modells auf eigener Hardware: maximale
              Datenkontrolle, aber mit dem vollen Gewicht aus Hardwarekosten,
              Betrieb und Modellpflege, und ohne Zugang zu den Claude-Modellen. Für
              die meisten Mittelständler, die gezielt Claude einsetzen wollen, steht
              die Wahl deshalb zwischen der Direkt-API und dem Weg über einen
              Cloud-Marktplatz.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="mittelstand">Was das für den Mittelstand bedeutet</Typo.H2>
            <Typo.Paragraph>
              Für ein typisches Mittelstands- oder Großhandelsunternehmen ist die
              Direkt-API vor allem dann interessant, wenn eine KI-Anwendung mit
              echten Unternehmensdaten arbeiten und möglichst nah am aktuellen
              Modellstand bleiben soll, etwa ein Assistent auf den eigenen Produkt-
              und Vertragsdokumenten, eine Klassifikation eingehender Anfragen oder
              die Anreicherung von Stammdaten. In solchen Fällen zählt die
              Kombination aus EU-Datenresidenz, ausbleibendem Training und der
              optionalen Datenaufbewahrung von null. Wie sich solche Anwendungen in
              konkrete Abläufe übersetzen, zeigen die Beispiele aus dem{" "}
              <Link
                href="/use-cases/grosshandel"
                className="text-primary-600 hover:underline"
              >
                Großhandel
              </Link>
              .
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die ehrlichen Hausaufgaben bleiben: die Datenresidenz bewusst auf die
              EU setzen, bei sensiblen Inhalten die Datenaufbewahrung von null prüfen,
              das Restrisiko des US-Anbieters bewerten, die laufenden Kosten von
              Beginn an deckeln und die DSGVO-Konformität der eigenen Anwendung selbst
              verantworten. Wer den Bogen vom einzelnen Modellaufruf zum durchdachten
              Prozess schlagen will, findet die breitere Perspektive in unserem{" "}
              <Link
                href="/blog/prozessautomatisierung-guide"
                className="text-primary-600 hover:underline"
              >
                Leitfaden zur Prozessautomatisierung
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="fazit">Fazit</Typo.H2>
            <Typo.Paragraph>
              Die Claude API ist für den Mittelstand vor allem deshalb spannend, weil
              sie den direktesten und aktuellsten Zugang zu Anthropics Modellen
              bietet und dabei die wichtigsten Datenschutz-Hebel in die Hand gibt:
              eine schlanke Messages-API als zentraler Endpunkt, eine Modellfamilie
              vom schnellen Haiku bis zum fähigen Opus, Bausteine wie Tool Use, MCP
              und Structured Outputs, EU-Datenresidenz, kein Training auf den eigenen
              Daten und eine optionale Datenaufbewahrung von null. Ein Vorbehalt
              gehört ehrlicherweise dazu: Anthropic bleibt ein US-Anbieter mit dem
              bekannten Drittland-Restrisiko. Wer diese Punkte bewusst steuert,
              bekommt einen pragmatischen und zukunftssicheren Weg, Claude produktiv
              zu stellen. Wenn ihr überlegt, das in eurem Haus aufzusetzen, sprecht
              uns gern an, wir{" "}
              <Link
                href="/contact"
                className="text-primary-600 hover:underline"
              >
                helfen bei der Einordnung
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="faq">Häufige Fragen</Typo.H2>
            <FaqContainer
              faqs={[
                {
                  question: "Was ist die Claude API einfach erklärt?",
                  answer:
                    "Die Claude API ist der direkte, programmierbare Zugang zu Anthropics Sprachmodellen. Statt im Chatfenster spricht die eigene Software über eine Schnittstelle mit dem Modell und bettet es in eigene Anwendungen ein, etwa für Klassifikation, Zusammenfassungen oder Assistenten. Fast alles läuft über einen einzigen Endpunkt, die Messages-API.",
                },
                {
                  question: "Welche Claude-Modelle gibt es über die API?",
                  answer:
                    "Claude ist eine Familie von Modellen. Grob lassen sie sich in drei Stufen einordnen: Opus als das fähigste Modell für komplexe Aufgaben, Sonnet als ausgewogene Wahl aus Geschwindigkeit und Qualität und Haiku als schnellstes und günstigstes Modell für einfache, hochvolumige Aufgaben. Darüber steht ein Spitzenmodell für die schwierigsten Fälle. Alle laufen über dieselbe Schnittstelle.",
                },
                {
                  question: "Ist die Claude API DSGVO-konform nutzbar?",
                  answer:
                    "Die API bringt die wichtigsten Bausteine mit: eine Datenresidenz-Einstellung für die Verarbeitung in der EU, kein Training auf API-Daten, eine optionale Datenaufbewahrung von null und einen Auftragsverarbeitungsvertrag. Da Anthropic ein US-Anbieter ist, bleibt ein Drittland-Restrisiko. Die DSGVO-Konformität der konkreten Anwendung verantwortet immer der Kunde. Das ist eine Einordnung und kein Rechtsrat.",
                },
                {
                  question: "Bleiben meine Daten bei der Claude API in der EU?",
                  answer:
                    "Über eine Datenresidenz-Einstellung lässt sich die Verarbeitung gezielt in der EU halten, sodass Prompts und Antworten dort verarbeitet werden. Für besonders strenge Anforderungen gibt es zusätzlich die Option, Inhalte nach der Verarbeitung gar nicht zu speichern. Welche Optionen für den eigenen Vertrag konkret gelten, sollte vor dem Produktivstart geprüft werden.",
                },
                {
                  question: "Was unterscheidet die Claude API von Amazon Bedrock?",
                  answer:
                    "Die Direkt-API von Anthropic bietet die neuesten Modelle und Funktionen zuerst und die volle Funktionsbreite. Amazon Bedrock stellt Claude und andere Modelle über einen AWS-Marktplatz bereit, mit nativer Einbettung in die AWS-Welt, gemeinsamer Abrechnung und mehreren Anbietern unter einem Dach, allerdings erscheinen neue Versionen dort oft zeitversetzt. Beide ermöglichen EU-Regionen.",
                },
                {
                  question: "Was kostet die Nutzung der Claude API?",
                  answer:
                    "Die API rechnet nutzungsbasiert ab, getrennt nach Eingabe und Ausgabe und gestaffelt nach Modell, ohne Grundgebühr. Die fähigeren Modelle kosten pro Texteinheit mehr als die schnellen, günstigen. Die konkreten Beträge ändern sich häufig. Die wirksamsten Hebel zur Kostensenkung sind die Wahl des passenden Modells, Prompt Caching und die Stapelverarbeitung für große Mengen.",
                },
              ]}
            >
              <FaqContainer.Headline>Häufige Fragen</FaqContainer.Headline>
            </FaqContainer>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="was-ist-claude-api">
            Was ist die Claude API
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="messages-api">
            Die Messages-API
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="modelle">
            Modellfamilien
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="bausteine">
            Tool Use, MCP, Formate
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="datenschutz">
            EU-Datenresidenz und DSGVO
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="kosten">
            Was kostet die API
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="vergleich">
            API, Bedrock, Azure, selbst hosten
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="mittelstand">
            Für den Mittelstand
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
