import type { Metadata } from "next";
import Image from "next/image";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import type { PageConfig } from "@/lib/get-subpages";
import BackgroundHero from "@/components/heroes/background-hero";
import ContactButton from "@/components/buttons/contact-button";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import CardShowcase from "@/components/cards/card-showcase";
import KpiCard from "@/components/cards/kpi-card";
import IntroBox from "@/components/ui/intro-box";
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
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { FaqContainer } from "@/components/ui/faqs";
import Customer from "@/components/sections/customer/customer";

export const pageConfig: PageConfig = {
  title: "Bewerber-Screening & KI-Matching",
  description:
    "Bewerbungen automatisch analysieren, Profile vervollständigen und Kandidaten intelligent mit offenen Stellen matchen.",
};

export const metadata: Metadata = {
  title: "KI-Bewerber-Screening Personaldienstleister | Bluebatch",
  description:
    "KI-gestütztes Bewerber-Screening für Personaldienstleister: Automatisches CV-Parsing, Skill-Matching und Kandidaten-Ranking. 30% schnelleres Matching.",
  openGraph: {
    title: "KI-Bewerber-Screening Personaldienstleister | Bluebatch",
    description:
      "Bewerbungen automatisch analysieren und Kandidaten intelligent matchen - für Personaldienstleister.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch Bewerber-Screening",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KI-Bewerber-Screening Personaldienstleister | Bluebatch",
    description:
      "Bewerbungen automatisch analysieren und Kandidaten intelligent matchen.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/use-cases/personaldienstleister/bewerber-screening",
  },
};

const stats = [
  { value: 30, suffix: "%", label: "Schnelleres Matching" },
  { value: 80, suffix: "%", label: "Weniger manuelles Screening" },
  { value: 3, suffix: "x", label: "Mehr Vermittlungen pro Disponent" },
];

export default function Page() {
  return (
    <>
      {/* Section 1: BackgroundHero */}
      <ContentWrapper isFirstSection noPadding>
        <BackgroundHero
          imageSrc="/images/human-resources.jpg"
          overlayOpacity={0.8}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            Bewerber-Screening & KI-Matching
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            Kandidaten{" "}
            <BackgroundHero.Highlight>intelligent</BackgroundHero.Highlight>{" "}
            matchen statt manuell suchen
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            KI-gestütztes CV-Parsing mit Textkernel-Niveau, automatische
            Skill-Extraktion nach ESCO-Taxonomie und semantisches Matching gegen
            Ihre offenen Positionen in zvoove, Bullhorn oder compleet. Von 15
            Minuten auf unter 60 Sekunden pro Bewerbung - bei höherer
            Trefferquote und DSGVO-konformer Verarbeitung.
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

      {/* Section 2: KpiCard Grid - Das Problem in Zahlen */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Das Problem</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Warum manuelles Screening Personaldienstleister ausbremst
          </IntroBox.Headline>
          <IntroBox.Subline>
            Disponenten verbringen den Großteil ihrer Arbeitszeit mit dem Sichten
            von Lebensläufen und dem Abgleich mit offenen Positionen. Bei
            hunderten Bewerbungseingängen pro Woche über E-Mail, StepStone,
            Indeed, WhatsApp und Walk-ins bleibt kaum Zeit für wertschöpfende
            Tätigkeiten wie persönliche Betreuung, Kundenakquise und
            Vertragsverhandlungen.
          </IntroBox.Subline>
        </IntroBox>

        <SimpleGrid cols={3} className="mt-10">
          <div>
            <KpiCard
              value={15}
              suffix=" Min."
              subtitle="Screening-Zeit pro Lebenslauf"
              variant="danger"
            />
            <Typo.Paragraph className="mt-4 text-sm text-gray-600">
              Disponenten investieren durchschnittlich 15-20 Minuten pro
              Bewerbung - für Sichten, Bewerten, manuelle Dateneingabe ins ATS
              und den Abgleich mit offenen Stellen.
            </Typo.Paragraph>
          </div>
          <div>
            <KpiCard
              value={85}
              suffix="%"
              subtitle="Bewerber-Ghosting-Rate"
              variant="danger"
            />
            <Typo.Paragraph className="mt-4 text-sm text-gray-600">
              85,6 % der Personalvermittler berichten von signifikant
              zunehmendem Ghosting. 27 % der Bewerber antworten nach
              Unterlageneinreichung nicht mehr - oft wegen zu langer
              Reaktionszeiten.
            </Typo.Paragraph>
          </div>
          <div>
            <KpiCard
              value={3}
              suffix="-5 Tage"
              subtitle="Durchschnittliche Reaktionszeit"
              variant="danger"
            />
            <Typo.Paragraph className="mt-4 text-sm text-gray-600">
              Im umkämpften Bewerbermarkt ist eine Reaktionszeit von 3-5 Tagen
              viel zu langsam. Gute Kandidaten unterschreiben bei der
              Konkurrenz, bevor der Disponent zum Hörer greift.
            </Typo.Paragraph>
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Section 3: CardShowcase - So funktioniert KI-Matching */}
      <ContentWrapper colorScheme="dark">
        <IntroBox dark>
          <IntroBox.PreHeadline>Der Workflow</IntroBox.PreHeadline>
          <IntroBox.Headline>
            So funktioniert KI-gestütztes Bewerber-Screening
          </IntroBox.Headline>
          <IntroBox.Subline>
            Vom Bewerbungseingang per E-Mail oder Jobportal bis zum fertigen
            Matching-Ergebnis in unter 5 Minuten. Unser n8n-basierter Workflow
            verbindet CV-Parsing, LLM-Analyse und Ihr ATS zu einer
            durchgängigen Automatisierung.
          </IntroBox.Subline>
        </IntroBox>

        <CardShowcase>
          <CardShowcase.Item size="large">
            <CardShowcase.Image
              src="/images/data-quality.jpg"
              alt="CV-Parsing & Datenextraktion"
            />
            <CardShowcase.Content>
              <CardShowcase.Title>
                CV-Parsing & Datenextraktion
              </CardShowcase.Title>
              <CardShowcase.Description>
                Lebensläufe werden automatisch aus E-Mail-Anhängen,
                Jobportal-Bewerbungen (StepStone, Indeed) und
                Karriereseiten-Uploads extrahiert. Der n8n-Workflow nutzt den
                Extract-from-File-Node für die PDF-Textextraktion und einen
                LLM-basierten Information Extractor, der strukturierte
                JSON-Daten liefert: Name, Kontaktdaten, Berufserfahrung mit
                Positionen und Zeiträumen, Ausbildung, Skills, Sprachkenntnisse
                und Führerschein. Das Ergebnis ist vergleichbar mit
                spezialisierten Parsern wie Textkernel oder CVlizer - in über 25
                Sprachen, inklusive Deutsch, Polnisch, Rumänisch und Türkisch.
              </CardShowcase.Description>
            </CardShowcase.Content>
          </CardShowcase.Item>

          <CardShowcase.Item size="small">
            <CardShowcase.Image
              src="/images/technology-integration.jpg"
              alt="Skill-Extraktion & ESCO-Normalisierung"
            />
            <CardShowcase.Content>
              <CardShowcase.Title>
                Skill-Extraktion & ESCO-Normalisierung
              </CardShowcase.Title>
              <CardShowcase.Description>
                Extrahierte Skills werden über einen dedizierten n8n-Workflow
                gegen die ESCO-Taxonomie normalisiert. Synonyme wie
                &bdquo;Schlosser&ldquo;, &bdquo;Industriemechaniker&ldquo; und
                &bdquo;Metallfacharbeiter&ldquo; werden auf standardisierte
                Begriffe gemappt. Der Workflow nutzt einen LLM-Prompt, der
                ESCO-Codes zuordnet und verwandte Skills ergänzt - so entsteht
                eine einheitliche Skill-Sprache über alle Bewerber hinweg,
                unabhängig von Herkunftsland und Sprachvariante.
              </CardShowcase.Description>
            </CardShowcase.Content>
          </CardShowcase.Item>

          <CardShowcase.Item size="small">
            <CardShowcase.Image
              src="/images/business-analytics.jpg"
              alt="Semantisches Matching & Scoring"
            />
            <CardShowcase.Content>
              <CardShowcase.Title>
                Semantisches Matching & Scoring
              </CardShowcase.Title>
              <CardShowcase.Description>
                Ein KI-gestützter Matching-Algorithmus vergleicht das
                normalisierte Kandidatenprofil mit allen offenen Positionen aus
                Ihrem ATS (zvoove, Bullhorn, compleet). Der n8n-Workflow ruft
                offene Stellen per API ab, lässt den LLM eine
                Passungsbewertung auf einer Skala von 1-10 berechnen - unter
                Berücksichtigung von Skills, Erfahrungsjahren,
                Sprachkenntnissen, Standort und Verfügbarkeit - und sortiert die
                Top-3-Matches heraus.
              </CardShowcase.Description>
            </CardShowcase.Content>
          </CardShowcase.Item>

          <CardShowcase.Item size="large">
            <CardShowcase.Image
              src="/images/communication-tools.jpg"
              alt="Kandidaten-Ranking & Disponent-Benachrichtigung"
            />
            <CardShowcase.Content>
              <CardShowcase.Title>
                Kandidaten-Ranking & Disponent-Benachrichtigung
              </CardShowcase.Title>
              <CardShowcase.Description>
                Die besten Matches werden automatisch priorisiert und der
                zuständige Disponent erhält eine Sofort-Benachrichtigung per
                Slack oder Microsoft Teams mit Kandidaten-Summary, Top-Match,
                Matching-Score und einem Direktlink zum ATS-Profil. Parallel
                wird eine automatische Eingangsbestätigung an den Bewerber
                gesendet. Reagiert der Disponent nicht innerhalb von 2 Stunden,
                folgt eine Erinnerung. So sinkt die Reaktionszeit von 3-5 Tagen
                auf unter 2 Stunden.
              </CardShowcase.Description>
            </CardShowcase.Content>
          </CardShowcase.Item>
        </CardShowcase>
      </ContentWrapper>

      {/* Section 4: 2-Column - Qualifikationslücken-Analyse */}
      <ContentWrapper colorScheme="gray-light">
        <SimpleGrid cols={2} className="items-center gap-12">
          <div>
            <IntroBox textCentered={false}>
              <IntroBox.PreHeadline>
                Proaktive Kandidatenentwicklung
              </IntroBox.PreHeadline>
              <IntroBox.Headline>
                Qualifikationslücken erkennen, Vermittlungsquote steigern
              </IntroBox.Headline>
              <IntroBox.Subline>
                Die KI analysiert nicht nur die Passung zwischen Kandidat und
                Stelle, sondern identifiziert gezielt Qualifikationslücken. Wenn
                einem CNC-Bediener der Staplerschein fehlt oder einem Lageristen
                die Gefahrgut-Zertifizierung, generiert der Workflow automatisch
                Weiterbildungsvorschläge.
              </IntroBox.Subline>
            </IntroBox>
            <Typo.List>
              <Typo.ListItem>
                Gap-Analyse zwischen Kandidatenprofil und den fünf bestpassenden
                Stellenanforderungen
              </Typo.ListItem>
              <Typo.ListItem>
                Automatische Vorschläge für Nachqualifizierungen, Zertifikate
                und Schulungen
              </Typo.ListItem>
              <Typo.ListItem>
                Tracking von Weiterbildungsfortschritten im ATS - sobald eine
                Qualifikation erworben wird, wird das Matching-Profil
                automatisch aktualisiert
              </Typo.ListItem>
              <Typo.ListItem>
                Erhöhung der Placement Rate durch gezieltes Upskilling statt
                Ablehnung
              </Typo.ListItem>
            </Typo.List>
          </div>
          <div className="relative aspect-video">
            <Image
              src="/images/business-analytics.jpg"
              alt="Qualifikationslücken-Analyse Dashboard"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Section 5: Customer Logos */}
      <ContentWrapper noPadding bodyWidth="full">
        <Customer />
      </ContentWrapper>

      {/* Section 6: IT-Tools & Infrastruktur */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>IT-Landschaft</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Nahtlose Integration in Ihre bestehende Tool-Infrastruktur
          </IntroBox.Headline>
          <IntroBox.Subline>
            Personaldienstleister arbeiten mit einer Vielzahl spezialisierter
            Systeme. Unsere n8n-basierte Automatisierung fungiert als
            Orchestrierungsschicht, die alle Systeme verbindet - ohne bestehende
            Workflows zu ersetzen.
          </IntroBox.Subline>
        </IntroBox>

        <SimpleGrid cols={3} className="mt-10">
          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/server.svg"
              alt="ATS- & ERP-Systeme"
              color="primary-gradient"
            />
            <Typo.H3>ATS- & ERP-Systeme</Typo.H3>
            <Typo.Paragraph>
              Integration mit den führenden Branchenlösungen: zvoove (ehemals
              LANDWEHR L1, prosoft), Bullhorn, compleet, Mysolution, HR4YOU und
              coveto. Kandidatenprofile werden bidirektional synchronisiert -
              über REST APIs mit OAuth 2.0 (Bullhorn) oder
              API-Key-Authentifizierung (zvoove).
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/file-text.svg"
              alt="CV-Parsing-Engines"
              color="primary-gradient"
            />
            <Typo.H3>CV-Parsing-Engines</Typo.H3>
            <Typo.Paragraph>
              Unser Workflow erreicht LLM-basiert ein Parsing-Niveau vergleichbar
              mit Textkernel oder CVlizer. Für Kunden mit bestehenden Lizenzen
              binden wir spezialisierte Parser direkt ein - inklusive Textkernel
              Match mit ESCO-Skill-Ontologie (12.000+ Skill-Konzepte, 300.000+
              Synonyme).
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/sparkle.svg"
              alt="KI-Matching-Tools"
              color="primary-gradient"
            />
            <Typo.H3>KI-Matching-Tools</Typo.H3>
            <Typo.Paragraph>
              Ergänzend zu unserer LLM-basierten Matching-Logik unterstützen wir
              die Integration von 8vance (EU AI Act-konform), Bullhorn Search &
              Match, MONA AI (Konversionsrate von ~40 % auf ~85 %) und
              Textkernel Match für semantisches Matching nach Bedeutung statt
              Keywords.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/globe.svg"
              alt="Jobportale & Multiposting"
              color="primary-gradient"
            />
            <Typo.H3>Jobportale & Multiposting</Typo.H3>
            <Typo.Paragraph>
              Automatischer Abruf neuer Bewerbungen von StepStone, Indeed,
              Stellenanzeigen.de und LinkedIn per API. Multiposting über
              GOhiring oder Broadbean. Index Anzeigendaten liefert täglich
              tausende neue Stellenanzeigen mit vorgefertigten Schnittstellen zu
              Bullhorn, HR4YOU und Mysolution.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/message-circle.svg"
              alt="Bewerber-Kommunikation"
              color="primary-gradient"
            />
            <Typo.H3>Bewerber-Kommunikation</Typo.H3>
            <Typo.Paragraph>
              Integration mit MONA AI für automatisierte 24/7-Interviews in 56+
              Sprachen und PitchYou für WhatsApp-basiertes Recruiting mit 82 %
              Completion Rate. Ergänzt durch automatische E-Mail-Kommunikation
              über Slack-, Teams- und SMTP-Nodes in n8n.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/shield.svg"
              alt="Lohn, DATEV & Compliance"
              color="primary-gradient"
            />
            <Typo.H3>Lohn, DATEV & Compliance</Typo.H3>
            <Typo.Paragraph>
              Über den n8n-Workflow werden DATEV-Schnittstellen für Lohn-Import
              und -Export angebunden. Automatische Fristenüberwachung für
              AÜG-Compliance: Equal Pay nach 9 Monaten,
              Höchstüberlassungsdauer von 18 Monaten, DSGVO-Löschfristen von 6
              Monaten nach Absage.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* Section 7: n8n-Automatisierung im Detail */}
      <ContentWrapper colorScheme="gray">
        <IntroBox>
          <IntroBox.PreHeadline>n8n-Workflows</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Konkrete Automatisierungen für Ihr Bewerber-Screening
          </IntroBox.Headline>
          <IntroBox.Subline>
            n8n ist eine Open-Source-Workflow-Plattform, die wir auf Ihrem
            eigenen Server in Deutschland hosten - vollständig DSGVO-konform,
            ohne Auftragsverarbeitung und ohne Pro-Execution-Kosten. Diese
            konkreten Workflows automatisieren Ihren Screening-Prozess
            Ende-zu-Ende.
          </IntroBox.Subline>
        </IntroBox>

        <SimpleGrid cols={2} className="mt-10">
          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/mail.svg"
              alt="Automatisiertes CV-Screening per E-Mail"
              color="primary-gradient"
            />
            <Typo.H3>Workflow 1: Automatisiertes CV-Screening per E-Mail</Typo.H3>
            <Typo.Paragraph>
              Ein IMAP-Trigger überwacht Ihr Bewerbungspostfach (z. B.
              bewerbung@firma.de) auf neue E-Mails mit PDF-Anhängen. Der
              Extract-from-File-Node extrahiert den Text, ein LLM-basierter
              Information Extractor liefert strukturierte JSON-Daten (Name,
              Skills, Erfahrung, Sprachen, Führerschein, Verfügbarkeit). Per
              HTTP-Request wird ein Duplikatcheck gegen die zvoove- oder
              Bullhorn-API durchgeführt. Neue Kandidaten werden automatisch im
              ATS angelegt, gegen offene Positionen gematcht und nach
              Matching-Score priorisiert. Bei Score &gt;= 7 geht sofort eine
              Slack-Benachrichtigung an den Disponenten; bei Score 4-6 wird der
              Kandidat in den Talentpool aufgenommen; bei Score &lt; 4 wird ein
              Absage-Workflow ausgelöst. Parallel erhält der Bewerber eine
              automatische Eingangsbestätigung.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/refresh.svg"
              alt="Jobportal-Monitoring & Auto-Matching"
              color="primary-gradient"
            />
            <Typo.H3>Workflow 2: Jobportal-Monitoring & Auto-Matching</Typo.H3>
            <Typo.Paragraph>
              Ein Schedule-Trigger prüft alle 30 Minuten die APIs von StepStone,
              Indeed und index Anzeigendaten auf neue Bewerbungen. Jede
              Bewerbung wird einzeln verarbeitet (Split-in-Batches-Node):
              PDF-Parsing, LLM-Analyse, Skill-Normalisierung nach
              ESCO-Taxonomie und automatisches Matching gegen alle offenen
              Positionen. Der Workflow erkennt Duplikate per E-Mail-Abgleich und
              aktualisiert bestehende Kandidatenprofile oder legt neue an.
              Ergebnisse fließen in ein Google-Sheets-Tracking mit
              Kandidatenname, Datum, Quelle, Top-3-Matches und Scores.
              Top-Kandidaten lösen sofort eine Benachrichtigung aus.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/bell.svg"
              alt="Automatisierte Bewerber-Kommunikation"
              color="primary-gradient"
            />
            <Typo.H3>
              Workflow 3: Automatisierte Bewerber-Kommunikation
            </Typo.H3>
            <Typo.Paragraph>
              Ein Webhook empfängt Status-Änderungen aus dem ATS und löst über
              einen Switch-Node die passende Kommunikation aus: Bei
              &bdquo;Eingang&ldquo; eine Eingangsbestätigung mit nächsten
              Schritten, bei &bdquo;Screening abgeschlossen&ldquo; eine
              Einladung zum Telefoninterview mit Terminvorschlägen, bei
              &bdquo;Interview geplant&ldquo; eine Erinnerung einen Tag vorher,
              bei &bdquo;Vorgestellt beim Kunden&ldquo; ein Status-Update nach 3
              Tagen, bei &bdquo;Absage&ldquo; eine personalisierte Absage-E-Mail
              mit anschließendem DSGVO-Lösch-Workflow nach 6 Monaten. So bleibt
              jeder Bewerber informiert - ohne manuellen Aufwand für den
              Disponenten.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/clock.svg"
              alt="Skill-Normalisierung & Fristenüberwachung"
              color="primary-gradient"
            />
            <Typo.H3>
              Workflow 4: Skill-Normalisierung & Fristenüberwachung
            </Typo.H3>
            <Typo.Paragraph>
              Zwei tägliche Schedule-Trigger: (1) Alle in den letzten 24 Stunden
              angelegten Kandidatenprofile werden abgerufen und deren Skills per
              LLM gegen die ESCO-Taxonomie normalisiert - Synonyme werden auf
              Standard-Begriffe gemappt, verwandte Skills ergänzt, ESCO-Codes
              zugeordnet. Die normalisierten Daten werden ins ATS
              zurückgeschrieben. (2) Alle aktiven Überlassungsverträge werden
              geprüft: Ein Code-Node berechnet die Einsatzdauer und
              identifiziert Mitarbeiter, die in den nächsten 30 Tagen die
              9-Monats-Grenze (Equal Pay), 15-Monats-Grenze
              (Branchenzuschläge) oder 18-Monats-Höchstüberlassungsdauer
              erreichen. Warnungen gehen an den zuständigen Disponenten.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* Section 8: ComparisonCard + SavingsCard - ROI-Kalkulation */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>ROI-Kalkulation</IntroBox.PreHeadline>
          <IntroBox.Headline>300-500 % ROI im ersten Jahr</IntroBox.Headline>
          <IntroBox.Subline>
            Berechnung für einen mittelgroßen Personaldienstleister mit 20
            Disponenten und 500+ Bewerbungseingängen pro Woche. Moderne
            Zeitarbeitssoftware mit KI-Screening kann Bearbeitungszeiten um
            30-50 % reduzieren - hier sehen Sie, was das konkret bedeutet.
          </IntroBox.Subline>
        </IntroBox>

        <ComparisonCard className="mt-10">
          <BeforeCard>
            <ComparisonHeadline>Vorher: Manuelles Screening</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                5 FTE Screening-Aufwand @ 42.000 €/Jahr - Disponenten verbringen
                den Großteil ihrer Zeit mit dem Sichten und Bewerten von
                Lebensläufen statt mit Kundenbetreuung
              </ComparisonListItem>
              <ComparisonListItem>
                15-20 Minuten pro Bewerbung für Sichten, manuelle Dateneingabe in
                zvoove/Bullhorn, Bewerten und Zuordnen zu offenen Stellen
              </ComparisonListItem>
              <ComparisonListItem>
                3-5 Tage durchschnittliche Reaktionszeit - in dieser Zeit haben
                27 % der Bewerber bereits aufgehört zu antworten (Ghosting)
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>Gesamt: ~210.000 €/Jahr</ComparisonFooter>
          </BeforeCard>

          <AfterCard>
            <ComparisonHeadline>
              Nachher: KI-gestütztes Screening
            </ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                1 FTE für Exception Handling @ 42.000 €/Jahr - der Disponent
                prüft nur noch KI-Vorschläge und führt persönliche Gespräche
              </ComparisonListItem>
              <ComparisonListItem>
                Unter 60 Sekunden pro Bewerbung - vom E-Mail-Eingang über
                CV-Parsing und Matching bis zur Disponent-Benachrichtigung per
                Slack
              </ComparisonListItem>
              <ComparisonListItem>
                Unter 2 Stunden Reaktionszeit - automatische Eingangsbestätigung
                sofort, Disponent kontaktiert Top-Kandidaten am selben Tag
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>Gesamt: ~67.000 €/Jahr</ComparisonFooter>
          </AfterCard>
        </ComparisonCard>

        <SavingsCard>
          <SavingsBadge>ROI im ersten Jahr: 300-500 %</SavingsBadge>
          <SavingsItems>
            <SavingsItem label="Jährliche Ersparnis" highlight>
              143.000 €
            </SavingsItem>
            <SavingsItem label="Amortisation">2-3 Monate</SavingsItem>
            <SavingsItem label="Reaktionszeit">-90 %</SavingsItem>
          </SavingsItems>
        </SavingsCard>
      </ContentWrapper>

      {/* Section 9: FaqContainer */}
      <ContentWrapper>
        <FaqContainer
          faqs={[
            {
              question:
                "Wie genau ist das KI-Matching im Vergleich zu spezialisierten Tools wie Textkernel oder Bullhorn Search & Match?",
              answer:
                "Unser LLM-basierter Matching-Ansatz erreicht nach einer Trainingsphase von 2-4 Wochen eine Match-Genauigkeit von 85-92 %. Im Gegensatz zu reinem Keyword-Matching versteht die KI semantische Zusammenhänge - sie erkennt, dass 'CNC-Fräsen' und 'CNC-Bearbeitung' verwandt sind, oder dass ein 'Schlosser' auch als 'Industriemechaniker' oder 'Metallfacharbeiter' gelistet sein kann. Die Genauigkeit verbessert sich kontinuierlich durch Feedback der Disponenten. Für Kunden, die bereits Textkernel- oder Bullhorn-Lizenzen besitzen, integrieren wir diese Tools als zusätzliche Matching-Engine in den n8n-Workflow.",
            },
            {
              question:
                "Welche Bewerbungsformate und -kanäle werden unterstützt?",
              answer:
                "Der Workflow verarbeitet Bewerbungen aus allen gängigen Kanälen: E-Mail-Anhänge (PDF, Word, Bilder), Jobportal-Bewerbungen von StepStone, Indeed und Stellenanzeigen.de per API, Karriereseiten-Uploads per Webhook sowie WhatsApp-Bewerbungen über PitchYou. Das CV-Parsing erkennt Lebensläufe in über 25 Sprachen - besonders relevant für Personaldienstleister im Blue-Collar-Bereich, die häufig Bewerbungen in Polnisch, Rumänisch, Türkisch und weiteren Sprachen erhalten. Auch unstrukturierte Formate wie Freitext-E-Mails oder Fotos von handgeschriebenen Lebensläufen werden verarbeitet.",
            },
            {
              question:
                "Wie erfolgt die Integration in unser bestehendes ATS-System (zvoove, Bullhorn, compleet)?",
              answer:
                "Die Integration erfolgt über die REST APIs Ihrer Branchensoftware. Für zvoove nutzen wir die zvoove API mit API-Key-Authentifizierung für Kandidaten-CRUD, Positions-Abgleich und Matching. Für Bullhorn verwenden wir die REST API mit OAuth 2.0 für Kandidaten, Job-Submissions, Placements und File Attachments. Auch compleet, Mysolution (Salesforce-basiert), HR4YOU und coveto werden unterstützt. Die Kandidatenprofile werden bidirektional synchronisiert - Änderungen im ATS fließen automatisch ins Matching ein und umgekehrt. Die Einrichtung dauert typischerweise 1-2 Wochen.",
            },
            {
              question: "Ersetzt die KI den Disponenten?",
              answer:
                "Nein - die KI übernimmt die zeitintensiven, repetitiven Aufgaben: CV-Parsing, Datenextraktion, Pre-Screening, Scoring, Duplikaterkennung, Eingangsbestätigungen und Follow-ups. Damit gewinnt der Disponent Zeit für die Aufgaben, die menschliches Urteilsvermögen erfordern: persönliche Bewerbungsgespräche, Beurteilung von Soft Skills und Cultural Fit, Beziehungsaufbau mit Kandidaten und Kunden, komplexe Gehaltsverhandlungen und strategische Kundenberatung. Die finale Kandidatenauswahl liegt immer beim Menschen. Laut Branchenstatistik setzen bereits 46 % der Personaldienstleister KI im Bewerbermatching oder Onboarding ein - als Unterstützung, nicht als Ersatz.",
            },
            {
              question: "Ist die Lösung DSGVO-konform?",
              answer:
                "Ja. Alle n8n-Workflows werden auf Ihrem eigenen Server in Deutschland gehostet (z. B. Hetzner) - es findet keine Auftragsverarbeitung durch Dritte statt, und die Daten verlassen nicht die EU. Bewerberdaten abgelehnter Kandidaten werden automatisch nach 6 Monaten zur Löschung markiert (AGG-Klagefrist). Der Workflow protokolliert alle Verarbeitungsschritte für die Informationspflicht gegenüber Bewerbern. Technische und organisatorische Maßnahmen (TOM) wie Verschlüsselung und Zugriffskontrollen sind implementiert. Personaldienstleister tragen eine doppelte Verantwortung - für Bewerberdaten und Mitarbeiterdaten der Zeitarbeiter - und sind daher stärker von der DSGVO betroffen als andere Branchen.",
            },
            {
              question:
                "Was kostet die Lösung und wie schnell ist sie einsatzbereit?",
              answer:
                "Die Kosten richten sich nach der Anzahl der Niederlassungen, dem Bewerbungsvolumen und den gewünschten Integrationen. Typischerweise amortisiert sich die Investition innerhalb von 2-3 Monaten. Die Basiseinrichtung (E-Mail-Trigger, CV-Parsing, LLM-Matching, ATS-Integration, Benachrichtigungen) ist in 2-4 Wochen produktiv. Erweiterte Workflows wie Jobportal-Monitoring, ESCO-Normalisierung und Fristenüberwachung werden im zweiten Schritt aktiviert. Anders als bei SaaS-Lösungen wie Zapier oder Make fallen keine Pro-Execution-Kosten an - Sie zahlen einen Festpreis für unbegrenzte Automatisierungen.",
            },
          ]}
        />
      </ContentWrapper>

      {/* Section 10: ConsultationCtaDefault */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
