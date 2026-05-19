import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Link from "next/link";
import Typo from "@/components/ui/typo";
import { BlogImage, Separator, BlogLayout, BlogHero } from "@/components/blog";

export const metaCustom: BlogMeta = {
  slug: "n8n-installieren-anleitung",
  author: "Max Hänsel",
  date: "2026-05-16",
  image: "/blog/n8n-installieren-anleitung/hero.png",
  tags: ["n8n", "development"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title:
    "n8n installieren: Anleitung für npx, Docker und Desktop App | Bluebatch",
  description:
    "n8n installieren in unter 5 Minuten: Schritt-für-Schritt-Anleitung für npx, Docker und die Desktop App auf Windows und Mac. Mit erstem Workflow.",
  openGraph: {
    title: "n8n installieren: 3 Wege zur lokalen Installation",
    description:
      "npx, Docker oder Desktop App: So installierst du n8n lokal und baust deinen ersten Workflow. Einsteiger-Guide mit klarer Entscheidungshilfe.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/n8n-installieren-anleitung/hero.png",
        width: 1200,
        height: 630,
        alt: "n8n installieren: Anleitung für npx, Docker und Desktop",
      },
    ],
  },
  alternates: {
    canonical: "/blog/n8n-installieren-anleitung",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          n8n installieren: Anleitung für npx, Docker und Desktop App
        </BlogHero.Headline>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>10 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-05-16">
            16. Mai 2026
          </BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/n8n-installieren-anleitung/hero.png"
          alt="n8n installieren: Anleitung für npx, Docker und Desktop"
        />
      </BlogHero>

      <BlogLayout>
        <BlogLayout.Content>
          <div>
            <Typo.H2 id="was-ist-n8n">
              Was ist n8n?
            </Typo.H2>
            <Typo.Paragraph>
              n8n ist eine Open-Source-Plattform für Workflow-Automatisierung.
              Über eine visuelle Oberfläche lassen sich Datenquellen, APIs und
              interne Systeme miteinander verbinden, ohne für jeden Schritt
              Code schreiben zu müssen. Das Ergebnis sind automatisierte
              Abläufe, die manuelle Routinearbeit ersetzen: von der
              Bestellverarbeitung über die Rechnungsprüfung bis hin zu
              KI-gestützten Support-Workflows.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Einen ausführlichen Überblick über Funktionen, Einsatzgebiete
              und die Architektur von n8n liefert unser{" "}
              <Link
                href="/blog/was-ist-n8n"
                className="text-primary-600 hover:underline"
              >
                Einführungsartikel zu n8n
              </Link>
              . In diesem Guide geht es ausschließlich um die Installation:
              Welche Wege gibt es, welcher passt zu welchem Szenario, und wie
              läuft die erste Einrichtung Schritt für Schritt ab.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="installationswege">
              Drei Installationswege im Überblick
            </Typo.H2>
            <Typo.Paragraph>
              n8n lässt sich auf drei Wegen lokal installieren. Jeder Weg hat
              seine Stärken, und die Wahl hängt davon ab, was du vorhast und
              welche Tools du bereits auf dem Rechner hast.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/n8n-installieren-anleitung/installation-methods.png"
              alt="Drei Installationswege für n8n: npx, Docker, Desktop App"
              width={1200}
              height={675}
            />

            <div className="my-6 overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">
                      Methode
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">
                      Voraussetzung
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">
                      Ideal für
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">
                      Daten persistent?
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 font-medium">npx</td>
                    <td className="px-4 py-3">Node.js 18+</td>
                    <td className="px-4 py-3">
                      Schnelles Ausprobieren, Entwickler
                    </td>
                    <td className="px-4 py-3">Ja (lokales Verzeichnis)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Docker</td>
                    <td className="px-4 py-3">Docker Desktop / Engine</td>
                    <td className="px-4 py-3">
                      Reproduzierbare Umgebung, Weg zur Produktion
                    </td>
                    <td className="px-4 py-3">Ja (Docker Volume)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Desktop App</td>
                    <td className="px-4 py-3">Windows oder macOS</td>
                    <td className="px-4 py-3">
                      Einsteiger ohne CLI-Erfahrung
                    </td>
                    <td className="px-4 py-3">Ja (App-Daten)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Typo.Paragraph>
              Alle drei Wege führen zur gleichen n8n-Oberfläche im Browser.
              Der Unterschied liegt im Setup-Aufwand und darin, wie nah das
              lokale Setup am späteren Produktivbetrieb ist. Wer n8n nur
              einmal ausprobieren will, ist mit npx oder der Desktop App in
              zwei Minuten startklar. Wer von Anfang an Richtung Produktion
              denkt, startet besser mit Docker.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="npx">
              n8n installieren mit npx
            </Typo.H2>
            <Typo.Paragraph>
              Der schnellste Weg: ein einziger Befehl im Terminal. npx
              lädt n8n herunter, startet es und öffnet die Oberfläche im
              Browser. Einzige Voraussetzung ist Node.js in Version 18 oder
              höher. Ob das auf dem Rechner vorhanden ist, zeigt ein schneller
              Check.
            </Typo.Paragraph>

            <Typo.H3>Schritt 1: Node.js prüfen</Typo.H3>
            <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 my-4 overflow-x-auto text-sm">
              <code>
{`node --version
# Ausgabe: v18.x.x oder höher → passt
# Fehler oder Version < 18 → Node.js von nodejs.org installieren`}
              </code>
            </pre>

            <Typo.H3>Schritt 2: n8n starten</Typo.H3>
            <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 my-4 overflow-x-auto text-sm">
              <code>
{`npx n8n`}
              </code>
            </pre>
            <Typo.Paragraph>
              npx lädt die aktuellste n8n-Version herunter und startet den
              Server. Nach wenigen Sekunden erscheint im Terminal eine URL,
              typischerweise <code>http://localhost:5678</code>. Diese im
              Browser öffnen, ein Owner-Konto anlegen, fertig.
            </Typo.Paragraph>

            <Typo.H3>Schritt 3: Daten dauerhaft speichern</Typo.H3>
            <Typo.Paragraph>
              Standardmäßig speichert n8n seine Daten im Home-Verzeichnis
              unter <code>~/.n8n</code>. Workflows, Credentials und
              Execution-Logs bleiben dort auch nach einem Neustart erhalten.
              Wer ein eigenes Verzeichnis nutzen will, setzt die
              Umgebungsvariable <code>N8N_USER_FOLDER</code> vor dem Start.
            </Typo.Paragraph>

            <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 my-4 overflow-x-auto text-sm">
              <code>
{`# Beispiel: n8n-Daten in einem Projektordner speichern
export N8N_USER_FOLDER=./mein-n8n-projekt
npx n8n`}
              </code>
            </pre>

            <Typo.H3>Wann npx die richtige Wahl ist</Typo.H3>
            <Typo.Paragraph>
              npx eignet sich perfekt zum schnellen Ausprobieren und für
              Entwickler, die n8n in ein bestehendes Node.js-Projekt
              einbetten wollen. Für den dauerhaften Betrieb mit mehreren
              Nutzern oder externen Webhooks empfiehlt sich Docker oder
              die Cloud-Variante. Was n8n in der Gratisversion alles kann
              und wo die Grenzen liegen, erklärt unser{" "}
              <Link
                href="/blog/ist-n8n-kostenlos"
                className="text-primary-600 hover:underline"
              >
                Beitrag zur kostenlosen Nutzung von n8n
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="docker">
              n8n installieren mit Docker
            </Typo.H2>
            <Typo.Paragraph>
              Docker isoliert n8n komplett vom Rest des Systems. Das macht
              die Installation reproduzierbar, Updates einfacher und bildet
              gleichzeitig die Grundlage für ein späteres produktives Setup.
              Docker Desktop muss auf dem Rechner laufen (Windows, Mac) oder
              Docker Engine auf Linux.
            </Typo.Paragraph>

            <Typo.H3>Schritt 1: Docker prüfen</Typo.H3>
            <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 my-4 overflow-x-auto text-sm">
              <code>
{`docker --version
# Ausgabe: Docker version 24.x oder höher → passt`}
              </code>
            </pre>

            <Typo.H3>Schritt 2: n8n-Container starten</Typo.H3>
            <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 my-4 overflow-x-auto text-sm">
              <code>
{`docker run -it --rm \\
  --name n8n \\
  -p 5678:5678 \\
  -v n8n_data:/home/node/.n8n \\
  n8nio/n8n`}
              </code>
            </pre>
            <Typo.Paragraph>
              Dieser Befehl zieht das offizielle n8n-Image, startet einen
              Container, macht Port 5678 erreichbar und legt die Daten in
              ein Docker Volume namens <code>n8n_data</code>. Nach dem Start
              ist n8n unter <code>http://localhost:5678</code> erreichbar.
            </Typo.Paragraph>

            <Typo.H3>Schritt 3: Zeitzone setzen</Typo.H3>
            <Typo.Paragraph>
              Ohne explizite Zeitzone laufen Schedule-Trigger nach UTC.
              Für korrekte Auslösezeiten die Umgebungsvariable mitgeben:
            </Typo.Paragraph>
            <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 my-4 overflow-x-auto text-sm">
              <code>
{`docker run -it --rm \\
  --name n8n \\
  -p 5678:5678 \\
  -e GENERIC_TIMEZONE=Europe/Berlin \\
  -e TZ=Europe/Berlin \\
  -v n8n_data:/home/node/.n8n \\
  n8nio/n8n`}
              </code>
            </pre>

            <Typo.H3>Von Docker zu Docker Compose</Typo.H3>
            <Typo.Paragraph>
              Ein einzelner <code>docker run</code>-Befehl reicht für den
              lokalen Test. Sobald Postgres als Datenbank und ein Reverse
              Proxy dazukommen, wird Docker Compose der bessere Weg.
              Den kompletten Compose-Stack mit Caddy und Postgres für den
              Produktivbetrieb beschreibt unsere{" "}
              <Link
                href="/blog/n8n-selbst-hosten-anleitung"
                className="text-primary-600 hover:underline"
              >
                Anleitung zum n8n Self-Hosting
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="desktop-app">
              n8n Desktop App für Windows und macOS
            </Typo.H2>
            <Typo.Paragraph>
              Für Einsteiger ohne Terminal-Erfahrung bietet n8n eine
              Desktop App. Sie bündelt n8n, Node.js und einen lokalen
              Server in eine installierbare Anwendung. Kein Docker, kein
              npm, kein Terminal nötig.
            </Typo.Paragraph>

            <Typo.H3>Installation</Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                Die Desktop App von der{" "}
                <a
                  href="https://docs.n8n.io/choose-n8n/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:underline"
                >
                  offiziellen n8n-Website
                </a>{" "}
                herunterladen.
              </Typo.ListItem>
              <Typo.ListItem>
                Installer ausführen (Windows: .exe, macOS: .dmg).
              </Typo.ListItem>
              <Typo.ListItem>
                App starten, der interne Server fährt automatisch hoch.
              </Typo.ListItem>
              <Typo.ListItem>
                Die n8n-Oberfläche öffnet sich direkt im App-Fenster.
              </Typo.ListItem>
            </Typo.List>

            <Typo.H3>Einschränkungen der Desktop App</Typo.H3>
            <Typo.Paragraph>
              Die Desktop App eignet sich zum Kennenlernen und für lokale
              Tests. Für den produktiven Einsatz hat sie drei Grenzen:
              Erstens sind Webhooks nur lokal erreichbar, externe Dienste
              können also keine Daten an n8n schicken. Zweitens läuft n8n
              nur, solange die App offen ist, es gibt keinen Hintergrund-
              Dienst. Drittens fehlen Updates teilweise hinter der
              CLI-Version her. Für alles über Prototypen hinaus sind Docker
              oder npx die bessere Wahl.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="erster-workflow">
              Der erste Workflow nach der Installation
            </Typo.H2>
            <Typo.Paragraph>
              n8n läuft? Gut. Der nächste Schritt ist ein kleiner Workflow,
              der zeigt, wie die Plattform funktioniert. Das Ziel: Ein
              Schedule-Trigger löst alle 5 Minuten aus, ruft eine öffentliche
              API ab und speichert das Ergebnis.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/n8n-installieren-anleitung/first-workflow.png"
              alt="Erster n8n Workflow: Schedule Trigger, HTTP Request, Speichern"
              width={1200}
              height={675}
            />

            <Typo.H3>Schritt für Schritt</Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                In der n8n-Oberfläche auf &quot;New Workflow&quot; klicken.
              </Typo.ListItem>
              <Typo.ListItem>
                Einen <strong>Schedule Trigger</strong> hinzufügen und auf
                &quot;Every 5 minutes&quot; stellen.
              </Typo.ListItem>
              <Typo.ListItem>
                Einen <strong>HTTP Request</strong>-Node anhängen. Als URL
                zum Beispiel{" "}
                <code>https://api.openweathermap.org/data/2.5/weather?q=Berlin&amp;appid=demo</code>
                {" "}eintragen (oder eine andere öffentliche API).
              </Typo.ListItem>
              <Typo.ListItem>
                Auf <strong>Execute Workflow</strong> klicken. Im
                Output-Panel erscheinen die API-Daten.
              </Typo.ListItem>
              <Typo.ListItem>
                Den Workflow speichern und über den Toggle oben rechts
                aktivieren.
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Damit steht das Grundprinzip: Trigger löst aus, Nodes
              verarbeiten Daten, Ergebnis kommt raus. Von hier aus lassen
              sich beliebig komplexe Workflows bauen. Wer direkt mit
              KI-Nodes arbeiten will, findet im Guide zu{" "}
              <Link
                href="/blog/n8n-ki-agenten-erstellen"
                className="text-primary-600 hover:underline"
              >
                KI-Agenten mit n8n
              </Link>{" "}
              den nächsten Schritt. Und wer n8n im Großhandelskontext
              einsetzen will, findet in den{" "}
              <Link
                href="/blog/n8n-workflows-fuer-den-grosshandel"
                className="text-primary-600 hover:underline"
              >
                n8n-Workflows für den Großhandel
              </Link>{" "}
              konkrete Praxis-Beispiele.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="lokal-zu-produktion">
              Von der lokalen Installation zur Produktion
            </Typo.H2>
            <Typo.Paragraph>
              Eine lokale n8n-Instanz reicht zum Lernen und Prototypen.
              Sobald Workflows zuverlässig laufen sollen, externe Webhooks
              empfangen oder mehrere Nutzer gleichzeitig arbeiten, braucht
              es ein produktives Setup.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/n8n-installieren-anleitung/local-to-production.png"
              alt="Von der lokalen n8n-Installation zur Produktionsumgebung"
              width={1200}
              height={675}
            />

            <Typo.H3>Was sich ändert</Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                <strong>Datenbank:</strong> SQLite (Standard lokal) wird
                durch Postgres ersetzt. Postgres skaliert besser und lässt
                sich sauber mit pg_dump sichern.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Reverse Proxy:</strong> n8n bekommt einen Reverse
                Proxy (Caddy, Traefik oder Nginx) mit automatischem
                TLS-Zertifikat.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Backups:</strong> Tägliche Backups von Datenbank und
                n8n-Volume auf einen externen Speicher.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Monitoring:</strong> Uptime-Check, Execution-Logs
                und Disk-Füllstand überwachen.
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Die komplette Anleitung für den Produktivbetrieb mit Docker
              Compose, Postgres, Caddy und Backup-Skripten steht in unserem{" "}
              <Link
                href="/blog/n8n-selbst-hosten-anleitung"
                className="text-primary-600 hover:underline"
              >
                Self-Hosting-Guide
              </Link>
              . Wer die Infrastruktur nicht selbst betreiben will, findet
              mit{" "}
              <Link
                href="/n8n-hosting-deutschland"
                className="text-primary-600 hover:underline"
              >
                Managed n8n-Hosting
              </Link>{" "}
              eine Alternative mit deutschen Rechenzentren.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="fazit">
              Fazit: n8n installieren und loslegen
            </Typo.H2>
            <Typo.Paragraph>
              n8n installieren dauert unter fünf Minuten. npx für den
              schnellsten Start, Docker für reproduzierbare Umgebungen und
              den kürzesten Weg zur Produktion, die Desktop App für den
              Einstieg ohne Terminal. Egal welchen Weg du wählst: Nach
              der Installation steht die gleiche leistungsfähige
              Automatisierungsplattform bereit.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der wichtigste nächste Schritt ist nicht die perfekte
              Infrastruktur, sondern der erste echte Workflow. Fang mit
              einem kleinen Prozess an, der heute manuell läuft, und
              automatisiere ihn. Von dort aus wächst das Setup organisch.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Ihr plant, n8n für euer Team produktiv einzusetzen?{" "}
              <Link href="/contact" className="text-primary-600 hover:underline">
                Sprecht uns an
              </Link>
              , wir helfen beim Setup und der Architektur.
            </Typo.Paragraph>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="was-ist-n8n">
            Was ist n8n?
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="installationswege">
            Installationswege im Überblick
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="npx">
            Installation mit npx
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="docker">
            Installation mit Docker
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="desktop-app">
            Desktop App
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="erster-workflow">
            Erster Workflow
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="lokal-zu-produktion">
            Lokal zur Produktion
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="fazit">
            Fazit
          </BlogLayout.NavigationItem>
        </BlogLayout.Navigation>
      </BlogLayout>
    </>
  );
}
