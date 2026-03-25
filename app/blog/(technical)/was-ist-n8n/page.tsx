import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Typo from "@/components/ui/typo";
import { BlogImage, Separator, BlogLayout, BlogHero } from "@/components/blog";

export const metaCustom: BlogMeta = {
  slug: "was-ist-n8n",
  author: "Max Hänsel",
  date: "2026-03-25",
  image: "/blog/was-ist-n8n/hero.png",
  tags: ["n8n", "ki", "automatisierung"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title:
    "Was ist n8n? Der komplette Guide für Einsteiger (2026) | Bluebatch",
  description:
    "Was ist n8n? Open-Source Workflow-Automatisierung mit KI-Integration, Self-Hosting und DSGVO-Konformität. Vergleich mit Zapier & Make, Kosten, 10 Use Cases.",
  openGraph: {
    title: "Was ist n8n? Der komplette Guide für Einsteiger (2026)",
    description:
      "Was ist n8n? Open-Source Workflow-Automatisierung mit KI-Integration, Self-Hosting und DSGVO-Konformität. Vergleich mit Zapier & Make, Kosten, 10 Use Cases.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/was-ist-n8n/hero.png",
        width: 1200,
        height: 630,
        alt: "Was ist n8n? Der komplette Guide für Einsteiger (2026)",
      },
    ],
  },
  alternates: {
    canonical: "/blog/was-ist-n8n",
  },
};

export default function Page() {  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          Was ist n8n? Der komplette Guide für Einsteiger (2026)
        </BlogHero.Headline>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>12 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-03-25">
            25. März 2026
          </BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/was-ist-n8n/hero.png"
          alt="Was ist n8n? Der komplette Guide für Einsteiger (2026)"
        />
      </BlogHero>

      <BlogLayout>
        <BlogLayout.Content>
          {/* 1. Was ist n8n? */}
          <div>
            <Typo.H2 id="was-ist-n8n">Was ist n8n?</Typo.H2>
            <Typo.Paragraph>
              n8n (ausgesprochen &quot;n-eight-n&quot;) ist eine
              Open-Source-Plattform für Workflow-Automatisierung und n8n
              Automatisierung von Geschäftsprozessen. Der Name ist ein
              Numeronym:{" "}
              <strong>nodemation</strong>
              {" "}&mdash; also &quot;node&quot; plus &quot;automation&quot;,
              wobei die 8 für die acht Buchstaben dazwischen steht.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Gegründet 2019 von Jan Oberhauser in Berlin, hat sich n8n in
              wenigen Jahren zu einem der am schnellsten wachsenden
              Automation-Tools weltweit entwickelt. Im Oktober 2025 erreichte
              das Unternehmen eine Bewertung von 2,5 Milliarden Dollar, mit
              gerade mal 67 Mitarbeitern.
            </Typo.Paragraph>

            <Typo.H3>Die Kurzfassung</Typo.H3>
            <Typo.Paragraph>
              n8n verbindet Apps, Systeme und Datenquellen miteinander. Per
              Drag-and-Drop baut man visuelle Workflows, die Aufgaben
              automatisch erledigen. Klingt erstmal wie Zapier oder Make.
              Tatsächlich ist n8n die meistgenutzte Zapier Alternative im
              Open-Source-Bereich. Der entscheidende Unterschied: n8n kann man
              kostenlos auf dem eigenen Server betreiben, es unterstützt echten
              Programmcode (JavaScript und Python) und hat die mit Abstand
              stärksten KI-Funktionen am Markt.
            </Typo.Paragraph>

            <Typo.H3>n8n in Zahlen (Stand März 2026)</Typo.H3>
            <div className="my-6 overflow-x-auto">
              <table className="min-w-full text-sm border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold border-b border-gray-200">
                      Kennzahl
                    </th>
                    <th className="px-4 py-2 text-left font-semibold border-b border-gray-200">
                      Wert
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-100">
                      GitHub Stars
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      178.000
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Integrationen
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      400+ nativ, 600+ Community
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Workflow-Templates
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      8.500+
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Aktive Nutzer
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      230.000+
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Unternehmen weltweit
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      20.000+
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-100">
                      AI-Workflow-Templates
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      5.800+
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Aktuelle Version
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      n8n 2.10
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Bewertung
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      2,5 Mrd. $
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <Separator />

          {/* 2. Wie funktioniert n8n? */}
          <div>
            <Typo.H2 id="wie-funktioniert-n8n">
              Wie funktioniert n8n?
            </Typo.H2>
            <Typo.Paragraph>
              Die Grundidee ist simpel: Ein Workflow besteht aus{" "}
              <strong>Nodes</strong>
              {" "}(Knotenpunkten), die miteinander verbunden werden. Jeder Node
              macht genau eine Sache, Daten empfangen, verarbeiten, weiterleiten
              oder ausgeben.
            </Typo.Paragraph>

            <Typo.H3>Die drei Node-Typen</Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                <strong>Trigger Nodes</strong>
                {" "}&mdash; Starten den Workflow. Zum Beispiel: eine neue E-Mail
                kommt rein, ein Webhook wird aufgerufen, oder ein Zeitplan löst
                den Start aus.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Action Nodes</strong>
                {" "}&mdash; Führen eine Aktion aus. Zum Beispiel: Daten in eine
                Datenbank schreiben, eine E-Mail senden, oder einen API-Aufruf
                machen.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Logic Nodes</strong>
                {" "}&mdash; Steuern den Ablauf. Zum Beispiel: If/Else-Verzweigungen,
                Schleifen, Daten zusammenführen oder aufteilen.
              </Typo.ListItem>
            </Typo.List>

            <Typo.H3>Ein einfaches n8n Beispiel</Typo.H3>
            <Typo.Paragraph>
              Stell dir vor, du willst jeden Morgen eine Zusammenfassung deiner
              offenen Bestellungen per Slack erhalten:
            </Typo.Paragraph>
            <pre className="my-4 overflow-x-auto rounded-md bg-gray-50 p-4 text-sm">
              <code>
                Cron (8:00 Uhr) &rarr; ERP-API abfragen &rarr; Offene
                Bestellungen filtern &rarr; Slack-Nachricht senden
              </code>
            </pre>
            <Typo.Paragraph>
              In n8n baust du das in 5 Minuten zusammen. Vier Nodes, miteinander
              verbunden. Fertig.
            </Typo.Paragraph>

            <Typo.H3>Was n8n besonders macht</Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                <strong>Visueller Editor:</strong>
                {" "}Man sieht sofort, was passiert. Jeder Node zeigt seine Ein-
                und Ausgabedaten in Echtzeit.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Code wenn nötig:</strong>
                {" "}Wer will, schreibt JavaScript oder Python direkt im Workflow.
                Externe npm-Pakete lassen sich im Self-Hosted-Modus
                installieren.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Fehlerbehandlung:</strong>
                {" "}Error Workflows fangen Probleme ab und benachrichtigen das
                Team, statt still zu scheitern.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Sub-Workflows:</strong>
                {" "}Komplexe Abläufe lassen sich in wiederverwendbare Bausteine
                zerlegen.
              </Typo.ListItem>
            </Typo.List>
          </div>

          <Separator />

          {/* 3. n8n vs. Zapier vs. Make */}
          <div>
            <Typo.H2 id="n8n-vs-zapier-vs-make">
              n8n vs. Zapier vs. Make: Was ist der Unterschied?
            </Typo.H2>
            <BlogImage
              src="/blog/was-ist-n8n/n8n-vs-zapier-vs-make.png"
              alt="Vergleichstabelle n8n vs. Zapier vs. Make"
              width={1200}
              height={800}
            />
            <Typo.Paragraph>
              Die drei Tools werden oft verglichen. Alle drei automatisieren
              Workflows. Aber sie unterscheiden sich grundlegend in Philosophie,
              Zielgruppe und Kostenmodell.
            </Typo.Paragraph>

            <Typo.H3>Der große Vergleich</Typo.H3>
            <div className="my-6 overflow-x-auto">
              <table className="min-w-full text-sm border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold border-b border-gray-200">
                      Kriterium
                    </th>
                    <th className="px-4 py-2 text-left font-semibold border-b border-gray-200">
                      n8n
                    </th>
                    <th className="px-4 py-2 text-left font-semibold border-b border-gray-200">
                      Zapier
                    </th>
                    <th className="px-4 py-2 text-left font-semibold border-b border-gray-200">
                      Make
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-100 font-medium">
                      Self-Hosting
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Ja, kostenlos
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">Nein</td>
                    <td className="px-4 py-2 border-b border-gray-100">Nein</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-100 font-medium">
                      Abrechnung
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Pro Workflow-Durchlauf
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Pro einzelner Aktion
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Pro Operation/Credit
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-100 font-medium">
                      Code-Support
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      JavaScript + Python, npm-Pakete
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Eingeschränkt (6 MB Limit)
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Nur Enterprise
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-100 font-medium">
                      AI-Funktionen
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      70+ KI-Nodes, LangChain, Agents
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Basis-AI-Features
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Konnektor-basiert
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-100 font-medium">
                      Native Integrationen
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">400+</td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      8.000+
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      1.500+
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-100 font-medium">
                      Lernkurve
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Mittel bis hoch
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Niedrig
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Mittel
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-100 font-medium">
                      Datenkontrolle
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Voll (Self-Hosting)
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Daten in Zapier Cloud
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Daten in Make Cloud
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-100 font-medium">
                      Open Source
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Ja (Fair-Code)
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">Nein</td>
                    <td className="px-4 py-2 border-b border-gray-100">Nein</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Typo.H3>Warum das Abrechnungsmodell den Unterschied macht</Typo.H3>
            <Typo.Paragraph>
              Das ist der Punkt, den die meisten übersehen:{" "}
              <strong>
                Bei n8n zählt ein Workflow-Durchlauf als eine Execution, egal wie
                viele Schritte der Workflow hat.
              </strong>
            </Typo.Paragraph>
            <Typo.Paragraph>
              Ein konkretes Beispiel: Du hast einen Workflow mit 20 Nodes, der
              einmal pro Tag läuft.
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>n8n:</strong>
                {" "}1 Execution pro Tag = 30 pro Monat
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Zapier:</strong>
                {" "}20 Tasks pro Durchlauf &times; 30 Tage = 600 Tasks pro Monat
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Make:</strong>
                {" "}20 Operations pro Durchlauf &times; 30 Tage = 600 Operations
                pro Monat
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Bei komplexen Workflows wird der Kostenunterschied schnell massiv.
            </Typo.Paragraph>

            <Typo.H3>Wann welches Tool?</Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                <strong>n8n</strong>, wenn du technische Workflows brauchst, n8n
                Datenschutz wichtig ist oder du n8n Automatisierung mit KI bauen
                willst
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Zapier</strong>, wenn du schnell einfache Automationen
                brauchst und nicht programmieren willst, für alles darüber hinaus
                ist n8n die bessere Zapier Alternative
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Make</strong>, wenn du visuell komplexe Workflows zu
                einem fairen Preis suchst
              </Typo.ListItem>
            </Typo.List>
          </div>

          <Separator />

          {/* 4. Self-Hosting */}
          <div>
            <Typo.H2 id="self-hosting">
              Self-Hosting: n8n auf dem eigenen Server
            </Typo.H2>
            <BlogImage
              src="/blog/was-ist-n8n/self-hosting-kosten.png"
              alt="Self-Hosting Kostenvergleich für n8n"
              width={1200}
              height={800}
            />
            <Typo.Paragraph>
              Das größte Alleinstellungsmerkmal von n8n: Du kannst es komplett
              auf deinem eigenen Server betreiben. Kostenlos. Ohne
              Execution-Limits.
            </Typo.Paragraph>

            <Typo.H3>Was brauchst du dafür?</Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                Einen Linux-Server mit mindestens 2 GB RAM
              </Typo.ListItem>
              <Typo.ListItem>
                Docker und Docker Compose (empfohlen)
              </Typo.ListItem>
              <Typo.ListItem>
                15 Minuten Zeit für die Einrichtung
              </Typo.ListItem>
            </Typo.List>

            <Typo.H3>Was kostet das?</Typo.H3>
            <div className="my-6 overflow-x-auto">
              <table className="min-w-full text-sm border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold border-b border-gray-200">
                      Setup
                    </th>
                    <th className="px-4 py-2 text-left font-semibold border-b border-gray-200">
                      Monatliche Kosten
                    </th>
                    <th className="px-4 py-2 text-left font-semibold border-b border-gray-200">
                      Geeignet für
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Hetzner CX22 (Hetzner n8n)
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      ~5 &euro;/Monat
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Kleine Teams, erste Workflows
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Mittelklasse-VPS
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      20&ndash;50 &euro;/Monat
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Produktive Nutzung, mehrere User
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Production-Grade
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      100&ndash;300 &euro;/Monat
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Große Teams, hohe Verfügbarkeit
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Typo.Paragraph>
              Ein Hetzner-Server für 5 Euro im Monat reicht für die meisten
              kleinen und mittleren Setups, Hetzner n8n ist die beliebteste
              Kombination in der Community. Und du hast keine Limits bei
              Workflows oder Durchläufen.
            </Typo.Paragraph>

            <Typo.H3>Self-Hosted vs. n8n Cloud</Typo.H3>
            <div className="my-6 overflow-x-auto">
              <table className="min-w-full text-sm border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold border-b border-gray-200">
                      Aspekt
                    </th>
                    <th className="px-4 py-2 text-left font-semibold border-b border-gray-200">
                      Self-Hosted
                    </th>
                    <th className="px-4 py-2 text-left font-semibold border-b border-gray-200">
                      n8n Cloud
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Kosten Software
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      0 &euro;
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Ab 24 &euro;/Monat
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Executions
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Unbegrenzt
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      2.500&ndash;40.000/Monat
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Wartung
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Du selbst
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      n8n übernimmt
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Updates
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Manuell (alle 2&ndash;4 Wochen)
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Automatisch
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Datenkontrolle
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      100 % bei dir
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      n8n Cloud (Frankfurt)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Support
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Community-Forum
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Inkludiert
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Typo.H3>Wichtige Tipps</Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                <strong>Immer</strong>
                {" "}PostgreSQL statt SQLite für produktive Instanzen nutzen
              </Typo.ListItem>
              <Typo.ListItem>
                Den Encryption Key separat sichern, ohne ihn sind alle
                gespeicherten Credentials verloren
              </Typo.ListItem>
              <Typo.ListItem>
                n8n nie ohne Reverse Proxy (Caddy oder Nginx) betreiben
              </Typo.ListItem>
              <Typo.ListItem>
                Regelmäßige Backups der Datenbank einrichten
              </Typo.ListItem>
            </Typo.List>
          </div>

          <Separator />

          {/* 5. AI und KI-Integration */}
          <div>
            <Typo.H2 id="ai-und-ki-integration">
              AI und KI-Integration in n8n
            </Typo.H2>
            <BlogImage
              src="/blog/was-ist-n8n/ai-agent-architektur.png"
              alt="AI Agent Architektur in n8n"
              width={1200}
              height={800}
            />
            <Typo.Paragraph>
              Hier hat n8n den größten Vorsprung gegenüber der Konkurrenz. Mit
              über 70 dedizierten KI-Nodes ist n8n die leistungsfähigste
              Plattform für KI-Automatisierungen.
            </Typo.Paragraph>

            <Typo.H3>Unterstützte KI-Modelle</Typo.H3>
            <Typo.Paragraph>
              n8n integriert alle großen Anbieter als native Nodes:
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>OpenAI</strong>
                {" "}(GPT-4o, GPT-5, o1, o3)
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Anthropic</strong>
                {" "}(Claude 3.5, Claude 4)
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Google</strong>
                {" "}(Gemini 2.0)
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Lokale Modelle</strong>
                {" "}via Ollama (Llama 3, Mistral, Phi, komplett kostenlos)
              </Typo.ListItem>
              <Typo.ListItem>
                AWS Bedrock, Azure OpenAI, Groq, DeepSeek, Cohere, Mistral,
                OpenRouter
              </Typo.ListItem>
            </Typo.List>

            <Typo.H3>Der AI Agent Node</Typo.H3>
            <Typo.Paragraph>
              Das Herzstück ist der{" "}
              <strong>AI Agent Node</strong>. Er funktioniert wie ein
              intelligenter Assistent, der Werkzeuge benutzen kann:
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                Du gibst dem Agent ein Ziel (System Prompt)
              </Typo.ListItem>
              <Typo.ListItem>
                Du gibst ihm Werkzeuge (Tools): Suche, Datenbank, API-Aufrufe,
                andere Workflows
              </Typo.ListItem>
              <Typo.ListItem>
                Der Agent entscheidet selbständig, welche Werkzeuge er in welcher
                Reihenfolge nutzt
              </Typo.ListItem>
              <Typo.ListItem>
                Optional: Human-in-the-Loop, damit ein Mensch vor kritischen
                Schritten zustimmen muss
              </Typo.ListItem>
            </Typo.List>

            <Typo.H3>RAG: Deine eigenen Daten als Wissensquelle</Typo.H3>
            <Typo.Paragraph>
              Mit RAG (Retrieval Augmented Generation) kann n8n deine
              Firmendokumente als Wissensquelle nutzen:
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                Dokumente hochladen (PDFs, Websites, Google Drive)
              </Typo.ListItem>
              <Typo.ListItem>
                Text in Chunks aufteilen und als Vektoren speichern (Pinecone,
                Qdrant, PGVector)
              </Typo.ListItem>
              <Typo.ListItem>
                KI beantwortet Fragen basierend auf deinen Daten
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Es gibt über 560 fertige RAG-Workflow-Templates in der Community.
              Wer n8n Beispiele für KI-Workflows sucht, findet in der
              Template-Bibliothek über 5.800 sofort nutzbare Vorlagen.
            </Typo.Paragraph>

            <Typo.H3>MCP: Das neue Protokoll</Typo.H3>
            <Typo.Paragraph>
              Seit 2025 unterstützt n8n das{" "}
              <strong>Model Context Protocol (MCP)</strong>
              {" "}von Anthropic. Damit können KI-Modelle (z.B. Claude) direkt
              n8n-Workflows als Werkzeuge nutzen, und umgekehrt kann n8n externe
              MCP-Tools in seine Agents einbinden.
            </Typo.Paragraph>
          </div>

          <Separator />

          {/* 6. 10 praktische Anwendungsfälle */}
          <div>
            <Typo.H2 id="anwendungsfaelle-grosshandel">
              10 praktische Anwendungsfälle für den Großhandel
            </Typo.H2>
            <BlogImage
              src="/blog/was-ist-n8n/use-cases-uebersicht.png"
              alt="Übersicht der 10 Anwendungsfälle für n8n im Großhandel"
              width={1200}
              height={800}
            />
            <Typo.Paragraph>
              n8n eignet sich besonders gut für den Großhandel, weil es als
              zentraler Orchestrator zwischen allen Systemen fungiert: ERP,
              Onlineshop, CRM, Lager, Lieferanten und Marktplätze.
            </Typo.Paragraph>

            <Typo.H3>1. Bestellabwicklung automatisieren</Typo.H3>
            <Typo.Paragraph>
              Bestellung kommt per E-Mail &rarr; KI extrahiert Daten aus dem PDF
              &rarr; Bestand wird geprüft &rarr; Auftrag wird im ERP angelegt
              &rarr; Kunde bekommt Bestätigung.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Ergebnis:</strong>
              {" "}Bearbeitungszeit sinkt von 15 Minuten auf 30 Sekunden pro
              Bestellung.
            </Typo.Paragraph>

            <Typo.H3>2. Rechnungen per KI verarbeiten</Typo.H3>
            <Typo.Paragraph>
              Eingangsrechnungen scannen &rarr; OCR-Erkennung &rarr; KI
              extrahiert Rechnungsdaten &rarr; Abgleich mit Bestellung &rarr;
              Buchung im System.
            </Typo.Paragraph>
            <Typo.Paragraph>
              n8n bietet 164 fertige Invoice-Processing-Workflows mit Anbindung
              an SAP, DATEV und andere Buchhaltungssysteme.
            </Typo.Paragraph>

            <Typo.H3>3. Lagerbestände synchronisieren</Typo.H3>
            <Typo.Paragraph>
              Bestände in Echtzeit zwischen Onlineshop, Marktplätzen und ERP
              abgleichen. Automatische Nachbestellung, wenn ein Produkt unter
              den Schwellenwert fällt. KI-gestützte Bedarfsprognose für optimale
              Bestellmengen.
            </Typo.Paragraph>

            <Typo.H3>4. Lead-Generierung und Anreicherung</Typo.H3>
            <Typo.Paragraph>
              Potenzielle Kunden aus Branchenverzeichnissen finden &rarr;
              E-Mails validieren &rarr; Firmendaten anreichern (Apollo.io,
              Clearbit) &rarr; Lead Scoring nach Großhandelskriterien &rarr;
              CRM-Sync und personalisierte Erstansprache per KI.
            </Typo.Paragraph>

            <Typo.H3>5. Lieferantenpreise überwachen</Typo.H3>
            <Typo.Paragraph>
              Regelmäßig Preislisten von Lieferanten abrufen &rarr; Änderungen
              erkennen &rarr; Einkauf benachrichtigen &rarr; Preise im System
              aktualisieren.
            </Typo.Paragraph>

            <Typo.H3>6. Kundenservice mit KI</Typo.H3>
            <Typo.Paragraph>
              Eingehende Anfragen automatisch klassifizieren (Reklamation,
              Bestellung, Preisanfrage) &rarr; Priorität zuweisen &rarr;
              Standardantworten per KI generieren &rarr; Komplexe Fälle ans Team
              weiterleiten.
            </Typo.Paragraph>

            <Typo.H3>7. ERP-Integration (SAP, Dynamics, ERPNext)</Typo.H3>
            <Typo.Paragraph>
              n8n verbindet sich mit SAP Business One, Microsoft Dynamics 365,
              ERPNext und über den HTTP-Node mit praktisch jedem ERP, das eine
              API hat.
            </Typo.Paragraph>

            <Typo.H3>8. Vertriebsautomatisierung</Typo.H3>
            <Typo.Paragraph>
              Neue Anfrage kommt rein &rarr; Lead wird bewertet &rarr;
              Automatische Zuweisung an den richtigen Vertriebsmitarbeiter
              &rarr; Follow-up-Erinnerungen &rarr; CRM-Update.
            </Typo.Paragraph>

            <Typo.H3>9. Wettbewerbspreise monitoren</Typo.H3>
            <Typo.Paragraph>
              Automatisiertes Scraping von Konkurrenzpreisen &rarr; Vergleich
              mit eigenen Preisen &rarr; Alerts bei signifikanten Abweichungen
              &rarr; Reports für den Vertrieb.
            </Typo.Paragraph>

            <Typo.H3>10. Messe-Nachbearbeitung</Typo.H3>
            <Typo.Paragraph>
              Visitenkarten scannen &rarr; Kontakte im CRM anlegen &rarr;
              Personalisierte Follow-up-E-Mail per KI generieren &rarr;
              Wiedervorlage einrichten.
            </Typo.Paragraph>
          </div>

          <Separator />

          {/* 7. Was kostet n8n? */}
          <div>
            <Typo.H2 id="was-kostet-n8n">Was kostet n8n?</Typo.H2>

            <Typo.H3>Community Edition (Self-Hosted): 0 &euro;</Typo.H3>
            <Typo.Paragraph>
              Kostenlos. Unbegrenzte Workflows, unbegrenzte Durchläufe, alle
              400+ Integrationen. Du zahlst nur für den Server (ab 5
              &euro;/Monat).
            </Typo.Paragraph>
            <Typo.Paragraph>
              Was fehlt: SSO, granulare Berechtigungen, Audit Logs,
              Vendor-Support.
            </Typo.Paragraph>

            <Typo.H3>n8n Cloud</Typo.H3>
            <div className="my-6 overflow-x-auto">
              <table className="min-w-full text-sm border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold border-b border-gray-200">
                      Plan
                    </th>
                    <th className="px-4 py-2 text-left font-semibold border-b border-gray-200">
                      Preis/Monat
                    </th>
                    <th className="px-4 py-2 text-left font-semibold border-b border-gray-200">
                      Durchläufe/Monat
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Starter
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      24 &euro;
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      2.500
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-100">Pro</td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      60 &euro;
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      10.000
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Business
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      800 &euro;
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      40.000
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Enterprise
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Auf Anfrage
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Unbegrenzt
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Typo.Paragraph>
              Bei jährlicher Abrechnung sparst du ca. 17 %.
            </Typo.Paragraph>

            <Typo.H3>
              Kostenvergleich bei 10.000 Workflow-Durchläufen/Monat
            </Typo.H3>
            <Typo.Paragraph>
              Angenommen, jeder Workflow hat durchschnittlich 5 Schritte:
            </Typo.Paragraph>
            <div className="my-6 overflow-x-auto">
              <table className="min-w-full text-sm border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold border-b border-gray-200">
                      Lösung
                    </th>
                    <th className="px-4 py-2 text-left font-semibold border-b border-gray-200">
                      Geschätzte Kosten/Monat
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-100">
                      n8n Self-Hosted
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      50&ndash;80 &euro; (nur Infrastruktur)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-100">
                      n8n Cloud Pro
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      60 &euro;
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Zapier
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      ~300 $+ (braucht 50.000 Tasks)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Make
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      ~50&ndash;100 $ (braucht 50.000 Operations)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <Separator />

          {/* 8. DSGVO und Datenschutz */}
          <div>
            <Typo.H2 id="dsgvo-und-datenschutz">
              DSGVO und Datenschutz
            </Typo.H2>
            <BlogImage
              src="/blog/was-ist-n8n/dsgvo-datenschutz.png"
              alt="DSGVO und Datenschutz bei n8n"
              width={1200}
              height={800}
            />
            <Typo.Paragraph>
              Für deutsche Unternehmen ein zentrales Thema. Beim Thema n8n
              Datenschutz punktet n8n gleich doppelt.
            </Typo.Paragraph>

            <Typo.H3>Self-Hosting = volle Datensouveränität</Typo.H3>
            <Typo.Paragraph>
              Wenn du n8n auf einem eigenen Server in Deutschland betreibst (z.B.
              Hetzner, IONOS), verlassen deine Daten nie die eigene
              Infrastruktur. Kein US-Cloud-Act-Risiko, keine
              Drittanbieter-Verarbeitung.
            </Typo.Paragraph>

            <Typo.H3>n8n Cloud: Hosting in Frankfurt</Typo.H3>
            <Typo.Paragraph>
              Wer die Cloud nutzt, profitiert davon, dass n8n die Daten in
              Frankfurt auf Azure speichert. n8n GmbH sitzt in Berlin und
              unterliegt dem deutschen BDSG und der DSGVO. Ein
              Auftragsverarbeitungsvertrag (AVV) ist verfügbar.
            </Typo.Paragraph>

            <Typo.H3>Vergleich mit US-Tools</Typo.H3>
            <div className="my-6 overflow-x-auto">
              <table className="min-w-full text-sm border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold border-b border-gray-200">
                      Kriterium
                    </th>
                    <th className="px-4 py-2 text-left font-semibold border-b border-gray-200">
                      n8n (Self-Hosted)
                    </th>
                    <th className="px-4 py-2 text-left font-semibold border-b border-gray-200">
                      n8n Cloud
                    </th>
                    <th className="px-4 py-2 text-left font-semibold border-b border-gray-200">
                      Zapier
                    </th>
                    <th className="px-4 py-2 text-left font-semibold border-b border-gray-200">
                      Make
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-100 font-medium">
                      Serverstandort
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Du bestimmst
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Frankfurt (DE)
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">USA</td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      EU (Tschechien)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-100 font-medium">
                      CLOUD Act
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Kein Risiko
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Kein Risiko (DE-Firma)
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Ja (US-Firma)
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Celonis (DE-Muttergesellschaft)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-100 font-medium">
                      Datensouveränität
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">Voll</td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Eingeschränkt
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Keine
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Eingeschränkt
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-100 font-medium">
                      AVV/DPA
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Nicht nötig
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Verfügbar
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Verfügbar
                    </td>
                    <td className="px-4 py-2 border-b border-gray-100">
                      Verfügbar
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Typo.H3>Wichtig für den Großhandel</Typo.H3>
            <Typo.Paragraph>
              Gerade Großhändler verarbeiten sensible Geschäftsdaten:
              Einkaufspreise, Kundenkonditionen, Lieferantenverträge. Wer n8n
              Datenschutz ernst nimmt, wählt Self-Hosted, so bleiben diese Daten
              garantiert im eigenen Haus.
            </Typo.Paragraph>
          </div>

          <Separator />

          {/* 9. Für wen eignet sich n8n? */}
          <div>
            <Typo.H2 id="fuer-wen-eignet-sich-n8n">
              Für wen eignet sich n8n?
            </Typo.H2>

            <Typo.H3>Ideal für:</Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                <strong>Technische Teams und Entwickler</strong>, die volle
                Kontrolle über ihre Automatisierungen wollen
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>KMU im Großhandel</strong>, die Prozesse digitalisieren
                und dabei DSGVO-konform bleiben müssen
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Unternehmen mit hohem Automatisierungsvolumen</strong>,
                weil die Self-Hosted-Version keine Limits hat
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Teams, die KI-Workflows bauen wollen</strong>, kein
                anderes Tool kommt an n8n&apos;s AI-Funktionen heran
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Datensensible Unternehmen</strong>, die ihre Daten nicht
                in eine US-Cloud schicken wollen
              </Typo.ListItem>
            </Typo.List>

            <Typo.H3>Weniger geeignet für:</Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                <strong>Nicht-technische Teams</strong>, die einfache
                2-Schritt-Automationen brauchen, Zapier ist einfacher
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Solo-User ohne IT-Kenntnisse</strong>, die keinen Server
                betreiben können oder wollen
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Teams, die eine spezifische Nischen-Integration brauchen</strong>,
                Zapier hat mit 8.000+ Apps den größten Katalog
              </Typo.ListItem>
            </Typo.List>

            <Typo.H3>Die n8n-Community in der DACH-Region</Typo.H3>
            <Typo.Paragraph>
              n8n ist ein deutsches Unternehmen mit Sitz in Berlin. Deutschland
              ist der zweitgrößte Markt. Es gibt mittlerweile mehrere
              spezialisierte n8n-Agenturen im DACH-Raum (z.B. Wemakefuture,
              Flowmondo, n8n-agentur.de) und eine aktive Community mit
              regelmäßigen Meetups.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Namhafte deutsche Unternehmen setzen bereits auf n8n: StepStone
              betreibt über 200 produktive Workflows und hat seine
              Integrationszeiten um den Faktor 25 beschleunigt. Delivery Hero
              spart über 200 Arbeitsstunden pro Monat.
            </Typo.Paragraph>
          </div>

          <Separator />

          {/* 10. Fazit */}
          <div>
            <Typo.H2 id="fazit">
              Fazit: Warum n8n 2026 die beste Wahl ist
            </Typo.H2>
            <Typo.Paragraph>
              n8n hat sich 2026 als die vielseitigste Plattform für n8n
              Automatisierung am Markt etabliert. Die Kombination aus Open
              Source, Self-Hosting, nativer KI-Integration und einem fairen
              Preismodell macht es zur besten Zapier Alternative für technische
              Teams und mittelständische Unternehmen.
            </Typo.Paragraph>

            <Typo.H3>Die drei wichtigsten Argumente</Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                <strong>Kosten:</strong>
                {" "}Self-Hosted ab 5 &euro;/Monat, keine Execution-Limits. Bei
                komplexen Workflows um ein Vielfaches günstiger als Zapier.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Datenschutz:</strong>
                {" "}Volle DSGVO-Konformität durch Self-Hosting auf deutschen
                Servern. Kein US-Cloud-Risiko.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>KI-Funktionen:</strong>
                {" "}70+ KI-Nodes, AI Agents mit LangChain, RAG-Pipelines, lokale
                LLMs via Ollama. Kein anderes Automation-Tool bietet das.
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Für Großhändler, die ihre Prozesse digitalisieren wollen, ohne
              sich an teure Cloud-Dienste zu binden, ist n8n der logische
              nächste Schritt. Es verbindet ERP, Shop, CRM und Lagersystem zu
              einem automatisierten Ganzen, und das zu einem Bruchteil der
              Kosten herkömmlicher Lösungen.
            </Typo.Paragraph>
          </div>

          <Separator />

          {/* 11. FAQ */}
          <div>
            <Typo.H2 id="faq">FAQ</Typo.H2>

            <Typo.H3>Ist n8n wirklich kostenlos?</Typo.H3>
            <Typo.Paragraph>
              Ja. Die Community Edition ist kostenlos und lässt sich ohne
              Einschränkungen auf dem eigenen Server betreiben. Du zahlst nur für
              den Server selbst (ab ~5 &euro;/Monat).
            </Typo.Paragraph>

            <Typo.H3>Brauche ich Programmierkenntnisse?</Typo.H3>
            <Typo.Paragraph>
              Für einfache Workflows nicht. Der visuelle Editor funktioniert per
              Drag-and-Drop. Für komplexere Anwendungsfälle sind Grundkenntnisse
              in JavaScript oder Python hilfreich, aber nicht zwingend.
            </Typo.Paragraph>

            <Typo.H3>Ist n8n DSGVO-konform?</Typo.H3>
            <Typo.Paragraph>
              Ja, besonders im Self-Hosting-Modus. n8n GmbH sitzt in Berlin, die
              Cloud-Daten liegen in Frankfurt. Ein AVV
              (Auftragsverarbeitungsvertrag) ist verfügbar.
            </Typo.Paragraph>

            <Typo.H3>Kann n8n sich mit SAP verbinden?</Typo.H3>
            <Typo.Paragraph>
              Ja. Über den HTTP Request Node, die SAP Service Layer oder
              Community-Integrationen. Es gibt fertige Templates für SAP
              Business One.
            </Typo.Paragraph>

            <Typo.H3>Wie unterscheidet sich n8n von Zapier?</Typo.H3>
            <Typo.Paragraph>
              n8n ist Open Source, kann selbst gehostet werden, hat stärkere
              KI-Funktionen und rechnet pro Workflow-Durchlauf ab statt pro
              einzelner Aktion. Zapier ist einfacher zu bedienen und hat mehr
              native Integrationen.
            </Typo.Paragraph>

            <Typo.H3>
              Was passiert, wenn n8n als Unternehmen scheitert?
            </Typo.H3>
            <Typo.Paragraph>
              Da der Quellcode öffentlich ist (GitHub, 178K Stars), kann die
              Community das Projekt weiterführen. Das ist ein Vorteil gegenüber
              proprietären Tools, bei denen ein Shutdown das Ende bedeutet.
            </Typo.Paragraph>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="was-ist-n8n">
            Was ist n8n?
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="wie-funktioniert-n8n">
            Wie funktioniert n8n?
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="n8n-vs-zapier-vs-make">
            n8n vs. Zapier vs. Make
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="self-hosting">
            Self-Hosting
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="ai-und-ki-integration">
            AI &amp; KI-Integration
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="anwendungsfaelle-grosshandel">
            10 Anwendungsfälle
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="was-kostet-n8n">
            Was kostet n8n?
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="dsgvo-und-datenschutz">
            DSGVO &amp; Datenschutz
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="fuer-wen-eignet-sich-n8n">
            Für wen eignet sich n8n?
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
