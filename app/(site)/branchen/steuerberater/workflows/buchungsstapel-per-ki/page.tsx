import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import ProseColumns from "@/components/ui/prose-columns";
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
import ComparisonCard, {
  BeforeCard,
  AfterCard,
  ComparisonHeadline,
  ComparisonList,
  ComparisonListItem,
} from "@/components/cards/comparison-card";

export const pageConfig: PageConfig = {
  title: "Buchungsstapel per KI",
  description:
    "Buchungsstapel per KI generieren: Belege automatisch kontieren und als DATEV-Stapel übergeben.",
};

const defaultMeta = {
  title: "Buchhaltung automatisieren: Buchungsstapel per KI für DATEV | Bluebatch",
  description:
    "Buchungsstapel per KI: Belege, Bank- und Kassendaten automatisch nach SKR 03 oder SKR 04 kontieren und als fertigen Stapel an DATEV Kanzlei-Rechnungswesen übergeben.",
  ogDescription:
    "Vom Beleg zum fertigen DATEV-Stapel: KI kontiert automatisch, das Team prüft nur markierte Zweifelsfälle statt jeden Buchungssatz einzeln zu erfassen.",
};

export const metadata: Metadata = {
  title: defaultMeta.title,
  description: defaultMeta.description,
  keywords: [
    "Buchungsstapel KI",
    "Buchungsstapel generieren",
    "automatische Kontierung",
    "DATEV Buchungsstapel Import",
    "SKR 03 SKR 04",
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
        url: "/og?title=Buchungsstapel%20per%20KI&eyebrow=Steuerberater",
        width: 1200,
        height: 630,
        alt: "Bluebatch Buchungsstapel per KI für Steuerkanzleien",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultMeta.title,
    description: defaultMeta.ogDescription,
    images: ["/og?title=Buchungsstapel%20per%20KI&eyebrow=Steuerberater"],
  },
  alternates: {
    canonical: "/branchen/steuerberater/workflows/buchungsstapel-per-ki",
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
              Buchungsstapel per KI generieren: vom Beleg zum fertigen
              DATEV-Stapel
            </Hero2ColumnHeadline>
            <GeoSummary>
              Buchungsstapel per KI generieren bedeutet für Steuerkanzleien:
              Eine KI kontiert Belege, Bank- und Kassendaten automatisch nach
              SKR 03 oder SKR 04, erzeugt daraus einen fertigen
              Buchungsstapel und übergibt ihn im DATEV-Format an
              Kanzlei-Rechnungswesen. Das Team prüft nur noch markierte
              Zweifelsfälle, statt jeden Buchungssatz einzeln zu erfassen.
            </GeoSummary>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Use Case besprechen</ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/invoice-processing.jpg"
              alt="Belege werden automatisch zu Buchungssätzen verarbeitet"
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
            Kontieren ist Fließbandarbeit, wird aber wie Facharbeit bezahlt
          </IntroBox.Headline>
          <IntroBox.Subline>
            Der größte Teil der Buchungssätze eines Mandanten wiederholt
            sich Monat für Monat. Trotzdem tippt sie jemand von Hand,
            Buchungssatz für Buchungssatz.
          </IntroBox.Subline>
        </IntroBox>

        <ProseColumns cols={3} className="mt-12">
          <ProseColumns.Item title="Wiederkehrende Muster">
            Miete, Leasing, Telekommunikation, Wareneinkauf beim
            Stammlieferanten: Dieselben Geschäftsvorfälle laufen jeden Monat
            auf dieselben Konten. Genau diese Muster kann eine KI aus der
            Buchungshistorie lernen.
          </ProseColumns.Item>
          <ProseColumns.Item title="Personal am Limit">
            FiBu-Fachkräfte sind schwer zu finden und mit Routine-Erfassung
            ausgelastet. Jede Stunde Tipparbeit fehlt für Abstimmung, Klärung
            und Beratung, also für die Arbeit, die tatsächlich Fachwissen
            braucht.
          </ProseColumns.Item>
          <ProseColumns.Item title="Uneinheitliche Kontierung">
            Drei Bearbeiter, drei Kontierungsstile: Derselbe Geschäftsvorfall
            landet je nach Bearbeiter auf unterschiedlichen Konten. Ein
            generierter Stapel kontiert dagegen konsistent nach einem
            Regelwerk.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      {/* 3. WORKFLOW */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Der Workflow</IntroBox.PreHeadline>
          <IntroBox.Headline>
            So entsteht der Buchungsstapel: 5 Schritte bis zum DATEV-Import
          </IntroBox.Headline>
          <IntroBox.Subline>
            Die Belegdaten kommen aus der vorgelagerten Erfassung, zum
            Beispiel aus der{" "}
            <Link
              href="/branchen/steuerberater/workflows/belegpruefung"
              className="text-primary-600 hover:underline"
            >
              KI-Belegerfassung
            </Link>{" "}
            oder der{" "}
            <Link
              href="/branchen/steuerberater/workflows/e-rechnung-verarbeitung"
              className="text-primary-600 hover:underline"
            >
              E-Rechnung-Verarbeitung
            </Link>
            . Der Stapel-Workflow macht daraus Buchungssätze.
          </IntroBox.Subline>
        </IntroBox>

        <WorkflowDiagram variant="linear">
          <WorkflowDiagram.Step
            n={1}
            title="Datenquellen"
            description="Belege, Bank, Kasse"
          />
          <WorkflowDiagram.Step
            n={2}
            title="KI-Kontierung"
            description="SKR 03/04, Historie als Referenz"
          />
          <WorkflowDiagram.Step
            n={3}
            title="Steuerschlüssel"
            description="USt-Logik regelbasiert"
          />
          <WorkflowDiagram.Step
            n={4}
            title="Stapel-Erzeugung"
            description="DATEV-Format, je Mandant"
          />
          <WorkflowDiagram.Step
            n={5}
            title="Review und Import"
            description="Zweifelsfälle prüfen, importieren"
          />
        </WorkflowDiagram>

        <ProseColumns cols={2} wide className="mt-12">
          <ProseColumns.Item title="Kontierung aus der Buchungshistorie">
            <Typo.Paragraph>
              Die KI lernt aus den bisherigen Buchungen des Mandanten: Wie
              wurde dieser Lieferant bisher kontiert, welches Konto passt zu
              diesem Belegtext, welche Kostenstelle ist üblich. Neue oder
              unklare Fälle bekommen eine niedrige Konfidenz und werden im
              Stapel markiert, statt still auf ein Verlegenheitskonto zu
              laufen.
            </Typo.Paragraph>
          </ProseColumns.Item>
          <ProseColumns.Item title="Steuerschlüssel bleiben Regelsache">
            <Typo.Paragraph>
              Umsatzsteuer-Logik wird nicht der Mustererkennung überlassen:
              Steuerschlüssel, Reverse-Charge-Fälle und
              innergemeinschaftliche Erwerbe prüft ein deterministisches
              Regelwerk. Die KI schlägt vor, die Regeln begrenzen, was in
              den Stapel darf.
            </Typo.Paragraph>
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      {/* 4. VORHER / NACHHER */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Vorher / Nachher</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was sich am Erfassungs-Alltag der FiBu ändert
          </IntroBox.Headline>
        </IntroBox>

        <ComparisonCard className="mt-10">
          <BeforeCard>
            <ComparisonHeadline>Vorher: Manuell erfasst</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                Jeder Buchungssatz wird einzeln getippt, auch der hundertste
                Mietabschlag
              </ComparisonListItem>
              <ComparisonListItem>
                Kontierung hängt vom jeweiligen Bearbeiter ab
              </ComparisonListItem>
              <ComparisonListItem>
                Fehler verteilen sich unsichtbar über den ganzen Monat
              </ComparisonListItem>
              <ComparisonListItem>
                Erfassung frisst die Zeit, die für Abstimmung fehlt
              </ComparisonListItem>
            </ComparisonList>
          </BeforeCard>
          <AfterCard>
            <ComparisonHeadline>
              Nachher: Generierter Stapel
            </ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                Der Stapel kommt fertig kontiert im DATEV-Format je Mandant
              </ComparisonListItem>
              <ComparisonListItem>
                Konsistente Kontierung nach Regelwerk und Historie
              </ComparisonListItem>
              <ComparisonListItem>
                Zweifelsfälle sind markiert und werden gezielt geprüft
              </ComparisonListItem>
              <ComparisonListItem>
                Das Team arbeitet an Klärfällen statt an Routine-Erfassung
              </ComparisonListItem>
            </ComparisonList>
          </AfterCard>
        </ComparisonCard>
      </ContentWrapper>

      {/* 5. NACHVOLLZIEHBARKEIT */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>GoBD und Kontrolle</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Der Stapel wird importiert, nicht durchgewunken
          </IntroBox.Headline>
        </IntroBox>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Typo.Paragraph>
            Jeder generierte Buchungssatz trägt seine Herkunft: Beleg,
            angewendete Regel oder Historien-Referenz und Konfidenzwert. Der
            Stapel wird als Vorschlag in DATEV importiert und dort wie
            gewohnt festgeschrieben, erst nach Durchsicht durch das
            Kanzlei-Team. Damit bleibt die Buchführung GoBD-konform
            nachvollziehbar und die Verantwortung liegt beim Menschen, nicht
            beim Modell.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Der generierte Stapel ist der Mittelteil einer durchgängigen
            Kette: Belegeingang und Prüfung davor, Monatsreview und
            Abstimmung danach. Alle Bausteine im Überblick zeigt der{" "}
            <Link
              href="/branchen/steuerberater/workflows"
              className="text-primary-600 hover:underline"
            >
              Workflow-Katalog für Steuerberater
            </Link>
            .
          </Typo.Paragraph>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <Image
              src="/images/data-flow.jpg"
              alt="Datenfluss vom Beleg über die Kontierung zum DATEV-Stapel"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </ContentWrapper>

      {/* 6. FAQ */}
      <ContentWrapper>
        <FaqContainer
          faqs={[
            {
              question:
                "Welche Datenquellen kann die KI zu einem Buchungsstapel verarbeiten?",
              answer:
                "Alle üblichen Quellen der laufenden Buchhaltung: erfasste Eingangs- und Ausgangsbelege, Bankumsätze und Kassendaten. Die Belegdaten kommen idealerweise aus einer vorgelagerten KI-Belegerfassung, der Stapel-Workflow übernimmt Kontierung, Steuerschlüssel und die Erzeugung des importfertigen Stapels je Mandant.",
            },
            {
              question:
                "Woher weiß die KI, auf welches Konto ein Beleg gehört?",
              answer:
                "Aus zwei Quellen: dem Regelwerk auf dem Kontenrahmen der Kanzlei (SKR 03 oder SKR 04 inklusive individueller Konten) und der Buchungshistorie des Mandanten. Wiederkehrende Geschäftsvorfälle werden wie bisher kontiert, neue Fälle bekommen einen Vorschlag mit Konfidenzwert. Unter der Konfidenz-Schwelle wird der Satz im Stapel markiert und gezielt vom Team entschieden.",
            },
            {
              question:
                "Wie kommt der Stapel nach DATEV Kanzlei-Rechnungswesen?",
              answer:
                "Der Workflow erzeugt den Stapel im DATEV-Format und übergibt ihn über die vorhandenen Import-Wege in Kanzlei-Rechnungswesen. Dort wird er wie ein manuell erfasster Stapel geprüft und festgeschrieben. Am gewohnten DATEV-Prozess der Kanzlei ändert sich nichts, nur die Erfassung davor entfällt.",
            },
            {
              question:
                "Was passiert mit falsch kontierten Sätzen, lernt das System dazu?",
              answer:
                "Ja. Korrekturen des Teams fließen als neue Referenz in die Kontierungslogik ein: Wird ein Lieferant einmal umkontiert, schlägt der nächste Stapel das korrigierte Konto vor. Systematische Fehlerbilder werden zusätzlich im Regelwerk fixiert, damit sie nicht von einzelnen Historien-Ausreißern abhängen.",
            },
          ]}
        />
      </ContentWrapper>

      {/* 7. FINAL CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
