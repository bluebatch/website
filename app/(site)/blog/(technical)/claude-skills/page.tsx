import type { Metadata } from "next";
import type { ReactNode } from "react";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Link from "next/link";
import Typo from "@/components/ui/typo";
import GeoSummary from "@/components/ui/geo-summary";
import DataTable from "@/components/ui/data-table";
import { FaqContainer } from "@/components/ui/faqs";
import {
  BlogImage,
  CodeBlock,
  Separator,
  BlogLayout,
  BlogHero,
} from "@/components/blog";

export const metaCustom: BlogMeta = {
  slug: "claude-skills",
  author: "Max Hänsel",
  date: "2026-11-25",
  image: "/blog/claude-skills/claude-skills-karteikasten.jpg",
  tags: ["ki", "automatisierung", "security"] as BlogTagId[],
  publish: true,
};

const description =
  "Claude Skills erklärt: was ein Skill ist, wie Sie Skills erstellen, warum fremde Skills riskant sind und wie Unternehmen sie zentral verteilen.";

export const metadata: Metadata = {
  title: "Claude Skills: erstellen, nutzen, sicher verteilen | Bluebatch",
  description,
  openGraph: {
    title:
      "Claude Skills: Warum Anthropic Skills statt Agenten baut und wie Sie das im Unternehmen nutzen",
    description,
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/claude-skills/claude-skills-karteikasten.jpg",
        width: 1200,
        height: 675,
        alt: "Offene Schublade mit farbigen Karteireitern in einem hellen Büro",
      },
    ],
  },
  alternates: {
    canonical: "/blog/claude-skills",
  },
};

const linkClass = "text-primary-600 hover:underline";

function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className={linkClass}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

const SRC = {
  video: "https://www.youtube.com/watch?v=IMSYKloMFrE",
  vortrag: "https://www.youtube.com/watch?v=CEvIs9y1uog",
  businessInsider:
    "https://www.aol.com/articles/anthropic-researchers-industry-stop-building-072858045.html",
  skillsStattAgenten:
    "https://claude.com/blog/building-agents-with-skills-equipping-agents-for-specialized-work",
  start:
    "https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills",
  stiftung:
    "https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation",
  eigeneSkills:
    "https://support.claude.com/en/articles/12512198-use-custom-skills",
  orgSkills:
    "https://support.claude.com/en/articles/13119606-provision-and-manage-skills-for-your-organization",
  verzeichnis: "https://claude.com/blog/organization-skills-and-directory",
  drittanbieter:
    "https://claude.com/docs/third-party/claude-desktop/extensions",
  skillsbench: "https://arxiv.org/abs/2602.12670",
  snyk: "https://snyk.io/blog/toxicskills-malicious-ai-agent-skills-clawhub/",
  yc: "https://www.ycombinator.com/library/UN-boris-cherny-we-cut-80-of-claude-code-s-prompt",
  serverUs:
    "https://privacy.claude.com/en/articles/7996890-where-are-your-servers-located-do-you-host-your-models-on-eu-servers",
};

// Tabellen auf dem Handy als Karten, wie auf /blog/claude-updates.
const zeileMobil = "max-md:block max-md:py-3";
const zelleMobil = "max-md:block max-md:px-4 max-md:py-1";

function MobilLabel({ children }: { children: string }) {
  return (
    <span className="block text-xs font-medium text-gray-500 md:hidden">
      {children}
    </span>
  );
}

const STUFEN = [
  {
    name: "1. Skill Creator",
    idee: "Claude schreibt den Skill nach den Vorgaben von Anthropic",
    check: "Guter Start für die Form. Der Inhalt muss von Ihnen kommen.",
  },
  {
    name: "2. Einmal machen, dann speichern",
    idee: "Aufgabe mit Claude erledigen, korrigieren, Sitzung als Skill sichern",
    check:
      "Der beste Weg. Ihre Korrekturen sind das, was Claude nicht wissen konnte.",
  },
  {
    name: "3. Bildschirm aufzeichnen",
    idee: "Aufgabe vormachen und dabei erklären",
    check: "Nur in Cowork auf dem Mac, nicht auf Windows, nicht in Enterprise.",
  },
  {
    name: "4. Skill-Arten",
    idee: "Datenbank-, Artefakt- und Definitions-Skills",
    check:
      "Kundendaten gehören nicht als Dateien in einen Skill, sondern hinter einen Connector.",
  },
  {
    name: "5. Fertige Skills",
    idee: "Verzeichnisse wie skills.sh nutzen",
    check:
      "Vorsicht: In 36,8 Prozent von 3.984 geprüften Skills fand Snyk mindestens eine Sicherheitslücke.",
  },
  {
    name: "6. Ohne Skills testen",
    idee: "Prüfen, ob ein Skill das Modell bremst",
    check:
      "Richtig. Anthropic hat selbst 80 Prozent des Systemprompts von Claude Code gestrichen.",
  },
];

const BAUSTEINE = [
  {
    name: "Skill",
    was: "Anleitung in einem Ordner",
    wofuer: "Wie eine Aufgabe bei Ihnen erledigt wird",
  },
  {
    name: "Connector (MCP-Server)",
    was: "Zugang zu einem System, mit Anmeldung und Rechten",
    wofuer: "Womit Claude arbeitet: Postfach, ERP, Laufwerk",
  },
  {
    name: "Plugin",
    was: "Paket aus Skills und Connectors",
    wofuer: "Wie beides auf die Rechner kommt",
  },
  {
    name: "Agent",
    was: "Das Programm, das plant und Werkzeuge benutzt, etwa Claude Code oder Cowork",
    wofuer: "Wer die Arbeit macht",
  },
  {
    name: "Anweisungen",
    was: "Text, der in jeder Unterhaltung gilt, etwa CLAUDE.md",
    wofuer: "Was immer gilt: Tonfall, Regeln, Verbote",
  },
];

const VERWALTUNG = [
  {
    name: "Skills verteilen",
    claudeAi:
      "Owner stellen sie in den Organisationseinstellungen für alle bereit. Zuteilung an Gruppen nur in Enterprise.",
    bedrock:
      "Eigener Plugin-Marketplace in Git oder ein Ordner auf jedem Rechner, ausgerollt per MDM.",
    gateway:
      "Bibliotheken im Portal, je Bibliothek für alle oder einzelne Personen.",
  },
  {
    name: "Skills pflegen",
    claudeAi: "In der App oder als Zip-Upload.",
    bedrock: "Dateien im Repository.",
    gateway:
      "Editor im Portal, Import als Zip oder aus Git, geprüfte Vorlagen.",
  },
  {
    name: "Prüfung",
    claudeAi: "Sicherheits-Scan für hochgeladene Skills nur in Enterprise.",
    bedrock:
      "Prüfung zuschaltbar. Sie erfasst selbst erstellte Skills, aber keine Plugins.",
    gateway: "Nur Admins legen Skills in Bibliotheken ab.",
  },
  {
    name: "Verarbeitung",
    claudeAi: "Bei Anthropic, laut eigener Angabe in den USA.",
    bedrock: "Amazon Bedrock in der EU.",
    gateway: "Amazon Bedrock in der EU, Gateway in Frankfurt.",
  },
];

const BEISPIEL_SKILL = [
  "---",
  "name: angebot-aus-gespraechsnotiz",
  "description: Erstellt aus einer Gesprächsnotiz ein einseitiges Angebot. Nutzen, wenn jemand ein Angebot aus einem Kundengespräch braucht.",
  "---",
  "",
  "# Angebot aus Gesprächsnotiz",
  "",
  "1. Lies die Notiz und liste Bedarf, Mengen, Termine und offene Punkte auf.",
  "2. Fehlt eine Menge oder ein Liefertermin, frag nach, statt zu schätzen.",
  "3. Nimm die Vorlage vorlagen/angebot.docx. Aufbau und Tonfall wie in beispiele/.",
  "4. Preise nur aus der Preisliste, die der ERP-Connector liefert. Keine Preise erfinden.",
  "5. Rabatte über 10 Prozent nicht anbieten, sondern als Frage an den Vertrieb markieren.",
  "6. Liste am Ende alle Annahmen auf, die ein Mensch prüfen muss.",
].join("\n");

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          Claude Skills: Warum Anthropic Skills statt Agenten baut und wie Sie
          das im Unternehmen nutzen
        </BlogHero.Headline>

        <GeoSummary>
          Claude Skills sind Ordner mit einer Datei SKILL.md, in der steht, wann
          und wie Claude eine Aufgabe erledigt. Anthropic empfiehlt, statt
          vieler Spezial-Agenten einen allgemeinen Agenten wie Claude Code oder
          Cowork mit Skills auszustatten. Das Format ist seit Dezember 2025 ein
          offener Standard, den laut Anthropic mehr als 70 Plattformen
          unterstützen. Im Unternehmen entscheidet, wer Skills schreibt, prüft
          und verteilt: Snyk fand in 36,8 Prozent von 3.984 öffentlichen Skills
          mindestens eine Sicherheitslücke.
        </GeoSummary>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>17 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-11-25">25. November 2026</BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/claude-skills/claude-skills-karteikasten.jpg"
          alt="Offene Schublade mit farbigen Karteireitern in einem hellen Büro"
        />
      </BlogHero>

      <BlogLayout meta={metaCustom} metadata={metadata}>
        <BlogLayout.Content>
          <div>
            <Typo.H2 id="kurzfassung">Kurzfassung</Typo.H2>
            <Typo.Paragraph>
              Anthropic baut nicht mehr für jede Aufgabe einen eigenen
              KI-Agenten. Stattdessen bekommt ein allgemeiner Agent wie Claude
              Code oder Cowork sogenannte Skills: Ordner mit einer Anleitung,
              wie eine bestimmte Aufgabe bei Ihnen erledigt wird. Für
              Unternehmen heißt das: nicht zehn Agenten aufsetzen und pflegen,
              sondern das eigene Wissen in Skills schreiben und an alle
              verteilen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Jay von RoboNuggets hat das in einem viel gesehenen{" "}
              <Ext href={SRC.video}>Video</Ext> in sechs Stufen erklärt. Wir
              haben jede Stufe mit den Quellen von Anthropic abgeglichen.
            </Typo.Paragraph>

            <DataTable compact>
              <DataTable.Head>
                <DataTable.Row className="max-md:hidden">
                  <DataTable.HeaderCell>Stufe im Video</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Idee</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Unser Check</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                {STUFEN.map(({ name, idee, check }) => (
                  <DataTable.Row key={name} className={zeileMobil}>
                    <DataTable.Cell
                      bold
                      className={`${zelleMobil} max-md:text-base`}
                    >
                      {name}
                    </DataTable.Cell>
                    <DataTable.Cell className={zelleMobil}>{idee}</DataTable.Cell>
                    <DataTable.Cell className={zelleMobil}>
                      <MobilLabel>Unser Check</MobilLabel>
                      {check}
                    </DataTable.Cell>
                  </DataTable.Row>
                ))}
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph className="mt-6">
              Was das Video auslässt, fragen die Zuschauer in den Kommentaren:
              Wer darf im Unternehmen Skills schreiben und verteilen? Wohin
              gehören Zugangsdaten und Kundendaten? Und wie sicher sind Skills
              aus dem Netz? Darum geht es in der zweiten Hälfte dieses Beitrags.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="skills-statt-agenten">
              Skills statt Agenten: Was Anthropic wirklich gesagt hat
            </Typo.H2>

            <Typo.H3>Der Vortrag hinter dem Videotitel</Typo.H3>
            <Typo.Paragraph>
              Der Titel des Videos geht auf einen Vortrag zurück. Barry Zhang
              und Mahesh Murag von Anthropic sprachen im November 2025 auf dem
              AI Engineer Code Summit unter der Überschrift{" "}
              <Ext href={SRC.vortrag}>
                „Don&apos;t Build Agents, Build Skills Instead“
              </Ext>
              . Zhang sagte dort laut{" "}
              <Ext href={SRC.businessInsider}>Business Insider</Ext> sinngemäß:
              Früher habe man gedacht, Agenten für verschiedene Fachgebiete
              müssten sehr verschieden aussehen. Der Agent darunter sei aber
              universeller als gedacht. Was ihm fehle, sei Fachwissen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Das Bild dazu: Das Modell ist der Prozessor, der Agent das
              Betriebssystem, Skills sind die Programme. Wer am Rechner etwas
              Neues tun will, kauft keinen neuen Rechner. Er installiert ein
              Programm.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Im Januar 2026 schrieb Anthropic es noch deutlicher auf: Man habe
              aufgehört, spezialisierte Agenten zu bauen, und baue stattdessen{" "}
              <Ext href={SRC.skillsStattAgenten}>Skills</Ext>.
            </Typo.Paragraph>

            <Typo.H3>Was das nicht heißt</Typo.H3>
            <Typo.Paragraph>
              Agenten sind damit nicht abgeschafft.{" "}
              <Link href="/blog/was-ist-claude-code" className={linkClass}>
                Claude Code
              </Link>{" "}
              und Cowork sind selbst Agenten, und Subagenten gibt es weiter.
              Gemeint ist: Sie brauchen nicht für Vertrieb, Buchhaltung und
              Einkauf je einen eigenen Agenten mit eigenen Anweisungen und
              eigenem Gedächtnis, den Sie einzeln einrichten und pflegen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Mehrere Kommentare unter dem Video halten dagegen, und sie haben
              einen Punkt. Ein viel gelikter Kommentar sagt: Je länger eine
              Sitzung läuft, desto weiter driftet sie ab, egal wie gut die
              Skills sind. Ein anderer Nutzer ließ einen Agenten die Arbeit von
              fünf machen, und das Kontextfenster lief über.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Daraus ergibt sich eine brauchbare Faustregel:
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>Skill:</strong> wenn es um Wissen geht. Wie schreiben
                wir ein Angebot, wie prüfen wir eine Rechnung, was heißt bei uns
                „dringend“.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Eigene Sitzung oder Subagent:</strong> wenn eine Aufgabe
                lange läuft, parallel laufen soll oder andere Rechte braucht.
                Kurze Sitzungen mit einem klaren Skill bleiben eher in der Spur
                als eine Dauersitzung.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Fester Workflow:</strong> wenn ein Ablauf ohne Mensch im
                Hintergrund läuft, etwa Bestellungen aus E-Mails ins ERP
                übertragen.
              </Typo.ListItem>
            </Typo.List>

            <BlogImage
              src="/blog/claude-skills/ein-agent-viele-skills.png"
              alt="Diagramm: links drei einzelne Agenten für Vertrieb, Buchhaltung und Einkauf mit je eigenen Anweisungen und eigenem Gedächtnis, rechts ein Agent mit drei Skills und den Connectors Postfach, ERP und Laufwerk"
              width={1200}
              height={675}
            />

            <Typo.H3>Ein offener Standard, kein Claude-Sonderweg</Typo.H3>
            <Typo.Paragraph>
              Skills gibt es seit Oktober 2025. Im Dezember 2025 hat Anthropic
              das Format als offenen Standard unter dem Namen Agent Skills
              veröffentlicht. Im Oktober 2026 gab Anthropic bekannt, den
              Standard an die Agentic AI Foundation unter dem Dach der Linux
              Foundation zu übergeben. Laut{" "}
              <Ext href={SRC.stiftung}>Anthropic</Ext> unterstützen ihn mehr als
              70 Plattformen, darunter ChatGPT, Cursor, GitHub Copilot und VS
              Code. Eine Million Skills wurden veröffentlicht und fast 280
              Millionen Mal installiert.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Für Sie heißt das: Ein Skill, den Ihr Team heute für Claude
              schreibt, ist kein verlorener Aufwand, wenn Sie in zwei Jahren ein
              anderes Werkzeug nutzen. Es bleibt eine Textdatei in einem Ordner.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="was-ist-ein-skill">Was ist ein Claude Skill?</Typo.H2>
            <Typo.Paragraph>
              Ein Claude Skill ist ein Ordner. Darin liegt eine Textdatei namens{" "}
              <code>SKILL.md</code>, daneben nach Bedarf Vorlagen, Beispiele
              oder kleine Skripte. Anthropic vergleicht das mit den{" "}
              <Ext href={SRC.start}>
                Einarbeitungsunterlagen für neue Mitarbeiter
              </Ext>
              : Der Kollege ist klug, kennt aber Ihre Abläufe noch nicht.
            </Typo.Paragraph>

            <Typo.H3>
              Name und Beschreibung entscheiden, ob der Skill greift
            </Typo.H3>
            <Typo.Paragraph>
              Oben in der <code>SKILL.md</code> stehen Name und Beschreibung.
              Beim Start liest Claude nur diese zwei Zeilen von jedem Skill,
              laut Anthropic etwa 50 Tokens. Passt eine Aufgabe zur
              Beschreibung, lädt Claude die ganze Anleitung, etwa 500 Tokens.
              Vorlagen und Beispiele kommen erst dazu, wenn sie gebraucht
              werden.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Deshalb können hunderte Skills bereitliegen, ohne dass das
              Kontextfenster vollläuft. Und deshalb ist die Beschreibung der
              wichtigste Satz im Skill: Schreiben Sie hinein, wann er greifen
              soll, nicht nur, was er tut. In claude.ai darf sie höchstens 200
              Zeichen lang sein.
            </Typo.Paragraph>

            <Typo.H3>Ein Beispiel</Typo.H3>
            <Typo.Paragraph>
              So sieht ein Skill aus, der aus einer Gesprächsnotiz ein Angebot
              macht:
            </Typo.Paragraph>
            <CodeBlock language="markdown" fileName="SKILL.md">
              {BEISPIEL_SKILL}
            </CodeBlock>
            <Typo.Paragraph>
              Mehr ist es nicht. Kein Programm, kein Training, keine eigene
              Plattform.
            </Typo.Paragraph>

            <Typo.H3>Skill, Connector, Plugin, Agent: was ist was?</Typo.H3>
            <DataTable compact>
              <DataTable.Head>
                <DataTable.Row className="max-md:hidden">
                  <DataTable.HeaderCell>Baustein</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Was er ist</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Wofür</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                {BAUSTEINE.map(({ name, was, wofuer }) => (
                  <DataTable.Row key={name} className={zeileMobil}>
                    <DataTable.Cell
                      bold
                      className={`${zelleMobil} max-md:text-base`}
                    >
                      {name}
                    </DataTable.Cell>
                    <DataTable.Cell className={zelleMobil}>{was}</DataTable.Cell>
                    <DataTable.Cell className={zelleMobil}>
                      <MobilLabel>Wofür</MobilLabel>
                      {wofuer}
                    </DataTable.Cell>
                  </DataTable.Row>
                ))}
              </DataTable.Body>
            </DataTable>
            <Typo.Paragraph className="mt-6">
              Was ein MCP-Server ist, erklärt unser Beitrag{" "}
              <Link href="/blog/was-ist-mcp-server" className={linkClass}>
                Was ist ein MCP-Server?
              </Link>{" "}
              Wie Plugins aufgebaut sind, steht unter{" "}
              <Link href="/blog/claude-plugins" className={linkClass}>
                Claude Plugins
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="skills-erstellen">
              Claude Skills erstellen: drei Wege im Check
            </Typo.H2>
            <Typo.Paragraph>
              Von Hand muss niemand eine <code>SKILL.md</code> tippen. Das Video
              nennt drei Wege, einen Skill zu erstellen. Sie taugen
              unterschiedlich viel.
            </Typo.Paragraph>

            <Typo.H3>
              Weg 1: Beschreiben und den Skill Creator schreiben lassen
            </Typo.H3>
            <Typo.Paragraph>
              Der Skill Creator ist ein Skill von Anthropic, der andere Skills
              baut. Sie beschreiben die Aufgabe, Claude fragt nach und legt den
              Ordner an. Der Tipp aus dem Video ist gut: Geben Sie Ihre besten
              Beispiele mit, etwa die drei Angebote, die Sie so wieder schreiben
              würden.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der Haken: Ein Skill, den das Modell allein aus einer kurzen
              Beschreibung schreibt, enthält vor allem, was das Modell schon
              weiß. Die Studie <Ext href={SRC.skillsbench}>SkillsBench</Ext> hat
              das gemessen. Von Menschen gepflegte Skills hoben die Erfolgsquote
              von Agenten im Schnitt um gut 16 Prozentpunkte. Skills, die sich
              das Modell vorab selbst schrieb, brachten im Schnitt nichts.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der Skill Creator liefert also die Form. Der Wert kommt aus Ihren
              Beispielen, Regeln und Ausnahmen.
            </Typo.Paragraph>

            <Typo.H3>Weg 2: Einmal machen, dann speichern</Typo.H3>
            <Typo.Paragraph>
              Das ist der Weg, den auch das Video den meisten empfiehlt, und wir
              sehen das genauso. Sie erledigen die Aufgabe einmal gemeinsam mit
              Claude und lassen am Ende die Sitzung in einen Skill umwandeln.
              Ein Start-Prompt dafür:
            </Typo.Paragraph>
            <div className="bg-primary-50 border-l-4 border-primary-500 p-4 my-6">
              <p className="text-sm font-medium">
                Wir erledigen diese Aufgabe jetzt einmal gemeinsam. Merk dir
                jeden Schritt und jede Korrektur von mir. Am Ende machst du
                daraus einen Skill.
              </p>
            </div>
            <Typo.Paragraph>
              Dann arbeiten Sie die Aufgabe durch und korrigieren Claude, wie
              Sie einen neuen Kollegen korrigieren würden. Am Ende: „Mach aus
              dem, was wir gerade getan haben, einen Skill.“
            </Typo.Paragraph>
            <Typo.Paragraph>
              Warum das besser funktioniert: Ihre Korrekturen sind genau das
              Wissen, das Claude nicht haben konnte. „Bei diesem Kunden nie per
              Du.“ „Lieferzeiten immer mit zwei Tagen Puffer.“ Bei jeder
              Wiederholung kommt ein Sonderfall dazu, und der Skill wird besser.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Ein Nebeneffekt, der im Mittelstand viel wert ist: Abläufe, die
              bisher nur in einem Kopf existierten, stehen danach auf Papier.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Ein Tipp aus den Kommentaren, den wir übernehmen würden: Geben Sie
              jedem Skill einen kurzen Abschnitt „Wann anhalten und einen
              Menschen fragen“.
            </Typo.Paragraph>

            <Typo.H3>Weg 3: Bildschirm aufzeichnen</Typo.H3>
            <Typo.Paragraph>
              Seit Juli 2026 kann Claude einen Skill aus einer
              Bildschirmaufnahme bauen. Sie klicken auf das Plus im Eingabefeld,
              wählen „Record a skill“, machen die Aufgabe vor und erklären
              dabei, was Sie tun. Claude schlägt danach einen Skill vor.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Das Video zeigt die Funktion ohne ihre Grenzen. Die{" "}
              <Ext href={SRC.eigeneSkills}>Hilfeseite von Anthropic</Ext> ist da
              genauer:
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                nur in Cowork in Claude für Mac, nicht auf Windows und nicht im
                Chat
              </Typo.ListItem>
              <Typo.ListItem>
                nur in den Plänen Pro, Max, Ultra und Team, nicht in Free und
                nicht in Enterprise
              </Typo.ListItem>
              <Typo.ListItem>
                eine Aufnahme läuft etwa zehn Minuten
              </Typo.ListItem>
              <Typo.ListItem>
                erfasst wird alles, was in dieser Zeit auf dem Bildschirm steht,
                und alles, was Sie sagen
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Anthropic warnt selbst davor, während der Aufnahme Passwörter zu
              tippen oder Vertrauliches zu zeigen. Für Claude Desktop über
              Amazon Bedrock führt Anthropic die Funktion nicht auf. Wer mit
              Windows arbeitet, und das sind die meisten deutschen Büros, nimmt
              Weg 2.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="arten-und-fertige-skills">
              Skill-Arten und fertige Skills aus dem Netz
            </Typo.H2>

            <Typo.H3>Ein Skill muss keine Schrittliste sein</Typo.H3>
            <Typo.Paragraph>
              Viele denken bei Skills an Arbeitsanweisungen mit nummerierten
              Schritten. Das Video zeigt drei andere Arten, und zwei davon sind
              sofort brauchbar:
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>Artefakt-Skill:</strong> Ihr Erscheinungsbild an einem
                Ort, also Farben, Schriften, Aufbau. Jedes Angebot, jeder
                Bericht und jede Präsentation kommt damit im Firmenlook heraus.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Definitions-Skill:</strong> Zwei Sätze, die festlegen,
                was ein Wort bei Ihnen bedeutet. Was ist ein A-Kunde? Ab wann
                gilt eine Reklamation als eskaliert? Ein Skill kann so groß sein
                wie ein Handbuch oder so klein wie ein Satz.
              </Typo.ListItem>
            </Typo.List>

            <Typo.H3>Datenbank-Skill: hier widersprechen wir</Typo.H3>
            <Typo.Paragraph>
              Die dritte Art nennt das Video Datenbank-Skill: ein Ordner mit
              Verweisen auf Kundendaten, Kaufhistorie und Schriftverkehr, damit
              Claude Kunden persönlicher ansprechen kann.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die Kommentare unter dem Video sind an dieser Stelle deutlich, und
              sie haben recht. Wer Kundendaten als Textdateien in einen
              Skill-Ordner legt, kopiert sie auf jeden Rechner, der den Skill
              bekommt. Es gibt dann keine Rechte je Person, kein Protokoll und
              keine Löschfrist. Mit der DSGVO verträgt sich das schlecht.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die saubere Trennung: Der Skill beschreibt, wie Claude mit
              Kundendaten umgeht. Die Daten selbst bleiben im CRM oder ERP und
              kommen über einen Connector, mit der Anmeldung der jeweiligen
              Person und nur mit dem, was sie sehen darf. Dasselbe gilt für
              Zugangsdaten. Anthropic schreibt selbst, dass Passwörter und
              API-Schlüssel nicht in einen Skill gehören.
            </Typo.Paragraph>

            <Typo.H3>Fertige Skills: Verzeichnisse und ihr Risiko</Typo.H3>
            <Typo.Paragraph>
              Viele Skills gibt es schon fertig. Anthropic führt ein eigenes{" "}
              <Ext href={SRC.verzeichnis}>Verzeichnis</Ext> mit Skills von
              Partnern wie Notion, Canva, Figma und Atlassian. Daneben gibt es
              offene Sammlungen, die bekannteste ist skills.sh von Vercel mit
              einer Rangliste nach Installationen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Das Video rät, Skills vor der Installation von Claude prüfen zu
              lassen. Das ist ein sinnvoller erster Schritt, aber keine
              Freigabe. Ein Skill läuft mit allen Rechten des Agenten, der ihn
              benutzt. Was Claude auf dem Rechner darf, darf der Skill auch.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der Sicherheitsanbieter Snyk hat im Februar 2026{" "}
              <Ext href={SRC.snyk}>3.984 öffentliche Skills</Ext> aus den
              Verzeichnissen ClawHub und skills.sh untersucht:
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                36,8 Prozent hatten mindestens eine Sicherheitslücke
              </Typo.ListItem>
              <Typo.ListItem>
                13,4 Prozent hatten eine kritische Lücke
              </Typo.ListItem>
              <Typo.ListItem>
                76 Skills waren nach menschlicher Prüfung eindeutig bösartig:
                Sie luden Schadsoftware nach, zogen Daten ab oder schalteten
                Schutzfunktionen aus
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Unter dem Video beschreibt ein Zuschauer genau das: Nach der
              Installation angeblich vertrauenswürdiger Skills musste er seinen
              Rechner neu aufsetzen.
            </Typo.Paragraph>

            <Typo.H3>Fünf Fragen vor jeder Installation</Typo.H3>
            <ol className="list-decimal pl-6 space-y-2 my-4 text-gray-700">
              <Typo.ListItem>Kennen wir die Quelle und den Autor?</Typo.ListItem>
              <Typo.ListItem>
                Hat jemand die <code>SKILL.md</code> und alle Skripte im Ordner
                gelesen?
              </Typo.ListItem>
              <Typo.ListItem>
                Lädt der Skill etwas aus dem Netz nach oder schickt er Daten an
                fremde Adressen?
              </Typo.ListItem>
              <Typo.ListItem>Verlangt er Zugangsdaten?</Typo.ListItem>
              <Typo.ListItem>
                Welche Werkzeuge gibt er sich selbst frei?
              </Typo.ListItem>
            </ol>
            <Typo.Paragraph>
              Im Unternehmen sollte das nicht jede Person für sich beantworten.
              Eine Stelle prüft, und nur was geprüft ist, wird verteilt.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="weniger-ist-mehr">
              Weniger ist mehr: wann Skills das Modell bremsen
            </Typo.H2>
            <Typo.Paragraph>
              Die letzte Stufe im Video klingt nach allem davor seltsam: Claude
              ab und zu ganz ohne Skills arbeiten lassen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Sie geht auf Boris Cherny zurück, den Erfinder von Claude Code. In
              einem <Ext href={SRC.yc}>Interview bei Y Combinator</Ext> riet er,
              alle sechs Monate die eigenen Anweisungen, Skills und Hooks zu
              löschen und zu schauen, was das Modell von allein kann. Sein Team
              hat für Opus 5 selbst 80 Prozent des Systemprompts von Claude Code
              gestrichen. Vieles darin korrigierte Fehler, die neuere Modelle
              nicht mehr machen. Cherny nennt das „Hobbling“: Das Modell könnte
              es, und man steht ihm im Weg.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Löschen müssen Sie dafür nichts. Lassen Sie dieselbe Aufgabe
              einmal mit und einmal ohne Skill laufen und vergleichen Sie.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die Zahlen stützen das. In der ersten Fassung von SkillsBench
              schnitten Agenten bei 16 von 84 Aufgaben mit Skill schlechter ab
              als ohne. Kurze Skills mit zwei bis drei Bausteinen schlugen
              umfassende Dokumentation. Und ein Kommentar mit 59 Likes berichtet
              dasselbe aus der Praxis: Skills gekürzt, bessere Ergebnisse,
              weniger Tokens.
            </Typo.Paragraph>

            <Typo.H3>Was in einen Skill gehört</Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                <strong>Hinein:</strong> was Claude nicht wissen kann. Ihre
                Preise, Vorlagen, Freigabegrenzen, Ausnahmen, Begriffe.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Nicht hinein:</strong> allgemeines Handwerk. „Schreibe
                höflich“ oder „prüfe die Rechtschreibung“ kann das Modell
                längst.
              </Typo.ListItem>
            </Typo.List>

            <Typo.H3>Skills sind Leitlinien, keine Sperren</Typo.H3>
            <Typo.Paragraph>
              Ein Punkt aus den Kommentaren gehört in jede Planung: Claude
              befolgt einen Skill, solange er im Kontext ist. Eine Garantie ist
              das nicht.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Was nie passieren darf, gehört deshalb nicht in einen Skill,
              sondern in Rechte. Ob Claude eine Datei löschen, eine Mail senden
              oder einen Ordner lesen darf, legen Berechtigungen, Hooks und die
              Freigaben der Connectors fest. Die gelten immer, auch wenn Claude
              den Skill gerade nicht geladen hat.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="skills-im-unternehmen">
              Was das Video auslässt: Skills im Unternehmen
            </Typo.H2>
            <Typo.Paragraph>
              Das Video richtet sich an Einzelunternehmer. Jay arbeitet mit
              einem einzigen Ordner, in dem inzwischen 600.000 Dateien liegen.
              Für eine Person geht das. Mit 50 Leuten stellen sich andere
              Fragen, und die Kommentare stellen sie:
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>Wer darf Skills schreiben und verteilen?</strong> Ein
                Kommentar aus einem Konzern: Kein Management will, dass tausende
                Autoren das Geschäft automatisieren.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Wer prüft Skills von außen?</strong> Siehe die Zahlen
                von Snyk.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Wohin mit Zugangsdaten?</strong> Ein Nutzer schreibt,
                ihm sei nicht wohl dabei, dass die KI über einen Skill seine
                Zugangsdaten kennt.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Wer pflegt Skills, wenn ein neues Modell kommt?</strong>{" "}
                Sonst arbeiten in einem Jahr zwanzig Leute mit zwanzig
                Fassungen.
              </Typo.ListItem>
            </Typo.List>

            <Typo.H3>Drei Wege, Skills zentral zu verwalten</Typo.H3>
            <DataTable compact>
              <DataTable.Head>
                <DataTable.Row className="max-md:hidden">
                  <DataTable.HeaderCell>Thema</DataTable.HeaderCell>
                  <DataTable.HeaderCell>
                    Claude Team und Enterprise
                  </DataTable.HeaderCell>
                  <DataTable.HeaderCell>
                    Claude Desktop über Bedrock, selbst betrieben
                  </DataTable.HeaderCell>
                  <DataTable.HeaderCell className="bg-primary-950">
                    Private Claude AI Gateway
                  </DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                {VERWALTUNG.map(({ name, claudeAi, bedrock, gateway }) => (
                  <DataTable.Row key={name} className={zeileMobil}>
                    <DataTable.Cell
                      bold
                      className={`${zelleMobil} max-md:text-base`}
                    >
                      {name}
                    </DataTable.Cell>
                    <DataTable.Cell className={zelleMobil}>
                      <MobilLabel>Claude Team und Enterprise</MobilLabel>
                      {claudeAi}
                    </DataTable.Cell>
                    <DataTable.Cell className={zelleMobil}>
                      <MobilLabel>Claude Desktop über Bedrock</MobilLabel>
                      {bedrock}
                    </DataTable.Cell>
                    <DataTable.Cell
                      bold
                      className={`bg-primary-50/70 ${zelleMobil} max-md:mx-4 max-md:mt-1 max-md:rounded-lg max-md:px-3 max-md:py-2`}
                    >
                      <MobilLabel>Private Claude AI Gateway</MobilLabel>
                      {gateway}
                    </DataTable.Cell>
                  </DataTable.Row>
                ))}
              </DataTable.Body>
            </DataTable>
            <Typo.Paragraph className="mt-6">
              Die Angaben stammen aus den Hilfeseiten von Anthropic zu{" "}
              <Ext href={SRC.orgSkills}>Skills für Organisationen</Ext> und zu{" "}
              <Ext href={SRC.drittanbieter}>
                Claude Desktop über Drittanbieter
              </Ext>
              , der Speicherort aus der{" "}
              <Ext href={SRC.serverUs}>Datenschutz-Hilfe</Ext>. Den zweiten Weg
              mit Intune oder Jamf beschreiben wir im Beitrag{" "}
              <Link
                href="/blog/claude-cowork-bedrock-dsgvo"
                className={linkClass}
              >
                Claude Cowork über Bedrock
              </Link>
              . Er funktioniert, braucht aber jemanden, der Git, MDM und die
              Konfiguration von Claude Desktop pflegt.
            </Typo.Paragraph>

            <Typo.H3>So läuft es im Private Claude AI Gateway</Typo.H3>
            <Typo.Paragraph>
              Im Gateway pflegen Sie Skills im Portal, ohne Git und ohne
              Rollout:
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>Bibliotheken:</strong> Eine Bibliothek „Allgemein“ gilt
                für alle, eine Bibliothek „Vertrieb“ nur für den Vertrieb. Wer
                was bekommt, legen Sie je Bibliothek fest.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Editor:</strong> Die Anleitung entsteht im Browser,
                Vorlagen und Beispiele liegen daneben. Vorhandene Skills kommen
                als Zip oder aus einem Git-Repository.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Auslieferung:</strong> Nach dem Speichern baut das
                Gateway daraus ein Plugin. Claude Desktop holt es von selbst, je
                nach Einstellung zum Installieren mit einem Klick oder
                automatisch.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Daten und Zugänge:</strong> Zugangsdaten und Kundendaten
                gehören nicht in den Skill. Auf Postfach, ERP oder Laufwerk
                greift Claude über Connectors zu, die Sie zentral freigeben.
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Was das Portal sonst steuert, von Budgets bis zu
              Ordner-Freigaben, steht unter{" "}
              <Link
                href="/managed-claude/zentrale-steuerung"
                className={linkClass}
              >
                Zentrale Steuerung
              </Link>
              . Alles zu Plugins im Gateway fasst die Seite{" "}
              <Link href="/managed-claude/plugins" className={linkClass}>
                Plugins im Private Claude AI Gateway
              </Link>{" "}
              zusammen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="so-fangen-sie-an">
              So fangen Sie an: fünf Schritte
            </Typo.H2>
            <ol className="list-decimal pl-6 space-y-2 my-4 text-gray-700">
              <Typo.ListItem>
                <strong>Drei Aufgaben auswählen.</strong> Nehmen Sie Aufgaben,
                die jede Woche anfallen und deren Ergebnis heute davon abhängt,
                wer sie macht: das Angebot, die Antwort auf eine Reklamation,
                der Monatsbericht.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Jede Aufgabe einmal mit Claude durchgehen.</strong> Die
                Person, die es am besten kann, erledigt die Aufgabe mit Claude,
                korrigiert und lässt am Ende einen Skill daraus machen. Das
                macht die Fachabteilung, nicht die IT.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Eine verantwortliche Person je Skill.</strong> Sie
                entscheidet über Änderungen. In den Skill gehört ein Abschnitt,
                wann Claude anhält und nachfragt.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Zentral verteilen.</strong> Der Skill geht über eine
                Bibliothek an das Team, nicht als Datei per E-Mail. Zugangsdaten
                und Kundendaten bleiben in den Systemen und kommen über
                Connectors.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Bei jedem neuen Modell aufräumen.</strong> Einmal mit
                und einmal ohne Skill testen. Was das Modell inzwischen von
                allein kann, fliegt raus.
              </Typo.ListItem>
            </ol>
            <Typo.Paragraph>
              Drei Skills, die das ganze Team nutzt und jemand pflegt, bringen
              mehr als dreißig, die niemand kennt.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="faq">
            <FaqContainer
              faqs={[
                {
                  question: "Was sind Claude Skills?",
                  answer:
                    "Claude Skills sind Ordner mit einer Datei SKILL.md. Darin steht, wann Claude den Skill nutzen soll und wie eine Aufgabe erledigt wird. Daneben können Vorlagen, Beispiele und Skripte liegen. Claude lädt einen Skill erst, wenn eine Aufgabe zu seiner Beschreibung passt.",
                },
                {
                  question:
                    "Was ist der Unterschied zwischen einem Skill und einem KI-Agenten?",
                  answer:
                    "Der Agent ist das Programm, das plant und Werkzeuge benutzt, etwa Claude Code oder Cowork. Ein Skill ist Wissen, das der Agent bei Bedarf lädt. Anthropic empfiehlt, einen allgemeinen Agenten mit vielen Skills auszustatten, statt für jedes Fachgebiet einen eigenen Agenten zu bauen.",
                },
                {
                  question: "Was ist der Unterschied zwischen Skills und MCP?",
                  answer:
                    "MCP verbindet Claude mit Systemen wie Postfach, ERP oder Datenbank. Ein Skill beschreibt, wie Claude mit diesen Systemen eine Aufgabe erledigt. Beides gehört zusammen: Der Connector liefert die Daten, der Skill die Arbeitsweise.",
                },
                {
                  question: "Wie erstelle ich einen Claude Skill?",
                  answer:
                    "Am besten erledigen Sie die Aufgabe einmal gemeinsam mit Claude, korrigieren dabei und lassen am Ende die Sitzung in einen Skill umwandeln. Alternativ beschreiben Sie die Aufgabe und lassen den Skill Creator von Anthropic den Skill schreiben. Auf dem Mac geht es in Cowork auch per Bildschirmaufnahme.",
                },
                {
                  question: "Sind Claude Skills aus dem Internet sicher?",
                  answer:
                    "Nicht von selbst. Ein Skill läuft mit den Rechten des Agenten. Snyk fand im Februar 2026 in 36,8 Prozent von 3.984 öffentlichen Skills mindestens eine Sicherheitslücke, 76 Skills waren bösartig. Installieren Sie nur aus bekannten Quellen und lesen Sie vorher die SKILL.md und alle Skripte.",
                },
                {
                  question: "Funktionieren Claude Skills über Amazon Bedrock?",
                  answer:
                    "Ja. Claude Desktop unterstützt Skills, Plugins und Hooks auch im Betrieb über Amazon Bedrock. Im Private Claude AI Gateway pflegen Admins Skills im Portal, und sie kommen als Plugin auf die Rechner. Die Aufzeichnung per Bildschirmaufnahme nennt Anthropic nur für Pläne von claude.ai.",
                },
                {
                  question: "In welchen Plänen gibt es Claude Skills?",
                  answer:
                    "In claude.ai laut Anthropic in allen Plänen von Free bis Enterprise, sofern die Codeausführung eingeschaltet ist. Skills zentral für alle bereitstellen können Owner in Team und Enterprise. Die Bildschirmaufnahme gibt es nur in Pro, Max, Ultra und Team auf dem Mac.",
                },
              ]}
            >
              <FaqContainer.Headline>
                Häufige Fragen zu Claude Skills
              </FaqContainer.Headline>
            </FaqContainer>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="naechster-schritt">Nächster Schritt</Typo.H2>
            <Typo.Paragraph>
              Sie wollen, dass Ihr Team mit denselben Abläufen arbeitet, statt
              dass jede Person eigene Prompts sammelt? Im Onboarding des Private
              Claude AI Gateway bauen wir mit Ihnen die ersten Skills aus echten
              Aufgaben und verteilen sie als Plugin an alle. Wie das abläuft,
              steht unter{" "}
              <Link href="/managed-claude/onboarding" className={linkClass}>
                KI-Einführung in einer Woche
              </Link>
              .
            </Typo.Paragraph>
            <Typo.Paragraph>
              Braucht ein Skill Zugriff auf ein eigenes System, entwickeln wir
              den passenden Connector, siehe{" "}
              <Link
                href="/managed-claude/integrationen/plugin-entwicklung"
                className={linkClass}
              >
                Claude Plugin Entwicklung
              </Link>
              . Oder{" "}
              <Link href="/contact" className={linkClass}>
                sprechen Sie uns an
              </Link>
              .
            </Typo.Paragraph>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="kurzfassung">
            Kurzfassung
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="skills-statt-agenten">
            Skills statt Agenten
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="was-ist-ein-skill">
            Was ist ein Skill?
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="skills-erstellen">
            Skills erstellen
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="arten-und-fertige-skills">
            Arten und fertige Skills
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="weniger-ist-mehr">
            Weniger ist mehr
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="skills-im-unternehmen">
            Skills im Unternehmen
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="so-fangen-sie-an">
            So fangen Sie an
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="faq">FAQ</BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="naechster-schritt">
            Nächster Schritt
          </BlogLayout.NavigationItem>
        </BlogLayout.Navigation>
      </BlogLayout>
    </>
  );
}
