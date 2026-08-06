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
  CodeBlock,
} from "@/components/blog";
import GeoSummary from "@/components/ui/geo-summary";

export const metaCustom: BlogMeta = {
  slug: "claude-code-plan-mode",
  author: "Max Hänsel",
  date: "2026-08-23",
  image: "/blog/claude-code-plan-mode/hero.png",
  tags: ["ki", "development"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title: "Claude Code Plan Mode: Anleitung, Ablauf und Team-Default",
  description:
    "Plan Mode in Claude Code: die vier Wege hinein, der Genehmigungsfluss, alle sechs Berechtigungsmodi und wie ihr den Modus per settings.json zum Team-Standard macht.",
  openGraph: {
    title: "Claude Code Plan Mode: Anleitung, Ablauf und Team-Default",
    description:
      "Von Shift+Tab bis defaultMode in der settings.json: was Plan Mode technisch macht, wie der Genehmigungsfluss läuft und wann sich das Planen wirklich lohnt.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/claude-code-plan-mode/hero.png",
        width: 1200,
        height: 630,
        alt: "Person als Silhouette vor einem großen Bürofenster im Tageslicht",
      },
    ],
  },
  alternates: {
    canonical: "/blog/claude-code-plan-mode",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          Claude Code Plan Mode: erst den Plan, dann die Änderung
        </BlogHero.Headline>

        <GeoSummary>
          Der Plan Mode ist der Berechtigungsmodus, in dem Claude Code eure
          Codebasis liest und einen Plan schreibt, eure Quelldateien aber nicht
          anfasst, bis ihr zustimmt. Hinein kommt ihr über{" "}
          <code>Shift+Tab</code>, das Präfix <code>/plan</code>, den Start mit{" "}
          <code>claude --permission-mode plan</code> oder dauerhaft über{" "}
          <code>defaultMode</code> in der <code>.claude/settings.json</code>.
          Dieser Beitrag zeigt den kompletten Ablauf, alle sechs
          Berechtigungsmodi im Vergleich, wann sich Planen lohnt und wie ihr
          Plan Mode im Team zum Standard macht.
        </GeoSummary>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>11 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-08-23">23. August 2026</BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/claude-code-plan-mode/hero.png"
          alt="Person als Silhouette vor einem großen Bürofenster im Tageslicht"
        />
      </BlogHero>

      <BlogLayout meta={metaCustom} metadata={metadata}>
        <BlogLayout.Content>
          <div>
            <Typo.Paragraph>
              Es gibt zwei Arten, mit einem Coding-Agenten zu arbeiten. Die eine
              beginnt mit einem Satz wie „bau mir das ein" und endet damit, dass
              man zwanzig Minuten später einen Diff über neun Dateien vor sich
              hat und nicht mehr sagen kann, an welcher Stelle die Sache
              abgebogen ist. Die andere beginnt damit, dass der Agent erst
              einmal nichts tut, außer zu lesen und aufzuschreiben, was er
              vorhat.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Genau das ist der Plan Mode in Claude Code. Er ist kein
              Zusatzwerkzeug und kein Plugin, sondern einer von sechs
              Berechtigungsmodi, und er verschiebt den Moment der Kontrolle
              nach vorn: Statt eine fertige Änderung zu prüfen, prüft ihr einen
              Vorschlag in Prosa. Das ist der eigentliche Grund, warum der
              Modus im Team so viel wert ist. Einen Plan kann auch jemand
              beurteilen, der den Diff nicht liest.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Dieser Beitrag setzt voraus, dass Claude Code bei euch schon
              läuft. Falls nicht, führt unsere{" "}
              <Link
                href="/blog/claude-code-installieren"
                className="text-primary-600 hover:underline"
              >
                Installationsanleitung
              </Link>{" "}
              dorthin, und der Überblick{" "}
              <Link
                href="/blog/was-ist-claude-code"
                className="text-primary-600 hover:underline"
              >
                Was ist Claude Code?
              </Link>{" "}
              ordnet das Werkzeug insgesamt ein.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="was-plan-mode-macht">
              Was Plan Mode technisch macht
            </Typo.H2>
            <Typo.Paragraph>
              Im Plan Mode recherchiert Claude eine Änderung und schlägt sie
              vor, ohne sie vorzunehmen. Es liest Dateien, führt Shell-Befehle
              zum Erkunden aus und schreibt daraus einen Plan, bearbeitet eure
              Quelldateien aber nicht. Bearbeitungen bleiben blockiert, bis ihr
              den Plan genehmigt, und zwar unabhängig davon, wie ihr die
              übrigen Berechtigungen gesetzt habt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Für Genehmigungsaufforderungen gilt derselbe Ablauf wie im
              manuellen Modus, mit einer Ausnahme: Ist der Auto-Modus für euer
              Konto verfügbar und die Einstellung{" "}
              <code>useAutoModeDuringPlan</code> aktiv, was der Standard ist,
              dann winkt ein Klassifizierer lesende Befehle wie Suchen und
              Dateizugriffe ohne Nachfrage durch. Das ist der Punkt, an dem
              Plan Mode angenehm wird: Die Erkundung läuft ohne Unterbrechung,
              die Schreibsperre bleibt trotzdem stehen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Eine ehrliche Einordnung gehört dazu, weil sie erklärt, was ihr
              gelegentlich beobachten werdet. Eine viel gelesene technische
              Analyse hat gezeigt, dass Claude im Plan Mode dieselbe
              Werkzeugliste behält wie sonst und die Beschränkung wesentlich
              über die Systemanweisung durchgesetzt wird, nicht dadurch, dass
              die Schreibwerkzeuge verschwinden. Praktisch heißt das: Die von
              Anthropic dokumentierte Sperre für Bearbeitungen greift, aber der
              Agent formuliert im Plan Mode manchmal so, als wolle er gleich
              loslegen. Das ist kein Fehler, sondern die Bauart. Wer weiß, dass
              der Modus im Kern eine sehr konsequent gesetzte Anweisung ist,
              schreibt seine eigenen Prompts entsprechend deutlich.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-plan-mode/ablauf.png"
              alt="Ablauf im Plan Mode von Erkunden über Plan und Genehmigung bis zur Umsetzung"
              width={1200}
              height={630}
            />
          </div>

          <Separator />

          <div>
            <Typo.H2 id="aktivierung">Vier Wege in den Plan Mode</Typo.H2>
            <Typo.Paragraph>
              Der schnellste Weg ist die Tastatur. <code>Shift+Tab</code>{" "}
              schaltet in laufender Sitzung durch die Modi, ein weiteres{" "}
              <code>Shift+Tab</code> verlässt den Plan Mode wieder, ohne einen
              Plan zu genehmigen. In den Erweiterungen für VS Code und
              JetBrains sowie in der Desktop-App gibt es dafür einen
              Moduswahlschalter.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Soll nur ein einzelner Prompt geplant werden, stellt ihr ihm{" "}
              <code>/plan</code> voran. Das ist der Weg für den Zwischenfall:
              Ihr arbeitet normal, stoßt auf eine Stelle, die euch zu groß
              vorkommt, und wollt für genau diese eine Frage einen Plan sehen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wollt ihr eine Sitzung von vornherein im Plan Mode beginnen,
              startet ihr Claude Code direkt so:
            </Typo.Paragraph>

            <CodeBlock language="bash">{`claude --permission-mode plan`}</CodeBlock>

            <Typo.Paragraph>
              Der vierte Weg ist der interessanteste und kommt weiter unten
              ausführlich: <code>defaultMode</code> in der{" "}
              <code>.claude/settings.json</code> macht den Plan Mode zum
              Standard für ein ganzes Projekt, für alle, die es auschecken.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="genehmigung">
              Was am Ende eines Plans passiert
            </Typo.H2>
            <Typo.Paragraph>
              Ist der Plan fertig, legt Claude ihn vor und fragt, wie es
              weitergehen soll. Fünf Wege stehen zur Wahl: genehmigen und im
              Auto-Modus starten, genehmigen und Bearbeitungen automatisch
              akzeptieren, genehmigen und jede Bearbeitung einzeln prüfen, mit
              Feedback weiterplanen oder den Plan mit Ultraplan im Browser
              verfeinern.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wichtig an dieser Stelle: Die Genehmigung beendet den Plan Mode
              und setzt die Sitzung auf genau den Berechtigungsmodus, den die
              gewählte Option beschreibt. Ihr entscheidet also mit einem
              Tastendruck nicht nur „ja, so machen wir das", sondern auch, wie
              eng ihr die Umsetzung begleiten wollt. Wer den Plan gründlich
              gelesen hat, kann guten Gewissens durchlaufen lassen. Wer ihn nur
              überflogen hat, sollte die dritte Option nehmen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Zwei Handgriffe lohnen sich hier besonders. Mit{" "}
              <code>Ctrl+G</code> öffnet ihr den vorgeschlagenen Plan in eurem
              Standard-Texteditor und bearbeitet ihn direkt, bevor Claude
              weitermacht. Das ist deutlich schneller, als eine Korrektur in
              Prosa zu diktieren, und es ist der Weg, mit dem sich ein zu 80
              Prozent richtiger Plan in einer Minute retten lässt. Und ist die
              Einstellung <code>showClearContextOnPlanAccept</code> aktiv,
              bietet jede Genehmigungsoption zusätzlich an, den Planungskontext
              vorher zu löschen. Dazu gleich mehr.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Nebenbei benennt Claude die Sitzung beim Akzeptieren automatisch
              nach dem Planinhalt, sofern ihr nicht schon mit{" "}
              <code>--name</code> oder <code>/rename</code> einen Namen
              vergeben habt. Klingt nach Kosmetik, ist aber der Unterschied
              zwischen einer Sitzungsliste, in der man etwas wiederfindet, und
              einer, in der man es nicht tut.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="modi">Plan Mode im Gefüge der sechs Modi</Typo.H2>
            <Typo.Paragraph>
              Plan Mode einzeln zu erklären, führt in die Irre. Er ist eine von
              sechs Stufen zwischen voller Kontrolle und voller Autonomie, und
              die Genehmigungsoptionen am Ende eines Plans verweisen direkt auf
              die anderen Stufen. Wer sie nicht kennt, trifft die Entscheidung
              blind.
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Modus</DataTable.HeaderCell>
                  <DataTable.HeaderCell>
                    Läuft ohne Nachfrage
                  </DataTable.HeaderCell>
                  <DataTable.HeaderCell>Wofür</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell>
                    <code>default</code>, in der Oberfläche „Manual"
                  </DataTable.Cell>
                  <DataTable.Cell>nur Lesevorgänge</DataTable.Cell>
                  <DataTable.Cell>
                    Erste Schritte, sensible Arbeiten
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>
                    <code>acceptEdits</code>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Lesen, Dateibearbeitungen, gängige Dateisystembefehle
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Iteration, wenn ihr ohnehin mitlest
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>
                    <code>plan</code>
                  </DataTable.Cell>
                  <DataTable.Cell>nur Lesevorgänge</DataTable.Cell>
                  <DataTable.Cell>
                    Codebasis erkunden, bevor etwas geändert wird
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>
                    <code>auto</code>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    alles, mit Sicherheitsprüfung im Hintergrund
                  </DataTable.Cell>
                  <DataTable.Cell>
                    lange Aufgaben ohne ständige Rückfragen
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>
                    <code>dontAsk</code>
                  </DataTable.Cell>
                  <DataTable.Cell>nur vorab genehmigte Werkzeuge</DataTable.Cell>
                  <DataTable.Cell>abgeriegelte CI und Skripte</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>
                    <code>bypassPermissions</code>
                  </DataTable.Cell>
                  <DataTable.Cell>alles</DataTable.Cell>
                  <DataTable.Cell>
                    nur isolierte Container und VMs
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              Zwei Details, die in fast allen Anleitungen fehlen. Erstens heißt
              der strengste Modus in der Konfiguration <code>default</code>,
              in der Oberfläche und in <code>claude --help</code> aber{" "}
              <strong>Manual</strong>; seit Version 2.1.200 akzeptiert die CLI{" "}
              <code>manual</code> überall als Alias. Zweitens gilt in jedem
              Modus außer <code>bypassPermissions</code>, dass Schreibvorgänge
              in geschützte Pfade nie automatisch genehmigt werden. Der
              Repository-Zustand und die Claude-Konfiguration selbst bleiben
              also auch dann geschützt, wenn ihr im Auto-Modus arbeitet.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-plan-mode/modi.png"
              alt="Die sechs Berechtigungsmodi von Claude Code als Stufen von Kontrolle zu Autonomie"
              width={1200}
              height={630}
            />
          </div>

          <Separator />

          <div>
            <Typo.H2 id="wann">Wann sich Planen lohnt, und wann nicht</Typo.H2>
            <Typo.Paragraph>
              Plan Mode kostet Zeit, bevor er welche spart. Für kleine
              Änderungen ist er schlicht Overhead. Die brauchbarste Faustregel
              lautet: Wenn ihr die Aufgabe in einem Satz vollständig
              beschreiben könnt und wisst, welche Datei betroffen ist, plant
              nicht. Ein Tippfehler in einer Fehlermeldung braucht keinen Plan.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Lohnend wird es in vier Situationen. Erstens bei fremdem Code, in
              den ihr euch selbst erst einlesen müsstet: Der Plan ist dann
              nebenbei die Zusammenfassung, die ihr sowieso gebraucht hättet.
              Zweitens, wenn mehr als eine Handvoll Dateien betroffen ist,
              weil dort die Entscheidungen stecken, die man später teuer
              zurückdreht. Drittens bei architektonischen Weichen, etwa der
              Frage, ob ein neues Modul entsteht oder ein bestehendes wächst.
              Und viertens immer dann, wenn jemand anderes die Änderung
              verantworten muss als der, der sie anstößt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der vierte Fall ist im Mittelstand der häufigste und wird in den
              englischsprachigen Anleitungen praktisch nicht behandelt. Dort
              schreiben Entwickler für Entwickler an der eigenen Codebasis. In
              einem Unternehmen, das gerade anfängt, mit Coding-Agenten zu
              arbeiten, sieht es anders aus: Eine Person führt das Werkzeug
              ein, mehrere andere tragen die Verantwortung für das System, und
              die können einen Diff über neun Dateien nicht bewerten. Einen
              Plan in Prosa können sie bewerten. Genau deshalb ist Plan Mode
              dort weniger eine Produktivitätsfrage als ein
              Freigabemechanismus.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-plan-mode/wann-planen.png"
              alt="Entscheidungshilfe wann Plan Mode sinnvoll ist und wann nicht"
              width={1200}
              height={630}
            />
          </div>

          <Separator />

          <div>
            <Typo.H2 id="kontext">Kontext löschen oder behalten</Typo.H2>
            <Typo.Paragraph>
              Beim Planen liest Claude viel: Dateien, Suchtreffer, Ausgaben von
              Erkundungsbefehlen. All das steht anschließend noch im Kontext,
              wenn die Umsetzung beginnt. Ist{" "}
              <code>showClearContextOnPlanAccept</code> aktiv, bietet euch
              jede Genehmigungsoption an, diesen Planungskontext vorher zu
              löschen und mit dem Plan als einziger Vorgabe zu starten.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Beides hat seine Berechtigung. Für das Löschen spricht, dass der
              Plan dann die unstrittige Anweisung ist und keine halbfertige
              Überlegung aus der Erkundungsphase mehr dagegen steht. Dafür
              muss der Plan alles enthalten, was für die Umsetzung nötig ist,
              also auch die Dateipfade und die Randbedingungen. Für das
              Behalten spricht der Fall, dass die Erkundung Details
              zutage gefördert hat, die im Plan nur verkürzt stehen, etwa eine
              seltsame Altlast in einer Hilfsfunktion.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der pragmatische Umgang: Wenn ihr den Plan mit <code>Ctrl+G</code>{" "}
              ohnehin durchgeht, ergänzt dort die zwei, drei Details, die euch
              wichtig sind, und löscht dann den Kontext. Was in einer Datei
              steht, die Claude beim nächsten Zugriff neu liest, muss nicht im
              Kontext mitgeschleppt werden. Für Vorgaben, die in jedem Lauf
              gelten sollen, ist ohnehin die <code>CLAUDE.md</code> im
              Projekt der richtige Ort und nicht der Sitzungskontext.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="subagents">Planen mit Subagents</Typo.H2>
            <Typo.Paragraph>
              Das Erkunden einer großen Codebasis füllt den Kontext mit
              Dateiinhalten, die im Plan selbst nie auftauchen. Dafür gibt es
              Subagents: Ihr sagt im Prompt schlicht, dass ein Subagent eine
              Frage untersuchen soll, dieser liest in seinem eigenen
              Kontextfenster und meldet nur die Zusammenfassung zurück.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Im Plan Mode ist das die natürliche Arbeitsteilung. Die
              Vorarbeit, also „wie hängt unsere Auftragsverarbeitung
              zusammen", geht an einen Subagent. Der Hauptlauf bekommt das
              Ergebnis und schreibt daraus den Plan. Der Kontext bleibt
              schlank, und das Löschen beim Genehmigen wird zur Formalität,
              weil dort ohnehin kaum Ballast liegt. Wer Claude Code darüber
              hinaus an eigene Systeme anbinden will, findet den Einstieg in{" "}
              <Link
                href="/blog/claude-code-mcp"
                className="text-primary-600 hover:underline"
              >
                Claude Code und MCP
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="team">Plan Mode als Team-Default</Typo.H2>
            <Typo.Paragraph>
              Bis hierhin war Plan Mode eine persönliche Arbeitsweise. Der
              Schritt, der ihn zum Governance-Werkzeug macht, ist eine einzige
              Einstellung. In der <code>.claude/settings.json</code> eines
              Projekts:
            </Typo.Paragraph>

            <CodeBlock language="json">{`{
  "permissions": {
    "defaultMode": "plan"
  }
}`}</CodeBlock>

            <Typo.Paragraph>
              Weil diese Datei im Repository liegt, gilt die Einstellung für
              alle, die das Projekt auschecken. Jede Sitzung startet damit im
              Plan Mode, und wer etwas ändern will, muss vorher einen Plan
              genehmigen. Das ist kein Verbot, sondern eine Voreinstellung:{" "}
              <code>Shift+Tab</code> kommt weiterhin überall heraus. Genau das
              ist der Punkt. Eine Voreinstellung wirkt, ohne dass jemand sie
              durchsetzen muss.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Für Unternehmen, die den Einsatz von KI-Werkzeugen dokumentieren
              müssen, hat das einen zweiten Nutzen. Ein Plan ist ein Artefakt
              in natürlicher Sprache: prüfbar, kommentierbar und, wenn ihr ihn
              mit <code>Ctrl+G</code> in eine Datei zieht, ablegbar. Wer
              nachweisen muss, dass Änderungen an einem produktiven System
              nicht unbesehen von einem Agenten eingespielt werden, hat mit dem
              genehmigten Plan genau diesen Nachweis. Das ersetzt keine
              Freigabeprozesse, aber es füllt sie mit etwas, das man lesen
              kann.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Sinnvolle Ergänzung: Legt in dieselbe{" "}
              <code>.claude/settings.json</code> die Berechtigungsregeln für
              die Werkzeuge, die bei euch ohne Rückfrage laufen dürfen. Dann
              ist der Plan Mode die Grundstellung und die Freigaben sind
              explizit statt gewachsen.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-plan-mode/team-default.png"
              alt="settings.json im Repository setzt den Plan Mode als Standard für alle Sitzungen im Team"
              width={1200}
              height={630}
            />
          </div>

          <Separator />

          <div>
            <Typo.H2 id="fehler">Fünf Fehler, die wir immer wieder sehen</Typo.H2>
            <Typo.Paragraph>
              <strong>Den Plan nur überfliegen und dann durchlaufen lassen.</strong>{" "}
              Das ist der teuerste Fehler, weil er den ganzen Modus entwertet.
              Wenn ihr den Plan nicht lest, spart ihr euch das Planen besser
              ganz und arbeitet mit engerer Begleitung in{" "}
              <code>acceptEdits</code>.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Zu vage fragen.</strong> Ein Plan ist nur so gut wie die
              Aufgabe. „Mach den Import robuster" liefert einen Plan, der
              hübsch aussieht und nichts entscheidet. „Der Import bricht bei
              leeren Pflichtfeldern ab, ich will eine Fehlerzeile pro Datensatz
              statt eines Abbruchs" liefert einen, über den man streiten kann.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Korrekturen diktieren statt tippen.</strong>{" "}
              <code>Ctrl+G</code> ist zwei Tasten weit weg. Drei Sätze im
              Editor zu ändern, ist schneller und eindeutiger, als sie in einer
              Rückfrage zu beschreiben.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Alles planen.</strong> Plan Mode auf jede Kleinigkeit
              anzuwenden, erzeugt Planungsmüdigkeit, und Planungsmüdigkeit
              führt zu Fehler eins. Die Ein-Satz-Regel ist ernst gemeint.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Den Modus persönlich halten.</strong> Solange Plan Mode
              eine Tastenkombination ist, die eine Person kennt, ist er eine
              Gewohnheit. Erst als <code>defaultMode</code> im Repository wird
              er zu etwas, worauf man sich verlassen kann.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="fazit">Fazit</Typo.H2>
            <Typo.Paragraph>
              Plan Mode ist die billigste Kontrolle, die Claude Code anbietet.
              Er kostet ein paar Minuten Lesen und liefert dafür einen
              Prüfpunkt an der Stelle, an der Korrekturen noch nichts kosten.
              Für einzelne Entwickler ist er eine gute Gewohnheit bei größeren
              Aufgaben. Für Unternehmen, die gerade anfangen, Coding-Agenten
              ernsthaft einzusetzen, ist er mehr: der Mechanismus, mit dem sich
              Verantwortung und Ausführung sauber trennen lassen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der pragmatische Einstieg besteht aus zwei Schritten. Arbeitet
              eine Woche lang mit <code>Shift+Tab</code>, immer wenn eine
              Aufgabe mehr als eine Datei betrifft. Wenn sich das bewährt hat,
              schreibt <code>defaultMode</code> in die{" "}
              <code>.claude/settings.json</code> und committet sie. Ab dann
              gilt die Arbeitsweise für alle, ohne dass jemand daran erinnern
              muss.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <FaqContainer
              faqs={[
                {
                  question: "Wie aktiviere ich den Plan Mode in Claude Code?",
                  answer:
                    "Es gibt vier Wege. In einer laufenden Sitzung schaltet Shift+Tab durch die Modi. Für einen einzelnen Prompt stellt ihr /plan voran. Eine neue Sitzung startet ihr mit claude --permission-mode plan direkt im Plan Mode. Und dauerhaft für ein Projekt setzt ihr defaultMode auf plan in der .claude/settings.json.",
                },
                {
                  question: "Kann Claude im Plan Mode wirklich nichts ändern?",
                  answer:
                    "Bearbeitungen bleiben blockiert, bis ihr den Plan genehmigt. Claude liest Dateien und führt Befehle zum Erkunden aus, fasst eure Quelldateien aber nicht an. Technisch behält der Agent dabei dieselbe Werkzeugliste wie sonst, die Beschränkung wird wesentlich über die Systemanweisung durchgesetzt. Deshalb kann es vorkommen, dass Claude im Plan Mode formuliert, als wolle es sofort loslegen, ohne dass es das tut.",
                },
                {
                  question: "Wie verlasse ich den Plan Mode ohne Genehmigung?",
                  answer:
                    "Mit einem erneuten Shift+Tab. Damit wechselt ihr den Modus, ohne den vorgeschlagenen Plan anzunehmen. Um später wieder zu planen, drückt ihr Shift+Tab zurück in den Plan Mode oder stellt dem nächsten Prompt /plan voran.",
                },
                {
                  question: "Was passiert, wenn ich einen Plan genehmige?",
                  answer:
                    "Die Genehmigung beendet den Plan Mode und setzt die Sitzung auf den Berechtigungsmodus, den die gewählte Option beschreibt. Zur Wahl stehen: genehmigen und im Auto-Modus starten, genehmigen und Bearbeitungen akzeptieren, genehmigen und jede Bearbeitung einzeln prüfen, mit Feedback weiterplanen oder mit Ultraplan im Browser verfeinern. Außerdem benennt Claude die Sitzung automatisch nach dem Planinhalt, sofern ihr nicht selbst schon einen Namen vergeben habt.",
                },
                {
                  question: "Kann ich den vorgeschlagenen Plan bearbeiten?",
                  answer:
                    "Ja, mit Ctrl+G. Das öffnet den Plan in eurem Standard-Texteditor, sodass ihr ihn direkt ändern könnt, bevor Claude weitermacht. Das ist der schnellste Weg, einen fast richtigen Plan zu retten, ohne die Korrektur in einer Rückfrage beschreiben zu müssen.",
                },
                {
                  question:
                    "Wie mache ich Plan Mode zum Standard für mein Team?",
                  answer:
                    "Über die .claude/settings.json im Projekt, mit dem Eintrag permissions.defaultMode auf den Wert plan. Weil die Datei im Repository liegt, gilt die Einstellung für alle, die das Projekt auschecken: Jede Sitzung startet im Plan Mode. Es ist eine Voreinstellung, kein Verbot, denn per Shift+Tab kommt weiterhin jeder heraus.",
                },
                {
                  question:
                    "Soll ich den Planungskontext beim Genehmigen löschen?",
                  answer:
                    "Ist showClearContextOnPlanAccept aktiv, bietet jede Genehmigungsoption das an. Löschen lohnt sich, wenn der Plan alles Nötige enthält, weil dann keine halbfertige Überlegung aus der Erkundung gegen den Plan steht. Behalten lohnt sich, wenn die Erkundung Details gefunden hat, die im Plan nur verkürzt stehen. Praktisch: die wichtigen Details mit Ctrl+G in den Plan schreiben und dann löschen.",
                },
                {
                  question: "Welche Berechtigungsmodi gibt es außer plan?",
                  answer:
                    "Fünf weitere: default, in der Oberfläche Manual genannt, erlaubt ohne Nachfrage nur Lesevorgänge. acceptEdits lässt zusätzlich Dateibearbeitungen und gängige Dateisystembefehle zu. auto führt alles mit einer Sicherheitsprüfung im Hintergrund aus. dontAsk erlaubt nur vorab genehmigte Werkzeuge und ist für abgeriegelte CI gedacht. bypassPermissions erlaubt alles und gehört nur in isolierte Container und VMs. In jedem Modus außer bypassPermissions bleiben Schreibvorgänge in geschützte Pfade von der automatischen Genehmigung ausgenommen.",
                },
              ]}
            >
              <FaqContainer.Headline>
                Häufige Fragen zum Plan Mode in Claude Code
              </FaqContainer.Headline>
            </FaqContainer>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="was-plan-mode-macht">
            Was Plan Mode macht
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="aktivierung">
            Vier Wege hinein
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="genehmigung">
            Der Genehmigungsfluss
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="modi">
            Die sechs Modi
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="wann">
            Wann sich Planen lohnt
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="kontext">
            Kontext löschen
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="subagents">
            Planen mit Subagents
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="team">
            Team-Default
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="fehler">
            Typische Fehler
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="fazit">
            Fazit
          </BlogLayout.NavigationItem>
        </BlogLayout.Navigation>
      </BlogLayout>
    </>
  );
}
