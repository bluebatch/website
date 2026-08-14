import type { Metadata } from "next";
import { resolveHref } from "@/lib/get-canonical-path";
import {
  ShieldCheck,
  Lock,
  Server,
  FileCheck,
  Building2,
  Ban,
} from "lucide-react";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import IntroBox from "@/components/ui/intro-box";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnCallToAction,
  Hero2ColumnSubtext,
  Hero2ColumnImage,
} from "@/components/heroes/hero-2-column";
import GeoSummary from "@/components/ui/geo-summary";
import ContactButton from "@/components/buttons/contact-button";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/ui/timeline-as-steps";
import { FaqContainer } from "@/components/ui/faqs";
import InternalLink from "@/components/buttons/internal-link";
import Customer from "@/components/sections/customer/customer";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";

const TITLE =
  "Claude Cowork für Steuerberater: DSGVO- & § 203-konform | Bluebatch";
const DESCRIPTION =
  "Claude DSGVO- und § 203-StGB-konform für Steuerberater und Wirtschaftsprüfer. EU-Hosting, AVV, dedizierter Tenant, kein Training mit Ihren Daten, komplett von uns eingerichtet.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: "Claude Cowork für Steuerberater, DSGVO- & § 203-konform",
    description: DESCRIPTION,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Claude%20Cowork%20f%C3%BCr%20Steuerberater%2C%20DSGVO-%20%26%20%C2%A7%20203-konform&eyebrow=Steuerberater",
        width: 1200,
        height: 630,
        alt: "Bluebatch, Claude Cowork für Steuerberater",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude Cowork für Steuerberater, DSGVO- & § 203-konform",
    description: DESCRIPTION,
    images: ["/og?title=Claude%20Cowork%20f%C3%BCr%20Steuerberater%2C%20DSGVO-%20%26%20%C2%A7%20203-konform&eyebrow=Steuerberater"],
  },
  alternates: {
    canonical: "/branchen/steuerberater/claude-cowork",
  },
};

const pillars = [
  {
    img: "/images/sensitiv-ai/claude-app.svg",
    title: "Claude in verwalteter Umgebung",
    body: "Claude von Anthropic ist eines der stärksten KI-Modelle für Text, Analyse und Dokumente. Wir setzen es nicht als öffentliches Consumer-Tool ein, sondern in einer verwalteten, privaten Umgebung, angebunden an Ihre Systeme und mit klaren Zugriffsrechten. So bekommen Sie die volle Leistung, ohne die Kontrolle über Ihre Daten abzugeben.",
  },
  {
    img: "/images/sensitiv-ai/dsgvo.svg",
    title: "DSGVO-konform",
    body: "Ihre Daten laufen über eine DSGVO-konforme AWS-Infrastruktur in der Region Frankfurt (EU). Mit Auftragsverarbeitungsvertrag (AVV), ohne Nutzung Ihrer Inhalte zum Training und mit voller Kontrolle über Speicherung und Löschung. Datenschutz ist von Anfang an eingebaut, kein nachträgliches Add-on.",
  },
  {
    img: "/images/sensitiv-ai/stgb-203.svg",
    title: "§ 203 StGB im Blick",
    body: "Für Berufsgeheimnisträger reicht DSGVO allein nicht. § 203 verlangt, dass Geheimnisse nicht an Unbefugte gelangen, auch nicht an Dienstleister ohne Verpflichtung zur Verschwiegenheit. Wir schaffen die technischen und vertraglichen Voraussetzungen, u. a. die Verpflichtung mitwirkender Personen nach § 203 Abs. 4 StGB.",
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "DSGVO von Anfang an",
    body: "AVV, EU-Hosting auf AWS in Frankfurt, keine Nutzung Ihrer Inhalte zum Training. Datenschutz ist eingebaut, nicht nachgerüstet.",
  },
  {
    icon: Lock,
    title: "§ 203-konformes Setup",
    body: "Technische und vertragliche Voraussetzungen inklusive Verpflichtung mitwirkender Personen nach § 203 Abs. 4 StGB.",
  },
  {
    icon: Server,
    title: "Dedizierte, private Umgebung",
    body: "Kein öffentliches Consumer-Tool, sondern ein verwalteter Tenant, angebunden an Ihre Systeme, mit klaren Zugriffsrechten.",
  },
  {
    icon: FileCheck,
    title: "Stark bei Dokumenten",
    body: "Claude ist besonders gut bei Belegen, Akten, Verträgen und langen Texten, genau da, wo in der Kanzlei die Arbeit liegt.",
  },
  {
    icon: Building2,
    title: "Komplett eingerichtet",
    body: "Wir übernehmen Setup und Konfiguration. Kein Bastel-Setup, Sie bekommen eine fertige, sichere Umgebung.",
  },
  {
    icon: Ban,
    title: "Keine Datenweitergabe",
    body: "Ihre Daten bleiben bei Ihnen, kein Abfluss an unbefugte Dritte.",
  },
];

const targetGroups = [
  "Steuerberater und Steuerkanzleien",
  "Wirtschaftsprüfer und Prüfungsgesellschaften",
  "Kanzleien, deren Mandantendaten unter das Berufsgeheimnis fallen",
  "Teams, die mit Jahresabschlüssen, Belegen und Personaldaten arbeiten",
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

const faqs = [
  {
    question: "Dürfen Steuerberater überhaupt KI wie Claude einsetzen?",
    answer:
      "Ja, wenn das Setup stimmt. Neben der DSGVO sind § 203 StGB und § 57 StBerG zu beachten. Wir schaffen die technischen und vertraglichen Voraussetzungen, damit die Nutzung auf einem konformen Fundament steht.",
  },
  {
    question: "Werden unsere Daten zum Training verwendet?",
    answer:
      "Nein. In der von uns verwalteten Umgebung werden Ihre Inhalte nicht zum Training von KI-Modellen genutzt.",
  },
  {
    question: "Wo werden die Daten gehostet?",
    answer:
      "Auf DSGVO-konformer AWS-Infrastruktur in der Region Frankfurt (EU), mit Auftragsverarbeitungsvertrag (AVV) und voller Kontrolle über Speicherung und Löschung.",
  },
  {
    question: "Was bedeutet § 203-konform konkret?",
    answer:
      "§ 203 StGB verlangt, dass Berufsgeheimnisse nicht an Unbefugte gelangen, auch nicht an Dienstleister ohne Verschwiegenheitsverpflichtung. Wir setzen unter anderem die Verpflichtung mitwirkender Personen nach § 203 Abs. 4 StGB um.",
  },
  {
    question: "Wie lange dauert die Einrichtung?",
    answer:
      "Nach Erstgespräch und Verträgen richten wir Ihren dedizierten Tenant ein. Sie erhalten eine fertige Konfiguration und können direkt starten.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>
              Claude Cowork für Steuerberater
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Claude, DSGVO- und § 203-StGB-konform für Ihre Kanzlei
            </Hero2ColumnHeadline>
            <GeoSummary>
              Claude Cowork von Bluebatch ist eine verwaltete Claude-Umgebung
              für Steuerberater und Wirtschaftsprüfer, die DSGVO- und
              § 203-StGB-konform arbeitet. Die Daten laufen über
              AWS-Infrastruktur in der Region Frankfurt (EU), mit AVV,
              dediziertem Tenant und ohne Training mit Kanzleidaten. Bluebatch
              übernimmt Einrichtung und Konfiguration komplett, in vier
              Schritten vom Erstgespräch bis zum Start.
            </GeoSummary>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Beratung anfragen</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Verwaltete, private Claude-Umgebung, komplett von uns eingerichtet.
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage src="/images/claude-cowork.png" type="image" />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Kundenlogos */}
      <ContentWrapper noPadding bodyWidth="full">
        <Customer />
      </ContentWrapper>

      {/* Die drei Säulen */}
      <ContentWrapper colorScheme="white">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Sicher statt riskant</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Claude sicher für sensible Daten nutzen
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Auch wer mit besonders schützenswerten Daten arbeitet, kann die Stärke
            moderner KI nutzen, wenn das Setup stimmt. So verbinden wir Claude mit
            striktem Datenschutz.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={3} className="mt-12">
          {pillars.map((p) => (
            <SimpleCard key={p.title} align="left">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.img}
                alt={`Illustration: ${p.title}`}
                className="mb-5 h-40 w-full rounded-xl object-cover"
              />
              <Typo.H3>{p.title}</Typo.H3>
              <Typo.Paragraph>{p.body}</Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      {/* Was wir konkret machen */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Was wir konkret machen</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Datenschutz ist kein Add-on, sondern das Fundament
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Wir setzen Claude in einem abgesicherten Rahmen auf, damit Sie auch mit
            Berufsgeheimnis-Daten ruhig arbeiten können.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={3} className="mt-12">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <SimpleCard key={f.title} align="left">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-800">
                  <Icon className="h-6 w-6" />
                </span>
                <Typo.H3>{f.title}</Typo.H3>
                <Typo.Paragraph>{f.body}</Typo.Paragraph>
              </SimpleCard>
            );
          })}
        </SimpleGrid>
      </ContentWrapper>

      {/* Für wen */}
      <ContentWrapper colorScheme="white">
        <SimpleGrid cols={2} className="items-center gap-8 md:gap-12">
          <div>
            <Typo.H2 className="mb-4">Für wen das gemacht ist</Typo.H2>
            <Typo.Paragraph className="mb-6 text-gray-600">
              Für Berufsgeheimnisträger und Organisationen, deren Daten schon von
              Gesetzes wegen besonders geschützt sind. Wenn Offenlegung Personen
              schaden könnte, muss bei KI genau klar sein, wohin die Daten fließen
              und wer Zugriff hat.
            </Typo.Paragraph>
            <Typo.List>
              {targetGroups.map((g) => (
                <Typo.ListItem key={g}>{g}</Typo.ListItem>
              ))}
            </Typo.List>
          </div>
          <div>
            <Typo.H3 className="mb-3">Speziell für Steuerkanzleien</Typo.H3>
            <Typo.Paragraph className="mb-4 text-gray-600">
              Belegprüfung, Dokumentenverarbeitung, Mandantenkommunikation und
              Jahresabschluss, wir zeigen konkret, wo KI in der Kanzlei entlastet.
              Ab 2026 kommt die Pflicht zur strukturierten Eingangsrechnung dazu:
              Wie ein Workflow XRechnung und ZUGFeRD prüft, gegen die EN 16931
              validiert und revisionssicher archiviert, steht unter{" "}
              <InternalLink
                href={resolveHref(
                  "/branchen/steuerberater/workflows/e-rechnung-verarbeitung",
                )}
                variant="underline"
              >
                E-Rechnungen automatisiert verarbeiten
              </InternalLink>
              .
            </Typo.Paragraph>
            <div className="flex flex-col items-start gap-3">
              <InternalLink href={resolveHref("/branchen/steuerberater")}>
                KI für Steuerberater, alle Use Cases
              </InternalLink>
              <InternalLink href={resolveHref("/blog/ki-steuerberater")}>
                Leitfaden: KI für Steuerberater 2026
              </InternalLink>
              <InternalLink href={resolveHref("/blog/ki-datenschutz")}>
                KI und Datenschutz, worauf es ankommt
              </InternalLink>
            </div>
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Ablauf */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>So bekommen Sie Zugang</IntroBox.PreHeadline>
          <IntroBox.Headline>In vier klaren Schritten</IntroBox.Headline>
          <IntroBox.Paragraph>
            Von der ersten Frage bis zur laufenden Nutzung.
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="mx-auto mt-12 max-w-3xl">
          <TimelineAsSteps>
            {steps.map((s, i) => (
              <TimelineAsStepsStep
                key={s.title}
                value={i + 1}
                isLast={i === steps.length - 1}
              >
                <Typo.H3 className="mt-1!">{s.title}</Typo.H3>
                <Typo.Paragraph>{s.body}</Typo.Paragraph>
              </TimelineAsStepsStep>
            ))}
          </TimelineAsSteps>
        </div>
      </ContentWrapper>

      {/* Vertiefen: was das Team mit Claude Cowork konkret macht */}
      <ContentWrapper colorScheme="white">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Typo.H2 className="mb-4">
            Was Kanzleien mit Claude Cowork konkret machen
          </Typo.H2>
          <Typo.Paragraph className="text-gray-600">
            Vom Gutachten bis zum Diktat: Diese Anwendungsfälle kommen direkt
            aus dem Kanzlei-Alltag - jede Seite zeigt, wie das Team damit
            arbeitet.
          </Typo.Paragraph>
        </div>
        <SimpleGrid cols={3} className="gap-4">
          {[
            {
              href: "/branchen/steuerberater/claude-cowork/kanzlei-skills-entwicklung",
              label: "Fachwissen als KI-Skills kodieren lassen",
            },
            {
              href: "/branchen/steuerberater/claude-cowork/was-sind-ki-skills",
              label: "Was sind KI-Skills?",
            },
            {
              href: "/branchen/steuerberater/claude-cowork/pruef-skills",
              label: "Prüf-Skills: Provisionsanspruch, Arbeitszeugnis, AGB",
            },
            {
              href: "/branchen/steuerberater/claude-cowork/gutachten-mit-ki",
              label: "Gutachten mit KI in circa 3 Stunden",
            },
            {
              href: "/branchen/steuerberater/claude-cowork/begleitschreiben-veranlagung",
              label: "Begleitschreiben zur Veranlagung",
            },
            {
              href: "/branchen/steuerberater/claude-cowork/diktat-zu-text",
              label: "Diktat zu Text: circa 150h pro Jahr sparen",
            },
          ].map((item) => (
            <div
              key={item.href}
              className="rounded-xl border border-gray-200 bg-white p-5"
            >
              <InternalLink href={item.href}>{item.label}</InternalLink>
            </div>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      {/* FAQ */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer faqs={faqs}>
          <FaqContainer.Headline>
            Häufige Fragen zu KI bei sensiblen Daten
          </FaqContainer.Headline>
        </FaqContainer>
      </ContentWrapper>

      {/* Abschluss-CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
