import { Sparkles, Building2, Clock, Ticket } from "lucide-react";
import type { FunnelConfig } from "../_engine/funnel-wizard";

// Meta-Ad-Funnel "Claude Cowork Schulung Nürnberg": 1-Tages-Workshop vor Ort,
// 800 €, fester Termin. Kurzer Flow, am Ende direkte Anmeldung mit Termin.
export const claudeCoworkNuernbergFunnel: FunnelConfig = {
  id: "claude-cowork-schulung-nuernberg",
  title: "Claude Cowork Workshop Nürnberg (800 €, 10.12.2026)",
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
      subtitle: "Damit die Beispiele im Workshop zu euch passen.",
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
      subtitle: "Da setzen wir im Workshop zuerst an.",
      options: [
        { key: "Dokumente und Berichte", label: "Dokumente und Berichte", desc: "Entwürfe, Zusammenfassungen, Auswertungen." },
        { key: "Mails und Anfragen", label: "Mails und Anfragen", desc: "Posteingang sortieren, Antworten vorbereiten." },
        { key: "Tabellen und Daten", label: "Tabellen und Daten", desc: "Excel-Listen auswerten und abgleichen." },
        { key: "Recherche", label: "Recherche", desc: "Quellen sammeln und zusammenfassen." },
      ],
    },
    {
      id: "final",
      type: "final",
      icon: Ticket,
      eyebrow: "Platz sichern",
      title: "Melde dich für den Workshop an",
      subtitle: "1 Tag vor Ort in Nürnberg, 800 €. Wähle den Termin und trag deine Mail ein.",
      dates: [{ label: "Do, 10.12.2026 · Nürnberg", meta: "Ganztägig vor Ort, 800 €" }],
      noteLabel: "Was soll Claude Cowork bei euch übernehmen? (optional)",
      notePlaceholder: "z. B. Monatsberichte, Angebotsentwürfe, Posteingang",
      submitLabel: "Jetzt anmelden",
      successTitle: "Danke, du bist angemeldet!",
      successBody:
        "Wir schicken dir die Bestätigung mit Ort, Uhrzeit und Rechnung per Mail.",
    },
  ],
};
