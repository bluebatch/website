import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import type { PageConfig } from "@/lib/get-subpages";
import BackgroundHero from "@/components/heroes/background-hero";
import ContactButton from "@/components/buttons/contact-button";
import SimpleGrid from "@/components/layout/simple-grid";
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
} from "@/components/ui/timeline-as-steps";
import TabGroup, {
  TabNavigation,
  TabItem,
  TabContent,
} from "@/components/ui/tab-group";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { FaqContainer } from "@/components/ui/faqs";
import IntroBox from "@/components/ui/intro-box";
import Customer from "@/components/sections/customer/customer";
import SavingsCard, {
  SavingsBadge,
  SavingsItems,
  SavingsItem,
} from "@/components/cards/savings-card";

export const pageConfig: PageConfig = {
  title: "Belegprüfung",
  description:
    "Belege automatisch prüfen, klassifizieren und an DATEV übergeben.",
};

export const metadata: Metadata = {
  title: "Belegprüfung automatisieren - Steuerberater | Bluebatch",
  description:
    "Wie Bluebatch die Belegprüfung für Steuerberater automatisiert. 80% weniger manuelle Prüfung, 99.2% Genauigkeit.",
  openGraph: {
    title: "Belegprüfung automatisieren - Steuerberater | Bluebatch",
    description:
      "OCR und KI-gestützte Belegprüfung mit automatischer DATEV-Übergabe. 15 Sekunden statt 8 Minuten pro Beleg.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch Belegprüfung automatisieren",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Belegprüfung automatisieren - Steuerberater | Bluebatch",
    description:
      "OCR und KI-gestützte Belegprüfung mit automatischer DATEV-Übergabe. 15 Sekunden statt 8 Minuten pro Beleg.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/use-cases/steuerberater/belegpruefung",
  },
};

const stats = [
  { value: 80, suffix: "%", label: "Weniger manuelle Prüfung" },
  { value: 15, suffix: " Sek.", label: "Statt 8 Min. pro Beleg" },
  { value: 99.2, suffix: "%", label: "Genauigkeit" },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection noPadding>
        <BackgroundHero
          imageSrc="/images/invoice-verification.jpg"
          overlayOpacity={0.8}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            Belegprüfung automatisieren
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            Belegprüfung{" "}
            <BackgroundHero.Highlight>automatisch</BackgroundHero.Highlight>{" "}
            erledigen
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            KI-gestützte Belegerkennung, regelbasierte Plausibilitätsprüfung und
            automatische DATEV-Übergabe. Mehr Zeit für echte Steuerberatung.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">Demo anfragen</ContactButton>
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
                Jeder Beleg wird manuell geprüft
              </IntroBox.Headline>
              <IntroBox.Subline>
                Datum, Betrag, Umsatzsteuer, Kontierung: Steuerberater prüfen
                jeden Beleg von Hand. Bei hunderten Belegen pro Mandant und
                Monat summiert sich der Aufwand enorm.
              </IntroBox.Subline>
              <IntroBox.Subline>
                Fehler bei der manuellen Prüfung kosten Zeit und Geld. Falsche
                Kontierungen, übersehene Duplikate oder fehlende Pflichtangaben
                führen zu Nacharbeit und Haftungsrisiken.
              </IntroBox.Subline>
            </IntroBox>
          </div>
          <div>
            <TimelineAsSteps>
              <TimelineAsStepsStep value={1}>
                <Typo.H3 className="mt-2!">Beleg eingeht</Typo.H3>
                <Typo.Paragraph>
                  Per E-Mail, Upload oder Scan, oft in unterschiedlichen
                  Formaten
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={2}>
                <Typo.H3 className="mt-2!">Daten abtippen</Typo.H3>
                <Typo.Paragraph>
                  Datum, Betrag, USt-Satz und Kontierung manuell erfassen
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={3}>
                <Typo.H3 className="mt-2!">Plausibilität prüfen</Typo.H3>
                <Typo.Paragraph>
                  Pflichtangaben, Duplikate und Beträge kontrollieren
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={4} isLast>
                <Typo.H3 className="mt-2!">Fehler korrigieren</Typo.H3>
                <Typo.Paragraph>
                  Rückfragen beim Mandanten, Nachbuchungen, Korrekturen
                </Typo.Paragraph>
              </TimelineAsStepsStep>
            </TimelineAsSteps>
          </div>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray">
        <IntroBox>
          <IntroBox.PreHeadline>Automatisierung</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Vier Stufen der automatisierten Belegprüfung
          </IntroBox.Headline>
          <IntroBox.Subline>
            Von der Erkennung bis zur DATEV-Übergabe, vollautomatisch.
          </IntroBox.Subline>
        </IntroBox>

        <TabGroup defaultValue="erkennung">
          <TabNavigation>
            <TabItem value="erkennung">Belegerkennung</TabItem>
            <TabItem value="pruefung">Regelbasierte Prüfung</TabItem>
            <TabItem value="datev">DATEV-Integration</TabItem>
            <TabItem value="ausnahmen">Ausnahmebehandlung</TabItem>
          </TabNavigation>

          <TabContent value="erkennung">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>Automatische Belegerkennung</Typo.H3>
                <Typo.Paragraph>
                  OCR und KI extrahieren alle relevanten Daten aus Belegen,
                  unabhängig vom Format. Rechnungen, Quittungen und
                  Kontoauszüge werden automatisch klassifiziert.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>
                    OCR-Erkennung für alle gängigen Belegformate
                  </Typo.ListItem>
                  <Typo.ListItem>
                    KI-gestützte Datenextraktion (Datum, Betrag, USt, Lieferant)
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Automatische Klassifizierung nach Belegart
                  </Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/document-automation.jpg"
                  alt="Automatische Belegerkennung mit OCR und KI"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>

          <TabContent value="pruefung">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>Regelbasierte Plausibilitätsprüfung</Typo.H3>
                <Typo.Paragraph>
                  Automatische Prüfung gegen definierte Regeln:
                  Pflichtangaben nach UStG, Betragsplausibilität,
                  Duplikaterkennung und Kontierungsvorschläge.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>
                    Pflichtangaben-Check nach §14 UStG
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Duplikaterkennung über Belegnummer und Betrag
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Automatische Kontierungsvorschläge basierend auf Lernmodell
                  </Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/compliance-signs.jpg"
                  alt="Regelbasierte Belegprüfung"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>

          <TabContent value="datev">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>Nahtlose DATEV-Integration</Typo.H3>
                <Typo.Paragraph>
                  Geprüfte Belege werden automatisch an DATEV übergeben.
                  Buchungssätze, Kontierungen und Belegbilder landen direkt im
                  richtigen Mandanten-Ordner.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>
                    Export im DATEV-kompatiblen Format
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Automatische Zuordnung zum Mandanten
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Belegbild und Buchungssatz verknüpft
                  </Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/datev-integration.jpg"
                  alt="DATEV-Integration für geprüfte Belege"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>

          <TabContent value="ausnahmen">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>Intelligente Ausnahmebehandlung</Typo.H3>
                <Typo.Paragraph>
                  Unklare Belege werden nicht einfach durchgewunken. Ein
                  strukturierter Workflow leitet sie zur Klärung an den
                  zuständigen Sachbearbeiter oder den Mandanten weiter.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>
                    Automatische Eskalation bei unklaren Belegen
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Rückfrage-Workflow an den Mandanten
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Lerneffekt: Einmal geklärte Fälle werden künftig erkannt
                  </Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/data-quality.jpg"
                  alt="Ausnahmebehandlung für unklare Belege"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>
        </TabGroup>
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <Customer />
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>ROI-Kalkulation</IntroBox.PreHeadline>
          <IntroBox.Headline>120% ROI im ersten Jahr</IntroBox.Headline>
          <IntroBox.Subline>
            Für eine mittelgroße Kanzlei mit 400 Mandanten und ca. 8.000
            Belegen pro Monat:
          </IntroBox.Subline>
        </IntroBox>

        <ComparisonCard className="mt-10">
          <BeforeCard>
            <ComparisonHeadline>Vorher: Manuell</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                3 Sachbearbeiter für Belegprüfung @ 45.000 €/Jahr
              </ComparisonListItem>
              <ComparisonListItem>
                Fehlerkorrektur und Nacharbeit: 15.000 €/Jahr
              </ComparisonListItem>
              <ComparisonListItem>
                Überstunden in Spitzenzeiten (Jahresabschluss): 12.000 €/Jahr
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>Gesamt: ~162.000 €/Jahr</ComparisonFooter>
          </BeforeCard>

          <AfterCard>
            <ComparisonHeadline>Nachher: Automatisiert</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                1 Sachbearbeiter für Ausnahmen und Qualitätskontrolle @ 45.000
                €/Jahr
              </ComparisonListItem>
              <ComparisonListItem>
                Automatisierungsplattform: 8.400 €/Jahr
              </ComparisonListItem>
              <ComparisonListItem>
                Einmalige Implementierung: 30.000 € (auf Jahr 1 angerechnet)
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>
              Jahr 1: ~83.400 € | Ab Jahr 2: ~53.400 €/Jahr
            </ComparisonFooter>
          </AfterCard>
        </ComparisonCard>

        <SavingsCard>
          <SavingsBadge>ROI im ersten Jahr: 120%</SavingsBadge>
          <SavingsItems>
            <SavingsItem label="Ersparnis Jahr 1" highlight>
              78.600 €
            </SavingsItem>
            <SavingsItem label="Ab Jahr 2">108.600 €/Jahr</SavingsItem>
            <SavingsItem label="Amortisation">~4 Monate</SavingsItem>
          </SavingsItems>
        </SavingsCard>
      </ContentWrapper>

      {/* Verwandte Lösungen */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.Headline>Verwandte Lösungen</IntroBox.Headline>
        </IntroBox>
        <Typo.Paragraph className="text-gray-600 text-center max-w-3xl mx-auto">
          Erfahren Sie mehr über{" "}
          <Link href="/ki-dokumentenmanagement" className="text-primary-500 hover:underline">
            KI-Dokumentenverarbeitung
          </Link>
          ,{" "}
          <Link href="/n8n-datev" className="text-primary-500 hover:underline">
            n8n-DATEV-Integration
          </Link>
          {" "}oder entdecken Sie die{" "}
          <Link href="/use-cases/steuerberater/mandantenkommunikation" className="text-primary-500 hover:underline">
            automatisierte Mandantenkommunikation
          </Link>
          .
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>

      <ContentWrapper>
        <FaqContainer
          faqs={[
            {
              question: "Welche Belegformate werden unterstützt?",
              answer:
                "Die KI erkennt alle gängigen Formate: PDF, JPG, PNG, TIFF sowie E-Rechnungen (ZUGFeRD, XRechnung). Auch Fotos von Papierbelegen werden zuverlässig verarbeitet. Die Erkennungsrate liegt bei über 99% für maschinenlesbare Dokumente.",
            },
            {
              question: "Wie genau ist die automatische Belegerkennung?",
              answer:
                "Die Erkennungsgenauigkeit liegt bei 99,2% für Standardbelege. Bei unklaren Fällen wird der Beleg automatisch zur manuellen Prüfung markiert. Das System lernt aus Korrekturen und verbessert sich kontinuierlich.",
            },
            {
              question: "Funktioniert die Lösung mit DATEV Unternehmen Online?",
              answer:
                "Ja, die Integration unterstützt DATEV Unternehmen Online, DATEV Kanzlei-Rechnungswesen und DATEVconnect. Geprüfte Belege und Buchungsvorschläge werden automatisch im richtigen Format übergeben.",
            },
            {
              question: "Was passiert bei Belegen, die nicht erkannt werden?",
              answer:
                "Nicht erkannte oder unklare Belege werden in einen Prüf-Workflow geleitet. Der zuständige Sachbearbeiter erhält eine Benachrichtigung mit dem Originaldokument und den bisherigen Erkennungsergebnissen. Nach manueller Klärung lernt das System für zukünftige ähnliche Belege.",
            },
            {
              question: "Wie ist der Datenschutz bei der Belegverarbeitung gewährleistet?",
              answer:
                "Alle Belege werden DSGVO-konform verarbeitet: Hosting in Deutschland, TLS-Verschlüsselung, Auftragsverarbeitungsverträge und automatische Löschfristen. Bei Self-Hosting verbleiben alle Daten in der Kanzlei-Infrastruktur. Das Steuergeheimnis wird durch entsprechende Verträge gewahrt.",
            },
            {
              question: "Wie lange dauert die Implementierung?",
              answer:
                "Die Grundeinrichtung dauert 2-4 Wochen. In dieser Zeit werden die Schnittstellen konfiguriert, Kontierungsregeln definiert und das System mit historischen Belegen trainiert. Nach einer Pilotphase mit einem Mandanten wird schrittweise ausgerollt.",
            },
          ]}
        />
      </ContentWrapper>
    </>
  );
}
