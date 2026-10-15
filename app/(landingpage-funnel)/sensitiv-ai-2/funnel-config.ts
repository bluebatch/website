import { Lock, ShieldCheck, Sparkles } from "lucide-react";
import type { CheckFunnelConfig } from "../_engine/check-funnel";

// Passungs-Check für Berufsgeheimnisträger. Gleiche Fragen wie /sensitiv-ai,
// kürzerer Hintergrund und Angebot mit Preis. /sensitiv-ai bleibt zum Vergleich
// unverändert online.
export const sensitivAi2Check: CheckFunnelConfig = {
  contentName: "Claude für sensible Daten (v2)",
  questions: [
    {
      id: "sensibel",
      icon: ShieldCheck,
      title: "Arbeiten Sie mit sensiblen Daten?",
      subtitle:
        "Gesundheits-, Mandanten-, Personal- oder andere besonders schützenswerte Daten.",
      context:
        "Bei solchen Daten müssen Sie wissen, wohin sie bei einem KI-Tool fließen und wer darauf Zugriff hat.",
    },
    {
      id: "stgb203",
      icon: Lock,
      title: "Fallen diese Daten unter § 203 StGB?",
      subtitle:
        "Das Berufsgeheimnis, z. B. bei Ärzten, Anwälten, Steuerberatern oder Versicherungen.",
      context:
        "Berufsgeheimnisse dürfen nur an Dienstleister gehen, die zur Verschwiegenheit verpflichtet sind. Ein KI-Abo ohne diese Verpflichtung reicht dafür nicht.",
    },
    {
      id: "claude",
      icon: Sparkles,
      title: "Möchten Sie dafür Claude einsetzen?",
      subtitle: "Anthropic Claude als KI-Modell, statt generischer Tools.",
      context:
        "Claude ist stark bei Dokumenten, Analysen und langen Texten. Sie bekommen es als eigene Organisation mit Admin-Portal, ohne Training mit Ihren Daten.",
    },
  ],
  qualified: {
    title: "Dafür haben wir ein Angebot.",
    body: "Wir richten Claude für Sie ein, mit Admin-Portal, Verträgen und Coaching für Ihr Team.",
    bullets: [
      "AV-Vertrag und Verschwiegenheitsverpflichtung nach § 203 StGB",
      "Betrieb in Frankfurt, Verarbeitung nur in der EU, kein Training",
      "Admin-Portal für Team, Kosten und Regeln",
      "5 Tage Coaching an Ihren echten Fällen",
    ],
    priceNote: "Startpaket 5.000 € einmalig, danach nur Verbrauch",
  },
  notQualified: {
    title: "Dann reichen unsere Standard-Services.",
    body: "Wenn Ihre Daten nicht unter das Berufsgeheimnis fallen, geht es auch ohne den zusätzlichen § 203-Rahmen. Wir beraten Sie gern, was dann passt.",
    cta: "Zu den AI-Services beraten lassen",
  },
};
