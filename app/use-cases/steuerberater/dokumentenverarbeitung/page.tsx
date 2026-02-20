import type { Metadata } from "next";
import Image from "next/image";
import ContentWrapper from "@/components/content-wrapper";
import Typo from "@/components/typo";
import type { PageConfig } from "@/lib/get-subpages";
import BackgroundHero from "@/components/hero-components/background-hero";
import ContactButton from "@/components/buttons/contact-button";
import SimpleGrid from "@/components/simple-grid";
import ComparisonCard, {
  BeforeCard,
  AfterCard,
  ComparisonHeadline,
  ComparisonList,
  ComparisonListItem,
  ComparisonFooter,
} from "@/components/cards/comparison-card";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/timeline-as-steps";
import TabGroup, {
  TabNavigation,
  TabItem,
  TabContent,
} from "@/components/tab-group";
import ConsultationCtaDefault from "@/components/consultation-cta-default";
import { FaqContainer } from "@/components/faqs";
import IntroBox from "@/components/intro-box";
import Customer from "@/components/customer/customer";
import SavingsCard, {
  SavingsBadge,
  SavingsItems,
  SavingsItem,
} from "@/components/cards/savings-card";

export const pageConfig: PageConfig = {
  title: "Dokumentenverarbeitung",
  description:
    "Belege, Rechnungen und Steuerdokumente automatisch erkennen, klassifizieren und verarbeiten.",
};

export const metadata: Metadata = {
  title: "Dokumentenverarbeitung – Steuerberater | Bluebatch",
  description:
    "Wie Bluebatch Steuerberatern hilft, Belege und Dokumente automatisch zu verarbeiten. 70% weniger manuelle Erfassung.",
  openGraph: {
    title: "Dokumentenverarbeitung – Steuerberater | Bluebatch",
    description:
      "Belege, Rechnungen und Steuerunterlagen automatisch erfassen und klassifizieren.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch Dokumentenverarbeitung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dokumentenverarbeitung – Steuerberater | Bluebatch",
    description:
      "Belege, Rechnungen und Steuerunterlagen automatisch erfassen und klassifizieren.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/use-cases/steuerberater/dokumentenverarbeitung",
  },
};

const stats = [
  { value: 85, suffix: "%", label: "Schnellere Verarbeitung" },
  { value: 99, suffix: "%", label: "Weniger Erfassungsfehler" },
  { value: 4, suffix: "x", label: "Mehr Belege pro Mitarbeiter" },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection noPadding>
        <BackgroundHero
          imageSrc="/images/machine-learning.jpg"
          overlayOpacity={0.8}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            Dokumentenverarbeitung
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            Belege{" "}
            <BackgroundHero.Highlight>automatisch</BackgroundHero.Highlight>{" "}
            erkennen und buchen
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            KI-gestützte Klassifizierung, Datenextraktion und DATEV-Integration.
            Von 3-4 Minuten auf 20 Sekunden pro Beleg – GoBD-konform.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">ROI-Analyse anfragen</ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            {stats.map((stat, index) => (
              <BackgroundHero.Stat
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                index={index}
              />
            ))}
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      <ContentWrapper>
        <SimpleGrid cols={2} className="items-center gap-12">
          <div>
            <IntroBox textCentered={false}>
              <IntroBox.PreHeadline>Das Problem</IntroBox.PreHeadline>
              <IntroBox.Headline>
                40-50% der Arbeitszeit für Dateneingabe
              </IntroBox.Headline>
              <IntroBox.Subline>
                Jeder Beleg muss gesichtet, klassifiziert und manuell ins System
                eingegeben werden. Bei 10.000+ Belegen pro Monat bedeutet das
                hunderte Arbeitsstunden.
              </IntroBox.Subline>
              <IntroBox.Subline>
                Die Fehlerquote bei manueller Klassifizierung liegt bei 5-10%.
                Steuerliche Fehlbuchungen können bei Betriebsprüfungen teuer
                werden.
              </IntroBox.Subline>
            </IntroBox>
          </div>
          <div>
            <TimelineAsSteps>
              <TimelineAsStepsStep value={1}>
                <Typo.H3 className="mt-2!">Beleg eingeht</Typo.H3>
                <Typo.Paragraph>
                  Per E-Mail, DATEV DUO oder Pendelordner
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={2}>
                <Typo.H3 className="mt-2!">Mandant zuordnen</Typo.H3>
                <Typo.Paragraph>
                  Manuelle Recherche bei unklaren Absendern
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={3}>
                <Typo.H3 className="mt-2!">Daten erfassen</Typo.H3>
                <Typo.Paragraph>
                  Datum, Betrag, Steuersatz, Sachkonto abtippen
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={4} isLast>
                <Typo.H3 className="mt-2!">DATEV buchen</Typo.H3>
                <Typo.Paragraph>
                  Kontierung und Übertragung ins System
                </Typo.Paragraph>
              </TimelineAsStepsStep>
            </TimelineAsSteps>
          </div>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper background="bg-gray-100">
        <IntroBox>
          <IntroBox.PreHeadline>Belegarten</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Alle Dokumenttypen, ein Workflow
          </IntroBox.Headline>
          <IntroBox.Subline>
            Der Workflow verarbeitet alle gängigen Belegarten und erkennt
            steuerliche Besonderheiten automatisch.
          </IntroBox.Subline>
        </IntroBox>

        <TabGroup defaultValue="rechnungen">
          <TabNavigation>
            <TabItem value="rechnungen">Rechnungen</TabItem>
            <TabItem value="kontoauszuege">Kontoauszüge</TabItem>
            <TabItem value="reisekosten">Reisekosten</TabItem>
            <TabItem value="sonderfaelle">Sonderfälle</TabItem>
          </TabNavigation>

          <TabContent value="rechnungen">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>Eingangs- und Ausgangsrechnungen</Typo.H3>
                <Typo.Paragraph>
                  Automatische Extraktion aller relevanten Daten: Datum, Betrag,
                  Steuersätze (7%/19%), Rechnungsnummer, Lieferant.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>
                    95-99% Genauigkeit bei digitalen PDFs
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Automatische Steuerschlüssel-Ermittlung
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Reverse-Charge-Erkennung (§13b UStG)
                  </Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/business-analytics.jpg"
                  alt="Rechnungsextraktion"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>

          <TabContent value="kontoauszuege">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>Bank- und Kontoauszüge</Typo.H3>
                <Typo.Paragraph>
                  Automatischer Abruf via FinTS/PSD2 und intelligente Zuordnung
                  zu bestehenden Buchungen.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>Automatische Bank-Integration</Typo.ListItem>
                  <Typo.ListItem>Matching mit offenen Posten</Typo.ListItem>
                  <Typo.ListItem>Erkennung von Daueraufträgen</Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/data-flow.jpg"
                  alt="Kontoauszug-Verarbeitung"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>

          <TabContent value="reisekosten">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>Reise- und Bewirtungsbelege</Typo.H3>
                <Typo.Paragraph>
                  Komplexe Belege mit besonderen steuerlichen Anforderungen
                  werden korrekt klassifiziert.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>
                    Verpflegungsmehraufwand-Berechnung
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Bewirtung: 70% vs. 100% Abzugsfähigkeit
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Prüfung auf Pflichtangaben (Anlass, Teilnehmer)
                  </Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/web-development.jpg"
                  alt="Reisekostenabrechnung"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>

          <TabContent value="sonderfaelle">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>Steuerliche Sonderfälle</Typo.H3>
                <Typo.Paragraph>
                  Automatische Erkennung von Sonderfällen, die besondere
                  Behandlung erfordern.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>
                    Innergemeinschaftlicher Erwerb (§1a UStG)
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Drittland-Importe mit Einfuhrumsatzsteuer
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Kleinunternehmerregelung §19 UStG
                  </Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/document-automation.jpg"
                  alt="Sonderfälle"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>
        </TabGroup>
      </ContentWrapper>

      <ContentWrapper noPadding>
        <Customer />
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>ROI-Kalkulation</IntroBox.PreHeadline>
          <IntroBox.Headline>400-600% ROI im ersten Jahr</IntroBox.Headline>
          <IntroBox.Subline>
            Für eine mittelgroße Kanzlei mit 200 Mandanten und 15.000 Belegen
            pro Monat:
          </IntroBox.Subline>
        </IntroBox>

        <ComparisonCard className="mt-10">
          <BeforeCard>
            <ComparisonHeadline>Vorher: Manuell</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                2,5 FTE für Belegerfassung @ 45.000 €/Jahr
              </ComparisonListItem>
              <ComparisonListItem>
                3-4 Minuten pro Beleg (Sichten, Klassifizieren, Erfassen)
              </ComparisonListItem>
              <ComparisonListItem>
                5-10% Fehlerquote bei Klassifizierung
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>Gesamt: ~112.500 €/Jahr</ComparisonFooter>
          </BeforeCard>

          <AfterCard>
            <ComparisonHeadline>Nachher: Automatisiert</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                0,5 FTE für Exception Handling @ 45.000 €/Jahr
              </ComparisonListItem>
              <ComparisonListItem>
                20 Sekunden pro Beleg (inkl. Prüfung)
              </ComparisonListItem>
              <ComparisonListItem>
                1-3% Fehlerquote nach Training
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>Gesamt: ~37.500 €/Jahr</ComparisonFooter>
          </AfterCard>
        </ComparisonCard>

        <SavingsCard>
          <SavingsBadge>ROI im ersten Jahr: 400-600%</SavingsBadge>
          <SavingsItems>
            <SavingsItem label="Jährliche Ersparnis" highlight>
              75.000 €
            </SavingsItem>
            <SavingsItem label="Amortisation">2-4 Monate</SavingsItem>
            <SavingsItem label="Kosten pro Beleg">-83%</SavingsItem>
          </SavingsItems>
        </SavingsCard>
      </ContentWrapper>

      <ContentWrapper noPadding>
        <ConsultationCtaDefault />
      </ContentWrapper>

      <ContentWrapper>
        <FaqContainer
          faqs={[
            {
              question: "Ist die Lösung GoBD-konform?",
              answer:
                "Ja, die Lösung erfüllt alle GoBD-Anforderungen: Unveränderbarkeit durch revisionssichere Archivierung mit Zeitstempeln und Hashwerten, vollständige Nachvollziehbarkeit aller Verarbeitungsschritte, und 10-jährige Aufbewahrung. Wir empfehlen, die Verfahrensdokumentation von einem IT-Prüfer abnehmen zu lassen.",
            },
            {
              question: "Wie genau ist die Datenextraktion?",
              answer:
                "Bei strukturierten digitalen PDFs erreichen wir 95-99% Genauigkeit. Bei semi-strukturierten Dokumenten (unterschiedliche Layouts) 85-90%. Das System flaggt Extraktionen mit niedrigem Confidence Score automatisch für manuelle Prüfung. Die Genauigkeit verbessert sich kontinuierlich durch Machine Learning.",
            },
            {
              question: "Wie funktioniert die DATEV-Integration?",
              answer:
                "Wir bieten mehrere Integrationswege: DATEVconnect online API für Echtzeit-Synchronisation, ASCII-Export für ältere DATEV-Versionen, und DATEV Unternehmen Online Anbindung. Die Belegbilder werden automatisch mit den Buchungen verknüpft.",
            },
            {
              question: "Was passiert bei komplexen Belegen?",
              answer:
                "Das Human-in-the-Loop-System routet komplexe Fälle automatisch an erfahrene Mitarbeiter. Sie sehen das Belegbild neben dem KI-Vorschlag und können in 30-60 Sekunden korrigieren oder bestätigen. Jede Korrektur verbessert das Modell für zukünftige ähnliche Belege.",
            },
          ]}
        />
      </ContentWrapper>
    </>
  );
}
