// Offene Stellen — Single Source of Truth für /karriere. Die Titel landen 1:1
// als Auswahl im Bewerbungsformular und als "position" im HubSpot-Karriere-
// Formular, deshalb hier zentral pflegen statt im JSX der Seite.

export interface Job {
  /** stabile ID, dient auch als Anker-Fragment (#stelle-<id>) */
  id: string;
  title: string;
  type: string;
  location: string;
  description: string;
  requirements: string[];
  tags: string[];
}

export const INITIATIVE_APPLICATION = "Initiativbewerbung";

export const jobs: Job[] = [
  {
    id: "sales-consultant-claude-ki",
    title: "Sales Consultant Claude / KI",
    type: "Vollzeit",
    location: "Nürnberg bevorzugt, remote möglich",
    description:
      "Du verkaufst unsere Private-Claude-Lösung an Anwaltskanzleien und Steuerkanzleien: Claude für das ganze Team, DSGVO-konform über unser Private Claude AI Gateway in Frankfurt. Du führst die Gespräche mit Partnern und Kanzleiinhabern, zeigst an echten Beispielen aus Mandatsarbeit und Kanzleialltag, was Claude abnimmt, und begleitest die Kanzlei bis zum Abschluss.",
    requirements: [
      "Erfahrung im B2B-Vertrieb, gern an Kanzleien oder andere freie Berufe",
      "Du arbeitest selbst täglich mit Claude oder ChatGPT und kannst den Nutzen konkret zeigen",
      "Sicher im Gespräch über Datenschutz und Verschwiegenheit, ohne in Fachjargon zu verfallen",
      "Strukturierte Arbeitsweise mit CRM und sauberer Pipeline",
    ],
    tags: ["Sales", "Claude", "Kanzleien"],
  },
  {
    id: "delivery-consultant-claude",
    title: "Delivery Consultant Claude",
    type: "Vollzeit",
    location: "Nürnberg bevorzugt, remote möglich",
    description:
      "Du führst Private Claude bei Kunden mit vertraulichen Daten ein, von Kanzleien und Arztpraxen über M&A-Beratungen bis zur Industrie. Die Einrichtung dauert Minuten, danach beginnt deine Arbeit: Skills bauen, Systeme über APIs und eigene MCP-Server anbinden, Zugriffskonzepte entwerfen und den Teams zeigen, wie sie mit Claude arbeiten.",
    requirements: [
      "Erfahrung in der Einführung von Software oder KI-Tools beim Kunden",
      "Erfahrung mit REST-APIs, idealerweise auch mit MCP-Servern",
      "Sicher mit API-Keys, OAuth und Skripten in Python oder TypeScript",
      "Verständnis, wie Claude von Anthropic über AWS Bedrock läuft",
      "Du denkst in Rollen und Berechtigungen und kennst dich mit Datenschutz und DSGVO aus",
      "Du erklärst KI so, dass Fachleute ohne Technikhintergrund damit loslegen",
    ],
    tags: ["Claude", "APIs und MCP", "AWS Bedrock", "Datenschutz"],
  },
];

/** Auswahlliste im Bewerbungsformular: alle offenen Stellen plus Initiativbewerbung. */
export const applicationOptions = [
  ...jobs.map((job) => job.title),
  INITIATIVE_APPLICATION,
];
