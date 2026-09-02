import type { Metadata } from "next";
import Image from "next/image";
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
import ProseColumns from "@/components/ui/prose-columns";
import { FaqContainer } from "@/components/ui/faqs";
import ContactButton from "@/components/buttons/contact-button";
import InternalLink from "@/components/buttons/internal-link";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { ogImages } from "@/lib/og";

const TITLE = "Private AI für Anwaltskanzleien";

export const metadata: Metadata = {
  title: `${TITLE}: KI auf eigener Infrastruktur | Bluebatch`,
  description:
    "Private AI für Anwaltskanzleien: Sprachmodelle auf Infrastruktur, die die Kanzlei kontrolliert. Mandatsdaten bleiben im Haus oder in der EU, konform mit § 203 StGB und § 43e BRAO.",
  keywords: [
    "Private AI Anwaltskanzlei",
    "KI Kanzlei DSGVO",
    "lokale LLM Kanzlei",
    "§ 203 StGB KI",
  ],
  openGraph: {
    title: `${TITLE}: KI auf eigener Infrastruktur`,
    description:
      "Sprachmodelle auf Infrastruktur, die die Kanzlei kontrolliert. Mandatsdaten bleiben im Haus oder in der EU.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages(TITLE, "Anwälte"),
  },
  alternates: {
    canonical: "/branchen/anwaelte/private-ai",
  },
};

const seiten = [
  {
    href: "/branchen/anwaelte/private-ai/private-ai-implementierung",
    tag: "Angebot",
    title: "Private AI einführen",
    description:
      "Von der Hardware-Entscheidung bis zum ersten produktiven Use Case: Wir bauen die geschützte KI-Umgebung Ihrer Kanzlei und übergeben sie betriebsfähig.",
    linkLabel: "Private AI für die Kanzlei einführen",
  },
  {
    href: "/branchen/anwaelte/private-ai/kanzlei-wissensdatenbank",
    tag: "Anwendungsfall",
    title: "Kanzlei-Wissensdatenbank",
    description:
      "Schriftsätze, Vermerke und Musterformulierungen per RAG durchsuchbar machen, mit Quellenangabe und ohne dass Mandatswissen das Haus verlässt.",
    linkLabel: "Wissensdatenbank für die Kanzlei ansehen",
  },
  {
    href: "/branchen/anwaelte/ki-anwaltskanzlei-43e-brao",
    tag: "Berufsrecht",
    title: "KI nach § 43e BRAO",
    description:
      "Die Vertragskette und das Gateway, das den Zugang regelt: Textform mit § 203-Belehrung, Einwilligungs-Flag pro Mandat, Kill-Switch und Freigabe vor Versand.",
    linkLabel: "KI-Gateway nach § 43e BRAO ansehen",
  },
];

const faqs = [
  {
    question: "Was bedeutet Private AI für eine Anwaltskanzlei?",
    answer:
      "Private AI heißt: Das Sprachmodell läuft auf Infrastruktur, die die Kanzlei kontrolliert, entweder auf eigener Hardware im Haus oder auf einem dedizierten Server in der EU. Mandatsdaten werden nicht an einen öffentlichen Dienst gesendet und fließen nicht in das Training fremder Modelle. Damit lässt sich die Verschwiegenheitspflicht aus § 43a BRAO und § 203 StGB technisch abbilden statt nur vertraglich.",
  },
  {
    question: "Braucht eine kleine Kanzlei dafür eigene Hardware?",
    answer:
      "Nicht zwingend. Für zwei bis zehn Berufsträger reicht in der Regel ein dedizierter GPU-Server in einem deutschen Rechenzentrum, den wir betreiben. Eigene Hardware lohnt sich, wenn die Kanzlei ohnehin einen Serverraum hat oder wenn intern gilt, dass Daten das Haus physisch nicht verlassen dürfen. Was passt, klären wir vor der Umsetzung.",
  },
  {
    question: "Welche Modelle laufen auf einer privaten Umgebung?",
    answer:
      "Offene Modelle wie Llama und Mistral, betrieben über Ollama oder vLLM. Für juristische Textarbeit auf Deutsch reichen die aktuellen offenen Modelle in vielen Fällen aus. Wo mehr Qualität nötig ist, lässt sich ein Frontier-Modell über eine EU-API hinter derselben Vertragskette einbinden, entschieden pro Use Case.",
  },
  {
    question: "Ersetzt Private AI die Prüfung durch den Anwalt?",
    answer:
      "Nein. Private AI löst die Frage, wo Daten verarbeitet werden, nicht die Frage, wer verantwortet. Die eigenverantwortliche Prüfung und die Endkontrolle vor Versand bleiben beim Berufsträger, unabhängig davon, wie geschützt die Umgebung ist.",
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
              Private AI für Anwaltskanzleien: KI, die das Haus nicht verlässt
            </Hero2ColumnHeadline>
            <GeoSummary>
              Private AI bedeutet für Anwaltskanzleien: Das Sprachmodell läuft
              auf Infrastruktur, die die Kanzlei kontrolliert, on-premise oder
              auf einem dedizierten Server in der EU. Mandatsdaten gehen nicht
              an einen öffentlichen Dienst und nicht ins Training fremder
              Modelle, konform mit § 203 StGB und § 43e BRAO.
            </GeoSummary>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Beratung anfragen</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Umsetzung, Wissensdatenbank und die Vertragskette nach § 43e BRAO
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/berufsrecht/brao-bibliothek.jpg"
              type="image"
              alt="Bibliothek einer Anwaltskanzlei mit gebundenen Gesetzessammlungen"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Warum die Frage zuerst kommt */}
      <ContentWrapper colorScheme="gray-light">
        <SimpleGrid cols={2} className="items-center gap-8 md:gap-12">
          <div>
            <Typo.H2 className="mt-0! mb-4">
              Wo läuft die KI? Die Frage vor allen anderen
            </Typo.H2>
            <Typo.Paragraph className="mb-4 text-gray-600">
              Bevor eine Kanzlei über Schriftsatz-Entwürfe oder
              Posteingangs-Agenten nachdenkt, steht eine Grundsatzfrage: In
              welcher Umgebung dürfen Akteninhalte überhaupt verarbeitet
              werden? Für Consumer-Dienste mit unklarem Datenfluss lautet die
              Antwort bei Mandatsdaten in aller Regel: nicht dort.
            </Typo.Paragraph>
            <Typo.Paragraph className="text-gray-600">
              Private AI beantwortet die Frage strukturell statt vertraglich.
              Darauf bauen dann{" "}
              <InternalLink
                href="/branchen/anwaelte/ki-agenten"
                variant="underline"
              >
                KI-Agenten für die Kanzlei
              </InternalLink>{" "}
              und{" "}
              <InternalLink
                href="/branchen/anwaelte/workflows"
                variant="underline"
              >
                automatisierte Kanzlei-Workflows
              </InternalLink>{" "}
              auf, mit derselben geschützten Basis.
            </Typo.Paragraph>
          </div>
          <div className="relative mx-auto aspect-video w-4/5 md:w-full">
            <Image
              src="/images/machine-learning.jpg"
              alt="Private KI-Infrastruktur für Anwaltskanzleien"
              fill
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Zwei Betriebsarten */}
      <ContentWrapper>
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Typo.H2 className="mb-4">Zwei Wege, dieselbe Zusage</Typo.H2>
          <Typo.Paragraph className="text-gray-600">
            Welcher Weg passt, hängt weniger vom Budget ab als von der Haltung
            der Kanzlei und davon, wie viel eigene IT vorhanden ist.
          </Typo.Paragraph>
        </div>
        <ProseColumns cols={2} wide>
          <ProseColumns.Item title="On-premise im eigenen Haus">
            <Typo.Paragraph className="text-gray-600">
              Ein GPU-Server im Kanzleinetz, offene Modelle über Ollama oder
              vLLM, Zugriff nur aus dem eigenen Verzeichnisdienst. Für
              Kanzleien, bei denen intern gilt, dass Mandatsdaten das Haus
              physisch nicht verlassen. Wir richten ein, dokumentieren und
              übergeben, auf Wunsch mit laufender Wartung.
            </Typo.Paragraph>
          </ProseColumns.Item>
          <ProseColumns.Item title="Dedizierter EU-Server">
            <Typo.Paragraph className="text-gray-600">
              Dieselbe Software auf einem Server, den wir in einem deutschen
              Rechenzentrum für Ihre Kanzlei allein betreiben. Keine geteilte
              Umgebung, keine Nutzung Ihrer Daten für fremdes Training, AVV und
              die Anlage nach § 43e Abs. 3 inklusive. Der übliche Weg für
              Kanzleien ohne eigenen Serverraum.
            </Typo.Paragraph>
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      {/* Seiten des Hubs */}
      <ContentWrapper colorScheme="gray-light">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Typo.H2 className="mb-4">Themen in diesem Bereich</Typo.H2>
          <Typo.Paragraph className="text-gray-600">
            Von der Umsetzung über den ersten Anwendungsfall bis zum
            berufsrechtlichen Rahmen.
          </Typo.Paragraph>
        </div>
        <SimpleGrid cols={3}>
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

      <ContentWrapper bodyWidth="small">
        <FaqContainer
          faqs={faqs}
          intro="Was Kanzleien uns zu eigener KI-Infrastruktur am häufigsten fragen."
        />
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
