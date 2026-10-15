import { Gavel, FileLock2, Sparkles } from "lucide-react";
import type { CheckFunnelConfig } from "../_engine/check-funnel";

// Passungs-Check für Insolvenzkanzleien. Die Meta-Anzeigen aus
// lead-gen/insolvenzverwalter/meta-ads versprechen „Prüf in 3 kurzen Fragen“.
// Fakten und Grenzen: lead-gen/insolvenzverwalter/research/problem-statement.md
export const insolvenzverwalterCheck: CheckFunnelConfig = {
  contentName: "Claude für Insolvenzverwalter",
  questions: [
    {
      id: "rolle",
      icon: Gavel,
      title: "Arbeiten Sie in der Insolvenzverwaltung?",
      subtitle:
        "Als Verwalter, Sachwalter, Restrukturierungsbeauftragter oder im Team einer Insolvenzkanzlei.",
      context:
        "Unser Angebot richtet sich an Kanzleien, die Verfahren führen. Für klassische Beratungsmandate im Insolvenzrecht passt es ebenso.",
    },
    {
      id: "daten",
      icon: FileLock2,
      title: "Arbeiten Sie mit sensiblen Verfahrensdaten?",
      subtitle:
        "Zum Beispiel Schuldnerauskünfte, Lohnlisten für das Insolvenzgeld, Steuerakten oder Gläubigerlisten.",
      context:
        "Was der Schuldner nach § 97 InsO offenbart, darf ohne seine Zustimmung nicht gegen ihn verwendet werden. Lohndaten brauchen einen AV-Vertrag nach Art. 28 DSGVO. Beides gehört nicht in private KI-Konten.",
    },
    {
      id: "claude",
      icon: Sparkles,
      title: "Soll Ihr Team dafür Claude nutzen?",
      subtitle: "Zentral verwaltet, statt mit privaten ChatGPT- oder Claude-Konten.",
      context:
        "Claude von Anthropic ist stark bei langen Dokumenten, Auswertungen und Entwürfen. Sie bekommen es als eigene Organisation mit Admin-Portal, ohne Training mit Ihren Daten.",
    },
  ],
  qualified: {
    title: "Dafür haben wir ein Angebot.",
    body: "Wir richten Claude für Ihre Kanzlei ein, mit Admin-Portal, Verträgen und Coaching für Ihr Team.",
    bullets: [
      "AV-Vertrag und schriftliche Verschwiegenheitsverpflichtung",
      "Betrieb in Frankfurt, Verarbeitung nur in der EU, kein Training",
      "Admin-Portal für Team, Kosten und Regeln",
      "5 Tage Coaching an Ihren echten Verfahren",
    ],
    priceNote: "Startpaket 5.000 € einmalig, danach nur Verbrauch",
  },
  notQualified: {
    title: "Dann passt vermutlich etwas anderes.",
    body: "Ohne Verfahrensdaten reicht oft ein normales KI-Abo. Wenn Sie unsicher sind, sprechen wir kurz darüber, welche Lösung zu Ihrer Kanzlei passt.",
    cta: "Kurz beraten lassen",
  },
};
