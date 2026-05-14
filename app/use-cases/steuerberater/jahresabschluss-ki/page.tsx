import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContentWrapper from "@/components/layout/content-wrapper";
import SimpleGrid from "@/components/layout/simple-grid";
import Typo from "@/components/ui/typo";
import type { PageConfig } from "@/lib/get-subpages";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnCallToAction,
  Hero2ColumnImage,
} from "@/components/heroes/hero-2-column";
import ContactButton from "@/components/buttons/contact-button";
import ComparisonCard, {
  BeforeCard,
  AfterCard,
  ComparisonHeadline,
  ComparisonList,
  ComparisonListItem,
  ComparisonFooter,
} from "@/components/cards/comparison-card";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { FaqContainer } from "@/components/ui/faqs";
import IntroBox from "@/components/ui/intro-box";
import SavingsCard, {
  SavingsBadge,
  SavingsBadgeHighlight,
  SavingsItems,
  SavingsItem,
} from "@/components/cards/savings-card";
import RoiCalculation, {
  RoiAssumption,
  RoiRow,
  RoiTotal,
} from "@/components/sections/roi-calculation";
import KpiCard from "@/components/cards/kpi-card";
import SimpleCard, { SimpleCardIcon } from "@/components/cards/simple-card";
import WorkflowDiagram from "@/components/sections/workflow-diagram";

export const pageConfig: PageConfig = {
  title: "KI-Jahresabschluss",
  description:
    "Saldenabstimmung, SKR-HGB-Mapping, Anhang und Lagebericht KI-gestützt erstellen.",
};

const defaultMeta = {
  title: "KI Jahresabschluss für Steuerberater | Bluebatch",
  description:
    "Jahresabschluss bindet 40-200 h pro Mandant. KI mappt SKR auf HGB, erstellt Anhang und Lagebericht und entzerrt Saison-Peak um 60-80%.",
  ogDescription:
    "KI-Jahresabschluss: Saldenabstimmung, SKR-HGB-Mapping, Anhang und Lagebericht in 60-80% weniger Zeit.",
};

export const metadata: Metadata = {
  title: defaultMeta.title,
  description: defaultMeta.description,
  keywords: [
    "KI Jahresabschluss",
    "KI Bilanz",
    "KI Agent Steuerberater",
    "Steuerkanzlei automatisieren",
    "HGB-Abschluss KI",
    "Anhang automatisch",
    "Lagebericht KI",
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
        alt: "Bluebatch KI-Jahresabschluss",
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
    canonical: "/use-cases/steuerberater/jahresabschluss-ki",
  },
};

const solutionCards = [
  {
    title: "SKR-HGB-Mapping",
    image: "/images/jahresabschluss/card-mapping.png",
    text: "Saldenliste aus DATEV (SKR03 oder SKR04) wird automatisch auf HGB-Positionen § 266 gemappt. Lerneffekt aus Vorjahr und Mandanten-Spezifika, manuelle Korrekturen fließen ins Modell zurück.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
      />
    ),
  },
  {
    title: "Saldenabstimmung",
    image: "/images/jahresabschluss/card-saldenabstimmung.png",
    text: "Vorjahres- und Eröffnungsbilanz, Salden-Verprobung, BWA-Konsistenz und Steuererklärungs-Abgleich automatisch. Anomalien bei Marge, Liquidität und Verschuldungsgrad werden gegen Vorjahres- und Branchen-Benchmarks geflaggt.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75z"
      />
    ),
  },
  {
    title: "Anhang nach § 264-289 HGB",
    image: "/images/jahresabschluss/card-anhang.png",
    text: "RAG-Prompts pro Pflichtangaben-Block: Bilanzierungs- und Bewertungsmethoden, Anlagespiegel, Verbindlichkeitenspiegel, Haftungsverhältnisse, Vorgänge nach Abschlussstichtag. Texte berücksichtigen Branche, Größenklasse und Vorjahresanhang.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9z"
      />
    ),
  },
  {
    title: "Lagebericht-Draft",
    image: "/images/jahresabschluss/card-review.png",
    text: "KI strukturiert Wirtschaftsbericht, Risiko- und Chancenbericht sowie Prognosebericht auf Basis von BWA, Vorjahresvergleich und Branchen-Benchmarks. § 289 HGB-Umfang inkl. Vier-Augen-Review pro Abschnitt.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125z"
      />
    ),
  },
];

export default function Page() {
  return (
    <>
      {/* 1. HERO 2-COLUMN */}
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>
              Use Case Steuerberater
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              KI Jahresabschluss: Saison-Peak entzerrt
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Saldenabstimmung, SKR03/SKR04 auf HGB-Mapping, Anhang nach
              § 264-289 HGB und Lagebericht: KI liefert pro Mandant einen
              prüffähigen Entwurf. Der Steuerberater reviewt, korrigiert und
              gibt frei. So schrumpft der Abschluss von 40-200 h auf 8-40 h und
              Q1/Q2 ist kein Überstundenmarathon mehr.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Pilot anfragen</ContactButton>
            </Hero2ColumnCallToAction>
            <div className="mt-8">
              <SimpleGrid cols={2}>
                <KpiCard
                  value={80}
                  prefix="60-"
                  suffix="%"
                  subtitle="Weniger Zeit pro Abschluss"
                />
                <KpiCard
                  value={40}
                  prefix="8-"
                  suffix=" h"
                  subtitle="statt 40-200 h pro Mandant"
                />
              </SimpleGrid>
            </div>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/jahresabschluss/hero-season-peak.png"
              alt="Steuerberater im Saison-Peak Q1/Q2"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 2. SAISON-VISUAL */}
      <ContentWrapper colorScheme="gradient-warm" bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>Saisonale Spitze</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Q1/Q2 ballt 60-80% des Kanzleiumsatzes auf vier Monate
          </IntroBox.Headline>
          <IntroBox.Subline>
            40-200 Stunden pro Mandant, ein kleiner BWA-Mandant kostet 40
            Stunden, eine mittelständische GmbH mit Konzernanhang 200 Stunden.
            Überstunden, Mitarbeiterausfälle und frustrierte Mandanten sind die
            Regel, nicht die Ausnahme.
          </IntroBox.Subline>
        </IntroBox>
        <div className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-orange-200 bg-white shadow-sm">
            <Image
              src="/images/jahresabschluss/season-wave.png"
              alt="Illustrative Welle der saisonalen Arbeitsspitze in Q1 und Q2"
              width={1600}
              height={900}
              className="w-full h-auto"
            />
          </div>
          <Typo.Paragraph className="mt-6 text-center text-sm text-gray-600">
            Illustrative Darstellung. Tatsächliche Werte variieren je nach
            Mandantenstruktur und Kanzleigröße.
          </Typo.Paragraph>
        </div>
      </ContentWrapper>

      {/* 3. 4-CARD-LÖSUNGS-GRID */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Die Lösung</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Vier KI-Bausteine für HGB-Abschluss, Anhang und Lagebericht
          </IntroBox.Headline>
          <IntroBox.Subline>
            Ein n8n-Workflow mit Claude und GPT-4 importiert die DATEV-Saldenliste,
            mappt SKR auf HGB, schreibt Anhang und Lagebericht und liefert dem
            Steuerberater einen prüffähigen Entwurf zur finalen Freigabe.
          </IntroBox.Subline>
        </IntroBox>

        <div className="mt-10">
          <SimpleGrid cols={4}>
            {solutionCards.map((card) => (
              <SimpleCard key={card.title} align="left">
                <SimpleCardIcon color="primary">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  >
                    {card.icon}
                  </svg>
                </SimpleCardIcon>
                {card.image && (
                  <div className="mt-4 w-full overflow-hidden rounded-xl bg-gray-50">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={400}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                )}
                <Typo.H3 className="mt-4!">{card.title}</Typo.H3>
                <Typo.Paragraph>{card.text}</Typo.Paragraph>
              </SimpleCard>
            ))}
          </SimpleGrid>
        </div>
      </ContentWrapper>

      {/* 4. WORKFLOW-DIAGRAMM */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>So läuft ein Abschluss</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Sechs Schritte vom DATEV-Export zur Steuerberater-Freigabe
          </IntroBox.Headline>
          <IntroBox.Subline>
            Der gesamte Workflow läuft in n8n, mit Claude für rechtliche
            Pflichtangaben und GPT-4 für Zahlen-Plausibilisierung. Der
            Steuerberater bleibt jederzeit im Driver Seat.
          </IntroBox.Subline>
        </IntroBox>
        <WorkflowDiagram variant="circular">
          <WorkflowDiagram.Step
            n={1}
            title="Datenimport"
            description="DATEVconnect: Saldenliste, Vorjahr, BWA, Stammdaten"
          />
          <WorkflowDiagram.Step
            n={2}
            title="Saldenprüfung"
            description="Eröffnungsbilanz, Verprobung, BWA-Konsistenz"
          />
          <WorkflowDiagram.Step
            n={3}
            title="SKR auf HGB"
            description="Auto-Mapping § 266 mit Mandanten-Lerneffekt"
          />
          <WorkflowDiagram.Step
            n={4}
            title="KI-Anhang"
            description="RAG auf § 264-289 HGB pro Pflichtangabe"
          />
          <WorkflowDiagram.Step
            n={5}
            title="Lagebericht-Draft"
            description="Wirtschafts-, Risiko-, Prognosebericht"
          />
          <WorkflowDiagram.Step
            n={6}
            title="Review"
            description="Vier-Augen-Freigabe, E-Bilanz, Bundesanzeiger"
          />
        </WorkflowDiagram>
      </ContentWrapper>

      {/* 4b. ÜBERGABE-HINWEIS */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="narrow">
        <Typo.Paragraph className="text-center">
          Übergabe an angrenzende Workflows wie{" "}
          <Link
            href="/use-cases/steuerberater/datev-jira-task-orchestration"
            className="text-primary-600 hover:underline"
          >
            DATEV-Jira-Task-Orchestration
          </Link>{" "}
          erfolgt automatisch nach Freigabe.
        </Typo.Paragraph>
      </ContentWrapper>

      {/* 5. COMPARISON 40-200h vs 8-40h */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Vergleich</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Manueller Marathon vs. KI-assisted Workflow
          </IntroBox.Headline>
          <IntroBox.Subline>
            So sieht ein typischer Standard-Abschluss vorher und nachher aus,
            gemessen pro Mandant mit ca. 40 Stunden Aufwand.
          </IntroBox.Subline>
        </IntroBox>

        <ComparisonCard className="mt-10">
          <BeforeCard>
            <ComparisonHeadline>Vorher: Manueller Marathon</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                Saldenliste-Export DATEV und manuelles HGB-Mapping: 8-15 h
              </ComparisonListItem>
              <ComparisonListItem>
                Salden-Verprobung, BWA-Konsistenz, Eröffnungsbilanz: 4-6 h
              </ComparisonListItem>
              <ComparisonListItem>
                Anhang-Texte § 264-289 HGB von Hand schreiben: 10-30 h
              </ComparisonListItem>
              <ComparisonListItem>
                Lagebericht für GmbH/AG: 10-40 h
              </ComparisonListItem>
              <ComparisonListItem>
                Risiko: übersehene Pflichtangaben, ungeflaggte Anomalien
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>Gesamt: 40-200 h pro Mandant</ComparisonFooter>
          </BeforeCard>

          <AfterCard>
            <ComparisonHeadline>Nachher: KI-assisted</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                Auto-Mapping SKR auf HGB mit Lerneffekt: 1-2 h Review
              </ComparisonListItem>
              <ComparisonListItem>
                KI-Anomalieerkennung gegen Vorjahr und Branche: 1 h Review
              </ComparisonListItem>
              <ComparisonListItem>
                KI-Anhang-Entwurf mit RAG auf HGB: 2-4 h Review und Feinschliff
              </ComparisonListItem>
              <ComparisonListItem>
                KI-Lagebericht-Draft inkl. Prognose: 3-8 h Review
              </ComparisonListItem>
              <ComparisonListItem>
                Steuerberater bestätigt pro Abschnitt im Vier-Augen-Prinzip
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>Gesamt: 8-40 h pro Mandant</ComparisonFooter>
          </AfterCard>
        </ComparisonCard>
      </ContentWrapper>

      {/* 6. SAVINGS */}
      <ContentWrapper colorScheme="gradient-cool">
        <IntroBox>
          <IntroBox.PreHeadline>Was bringt das in Euro?</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Amortisation in 6-7 Monaten
          </IntroBox.Headline>
          <IntroBox.Subline>
            Rechenbeispiel für 50 Jahresabschlüsse pro Saison, gemischt aus
            BWA-Mandaten und mittelständischen GmbHs.
          </IntroBox.Subline>
        </IntroBox>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
          <SavingsCard>
            <SavingsBadge>
              Amortisation in{" "}
              <SavingsBadgeHighlight>6-7</SavingsBadgeHighlight> Monaten
            </SavingsBadge>
            <SavingsItems>
              <SavingsItem label="Setup einmalig">25.000 €</SavingsItem>
              <SavingsItem label="Betrieb pro Monat">2.500 €</SavingsItem>
              <SavingsItem label="Ersparnis pro Monat" highlight>
                4.000 €
              </SavingsItem>
            </SavingsItems>
          </SavingsCard>

          <RoiCalculation>
            <RoiAssumption>
              50 Jahresabschlüsse pro Saison, im Schnitt 24 h Ersparnis pro
              Abschluss
            </RoiAssumption>
            <RoiRow label="Stunden gespart pro Abschluss">24 h</RoiRow>
            <RoiRow label="Stundensatz">65 € / h</RoiRow>
            <RoiRow label="Ersparnis pro Abschluss" highlight>
              1.560 €
            </RoiRow>
            <RoiRow label="Jahresersparnis (50 × 1.560 €)">78.000 €</RoiRow>
            <RoiRow label="Im Schnitt pro Monat (78.000 € / 12)">6.500 €</RoiRow>
            <RoiRow label="Betrieb pro Monat">− 2.500 €</RoiRow>
            <RoiTotal label="Netto pro Monat">4.000 €</RoiTotal>
          </RoiCalculation>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/roi-rechner/document?docs=4&before=2880&after=1440&hourly=65&tier=large&setup=25000&maint=2500"
            className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary-700"
          >
            Eigenes ROI mit dem Calculator berechnen
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
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
      </ContentWrapper>

      {/* 7. FAQ */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>FAQ</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Häufige Fragen zur KI-Bilanz und KI-Abschlusserstellung
          </IntroBox.Headline>
        </IntroBox>
        <FaqContainer
          faqs={[
            {
              question:
                "Wie zuverlässig sind die KI-Texte für Anhang und Lagebericht, kann ich die einfach übernehmen?",
              answer:
                "Die KI liefert einen Entwurf, keine fertige Freigabe. In Pilotkanzleien sitzen die HGB-Anhangstexte zu 70-85% auf Anhieb, der Steuerberater feilt den Rest im Review-Workflow nach. Jeder Abschnitt wird im Vier-Augen-Prinzip einzeln bestätigt, der Audit-Trail ist revisionssicher dokumentiert. Die Verantwortung bleibt zu 100% beim Steuerberater, die KI ist Assistent, kein Ersatz.",
            },
            {
              question: "Wer haftet, wenn die KI eine Pflichtangabe vergisst?",
              answer:
                "Berufsrechtlich haftet weiterhin der Steuerberater. Der Workflow reduziert das Risiko allerdings strukturell: jede Pflichtangabe nach § 264-289 HGB ist als eigener Block im Prompt-Template definiert, die KI muss jeden Block aktiv liefern. Im Review-UI ist sichtbar, welche Pflichtangabe noch fehlt oder als 'nicht zutreffend' begründet wurde. Bluebatch garantiert Workflow-Integrität, der Steuerberater gibt fachlich frei.",
            },
            {
              question: "Wie wird das HGB-Konten-Mapping je Mandant gepflegt?",
              answer:
                "Beim ersten Abschluss mit Bluebatch wird das bestehende SKR03/SKR04-auf-HGB-Mapping aus DATEV importiert und im Mandanten-Profil gespeichert. Korrekturen im Review-Workflow fließen automatisch ins Mandanten-Mapping zurück, beim nächsten Abschluss sitzt das Mapping zu 95% sofort. Die Kanzlei kann globale Mapping-Regeln definieren, die für alle Mandanten gelten, und Mandanten-spezifische Overrides ergänzen.",
            },
            {
              question:
                "Funktioniert das auch für kleine Mandanten nach § 267a HGB oder BWA-Abschluss?",
              answer:
                "Ja. Der Workflow erkennt die Größenklasse nach § 267/267a HGB automatisch aus Bilanzsumme, Umsatzerlösen und Arbeitnehmerzahl. Kleinstkapitalgesellschaften nach § 267a bekommen den abgespeckten Pflichtangaben-Umfang, BWA-Mandanten ohne Bilanzierungspflicht erhalten eine schlanke Auswertung mit Plausibilisierung gegen BWA und Steuererklärung. Vom 40-h-Mandant bis zum 200-h-Konzernanhang skaliert ein einziger Workflow.",
            },
            {
              question:
                "Welche LLMs werden genutzt und wo liegen die Daten, was ist mit DSGVO und Mandantengeheimnis?",
              answer:
                "Standard-Setup nutzt Claude 4.7 (Anthropic) für rechtliche HGB-Texte und GPT-4 (Azure OpenAI) für Zahlen-Plausibilisierung. Alles über EU-Endpunkte mit Enterprise-DPA, kein Training auf Kanzleidaten. Für sensible Mandate ist eine On-Premise-Variante mit lokalen Open-Source-LLMs (Llama, Mistral) auf eigener GPU verfügbar. Hosting in Frankfurt, AVV mit deutscher GmbH, das Steuergeheimnis nach § 203 StGB ist vertraglich abgesichert.",
            },
            {
              question:
                "Wie funktioniert die E-Bilanz und Bundesanzeiger-Übermittlung?",
              answer:
                "Nach Steuerberater-Freigabe generiert der Workflow die E-Bilanz-XBRL-Datei nach Taxonomie der Finanzverwaltung und übermittelt sie über ELSTER. Die Offenlegung beim Bundesanzeiger und die Hinterlegung im Unternehmensregister laufen ebenfalls automatisch, über die jeweilige Schnittstelle. Statusrückmeldungen landen im Mandanten-Dossier, abgelehnte Übermittlungen werden mit konkreter Fehlermeldung an den Steuerberater eskaliert.",
            },
            {
              question:
                "Können wir auch IFRS-Abschlüsse damit unterstützen oder nur HGB?",
              answer:
                "Der Standard-Workflow ist auf HGB-Abschlüsse ausgelegt (§ 264-289 HGB), weil dort der Markt für deutsche Steuerkanzleien liegt. IFRS-Erweiterungen sind technisch machbar, weil die KI nur eine andere Pflichtangaben-Prompt-Bibliothek braucht. Wir setzen IFRS-Workflows projektbezogen für Kanzleien mit Konzernmandanten und kapitalmarktorientierten Unternehmen auf. Für Big-4-Niveau-Abschlüsse haben wir aktuell keine Out-of-the-Box-Lösung.",
            },
          ]}
        />
      </ContentWrapper>

      {/* 8. FINAL CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
