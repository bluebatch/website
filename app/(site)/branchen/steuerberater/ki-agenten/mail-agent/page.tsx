import type { Metadata } from "next";
import { resolveHref } from "@/lib/get-canonical-path";
import {
  Inbox,
  PenLine,
  Database,
  CalendarClock,
  FileUp,
  Share2,
  ShieldCheck,
  Plug,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import GeoSummary from "@/components/ui/geo-summary";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import IntroBox from "@/components/ui/intro-box";
import KpiCard from "@/components/cards/kpi-card";
import StatsLeadHero from "@/components/heroes/stats-lead-hero";
import ContactButton from "@/components/buttons/contact-button";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/ui/timeline-as-steps";
import ComparisonCard, {
  BeforeCard,
  AfterCard,
  ComparisonHeadline,
  ComparisonList,
  ComparisonListItem,
  ComparisonFooter,
} from "@/components/cards/comparison-card";
import { FaqContainer } from "@/components/ui/faqs";
import InternalLink from "@/components/buttons/internal-link";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import CostCalculator from "./_components/cost-calculator";

const DESCRIPTION =
  "Der Mail Agent liest Mandanten-Mails, erkennt den Mandanten in DATEV und schreibt Antwortentwürfe im Kanzlei-Ton. Kein SaaS: installiert direkt in Ihrer Kanzlei, Mails und Akten bleiben im Haus, nur die KI-Anfrage verlässt sie. Ihr Team prüft und gibt frei.";

export const metadata: Metadata = {
  title: "Mail Agent für Steuerberater: Mandanten-Mails mit KI | Bluebatch",
  description: DESCRIPTION,
  openGraph: {
    title: "Mail Agent für Steuerberater, Mandanten-Mails mit KI",
    description: DESCRIPTION,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Mail%20Agent%20f%C3%BCr%20Steuerberater%3A%20Mandanten-Mails%20mit%20KI&eyebrow=Steuerberater",
        width: 1200,
        height: 630,
        alt: "Bluebatch, Mail Agent für Steuerberater",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mail Agent für Steuerberater, Mandanten-Mails mit KI",
    description: DESCRIPTION,
    images: ["/og?title=Mail%20Agent%20f%C3%BCr%20Steuerberater%3A%20Mandanten-Mails%20mit%20KI&eyebrow=Steuerberater"],
  },
  alternates: {
    canonical: "/branchen/steuerberater/ki-agenten/mail-agent",
  },
};

const features = [
  {
    icon: Inbox,
    title: "Mails lesen und einordnen",
    body: "Der Agent liest jede eingehende Mail, erkennt den Absender und klassifiziert nach Thema und Dringlichkeit.",
  },
  {
    icon: PenLine,
    title: "Entwürfe im Kanzlei-Ton",
    body: "Er formuliert kontextbezogene Antwortentwürfe im Stil Ihrer Kanzlei, sodass Ihr Team nur noch prüfen muss.",
  },
  {
    icon: Database,
    title: "Mandant aus DATEV erkennen",
    body: "Die Mail wird der richtigen Mandantenakte zugeordnet. Für die Antwort zieht der Agent den passenden Kontext aus der Akte.",
  },
  {
    icon: CalendarClock,
    title: "Fristen erkennen",
    body: "Fristen und Termine werden erkannt und als Wiedervorlage oder Reminder angelegt, damit nichts durchrutscht.",
  },
  {
    icon: FileUp,
    title: "Belege nachfordern und ablegen",
    body: "Fehlende Belege werden automatisch nachgefordert, der Rücklauf verfolgt und Dokumente ins DATEV DMS abgelegt.",
  },
  {
    icon: Share2,
    title: "Sortieren und weiterleiten",
    body: "Der Agent filtert Noise heraus und routet jede Mail an die zuständige Person, sortiert nach Mandant und Priorität.",
  },
];

const categories = [
  {
    title: "Finanzamt / Behörde",
    example: "Bescheide, Fristsetzungen und Rückfragen vom Amt",
    chip: "bg-cta-100 text-cta-700",
  },
  {
    title: "Rückfrage Mandant",
    example: "Fragen zu Steuer, Buchhaltung oder Unterlagen",
    chip: "bg-primary-100 text-primary-700",
  },
  {
    title: "Neuer Beleg",
    example: "Rechnungen, Quittungen, Kontoauszüge als Anhang",
    chip: "bg-green-100 text-green-700",
  },
  {
    title: "Fristsache",
    example: "Alles mit Termin oder Deadline, priorisiert",
    chip: "bg-red-100 text-red-700",
  },
  {
    title: "Terminanfrage",
    example: "Mandant möchte einen Termin vereinbaren",
    chip: "bg-secondary-100 text-secondary-700",
  },
  {
    title: "Rechnung / Zahlung",
    example: "Eingangsrechnungen und Zahlungsavise",
    chip: "bg-primary-100 text-primary-700",
  },
  {
    title: "Statusanfrage",
    example: "Wo steht meine Steuererklärung gerade?",
    chip: "bg-green-100 text-green-700",
  },
  {
    title: "Spam / Noise",
    example: "Newsletter, Werbung und Irrelevantes",
    chip: "bg-gray-200 text-gray-600",
  },
];

const steps = [
  {
    title: "Mail geht ein",
    body: "Eine Mandanten-Mail landet im Postfach, egal ob Rückfrage, Beleg, Frist oder Statusanfrage.",
  },
  {
    title: "Analyse und Zuordnung",
    body: "Der Agent liest die Mail, erkennt den Mandanten in DATEV und klassifiziert Thema und Dringlichkeit.",
  },
  {
    title: "Entwurf mit Kontext",
    body: "Aus der Mandantenakte zieht er den passenden Kontext und schreibt einen Antwortentwurf im Kanzlei-Ton.",
  },
  {
    title: "Prüfen und freigeben",
    body: "Ihr Team sieht den Entwurf, passt bei Bedarf an und gibt frei. Kein Versand ohne Freigabe.",
  },
  {
    title: "Versand und Ablage",
    body: "Die Antwort geht raus, Belege wandern ins DMS, Fristen landen als Wiedervorlage.",
  },
];

const faqs = [
  {
    question: "Antwortet der Agent selbstständig auf Mandanten?",
    answer:
      "Nein. Der Mail Agent arbeitet nach dem Human-in-the-Loop-Prinzip: Er bereitet Entwürfe vor, Ihr Team prüft und gibt frei. Vollautomatischer Versand ohne Freigabe ist nicht vorgesehen.",
  },
  {
    question: "Woher kennt der Agent den Mandanten?",
    answer:
      "Über die DATEV-Anbindung. Er erkennt den Mandanten, ordnet die Mail der richtigen Akte zu und nutzt deren Kontext für die Antwort.",
  },
  {
    question: "Wie wird der Agent an unser Postfach angebunden?",
    answer:
      "Über die Microsoft Graph API. Der Agent liest und schreibt in Ihrem Microsoft-365-Postfach mit klar abgegrenzten Berechtigungen, ohne dass Sie ein neues Mailprogramm einführen müssen.",
  },
  {
    question: "Wie läuft die Anbindung an DATEV?",
    answer:
      "Über die DATEVconnect-Schnittstelle. Damit erkennt der Agent den Mandanten, nutzt den Aktenkontext für die Antwort und legt Belege im DATEV DMS ab. DATEV bleibt das führende System.",
  },
  {
    question: "Ist das DSGVO- und § 203-konform?",
    answer:
      "Ja. Der Agent läuft in Ihrer Kanzlei, Mandanten-Mails und Akten bleiben im Haus. Nur die KI-Anfrage geht in eine DSGVO-konforme EU-Umgebung mit AVV, ohne Training mit Ihren Daten, auf Wunsch mit eigenem Schlüssel (BYOK). Wie wir das aufsetzen, zeigen wir auf der Seite Claude Cowork.",
  },
  {
    question: "Was unterscheidet den Mail Agent von fertigen SaaS-Tools?",
    answer:
      "SaaS-E-Mail-Tools verarbeiten Ihre Mandanten-Mails auf den Servern des Anbieters und kosten dauerhaft pro Monat oder Postfach. Den Mail Agent installiert Bluebatch direkt in Ihrer Kanzlei: Postfach, Akten und Belege bleiben im Haus, nur die KI-Anfrage verlässt sie. Die Implementierung wird auf Ihre Kategorien und Ihren Kanzlei-Ton eingerichtet und gehört danach Ihrer Kanzlei.",
  },
  {
    question: "Wie lange dauert die Einführung?",
    answer:
      "In der Regel wenige Tage: Anbindung an Microsoft 365 und DATEVconnect, Abstimmung von Kategorien und Kanzlei-Ton, dann ein Pilotbetrieb mit echten Mails, in dem Ihr Team jede Antwort prüft. Danach läuft der Agent im Alltag, und Ihr Team klickt nur noch auf Freigeben.",
  },
];

function SystemCard({
  icon: Icon,
  name,
  items,
}: {
  icon: typeof Inbox;
  name: string;
  items: string[];
}) {
  return (
    <div className="flex flex-col rounded-2xl border-2 border-primary-200 bg-white p-6 shadow-sm">
      <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-primary-50 text-primary-800">
        <Icon className="h-6 w-6" />
      </span>
      <p className="text-lg font-bold text-gray-900">{name}</p>
      <ul className="mt-3 space-y-1.5 text-sm text-gray-600">
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

function ApiConnector({ label }: { label: string }) {
  return (
    <div className="flex flex-row items-center justify-center gap-2 lg:flex-col">
      <ArrowRight className="h-6 w-6 rotate-90 text-primary-400 lg:rotate-0" />
      <span className="rounded-full bg-primary-100 px-3 py-1 text-center text-xs font-semibold text-primary-700">
        {label}
      </span>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <StatsLeadHero>
        <StatsLeadHero.PreHeadline>
          Use Case Steuerberater
        </StatsLeadHero.PreHeadline>
        <StatsLeadHero.Headline>
          Der Mail Agent für Steuerkanzleien
        </StatsLeadHero.Headline>
        <GeoSummary>
          Der Mail Agent von Bluebatch ist ein KI-Agent für Steuerkanzleien,
          der Mandanten-Mails liest, den Mandanten über DATEVconnect erkennt
          und Antwortentwürfe im Kanzlei-Ton schreibt. Anders als SaaS-Tools
          wird der Agent direkt in der Kanzlei installiert: Mails und Akten
          bleiben im Haus, nur die KI-Anfrage verlässt sie. Das Kanzleiteam
          gibt jede Antwort frei, der E-Mail-Aufwand sinkt um rund 60 Prozent.
        </GeoSummary>
        <StatsLeadHero.Cta>
          <ContactButton icon="chat">Demo anfragen</ContactButton>
        </StatsLeadHero.Cta>
        <StatsLeadHero.Stats>
          <KpiCard value={60} suffix=" %" subtitle="Weniger E-Mail-Aufwand" />
          <KpiCard
            valueText="DATEV"
            subtitle="Mandant und Akte automatisch erkannt"
          />
          <KpiCard
            value={100}
            suffix=" %"
            subtitle="Freigabe durch Ihr Team, kein Autoversand"
          />
        </StatsLeadHero.Stats>
        <StatsLeadHero.Media
          src="/images/data-flow.jpg"
          alt="Automatisierter Mail-Fluss in der Steuerkanzlei"
        />
      </StatsLeadHero>

      {/* Pain: Das Nadelöhr Posteingang */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Der Kanzlei-Alltag</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Das Nadelöhr Ihrer Kanzlei ist das Postfach
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Nicht die Beratung frisst die Zeit, sondern das Drumherum: lesen,
            zuordnen, Kontext in DATEV suchen, tippen. Drei Situationen, die
            jede Kanzlei kennt:
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={3} className="mt-12">
          <SimpleCard align="left">
            <Typo.H3>
              &bdquo;Warum antwortet mir niemand?&ldquo;
            </Typo.H3>
            <Typo.Paragraph>
              Der Mandant ruft an. Die Mail lag drei Tage ungelesen im
              Sammelpostfach, weil sie zwischen Newslettern und Belegen
              unterging.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <Typo.H3>Alle gesehen, niemand zuständig</Typo.H3>
            <Typo.Paragraph>
              Vier Leute haben die Mail geöffnet. Ohne klare Zuordnung bleibt
              am Ende jede Mail Chefsache, und der Chef hat keine Zeit.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <Typo.H3>Die Frist stand nur im Postfach</Typo.H3>
            <Typo.Paragraph>
              Was nicht in DATEV oder im Kalender steht, geht unter. Eine
              Einspruchsfrist, die nur in einer Mail hängt, ist ein Risiko.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>

        <Typo.Paragraph className="mx-auto mt-10 max-w-2xl text-center text-gray-600">
          Die Rechnung dahinter: Bei rund 80 eingehenden Mails am Tag und 3 bis
          5 Minuten pro Mail stecken schnell über 20 Stunden pro Woche allein
          im Postfach. Der Kostenrechner weiter unten rechnet das für Ihre
          Kanzlei durch.
        </Typo.Paragraph>
      </ContentWrapper>

      {/* Was der Agent übernimmt */}
      <ContentWrapper colorScheme="white">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Was der Mail Agent übernimmt</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Vom vollen Postfach zum geordneten Freigabe-Stapel
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Der Agent nimmt Ihnen die Routine aus dem Postfach ab, die eigentliche
            Beratung bleibt bei Ihnen.
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

      {/* Klassifizierung */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Klassifizierung</IntroBox.PreHeadline>
          <IntroBox.Headline>Jede Mail bekommt sofort ihre Kategorie</IntroBox.Headline>
          <IntroBox.Paragraph>
            Der Agent sortiert eingehende Mails in klare Klassen. Und zwar immer
            nach denselben Regeln, unabhängig von Person, Tagesform oder Postfach.
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-gray-200 bg-white p-4"
            >
              <span
                className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${c.chip}`}
              >
                {c.title}
              </span>
              <p className="mt-2 text-sm text-gray-600">{c.example}</p>
            </div>
          ))}
        </div>
        <Typo.Paragraph className="mt-6 text-center text-sm text-gray-500">
          Kategorien und Regeln stimmen wir auf Ihre Kanzlei ab.
        </Typo.Paragraph>
      </ContentWrapper>

      {/* Architektur & Integrationen */}
      <ContentWrapper colorScheme="white">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Architektur & Integrationen</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Zwischen Microsoft 365 und DATEV, genau da sitzt der Agent
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Der Agent ergibt gerade deshalb Sinn, weil beide Seiten offene
            Schnittstellen haben: Er liest das Postfach über die Microsoft Graph
            API und arbeitet über DATEVconnect mit der Mandantenakte. Kein neues
            Programm, keine Migration.
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[1fr_auto_1.1fr_auto_1fr]">
          <SystemCard
            icon={Inbox}
            name="Microsoft 365"
            items={[
              "Postfach und Outlook",
              "Eingehende Mails und Anhänge",
              "Ordner und Kategorien",
            ]}
          />
          <ApiConnector label="Microsoft Graph API" />
          <div className="flex flex-col rounded-2xl border-2 border-primary-600 bg-primary-800 p-6 text-white shadow-md">
            <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white">
              <Sparkles className="h-6 w-6" />
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-primary-200">
              Mail Agent
            </span>
            <p className="text-lg font-bold">Installiert in Ihrer Kanzlei</p>
            <ul className="mt-3 space-y-1.5 text-sm text-primary-100">
              <li>Liest und klassifiziert jede Mail</li>
              <li>Zieht Aktenkontext für die Antwort</li>
              <li>Schreibt den Entwurf im Kanzlei-Ton</li>
              <li>KI-Anfragen an verwaltete EU-Umgebung</li>
            </ul>
          </div>
          <ApiConnector label="DATEVconnect" />
          <SystemCard
            icon={Database}
            name="DATEV"
            items={[
              "Mandantenakte und Stammdaten",
              "DATEV DMS für Belege",
              "Fristen und Wiedervorlage",
            ]}
          />
        </div>

        <SimpleGrid cols={2} className="mt-12">
          <SimpleCard align="left">
            <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-800">
              <Plug className="h-6 w-6" />
            </span>
            <Typo.H3>Microsoft 365 über die Graph API</Typo.H3>
            <Typo.Paragraph>
              Der Agent hängt sich per Microsoft Graph API direkt an Ihr
              Microsoft-365-Postfach. Er liest eingehende Nachrichten und Anhänge,
              arbeitet mit Ordnern und Kategorien und legt fertige Antwortentwürfe
              zurück in Outlook, wo Ihr Team sie freigibt. Der Zugriff läuft über
              klar abgegrenzte Berechtigungen, nur auf die Postfächer, die Sie
              freigeben.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-800">
              <Database className="h-6 w-6" />
            </span>
            <Typo.H3>DATEV über DATEVconnect</Typo.H3>
            <Typo.Paragraph>
              Zur DATEV-Seite spricht der Agent über die
              DATEVconnect-Schnittstelle. Darüber erkennt er den Mandanten, zieht
              Stammdaten und Aktenkontext für die Antwort, legt Belege ins DATEV
              DMS und kann Fristen als Wiedervorlage anlegen. DATEV bleibt das
              führende System, der Agent koppelt sich an, statt etwas zu ersetzen.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* Deployment: In der Kanzlei installiert, kein SaaS */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Kein SaaS</IntroBox.PreHeadline>
          <IntroBox.Headline>
            In Ihrer Kanzlei installiert, nicht in fremder Cloud
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Fertige E-Mail-Tools laufen als SaaS: Ihre Mandanten-Mails werden
            auf den Servern des Anbieters verarbeitet. Der Mail Agent von
            Bluebatch geht den anderen Weg. Wir installieren ihn direkt in
            Ihrer Kanzlei, auf Ihrer Infrastruktur. Postfach, Akten und Belege
            bleiben im Haus. Nur die eigentliche KI-Anfrage verlässt die
            Kanzlei, in eine verwaltete EU-Umgebung, auf Wunsch mit eigenem
            Schlüssel.
          </IntroBox.Paragraph>
        </IntroBox>

        {/* Datenfluss-Grafik: Kanzlei-Perimeter + einzige Außenverbindung */}
        <div className="mt-12 flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
          <div className="relative flex-1 rounded-3xl border-2 border-primary-600 bg-white p-6 pt-9 shadow-sm">
            <span className="absolute -top-3.5 left-6 inline-flex items-center gap-1.5 rounded-full bg-primary-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              <ShieldCheck className="h-3.5 w-3.5" />
              Ihre Kanzlei
            </span>
            <div className="grid grid-cols-1 items-center gap-3 sm:grid-cols-[1fr_auto_1.1fr_auto_1fr]">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-center">
                <Inbox className="mx-auto h-6 w-6 text-primary-700" />
                <p className="mt-2 text-sm font-bold text-gray-900">
                  Microsoft 365
                </p>
                <p className="text-xs text-gray-500">Postfach & Outlook</p>
              </div>
              <ArrowRight className="mx-auto h-5 w-5 rotate-90 text-primary-400 sm:rotate-0" />
              <div className="rounded-xl border-2 border-primary-300 bg-primary-50 p-4 text-center">
                <Sparkles className="mx-auto h-6 w-6 text-primary-700" />
                <p className="mt-2 text-sm font-bold text-gray-900">
                  Mail Agent
                </p>
                <p className="text-xs text-gray-600">
                  läuft auf Ihrer Infrastruktur
                </p>
              </div>
              <ArrowRight className="mx-auto h-5 w-5 rotate-90 text-primary-400 sm:rotate-0" />
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-center">
                <Database className="mx-auto h-6 w-6 text-primary-700" />
                <p className="mt-2 text-sm font-bold text-gray-900">DATEV</p>
                <p className="text-xs text-gray-500">Akte, DMS, Fristen</p>
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-gray-500">
              Mails, Anhänge, Akten und Belege bleiben innerhalb dieser Grenze
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-1 px-2">
            <span className="rounded-full bg-gray-200 px-3 py-1 text-center text-xs font-semibold text-gray-600">
              nur die KI-Anfrage
            </span>
            <svg
              className="h-6 w-16 rotate-90 text-primary-400 lg:rotate-0"
              viewBox="0 0 64 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M2 12h52" strokeDasharray="6 5" />
              <path d="M48 5l8 7-8 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="rounded-3xl border-2 border-gray-300 bg-gray-900 p-6 text-white lg:w-64">
            <Sparkles className="h-6 w-6 text-secondary-400" />
            <p className="mt-2 text-sm font-bold">KI, verwaltete EU-Umgebung</p>
            <ul className="mt-3 space-y-1.5 text-xs text-gray-300">
              <li>AVV, kein Training mit Ihren Daten</li>
              <li>Auf Wunsch eigener Schlüssel (BYOK)</li>
              <li>Antwort geht zurück in die Kanzlei</li>
            </ul>
          </div>
        </div>

        <SimpleGrid cols={3} className="mt-12">
          <SimpleCard align="left">
            <Typo.H3>Keine Mandanten-Mails auf Fremdservern</Typo.H3>
            <Typo.Paragraph>
              Kein Anbieter-Portal, kein drittes System, durch das Ihre
              Kommunikation läuft. Der Agent arbeitet dort, wo Ihre Daten
              ohnehin liegen.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <Typo.H3>Auf Ihre Kanzlei eingerichtet</Typo.H3>
            <Typo.Paragraph>
              Kategorien, Ton und Regeln werden bei der Einrichtung auf Ihre
              Kanzlei abgestimmt, statt aus einem Standard-Baukasten zu kommen.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <Typo.H3>Einmal implementiert, gehört er Ihnen</Typo.H3>
            <Typo.Paragraph>
              Keine Abo-Abhängigkeit pro Postfach: Die Implementierung gehört
              Ihrer Kanzlei, Bluebatch übernimmt auf Wunsch Wartung und
              Weiterentwicklung.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* Manuell vs. Mail Agent */}
      <ContentWrapper colorScheme="white">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Manuell vs. Mail Agent</IntroBox.PreHeadline>
          <IntroBox.Headline>Schneller, und immer gleich</IntroBox.Headline>
          <IntroBox.Paragraph>
            Zwei Dinge machen den Unterschied: das Tempo, und dass jede Mail nach
            denselben Regeln behandelt wird, statt nach Tagesform.
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="mt-12">
          <ComparisonCard>
            <BeforeCard>
              <ComparisonHeadline>Manuell</ComparisonHeadline>
              <ComparisonList>
                <ComparisonListItem>
                  Jede Mail einzeln lesen, einordnen, Kontext zusammensuchen
                </ComparisonListItem>
                <ComparisonListItem>
                  Klassifizierung hängt von Person und Tagesform ab
                </ComparisonListItem>
                <ComparisonListItem>
                  Antwortzeiten schwanken, Fristen können untergehen
                </ComparisonListItem>
                <ComparisonListItem>
                  Bei Urlaub oder Krankheit bleibt das Postfach liegen
                </ComparisonListItem>
              </ComparisonList>
              <ComparisonFooter>Minuten pro Mail, uneinheitlich</ComparisonFooter>
            </BeforeCard>

            <AfterCard>
              <ComparisonHeadline>Mit Mail Agent</ComparisonHeadline>
              <ComparisonList>
                <ComparisonListItem>
                  In Sekunden vorsortiert, der Entwurf liegt bereit
                </ComparisonListItem>
                <ComparisonListItem>
                  Jede Mail nach denselben Regeln klassifiziert
                </ComparisonListItem>
                <ComparisonListItem>
                  Fristen automatisch erkannt, konstante Reaktionszeit
                </ComparisonListItem>
                <ComparisonListItem>
                  Läuft weiter, auch wenn das Team nicht da ist
                </ComparisonListItem>
              </ComparisonList>
              <ComparisonFooter>Sekunden pro Mail, immer gleich</ComparisonFooter>
            </AfterCard>
          </ComparisonCard>
        </div>
      </ContentWrapper>

      {/* Human-in-the-Loop */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <div className="text-center">
          <Typo.H2 className="mb-4">Immer mit Freigabe, nie ungefragt</Typo.H2>
          <Typo.Paragraph className="text-gray-600">
            Jeder Entwurf ist ein Vorschlag, keine Automatik. Der Mail Agent
            bereitet vor, Ihr Team entscheidet: Jede Antwort wird geprüft und
            freigegeben, bevor sie an den Mandanten geht. So bekommen Sie das
            Tempo der KI, ohne die Kontrolle über den Außenauftritt Ihrer
            Kanzlei abzugeben.
          </Typo.Paragraph>
        </div>
      </ContentWrapper>

      {/* Workflow */}
      <ContentWrapper colorScheme="white" bodyWidth="small">
        <IntroBox size="small">
          <IntroBox.PreHeadline>So läuft eine Mail durch</IntroBox.PreHeadline>
          <IntroBox.Headline>
            In fünf Schritten vom Eingang zur Antwort
          </IntroBox.Headline>
        </IntroBox>

        <div className="mx-auto mt-12 max-w-2xl">
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

      {/* Kostenrechner */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Was es bringt</IntroBox.PreHeadline>
          <IntroBox.Headline>Kostenrechner für Ihr Postfach</IntroBox.Headline>
          <IntroBox.Paragraph>
            Stundensatz, Postfächer und E-Mail-Aufkommen eintragen, den Rest
            rechnet die Seite. Alle Annahmen sind offengelegt.
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="mt-12">
          <CostCalculator />
        </div>
      </ContentWrapper>

      {/* Compliance */}
      <ContentWrapper colorScheme="white">
        <SimpleGrid cols={2} className="items-center gap-8 md:gap-12">
          <div>
            <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-800">
              <ShieldCheck className="h-6 w-6" />
            </span>
            <Typo.H2 className="mb-4">DSGVO- und § 203-konform</Typo.H2>
            <Typo.Paragraph className="mb-6 text-gray-600">
              Mandanten-Mails fallen unter das Berufsgeheimnis. Der Mail Agent
              läuft deshalb auf DSGVO-konformer EU-Infrastruktur, mit AVV, ohne
              Training mit Ihren Daten und mit einem § 203-konformen Setup.
            </Typo.Paragraph>
            <InternalLink
              href={resolveHref("/branchen/steuerberater/claude-cowork")}
            >
              Wie wir Claude DSGVO- & § 203-konform aufsetzen
            </InternalLink>
          </div>
          <div>
            <Typo.H3 className="mb-3">
              Passt zu Ihrer Kanzlei-Automatisierung
            </Typo.H3>
            <Typo.Paragraph className="mb-4 text-gray-600">
              Der Mail Agent greift ineinander mit den anderen Bausteinen für die
              Kanzlei, von der Mandantenkommunikation bis zur Belegverarbeitung.
            </Typo.Paragraph>
            <div className="flex flex-col items-start gap-3">
              <InternalLink
                href={resolveHref(
                  "/branchen/steuerberater/ki-agenten/mandantenkommunikation",
                )}
              >
                KI-Mandantenkommunikation
              </InternalLink>
              <InternalLink
                href={resolveHref(
                  "/branchen/steuerberater/workflows/dokumentenverarbeitung",
                )}
              >
                Dokumentenverarbeitung
              </InternalLink>
              <InternalLink href={resolveHref("/branchen/steuerberater")}>
                Alle Use Cases für Steuerberater
              </InternalLink>
            </div>
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* FAQ */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer faqs={faqs}>
          <FaqContainer.Headline>
            Häufige Fragen zum Mail Agent
          </FaqContainer.Headline>
        </FaqContainer>
      </ContentWrapper>

      {/* CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
