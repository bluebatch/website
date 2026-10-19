import type { Metadata } from "next";
import ContentWrapper from "@/components/layout/content-wrapper";
import SimpleGrid from "@/components/layout/simple-grid";
import Hero2Column, {
  Hero2ColumnDescription,
  Hero2ColumnHeadline,
  Hero2ColumnImage,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnTextColumn,
} from "@/components/heroes/hero-2-column";
import IntroBox from "@/components/ui/intro-box";
import ProseColumns from "@/components/ui/prose-columns";
import SimpleCard from "@/components/cards/simple-card";
import { FaqContainer } from "@/components/ui/faqs";
import Typo from "@/components/ui/typo";
import InternalLink from "@/components/buttons/internal-link";
import CareerOpenings from "@/components/hiring/career-openings";

export const metadata: Metadata = {
  title: "Karriere bei Bluebatch | Jobs rund um Claude und KI",
  description:
    "Offene Stellen bei Bluebatch: Sales Consultant und Delivery Consultant für Claude. Bevorzugt an unserem Standort Nürnberg, remote möglich, kleines Team.",
  keywords: [
    "Bluebatch Karriere",
    "Claude Jobs",
    "KI Jobs Deutschland",
    "Sales Consultant KI",
    "Delivery Consultant Claude",
  ],
  openGraph: {
    title: "Karriere bei Bluebatch",
    description:
      "Offene Stellen rund um Claude: Vertrieb und Einführung beim Kunden, bevorzugt in Nürnberg, remote möglich, kleines Team.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Karriere%20bei%20Bluebatch&eyebrow=Offene%20Stellen",
        width: 1200,
        height: 630,
        alt: "Karriere bei Bluebatch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karriere bei Bluebatch",
    description:
      "Offene Stellen rund um Claude: Vertrieb und Einführung, bevorzugt in Nürnberg, remote möglich.",
    images: ["/og?title=Karriere%20bei%20Bluebatch&eyebrow=Offene%20Stellen"],
  },
  alternates: {
    canonical: "/karriere",
  },
};

const stack = [
  {
    iconSrc: "/icons/admin-with-cogwheels.svg",
    title: "Claude von Anthropic",
    description:
      "Claude als App für Chat, Cowork und Code, dazu die API. Das Werkzeug, das du verkaufst oder einführst, und mit dem du selbst jeden Tag arbeitest.",
  },
  {
    iconSrc: "/icons/cloud.svg",
    title: "AWS Bedrock in der EU",
    description:
      "Claude läuft bei uns über AWS Bedrock mit EU-Inferenzprofilen. Prompts und Antworten speichern wir nicht.",
  },
  {
    iconSrc: "/icons/server-minimalistic.svg",
    title: "Private Claude AI Gateway",
    description:
      "Unser Gateway in Frankfurt: eine eigene Organisation pro Kunde, Anmeldung per Single Sign-on, Budgets und Nutzung im Managed Claude Interface.",
  },
  {
    iconSrc: "/icons/puzzle.svg",
    title: "DATEV, Microsoft 365, Websuche",
    description:
      "Über Connectors arbeitet Claude mit den Daten der Kanzlei, etwa mit DATEV oder Outlook und SharePoint.",
  },
  {
    iconSrc: "/icons/shield-check.svg",
    title: "Datenschutz als Grundlage",
    description:
      "Dienstleistungsvertrag, AVV, TOMs und Geheimhaltungsvereinbarung gehören zu jedem Kunden. Bei uns kann jede Person erklären, wo welche Daten liegen.",
  },
  {
    iconSrc: "/icons/code.svg",
    title: "Skripte und API-Keys",
    description:
      "Für Teams, die weitergehen wollen: API-Keys, kleine Skripte in Python oder TypeScript und Claude Code für eigene Automatisierungen.",
  },
];

const benefits = [
  {
    title: "Nürnberg oder remote",
    description:
      "Unser Standort ist Nürnberg, dort arbeiten wir am liebsten zusammen. Remote geht auch, solange die Zeitzone zu unseren Kunden im deutschsprachigen Raum passt.",
  },
  {
    title: "Eigene Projekte statt Zuarbeit",
    description:
      "Du bekommst eigene Kunden, für die du verantwortlich bist. Kein Ticket-Abarbeiten in einer anonymen Delivery-Pipeline.",
  },
  {
    title: "Kurze Wege",
    description:
      "Wir sind ein kleines Team ohne Zwischenebenen. Was Freitag beschlossen wird, läuft Montag beim Kunden.",
  },
  {
    title: "Zeit für neue Tools",
    description:
      "KI verändert sich monatlich. Wir bauen Zeit zum Ausprobieren fest ein, statt sie in Abendstunden zu verschieben.",
  },
  {
    title: "Ergebnisse zählen",
    description:
      "Wir messen an dem, was beim Kunden ankommt, nicht an Anwesenheit. Arbeitszeiten sind flexibel.",
  },
  {
    title: "Sichtbare Wirkung",
    description:
      "Wenn eine Kanzlei Claude im Alltag nutzt, siehst du es an der Nutzung im Portal und an den Rückmeldungen aus dem Team.",
  },
];

const faqs = [
  {
    question: "Wie läuft die Bewerbung bei Bluebatch ab?",
    answer:
      "Über das Formular auf dieser Seite. Danach folgt ein Kennenlerngespräch per Video, anschließend eine kleine fachliche Aufgabe oder ein Fachgespräch, dann die Entscheidung. Insgesamt dauert der Prozess in der Regel zwei bis drei Wochen.",
  },
  {
    question: "Brauche ich Lebenslauf und Anschreiben?",
    answer:
      "Im ersten Schritt nicht. Uns reichen Name, E-Mail, die gewünschte Stelle und ein Link auf LinkedIn, GitHub oder ein Portfolio. Unterlagen fragen wir nur an, wenn wir sie wirklich brauchen.",
  },
  {
    question: "Wo arbeite ich, in Nürnberg oder remote?",
    answer:
      "Unser Standort ist Nürnberg, dort sehen wir dich am liebsten, gern auch hybrid. Remote ist bei allen ausgeschriebenen Stellen möglich. Ein bis zwei Team-Treffen pro Jahr finden gemeinsam statt.",
  },
  {
    question: "Ist eine Initiativbewerbung möglich?",
    answer:
      "Ja. Wähle im Formular Initiativbewerbung aus und beschreibe, was du mitbringst. Wir wachsen laufend und schaffen Rollen auch dann, wenn jemand fachlich gut passt.",
  },
  {
    question: "Mit welchen Technologien arbeitet Bluebatch?",
    answer:
      "Mit Claude von Anthropic als App und über die API. Claude läuft über AWS Bedrock mit EU-Inferenzprofilen und unser Private Claude AI Gateway in Frankfurt, dazu kommen Connectors für DATEV, Microsoft 365 und die Websuche.",
  },
  {
    question: "Wie schnell bekomme ich eine Rückmeldung?",
    answer:
      "Wir melden uns innerhalb einer Woche nach Eingang der Bewerbung per E-Mail, auch bei einer Absage.",
  },
];

export default function KarrierePage() {
  return (
    <>
      {/* Hero */}
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Karriere</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Claude in die Kanzleien bringen
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription geo>
              Bluebatch bringt Claude von Anthropic sicher in Unternehmen und
              Kanzleien in Deutschland, DSGVO-konform über unser Private Claude
              AI Gateway in Frankfurt. Schwerpunkt sind Anwalts- und
              Steuerkanzleien. Aktuell suchen wir eine Person für den Vertrieb
              und eine für die Einführung beim Kunden, am liebsten an unserem
              Standort in Nürnberg, remote ist möglich.
            </Hero2ColumnDescription>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/team/bluebatch-team-workspace.jpg"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Wer wir sind */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Über Bluebatch</IntroBox.PreHeadline>
          <IntroBox.Headline>Was du bei uns tatsächlich tust</IntroBox.Headline>
          <IntroBox.Subline>
            Keine Innovationslabore, keine Prototypen für die Schublade. Unsere
            Kunden arbeiten jeden Tag mit Claude, und wir sorgen dafür, dass
            das sicher und produktiv läuft.
          </IntroBox.Subline>
        </IntroBox>

        <div className="mt-12">
          <ProseColumns cols={3}>
            <ProseColumns.Item title="Für wen wir arbeiten">
              <Typo.Paragraph className="text-gray-600">
                Vor allem{" "}
                <InternalLink href="/branchen/anwaelte" variant="underline">
                  Anwaltskanzleien
                </InternalLink>{" "}
                und{" "}
                <InternalLink
                  href="/branchen/steuerberater"
                  variant="underline"
                >
                  Steuerkanzleien
                </InternalLink>
                , dazu Unternehmen aus dem Mittelstand. Also Teams, die mit
                vertraulichen Daten arbeiten und KI deshalb nicht einfach im
                Browser nutzen dürfen.
              </Typo.Paragraph>
            </ProseColumns.Item>
            <ProseColumns.Item title="Woran wir arbeiten">
              <Typo.Paragraph className="text-gray-600">
                Claude für das ganze Team einrichten, Anbindung an DATEV und
                Microsoft 365, Schulungen nach Art. 4 AI Act und Hilfe,
                wenn jemand mit Skripten oder der API weitermachen will.
              </Typo.Paragraph>
            </ProseColumns.Item>
            <ProseColumns.Item title="Wie wir arbeiten">
              <Typo.Paragraph className="text-gray-600">
                Kleine Teams und direkter Kontakt zur Kanzlei. Wie eine
                Einführung Schritt für Schritt abläuft, zeigt{" "}
                <InternalLink
                  href="/managed-claude/onboarding"
                  variant="underline"
                >
                  unser Onboarding
                </InternalLink>
                .
              </Typo.Paragraph>
            </ProseColumns.Item>
          </ProseColumns>
        </div>
      </ContentWrapper>

      {/* Tech-Stack */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Technologien</IntroBox.PreHeadline>
          <IntroBox.Headline>Womit wir täglich arbeiten</IntroBox.Headline>
          <IntroBox.Subline>
            Du musst nicht alles davon können. Aber du solltest Lust haben, dich
            in das einzuarbeiten, was dir noch fehlt.
          </IntroBox.Subline>
        </IntroBox>

        <SimpleGrid cols={3} className="mt-12 gap-8">
          {stack.map((item) => (
            <SimpleCard key={item.title}>
              <SimpleCard.Icon
                src={item.iconSrc}
                alt={item.title}
                color="primary-gradient"
              />
              <Typo.H3 className="mb-3 text-xl">{item.title}</Typo.H3>
              <Typo.Paragraph className="text-sm text-gray-600">
                {item.description}
              </Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>

        <Typo.Paragraph className="mt-10 text-center text-gray-600">
          Wie das technisch zusammenhängt, steht unter{" "}
          <InternalLink
            href="/managed-claude/wie-es-funktioniert"
            variant="underline"
          >
            So funktioniert Managed Claude
          </InternalLink>
          , die Datenschutz-Seite erklärt{" "}
          <InternalLink href="/managed-claude/datenschutz" variant="underline">
            wo welche Daten liegen
          </InternalLink>
          .
        </Typo.Paragraph>
      </ContentWrapper>

      {/* Was wir bieten */}
      <ContentWrapper colorScheme="gradient-primary-alt">
        <IntroBox dark>
          <IntroBox.PreHeadline>Arbeiten bei Bluebatch</IntroBox.PreHeadline>
          <IntroBox.Headline>Was du von uns bekommst</IntroBox.Headline>
          <IntroBox.Subline>
            Wir versprechen keinen Obstkorb. Dafür Verantwortung ab der ersten
            Woche und Projekte, deren Wirkung du messen kannst.
          </IntroBox.Subline>
        </IntroBox>

        <SimpleGrid cols={3} className="mt-12 gap-8">
          {benefits.map((benefit) => (
            <SimpleCard key={benefit.title} align="left">
              {/* Farbe explizit: die Sektion setzt text-white, die Karte ist weiß. */}
              <Typo.H3 className="mt-0! mb-3 text-xl text-gray-900">
                {benefit.title}
              </Typo.H3>
              <Typo.Paragraph className="text-sm text-gray-600">
                {benefit.description}
              </Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      {/* Offene Stellen + Bewerbungsformular */}
      <CareerOpenings />

      {/* FAQ */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer
          faqs={faqs}
          headline="Fragen zur Bewerbung"
          intro="Was Bewerberinnen und Bewerber uns am häufigsten fragen."
        />
      </ContentWrapper>

      {/* Team */}
      <ContentWrapper bodyWidth="small">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Das Team</IntroBox.PreHeadline>
          <IntroBox.Headline>Mit wem du zusammenarbeitest</IntroBox.Headline>
          <IntroBox.Paragraph>
            Bluebatch ist ein kleines, verteiltes Team aus Entwicklung, Sales
            und Kundenbetreuung. Wer dahintersteckt, siehst du auf der{" "}
            <InternalLink href="/team" variant="underline">
              Teamseite von Bluebatch
            </InternalLink>
            .
          </IntroBox.Paragraph>
        </IntroBox>
      </ContentWrapper>
    </>
  );
}
