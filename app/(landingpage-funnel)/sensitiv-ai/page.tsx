import type { Metadata } from "next";
import FunnelPage from "../_engine/funnel-page";
import ContentWrapper from "@/components/layout/content-wrapper";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import Typo from "@/components/ui/typo";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/ui/timeline-as-steps";
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
  { bold: "DSGVO-konform", rest: "auf AWS-Infrastruktur." },
  { bold: "§ 203 StGB", rest: "im Blick, für Berufsgeheimnisträger." },
  { bold: "Inkl. Einrichtung", rest: "wir setzen es sauber für Sie auf." },
  { bold: "Ihre Daten bleiben bei Ihnen,", rest: "kein Abfluss an Dritte." },
];

const cards = [
  {
    img: "/images/sensitiv-ai/claude-app.svg",
    title: "Die Claude App",
    body: "Claude von Anthropic ist eines der stärksten KI-Modelle für Text, Analyse und Dokumente. Wir setzen es nicht als öffentliches Consumer-Tool ein, sondern in einer verwalteten, privaten Umgebung, angebunden an Ihre Systeme und mit klaren Zugriffsrechten. So bekommen Sie die volle Leistung von Claude, ohne die Kontrolle über Ihre Daten abzugeben.",
  },
  {
    img: "/images/sensitiv-ai/dsgvo.svg",
    title: "DSGVO-konform",
    body: "Ihre Daten laufen über eine DSGVO-konforme AWS-Infrastruktur in der Region Frankfurt (EU). Mit Auftragsverarbeitungsvertrag (AVV), ohne Nutzung Ihrer Inhalte zum Training und mit voller Kontrolle über Speicherung und Löschung. Datenschutz ist damit kein nachträgliches Add-on, sondern von Anfang an eingebaut.",
  },
  {
    img: "/images/sensitiv-ai/stgb-203.svg",
    title: "§ 203 StGB",
    body: "Für Berufsgeheimnisträger reicht DSGVO allein nicht. § 203 verlangt, dass Geheimnisse nicht an Unbefugte gelangen, auch nicht an Dienstleister ohne Verpflichtung zur Verschwiegenheit. Wir schaffen die technischen und vertraglichen Voraussetzungen (u. a. Verpflichtung mitwirkender Personen nach § 203 Abs. 4 StGB), damit die Nutzung von Claude auf einem konformen Fundament steht.",
  },
];

const steps = [
  {
    title: "Erstgespräch",
    body: "Wir klären in einem kurzen Gespräch, ob Ihr Fall technisch und rechtlich abbildbar ist.",
  },
  {
    title: "Verträge: DSGVO & § 203",
    body: "Sie unterschreiben den Auftragsverarbeitungsvertrag (DSGVO) und das Agreement zur § 203-konformen Nutzung.",
  },
  {
    title: "Einrichtung & Konfiguration",
    body: "Wir richten Ihren dedizierten Tenant ein und erzeugen die passende Konfiguration.",
  },
  {
    title: "Config einspielen & loslegen",
    body: "Sie erhalten Ihre Config, spielen sie in der App ein und können sofort sicher mit Claude arbeiten.",
  },
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
          {cards.map((c) => (
            <SimpleCard key={c.title} align="left">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.img}
                alt={`Illustration: ${c.title}`}
                className="mb-5 h-40 w-full rounded-xl object-cover"
              />
              <Typo.H3>{c.title}</Typo.H3>
              <Typo.Paragraph>{c.body}</Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <div className="mx-auto max-w-3xl text-center">
          <Typo.H2>So bekommen Sie Zugang</Typo.H2>
          <Typo.Paragraph>
            Von der ersten Frage bis zur laufenden Nutzung, in vier klaren Schritten.
          </Typo.Paragraph>
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <TimelineAsSteps>
            {steps.map((s, i) => (
              <TimelineAsStepsStep
                key={s.title}
                value={i + 1}
                isLast={i === steps.length - 1}
              >
                <Typo.H3 className="mt-2!">{s.title}</Typo.H3>
                <Typo.Paragraph>{s.body}</Typo.Paragraph>
              </TimelineAsStepsStep>
            ))}
          </TimelineAsSteps>
        </div>
      </ContentWrapper>
    </>
  );
}
