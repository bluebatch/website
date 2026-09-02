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
import DataTable from "@/components/ui/data-table";
import { FaqContainer } from "@/components/ui/faqs";
import ContactButton from "@/components/buttons/contact-button";
import InternalLink from "@/components/buttons/internal-link";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { ogImages } from "@/lib/og";

const TITLE = "Kanzlei-Workflows automatisieren";

export const metadata: Metadata = {
  title: `${TITLE}: actaport und RA-MICRO | Bluebatch`,
  description:
    "Automatisierte Workflows für Anwaltskanzleien mit n8n: beA-Nachrichten verarbeiten, Akten und Dokumente steuern, Kanzleisoftware anbinden. Für actaport über REST-API, für RA-MICRO über Ablage und Export.",
  keywords: [
    "Kanzlei Workflows automatisieren",
    "RA-MICRO Schnittstelle",
    "actaport n8n",
    "beA automatisieren",
  ],
  openGraph: {
    title: `${TITLE}: actaport und RA-MICRO`,
    description:
      "beA-Nachrichten verarbeiten, Akten und Dokumente steuern, Kanzleisoftware anbinden, mit n8n.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages(TITLE, "Anwälte"),
  },
  alternates: {
    canonical: "/branchen/anwaelte/workflows",
  },
};

const seiten = [
  {
    href: "/branchen/anwaelte/workflows/ra-micro-anbindung",
    tag: "Angebot",
    title: "RA-MICRO anbinden",
    description:
      "RA-MICRO dokumentiert keine offene REST-API für Drittsysteme. Wie eine Anbindung trotzdem sauber gelingt, über Dokumentenablage, Exporte und beA statt über Umwege am Berufsrecht vorbei.",
    linkLabel: "RA-MICRO anbinden lassen",
  },
  {
    href: "/branchen/anwaelte/workflows/bea-nachrichten-automatisieren",
    tag: "Angebot",
    title: "beA-Nachrichten automatisieren",
    description:
      "Eingehende beA-Nachrichten samt Anhängen strukturiert verarbeiten: entpacken, klassifizieren, der Akte zuordnen und Entwürfe vorbereiten. Der Versand bleibt manuell.",
    linkLabel: "beA-Nachrichten automatisieren lassen",
  },
];

const faqs = [
  {
    question: "Womit automatisieren Sie Kanzlei-Prozesse?",
    answer:
      "Mit n8n, einer offenen Workflow-Engine, die wir für die Kanzlei self-hosted betreiben. Das ist bewusst kein zusätzlicher Cloud-Dienst: Die Engine läuft auf Infrastruktur, die die Kanzlei kontrolliert, damit Aktendaten den kontrollierten Bereich nicht verlassen. Wo Standard-Bausteine nicht reichen, bauen wir eigene.",
  },
  {
    question: "Lässt sich RA-MICRO überhaupt anbinden?",
    answer:
      "Ja, nur nicht über eine dokumentierte REST-API, denn RA-MICRO führt für Drittsysteme keine solche Schnittstelle öffentlich. Der übliche Weg führt über die Dokumentenablage, über Exporte und über das beA-Postfach. Das ist weniger elegant als bei actaport, funktioniert im Alltag aber zuverlässig, solange man den Schnitt eng hält.",
  },
  {
    question: "Und bei actaport?",
    answer:
      "Deutlich direkter. actaport ist cloudbasiert und stellt eine REST-API bereit, über die sich Akten, Fristen und Dokumente lesen und schreiben lassen. Wir haben dafür einen fertigen Connector, der die Anbindung an n8n übernimmt.",
  },
  {
    question: "Verschickt ein Workflow etwas eigenständig?",
    answer:
      "Nicht an Gericht oder Mandant. Entwürfe werden vorbereitet und abgelegt, der Versand bleibt eine bewusste Handlung eines Berufsträgers. Innerhalb der Kanzlei darf ein Workflow selbstverständlich Aufgaben verteilen, Ablagen füllen und Erinnerungen setzen.",
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
              Kanzlei-Workflows automatisieren, von beA bis Aktenablage
            </Hero2ColumnHeadline>
            <GeoSummary>
              Automatisierte Kanzlei-Workflows übernehmen die festen Abläufe
              zwischen beA, Kanzleisoftware und Ablage: Nachrichten entpacken,
              Dokumente klassifizieren, Akten zuordnen, Aufgaben verteilen.
              Gebaut mit n8n auf Infrastruktur der Kanzlei, angebunden an
              actaport über REST-API und an RA-MICRO über Ablage und Export.
            </GeoSummary>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Beratung anfragen</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              n8n self-hosted, kein zusätzlicher Cloud-Dienst
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/digital-workflow.jpg"
              type="image"
              alt="Automatisierter Dokumentenfluss in der Anwaltskanzlei"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Softwarelage */}
      <ContentWrapper colorScheme="gray-light">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Typo.H2 className="mb-4">
            Was Ihre Kanzleisoftware für Automatisierung hergibt
          </Typo.H2>
          <Typo.Paragraph className="text-gray-600">
            Der Aufwand einer Anbindung hängt fast vollständig davon ab, welche
            Software im Haus läuft. Der ehrliche Vergleich vorab spart die
            Enttäuschung im Projekt.
          </Typo.Paragraph>
        </div>
        <DataTable>
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Kriterium</DataTable.HeaderCell>
              <DataTable.HeaderCell>actaport</DataTable.HeaderCell>
              <DataTable.HeaderCell>RA-MICRO</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            <DataTable.Row>
              <DataTable.Cell bold>Betrieb</DataTable.Cell>
              <DataTable.Cell>cloudbasiert, im Browser</DataTable.Cell>
              <DataTable.Cell>lokal oder RA-MICRO Cloud, zur Wahl</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Offene Schnittstelle</DataTable.Cell>
              <DataTable.Cell bold>REST-API vorhanden</DataTable.Cell>
              <DataTable.Cell>keine öffentlich dokumentierte REST-API</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Üblicher Anbindungsweg</DataTable.Cell>
              <DataTable.Cell>direkt über die API</DataTable.Cell>
              <DataTable.Cell>Dokumentenablage, Exporte, beA-Postfach</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Aufwand der Erstanbindung</DataTable.Cell>
              <DataTable.Cell bold>gering</DataTable.Cell>
              <DataTable.Cell>mittel, abhängig von der Ablagestruktur</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>beA</DataTable.Cell>
              <DataTable.Cell>nativ integriert</DataTable.Cell>
              <DataTable.Cell>eigenes Modul im Programm</DataTable.Cell>
            </DataTable.Row>
          </DataTable.Body>
        </DataTable>
        <Typo.Paragraph className="mx-auto mt-8 max-w-3xl text-center text-sm text-gray-500">
          Stand der öffentlich verfügbaren Herstellerangaben. Was in Ihrer
          Installation tatsächlich möglich ist, klären wir in der
          Bestandsaufnahme, bevor irgendetwas gebaut wird.
        </Typo.Paragraph>
      </ContentWrapper>

      {/* Seiten */}
      <ContentWrapper>
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Typo.H2 className="mb-4">Themen in diesem Bereich</Typo.H2>
          <Typo.Paragraph className="text-gray-600">
            Läuft bei Ihnen actaport, ist der{" "}
            <InternalLink
              href="/branchen/anwaelte/actaport-cloud-connector"
              variant="underline"
            >
              Cloud Connector zu actaport
            </InternalLink>{" "}
            der direkte Einstieg. Die Einschätzungen, die kein fester Ablauf
            leisten kann, übernehmen die{" "}
            <InternalLink
              href="/branchen/anwaelte/ki-agenten"
              variant="underline"
            >
              KI-Agenten für Kanzleien
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
          intro="Was Kanzleien uns zur Automatisierung ihrer Abläufe am häufigsten fragen."
        />
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
