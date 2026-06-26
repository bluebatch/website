import { Workflow, Network, Boxes, Sparkles, Send } from "lucide-react";
import type { FunnelConfig } from "../_engine/funnel-wizard";

// Game-Funnel "AI Workflow" — Zielgruppe: Maschinen-/Anlagenbauer & Veredler.
// Endet ohne Termin, dafür mit "Workflow per Mail anfragen".
export const aiWorkflowFunnel: FunnelConfig = {
  id: "ai-workflow",
  title: "AI Workflow Schulung (399 €)",
  steps: [
    {
      id: "hat_workflows",
      type: "pills",
      field: "Workflows im Einsatz",
      icon: Workflow,
      title: "Hast du schon AI-Workflows im Einsatz?",
      subtitle: "Auch halbfertige Bastellösungen zählen.",
      options: [
        { key: "Ja, einige laufen", label: "Ja, einige laufen" },
        { key: "Erste Versuche", label: "Erste Versuche" },
        { key: "Noch keine", label: "Noch keine" },
      ],
    },
    {
      id: "welche",
      type: "multi",
      field: "Bestehende Workflows",
      icon: Network,
      title: "Welche Workflows laufen bei euch schon?",
      subtitle: "Mehrfachauswahl möglich.",
      showIf: (a) =>
        a["Workflows im Einsatz"] === "Ja, einige laufen" ||
        a["Workflows im Einsatz"] === "Erste Versuche",
      options: [
        { key: "Angebote/Kalkulation", label: "Angebote & Kalkulation" },
        { key: "Mail-Sortierung & Antworten", label: "Mail-Sortierung & Antworten" },
        {
          key: "Daten ERP/CRM",
          label: "Datenübertragung ERP/CRM",
          desc: "z. B. Bestellungen ins ERP buchen.",
        },
        { key: "Doku-Erstellung", label: "Doku & Handbücher" },
        { key: "Reporting", label: "Reporting & Auswertungen" },
        {
          key: "Eigene n8n/Make-Flows",
          label: "Eigene n8n / Make-Flows",
          desc: "Schon mit Automatisierungs-Tools gebaut.",
        },
      ],
    },
    {
      id: "wunsch",
      type: "single",
      field: "Wunsch-Prozess",
      icon: Boxes,
      title: "Welchen Prozess würdest du als Erstes automatisieren?",
      subtitle: "Den bauen wir in der Schulung gemeinsam an.",
      options: [
        {
          key: "Anfrage → Angebot",
          label: "Anfrage → Angebot",
          desc: "Eingehende Anfragen automatisch in Angebote.",
        },
        {
          key: "Bestellabwicklung",
          label: "Bestell- & Auftragsabwicklung",
          desc: "Bestellungen erfassen, ins ERP, Bestätigung raus.",
        },
        {
          key: "Maschinendaten & Doku",
          label: "Maschinendaten & Doku",
          desc: "Protokolle, Handbücher, Prüfberichte erzeugen.",
        },
        {
          key: "Qualitätssicherung",
          label: "Qualitätssicherung / Prüfung",
          desc: "Prüfdaten auswerten, Abweichungen melden.",
        },
        {
          key: "Einkauf & Beschaffung",
          label: "Einkauf & Beschaffung",
          desc: "Bedarfe bündeln, Lieferanten anfragen.",
        },
      ],
    },
    {
      id: "processing",
      type: "processing",
      icon: Sparkles,
      title: "Wir bauen deinen Workflow-Fahrplan",
      subtitle: "Gleich kannst du deinen Wunsch-Workflow anfragen.",
      stages: [
        "Antworten auswerten …",
        "Passende Bausteine für euren Prozess wählen …",
        "Aufwand und schnellen Start abschätzen …",
        "Vorschlag zusammenstellen …",
      ],
    },
    {
      id: "final",
      type: "final",
      icon: Send,
      eyebrow: "Letzter Schritt",
      title: "Lass uns deinen Workflow bauen",
      subtitle:
        "Schreib kurz, was der Workflow können soll. Wir melden uns mit einem konkreten Vorschlag, inkl. Schulung (399 €), bei dir.",
      noteLabel: "Was soll dein Workflow können? (optional)",
      notePlaceholder:
        "z. B. Eingehende Anfragen per Mail automatisch als Angebot vorbereiten …",
      submitLabel: "Workflow per Mail anfragen",
      successTitle: "Anfrage ist raus!",
      successBody:
        "Wir schauen uns deinen Wunsch-Workflow an und melden uns per Mail mit einem konkreten Vorschlag.",
    },
  ],
};
