import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Link from "next/link";
import Typo from "@/components/ui/typo";
import { BlogImage, Separator, BlogLayout, BlogHero } from "@/components/blog";

export const metaCustom: BlogMeta = {
  slug: "wie-baut-man-ki-agents",
  author: "Max Hänsel",
  date: "2026-05-15",
  image: "/blog/wie-baut-man-ki-agents/hero.png",
  tags: ["ki", "automatisierung", "grosshandel"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title:
    "KI-Agents bauen: Das Anthropic-Framework für den Großhandel | Bluebatch",
  description:
    "Wie baut man eigentlich KI-Agents? Anthropics fünf Workflow-Patterns, der Agent-Loop und eine Use-Case-Matrix für den Großhandel. Ehrlicher Bauplan ohne Buzzwords.",
  openGraph: {
    title: "Wie baut man KI-Agents? Das Anthropic-Framework für den Großhandel",
    description:
      "Workflow oder Agent? Sechs Patterns von Anthropic, sieben Großhandels-Use-Cases und die ehrliche Entscheidungshilfe für Engineering-Teams.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/wie-baut-man-ki-agents/hero.png",
        width: 1200,
        height: 630,
        alt: "Handwerker bauen einen KI-Agent aus Modulen auf einer Werkbank",
      },
    ],
  },
  alternates: {
    canonical: "/blog/wie-baut-man-ki-agents",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          KI-Agents bauen: Das Anthropic-Framework, übersetzt für den Großhandel
        </BlogHero.Headline>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>14 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-05-15">15. Mai 2026</BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/wie-baut-man-ki-agents/hero.png"
          alt="Handwerker bauen einen KI-Agent aus Modulen auf einer Werkbank"
        />
      </BlogHero>

      <BlogLayout>
        <BlogLayout.Content>
          <div>
            <Typo.H2 id="warum-jetzt">
              Warum gerade jetzt jeder über KI-Agents redet
            </Typo.H2>
            <Typo.Paragraph>
              2026 ist das Jahr, in dem aus dem Wort Agent in Pitchdecks endlich
              produktive Systeme werden. Aber zwischen LinkedIn-Demos und einem
              laufenden Agent in deinem ERP liegt ein Graben, der mit
              Hype-Sprache nicht überbrückbar ist. Die meisten Implementierungen
              scheitern nicht an der Technologie, sondern an einem grundlegenden
              Missverständnis, was ein Agent eigentlich ist und wann du gar
              keinen brauchst. Wer den praktischen Weg von der Idee zum
              laufenden Agent sucht, findet ihn in unserem Leitfaden zum{" "}
              <Link href="/blog/ki-agenten-erstellen" className="text-primary-600 hover:underline">
                KI-Agenten erstellen
              </Link>
              .
            </Typo.Paragraph>
            <Typo.Paragraph>
              Genau da setzt das Framework von Anthropic an. Anthropic hat in
              seinem Engineering-Beitrag &quot;Building Effective Agents&quot;
              eine Sprache vorgeschlagen, die in der Industrie aktuell die
              einzige ist, die nicht beim ersten harten Praxiseinsatz
              auseinanderbricht. Sechs konkrete Patterns, eine harte Definition
              von Workflow vs. Agent, vier nicht verhandelbare Engineering-Regeln.
              Klingt trocken. Spart aber sechsstellige Beträge, wenn du es einmal
              verstanden hast.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Dieser Beitrag tut zwei Dinge. Erstens, er übersetzt das
              Anthropic-Framework ohne Buzzword-Filter ins Deutsche. Zweitens, er
              mappt jeden Pattern auf einen konkreten Großhandelsprozess, damit
              du nach dem Lesen sagen kannst, welche deiner heutigen Probleme ein
              Workflow lösen würde und welche tatsächlich einen Agent
              rechtfertigen. Wenn du danach noch der Meinung bist, dein
              Bestelleingang sei ein Agent-Problem, hast du wenigstens einen
              sauberen Bauplan.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="workflow-vs-agent">
              Workflow vs. Agent: die harte Definition
            </Typo.H2>
            <Typo.Paragraph>
              Anthropic zieht den Strich an einer ungewöhnlichen Stelle, und
              genau dieser Strich ist der ganze Trick. Ein Workflow ist ein
              System, in dem LLM und Tools über vordefinierte Code-Pfade
              orchestriert werden. Du kennst die Schritte vorher. A geht nach B,
              B geht nach C. Das LLM ist eine Komponente in deiner Pipeline,
              kein Dirigent.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Ein Agent ist ein System, in dem das LLM seinen eigenen Prozess
              dynamisch in einer Schleife steuert. Es entscheidet selbst,
              welches Tool als nächstes drankommt, wann es aufhört und ob das
              Ergebnis gut genug ist. Du gibst ihm ein Ziel, nicht eine
              Schrittfolge.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/wie-baut-man-ki-agents/01-evolution.png"
              alt="Evolution vom Einzel-LLM über Workflow zum Agent bis zur offenen Zukunft"
              width={1200}
              height={675}
            />

            <Typo.H3>Warum diese Trennung wichtig ist</Typo.H3>
            <Typo.Paragraph>
              Vier Konsequenzen, die du sofort spürst, sobald du den Unterschied
              ignorierst:
            </Typo.Paragraph>
            <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
              <li>
                <strong>Kosten:</strong> Ein Agent kann auf eine einzige Anfrage
                hin dreißig LLM-Calls aneinanderreihen. Ein Workflow weiß
                vorher, was kommt.
              </li>
              <li>
                <strong>Debuggability:</strong> Bei einem Workflow weißt du, an
                welchem Schritt es geknallt hat. Bei einem Agent musst du den
                gesamten Reasoning-Trace lesen, manchmal auf gut Glück.
              </li>
              <li>
                <strong>Vorhersagbarkeit:</strong> Workflows tun jedes Mal das
                Gleiche. Agents tun bei nominell identischem Input mal das eine,
                mal das andere.
              </li>
              <li>
                <strong>Compliance:</strong> Auditoren wollen wissen, was
                passiert ist. &quot;Das LLM hat sich entschieden&quot; ist keine
                Antwort.
              </li>
            </ul>

            <Typo.H3>Die einzige Faustregel, die du brauchst</Typo.H3>
            <Typo.Paragraph>
              Wenn du den Ablauf auf einem Whiteboard skizzieren kannst, baue
              einen Workflow. Wenn der Ablauf vom Input abhängt und du keine
              sinnvolle Skizze hinbekommst, ohne in Wenn-Dann-Bäume zu verfallen,
              baue einen Agent.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Das klingt simpel und ist es auch. Der Grund, warum die meisten
              Teams trotzdem in die falsche Richtung laufen, ist FOMO. Agent
              klingt nach 2026, Workflow nach 2018. Das ist Buzzword-Trauma,
              kein Engineering-Argument.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="fuenf-patterns">
              Die fünf Workflow-Patterns von Anthropic
            </Typo.H2>
            <Typo.Paragraph>
              Anthropic argumentiert, dass fünf Patterns bereits 80 Prozent der
              realen Anwendungsfälle abdecken, bevor du überhaupt einen Agent
              brauchst. Diese Patterns sind keine theoretischen Konstrukte. Sie
              sind das, was sich bei Tausenden von Implementierungen als robust
              herausgestellt hat.
            </Typo.Paragraph>

            <Typo.H3>1. Prompt Chaining</Typo.H3>
            <Typo.Paragraph>
              Du zerlegst eine Aufgabe in eine Sequenz von LLM-Calls, bei der
              jeder Output zum Input des nächsten Calls wird. Klassisches
              Beispiel: ein Mail-Entwurf wird in einem ersten Call geschrieben,
              in einem zweiten gegen Stil und Compliance geprüft, in einem
              dritten in HTML gepackt. Drei Schritte, jeder mit einem klaren
              Auftrag.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wann du das nimmst: wenn die Aufgabe sich sauber in unabhängige
              Subaufgaben zerlegen lässt und jede Stufe von der vorherigen
              profitiert. Wann nicht: wenn die Subaufgaben parallel laufen
              könnten, dann nimm Parallelization.
            </Typo.Paragraph>

            <Typo.H3>2. Routing</Typo.H3>
            <Typo.Paragraph>
              Ein Klassifizierer-LLM liest den Input und entscheidet, an welchen
              spezialisierten Downstream-Prompt es weitergeht. Eine Mail mit
              &quot;Rechnung falsch&quot; landet beim Billing-Prompt, eine mit
              &quot;Bug&quot; beim Tech-Support-Prompt, eine mit
              &quot;Kündigung&quot; bei der Retention-Pipeline.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wann du das nimmst: wenn du sehr unterschiedliche Eingaben hast,
              die je eigene Spezialprompts brauchen, und ein einziger generischer
              Prompt schlechter wäre als spezialisierte. Bonus: du kannst pro
              Klasse Modelle unterschiedlicher Größe einsetzen.
            </Typo.Paragraph>

            <Typo.H3>3. Parallelization</Typo.H3>
            <Typo.Paragraph>
              Anthropic unterscheidet zwei Varianten. Sectioning zerlegt eine
              große Aufgabe in unabhängige Sub-Tasks, die parallel laufen.
              Beispiel: fünf Kapitel eines Berichts gleichzeitig schreiben statt
              nacheinander. Schneller und oft besser, weil jeder Call nur auf
              seinen Teil fokussiert ist.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Voting lässt denselben Prompt drei oder fünf Mal laufen und nutzt
              einen Judge-LLM, der die beste Antwort wählt. Klingt
              verschwenderisch, ist aber bei kritischen Entscheidungen die
              Differenz zwischen 80 und 98 Prozent Trefferquote. Klassiker bei
              OCR und Zahlenextraktion.
            </Typo.Paragraph>

            <Typo.H3>4. Orchestrator-Workers</Typo.H3>
            <Typo.Paragraph>
              Ein Lead-Agent zerlegt eine komplexe Aufgabe, delegiert die Teile
              an Worker-LLMs und synthetisiert deren Ergebnisse zu einer Antwort.
              Das klingt nach Agent-Pattern und ist es im Lead auch, aber die
              Worker selbst sind oft simple, spezialisierte Prompts mit klaren
              Aufträgen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wann du das nimmst: wenn du nicht vorher weißt, wie viele Sub-Tasks
              anfallen werden. Beispiel: eine eingehende Reklamation kann zwei
              oder zwölf Lieferpositionen betreffen, du weißt es erst nach dem
              Parsen.
            </Typo.Paragraph>

            <Typo.H3>5. Evaluator-Optimizer</Typo.H3>
            <Typo.Paragraph>
              Ein LLM generiert eine Antwort. Ein zweites bewertet sie. Beim
              Nicht-Bestanden geht es in die Schleife: der Generator bekommt das
              Feedback und schreibt neu. Bis bestanden oder Reißleine.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wann du das nimmst: wenn es einen objektivierbaren Quality-Check
              gibt. Brand-Voice-Compliance, gesetzliche Pflichtangaben,
              Übersetzungsqualität. Wann nicht: wenn der Critic genauso unsicher
              ist wie der Generator. Dann kreisen beide ratlos.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Faustregel über alle fünf:</strong> Starte mit dem
              einfachsten Pattern, das deinen Anwendungsfall abdeckt. Wenn ein
              Prompt reicht, nimm ein Prompt. Wenn eine Sequenz reicht, nimm
              Chaining. Wenn du erst bei den späteren Patterns landen müsstest,
              frage dich noch einmal, ob du es wirklich brauchst.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="agent-loop">Der autonome Agent-Loop</Typo.H2>
            <Typo.Paragraph>
              Wenn du nach den fünf Workflow-Patterns immer noch keinen sauberen
              Bauplan hast, bist du im Agent-Territorium gelandet. Der autonome
              Loop ist der Ort, an dem ein System komplexe Aufgaben übernimmt,
              deren Schrittfolge sich erst zur Laufzeit entscheidet.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/wie-baut-man-ki-agents/02-context-window.png"
              alt="Loop-Diagramm Mensch zu LLM-Aufruf zu Umwelt mit Aktion und Feedback"
              width={1200}
              height={675}
            />

            <Typo.H3>Die Schleife in vier Schritten</Typo.H3>
            <Typo.Paragraph>
              Anthropic beschreibt den Loop als ein simples, fast banales
              Konstrukt:
            </Typo.Paragraph>
            <ol className="list-decimal pl-6 space-y-2 my-4 text-gray-700">
              <li>
                <strong>Plan:</strong> Das LLM überlegt, was als Nächstes zu tun
                ist.
              </li>
              <li>
                <strong>Tool nutzen:</strong> Es ruft ein konkretes Werkzeug auf,
                das mit der Außenwelt spricht (ERP-Lesezugriff, Web-Suche,
                Datei-Lesen).
              </li>
              <li>
                <strong>Ergebnis beobachten:</strong> Das Ergebnis kommt zurück,
                idealerweise inklusive eindeutiger Erfolgs- oder Fehlersignale.
              </li>
              <li>
                <strong>Neu planen:</strong> Auf Basis des Beobachteten
                entscheidet das LLM, ob das Ziel erreicht ist oder ein weiterer
                Tool-Aufruf nötig wird.
              </li>
            </ol>
            <Typo.Paragraph>
              Repeat bis Stopp-Bedingung. Mehr ist da formal nicht.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/wie-baut-man-ki-agents/03-while-loop.png"
              alt="Isometrischer Agent-Loop mit Brain Tool Beobachten Re-Plan"
              width={1200}
              height={675}
            />

            <Typo.H3>Ground Truth ist die Lebensader</Typo.H3>
            <Typo.Paragraph>
              Der Punkt, an dem 90 Prozent der Agent-Implementierungen
              scheitern, ist nicht die Loop-Mechanik, sondern die Frage: woher
              weiß der Agent, ob seine letzte Aktion funktioniert hat?
            </Typo.Paragraph>
            <Typo.Paragraph>
              Anthropic nennt das Ground Truth. Ein echter Code-Compiler, der
              Fehler in Zeile 23 zurückgibt. Ein Datenbank-Query, der wirklich
              zwölf Zeilen liefert oder eine echte Constraint-Exception wirft.
              Ein Lieferanten-API, das mit 404 antwortet, wenn die Artikelnummer
              ungültig ist.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Was passiert, wenn Ground Truth fehlt: der Agent halluziniert sich
              selbst in eine plausibel klingende, aber falsche Lösung. Er
              bestätigt seine eigene Annahme, weil ihn niemand widerlegt.
              Anthropic hat dafür ein hartes Bild: ein Agent ohne Ground Truth
              ist eine sehr eloquente Endlosschleife.
            </Typo.Paragraph>

            <Typo.H3>Wann der Loop wirklich sinnvoll ist</Typo.H3>
            <Typo.Paragraph>
              Drei Voraussetzungen müssen zusammenkommen, sonst ist der
              Agent-Loop die falsche Wahl:
            </Typo.Paragraph>
            <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
              <li>
                <strong>Hohe Variabilität des Pfads:</strong> Du kannst die
                Schrittfolge nicht vorher festschreiben, weil sie vom
                Zwischenergebnis abhängt.
              </li>
              <li>
                <strong>Klare Stopp-Bedingung:</strong> Es gibt ein erkennbares
                Fertig (Tests grün, Produkt gefunden, Reklamation gelöst).
              </li>
              <li>
                <strong>Verfügbare Ground Truth:</strong> Die Umgebung kann
                ehrliches Feedback geben, nicht nur Alles okay als Default.
              </li>
            </ul>
            <Typo.Paragraph>
              Fehlt eine dieser drei, baust du einen Workflow. Mit Patterns aus
              dem vorherigen Kapitel. Ohne Agent. Ohne Loop.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="best-practices">
              Vier Engineering-Regeln, die nicht verhandelbar sind
            </Typo.H2>
            <Typo.Paragraph>
              Anthropic schließt sein Framework mit vier Punkten ab, die wie
              Plattitüden klingen, aber in der Praxis den Unterschied zwischen
              einem stabilen System und einer Demo-Ruine ausmachen. Wer sie
              ignoriert, baut entweder zu kompliziert oder zu fragil.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/wie-baut-man-ki-agents/05-core-ideas.png"
              alt="Drei Kernprinzipien: Restriktion Einfachheit Empathie"
              width={1200}
              height={675}
            />

            <Typo.H3>1. Halte es einfach</Typo.H3>
            <Typo.Paragraph>
              Starte mit einem einzigen Prompt. Einem. Erst wenn du einen
              konkreten Schmerzpunkt benennen kannst, das Modell verliert die
              Reihenfolge, die Klassifizierung ist falsch wenn beides
              drinsteht, die Bewertung schwankt zu stark, baust du ein Pattern
              dazu.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die Versuchung, gleich mit einem Orchestrator-Worker-Setup zu
              starten, weil es nach echtem Engineering aussieht, ist groß. Sie
              ist trotzdem fast immer falsch. Jeder zusätzliche Pattern bringt
              eigene Fehlerquellen, Latenz und Debugging-Aufwand. Wenn ein
              Prompt ausreicht, nimm einen Prompt.
            </Typo.Paragraph>

            <Typo.H3>2. Poka-Yoke deine Tools</Typo.H3>
            <Typo.Paragraph>
              Poka-Yoke ist ein Begriff aus dem Toyota-Produktionssystem. Er
              bedeutet Mistake-Proofing: gestalte ein Werkzeug so, dass es
              schwer ist, es falsch zu benutzen. USB-C statt USB-A. Ein Stecker,
              der nur in eine Richtung passt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Für LLM-Tools heißt das: klare Funktionsnamen ohne Doppeldeutigkeit,
              streng typisierte Schemas, sinnvolle Default-Werte und vor allem
              Fehler, die erklären, was schiefgegangen ist. Wenn dein
              bestellung_anlegen-Tool bei fehlender Kundennummer einfach null
              zurückgibt, hast du verloren. Wenn es einen MissingField-Fehler
              wirft, hat das Modell eine Chance, sich zu korrigieren.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/wie-baut-man-ki-agents/06-checklist-decision.png"
              alt="Checkliste Workflow oder Agent mit vier Filterfragen"
              width={1200}
              height={675}
            />

            <Typo.H3>3. Transparenz statt Black Box</Typo.H3>
            <Typo.Paragraph>
              Verstecke nie die Gedanken des Agents. Jeder Reasoning-Schritt,
              jeder Tool-Call mit seinen Parametern, jedes Ergebnis muss geloggt
              sein, durchsuchbar und nachvollziehbar. Sonst kannst du nicht
              debuggen, warum der Agent gestern eine andere Entscheidung
              getroffen hat als heute.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Praktisch heißt das, du brauchst von Tag eins ein
              Observability-Setup: Traces pro Anfrage, strukturierte Logs der
              Tool-Aufrufe, Versionierung der Prompts. Ohne diese Basis ist jeder
              Agent in Produktion ein Lotteriespiel.
            </Typo.Paragraph>

            <Typo.H3>4. Human-in-the-Loop bei riskanten Aktionen</Typo.H3>
            <Typo.Paragraph>
              Lass den Agent nicht alleine eine Mail an einen Kunden rausschicken.
              Lass ihn nicht alleine eine Datenbank-Zeile löschen. Lass ihn nicht
              alleine eine Bestellung ans ERP übergeben.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Bei jeder Aktion, deren Reversibilität fragwürdig ist oder deren
              Wirkung außerhalb deines Sandkastens liegt, muss der Agent stoppen
              und freigeben lassen. Das ist keine Schwäche, das ist
              Produkt-Engineering. Anthropic formuliert es so: Reversibel oder
              Mensch.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="coding-killer-app">
              Coding ist die Killer-App. Warum?
            </Typo.H2>
            <Typo.Paragraph>
              Es gibt einen guten Grund, warum die meisten erfolgreichen
              Agent-Implementierungen 2026 im Coding-Umfeld zu finden sind, nicht
              im Marketing oder im Vertrieb. Coding ist die Domäne, in der die
              drei Bedingungen für einen funktionierenden Agent perfekt
              zusammenkommen.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/wie-baut-man-ki-agents/04-three-domains.png"
              alt="Drei Agent-Domänen: Coding Computer Suche im Vergleich"
              width={1200}
              height={675}
            />

            <Typo.H3>Drei Eigenschaften, die Coding besonders machen</Typo.H3>
            <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
              <li>
                <strong>Die Umgebung liefert eindeutige Signale.</strong> Ein
                Compiler sagt &quot;Syntaxfehler in Zeile 17&quot; oder &quot;Build
                erfolgreich&quot;. Eine Testsuite sagt &quot;12 Tests grün, 1
                rot&quot;. Das ist Ground Truth in Reinkultur.
              </li>
              <li>
                <strong>Der State ist in Text serialisierbar.</strong> Code ist
                Text. Logs sind Text. Diffs sind Text. Ein LLM kann den kompletten
                Zustand seines Projekts lesen, ohne dass etwas in Bilder, Video
                oder analoge Welt übersetzt werden müsste.
              </li>
              <li>
                <strong>Iteration bis Grün ist nativ.</strong> Der Agent kann
                hundert Mal versuchen, einen Bug zu fixen. Solange am Ende die
                Tests grün sind, ist die Aufgabe erledigt. Niemand muss bewerten,
                ob es schön genug gemacht wurde.
              </li>
            </ul>
            <Typo.Paragraph>
              Anthropic nennt das den Tests-grün-Effekt. Coding hat ein
              eingebautes Pass/Fail-Signal, das in den meisten anderen Domänen
              erst aufwendig konstruiert werden müsste.
            </Typo.Paragraph>

            <Typo.H3>Was das für andere Domänen heißt</Typo.H3>
            <Typo.Paragraph>
              Die spannende Frage ist nicht warum funktioniert Coding so gut,
              sondern wie reproduziere ich diese drei Eigenschaften in meiner
              Domäne. Wenn du es schaffst, in deinem Prozess ein klares
              Pass/Fail-Signal zu definieren, einen serialisierbaren Zustand zu
              finden und Iterationen ohne menschliches Eingreifen zu erlauben,
              hast du dort dieselben Bedingungen wie beim Coding.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Genau das ist die Brücke ins nächste Kapitel: was ist im Großhandel
              das Äquivalent zur grünen Testsuite? Welche Prozesse haben dieses
              Pass/Fail-Signal eingebaut, welche nicht? Wo musst du die Ground
              Truth selbst bauen, bevor ein Agent überhaupt eine Chance hat?
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="grosshandel-matrix">
              Agents im Großhandel: die Use-Case-Matrix
            </Typo.H2>
            <Typo.Paragraph>
              Jetzt der eigentliche Praxisteil. Die sechs Patterns von Anthropic,
              jeweils auf einen typischen Großhandelsprozess gemappt, mit klarer
              Aussage darüber, welche Ground Truth den Agent erst überhaupt
              arbeitsfähig macht.
            </Typo.Paragraph>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-300 bg-gray-50">
                    <th className="text-left p-3 font-semibold">Pattern</th>
                    <th className="text-left p-3 font-semibold">
                      Großhandels-Use-Case
                    </th>
                    <th className="text-left p-3 font-semibold">
                      Konkretes Beispiel
                    </th>
                    <th className="text-left p-3 font-semibold">Ground Truth</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Prompt Chaining</td>
                    <td className="p-3">Angebot aus Anfrage erzeugen</td>
                    <td className="p-3">
                      Mail-Klassifizierung → Preis-Lookup im ERP → Angebotstext
                      → PDF-Render
                    </td>
                    <td className="p-3">Angebot trifft Marge und Lieferzeit</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Routing</td>
                    <td className="p-3">Mail-Triage im Vertriebspostfach</td>
                    <td className="p-3">
                      Bestellung vs. Reklamation vs. Lieferanfrage →
                      spezialisiertes Folge-Prompt
                    </td>
                    <td className="p-3">
                      Vorgang landet beim richtigen Sachbearbeiter
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">
                      Parallelization (Sectioning)
                    </td>
                    <td className="p-3">Lieferanten-Stammdaten anreichern</td>
                    <td className="p-3">
                      USt-ID, Adresse, Branche, Bonität parallel ziehen
                    </td>
                    <td className="p-3">Felder gegen externe Quellen validieren</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Parallelization (Voting)</td>
                    <td className="p-3">OCR auf Eingangsrechnungen</td>
                    <td className="p-3">
                      Drei OCR-Passes, Judge entscheidet bei Konflikt
                    </td>
                    <td className="p-3">
                      Rechnungssumme passt zur Bestellung
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Orchestrator-Workers</td>
                    <td className="p-3">Multi-Channel-Bestelleingang</td>
                    <td className="p-3">
                      Lead verteilt ERP-Check, Verfügbarkeit, Bonität,
                      Versandweg auf Worker
                    </td>
                    <td className="p-3">Auftrag steht buchungsbereit im ERP</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3 font-medium">Evaluator-Optimizer</td>
                    <td className="p-3">PIM-Produktbeschreibungen</td>
                    <td className="p-3">
                      Generator schreibt, Critic prüft Brand-Voice und
                      Pflichtangaben, Loop bis Pass
                    </td>
                    <td className="p-3">Text besteht Compliance-Checkliste</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Autonomer Agent-Loop</td>
                    <td className="p-3">Sonderteil-Recherche, Reklamation</td>
                    <td className="p-3">
                      Agent iteriert über PIM, ERP, Lieferanten-Portale bis
                      Treffer
                    </td>
                    <td className="p-3">Trefferquote im Retrospektiv-Audit</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Typo.H3>Drei Use-Cases zum Mitdenken</Typo.H3>

            <Typo.H3>Angebotserstellung als Prompt Chaining</Typo.H3>
            <Typo.Paragraph>
              Eine Kundenanfrage kommt per Mail rein. Schritt eins
              klassifiziert, ob es eine Angebotsanfrage ist und welche
              Artikelnummern erwähnt sind. Schritt zwei holt die aktuellen
              Preise und Lieferzeiten aus dem ERP. Schritt drei formuliert den
              Angebotstext im euren Stil. Schritt vier rendert das PDF und legt
              es im DMS ab. Vier saubere LLM-Calls in Reihe, kein Loop nötig.
              Ground Truth: das System validiert am Ende, dass Marge und
              Lieferzeit innerhalb der freigegebenen Range liegen, sonst geht es
              in die Freigabe-Schleife. Mehr dazu in unserem Artikel zur{" "}
              <Link
                href="/ki-angebote"
                className="text-primary-600 hover:underline"
              >
                automatischen Angebotserstellung im Großhandel
              </Link>
              .
            </Typo.Paragraph>

            <Typo.H3>OCR-Belegerkennung als Voting</Typo.H3>
            <Typo.Paragraph>
              Eingangsrechnungen kommen als PDFs rein, oft schlecht gescannt.
              Ein einziger OCR-Pass liegt bei 80 bis 85 Prozent Trefferquote auf
              den kritischen Feldern (Betrag, USt-ID, Lieferantennummer). Drei
              parallele Passes mit unterschiedlichen Modellen plus ein
              Judge-LLM, der bei Konflikten die plausibelste Variante wählt,
              schiebt die Genauigkeit über 97 Prozent. Ground Truth: am Ende
              muss die Rechnungssumme exakt zur dazugehörigen Bestellung passen,
              sonst wird geflaggt.
            </Typo.Paragraph>

            <Typo.H3>Bestelleingang als Orchestrator-Workers</Typo.H3>
            <Typo.Paragraph>
              Eine Bestellung kommt per EDI, Mail oder Telefonnotiz rein. Ein
              Lead-Prompt parst sie und entscheidet, was alles geprüft werden
              muss: Artikelverfügbarkeit, Kundenbonität, passender Versandweg,
              Sonderkonditionen. Diese Checks laufen parallel als Worker-Prompts.
              Der Lead synthetisiert die Ergebnisse zu einer Buchungs-Empfehlung.
              Wenn alle vier Worker grün geben, wandert die Bestellung
              automatisch ins ERP. Wenn einer rot meldet, kommt sie in die Inbox
              der Sachbearbeitung mit klarer Begründung. Vertieft in unserem
              Beitrag{" "}
              <Link
                href="/bestellerfassung-automatisieren"
                className="text-primary-600 hover:underline"
              >
                Bestellungen erfassen automatisieren
              </Link>
              .
            </Typo.Paragraph>

            <Typo.H3>Das Anti-Pattern, vor dem du dich hüten musst</Typo.H3>
            <Typo.Paragraph>
              Der häufigste Fehler in Großhandelsprojekten: Wir bauen einen
              Universal-Agent, der alles im Bestelleingang macht. Das klingt
              elegant, ist aber fast immer der falsche Bauplan. Du verlierst die
              Debuggability, weil jeder Fehler in einem dreißig-Schritte-Loop
              versickert. Du verlierst die Kosten-Kontrolle, weil ein Agent gerne
              zehn Mal nachfragt, wo ein Workflow zwei Calls braucht. Und du
              verlierst die Compliance, weil deine Auditoren keine Antwort auf
              warum wurde diese Bestellung gebucht bekommen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die richtige Antwort ist fast immer eine Komposition: für die
              meisten Schritte ein Workflow-Pattern, an einer oder zwei klar
              abgegrenzten Stellen ein kleiner Agent-Loop. Nicht ein großer
              Agent für alles.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="fazit">
              Fazit und drei Fragen, die du vor dem Bauen beantworten musst
            </Typo.H2>
            <Typo.Paragraph>
              Wer das Anthropic-Framework einmal verinnerlicht hat, baut anders.
              Statt wir machen einen Agent steht am Anfang die Frage, ob die
              Aufgabe überhaupt einen Agent rechtfertigt oder ob ein simples
              Pattern reicht. Statt schau wie smart das System ist steht am
              Ende die Frage, ob es nachvollziehbar, debugbar und stoppbar ist.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/wie-baut-man-ki-agents/07-open-questions.png"
              alt="Drei offene Fragen Budget Self-Evolving Tools Multi-Agent"
              width={1200}
              height={675}
            />

            <Typo.H3>Drei Take-aways auf einen Bierdeckel</Typo.H3>
            <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
              <li>
                <strong>Workflow zuerst.</strong> Bevor du einen Agent baust,
                hast du fünf einfachere Patterns. Greife sie der Reihe nach
                durch.
              </li>
              <li>
                <strong>Pattern statt Magic.</strong> Jeder funktionierende Agent
                lässt sich auf ein bekanntes Muster zurückführen. Wer den
                Pattern-Namen nicht nennen kann, hat den Bauplan nicht
                verstanden.
              </li>
              <li>
                <strong>Ground Truth ist Pflicht.</strong> Ohne ehrliches
                Feedback aus der Umgebung halluziniert sich jeder Agent in eine
                plausible, aber falsche Lösung.
              </li>
            </ul>

            <Typo.H3>Selbst-Test vor dem ersten Sprint</Typo.H3>
            <Typo.Paragraph>
              Drei Fragen, die du vor dem ersten Code-Commit beantworten können
              musst. Wenn eine davon nein oder unklar ist, gehe zurück ans
              Whiteboard.
            </Typo.Paragraph>
            <ol className="list-decimal pl-6 space-y-2 my-4 text-gray-700">
              <li>
                Kannst du den gewünschten Ablauf auf einem A4-Blatt skizzieren?
                Wenn ja, baue einen Workflow.
              </li>
              <li>
                Hast du eine eindeutige Stopp-Bedingung, die nicht der Mensch
                sagt fertig lautet?
              </li>
              <li>
                Liefert die Umgebung ein Pass/Fail-Signal, das nicht das Modell
                selbst erzeugt?
              </li>
            </ol>
            <Typo.Paragraph>
              Wer alle drei mit ja beantwortet, hat einen Agent-Bauplan. Wer
              nicht, hat einen Workflow-Bauplan. Beides ist okay. Nur das
              Vermischen ist teuer.
            </Typo.Paragraph>

            <Typo.H3>Wir helfen beim Mappen</Typo.H3>
            <Typo.Paragraph>
              Du hast einen konkreten Prozess im Großhandel, bei dem du nicht
              sicher bist, ob er ein Workflow oder ein Agent werden soll? 30
              Minuten Erstgespräch, wir nehmen das Pattern auseinander, du
              nimmst eine begründete Empfehlung mit, ohne Verkaufsdruck.{" "}
              <Link
                href="/contact"
                className="text-primary-600 hover:underline"
              >
                Einfach Termin buchen
              </Link>{" "}
              oder weiter lesen in unserem Beitrag zu{" "}
              <Link
                href="/blog/agentic-ai-im-grosshandel"
                className="text-primary-600 hover:underline"
              >
                Agentic AI im Großhandel
              </Link>
              .
            </Typo.Paragraph>
          </div>
        </BlogLayout.Content>
      </BlogLayout>
    </>
  );
}
