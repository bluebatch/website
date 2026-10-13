import type { Metadata } from "next";
import { AppWindow, Check, Cpu, FilePenLine, FolderKanban, MessagesSquare, ShieldCheck } from "lucide-react";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, TimelineAsSteps, TimelineAsStepsStep, DataTable, FaqContainer } from "@/components/ui";
import { OfferCard, SimpleCard } from "@/components/cards";
import {
  Hero2Column,
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnCallToAction,
  Hero2ColumnSubtext,
  Hero2ColumnImage,
} from "@/components/heroes";
import { StepJourneyRow } from "@/components/sections";
import { ContactButton, InternalLink } from "@/components/buttons";
import CertificateMock from "@/components/mockups/certificate-mock";

const description =
  "KI-Schulung für Mitarbeiter am Private Claude AI Gateway: Coaching an echten Fällen, KI-Kompetenzschulung nach Art. 4 EU AI Act mit Zertifikat. Ab 5.000 €.";

export const metadata: Metadata = {
  title: "KI-Schulung: Coaching mit Zertifikat nach EU AI Act | Bluebatch",
  description,
  openGraph: {
    title: "KI-Schulung: Coaching mit Zertifikat nach EU AI Act",
    description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=KI-Schulung%20und%20Coaching%20f%C3%BCr%20Ihr%20Team&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "KI-Schulung und Coaching für Ihr Team",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/coaching",
  },
};

const basics = [
  {
    icon: ShieldCheck,
    title: "KI-Kompetenz nach Art. 4",
    explain: "Was KI kann und was nicht, welche Pflichten Sie als Betreiber treffen, wo der Berufsträger zeichnet.",
    together: "Alle Mitarbeiter durchlaufen die Schulung und erhalten ein Zertifikat, der Nachweis wird prüfbar abgelegt.",
  },
  {
    icon: Cpu,
    title: "Die Modelle",
    explain: "Ein schnelles für Einfaches, ein Standardmodell für den Alltag, ein starkes für schwierige Fälle.",
    together: "Wir legen fest, welches Modell bei Ihnen für welche Aufgabe voreingestellt ist.",
  },
  {
    icon: AppWindow,
    title: "Die App",
    explain: "Wie Anmeldung, Oberfläche, Rechte und Ablage zusammenhängen.",
    together: "Wir richten Ihre Teams und Rollen ein und räumen die Oberfläche auf.",
  },
  {
    icon: MessagesSquare,
    title: "Chat",
    explain: "Eine Frage, eine Antwort. Der Einstieg für jeden Mitarbeiter.",
    together: "Jeder im Team führt seine ersten echten Vorgänge durch, begleitet.",
  },
  {
    icon: FilePenLine,
    title: "Co-Work",
    explain: "Der Text steht neben dem Gespräch, einzelne Abschnitte werden gezielt überarbeitet.",
    together: "Wir schreiben ein echtes Schriftstück von der ersten bis zur fertigen Fassung.",
  },
  {
    icon: FolderKanban,
    title: "Projekte",
    explain: "Ein Arbeitsbereich pro Mandat oder Thema, mit Unterlagen, Zusammenhang und Anleitung.",
    together: "Wir legen die ersten Projekte an und entscheiden den Zuschnitt: pro Mandant, Vorgang oder Team.",
  },
];

const buildingBlocks = [
  {
    title: "Arbeitsanleitungen (Skills)",
    explain: "Eine aufgeschriebene Arbeitsweise, die die KI bei Bedarf lädt: die Kapitel Ihres Handbuchs",
    together: "Wir schreiben die ersten Anleitungen zusammen. Sie diktieren die Fachlichkeit, wir bringen sie in Form",
  },
  {
    title: "Routinen",
    explain: "Abläufe, die immer gleich laufen: auf Knopfdruck oder zu einem festen Zeitpunkt",
    together: "Wir legen die ersten Routinen an, zum Beispiel die Montagsübersicht, die heute jemand von Hand baut",
  },
  {
    title: "Anbindungen (MCP-Server)",
    explain: "Die Verbindung zu Ihren Systemen, damit die KI nachfragen kann statt zu raten",
    together: "Wir gehen durch, welche Systeme sich lohnen, und nutzen die erste Anbindung im Alltag",
  },
  {
    title: "Plugins",
    explain: "Fertige Pakete, die die App um ein Thema erweitern: Anleitungen und Werkzeuge im Bündel",
    together: "Wir richten die passenden Pakete ein und zeigen, wie Sie eigene daraus machen",
  },
  {
    title: "Die Ablage",
    explain: "Zwei Ebenen: das Handbuch mit Anleitungen und Routinen, die Projekte mit den Unterlagen",
    together: "Wir bauen beide Strukturen zusammen auf, damit sie in einem Jahr noch benutzbar sind",
  },
];

// true = enthalten, false = nicht enthalten, Text = Ausprägung je Paket
const comparison: { label: string; m: string | boolean; l: string | boolean; strong?: boolean }[] = [
  { label: "Umfang", m: "5 Personentage", l: "10 Personentage" },
  { label: "Preis zzgl. USt.", m: "5.000 €", l: "10.000 €", strong: true },
  { label: "Angerechnet: Einrichtung und Outlook Connector", m: "− 2.000 €", l: "− 2.000 €" },
  { label: "Effektiv zusätzlich", m: "3.000 €", l: "8.000 €", strong: true },
  { label: "Begleitung", m: "kompakt, Termine nach Absprache", l: "rund drei Monate" },
  { label: "Schulung: Modelle, App, Chat, Co-Work, Projekte", m: true, l: true },
  { label: "KI-Kompetenzschulung mit Zertifikat je Mitarbeiter", m: true, l: true },
  { label: "Arbeitsanleitungen (Skills) und Routinen", m: "die ersten, an echten Fällen", l: "ausgebaut für Ihre wiederkehrenden Vorgänge" },
  { label: "Kanzlei-Handbuch", m: "Grundgerüst steht", l: "fertig, das Team baut selbst weiter" },
  { label: "Anbindungen und Plugins", m: "Outlook im Alltag nutzen", l: "dazu: welche Systeme sich lohnen, passende Plugins" },
  { label: "KI-Beauftragte oder KI-Beauftragter im Haus", m: false, l: true },
  { label: "KI-Strategie: welche Vorgänge als Nächstes", m: false, l: true },
];

function CompareValue({ value }: { value: string | boolean }) {
  if (value === true) {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-700">
        <Check className="h-4 w-4" strokeWidth={3} aria-label="enthalten" />
      </span>
    );
  }
  if (value === false) return <span className="font-normal text-gray-400">nicht enthalten</span>;
  if (value.startsWith("−")) return <span className="text-green-700">{value}</span>;
  return <>{value}</>;
}

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Schritt 2 · Schulung und Coaching</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>KI-Schulung und Coaching für Ihr&nbsp;Team</Hero2ColumnHeadline>
            <Hero2ColumnDescription geo>
              Die KI-Schulung von Bluebatch ist Schritt 2 des Private Claude AI Gateway: Ihr Team lernt Modelle, App, Chat, Co-Work und Projekte und baut mit uns Arbeitsanleitungen, Routinen und das Kanzlei-Handbuch an echten Fällen. Die KI-Kompetenzschulung nach Art. 4 EU AI Act mit Zertifikat ist enthalten. Paket M kostet 5.000 €, Paket L 10.000 €.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Einrichtung und Outlook Connector werden zu 100 % angerechnet. Alle Preise zzgl. USt. Vor dem Coaching steht die{" "}
              <InternalLink href="/managed-claude/onboarding" variant="underline">
                KI-Einführung in einer Woche
              </InternalLink>
              .
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <div className="relative">
              <Hero2ColumnImage
                type="image"
                src="/images/training-seminar.jpg"
                alt="Kleines Team mit Laptops am Besprechungstisch während einer KI-Schulung"
                className="overflow-hidden rounded-2xl shadow-2xl shadow-primary-900/20 ring-1 ring-gray-900/5 [&_img]:aspect-[4/3] [&_img]:object-cover"
              />
              <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-xl ring-1 ring-gray-900/5 sm:left-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                  <ShieldCheck className="h-5 w-5" aria-hidden />
                </span>
                <span className="text-sm leading-tight">
                  <span className="block font-semibold text-gray-900">Zertifikat je Mitarbeiter</span>
                  <span className="text-gray-500">KI-Kompetenz nach Art. 4 EU AI Act</span>
                </span>
              </div>
            </div>
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" id="pakete">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Zwei Pakete</IntroBox.PreHeadline>
          <IntroBox.Headline>KI-Schulung für Unternehmen: Paket M oder Paket L</IntroBox.Headline>
          <IntroBox.Paragraph>
            5 oder 10 Personentage. Bei beiden Paketen rechnen wir die Einrichtung (1.500 €) und den Outlook Connector (500 €) zu 100 % an, zusammen bis zu 2.000 €. Alle Preise zzgl. USt.
          </IntroBox.Paragraph>
        </IntroBox>
        <SimpleGrid cols={2} className="mx-auto max-w-5xl">
          <OfferCard
            href="/managed-claude/coaching/paket-m"
            price="5.000 €"
            title="Paket M: KI-Workshop, 5 Personentage"
            description="Schulung zu Modellen, App, Chat, Co-Work und Projekten, KI-Kompetenzschulung mit Zertifikat, erste Arbeitsanleitungen und Routinen, Grundgerüst für das Kanzlei-Handbuch. Effektiv 3.000 € zusätzlich."
            linkLabel="Zu Paket M"
          />
          <OfferCard
            highlight
            href="/managed-claude/coaching/paket-l"
            price="10.000 €"
            title="Paket L: KI-Beratung, 10 Personentage"
            description="Alles aus Paket M, dazu rund drei Monate Begleitung, ein fertiges Kanzlei-Handbuch, eine KI-Beauftragte oder ein KI-Beauftragter im Haus und Ihre KI-Strategie. Effektiv 8.000 € zusätzlich."
            linkLabel="Zu Paket L"
          />
        </SimpleGrid>

        <div className="mx-auto mt-14 max-w-5xl">
          <Typo.H3 className="mb-4 text-center">Paket M und Paket L im Vergleich</Typo.H3>
          <DataTable className="hidden md:block">
            <DataTable.Head>
              <DataTable.Row>
                <DataTable.HeaderCell className="w-[38%]">Leistung</DataTable.HeaderCell>
                <DataTable.HeaderCell>Paket M</DataTable.HeaderCell>
                <DataTable.HeaderCell className="bg-primary-900">Paket L</DataTable.HeaderCell>
              </DataTable.Row>
            </DataTable.Head>
            <DataTable.Body>
              {comparison.map((row) => (
                <DataTable.Row key={row.label}>
                  <DataTable.Cell bold>{row.label}</DataTable.Cell>
                  <DataTable.Cell bold={row.strong}>
                    <CompareValue value={row.m} />
                  </DataTable.Cell>
                  <DataTable.Cell bold={row.strong}>
                    <CompareValue value={row.l} />
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable.Body>
          </DataTable>
          {/* Handy: Leistung als Zeilenkopf, M und L nebeneinander */}
          <div className="overflow-hidden rounded-lg bg-white text-sm shadow-sm md:hidden">
            <div className="grid grid-cols-2 font-semibold text-white">
              <div className="bg-primary-800 px-4 py-3">Paket M</div>
              <div className="bg-primary-900 px-4 py-3">Paket L</div>
            </div>
            {comparison.map((row) => (
              <div key={row.label} className="px-4 py-3 even:bg-gray-50">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{row.label}</p>
                <div className={`mt-1.5 grid grid-cols-2 gap-8 text-gray-800 ${row.strong ? "font-semibold" : ""}`}>
                  <div>
                    <CompareValue value={row.m} />
                  </div>
                  <div>
                    <CompareValue value={row.l} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Typo.Paragraph className="mt-4 text-center text-sm text-gray-500">
            Effektiv zusätzlich: Paketpreis abzüglich der Anrechnung, wenn Sie Einrichtung und Outlook Connector gebucht haben. Die Modellkosten laufen nach Verbrauch, siehe{" "}
            <InternalLink href="/managed-claude/preise" variant="underline">
              Preise
            </InternalLink>
            .
          </Typo.Paragraph>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gradient-cool">
        <IntroBox textCentered size="small">
          <IntroBox.PreHeadline>KI-Schulung Pflicht seit Februar 2025</IntroBox.PreHeadline>
          <IntroBox.Headline>Die zertifizierte KI-Kompetenzschulung nach Art. 4 EU AI Act</IntroBox.Headline>
          <IntroBox.Paragraph>
            Art. 4 verpflichtet Betreiber seit Februar 2025, die KI-Kompetenz ihres Personals sicherzustellen, unabhängig vom Werkzeug und auch dann, wenn heute nur privat mit KI gearbeitet wird. Die KI-Kompetenzschulung ist in beiden Paketen enthalten.
          </IntroBox.Paragraph>
        </IntroBox>
        <SimpleGrid cols={2} className="mt-12 items-center gap-12! lg:gap-16!">
          <div>
            <CertificateMock />
            <p className="mx-auto mt-6 max-w-md text-center text-sm text-gray-500">
              Muster. Belegbar gegenüber Kammer, Mandanten und Versicherer: ein Schulungsnachweis, kein amtliches Zertifikat, und das sagen wir bewusst so.
            </p>
          </div>
          <TimelineAsSteps>
            <TimelineAsStepsStep value={1}>
              <Typo.H3 className="mt-1!">Schulung</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Für alle, die mit der KI arbeiten, nicht nur für die Berufsträger: Funktionsweise und Grenzen, Umgang mit Mandantendaten, Erkennen falscher Ergebnisse, Dokumentation, Zuständigkeit und Freigabe.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={2}>
              <Typo.H3 className="mt-1!">Zertifikat je Mitarbeiter</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Jede Teilnehmerin und jeder Teilnehmer bekommt ein Zertifikat als Schulungsnachweis.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={3}>
              <Typo.H3 className="mt-1!">Teilnehmerliste</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Wer geschult wurde, steht gesammelt auf einer Teilnehmerliste für Ihre Ablage.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={4}>
              <Typo.H3 className="mt-1!">Nachweis in der Ablage</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Zertifikate, Teilnehmerliste und Unterlagen bleiben im Kanzlei-Handbuch. Neue Mitarbeiter werden nachgeschult, ohne dass Sie uns dafür brauchen.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
          </TimelineAsSteps>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Die Grundlagen</IntroBox.PreHeadline>
          <IntroBox.Headline>KI-Schulung für Mitarbeiter: was wir erklären, was wir gemeinsam machen</IntroBox.Headline>
          <IntroBox.Paragraph>
            Jede Grundlage hat zwei Hälften: Wir erklären, was es gibt, und legen es dann mit Ihnen an, an Ihren echten Fällen, nicht an Übungsbeispielen.
          </IntroBox.Paragraph>
        </IntroBox>
        <SimpleGrid cols={3} className="mt-10">
          {basics.map((item) => (
            <SimpleCard key={item.title} align="left" className="rounded-2xl">
              <SimpleCard.Icon background="primary-gradient" color="white" size="sm">
                <item.icon className="h-6 w-6" aria-hidden />
              </SimpleCard.Icon>
              <Typo.H3 className="mt-5! mb-2!">{item.title}</Typo.H3>
              <Typo.Paragraph className="text-gray-600">{item.explain}</Typo.Paragraph>
              <SimpleCard.Footer className="pb-0!">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary-700">Gemeinsam</p>
                <p className="mt-1 font-medium text-gray-900">{item.together}</p>
              </SimpleCard.Footer>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>KI-Coaching</IntroBox.PreHeadline>
          <IntroBox.Headline>Fünf Bausteine: aus Nutzung wird ein System</IntroBox.Headline>
        </IntroBox>
        <DataTable className="mt-10 hidden md:block">
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Baustein</DataTable.HeaderCell>
              <DataTable.HeaderCell>Was wir erklären</DataTable.HeaderCell>
              <DataTable.HeaderCell>Was wir gemeinsam machen</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            {buildingBlocks.map((row) => (
              <DataTable.Row key={row.title}>
                <DataTable.Cell bold>{row.title}</DataTable.Cell>
                <DataTable.Cell>{row.explain}</DataTable.Cell>
                <DataTable.Cell bold>{row.together}</DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable.Body>
        </DataTable>
        {/* Handy: ein Block je Baustein statt drei schmaler Spalten */}
        <div className="mt-8 divide-y divide-gray-100 overflow-hidden rounded-lg bg-white text-sm shadow-sm md:hidden">
          {buildingBlocks.map((row) => (
            <div key={row.title} className="px-4 py-4">
              <p className="font-semibold text-gray-900">{row.title}</p>
              <p className="mt-1 text-gray-600">{row.explain}</p>
              <p className="mt-2 font-semibold text-gray-900">
                <span className="text-xs uppercase tracking-wide text-primary-700">Gemeinsam: </span>
                {row.together}
              </p>
            </div>
          ))}
        </div>
        <Typo.Paragraph className="mx-auto mt-6 max-w-3xl text-center text-gray-600">
          Der Unterschied zu einer Schulung, die Sie sonst buchen: Danach haben Ihre Leute nicht etwas gehört, sie haben etwas gebaut, das im Haus bleibt.
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Ablauf</IntroBox.PreHeadline>
          <IntroBox.Headline>Drei Phasen Coaching</IntroBox.Headline>
          <IntroBox.Paragraph>
            Paket L begleitet Sie rund drei Monate durch alle drei Phasen. Paket M bündelt die Grundlagen und den Einstieg ins gemeinsame Bauen in fünf Tagen.
          </IntroBox.Paragraph>
        </IntroBox>
        <StepJourneyRow className="mx-auto mt-10 max-w-6xl">
          <StepJourneyRow.Step n={1}>
            <StepJourneyRow.Title>Grundlagen</StepJourneyRow.Title>
            <StepJourneyRow.Description>
              Modelle, App, Chat, Co-Work und Projekte, dazu die KI-Kompetenzschulung nach Art. 4 EU AI Act mit Zertifikat je Mitarbeiter.
              <span className="mt-3 block font-semibold text-primary-700">Paket M und Paket L</span>
            </StepJourneyRow.Description>
          </StepJourneyRow.Step>
          <StepJourneyRow.Step n={2}>
            <StepJourneyRow.Title>Gemeinsam bauen</StepJourneyRow.Title>
            <StepJourneyRow.Description>
              Die ersten Arbeitsanleitungen und Routinen entstehen an echten Fällen, das Kanzlei-Handbuch bekommt seine Struktur.
              <span className="mt-3 block font-semibold text-primary-700">Paket M: der Einstieg, Paket L: vollständig</span>
            </StepJourneyRow.Description>
          </StepJourneyRow.Step>
          <StepJourneyRow.Step n={3}>
            <StepJourneyRow.Title>Selbst weitermachen</StepJourneyRow.Title>
            <StepJourneyRow.Description>
              Ihre Leute schreiben, wir lesen gegen. Das Team baut selbst aus, die Ablage steht.
              <span className="mt-3 block font-semibold text-primary-700">Paket L</span>
            </StepJourneyRow.Description>
          </StepJourneyRow.Step>
        </StepJourneyRow>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer
          headline="Fragen zur KI-Schulung"
          intro="Was Kanzleien und Unternehmen vor der Buchung fragen."
          faqs={[
            {
              question: "Ist eine KI-Schulung für Mitarbeiter Pflicht?",
              answer:
                "Seit Februar 2025 verpflichtet Art. 4 EU AI Act Betreiber von KI-Systemen, die KI-Kompetenz ihres Personals sicherzustellen. Eine bestimmte Schulung schreibt das Gesetz nicht vor, ohne Schulung lässt sich die Pflicht aber kaum belegen. Deshalb ist die KI-Kompetenzschulung mit Zertifikat in Paket M und Paket L enthalten.",
            },
            {
              question: "Was kostet die KI-Schulung für Unternehmen?",
              answer:
                "Paket M (5 Personentage) kostet 5.000 €, Paket L (10 Personentage) 10.000 €, jeweils zzgl. USt. Bei beiden rechnen wir die Einrichtung (1.500 €) und den Outlook Connector (500 €) zu 100 % an. Effektiv kommen damit 3.000 € bzw. 8.000 € hinzu.",
            },
            {
              question: "Was ist der Unterschied zwischen KI-Schulung und KI-Coaching?",
              answer:
                "In der Schulung erklären wir, was es gibt: Modelle, App, Chat, Co-Work, Projekte und die Pflichten nach Art. 4. Im Coaching bauen wir mit Ihrem Team an echten Fällen Arbeitsanleitungen, Routinen und das Kanzlei-Handbuch. Beide Pakete enthalten beides, Paket L deutlich mehr Coaching.",
            },
            {
              question: "Bekommen alle Mitarbeiter ein Zertifikat?",
              answer:
                "Ja. Alle Mitarbeiter, die mit der KI arbeiten, durchlaufen die KI-Kompetenzschulung nach Art. 4 EU AI Act und erhalten ein Zertifikat als Schulungsnachweis, plus Teilnehmerliste für Ihre Ablage. Ein Schulungsnachweis, kein amtliches Zertifikat.",
            },
            {
              question: "Was passiert, wenn neue Mitarbeiter dazukommen?",
              answer:
                "Die Schulungsunterlagen bleiben im Kanzlei-Handbuch. Neue Mitarbeiter werden damit nachgeschult, ohne dass Sie uns dafür brauchen.",
            },
            {
              question: "Für wen eignet sich die KI-Schulung?",
              answer:
                "Für Steuerkanzleien, Anwaltskanzleien und Mittelständler, die Claude über das Private Claude AI Gateway nutzen. Geschult werden alle, die mit der KI arbeiten, nicht nur die Berufsträger.",
            },
          ]}
        />
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Welches Coaching passt zu Ihrem Team?</IntroBox.Headline>
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
