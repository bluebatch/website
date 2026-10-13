import type { Metadata } from "next";
import { BookOpenCheck, Check, FileSearch, House, Lock, PenLine, Users } from "lucide-react";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import {
  Typo,
  IntroBox,
  FaqContainer,
  TimelineAsSteps,
  TimelineAsStepsStep,
  Button,
} from "@/components/ui";
import { OfferCard, SimpleCard } from "@/components/cards";
import { ContactButton, InternalLink } from "@/components/buttons";
import {
  Hero2Column,
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnCallToAction,
} from "@/components/heroes";
import ClaudeDesktopMock from "@/components/mockups/claude-desktop-mock";
import DatevFlow from "./datev-flow";

const meta = {
  title: "DATEV KI: Claude fragt Ihren DATEV-Bestand direkt",
  description:
    "DATEV KI mit Claude: Der DATEV MCP verbindet Claude über DATEVconnect mit Ihrem Bestand, lesend, mit DATEV-Rechten und Mandantentrennung. Beta, 100 € im Monat.",
};

export const metadata: Metadata = {
  title: `${meta.title} | Bluebatch`,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=DATEV%20KI%20mit%20Claude&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "DATEV KI mit Claude",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/integrationen/datev",
  },
};

const lookups = [
  "Mandanten suchen, Stammdaten und Zuständigkeiten",
  "Offene Posten bei Debitoren und Kreditoren",
  "Kontensalden, Kontenplan und Buchungsstapel",
  "Einzelbuchungen, mit der DATEV-Zusatzlizenz Kontobuchungen",
  "Bearbeitungsstand aller Mandanten: gebucht und festgeschrieben bis",
  "Überfällige Aufträge aus der Eigenorganisation",
  "Dokumente im DATEV DMS finden",
];

const stages = [
  {
    step: "Stufe 1",
    title: "Lesen",
    icon: BookOpenCheck,
    text: "Stammdaten, offene Posten, Salden und Bearbeitungsstand abfragen. Der Einstieg für fast jede Kanzlei.",
    badge: "rein lesend",
    tone: "bg-green-50 text-green-700 ring-green-200",
  },
  {
    step: "Stufe 2",
    title: "Belege und Dokumente",
    icon: FileSearch,
    text: "Dokumente im DATEV DMS finden, Vorgängen zuordnen und melden, was für den Abschluss noch fehlt.",
    badge: "rein lesend",
    tone: "bg-green-50 text-green-700 ring-green-200",
  },
  {
    step: "Stufe 3",
    title: "Zurückschreiben",
    icon: PenLine,
    text: "Buchungsstapel als Entwurf, nie festgeschrieben. Claude bereitet vor, eine Person bestätigt, erst dann wird angelegt.",
    badge: "nur mit Freigabe",
    tone: "bg-amber-50 text-amber-700 ring-amber-200",
  },
];

const principles = [
  {
    icon: Lock,
    title: "Rechte werden nicht ausgeweitet",
    text: "Claude ruft DATEV als die angemeldete Person auf. Mehr Zugriff als in DATEV selbst gibt es nicht.",
  },
  {
    icon: Users,
    title: "Mandantentrennung bleibt",
    text: "Wer nur bestimmte Mandate sieht, sieht auch über Claude nur diese.",
  },
  {
    icon: House,
    title: "Daten bleiben im Haus",
    text: "Kein fremder Cloud-Dienst dazwischen. Mandantendaten verlassen Ihr Netz nur als Teil der Anfrage an Claude, über das Gateway in der EU.",
  },
];

const faqs = [
  {
    question: "Was bedeutet DATEV KI mit Claude?",
    answer:
      "Claude bekommt über den DATEV MCP von Bluebatch Zugriff auf Ihren DATEV-Bestand und beantwortet Fragen mit echten Zahlen: offene Posten, Salden, Bearbeitungsstand, fehlende Unterlagen. Claude läuft dabei über das Private Claude AI Gateway und AWS Bedrock in Frankfurt.",
  },
  {
    question: "Gibt es einen DATEV MCP Server?",
    answer:
      "DATEV selbst setzt bei KI auf eigene Funktionen wie den DATEV Copilot und bietet keinen MCP-Server für Claude an. Der DATEV MCP von Bluebatch ist ein solcher Server: ein Windows-Dienst auf Ihrem DATEV-Server, der die DATEV-Schnittstelle DATEVconnect nutzt und Claude definierte Werkzeuge bereitstellt.",
  },
  {
    question: "Kann Claude in DATEV buchen?",
    answer:
      "Nur als Entwurf und nur mit Freigabe. In Stufe 3 bereitet Claude einen Buchungsstapel vor, eine Person prüft die Vorschau und bestätigt, dann wird er nicht festgeschrieben angelegt. Festschreiben bleibt in DATEV bei Ihren Leuten. Ohne ausdrückliche Freigabe ist der DATEV MCP rein lesend.",
  },
  {
    question: "Verlassen Mandantendaten die Kanzlei?",
    answer:
      "Der DATEV MCP läuft auf Ihrem eigenen Server, ohne Tunnel und ohne eingehende Verbindungen aus dem Internet. Mandantendaten verlassen Ihr Netz nur als Teil der Anfrage an Claude, und die läuft über das Private Claude AI Gateway und AWS Bedrock in der EU, ausgelegt auf § 203 StGB und § 62a StBerG.",
  },
  {
    question: "Was kostet die DATEV-Anbindung?",
    answer:
      "Der DATEV MCP kostet in der Beta 100 € pro Monat als Add-on zum Private Claude AI Gateway. Die DATEV-Schnittstelle DATEVconnect gibt es bei DATEV ohne Aufpreis, für das Lesen einzelner Buchungen braucht es die DATEV-Zusatzlizenz Kontobuchungen.",
  },
  {
    question: "Welche DATEV-Installation wird vorausgesetzt?",
    answer:
      "Eine DATEV-Installation auf Ihrem eigenen Server mit DATEVconnect. Angebunden werden Rechnungswesen, Zentrale Stammdaten, DMS und Eigenorganisation. Welche Module bei Ihnen passen, prüfen wir im Scoping, bevor etwas zugesagt wird.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection colorScheme="gradient-cool">
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Integration · DATEV</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>DATEV KI: Claude arbeitet mit Ihrem Bestand</Hero2ColumnHeadline>
            <Hero2ColumnDescription geo>
              Mit dem DATEV MCP von Bluebatch fragt Claude Ihren DATEV-Bestand direkt ab, statt mit Listen von gestern zu arbeiten. Ein Dienst auf Ihrem DATEV-Server nutzt DATEVconnect und ruft DATEV als die jeweilige Person auf, mit deren Rechten und Mandantentrennung. Standard ist lesen. Das Add-on ist in der Beta und kostet 100 € pro Monat.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
              <Button variant="secondary" href="#stufen">
                Die drei Stufen
              </Button>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <DatevFlow />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      <ContentWrapper>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <IntroBox textCentered={false}>
              <IntroBox.PreHeadline>KI in der Buchhaltung mit DATEV</IntroBox.PreHeadline>
              <IntroBox.Headline>Fragen an den echten Bestand</IntroBox.Headline>
            </IntroBox>
            <Typo.Paragraph textColor="muted">
              Ihr Wissen über Ihre Mandanten liegt in DATEV. Ohne Anbindung arbeitet Claude mit dem, was jemand hochlädt. Mit dem DATEV MCP sieht Claude nach, und zwar so:
            </Typo.Paragraph>
            <ul className="mb-6 space-y-2.5">
              {lookups.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-gray-700">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-green-600" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Typo.Paragraph textColor="muted" size="sm" spacing="none">
              Was DATEVconnect nicht hergibt, kann auch Claude nicht abfragen: Steuererklärungen, Jahresabschluss, fertige BWA und LODAS.
            </Typo.Paragraph>
          </div>
          <ClaudeDesktopMock mode="Chat" model="Sonnet 5.5" compact className="lg:order-first">
            <ClaudeDesktopMock.Banner>Kanzlei Müller · Private Gateway</ClaudeDesktopMock.Banner>
            <ClaudeDesktopMock.User>
              Welche Mandanten hängen mit der Buchhaltung mehr als zwei Monate hinterher?
            </ClaudeDesktopMock.User>
            <ClaudeDesktopMock.Tool>DATEV · Bearbeitungsstand von 214 Mandanten gelesen</ClaudeDesktopMock.Tool>
            <ClaudeDesktopMock.Assistant>
              <p>Bei drei Mandanten liegt die Finanzbuchhaltung mehr als zwei Monate zurück:</p>
              <ul>
                <li><strong>Bäckerei Hofmann GmbH:</strong> gebucht bis 06/2026</li>
                <li><strong>Weber Elektrotechnik:</strong> gebucht bis 07/2026</li>
                <li><strong>Praxis Dr. Lang:</strong> gebucht bis 07/2026</li>
              </ul>
              <p>Soll ich für die drei eine Erinnerung wegen der fehlenden Unterlagen vorbereiten?</p>
            </ClaudeDesktopMock.Assistant>
          </ClaudeDesktopMock>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" id="stufen">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Schritt für Schritt</IntroBox.PreHeadline>
          <IntroBox.Headline>Drei Stufen, bewusst in dieser Reihenfolge</IntroBox.Headline>
          <IntroBox.Paragraph>
            Jede Kanzlei startet mit Lesen. Die nächste Stufe kommt erst, wenn die vorige im Alltag sitzt.
          </IntroBox.Paragraph>
        </IntroBox>
        <SimpleGrid cols={3}>
          {stages.map((s) => {
            const Icon = s.icon;
            return (
              <SimpleCard key={s.step} align="left" className="rounded-2xl">
                <div className="mb-5 flex w-full items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-400 to-primary-700 text-white shadow-md">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ${s.tone}`}>
                    {s.badge}
                  </span>
                </div>
                <div className="text-sm font-semibold uppercase tracking-wide text-primary-600">{s.step}</div>
                <Typo.H3 className="mt-1!">{s.title}</Typo.H3>
                <Typo.Paragraph textColor="muted" spacing="none">
                  {s.text}
                </Typo.Paragraph>
              </SimpleCard>
            );
          })}
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div>
            <IntroBox textCentered={false}>
              <IntroBox.PreHeadline>DATEV MCP Server</IntroBox.PreHeadline>
              <IntroBox.Headline>So kommt DATEV an Claude</IntroBox.Headline>
            </IntroBox>
            <TimelineAsSteps>
              <TimelineAsStepsStep value={1}>
                <Typo.H3 className="mt-1!">Installation prüfen</Typo.H3>
                <Typo.Paragraph textColor="muted">
                  Im Scoping sehen wir uns Ihre DATEV-Installation und Module an. DATEVconnect gibt es bei DATEV ohne Aufpreis, für Einzelbuchungen braucht es die Zusatzlizenz Kontobuchungen.
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={2}>
                <Typo.H3 className="mt-1!">Dienst auf Ihrem DATEV-Server</Typo.H3>
                <Typo.Paragraph textColor="muted">
                  Der DATEV MCP wird per Setup als Windows-Dienst neben DATEVconnect installiert. Kein Tunnel, keine eingehenden Verbindungen aus dem Internet.
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={3}>
                <Typo.H3 className="mt-1!">Personen verknüpfen</Typo.H3>
                <Typo.Paragraph textColor="muted">
                  Jede Person verknüpft einmal ihre Anmeldung mit ihrem DATEV-Benutzer. Die Zuordnung liegt auf Ihrem Server, nicht bei uns.
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={4}>
                <Typo.H3 className="mt-1!">Fragen stellen</Typo.H3>
                <Typo.Paragraph textColor="muted" spacing="none">
                  In Claude Desktop stehen die DATEV-Werkzeuge bereit. Jede Abfrage läuft als die angemeldete Person und wird protokolliert.
                </Typo.Paragraph>
              </TimelineAsStepsStep>
            </TimelineAsSteps>
          </div>
          <div className="self-center rounded-3xl bg-primary-900 p-8 text-white shadow-xl">
            <div className="mb-6 text-sm font-semibold uppercase tracking-wide text-secondary-300">
              Was für DATEV besonders gilt
            </div>
            <div className="space-y-6">
              {principles.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <Icon className="h-5 w-5 text-secondary-300" aria-hidden />
                    </span>
                    <div>
                      <div className="mb-1 font-semibold">{p.title}</div>
                      <p className="text-sm leading-relaxed text-primary-100">{p.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Abgrenzung</IntroBox.PreHeadline>
          <IntroBox.Headline>Und die KI von DATEV?</IntroBox.Headline>
        </IntroBox>
        <div className="mx-auto max-w-3xl">
          <Typo.Paragraph className="text-lg">
            DATEV entwickelt eigene KI-Funktionen: den DATEV Copilot in MyDATEV, die Automatisierungsservices für Rechnungen und Bank und die DATEV KI-Werkstatt, in der DATEV-Mitglieder Prototypen ausprobieren. Die bleiben, wo sie sind. Der DATEV MCP ersetzt keine davon.
          </Typo.Paragraph>
          <Typo.Paragraph className="text-lg" spacing="none">
            Der DATEV MCP ist die Schicht darüber: Claude arbeitet mit Ihren Abläufen, Ihrer Methodik und Ihren eigenen Agenten auf demselben Datenbestand. Die Vorerfassung wird vorbereitet und geprüft, nicht ersetzt. Gebucht und festgeschrieben wird von Ihren Leuten.
          </Typo.Paragraph>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Mehr für Steuerkanzleien</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={3}>
          <OfferCard
            highlight
            href="/managed-claude/preise"
            price="100 € / Monat"
            title="DATEV MCP (Beta)"
            description="Als Add-on zum Private Claude AI Gateway zubuchen."
            linkLabel="Zu den Preisen"
          />
          <OfferCard
            href="/branchen/steuerberater/private-ai/ki-steuerberater-62a-stberg"
            title="KI nach § 62a StBerG"
            description="Vertragskette und Gateway für Kanzleien im Detail."
            linkLabel="Zur Rechtsgrundlage"
          />
          <OfferCard
            href="/managed-claude/integrationen"
            title="Alle Integrationen"
            description="Outlook, Websuche und eigene Systeme per MCP an Claude anbinden."
            linkLabel="Zu den Integrationen"
          />
        </SimpleGrid>
        <div className="mt-8 text-center">
          <InternalLink href="/branchen/steuerberater">Alle Use Cases für Steuerberater</InternalLink>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer headline="Häufige Fragen zu DATEV KI mit Claude" faqs={faqs} />
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>DATEV und Claude verbinden?</IntroBox.Headline>
          <IntroBox.Paragraph>
            Im Scoping-Gespräch klären wir in 30 Minuten Ihre DATEV-Installation, die Anmeldung und wer Zugriff bekommt. Drei Tage danach haben Sie ein Angebot mit Festpreis, Verbrauchsschätzung und Limit-Vorschlag.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="flex justify-center">
          <ContactButton size="lg">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>
    </>
  );
}
