import type { Metadata } from "next";
import {
  Bot,
  MessageSquareText,
  Workflow,
  ClipboardCheck,
  Rocket,
  SearchCheck,
} from "lucide-react";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import GeoSummary from "@/components/ui/geo-summary";
import ContactButton from "@/components/buttons/contact-button";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { ProductTileGrid } from "@/components/cards/product-tile";
import IntroBox from "@/components/ui/intro-box";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/ui/timeline-as-steps";
import ComplianceNoticeBox from "@/components/ui/compliance-notice-box";
import { FaqContainer } from "@/components/ui/faqs";
import InternalLink from "@/components/buttons/internal-link";

export const metadata: Metadata = {
  title: "KI-Agenten für Steuerberater | Bluebatch",
  description:
    "KI-Agenten für Steuerkanzleien: Mail Agent, Mandantenkommunikation und KI-Jahresabschluss. Digitale Sachbearbeiter, die vorbereiten - Ihr Team gibt frei.",
  openGraph: {
    title: "KI-Agenten für Steuerberater - Bluebatch",
    description:
      "KI-Agenten für Steuerkanzleien: Mail Agent, Mandantenkommunikation und KI-Jahresabschluss. Digitale Sachbearbeiter, die vorbereiten - Ihr Team gibt frei.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=KI-Agenten%20f%C3%BCr%20Steuerberater&eyebrow=Steuerberater",
        width: 1200,
        height: 630,
        alt: "Bluebatch KI-Agenten für Steuerberater",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KI-Agenten für Steuerberater - Bluebatch",
    description:
      "KI-Agenten für Steuerkanzleien: Mail Agent, Mandantenkommunikation und KI-Jahresabschluss. Digitale Sachbearbeiter, die vorbereiten - Ihr Team gibt frei.",
    images: ["/og?title=KI-Agenten%20f%C3%BCr%20Steuerberater&eyebrow=Steuerberater"],
  },
  alternates: {
    canonical: "/branchen/steuerberater/ki-agenten",
  },
};

const agents = [
  {
    href: "/branchen/steuerberater/ki-agenten/mail-agent",
    title: "Mail Agent",
    badge: "Agent #01",
    role: "Sachbearbeiter Posteingang",
    stat: "-60%",
    description:
      "Liest Mandanten-Mails, erkennt den Mandanten in DATEV und schreibt Antwortentwürfe im Kanzlei-Ton. Ihr Team gibt frei, der E-Mail-Aufwand sinkt um 40-60%.",
    image: "/images/data-flow.jpg",
    features: [
      "Liest und ordnet Mandanten-Mails ein",
      "Erkennt den Mandanten direkt in DATEV",
      "Antwortentwürfe im Kanzlei-Ton",
      "Sortiert nach Frist und Dringlichkeit",
      { label: "Senkt den E-Mail-Aufwand", badge: "-60%" },
    ],
    linkLabel: "Zum Mail-Agenten",
  },
  {
    href: "/branchen/steuerberater/ki-agenten/mandantenkommunikation",
    title: "Mandantenkommunikation",
    badge: "Agent #02",
    role: "Sachbearbeiter Mandantenservice",
    stat: "3 Wo.",
    description:
      "Klärt FAQ, Fristen und Belegnachforderungen automatisch und verkürzt den Belegrücklauf von 8 auf 3 Wochen - ohne 3-5 h Routine-Mails pro Tag.",
    image: "/images/mandantenkommunikation/hero-side-visual.png",
    features: [
      "Beantwortet FAQ, Fristen und Status-Anfragen",
      { label: "Verkürzt den Belegrücklauf", badge: "8→3 Wo." },
      "Soll-Ist-Abgleich gegen DATEV",
      { label: "Automatische Eskalation vor der Frist", badge: "14/7 T" },
    ],
    linkLabel: "Zum Kommunikationsagenten",
  },
  {
    href: "/branchen/steuerberater/ki-agenten/jahresabschluss-ki",
    title: "KI-Jahresabschluss",
    badge: "Agent #03",
    role: "Assistent Jahresabschluss",
    stat: "-80%",
    description:
      "Mappt SKR auf HGB, erstellt Anhang und Lagebericht als Entwurf und entzerrt den Saison-Peak um 60-80% - statt 40-200 h pro Mandant.",
    image: "/images/jahresabschluss/card-mapping.png",
    features: [
      "SKR-HGB-Mapping und Saldenabstimmung",
      "Anhang nach § 264-289 HGB",
      "Lagebericht als Entwurf",
      { label: "Entzerrt den Saison-Peak", badge: "-80%" },
    ],
    linkLabel: "Zum KI-Jahresabschluss-Agenten",
  },
  {
    href: "/branchen/steuerberater/ki-agenten/einspruch-agent",
    title: "Einspruch-Agent",
    badge: "Agent #04",
    role: "Sachbearbeiter Rechtsbehelf",
    stat: "8h zu 2h",
    description:
      "Einspruch gegen den Steuerbescheid mit Rechtsprechungs-Recherche, Argumentation und fertigem Schriftsatz-Entwurf - der Steuerberater prüft und verantwortet.",
    image: "/images/tax-consulting-workspace.jpg",
    features: [
      "Recherchiert einschlägige Rechtsprechung",
      "Baut die Argumentation auf",
      "Liefert den Schriftsatz als Entwurf",
      "Human-in-the-Loop-Kontrolle",
      { label: "Aufwand pro Einspruch", badge: "8h→2h" },
    ],
    linkLabel: "Zum Einspruch-Agenten",
  },
  {
    href: "/branchen/steuerberater/ki-agenten/bwa-analyse-agent",
    title: "BWA-Analyse-Agent",
    badge: "Agent #05",
    role: "Assistent Auswertung",
    stat: "je Mandant",
    description:
      "Analysiert jede BWA automatisch, markiert Auffälligkeiten und erstellt einen Steuer-Forecast je Mandant - als Grundlage für proaktive Beratung.",
    image: "/images/business-analytics.jpg",
    features: [
      "BWA automatisch analysiert",
      "Auffälligkeiten markiert",
      "Steuer-Forecast je Mandant",
      "Beratungsgrundlage statt Zahlenfriedhof",
    ],
    linkLabel: "Zum BWA-Analyse-Agenten",
  },
  {
    href: "/branchen/steuerberater/ki-agenten/beratungsanlaesse-agent",
    title: "Beratungsanlässe-Agent",
    badge: "Agent #06",
    role: "Assistent Beratung",
    stat: "4x/Jahr",
    description:
      "Erkennt Beratungsanlässe systematisch aus Mandantendaten - anstehende Übergaben, ungewöhnliche Belastungen, Fristen - inkl. quartalsweisem Vorauszahlungs-Check.",
    image: "/images/opportunity-doors.jpg",
    features: [
      "Scannt Mandantendaten auf Anlässe",
      { label: "Vorauszahlungs-Check je Quartal", badge: "4x/Jahr" },
      "Proaktiver Anpassungs-Hinweis",
      "Aus Pflicht wird Beratung",
    ],
    linkLabel: "Zum Beratungsanlässe-Agenten",
  },
  {
    href: "/branchen/steuerberater/ki-agenten/mandanten-chatbot",
    title: "Mandanten-Chatbot",
    badge: "Agent #07",
    role: "Ansprechpartner rund um die Uhr",
    stat: "24/7",
    description:
      "Beantwortet Mandantenfragen rund um die Uhr aus der Kanzlei-Wissensbasis - fachliche Fragen gehen an den Sachbearbeiter.",
    image: "/images/client-communication.jpg",
    features: [
      "Antwortet aus der Kanzlei-Wissensbasis",
      { label: "Rund um die Uhr erreichbar", badge: "24/7" },
      "Fachfragen gehen an den Sachbearbeiter",
      "Entlastet Telefon und Postfach",
    ],
    linkLabel: "Zum Mandanten-Chatbot",
  },
];

const abgrenzung = [
  {
    icon: MessageSquareText,
    label: "KI-Assistent",
    formel: "Der Mensch arbeitet, die KI hilft.",
    body: "Ihr Team stellt Fragen, lässt Texte entwerfen oder Dokumente zusammenfassen. Die KI ist ein Werkzeug im Chat, jede Aufgabe stößt ein Mensch einzeln an. In der Kanzlei heißt das bei uns Claude Cowork, DSGVO- und § 203-konform betrieben.",
    link: {
      href: "/branchen/steuerberater/claude-cowork",
      label: "Zu Claude Cowork",
    },
  },
  {
    icon: Bot,
    label: "KI-Agent",
    formel: "Die KI arbeitet, der Mensch gibt frei.",
    body: "Der Agent bekommt eine Rolle statt einzelner Aufgaben: Er beobachtet zum Beispiel das Postfach, entscheidet im Rahmen seiner Regeln selbst, was zu tun ist, und legt fertige Entwürfe zur Freigabe vor. Darum geht es auf dieser Seite.",
    highlight: true,
  },
  {
    icon: Workflow,
    label: "Workflow",
    formel: "Fester Ablauf, kein Ermessensspielraum.",
    body: "Ein Workflow läuft immer gleich: Beleg kommt rein, wird ausgelesen, geprüft, abgelegt. Perfekt für Prozesse, die sich exakt beschreiben lassen. Sobald Einordnung und Formulierung nötig sind, braucht es einen Agenten.",
    link: {
      href: "/branchen/steuerberater/workflows",
      label: "Zu den Workflows",
    },
  },
];

const kanzleiSteps = [
  {
    title: "Mail geht ein",
    body: "Ein Mandant schickt eine Rückfrage zur Umsatzsteuer-Voranmeldung, mit zwei Belegen im Anhang. Bisher: liegt im Sammelpostfach, bis jemand Zeit hat.",
  },
  {
    title: "Der Agent erkennt den Mandanten in DATEV",
    body: "Über DATEVconnect ordnet der Agent die Mail der richtigen Mandantenakte zu und zieht den Kontext: Rechtsform, zuständiger Sachbearbeiter, offene Vorgänge, Fristen.",
  },
  {
    title: "Entwurf im Kanzlei-Ton",
    body: "Der Agent formuliert eine Antwort, wie Ihre Kanzlei sie schreiben würde, legt die Belege im DMS ab und vermerkt die erkannte Frist als Wiedervorlage.",
  },
  {
    title: "Ihr Sachbearbeiter prüft und gibt frei",
    body: "Der Entwurf landet als Vorschlag im Postfach. Ihr Team liest gegen, passt bei Bedarf an und gibt frei. Erst dann geht die Antwort raus, nie vorher.",
  },
];

const einfuehrung = [
  {
    icon: SearchCheck,
    step: "Schritt 1",
    title: "Einen Prozess auswählen",
    body: "Wir starten nicht mit einer KI-Strategie, sondern mit einem konkreten Engpass: meist das Mail-Postfach oder der Belegrücklauf. Gemeinsam legen wir fest, was der Agent darf und wo die Freigabe sitzt.",
  },
  {
    icon: Rocket,
    step: "Schritt 2",
    title: "Pilot mit echten Fällen",
    body: "Der Agent läuft 2-4 Wochen im Pilotbetrieb mit echten Mandanten-Mails, aber immer mit Freigabe durch Ihr Team. So sehen Sie an Ihren eigenen Fällen, wie gut Entwürfe und Zuordnung wirklich sind.",
  },
  {
    icon: ClipboardCheck,
    step: "Schritt 3",
    title: "Auswerten und ausweiten",
    body: "Nach dem Pilot ziehen wir Bilanz: gesparte Zeit, Trefferquote, Ton. Passt es, geht der Agent in den Regelbetrieb, und der nächste Prozess kommt dran. Ein Agent nach dem anderen, nicht alles auf einmal.",
  },
];

const faqs = [
  {
    question: "Was kostet ein KI-Agent für die Kanzlei?",
    answer:
      "Das hängt vom Prozess und den Schnittstellen ab, vor allem von der DATEV-Anbindung und der Zahl der Postfächer. Ein Pilot mit einem Agenten und einem Prozess ist bewusst überschaubar gehalten, damit Sie die Entscheidung an echten Zahlen treffen können. Im Erstgespräch bekommen Sie eine konkrete Einschätzung für Ihre Kanzleigröße.",
  },
  {
    question: "Ist der Einsatz mit § 203 StGB und der DSGVO vereinbar?",
    answer:
      "Ja. Die Agenten laufen in einer verwalteten Umgebung mit EU-Hosting und § 203-konformem Setup, auf Wunsch mit eigenem Schlüssel (BYOK). Mandantendaten verlassen den vereinbarten Rahmen nicht, und die berufsrechtliche Verantwortung bleibt durch das Freigabe-Prinzip immer bei Ihrer Kanzlei.",
  },
  {
    question: "Ersetzt der Agent Mitarbeiter?",
    answer:
      "Nein. Der Agent übernimmt die Routine: sortieren, zuordnen, Entwürfe schreiben, Belege nachfordern. Die fachliche Einschätzung, die Mandantenbeziehung und jede Freigabe bleiben bei Ihrem Team. In der Praxis verschiebt sich die Zeit von Routine-Mails zu Beratung, gerade bei Fachkräftemangel ist das der eigentliche Gewinn.",
  },
  {
    question: "Wie lange dauert die Einführung?",
    answer:
      "Für den ersten Agenten planen wir einen Piloten von 2-4 Wochen mit echten Fällen und Freigabe durch Ihr Team. Danach entscheiden Sie anhand der Auswertung, ob der Agent in den Regelbetrieb geht und welcher Prozess als nächster folgt.",
  },
];

export default function Page() {
  return (
    <>
      {/* Hero */}
      <ContentWrapper isFirstSection>
        <div className="text-center max-w-3xl mx-auto">
          <Typo.H1>KI-Agenten für Steuerberater</Typo.H1>
          <GeoSummary align="center" className="mt-4">
            KI-Agenten sind digitale Sachbearbeiter für Steuerkanzleien: Der
            Mail Agent beantwortet Mandanten-Mails, die Mandantenkommunikation
            klärt Fristen und Belege, der KI-Jahresabschluss entzerrt den
            Saison-Peak um 60-80%. Bluebatch implementiert die Agenten mit
            DATEV-Anbindung - Ihr Team prüft und gibt jede Antwort frei.
          </GeoSummary>
          <ContactButton icon="chat">Beratung anfragen</ContactButton>
        </div>
      </ContentWrapper>

      {/* Abgrenzung: Assistent vs. Agent vs. Workflow */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Was ist ein KI-Agent?</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Assistent, Agent oder Workflow? Der Unterschied entscheidet
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            KI ist nicht gleich KI. Für die Kanzlei lohnt sich eine klare
            Unterscheidung, denn sie bestimmt, wer arbeitet und wer die
            Verantwortung trägt.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={3} className="mt-12">
          {abgrenzung.map((item) => {
            const Icon = item.icon;
            return (
              <SimpleCard
                key={item.label}
                align="left"
                className={
                  item.highlight ? "border-2 border-primary-600" : undefined
                }
              >
                <span
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${
                    item.highlight
                      ? "bg-primary-800 text-white"
                      : "bg-primary-50 text-primary-800"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <Typo.H3>{item.label}</Typo.H3>
                <p className="font-semibold text-primary-700">{item.formel}</p>
                <Typo.Paragraph>{item.body}</Typo.Paragraph>
                {item.link && (
                  <InternalLink href={item.link.href} className="mt-auto pt-2">
                    {item.link.label}
                  </InternalLink>
                )}
              </SimpleCard>
            );
          })}
        </SimpleGrid>

        <Typo.Paragraph className="mt-10 mx-auto max-w-3xl text-center">
          Ein KI-Agent ist also weder ein Chatbot noch ein starrer Automatismus:
          Er bekommt eine Rolle, arbeitet innerhalb klarer Regeln selbstständig
          und legt Ergebnisse zur Freigabe vor. Wie so ein Agent technisch
          funktioniert und wann sich welcher Ansatz lohnt, schauen wir uns im
          Erstgespräch gemeinsam an Ihren Prozessen an.
        </Typo.Paragraph>
      </ContentWrapper>

      {/* So arbeitet ein Agent in der Kanzlei */}
      <ContentWrapper colorScheme="white">
        <IntroBox size="small">
          <IntroBox.PreHeadline>
            So arbeitet ein Agent in der Kanzlei
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Eine Mandanten-Mail, vier Schritte, eine Freigabe
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Am Beispiel des Mail Agents: So sieht der Weg einer einzigen
            Mandanten-Mail aus, wenn ein Agent den Posteingang betreut.
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <TimelineAsSteps>
            {kanzleiSteps.map((step, i) => (
              <TimelineAsStepsStep key={step.title} value={i + 1}>
                <Typo.H3>{step.title}</Typo.H3>
                <Typo.Paragraph>{step.body}</Typo.Paragraph>
              </TimelineAsStepsStep>
            ))}
          </TimelineAsSteps>

          <div className="lg:sticky lg:top-28 self-start">
            <ComplianceNoticeBox variant="info">
              <ComplianceNoticeBox.Label>
                Das Freigabe-Prinzip
              </ComplianceNoticeBox.Label>
              <ComplianceNoticeBox.Headline>
                Der Agent bereitet vor, Ihr Team verantwortet
              </ComplianceNoticeBox.Headline>
              <ComplianceNoticeBox.Body>
                Kein Agent von Bluebatch versendet, bucht oder erklärt etwas
                ohne menschliche Freigabe. Das ist keine technische
                Einschränkung, sondern Absicht: Als Berufsgeheimnisträger nach
                § 203 StGB bleibt Ihre Kanzlei für jede Auskunft verantwortlich,
                und genau so ist der Prozess gebaut. Die KI übernimmt das
                Vorbereiten, Sortieren und Formulieren, der Sachbearbeiter
                behält den letzten Blick und den Klick.
              </ComplianceNoticeBox.Body>
              <ComplianceNoticeBox.Footnote>
                Betrieb DSGVO-konform mit EU-Hosting und § 203-konformem Setup,
                auf Wunsch mit eigenem Schlüssel (BYOK).
              </ComplianceNoticeBox.Footnote>
            </ComplianceNoticeBox>
          </div>
        </div>
      </ContentWrapper>

      {/* Agenten-Katalog */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Die Agenten im Überblick</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Drei digitale Sachbearbeiter für Ihre Kanzlei
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Jeder Agent übernimmt eine klar umrissene Rolle: Posteingang,
            Mandantenservice oder Jahresabschluss. Alle drei arbeiten mit
            DATEV-Anbindung und nach dem Freigabe-Prinzip. Auf den Detailseiten
            finden Sie Ablauf, Schnittstellen und Zahlen aus der Praxis.
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="mt-12">
          <ProductTileGrid items={agents} cols={3} />
        </div>
      </ContentWrapper>

      {/* Einführung in der Kanzlei */}
      <ContentWrapper colorScheme="white">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Einführung in der Kanzlei</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Ein Agent, ein Prozess, ein Pilot
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Die häufigste Frage ist nicht ob, sondern wie man anfängt. Unsere
            Antwort: klein und messbar. Kein Großprojekt, sondern ein Agent für
            einen Prozess, mit echten Fällen und klaren Kriterien.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={3} className="mt-12">
          {einfuehrung.map((item) => {
            const Icon = item.icon;
            return (
              <SimpleCard key={item.title} align="left">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-800">
                  <Icon className="h-6 w-6" />
                </span>
                <p className="text-xs font-bold uppercase tracking-widest text-primary-600">
                  {item.step}
                </p>
                <Typo.H3>{item.title}</Typo.H3>
                <Typo.Paragraph>{item.body}</Typo.Paragraph>
              </SimpleCard>
            );
          })}
        </SimpleGrid>

        <div className="mt-12 text-center max-w-2xl mx-auto">
          <Typo.Paragraph>
            Ob ein halbtägiger Workshop zum Einstieg oder direkt der Pilot der
            bessere Weg ist, hängt davon ab, wo Ihre Kanzlei steht. Erzählen Sie
            uns kurz, wo es bei Ihnen klemmt, und wir sagen Ihnen ehrlich, ob
            ein Agent dafür das richtige Werkzeug ist.
          </Typo.Paragraph>
          <ContactButton icon="chat">Erstgespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      {/* FAQ */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer faqs={faqs}>
          <FaqContainer.Headline>
            Häufige Fragen zu KI-Agenten in der Kanzlei
          </FaqContainer.Headline>
        </FaqContainer>
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
