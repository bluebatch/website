import type { Metadata } from "next";
import { resolveHref } from "@/lib/get-canonical-path";
import Image from "next/image";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
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
import Customer from "@/components/sections/customer/customer";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import InternalLink from "@/components/buttons/internal-link";
import StatsList from "@/components/ui/stats-list";
import { FaqContainer } from "@/components/ui/faqs";

export const metadata: Metadata = {
  title:
    "KI für Steuerberater - Private AI, KI-Agenten & Workflows | Bluebatch",
  description:
    "KI für Steuerberater: Private AI, Claude Cowork, KI-Agenten für Mandantenkommunikation und Workflows für Belegprüfung, E-Rechnung und Jahresabschluss.",
  openGraph: {
    title: "KI für Steuerberater - Bluebatch",
    description:
      "KI für Steuerberater: Private AI, Claude Cowork, KI-Agenten für Mandantenkommunikation und Workflows für Belegprüfung, E-Rechnung und Jahresabschluss.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch Steuerberater",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KI für Steuerberater - Bluebatch",
    description:
      "KI für Steuerberater: Private AI, Claude Cowork, KI-Agenten für Mandantenkommunikation und Workflows für Belegprüfung, E-Rechnung und Jahresabschluss.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/branchen/steuerberater",
  },
};

const whyNowReasons = [
  {
    title: "Fachkräftemangel",
    description:
      "Offene Stellen bleiben monatelang unbesetzt, während Routine das vorhandene Team bindet: 3-5 Stunden Mail-Bearbeitung pro Tag, bis zu 41 Stunden Belegerfassung pro Monat für einen einzigen Großmandanten. KI übernimmt genau diese Routine, damit Fachkräfte beraten statt tippen.",
  },
  {
    title: "Saison-Peaks",
    description:
      "Q1 und Q2 ballen 60-80% des Kanzleiumsatzes auf vier Monate, ein Jahresabschluss kostet 40-200 Stunden pro Mandant. KI-gestützte Vorarbeit bei Saldenabstimmung, Anhang und Lagebericht entzerrt den Peak um 60-80%.",
  },
  {
    title: "E-Rechnungs-Pflicht",
    description:
      "Seit 2025 muss jedes Unternehmen E-Rechnungen empfangen können, die Ausstellungspflicht folgt stufenweise bis 2028. Manuell kostet die Verarbeitung 11,50 € pro Rechnung, automatisiert 0,10 €. Kanzleien, die ihre Mandanten hier begleiten, positionieren sich als digitaler Partner.",
  },
  {
    title: "Mandantenerwartungen",
    description:
      "Mandanten erwarten Antworten innerhalb von 24-48 Stunden und digitale Abläufe statt Pendelordner. Ein Belegrücklauf von 8 Wochen war lange normal, mit automatischer Nachforderung und Erinnerung sind es 3 Wochen.",
  },
];

const stats = [
  {
    value: 85,
    prefix: "-",
    suffix: "%",
    label: "Aufwand in der Belegprüfung",
  },
  {
    value: 3,
    suffix: " Wochen",
    label: "Belegrücklauf, statt vorher 8 Wochen",
  },
  {
    value: 80,
    prefix: "bis zu -",
    suffix: "%",
    label: "Saison-Peak beim Jahresabschluss",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Mandantenanfragen beantwortet",
  },
];

const topics = [
  {
    id: "private-ai",
    href: "/branchen/steuerberater/private-ai",
    model: "Nutzungsmodell 1: Wo läuft die KI?",
    title: "Private AI",
    linkLabel: "Mehr über Private AI",
    paragraphs: [
      "Bevor eine Kanzlei über konkrete KI-Anwendungen entscheidet, steht die Grundsatzfrage: In welcher Umgebung dürfen Mandantendaten verarbeitet werden? Private AI beantwortet sie strukturell: Offene Sprachmodelle wie Llama oder Mistral laufen auf Infrastruktur, die Ihre Kanzlei kontrolliert - mit Open WebUI als Chat-Oberfläche, vLLM als Modell-Server, EU-Hosting oder on-premise.",
      "AVV, dedizierter Tenant, kein Training mit Ihren Daten: konform mit DSGVO und § 203 StGB, einsatzbereit in wenigen Tagen.",
    ],
    image: "/images/technology-integration.jpg",
  },
  {
    id: "claude-cowork",
    href: "/branchen/steuerberater/claude-cowork",
    model: "Nutzungsmodell 2: KI als Werkzeug fürs Team",
    title: "Claude Cowork",
    linkLabel: "Mehr über Claude Cowork",
    paragraphs: [
      "Bei Claude Cowork arbeitet der Mensch, die KI hilft: beim Entwurf von Mandantenschreiben, beim Prüfen von Verträgen und Bescheiden, bei Recherche und Zusammenfassung. Die verwaltete Claude-Umgebung läuft auf AWS-Infrastruktur in der Region Frankfurt (EU), mit AVV und dediziertem Tenant.",
      "So nutzt die Kanzlei die stärkste Modellqualität DSGVO- und § 203-StGB-konform, ohne eigene Infrastruktur betreiben zu müssen. Bluebatch übernimmt Einrichtung, Konfiguration und Schulung.",
    ],
    image: "/images/claude-cowork.png",
    portrait: true,
  },
  {
    id: "ki-agenten",
    href: "/branchen/steuerberater/ki-agenten",
    model: "Nutzungsmodell 3: KI als digitaler Mitarbeiter",
    title: "KI-Agenten",
    linkLabel: "Alle KI-Agenten ansehen",
    paragraphs: [
      "KI-Agenten arbeiten wie digitale Sachbearbeiter: Sie erledigen komplette Aufgaben, Ihr Team prüft und gibt frei. Der Mail Agent beantwortet Mandanten-Mails, der Agent für Mandantenkommunikation klärt FAQ und Fristen und verkürzt den Belegrücklauf von 8 auf 3 Wochen, der KI-Jahresabschluss entzerrt den Saison-Peak um 60-80%.",
      "Die Agenten passen sich Ihrer Kanzlei an, nicht umgekehrt: Der Mail Agent lernt Ihren Ton und Ihre Kategorien. Statt 3-5 Stunden Routine-Mails pro Tag und 40-200 Stunden pro Jahresabschluss-Mandant bleibt dem Team Zeit für Beratung.",
    ],
    image: "/images/agentic-ai.jpg",
  },
  {
    id: "workflows",
    href: "/branchen/steuerberater/workflows",
    model: "Nutzungsmodell 4: Fest automatisierte Prozesse",
    title: "Workflows",
    linkLabel: "Alle Workflows ansehen",
    paragraphs: [
      "Workflows laufen immer gleich ab, nachvollziehbar und GoBD-konform: Die Belegprüfung mit KI-Erfassung senkt den Aufwand um 85% bei Fehlerquoten unter 0,1%, die E-Rechnungs-Verarbeitung reduziert die Kosten von 11,50 € auf 0,10 € pro Rechnung.",
      "Dazu kommen DATEV-Jira-Synchronisation (von 25 auf 2 Minuten pro Vorgang), Dokumentenverarbeitung per KI-OCR und Mandanten-Onboarding in 30 Minuten statt 4-8 Stunden.",
    ],
    image: "/images/dokumentenverarbeitung/hero-document-flow.png",
  },
];

const faqs = [
  {
    question: "Dürfen Steuerberater ChatGPT nutzen?",
    answer:
      "Für allgemeine Aufgaben ohne Mandantenbezug ja. Sobald Mandantendaten im Spiel sind, greift § 203 StGB (Verletzung von Privatgeheimnissen): Öffentliche KI-Tools ohne AVV, EU-Hosting und Kontrolle über die Datenverarbeitung scheiden dann aus. Die Lösung sind geschützte Umgebungen wie Claude Cowork (verwaltet, § 203-konform) oder Private AI in eigener Infrastruktur.",
  },
  {
    question: "Wo fängt eine Kanzlei mit KI an?",
    answer:
      "Mit der Umgebungsfrage: Wo dürfen Mandantendaten verarbeitet werden? Danach folgt ein überschaubarer erster Anwendungsfall - in der Praxis meist Claude Cowork als Werkzeug fürs Team (produktiv in wenigen Tagen) oder ein Belegprüfungs-Workflow, weil dort mit 85% Aufwandsreduktion der schnellste messbare Effekt entsteht.",
  },
  {
    question: "Was ist der Unterschied zwischen KI-Agenten und Workflows?",
    answer:
      "Ein Workflow ist ein fest definierter Prozess: gleiche Schritte, jedes Mal, zum Beispiel Belegprüfung oder E-Rechnungs-Verarbeitung. Ein KI-Agent arbeitet wie ein digitaler Sachbearbeiter: Er versteht den Einzelfall, formuliert Antworten und entscheidet situativ, zum Beispiel bei Mandanten-Mails. In beiden Fällen prüft das Kanzlei-Team das Ergebnis und gibt frei.",
  },
  {
    question: "Ersetzt KI Mitarbeiter in der Steuerkanzlei?",
    answer:
      "Nein. KI übernimmt Routine wie Belegerfassung, Standard-Mails und Fristen-Nachverfolgung, die fachliche Verantwortung und Freigabe bleiben zu 100% beim Steuerberater. Angesichts des Fachkräftemangels ist der Effekt in der Praxis: Bestehende Teams schaffen mehr Mandate, ohne dass jemand ersetzt wird.",
  },
  {
    question: "Was bringt KI einer Steuerkanzlei konkret?",
    answer:
      "Messbare Ergebnisse aus der Praxis: 85% weniger Aufwand in der Belegprüfung bei Fehlerquoten unter 0,1%, Belegrücklauf in 3 statt 8 Wochen, 60-80% weniger Saison-Peak beim Jahresabschluss und E-Rechnungs-Verarbeitung für 0,10 € statt 11,50 € pro Rechnung.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Branchen</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              KI für Steuerberater: weniger Pflicht, mehr Beratung
            </Hero2ColumnHeadline>
            <GeoSummary>
              KI für Steuerberater umfasst vier Nutzungsmodelle: Private AI und
              Claude Cowork für DSGVO- und § 203-konforme Verarbeitung,
              KI-Agenten als digitale Sachbearbeiter und fest automatisierte
              Workflows. Kanzleien senken damit den Belegprüfungs-Aufwand um
              85%, verkürzen den Belegrücklauf von 8 auf 3 Wochen und entzerren
              den Saison-Peak um 60-80%.
            </GeoSummary>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Beratung anfragen</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Private AI, Claude Cowork, KI-Agenten und Workflows für
              Steuerkanzleien
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/tax-consulting-workspace.jpg"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Client Logos */}
      <ContentWrapper noPadding bodyWidth="full">
        <Customer />
      </ContentWrapper>

      {/* Warum jetzt: die vier Treiber + § 203 als Rahmenbedingung */}
      <ContentWrapper colorScheme="gray-light">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <Typo.H2 className="mb-4">
            Warum KI für Steuerkanzleien jetzt wichtig ist
          </Typo.H2>
          <Typo.Paragraph className="text-gray-600 mb-4">
            Die meisten Kanzleien haben denselben Plan: weg von der reinen
            Pflicht, hin zu echter Beratung. Mehr Wert für Mandanten, mehr
            Sinn fürs Team, mehr Luft für die Kanzlei.
          </Typo.Paragraph>
          <Typo.Paragraph className="text-gray-600">
            Und dieser Plan scheitert selten am Willen. Er scheitert am
            Alltag: am Postfach, am Belegstapel, an gewachsenen Strukturen.
            Vier Entwicklungen verschärfen ihn gerade gleichzeitig:
          </Typo.Paragraph>
        </div>
        <SimpleGrid cols={2} className="gap-6 md:gap-8">
          {whyNowReasons.map((reason) => (
            <SimpleCard key={reason.title} align="left">
              <Typo.H3 className="mb-3">{reason.title}</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                {reason.description}
              </Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
        <div className="max-w-3xl mx-auto mt-10 md:mt-14 text-center">
          <Typo.Paragraph className="text-gray-600">
            Über allem steht eine Rahmenbedingung: § 203 StGB. Berufliche
            Verschwiegenheit ist für uns keine Fußnote, sondern die Grundlage
            jeder Umgebung, die wir aufsetzen. Mandantendaten gehören nicht in
            öffentliche KI-Tools - deshalb beginnt jede KI-Einführung in der
            Kanzlei mit der Frage nach der Umgebung. Dafür gibt es zwei
            geschützte Antworten: Private AI und Claude Cowork.
          </Typo.Paragraph>
        </div>
      </ContentWrapper>

      {/* Zahlen aus der Praxis */}
      <ContentWrapper colorScheme="gradient-primary-dark">
        <StatsList stats={stats} cols={4} />
      </ContentWrapper>

      {/* Die vier Nutzungsmodelle: Einleitung */}
      <ContentWrapper>
        <div className="text-center max-w-3xl mx-auto">
          <Typo.H2 className="mb-4">
            Was Kanzleien mit KI grundsätzlich machen können
          </Typo.H2>
          <Typo.Paragraph className="text-gray-600 mb-4">
            Wer strategischer Berater werden will, braucht keine weitere
            Insellösung - und kein neues System, auf das sich jede
            Mitarbeiterin erst einarbeiten muss. Wir bauen KI deshalb in die
            Systeme ein, mit denen Ihre Kanzlei ohnehin arbeitet: DATEV,
            Microsoft 365, Ihr DMS. Die KI zieht bei Ihnen ein, nicht
            umgekehrt.
          </Typo.Paragraph>
          <Typo.Paragraph className="text-gray-600 mb-4">
            Dabei bauen vier Nutzungsmodelle aufeinander auf: Erst klärt die
            Kanzlei, wo die KI läuft (Private AI oder Claude Cowork als
            geschützte Umgebung). Dann nutzt das Team KI als Werkzeug im
            Alltag. Schließlich übernehmen KI-Agenten ganze Aufgaben, und
            Workflows automatisieren feste Prozesse.
          </Typo.Paragraph>
          <Typo.Paragraph className="text-gray-600">
            Die meisten Kanzleien starten klein und bauen von dort aus - nicht
            als großes Projekt, sondern jeden Monat ein Stück mehr.
          </Typo.Paragraph>
        </div>
      </ContentWrapper>

      {/* Die vier Nutzungsmodelle: Private AI, Claude Cowork, KI-Agenten, Workflows */}
      {topics.map((topic, index) => {
        const imageRight = index % 2 === 0;
        return (
          <ContentWrapper
            key={topic.id}
            id={topic.id}
            colorScheme={index % 2 === 0 ? "gray-light" : undefined}
          >
            <SimpleGrid cols={2} className="items-center gap-8 md:gap-12">
              <div className={imageRight ? "" : "md:order-2"}>
                <Typo.Paragraph className="text-sm font-semibold uppercase tracking-wide text-primary-600 mb-2">
                  {topic.model}
                </Typo.Paragraph>
                <Typo.H2 className="mb-4">{topic.title}</Typo.H2>
                {topic.paragraphs.map((paragraph) => (
                  <Typo.Paragraph
                    key={paragraph.slice(0, 32)}
                    className="text-gray-600 mb-4"
                  >
                    {paragraph}
                  </Typo.Paragraph>
                ))}
                <InternalLink href={resolveHref(topic.href)}>
                  {topic.linkLabel}
                </InternalLink>
              </div>
              <div
                className={`relative mx-auto ${
                  topic.portrait
                    ? "aspect-[4/5] w-2/3 sm:w-1/2 md:w-2/3 lg:w-3/5"
                    : "aspect-video w-1/2 md:w-full"
                } ${imageRight ? "" : "md:order-1"}`}
              >
                <Image
                  src={topic.image}
                  alt={topic.title}
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </SimpleGrid>
          </ContentWrapper>
        );
      })}

      {/* Einstieg: wo anfangen */}
      <ContentWrapper colorScheme="gray-light">
        <div className="text-center max-w-3xl mx-auto">
          <Typo.H2 className="mb-4">Wo fängt Ihre Kanzlei an?</Typo.H2>
          <Typo.Paragraph className="text-gray-600 mb-6">
            In der Praxis sind es zwei Schritte: erst die Umgebungsfrage klären
            (Claude Cowork ist in wenigen Tagen produktiv, Private AI gibt
            maximale Kontrolle), dann den ersten Prozess automatisieren - meist
            Belegprüfung oder Mandantenkommunikation, weil dort der
            Routineaufwand am größten ist. Welcher Einstieg zu Ihrer Kanzlei
            passt, klären wir in einem unverbindlichen Gespräch.
          </Typo.Paragraph>
          <ContactButton icon="chat">Erstgespräch anfragen</ContactButton>
        </div>
      </ContentWrapper>

      {/* FAQ */}
      <ContentWrapper bodyWidth="small">
        <FaqContainer faqs={faqs} />
      </ContentWrapper>

      {/* Contact CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
