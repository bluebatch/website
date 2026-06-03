import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard, { SimpleCardIcon } from "@/components/cards/simple-card";
import ContactButton from "@/components/buttons/contact-button";
import IntroBox from "@/components/ui/intro-box";
import { FaqContainer } from "@/components/ui/faqs";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnCallToAction,
} from "@/components/heroes/hero-2-column";

export const metadata: Metadata = {
  title: "Claude AI Setup für Unternehmen — privat mit EU-Hosting | Bluebatch",
  description:
    "Wir installieren Claude und Claude Cowork bei euch — privat auf EU-Hosting, DSGVO-konform und mit deutschem AVV. Inklusive Großhandel-Insights und Übergabe an euer Team.",
  keywords: [
    "Claude AI Installation",
    "Claude Cowork DSGVO",
    "AI Setup Unternehmen",
    "Claude EU-Hosting",
    "Anthropic Private",
    "Claude Großhandel",
    "DSGVO konforme KI",
    "Bluebatch",
  ],
  openGraph: {
    title:
      "Claude AI Setup für Unternehmen — privat mit EU-Hosting | Bluebatch",
    description:
      "Wir installieren Claude und Claude Cowork bei euch — privat auf EU-Hosting, DSGVO-konform. Mit Großhandel-Insights und Übergabe.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch Claude AI Setup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Claude AI Setup für Unternehmen — privat mit EU-Hosting | Bluebatch",
    description:
      "Wir installieren Claude und Claude Cowork — privat auf EU-Hosting, DSGVO-konform.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/ai-onboarding",
  },
};

const heroFacts = [
  "Claude und Claude Cowork installiert und konfiguriert",
  "Private Einrichtung auf EU-Hosting",
  "DSGVO-AVV mit deutschem Vertragspartner",
  "Insights zu Claude-Use-Cases im Großhandel",
  "Übergabe an euer Team plus 30 Tage Support",
];

const scope = [
  {
    title: "Discovery & Daten-Klärung",
    desc: "Kurzer Workshop (halber Tag): welche Daten sollen rein, welche bleiben draußen, welche Geheimnis-Schutzpflichten gelten. Klare Rollendefinition, was welche Nutzergruppe sehen darf.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    ),
  },
  {
    title: "Claude Private Setup",
    desc: "Anthropic-Enterprise- oder Team-Plan auf EU-Hosting, SSO-Anbindung an Azure AD oder Google Workspace, AVV-Abschluss mit deutschem Vertragspartner, Sub-Processor-Liste dokumentiert.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
  },
  {
    title: "Claude Cowork pro Nutzer",
    desc: "Cowork-Konfiguration pro Nutzer (Browser-Erweiterung oder Desktop), Standard-Prompts und Team-Vorlagen, ein gemeinsames Claude-Project mit eurer Wissensbasis.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
  },
  {
    title: "Compliance-Dokumentation",
    desc: "Schriftlicher Befund zur Datenflusskette, Sub-Processor-Liste mit Risikobewertung, Audit-Log-Konfiguration. Sauberes DSGVO-Setup, das eine Datenschutz-Prüfung übersteht.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    title: "Großhandel-Use-Cases-Session",
    desc: "2-3 Stunden mit eurem Team: konkrete Anwendungsfälle live durchgespielt — Mail-Triage, Angebots-Entwurf, Datenblatt-Recherche, Vertragsanalyse. Ihr seht, wo es bei euch konkret hilft.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
  },
  {
    title: "Übergabe + 30 Tage Support",
    desc: "Schriftliche Doku der Installation, Admin-Handover an eure IT, 30 Tage Reaktions-Support per E-Mail/Slack für Fragen und Anpassungen — danach optional in einen Wartungs-Vertrag oder direkt in Step 2.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
        />
      </svg>
    ),
  },
];

const audiences = [
  {
    label: "CEO & Geschäftsführer",
    description:
      "Du willst KI im Unternehmen ausrollen, aber nicht Schatten-IT und Datenschutz-Risiko in Kauf nehmen. Bootstrap gibt dir einen sauberen, dokumentierten Setup, den du nach außen verteidigen kannst — und auf dem ihr danach echte Workflows aufbauen könnt.",
  },
  {
    label: "Vertriebsleiter",
    description:
      "Dein Team verbringt Stunden mit Angebots-Entwürfen, Mail-Antworten und Kundenrecherche. Mit installiertem Claude Cowork sparen sie ab Tag 1 Routine-Zeit — ohne dass jemand etwas „lernen“ muss, weil die Cowork-Mechanik im Workflow steckt.",
  },
  {
    label: "Produktionsleiter",
    description:
      "Schichtberichte, Wartungs-Dokumentationen, Reklamations-Bearbeitung, Lieferanten-Mails. Office-Tasks rund um Produktion, die Claude exzellent abnimmt. Nach dem Setup steht das Tool bei dir bereit, ohne dass eine eigene IT-Mannschaft aufgebaut werden muss.",
  },
];

const faqs = [
  {
    question: "Wie lange dauert die Installation?",
    answer:
      "Typisch 5-10 Werktage von Kickoff bis Übergabe. Discovery-Workshop am Anfang, danach laufen Setup, Compliance-Doku und Cowork-Konfiguration parallel. Die Großhandel-Insights-Session legen wir an einen festen Termin in Woche 2.",
  },
  {
    question: "Was kommt danach?",
    answer:
      "Auf dem fertigen Bootstrap-Setup können wir anschließend konkrete KI-Workflows bauen — Auftragserfassung, Angebots-Bot, 3-Wege-Rechnungsprüfung, Lieferanten-Recherche auf eurem n8n oder eurer ERP-Anbindung. Das ist ein eigenes Folge-Angebot mit Festpreis nach Audit. Bootstrap ist die Voraussetzung dafür, weil ohne sicheren Claude-Tenant kein produktiver Workflow auf eurem Geschäftsdaten laufen darf.",
  },
  {
    question: "Was ist Claude Cowork?",
    answer:
      "Cowork ist die parallele Arbeitsweise mit Claude — statt Tab-zu-Tab-Wechsel arbeitet Claude in einem geteilten Kontext mit. Der Mitarbeiter formuliert die Aufgabe, Claude liefert einen Entwurf, der Mitarbeiter geht kurz drüber. Macht Standard-Tasks um 30-50 % schneller. Das Setup konfigurieren wir für euer Team, niemand muss eine „Cowork-Methodik“ lernen.",
  },
  {
    question: "Brauchen wir eine eigene IT-Mannschaft?",
    answer:
      "Nein. Wir machen die komplette Installation, dokumentieren das Setup und übergeben an einen Admin (kann ein IT-Dienstleister, Geschäftsführer oder ein technisch versierter Mitarbeiter sein). Während der ersten 30 Tage sind wir per Mail/Slack ansprechbar.",
  },
  {
    question: "Welche Daten gehen zu Anthropic?",
    answer:
      "Nur das, was eure Nutzer aktiv im Chat eingeben. Keine Telemetrie eurer ERP- oder Office-Daten by default. Anthropic nutzt eure Inhalte nicht zum Modelltraining, das ist im Enterprise-/Team-Tarif vertraglich ausgeschlossen. Im Discovery-Workshop legen wir gemeinsam fest, welche Daten überhaupt eingebbar sein sollen.",
  },
  {
    question: "Was kostet das?",
    answer:
      "Festpreis-Angebot nach dem Discovery-Call. Der Endpreis hängt an Nutzerzahl, gewünschter Compliance-Tiefe und der Tiefe der Großhandel-Insights-Session. Die laufende Anthropic-Lizenz (typisch 20-30 € pro Nutzer und Monat) läuft direkt über euren Account, nicht über uns.",
  },
  {
    question: "Müssen wir uns von ChatGPT trennen?",
    answer:
      "Nein. Wir fokussieren auf Claude, weil das Privacy- und Compliance-Setup für DACH-Mittelstand klar besser ist. Wer parallel ChatGPT nutzen will, kann das tun — wir empfehlen aber, sensible Daten ausschließlich über den von uns konfigurierten Claude-Tenant zu verarbeiten.",
  },
  {
    question: "Was passiert nach den 30 Tagen Support?",
    answer:
      "Drei Optionen: (a) kein laufender Support, ihr fahrt eigenständig weiter, (b) Wartungs-Vertrag mit definierter SLA für Anpassungen und Sub-Processor-Updates, (c) wir bauen darauf konkrete KI-Workflows auf — ein eigenes Folge-Angebot mit Festpreis.",
  },
];

export default function Page() {
  return (
    <>
      {/* 1. HERO — left: image, right: text */}
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnMediaColumn>
            <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl shadow-lg lg:max-w-none">
              <Image
                src="/images/claude-cowork.png"
                alt="Claude Cowork — Bluebatch Setup für DACH-Mittelstand"
                width={1080}
                height={1350}
                priority
                className="h-auto w-full"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </Hero2ColumnMediaColumn>

          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Claude-Bootstrap</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Wir installieren Claude bei dir — privat mit EU-Hosting.
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Statt euer Team in das nächste KI-Bootcamp zu schicken, kommen wir
              rein und richten Claude direkt bei euch ein. Privater Tenant auf
              EU-Hosting, AVV mit deutschem Vertragspartner und ein
              Compliance-Level, das auch für Geheimnisträger trägt. Inklusive
              kurzer Insights, wo Claude im Großhandel-Alltag konkret hilft.
            </Hero2ColumnDescription>

            <ul className="mb-8 space-y-2.5">
              {heroFacts.map((fact) => (
                <li key={fact} className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span className="text-base text-gray-800">{fact}</span>
                </li>
              ))}
            </ul>

            <Hero2ColumnCallToAction>
              <ContactButton icon="calendar">Termin buchen</ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 2. VIDEO CENTER */}
      <ContentWrapper colorScheme="gray">
        <IntroBox>
          <IntroBox.PreHeadline>So sieht das aus</IntroBox.PreHeadline>
          <IntroBox.Headline>
            3 Minuten — Claude Cowork in der Praxis
          </IntroBox.Headline>
          <IntroBox.Subline>
            Konkretes Beispiel statt Folien: wie Claude Cowork eine
            Angebots-Anfrage aus dem Postfach in einen fertigen Entwurf
            verwandelt.
          </IntroBox.Subline>
        </IntroBox>

        <div className="mx-auto mt-10 max-w-4xl">
          <div
            className="relative h-0 overflow-hidden rounded-2xl border border-gray-200 bg-black shadow-xl"
            style={{ paddingBottom: "67.28971962616822%" }}
          >
            <iframe
              src="https://www.loom.com/embed/6392d20fc2d34254b4aece6c6d06cba9"
              title="Claude Cowork in der Praxis"
              allow="fullscreen"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/bestellung-erfassen#solution"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-800 hover:underline"
            >
              Vollen Workflow zur Auftragserfassung ansehen
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </ContentWrapper>

      {/* 3. MACHE DEINE FIRMA UND MA AI-READY */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Outcome</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Mach deine Firma und deine Mitarbeiter AI-Ready
          </IntroBox.Headline>
          <IntroBox.Subline>
            Bootstrap ist nicht „wir erklären euch, wie KI funktioniert".
            Bootstrap ist: nach dem Setup hat dein Team Claude einsatzbereit,
            sauber installiert, dokumentiert und mit den ersten konkreten
            Use-Cases für euren Alltag.
          </IntroBox.Subline>
        </IntroBox>

        <div className="mt-16 space-y-20 md:space-y-24">
          {/* Block 1: Text left, Visual right */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-700">
                Privat & Compliance
              </div>
              <Typo.H2 className="mt-3">Claude privat installieren</Typo.H2>
              <Typo.Paragraph textColor="muted">
                Wir richten Claude auf einem eigenen Tenant ein, EU-Hosting, AVV
                mit deutschem Vertragspartner, keine Vermischung mit
                Default-Konsumenten-Accounts. Eure Daten verlassen die EU nicht
                und werden nicht zum Training genutzt.
              </Typo.Paragraph>
              <ul className="mt-4 space-y-2.5">
                {[
                  "Eigener Tenant auf Anthropic-Enterprise-Plan",
                  "EU-Hosting (Frankfurt) statt US-Default",
                  "AVV mit deutschem Vertragspartner",
                  "Dokumentierte Sub-Processor-Kette",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-base text-gray-800">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md md:p-8">
              <div className="flex flex-col items-center gap-3">
                {/* Browser */}
                <div className="flex w-full max-w-xs items-center gap-3 rounded-xl border-2 border-primary-200 bg-primary-50 px-4 py-3">
                  <svg
                    className="h-6 w-6 shrink-0 text-primary-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6A2.25 2.25 0 016 3.75h12A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6zM3.75 9h16.5"
                    />
                  </svg>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      Browser
                    </div>
                    <div className="text-xs text-gray-500">Dein Team</div>
                  </div>
                </div>
                {/* Arrow */}
                <svg
                  className="h-6 w-6 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                  />
                </svg>
                {/* EU Tenant */}
                <div className="flex w-full max-w-xs items-center gap-3 rounded-xl border-2 border-primary-400 bg-primary-100 px-4 py-3 shadow-sm">
                  <svg
                    className="h-6 w-6 shrink-0 text-primary-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      EU-Tenant
                    </div>
                    <div className="text-xs text-primary-800">
                      Eure private Instanz
                    </div>
                  </div>
                </div>
                {/* Arrow */}
                <svg
                  className="h-6 w-6 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                  />
                </svg>
                {/* Anthropic EU */}
                <div className="flex w-full max-w-xs items-center gap-3 rounded-xl border border-gray-300 bg-gray-50 px-4 py-3">
                  <svg
                    className="h-6 w-6 shrink-0 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3"
                    />
                  </svg>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      Anthropic EU
                    </div>
                    <div className="text-xs text-gray-500">
                      Frankfurt-Hosting
                    </div>
                  </div>
                </div>
                {/* Badges */}
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <span className="rounded-full bg-primary-700 px-3 py-1 text-xs font-semibold text-white">
                    EU-Hosting
                  </span>
                  <span className="rounded-full bg-primary-700 px-3 py-1 text-xs font-semibold text-white">
                    AVV
                  </span>
                  <span className="rounded-full bg-primary-700 px-3 py-1 text-xs font-semibold text-white">
                    DSGVO
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Block 2: Visual left, Text right (lg:order-last on text) */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="lg:order-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-700">
                Cowork
              </div>
              <Typo.H2 className="mt-3">Claude Cowork einrichten</Typo.H2>
              <Typo.Paragraph textColor="muted">
                Cowork heißt: parallel mit Claude arbeiten statt
                Tab-zu-Tab-Wechsel. Wir konfigurieren das pro Nutzer und stellen
                Team-Vorlagen plus ein gemeinsames Projekt mit eurer
                Wissensbasis ein.
              </Typo.Paragraph>
              <ul className="mt-4 space-y-2.5">
                {[
                  "Pro-User-Konfiguration inkl. Standard-Prompts",
                  "Team-Vorlagen für wiederkehrende Aufgaben",
                  "Gemeinsames Claude-Project mit eurer Wissensbasis",
                  "Übergabe-Briefing für jeden Nutzer",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-base text-gray-800">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-md lg:order-1">
              {/* Browser chrome */}
              <div className="mb-3 flex items-center gap-1.5 border-b border-gray-200 pb-3">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <div className="ml-2 flex-1 truncate rounded bg-gray-100 px-2 py-1 text-xs text-gray-500">
                  claude.ai/chat
                </div>
              </div>
              {/* Two panes */}
              <div className="grid h-56 grid-cols-[3fr_4fr] gap-2">
                {/* Editor */}
                <div className="rounded-lg bg-gray-50 p-3">
                  <div className="mb-2 text-xs font-semibold text-gray-500">
                    Mail-Entwurf
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full rounded bg-gray-300" />
                    <div className="h-2 w-5/6 rounded bg-gray-300" />
                    <div className="h-2 w-4/6 rounded bg-gray-300" />
                    <div className="h-2 w-3/4 rounded bg-gray-300" />
                    <div className="mt-3 h-2 w-1/2 rounded bg-gray-300" />
                  </div>
                </div>
                {/* Claude side */}
                <div className="rounded-lg border border-primary-200 bg-gradient-to-br from-primary-50 to-secondary-50 p-3">
                  <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-primary-700">
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.091z"
                      />
                    </svg>
                    Claude Cowork
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full rounded bg-primary-300" />
                    <div className="h-2 w-3/4 rounded bg-primary-300" />
                    <div className="h-2 w-5/6 rounded bg-primary-300" />
                    <div className="h-2 w-2/3 rounded bg-primary-300" />
                    <div className="mt-3 inline-flex items-center gap-1 rounded-full border border-primary-300 bg-white px-2.5 py-0.5 text-xs font-medium text-primary-700">
                      ↑ Übernehmen
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Block 3: Text left, Visual right */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-700">
                Großhandel-Insights
              </div>
              <Typo.H2 className="mt-3">
                Konkrete Use-Cases statt Theorie
              </Typo.H2>
              <Typo.Paragraph textColor="muted">
                Aus unserer laufenden Projektarbeit im DACH-Großhandel: wir
                zeigen euch live, wo Claude Cowork sofort hilft. Kein Lehrbuch,
                keine Folien — drei Beispiele, die ihr ab Tag 1 nutzen könnt.
              </Typo.Paragraph>
              <ul className="mt-4 space-y-2.5">
                {[
                  "Mail-Triage und Bestelldaten extrahieren",
                  "Angebots-Entwurf aus Lieferanten-Anfrage",
                  "Vertragsanalyse und Klausel-Vergleich",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-base text-gray-800">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3 rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
              {/* Use case rows */}
              {[
                {
                  fromIcon: (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  ),
                  fromLabel: "Bestell-Mail",
                  toTitle: "Auftrag #2026-447",
                  toMeta: "3 Positionen · 14.250 €",
                },
                {
                  fromIcon: (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                  ),
                  fromLabel: "Anfrage-Mail",
                  toTitle: "Angebot-Entwurf",
                  toMeta: "12.450 € · 14-Tage-Lieferung",
                },
                {
                  fromIcon: (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                  ),
                  fromLabel: "Lieferantenvertrag",
                  toTitle: "Klausel-Analyse",
                  toMeta: "7 Risikopunkte markiert",
                },
              ].map((row) => (
                <div
                  key={row.fromLabel}
                  className="flex items-center gap-3 rounded-xl bg-gray-50 p-3"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-primary-700 shadow-sm">
                    {row.fromIcon}
                  </div>
                  <div className="hidden text-xs font-medium text-gray-500 sm:block">
                    {row.fromLabel}
                  </div>
                  <svg
                    className="h-5 w-5 shrink-0 text-primary-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0-5 5m5-5H6"
                    />
                  </svg>
                  <div className="flex-1 rounded-lg border border-primary-200 bg-white p-2.5">
                    <div className="text-sm font-semibold text-gray-900">
                      {row.toTitle}
                    </div>
                    <div className="text-xs text-gray-500">{row.toMeta}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentWrapper>

      {/* 4. ZIELE UND INHALTE → "Was ist alles dabei" */}
      <ContentWrapper colorScheme="gray">
        <IntroBox>
          <IntroBox.PreHeadline>Leistungsumfang</IntroBox.PreHeadline>
          <IntroBox.Headline>Was ist alles dabei</IntroBox.Headline>
          <IntroBox.Subline>
            Sechs konkrete Bausteine, kein „Beratungspaket" mit unklarem
            Leistungsumfang. Typisch in 5-10 Werktagen abgeschlossen.
          </IntroBox.Subline>
        </IntroBox>

        <SimpleGrid cols={3} className="mt-10">
          {scope.map((item) => (
            <SimpleCard key={item.title} align="left">
              <SimpleCardIcon size="lg" color="primary-gradient">
                {item.icon}
              </SimpleCardIcon>
              <Typo.H3 className="mt-4!">{item.title}</Typo.H3>
              <Typo.Paragraph textColor="muted">{item.desc}</Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      {/* 5. FÜR WEN — CEO, Vertriebsleiter, Produktionsleiter */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Für wen</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Für wen ist Claude-Bootstrap gedacht?
          </IntroBox.Headline>
          <IntroBox.Subline>
            Drei Rollen, drei klare Outcomes. Im Mittelstand entscheidet meist
            einer von dreien über KI-Einführung — wir adressieren bewusst alle
            drei.
          </IntroBox.Subline>
        </IntroBox>

        <SimpleGrid cols={3} className="mt-10">
          {audiences.map((aud) => (
            <SimpleCard key={aud.label} align="left">
              <Typo.H3 className="mt-2!">{aud.label}</Typo.H3>
              <Typo.Paragraph textColor="muted">
                {aud.description}
              </Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      {/* 6. CTA — INTERESSE BOOK A MEETING */}
      <ContentWrapper colorScheme="gradient-cool">
        <div className="mx-auto max-w-3xl rounded-2xl border-2 border-primary-200 bg-white p-8 text-center shadow-md md:p-12">
          <Typo.H2 disableMargin>Interesse? Lass uns reden.</Typo.H2>
          <Typo.Paragraph className="mt-4" textColor="muted">
            15-Minuten-Call: du erzählst kurz, wie groß das Team ist und welche
            Compliance-Anforderungen ihr habt. Wir sagen dir konkret, wie der
            Setup für euch aussieht und schicken danach ein Festpreis-Angebot.
          </Typo.Paragraph>
          <div className="mt-6 flex justify-center">
            <ContactButton icon="calendar">Termin buchen</ContactButton>
          </div>
        </div>
      </ContentWrapper>

      {/* 7. FAQ */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Häufige Fragen</IntroBox.PreHeadline>
          <IntroBox.Headline>Bevor du anfragst</IntroBox.Headline>
        </IntroBox>
        <FaqContainer faqs={faqs} />
      </ContentWrapper>
    </>
  );
}
