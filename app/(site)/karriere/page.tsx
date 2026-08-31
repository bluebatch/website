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
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/ui/timeline-as-steps";
import { FaqContainer } from "@/components/ui/faqs";
import Typo from "@/components/ui/typo";
import InternalLink from "@/components/buttons/internal-link";
import CareerOpenings from "@/components/hiring/career-openings";

export const metadata: Metadata = {
  title: "Karriere bei Bluebatch | Jobs in Automatisierung & KI",
  description:
    "Offene Stellen bei Bluebatch: n8n Workflow Developer, AI Solutions Engineer, Sales und Werkstudierende. Remote, kleines Team, echte Kundenprojekte im Mittelstand.",
  keywords: [
    "Bluebatch Karriere",
    "n8n Jobs",
    "KI Jobs Deutschland",
    "Workflow Developer Stelle",
    "AI Engineer Remote",
  ],
  openGraph: {
    title: "Karriere bei Bluebatch",
    description:
      "Offene Stellen in Workflow-Automatisierung und KI: remote, kleines Team, echte Kundenprojekte im Mittelstand.",
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
      "Offene Stellen in Workflow-Automatisierung und KI: remote, kleines Team, echte Kundenprojekte.",
    images: ["/og?title=Karriere%20bei%20Bluebatch&eyebrow=Offene%20Stellen"],
  },
  alternates: {
    canonical: "/karriere",
  },
};

const stack = [
  {
    iconSrc: "/icons/workflow.svg",
    title: "n8n als Kern",
    description:
      "Fast jeder Kundenworkflow läuft auf n8n, self-hosted auf unserer Infrastruktur. Dazu eigene Custom Nodes, wenn die Standard-Nodes nicht reichen.",
  },
  {
    iconSrc: "/icons/code.svg",
    title: "TypeScript und Python",
    description:
      "TypeScript für Nodes, Function-Steps und unsere eigenen Services, Python überall dort, wo Dokumente und Daten verarbeitet werden.",
  },
  {
    iconSrc: "/icons/admin-with-cogwheels.svg",
    title: "LLMs und KI-Agenten",
    description:
      "Claude und OpenAI über API, dazu MCP-Server, die Agenten kontrollierten Zugriff auf ERP, DMS und Datenbanken geben.",
  },
  {
    iconSrc: "/icons/privacy.svg",
    title: "Private AI",
    description:
      "Für sensible Daten laufen Modelle wie Llama und Mistral mit Ollama oder vLLM auf eigener Hardware, DSGVO-konform und ohne Datenabfluss.",
  },
  {
    iconSrc: "/icons/server-minimalistic.svg",
    title: "Docker, AWS und Hetzner",
    description:
      "Container statt Handarbeit, Deployments auf AWS oder deutschen Servern, Monitoring inklusive. Wer Infrastruktur mag, findet hier genug zu tun.",
  },
  {
    iconSrc: "/icons/puzzle.svg",
    title: "Schnittstellen zu allem",
    description:
      "SAP, Navision, Sage, DATEV, Shopsysteme, EDI, PostgreSQL und Vektordatenbanken. Der Alltag besteht daraus, Systeme zum Reden zu bringen.",
  },
];

const benefits = [
  {
    title: "Remote first",
    description:
      "Das Team arbeitet verteilt. Wo du sitzt, ist uns egal, solange die Zeitzone zu unseren Kunden im deutschsprachigen Raum passt.",
  },
  {
    title: "Eigene Projekte statt Zuarbeit",
    description:
      "Du bekommst Kunden und Workflows, für die du verantwortlich bist. Kein Ticket-Abarbeiten in einer anonymen Delivery-Pipeline.",
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
      "Wir messen an eingesparter Zeit beim Kunden, nicht an Anwesenheit. Arbeitszeiten sind flexibel, Teilzeit ist bei den meisten Rollen möglich.",
  },
  {
    title: "Sichtbare Wirkung",
    description:
      "Ein Workflow, den du baust, nimmt einem Team im Backoffice täglich Stunden ab. Das siehst du im ersten Reporting nach dem Go-live.",
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
    question: "Kann ich remote arbeiten?",
    answer:
      "Ja, alle ausgeschriebenen Stellen sind remote möglich. Wer lieber vor Ort arbeitet, kann das hybrid tun. Ein bis zwei Team-Treffen pro Jahr finden gemeinsam statt.",
  },
  {
    question: "Ist eine Initiativbewerbung möglich?",
    answer:
      "Ja. Wähle im Formular Initiativbewerbung aus und beschreibe, was du mitbringst. Wir wachsen laufend und schaffen Rollen auch dann, wenn jemand fachlich gut passt.",
  },
  {
    question: "Mit welchen Technologien arbeitet Bluebatch?",
    answer:
      "n8n als Automatisierungs-Engine, TypeScript und Python für eigene Services, Claude und OpenAI für KI-Funktionen, MCP-Server für den Systemzugriff, dazu Docker, PostgreSQL sowie AWS und deutsche Server für den Betrieb.",
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
              Automatisierung bauen, die täglich läuft
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription geo>
              Bluebatch ist eine KI- und Automatisierungsagentur aus
              Deutschland. Wir automatisieren Backoffice-Prozesse im
              Mittelstand mit n8n-Workflows und KI-Agenten, von der
              Auftragserfassung bis zur Rechnungsprüfung. Aktuell suchen wir
              Entwicklerinnen und Entwickler, Sales und Werkstudierende,
              remote und ohne Konzernstrukturen.
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
            Workflows laufen produktiv und werden gemessen an der Zeit, die sie
            unseren Kunden zurückgeben.
          </IntroBox.Subline>
        </IntroBox>

        <div className="mt-12">
          <ProseColumns cols={3}>
            <ProseColumns.Item title="Für wen wir bauen">
              <Typo.Paragraph className="text-gray-600">
                Mittelständische Unternehmen zwischen 50 und 1.000
                Mitarbeitenden. Schwerpunkte sind{" "}
                <InternalLink href="/branchen/grosshandel" variant="underline">
                  Automatisierung im Großhandel
                </InternalLink>{" "}
                und{" "}
                <InternalLink
                  href="/branchen/steuerberater"
                  variant="underline"
                >
                  KI für Steuerkanzleien
                </InternalLink>
                . Firmen also, in denen Excel-Listen und Mail-Postfächer noch
                echte Prozessschritte sind.
              </Typo.Paragraph>
            </ProseColumns.Item>
            <ProseColumns.Item title="Woran wir arbeiten">
              <Typo.Paragraph className="text-gray-600">
                Bestellungen aus PDFs und Mails ins ERP, Rechnungsprüfung,
                Angebotserstellung, Dokumentenverarbeitung, KI-Assistenten auf
                internen Daten. Jedes Projekt startet mit einem Prozess, der
                heute Menschen Stunden kostet.
              </Typo.Paragraph>
            </ProseColumns.Item>
            <ProseColumns.Item title="Wie wir arbeiten">
              <Typo.Paragraph className="text-gray-600">
                Kleine Teams, direkter Kundenkontakt, erste Workflows in fünf
                Tagen live. Wie unsere Zusammenarbeit über die Zeit wächst,
                steht auf{" "}
                <InternalLink href="/mit-euch-wachsen" variant="underline">
                  unserem Wachstumsmodell
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
          Einen tieferen Blick auf unsere Arbeit gibt es bei den{" "}
          <InternalLink href="/services" variant="underline">
            Services rund um n8n
          </InternalLink>{" "}
          und in unseren{" "}
          <InternalLink href="/services/schulungen" variant="underline">
            Automatisierungs-Schulungen
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
              <Typo.H3 className="mt-0! mb-3 text-xl">{benefit.title}</Typo.H3>
              <Typo.Paragraph className="text-sm text-gray-600">
                {benefit.description}
              </Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      {/* Ablauf */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>Ablauf</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Vom Formular zur Zusage in drei Wochen
          </IntroBox.Headline>
        </IntroBox>

        <div className="mt-12">
          <TimelineAsSteps>
            <TimelineAsStepsStep value={1}>
              <Typo.H3 className="mt-2!">Bewerbung über das Formular</Typo.H3>
              <Typo.Paragraph>
                Name, E-Mail, Stelle und ein paar Sätze zu dir. Wir bestätigen
                den Eingang sofort und melden uns innerhalb einer Woche.
              </Typo.Paragraph>
            </TimelineAsStepsStep>

            <TimelineAsStepsStep value={2}>
              <Typo.H3 className="mt-2!">Kennenlernen per Video</Typo.H3>
              <Typo.Paragraph>
                30 Minuten mit Max und der Person, mit der du am meisten
                arbeiten würdest. Gegenseitige Fragen, keine Fangfragen.
              </Typo.Paragraph>
            </TimelineAsStepsStep>

            <TimelineAsStepsStep value={3}>
              <Typo.H3 className="mt-2!">Fachlicher Teil</Typo.H3>
              <Typo.Paragraph>
                Eine kleine Aufgabe aus unserem Alltag oder ein Fachgespräch,
                je nach Rolle. Zeitaufwand maximal zwei Stunden, keine
                unbezahlten Probeprojekte.
              </Typo.Paragraph>
            </TimelineAsStepsStep>

            <TimelineAsStepsStep value={4} isLast>
              <Typo.H3 className="mt-2!">Entscheidung und Start</Typo.H3>
              <Typo.Paragraph>
                Rückmeldung in beide Richtungen, dann Vertrag und
                Onboarding-Plan für die ersten 30 Tage.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
          </TimelineAsSteps>
        </div>
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
