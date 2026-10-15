import { Sparkles, Building2, Clock, CalendarDays, Mail } from "lucide-react";
import type { FunnelConfig } from "../_engine/funnel-wizard";

// Game-Funnel "Claude Cowork Schulung", branchenoffen (vorher nur Maschinenbau
// und Veredler; /ai-maschinenbau-schulung-nuernberg leitet hierher um).
// Feste Termine gibt es gerade nicht: Der Funnel fragt den Wunschzeitraum ab,
// wir schicken die nächsten freien Termine per Mail. Sobald Termine stehen,
// im final-Schritt wieder `dates` setzen.
export const claudeCoworkFunnel: FunnelConfig = {
  id: "claude-cowork-schulung",
  title: "Claude Cowork Schulung (399 €)",
  steps: [
    {
      id: "kennt_cowork",
      type: "pills",
      field: "Kennt Claude Cowork",
      icon: Sparkles,
      title: "Kennst du Claude Cowork schon?",
      subtitle: "Ganz ehrlich, kein richtig oder falsch.",
      options: [
        { key: "Ja, nutze ich", label: "Ja, nutze ich" },
        { key: "Schon gehört", label: "Schon gehört" },
        { key: "Noch nie", label: "Noch nie" },
      ],
    },
    {
      id: "bereich",
      type: "pills",
      field: "Bereich",
      icon: Building2,
      title: "Wo arbeitest du?",
      subtitle: "Damit die Beispiele in der Schulung zu euch passen.",
      options: [
        { key: "Kanzlei oder Beratung", label: "Kanzlei oder Beratung" },
        { key: "Industrie oder Handel", label: "Industrie oder Handel" },
        { key: "Dienstleistung oder Agentur", label: "Dienstleistung oder Agentur" },
        { key: "Verwaltung oder Verband", label: "Verwaltung oder Verband" },
        { key: "Etwas anderes", label: "Etwas anderes" },
      ],
    },
    {
      id: "zeitfresser",
      type: "single",
      field: "Größter Zeitfresser",
      icon: Clock,
      title: "Wo geht bei euch am meisten Zeit verloren?",
      subtitle: "Da setzen wir in der Schulung zuerst an.",
      options: [
        {
          key: "Dokumente und Berichte",
          label: "Dokumente und Berichte",
          desc: "Entwürfe, Zusammenfassungen, Auswertungen.",
        },
        {
          key: "Mails und Anfragen",
          label: "Mails und Anfragen",
          desc: "Posteingang sortieren, Antworten vorbereiten.",
        },
        {
          key: "Tabellen und Daten",
          label: "Tabellen und Daten",
          desc: "Excel-Listen auswerten und abgleichen.",
        },
        {
          key: "Recherche",
          label: "Recherche",
          desc: "Quellen sammeln und zusammenfassen.",
        },
      ],
    },
    {
      id: "zeitraum",
      type: "pills",
      field: "Wunschzeitraum",
      icon: CalendarDays,
      title: "Wann passt es euch?",
      subtitle: "Wir schicken dir die nächsten freien Termine in diesem Zeitraum.",
      options: [
        { key: "So bald wie möglich", label: "So bald wie möglich" },
        { key: "In den nächsten 4 Wochen", label: "In den nächsten 4 Wochen" },
        { key: "In 1 bis 3 Monaten", label: "In 1 bis 3 Monaten" },
        { key: "Noch offen", label: "Noch offen" },
      ],
    },
    {
      id: "processing",
      type: "processing",
      icon: Sparkles,
      title: "Wir stellen dein Schulungs-Setup zusammen",
      subtitle: "Einen Moment, gleich bist du durch.",
      stages: [
        "Antworten auswerten …",
        "Passende Praxis-Beispiele für euren Bereich wählen …",
        "Übungen an euren Zeitfresser andocken …",
        "Freie Termine im Wunschzeitraum prüfen …",
      ],
    },
    {
      id: "final",
      type: "final",
      icon: Mail,
      eyebrow: "Fast geschafft",
      title: "Wohin dürfen wir die Termine schicken?",
      subtitle:
        "Kompakt, 4 Stunden online, kleine Gruppe. Danach arbeitet ihr selbstständig mit Claude Cowork.",
      noteLabel: "Was soll Claude Cowork bei euch übernehmen? (optional)",
      notePlaceholder: "z. B. Monatsberichte, Angebotsentwürfe, Posteingang",
      submitLabel: "Termine anfragen",
      successTitle: "Top, wir melden uns!",
      successBody:
        "Wir schicken dir die nächsten freien Termine per Mail. Dann sicherst du dir deinen Platz.",
    },
  ],
};
