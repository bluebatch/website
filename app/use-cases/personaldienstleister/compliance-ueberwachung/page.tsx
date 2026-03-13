import type { Metadata } from "next";
import Image from "next/image";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import type { PageConfig } from "@/lib/get-subpages";
import BackgroundHero from "@/components/heroes/background-hero";
import ContactButton from "@/components/buttons/contact-button";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import TabGroup, {
  TabNavigation,
  TabItem,
  TabContent,
} from "@/components/ui/tab-group";
import KpiCard from "@/components/cards/kpi-card";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnImage,
} from "@/components/heroes/hero-2-column";
import ComparisonCard, {
  BeforeCard,
  AfterCard,
  ComparisonHeadline,
  ComparisonList,
  ComparisonListItem,
  ComparisonFooter,
} from "@/components/cards/comparison-card";
import SavingsCard, {
  SavingsBadge,
  SavingsItems,
  SavingsItem,
} from "@/components/cards/savings-card";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/ui/timeline-as-steps";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { FaqContainer } from "@/components/ui/faqs";
import IntroBox from "@/components/ui/intro-box";
import Customer from "@/components/sections/customer/customer";

export const pageConfig: PageConfig = {
  title: "Compliance-Überwachung & Fristenmanagement",
  description:
    "Höchstüberlassungsdauer, Equal Pay und Tarifwerk 2026 automatisch überwachen – mit Echtzeit-Warnungen.",
};

export const metadata: Metadata = {
  title: "AÜG-Compliance für Personaldienstleister | Bluebatch",
  description:
    "Automatische Compliance-Überwachung für Personaldienstleister: Höchstüberlassungsdauer, Equal Pay, Branchenzuschläge und Tarifwerk 2026. 100% Fristeneinhaltung.",
  openGraph: {
    title: "Compliance-Überwachung – Personaldienstleister | Bluebatch",
    description:
      "AÜG-Compliance automatisch überwachen: Fristen, Equal Pay und Tarifwerk 2026.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch Compliance-Überwachung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compliance-Überwachung – Personaldienstleister | Bluebatch",
    description:
      "AÜG-Compliance automatisch überwachen: Fristen, Equal Pay und Tarifwerk 2026.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/use-cases/personaldienstleister/compliance-ueberwachung",
  },
};

const stats = [
  { value: 100, suffix: "%", label: "Fristeneinhaltung" },
  { value: 0, suffix: " Bußgelder", label: "Null Compliance-Verstöße" },
  { value: 4, suffix: "Wo.", label: "Frühwarnung vor Fristablauf" },
];

export default function Page() {
  return (
    <>
      {/* Section 1: BackgroundHero */}
      <ContentWrapper isFirstSection noPadding>
        <BackgroundHero
          imageSrc="/images/compliance-signs.jpg"
          overlayOpacity={0.8}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            Compliance & Fristenmanagement
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            AÜG-Fristen{" "}
            <BackgroundHero.Highlight>automatisch</BackgroundHero.Highlight>{" "}
            überwachen
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Höchstüberlassungsdauer nach § 1 Abs. 1b AÜG, Equal-Pay-Stichtage
            gemäß § 8 AÜG, Branchenzuschläge über 11 Branchen und das neue
            einheitliche DGB/GVP-Tarifwerk 2026 – alles in Echtzeit überwacht
            mit automatischen Eskalationsstufen und konkreten
            Handlungsvorschlägen.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">Compliance-Check anfragen</ContactButton>
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

      {/* Section 2: KpiCards (Danger Variant) – Das Risiko in Zahlen */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Das Risiko</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Die Konsequenzen manueller Überwachung
          </IntroBox.Headline>
          <IntroBox.Subline>
            Verstöße gegen das AÜG ziehen empfindliche Strafen nach sich – von
            Bußgeldern über Nachzahlungsansprüche bis zum Verlust der
            Überlassungserlaubnis. Und die meisten Personaldienstleister
            überwachen ihre Fristen noch manuell.
          </IntroBox.Subline>
        </IntroBox>

        <SimpleGrid cols={3}>
          <KpiCard
            value={500000}
            prefix="bis "
            suffix=" €"
            subtitle="maximales Bußgeld bei Equal-Pay-Verstoß (§ 16 AÜG)"
            variant="danger"
          />
          <KpiCard
            value={18}
            suffix=" Monate"
            subtitle="Höchstüberlassungsdauer – danach entsteht ein Arbeitsverhältnis beim Entleiher (§ 9 Abs. 1b AÜG)"
            variant="danger"
          />
          <KpiCard
            value={36}
            suffix="%"
            subtitle="der Personaldienstleister messen ihren Compliance-Erfolg anhand definierter Kennzahlen"
            variant="danger"
          />
        </SimpleGrid>
      </ContentWrapper>

      {/* Section 3: Problem-Darstellung – Typischer Compliance-Alltag */}
      <ContentWrapper colorScheme="gray">
        <SimpleGrid cols={2} className="items-start gap-12">
          <div>
            <IntroBox textCentered={false}>
              <IntroBox.PreHeadline>Das Problem</IntroBox.PreHeadline>
              <IntroBox.Headline>
                Manuelle Fristenüberwachung bei hunderten Einsätzen
              </IntroBox.Headline>
              <IntroBox.Subline>
                Viele Personaldienstleister überwachen Höchstüberlassungsdauer,
                Equal-Pay-Fristen und Branchenzuschlag-Stufen noch mit
                Excel-Listen und Outlook-Erinnerungen. Typische Folgen: doppelte
                Datenerfassung ohne Synchronisation, keine Berücksichtigung von
                Voreinsatzzeiten bei Verleiherwechsel, fehlende Audit-Trails für
                BA-Prüfungen und verspätete Branchenzuschlag-Stufenaufstiege.
              </IntroBox.Subline>
              <IntroBox.Subline>
                Bei Unterbrechungen bis 3 Monate + 1 Tag laufen die Fristen
                weiter – eine Berechnung, die in Excel regelmäßig falsch
                umgesetzt wird. Und: Die Agentur für Arbeit prüft bei
                befristeter Erlaubnis jährlich, bei unbefristeter alle 3–5 Jahre
                – oft stichprobenartig an 4–6 Arbeitnehmern.
              </IntroBox.Subline>
            </IntroBox>
          </div>
          <div>
            <TimelineAsSteps>
              <TimelineAsStepsStep value={1}>
                <Typo.H3 className="mt-2!">Einsatz startet</Typo.H3>
                <Typo.Paragraph>
                  Überlassungsdauer, Branchenzuschlags-Stufen und
                  Equal-Pay-Frist beginnen gleichzeitig zu laufen – oft mit
                  unbekannten Voreinsatzzeiten.
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={2}>
                <Typo.H3 className="mt-2!">Fristen laufen parallel</Typo.H3>
                <Typo.Paragraph>
                  Branchenzuschläge in 6 Stufen über 15 Monate, Equal Pay nach 9
                  bzw. 15 Monaten, Höchstüberlassung nach 18 Monaten – jede mit
                  eigener Unterbrechungslogik.
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={3}>
                <Typo.H3 className="mt-2!">Excel-Prüfung versagt</Typo.H3>
                <Typo.Paragraph>
                  Manuelle Checks werden vergessen, Voreinsatzzeiten bei anderem
                  Verleiher übersehen, 3-Monats-Karenzregel falsch berechnet.
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={4} isLast>
                <Typo.H3 className="mt-2!">Konsequenzen</Typo.H3>
                <Typo.Paragraph>
                  Bußgeld bis 500.000 €, Fiktion eines Arbeitsverhältnisses beim
                  Entleiher, Nachzahlungsansprüche, Widerruf der AÜG-Erlaubnis
                  (§ 5 AÜG).
                </Typo.Paragraph>
              </TimelineAsStepsStep>
            </TimelineAsSteps>
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Section 4: Lösung – Hero2Column */}
      <ContentWrapper>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Die Lösung</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Automatisches Fristenmonitoring mit Echtzeit-Eskalation
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Unsere Compliance Engine überwacht sämtliche AÜG-relevanten
              Fristen automatisch – von der Höchstüberlassungsdauer über
              Equal-Pay-Stichtage bis zu den 6-stufigen
              Branchenzuschlags-Tabellen in allen 11 TV-BZ-Branchen. Bei jedem
              neuen Einsatz werden automatisch alle Compliance-Meilensteine
              berechnet: Branchenzuschlag-Stufen (6 Wo., 3, 5, 7, 9, 15 Monate),
              Equal-Pay-Frist (9 bzw. 15 Monate bei TV BZ) und
              Höchstüberlassungsdauer (18 Monate, bis 24 bei Tarifabweichung).
            </Hero2ColumnDescription>
            <Hero2ColumnDescription>
              Das System berücksichtigt Voreinsatzzeiten – auch bei Wechsel des
              Verleihers – und wendet die 3-Monats-Karenzregel korrekt an.
              Gestaffelte Warnungen eskalieren automatisch: von einer
              Info-E-Mail an den Disponenten (4 Monate vorher) über
              Slack/Teams-Alerts an den Compliance-Kanal bis zur kritischen
              Benachrichtigung an die Geschäftsführung.
            </Hero2ColumnDescription>
            <Typo.List>
              <Typo.ListItem>
                Automatische Berechnung aller Meilensteine bei Einsatzbeginn
                (inkl. Voreinsatzzeiten)
              </Typo.ListItem>
              <Typo.ListItem>
                4-stufiges Eskalationsmodell: Info → Warnung → Dringend →
                Kritisch
              </Typo.ListItem>
              <Typo.ListItem>
                Integration mit zvoove, Personal-DIALOG und weiterer
                Branchensoftware über REST/oData-API
              </Typo.ListItem>
              <Typo.ListItem>
                Lückenloser Audit-Trail für BA-Prüfungen mit Export-Funktion
              </Typo.ListItem>
            </Typo.List>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/business-analytics.jpg"
              alt="Automatisches Compliance-Dashboard mit Fristenüberwachung"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Section 5: Höchstüberlassungsdauer & Equal Pay – 2-Column (reversed) */}
      <ContentWrapper colorScheme="gray-light">
        <SimpleGrid cols={2} className="items-start gap-12">
          <div className="relative aspect-video">
            <Image
              src="/images/business-roadmap.jpg"
              alt="Fristenübersicht Höchstüberlassungsdauer und Equal Pay"
              fill
              className="object-cover shadow-lg rounded-lg"
            />
          </div>
          <div>
            <IntroBox textCentered={false}>
              <IntroBox.PreHeadline>Kernfunktion</IntroBox.PreHeadline>
              <IntroBox.Headline>
                Höchstüberlassungsdauer & Equal Pay im Griff
              </IntroBox.Headline>
              <IntroBox.Subline>
                Die 18-Monats-Höchstüberlassungsdauer (§ 1 Abs. 1b AÜG) und die
                Equal-Pay-Pflicht nach 9 Monaten (§ 8 AÜG) sind die zentralen
                AÜG-Compliance-Anforderungen. Unser System trackt beide Fristen
                pro Einsatz in Echtzeit.
              </IntroBox.Subline>
            </IntroBox>

            <Typo.H3>Höchstüberlassungsdauer</Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                Echtzeit-Tracking aller laufenden Überlassungen mit Restlaufzeit
                in Tagen
              </Typo.ListItem>
              <Typo.ListItem>
                Automatische Anrechnung von Voreinsatzzeiten – auch bei Wechsel
                des Verleihers
              </Typo.ListItem>
              <Typo.ListItem>
                Korrekte Anwendung der 3-Monats-Karenzregel (3 Monate + 1 Tag =
                Neustart)
              </Typo.ListItem>
              <Typo.ListItem>
                Kundenspezifische Abweichungen bis 24 Monate bei gültigem
                Tarifvertrag oder Betriebsvereinbarung
              </Typo.ListItem>
              <Typo.ListItem>
                Gestaffelte Warnungen ab 4 Monaten vor Ablauf (14, 15, 16, 17
                Monate)
              </Typo.ListItem>
            </Typo.List>

            <Typo.H3>Equal Pay</Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                Equal-Pay-Stichtag-Berechnung: nach 9 Monaten (Grundregel) bzw.
                15 Monaten (bei qualifiziertem TV BZ)
              </Typo.ListItem>
              <Typo.ListItem>
                Automatischer Vergleich mit Entleiher-Vergütung: Grundgehalt,
                Zuschläge, Prämien, Urlaubsgeld, Sachleistungen
              </Typo.ListItem>
              <Typo.ListItem>
                Equal-Pay-Auskunft gem. § 13 AÜG automatisch beim Entleiher
                anfordern (60 Tage vor Frist)
              </Typo.ListItem>
              <Typo.ListItem>
                Entgeltdifferenz-Berechnung und automatische Meldung an die
                Lohnbuchhaltung
              </Typo.ListItem>
            </Typo.List>
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Section 6: Tarifwerk 2026 – Dark Section */}
      <ContentWrapper colorScheme="primary-dark">
        <IntroBox dark>
          <IntroBox.PreHeadline>Tarifwerk 2026</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Neues einheitliches DGB/GVP-Tarifwerk ab 01.01.2026
          </IntroBox.Headline>
          <IntroBox.Subline>
            Das bisherige Nebeneinander von BAP/DGB- und iGZ/DGB-Tarifverträgen
            endet. Ab 2026 gilt ein einheitliches Tarifwerk für die gesamte
            Zeitarbeitsbranche mit rund 560.000 Beschäftigten – basierend auf
            Entgeltrahmentarifvertrag (ERTV), Entgelttarifvertrag (ETV) und
            Manteltarifvertrag (MTV). Die Umstellung erfordert Anpassungen in
            allen Abrechnungssystemen.
          </IntroBox.Subline>
        </IntroBox>

        <SimpleGrid cols={3}>
          <SimpleCard dark>
            <Typo.H3>Neue Entgelttabellen & Lohnerhöhungen</Typo.H3>
            <Typo.Paragraph className="text-gray-300">
              Drei Tariferhöhungen in kurzer Folge: +2,99% ab 01.01.2026, +2,50%
              ab 01.09.2026 und +3,50% ab 01.04.2027. Die Entgeltgruppe EG1
              steigt auf 14,96 €/h – deutlich über dem gesetzlichen Mindestlohn.
              EG2 wird in EG2a und EG2b unterteilt. Unser System passt alle
              Entgeltsätze automatisch zu den Stichtagen an und meldet
              Abweichungen sofort an die Lohnbuchhaltung.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard dark>
            <Typo.H3>Doppelte Eingruppierung & Übergangsregeln</Typo.H3>
            <Typo.Paragraph className="text-gray-300">
              Für bestehende Verträge bis 31.12.2025 gelten die alten
              Eingruppierungsregeln weiter. Neue Verträge ab 01.01.2026 folgen
              der GVP/DGB-Klassifizierung. Das bedeutet: Parallele Anwendung
              alter (iGZ) und neuer (GVP) Eingruppierungsmatrix während der
              Übergangsphase. Befristete Verträge sind für ehemalige
              BAP-Mitglieder bis zu 4x verlängerbar (bis 31.12.2027), flexible
              Arbeitszeitmodelle für ehemalige iGZ-Mitglieder gelten bis
              31.12.2029.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard dark>
            <Typo.H3>Digitale Nachvollziehbarkeit für BA-Prüfungen</Typo.H3>
            <Typo.Paragraph className="text-gray-300">
              Die doppelte Eingruppierungssystematik erfordert erhöhte
              Aufmerksamkeit bei Prüfungen der Bundesagentur für Arbeit. Unser
              System dokumentiert lückenlos, welche Eingruppierungsmatrix je
              Arbeitnehmer angewendet wird, speichert alle Berechnungsschritte
              und erzeugt auf Knopfdruck auditfähige Reports.
              Arbeitszeit-Standardisierung auf 151,67 h/Monat (35 h/Woche) und
              das neue Zulagen-Modell (höherwertiger Einsatz erst ab 6. Woche
              statt Tag 1) werden automatisch berücksichtigt.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* Section 7: Audit-fähige Compliance-Reports – 2-Column */}
      <ContentWrapper>
        <SimpleGrid cols={2} className="items-start gap-12">
          <div>
            <IntroBox textCentered={false}>
              <IntroBox.PreHeadline>Reporting</IntroBox.PreHeadline>
              <IntroBox.Headline>
                Audit-fähige Compliance-Reports auf Knopfdruck
              </IntroBox.Headline>
              <IntroBox.Subline>
                Die Agentur für Arbeit prüft bei befristeter AÜG-Erlaubnis
                jährlich, bei unbefristeter Erlaubnis alle 3–5 Jahre. Bei der
                Prüfung werden typischerweise 4–6 Arbeitnehmer stichprobenartig
                ausgewählt und vollständige Dokumentation angefordert:
                Arbeitsverträge, Überlassungsverträge, Entgeltabrechnungen,
                Equal-Pay-Auskünfte, Eingruppierungsnachweise und
                Fristenberechnungen.
              </IntroBox.Subline>
            </IntroBox>
            <Typo.List>
              <Typo.ListItem>
                Vollständige Fristenübersicht aller laufenden Überlassungen mit
                Ampelsystem (grün/gelb/rot)
              </Typo.ListItem>
              <Typo.ListItem>
                Stichproben-Export: Komplette Dokumentation pro Arbeitnehmer auf
                Knopfdruck – inkl. Voreinsatzzeiten,
                Branchenzuschlags-Berechnungen und Equal-Pay-Nachweise
              </Typo.ListItem>
              <Typo.ListItem>
                Lückenloser Audit-Trail: Jede Berechnung, Warnung und Maßnahme
                mit Zeitstempel dokumentiert
              </Typo.ListItem>
              <Typo.ListItem>
                Quartalsweise automatische Interne AÜG-Aktenrevision als
                Prüfungsvorbereitung – 10 zufällige Arbeitnehmer werden geprüft,
                Mängel automatisch gemeldet
              </Typo.ListItem>
              <Typo.ListItem>
                Export in PDF und Excel für BA-Prüfer und externe Auditoren
              </Typo.ListItem>
            </Typo.List>
          </div>
          <div className="relative aspect-video">
            <Image
              src="/images/data-quality.jpg"
              alt="Audit-fähiger Compliance-Report mit Ampelsystem"
              fill
              className="object-cover shadow-lg rounded-lg"
            />
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Section 8: IT-Tools & Infrastruktur */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>IT-Infrastruktur</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Integration in bestehende Branchensoftware und Systeme
          </IntroBox.Headline>
          <IntroBox.Subline>
            Unsere Compliance Engine integriert sich nahtlos in die bestehende
            IT-Landschaft von Personaldienstleistern – vom ERP über die
            Lohnabrechnung bis zum Dokumentenmanagement.
          </IntroBox.Subline>
        </IntroBox>

        <SimpleGrid cols={2}>
          <SimpleCard>
            <Typo.H3>ERP-Integration: zvoove, Personal-DIALOG & Co.</Typo.H3>
            <Typo.Paragraph>
              Direkte Anbindung an den Marktführer zvoove (One und Classic) über
              REST/oData-API. API-Keys werden im zvoove Hub erstellt, ein
              Basis-Kontingent an API-Aufrufen ist im Abonnement enthalten.
              Ebenso unterstützt: Personal-DIALOG mit integrierter
              AÜG-Überwachung, TIME JOB core und BSS I time pro auf Microsoft
              Dynamics 365. Wir lesen aktive Einsätze, Personalstammdaten,
              Kundenstammdaten mit Brancheninfo, Entgeltdaten und die
              vollständige Einsatzhistorie für Voreinsatzzeiten.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3>
              Compliance-Plattformen: IZS, VMS & Managed Compliance
            </Typo.H3>
            <Typo.Paragraph>
              Anbindung an das IZS – Deutschlands führendes unabhängiges
              Managed-Compliance-System (seit 2011). IZS verifiziert automatisch
              AÜ-Erlaubnisse, Sozialversicherungsbeiträge und BG-Beiträge mit
              Daten direkt von Krankenkassen und Berufsgenossenschaften.
              Ergänzend: Integration mit Vendor Management Systemen wie
              compleet, 11A, HR4You und stazzle für ganzheitliches
              Lieferantenrisikomanagement.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3>Lohnabrechnung: DATEV-Schnittstellen</Typo.H3>
            <Typo.Paragraph>
              Automatische Synchronisation mit DATEV über vier Schnittstellen:
              Lohnimportdatenservice, Lohnauswertungsdatenservice,
              Lohnergebnisdatenservice und Lohnaustauschdatenservice.
              Entgeltanpassungen bei Tariferhöhungen,
              Branchenzuschlag-Stufenaufstiege und Equal-Pay-Differenzen werden
              automatisch in die Lohnabrechnung eingespielt.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3>Dokumentenmanagement & Reporting</Typo.H3>
            <Typo.Paragraph>
              Integration mit DocuWare (zertifizierte LANDWEHR L1-Anbindung) für
              digitale Personalakten. Ergänzend: FlexControl (MB Software) für
              Spezialauswertungen, zvoove-integriertes Reporting und optionale
              Anbindung an Power BI oder Tableau für individuelle
              Compliance-Dashboards. Rechtsdatenbanken wie Haufe, BA-Weisungen
              und GVP-Entgelttabellen werden automatisch abgeglichen.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* Section 9: n8n-Automatisierung */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Automatisierung mit n8n</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Compliance-Workflows die rund um die Uhr laufen
          </IntroBox.Headline>
          <IntroBox.Subline>
            Mit n8n als Open-Source-Workflow-Engine automatisieren wir die
            gesamte Compliance-Überwachung – von der täglichen Fristenprüfung
            über das monatliche Branchenzuschlag-Audit bis zur automatischen
            Equal-Pay-Auskunftsanforderung. Self-hosted auf Docker für maximale
            DSGVO-Konformität.
          </IntroBox.Subline>
        </IntroBox>

        <TabGroup defaultValue="hoechstueberlassung">
          <TabNavigation>
            <TabItem value="hoechstueberlassung">Höchstüberlassung</TabItem>
            <TabItem value="branchenzuschlag">Branchenzuschlag</TabItem>
            <TabItem value="meilensteine">Meilensteine</TabItem>
            <TabItem value="equal-pay">Equal Pay</TabItem>
            <TabItem value="tariferhoehung">Tariferhöhung</TabItem>
            <TabItem value="ba-pruefung">BA-Prüfung</TabItem>
          </TabNavigation>

          <TabContent value="hoechstueberlassung">
            <Typo.H3>Tägliche Höchstüberlassungs-Prüfung</Typo.H3>
            <Typo.Paragraph>
              Schedule Trigger täglich um 07:00 → Alle aktiven Einsätze aus
              zvoove-API abrufen → Für jeden Einsatz: Einsatzbeginn +
              Voreinsatzzeiten berechnen, 3-Monats-Karenzregel prüfen,
              verbleibende Tage bis 18-Monats-Grenze ermitteln.
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>Bei Restlaufzeit &lt; 28 Tage: Warn-E-Mail an Disponenten</Typo.ListItem>
              <Typo.ListItem>Bei Restlaufzeit &lt; 7 Tage: Dringend-Alert in Slack #compliance-alerts</Typo.ListItem>
              <Typo.ListItem>Alle Prüfungen werden im Audit-Log dokumentiert</Typo.ListItem>
            </Typo.List>
          </TabContent>

          <TabContent value="branchenzuschlag">
            <Typo.H3>Monatliche Branchenzuschlag-Compliance</Typo.H3>
            <Typo.Paragraph>
              Schedule Trigger am 1. des Monats → Alle aktiven Einsätze mit
              Brancheninformation abrufen → Pro Einsatz: Branche bestimmen (M+E,
              Chemie, Kautschuk etc.), aktuelle Stufe nach TV BZ ermitteln,
              Soll-Zuschlag mit Ist-Zuschlag vergleichen.
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>Bei Unterzahlung: Flaggen und Korrekturmaßnahme auslösen</Typo.ListItem>
              <Typo.ListItem>PDF-Compliance-Report an Geschäftsführung und Lohnbuchhaltung</Typo.ListItem>
              <Typo.ListItem>Prüfungsergebnis im Audit-Trail loggen</Typo.ListItem>
            </Typo.List>
          </TabContent>

          <TabContent value="meilensteine">
            <Typo.H3>Automatische Meilensteine bei Einsatzbeginn</Typo.H3>
            <Typo.Paragraph>
              Webhook Trigger bei neuem Einsatz in zvoove → Alle
              Compliance-Meilensteine berechnen: Branchenzuschlag-Stufen (6 Wo.,
              3, 5, 7, 9, 15 Mo.), Equal-Pay-Frist (9 bzw. 15 Mo.),
              Höchstüberlassungsdauer (18 bzw. 24 Mo.).
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>Warntermine 14 Tage vor jedem Meilenstein planen</Typo.ListItem>
              <Typo.ListItem>Dokumentenvollständigkeit prüfen: Überlassungsvertrag, Equal-Pay-Auskunft, Eingruppierungsnachweis</Typo.ListItem>
              <Typo.ListItem>Bei fehlenden Dokumenten: Sofort-E-Mail an Disponenten</Typo.ListItem>
            </Typo.List>
          </TabContent>

          <TabContent value="equal-pay">
            <Typo.H3>Equal-Pay-Auskunftsmanagement</Typo.H3>
            <Typo.Paragraph>
              Schedule Trigger wöchentlich, Montag 08:00 → Alle Einsätze mit
              Equal-Pay-Frist in &lt; 60 Tagen abrufen → Automatische Prüfung
              auf vorhandene Entleiher-Auskunft.
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>Falls keine Auskunft vorhanden: Automatische Anfrage an Entleiher gem. § 13 AÜG mit 14-Tages-Frist</Typo.ListItem>
              <Typo.ListItem>Falls Auskunft vorhanden: Soll-Entgelt berechnen und mit Ist vergleichen</Typo.ListItem>
              <Typo.ListItem>Bei Differenz: Lohnbuchhaltung über erforderliche Entgeltanpassung informieren</Typo.ListItem>
            </Typo.List>
          </TabContent>

          <TabContent value="tariferhoehung">
            <Typo.H3>Tariferhöhungs-Prüfung zu Stichtagen</Typo.H3>
            <Typo.Paragraph>
              Schedule Trigger zu den Stichtagen 01.01.2026, 01.09.2026 und
              01.04.2027 → Alle aktiven Arbeitnehmer mit EG1–EG9 abrufen →
              Aktuelles Entgelt gegen neues Mindestentgelt prüfen.
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>Bei Unterschreitung: Liste aller anzupassenden Entgelte an Lohnbuchhaltung</Typo.ListItem>
              <Typo.ListItem>Neue Entgeltsätze über DATEV-Lohnimportdatenservice automatisch übermitteln</Typo.ListItem>
              <Typo.ListItem>Alle Prüfungen im Audit-Log dokumentieren</Typo.ListItem>
            </Typo.List>
          </TabContent>

          <TabContent value="ba-pruefung">
            <Typo.H3>Quartalsweise BA-Prüfungs-Vorbereitung</Typo.H3>
            <Typo.Paragraph>
              Schedule Trigger quartalsweise → Stichprobe von 10 Arbeitnehmern
              aus zvoove-API → Für jeden: Vollständigkeitsprüfung und
              Fristenprüfung durchführen.
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>Arbeitsvertrag, Überlassungsvertrag, Einsatzmitteilung, Entgeltabrechnungen prüfen</Typo.ListItem>
              <Typo.ListItem>Urlaubsnachweise, Krankmeldungen, Equal-Pay-Auskunft, Eingruppierungsnachweis prüfen</Typo.ListItem>
              <Typo.ListItem>PDF-Report &quot;Interne AÜG-Aktenrevision&quot; erstellen und an Geschäftsführung senden</Typo.ListItem>
            </Typo.List>
          </TabContent>
        </TabGroup>
      </ContentWrapper>

      {/* Section 10: ROI durch Risikovermeidung */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>ROI-Kalkulation</IntroBox.PreHeadline>
          <IntroBox.Headline>
            500–1.000% ROI durch Risikovermeidung
          </IntroBox.Headline>
          <IntroBox.Subline>
            Für einen Personaldienstleister mit 200+ gleichzeitigen Einsätzen
            und aktuell manueller Fristenüberwachung per Excel und Outlook:
          </IntroBox.Subline>
        </IntroBox>

        <ComparisonCard className="mt-10">
          <BeforeCard>
            <ComparisonHeadline>Vorher: Excel & Outlook</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                1 FTE für manuelle Fristenüberwachung @ 45.000 €/Jahr
              </ComparisonListItem>
              <ComparisonListItem>
                Durchschnittlich 2–3 Fristversäumnisse pro Jahr
                (Höchstüberlassung, Equal Pay, Branchenzuschläge)
              </ComparisonListItem>
              <ComparisonListItem>
                Bußgeldrisiko: 30.000 € bei Höchstüberlassungsverstoß, bis
                500.000 € bei Equal-Pay-Verstoß (§ 16 AÜG)
              </ComparisonListItem>
              <ComparisonListItem>
                Zusatzrisiko: Fiktion des Arbeitsverhältnisses (§ 9 Abs. 1b
                AÜG), Nachzahlungsansprüche, Widerruf der AÜG-Erlaubnis
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>
              Jährliches Risiko: 105.000–545.000 €
            </ComparisonFooter>
          </BeforeCard>

          <AfterCard>
            <ComparisonHeadline>
              Nachher: Automatisierte Compliance Engine
            </ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                0,2 FTE für Compliance-Review und Ausnahmebehandlung @ 9.000
                €/Jahr
              </ComparisonListItem>
              <ComparisonListItem>
                0 Fristversäumnisse durch 4-stufiges automatisches
                Eskalationsmodell
              </ComparisonListItem>
              <ComparisonListItem>
                Bußgeldrisiko: effektiv 0 € durch lückenlose Überwachung
              </ComparisonListItem>
              <ComparisonListItem>
                Audit-Sicherheit: Jederzeit prüfungsbereite Dokumentation für
                die Bundesagentur für Arbeit
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>
              Jährliche Gesamtkosten: ~24.000 €
            </ComparisonFooter>
          </AfterCard>
        </ComparisonCard>

        <SavingsCard>
          <SavingsBadge>ROI im ersten Jahr: 500–1.000%</SavingsBadge>
          <SavingsItems>
            <SavingsItem label="Risikovermeidung" highlight>
              bis 500.000 €
            </SavingsItem>
            <SavingsItem label="Amortisation">1–2 Monate</SavingsItem>
            <SavingsItem label="Fristversäumnisse">–100%</SavingsItem>
          </SavingsItems>
        </SavingsCard>
      </ContentWrapper>

      {/* Section 11: Customer Logos */}
      <ContentWrapper noPadding bodyWidth="full">
        <Customer />
      </ContentWrapper>

      {/* Section 12: ConsultationCtaDefault */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>

      {/* Section 13: FAQ */}
      <ContentWrapper>
        <FaqContainer
          faqs={[
            {
              question:
                "Wie aktuell sind die tariflichen Regelungen im System?",
              answer:
                "Alle Tarifabschlüsse, gesetzlichen Änderungen und Branchenzuschlagstabellen werden innerhalb von 48 Stunden nach Veröffentlichung eingepflegt. Das einheitliche DGB/GVP-Tarifwerk 2026 (Entgeltrahmentarifvertrag, Entgelttarifvertrag und Manteltarifvertrag) ist vollständig integriert – inklusive der drei Lohnerhöhungsstufen (+2,99% ab 01.01.2026, +2,50% ab 01.09.2026, +3,50% ab 01.04.2027) und der neuen Eingruppierungsmatrix EG1–EG9. Auch die aktualisierten BA-Fachlichen Weisungen zum AÜG (Stand 01.10.2025) sind berücksichtigt.",
            },
            {
              question: "Was passiert bei einer drohenden Fristüberschreitung?",
              answer:
                "Das System nutzt ein 4-stufiges Eskalationsmodell: Stufe 1 (Info): E-Mail an den zuständigen Disponenten, z. B. 4 Monate vor Ablauf der Höchstüberlassungsdauer. Stufe 2 (Warnung): E-Mail an Disponenten und Niederlassungsleiter, z. B. 2 Monate vorher. Stufe 3 (Dringend): Echtzeit-Alert in Slack oder Microsoft Teams im #compliance-Kanal, z. B. 2 Wochen vorher. Stufe 4 (Kritisch): E-Mail an Geschäftsführung und Compliance-Beauftragten. Zusätzlich werden konkrete Handlungsvorschläge generiert: Einsatzwechsel, Übernahmeangebot oder Neustartplanung nach der 3-Monats-Karenzregel.",
            },
            {
              question:
                "Werden kundenspezifische Regelungen und Branchentarifverträge berücksichtigt?",
              answer:
                "Ja. Das System unterstützt abweichende Höchstüberlassungsdauern bis 24 Monate bei gültigem Tarifvertrag der Einsatzbranche oder Betriebsvereinbarung. Alle 11 Branchenzuschlagstarifverträge (TV BZ) sind hinterlegt – von Metall & Elektro (IG Metall, 3-Stufen-Modell seit 09/2023: +15% ab Tag 1, +50% ab 9. Monat, +65% ab 15. Monat) über Chemie (IGBCE, 6 Stufen nach Entgeltgruppe, bis +67%) bis Schienenverkehr (EVG). Kundenspezifische Einstellungen werden analog zur zvoove-Logik pro Kundenstamm hinterlegt.",
            },
            {
              question:
                "Können wir Reports für Audits der Agentur für Arbeit generieren?",
              answer:
                "Ja. Das System generiert auf Knopfdruck vollständige, auditfähige Reports für BA-Prüfungen. Der Standardablauf bei Verlängerungsanträgen – Einreichung einer Tabelle aller überlassenen Arbeitnehmer, Stichprobenauswahl von 4–6 Personen, Anforderung detaillierter Unterlagen – wird proaktiv vorbereitet. Pro Arbeitnehmer stehen alle erforderlichen Dokumente bereit: Arbeitsverträge (mit Schriftformnachweis), Überlassungsverträge, Einsatzmitteilungen, Entgeltabrechnungen, Equal-Pay-Auskünfte, Eingruppierungsnachweise, Fristenberechnungen und Voreinsatzzeiten-Dokumentation. Quartalsweise wird automatisch eine interne AÜG-Aktenrevision durchgeführt.",
            },
            {
              question:
                "Wie funktioniert die Integration mit unserer bestehenden Branchensoftware?",
              answer:
                "Die Compliance Engine integriert sich über standardisierte Schnittstellen: zvoove One und Classic über REST/oData-API (API-Key aus dem zvoove Hub), DATEV über Lohnimportdatenservice für automatische Entgeltanpassungen, DocuWare für digitale Personalakten. n8n-Workflows laufen als self-hosted Docker-Container für maximale DSGVO-Konformität. Täglich werden aktive Einsätze, Personalstammdaten, Kundenstammdaten und Entgeltdaten synchronisiert. Die Einrichtung dauert typischerweise 2–4 Wochen inkl. Konfiguration kundenspezifischer Tarifabweichungen.",
            },
            {
              question: "Was kostet ein Compliance-Verstoß konkret?",
              answer:
                "Die Bußgelder nach § 16 AÜG sind gestaffelt: Verstoß gegen die Höchstüberlassungsdauer bis 30.000 €, Verstoß gegen Equal Pay/Equal Treatment bis 500.000 €, Überlassung ohne gültige Erlaubnis bis 30.000 € (für Verleiher und Entleiher). Darüber hinaus drohen: Fiktion eines Arbeitsverhältnisses zwischen Leiharbeitnehmer und Entleiher (§ 9 Abs. 1b AÜG), rückwirkende Nachzahlungsansprüche der Arbeitnehmer, Widerruf der AÜG-Erlaubnis (§ 5 AÜG) und gewerberechtliche Unzuverlässigkeit für künftige Erlaubnisanträge. Bei Vorteilsabschöpfung kann der Bußgeldrahmen sogar überschritten werden.",
            },
          ]}
        />
      </ContentWrapper>
    </>
  );
}
