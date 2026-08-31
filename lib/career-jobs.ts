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
    id: "n8n-workflow-developer",
    title: "n8n Workflow Developer",
    type: "Vollzeit / Teilzeit",
    location: "Remote / Hybrid",
    description:
      "Du baust die Workflows, die bei unseren Kunden täglich laufen: Bestellungen aus PDFs und Mails ins ERP, Rechnungsprüfung, Datenabgleich zwischen Systemen, die sonst nicht miteinander reden.",
    requirements: [
      "Erfahrung mit n8n oder vergleichbaren Automation-Tools",
      "Sicher mit REST-APIs, Webhooks und JSON",
      "JavaScript oder TypeScript für Custom-Nodes und Function-Steps",
      "Verständnis für Geschäftsprozesse, nicht nur für Code",
    ],
    tags: ["n8n", "TypeScript", "API-Integration"],
  },
  {
    id: "ai-solutions-engineer",
    title: "AI Solutions Engineer",
    type: "Vollzeit",
    location: "Remote",
    description:
      "Du bringst LLMs dahin, wo sie produktiv Arbeit abnehmen: Dokumenten-Extraktion, KI-Agenten mit Tool-Zugriff, MCP-Server auf ERP- und DMS-Daten. Inklusive Evaluierung, damit die Ergebnisse belastbar sind.",
    requirements: [
      "Praxis mit LLM-APIs (Claude, OpenAI) oder lokalen Modellen",
      "Python oder TypeScript auf Produktionsniveau",
      "Erfahrung mit RAG, Tool-Calling oder MCP-Servern",
      "Gespür dafür, wann KI die falsche Lösung ist",
    ],
    tags: ["Claude", "Python", "MCP", "RAG"],
  },
  {
    id: "key-account-manager",
    title: "Key Account Manager",
    type: "Vollzeit",
    location: "Remote / Hybrid",
    description:
      "Du betreust unsere Bestandskunden über den ersten Workflow hinaus, findest die nächsten Automatisierungs-Potenziale im Backoffice und machst aus Projekten langfristige Partnerschaften.",
    requirements: [
      "Erfahrung im B2B-Account-Management, gern im Mittelstand",
      "Technisches Verständnis für SaaS und Automatisierung",
      "Starke Kommunikation, auch mit Geschäftsführung und IT",
      "Sicherer Umgang mit CRM-Systemen",
    ],
    tags: ["B2B", "Account Management", "Mittelstand"],
  },
  {
    id: "sales-development-representative",
    title: "Sales Development Representative",
    type: "Vollzeit",
    location: "Remote / Hybrid",
    description:
      "Du sprichst Großhändler, Steuerkanzleien und Industriebetriebe an, qualifizierst, wo Automatisierung wirklich Geld spart, und übergibst saubere Termine ins Team.",
    requirements: [
      "Erste Erfahrung im B2B-Vertrieb oder als SDR",
      "Kommunikationsstärke am Telefon und per Mail",
      "Eigeninitiative und Zielorientierung",
      "Affinität zu Tech und Automatisierung",
    ],
    tags: ["Sales", "B2B", "Lead Gen"],
  },
  {
    id: "backoffice-manager",
    title: "Backoffice Manager",
    type: "Vollzeit / Teilzeit",
    location: "Remote / Hybrid",
    description:
      "Du hältst den Laden am Laufen: Rechnungsstellung, Vertragsmanagement, interne Abläufe. Und du automatisierst dabei genau die Routinen weg, die dich selbst nerven.",
    requirements: [
      "Erfahrung in Büroorganisation oder Verwaltung",
      "Sicherer Umgang mit digitalen Tools",
      "Strukturierte und eigenständige Arbeitsweise",
      "Grundkenntnisse in Buchhaltung von Vorteil",
    ],
    tags: ["Organisation", "Verwaltung", "Prozesse"],
  },
  {
    id: "werkstudent-workflow-automation",
    title: "Werkstudent:in Workflow Automation",
    type: "Teilzeit (15-20 h/Woche)",
    location: "Remote",
    description:
      "Du arbeitest an echten Kundenworkflows mit, dokumentierst Automatisierungen und übernimmst nach der Einarbeitung eigene kleine Projekte. Kein Kaffeekochen, kein Archiv.",
    requirements: [
      "Laufendes Studium (Informatik, Wirtschaftsinformatik, BWL o.ä.)",
      "Interesse an Automatisierung und No-Code/Low-Code",
      "Schnelle Auffassungsgabe und Lernbereitschaft",
      "Erste Berührung mit n8n, Make oder Zapier von Vorteil",
    ],
    tags: ["Werkstudent", "No-Code", "Einstieg"],
  },
];

/** Auswahlliste im Bewerbungsformular: alle offenen Stellen plus Initiativbewerbung. */
export const applicationOptions = [
  ...jobs.map((job) => job.title),
  INITIATIVE_APPLICATION,
];
