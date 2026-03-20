import type { Metadata } from "next";
import Image from "next/image";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import type { PageConfig } from "@/lib/get-subpages";
import BackgroundHero from "@/components/heroes/background-hero";
import ContactButton from "@/components/buttons/contact-button";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
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
import PhaseCard, {
  PhaseCardHeader,
  PhaseCardTitle,
  PhaseCardBadge,
  PhaseCardDescription,
} from "@/components/cards/phase-card";
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
  title: "Digitales Onboarding & Dokumentenmanagement",
  description:
    "Vom AÜG-Vertrag bis zum Einsatzstart - volldigitales Onboarding mit e-Signatur und automatischer Dokumentenprüfung.",
};

export const metadata: Metadata = {
  title: "Digitales Onboarding Zeitarbeit | Bluebatch",
  description:
    "Digitales Onboarding für Personaldienstleister: e-Signatur für AÜG-Verträge, automatische Dokumentenprüfung und Self-Service-Portal. 60% schnellere Einarbeitung.",
  openGraph: {
    title: "Digitales Onboarding - Personaldienstleister | Bluebatch",
    description:
      "Volldigitales Onboarding für Zeitarbeitskräfte mit e-Signatur und automatischer Dokumentenprüfung.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch Digitales Onboarding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digitales Onboarding - Personaldienstleister | Bluebatch",
    description:
      "Volldigitales Onboarding für Zeitarbeitskräfte mit e-Signatur und automatischer Dokumentenprüfung.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/use-cases/personaldienstleister/digitales-onboarding",
  },
};

const stats = [
  { value: 60, suffix: "%", label: "Schnelleres Onboarding" },
  { value: 95, suffix: "%", label: "Dokumenten-Vollständigkeit" },
  { value: 0, suffix: " Papier", label: "Komplett papierlos" },
];

export default function Page() {
  return (
    <>
      {/* Section 1: BackgroundHero */}
      <ContentWrapper isFirstSection noPadding>
        <BackgroundHero
          imageSrc="/images/document-automation.jpg"
          overlayOpacity={0.8}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            Digitales Onboarding
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            Vom Vertrag zum Einsatz -{" "}
            <BackgroundHero.Highlight>
              komplett digital
            </BackgroundHero.Highlight>
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Digitale Vertragsunterschrift mit QES oder einfacher e-Signatur,
            KI-gestützte Dokumentenprüfung und Self-Service-Portal für
            Zeitarbeitskräfte. Keine Kurierfahrten, keine fehlenden Unterlagen,
            kein Papierstau - auch nach BEG IV 2025 rechtssicher.
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

      {/* Section 2: Das Problem - Analoge Prozesse */}
      <ContentWrapper>
        <SimpleGrid cols={2} className="items-start gap-12">
          <div>
            <IntroBox textCentered={false}>
              <IntroBox.PreHeadline>Das Problem</IntroBox.PreHeadline>
              <IntroBox.Headline>
                Analoge Prozesse bremsen kurzfristige Einsätze
              </IntroBox.Headline>
              <IntroBox.Subline>
                Vor dem Bürokratieentlastungsgesetz IV (BEG IV) verlangte § 12
                AÜG die strenge Schriftform für Arbeitnehmerüberlassungsverträge
                - beide Vertragsparteien mussten die Vertragsurkunde
                eigenhändig unterschreiben. Kurierfahrten für Unterschriften,
                fehlende Dokumente und unvollständige Personalakten verzögerten
                den Einsatzstart um Tage. Bei Verstoß drohte
                Vertragsnichtigkeit und Bußgelder bis 30.000 EUR.
              </IntroBox.Subline>
              <IntroBox.Subline>
                Coffreo beziffert die Einsparung durch Digitalisierung auf 1-4
                Arbeitstage pro Monat. Gleichzeitig wünschen sich 93% der
                Zeitarbeitnehmenden laut zvoove GVP Industry Pulse 2025 einen
                festen persönlichen Ansprechpartner - digitale Prozesse
                schaffen den Freiraum dafür.
              </IntroBox.Subline>
            </IntroBox>
          </div>
          <div>
            <TimelineAsSteps>
              <TimelineAsStepsStep value={1}>
                <Typo.H3 className="mt-2!">
                  Vertrag manuell erstellen
                </Typo.H3>
                <Typo.Paragraph>
                  AÜG-Vertrag per Hand ausfüllen, drucken und zur Unterschrift
                  vorbereiten - oft in mehrfacher Ausfertigung.
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={2}>
                <Typo.H3 className="mt-2!">
                  Unterschrift per Kurier einholen
                </Typo.H3>
                <Typo.Paragraph>
                  Physischer Transport zur Unterschrift: Kurier, persönlicher
                  Termin oder Postweg - bei kurzfristigen Einsätzen kaum
                  machbar.
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={3}>
                <Typo.H3 className="mt-2!">
                  Dokumente zusammentragen
                </Typo.H3>
                <Typo.Paragraph>
                  Personalausweis, SV-Nachweis, Krankenkassenbescheinigung,
                  Steuer-ID und Qualifikationen einzeln einsammeln - oft per
                  Fax oder Kopie.
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={4} isLast>
                <Typo.H3 className="mt-2!">
                  Einsatzinformation manuell erstellen
                </Typo.H3>
                <Typo.Paragraph>
                  Einsatzort, Arbeitszeiten, Ansprechpartner und
                  Sicherheitshinweise per Word-Vorlage zusammenstellen und
                  versenden.
                </Typo.Paragraph>
              </TimelineAsStepsStep>
            </TimelineAsSteps>
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Section 3: Der digitale Onboarding-Prozess (PhaseCard Timeline) */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>Die Lösung</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Der digitale Onboarding-Prozess in 5 Schritten
          </IntroBox.Headline>
          <IntroBox.Subline>
            Vom Vertragsabschluss über die Dokumentenerfassung bis zur
            automatischen Einsatzinformation - jeder Schritt läuft
            automatisiert, KI-gestützt und nachvollziehbar. Seit dem BEG IV
            (01.01.2025) genügt für AÜG-Verträge die Textform - doch wir
            empfehlen weiterhin die qualifizierte elektronische Signatur (QES)
            für maximale Beweissicherheit.
          </IntroBox.Subline>
        </IntroBox>

        <TimelineAsSteps>
          <TimelineAsStepsStep value={1}>
            <PhaseCard>
              <PhaseCardHeader>
                <PhaseCardTitle>
                  Vertrag generieren und digital signieren
                </PhaseCardTitle>
                <PhaseCardBadge>QES / eIDAS</PhaseCardBadge>
              </PhaseCardHeader>
              <PhaseCardDescription>
                Der AÜG-konforme Arbeitsvertrag wird automatisch aus den
                Stammdaten generiert (z.B. via CraftMyPDF oder JSReport) und per
                qualifizierter elektronischer Signatur (QES) oder einfacher
                e-Signatur unterschrieben. Anbieter wie Skribble, DocuSign oder
                sign-me (D-Trust/Bundesdruckerei) ermöglichen die rechtsgültige
                Signatur per Smartphone - die QES ist der eigenhändigen
                Unterschrift gemäß § 126a BGB gleichgestellt. Seit BEG IV
                genügt auch eine einfache elektronische Signatur (Textform §
                126b BGB), aber für höchste Beweissicherheit bleibt die QES die
                empfohlene Wahl.
              </PhaseCardDescription>
            </PhaseCard>
          </TimelineAsStepsStep>

          <TimelineAsStepsStep value={2}>
            <PhaseCard>
              <PhaseCardHeader>
                <PhaseCardTitle>
                  Dokumente per Self-Service hochladen
                </PhaseCardTitle>
                <PhaseCardBadge>Self-Service</PhaseCardBadge>
              </PhaseCardHeader>
              <PhaseCardDescription>
                Zeitarbeitskräfte laden über ein mobiloptimiertes
                Self-Service-Portal (z.B. zvoove Work App, Coffreo oder ein
                Custom-Portal mit n8n-Backend) ihre Pflichtdokumente hoch:
                Personalausweis, Sozialversicherungsausweis,
                Krankenkassenbescheinigung, Steuer-ID, Bankverbindung und je
                nach Einsatz Arbeitserlaubnis, Führungszeugnis oder
                Qualifikationsnachweise. Die Daten fließen direkt in den
                n8n-Workflow.
              </PhaseCardDescription>
            </PhaseCard>
          </TimelineAsStepsStep>

          <TimelineAsStepsStep value={3}>
            <PhaseCard>
              <PhaseCardHeader>
                <PhaseCardTitle>
                  KI-gestützte Dokumentenprüfung
                </PhaseCardTitle>
                <PhaseCardBadge>KI-geprüft</PhaseCardBadge>
              </PhaseCardHeader>
              <PhaseCardDescription>
                Hochgeladene Dokumente werden automatisch klassifiziert und
                validiert - per GPT-4o Vision, ABBYY FlexiCapture oder Azure AI
                Document Intelligence. Die KI erkennt den Dokumenttyp
                (Personalausweis, SV-Ausweis, Gesundheitszeugnis etc.),
                extrahiert Name, Geburtsdatum und Gültigkeitsdatum und gleicht
                die Daten mit den Stammdaten ab. Bei Ungültigkeit oder fehlenden
                Unterlagen wird automatisch eine Erinnerung versendet.
              </PhaseCardDescription>
            </PhaseCard>
          </TimelineAsStepsStep>

          <TimelineAsStepsStep value={4}>
            <PhaseCard>
              <PhaseCardHeader>
                <PhaseCardTitle>
                  Personalakte vollständig - Onboarding abgeschlossen
                </PhaseCardTitle>
                <PhaseCardBadge>Auto-Check</PhaseCardBadge>
              </PhaseCardHeader>
              <PhaseCardDescription>
                Sobald alle Pflichtdokumente geprüft und archiviert sind, wird
                die digitale Personalakte automatisch vervollständigt. Die
                Dokumente werden revisionssicher gespeichert - in einem DMS wie
                zvoove DMS+, d.velop documents oder DocuWare, alternativ in
                einer strukturierten Cloud-Ablage (AWS S3, Google Drive). Der
                Onboarding-Status im ERP-System (z.B. zvoove One) wird
                automatisch auf &quot;abgeschlossen&quot; gesetzt.
              </PhaseCardDescription>
            </PhaseCard>
          </TimelineAsStepsStep>

          <TimelineAsStepsStep value={5} isLast>
            <PhaseCard>
              <PhaseCardHeader>
                <PhaseCardTitle>
                  Einsatzinformation automatisch versenden
                </PhaseCardTitle>
                <PhaseCardBadge>Automatisch</PhaseCardBadge>
              </PhaseCardHeader>
              <PhaseCardDescription>
                24-48 Stunden vor Einsatzbeginn wird automatisch eine
                Einsatzinformation als PDF generiert und per E-Mail oder App an
                den Zeitarbeitnehmer versendet. Inhalt: Entleiher-Daten,
                Ansprechpartner mit Kontaktdaten, Einsatzzeitraum,
                Arbeitszeiten, Treffpunkt, Anfahrt, Tätigkeitsbeschreibung und
                Sicherheitshinweise. Parallel wird das interne Team per Slack
                oder Teams benachrichtigt.
              </PhaseCardDescription>
            </PhaseCard>
          </TimelineAsStepsStep>
        </TimelineAsSteps>
      </ContentWrapper>

      {/* Section 4: Alle Dokumenttypen abgedeckt (SimpleCard Grid) */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Dokumentenmanagement</IntroBox.PreHeadline>
          <IntroBox.Headline>Alle Dokumenttypen abgedeckt</IntroBox.Headline>
          <IntroBox.Subline>
            Von Pflichtdokumenten über bedingte Nachweise bis hin zu
            branchenspezifischen Zertifikaten - das System erkennt, prüft und
            archiviert jeden Dokumenttyp automatisch. Die Checkliste ist pro
            Einsatztyp konfigurierbar.
          </IntroBox.Subline>
        </IntroBox>

        <SimpleGrid cols={3}>
          <SimpleCard>
            <SimpleCard.Icon src="/icons/shield.svg" alt="Personalausweis" />
            <Typo.H3>Personalausweis / Reisepass</Typo.H3>
            <Typo.Paragraph>
              Identitätsnachweis und Arbeitsberechtigung. KI-Erkennung per
              Amazon Textract oder Azure AI Document Intelligence mit speziellem
              ID-Dokument-Modell. Automatischer Abgleich von Name und
              Geburtsdatum mit den Stammdaten. Gültigkeitsprüfung inklusive.
            </Typo.Paragraph>
            <SimpleCard.Footer>Pflicht</SimpleCard.Footer>
          </SimpleCard>

          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/file-check.svg"
              alt="Sozialversicherungsnachweis"
            />
            <Typo.H3>Sozialversicherungsnachweis</Typo.H3>
            <Typo.Paragraph>
              SV-Nummer für die Sozialversicherungs-Anmeldung. OCR-Extraktion
              der Sozialversicherungsnummer und persönlicher Daten. Automatische
              Weiterleitung an die Lohnbuchhaltung zur Krankenkassenanmeldung.
            </Typo.Paragraph>
            <SimpleCard.Footer>Pflicht</SimpleCard.Footer>
          </SimpleCard>

          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/globe.svg"
              alt="Arbeitserlaubnis"
            />
            <Typo.H3>Arbeitserlaubnis / Aufenthaltstitel</Typo.H3>
            <Typo.Paragraph>
              Pflicht bei Nicht-EU-Bürgern. Automatische Erkennung und
              Gültigkeitsprüfung. Der n8n-Workflow unterscheidet per IF-Node
              zwischen EU- und Nicht-EU-Bürgern und passt die erforderliche
              Dokumenten-Checkliste automatisch an.
            </Typo.Paragraph>
            <SimpleCard.Footer>Bedingt Pflicht</SimpleCard.Footer>
          </SimpleCard>

          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/graduation-cap.svg"
              alt="Qualifikationsnachweise"
            />
            <Typo.H3>Qualifikationsnachweise & Zertifikate</Typo.H3>
            <Typo.Paragraph>
              Zeugnisse, Schweißerscheine, Kranscheine, Staplerscheine und
              branchenspezifische Zertifikate. Dokumentenklassifizierung und
              Datenextraktion mit ABBYY FlexiCapture oder GPT-4o Vision.
              Automatische Zuordnung zum Qualifikationsprofil.
            </Typo.Paragraph>
            <SimpleCard.Footer>Bedingt Pflicht</SimpleCard.Footer>
          </SimpleCard>

          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/heart.svg"
              alt="Gesundheitszeugnis"
            />
            <Typo.H3>Gesundheitszeugnis / ärztl. Bescheinigung</Typo.H3>
            <Typo.Paragraph>
              Erforderlich bei Tätigkeiten im Lebensmittelbereich (IfSG § 43)
              oder Gesundheitswesen. Automatische Prüfung auf Vollständigkeit,
              Gültigkeit und korrekte Ausstellung. Fristenüberwachung bei
              befristeten Bescheinigungen.
            </Typo.Paragraph>
            <SimpleCard.Footer>Bedingt Pflicht</SimpleCard.Footer>
          </SimpleCard>

          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/file-signature.svg"
              alt="AÜG-Vertrag"
            />
            <Typo.H3>AÜG-Vertrag & Überlassungsvertrag</Typo.H3>
            <Typo.Paragraph>
              Arbeitsvertrag (Verleiher-Arbeitnehmer) und Überlassungsvertrag
              (Verleiher-Entleiher) gemäß § 12 AÜG. Seit 01.01.2025 genügt
              Textform (BEG IV). Automatische Generierung, e-Signatur und
              revisionssichere Archivierung mit Verknüpfung zur Personalakte.
            </Typo.Paragraph>
            <SimpleCard.Footer>Pflicht</SimpleCard.Footer>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* Section 5: Module im Detail (TabGroup) */}
      <ContentWrapper colorScheme="gray">
        <IntroBox>
          <IntroBox.PreHeadline>Module im Detail</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Jeder Schritt, vollständig digital
          </IntroBox.Headline>
          <IntroBox.Subline>
            Vom ersten Vertrag bis zur Einsatzinformation - jeder
            Onboarding-Schritt läuft automatisiert und nachvollziehbar. Hier
            zeigen wir, wie jedes Modul im Detail funktioniert.
          </IntroBox.Subline>
        </IntroBox>

        <TabGroup defaultValue="e-signatur">
          <TabNavigation>
            <TabItem value="e-signatur">e-Signatur</TabItem>
            <TabItem value="dokumentenpruefung">Dokumentenprüfung</TabItem>
            <TabItem value="self-service">Self-Service-Portal</TabItem>
            <TabItem value="einsatzinfo">Einsatzinformation</TabItem>
          </TabNavigation>

          <TabContent value="e-signatur">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>
                  Digitale Vertragsunterschrift - rechtssicher nach eIDAS
                </Typo.H3>
                <Typo.Paragraph>
                  AÜG-Verträge, Einsatzvereinbarungen und
                  Zusatzvereinbarungen digital unterschreiben - rechtssicher und
                  in Minuten statt Tagen. Die qualifizierte elektronische
                  Signatur (QES) ist die höchste Stufe nach der EU-Verordnung
                  eIDAS und der eigenhändigen Unterschrift gemäß § 126a BGB
                  rechtlich gleichgestellt. Seit dem BEG IV (01.01.2025) genügt
                  für AÜG-Verträge bereits die Textform - dennoch empfehlen
                  Experten weiterhin die QES oder zumindest die fortgeschrittene
                  elektronische Signatur (FES) für höhere Beweissicherheit.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>
                    Drei Signatur-Level: EES (einfach), FES (fortgeschritten),
                    QES (qualifiziert) - je nach Anforderung
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Anbieter-Integration: Skribble (Schweiz, europäischer
                    Fokus), DocuSign (globaler Marktführer, Community-Node für
                    n8n), sign-me/D-Trust (Bundesdruckerei, Made in Germany),
                    Yousign (transparent ab 9 EUR/Monat)
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Identifizierung per VideoIdent (IDnow) oder
                    Online-Ausweis (nPA) - einmalig, dann Smartphone-basierte
                    Freigabe per PIN/TAN
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Automatische Vertragsgenerierung aus ERP-Stammdaten (zvoove
                    One) und revisionssichere Archivierung
                  </Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/process-automation.jpg"
                  alt="Digitale Vertragsunterschrift mit e-Signatur"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>

          <TabContent value="dokumentenpruefung">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>
                  KI-gestützte Dokumentenprüfung und OCR
                </Typo.H3>
                <Typo.Paragraph>
                  Eingereichte Dokumente werden automatisch klassifiziert, per
                  OCR ausgelesen und auf Vollständigkeit und Gültigkeit geprüft.
                  Die KI erkennt Personalausweise, SV-Ausweise,
                  Gesundheitszeugnisse und Qualifikationsnachweise - und fordert
                  fehlende Unterlagen selbstständig an. Amazon Textract und
                  Azure AI Document Intelligence bieten spezielle Modelle für
                  ID-Dokumente; ABBYY FlexiCapture liefert Enterprise-Genauigkeit
                  mit maschinellem Lernen.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>
                    Automatische Dokumentenklassifizierung: Personalausweis,
                    SV-Ausweis, Krankenkassenbescheinigung, Arbeitserlaubnis,
                    Qualifikationsnachweis
                  </Typo.ListItem>
                  <Typo.ListItem>
                    OCR und Datenextraktion: Name, Geburtsdatum,
                    Dokumentennummer, Gültigkeitsdatum - mit GPT-4o Vision,
                    ABBYY FlexiCapture, Mistral OCR oder OCRSpace
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Plausibilitätsprüfung: Automatischer Namensabgleich mit
                    Stammdaten, Datumsvalidierung, Gültigkeitscheck
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Eskalation bei Problemen: Automatische Erinnerung per E-Mail
                    bei fehlenden oder ungültigen Dokumenten, Eskalation an
                    Disponenten nach 5 Tagen
                  </Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/data-quality.jpg"
                  alt="KI-gestützte Dokumentenprüfung"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>

          <TabContent value="self-service">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>
                  Self-Service-Portal für Zeitarbeitskräfte
                </Typo.H3>
                <Typo.Paragraph>
                  Zeitarbeitskräfte erhalten einen persönlichen Zugang per Link
                  oder App. Dort laden sie Dokumente per Smartphone-Kamera hoch,
                  pflegen Stammdaten, unterschreiben Verträge und sehen ihren
                  Onboarding-Status in Echtzeit. Etablierte Lösungen wie die
                  zvoove Work App oder Coffreo bieten dies nativ; alternativ
                  lässt sich ein Custom-Portal mit React/Next.js und
                  n8n-Webhook-Backend aufbauen.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>
                    Mobiloptimiertes Portal: Dokumenten-Upload per
                    Smartphone-Kamera, Stammdatenpflege und Vertragsunterschrift
                    von jedem Gerät
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Echtzeit-Statusanzeige: Fortschrittsbalken zeigt den
                    Onboarding-Status - welche Dokumente fehlen, was bereits
                    geprüft ist
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Automatische Benachrichtigungen: Push-Nachricht oder E-Mail
                    bei offenen Aufgaben, neuen Einsatzinformationen oder
                    Vertragsbereitschaft
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Branchenlösungen: zvoove Work App (integriert in zvoove
                    ERP), Coffreo (über 1 Mio. elektronisch signierte
                    Dokumente/Monat), Staffbase (interne Kommunikation mit
                    Push-Benachrichtigungen)
                  </Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/client-portal.jpg"
                  alt="Self-Service-Portal für Zeitarbeitskräfte"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>

          <TabContent value="einsatzinfo">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>Automatisierte Einsatzinformation</Typo.H3>
                <Typo.Paragraph>
                  Die Einsatzinformation ist das zentrale Dokument für den
                  Zeitarbeitnehmer. Sie enthält alle relevanten Details zum
                  Einsatz beim Entleiher und wird 24-48 Stunden vor
                  Einsatzbeginn automatisch als PDF generiert und per E-Mail
                  oder App versendet. Bei Änderungen erfolgt eine sofortige
                  Aktualisierung.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>
                    Pflichtinhalt: Entleiher-Daten (Name, Adresse, Branche),
                    Ansprechpartner mit Kontaktdaten, Einsatzzeitraum,
                    Arbeitszeiten, konkrete Tätigkeitsbeschreibung
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Zusatzinfos: Treffpunkt, Anfahrtsbeschreibung,
                    Parkmöglichkeiten, ÖPNV-Anbindung, erforderliche PSA und
                    Sicherheitshinweise
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Automatischer Versand: Zeitgesteuert per Schedule Trigger in
                    n8n, 24h vor Einsatzbeginn, mit Lesebestätigung
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Parallele Benachrichtigung: Internes Team wird per
                    Slack/Teams informiert - &quot;Mitarbeiter [Name] startet
                    morgen bei [Entleiher]&quot;
                  </Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/digital-workflow.jpg"
                  alt="Automatisierte Einsatzinformation"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>
        </TabGroup>
      </ContentWrapper>

      {/* Section 6: IT-Tools & Infrastruktur */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>IT-Infrastruktur</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Die richtigen Tools für digitales Onboarding
          </IntroBox.Headline>
          <IntroBox.Subline>
            Ein Überblick über die wichtigsten Software-Kategorien und konkreten
            Anbieter, die im digitalen Onboarding von Personaldienstleistern zum
            Einsatz kommen.
          </IntroBox.Subline>
        </IntroBox>

        <SimpleGrid cols={2} className="gap-12">
          <div>
            <Typo.H3>E-Signatur & Identitätsprüfung</Typo.H3>
            <Typo.Paragraph>
              Die Wahl des richtigen Signatur-Anbieters hängt von der
              gewünschten Signatur-Stufe (EES, FES, QES), dem Budget und den
              Integrationsanforderungen ab.
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                Skribble (Schweiz): Europäischer Fokus, alle 3 Signatur-Level
                nativ, starker DSGVO-Fokus, individuelles Preismodell
              </Typo.ListItem>
              <Typo.ListItem>
                DocuSign (USA): Globaler Marktführer, 900+ Integrationen, QES
                über D-Trust/IDnow, ab 9 EUR/Monat, n8n Community-Node
                verfügbar
              </Typo.ListItem>
              <Typo.ListItem>
                sign-me / D-Trust (Bundesdruckerei): Erste eIDAS-konforme
                Fernsignatur aus Deutschland, QES-Backend für DocuSign und Adobe
                Sign
              </Typo.ListItem>
              <Typo.ListItem>
                Yousign (Frankreich): Transparente Preise ab 9 EUR/Monat (10
                Signaturen), eIDAS-konform
              </Typo.ListItem>
              <Typo.ListItem>
                Coffreo: Speziell für Zeitarbeit, über 1 Mio. signierte
                Dokumente/Monat
              </Typo.ListItem>
              <Typo.ListItem>
                IDnow: Deutscher Marktführer für VideoIdent, BaFin-zugelassen,
                Partner von DocuSign für QES-Identifizierung
              </Typo.ListItem>
            </Typo.List>
          </div>
          <div>
            <Typo.H3>DMS & Dokumenten-KI</Typo.H3>
            <Typo.Paragraph>
              Dokumentenmanagement-Systeme bilden das Rückgrat der digitalen
              Personalakte. OCR- und Document-AI-Tools automatisieren die
              Datenextraktion.
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                zvoove DMS+: Speziell für Zeitarbeit, integriert in zvoove ERP,
                revisionssichere Archivierung gemäß GoBD
              </Typo.ListItem>
              <Typo.ListItem>
                d.velop documents: Enterprise DMS, DSGVO-konforme
                Löschkonzepte, intelligenter Zeugnisgenerator, ab 2027 Pflicht
                zur digitalen Archivierung bestimmter Entgeltunterlagen
              </Typo.ListItem>
              <Typo.ListItem>
                DocuWare: Cloud DMS, digitale Personalakte,
                Rechnungsverarbeitung, für Personaldienstleister geeignet
              </Typo.ListItem>
              <Typo.ListItem>
                ABBYY FlexiCapture: Enterprise-Dokumentenverarbeitung mit ML,
                hohe Genauigkeit bei Klassifizierung und Tabellenerkennung
              </Typo.ListItem>
              <Typo.ListItem>
                Amazon Textract / Azure AI Document Intelligence: Cloud-KI mit
                speziellen ID-Dokument-Modellen für Personalausweis-Erkennung
              </Typo.ListItem>
              <Typo.ListItem>
                GPT-4o Vision: Direkte Analyse und Extraktion per OpenAI, ideal
                für n8n-Integration ohne separates OCR-Tool
              </Typo.ListItem>
            </Typo.List>
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Section 7: n8n-Automatisierung */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>n8n Automation</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Konkrete Workflows für automatisiertes Onboarding
          </IntroBox.Headline>
          <IntroBox.Subline>
            Mit n8n als Workflow-Engine orchestrieren wir den gesamten
            Onboarding-Prozess - von der Vertragserstellung über die
            Dokumentenprüfung bis zur automatischen Einsatzinformation. Hier
            sind die konkreten Workflows, die wir für Personaldienstleister
            umsetzen.
          </IntroBox.Subline>
        </IntroBox>

        <SimpleGrid cols={2} className="gap-8">
          <SimpleCard>
            <Typo.H3>Kompletter Onboarding-Workflow</Typo.H3>
            <Typo.Paragraph>
              Webhook von zvoove empfängt neuen Mitarbeiter. n8n ruft
              Stammdaten per API ab, unterscheidet per IF-Node zwischen EU- und
              Nicht-EU-Bürgern (unterschiedliche Dokumenten-Checklisten),
              generiert den AÜG-Arbeitsvertrag als PDF (CraftMyPDF/JSReport),
              sendet ihn per DocuSign- oder Skribble-API zur QES-Signatur,
              wartet auf den Signatur-Callback, versendet dann die
              Willkommens-E-Mail mit Upload-Link für Pflichtdokumente, empfängt
              und prüft die Dokumente per KI, archiviert sie in der digitalen
              Personalakte und aktualisiert den Status in zvoove.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard>
            <Typo.H3>
              Automatische Dokumentenklassifizierung und -validierung
            </Typo.H3>
            <Typo.Paragraph>
              Über einen Form Trigger oder Webhook empfängt n8n hochgeladene
              Dokumente. GPT-4o Vision klassifiziert jedes Dokument
              (Personalausweis, SV-Ausweis, Krankenkassenbescheinigung,
              Arbeitserlaubnis, Qualifikationsnachweis) und extrahiert relevante
              Daten (Name, Geburtsdatum, Dokumentennummer, Gültigkeitsdatum).
              Ein Switch-Node routet nach Dokumenttyp, ein Code-Node führt
              Plausibilitätsprüfungen durch (Namensabgleich,
              Datumsvalidierung). Bei bestandener Validierung wird das Dokument
              archiviert und der Status aktualisiert; bei Fehlern wird
              automatisch eine E-Mail mit dem spezifischen Problem versendet.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard>
            <Typo.H3>Zeitgesteuerte Einsatzinformation</Typo.H3>
            <Typo.Paragraph>
              Ein Schedule Trigger läuft täglich um 08:00 Uhr und ruft per
              zvoove API alle Einsätze ab, die am nächsten Tag starten. Für
              jeden Einsatz werden Mitarbeiter- und Kundendaten abgerufen, eine
              Einsatzinformation als PDF generiert (CraftMyPDF mit
              Entleiher-Daten, Ansprechpartner, Arbeitszeiten, Treffpunkt,
              Anfahrt und Sicherheitshinweisen), per E-Mail an den
              Zeitarbeitnehmer versendet und im Dokumentenarchiv abgelegt. Das
              PDL-Team erhält eine Zusammenfassung per Slack.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard>
            <Typo.H3>
              Intelligente Erinnerungen und Eskalation
            </Typo.H3>
            <Typo.Paragraph>
              Täglich um 09:00 Uhr prüft n8n alle Mitarbeiter mit
              unvollständigem Onboarding. Anhand des Alters des Vorgangs wird
              gestaffelt eskaliert: unter 3 Tage eine freundliche
              E-Mail-Erinnerung, 3-5 Tage eine dringende Erinnerung per E-Mail
              und SMS, über 5 Tage eine Eskalation an den zuständigen
              Disponenten per Slack/Teams. Eine tägliche Zusammenfassung
              (&quot;X komplett, Y offen, Z eskaliert&quot;) geht an das
              Dispositions-Team.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>

        <div className="mt-12">
          <Typo.H3>Empfohlener Tech-Stack</Typo.H3>
          <SimpleGrid cols={2} className="gap-4">
            <Typo.List>
              <Typo.ListItem>
                <strong>ERP / Stammdaten:</strong> zvoove One
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Workflow-Automation:</strong> n8n (self-hosted)
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>E-Signatur:</strong> Skribble oder DocuSign + D-Trust
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Identitätsprüfung:</strong> IDnow (VideoIdent)
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Dokumentenspeicher:</strong> AWS S3 oder Google Drive
              </Typo.ListItem>
            </Typo.List>
            <Typo.List>
              <Typo.ListItem>
                <strong>OCR / Dokumenten-KI:</strong> OpenAI GPT-4o Vision
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>PDF-Generierung:</strong> CraftMyPDF oder JSReport
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Mitarbeiter-Portal:</strong> zvoove Work App + Custom
                Portal
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Kommunikation:</strong> Gmail/SMTP + Slack/Teams
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Tracking:</strong> Airtable oder PostgreSQL
              </Typo.ListItem>
            </Typo.List>
          </SimpleGrid>
        </div>
      </ContentWrapper>

      {/* Section 8: ROI-Kalkulation */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>ROI-Kalkulation</IntroBox.PreHeadline>
          <IntroBox.Headline>200-350% ROI im ersten Jahr</IntroBox.Headline>
          <IntroBox.Subline>
            Für einen Personaldienstleister mit 500+ neuen Zeitarbeitskräften
            pro Jahr und 3 internen Sachbearbeitern. Die geschätzte Entlastung
            durch die Textform-Änderung (BEG IV) beträgt laut Bundesregierung
            ca. 30 Mio. EUR jährlich für die gesamte Branche - mit
            Automatisierung holen Sie noch deutlich mehr heraus.
          </IntroBox.Subline>
        </IntroBox>

        <ComparisonCard className="mt-10">
          <BeforeCard>
            <ComparisonHeadline>Vorher: Papierbasiert</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                2 FTE für Onboarding-Verwaltung @ 40.000 EUR/Jahr
              </ComparisonListItem>
              <ComparisonListItem>
                3-5 Tage vom Vertrag bis Einsatzstart
              </ComparisonListItem>
              <ComparisonListItem>
                15% unvollständige Personalakten bei Einsatzbeginn
              </ComparisonListItem>
              <ComparisonListItem>
                Medienbrüche: Daten werden mehrfach erfasst (Papier, Excel, ERP)
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>Gesamt: ~95.000 EUR/Jahr</ComparisonFooter>
          </BeforeCard>

          <AfterCard>
            <ComparisonHeadline>Nachher: Digital</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                0,5 FTE für Ausnahmen @ 40.000 EUR/Jahr
              </ComparisonListItem>
              <ComparisonListItem>
                Unter 24 Stunden vom Vertrag bis Einsatzstart
              </ComparisonListItem>
              <ComparisonListItem>
                95% Dokumenten-Vollständigkeit bei Einsatzbeginn
              </ComparisonListItem>
              <ComparisonListItem>
                Durchgängiger Datenfluss: Einmalige Erfassung, automatische
                Synchronisation
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>Gesamt: ~35.000 EUR/Jahr</ComparisonFooter>
          </AfterCard>
        </ComparisonCard>

        <SavingsCard>
          <SavingsBadge>ROI im ersten Jahr: 200-350%</SavingsBadge>
          <SavingsItems>
            <SavingsItem label="Jährliche Ersparnis" highlight>
              60.000 EUR
            </SavingsItem>
            <SavingsItem label="Amortisation">3-5 Monate</SavingsItem>
            <SavingsItem label="Onboarding-Zeit">-80%</SavingsItem>
          </SavingsItems>
        </SavingsCard>
      </ContentWrapper>

      {/* Section 9: Customer Logos */}
      <ContentWrapper noPadding bodyWidth="full">
        <Customer />
      </ContentWrapper>

      {/* Section 10: Consultation CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>

      {/* Section 11: FAQ */}
      <ContentWrapper>
        <FaqContainer
          faqs={[
            {
              question:
                "Ist die elektronische Signatur für AÜG-Verträge seit 2025 noch nötig?",
              answer:
                "Seit dem 01.01.2025 hat das Bürokratieentlastungsgesetz IV (BEG IV) die Anforderungen an AÜG-Verträge gelockert: Statt Schriftform genügt nun die Textform (§ 126b BGB). Das bedeutet, dass Verträge per E-Mail, als PDF oder über ein Portal geschlossen werden können - eine eigenhändige Unterschrift oder QES ist nicht mehr zwingend erforderlich. Dennoch empfehlen viele Experten und Branchenlösungen wie compleet oder Skribble weiterhin die QES oder zumindest die fortgeschrittene elektronische Signatur (FES) für höhere Beweissicherheit und Manipulationsschutz. Wichtig: Befristungsabreden (§ 14 Abs. 4 TzBfG) erfordern weiterhin die Schriftform, ebenso Branchen nach § 2a Abs. 1 Schwarzarbeitsbekämpfungsgesetz (Baugewerbe, Gastronomie, Logistik, Fleischwirtschaft).",
            },
            {
              question:
                "Welche Dokumente werden automatisch geprüft und wie funktioniert die KI-Prüfung?",
              answer:
                "Das System prüft alle für den Einsatz erforderlichen Unterlagen: Personalausweis/Reisepass, Sozialversicherungsnachweis, Steuer-ID, Krankenkassenbescheinigung, Bankverbindung sowie je nach Einsatztyp Arbeitserlaubnis, Qualifikationsnachweise, Gesundheitszeugnisse, Führungszeugnis und branchenspezifische Zertifikate (Schweißerschein, Kranschein, Staplerschein). Die Prüfung erfolgt KI-gestützt: GPT-4o Vision oder ABBYY FlexiCapture klassifiziert den Dokumenttyp, extrahiert Name, Geburtsdatum und Gültigkeitsdatum per OCR und gleicht die Daten mit den Stammdaten ab. Die Checkliste ist pro Einsatztyp konfigurierbar.",
            },
            {
              question:
                "Wie funktioniert das Self-Service-Portal und welche Lösungen gibt es?",
              answer:
                "Zeitarbeitskräfte erhalten einen persönlichen Zugang per Link oder App. Dort können sie Dokumente per Smartphone-Kamera hochladen, Stammdaten pflegen, Verträge unterschreiben und ihren Onboarding-Status in Echtzeit einsehen. Branchenübliche Lösungen sind die zvoove Work App (integriert in zvoove ERP mit Echtzeit-Datenfluss), Coffreo (elektronische Signaturen, automatisiertes Onboarding, sichere Archivierung) und Staffbase (interne Kommunikation mit Push-Benachrichtigungen). Alternativ lassen sich Custom-Portale mit React/Next.js und einem n8n-Webhook-Backend aufbauen - oder Sie nutzen den n8n Form Trigger als einfache Lösung ohne separates Frontend.",
            },
            {
              question:
                "Wie integriert sich das System mit bestehender Software wie zvoove?",
              answer:
                "Die Integration erfolgt über APIs und Webhooks. Für zvoove nutzen wir die zvoove REST-API, die Mitarbeiter-, Einsatz- und Kundendaten bidirektional synchronisiert. n8n orchestriert den Datenfluss: Neue Mitarbeiter in zvoove lösen per Webhook einen Onboarding-Workflow aus, Statusupdates fließen automatisch zurück. Für E-Signaturen integrieren wir DocuSign (n8n Community-Node oder HTTP Request mit OAuth2), Skribble (REST-API) oder sign-me (indirekt über DocuSign). DMS-Systeme wie d.velop, DocuWare oder ELO werden per HTTP Request angebunden. Die Archivierung kann alternativ über strukturierte Cloud-Ordner in AWS S3 oder Google Drive erfolgen.",
            },
            {
              question:
                "Welche Aufbewahrungsfristen gelten für Onboarding-Dokumente?",
              answer:
                "Die Aufbewahrungsfristen variieren je nach Dokumenttyp: Lohnsteuerunterlagen 6 Jahre (§ 41 EStG), Lohnunterlagen für Gewinnermittlung 10 Jahre (§ 147 AO), Sozialversicherungs-Beitragsnachweise 5 Jahre (§ 28f SGB IV), Arbeitsverträge und Kündigungen 3 Jahre nach Ende des Arbeitsverhältnisses (Verjährungsfrist § 195 BGB). Besonderheit Zeitarbeit: Erlaubnisurkunde zur Arbeitnehmerüberlassung, alle Überlassungsverträge und Equal-Treatment-Nachweise müssen ebenfalls archiviert werden. Ab 2027 müssen bestimmte Entgeltunterlagen ausschließlich digital geführt werden (Nachweise zu Staatsangehörigkeit, Versicherungspflicht, Arbeitszeiten). Unser System überwacht Fristen automatisch und löscht Dokumente DSGVO-konform nach Ablauf.",
            },
            {
              question:
                "Wie sicher sind die Daten im digitalen Onboarding-Prozess?",
              answer:
                "Der gesamte Prozess ist DSGVO-konform: Daten werden nur für den Beschäftigungszweck verarbeitet (Zweckbindung), der Zugriff auf die digitale Personalakte ist rollenbasiert eingeschränkt (Vertraulichkeit), Dokumente werden verschlüsselt übertragen und revisionssicher archiviert (Integrität). Diagnosen, Religionszugehörigkeit (außer steuerrelevant) und private Social-Media-Aktivitäten gehören nicht in die Personalakte. E-Signatur-Anbieter wie Skribble und D-Trust sind qualifizierte Vertrauensdiensteanbieter nach eIDAS, IDnow ist BaFin-zugelassen für Video-Identifizierungen. Die Daten verbleiben auf europäischen Servern.",
            },
          ]}
        />
      </ContentWrapper>
    </>
  );
}
