import type { Metadata } from "next";
import { Sparkles, ShieldCheck, Lock } from "lucide-react";
import FunnelPage from "../_engine/funnel-page";
import ContentWrapper from "@/components/layout/content-wrapper";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import Typo from "@/components/ui/typo";
import SensitivAiFunnel from "./funnel";

export const metadata: Metadata = {
  title:
    "Claude für sensible Daten — DSGVO- & § 203-StGB-konform | Bluebatch",
  description:
    "Sie arbeiten mit Berufsgeheimnis-Daten und wollen Claude nutzen? In 3 Fragen prüfen wir, ob unser DSGVO- und § 203-StGB-konformes Claude-Setup zu Ihnen passt.",
  alternates: { canonical: "/sensitiv-ai" },
  robots: { index: false, follow: false },
};

const facts = [
  { bold: "DSGVO-konform", rest: "auf Ihrer oder dedizierter Infrastruktur." },
  { bold: "§ 203 StGB", rest: "im Blick, für Berufsgeheimnisträger." },
  { bold: "Inkl. Einrichtung", rest: "wir setzen es sauber für Sie auf." },
  { bold: "Ihre Daten bleiben bei Ihnen,", rest: "kein Abfluss an Dritte." },
];

export default function Page() {
  return (
    <>
      <FunnelPage
        preHeadline="Claude für sensible Daten"
        headline="Claude nutzen, auch bei § 203 StGB."
        description="Für alle, die mit besonders schützenswerten Daten arbeiten. In 3 kurzen Fragen finden Sie heraus, ob unser konformes Claude-Setup zu Ihnen passt."
        facts={facts}
        image={{
          src: "/images/claude-cowork.png",
          alt: "Claude DSGVO- und § 203-StGB-konform einrichten",
        }}
        startLabel="Fragebogen starten"
      >
        <SensitivAiFunnel />
      </FunnelPage>

      <ContentWrapper colorScheme="white">
        <div className="mx-auto max-w-3xl text-center">
          <Typo.H2>Claude sicher für sensible Daten nutzen</Typo.H2>
          <Typo.Paragraph>
            Auch wer mit besonders schützenswerten Daten arbeitet, kann die Stärke
            moderner KI nutzen, wenn das Setup stimmt. So verbinden wir Claude mit
            striktem Datenschutz.
          </Typo.Paragraph>
        </div>

        <SimpleGrid cols={3} className="mt-12">
          <SimpleCard align="left">
            <Sparkles className="mb-4 h-9 w-9 text-primary-700" />
            <Typo.H3>Die Claude App</Typo.H3>
            <Typo.Paragraph>
              Claude von Anthropic ist eines der stärksten KI-Modelle für Text,
              Analyse und Dokumente. Wir setzen es nicht als öffentliches
              Consumer-Tool ein, sondern in einer verwalteten, privaten Umgebung,
              angebunden an Ihre Systeme und mit klaren Zugriffsrechten. So bekommen
              Sie die volle Leistung von Claude, ohne die Kontrolle über Ihre Daten
              abzugeben.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard align="left">
            <ShieldCheck className="mb-4 h-9 w-9 text-primary-700" />
            <Typo.H3>DSGVO-konform</Typo.H3>
            <Typo.Paragraph>
              Ihre Daten laufen über eine DSGVO-konforme Infrastruktur, in der EU
              (Frankfurt) oder On-Premise. Mit Auftragsverarbeitungsvertrag (AVV),
              ohne Nutzung Ihrer Inhalte zum Training und mit voller Kontrolle über
              Speicherung und Löschung. Datenschutz ist damit kein nachträgliches
              Add-on, sondern von Anfang an eingebaut.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard align="left">
            <Lock className="mb-4 h-9 w-9 text-primary-700" />
            <Typo.H3>§ 203 StGB</Typo.H3>
            <Typo.Paragraph>
              Für Berufsgeheimnisträger reicht DSGVO allein nicht. § 203 verlangt,
              dass Geheimnisse nicht an Unbefugte gelangen, auch nicht an
              Dienstleister ohne Verpflichtung zur Verschwiegenheit. Wir schaffen die
              technischen und vertraglichen Voraussetzungen (u. a. Verpflichtung
              mitwirkender Personen nach § 203 Abs. 4 StGB), damit die Nutzung von
              Claude auf einem konformen Fundament steht.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>
    </>
  );
}
