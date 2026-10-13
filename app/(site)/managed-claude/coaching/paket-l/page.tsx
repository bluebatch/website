import type { Metadata } from "next";
import { Compass, UserCheck } from "lucide-react";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, GeoSummary, ProseColumns, TimelineAsSteps, TimelineAsStepsStep, FaqContainer } from "@/components/ui";
import { OfferCard, SimpleCard } from "@/components/cards";
import { StatsLeadHero, HeroStatBand } from "@/components/heroes";
import { RoiCalculation } from "@/components/sections";
import { ContactButton, InternalLink } from "@/components/buttons";
import CertificateMock from "@/components/mockups/certificate-mock";

const description =
  "KI-Beratung für Unternehmen: 10 Personentage über rund drei Monate, mit Kanzlei-Handbuch, KI-Beauftragten und KI-Strategie. 10.000 €, 2.000 € angerechnet.";

export const metadata: Metadata = {
  title: "KI-Beratung für Unternehmen: Paket L, 10 Tage Coaching | Bluebatch",
  description,
  openGraph: {
    title: "KI-Beratung für Unternehmen: Paket L, 10 Tage Coaching",
    description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=KI-Beratung%20f%C3%BCr%20Unternehmen%3A%20Paket%20L&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "KI-Beratung für Unternehmen: Paket L",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/coaching/paket-l",
  },
};

export default function Page() {
  return (
    <>
      <StatsLeadHero>
        <StatsLeadHero.PreHeadline>Coaching · Paket L</StatsLeadHero.PreHeadline>
        <StatsLeadHero.Headline>KI-Beratung für Unternehmen: Paket&nbsp;L</StatsLeadHero.Headline>
        <GeoSummary>
          Paket L ist die KI-Beratung für Unternehmen von Bluebatch: 10 Personentage für 10.000 € zzgl. USt., verteilt auf rund drei Monate. Enthalten sind alles aus Paket M, ein fertiges Kanzlei-Handbuch, die Ausbildung einer KI-Beauftragten oder eines KI-Beauftragten und Ihre KI-Strategie. Einrichtung (1.500 €) und Outlook Connector (500 €) werden zu 100 % angerechnet.
        </GeoSummary>
        <StatsLeadHero.Cta>
          <ContactButton icon="chat">Paket L anfragen</ContactButton>
        </StatsLeadHero.Cta>
        <StatsLeadHero.Stats>
          <HeroStatBand
            className="mt-0! sm:col-span-2"
            stats={[
              { value: "10", label: "Personentage" },
              { value: "ca. 3", label: "Monate Begleitung" },
              { value: "2.000 €", label: "angerechnet" },
              { value: "8.000 €", label: "effektiv zusätzlich" },
            ]}
          />
        </StatsLeadHero.Stats>
        <StatsLeadHero.Media
          src="/images/team-meeting.jpg"
          alt="Zwei Personen planen an einer Wand voller Haftnotizen die nächsten Schritte"
        />
      </StatsLeadHero>

      <ContentWrapper colorScheme="gray-light">
        <SimpleGrid cols={2} className="items-start gap-12! lg:gap-16!">
          <div className="lg:sticky lg:top-32">
            <IntroBox textCentered={false} size="wide">
              <IntroBox.PreHeadline>Ablauf</IntroBox.PreHeadline>
              <IntroBox.Headline>Drei Monate KI-Beratung und Coaching</IntroBox.Headline>
              <IntroBox.Paragraph className="mb-4!">
                Zehn Personentage, verteilt auf rund drei Monate. So bleibt zwischen den Terminen Zeit, das Gelernte im Alltag zu nutzen, und wir arbeiten beim nächsten Mal an dem, was dabei aufgefallen ist.
              </IntroBox.Paragraph>
            </IntroBox>
            <Typo.Paragraph className="text-gray-600">
              Vor dem Coaching steht die Einrichtung des Gateways, startklar in maximal einer Woche. Wie das abläuft, steht beim{" "}
              <InternalLink href="/managed-claude/onboarding" variant="underline">
                Onboarding
              </InternalLink>
              .
            </Typo.Paragraph>
          </div>
          <TimelineAsSteps>
            <TimelineAsStepsStep value={1}>
              <Typo.H3 className="mt-1!">Monat 1: Grundlagen</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Modelle, App, Chat, Co-Work und Projekte, dazu die KI-Kompetenzschulung nach Art. 4 EU AI Act mit Zertifikat je Mitarbeiter. Jeder im Team führt seine ersten echten Vorgänge durch.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={2}>
              <Typo.H3 className="mt-1!">Monat 2: Gemeinsam bauen</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Arbeitsanleitungen und Routinen entstehen an echten Fällen, das Kanzlei-Handbuch wächst. Wir gehen durch, welche Systeme sich anzubinden lohnen, und richten passende Plugins ein.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={3}>
              <Typo.H3 className="mt-1!">Monat 3: Selbst weitermachen</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Ihre Leute schreiben, wir lesen gegen. Die KI-Beauftragte oder der KI-Beauftragte übernimmt, das Handbuch ist fertig, die KI-Strategie für die nächsten Vorgänge steht.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
          </TimelineAsSteps>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Was nach dem Coaching bleibt</IntroBox.PreHeadline>
          <IntroBox.Headline>KI-Strategie und KI-Beauftragte im eigenen Haus</IntroBox.Headline>
          <IntroBox.Paragraph>
            Damit das Thema nach drei Monaten nicht einschläft, endet Paket L mit zwei Dingen, die über das Coaching hinaus tragen.
          </IntroBox.Paragraph>
        </IntroBox>
        <SimpleGrid cols={2} className="mx-auto mt-10 max-w-5xl">
          <SimpleCard align="left" className="rounded-2xl">
            <SimpleCard.Icon background="primary-gradient" color="white" size="sm">
              <Compass className="h-6 w-6" aria-hidden />
            </SimpleCard.Icon>
            <Typo.H3 className="mt-5! mb-2!">KI-Strategie für Unternehmen</Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              Welche Vorgänge als Nächstes mit Claude laufen, welche Systeme sich anzubinden lohnen und welcher Vorgang der Kandidat für Schritt 3 ist, die Agenten. Erarbeitet aus dem, was bei Ihnen im Alltag tatsächlich genutzt wird, nicht aus einer Folie.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left" className="rounded-2xl">
            <SimpleCard.Icon background="primary-gradient" color="white" size="sm">
              <UserCheck className="h-6 w-6" aria-hidden />
            </SimpleCard.Icon>
            <Typo.H3 className="mt-5! mb-2!">Schulung zum KI-Beauftragten</Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              Eine Person aus Ihrem Team wird Ansprechpartnerin oder Ansprechpartner für alles rund um Claude: pflegt Handbuch und Anleitungen, schult neue Mitarbeiter nach und hält den Nachweis nach Art. 4 aktuell.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gradient-cool">
        <SimpleGrid cols={2} className="items-center gap-12! lg:gap-16!">
          <div>
            <IntroBox textCentered={false} size="wide">
              <IntroBox.PreHeadline>Ergebnis</IntroBox.PreHeadline>
              <IntroBox.Headline>Was Ihr Team danach hat</IntroBox.Headline>
            </IntroBox>
            <ProseColumns cols={2} className="mt-8">
              <ProseColumns.Item title="Alles aus Paket M">
                KI-Kompetenzschulung mit Zertifikat je Mitarbeiter, Grundlagen und die ersten Arbeitsanleitungen.
              </ProseColumns.Item>
              <ProseColumns.Item title="Kanzlei-Handbuch">
                Zwei Ebenen: das Handbuch mit Anleitungen und Routinen, die Projekte mit den Unterlagen. Aufgebaut, damit es in einem Jahr noch benutzbar ist.
              </ProseColumns.Item>
              <ProseColumns.Item title="Routinen und Skills">
                Abläufe auf Knopfdruck oder zu festen Zeitpunkten, zum Beispiel die Montagsübersicht, und Skills für Ihre Methodik.
              </ProseColumns.Item>
              <ProseColumns.Item title="Ein Team, das selbst ausbaut">
                Ihre Leute schreiben, wir lesen gegen. Neue Mitarbeiter werden über das Handbuch nachgeschult, ohne uns.
              </ProseColumns.Item>
            </ProseColumns>
          </div>
          <div>
            <CertificateMock compact />
            <p className="mx-auto mt-5 max-w-sm text-center text-sm text-gray-500">
              Muster. Ein Schulungsnachweis, kein amtliches Zertifikat.
            </p>
          </div>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper>
        <SimpleGrid cols={2} className="items-center gap-10! lg:gap-16!">
          <RoiCalculation className="order-2 rounded-2xl md:order-1">
            <RoiCalculation.Assumption>
              Sie buchen die Einrichtung, den Outlook Connector und Paket L.
            </RoiCalculation.Assumption>
            <div className="py-2">
              <RoiCalculation.Row label="Einrichtung Gateway, einmalig">1.500 €</RoiCalculation.Row>
              <RoiCalculation.Row label="Outlook Connector, einmalig">500 €</RoiCalculation.Row>
              <RoiCalculation.Row label="Paket L, 10 Personentage">10.000 €</RoiCalculation.Row>
              <RoiCalculation.Row label="Anrechnung Einrichtung" highlight>
                − 1.500 €
              </RoiCalculation.Row>
              <RoiCalculation.Row label="Anrechnung Outlook Connector" highlight>
                − 500 €
              </RoiCalculation.Row>
            </div>
            <RoiCalculation.Total label="Gesamt">10.000 €</RoiCalculation.Total>
            <RoiCalculation.Source>Alle Preise zzgl. USt. Modellkosten nach Verbrauch kommen hinzu.</RoiCalculation.Source>
          </RoiCalculation>
          <div className="order-1 md:order-2">
            <IntroBox textCentered={false} size="wide">
              <IntroBox.PreHeadline>Rechenbeispiel</IntroBox.PreHeadline>
              <IntroBox.Headline>Einrichtung und Outlook Connector sind drin</IntroBox.Headline>
              <IntroBox.Paragraph className="mb-4!">
                Bei Paket L rechnen wir die Einrichtung (1.500 €) und den Outlook Connector (500 €) zu 100 % an. Für Gateway, Outlook-Anbindung und zehn Tage Beratung zahlen Sie zusammen 10.000 €, das Coaching selbst kostet effektiv 8.000 € zusätzlich.
              </IntroBox.Paragraph>
            </IntroBox>
            <Typo.Paragraph className="text-gray-600">
              Die Modellkosten laufen nach Verbrauch, ohne Lizenz pro Kopf. Details auf der Seite{" "}
              <InternalLink href="/managed-claude/preise" variant="underline">
                Preise
              </InternalLink>
              .
            </Typo.Paragraph>
          </div>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Erst einmal kompakter starten?</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={2} className="mx-auto mt-10 max-w-5xl">
          <OfferCard
            href="/managed-claude/coaching/paket-m"
            price="5.000 €"
            title="Paket M: KI-Workshop, 5 Personentage"
            description="Grundlagen, KI-Kompetenzschulung mit Zertifikat, erste Anleitungen und Routinen, Grundgerüst für das Handbuch. Ebenfalls 2.000 € angerechnet."
            linkLabel="Zu Paket M"
          />
          <OfferCard
            href="/managed-claude/coaching"
            title="KI-Schulung im Überblick"
            description="Beide Pakete im Vergleich, die Grundlagen und die zertifizierte KI-Kompetenzschulung."
            linkLabel="Zum Coaching-Überblick"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper bodyWidth="small">
        <FaqContainer
          headline="Fragen zur KI-Beratung mit Paket L"
          intro="Was vor der Buchung gefragt wird."
          faqs={[
            {
              question: "Was kostet die KI-Beratung für Unternehmen mit Paket L?",
              answer:
                "Paket L umfasst 10 Personentage und kostet 10.000 € zzgl. USt. Die Einrichtung (1.500 €) und der Outlook Connector (500 €) werden zu 100 % angerechnet, effektiv kommen also 8.000 € hinzu.",
            },
            {
              question: "Was unterscheidet Paket L von Paket M?",
              answer:
                "Paket M bündelt in 5 Personentagen die Grundlagen, die KI-Kompetenzschulung, erste Anleitungen und das Grundgerüst des Handbuchs. Paket L hat 10 Personentage über rund drei Monate: Das Handbuch wird fertig, eine KI-Beauftragte oder ein KI-Beauftragter wird ausgebildet, und am Ende steht Ihre KI-Strategie.",
            },
            {
              question: "Was macht eine KI-Beauftragte oder ein KI-Beauftragter?",
              answer:
                "Sie oder er ist im Haus die Ansprechperson für Claude: pflegt Handbuch und Anleitungen, schult neue Mitarbeiter nach, prüft neue Ideen und hält den Nachweis der KI-Kompetenz nach Art. 4 EU AI Act aktuell.",
            },
            {
              question: "Ist eine Schulung zum KI-Beauftragten Pflicht?",
              answer:
                "Nein. Art. 4 EU AI Act verlangt KI-Kompetenz des Personals, aber keine bestimmte Rolle. Eine feste Zuständige oder ein fester Zuständiger macht den Nachweis und die Pflege des Handbuchs aber deutlich einfacher, deshalb gehört die Schulung zu Paket L.",
            },
            {
              question: "Wie entsteht die KI-Strategie?",
              answer:
                "Aus den drei Monaten Coaching: Wir sehen, was im Alltag genutzt wird und wo es hakt. Daraus legen wir gemeinsam fest, welche Vorgänge als Nächstes mit Claude laufen, welche Systeme sich anzubinden lohnen und welcher Vorgang der Kandidat für einen Agenten ist.",
            },
            {
              question: "Wie läuft die Anrechnung?",
              answer:
                "Die Einrichtung des Gateways kostet 1.500 €, der Outlook Connector 500 €. Buchen Sie Paket L, schreiben wir beides voll gut, zusammen bis zu 2.000 €.",
            },
          ]}
        />
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Paket L buchen?</IntroBox.Headline>
          <IntroBox.Paragraph>
            Im Scoping-Gespräch klären wir in 30 Minuten Stand der IT, Anmeldung, wer Zugriff bekommt und welche Systeme später relevant sind. Drei Tage danach haben Sie ein Angebot mit Festpreis, Verbrauchsschätzung und Limit-Vorschlag.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="flex justify-center">
          <ContactButton size="lg">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>
    </>
  );
}
