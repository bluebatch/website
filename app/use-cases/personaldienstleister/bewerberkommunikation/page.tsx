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
  PhaseCardDetails,
  PhaseCardDetailItem,
} from "@/components/cards/phase-card";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnImage,
} from "@/components/heroes/hero-2-column";
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
  title: "Bewerberkommunikation & Chatbot-Recruiting",
  description:
    "KI-Chatbot für 24/7-Bewerberkommunikation: Vorqualifizierung, Terminvereinbarung und mehrsprachige Betreuung.",
};

export const metadata: Metadata = {
  title: "Recruiting-Chatbot für Personaldienstleister | Bluebatch",
  description:
    "Bewerberkommunikation automatisieren mit KI-Chatbot: 24/7-Vorqualifizierung, Terminvereinbarung und mehrsprachige Betreuung für Zeitarbeit. 60% weniger Routine.",
  openGraph: {
    title: "Recruiting-Chatbot für Personaldienstleister | Bluebatch",
    description:
      "KI-Chatbot für 24/7-Bewerberkommunikation bei Personaldienstleistern.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch Bewerberkommunikation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recruiting-Chatbot für Personaldienstleister | Bluebatch",
    description:
      "KI-Chatbot für 24/7-Bewerberkommunikation bei Personaldienstleistern.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/use-cases/personaldienstleister/bewerberkommunikation",
  },
};

const stats = [
  { value: 24, suffix: "/7", label: "Erreichbarkeit" },
  { value: 82, suffix: "%", label: "Abschlussrate WhatsApp-Interview" },
  { value: 5, suffix: "min", label: "Durchschnittliche Antwortzeit" },
];

export default function Page() {
  return (
    <>
      {/* Section 1: BackgroundHero */}
      <ContentWrapper isFirstSection noPadding>
        <BackgroundHero
          imageSrc="/images/communication-tools.jpg"
          overlayOpacity={0.8}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            Bewerberkommunikation & Chatbot
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            Bewerber{" "}
            <BackgroundHero.Highlight>rund um die Uhr</BackgroundHero.Highlight>{" "}
            betreuen
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            KI-gest&uuml;tzter WhatsApp-Chatbot f&uuml;r automatische
            Vorqualifizierung, Terminvereinbarung und mehrsprachige
            Kommunikation. Reaktionszeit unter 5 Minuten statt 24 Stunden –
            rund um die Uhr, in 25 Sprachen.
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

      {/* Section 2: Hero2Column – Das Problem */}
      <ContentWrapper>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Das Problem</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Bewerber warten – und wechseln zur Konkurrenz
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Zeitarbeiter bewerben sich gleichzeitig bei mehreren
              Personaldienstleistern. Wer 24 bis 48 Stunden auf eine
              R&uuml;ckmeldung wartet, hat l&auml;ngst beim schnelleren
              Wettbewerber unterschrieben. Jede Stunde Verz&ouml;gerung
              reduziert die Wahrscheinlichkeit einer erfolgreichen Einstellung
              messbar.
            </Hero2ColumnDescription>
            <Hero2ColumnDescription>
              Disponenten verbringen 40 % ihrer Zeit mit repetitiver
              Kommunikation: Eingangsbest&auml;tigungen, R&uuml;ckfragen zu
              Verf&uuml;gbarkeit und Schichtbereitschaft,
              Terminvereinbarungen per Telefon-Ping-Pong und manuelle
              Status-Updates – immer wieder die gleichen Abl&auml;ufe,
              f&uuml;r jeden einzelnen Bewerber.
            </Hero2ColumnDescription>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/human-resources.jpg"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Section 3: ComparisonCard – Vorher vs. Nachher */}
      <ContentWrapper colorScheme="gray">
        <IntroBox>
          <IntroBox.PreHeadline>Der Unterschied</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Manuelle Kommunikation vs. Chatbot-Recruiting
          </IntroBox.Headline>
          <IntroBox.Subline>
            F&uuml;r einen Personaldienstleister mit 15 Disponenten und 300+
            eingehenden Bewerber-Kontakten pro Woche:
          </IntroBox.Subline>
        </IntroBox>

        <ComparisonCard className="mt-10">
          <BeforeCard>
            <ComparisonHeadline>Vorher: Manuell</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                3 FTE f&uuml;r Erst-Kommunikation @ 38.000 &euro;/Jahr
              </ComparisonListItem>
              <ComparisonListItem>
                10–15 Minuten pro Bewerber-Kontakt manuell
              </ComparisonListItem>
              <ComparisonListItem>
                24–48 Stunden durchschnittliche Antwortzeit
              </ComparisonListItem>
              <ComparisonListItem>
                Kommunikation nur w&auml;hrend B&uuml;rozeiten (Mo–Fr 8–17
                Uhr)
              </ComparisonListItem>
              <ComparisonListItem>
                Kandidaten m&uuml;ssen Fragen am Telefon wiederholen
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>
              Gesamt: ~114.000 &euro;/Jahr + verlorene Kandidaten
            </ComparisonFooter>
          </BeforeCard>

          <AfterCard>
            <ComparisonHeadline>
              Nachher: Automatisiert mit Chatbot
            </ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                0,5 FTE f&uuml;r komplexe Gespr&auml;che und finale
                Entscheidungen
              </ComparisonListItem>
              <ComparisonListItem>
                Sofortige Antwort durch KI-Chatbot in unter 5 Minuten
              </ComparisonListItem>
              <ComparisonListItem>
                24/7-Erreichbarkeit – auch abends, am Wochenende und an
                Feiertagen
              </ComparisonListItem>
              <ComparisonListItem>
                82 % Abschlussrate bei WhatsApp-basierten Interviews
              </ComparisonListItem>
              <ComparisonListItem>
                Vollst&auml;ndiges Kandidatendossier f&uuml;r Disponenten
                automatisch erstellt
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>
              Gesamt: ~34.000 &euro;/Jahr + 3x mehr qualifizierte Kandidaten
            </ComparisonFooter>
          </AfterCard>
        </ComparisonCard>
      </ContentWrapper>

      {/* Section 4: SimpleGrid – Vier Kanäle, ein intelligenter Bot */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>
            Multi-Channel-Kommunikation
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Vier Kan&auml;le, ein intelligenter Bot
          </IntroBox.Headline>
          <IntroBox.Subline>
            Der KI-Chatbot kommuniziert &uuml;ber alle relevanten Kan&auml;le
            und f&uuml;hrt Bewerber automatisch durch den gesamten Prozess –
            vom ersten Kontakt bis zum Termin. Alle Konversationen werden
            zentral im ATS-System zusammengef&uuml;hrt.
          </IntroBox.Subline>
        </IntroBox>

        <SimpleGrid cols={4}>
          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/phone.svg"
              alt="WhatsApp"
              color="primary"
              background="white"
            />
            <Typo.H3>WhatsApp Business API</Typo.H3>
            <Typo.Paragraph>
              Der dominante Kanal f&uuml;r Blue-Collar-Recruiting:
              niedrigschwellig, kein Lebenslauf n&ouml;tig, Antwort in
              Sekunden. &Uuml;ber die WhatsApp Business API (360dialog oder
              Twilio) DSGVO-konform angebunden. PitchYou-Studien zeigen
              Conversion Rates von 15–30 %, bis zu 75 % bei optimierten
              Flows.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/code.svg"
              alt="Website-Chat"
              color="primary"
              background="white"
            />
            <Typo.H3>Website Live-Chat</Typo.H3>
            <Typo.Paragraph>
              Direkt auf der Karriereseite eingebettet: Bewerber starten die
              Konversation ohne App-Download. Ideal f&uuml;r alle
              Zielgruppen, die &uuml;ber Google oder Jobb&ouml;rsen auf Ihre
              Stellenanzeigen gelangen. Nahtlose &Uuml;bergabe an WhatsApp
              f&uuml;r mobile Weiterf&uuml;hrung.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/business-card-membership-card.svg"
              alt="E-Mail"
              color="primary"
              background="white"
            />
            <Typo.H3>E-Mail-Automatisierung</Typo.H3>
            <Typo.Paragraph>
              F&uuml;r kaufm&auml;nnische Berufe und White-Collar-Kandidaten:
              Automatische Eingangsbest&auml;tigungen, strukturierte
              R&uuml;ckfragen und Status-Updates per E-Mail. IMAP-Trigger
              erkennt eingehende Bewerbungen und startet den
              Qualifizierungs-Workflow automatisch.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/phone.svg"
              alt="SMS"
              color="primary"
              background="white"
            />
            <Typo.H3>SMS-Fallback</Typo.H3>
            <Typo.Paragraph>
              Erreicht auch Kandidaten ohne WhatsApp oder Smartphone-Zugang –
              besonders relevant f&uuml;r &auml;ltere Zielgruppen oder
              l&auml;ndliche Regionen. Automatische Terminerinnerungen und
              kurze Status-Updates per SMS als zuverl&auml;ssiger
              R&uuml;ckkanal.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* Section 5: TimelineAsSteps – Der automatisierte Chat-Flow */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>Der Prozess</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Der automatisierte Chat-Flow in 5 Schritten
          </IntroBox.Headline>
          <IntroBox.Subline>
            Vom ersten Kontakt bis zum Disponenten-Gespr&auml;ch –
            vollautomatisch, DSGVO-konform und in 25 Sprachen. 70–80 % aller
            Anfragen werden ohne menschliches Eingreifen bearbeitet.
          </IntroBox.Subline>
        </IntroBox>

        <TimelineAsSteps>
          <TimelineAsStepsStep value={1}>
            <PhaseCard>
              <PhaseCardHeader>
                <PhaseCardTitle>
                  Erstkontakt &amp; Kanaleinstieg
                </PhaseCardTitle>
                <PhaseCardBadge>Automatisch</PhaseCardBadge>
              </PhaseCardHeader>
              <PhaseCardDescription>
                Der Kandidat sieht eine Stellenanzeige auf einer
                Jobb&ouml;rse, in Social Media oder &uuml;ber Google und
                klickt auf den Call-to-Action &bdquo;Jetzt per WhatsApp
                bewerben&ldquo; (QR-Code oder Deep Link). Der Chatbot
                begr&uuml;&szlig;t ihn sofort, holt die DSGVO-Einwilligung
                per Opt-in-Button ein und bietet bei mehrsprachigen
                Zielgruppen eine Sprachauswahl an (Deutsch, Polnisch,
                Rum&auml;nisch, T&uuml;rkisch, Englisch).
              </PhaseCardDescription>
              <PhaseCardDetails>
                <PhaseCardDetailItem label="Trigger">
                  WhatsApp-Nachricht, Website-Chat-Start oder E-Mail-Eingang
                </PhaseCardDetailItem>
                <PhaseCardDetailItem label="DSGVO">
                  Aktive Einwilligung per Button-Klick vor erster
                  Datenerhebung
                </PhaseCardDetailItem>
                <PhaseCardDetailItem label="Sprachen" variant="highlight">
                  Automatische Spracherkennung via KI, 25 Sprachen &uuml;ber
                  DeepL API
                </PhaseCardDetailItem>
              </PhaseCardDetails>
            </PhaseCard>
          </TimelineAsStepsStep>

          <TimelineAsStepsStep value={2}>
            <PhaseCard>
              <PhaseCardHeader>
                <PhaseCardTitle>
                  Vorqualifizierung per Chatbot-Interview
                </PhaseCardTitle>
                <PhaseCardBadge>KI-gest&uuml;tzt</PhaseCardBadge>
              </PhaseCardHeader>
              <PhaseCardDescription>
                Der Chatbot stellt 4–8 strukturierte Fragen, abgestimmt auf
                das jeweilige Stellenprofil: Name, Wohnort/PLZ,
                fr&uuml;hester Starttermin, Schichtbereitschaft,
                Berufserfahrung, F&uuml;hrerschein, Sprachkenntnisse und
                Arbeitserlaubnis. Antworten werden als geschlossene Fragen
                (Multiple Choice, Ja/Nein) gestellt, um die Abbruchrate zu
                minimieren. Bei Abbruch wird nach 1 Stunde automatisch eine
                Erinnerungsnachricht gesendet.
              </PhaseCardDescription>
              <PhaseCardDetails>
                <PhaseCardDetailItem label="Fragen">
                  4–8 pro Stellenprofil, dynamisch anpassbar
                </PhaseCardDetailItem>
                <PhaseCardDetailItem
                  label="Abschlussrate"
                  variant="highlight"
                >
                  82 % bei WhatsApp-Interviews (PitchYou-Benchmark)
                </PhaseCardDetailItem>
                <PhaseCardDetailItem label="Knock-Out-Kriterien">
                  Keine Arbeitserlaubnis, Wohnort zu weit, fehlende
                  Pflichtqualifikation
                </PhaseCardDetailItem>
              </PhaseCardDetails>
            </PhaseCard>
          </TimelineAsStepsStep>

          <TimelineAsStepsStep value={3}>
            <PhaseCard>
              <PhaseCardHeader>
                <PhaseCardTitle>Automatische Terminbuchung</PhaseCardTitle>
                <PhaseCardBadge>Calendly / Cal.com</PhaseCardBadge>
              </PhaseCardHeader>
              <PhaseCardDescription>
                Qualifizierte Kandidaten erhalten direkt im Chat
                verf&uuml;gbare Terminslots aus dem Kalender des
                zust&auml;ndigen Disponenten. Per Button-Klick wird der
                Wunschtermin gebucht. Automatische Best&auml;tigung per
                WhatsApp und E-Mail mit Adresse, Ansprechpartner und
                mitzubringenden Unterlagen. Erinnerungen werden 24 Stunden
                und 1 Stunde vor dem Termin versendet.
              </PhaseCardDescription>
              <PhaseCardDetails>
                <PhaseCardDetailItem label="Integration">
                  Calendly, Cal.com oder Microsoft Bookings via API
                </PhaseCardDetailItem>
                <PhaseCardDetailItem
                  label="Erinnerungen"
                  variant="highlight"
                >
                  24h + 1h vor Termin automatisch per WhatsApp
                </PhaseCardDetailItem>
                <PhaseCardDetailItem label="No-Show-Handling">
                  Automatische Nachfrage und Umbuchungsoption bei
                  Nichterscheinen
                </PhaseCardDetailItem>
              </PhaseCardDetails>
            </PhaseCard>
          </TimelineAsStepsStep>

          <TimelineAsStepsStep value={4}>
            <PhaseCard>
              <PhaseCardHeader>
                <PhaseCardTitle>Proaktive Status-Updates</PhaseCardTitle>
                <PhaseCardBadge>Ereignisgesteuert</PhaseCardBadge>
              </PhaseCardHeader>
              <PhaseCardDescription>
                Bewerber erhalten automatische Updates zu jedem Statuswechsel
                im ATS-System: Eingangsbest&auml;tigung, Einladung zum
                Gespr&auml;ch, Vorschlag beim Kunden,
                Einsatzbest&auml;tigung oder Absage mit alternativen
                Stellenvorschl&auml;gen. Die Nachrichten werden aus
                zvoove-Status&auml;nderungen per Webhook getriggert und in
                der Sprache des Bewerbers versendet.
              </PhaseCardDescription>
              <PhaseCardDetails>
                <PhaseCardDetailItem label="Trigger">
                  Status&auml;nderung in zvoove via API-Abfrage oder Webhook
                </PhaseCardDetailItem>
                <PhaseCardDetailItem label="Kan&auml;le">
                  WhatsApp (prim&auml;r), E-Mail (sekund&auml;r), SMS
                  (Fallback)
                </PhaseCardDetailItem>
                <PhaseCardDetailItem
                  label="Personalisierung"
                  variant="highlight"
                >
                  Name, Stelle, Standort und Ansprechpartner automatisch
                  eingesetzt
                </PhaseCardDetailItem>
              </PhaseCardDetails>
            </PhaseCard>
          </TimelineAsStepsStep>

          <TimelineAsStepsStep value={5}>
            <PhaseCard>
              <PhaseCardHeader>
                <PhaseCardTitle>
                  &Uuml;bergabe an Disponenten
                </PhaseCardTitle>
                <PhaseCardBadge>Human-in-the-Loop</PhaseCardBadge>
              </PhaseCardHeader>
              <PhaseCardDescription>
                Bei komplexen Fragen, niedrigem Confidence Score oder
                Abschluss der Vorqualifizierung wird die Konversation
                nahtlos an einen menschlichen Disponenten &uuml;bergeben. Der
                Disponent erh&auml;lt ein vollst&auml;ndiges
                Kandidatendossier: Chatbot-Antworten,
                Qualifizierungsergebnis, CV (falls vorhanden) und den
                gesamten Gespr&auml;chsverlauf. Skill-Based Routing leitet
                an den Disponenten mit passender Sprache und
                Branchenkompetenz weiter.
              </PhaseCardDescription>
              <PhaseCardDetails>
                <PhaseCardDetailItem label="Kontext">
                  Vollst&auml;ndiger Chatverlauf + strukturierte Daten werden
                  &uuml;bergeben
                </PhaseCardDetailItem>
                <PhaseCardDetailItem label="Routing">
                  Skill-Based: Sprache, Branchenkompetenz,
                  Verf&uuml;gbarkeit
                </PhaseCardDetailItem>
                <PhaseCardDetailItem label="Aufteilung" variant="highlight">
                  70–80 % Bot autonom, 20–30 % menschliche Intervention
                </PhaseCardDetailItem>
              </PhaseCardDetails>
            </PhaseCard>
          </TimelineAsStepsStep>
        </TimelineAsSteps>
      </ContentWrapper>

      {/* Section 6: Mehrsprachige Kommunikation */}
      <ContentWrapper>
        <SimpleGrid cols={2} className="items-center gap-12">
          <div>
            <IntroBox textCentered={false}>
              <IntroBox.PreHeadline>Mehrsprachigkeit</IntroBox.PreHeadline>
              <IntroBox.Headline>
                Kommunikation ohne Sprachbarrieren
              </IntroBox.Headline>
              <IntroBox.Subline>
                Gro&szlig;e Teile der Zeitarbeiter in Deutschland kommen aus
                Polen, Rum&auml;nien, Bulgarien, Ungarn und der T&uuml;rkei.
                Deutsche Sprachkenntnisse variieren zwischen A1 und C1. Ein
                einsprachiger Bewerbungsprozess schlie&szlig;t qualifizierte
                Kandidaten aus.
              </IntroBox.Subline>
              <IntroBox.Subline>
                Unser Chatbot erkennt die Sprache des Bewerbers automatisch
                per KI-basierter Language Detection und antwortet sofort in
                der richtigen Sprache. Die &Uuml;bersetzung erfolgt
                &uuml;ber die DeepL API f&uuml;r h&ouml;chste Qualit&auml;t
                bei europ&auml;ischen Sprachen – besonders stark bei
                Polnisch und Rum&auml;nisch. Alle Antworten des Disponenten
                werden automatisch r&uuml;ck&uuml;bersetzt.
              </IntroBox.Subline>
            </IntroBox>
            <Typo.List>
              <Typo.ListItem>
                Automatische Spracherkennung – kein manuelles
                Ausw&auml;hlen n&ouml;tig
              </Typo.ListItem>
              <Typo.ListItem>
                25 Sprachen &uuml;ber DeepL API und OpenAI als Fallback
              </Typo.ListItem>
              <Typo.ListItem>
                Sprachrouting: Polnischsprachige Kandidaten werden
                automatisch an polnischsprachige Disponenten weitergeleitet
              </Typo.ListItem>
              <Typo.ListItem>
                Kulturell angepasste Ansprache f&uuml;r osteurop&auml;ische
                Zielgruppen
              </Typo.ListItem>
              <Typo.ListItem>
                Alle Chatverl&auml;ufe werden auf Deutsch im ATS-System
                gespeichert
              </Typo.ListItem>
            </Typo.List>
          </div>
          <div className="relative aspect-video">
            <Image
              src="/images/team-collaboration.jpg"
              alt="Mehrsprachiger WhatsApp-Chat mit automatischer Übersetzung"
              fill
              className="object-cover shadow-lg rounded-lg"
            />
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Section 7: SavingsCard – Ihre Ersparnis */}
      <ContentWrapper>
        <SavingsCard>
          <SavingsBadge>ROI im ersten Jahr: 250–400 %</SavingsBadge>
          <SavingsItems>
            <SavingsItem label="J&auml;hrliche Ersparnis" highlight>
              80.000 &euro;
            </SavingsItem>
            <SavingsItem label="Amortisation">3–4 Monate</SavingsItem>
            <SavingsItem label="Antwortzeit-Reduktion">–98 %</SavingsItem>
          </SavingsItems>
        </SavingsCard>
      </ContentWrapper>

      {/* Section 8: IT-Tools & Infrastruktur */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Technologie-Stack</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Die IT-Infrastruktur hinter Chatbot-Recruiting
          </IntroBox.Headline>
          <IntroBox.Subline>
            Von der WhatsApp Business API &uuml;ber ATS-Integration bis zum
            KI-Backend: Diese Tools bilden das technische Fundament f&uuml;r
            automatisierte Bewerberkommunikation in der
            Personaldienstleistung.
          </IntroBox.Subline>
        </IntroBox>

        <SimpleGrid cols={3}>
          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/settings.svg"
              alt="Chatbot-Plattformen"
              color="primary"
              background="white"
            />
            <Typo.H3>Chatbot-Plattformen</Typo.H3>
            <Typo.Paragraph>
              PitchYou (Marktf&uuml;hrer f&uuml;r WhatsApp-Recruiting in
              der Zeitarbeit, 82 % Abschlussrate, 25 Sprachen), Superchat
              (6.000+ Kunden, DSGVO-konformer WhatsApp-Versand), Chatwerk
              (KMU-fokussiert, Multi-Channel). Paradox Olivia f&uuml;r
              internationales High-Volume-Recruiting.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/phone.svg"
              alt="WhatsApp Business API"
              color="primary"
              background="white"
            />
            <Typo.H3>WhatsApp Business API (BSP)</Typo.H3>
            <Typo.Paragraph>
              Nur die offizielle Business API ist DSGVO-konform – nicht die
              regul&auml;re WhatsApp-App. Business Solution Provider in
              DACH: 360dialog (Berlin, g&uuml;nstig, Self-Service), Twilio
              (umfangreiche API, skalierbar), Superchat und Chatwerk mit
              eigener BSP-Anbindung.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/data-center-table-management.svg"
              alt="ATS-Systeme"
              color="primary"
              background="white"
            />
            <Typo.H3>ATS &amp; ERP-Integration</Typo.H3>
            <Typo.Paragraph>
              zvoove (Marktf&uuml;hrer Deutschland, 3.700+ Kunden,
              REST-API mit API-Key-Authentifizierung), Bullhorn
              (internationale REST API, 300+ Marketplace-Partner), Kombo
              (Unified API f&uuml;r Bullhorn, Personio, Greenhouse und
              mehr). Alle Kandidatendaten flie&szlig;en automatisch ins
              Bewerbermanagement.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/lightning-bolt.svg"
              alt="KI-Services"
              color="primary"
              background="white"
            />
            <Typo.H3>KI &amp; NLP-Backend</Typo.H3>
            <Typo.Paragraph>
              OpenAI GPT-4o f&uuml;r Intent-Erkennung, Vorqualifizierung
              und CV-Analyse. Claude API f&uuml;r strukturierte
              Datenextraktion und Kandidatenbewertung. Google Dialogflow CX
              f&uuml;r regelbasierte Chatbot-Flows. Rasa (Open Source)
              f&uuml;r On-Premise-Anforderungen mit maximaler
              DSGVO-Konformit&auml;t.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/clock.svg"
              alt="Terminplanung"
              color="primary"
              background="white"
            />
            <Typo.H3>Terminplanungs-Tools</Typo.H3>
            <Typo.Paragraph>
              Calendly (weit verbreitet, starke API, Webhook-Support,
              native n8n-Integration), Cal.com (Open-Source-Alternative),
              Microsoft Bookings (f&uuml;r M365-&Ouml;kosysteme).
              Echtzeit-Synchronisation mit Disponenten-Kalendern f&uuml;r
              sofortige Slot-Verf&uuml;gbarkeit im Chat.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/flag-for-flag-germany.svg"
              alt="Übersetzung"
              color="primary"
              background="white"
            />
            <Typo.H3>&Uuml;bersetzungs-Services</Typo.H3>
            <Typo.Paragraph>
              DeepL API Pro f&uuml;r h&ouml;chste Qualit&auml;t bei
              europ&auml;ischen Sprachen (besonders Polnisch,
              Rum&auml;nisch). Google Translate API als Fallback f&uuml;r
              breite Sprachabdeckung. OpenAI f&uuml;r kontextbezogene
              &Uuml;bersetzung mit kultureller Lokalisierung. Automatische
              Spracherkennung per Language Detection.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* Section 9: n8n-Automatisierung – Konkrete Workflows */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>n8n-Automatisierung</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Konkrete Workflows f&uuml;r Bewerberkommunikation
          </IntroBox.Headline>
          <IntroBox.Subline>
            n8n orchestriert als Backend-Engine die gesamte Automatisierung:
            vom WhatsApp-Empfang &uuml;ber KI-Vorqualifizierung bis zur
            ATS-Synchronisation. Hier sind die sechs wichtigsten Workflows,
            die wir f&uuml;r Personaldienstleister implementieren.
          </IntroBox.Subline>
        </IntroBox>

        <SimpleGrid cols={3}>
          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/phone.svg"
              alt="WhatsApp-Chatbot"
              color="primary"
              background="white"
            />
            <Typo.H3>WhatsApp Bewerbungs-Chatbot</Typo.H3>
            <Typo.Paragraph>
              WhatsApp Trigger empf&auml;ngt eingehende Nachrichten →
              Switch Node pr&uuml;ft Konversationsstatus (neu / in
              Vorqualifizierung / abgeschlossen) → OpenAI Node generiert
              Begr&uuml;&szlig;ung mit DSGVO-Opt-in oder analysiert
              Antworten und extrahiert strukturierte Daten → IF Node
              pr&uuml;ft Knock-Out-Kriterien → Qualifizierte Kandidaten
              werden an den Terminbuchungs-Workflow weitergeleitet, nicht
              qualifizierte erhalten eine freundliche Absage mit
              alternativen Stellenvorschl&auml;gen.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/clock.svg"
              alt="Terminbuchung"
              color="primary"
              background="white"
            />
            <Typo.H3>Automatische Terminbuchung</Typo.H3>
            <Typo.Paragraph>
              Webhook empf&auml;ngt das Signal &bdquo;Kandidat
              qualifiziert&ldquo; → HTTP Request ruft verf&uuml;gbare Slots
              aus Calendly API ab → Set Node formatiert Slots als
              WhatsApp-Nachricht mit Buttons → Kandidat w&auml;hlt Termin →
              HTTP Request bucht in Calendly → Parallele Ausgabe:
              WhatsApp-Best&auml;tigung an Kandidat,
              Slack-Benachrichtigung an Disponent mit Kandidatenprofil,
              Google Calendar Eintrag, zvoove-Status-Update.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/flag-for-flag-germany.svg"
              alt="Sprachrouting"
              color="primary"
              background="white"
            />
            <Typo.H3>
              Sprachrouting mit KI-&Uuml;bersetzung
            </Typo.H3>
            <Typo.Paragraph>
              WhatsApp Trigger empf&auml;ngt Nachricht → OpenAI Node
              erkennt Sprache automatisch → Switch Node routet nach Sprache
              (Deutsch, Polnisch, Rum&auml;nisch, T&uuml;rkisch, Andere) →
              DeepL Node &uuml;bersetzt in Deutsch → Standard-Flow
              verarbeitet die Anfrage → DeepL Node &uuml;bersetzt Antwort
              zur&uuml;ck in Kandidatensprache → WhatsApp Business Cloud
              sendet &uuml;bersetzte Antwort.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/lightning-bolt.svg"
              alt="Status-Updates"
              color="primary"
              background="white"
            />
            <Typo.H3>Automatische Status-Updates</Typo.H3>
            <Typo.Paragraph>
              Schedule Trigger (t&auml;glich 9:00 Uhr) → HTTP Request ruft
              aus zvoove API alle Kandidaten mit Status&auml;nderung seit
              gestern ab → Switch Node routet nach Status (Eingeladen,
              Vorgeschlagen, Einsatz best&auml;tigt, Absage, Einsatz
              beendet) → WhatsApp Business Cloud sendet passende
              personalisierte Nachricht. Bei &bdquo;Einsatz
              beendet&ldquo; wird zus&auml;tzlich eine Feedback-Abfrage
              gestartet.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/clock.svg"
              alt="Erinnerungen"
              color="primary"
              background="white"
            />
            <Typo.H3>
              Erinnerungs- &amp; Anti-Ghosting-Workflow
            </Typo.H3>
            <Typo.Paragraph>
              Calendly Trigger bei neuer Buchung → Wait Node (24h vor
              Termin) → WhatsApp-Erinnerung → Wait Node (1h vor Termin) →
              WhatsApp mit Adresse und mitzubringenden Unterlagen → Wait
              Node (1h nach Termin) → Google Sheets pr&uuml;ft: Termin
              wahrgenommen? → Ja: Feedback-Nachricht. Nein:
              Umbuchungsangebot per WhatsApp.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/shield-check.svg"
              alt="DSGVO"
              color="primary"
              background="white"
            />
            <Typo.H3>DSGVO-L&ouml;sch-Automatisierung</Typo.H3>
            <Typo.Paragraph>
              Schedule Trigger (w&ouml;chentlich) → Google Sheets ruft alle
              Kandidaten ab → IF Node pr&uuml;ft: Letzter Kontakt &gt; 6
              Monate UND kein Talentpool-Opt-in? → Ja: WhatsApp-Hinweis
              &uuml;ber bevorstehende L&ouml;schung → Wait Node (14 Tage
              Widerspruchsfrist) → IF: Widerspruch eingegangen? → Nein:
              Daten in allen Systemen l&ouml;schen (zvoove, Google Sheets,
              Google Drive). Ja: Opt-in aktualisieren.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* Section 10: Customer */}
      <ContentWrapper noPadding bodyWidth="full">
        <Customer />
      </ContentWrapper>

      {/* Section 11: FaqContainer */}
      <ContentWrapper>
        <FaqContainer
          faqs={[
            {
              question:
                "Über welche Kanäle kommuniziert der Chatbot?",
              answer:
                "Der Chatbot ist kanalübergreifend einsetzbar: WhatsApp Business API (über 360dialog oder Twilio DSGVO-konform), Website Live-Chat, E-Mail (IMAP-Trigger) und SMS als Fallback. WhatsApp ist dabei der dominante Kanal für Blue-Collar-Recruiting mit Conversion Rates von 15–30 %. Alle Konversationen werden zentral im ATS-System (zvoove, Bullhorn oder über Kombo als Unified API) zusammengeführt, sodass Disponenten den vollständigen Kommunikationsverlauf sehen.",
            },
            {
              question:
                "Wie natürlich wirkt die KI-Kommunikation?",
              answer:
                "Der Chatbot nutzt OpenAI GPT-4o als NLP-Backend und wird auf den Ton und Stil Ihres Unternehmens trainiert. Für die Vorqualifizierung werden strukturierte Fragen mit Multiple-Choice-Antworten eingesetzt (wie bei PitchYou bewährt), ergänzt durch freie Konversation für FAQ-Beantwortung. Bei komplexen oder emotionalen Anliegen, bei niedrigem Confidence Score oder auf expliziten Wunsch des Bewerbers wird automatisch an einen Disponenten übergeben – inklusive vollständigem Gesprächsverlauf und strukturiertem Kandidatendossier.",
            },
            {
              question: "Ist die Lösung DSGVO-konform?",
              answer:
                "Ja, vollständig. Die Rechtsgrundlage bilden Art. 6 Abs. 1 lit. b) DSGVO (vorvertragliche Maßnahmen) und § 26 BDSG (Beschäftigtendatenschutz). Konkret umgesetzt: Aktive Einwilligung per Opt-in-Button im Chat vor erster Datenerhebung, automatische Löschung nach 6 Monaten ohne Talentpool-Einwilligung, keine vollautomatischen Auswahlentscheidungen (Art. 22 DSGVO – finale Entscheidung immer durch Menschen), Audit-Trail aller Einwilligungen. WhatsApp-Kommunikation ausschließlich über die Business API (nicht die reguläre App). AV-Verträge mit allen Dienstleistern. Gemäß EU AI Act wird das System als Hochrisiko-KI im Bereich Beschäftigung eingestuft – alle zusätzlichen Compliance-Anforderungen werden erfüllt.",
            },
            {
              question:
                "Welche ATS-Systeme werden unterstützt?",
              answer:
                "Native Integration mit zvoove (Marktführer Deutschland, 3.700+ Kunden) über die REST-API mit API-Key-Authentifizierung. Bullhorn über die vollständig dokumentierte REST API. Für alle weiteren ATS-Systeme (Personio, Greenhouse, SmartRecruiters, Oracle) nutzen wir Kombo als Unified API – eine API für alle Bewerbermanagementsysteme. Die Integration umfasst: Kandidatenanlage, Statusaktualisierung, Notizen und Dokumente anhängen, Kalender- und Dispositionstools synchronisieren.",
            },
            {
              question:
                "Wie funktioniert die mehrsprachige Kommunikation?",
              answer:
                "Der Chatbot erkennt die Sprache des Bewerbers automatisch per KI-basierter Language Detection (OpenAI). Die Übersetzung erfolgt über die DeepL API, die besonders starke Ergebnisse bei europäischen Sprachen liefert – Polnisch, Rumänisch, Bulgarisch, Ungarisch und Türkisch. Insgesamt werden 25 Sprachen unterstützt. Zusätzlich routet das System automatisch an Disponenten mit passender Sprachkompetenz: Polnischsprachige Kandidaten werden an polnischsprachige Disponenten weitergeleitet. Alle Chatverläufe werden parallel auf Deutsch im ATS-System gespeichert.",
            },
            {
              question:
                "Kann der Chatbot auch bestehende Kandidaten im Pool reaktivieren?",
              answer:
                "Ja. Über den WhatsApp-Newsletter (mit Opt-in) können inaktive Kandidaten im Talentpool gezielt angesprochen werden: neue Stellenangebote, Feedback-Abfragen nach Einsätzen oder Re-Engagement-Nachrichten. Der n8n-Workflow erkennt automatisch, welche Kandidaten seit länger als X Wochen inaktiv sind, und startet personalisierte Wiederansprache basierend auf dem bisherigen Qualifikationsprofil und regionalen Stellenangeboten.",
            },
          ]}
        />
      </ContentWrapper>

      {/* Section 12: ConsultationCtaDefault */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
