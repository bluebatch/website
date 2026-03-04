import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import Typo from "@/components/ui/typo";
import {
  BlogImage,
  CodeBlockFile,
  Separator,
  BlogLayout,
  BlogHero,
} from "@/components/blog";

export const blogMeta = {
  slug: "building-custom-node-dev-guide",
  author: "Max Hänsel",
  date: "2025-02-16",
  image: "/blog/building-custom-node-dev-guide/hero.png",
  tags: ["n8n", "custom-nodes", "automatisierung", "development"] as BlogTagId[],
};

export const metadata: Metadata = {
  title:
    "Benutzerdefinierte Nodes in n8n erstellen: Ein vollständiger Entwickler-Leitfaden | Bluebatch",
  description:
    "Transformieren Sie Ihre Workflow-Automatisierung mit benutzerdefinierten n8n Integrationen, die exakt Ihren Anforderungen entsprechen. Vollständiger Guide zur Custom Node Entwicklung.",
  openGraph: {
    title: "Custom n8n Nodes erstellen: Vollständiger Dev-Guide",
    description:
      "Von der Einrichtung bis zum Deployment - alles über Custom Node Development in n8n",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/building-custom-node-dev-guide/hero.png",
        width: 1200,
        height: 630,
        alt: "n8n Custom Nodes Development Guide",
      },
    ],
  },
  alternates: {
    canonical: "/blog/building-custom-node-dev-guide",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          Benutzerdefinierte Nodes in n8n erstellen: Ein vollständiger
          Entwickler-Leitfaden
        </BlogHero.Headline>

        <BlogHero.Meta>
          <BlogHero.Author>Max Hänsel</BlogHero.Author>
          <BlogHero.ReadTime>15 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2025-02-16">16. Februar 2025</BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/building-custom-node-dev-guide/hero.png"
          alt="n8n Custom Nodes Development Guide"
        />
      </BlogHero>

      <BlogLayout>
        <BlogLayout.Content>
          {/* Introduction */}
          <div className="prose prose-lg">
            <Typo.H2>Warum Custom Nodes im Jahr 2025 wichtig sind</Typo.H2>
            <Typo.Paragraph>
              Obwohl n8n über 400+ integrierte Nodes bietet, gibt es
              Situationen, in denen Sie etwas benötigen, das noch nicht
              existiert. Vielleicht arbeiten Sie mit einer proprietären API,
              benötigen spezifische Datentransformationen oder möchten interne
              Systeme integrieren. Custom Nodes ermöglichen es Ihnen,
              maßgeschneiderte Lösungen zu entwickeln, die genau Ihren
              geschäftlichen Anforderungen entsprechen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Ob Sie ein Entwickler sind, der die Funktionen von n8n erweitern
              möchte, oder ein Business-Anwender, der eine spezifische
              Integration benötigt – dieser Leitfaden führt Sie durch alles, was
              Sie über die Erstellung von Custom Nodes wissen müssen.
            </Typo.Paragraph>
          </div>

          <Separator />

          {/* Section: Node Architecture */}
          <div>
            <Typo.H2 id="n8n-node-architektur-verstehen">
              n8n Node-Architektur verstehen
            </Typo.H2>
            <Typo.Paragraph>
              Bevor Sie mit der Entwicklung beginnen, ist es wichtig zu
              verstehen, wie n8n Nodes unter der Haube funktionieren.
            </Typo.Paragraph>

            <Typo.H3>Was ist ein Node?</Typo.H3>
            <Typo.Paragraph>
              In n8n ist ein Node eine funktionale Einheit, die eine spezifische
              Aufgabe ausführt, wie das Versenden einer E-Mail, das Durchführen
              einer HTTP-Anfrage oder das Abfragen einer Datenbank. Jeder Node
              verfügt über:
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>Inputs:</strong> Eingehende Datenverbindungen
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Outputs:</strong> Ausgehende Datenverbindungen
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Parameters:</strong> Konfigurationsoptionen
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Credentials:</strong> Authentifizierungsinformationen
              </Typo.ListItem>
            </Typo.List>

            <Typo.H3 className="mt-8">
              Visuelle Node-Struktur im n8n Interface
            </Typo.H3>

            <BlogImage
              src="/blog/building-custom-node-dev-guide/node-structure.png"
              alt="Node Struktur"
              width={800}
              height={600}
              border
              size="md"
            />
            <BlogImage
              src="/blog/building-custom-node-dev-guide/node-panel.png"
              alt="Node Panel"
              width={800}
              height={600}
              border
              caption=" So erscheint ein typischer Custom Node im n8n Workflow-Editor"
              size="sm"
            />

            <Typo.H3 className="mt-8">
              Wie Ihr Custom Node in der UI erscheint
            </Typo.H3>

            <Typo.H4>1. Node-Palette (Linke Seitenleiste)</Typo.H4>
            <BlogImage
              src="/blog/building-custom-node-dev-guide/node-palette.png"
              alt="Node Palette"
              width={800}
              height={600}
              border
              size="sm"
            />

            <Typo.H4>2. Node im Workflow (Visuelle Darstellung)</Typo.H4>
            <BlogImage
              src="/blog/building-custom-node-dev-guide/node-in-workflow.png"
              alt="Node im Workflow"
              width={800}
              height={600}
              border
            />

            <Typo.H4>3. Node-Konfigurations-Panel</Typo.H4>
            <BlogImage
              src="/blog/building-custom-node-dev-guide/node-panel.png"
              alt="Konfigurationspanel"
              width={800}
              height={600}
              border
              size="sm"
            />

            <Typo.H3 className="mt-8">Node-Lebenszyklus</Typo.H3>
            <div className="bg-gray-100 p-4 rounded-lg my-6 text-sm text-center font-mono">
              Dateneingabe → Parameter-Verarbeitung → Ausführung → Datenausgabe
            </div>

            <Typo.H3 className="mt-8">
              Input/Output-Datenfluss-Visualisierung
            </Typo.H3>
            <BlogImage
              src="/blog/building-custom-node-dev-guide/data-flow-visualization.png"
              alt="Datenfluss"
              caption="Das Verstehen, wie Daten durch Ihren Custom Node fließen, ist entscheidend"
              width={1200}
              height={800}
              border
            />

            <Typo.H3 className="mt-8">Real Node Appearance Examples</Typo.H3>

            <Typo.H4>Beispiel 1: Custom Node in Aktion</Typo.H4>
            <p className="font-semibold mt-4">Vor der Ausführung:</p>
            <BlogImage
              src="/blog/building-custom-node-dev-guide/custom-node-before.png"
              alt="Custom Node vor Ausführung"
              width={1200}
              height={800}
              border
            />

            <p className="font-semibold mt-4">Nach der Ausführung:</p>
            <BlogImage
              src="/blog/building-custom-node-dev-guide/custom-node-after.png"
              alt="Custom Node nach Ausführung"
              width={1200}
              height={800}
              border
            />

            <Typo.H4>Beispiel 2: Node-Datenvorschau</Typo.H4>
            <BlogImage
              src="/blog/building-custom-node-dev-guide/node-data-preview.png"
              alt="Node Datenvorschau"
              caption="Wenn Sie nach der Ausführung auf einen Node klicken, sehen Sie die verarbeiteten Daten"
              width={1200}
              height={800}
              border
            />

            <Typo.H3 className="mt-8">Dateistruktur</Typo.H3>
            <Typo.Paragraph>
              Jeder Custom Node besteht aus mehreren Schlüsseldateien:
            </Typo.Paragraph>
            <CodeBlockFile
              language="bash"
              src="building-custom-node-dev-guide/code-blocks/01-file-structure.bash"
            />
          </div>

          {/* Section: Development Environment */}

          <Separator />

          <div>
            <Typo.H2 id="entwicklungsumgebung-einrichten">
              Entwicklungsumgebung einrichten
            </Typo.H2>

            <Typo.H3>Voraussetzungen</Typo.H3>
            <Typo.List>
              <Typo.ListItem>Node.js 18 oder höher</Typo.ListItem>
              <Typo.ListItem>npm oder yarn</Typo.ListItem>
              <Typo.ListItem>Grundkenntnisse in TypeScript</Typo.ListItem>
              <Typo.ListItem>Ein n8n-Account (für Testing)</Typo.ListItem>
            </Typo.List>

            <Typo.H3 className="mt-8">Schritt 1: n8n CLI installieren</Typo.H3>
            <CodeBlockFile
              language="bash"
              src="building-custom-node-dev-guide/code-blocks/02-install-n8n.bash"
            />

            <Typo.H3 className="mt-8">
              Schritt 2: Ihr Node-Projekt erstellen
            </Typo.H3>
            <Typo.Paragraph>
              Verwenden Sie das offizielle n8n-Starter-Template:
            </Typo.Paragraph>
            <CodeBlockFile
              language="bash"
              src="building-custom-node-dev-guide/code-blocks/03-create-project.bash"
            />

            <Typo.H3 className="mt-8">Schritt 3: Mit n8n verlinken</Typo.H3>
            <CodeBlockFile
              language="bash"
              src="building-custom-node-dev-guide/code-blocks/04-link-with-n8n.bash"
            />
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-sm">
                <strong>Hinweis:</strong> Führen Sie{" "}
                <code className="bg-blue-100 px-2 py-1 rounded">
                  npm link my-custom-node
                </code>{" "}
                innerhalb von{" "}
                <code className="bg-blue-100 px-2 py-1 rounded">
                  ~/.n8n/custom
                </code>{" "}
                aus. Erstellen Sie das Verzeichnis (falls es nicht existiert),
                und starten Sie dann n8n neu.
              </p>
            </div>

            <Typo.H3 className="mt-8">Development Workflow Diagram</Typo.H3>
            <BlogImage
              src="/blog/building-custom-node-dev-guide/development-workflow.png"
              alt="Development Workflow"
              width={1200}
              height={800}
              border
            />
          </div>

          {/* Section: Choosing Node Style */}

          <Separator />

          <div>
            <Typo.H2 id="den-richtigen-node-stil-wählen">
              Den richtigen Node-Stil wählen
            </Typo.H2>
            <Typo.Paragraph>
              n8n bietet zwei Haupt-Node-Building-Stile: deklarativ und
              programmatisch. Das Verstehen des Unterschieds ist entscheidend
              für den Erfolg Ihres Projekts.
            </Typo.Paragraph>

            <Typo.H3 className="mt-8">Deklarativer Stil</Typo.H3>
            <p className="font-semibold text-gray-900 mb-4">
              Am besten geeignet für: Einfache API-Integrationen,
              CRUD-Operationen, unkomplizierte Datentransformationen
            </p>

            <p className="font-semibold mt-6 mb-3">Eigenschaften:</p>
            <Typo.List>
              <Typo.ListItem>JSON-basierte Konfiguration</Typo.ListItem>
              <Typo.ListItem>Weniger Code erforderlich</Typo.ListItem>
              <Typo.ListItem>Automatisches Request-Handling</Typo.ListItem>
              <Typo.ListItem>Ideal für REST-APIs</Typo.ListItem>
            </Typo.List>

            <p className="font-semibold mt-6 mb-3">Beispielstruktur:</p>
            <CodeBlockFile
              language="typescript"
              src="building-custom-node-dev-guide/code-blocks/05-declarative-routing.ts"
            />

            <Typo.H3 className="mt-8">Programmatischer Stil</Typo.H3>
            <p className="font-semibold text-gray-900 mb-4">
              Am besten geeignet für: Komplexe Logik, benutzerdefinierte
              Datenverarbeitung, mehrere API-Aufrufe, fortgeschrittenes
              Error-Handling
            </p>

            <p className="font-semibold mt-6 mb-3">Eigenschaften:</p>
            <Typo.List>
              <Typo.ListItem>
                Vollständige Kontrolle über die Ausführung
              </Typo.ListItem>
              <Typo.ListItem>Benutzerdefinierte Fehlerbehandlung</Typo.ListItem>
              <Typo.ListItem>Komplexe Datenmanipulation</Typo.ListItem>
              <Typo.ListItem>Mehrere API-Interaktionen</Typo.ListItem>
            </Typo.List>

            <p className="font-semibold mt-6 mb-3">Beispielstruktur:</p>
            <CodeBlockFile
              language="typescript"
              src="building-custom-node-dev-guide/code-blocks/06-programmatic-execute.ts"
              showLineNumbers
            />

            <Typo.H3 className="mt-8">Entscheidungsmatrix</Typo.H3>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead className="bg-primary-50">
                  <tr>
                    <th className="border border-gray-300 px-6 py-3 text-left font-semibold text-gray-900">
                      Merkmal
                    </th>
                    <th className="border border-gray-300 px-6 py-3 text-left font-semibold text-gray-900">
                      Deklarativ
                    </th>
                    <th className="border border-gray-300 px-6 py-3 text-left font-semibold text-gray-900">
                      Programmatisch
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 px-6 py-3 font-medium">
                      Entwicklungsgeschwindigkeit
                    </td>
                    <td className="border border-gray-300 px-6 py-3">
                      ⚡ Schnell
                    </td>
                    <td className="border border-gray-300 px-6 py-3">
                      🐢 Langsamer
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 px-6 py-3 font-medium">
                      Anpassungsfähigkeit
                    </td>
                    <td className="border border-gray-300 px-6 py-3">
                      🔒 Begrenzt
                    </td>
                    <td className="border border-gray-300 px-6 py-3">
                      🎯 Volle Kontrolle
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 px-6 py-3 font-medium">
                      Fehlerbehandlung
                    </td>
                    <td className="border border-gray-300 px-6 py-3">
                      🤖 Automatisch
                    </td>
                    <td className="border border-gray-300 px-6 py-3">
                      🔧 Manuell
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 px-6 py-3 font-medium">
                      Komplexe Logik
                    </td>
                    <td className="border border-gray-300 px-6 py-3">
                      ❌ Nein
                    </td>
                    <td className="border border-gray-300 px-6 py-3">✅ Ja</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 px-6 py-3 font-medium">
                      API-Paginierung
                    </td>
                    <td className="border border-gray-300 px-6 py-3">
                      🤖 Integriert
                    </td>
                    <td className="border border-gray-300 px-6 py-3">
                      🔧 Benutzerdefiniert
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section: Creating First Node */}

          <Separator />

          <div>
            <Typo.H2 id="ihren-ersten-custom-node-erstellen">
              Ihren ersten Custom Node erstellen
            </Typo.H2>
            <Typo.Paragraph>
              Lassen Sie uns ein praktisches Beispiel erstellen: einen Microsoft
              Dynamics Lead Manager Node, der Leads in Dynamics 365 CRM
              erstellt, liest und aktualisiert.
            </Typo.Paragraph>

            <Typo.H3 className="mt-8">Visuelle Vorschau: Was wir bauen</Typo.H3>
            <Typo.Paragraph>
              So wird unser Microsoft Dynamics Lead Manager Node in der
              n8n-Oberfläche aussehen und funktionieren:
            </Typo.Paragraph>

            <Typo.H4>Node im Workflow Canvas</Typo.H4>
            <BlogImage
              src="/blog/building-custom-node-dev-guide/dynamics-node-canvas.png"
              alt="Node im Canvas"
              width={1200}
              height={800}
              border
            />

            <Typo.H3 className="mt-8">
              Schritt 1: Node-Metadaten definieren
            </Typo.H3>
            <Typo.Paragraph>
              Erstellen Sie{" "}
              <code className="bg-gray-200 px-2 py-1 rounded">
                MicrosoftDynamicsLeads.node.json
              </code>
              :
            </Typo.Paragraph>
            <CodeBlockFile
              language="json"
              fileName="MicrosoftDynamicsLeads.node.json"
              src="building-custom-node-dev-guide/code-blocks/09-microsoft-dynamics-leads-node-json.json"
            />

            <Typo.H3 className="mt-8">
              Schritt 2: Node-Logik implementieren
            </Typo.H3>
            <Typo.Paragraph>
              Erstellen Sie{" "}
              <code className="bg-gray-200 px-2 py-1 rounded">
                MicrosoftDynamicsLeads.node.ts
              </code>
              :
            </Typo.Paragraph>
            <CodeBlockFile
              language="typescript"
              src="building-custom-node-dev-guide/code-blocks/10-microsoft-dynamics-leads-node-ts.ts"
            />

            <Typo.H3 className="mt-8">Schritt 3: Credentials erstellen</Typo.H3>
            <Typo.Paragraph>
              Erstellen Sie{" "}
              <code className="bg-gray-200 px-2 py-1 rounded">
                MicrosoftDynamicsApi.credentials.ts
              </code>
              :
            </Typo.Paragraph>
            <CodeBlockFile
              language="typescript"
              src="building-custom-node-dev-guide/code-blocks/11-microsoft-dynamics-api-credentials.ts"
            />

            <Typo.H3 className="mt-8">
              Schritt 4: Ihren Node registrieren
            </Typo.H3>
            <Typo.Paragraph>
              Aktualisieren Sie{" "}
              <code className="bg-gray-200 px-2 py-1 rounded">
                nodes/index.ts
              </code>
              :
            </Typo.Paragraph>
            <CodeBlockFile
              language="typescript"
              src="building-custom-node-dev-guide/code-blocks/12-nodes-index-export.ts"
            />

            <Typo.Paragraph>
              Aktualisieren Sie{" "}
              <code className="bg-gray-200 px-2 py-1 rounded">
                credentials/index.ts
              </code>
              :
            </Typo.Paragraph>
            <CodeBlockFile
              language="typescript"
              src="building-custom-node-dev-guide/code-blocks/13-credentials-index-export.ts"
            />
          </div>

          {/* Section: Advanced Features */}

          <Separator />

          <div>
            <Typo.H2 id="erweiterte-node-features">
              Erweiterte Node-Features
            </Typo.H2>

            <Typo.H3>Dynamische Parameter</Typo.H3>
            <Typo.Paragraph>
              Lassen Sie Ihren Node sich basierend auf Benutzerauswahlen
              anpassen:
            </Typo.Paragraph>
            <CodeBlockFile
              language="typescript"
              src="building-custom-node-dev-guide/code-blocks/14-dynamic-parameters.ts"
            />

            <Typo.H3 className="mt-8">
              Visuelles Ergebnis: Dynamisches Interface
            </Typo.H3>
            <BlogImage
              src="/blog/building-custom-node-dev-guide/dynamic-interface-create-lead.png"
              alt="Dynamisches Interface - Create Lead"
              caption='Operation: "Create Lead" - Zeigt Felder für Vorname, Nachname, E-Mail und Firma'
              width={1200}
              height={800}
              border
              size="sm"
            />

            <BlogImage
              src="/blog/building-custom-node-dev-guide/dynamic-interface-read-lead.png"
              alt="Dynamisches Interface - Read Lead"
              caption='Operation: "Read Lead" - Zeigt nur das Lead ID Feld'
              width={1200}
              height={800}
              border
              size="sm"
            />

            <Typo.H3 className="mt-8">
              Komplexer Node mit mehreren Outputs
            </Typo.H3>
            <Typo.Paragraph>
              Einige Nodes können mehrere Outputs basierend auf Bedingungen
              haben:
            </Typo.Paragraph>
            <BlogImage
              src="/blog/building-custom-node-dev-guide/conditional-outputs.png"
              alt="Node mit bedingten Outputs"
              width={1200}
              height={800}
              border
              size="sm"
            />

            <Typo.H3 className="mt-8">Error-Handling-Patterns</Typo.H3>
            <CodeBlockFile
              language="typescript"
              src="building-custom-node-dev-guide/code-blocks/15-error-handling-patterns.ts"
            />

            <Typo.H3 className="mt-8">Visuelle Fehleranzeige</Typo.H3>
            <BlogImage
              src="/blog/building-custom-node-dev-guide/error-state.png"
              alt="Fehlerstatus im Node"
              caption="Wenn Fehler auftreten, werden sie deutlich in der Oberfläche angezeigt"
              width={1200}
              height={800}
              border
            />

            <Typo.H3 className="mt-8">Resource Mapping</Typo.H3>
            <Typo.Paragraph>
              Für komplexe APIs mit mehreren Endpoints:
            </Typo.Paragraph>
            <CodeBlockFile
              language="typescript"
              src="building-custom-node-dev-guide/code-blocks/16-resource-mapping.ts"
            />
          </div>

          {/* Section: Testing and Debugging */}

          <Separator />

          <div>
            <Typo.H2 id="testing-und-debugging">Testing und Debugging</Typo.H2>

            <Typo.H3>Lokales Testing</Typo.H3>
            <Typo.Paragraph>
              Führen Sie Ihre n8n-Instanz lokal aus (
              <code className="bg-gray-200 px-2 py-1 rounded">
                npx n8n start
              </code>
              ) und prüfen Sie die UI. Ihr Node sollte unter "Custom Nodes"
              erscheinen.
            </Typo.Paragraph>
            <CodeBlockFile
              language="bash"
              src="building-custom-node-dev-guide/code-blocks/17-local-testing.bash"
            />

            <Typo.H3 className="mt-8">Testing Workflow</Typo.H3>
            <BlogImage
              src="/blog/building-custom-node-dev-guide/testing-workflow.png"
              alt="Testing Workflow"
              width={1200}
              height={800}
              border
            />

            <Typo.H3 className="mt-8">Debugging-Tipps</Typo.H3>

            <p className="font-semibold mt-6 mb-3">
              1. Console Logging verwenden:
            </p>
            <CodeBlockFile
              language="typescript"
              src="building-custom-node-dev-guide/code-blocks/18-console-logging.ts"
            />

            <p className="font-semibold mt-6 mb-3">
              2. API-Responses inspizieren:
            </p>
            <CodeBlockFile
              language="typescript"
              src="building-custom-node-dev-guide/code-blocks/19-api-response-inspection.ts"
            />

            <p className="font-semibold mt-6 mb-3">3. Parameter-Validierung:</p>
            <CodeBlockFile
              language="typescript"
              src="building-custom-node-dev-guide/code-blocks/20-parameter-validation.ts"
            />

            <Typo.H3 className="mt-8">Häufige Probleme und Lösungen</Typo.H3>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Problem
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Lösung
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Node erscheint nicht in der UI
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      package.json exports prüfen
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Credential-Fehler
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Credential-Typ-Matching verifizieren
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Request-Fehler
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Ordentliches Error-Handling hinzufügen
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Parameter-Validierung
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Input-Validierung hinzufügen
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section: Deployment */}

          <Separator />

          <div>
            <Typo.H2 id="deployment-strategien">Deployment-Strategien</Typo.H2>

            <Typo.H3>Lokale Entwicklung</Typo.H3>
            <CodeBlockFile
              language="bash"
              src="building-custom-node-dev-guide/code-blocks/21-local-development-linking.bash"
            />

            <Typo.H3 className="mt-8">npm-Package</Typo.H3>
            <CodeBlockFile
              language="bash"
              src="building-custom-node-dev-guide/code-blocks/22-npm-package-publish.bash"
            />

            <Typo.H3 className="mt-8">Docker-Deployment</Typo.H3>
            <Typo.Paragraph>Erstellen Sie ein Dockerfile:</Typo.Paragraph>
            <CodeBlockFile
              language="docker"
              src="building-custom-node-dev-guide/code-blocks/23-dockerfile.docker"
            />

            <Typo.H3 className="mt-8">Docker Compose</Typo.H3>
            <CodeBlockFile
              language="yaml"
              src="building-custom-node-dev-guide/code-blocks/24-docker-compose.yaml"
            />
          </div>

          {/* Section: Best Practices */}

          <Separator />

          <div>
            <Typo.H2 id="best-practices-und-tipps">
              Best Practices und Tipps
            </Typo.H2>

            <Typo.H3>Code-Organisation</Typo.H3>
            <CodeBlockFile
              language="typescript"
              src="building-custom-node-dev-guide/code-blocks/25-code-organization.ts"
            />

            <Typo.H3 className="mt-8">Fehlerbehandlung</Typo.H3>
            <CodeBlockFile
              language="typescript"
              src="building-custom-node-dev-guide/code-blocks/26-comprehensive-error-handling.ts"
            />

            <Typo.H3 className="mt-8">Input-Validierung</Typo.H3>
            <CodeBlockFile
              language="typescript"
              src="building-custom-node-dev-guide/code-blocks/27-input-validation.ts"
            />

            <Typo.H3 className="mt-8">Performance-Optimierung</Typo.H3>
            <CodeBlockFile
              language="typescript"
              src="building-custom-node-dev-guide/code-blocks/28-performance-optimization.ts"
            />

            <Typo.H3 className="mt-8">Sicherheitsaspekte</Typo.H3>
            <CodeBlockFile
              language="typescript"
              src="building-custom-node-dev-guide/code-blocks/29-security-aspects.ts"
            />

            <Typo.H3 className="mt-8">Dokumentation</Typo.H3>
            <CodeBlockFile
              language="typescript"
              src="building-custom-node-dev-guide/code-blocks/30-documentation-example.ts"
            />

            <Typo.H3 className="mt-8">
              Troubleshooting häufiger Probleme
            </Typo.H3>

            <Typo.H4>Node erscheint nicht in der UI</Typo.H4>
            <p className="font-semibold">Problem:</p>
            <Typo.Paragraph>
              Der Custom Node wird nicht in der n8n-Oberfläche angezeigt
            </Typo.Paragraph>
            <p className="font-semibold mt-4">Lösungen:</p>
            <Typo.List>
              <Typo.ListItem>
                <code className="bg-gray-200 px-2 py-1 rounded">
                  package.json
                </code>{" "}
                exports überprüfen
              </Typo.ListItem>
              <Typo.ListItem>
                Node neu bauen und{" "}
                <code className="bg-gray-200 px-2 py-1 rounded">npm link</code>{" "}
                ausführen
              </Typo.ListItem>
              <Typo.ListItem>n8n neu starten</Typo.ListItem>
              <Typo.ListItem>Browser-Cache leeren</Typo.ListItem>
            </Typo.List>

            <Typo.H4 className="mt-8">Credential-Fehler</Typo.H4>
            <p className="font-semibold">Problem:</p>
            <Typo.Paragraph>
              Authentifizierungsfehler oder Credentials nicht gefunden
            </Typo.Paragraph>
            <p className="font-semibold mt-4">Lösungen:</p>
            <Typo.List>
              <Typo.ListItem>
                Credential-Name in Node und Credential-Datei muss übereinstimmen
              </Typo.ListItem>
              <Typo.ListItem>Credential-Typ korrekt registrieren</Typo.ListItem>
              <Typo.ListItem>Credentials in n8n UI überprüfen</Typo.ListItem>
            </Typo.List>

            <Typo.H4 className="mt-8">API-Request-Fehler</Typo.H4>
            <p className="font-semibold">Problem:</p>
            <Typo.Paragraph>
              HTTP-Requests schlagen fehl oder haben Timeouts
            </Typo.Paragraph>
            <p className="font-semibold mt-4">Lösungen:</p>
            <Typo.List>
              <Typo.ListItem>Request-Timeouts erhöhen</Typo.ListItem>
              <Typo.ListItem>
                Proper Error-Handling implementieren
              </Typo.ListItem>
              <Typo.ListItem>API-Response-Format überprüfen</Typo.ListItem>
              <Typo.ListItem>Network-Connectivity testen</Typo.ListItem>
            </Typo.List>
          </div>

          {/* Section: Community and Resources */}

          <Separator />

          <div>
            <Typo.H2>Community und Ressourcen</Typo.H2>

            <Typo.H3>Offizielle Dokumentation</Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                <a
                  href="https://docs.n8n.io/"
                  className="text-primary-600 hover:text-primary-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  n8n Dokumentation
                </a>
              </Typo.ListItem>
              <Typo.ListItem>
                <a
                  href="https://docs.n8n.io/integrations/creating-nodes/"
                  className="text-primary-600 hover:text-primary-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Node Development Guide
                </a>
              </Typo.ListItem>
              <Typo.ListItem>
                <a
                  href="https://docs.n8n.io/api/"
                  className="text-primary-600 hover:text-primary-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  API Reference
                </a>
              </Typo.ListItem>
            </Typo.List>

            <Typo.H3 className="mt-8">Community-Support</Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                <a
                  href="https://community.n8n.io/"
                  className="text-primary-600 hover:text-primary-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  n8n Community Forum
                </a>
              </Typo.ListItem>
              <Typo.ListItem>
                <a
                  href="https://github.com/n8n-io/n8n/discussions"
                  className="text-primary-600 hover:text-primary-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Discussions
                </a>
              </Typo.ListItem>
              <Typo.ListItem>
                <a
                  href="https://discord.gg/n8n"
                  className="text-primary-600 hover:text-primary-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord Server
                </a>
              </Typo.ListItem>
            </Typo.List>

            <Typo.H3 className="mt-8">Learning Resources</Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                <a
                  href="https://www.youtube.com/@n8n-io"
                  className="text-primary-600 hover:text-primary-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube Tutorials
                </a>
              </Typo.ListItem>
              <Typo.ListItem>
                <a
                  href="https://blog.n8n.io/"
                  className="text-primary-600 hover:text-primary-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog Articles
                </a>
              </Typo.ListItem>
              <Typo.ListItem>
                <a
                  href="https://github.com/n8n-io/n8n-nodes-starter"
                  className="text-primary-600 hover:text-primary-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Example Nodes Repository
                </a>
              </Typo.ListItem>
            </Typo.List>
          </div>

          {/* Conclusion */}

          <Separator />

          <div>
            <Typo.H2>Fazit</Typo.H2>
            <Typo.Paragraph>
              Die Erstellung von Custom Nodes in n8n eröffnet endlose
              Möglichkeiten für Workflow-Automatisierung. Ob Sie einfache
              API-Integrationen oder komplexe Geschäftslogik entwickeln – die
              Flexibilität und Leistungsfähigkeit von Custom Nodes kann
              transformieren, wie Sie Daten und Prozesse handhaben.
            </Typo.Paragraph>

            <Typo.H3 className="mt-8">Wichtige Erkenntnisse</Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                <strong>Wählen Sie den richtigen Stil:</strong> Deklarativ für
                einfache APIs, programmatisch für komplexe Logik
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Planen Sie Ihre Node-Struktur:</strong> Denken Sie an
                Inputs, Outputs und Parameter-Designs
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Implementieren Sie robustes Error-Handling:</strong>{" "}
                Fehlerbehandlung ist entscheidend für Produktions-Nodes
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Testen Sie gründlich:</strong> Nutzen Sie lokale
                Entwicklung und das n8n-Testing-Framework
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Dokumentieren Sie Ihren Code:</strong> Zukünftige
                Entwickler (einschließlich Sie selbst) werden es Ihnen danken
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Folgen Sie Best Practices:</strong> Code-Organisation,
                Sicherheit und Performance sind wichtig
              </Typo.ListItem>
            </Typo.List>

            <Typo.Paragraph className="mt-8 text-lg">
              Die Zukunft der Workflow-Automatisierung liegt in Ihren Händen.
              Beginnen Sie noch heute mit der Entwicklung Ihrer Custom Nodes und
              erschließen Sie das volle Potenzial von n8n für Ihre spezifischen
              Anforderungen.
            </Typo.Paragraph>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="n8n-node-architektur-verstehen">
            n8n Node-Architektur verstehen
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="entwicklungsumgebung-einrichten">
            Entwicklungsumgebung einrichten
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="den-richtigen-node-stil-wählen">
            Den richtigen Node-Stil wählen
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="ihren-ersten-custom-node-erstellen">
            Ihren ersten Custom Node erstellen
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="erweiterte-node-features">
            Erweiterte Node-Features
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="testing-und-debugging">
            Testing und Debugging
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="deployment-strategien">
            Deployment-Strategien
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="best-practices-und-tipps">
            Best Practices und Tipps
          </BlogLayout.NavigationItem>
        </BlogLayout.Navigation>
      </BlogLayout>
    </>
  );
}
