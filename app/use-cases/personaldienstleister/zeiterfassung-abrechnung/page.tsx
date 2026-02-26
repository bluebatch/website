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
import PhaseCard, {
  PhaseCardHeader,
  PhaseCardTitle,
  PhaseCardBadge,
  PhaseCardDescription,
} from "@/components/cards/phase-card";
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
  title: "Zeiterfassung, Abrechnung & Rechnungsstellung",
  description:
    "Durchgängig digitale Zeiterfassung, tarifkonforme Lohnabrechnung und automatische Rechnungsstellung.",
};

export const metadata: Metadata = {
  title: "Zeiterfassung & Abrechnung – Personaldienstleister | Bluebatch",
  description:
    "Zeiterfassung und Lohnabrechnung für Personaldienstleister automatisieren: Mobile Stempeluhr, tarifkonforme Abrechnung. 90% weniger Fehler.",
  openGraph: {
    title: "Zeiterfassung & Abrechnung – Personaldienstleister | Bluebatch",
    description:
      "Durchgängig digitale Zeiterfassung, Lohnabrechnung und Rechnungsstellung für Personaldienstleister.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch Zeiterfassung & Abrechnung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeiterfassung & Abrechnung – Personaldienstleister | Bluebatch",
    description:
      "Durchgängig digitale Zeiterfassung, Lohnabrechnung und Rechnungsstellung.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/use-cases/personaldienstleister/zeiterfassung-abrechnung",
  },
};

const stats = [
  { value: 90, suffix: "%", label: "Weniger Abrechnungsfehler" },
  { value: 75, suffix: "%", label: "Schnellere Rechnungsstellung" },
  { value: 22, suffix: "%", label: "Aller Lohnabrechnungen in DE fehlerhaft" },
];

export default function Page() {
  return (
    <>
      {/* Section 1: BackgroundHero */}
      <ContentWrapper isFirstSection noPadding>
        <BackgroundHero
          imageSrc="/images/business-analytics.jpg"
          overlayOpacity={0.8}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            Zeiterfassung & Abrechnung
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            Vom Stundenzettel zur Rechnung –{" "}
            <BackgroundHero.Highlight>
              ohne Medienbruch
            </BackgroundHero.Highlight>
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Mobile Zeiterfassung per App oder Terminal, automatische
            Zuschlagsberechnung nach GVP/DGB-Tarifwerk, DATEV-Export per
            Knopfdruck und ZUGFeRD-konforme Rechnungsstellung an Ihre Kunden –
            in einem durchgangigen digitalen Prozess ohne manuelle Ubertragung.
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

      {/* Section 2: Customer Logos */}
      <ContentWrapper noPadding>
        <Customer />
      </ContentWrapper>

      {/* Section 3: ComparisonCard (Papier vs. Digital) -- standalone */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Der Unterschied</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Papier-Stundenzettel vs. digitaler Prozess
          </IntroBox.Headline>
          <IntroBox.Subline>
            22% aller Lohnabrechnungen in Deutschland sind fehlerhaft – in der
            Zeitarbeit liegt die Quote aufgrund komplexer Zuschlagsregeln und
            Medienbruche noch hoher. 53% der Unternehmen mussten in den letzten
            funf Jahren Strafzahlungen wegen fehlerhafter Abrechnungen leisten.
          </IntroBox.Subline>
        </IntroBox>

        <ComparisonCard className="mt-10">
          <BeforeCard>
            <ComparisonHeadline>
              Vorher: Papier + manuelle Ubertragung
            </ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                Papier-Stundenzettel per Fax oder Foto eingesandt, manuell ins
                Abrechnungssystem abgetippt
              </ComparisonListItem>
              <ComparisonListItem>
                8-12 Minuten pro Stundenzettel fur Erfassung, Prufung und
                Korrektur
              </ComparisonListItem>
              <ComparisonListItem>
                5-8% Fehlerquote bei manueller Ubertragung – falsche Stunden,
                vergessene Zuschage
              </ComparisonListItem>
              <ComparisonListItem>
                Branchenzuschlag-Stufen (TV BZ ME, Chemie) manuell in Excel
                nachverfolgt
              </ComparisonListItem>
              <ComparisonListItem>
                Stundenbestatigung per Papier-Unterschrift – haufigster
                Bottleneck fur verspatete Rechnungen
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>3 FTE, ~135.000 EUR/Jahr</ComparisonFooter>
          </BeforeCard>

          <AfterCard>
            <ComparisonHeadline>
              Nachher: Durchgangig digital mit n8n-Automatisierung
            </ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                Mobile Zeiterfassung per App (z.B. Anbindung an zvoove Work App
                oder timeCard) mit GPS-Validierung
              </ComparisonListItem>
              <ComparisonListItem>
                Unter 1 Minute pro Abrechnung – vollautomatische Verarbeitung
              </ComparisonListItem>
              <ComparisonListItem>
                Unter 0,5% Fehlerquote durch regelbasierte Tarifvalidierung im
                n8n-Workflow
              </ComparisonListItem>
              <ComparisonListItem>
                Branchenzuschlag-Stufen werden automatisch aus Einsatzdauer
                berechnet und angepasst
              </ComparisonListItem>
              <ComparisonListItem>
                Digitale Stundenfreigabe uber Kundenportal oder
                E-Mail-Bestatigung
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>0,5 FTE, ~35.000 EUR/Jahr</ComparisonFooter>
          </AfterCard>
        </ComparisonCard>
      </ContentWrapper>

      {/* Section 4: TimelineAsSteps + PhaseCard (End-to-End-Pipeline) */}
      <ContentWrapper background="bg-gray-50" bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>End-to-End-Prozess</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Der durchgangige digitale Prozess – von der Stempeluhr bis zur
            ZUGFeRD-Rechnung
          </IntroBox.Headline>
          <IntroBox.Subline>
            Funf Schritte, null Medienbruche. Jeder Prozessschritt wird
            automatisch validiert und nahtlos an den nachsten ubergeben.
          </IntroBox.Subline>
        </IntroBox>

        <TimelineAsSteps>
          <TimelineAsStepsStep value={1}>
            <PhaseCard>
              <PhaseCardHeader>
                <PhaseCardTitle>Mobile Zeiterfassung</PhaseCardTitle>
                <PhaseCardBadge>GPS-validiert</PhaseCardBadge>
              </PhaseCardHeader>
              <PhaseCardDescription>
                Zeitarbeitnehmer stempeln per Smartphone-App oder
                Hardware-Terminal (z.B. REINER SCT timeCard Terminal 3, zvoove
                Work App). Arbeitsbeginn, -ende und Pausen werden erfasst.
                Optionale GPS-Validierung pruft automatisch, ob der Standort mit
                dem hinterlegten Einsatzort ubereinstimmt (Geofencing,
                Radius-Check). Bei Abweichung &gt; 500m wird automatisch ein
                Flag gesetzt und der Disponent per E-Mail benachrichtigt.
              </PhaseCardDescription>
            </PhaseCard>
          </TimelineAsStepsStep>

          <TimelineAsStepsStep value={2}>
            <PhaseCard>
              <PhaseCardHeader>
                <PhaseCardTitle>Digitale Stundenbestatigung</PhaseCardTitle>
                <PhaseCardBadge>Kunden-Signatur</PhaseCardBadge>
              </PhaseCardHeader>
              <PhaseCardDescription>
                Der Kunde (Entleiher) pruft und bestatigt die geleisteten
                Stunden digital – uber ein Kundenportal (z.B. zvoove Connect)
                oder per E-Mail-Freigabe-Link. Ohne Kundenbestatigung keine
                Abrechnung. Die Automatisierung sendet automatische Erinnerungen
                bei ausstehenden Freigaben und eskaliert nach konfigurierbarer
                Frist.
              </PhaseCardDescription>
            </PhaseCard>
          </TimelineAsStepsStep>

          <TimelineAsStepsStep value={3}>
            <PhaseCard>
              <PhaseCardHeader>
                <PhaseCardTitle>
                  Tarifvalidierung & Zuschlagsberechnung
                </PhaseCardTitle>
                <PhaseCardBadge>Auto-Zuschlage</PhaseCardBadge>
              </PhaseCardHeader>
              <PhaseCardDescription>
                Validierte Stunden werden automatisch gegen die geltenden
                Tarifvertrage gepruft (GVP/DGB-Entgelttarifvertrag,
                Entgeltgruppen 1-9). Nachtarbeitszuschlag (25%),
                Sonntagszuschlag (50%), Feiertagszuschlag (100%) und
                Branchenzuschlage nach TV BZ ME (15% nach 6 Wochen, 20% nach 3
                Monaten, 30% nach 5 Monaten, 45% nach 7 Monaten) werden
                regelbasiert berechnet. Der Feiertagskalender berucksichtigt
                bundeslandspezifische Feiertage.
              </PhaseCardDescription>
            </PhaseCard>
          </TimelineAsStepsStep>

          <TimelineAsStepsStep value={4}>
            <PhaseCard>
              <PhaseCardHeader>
                <PhaseCardTitle>
                  Lohnabrechnung & Payroll-Export
                </PhaseCardTitle>
                <PhaseCardBadge>DATEV-Export</PhaseCardBadge>
              </PhaseCardHeader>
              <PhaseCardDescription>
                Bruttolohn wird automatisch kalkuliert: Grundlohn + Zuschage +
                Branchenzuschlage + Spesen. Die Daten werden per
                DATEV-ASCII-Export oder DATEVconnect REST API an DATEV LODAS
                bzw. Lohn und Gehalt ubertragen. SV-Meldungen (DEUV) laufen
                uber dakota, Lohnsteueranmeldung uber ELSTER. Der n8n-Workflow
                generiert die Exportdatei mit korrektem Lohnarten-Mapping,
                Mandantennummer und Beraternummer.
              </PhaseCardDescription>
            </PhaseCard>
          </TimelineAsStepsStep>

          <TimelineAsStepsStep value={5}>
            <PhaseCard>
              <PhaseCardHeader>
                <PhaseCardTitle>
                  Rechnungsstellung & Versand
                </PhaseCardTitle>
                <PhaseCardBadge>ZUGFeRD</PhaseCardBadge>
              </PhaseCardHeader>
              <PhaseCardDescription>
                Aus denselben validierten Stundendaten wird die Kundenrechnung
                generiert. Der Verrechnungssatz (typisch 1,8x-2,2x des
                Bruttolohns) wird mit den vereinbarten Konditionen multipliziert.
                Rechnungen werden als ZUGFeRD-PDF (hybrides Format: PDF/A-3 +
                eingebettete XML-Datei, Profil EN16931 COMFORT) erstellt und
                automatisch per E-Mail versendet. Export an DATEV Unternehmen
                Online fur die Finanzbuchhaltung. GoBD-konforme Archivierung (10
                Jahre).
              </PhaseCardDescription>
            </PhaseCard>
          </TimelineAsStepsStep>
        </TimelineAsSteps>
      </ContentWrapper>

      {/* Section 5: Image LEFT + Text RIGHT (reversed layout) */}
      <ContentWrapper>
        <SimpleGrid cols={2} className="items-center gap-12">
          <div className="relative aspect-video">
            <Image
              src="/images/automation-efficiency.jpg"
              alt="Mobile Zeiterfassung per Smartphone-App mit GPS-Validierung"
              fill
              className="object-cover shadow-lg rounded-lg"
            />
          </div>
          <div>
            <IntroBox textCentered={false}>
              <IntroBox.PreHeadline>Mobile Zeiterfassung</IntroBox.PreHeadline>
              <IntroBox.Headline>
                GPS-basierte Stempeluhr direkt am Einsatzort
              </IntroBox.Headline>
              <IntroBox.Subline>
                Seit dem BAG-Beschluss vom 13. September 2022 (1 ABR 22/21)
                sind Arbeitgeber verpflichtet, ein System zur Erfassung von
                Beginn und Ende der taglichen Arbeitszeit einzufuhren. Fur
                Personaldienstleister gilt dies besonders: Als Arbeitgeber der
                Zeitarbeitnehmer tragen sie die Verantwortung – unabhangig
                davon, an welchem Einsatzort der Mitarbeiter arbeitet.
              </IntroBox.Subline>
            </IntroBox>
            <Typo.List>
              <Typo.ListItem>
                GPS-Geofencing: Standortvalidierung nur bei aktiver Buchung
                innerhalb vordefinierter Einsatzorte – DSGVO-konform, keine
                dauerhafte Ortung
              </Typo.ListItem>
              <Typo.ListItem>
                Automatische Pausenerkennung nach Paragraph 4 ArbZG
                (Pflichtpause nach 6 Stunden) und Hohlenprufung Paragraph 3
                ArbZG (maximal 10 Stunden pro Tag)
              </Typo.ListItem>
              <Typo.ListItem>
                Digitale Kundenunterschrift zur Stundenbestatigung direkt auf
                dem Smartphone oder Tablet
              </Typo.ListItem>
              <Typo.ListItem>
                Anbindung an Branchensysteme wie zvoove One, TIME JOB core,
                Bullhorn oder allgemeine Losungen wie REINER SCT timeCard, ATOSS
                und Interflex
              </Typo.ListItem>
            </Typo.List>
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Section 6: TabGroup (3 Tabs) */}
      <ContentWrapper background="bg-gray-100">
        <IntroBox>
          <IntroBox.PreHeadline>Technische Details</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Tarifvalidierung, Lohnabrechnung und Rechnungsstellung im Detail
          </IntroBox.Headline>
          <IntroBox.Subline>
            Drei Kernmodule, die nahtlos ineinandergreifen – jedes einzelne
            spart Stunden an manueller Arbeit und eliminiert Fehlerquellen.
          </IntroBox.Subline>
        </IntroBox>

        <TabGroup defaultValue="tarifvalidierung">
          <TabNavigation>
            <TabItem value="tarifvalidierung">Tarifvalidierung</TabItem>
            <TabItem value="lohnabrechnung">Lohnabrechnung</TabItem>
            <TabItem value="rechnungsstellung">Rechnungsstellung</TabItem>
          </TabNavigation>

          <TabContent value="tarifvalidierung">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>
                  Automatische Zuschlagsberechnung nach GVP/DGB-Tarifwerk
                </Typo.H3>
                <Typo.Paragraph>
                  Ein n8n-Workflow pruft jede erfasste Stunde gegen die
                  hinterlegten Tarifregeln. Nachtarbeit (23:00-06:00), Sonn- und
                  Feiertage sowie Branchenzuschlag-Stufen werden automatisch
                  erkannt und die korrekten Zuschlage berechnet. Der
                  bundeslandspezifische Feiertagskalender ist integriert – kein
                  manuelles Nachschlagen mehr.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>
                    Nachtarbeitszuschlag 25% (bzw. 20% bei regelmassiger
                    Nachtarbeit), Sonntagszuschlag 50%, Feiertagszuschlag 100% –
                    automatisch aus Stempelzeit berechnet
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Branchenzuschlage nach TV BZ ME (Metall/Elektro), TV BZ
                    Chemie und weiteren Branchen – Stufe wird aus der
                    kumulierten Einsatzdauer ermittelt
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Equal-Pay-Prufung: Automatische Warnung 30 Tage vor
                    Erreichen der 9-Monats-Frist (Paragraph 8 AUG)
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Flagging bei Abweichungen uber 15% von den Soll-Stunden mit
                    automatischer Benachrichtigung an den zustandigen
                    Disponenten
                  </Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/invoice-verification.jpg"
                  alt="Tarifvalidierungs-Dashboard mit Zuschlagsberechnung"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>

          <TabContent value="lohnabrechnung">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>
                  DATEV-integrierte Lohnabrechnung – vom Bruttolohn bis zur
                  SV-Meldung
                </Typo.H3>
                <Typo.Paragraph>
                  Aus den validierten Bruttolohndaten generiert ein n8n-Workflow
                  automatisch die DATEV-Exportdatei im ASCII-Format – mit
                  korrektem Lohnarten-Mapping, Mandantennummer und
                  Beraternummer. Die Datei wird per SFTP an das
                  DATEV-Rechenzentrum ubertragen oder uber die DATEVconnect REST
                  API bidirektional synchronisiert. SV-Meldungen laufen uber
                  dakota, Lohnsteuer uber ELSTER.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>
                    Export an DATEV LODAS oder Lohn und Gehalt im
                    standardisierten ASCII-Format – alternativ uber DATEVconnect
                    Personalwirtschaft
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Automatische Berechnung: Grundlohn + AG-Anteil SV (~20-21%)
                    + Umlagen (U1, U2, Insolvenz) + BG-Beitrag +
                    Branchenzuschlage
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Ruckimport der Lohnergebnisse uber den DATEV
                    Lohnergebnisdatenservice fur Soll-Ist-Abgleich
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Digitaler Versand der Lohnabrechnung als PDF an jeden
                    Zeitarbeitnehmer per E-Mail
                  </Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/invoice-processing.jpg"
                  alt="DATEV-Export und Lohnabrechnungs-Dashboard"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>

          <TabContent value="rechnungsstellung">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>
                  ZUGFeRD-konforme Rechnungen – automatisch erstellt und
                  versendet
                </Typo.H3>
                <Typo.Paragraph>
                  Der n8n-Workflow generiert aus den validierten Stundendaten
                  automatisch Kundenrechnungen im ZUGFeRD-Format (Profil
                  EN16931 COMFORT). Das hybride PDF/A-3-Dokument enthalt sowohl
                  die visuelle Darstellung als auch eine eingebettete XML-Datei
                  fur die maschinelle Verarbeitung. Seit dem 01.01.2025 ist der
                  Empfang von E-Rechnungen fur alle Unternehmen Pflicht – ab
                  2028 auch der Versand.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>
                    Stundensatzkalkulation: Verrechnungssatz = Gesamtkosten /
                    Produktivstunden (typischer Faktor 1,8x-2,2x), inkl.
                    AG-SV-Anteil, Lohnfortzahlung, Verwaltungskosten und
                    Gewinnmarge
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Stapelverarbeitung: Hunderte Rechnungen in einem Lauf –
                    gruppiert nach Kunde, Auftrag und Rechnungsturnus
                    (wochentlich, 14-tagig, monatlich)
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Konform mit E-Rechnungspflicht: ZUGFeRD ab Profil EN16931
                    oder XRechnung (fur offentliche Auftraggeber seit 2020
                    Pflicht)
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Automatischer Export an DATEV Unternehmen Online und
                    GoBD-konforme Archivierung (10 Jahre Aufbewahrungspflicht)
                  </Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/pricing-calculator.jpg"
                  alt="ZUGFeRD-Rechnungserstellung mit Stapelverarbeitung"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>
        </TabGroup>
      </ContentWrapper>

      {/* Section 7: SimpleGrid cols={4} + SimpleCard (Ergebnisse) */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Messbare Ergebnisse</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was sich nach 6 Monaten verandert
          </IntroBox.Headline>
          <IntroBox.Subline>
            Personaldienstleister, die den End-to-End-Prozess digitalisieren,
            sehen diese Verbesserungen typischerweise innerhalb der ersten sechs
            Monate.
          </IntroBox.Subline>
        </IntroBox>

        <SimpleGrid cols={4} className="mt-10">
          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/shield-check.svg"
              alt="Weniger Fehler"
              color="primary-gradient"
            />
            <Typo.H3>90% weniger Abrechnungsfehler</Typo.H3>
            <Typo.Paragraph>
              Statt 5-8% Fehlerquote bei manueller Ubertragung sinkt die Quote
              auf unter 0,5% durch regelbasierte Tarifvalidierung. Nacht-,
              Feiertags- und Branchenzuschlage werden automatisch und korrekt
              berechnet.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/lightning-bolt.svg"
              alt="Schnellere Rechnungsstellung"
              color="primary-gradient"
            />
            <Typo.H3>75% schnellere Rechnungsstellung</Typo.H3>
            <Typo.Paragraph>
              Rechnungen, die fruher 5-10 Werktage nach Monatsende brauchten,
              werden jetzt automatisch am Stichtag generiert und versendet.
              Keine Wartezeit auf Papier-Stundenzettel mehr.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/process.svg"
              alt="Kein Papier"
              color="primary-gradient"
            />
            <Typo.H3>0 Papier-Stundenzettel</Typo.H3>
            <Typo.Paragraph>
              Vollstandige Digitalisierung der Zeiterfassung uber Mobile App und
              Hardware-Terminals. Digitale Kundenbestatigung ersetzt die
              Papier-Unterschrift auf dem Stundenzettel.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/check-circle.svg"
              alt="Tarifkonformitat"
              color="primary-gradient"
            />
            <Typo.H3>100% Tarifkonformitat</Typo.H3>
            <Typo.Paragraph>
              Alle Abrechnungen werden automatisch gegen die geltenden
              Tarifvertrage (GVP/DGB, Branchenzuschlags-TVe) gepruft.
              Equal-Pay-Fristen und Hochstuberlassungsdauer werden tagesgenau
              uberwacht.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* Section 8: SavingsCard (Standalone) */}
      <ContentWrapper>
        <SavingsCard>
          <SavingsBadge>ROI im ersten Jahr: 300-500%</SavingsBadge>
          <SavingsItems>
            <SavingsItem label="Jahrliche Ersparnis" highlight>
              100.000 EUR
            </SavingsItem>
            <SavingsItem label="Amortisation">2-3 Monate</SavingsItem>
            <SavingsItem label="Fehlerreduktion">-94%</SavingsItem>
          </SavingsItems>
        </SavingsCard>
      </ContentWrapper>

      {/* Section 9: IT-Tools & Infrastruktur */}
      <ContentWrapper background="bg-gray-50">
        <SimpleGrid cols={2} className="items-start gap-12">
          <IntroBox textCentered={false}>
            <IntroBox.PreHeadline>IT-Infrastruktur</IntroBox.PreHeadline>
            <IntroBox.Headline>
              Die Tool-Landschaft in der Zeitarbeit – und wie wir sie verbinden
            </IntroBox.Headline>
            <IntroBox.Subline>
              Personaldienstleister arbeiten mit einer Vielzahl spezialisierter
              Systeme fur Zeiterfassung, Lohnabrechnung und Faktura. Unsere
              n8n-Automatisierung integriert sich nahtlos in Ihre bestehende
              Infrastruktur – unabhangig davon, welche Kombination Sie
              einsetzen.
            </IntroBox.Subline>
          </IntroBox>
          <div className="space-y-6">
            <div>
              <Typo.H4 disableMargin>
                Branchensoftware (End-to-End)
              </Typo.H4>
              <Typo.Paragraph>
                zvoove One (Marktfuhrer, ehem. Landwehr L1), TIME JOB core,
                HR4YOU eTemp, Bullhorn, Lendwork, PD Commander
              </Typo.Paragraph>
            </div>
            <div>
              <Typo.H4 disableMargin>Zeiterfassung</Typo.H4>
              <Typo.Paragraph>
                REINER SCT timeCard (1 Mio. Nutzer, Made in Germany), ATOSS
                Staff Efficiency Suite, Interflex IF-6040, Papershift, Clockodo
              </Typo.Paragraph>
            </div>
            <div>
              <Typo.H4 disableMargin>Mobile Apps</Typo.H4>
              <Typo.Paragraph>
                zvoove Work App (GPS + Abwesenheiten), Staffcloud (QR-Code
                Check-in), Papershift App, ATOSS Time Control App
              </Typo.Paragraph>
            </div>
            <div>
              <Typo.H4 disableMargin>Payroll / Lohn</Typo.H4>
              <Typo.Paragraph>
                DATEV LODAS, DATEV Lohn und Gehalt, Addison OneClick, Sage HR
                Suite, SAP HCM, Pelos
              </Typo.Paragraph>
            </div>
            <div>
              <Typo.H4 disableMargin>Rechnungssoftware</Typo.H4>
              <Typo.Paragraph>
                Lexware/Lexoffice, sevDesk, easybill, Billomat, DATEV
                Unternehmen Online
              </Typo.Paragraph>
            </div>
            <div>
              <Typo.H4 disableMargin>Schnittstellen</Typo.H4>
              <Typo.Paragraph>
                DATEVconnect REST API, DATEVconnect Personalwirtschaft, DATEV
                ASCII-Import, DATEV Lohnergebnisdatenservice, dakota
                (SV-Meldungen), ELSTER, zvoove API, Bullhorn API
              </Typo.Paragraph>
            </div>
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Section 10: n8n-Automatisierung im Detail */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>n8n-Automatisierung</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Konkrete Workflows fur Zeiterfassung, Abrechnung und
            Rechnungsstellung
          </IntroBox.Headline>
          <IntroBox.Subline>
            Mit n8n als Automatisierungsplattform verbinden wir Ihre bestehenden
            Systeme zu einem durchgangigen digitalen Prozess. Hier sind die
            konkreten Workflows, die wir fur Personaldienstleister
            implementieren.
          </IntroBox.Subline>
        </IntroBox>

        <SimpleGrid cols={2} className="mt-10 gap-8">
          <SimpleCard>
            <Typo.H3>Workflow: Zeiterfassung validieren und speichern</Typo.H3>
            <Typo.Paragraph>
              Ein Webhook empfangt Zeiteinrage aus der mobilen App. Ein Code
              Node pruft: Mitarbeiter-ID gultig? Einsatzauftrag aktiv?
              Arbeitszeit unter 10h/Tag (Paragraph 3 ArbZG)? Pause nach 6h
              (Paragraph 4 ArbZG)? Optional: GPS-Koordinaten werden per
              Haversine-Formel gegen den Einsatzort gepruft (Radius-Check). Bei
              Abweichungen wird der Eintrag mit Status
              &quot;REVIEW_REQUIRED&quot; gespeichert und der Disponent per
              E-Mail benachrichtigt.
            </Typo.Paragraph>
            <Typo.Paragraph className="text-sm text-gray-500">
              n8n-Nodes: Webhook, Code (Validierung), IF (GPS-Check), Code
              (Schichtplan-Abgleich), Code (Tarifregeln), MySQL/Postgres, Email
              (SMTP)
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard>
            <Typo.H3>
              Workflow: Wochentliche Lohnabrechnung mit DATEV-Export
            </Typo.H3>
            <Typo.Paragraph>
              Jeden Montag um 03:00 Uhr startet ein Schedule Trigger. Alle
              validierten Stunden der Vorwoche werden abgerufen, nach
              Mitarbeiter gruppiert und der Bruttolohn berechnet (Grundlohn x
              Stunden + Zuschlage + Branchenzuschlage + Spesen). Ein Code Node
              generiert die DATEV-ASCII-Exportdatei mit korrektem
              Lohnarten-Mapping, Mandantennummer, Beraternummer und
              Wirtschaftsjahr. Die Datei wird per SFTP an den DATEV-Server
              ubertragen. Eine Bestatigungs-E-Mail an die Lohnbuchhaltung
              enthalt die Zusammenfassung: Anzahl Mitarbeiter und
              Bruttolohnsumme.
            </Typo.Paragraph>
            <Typo.Paragraph className="text-sm text-gray-500">
              n8n-Nodes: Schedule Trigger (Cron), HTTP Request / DB, Code
              (Gruppierung), Code (Bruttolohn), Code (ASCII-Export), SFTP, Email
              (SMTP)
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard>
            <Typo.H3>
              Workflow: ZUGFeRD-Rechnungen erstellen und versenden
            </Typo.H3>
            <Typo.Paragraph>
              Monatlich am 1. um 06:00 Uhr werden alle Einsatze mit Status
              &quot;VALIDATED&quot; und &quot;CUSTOMER_CONFIRMED&quot; abgerufen
              und nach Kunde x Auftrag gruppiert. Fur jede Gruppe berechnet ein
              Code Node die Rechnungspositionen: Normalstunden x
              Verrechnungssatz, Nacht-/Feiertags-Aufschlage, Branchenzuschlage
              auf den Verrechnungssatz, Nettobetrag + 19% USt. Ein weiterer
              Code Node generiert das ZUGFeRD-XML (Profil EN16931) und bettet es
              per node-zugferd Library in ein PDF/A-3 ein. Die Rechnung wird per
              E-Mail versendet, als &quot;SENT&quot; markiert und an DATEV
              Unternehmen Online exportiert.
            </Typo.Paragraph>
            <Typo.Paragraph className="text-sm text-gray-500">
              n8n-Nodes: Schedule Trigger, HTTP Request / DB, Code
              (Gruppierung), Loop, Code (Positionen), Code (ZUGFeRD-XML), Code
              (PDF-Generierung), Email (SMTP), HTTP Request (DATEV)
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard>
            <Typo.H3>
              Workflow: Equal-Pay &
              Hochstuberlassungsdauer-Uberwachung
            </Typo.H3>
            <Typo.Paragraph>
              Taglich um 07:00 Uhr werden alle aktiven Einsatze mit Startdatum
              abgerufen. Ein Code Node berechnet die Einsatzdauer und pruft
              gegen drei Schwellenwerte: Branchenzuschlag-Stufen (6 Wochen, 3,
              5, 7 Monate), Equal-Pay-Frist (9 Monate / 274 Tage) und
              Hochstuberlassungsdauer (18 Monate / 548 Tage). Bei Erreichen
              einer Branchenzuschlag-Stufe wird die neue Stufe automatisch in
              der Datenbank gesetzt. Bei Equal Pay in 30 Tagen wird eine Warnung
              an Disponent und Vertrieb gesendet. Bei Hochstuberlassung in 60
              Tagen eine dringende Eskalation.
            </Typo.Paragraph>
            <Typo.Paragraph className="text-sm text-gray-500">
              n8n-Nodes: Schedule Trigger (taglich), DB Query, Code
              (Fristenberechnung), IF/Switch (Schwellenwerte), DB Update, Email
              (Alerts)
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* Section 11: FaqContainer */}
      <ContentWrapper>
        <FaqContainer
          faqs={[
            {
              question:
                "Wie funktioniert die mobile Zeiterfassung beim Kunden vor Ort?",
              answer:
                "Zeitarbeitnehmer nutzen eine Smartphone-App (z.B. uber Anbindung an zvoove Work App, Papershift oder eine eigene Progressive Web App) zum Ein- und Ausstempeln am Einsatzort. Die App validiert den Standort per GPS-Geofencing -- die Ortung erfolgt nur bei aktiver Buchung innerhalb vordefinierter Einsatzorte und ist DSGVO-konform. Alternativ kann ein stationares Hardware-Terminal (z.B. REINER SCT timeCard Terminal 3) beim Kunden eingerichtet werden. Der Kunde bestatigt die Stunden digital -- per Signatur auf dem Smartphone, uber das Kundenportal (z.B. zvoove Connect) oder per E-Mail-Freigabe-Link. Seit dem BAG-Beschluss vom September 2022 ist eine systematische Arbeitszeiterfassung gesetzlich verpflichtend.",
            },
            {
              question:
                "Werden alle Tarifzuschlage und Branchenzuschlage automatisch berechnet?",
              answer:
                "Ja. Das System kennt den GVP/DGB-Entgelttarifvertrag (Entgeltgruppen 1-9) sowie alle gangigen Branchenzuschlagstarifvertrage. Konkret: Nachtarbeitszuschlag 25% (23:00-06:00 Uhr, bzw. 20% bei regelmassiger Nachtarbeit), Sonntagszuschlag 50%, Feiertagszuschlag 100%. Branchenzuschlage werden nach Einsatzdauer gestaffelt berechnet -- z.B. TV BZ ME (Metall/Elektro): 15% nach 6 Wochen, 20% nach 3 Monaten, 30% nach 5 Monaten, 45% nach 7 Monaten. Der bundeslandspezifische Feiertagskalender ist integriert. Equal-Pay-Anspruche nach 9 Monaten (Paragraph 8 AUG) werden automatisch uberwacht. Bei Abweichungen uber 15% von den Soll-Stunden wird der Disponent automatisch benachrichtigt.",
            },
            {
              question:
                "Wie integriert sich die Automatisierung mit unserer bestehenden Lohn- und Branchensoftware?",
              answer:
                "Wir integrieren uns uber standardisierte Schnittstellen in Ihre bestehende IT-Landschaft. Fur DATEV LODAS und DATEV Lohn und Gehalt nutzen wir den ASCII-Import (Standardformat mit Lohnarten-Mapping) oder die DATEVconnect REST API fur bidirektionalen Datenaustausch. Branchensoftware wie zvoove One wird uber die zvoove API angebunden, Bullhorn uber die Bullhorn REST API. Fur die Rechnungsstellung unterstutzen wir den Export an DATEV Unternehmen Online, Lexware/Lexoffice, sevDesk und easybill. SV-Meldungen laufen uber dakota, Lohnsteuer uber ELSTER. Die Lohnergebnisse konnen uber den DATEV Lohnergebnisdatenservice automatisch zuruckimportiert werden.",
            },
            {
              question:
                "Mussen wir auf ZUGFeRD oder XRechnung umstellen?",
              answer:
                "Seit dem 01.01.2025 sind alle Unternehmen in Deutschland verpflichtet, E-Rechnungen empfangen zu konnen. Fur den Versand gelten Ubergangsregelungen: Bis Ende 2026 durfen noch Papierrechnungen genutzt werden, bis Ende 2027 fur Unternehmen mit Vorjahresumsatz unter 800.000 EUR. Ab 2028 gilt die vollstandige E-Rechnungspflicht fur alle B2B-Umsatze. Unsere Automatisierung erzeugt ZUGFeRD-Rechnungen im Profil EN16931 (COMFORT) -- ein hybrides PDF/A-3-Dokument mit eingebetteter XML-Datei, das sowohl menschenlesbar als auch maschinenlesbar ist. Fur offentliche Auftraggeber wird XRechnung (reines XML) unterstutzt. Sie sind damit ab Tag eins zukunftssicher aufgestellt.",
            },
            {
              question:
                "Was passiert bei Abweichungen oder Fehlern im automatisierten Prozess?",
              answer:
                "Der Prozess ist so konzipiert, dass Abweichungen automatisch erkannt und eskaliert werden -- nicht ignoriert. Konkret: GPS-Abweichung uber 500m vom Einsatzort, Arbeitszeit uber 10 Stunden pro Tag, fehlende Pflichtpause nach 6 Stunden, Abweichung uber 15% vom Schichtplan -- all das lost automatisch ein Review-Flag aus. Der zustandige Disponent erhalt eine E-Mail-Benachrichtigung mit allen Details und kann die Abweichung prufen, genehmigen oder eskalieren. Alle Entscheidungen werden revisionssicher dokumentiert und konnen bei Audits durch die Agentur fur Arbeit nachvollzogen werden.",
            },
            {
              question:
                "Wie funktioniert die Stundensatzkalkulation und der Verrechnungssatz?",
              answer:
                "Der Verrechnungssatz wird nach einer transparenten Formel kalkuliert: Gesamtkosten des Mitarbeiters pro Jahr geteilt durch die Produktivstunden pro Jahr. Die Gesamtkosten umfassen Bruttolohn, AG-Anteil Sozialversicherung (~20-21%), Lohnfortzahlung fur Urlaub/Krankheit/Feiertage (~23%), Umlagen (U1, U2, Insolvenzgeldumlage), BG-Beitrag, Branchenzuschlage, Verwaltungskosten (~15%) und Gewinnmarge (~10%). Ein Zeitarbeitnehmer hat typischerweise 195-210 produktive Arbeitstage pro Jahr (ca. 1.560-1.680 Produktivstunden) -- der Rest entfallt auf Urlaub, Krankheit, Feiertage und sonstige Ausfallzeiten. Der typische Kalkulationsfaktor liegt bei 1,8x bis 2,2x des Bruttostundenlohns.",
            },
          ]}
        />
      </ContentWrapper>

      {/* Section 12: ConsultationCtaDefault (AFTER FAQ) */}
      <ContentWrapper noPadding>
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
