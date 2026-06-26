import { Factory, Brain, Target, Sparkles, MapPin } from "lucide-react";
import type { FunnelConfig } from "../_engine/funnel-wizard";

// Game-Funnel "AI Maschinenbau Schulung Nürnberg" — Closed-Room-Präsenz.
// Endet mit 2 Präsenz-Terminen + Mail.
export const maschinenbauNuernbergFunnel: FunnelConfig = {
  id: "ai-maschinenbau-schulung-nuernberg",
  title: "AI Maschinenbau Schulung Nürnberg (Closed Room)",
  steps: [
    {
      id: "betrieb",
      type: "pills",
      field: "Betriebstyp",
      icon: Factory,
      title: "Was beschreibt euren Betrieb am besten?",
      subtitle: "Damit die Runde wirklich zu euch passt.",
      options: [
        { key: "Maschinen-/Anlagenbau", label: "Maschinen-/Anlagenbau" },
        { key: "Veredler / Lohnfertigung", label: "Veredler / Lohnfertigung" },
        { key: "Komponenten / Zulieferer", label: "Komponenten / Zulieferer" },
        { key: "Etwas anderes", label: "Etwas anderes" },
      ],
    },
    {
      id: "ki_stand",
      type: "single",
      field: "KI-Reifegrad",
      icon: Brain,
      title: "Wo steht ihr bei KI?",
      subtitle: "Ehrliche Einschätzung, damit das Niveau passt.",
      options: [
        {
          key: "Noch keine",
          label: "Noch keine",
          desc: "Wir haben bisher kaum mit KI gearbeitet.",
        },
        {
          key: "Erste Experimente",
          label: "Erste Experimente",
          desc: "Einzelne probieren ChatGPT & Co. aus.",
        },
        {
          key: "Teil des Alltags",
          label: "Teil des Alltags",
          desc: "KI-Chats gehören schon zum Arbeitstag.",
        },
        {
          key: "Erste Workflows",
          label: "Erste Workflows",
          desc: "Wir haben Prozesse mit KI automatisiert.",
        },
      ],
    },
    {
      id: "ziel",
      type: "single",
      field: "Ziel der Schulung",
      icon: Target,
      title: "Was willst du aus dem Tag mitnehmen?",
      subtitle: "Darauf legen wir im Closed Room den Fokus.",
      options: [
        {
          key: "Grundlagen & Überblick",
          label: "Grundlagen & Überblick",
          desc: "Verstehen, was heute wirklich geht.",
        },
        {
          key: "Konkrete Use-Cases",
          label: "Konkrete Use-Cases",
          desc: "Anwendungen für unseren Betrieb.",
        },
        {
          key: "Workflows automatisieren",
          label: "Workflows automatisieren",
          desc: "Prozesse von Hand zu automatisch.",
        },
        {
          key: "Team mitnehmen",
          label: "Team mitnehmen",
          desc: "Die Mannschaft ins Boot holen.",
        },
      ],
    },
    {
      id: "processing",
      type: "processing",
      icon: Sparkles,
      title: "Wir prüfen die Passung zum Closed Room",
      subtitle: "Kleine Runde, deshalb kurz gegengecheckt.",
      stages: [
        "Antworten auswerten …",
        "Themen-Schwerpunkt für die Runde festlegen …",
        "Freie Plätze in Nürnberg prüfen …",
        "Termine zusammenstellen …",
      ],
    },
    {
      id: "final",
      type: "final",
      icon: MapPin,
      eyebrow: "Fast geschafft",
      title: "Wähl deinen Termin in Nürnberg",
      subtitle:
        "Closed Room, kleine Runde aus Maschinenbau & Veredlung. Voneinander lernen, nicht berieselt werden.",
      dates: [
        {
          label: "Mi, 23. September 2026 · 09–17 Uhr",
          meta: "Nürnberg · Closed Room · max. 10 Teilnehmer",
        },
        {
          label: "Di, 20. Oktober 2026 · 09–17 Uhr",
          meta: "Nürnberg · Closed Room · max. 10 Teilnehmer",
        },
      ],
      submitLabel: "Platz in Nürnberg sichern",
      successTitle: "Super, dein Platz ist vorgemerkt!",
      successBody:
        "Wir schicken dir die Bestätigung mit Adresse und Ablauf per Mail. Wir freuen uns auf dich in Nürnberg!",
    },
  ],
};
