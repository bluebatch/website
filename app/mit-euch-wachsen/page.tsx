import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import IntroBox from "@/components/ui/intro-box";
import ContactButton from "@/components/buttons/contact-button";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import Icon from "@/components/ui/icon";
import { ArrowRight, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Mit euch wachsen — vom Workshop zur eigenen AI-Plattform | Bluebatch",
  description:
    "Ein KI-Partner, der mit euch wächst: vom Use-Case-Workshop (ab 1.000 €) über feste Engineer-Kapazität pro Monat bis zur eigenen Enterprise-Plattform. Transparente Leistung, klare Pakete.",
  openGraph: {
    title: "Mit euch wachsen — vom Workshop zur eigenen AI-Plattform",
    description:
      "Ein KI-Partner, der mit euch wächst: vom Use-Case-Workshop über feste Engineer-Kapazität bis zur eigenen AI-Plattform.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Mit Bluebatch wachsen — vom Workshop zur AI-Plattform",
      },
    ],
  },
  alternates: {
    canonical: "/mit-euch-wachsen",
  },
};

/* -------------------------------------------------------------------------- */
/*  Daten (aus pricing.md)                                                     */
/* -------------------------------------------------------------------------- */

interface Tier {
  id: string;
  title: string;
  price: string;
  unit: string;
  description: string;
  features: string[];
  href?: { label: string; url: string };
  highlighted?: boolean;
}

const sizeS: Tier[] = [
  {
    id: "S1",
    title: "Use-Case-Workshop + Schulung",
    price: "1.750 €",
    unit: "einmalig",
    description:
      "Wir setzen uns mit eurem Team zusammen, finden mit Claude die besten Use-Cases und ihr nehmt direkt einen ersten Mini-Workflow mit.",
    features: [
      "Use-Case-Workshop mit Claude",
      "Ein Mini-Workflow startklar",
      "Hands-on-Schulung fürs Team",
    ],
    href: { label: "Zu den Schulungen", url: "/n8n-schulung" },
  },
  {
    id: "S2",
    title: "Ein fertiger Workflow",
    price: "8.000 €",
    unit: "einmalig",
    description:
      "Ein produktiver Standard-Workflow ohne Custom-Anpassung, z. B. OCR-Belegerfassung. Im M-Paket kostenfrei enthalten.",
    features: [
      "Ein produktiver Workflow",
      "z. B. OCR- / PDF-Verarbeitung",
      "Im M-Paket inklusive",
    ],
    href: { label: "Use-Cases ansehen", url: "/use-cases" },
  },
];

interface CapacityTier extends Tier {
  head: 1 | 2 | 3 | 4;
}

const sizeM: CapacityTier[] = [
  {
    id: "M0",
    title: "Testphase",
    price: "1.000 €",
    unit: "einmalig",
    head: 1,
    description: "Risikoarm starten und die Zusammenarbeit testen, bevor es monatlich läuft.",
    features: ["Eine erste echte Automatisierung", "Setup & Kennenlernen", "Klarer Fahrplan danach"],
  },
  {
    id: "M1",
    title: "Ein Engineer an Bord",
    price: "3.000 €",
    unit: "pro Monat",
    head: 2,
    description:
      "Ein fester Forward-Deployed-Engineer baut laufend für euch. Geld-zurück in den ersten 3 Monaten.",
    features: ["Workflows & Automationen", "RAG / OpenWebUI", "Integrationen & interne Tools"],
  },
  {
    id: "M2",
    title: "Mehr Kapazität",
    price: "5.000 €",
    unit: "pro Monat",
    head: 3,
    description: "Für Teams, die Automatisierung und KI breiter ausrollen. Mehrere Projekte parallel.",
    features: ["Größere Projekte parallel", "RAG- & KI-Systeme", "Priorisierter Support"],
    highlighted: true,
  },
  {
    id: "M3",
    title: "Euer KI-Team",
    price: "12.000 €",
    unit: "pro Monat",
    head: 4,
    description: "Quasi ein eigenes KI-Team, fest eingeplant in euren Betrieb.",
    features: ["Dediziertes Team", "Komplexe Plattform-Arbeit", "Höchste Priorität"],
  },
];

const mIncluded = [
  {
    title: "Betrieb, Wartung & Monitoring",
    description: "Wir halten eure Systeme am Laufen, 24/7-Monitoring inklusive.",
    url: "/workflow-wartung",
  },
  {
    title: "Claude-Code-Support-Team",
    description: "Ein Engineering-Team mit Claude Code an eurer Seite.",
  },
  {
    title: "Feste Kapazität pro Monat",
    description: "Eingeplante Personentage für Neues und Anpassungen, keine Stückzahl-Bindung.",
  },
  {
    title: "Privater AI-Stack",
    description: "Eigener, DSGVO-konformer AI-Stack, On-Premise oder in Frankfurt.",
    url: "/n8n-hosting-deutschland",
  },
];

const fdeValue = [
  {
    title: "Bauer statt Berater",
    description: "Schreibt echten Production-Code, der bei euch live geht, keine Folien, keine Konzeptpapiere.",
  },
  {
    title: "Von innen statt von außen",
    description: "Dockt direkt an euren Systemen, Daten und Prozessen an und kennt sie nach wenigen Wochen besser als jeder externe Berater.",
  },
  {
    title: "Outcome statt Tickets",
    description: "Misst sich am Ergebnis im Alltag, nicht an abgearbeiteten Tickets. Genau hier scheitern die meisten KI-Projekte sonst.",
  },
  {
    title: "Euer Team wächst mit",
    description: "Wissenstransfer im Vorbeigehen: euer Team sieht, wie gebaut wird, statt in Abhängigkeit zu landen.",
  },
];

interface CompareOption {
  title: string;
  subtitle?: string;
  highlighted?: boolean;
  points: { ok: boolean; text: string }[];
}

const fdeCompare: CompareOption[] = [
  {
    title: "Eigene Einstellung",
    points: [
      { ok: false, text: "Monate Recruiting, bis jemand startet" },
      { ok: false, text: "Fixes Gehalt, auch bei wenig Auslastung" },
      { ok: false, text: "Schwer hoch- oder runterzuskalieren" },
      { ok: true, text: "Person fest im Haus" },
    ],
  },
  {
    title: "Klassische Agentur",
    points: [
      { ok: false, text: "Standard-Templates statt eurer Lösung" },
      { ok: false, text: "Teuer pro Änderung, Projekt-Abrechnung" },
      { ok: false, text: "Kennt eure Systeme nur oberflächlich" },
      { ok: true, text: "Schnell verfügbar" },
    ],
  },
  {
    title: "Forward Deployed Engineer",
    subtitle: "Euer M-Paket",
    highlighted: true,
    points: [
      { ok: true, text: "In Tagen startklar, kein Recruiting" },
      { ok: true, text: "Embedded: kennt eure Systeme von innen" },
      { ok: true, text: "Schreibt echten Production-Code" },
      { ok: true, text: "Wissenstransfer: euer Team lernt mit" },
      { ok: true, text: "Monatlich kündbar, Kapazität flexibel" },
    ],
  },
];

interface LargeTier {
  id: string;
  title: string;
  price: string;
  unit: string;
  description: string;
  features: string[];
}

const sizeL: LargeTier[] = [
  {
    id: "L1",
    title: "Agenten-Plattform",
    price: "ab 60.000 €",
    unit: "Setup · + ab 18.000 € / Monat",
    description:
      "Eine eigene Plattform, auf der KI-Agenten eure Prozesse end-to-end übernehmen. Wir bauen Architektur, Agenten, Guardrails und den laufenden Betrieb, individuell für euch.",
    features: [
      "Multi-Agenten-Architektur",
      "Eigene Tools & Connectoren",
      "RAG auf euren Daten",
      "Rollen, Rechte & Guardrails",
      "Monitoring & Betrieb",
      "Skaliert über Abteilungen",
    ],
  },
  {
    id: "L2",
    title: "Custom ERP mit KI",
    price: "ab 100.000 €",
    unit: "individuell",
    description:
      "Ein KI-natives ERP, auf euren Prozess gebaut, statt euren Prozess in Standardsoftware zu pressen. KI sitzt im Kern, nicht als Add-on obendrauf.",
    features: [
      "Auf euren Prozess gebaut",
      "KI im Kern statt als Add-on",
      "Tiefe System-Integration",
      "Migration aus Altsystemen",
      "Volle Datenhoheit",
      "Langfristige Ownership",
    ],
  },
  {
    id: "L3",
    title: "Enterprise Data Platform",
    price: "auf Anfrage",
    unit: "individuell",
    description:
      "Das Datenfundament für KI im ganzen Unternehmen: zentrale, saubere, DSGVO-konforme Daten über alle Standorte und Abteilungen hinweg.",
    features: [
      "Zentrale Datenplattform",
      "Data Residency & Compliance",
      "Pipelines & Governance",
      "Standortübergreifend",
      "Fundament für jede KI",
      "ISO-konform",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Bausteine                                                                  */
/* -------------------------------------------------------------------------- */

function CompareCard({ option }: { option: CompareOption }) {
  return (
    <div
      className={`flex h-full flex-col rounded-2xl border p-6 ${
        option.highlighted
          ? "border-primary-500 bg-white ring-2 ring-primary-200 shadow-lg"
          : "border-gray-200 bg-white/60"
      }`}
    >
      <div className="mb-4">
        <h4 className={`text-base font-bold ${option.highlighted ? "text-primary-700" : "text-gray-900"}`}>
          {option.title}
        </h4>
        {option.subtitle && (
          <span className="mt-1 inline-flex rounded-full bg-primary-600 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-white">
            {option.subtitle}
          </span>
        )}
      </div>
      <ul className="space-y-2.5">
        {option.points.map((p) => (
          <li key={p.text} className="flex items-start gap-2.5">
            {p.ok ? (
              <Icon.Checkmark size="sm" className="mt-0.5 shrink-0 text-primary-600" />
            ) : (
              <Icon.Cross size="sm" className="mt-0.5 shrink-0 text-gray-300" />
            )}
            <span className={`text-sm ${p.ok ? "text-gray-700" : "text-gray-400"}`}>{p.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SizeHeader({
  label,
  who,
  pricing,
  dark = false,
}: {
  label: string;
  who: string;
  pricing: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <div className="relative inline-flex items-center justify-center px-6 py-3">
        <span
          className={`size-glow absolute inset-0 rounded-full blur-2xl ${
            dark ? "bg-secondary-400/40" : "bg-primary-400/40"
          }`}
        />
        <h2
          className={`size-letter relative text-5xl font-black leading-none tracking-tight sm:text-6xl ${
            dark ? "text-white" : "text-primary-600"
          }`}
        >
          {label}
        </h2>
      </div>
      <p className={`mx-auto mt-5 text-base ${dark ? "text-primary-100" : "text-gray-500"}`}>
        {who}
      </p>
      <div
        className={`mt-5 inline-flex rounded-full px-4 py-1.5 text-sm font-semibold ${
          dark ? "bg-white/10 text-white" : "bg-primary-50 text-primary-700"
        }`}
      >
        {pricing}
      </div>
    </div>
  );
}

function PricingCard({ tier }: { tier: Tier }) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border bg-white p-6 ${
        tier.highlighted ? "border-primary-500 ring-2 ring-primary-200 shadow-lg" : "border-gray-200"
      }`}
    >
      <div className="mb-4 flex items-center gap-2">
        <span className="inline-flex h-7 items-center rounded-md bg-primary-50 px-2 text-xs font-bold text-primary-700">
          {tier.id}
        </span>
        <h3 className="text-lg font-bold text-gray-900">{tier.title}</h3>
      </div>
      <div className="mb-4">
        <div className="text-3xl font-extrabold text-gray-900">{tier.price}</div>
        <div className="text-xs font-medium text-gray-400">{tier.unit}</div>
      </div>
      <p className="mb-5 text-sm text-gray-500">{tier.description}</p>
      <ul className="mb-6 space-y-2.5">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <Icon.Checkmark size="sm" className="mt-0.5 shrink-0 text-primary-600" />
            <span className="text-sm text-gray-700">{f}</span>
          </li>
        ))}
      </ul>
      {tier.href && (
        <Link
          href={tier.href.url}
          className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800"
        >
          {tier.href.label}
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}

/** Wachsender „Kopf" — visualisiert die Engineer-Kapazität (mehr PT = größer). */
function CapacityHead({ head }: { head: 1 | 2 | 3 | 4 }) {
  const px = { 1: 48, 2: 64, 3: 84, 4: 108 }[head];
  return (
    <div className="flex h-28 items-end justify-center">
      <div
        className="size-pop flex items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-primary-800 text-white shadow-md"
        style={{ width: px, height: px }}
      >
        <User style={{ width: px * 0.5, height: px * 0.5 }} strokeWidth={1.75} />
      </div>
    </div>
  );
}

function CapacityCard({ tier }: { tier: CapacityTier }) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border bg-white p-6 text-center ${
        tier.highlighted ? "border-primary-500 ring-2 ring-primary-200 shadow-lg" : "border-gray-200"
      }`}
    >
      {tier.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
          Beliebt
        </span>
      )}

      <CapacityHead head={tier.head} />

      <div className="mt-4 flex items-center justify-center gap-2">
        <span className="inline-flex h-6 items-center rounded-md bg-primary-50 px-2 text-xs font-bold text-primary-700">
          {tier.id}
        </span>
        <h3 className="text-base font-bold text-gray-900">{tier.title}</h3>
      </div>

      <div className="mt-4">
        <div className="text-3xl font-extrabold text-gray-900">{tier.price}</div>
        <div className="text-xs font-medium text-gray-400">{tier.unit}</div>
      </div>

      <p className="mt-4 text-sm text-gray-500">{tier.description}</p>

      <ul className="mt-5 space-y-2 text-left">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <Icon.Checkmark size="sm" className="mt-0.5 shrink-0 text-primary-600" />
            <span className="text-sm text-gray-700">{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LargeCard({ tier }: { tier: LargeTier }) {
  return (
    <div className="rounded-3xl border border-white/15 bg-white/5 p-6 sm:p-10">
      {/* Wert zuerst */}
      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex h-7 items-center rounded-md bg-white/10 px-2.5 text-xs font-bold text-white">
          {tier.id}
        </span>
        <h3 className="text-2xl font-bold text-white sm:text-3xl">{tier.title}</h3>
      </div>

      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-primary-50">
        {tier.description}
      </p>

      <div className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
        {tier.features.map((f) => (
          <div key={f} className="flex items-start gap-2.5">
            <Icon.Checkmark size="sm" className="mt-0.5 shrink-0 text-secondary-400" />
            <span className="text-sm font-medium text-primary-50">{f}</span>
          </div>
        ))}
      </div>

      {/* Preis klein, unten, nur zur Orientierung */}
      <div className="mt-8 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-white/10 pt-5">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary-300">
          Größenordnung
        </span>
        <span className="text-lg font-bold text-white">{tier.price}</span>
        <span className="text-sm text-primary-200">{tier.unit}</span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Seite                                                                      */
/* -------------------------------------------------------------------------- */

export default function Page() {
  return (
    <>
      {/* Hero */}
      <ContentWrapper isFirstSection>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-primary-600">
            Euer Weg mit Bluebatch
          </span>
          <h1 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            Ein System, das mit euch wächst.
          </h1>
          <Typo.Paragraph className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Vom ersten Use-Case-Workshop bis zur eigenen AI-Plattform, in drei Größen.
            Transparente Preise, klare Leistung, keine Black-Box-Angebote. Ihr steigt da
            ein, wo ihr gerade steht, und wachst von dort.
          </Typo.Paragraph>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ContactButton icon="calendar" size="lg">Passende Größe finden</ContactButton>
          </div>
          <div className="mt-6 flex items-center justify-center gap-3 text-sm font-semibold text-gray-400">
            <span>S · Einstieg</span>
            <span className="text-gray-300">→</span>
            <span>M · Kapazität</span>
            <span className="text-gray-300">→</span>
            <span>L · Plattform</span>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-5xl">
          <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gray-200/60">
            <Image
              src="/images/mit-euch-wachsen-hero.png"
              alt="Bluebatch begleitet euch vom ersten Workflow bis zur eigenen AI-Plattform"
              width={1600}
              height={900}
              priority
              className="h-auto w-full"
              sizes="(min-width: 1024px) 64rem, 100vw"
            />
          </div>
        </div>
      </ContentWrapper>

      {/* Kostenloser Einstieg / Lead-Magnet */}
      <ContentWrapper>
        <Link
          href="/ai-onboarding"
          className="group mx-auto flex max-w-4xl flex-col items-start gap-4 rounded-2xl border-2 border-dashed border-primary-200 bg-primary-50/50 p-6 transition-colors hover:border-primary-400 sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-700">
              Kostenlos starten
            </div>
            <h2 className="mt-3 text-xl font-bold text-gray-900">Euer KI-Potenzial-Report</h2>
            <p className="mt-1 max-w-xl text-sm text-gray-600">
              Per Deep-Research aus unserer Kunden-Datenbank: eure individuelle
              Use-Case-Roadmap als PDF. Ohne Kosten, ohne Verpflichtung.
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary-800 px-5 py-3 text-sm font-semibold text-white transition-colors group-hover:bg-primary-700">
            Report erstellen
            <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      </ContentWrapper>

      {/* S — Einstieg */}
      <ContentWrapper colorScheme="white">
        <SizeHeader
          label="Einstieg"
          who="Für den ersten konkreten Schritt: ausprobieren, lernen, einen ersten Workflow mitnehmen. Festpreis, einmalig."
          pricing="Festpreis · einmalig"
        />
        <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
          {sizeS.map((t) => (
            <PricingCard key={t.id} tier={t} />
          ))}
        </div>
      </ContentWrapper>

      {/* M — Kapazität */}
      <ContentWrapper colorScheme="gray-light">
        <SizeHeader
          label="Kapazität"
          who="Statt einem Tool bekommt ihr einen Menschen, der baut: einen festen Forward Deployed Engineer, der bei euch andockt und laufend liefert. Ihr bucht Kapazität, keine Stückzahl."
          pricing="Monatlich · kündbar"
        />

        {/* Warum ein Forward Deployed Engineer */}
        <div className="mb-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-700">
              Was ist ein FDE?
            </div>
            <Typo.H3 className="mt-3">
              Ein Engineer, der bei euch andockt, statt euch Folien zu schicken.
            </Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              Forward Deployed Engineering ist das Modell, das Palantir erfunden hat und
              das Anthropic und OpenAI inzwischen selbst nutzen, um KI in Unternehmen
              wirklich zum Laufen zu bringen. Der Grund: Die meisten KI-Projekte scheitern
              nicht am Modell, sondern an der letzten Meile, an Integration, euren Daten,
              eurem Alltag. Genau dort sitzt euer Engineer und baut, bis es läuft.
            </Typo.Paragraph>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {fdeValue.map((v) => (
              <div key={v.title} className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex items-center gap-2">
                  <Icon.Checkmark size="sm" className="shrink-0 text-primary-600" />
                  <h4 className="font-semibold text-gray-900">{v.title}</h4>
                </div>
                <p className="mt-2 text-sm text-gray-500">{v.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vergleich: FDE vs. Alternativen */}
        <div className="mb-12">
          <h3 className="mb-1 text-center text-xl font-bold text-gray-900">
            Drei Wege, KI ins Haus zu holen
          </h3>
          <p className="mb-6 text-center text-sm text-gray-500">
            Warum der Forward Deployed Engineer für die meisten der schnellste mit dem
            geringsten Risiko ist.
          </p>
          <div className="grid items-stretch gap-5 md:grid-cols-3">
            {fdeCompare.map((o) => (
              <CompareCard key={o.title} option={o} />
            ))}
          </div>
        </div>

        <div className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sizeM.map((t) => (
            <CapacityCard key={t.id} tier={t} />
          ))}
        </div>

        {/* In jedem M-Paket enthalten */}
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">
            In jedem M-Paket enthalten
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Egal ob Workflows, RAG, OpenWebUI oder Integrationen, der Engineer baut, was ihr braucht.
          </p>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {mIncluded.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <Icon.Checkmark size="sm" className="mt-1 shrink-0 text-primary-600" />
                <div>
                  {item.url ? (
                    <Link
                      href={item.url}
                      className="font-semibold text-gray-900 hover:text-primary-700 hover:underline"
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <span className="font-semibold text-gray-900">{item.title}</span>
                  )}
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentWrapper>

      {/* L — Plattform */}
      <ContentWrapper colorScheme="primary-darker">
        <SizeHeader
          label="Plattform"
          who="Für Enterprise: eigene Agenten-Plattform, KI-natives ERP oder Datenplattform. Individuell gebaut, langfristig betrieben."
          pricing="Individuell · auf Anfrage"
          dark
        />
        <div className="space-y-6">
          {sizeL.map((t) => (
            <LargeCard key={t.id} tier={t} />
          ))}
        </div>
      </ContentWrapper>

      {/* CTA */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Noch unsicher?</IntroBox.PreHeadline>
          <IntroBox.Headline>Welche Größe passt zu euch?</IntroBox.Headline>
          <IntroBox.Paragraph>
            In 15 Minuten sortieren wir gemeinsam ein, wo ihr steht, und welche Größe der
            richtige nächste Schritt ist. Unverbindlich.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="flex justify-center">
          <ContactButton icon="calendar" size="lg">Gespräch buchen</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
