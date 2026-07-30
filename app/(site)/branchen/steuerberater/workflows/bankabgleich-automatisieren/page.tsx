import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import type { PageConfig } from "@/lib/get-subpages";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnCallToAction,
  Hero2ColumnImage,
} from "@/components/heroes/hero-2-column";
import GeoSummary from "@/components/ui/geo-summary";
import ContactButton from "@/components/buttons/contact-button";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { FaqContainer } from "@/components/ui/faqs";
import IntroBox from "@/components/ui/intro-box";
import WorkflowDiagram from "@/components/sections/workflow-diagram";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/ui/timeline-as-steps";

export const pageConfig: PageConfig = {
  title: "Bankabgleich automatisieren",
  description:
    "Bankabstimmung per KI: Kontoumsätze automatisch offenen Posten zuordnen, nur Klärposten bleiben.",
};

const defaultMeta = {
  title: "Bankabgleich automatisieren: KI-Bankabstimmung für Kanzleien | Bluebatch",
  description:
    "Bankabgleich automatisieren per KI: Kontoumsätze werden automatisch offenen Posten zugeordnet, Skonto, Teilzahlungen und Sammler erkannt, nur echte Klärposten bleiben übrig.",
  ogDescription:
    "Bankabstimmung ohne manuelles Abhaken: KI ordnet Zahlungen offenen Posten zu und legt nur echte Klärposten vor, täglich statt einmal im Monat.",
};

export const metadata: Metadata = {
  title: defaultMeta.title,
  description: defaultMeta.description,
  keywords: [
    "Bankabgleich automatisieren",
    "Bankabstimmung KI",
    "OPOS Abgleich automatisch",
    "Zahlungszuordnung KI",
    "offene Posten abstimmen",
    "Steuerkanzlei Automatisierung",
    "Bluebatch",
  ],
  openGraph: {
    title: defaultMeta.title,
    description: defaultMeta.ogDescription,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch automatisierter Bankabgleich für Steuerkanzleien",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultMeta.title,
    description: defaultMeta.ogDescription,
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/branchen/steuerberater/workflows/bankabgleich-automatisieren",
  },
};

export default function Page() {
  return (
    <>
      {/* 1. HERO */}
      <ContentWrapper isFirstSection colorScheme="gradient-cool">
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>
              Use Case Steuerberater
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Bankabgleich automatisieren: KI-Bankabstimmung statt manuellem
              Abhaken
            </Hero2ColumnHeadline>
            <GeoSummary>
              Der automatisierte Bankabgleich per KI gleicht für
              Steuerkanzleien Kontoumsätze automatisch mit offenen Posten ab:
              Die KI ordnet Zahlungseingänge und Zahlungsausgänge Rechnungen
              zu, erkennt Skonto, Teilzahlungen und Sammelüberweisungen und
              legt nur echte Klärposten zur Entscheidung vor. Die
              Bankabstimmung läuft damit täglich statt einmal im Monat, ohne
              manuelles Abhaken jeder Zeile.
            </GeoSummary>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Use Case besprechen</ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/invoice-verification.jpg"
              alt="Kontoumsätze werden automatisch offenen Posten zugeordnet"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 2. PROBLEM */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Das Problem</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Warum die Bankabstimmung in vielen Kanzleien Monatsend-Stress ist
          </IntroBox.Headline>
          <IntroBox.Subline>
            Kontoauszug links, OPOS-Liste rechts, und dazwischen viel
            Erfahrungswissen im Kopf einzelner Mitarbeiter.
          </IntroBox.Subline>
        </IntroBox>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Typo.H3 className="mt-0!">Zeile für Zeile von Hand</Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              Verwendungszweck lesen, Rechnung suchen, Betrag vergleichen,
              abhaken. Bei Mandanten mit hohem Zahlungsvolumen ist die
              Abstimmung ein fester Tagesblock, der jeden Monat wiederkehrt.
            </Typo.Paragraph>
          </div>
          <div>
            <Typo.H3 className="mt-0!">Die schwierigen 20 Prozent</Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              Skontoabzug, Teilzahlungen, Sammelüberweisungen über mehrere
              Rechnungen, kryptische Verwendungszwecke: Die Sonderfälle
              kosten den Großteil der Zeit und landen oft als Klärposten
              auf Zwischenkonten, wo sie liegen bleiben.
            </Typo.Paragraph>
          </div>
          <div>
            <Typo.H3 className="mt-0!">Abstimmung kommt zu spät</Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              Wer nur zum Monatsende abstimmt, sieht Zahlungsdifferenzen,
              Doppelzahlungen und offene Forderungen erst Wochen später.
              Für Mahnwesen und Liquiditätsaussagen ist das zu spät.
            </Typo.Paragraph>
          </div>
        </div>
      </ContentWrapper>

      {/* 3. WORKFLOW */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Der Workflow</IntroBox.PreHeadline>
          <IntroBox.Headline>
            So läuft die automatisierte Bankabstimmung Tag für Tag
          </IntroBox.Headline>
          <IntroBox.Subline>
            Kontoumsätze kommen automatisch herein, Zuordnungen laufen
            zweistufig: erst deterministische Regeln, dann KI für die Fälle,
            an denen Regeln scheitern.
          </IntroBox.Subline>
        </IntroBox>

        <WorkflowDiagram variant="linear">
          <WorkflowDiagram.Step
            n={1}
            title="Umsatz-Import"
            description="Bankdaten automatisch abgerufen"
          />
          <WorkflowDiagram.Step
            n={2}
            title="Regel-Matching"
            description="Betrag, Referenz, IBAN"
          />
          <WorkflowDiagram.Step
            n={3}
            title="KI-Zuordnung"
            description="Skonto, Teilzahlung, Sammler"
          />
          <WorkflowDiagram.Step
            n={4}
            title="Buchungsvorschlag"
            description="OPOS-Ausgleich in DATEV"
          />
          <WorkflowDiagram.Step
            n={5}
            title="Klärposten"
            description="Nur echte Fälle zum Menschen"
          />
        </WorkflowDiagram>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <Typo.H3 className="mt-0!">
              Eindeutiges matcht die Regel, den Rest liest die KI
            </Typo.H3>
            <Typo.Paragraph>
              Stimmen Betrag und Rechnungsnummer überein, braucht es keine
              KI, das erledigen Regeln zuverlässig und nachvollziehbar.
              Die KI übernimmt die Fälle dahinter: Sie liest unsaubere
              Verwendungszwecke, erkennt Skontoabzug innerhalb der Frist,
              zerlegt Sammelüberweisungen auf einzelne Rechnungen und
              ordnet Teilzahlungen dem richtigen offenen Posten zu.
            </Typo.Paragraph>
          </div>
          <div>
            <Typo.H3 className="mt-0!">
              Klärposten mit Kontext statt nackter Differenz
            </Typo.H3>
            <Typo.Paragraph>
              Was weder Regel noch KI sicher zuordnen können, landet als
              Klärposten beim Team, mit Kontext: ähnlichste offene Posten,
              erkannte Teilbeträge, Historie des Zahlungspartners. Aus
              einer anonymen Differenz wird eine Entscheidung, die in
              Sekunden fällt.
            </Typo.Paragraph>
          </div>
        </div>
      </ContentWrapper>

      {/* 4. NACHVOLLZIEHBARKEIT */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>GoBD und Nachvollziehbarkeit</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Jede Zuordnung bleibt prüfbar
          </IntroBox.Headline>
        </IntroBox>

        <TimelineAsSteps>
          <TimelineAsStepsStep value={1}>
            <Typo.H3 className="mt-2!">
              Zuordnung mit Begründung
            </Typo.H3>
            <Typo.Paragraph>
              Jeder automatische Ausgleich dokumentiert, worauf er beruht:
              exakte Referenz, KI-Zuordnung mit Konfidenzwert oder manuelle
              Entscheidung. Bei der Betriebsprüfung ist damit für jeden
              Bankumsatz belegbar, warum er wie zugeordnet wurde.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={2}>
            <Typo.H3 className="mt-2!">
              Buchung als Vorschlag nach DATEV
            </Typo.H3>
            <Typo.Paragraph>
              Die Ausgleichsbuchungen gehen als Vorschläge in den gewohnten
              DATEV-Prozess und werden dort vom Team festgeschrieben.
              Zusammen mit einem automatisch generierten Stapel aus der
              Belegseite entsteht so eine durchgängige Kette, siehe{" "}
              <Link
                href="/branchen/steuerberater/workflows/buchungsstapel-per-ki"
                className="text-primary-600 hover:underline"
              >
                Buchungsstapel per KI
              </Link>
              .
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={3} isLast>
            <Typo.H3 className="mt-2!">Tägliche Abstimmung als Nebeneffekt</Typo.H3>
            <Typo.Paragraph>
              Weil der Abgleich automatisch läuft, ist die Bank jeden Tag
              abgestimmt statt einmal im Monat. Offene Forderungen,
              Doppelzahlungen und Differenzen werden sichtbar, solange man
              noch reagieren kann. Weitere automatisierte Kanzlei-Prozesse
              zeigt der{" "}
              <Link
                href="/branchen/steuerberater/workflows"
                className="text-primary-600 hover:underline"
              >
                Workflow-Katalog für Steuerberater
              </Link>
              .
            </Typo.Paragraph>
          </TimelineAsStepsStep>
        </TimelineAsSteps>

        <div className="mx-auto mt-12 max-w-2xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <Image
              src="/images/automation-efficiency.jpg"
              alt="Täglich abgestimmte Bankkonten im Überblick"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </ContentWrapper>

      {/* 5. FAQ */}
      <ContentWrapper colorScheme="gray-light">
        <FaqContainer
          faqs={[
            {
              question:
                "Welche Fälle kann die KI beim Bankabgleich automatisch zuordnen?",
              answer:
                "Neben den einfachen Treffern über Betrag und Rechnungsnummer vor allem die zeitfressenden Sonderfälle: Skontoabzug innerhalb der Frist, Teilzahlungen, Sammelüberweisungen über mehrere Rechnungen und Zahlungen mit unsauberem oder fehlendem Verwendungszweck. Die Zuordnung erfolgt gegen die offenen Posten und die Zahlungshistorie des Mandanten.",
            },
            {
              question:
                "Woher kommen die Bankumsätze, muss jemand Auszüge hochladen?",
              answer:
                "Nein, die Umsätze werden automatisch abgerufen, je nach Setup über Bankschnittstellen oder die in der Kanzlei vorhandenen Wege wie DATEV-Zahlungsverkehrsdaten. Der Abgleich läuft dadurch täglich, ohne dass jemand Auszüge einsammeln oder importieren muss.",
            },
            {
              question:
                "Bucht das System Zahlungsausgleiche automatisch fest?",
              answer:
                "Nein. Automatische Zuordnungen werden als Buchungsvorschläge mit Begründung und Konfidenzwert übergeben, festgeschrieben wird in DATEV durch das Kanzlei-Team. Unsichere Fälle gehen gar nicht erst als Vorschlag raus, sondern landen als Klärposten mit Kontext beim Bearbeiter.",
            },
            {
              question:
                "Für welche Mandanten lohnt sich der automatisierte Bankabgleich?",
              answer:
                "Am stärksten profitieren Mandate mit vielen Zahlungsbewegungen, etwa Handel, E-Commerce oder Unternehmen mit Lastschrift- und Sammlerverkehr. Aber auch bei kleineren Mandaten summiert sich der Effekt, weil die Abstimmung komplett nebenbei läuft und das Monatsende von Routinearbeit entlastet wird.",
            },
          ]}
        />
      </ContentWrapper>

      {/* 6. FINAL CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
