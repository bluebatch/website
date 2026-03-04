export type ToolSlug =
  | "n8n"
  | "make"
  | "zapier"
  | "power-automate"
  | "workato"
  | "uipath"
  | "tray-io"
  | "activepieces"
  | "pipedream";

export type ComparisonCriterion =
  | "preismodell"
  | "einstiegspreis"
  | "self-hosting"
  | "open-source"
  | "native-integrationen"
  | "ki-faehigkeiten"
  | "workflow-komplexitaet"
  | "dsgvo-compliance"
  | "code-flexibilitaet"
  | "vendor-lock-in"
  | "lernkurve"
  | "ideal-fuer"
  | "desktop-rpa";

export const tools: { slug: ToolSlug; name: string }[] = [
  { slug: "n8n", name: "n8n" },
  { slug: "make", name: "Make" },
  { slug: "zapier", name: "Zapier" },
  { slug: "power-automate", name: "Power Automate" },
  { slug: "workato", name: "Workato" },
  { slug: "uipath", name: "UiPath" },
  { slug: "tray-io", name: "Tray.io" },
  { slug: "activepieces", name: "Activepieces" },
  { slug: "pipedream", name: "Pipedream" },
];

export const criteria: { id: ComparisonCriterion; label: string }[] = [
  { id: "preismodell", label: "Preismodell" },
  { id: "einstiegspreis", label: "Einstiegspreis" },
  { id: "self-hosting", label: "Self-Hosting" },
  { id: "open-source", label: "Open Source" },
  { id: "native-integrationen", label: "Native Integrationen" },
  { id: "ki-faehigkeiten", label: "KI-Fähigkeiten" },
  { id: "workflow-komplexitaet", label: "Workflow-Komplexität" },
  { id: "dsgvo-compliance", label: "DSGVO-Compliance" },
  { id: "code-flexibilitaet", label: "Code-Flexibilität" },
  { id: "vendor-lock-in", label: "Vendor Lock-in" },
  { id: "lernkurve", label: "Lernkurve" },
  { id: "ideal-fuer", label: "Ideal für" },
  { id: "desktop-rpa", label: "Desktop-RPA" },
];

export const comparisonData: Record<
  ToolSlug,
  Record<ComparisonCriterion, string>
> = {
  n8n: {
    preismodell: "Pro Execution (Cloud) oder flat (Self-Hosted)",
    einstiegspreis: "0,- € (Self-Hosted) / ab 24,- €/Monat (Cloud)",
    "self-hosting": "Ja, Community Edition kostenlos (Docker, K8s)",
    "open-source": "Ja, Fair-Code-Lizenz (Sustainable Use License)",
    "native-integrationen": "400+ Nodes + Custom Nodes + HTTP-Node",
    "ki-faehigkeiten":
      "AI Agent Node, LangChain, Self-hosted LLMs, Vector Stores",
    "workflow-komplexitaet":
      "Sehr hoch: Loops, Sub-Workflows, Error Handling, Code-Nodes",
    "dsgvo-compliance": "Exzellent bei Self-Hosting (EU-Daten, volle Kontrolle)",
    "code-flexibilitaet": "JavaScript, Python, Custom Nodes",
    "vendor-lock-in": "Minimal (Open Source, exportierbare Workflows)",
    lernkurve: "Moderat, technischer als No-Code-Tools",
    "ideal-fuer":
      "Developer, datenschutzkritische Anwendungen, komplexe Workflows",
    "desktop-rpa": "Nein",
  },
  make: {
    preismodell: "Credit-basiert (pro Aktion/Modul)",
    einstiegspreis: "0,- € (1.000 Credits) / ab 10,59 €/Monat (Core)",
    "self-hosting": "Nein, ausschließlich Cloud",
    "open-source": "Nein, proprietär",
    "native-integrationen": "3.000+ Apps + 400+ AI-Module",
    "ki-faehigkeiten":
      "AI-Module (isolierte Schritte), Maia-Assistent (in Entwicklung)",
    "workflow-komplexitaet":
      "Hoch: Router, Iteratoren, Aggregatoren, Fehlerbehandlung",
    "dsgvo-compliance": "EU-Server verfügbar, aber Cloud-only",
    "code-flexibilitaet": "Sehr begrenzt, keine nativen Code-Nodes",
    "vendor-lock-in": "Hoch (nicht portierbare Szenarien)",
    lernkurve: "Mittel (10–20h für Einsteiger)",
    "ideal-fuer": "Marketing/Ops-Teams, No-Code-Power-User, Agenturen",
    "desktop-rpa": "Nein",
  },
  zapier: {
    preismodell: "Task-basiert (pro Aktionsschritt)",
    einstiegspreis: "0,- € (100 Tasks) / ab 29,99 €/Monat (Professional)",
    "self-hosting": "Nein, ausschließlich Cloud",
    "open-source": "Nein, proprietär",
    "native-integrationen": "8.000+ native App-Verbindungen",
    "ki-faehigkeiten": "Copilot, Central, Agents, MCP-Support",
    "workflow-komplexitaet":
      "Begrenzt: linear, keine nativen Loops auf unteren Plänen",
    "dsgvo-compliance": "Problematisch (US-Server, kein Self-Hosting)",
    "code-flexibilitaet": "Begrenzt",
    "vendor-lock-in": "Hoch (kein Export, proprietäres Format)",
    lernkurve: "Sehr flach, sofort nutzbar",
    "ideal-fuer":
      "Nicht-technische Nutzer, schnelle Prototypen, Freelancer",
    "desktop-rpa": "Nein",
  },
  "power-automate": {
    preismodell: "Pro Nutzer/Monat + Premium-Add-ons",
    einstiegspreis: "0,- € (M365 inkl.) / 15,- €/User/Monat (Premium)",
    "self-hosting": "Nein, nur Microsoft Cloud (Azure)",
    "open-source": "Nein, proprietär (Microsoft)",
    "native-integrationen": "1.000+ Konnektoren (viele Premium)",
    "ki-faehigkeiten":
      "Copilot, AI Builder (500,- €/Unit/Mo.), Copilot Studio, Generative Actions",
    "workflow-komplexitaet":
      "Mittel: Cloud Flows + Desktop Flows, Bedingungen, Schleifen",
    "dsgvo-compliance": "EU-Rechenzentren möglich, aber kein Self-Hosting",
    "code-flexibilitaet": "Nur Expressions (Power Fx), kein JS/Python",
    "vendor-lock-in": "Hoch (Microsoft-Ökosystem, nicht exportierbar)",
    lernkurve: "Moderat, Microsoft-Kenntnisse helfen",
    "ideal-fuer":
      "Microsoft-365-Unternehmen, Citizen Developer, RPA-Bedarf",
    "desktop-rpa": "Ja, integriert (Attended & Unattended)",
  },
  workato: {
    preismodell: "Task-basiert, individuelle Verhandlung",
    einstiegspreis: "Ab ca. 15.000,- €/Jahr (Starter)",
    "self-hosting": "Nein, SaaS + On-Premises Agent (OPA)",
    "open-source": "Nein, proprietär",
    "native-integrationen": "1.200+ vorgebaute Konnektoren",
    "ki-faehigkeiten":
      "5 Copilots, Genies (Agentic AI), Enterprise MCP-Plattform",
    "workflow-komplexitaet":
      "Hoch: Sub-Recipes, Fehlerbehandlung, Multi-Environment",
    "dsgvo-compliance":
      "SOC2, HIPAA, ISO 27001 – aber US-Unternehmen, kein Self-Hosting",
    "code-flexibilitaet": "Low-Code, begrenzte Custom-Code-Optionen",
    "vendor-lock-in": "Hoch (proprietäre Recipes, 100K+ €/Jahr-Bindung)",
    lernkurve: "Steil für Einsteiger, Enterprise-Komplexität",
    "ideal-fuer":
      "Fortune 500, regulierte Branchen, RevOps, Embedded iPaaS",
    "desktop-rpa": "Nein",
  },
  uipath: {
    preismodell: "Kreditbasiert (Unified) oder lizenzbasiert (Flex)",
    einstiegspreis: "0,- € (Community) / ab 25,- €/Monat (Basic)",
    "self-hosting": "Ja, On-Premise möglich (teuer)",
    "open-source": "Nein, proprietär (börsennotiert)",
    "native-integrationen":
      "Fokus auf Desktop-UI, nicht auf API-Konnektoren",
    "ki-faehigkeiten":
      "AI Center, Document Understanding, Agent Builder (Maestro)",
    "workflow-komplexitaet":
      "Hoch für RPA: UI-Flows, Attended/Unattended, Orchestrator",
    "dsgvo-compliance":
      "Cloud (US) oder On-Premise (teuer), EU-Deployment möglich",
    "code-flexibilitaet": ".NET-basiert, VB.NET und C# in Studio",
    "vendor-lock-in": "Hoch (proprietär, .NET-Abhängigkeit)",
    lernkurve:
      "Steil (komplexe Architektur, Wochen bis Monate Einarbeitung)",
    "ideal-fuer":
      "Legacy-Systeme ohne APIs, Banken, Gesundheitswesen, Fertigung",
    "desktop-rpa": "Ja, Kernkompetenz (Attended & Unattended Robots)",
  },
  "tray-io": {
    preismodell: "Task-Credit-basiert, individuelle Verhandlung",
    einstiegspreis: "Ab ca. 2.500,- €/Monat (30.000+ €/Jahr)",
    "self-hosting": "Nein, ausschließlich Cloud-SaaS",
    "open-source": "Nein, proprietär und geschlossen",
    "native-integrationen": "600–700+ vorgefertigte Konnektoren",
    "ki-faehigkeiten":
      "Merlin AI Agent Builder 2.0, Multi-LLM, Smart Data Sources",
    "workflow-komplexitaet":
      "Hoch: API-First, event-driven, hybride Integrationsmuster",
    "dsgvo-compliance":
      "EU-Data-Residency verfügbar, aber kein Self-Hosting",
    "code-flexibilitaet":
      "API-First mit Tray Code, aber kein nativer Code-Editor im Workflow",
    "vendor-lock-in": "Hoch (proprietär, nicht exportierbar)",
    lernkurve: "Steil (JSON/API-Wissen nötig, lückenhafte Doku)",
    "ideal-fuer":
      "Enterprise RevOps, SaaS-Unternehmen (Embedded iPaaS), Marketing Ops",
    "desktop-rpa": "Nein",
  },
  activepieces: {
    preismodell: "Pro Flow (Cloud) oder kostenlos (Self-Hosted)",
    einstiegspreis: "0,- € (1.000 Tasks) / 5,- € pro aktivem Flow (Standard)",
    "self-hosting": "Ja, Community Edition kostenlos",
    "open-source": "Ja, MIT-Lizenz (permissivste OS-Lizenz)",
    "native-integrationen": "ca. 560 Pieces (60% Community-beigesteuert)",
    "ki-faehigkeiten":
      "AI Agents, MCP-Toolkit (280+ Pieces), AI Copilot im Builder",
    "workflow-komplexitaet":
      "Begrenzt: step-basiert, linear, keine visuellen Verzweigungen",
    "dsgvo-compliance":
      "Nur via Self-Hosting (kein EU-Cloud-Rechenzentrum)",
    "code-flexibilitaet": "TypeScript für eigene Pieces",
    "vendor-lock-in": "Niedrig (MIT-Lizenz, forkbar)",
    lernkurve: "Sehr flach (einfachster Builder am Markt)",
    "ideal-fuer":
      "Startups, Hobby-Entwickler, MIT-Lizenzbedarf, White-Label",
    "desktop-rpa": "Nein",
  },
  pipedream: {
    preismodell: "Kreditbasiert (Compute-Zeit: 30s = 1 Credit)",
    einstiegspreis: "0,- € (100 Credits) / ab 45,- €/Monat (Basic)",
    "self-hosting": "Nein, ausschließlich Cloud (AWS us-east-1)",
    "open-source": "Nur Komponenten (Plattform proprietär)",
    "native-integrationen":
      "2.800+ Apps + 10.000+ vorgefertigte Aktionen",
    "ki-faehigkeiten":
      "AI Agent Builder, 3.000+ APIs als MCP-Server, KI-Tokens inklusive",
    "workflow-komplexitaet":
      "Hoch für Entwickler: Code-native, npm/PyPI-Zugriff",
    "dsgvo-compliance":
      "Problematisch (nur US-Server, kein EU-Rechenzentrum)",
    "code-flexibilitaet":
      "Exzellent: Node.js, Python, Go, Bash + 750.000+ Pakete",
    "vendor-lock-in":
      "Hoch (Cloud-only, Workday-Übernahme, unsichere Roadmap)",
    lernkurve: "Moderat (Programmierkenntnisse erforderlich)",
    "ideal-fuer":
      "Reine Developer-Teams, DevOps/SRE, API-heavy Workflows",
    "desktop-rpa": "Nein",
  },
};

export const defaultToolSets: Record<ToolSlug, ToolSlug[]> = {
  n8n: ["n8n", "make", "zapier", "power-automate"],
  make: ["make", "n8n", "zapier", "power-automate"],
  zapier: ["zapier", "n8n", "make", "power-automate"],
  "power-automate": ["power-automate", "n8n", "make", "zapier"],
  workato: ["workato", "n8n", "make", "zapier"],
  uipath: ["uipath", "n8n", "power-automate"],
  "tray-io": ["tray-io", "n8n", "workato"],
  activepieces: ["activepieces", "n8n"],
  pipedream: ["pipedream", "n8n"],
};
