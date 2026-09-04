import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Link from "next/link";
import Typo from "@/components/ui/typo";
import DataTable from "@/components/ui/data-table";
import { FaqContainer } from "@/components/ui/faqs";
import {
  BlogImage,
  Separator,
  BlogLayout,
  BlogHero,
} from "@/components/blog";
import GeoSummary from "@/components/ui/geo-summary";

export const metaCustom: BlogMeta = {
  slug: "claude-code-alternativen",
  author: "Max Hänsel",
  date: "2026-10-16",
  image: "/blog/claude-code-alternativen/hero.png",
  tags: ["ki", "development", "security"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title: "Claude Code Alternativen 2026: Welche ihr wirklich braucht",
  description:
    "Claude Code Alternativen im Überblick: Aider, Cline, OpenCode, Goose, Cursor und Copilot. Sortiert nach dem Grund, aus dem ihr wechseln wollt, samt der Antwort, die in keinem Vergleich steht.",
  openGraph: {
    title: "Claude Code Alternativen: sortiert nach dem Grund, nicht nach dem Werkzeug",
    description:
      "Vier Gründe führen Unternehmen zur Suche nach einer Alternative. Nur einer davon endet bei einem anderen Werkzeug. Was in den drei anderen Fällen die richtige Antwort ist.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/claude-code-alternativen/hero.png",
        width: 1200,
        height: 630,
        alt: "Gang zwischen zwei Reihen von Serverschränken mit Patchfeldern und Kabelführung, menschenleer",
      },
    ],
  },
  alternates: {
    canonical: "/blog/claude-code-alternativen",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          Claude Code Alternativen: Welche ihr wirklich braucht
        </BlogHero.Headline>

        <GeoSummary>
          Dieser Vergleich ordnet die Alternativen zu Claude Code nach dem
          Grund, aus dem Unternehmen wechseln wollen: Kosten, Datenschutz,
          Modellbindung oder Arbeitsweise. Behandelt werden Aider, Cline,
          OpenCode, Goose, Cursor und GitHub Copilot, dazu der Weg, den kein
          anderer Vergleich nennt: dasselbe Werkzeug über das eigene
          Cloud-Konto in einer EU-Region. Geschrieben für Unternehmen mit 50
          bis 1.000 Mitarbeitenden, in denen die IT-Leitung entscheidet und
          nicht der einzelne Entwickler. Von vier Wechselgründen führt genau
          einer zu einem anderen Produkt.
        </GeoSummary>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>11 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-10-16">16. Oktober 2026</BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/claude-code-alternativen/hero.png"
          alt="Gang zwischen zwei Reihen von Serverschränken mit Patchfeldern, Kabelführung und Statusleuchten, menschenleer"
        />
      </BlogHero>

      <BlogLayout meta={metaCustom} metadata={metadata}>
        <BlogLayout.Content>
          <div>
            <Typo.Paragraph>
              Wenn uns jemand nach einer Alternative zu Claude Code fragt, ist
              die zweite Frage immer die gleiche: warum. Nicht aus Neugier,
              sondern weil die Antwort davon vollständig abhängt. Wir haben in
              den letzten Monaten vier verschiedene Gründe gehört, und nur
              einer davon endet tatsächlich bei einem anderen Programm. Die
              anderen drei enden bei derselben Software, nur anders bezogen,
              anders bezahlt oder anders betrieben.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Genau das steht in den üblichen Vergleichen nicht. Wir haben uns
              vor diesem Text die vier stärksten Treffer zum Thema angesehen,
              darunter einen mit rund 6.500 Wörtern. Alle vier gliedern nach
              Werkzeug: acht Kacheln, eine Tabelle, eine Empfehlung. Keiner
              fragt, warum jemand sucht. Und keiner erwähnt, dass sich der
              häufigste deutsche Wechselgrund lösen lässt, ohne das Werkzeug zu
              wechseln.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Dieser Text ist deshalb nach Gründen sortiert. Die Werkzeugliste
              kommt trotzdem vollständig vor, sie steht nur nicht am Anfang.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="gruende">Vier Gründe, ein Suchbegriff</Typo.H2>
            <Typo.Paragraph>
              Hinter der Suche nach einer Alternative steckt fast immer einer
              dieser vier Sätze. Es lohnt sich, den eigenen zuerst zu
              bestimmen, weil die weiteren Abschnitte darauf aufbauen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Es ist zu teuer.</strong> Meistens gesagt, nachdem die
              erste Abrechnung eines intensiven Monats da war, oder nachdem
              jemand ausgerechnet hat, was zwölf Sitze im Jahr kosten.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Die Daten dürfen nicht raus.</strong> Der mit Abstand
              häufigste Grund in unseren Projekten, und der einzige, bei dem
              die Frage nicht von der IT kommt, sondern vom Datenschutz, vom
              Betriebsrat oder von einer Berufsordnung.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Wir wollen nicht an ein Modell gebunden sein.</strong>{" "}
              Selten aus Prinzip, meistens weil ein bestimmtes Modell für eine
              bestimmte Aufgabe besser oder billiger ist.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Das Terminal passt uns nicht.</strong> Der ehrlichste
              Grund und der einzige, der wirklich zu einem anderen Produkt
              führt.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-alternativen/wechselgruende.png"
              alt="Vier Zeilen mit je einem Wechselgrund links und der passenden Antwort rechts: Kosten führen zu einem anderen Bezugsweg, Datenschutz zum eigenen Cloud-Konto, Modellbindung zu einem anderen Modell, und nur die Arbeitsweise führt zu einem anderen Werkzeug"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Die ersten drei Antworten arbeiten mit demselben Werkzeug
              weiter. Das ist der Punkt, an dem sich dieser Text von den
              Roundups unterscheidet, und der Rest ergibt sich daraus.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="werkzeuge">
              Die Werkzeuge, die tatsächlich in Frage kommen
            </Typo.H2>
            <Typo.Paragraph>
              Damit die Liste nicht fehlt: Das sind die Kandidaten, die in
              jedem ernstzunehmenden Vergleich auftauchen, und die einzigen,
              die wir bei Kunden im echten Einsatz gesehen haben. Alles
              darüber hinaus ist im Moment Ausprobieren, nicht Betrieb.
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Werkzeug</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Bedienung</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Modellwahl</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Lizenz</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell>Claude Code</DataTable.Cell>
                  <DataTable.Cell>Terminal, Agent</DataTable.Cell>
                  <DataTable.Cell>Claude, auch über eigene Cloud</DataTable.Cell>
                  <DataTable.Cell>proprietär</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Aider</DataTable.Cell>
                  <DataTable.Cell>Terminal, Agent</DataTable.Cell>
                  <DataTable.Cell>frei, auch lokal</DataTable.Cell>
                  <DataTable.Cell>Open Source</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Cline</DataTable.Cell>
                  <DataTable.Cell>Erweiterung im Editor</DataTable.Cell>
                  <DataTable.Cell>frei, auch lokal</DataTable.Cell>
                  <DataTable.Cell>Open Source</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>OpenCode</DataTable.Cell>
                  <DataTable.Cell>Terminal, Agent</DataTable.Cell>
                  <DataTable.Cell>frei, auch lokal</DataTable.Cell>
                  <DataTable.Cell>Open Source</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Goose</DataTable.Cell>
                  <DataTable.Cell>Terminal und Desktop</DataTable.Cell>
                  <DataTable.Cell>frei, auch lokal</DataTable.Cell>
                  <DataTable.Cell>Open Source</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Cursor</DataTable.Cell>
                  <DataTable.Cell>eigener Editor</DataTable.Cell>
                  <DataTable.Cell>mehrere Anbieter</DataTable.Cell>
                  <DataTable.Cell>proprietär</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>GitHub Copilot</DataTable.Cell>
                  <DataTable.Cell>Erweiterung im Editor</DataTable.Cell>
                  <DataTable.Cell>mehrere Anbieter</DataTable.Cell>
                  <DataTable.Cell>proprietär</DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              Zwei Dinge fallen an der Tabelle auf. Erstens: Die vier offenen
              Werkzeuge unterscheiden sich untereinander weniger, als ihre
              Startseiten vermuten lassen. Sie sind alle modellagnostisch, sie
              können alle lokale Modelle ansprechen, und sie lösen alle
              dieselbe Aufgabe. Zweitens: Nur zwei Zeilen der Tabelle
              beantworten die Frage nach der Bedienung anders als Claude Code.
              Wenn euer Grund nicht die Bedienung ist, hilft euch der
              Spaltenvergleich also nicht weiter.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="kosten">Grund 1: Es ist zu teuer</Typo.H2>
            <Typo.Paragraph>
              Bevor ihr das Werkzeug wechselt, lohnt der Blick auf den
              Bezugsweg. Dasselbe Modell lässt sich als Abo, über die
              Programmierschnittstelle nach Verbrauch oder über ein
              Cloud-Konto beziehen, und die drei Wege kosten bei gleicher
              Nutzung sehr unterschiedlich viel. Wer den ganzen Tag arbeitet,
              fährt mit einem Abo meistens günstiger. Wer das Werkzeug in
              einen automatisierten Ablauf einbaut, der nachts läuft, zahlt
              nach Verbrauch oft ein Vielfaches weniger. Die Zahlen dazu haben
              wir in einem eigenen Text durchgerechnet, samt der Beobachtung,
              dass die tatsächlichen Verbrauchskosten pro Entwickler und
              aktivem Arbeitstag deutlich enger beieinanderliegen, als die
              Abo-Stufen nahelegen:{" "}
              <Link
                href="/blog/claude-code-kosten"
                className="text-primary-600 hover:underline"
              >
                Was Claude Code kostet
              </Link>
              .
            </Typo.Paragraph>
            <Typo.Paragraph>
              Erst wenn der günstigste Bezugsweg immer noch zu teuer ist,
              spricht der Preis für ein offenes Werkzeug. Aider, Cline,
              OpenCode und Goose kosten selbst nichts. Das heißt allerdings
              nicht, dass sie umsonst laufen: Sie brauchen weiterhin ein
              Modell, und das kostet entweder Tokengeld oder Hardware. Die
              Ersparnis liegt bei der Lizenz, nicht beim Betrieb.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der ehrliche Vergleich lautet deshalb nicht kostenlos gegen
              zwanzig Dollar, sondern Lizenz plus Modell gegen Lizenz plus
              Modell. In den meisten Rechnungen, die wir gesehen haben, macht
              die Lizenz den kleineren Teil aus.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="datenschutz">
              Grund 2: Die Daten dürfen nicht raus
            </Typo.H2>
            <Typo.Paragraph>
              Das ist der Abschnitt, wegen dem dieser Text existiert. In den
              vier gelesenen Vergleichen kommt Datenschutz zusammengenommen in
              zwei Nebensätzen vor, beide als angenehme Begleiterscheinung von
              Open Source. Für ein deutsches Unternehmen ist er aber keine
              Begleiterscheinung, sondern die Bedingung, unter der überhaupt
              etwas eingeführt wird.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die entscheidende Erkenntnis: Die Frage, wessen Modell rechnet,
              ist nicht dieselbe wie die Frage, mit wem ihr einen Vertrag
              habt. Claude Code lässt sich nicht nur direkt beim Anbieter
              betreiben, sondern auch gegen Amazon Bedrock oder Google Vertex
              AI, also in eurem eigenen Cloud-Konto und in einer Region eurer
              Wahl, Frankfurt eingeschlossen. Das Werkzeug bleibt dasselbe, der
              Vertragspartner wechselt.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-alternativen/betriebswege.png"
              alt="Ein Kasten Claude Code links, von dort drei Pfade nach rechts: zur Anbieter-API, zum eigenen Cloud-Konto in einer EU-Region innerhalb eines gestrichelten Rahmens mit der Beschriftung Eigener Vertrag, und zu einem lokalen Modell"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Was sich dadurch praktisch ändert: Die Auftragsverarbeitung
              läuft über euren bestehenden Cloud-Vertrag statt über einen
              zusätzlichen Anbieter. Die Region ist von euch gewählt und
              nachweisbar. Protokollierung, Zugriffsrechte und Netzwerkregeln
              liegen in derselben Umgebung, in der eure übrigen Systeme schon
              stehen, und werden von denselben Leuten verwaltet. Für die
              meisten Datenschutzprüfungen, die wir begleitet haben, war genau
              das der Unterschied zwischen Freigabe und Ablehnung.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-alternativen/datenweg.png"
              alt="Zwei Felder im Vergleich: links Direktbezug, bei dem ein Pfeil die Unternehmensgrenze verlässt und beim Anbieter endet, rechts eigenes Cloud-Konto, bei dem Unternehmen und EU-Region gemeinsam innerhalb eines gestrichelten Rahmens mit der Beschriftung Eigener Vertrag liegen"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Wie der Bezug über Bedrock funktioniert und was er kostet, haben
              wir getrennt beschrieben, einmal grundsätzlich unter{" "}
              <Link
                href="/blog/amazon-bedrock"
                className="text-primary-600 hover:underline"
              >
                Amazon Bedrock
              </Link>{" "}
              und einmal mit den Preisen unter{" "}
              <Link
                href="/blog/aws-bedrock-kosten"
                className="text-primary-600 hover:underline"
              >
                Bedrock-Kosten
              </Link>
              .
            </Typo.Paragraph>
            <Typo.Paragraph>
              Es gibt einen Fall, in dem dieser Weg nicht reicht: wenn die
              Daten das Haus überhaupt nicht verlassen dürfen. Bei
              Berufsgeheimnisträgern kommt das vor, und in
              Betriebsvereinbarungen steht es gelegentlich auch. Dann bleibt
              nur ein Modell auf eigener Hardware, und dafür braucht ihr ein
              modellagnostisches Werkzeug aus der Tabelle oben. Wie wir mit
              dieser Anforderung in regulierten Häusern arbeiten, steht unter{" "}
              <Link
                href="/branchen/anwaelte/private-ai"
                className="text-primary-600 hover:underline"
              >
                Private AI für Kanzleien
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="modellbindung">
              Grund 3: Wir wollen ein anderes Modell
            </Typo.H2>
            <Typo.Paragraph>
              Hier ist die Antwort einfach, weil sie eindeutig ist. Claude Code
              arbeitet mit Claude. Wenn ihr regelmäßig andere Modelle nutzen
              wollt, sei es aus Kostengründen, wegen einer bestimmten Stärke
              oder weil ihr euch nicht festlegen möchtet, dann braucht ihr ein
              Werkzeug, das den Modellanbieter als Einstellung behandelt.
              Aider, Cline, OpenCode und Goose tun genau das.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die Wahl zwischen den vieren ist weniger dramatisch, als die
              Vergleichstabellen vermuten lassen. Aider ist am nächsten am
              klassischen Terminal-Ablauf und arbeitet eng mit der
              Versionsverwaltung zusammen. Cline lebt in der Editor-Oberfläche
              und ist damit der leichteste Einstieg für Leute, die ihren Editor
              nicht verlassen wollen. OpenCode ist der direkteste Ersatz für
              Claude Code, wenn euch die Arbeitsweise gefällt und nur die
              Modellbindung stört. Goose bringt zusätzlich eine grafische
              Oberfläche mit.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Ein Hinweis aus der Praxis: Die Modellfreiheit ist nur so viel
              wert, wie ihr sie tatsächlich nutzt. Wir haben mehrere Teams
              gesehen, die wegen der Freiheit gewechselt sind und danach
              anderthalb Jahre dasselbe Modell eingestellt gelassen haben. Wenn
              ihr keinen konkreten zweiten Anwendungsfall benennen könnt, ist
              das kein tragender Grund.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="arbeitsweise">
              Grund 4: Das Terminal passt uns nicht
            </Typo.H2>
            <Typo.Paragraph>
              Das ist der einzige Grund, der zwingend zu einem anderen Produkt
              führt, und gleichzeitig der, den man am wenigsten wegdiskutieren
              sollte. Ein Agent im Terminal verlangt eine andere Arbeitsweise:
              Man beschreibt eine Aufgabe und prüft ein Ergebnis, statt Zeile
              für Zeile zu schreiben. Wer das nach zwei Wochen immer noch als
              Umweg empfindet, wird es auch nach zwei Monaten so empfinden.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Dann sind Cursor als eigener Editor oder GitHub Copilot als
              Erweiterung im vorhandenen Editor die naheliegenden Kandidaten.
              Beide begleiten das Schreiben, statt es zu ersetzen. Den
              ausführlichen Vergleich mit Claude Code haben wir für Cursor
              unter{" "}
              <Link
                href="/blog/claude-code-vs-cursor"
                className="text-primary-600 hover:underline"
              >
                Claude Code vs. Cursor
              </Link>{" "}
              und für die Terminal-Konkurrenz unter{" "}
              <Link
                href="/blog/claude-code-vs-codex"
                className="text-primary-600 hover:underline"
              >
                Claude Code vs. Codex
              </Link>{" "}
              aufgeschrieben.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="wechselkosten">
              Was ein Wechsel wirklich kostet
            </Typo.H2>
            <Typo.Paragraph>
              In den Vergleichen taucht diese Position nie auf, in unseren
              Projekten dafür immer. Ein Werkzeugwechsel kostet nicht nur die
              neue Lizenz, sondern drei Dinge, die niemand einplant.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Erstens die Projektregeln. Jedes dieser Werkzeuge arbeitet nur
              dann brauchbar, wenn es weiß, wie bei euch gebaut, getestet und
              formatiert wird. Diese Regeln stehen in einer werkzeugeigenen
              Datei und lassen sich nicht eins zu eins übertragen. Zweitens
              die Anbindungen. Wenn ihr Claude Code über das Model Context
              Protocol an eure Systeme gehängt habt, prüft vor dem Wechsel, ob
              das Zielwerkzeug dasselbe Protokoll spricht. Die meisten tun es
              inzwischen, aber nicht alle gleich vollständig, und der Aufbau
              hat beim ersten Mal Zeit gekostet, die ihr sonst zweimal zahlt.
              Wie das bei Claude Code aussieht, steht unter{" "}
              <Link
                href="/blog/claude-code-mcp"
                className="text-primary-600 hover:underline"
              >
                Claude Code und MCP
              </Link>
              . Drittens die Einarbeitung, die bei einem Wechsel innerhalb
              derselben Kategorie klein ist und bei einem Wechsel vom Terminal
              in den Editor eben nicht.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Unsere Faustregel: Wenn der Wechselgrund nicht mindestens so
              schwer wiegt wie zwei bis drei Arbeitstage pro betroffener
              Person, ist er den Wechsel nicht wert.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="entscheidung">Entscheidung in vier Regeln</Typo.H2>

            <BlogImage
              src="/blog/claude-code-alternativen/entscheidung.png"
              alt="Entscheidungsbaum mit der Ausgangsfrage Warum wollt ihr wechseln und vier Verzweigungen: Zu teuer führt zu Bezugsweg wechseln, Daten müssen im Haus bleiben führt zu eigenem Cloud-Konto, anderes Modell nötig führt zu einem offenen Werkzeug, Terminal passt nicht führt zu Editor statt Agent"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              <strong>Regel 1.</strong> Wenn der Grund Geld ist, wechselt
              zuerst den Bezugsweg und erst danach das Werkzeug. Die Lizenz ist
              selten der teure Teil.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Regel 2.</strong> Wenn der Grund Datenschutz ist, prüft
              zuerst den Bezug über euer eigenes Cloud-Konto in einer
              EU-Region. Ein Werkzeugwechsel löst das Problem nicht, ein
              Vertragswechsel schon.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Regel 3.</strong> Wenn die Daten das Haus gar nicht
              verlassen dürfen oder ihr wirklich mehrere Modelle braucht, nehmt
              ein offenes, modellagnostisches Werkzeug. Nennt vorher den
              zweiten Anwendungsfall, sonst ist es keiner.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Regel 4.</strong> Wenn der Grund die Arbeitsweise ist,
              nehmt einen Editor und hört auf, Agenten zu vergleichen. Das ist
              der eine Fall, in dem die Vergleichstabellen tun, was sie sollen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="fazit">Fazit</Typo.H2>
            <Typo.Paragraph>
              Die Liste der Alternativen ist kurz und in jedem Vergleich
              dieselbe. Interessant ist nicht sie, sondern die Frage davor. Von
              den vier Gründen, aus denen Unternehmen bei uns nach einer
              Alternative fragen, führt genau einer zu einem anderen Produkt.
              Zwei führen zu einem anderen Bezugsweg für dasselbe Produkt, und
              einer zu einem offenen Werkzeug, das man aber auch erst dann
              braucht, wenn man den zweiten Anwendungsfall benennen kann.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wenn ihr gerade in dieser Frage steckt und der Grund Datenschutz
              heißt: Fangt nicht bei der Werkzeugliste an, sondern bei eurem
              Cloud-Vertrag. Das ist in den meisten Fällen der kürzere Weg zur
              Freigabe, und ihr behaltet das Werkzeug, das euer Team schon
              kennt. Was Claude Code überhaupt ist und wofür es taugt, steht
              für den Einstieg unter{" "}
              <Link
                href="/blog/was-ist-claude-code"
                className="text-primary-600 hover:underline"
              >
                Was ist Claude Code
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
                  question: "Was ist die beste Alternative zu Claude Code?",
                  answer:
                    "Das hängt vom Wechselgrund ab. Geht es um Modellfreiheit, sind Aider, Cline, OpenCode und Goose die naheliegenden offenen Werkzeuge. Geht es um die Arbeitsweise, sind Cursor oder GitHub Copilot die Antwort. Geht es um Kosten oder Datenschutz, ist die beste Alternative meistens gar kein anderes Werkzeug, sondern ein anderer Bezugsweg für dasselbe.",
                },
                {
                  question:
                    "Gibt es eine kostenlose Alternative zu Claude Code?",
                  answer:
                    "Aider, Cline, OpenCode und Goose sind quelloffen und kosten selbst nichts. Sie brauchen aber weiterhin ein Sprachmodell, und das kostet entweder Tokengeld beim Anbieter oder Hardware im eigenen Haus. Kostenlos ist damit die Lizenz, nicht der Betrieb.",
                },
                {
                  question:
                    "Kann man Claude Code DSGVO-konform in Deutschland betreiben?",
                  answer:
                    "Ja, in der Regel über den Bezug des Modells aus dem eigenen Cloud-Konto, etwa über Amazon Bedrock oder Google Vertex AI in einer EU-Region. Die Auftragsverarbeitung läuft dann über euren bestehenden Cloud-Vertrag, die Region ist gewählt und nachweisbar. Ob das ausreicht, entscheidet eure Datenschutzprüfung; für Berufsgeheimnisträger kann zusätzlich ein Modell auf eigener Hardware nötig sein.",
                },
                {
                  question:
                    "Welche Alternative funktioniert mit lokalen Modellen?",
                  answer:
                    "Alle vier offenen Werkzeuge, also Aider, Cline, OpenCode und Goose, können ein lokal betriebenes Modell ansprechen. Der begrenzende Faktor ist dabei nicht das Werkzeug, sondern die Hardware und die Frage, ob das lokale Modell für eure Aufgaben gut genug ist.",
                },
                {
                  question: "Was kostet ein Wechsel neben der Lizenz?",
                  answer:
                    "Drei Positionen, die in Vergleichen fehlen: das Neuschreiben der Projektregeln, die Prüfung und der Neuaufbau der Systemanbindungen über MCP, und die Einarbeitung. Innerhalb derselben Kategorie sind das meist ein bis zwei Tage pro Person, beim Sprung vom Terminal in den Editor deutlich mehr.",
                },
                {
                  question:
                    "Lohnt sich der Wechsel zu einem offenen Werkzeug allein wegen der Modellfreiheit?",
                  answer:
                    "Nur wenn ihr einen zweiten Anwendungsfall konkret benennen könnt. Wir haben mehrere Teams gesehen, die wegen der Freiheit gewechselt sind und danach über ein Jahr lang dasselbe Modell eingestellt gelassen haben. Ohne konkreten zweiten Fall zahlt ihr die Wechselkosten für eine Option, die ihr nicht zieht.",
                },
              ]}
            >
              <FaqContainer.Headline>
                Häufige Fragen zu Claude Code Alternativen
              </FaqContainer.Headline>
            </FaqContainer>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="gruende">
            Vier Gründe
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="werkzeuge">
            Die Werkzeuge
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="kosten">
            Grund 1: Kosten
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="datenschutz">
            Grund 2: Datenschutz
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="modellbindung">
            Grund 3: Modellbindung
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="arbeitsweise">
            Grund 4: Arbeitsweise
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="wechselkosten">
            Wechselkosten
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="entscheidung">
            Vier Regeln
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="fazit">
            Fazit
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="faq">
            Häufige Fragen
          </BlogLayout.NavigationItem>
        </BlogLayout.Navigation>
      </BlogLayout>
    </>
  );
}
