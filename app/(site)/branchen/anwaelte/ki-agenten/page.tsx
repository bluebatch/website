import type { Metadata } from "next";
import ContentWrapper from "@/components/layout/content-wrapper";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import Hero2Column, {
  Hero2ColumnCallToAction,
  Hero2ColumnHeadline,
  Hero2ColumnImage,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnSubtext,
  Hero2ColumnTextColumn,
} from "@/components/heroes/hero-2-column";
import Typo from "@/components/ui/typo";
import GeoSummary from "@/components/ui/geo-summary";
import { FlowDiagram } from "@/components/diagrams";
import { FaqContainer } from "@/components/ui/faqs";
import ContactButton from "@/components/buttons/contact-button";
import InternalLink from "@/components/buttons/internal-link";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { ogImages } from "@/lib/og";
import { Inbox, Cpu, ListChecks, UserCheck } from "lucide-react";

const TITLE = "KI-Agenten für Anwaltskanzleien";

export const metadata: Metadata = {
  title: `${TITLE}: Posteingang und Fristen | Bluebatch`,
  description:
    "KI-Agenten für Anwaltskanzleien: Posteingang aus beA und E-Mail vorsortieren, Fristen erkennen und zur Prüfung vorlegen. Angebunden an actaport und RA-MICRO, Freigabe bleibt beim Anwalt.",
  keywords: [
    "KI-Agenten Anwaltskanzlei",
    "beA Posteingang automatisieren",
    "Fristenkontrolle KI",
    "RA-MICRO Automatisierung",
  ],
  openGraph: {
    title: `${TITLE}: Posteingang und Fristen`,
    description:
      "Posteingang aus beA und E-Mail vorsortieren, Fristen erkennen und zur Prüfung vorlegen. Freigabe bleibt beim Anwalt.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages(TITLE, "Anwälte"),
  },
  alternates: {
    canonical: "/branchen/anwaelte/ki-agenten",
  },
};

const seiten = [
  {
    href: "/branchen/anwaelte/ki-agenten/posteingang-agent",
    tag: "Angebot",
    title: "Posteingangs-Agent",
    description:
      "beA-Nachrichten, E-Mails und Scans werden gelesen, der Akte zugeordnet und mit einem Vorschlag für den nächsten Schritt vorgelegt. Die Zuordnung bestätigt ein Mensch.",
    linkLabel: "Posteingangs-Agent für Kanzleien ansehen",
  },
  {
    href: "/branchen/anwaelte/ki-agenten/fristen-agent",
    tag: "Angebot",
    title: "Fristen-Agent",
    description:
      "Der Agent erkennt fristauslösende Dokumente, rechnet Vorfrist und Endfrist und legt sie zur Bestätigung vor. Eingetragen wird erst nach Prüfung durch die Fristenverantwortliche.",
    linkLabel: "Fristen-Agent für Kanzleien ansehen",
  },
];

const faqs = [
  {
    question: "Was ist der Unterschied zwischen KI-Agent und Workflow?",
    answer:
      "Ein Workflow führt feste Regeln aus: Wenn Dokument X eintrifft, lege es in Ordner Y ab. Ein KI-Agent trifft Einschätzungen, die sich nicht als Regel schreiben lassen: Worum geht es in diesem Schreiben, zu welcher Akte gehört es, löst es eine Frist aus. In der Praxis kombinieren wir beides, den Agenten für die Einschätzung und den Workflow für die Ausführung.",
  },
  {
    question: "Trägt der Agent Fristen selbst ein?",
    answer:
      "Nein. Der Agent bereitet vor und legt vor, eingetragen wird nach Bestätigung durch die zuständige Person. Die Fristenkontrolle ist der haftungskritischste Vorgang der Kanzlei, eine Automatisierung ohne Vier-Augen-Schritt wäre dort das falsche Ziel. Der Gewinn liegt darin, dass nichts mehr übersehen wird, nicht darin, den Menschen zu ersetzen.",
  },
  {
    question: "Funktioniert das mit actaport und RA-MICRO?",
    answer:
      "Mit beiden, aber auf unterschiedlichen Wegen. actaport ist cloudbasiert und bringt eine REST-API mit, dort läuft die Anbindung direkt über die Schnittstelle. RA-MICRO läuft lokal oder in der RA-MICRO Cloud und dokumentiert keine offene REST-API für Drittsysteme, dort führt der Weg über Dokumentenablage, Exporte und das beA-Postfach. Welcher Weg für Ihre Kanzlei gilt, klären wir vor der Umsetzung.",
  },
  {
    question: "Wo laufen diese Agenten?",
    answer:
      "In der geschützten Umgebung, die Ihre Kanzlei ohnehin nutzt, also entweder auf Ihrer eigenen Infrastruktur oder in einer verwalteten EU-Umgebung hinter der Vertragskette nach § 43e Abs. 3 BRAO. Ein Agent ist kein eigener Datenraum, sondern ein Nutzer des bestehenden.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Anwälte</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              KI-Agenten für die Kanzlei: vorbereiten, nicht entscheiden
            </Hero2ColumnHeadline>
            <GeoSummary>
              KI-Agenten übernehmen in Anwaltskanzleien die Vorarbeit, die
              heute Zeit frisst: Posteingang aus beA und E-Mail lesen, der Akte
              zuordnen, fristauslösende Schreiben erkennen und zur Prüfung
              vorlegen. Angebunden an actaport oder RA-MICRO, die Entscheidung
              bleibt beim Berufsträger.
            </GeoSummary>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Beratung anfragen</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Posteingang, Fristen und die Anbindung an Ihre Kanzleisoftware
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/document-automation.jpg"
              type="image"
              alt="Automatisierte Dokumentenverarbeitung in der Kanzlei"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Prinzip */}
      <ContentWrapper colorScheme="gray-light">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Typo.H2 className="mb-4">
            Das Prinzip: Vorschlag, Prüfung, Ausführung
          </Typo.H2>
          <Typo.Paragraph className="text-gray-600">
            Jeder Agent, den wir für Kanzleien bauen, folgt derselben Kette. Der
            Agent liest und schlägt vor, ein Mensch bestätigt, erst danach
            passiert etwas in der Akte.
          </Typo.Paragraph>
        </div>
        <FlowDiagram
          nodes={[
            {
              icon: <Inbox className="h-5 w-5" />,
              label: "Eingang",
              sublabel: "beA, E-Mail, Scan",
            },
            {
              icon: <Cpu className="h-5 w-5" />,
              label: "Agent liest",
              sublabel: "Thema, Akte, Fristbezug",
            },
            {
              icon: <ListChecks className="h-5 w-5" />,
              label: "Vorschlag",
              sublabel: "Zuordnung und naechster Schritt",
              highlight: true,
            },
            {
              icon: <UserCheck className="h-5 w-5" />,
              label: "Freigabe",
              sublabel: "Mensch bestaetigt oder korrigiert",
            },
          ]}
          caption="Ohne Bestätigung schreibt kein Agent in die Akte und verschickt nichts. Das ist keine Einstellung, sondern der Aufbau."
        />
      </ContentWrapper>

      {/* Seiten */}
      <ContentWrapper>
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Typo.H2 className="mb-4">Themen in diesem Bereich</Typo.H2>
          <Typo.Paragraph className="text-gray-600">
            Zwei Agenten, mit denen Kanzleien typischerweise anfangen. Die
            Ausführung dahinter beschreiben die{" "}
            <InternalLink
              href="/branchen/anwaelte/workflows"
              variant="underline"
            >
              automatisierten Kanzlei-Workflows
            </InternalLink>
            .
          </Typo.Paragraph>
        </div>
        <SimpleGrid cols={2}>
          {seiten.map((s) => (
            <SimpleCard key={s.href} align="left" className="h-full">
              <span className="mb-2 inline-flex rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                {s.tag}
              </span>
              <Typo.H3 className="mt-0!">{s.title}</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                {s.description}
              </Typo.Paragraph>
              <span className="mt-auto pt-4">
                <InternalLink href={s.href}>{s.linkLabel}</InternalLink>
              </span>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer
          faqs={faqs}
          intro="Was Kanzleien uns zu KI-Agenten am häufigsten fragen."
        />
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
