import { Briefcase, FileLock2, Sparkles } from "lucide-react";
import type { CheckFunnelConfig } from "../_engine/check-funnel";

// Passungs-Check für M&A-Boutiquen, Private Equity und VC. Die Meta-Anzeigen
// aus lead-gen/ma-private-equity/meta-ads versprechen „Prüf in 3 kurzen Fragen“.
// Fakten und Grenzen: lead-gen/ma-private-equity/research/problem-statement.md
// (u. a. § 203 StGB gilt für Boutiquen nicht, MAR nur bei Börsennotierung).
export const maPrivateEquityCheck: CheckFunnelConfig = {
  contentName: "Claude für M&A und Private Equity",
  questions: [
    {
      id: "rolle",
      icon: Briefcase,
      title: "Arbeiten Sie in M&A, Private Equity oder Venture Capital?",
      subtitle:
        "In einer M&A-Boutique, einem Fonds, im Corporate Finance oder bei Transaction Services.",
      context:
        "Unser Angebot richtet sich an Deal-Teams, die regelmäßig mit vertraulichen Unterlagen Dritter arbeiten.",
    },
    {
      id: "daten",
      icon: FileLock2,
      title: "Arbeiten Sie mit Unterlagen unter NDA?",
      subtitle:
        "Zum Beispiel Datenraum-Auszüge, Kundenlisten, Board-Memos oder Bewertungsmodelle.",
      context:
        "Viele NDAs erlauben die Weitergabe nur an Personen, die selbst zur Vertraulichkeit verpflichtet sind. Ein privates KI-Konto ist das nicht.",
    },
    {
      id: "claude",
      icon: Sparkles,
      title: "Soll Ihr Team dafür Claude nutzen?",
      subtitle:
        "Zentral verwaltet, statt mit privaten ChatGPT- oder Claude-Konten.",
      context:
        "Claude von Anthropic ist stark bei langen Dokumenten, Analysen und Entwürfen. Sie bekommen es als eigene Organisation mit Admin-Portal, ohne Training mit Ihren Daten.",
    },
  ],
  qualified: {
    title: "Dafür haben wir ein Angebot.",
    body: "Wir richten Claude für Ihr Haus ein, mit Admin-Portal, Verträgen und Coaching für Ihr Team.",
    bullets: [
      "Schriftliche Verschwiegenheitsverpflichtung und AV-Vertrag",
      "Betrieb in Frankfurt, Verarbeitung nur in der EU, kein Training",
      "Admin-Portal: Sie entscheiden, wer Zugang hat",
      "5 Tage Coaching an Ihren echten Deals",
    ],
    priceNote: "Startpaket 5.000 € einmalig, danach nur Verbrauch",
  },
  notQualified: {
    title: "Dann passt vermutlich etwas anderes.",
    body: "Ohne vertrauliche Deal-Unterlagen reicht oft ein normales KI-Abo. Wenn Sie unsicher sind, sprechen wir kurz darüber, was zu Ihrem Team passt.",
    cta: "Kurz beraten lassen",
  },
};
