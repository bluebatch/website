import {
  Sparkles,
  Wand2,
  Clock,
  CalendarDays,
} from "lucide-react";
import type { FunnelConfig } from "../_engine/funnel-wizard";

// Game-Funnel "Claude CoWork Schulung" — Zielgruppe: Maschinen-/Anlagenbauer
// und Veredler. 4–5 Stufen, Branching nach "kennst du es schon?".
export const claudeCoworkFunnel: FunnelConfig = {
  id: "claude-cowork-schulung",
  title: "Claude CoWork Schulung (399 €)",
  steps: [
    {
      id: "kennt_cowork",
      type: "pills",
      field: "Kennt Claude CoWork",
      icon: Sparkles,
      title: "Kennst du Claude CoWork schon?",
      subtitle: "Ganz ehrlich, kein richtig oder falsch.",
      options: [
        { key: "Ja, nutze ich", label: "Ja, nutze ich" },
        { key: "Schon gehört", label: "Schon gehört" },
        { key: "Noch nie", label: "Noch nie" },
      ],
    },
    {
      id: "wofuer",
      type: "single",
      field: "Einsatzwunsch",
      icon: Wand2,
      title: "Wofür willst du Claude CoWork einsetzen?",
      subtitle: "Damit wir die Schulung an euren Alltag andocken.",
      showIf: (a) => a["Kennt Claude CoWork"] === "Ja, nutze ich",
      options: [
        {
          key: "Angebote & Kalkulation",
          label: "Angebote & Kalkulation",
          desc: "Schneller von Anfrage zu fertigem Angebot.",
        },
        {
          key: "Technische Doku & Handbücher",
          label: "Technische Doku & Handbücher",
          desc: "Betriebsanleitungen, Prüfprotokolle, Übersetzungen.",
        },
        {
          key: "Kunden-Mails & Anfragen",
          label: "Kunden-Mails & Anfragen",
          desc: "Anfragen verstehen, sauber beantworten.",
        },
        {
          key: "Auftrags- & Bestellabwicklung",
          label: "Auftrags- & Bestellabwicklung",
          desc: "Bestellungen erfassen, Daten ins ERP.",
        },
      ],
    },
    {
      id: "zeitfresser",
      type: "single",
      field: "Größter Zeitfresser",
      icon: Clock,
      title: "Wo geht bei euch aktuell am meisten Zeit verloren?",
      subtitle: "Da setzen wir in der Schulung zuerst an.",
      options: [
        { key: "Angebote & Kalkulation", label: "Angebote & Kalkulation" },
        {
          key: "Technische Doku",
          label: "Technische Doku & Handbücher",
        },
        { key: "Mails & Kommunikation", label: "Mails & Kommunikation" },
        { key: "Auftragsabwicklung", label: "Auftrags-/Bestellabwicklung" },
        { key: "Recherche & Normen", label: "Recherche & Normen" },
      ],
    },
    {
      id: "processing",
      type: "processing",
      icon: Sparkles,
      title: "Wir stellen dein Schulungs-Setup zusammen",
      subtitle: "Kurz halten, gleich hast du deine Termine.",
      stages: [
        "Antworten auswerten …",
        "Passende Praxis-Beispiele für Maschinenbau/Veredler wählen …",
        "Übungen an euren Zeitfresser andocken …",
        "Freie Schulungstermine prüfen …",
      ],
    },
    {
      id: "final",
      type: "final",
      icon: CalendarDays,
      eyebrow: "Fast geschafft",
      title: "Wähl deinen Schulungstermin",
      subtitle:
        "Kompakt, 4 Stunden, kleine Gruppe. Danach arbeitet ihr live mit Claude CoWork.",
      dates: [
        {
          label: "Di, 15. Juli 2026 · 09–13 Uhr",
          meta: "Online (Zoom) · max. 8 Teilnehmer",
        },
        {
          label: "Do, 31. Juli 2026 · 09–13 Uhr",
          meta: "Online (Zoom) · max. 8 Teilnehmer",
        },
      ],
      submitLabel: "Platz per Mail sichern",
      successTitle: "Top, dein Platz ist reserviert!",
      successBody:
        "Wir schicken dir gleich die Bestätigung mit allen Infos per Mail. Bis bald in der Schulung!",
    },
  ],
};
