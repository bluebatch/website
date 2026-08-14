import type { ToolSlug } from "./tool-comparison-data";

/**
 * Datengrundlage für das SoftwareApplication-JSON-LD der Tool-Seiten.
 *
 * Bewusst als eine Datei und nicht je Seite: eine Auszeichnung, die pro Seite
 * gepflegt werden muss, landet erfahrungsgemäß bei "28 von 217" und bleibt
 * dort. Gleiche Begründung wie beim Article-Schema in blog-layout.tsx.
 *
 * Regel für neue Einträge: Nur Angaben, die auf der Seite tatsächlich
 * stehen. Kein `aggregateRating` — wir haben keine Bewertungen und erfinden
 * auch keine. Der Einstiegspreis kommt aus `comparisonData[slug].einstiegspreis`
 * und ist damit dieselbe Zahl, die die Vergleichstabelle der Seite anzeigt.
 */
export type ToolSchemaEntry = {
  /** Produktname, wie ihn der Anbieter schreibt */
  name: string;
  /** Kurzbeschreibung des Produkts, nicht unserer Leistung */
  description: string;
  /** schema.org applicationCategory */
  applicationCategory: string;
  /** Auf welchen Systemen das Produkt läuft */
  operatingSystem: string;
  /** Herstellerorganisation */
  provider: { name: string; url: string };
  /**
   * Günstigster Einstieg als Angebot. `price: "0"` nur dort, wo es eine
   * dauerhaft nutzbare Gratis-Variante gibt (Community Edition oder Free Tier),
   * nicht für befristete Testphasen. `undefined` heißt: kein öffentlicher
   * Preis, dann wird kein `offers` ausgegeben.
   */
  lowPrice?: { price: string; currency: string };
};

export const toolSchemaData: Record<ToolSlug, ToolSchemaEntry> = {
  n8n: {
    name: "n8n",
    description:
      "Fair-Code-lizenzierte Workflow-Automatisierung mit visuellem Editor, Code-Nodes und AI-Agent-Node. Läuft self-hosted per Docker oder Kubernetes oder als Cloud-Dienst und rechnet pro Workflow-Execution ab.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Docker, Kubernetes, Windows, macOS, Linux",
    provider: { name: "n8n GmbH", url: "https://n8n.io" },
    lowPrice: { price: "0", currency: "EUR" },
  },
  make: {
    name: "Make",
    description:
      "Cloud-basierte No-Code-Automatisierungsplattform, früher Integromat. Rechnet credit-basiert pro Aktion ab und bietet Router, Iteratoren und Aggregatoren, aber keine nativen Code-Nodes und kein Self-Hosting.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    provider: { name: "Make (Celonis)", url: "https://www.make.com" },
    lowPrice: { price: "0", currency: "EUR" },
  },
  zapier: {
    name: "Zapier",
    description:
      "Cloud-Automatisierungsdienst mit über 8.000 nativen App-Verbindungen. Rechnet task-basiert pro Aktionsschritt ab, läuft ausschließlich auf US-Servern und bietet kein Self-Hosting.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    provider: { name: "Zapier, Inc.", url: "https://zapier.com" },
    lowPrice: { price: "0", currency: "EUR" },
  },
  "power-automate": {
    name: "Microsoft Power Automate",
    description:
      "Automatisierungsdienst im Microsoft-365-Ökosystem mit Cloud Flows, Desktop Flows für RPA und Copilot. Rechnet pro Nutzer und Monat ab, läuft in der Microsoft Cloud und kennt kein Self-Hosting.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Windows",
    provider: {
      name: "Microsoft Corporation",
      url: "https://www.microsoft.com/power-platform/products/power-automate",
    },
    lowPrice: { price: "0", currency: "EUR" },
  },
  workato: {
    name: "Workato",
    description:
      "Enterprise-iPaaS mit über 1.200 Konnektoren und Recipe-Modell. Rechnet task-basiert nach individueller Verhandlung ab, veröffentlicht keine Listenpreise und läuft als SaaS mit optionalem On-Premises-Agent.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    provider: { name: "Workato, Inc.", url: "https://www.workato.com" },
  },
  uipath: {
    name: "UiPath",
    description:
      "RPA-Plattform für Desktop-Automatisierung mit attended und unattended Robots, Studio und Orchestrator. Automatisiert Oberflächen dort, wo Altsysteme keine API haben.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Windows, Web",
    provider: { name: "UiPath, Inc.", url: "https://www.uipath.com" },
    lowPrice: { price: "0", currency: "EUR" },
  },
  "tray-io": {
    name: "Tray.io",
    description:
      "Enterprise-iPaaS mit Merlin AI und über 600 Konnektoren, ausschließlich als Cloud-SaaS. Preise werden individuell verhandelt und beginnen im hohen vierstelligen Monatsbereich.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    provider: { name: "Tray.ai", url: "https://tray.ai" },
  },
  activepieces: {
    name: "Activepieces",
    description:
      "MIT-lizenzierte Open-Source-Automatisierungsplattform mit AI-first-Ausrichtung. Läuft self-hosted als Community Edition oder als Cloud-Dienst mit Abrechnung pro aktivem Flow.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Docker, Linux",
    provider: { name: "Activepieces", url: "https://www.activepieces.com" },
    lowPrice: { price: "0", currency: "EUR" },
  },
  pipedream: {
    name: "Pipedream",
    description:
      "Code-first-Automatisierungsplattform mit über 2.800 Integrationen und credit-basierter Abrechnung. Läuft ausschließlich als Cloud-Dienst auf AWS in den USA, ohne Self-Hosting.",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    provider: { name: "Pipedream (Workday)", url: "https://pipedream.com" },
    lowPrice: { price: "0", currency: "EUR" },
  },
};
