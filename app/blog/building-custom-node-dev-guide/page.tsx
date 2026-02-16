import type { Metadata } from "next";
import Typo from "@/components/typo";
import {
  BlogImage,
  CodeBlock,
  Separator,
  BlogLayout,
  BlogHero,
} from "@/components/blog";

export const metadata: Metadata = {
  title:
    "Benutzerdefinierte Nodes in n8n erstellen: Ein vollständiger Entwickler-Leitfaden | BlueBatch",
  description:
    "Transformieren Sie Ihre Workflow-Automatisierung mit benutzerdefinierten n8n Integrationen, die exakt Ihren Anforderungen entsprechen. Vollständiger Guide zur Custom Node Entwicklung.",
  openGraph: {
    title: "Custom n8n Nodes erstellen: Vollständiger Dev-Guide",
    description:
      "Von der Einrichtung bis zum Deployment - alles über Custom Node Development in n8n",
    type: "article",
    locale: "de_DE",
    siteName: "BlueBatch",
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
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Inputs:</strong> Eingehende Datenverbindungen
              </li>
              <li>
                <strong>Outputs:</strong> Ausgehende Datenverbindungen
              </li>
              <li>
                <strong>Parameters:</strong> Konfigurationsoptionen
              </li>
              <li>
                <strong>Credentials:</strong> Authentifizierungsinformationen
              </li>
            </ul>

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
            <CodeBlock language="bash">
              {`my-custom-node/
├── package.json
├── nodes/
│   ├── MyNode/
│   │   ├── MyNode.node.ts          # Hauptlogik des Nodes
│   │   ├── MyNode.node.json        # Node-Metadaten
│   │   └── mynode.svg              # Node-Icon
│   └── index.ts                    # Export-Definitionen
├── credentials/
│   ├── MyNodeApi.credentials.ts    # Authentifizierungslogik
│   └── MyNodeApi.credentials.json  # Credential-Metadaten
└── README.md`}
            </CodeBlock>
          </div>

          {/* Section: Development Environment */}

          <Separator />

          <div>
            <Typo.H2 id="entwicklungsumgebung-einrichten">
              Entwicklungsumgebung einrichten
            </Typo.H2>

            <Typo.H3>Voraussetzungen</Typo.H3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Node.js 18 oder höher</li>
              <li>npm oder yarn</li>
              <li>Grundkenntnisse in TypeScript</li>
              <li>Ein n8n-Account (für Testing)</li>
            </ul>

            <Typo.H3 className="mt-8">Schritt 1: n8n CLI installieren</Typo.H3>
            <CodeBlock language="bash">{`npm install -g n8n`}</CodeBlock>

            <Typo.H3 className="mt-8">
              Schritt 2: Ihr Node-Projekt erstellen
            </Typo.H3>
            <Typo.Paragraph>
              Verwenden Sie das offizielle n8n-Starter-Template:
            </Typo.Paragraph>
            <CodeBlock language="bash">
              {`# Starter-Template klonen
git clone https://github.com/n8n-io/n8n-nodes-starter.git my-custom-node
cd my-custom-node

# Dependencies installieren
npm install

# Node bauen
npm run build`}
            </CodeBlock>

            <Typo.H3 className="mt-8">Schritt 3: Mit n8n verlinken</Typo.H3>
            <CodeBlock language="bash">
              {`# Ihren Node mit n8n verlinken
npm link

# Im n8n-Installationsverzeichnis (~/.n8n/custom)
npm link my-custom-node`}
            </CodeBlock>
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
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>JSON-basierte Konfiguration</li>
              <li>Weniger Code erforderlich</li>
              <li>Automatisches Request-Handling</li>
              <li>Ideal für REST-APIs</li>
            </ul>

            <p className="font-semibold mt-6 mb-3">Beispielstruktur:</p>
            <CodeBlock language="typescript">
              {`// Deklarativer Node verwendet Routing
const routing = {
  "user.create": {
    request: {
      method: "POST",
      url: "/users",
      body: {
        name: "={{ $parameter.name }}",
        email: "={{ $parameter.email }}",
      },
    },
  },
};`}
            </CodeBlock>

            <Typo.H3 className="mt-8">Programmatischer Stil</Typo.H3>
            <p className="font-semibold text-gray-900 mb-4">
              Am besten geeignet für: Komplexe Logik, benutzerdefinierte
              Datenverarbeitung, mehrere API-Aufrufe, fortgeschrittenes
              Error-Handling
            </p>

            <p className="font-semibold mt-6 mb-3">Eigenschaften:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Vollständige Kontrolle über die Ausführung</li>
              <li>Benutzerdefinierte Fehlerbehandlung</li>
              <li>Komplexe Datenmanipulation</li>
              <li>Mehrere API-Interaktionen</li>
            </ul>

            <p className="font-semibold mt-6 mb-3">Beispielstruktur:</p>
            <CodeBlock language="typescript" showLineNumbers>
              {`// Programmatischer Node verwendet execute-Methode
async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
  const items = this.getInputData();
  const returnData: INodeExecutionData[] = [];

  for (let i = 0; i < items.length; i++) {
    // Benutzerdefinierte Logik hier
    const result = await this.performCustomOperation(items[i]);
    returnData.push({ json: result });
  }

  return [returnData];
}`}
            </CodeBlock>

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
            <CodeBlock
              language="json"
              fileName="MicrosoftDynamicsLeads.node.json"
            >
              {`{
  "displayName": "Microsoft Dynamics Leads",
  "name": "microsoftDynamicsLeads",
  "icon": "file:dynamics365.svg",
  "group": ["transform"],
  "version": 1,
  "description": "Manage leads in Microsoft Dynamics 365 CRM",
  "defaults": {
    "name": "Dynamics Leads"
  },
  "inputs": ["main"],
  "outputs": ["main"],
  "credentials": [
    {
      "name": "microsoftDynamicsApi",
      "required": true
    }
  ],
  "properties": [
    {
      "displayName": "Operation",
      "name": "operation",
      "type": "options",
      "options": [
        {
          "name": "Create Lead",
          "value": "create"
        },
        {
          "name": "Read Lead",
          "value": "read"
        },
        {
          "name": "Update Lead",
          "value": "update"
        }
      ],
      "default": "create",
      "required": true
    },
    {
      "displayName": "Lead ID",
      "name": "leadId",
      "type": "string",
      "default": "",
      "required": true,
      "displayOptions": {
        "show": {
          "operation": ["read", "update"]
        }
      },
      "description": "The ID of the lead to read or update"
    },
    {
      "displayName": "First Name",
      "name": "firstname",
      "type": "string",
      "default": "",
      "required": true,
      "displayOptions": {
        "show": {
          "operation": ["create", "update"]
        }
      },
      "description": "First name of the lead"
    },
    {
      "displayName": "Last Name",
      "name": "lastname",
      "type": "string",
      "default": "",
      "required": true,
      "displayOptions": {
        "show": {
          "operation": ["create", "update"]
        }
      },
      "description": "Last name of the lead"
    },
    {
      "displayName": "Email",
      "name": "emailaddress1",
      "type": "string",
      "default": "",
      "displayOptions": {
        "show": {
          "operation": ["create", "update"]
        }
      },
      "description": "Email address of the lead"
    },
    {
      "displayName": "Company",
      "name": "companyname",
      "type": "string",
      "default": "",
      "displayOptions": {
        "show": {
          "operation": ["create", "update"]
        }
      },
      "description": "Company name of the lead"
    }
  ]
}`}
            </CodeBlock>

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
            <CodeBlock language="typescript">
              {`import {
  IExecuteFunctions,
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
  NodeApiError,
  NodeOperationError,
} from "n8n-workflow";

export class MicrosoftDynamicsLeads implements INodeType {
  description: INodeTypeDescription = {
    displayName: "Microsoft Dynamics Leads",
    name: "microsoftDynamicsLeads",
    icon: "file:dynamics365.svg",
    group: ["transform"],
    version: 1,
    description: "Manage leads in Microsoft Dynamics 365 CRM",
    defaults: {
      name: "Dynamics Leads",
    },
    inputs: ["main"],
    outputs: ["main"],
    credentials: [
      {
        name: "microsoftDynamicsApi",
        required: true,
      },
    ],
    properties: [
      // Properties würden hier aus der JSON-Datei geladen
    ],
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();
    const returnData: INodeExecutionData[] = [];

    for (let i = 0; i < items.length; i++) {
      try {
        const operation = this.getNodeParameter("operation", i) as string;
        const credentials = await this.getCredentials("microsoftDynamicsApi");

        const instanceUrl = credentials.instanceUrl as string;
        const accessToken = credentials.accessToken as string;

        const baseUrl = \`\${instanceUrl}/api/data/v9.2\`;

        let result: any;

        switch (operation) {
          case "create": {
            // Lead erstellen
            const firstname = this.getNodeParameter("firstname", i) as string;
            const lastname = this.getNodeParameter("lastname", i) as string;
            const emailaddress1 = this.getNodeParameter(
              "emailaddress1",
              i,
            ) as string;
            const companyname = this.getNodeParameter(
              "companyname",
              i,
            ) as string;

            const leadData = {
              firstname,
              lastname,
              emailaddress1,
              companyname,
              subject: \`Lead: \${firstname} \${lastname}\`,
            };

            result = await this.helpers.request({
              method: "POST",
              url: \`\${baseUrl}/leads\`,
              headers: {
                Authorization: \`Bearer \${accessToken}\`,
                "Content-Type": "application/json",
                "OData-MaxVersion": "4.0",
                "OData-Version": "4.0",
              },
              body: leadData,
              json: true,
            });

            returnData.push({
              json: {
                operation: "create",
                success: true,
                leadId: result.leadid,
                ...leadData,
              },
            });
            break;
          }

          case "read": {
            // Lead abrufen
            const leadId = this.getNodeParameter("leadId", i) as string;

            result = await this.helpers.request({
              method: "GET",
              url: \`\${baseUrl}/leads(\${leadId})\`,
              headers: {
                Authorization: \`Bearer \${accessToken}\`,
                "OData-MaxVersion": "4.0",
                "OData-Version": "4.0",
              },
              json: true,
            });

            returnData.push({
              json: {
                operation: "read",
                success: true,
                lead: result,
              },
            });
            break;
          }

          case "update": {
            // Lead aktualisieren
            const leadId = this.getNodeParameter("leadId", i) as string;
            const firstname = this.getNodeParameter("firstname", i) as string;
            const lastname = this.getNodeParameter("lastname", i) as string;
            const emailaddress1 = this.getNodeParameter(
              "emailaddress1",
              i,
            ) as string;
            const companyname = this.getNodeParameter(
              "companyname",
              i,
            ) as string;

            const updateData = {
              firstname,
              lastname,
              emailaddress1,
              companyname,
            };

            await this.helpers.request({
              method: "PATCH",
              url: \`\${baseUrl}/leads(\${leadId})\`,
              headers: {
                Authorization: \`Bearer \${accessToken}\`,
                "Content-Type": "application/json",
                "OData-MaxVersion": "4.0",
                "OData-Version": "4.0",
              },
              body: updateData,
              json: true,
            });

            returnData.push({
              json: {
                operation: "update",
                success: true,
                leadId,
                ...updateData,
              },
            });
            break;
          }

          default:
            throw new NodeOperationError(
              this.getNode(),
              \`Unknown operation: \${operation}\`,
            );
        }
      } catch (error) {
        if (this.continueOnFail()) {
          returnData.push({
            json: {
              error: error.message,
              statusCode: error.statusCode,
            },
          });
          continue;
        }

        // Spezifisches Error Handling für Dynamics API
        if (error.statusCode === 401) {
          throw new NodeApiError(this.getNode(), error, {
            message: "Authentication failed",
            description: "Please check your credentials and access token",
          });
        }

        if (error.statusCode === 404) {
          throw new NodeOperationError(
            this.getNode(),
            "Lead not found or you do not have access",
          );
        }

        throw new NodeOperationError(this.getNode(), error);
      }
    }

    return [returnData];
  }
}`}
            </CodeBlock>

            <Typo.H3 className="mt-8">Schritt 3: Credentials erstellen</Typo.H3>
            <Typo.Paragraph>
              Erstellen Sie{" "}
              <code className="bg-gray-200 px-2 py-1 rounded">
                MicrosoftDynamicsApi.credentials.ts
              </code>
              :
            </Typo.Paragraph>
            <CodeBlock language="typescript">
              {`import { ICredentialType, INodeProperties } from "n8n-workflow";

export class MicrosoftDynamicsApi implements ICredentialType {
  name = "microsoftDynamicsApi";
  displayName = "Microsoft Dynamics 365 API";
  documentationUrl = "https://learn.microsoft.com/en-us/dynamics365/";
  properties: INodeProperties[] = [
    {
      displayName: "Instance URL",
      name: "instanceUrl",
      type: "string",
      default: "https://yourorg.crm.dynamics.com",
      required: true,
      description: "Your Dynamics 365 instance URL",
      placeholder: "https://yourorg.crm.dynamics.com",
    },
    {
      displayName: "Client ID",
      name: "clientId",
      type: "string",
      default: "",
      required: true,
      description: "OAuth 2.0 Client ID from Azure AD App Registration",
    },
    {
      displayName: "Client Secret",
      name: "clientSecret",
      type: "string",
      typeOptions: {
        password: true,
      },
      default: "",
      required: true,
      description: "OAuth 2.0 Client Secret",
    },
    {
      displayName: "Tenant ID",
      name: "tenantId",
      type: "string",
      default: "",
      required: true,
      description: "Azure AD Tenant ID",
    },
    {
      displayName: "Access Token",
      name: "accessToken",
      type: "string",
      typeOptions: {
        password: true,
      },
      default: "",
      required: true,
      description: "OAuth 2.0 Access Token for API requests",
    },
  ];
}`}
            </CodeBlock>

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
            <CodeBlock language="typescript">
              {`import { MicrosoftDynamicsLeads } from "./MicrosoftDynamicsLeads/MicrosoftDynamicsLeads.node";

export { MicrosoftDynamicsLeads };`}
            </CodeBlock>

            <Typo.Paragraph>
              Aktualisieren Sie{" "}
              <code className="bg-gray-200 px-2 py-1 rounded">
                credentials/index.ts
              </code>
              :
            </Typo.Paragraph>
            <CodeBlock language="typescript">
              {`import { MicrosoftDynamicsApi } from "./MicrosoftDynamicsApi.credentials";

export { MicrosoftDynamicsApi };`}
            </CodeBlock>
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
            <CodeBlock language="typescript">
              {`{
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  options: [
    {
      name: 'Create Lead',
      value: 'create',
    },
    {
      name: 'Read Lead',
      value: 'read',
    },
    {
      name: 'Update Lead',
      value: 'update',
    },
  ],
  default: 'create',
},
{
  displayName: 'Lead ID',
  name: 'leadId',
  type: 'string',
  default: '',
  displayOptions: {
    show: {
      operation: ['read', 'update'],
    },
  },
  description: 'ID of the lead to read or update',
},
{
  displayName: 'First Name',
  name: 'firstname',
  type: 'string',
  default: '',
  displayOptions: {
    show: {
      operation: ['create', 'update'],
    },
  },
  description: 'First name of the lead',
},`}
            </CodeBlock>

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
            <CodeBlock language="typescript">
              {`try {
  const result = await this.helpers.request(requestOptions);
  return result;
} catch (error) {
  if (error.statusCode === 401) {
    throw new NodeApiError(this.getNode(), error, {
      message: "Authentication failed",
      description:
        "Please check your Dynamics 365 credentials and access token",
    });
  }

  if (error.statusCode === 404) {
    throw new NodeOperationError(
      this.getNode(),
      "Lead not found or you do not have access to this resource",
    );
  }

  if (error.statusCode === 403) {
    throw new NodeApiError(this.getNode(), error, {
      message: "Insufficient permissions",
      description:
        "Your account does not have permission to perform this operation",
    });
  }

  throw new NodeOperationError(this.getNode(), error);
}`}
            </CodeBlock>

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
            <CodeBlock language="typescript">
              {`const resourceMapping = {
  leads: {
    create: {
      method: "POST",
      endpoint: "/leads",
    },
    read: {
      method: "GET",
      endpoint: "/leads",
    },
    update: {
      method: "PATCH",
      endpoint: "/leads",
    },
    delete: {
      method: "DELETE",
      endpoint: "/leads",
    },
  },
  accounts: {
    create: {
      method: "POST",
      endpoint: "/accounts",
    },
    list: {
      method: "GET",
      endpoint: "/accounts",
    },
  },
  contacts: {
    create: {
      method: "POST",
      endpoint: "/contacts",
    },
  },
};`}
            </CodeBlock>
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
            <CodeBlock language="bash">
              {`# Bauen und testen
npm run build
npm run test

# n8n mit Ihrem Custom Node starten
npx n8n start`}
            </CodeBlock>

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
            <CodeBlock language="typescript">
              {`console.log("Debug: Processing item", i, items[i]);`}
            </CodeBlock>

            <p className="font-semibold mt-6 mb-3">
              2. API-Responses inspizieren:
            </p>
            <CodeBlock language="typescript">
              {`const response = await this.helpers.request({
  method: "GET",
  url: "https://api.example.com/data",
  json: true,
});
console.log("API Response:", response);`}
            </CodeBlock>

            <p className="font-semibold mt-6 mb-3">3. Parameter-Validierung:</p>
            <CodeBlock language="typescript">
              {`const leadId = this.getNodeParameter("leadId", i) as string;
if (!leadId) {
  throw new NodeOperationError(this.getNode(), "Lead ID parameter is required");
}

const email = this.getNodeParameter("emailaddress1", i) as string;
if (email && !this.isValidEmail(email)) {
  throw new NodeOperationError(this.getNode(), "Invalid email address format");
}`}
            </CodeBlock>

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
            <CodeBlock language="bash">
              {`# Für Entwicklung verlinken
npm link

# Im n8n-Verzeichnis
npm link your-node-package`}
            </CodeBlock>

            <Typo.H3 className="mt-8">npm-Package</Typo.H3>
            <CodeBlock language="bash">
              {`# Auf npm veröffentlichen
npm publish

# In n8n installieren
npm install your-custom-node`}
            </CodeBlock>

            <Typo.H3 className="mt-8">Docker-Deployment</Typo.H3>
            <Typo.Paragraph>Erstellen Sie ein Dockerfile:</Typo.Paragraph>
            <CodeBlock language="docker">
              {`FROM n8nio/n8n:latest

# Custom Node kopieren
COPY --from=builder /app/dist /usr/local/lib/node_modules/n8n/node_modules/your-custom-node

# Umgebungsvariablen setzen
ENV N8N_CUSTOM_EXTENSIONS="/usr/local/lib/node_modules/n8n/node_modules/your-custom-node"

EXPOSE 5678
CMD ["n8n"]`}
            </CodeBlock>

            <Typo.H3 className="mt-8">Docker Compose</Typo.H3>
            <CodeBlock language="yaml">
              {`version: "3.8"
services:
  n8n:
    image: n8nio/n8n:latest
    ports:
      - "5678:5678"
    environment:
      - N8N_CUSTOM_EXTENSIONS=/custom-nodes
    volumes:
      - ./custom-nodes:/custom-nodes
      - n8n_data:/home/node/.n8n
    depends_on:
      - postgres

  postgres:
    image: postgres:13
    environment:
      POSTGRES_DB: n8n
      POSTGRES_USER: n8n
      POSTGRES_PASSWORD: n8n
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  n8n_data:
  postgres_data:`}
            </CodeBlock>
          </div>

          {/* Section: Best Practices */}

          <Separator />

          <div>
            <Typo.H2 id="best-practices-und-tipps">
              Best Practices und Tipps
            </Typo.H2>

            <Typo.H3>Code-Organisation</Typo.H3>
            <CodeBlock language="typescript">
              {`// Gut: Separate Methoden für verschiedene Operationen
class MyNode implements INodeType {
  async execute(): Promise<INodeExecutionData[][]> {
    const operation = this.getNodeParameter("operation", 0);

    switch (operation) {
      case "create":
        return await this.create();
      case "update":
        return await this.update();
      case "delete":
        return await this.delete();
    }
  }

  private async create(): Promise<INodeExecutionData[][]> {
    // Create-Logik
  }
}`}
            </CodeBlock>

            <Typo.H3 className="mt-8">Fehlerbehandlung</Typo.H3>
            <CodeBlock language="typescript">
              {`// Gut: Umfassende Fehlerbehandlung
try {
  const result = await this.apiCall();
  return result;
} catch (error) {
  if (error.statusCode === 429) {
    throw new NodeApiError(this.getNode(), error, {
      message: "Rate limit exceeded",
      description: "Please try again later",
    });
  }

  throw new NodeOperationError(this.getNode(), error);
}`}
            </CodeBlock>

            <Typo.H3 className="mt-8">Input-Validierung</Typo.H3>
            <CodeBlock language="typescript">
              {`// Gut: Inputs validieren
private validateParameters(params: any): void {
  if (!params.email || !this.isValidEmail(params.email)) {
    throw new NodeOperationError(this.getNode(), 'Valid email is required');
  }
}`}
            </CodeBlock>

            <Typo.H3 className="mt-8">Performance-Optimierung</Typo.H3>
            <CodeBlock language="typescript">
              {`// Items in Batches verarbeiten
const batchSize = 100;
const batches = this.chunkArray(items, batchSize);

for (const batch of batches) {
  await this.processBatch(batch);
}

// Häufig abgerufene Daten cachen
private cache = new Map<string, any>();

private async getCachedData(key: string): Promise<any> {
  if (this.cache.has(key)) {
    return this.cache.get(key);
  }

  const data = await this.fetchData(key);
  this.cache.set(key, data);
  return data;
}`}
            </CodeBlock>

            <Typo.H3 className="mt-8">Sicherheitsaspekte</Typo.H3>
            <CodeBlock language="typescript">
              {`// Gut: Sicherer Credential-Zugriff
const credentials = await this.getCredentials('myApiCredentials');
const apiKey = credentials.apiKey as string;

// Niemals Credentials loggen
console.log('Making API call...'); // API-Key NICHT loggen

// User-Inputs sanitizen
private sanitizeInput(input: string): string {
  return input.replace(/[<>]/g, '');
}`}
            </CodeBlock>

            <Typo.H3 className="mt-8">Dokumentation</Typo.H3>
            <CodeBlock language="typescript">
              {`/**
 * Erstellt oder aktualisiert einen Lead in Microsoft Dynamics 365
 * @param leadData - Lead-Daten mit Vorname, Nachname, E-Mail und Firma
 * @param operation - Operation (create oder update)
 * @returns Erstellter oder aktualisierter Lead mit ID
 */
private async processLead(
  leadData: any,
  operation: 'create' | 'update'
): Promise<any> {
  // Implementation
}`}
            </CodeBlock>

            <Typo.H3 className="mt-8">
              Troubleshooting häufiger Probleme
            </Typo.H3>

            <Typo.H4>Node erscheint nicht in der UI</Typo.H4>
            <p className="font-semibold">Problem:</p>
            <Typo.Paragraph>
              Der Custom Node wird nicht in der n8n-Oberfläche angezeigt
            </Typo.Paragraph>
            <p className="font-semibold mt-4">Lösungen:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <code className="bg-gray-200 px-2 py-1 rounded">
                  package.json
                </code>{" "}
                exports überprüfen
              </li>
              <li>
                Node neu bauen und{" "}
                <code className="bg-gray-200 px-2 py-1 rounded">npm link</code>{" "}
                ausführen
              </li>
              <li>n8n neu starten</li>
              <li>Browser-Cache leeren</li>
            </ul>

            <Typo.H4 className="mt-8">Credential-Fehler</Typo.H4>
            <p className="font-semibold">Problem:</p>
            <Typo.Paragraph>
              Authentifizierungsfehler oder Credentials nicht gefunden
            </Typo.Paragraph>
            <p className="font-semibold mt-4">Lösungen:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Credential-Name in Node und Credential-Datei muss übereinstimmen
              </li>
              <li>Credential-Typ korrekt registrieren</li>
              <li>Credentials in n8n UI überprüfen</li>
            </ul>

            <Typo.H4 className="mt-8">API-Request-Fehler</Typo.H4>
            <p className="font-semibold">Problem:</p>
            <Typo.Paragraph>
              HTTP-Requests schlagen fehl oder haben Timeouts
            </Typo.Paragraph>
            <p className="font-semibold mt-4">Lösungen:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Request-Timeouts erhöhen</li>
              <li>Proper Error-Handling implementieren</li>
              <li>API-Response-Format überprüfen</li>
              <li>Network-Connectivity testen</li>
            </ul>
          </div>

          {/* Section: Community and Resources */}

          <Separator />

          <div>
            <Typo.H2>Community und Ressourcen</Typo.H2>

            <Typo.H3>Offizielle Dokumentation</Typo.H3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <a
                  href="https://docs.n8n.io/"
                  className="text-primary-600 hover:text-primary-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  n8n Dokumentation
                </a>
              </li>
              <li>
                <a
                  href="https://docs.n8n.io/integrations/creating-nodes/"
                  className="text-primary-600 hover:text-primary-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Node Development Guide
                </a>
              </li>
              <li>
                <a
                  href="https://docs.n8n.io/api/"
                  className="text-primary-600 hover:text-primary-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  API Reference
                </a>
              </li>
            </ul>

            <Typo.H3 className="mt-8">Community-Support</Typo.H3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <a
                  href="https://community.n8n.io/"
                  className="text-primary-600 hover:text-primary-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  n8n Community Forum
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/n8n-io/n8n/discussions"
                  className="text-primary-600 hover:text-primary-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Discussions
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/n8n"
                  className="text-primary-600 hover:text-primary-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord Server
                </a>
              </li>
            </ul>

            <Typo.H3 className="mt-8">Learning Resources</Typo.H3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <a
                  href="https://www.youtube.com/@n8n-io"
                  className="text-primary-600 hover:text-primary-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube Tutorials
                </a>
              </li>
              <li>
                <a
                  href="https://blog.n8n.io/"
                  className="text-primary-600 hover:text-primary-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog Articles
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/n8n-io/n8n-nodes-starter"
                  className="text-primary-600 hover:text-primary-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Example Nodes Repository
                </a>
              </li>
            </ul>
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
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Wählen Sie den richtigen Stil:</strong> Deklarativ für
                einfache APIs, programmatisch für komplexe Logik
              </li>
              <li>
                <strong>Planen Sie Ihre Node-Struktur:</strong> Denken Sie an
                Inputs, Outputs und Parameter-Designs
              </li>
              <li>
                <strong>Implementieren Sie robustes Error-Handling:</strong>{" "}
                Fehlerbehandlung ist entscheidend für Produktions-Nodes
              </li>
              <li>
                <strong>Testen Sie gründlich:</strong> Nutzen Sie lokale
                Entwicklung und das n8n-Testing-Framework
              </li>
              <li>
                <strong>Dokumentieren Sie Ihren Code:</strong> Zukünftige
                Entwickler (einschließlich Sie selbst) werden es Ihnen danken
              </li>
              <li>
                <strong>Folgen Sie Best Practices:</strong> Code-Organisation,
                Sicherheit und Performance sind wichtig
              </li>
            </ul>

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
