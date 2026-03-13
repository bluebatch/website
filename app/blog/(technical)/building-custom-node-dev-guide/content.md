# Benutzerdefinierte Nodes in n8n erstellen: Ein vollständiger Entwickler-Leitfaden

**Autor:** Max Hänsel

---

_Transformieren Sie Ihre Workflow-Automatisierung mit benutzerdefinierten Integrationen, die exakt Ihren Anforderungen entsprechen_

## Warum Custom Nodes im Jahr 2025 wichtig sind

Obwohl n8n über 400+ integrierte Nodes bietet, gibt es Situationen, in denen Sie etwas benötigen, das noch nicht existiert. Vielleicht arbeiten Sie mit einer proprietären API, benötigen spezifische Datentransformationen oder möchten interne Systeme integrieren. Custom Nodes ermöglichen es Ihnen, maßgeschneiderte Lösungen zu entwickeln, die genau Ihren geschäftlichen Anforderungen entsprechen.

Ob Sie ein Entwickler sind, der die Funktionen von n8n erweitern möchte, oder ein Business-Anwender, der eine spezifische Integration benötigt – dieser Leitfaden führt Sie durch alles, was Sie über die Erstellung von Custom Nodes wissen müssen.

## Inhaltsverzeichnis

1. [n8n Node-Architektur verstehen](#n8n-node-architektur-verstehen)
2. [Entwicklungsumgebung einrichten](#entwicklungsumgebung-einrichten)
3. [Den richtigen Node-Stil wählen](#den-richtigen-node-stil-wählen)
4. [Ihren ersten Custom Node erstellen](#ihren-ersten-custom-node-erstellen)
5. [Erweiterte Node-Features](#erweiterte-node-features)
6. [Testing und Debugging](#testing-und-debugging)
7. [Deployment-Strategien](#deployment-strategien)
8. [Best Practices und Tipps](#best-practices-und-tipps)

## n8n Node-Architektur verstehen

Bevor Sie mit der Entwicklung beginnen, ist es wichtig zu verstehen, wie n8n Nodes unter der Haube funktionieren.

### Was ist ein Node?

In n8n ist ein Node eine funktionale Einheit, die eine spezifische Aufgabe ausführt, wie das Versenden einer E-Mail, das Durchführen einer HTTP-Anfrage oder das Abfragen einer Datenbank. Jeder Node verfügt über:

- **Inputs**: Eingehende Datenverbindungen
- **Outputs**: Ausgehende Datenverbindungen
- **Parameters**: Konfigurationsoptionen
- **Credentials**: Authentifizierungsinformationen

### Visuelle Node-Struktur im n8n Interface

![Node Struktur](./images/node-structure.png)
![Node Struktur](./images/node-panel.png)

_So erscheint ein typischer Custom Node im n8n Workflow-Editor_

### Wie Ihr Custom Node in der UI erscheint

Wenn Sie einen Custom Node erstellen, integriert er sich nahtlos in die n8n-Oberfläche:

#### 1. Node-Palette (Linke Seitenleiste)

![Node Palette](./images/node-palette.png)

#### 2. Node im Workflow (Visuelle Darstellung)

![Node im Workflow](./images/node-in-workflow.png)

#### 3. Node-Konfigurations-Panel

![Konfigurationspanel](./images/node-panel.png)

### Node-Lebenszyklus

```
Dateneingabe → Parameter-Verarbeitung → Ausführung → Datenausgabe
```

### Input/Output-Datenfluss-Visualisierung

![Datenfluss](./images/data-flow-visualization.png)

_Das Verstehen, wie Daten durch Ihren Custom Node fließen, ist entscheidend_

### Real Node Appearance Examples

#### Beispiel 1: Weather Alert Node in Aktion

**Vor der Ausführung:**

![Weather Node vor Ausführung](./images/custom-node-before.png)

**Nach der Ausführung:**

![Weather Node nach Ausführung](./images/custom-node-after.png)

#### Beispiel 2: Node-Datenvorschau

![Node Datenvorschau](./images/node-data-preview.png)

_Wenn Sie nach der Ausführung auf einen Node klicken, sehen Sie die verarbeiteten Daten_

### Dateistruktur

Jeder Custom Node besteht aus mehreren Schlüsseldateien:

```
my-custom-node/
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
└── README.md
```

## Entwicklungsumgebung einrichten

### Voraussetzungen

- Node.js 18 oder höher
- npm oder yarn
- Grundkenntnisse in TypeScript
- Ein n8n-Account (für Testing)

### Schritt 1: n8n CLI installieren

```bash
npm install -g n8n
```

### Schritt 2: Ihr Node-Projekt erstellen

Verwenden Sie das offizielle n8n-Starter-Template:

```bash
# Starter-Template klonen
git clone https://github.com/n8n-io/n8n-nodes-starter.git my-custom-node
cd my-custom-node

# Dependencies installieren
npm install

# Node bauen
npm run build
```

### Schritt 3: Mit n8n verlinken

```bash
# Ihren Node mit n8n verlinken
npm link

# Im n8n-Installationsverzeichnis (~/.n8n/custom)
npm link my-custom-node
```

**Hinweis:** Führen Sie `npm link my-custom-node` innerhalb von `~/.n8n/custom` aus. Erstellen Sie das Verzeichnis (falls es nicht existiert), und starten Sie dann n8n neu.

### Development Workflow Diagram

![Development Workflow](./images/development-workflow.png)

## Den richtigen Node-Stil wählen

n8n bietet zwei Haupt-Node-Building-Stile: deklarativ und programmatisch. Das Verstehen des Unterschieds ist entscheidend für den Erfolg Ihres Projekts.

### Deklarativer Stil

**Am besten geeignet für:** Einfache API-Integrationen, CRUD-Operationen, unkomplizierte Datentransformationen

**Eigenschaften:**

- JSON-basierte Konfiguration
- Weniger Code erforderlich
- Automatisches Request-Handling
- Ideal für REST-APIs

**Beispielstruktur:**

```typescript
// Deklarativer Node verwendet Routing
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
};
```

### Programmatischer Stil

**Am besten geeignet für:** Komplexe Logik, benutzerdefinierte Datenverarbeitung, mehrere API-Aufrufe, fortgeschrittenes Error-Handling

**Eigenschaften:**

- Vollständige Kontrolle über die Ausführung
- Benutzerdefinierte Fehlerbehandlung
- Komplexe Datenmanipulation
- Mehrere API-Interaktionen

**Beispielstruktur:**

```typescript
// Programmatischer Node verwendet execute-Methode
async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
  const items = this.getInputData();
  const returnData: INodeExecutionData[] = [];

  for (let i = 0; i < items.length; i++) {
    // Benutzerdefinierte Logik hier
    const result = await this.performCustomOperation(items[i]);
    returnData.push({ json: result });
  }

  return [returnData];
}
```

### Decision Matrix

| Merkmal                     | Deklarativ     | Programmatisch       |
| --------------------------- | -------------- | -------------------- |
| Entwicklungsgeschwindigkeit | ⚡ Schnell     | 🐢 Langsamer         |
| Anpassungsfähigkeit         | 🔒 Begrenzt    | 🎯 Volle Kontrolle   |
| Fehlerbehandlung            | 🤖 Automatisch | 🔧 Manuell           |
| Komplexe Logik              | ❌ Nein        | ✅ Ja                |
| API-Paginierung             | 🤖 Integriert  | 🔧 Benutzerdefiniert |

## Ihren ersten Custom Node erstellen

Lassen Sie uns ein praktisches Beispiel erstellen: einen Microsoft Dynamics Lead Manager Node, der Leads in Dynamics 365 CRM erstellt, liest und aktualisiert.

### Visuelle Vorschau: Was wir bauen

So wird unser Microsoft Dynamics Lead Manager Node in der n8n-Oberfläche aussehen und funktionieren:

#### Node im Workflow Canvas

![Node im Canvas](./images/dynamics-node-canvas.png)

### Schritt 1: Node-Metadaten definieren

Erstellen Sie `MicrosoftDynamicsLeads.node.json`:

```json
{
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
}
```

### Schritt 2: Node-Logik implementieren

Erstellen Sie `MicrosoftDynamicsLeads.node.ts`:

```typescript
import {
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

        const baseUrl = `${instanceUrl}/api/data/v9.2`;

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
              subject: `Lead: ${firstname} ${lastname}`,
            };

            result = await this.helpers.request({
              method: "POST",
              url: `${baseUrl}/leads`,
              headers: {
                Authorization: `Bearer ${accessToken}`,
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
              url: `${baseUrl}/leads(${leadId})`,
              headers: {
                Authorization: `Bearer ${accessToken}`,
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
              url: `${baseUrl}/leads(${leadId})`,
              headers: {
                Authorization: `Bearer ${accessToken}`,
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
              `Unknown operation: ${operation}`,
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
}
```

### Schritt 3: Credentials erstellen

Erstellen Sie `MicrosoftDynamicsApi.credentials.ts`:

```typescript
import { ICredentialType, INodeProperties } from "n8n-workflow";

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
}
```

### Schritt 4: Ihren Node registrieren

Aktualisieren Sie `nodes/index.ts`:

```typescript
import { MicrosoftDynamicsLeads } from "./MicrosoftDynamicsLeads/MicrosoftDynamicsLeads.node";

export { MicrosoftDynamicsLeads };
```

Aktualisieren Sie `credentials/index.ts`:

```typescript
import { MicrosoftDynamicsApi } from "./MicrosoftDynamicsApi.credentials";

export { MicrosoftDynamicsApi };
```

## Erweiterte Node-Features

### Dynamische Parameter

Lassen Sie Ihren Node sich basierend auf Benutzerauswahlen anpassen:

```typescript
{
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
},
```

### Visuelles Ergebnis: Dynamisches Interface

![Dynamisches Interface - Create Lead](./images/dynamic-interface-create-lead.png)

**Operation: "Create Lead"** - Zeigt Felder für Vorname, Nachname, E-Mail und Firma

![Dynamisches Interface - Read Lead](./images/dynamic-interface-read-lead.png)

**Operation: "Read Lead"** - Zeigt nur das Lead ID Feld

### Komplexer Node mit mehreren Outputs

Einige Nodes können mehrere Outputs basierend auf Bedingungen haben:

![Node mit bedingten Outputs](./images/conditional-outputs.png)

### Error-Handling-Patterns

```typescript
try {
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
}
```

### Visuelle Fehleranzeige

![Fehlerstatus im Node](./images/error-state.png)

_Wenn Fehler auftreten, werden sie deutlich in der Oberfläche angezeigt_

### Resource Mapping

Für komplexe APIs mit mehreren Endpoints:

```typescript
const resourceMapping = {
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
};
```

## Testing und Debugging

### Lokales Testing

Führen Sie Ihre n8n-Instanz lokal aus (`npx n8n start`) und prüfen Sie die UI. Ihr Node sollte unter "Custom Nodes" erscheinen.

```bash
# Bauen und testen
npm run build
npm run test

# n8n mit Ihrem Custom Node starten
npx n8n start
```

### Testing Workflow

![Testing Workflow](./images/testing-workflow.png)

### Debugging-Tipps

1. **Console Logging verwenden:**

```typescript
console.log("Debug: Processing item", i, items[i]);
```

2. **API-Responses inspizieren:**

```typescript
const response = await this.helpers.request({
  method: "GET",
  url: "https://api.example.com/data",
  json: true,
});
console.log("API Response:", response);
```

3. **Parameter-Validierung:**

```typescript
const leadId = this.getNodeParameter("leadId", i) as string;
if (!leadId) {
  throw new NodeOperationError(this.getNode(), "Lead ID parameter is required");
}

const email = this.getNodeParameter("emailaddress1", i) as string;
if (email && !this.isValidEmail(email)) {
  throw new NodeOperationError(this.getNode(), "Invalid email address format");
}
```

### Häufige Probleme und Lösungen

| Problem                        | Lösung                                 |
| ------------------------------ | -------------------------------------- |
| Node erscheint nicht in der UI | package.json exports prüfen            |
| Credential-Fehler              | Credential-Typ-Matching verifizieren   |
| Request-Fehler                 | Ordentliches Error-Handling hinzufügen |
| Parameter-Validierung          | Input-Validierung hinzufügen           |

## Deployment-Strategien

### Lokale Entwicklung

```bash
# Für Entwicklung verlinken
npm link

# Im n8n-Verzeichnis
npm link your-node-package
```

### npm-Package

```bash
# Auf npm veröffentlichen
npm publish

# In n8n installieren
npm install your-custom-node
```

### Docker-Deployment

Erstellen Sie ein Dockerfile:

```dockerfile
FROM n8nio/n8n:latest

# Custom Node kopieren
COPY --from=builder /app/dist /usr/local/lib/node_modules/n8n/node_modules/your-custom-node

# Umgebungsvariablen setzen
ENV N8N_CUSTOM_EXTENSIONS="/usr/local/lib/node_modules/n8n/node_modules/your-custom-node"

EXPOSE 5678
CMD ["n8n"]
```

### Docker Compose

```yaml
version: "3.8"
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
  postgres_data:
```

## Real-World-Beispiele

### Beispiel 1: Slack-Integration mit Custom Features

```typescript
export class SlackCustom implements INodeType {
  description: INodeTypeDescription = {
    displayName: "Slack Custom",
    name: "slackCustom",
    icon: "file:slack.svg",
    group: ["communication"],
    version: 1,
    description: "Custom Slack integration with advanced features",
    // ... configuration
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const operation = this.getNodeParameter("operation", 0) as string;

    switch (operation) {
      case "sendFormattedMessage":
        return await this.sendFormattedMessage();
      case "createPoll":
        return await this.createPoll();
      case "scheduleMessage":
        return await this.scheduleMessage();
      default:
        throw new NodeOperationError(
          this.getNode(),
          `Unknown operation: ${operation}`,
        );
    }
  }

  private async sendFormattedMessage(): Promise<INodeExecutionData[][]> {
    const message = this.getNodeParameter("message", 0) as string;
    const channel = this.getNodeParameter("channel", 0) as string;

    // Custom formatting logic
    const formattedMessage = this.applyCustomFormatting(message);

    // Send via Slack API
    const result = await this.helpers.request({
      method: "POST",
      url: "https://slack.com/api/chat.postMessage",
      headers: {
        Authorization: `Bearer ${await this.getCredentials("slackApi")}`,
        "Content-Type": "application/json",
      },
      body: {
        channel,
        text: formattedMessage,
      },
      json: true,
    });

    return [[{ json: result }]];
  }
}
```

### Beispiel 2: Database Connector mit Connection Pooling

```typescript
export class DatabaseConnector implements INodeType {
  private connectionPool: Map<string, any> = new Map();

  description: INodeTypeDescription = {
    displayName: "Database Connector",
    name: "databaseConnector",
    icon: "fa:database",
    group: ["database"],
    version: 1,
    description: "Advanced database operations with connection pooling",
    // ... configuration
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const operation = this.getNodeParameter("operation", 0) as string;
    const connectionString = await this.getCredentials("databaseCredentials");

    // Get or create connection pool
    const pool = this.getConnectionPool(connectionString);

    switch (operation) {
      case "query":
        return await this.executeQuery(pool);
      case "bulkInsert":
        return await this.bulkInsert(pool);
      case "transaction":
        return await this.executeTransaction(pool);
      default:
        throw new NodeOperationError(
          this.getNode(),
          `Unknown operation: ${operation}`,
        );
    }
  }

  private getConnectionPool(connectionString: any): any {
    const poolKey = JSON.stringify(connectionString);

    if (!this.connectionPool.has(poolKey)) {
      const pool = this.createConnectionPool(connectionString);
      this.connectionPool.set(poolKey, pool);
    }

    return this.connectionPool.get(poolKey);
  }
}
```

## Best Practices und Tipps

### Code-Organisation

```typescript
// Gut: Separate Methoden für verschiedene Operationen
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
}
```

### Fehlerbehandlung

```typescript
// Gut: Umfassende Fehlerbehandlung
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
}
```

### Input-Validierung

```typescript
// Gut: Inputs validieren
private validateParameters(params: any): void {
  if (!params.email || !this.isValidEmail(params.email)) {
    throw new NodeOperationError(this.getNode(), 'Valid email is required');
  }
}
```

### Performance-Optimierung

```typescript
// Items in Batches verarbeiten
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
}
```

### Sicherheitsaspekte

```typescript
// Gut: Sicherer Credential-Zugriff
const credentials = await this.getCredentials('myApiCredentials');
const apiKey = credentials.apiKey as string;

// Niemals Credentials loggen
console.log('Making API call...'); // API-Key NICHT loggen

// User-Inputs sanitizen
private sanitizeInput(input: string): string {
  return input.replace(/[<>]/g, '');
}
```

### Dokumentation

```typescript
/**
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
}
```

#### README-Beispiel

```markdown
# Microsoft Dynamics 365 Leads Node

## Beschreibung

Custom n8n-Node für die Verwaltung von Leads in Microsoft Dynamics 365 CRM.

## Installation

npm install n8n-nodes-microsoft-dynamics-leads

## Konfiguration

1. Azure AD App Registration erstellen
2. Microsoft Dynamics 365 API-Credentials hinzufügen
3. Erforderliche Berechtigungen konfigurieren (Dynamics CRM user_impersonation)
4. OAuth 2.0 Access Token generieren

## Unterstützte Operationen

- **Create Lead**: Neuen Lead erstellen
- **Read Lead**: Lead-Details abrufen
- **Update Lead**: Bestehenden Lead aktualisieren

## Verwendungsbeispiele

[Workflow-Beispiele einfügen]
```

## Troubleshooting häufiger Probleme

### Node erscheint nicht in der UI

**Problem:** Der Custom Node wird nicht in der n8n-Oberfläche angezeigt

**Lösungen:**

- `package.json` exports überprüfen
- Node neu bauen und `npm link` ausführen
- n8n neu starten
- Browser-Cache leeren

### Credential-Fehler

**Problem:** Authentifizierungsfehler oder Credentials nicht gefunden

**Lösungen:**

- Credential-Name in Node und Credential-Datei muss übereinstimmen
- Credential-Typ korrekt registrieren
- Credentials in n8n UI überprüfen

### API-Request-Fehler

**Problem:** HTTP-Requests schlagen fehl oder haben Timeouts

**Lösungen:**

- Request-Timeouts erhöhen
- Proper Error-Handling implementieren
- API-Response-Format überprüfen
- Network-Connectivity testen

## Community und Ressourcen

### Offizielle Dokumentation

- [n8n Dokumentation](https://docs.n8n.io/)
- [Node Development Guide](https://docs.n8n.io/integrations/creating-nodes/)
- [API Reference](https://docs.n8n.io/api/)

### Community-Support

- [n8n Community Forum](https://community.n8n.io/)
- [GitHub Discussions](https://github.com/n8n-io/n8n/discussions)
- [Discord Server](https://discord.gg/n8n)

### Learning Resources

- [YouTube Tutorials](https://www.youtube.com/@n8n-io)
- [Blog Articles](https://blog.n8n.io/)
- [Example Nodes Repository](https://github.com/n8n-io/n8n-nodes-starter)

## Fazit

Die Erstellung von Custom Nodes in n8n eröffnet endlose Möglichkeiten für Workflow-Automatisierung. Ob Sie einfache API-Integrationen oder komplexe Geschäftslogik entwickeln – die Flexibilität und Leistungsfähigkeit von Custom Nodes kann transformieren, wie Sie Daten und Prozesse handhaben.

### Wichtige Erkenntnisse

- **Wählen Sie den richtigen Stil:** Deklarativ für einfache APIs, programmatisch für komplexe Logik
- **Planen Sie Ihre Node-Struktur:** Denken Sie an Inputs, Outputs und Parameter-Designs
- **Implementieren Sie robustes Error-Handling:** Fehlerbehandlung ist entscheidend für Produktions-Nodes
- **Testen Sie gründlich:** Nutzen Sie lokale Entwicklung und das n8n-Testing-Framework
- **Dokumentieren Sie Ihren Code:** Zukünftige Entwickler (einschließlich Sie selbst) werden es Ihnen danken
- **Folgen Sie Best Practices:** Code-Organisation, Sicherheit und Performance sind wichtig

Die Zukunft der Workflow-Automatisierung liegt in Ihren Händen. Beginnen Sie noch heute mit der Entwicklung Ihrer Custom Nodes und erschließen Sie das volle Potenzial von n8n für Ihre spezifischen Anforderungen.

---

_Haben Sie eigene Custom Nodes entwickelt? Teilen Sie Ihre Erfahrungen und Beispiele in den Kommentaren!_
