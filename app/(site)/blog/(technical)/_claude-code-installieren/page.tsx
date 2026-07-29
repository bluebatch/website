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
  slug: "claude-code-installieren",
  author: "Max Hänsel",
  date: "2026-08-06",
  image: "/blog/claude-code-installieren/hero.png",
  tags: ["ki", "development"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title: "Claude Code installieren: Setup-Guide für macOS, Windows, Linux",
  description:
    "Claude Code Installation in 5 Minuten: nativer Installer für macOS, Windows und Linux, Login mit Abo oder API-Key, typische Fehler und ihre Lösungen.",
  openGraph: {
    title: "Claude Code installieren: Der komplette Setup-Guide",
    description:
      "Nativer Installer, npm oder WinGet? Abo oder API-Key? Der deutsche Setup-Guide für Claude Code, inklusive Windows-Entscheidung und Troubleshooting.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/claude-code-installieren/hero.png",
        width: 1200,
        height: 630,
        alt: "Claude Code installieren: Hände auf einer Tastatur vor einem Terminal",
      },
    ],
  },
  alternates: {
    canonical: "/blog/claude-code-installieren",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          Claude Code Installation: Der komplette Setup-Guide für macOS,
          Windows und Linux
        </BlogHero.Headline>

        <GeoSummary>
          Claude Code wird über einen nativen Installer eingerichtet: ein
          curl-Einzeiler auf macOS und Linux, ein PowerShell-Befehl auf
          Windows, ganz ohne Node.js. Danach genügt ein Claude-Abo (Pro, Max,
          Team) oder ein Console-API-Key, der kostenlose Plan reicht nicht.
          Die Installation dauert unter fünf Minuten; dieser Guide führt durch
          Setup, Login und die häufigsten Fehler.
        </GeoSummary>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>10 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-08-06">6. August 2026</BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/claude-code-installieren/hero.png"
          alt="Claude Code installieren: Hände auf einer Tastatur, im Hintergrund ein Terminal"
        />
      </BlogHero>

      <BlogLayout meta={metaCustom} metadata={metadata}>
        <BlogLayout.Content>
          <div>
            <Typo.Paragraph>
              Die Claude Code Installation selbst ist ein Einzeiler und in
              wenigen Minuten erledigt. Was in der Praxis Zeit kostet, sind
              die Fragen drumherum: Welcher Installationsweg ist der richtige?
              Brauche ich Node.js? Reicht mein Claude-Abo, oder brauche ich
              einen API-Key? Und auf Windows: nativ oder doch WSL? Viele
              Anleitungen im Netz beantworten diese Fragen mit dem Stand von
              2025 und schicken Windows-Nutzer noch in WSL-Umwege oder
              verlangen Admin-Rechte, die es gar nicht braucht.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Dieser Guide geht den aktuellen Weg entlang der offiziellen
              Anthropic-Doku: erst die zwei Vorentscheidungen, dann die
              Installation pro Betriebssystem, dann Login, Verifikation und
              die ersten zehn Minuten. Am Ende stehen die häufigsten Fehler
              mit ihren Lösungen und ein Blick auf den Rollout im Team.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="entscheidungen">
            <Typo.H2>Vor der Installation: zwei Entscheidungen</Typo.H2>
            <Typo.Paragraph>
              Die erste Entscheidung ist der Installationsweg. Der native
              Installer ist der empfohlene Standard: Er braucht kein Node.js,
              lädt eine eigenständige Binary und hält sich danach automatisch
              aktuell. Der Weg über npm existiert weiter als unterstützte
              Option, ist aber der Legacy-Pfad: Er ergibt vor allem dann Sinn,
              wenn im Team ohnehin eine Node-Umgebung gepflegt wird und
              Versionen bewusst gepinnt werden sollen. Dazwischen liegen die
              Paketmanager: Homebrew auf macOS, WinGet auf Windows, apt, dnf
              und apk auf Linux. Sie integrieren Claude Code in die gewohnte
              Update-Routine, aktualisieren sich dafür aber nicht selbst.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-installieren/entscheidung-installationsweg.png"
              alt="Vergleich der Installationswege: nativer Installer gegen npm und Homebrew"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Die zweite Entscheidung ist die Abrechnung, und sie fällt nicht
              bei der Installation, sondern beim ersten Login. Claude Code
              läuft entweder über ein Claude-Abo (Pro, Max, Team oder
              Enterprise), dann ist die Nutzung im Monatskontingent enthalten.
              Oder über die Anthropic Console mit Prepaid-Credits und
              Abrechnung pro Token, der typische Weg für Firmen-Accounts mit
              zentralem Kosten-Tracking. Wichtig: Der kostenlose Claude-Plan
              enthält keinen Claude-Code-Zugriff. Unternehmen, die bereits
              AWS oder Google Cloud im Vertrag haben, können Claude Code
              außerdem gegen Amazon Bedrock oder Vertex laufen lassen, mehr
              dazu am Ende des Artikels.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die Systemvoraussetzungen sind bewusst niedrig: macOS 13+,
              Windows 10 (1809) oder neuer, Ubuntu 20.04+ bzw. Debian 10+,
              4 GB RAM und eine Internetverbindung. Eine GPU braucht es
              nicht, die Modelle laufen bei Anthropic, nicht auf Ihrem
              Rechner.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="macos-linux">
            <Typo.H2>Installation auf macOS und Linux</Typo.H2>
            <Typo.Paragraph>
              Der native Installer ist ein Einzeiler im Terminal und braucht
              keine Admin-Rechte:
            </Typo.Paragraph>
            <CodeBlock language="bash">
              {`curl -fsSL https://claude.ai/install.sh | bash`}
            </CodeBlock>
            <Typo.Paragraph>
              Wer seine Tools lieber über Homebrew verwaltet, nimmt den Cask.
              Es gibt zwei Kanäle: <code>claude-code</code> folgt dem
              Stable-Kanal, der etwa eine Woche hinter dem neuesten Release
              liegt und Versionen mit bekannten Regressionen überspringt,{" "}
              <code>claude-code@latest</code> ist immer aktuell.
            </Typo.Paragraph>
            <CodeBlock language="bash">
              {`brew install --cask claude-code`}
            </CodeBlock>
            <Typo.Paragraph>
              Für Debian, Ubuntu, Fedora und Alpine gibt es signierte
              Paket-Repositories, dann läuft das Update über den normalen
              System-Upgrade-Weg. Nach der Installation einmal das Terminal
              neu öffnen und prüfen:
            </Typo.Paragraph>
            <CodeBlock language="bash">{`claude --version`}</CodeBlock>
            <Typo.Paragraph>
              Erscheint eine Versionsnummer gefolgt von{" "}
              <code>(Claude Code)</code>, hat alles geklappt.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="windows">
            <Typo.H2>Claude Code auf Windows installieren: nativ oder WSL?</Typo.H2>
            <Typo.Paragraph>
              Die wichtigste Nachricht für Windows-Nutzer: Seit Ende 2025
              läuft Claude Code nativ auf Windows, ein WSL-Umweg ist für die
              meisten nicht mehr nötig. Der Standardweg ist ein Einzeiler in
              der PowerShell, ohne Administrator-Rechte:
            </Typo.Paragraph>
            <CodeBlock language="powershell">
              {`irm https://claude.ai/install.ps1 | iex`}
            </CodeBlock>
            <Typo.Paragraph>
              Alternativ funktioniert WinGet mit{" "}
              <code>winget install Anthropic.ClaudeCode</code>. Zwei Hinweise
              aus der Praxis: Git für Windows ist optional, aber empfehlenswert,
              denn damit nutzt Claude Code die Git Bash als Shell statt der
              PowerShell. Und wer die Fehlermeldung{" "}
              <code>&apos;irm&apos; is not recognized</code> sieht, sitzt in
              der klassischen Eingabeaufforderung statt in der PowerShell,
              erkennbar am Prompt: <code>PS C:\</code> ist PowerShell,{" "}
              <code>C:\</code> ist CMD.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-installieren/windows-wege.png"
              alt="Windows nativ per PowerShell im Vergleich mit WSL: Einrichtung, Integration und Zielgruppe"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              WSL 2 bleibt für zwei Gruppen der bessere Weg: Teams, deren
              Projekte ohnehin auf einer Linux-Toolchain aufbauen, und alle,
              die das Sandboxing von Claude Code nutzen wollen, das unter
              nativem Windows nicht unterstützt wird. In dem Fall wird WSL
              mit <code>wsl --install</code> eingerichtet und darin der
              Linux-Installer ausgeführt; gestartet wird{" "}
              <code>claude</code> dann im WSL-Terminal, nicht in der
              PowerShell.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="anmelden">
            <Typo.H2>Anmelden und verifizieren</Typo.H2>
            <Typo.Paragraph>
              Claude Code arbeitet immer im Kontext eines Projektordners.
              Der erste Start sieht deshalb so aus:
            </Typo.Paragraph>
            <CodeBlock language="bash">
              {`cd /pfad/zum/projekt
claude`}
            </CodeBlock>
            <Typo.Paragraph>
              Beim ersten Aufruf öffnet sich der Login-Flow im Browser. Hier
              fällt die Abrechnungsentscheidung aus dem ersten Kapitel: Login
              mit dem Claude-Account (Abo) oder mit dem Console-Account
              (API-Abrechnung). Die Zugangsdaten werden gespeichert, der
              Login ist also ein einmaliger Schritt; mit{" "}
              <code>/login</code> lässt sich das Konto später jederzeit
              wechseln. In Headless-Umgebungen wie CI-Pipelines übernimmt
              stattdessen die Umgebungsvariable{" "}
              <code>ANTHROPIC_API_KEY</code> die Authentifizierung.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-installieren/setup-ablauf.png"
              alt="Setup-Ablauf in fünf Schritten: installieren, Projektordner öffnen, claude starten, anmelden, erster Prompt"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Der eingebaute Gesundheitscheck beantwortet danach die Frage,
              ob wirklich alles sauber eingerichtet ist:
            </Typo.Paragraph>
            <CodeBlock language="bash">{`claude doctor`}</CodeBlock>
            <Typo.Paragraph>
              Der Befehl prüft Installation und Konfiguration und zeigt unter
              anderem, ob das letzte automatische Update funktioniert hat.
              Bei Problemen ist er immer die erste Anlaufstelle.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="erste-schritte">
            <Typo.H2>Die ersten 10 Minuten nach der Installation</Typo.H2>
            <Typo.Paragraph>
              Die beste Startaufgabe ist keine Code-Änderung, sondern eine
              Frage: Lassen Sie sich die eigene Codebase erklären. Claude
              Code liest sich selbstständig durch das Projekt und liefert
              einen Überblick, der gleichzeitig zeigt, wie das Werkzeug
              arbeitet. Direkt danach lohnt sich <code>/init</code>: Der
              Befehl analysiert das Projekt und erzeugt eine erste
              CLAUDE.md, die Projektwissen für alle künftigen Sessions
              festhält.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Ein paar Handgriffe, die den Alltag schneller machen:{" "}
              <code>claude &quot;Aufgabe&quot;</code> startet direkt mit einem
              Auftrag, <code>claude -c</code> setzt die letzte Unterhaltung
              fort, <code>/help</code> zeigt alle Befehle, und mit
              Shift+Tab wechseln Sie zwischen den Permission-Modes, etwa in
              den Plan-Modus, in dem Claude erst plant und nichts verändert.
              Updates erledigt die native Installation im Hintergrund von
              selbst; <code>claude update</code> stößt sie manuell an. Und
              falls Claude Code wieder vom Rechner soll: Die Deinstallation
              ist ein <code>rm</code> auf zwei Verzeichnisse bzw.{" "}
              <code>winget uninstall</code>, ganz ohne Rückstände im System.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="fehler">
            <Typo.H2>Häufige Fehler bei der Claude Code Installation</Typo.H2>

            <BlogImage
              src="/blog/claude-code-installieren/haeufige-fehler.png"
              alt="Vier typische Installationsprobleme: command not found, Permissions, Firmen-Proxy und veraltetes Node"
              width={1200}
              height={675}
            />

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Fehler</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Ursache und Lösung</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell>
                    <code>command not found: claude</code>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Meist ist nur das Terminal zu alt: Fenster schließen und
                    neu öffnen. Hilft das nicht, fehlt{" "}
                    <code>~/.local/bin</code> (Windows:{" "}
                    <code>%USERPROFILE%\.local\bin</code>) im PATH.
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>
                    npm-Fehler <code>EACCES</code>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Niemals mit <code>sudo</code> installieren. Sauber ist
                    nvm oder ein npm-Global-Verzeichnis auf User-Ebene, noch
                    sauberer der Wechsel auf den nativen Installer.
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>
                    npm-Warnung <code>EBADENGINE</code>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Das npm-Paket erwartet inzwischen Node 22+. Die
                    Installation läuft trotzdem durch, weil eine native
                    Binary geladen wird; sauber wird es mit{" "}
                    <code>nvm install 22</code>.
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Browser-Login öffnet sich nicht</DataTable.Cell>
                  <DataTable.Cell>
                    Typisch für Server und CI: stattdessen{" "}
                    <code>ANTHROPIC_API_KEY</code> als Umgebungsvariable
                    setzen.
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Installer-Fehler hinter Firmen-Proxy</DataTable.Cell>
                  <DataTable.Cell>
                    Ein 403 oder curl-Abbruch deutet auf Proxy oder
                    TLS-Inspection. Alternativen Installationsweg nutzen
                    (WinGet, brew, Paket-Repo) oder den Proxy für{" "}
                    <code>claude.ai</code> freigeben lassen.
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Alles hoffnungslos verbogen</DataTable.Cell>
                  <DataTable.Cell>
                    Der Komplett-Reset: deinstallieren inklusive{" "}
                    <code>~/.claude</code> und <code>~/.claude.json</code>,
                    dann neu installieren. Achtung, das löscht Settings und
                    Session-Verlauf.
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              Ein Sonderfall, der nach Umstiegen häufig auftritt: eine alte
              npm-Installation und eine neue native Installation laufen
              parallel und kommen sich in die Quere. <code>claude doctor</code>{" "}
              erkennt das; die Migration inklusive aller Einstellungen
              erledigt <code>claude install</code>.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="team-rollout">
            <Typo.H2>Vom Einzelplatz zum Team-Rollout</Typo.H2>
            <Typo.Paragraph>
              Für den einzelnen Entwickler endet das Setup hier. Im
              Unternehmen fängt die eigentliche Arbeit an diesem Punkt an:
              Wer zahlt wie (Team-Abo oder Console mit zentralem
              Kosten-Tracking), wie kommt das Tool durch Proxy und
              TLS-Inspection, und wo laufen die Modelle? Gerade die letzte
              Frage ist für deutsche Mittelständler entscheidend: Claude
              Code kann statt über die Anthropic-Cloud auch über{" "}
              <Link
                href="/blog/amazon-bedrock"
                className="text-primary-600 hover:underline"
              >
                Amazon Bedrock
              </Link>{" "}
              im eigenen AWS-Konto laufen, mit EU-Region und bestehendem
              AWS-Vertrag. Wie ein solches Setup als privates,
              DSGVO-freundliches KI-Arbeitsumfeld aussieht, zeigt unser
              Artikel zu{" "}
              <Link
                href="/blog/claude-cowork-managed-private"
                className="text-primary-600 hover:underline"
              >
                Claude als Managed-Private-Deployment
              </Link>
              .
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wenn Sie Claude Code oder KI-Agenten generell im Team einführen
              wollen und dabei Unterstützung bei Setup, Kostenkontrolle und
              Governance brauchen:{" "}
              <Link href="/contact" className="text-primary-600 hover:underline">
                Sprechen Sie uns an
              </Link>
              . Wir haben solche Rollouts im Mittelstand bereits umgesetzt.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="faq">
            <FaqContainer
              faqs={[
                {
                  question: "Wie installiere ich Claude Code?",
                  answer:
                    "Der empfohlene Weg ist der native Installer: auf macOS und Linux der Terminal-Befehl 'curl -fsSL https://claude.ai/install.sh | bash', auf Windows der PowerShell-Befehl 'irm https://claude.ai/install.ps1 | iex'. Node.js ist dafür nicht nötig, Admin-Rechte auch nicht. Danach Terminal neu öffnen und mit 'claude --version' prüfen.",
                },
                {
                  question: "Brauche ich Node.js für Claude Code?",
                  answer:
                    "Nein. Der native Installer und die Paketmanager-Wege (Homebrew, WinGet, apt) laden eine eigenständige Binary ohne Node-Abhängigkeit. Nur der npm-Installationsweg setzt eine Node-Umgebung voraus, inzwischen Node 22 oder neuer, und gilt als Legacy-Option für Teams, die ohnehin npm-zentriert arbeiten.",
                },
                {
                  question: "Ist Claude Code kostenlos?",
                  answer:
                    "Die Software selbst kostet nichts, aber die Nutzung erfordert ein Claude-Abo (Pro, Max, Team oder Enterprise) oder einen Anthropic-Console-Account mit API-Abrechnung pro Token. Der kostenlose Claude.ai-Plan enthält keinen Claude-Code-Zugriff.",
                },
                {
                  question: "Brauche ich auf Windows WSL für Claude Code?",
                  answer:
                    "Nein, seit Ende 2025 läuft Claude Code nativ auf Windows 10 (1809) und neuer, installiert per PowerShell-Einzeiler oder WinGet. WSL 2 bleibt sinnvoll, wenn Projekte auf einer Linux-Toolchain aufbauen oder das Sandboxing genutzt werden soll, das unter nativem Windows nicht unterstützt wird.",
                },
                {
                  question: "Wie update ich Claude Code?",
                  answer:
                    "Die native Installation aktualisiert sich automatisch im Hintergrund; 'claude update' stößt ein Update manuell an. Paketmanager-Installationen updaten nicht selbst: 'brew upgrade claude-code', 'winget upgrade Anthropic.ClaudeCode' oder der normale apt/dnf-Systemupdate-Weg. Bei npm gilt 'npm install -g @anthropic-ai/claude-code@latest'.",
                },
                {
                  question: "Wie deinstalliere ich Claude Code wieder?",
                  answer:
                    "Bei der nativen Installation genügt das Löschen von '~/.local/bin/claude' und '~/.local/share/claude', unter Windows die entsprechenden Ordner im Benutzerprofil. Paketmanager nutzen ihre Standard-Befehle wie 'brew uninstall --cask claude-code' oder 'winget uninstall Anthropic.ClaudeCode'. Wer auch Einstellungen und Session-Verlauf entfernen will, löscht zusätzlich '~/.claude' und '~/.claude.json'.",
                },
                {
                  question: "Warum findet mein Terminal den Befehl claude nicht?",
                  answer:
                    "In neun von zehn Fällen wurde das Terminal nach der Installation nicht neu geöffnet. Ansonsten fehlt das Installationsverzeichnis im PATH: '~/.local/bin' auf macOS und Linux, '%USERPROFILE%\\.local\\bin' auf Windows. Nach dem Ergänzen alle Terminalfenster neu starten; 'claude doctor' hilft bei der Diagnose.",
                },
              ]}
            >
              <FaqContainer.Headline>
                Häufige Fragen zur Claude Code Installation
              </FaqContainer.Headline>
            </FaqContainer>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="entscheidungen">
            Zwei Entscheidungen vorab
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="macos-linux">
            macOS und Linux
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="windows">
            Windows: nativ oder WSL
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="anmelden">
            Anmelden und verifizieren
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="erste-schritte">
            Die ersten 10 Minuten
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="fehler">
            Häufige Fehler
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="team-rollout">
            Team-Rollout
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="faq">
            FAQ
          </BlogLayout.NavigationItem>
        </BlogLayout.Navigation>
      </BlogLayout>
    </>
  );
}
