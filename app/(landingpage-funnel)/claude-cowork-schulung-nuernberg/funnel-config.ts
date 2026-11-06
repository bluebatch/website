import { Sparkles, Building2, ListChecks, Loader2, Ticket } from "lucide-react";
import type { FunnelConfig } from "../_engine/funnel-wizard";

// Meta-Ad-Funnel "Claude Cowork Schulung Nürnberg": 1-Tages-Workshop vor Ort,
// 850 € netto, fester Termin. Kurzer Flow, am Ende direkte Anmeldung mit Termin.
export const claudeCoworkNuernbergFunnel: FunnelConfig = {
  id: "claude-cowork-schulung-nuernberg",
  title: "Claude Cowork Workshop Nürnberg (850 € netto, 10.12.2026)",
  steps: [
    {
      id: "kennt_cowork",
      type: "pills",
      field: "Kennt Claude Cowork",
      icon: Sparkles,
      title: "Kennst du Claude Cowork schon?",
      subtitle: "Kein richtig oder falsch.",
      options: [
        { key: "Ja, ich nutze es", label: "Ja, ich nutze es" },
        { key: "Schon gehört", label: "Schon gehört" },
        { key: "Noch nie", label: "Noch nie" },
      ],
    },
    {
      id: "bereich",
      type: "pills",
      field: "Bereich",
      icon: Building2,
      title: "In welchem Bereich arbeitest du?",
      subtitle: "Dann passen wir die Beispiele an.",
      options: [
        { key: "Geschäftsführung / Inhaber", label: "Geschäftsführung / Inhaber" },
        { key: "Büro und Verwaltung", label: "Büro und Verwaltung" },
        { key: "Vertrieb", label: "Vertrieb" },
        { key: "Marketing und Kommunikation", label: "Marketing und Kommunikation" },
        { key: "Finanzen und Controlling", label: "Finanzen und Controlling" },
        { key: "Personal / HR", label: "Personal / HR" },
        { key: "IT und Technik", label: "IT und Technik" },
        { key: "Etwas anderes", label: "Etwas anderes" },
      ],
    },
    {
      id: "ziele",
      type: "multi",
      field: "Was Claude übernehmen soll",
      icon: ListChecks,
      title: "Was soll Claude für dich übernehmen?",
      subtitle: "Mehrfachauswahl möglich. Wähle alles, was du lernen willst.",
      options: [
        { key: "Dokumente und Berichte", label: "Dokumente und Berichte", desc: "Entwürfe, Zusammenfassungen, Auswertungen" },
        { key: "Mails und Anfragen", label: "Mails und Anfragen", desc: "Posteingang sortieren, Antworten vorbereiten" },
        { key: "Tabellen und Daten", label: "Tabellen und Daten", desc: "Excel-Listen auswerten, mit funktionierenden Formeln" },
        { key: "Recherche", label: "Recherche", desc: "Quellen sammeln, prüfen und zusammenfassen" },
        { key: "Kleine Skripte und Automationen", label: "Kleine Skripte und Automationen", desc: "Du beschreibst, was passieren soll. Claude baut es für dich, ohne dass du programmieren kannst." },
        { key: "Claude an deine Tools anbinden", label: "Claude an deine Tools anbinden", desc: "Schritt für Schritt: Connectors einrichten, damit Claude mit deinen Programmen arbeitet." },
        { key: "Wiederkehrende Aufgaben automatisieren", label: "Wiederkehrende Aufgaben automatisieren", desc: "Einmal einrichten, danach läuft es nach Zeitplan." },
        { key: "Eigene Skills anlegen", label: "Eigene Skills anlegen", desc: "Abläufe einmal festhalten und immer gleich abrufen." },
      ],
    },
    {
      id: "processing",
      type: "processing",
      icon: Loader2,
      title: "Wir reservieren deinen Platz",
      subtitle: "Einen Moment, gleich bist du durch.",
      stages: [
        "Antworten auswerten …",
        "Übungen an deine Auswahl andocken …",
        "Platz am 10.12.2026 prüfen …",
      ],
      durationMs: 2000,
    },
    {
      id: "final",
      type: "final",
      icon: Ticket,
      contact: true,
      eyebrow: "Fast geschafft",
      title: "Sichere dir deinen Platz am 10.12.2026",
      subtitle:
        "1 Tag vor Ort in Nürnberg, 9 bis 17 Uhr, 850 € netto. Die Anmeldung ist verbindlich. Die Rechnung bekommst du von uns.",
      dates: [{ label: "Do, 10.12.2026 · Nürnberg", meta: "9 bis 17 Uhr vor Ort, 850 € netto, max. 15 Plätze" }],
      noteLabel: "Gibt es eine konkrete Aufgabe, die du mitbringst? (optional)",
      notePlaceholder: "z. B. Monatsbericht, Angebotsentwurf, Posteingang",
      submitLabel: "Verbindlich anmelden",
      hints: [
        "Mit Klick auf „Verbindlich anmelden“ meldest du dich für den Workshop am 10.12.2026 an. Preis: 850 € zzgl. MwSt.",
        "Die genaue Adresse bekommst du vor dem Termin.",
      ],
      successTitle: "Du bist dabei!",
      successBody:
        "Danke für deine Anmeldung zum Workshop am 10.12.2026 in Nürnberg. Wir melden uns innerhalb von 1 bis 2 Werktagen bei dir, mit der Rechnung und allen Infos zum Ort.",
    },
  ],
};
