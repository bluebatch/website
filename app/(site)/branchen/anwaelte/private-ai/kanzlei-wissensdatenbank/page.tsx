import type { Metadata } from "next";
import Image from "next/image";
import ContentWrapper from "@/components/layout/content-wrapper";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import Typo from "@/components/ui/typo";
import GeoSummary from "@/components/ui/geo-summary";
import IntroBox from "@/components/ui/intro-box";
import { FlowDiagram } from "@/components/diagrams";
import { FaqContainer } from "@/components/ui/faqs";
import ContactButton from "@/components/buttons/contact-button";
import InternalLink from "@/components/buttons/internal-link";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { ogImages } from "@/lib/og";
import { FolderSearch, Layers, MessageSquare, Quote } from "lucide-react";

const TITLE = "Wissensdatenbank für Anwaltskanzleien";

export const metadata: Metadata = {
  title: `${TITLE}: eigene Schriftsätze durchsuchbar | Bluebatch`,
  description:
    "Eine Wissensdatenbank für Anwaltskanzleien macht Schriftsätze, Vermerke und Musterformulierungen per RAG durchsuchbar, mit Fundstelle und auf Infrastruktur, die die Kanzlei kontrolliert.",
  keywords: [
    "Wissensdatenbank Kanzlei",
    "RAG Anwaltskanzlei",
    "Schriftsätze durchsuchen KI",
    "Kanzleiwissen KI",
  ],
  openGraph: {
    title: `${TITLE}: eigene Schriftsätze durchsuchbar`,
    description:
      "Schriftsätze, Vermerke und Muster per RAG durchsuchbar, mit Fundstelle, auf eigener Infrastruktur.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages(TITLE, "Anwälte"),
  },
  alternates: {
    canonical: "/branchen/anwaelte/private-ai/kanzlei-wissensdatenbank",
  },
};

const quellen = [
  {
    title: "Eigene Schriftsätze",
    text: "Die stärkste Quelle der Kanzlei. Wie haben wir gegen diese Argumentation schon einmal geschrieben, und mit welchem Ergebnis? Genau das liegt heute in Ordnern, die niemand durchsucht.",
  },
  {
    title: "Vermerke und Gutachten",
    text: "Interne Einschätzungen zu Spezialfragen, oft von einem Berufsträger für einen konkreten Fall erarbeitet und danach nie wieder gefunden.",
  },
  {
    title: "Muster und Textbausteine",
    text: "Vorlagen, Klauselsammlungen und die Formulierungen, die in Ihrer Kanzlei üblich sind. Damit klingt ein Entwurf nach Ihrem Haus und nicht nach Modell.",
  },
  {
    title: "Mandantenunabhängige Recherche",
    text: "Zusammenstellungen zu wiederkehrenden Rechtsfragen, die sonst bei jedem neuen Fall von vorn beginnen.",
  },
];

const faqs = [
  {
    question: "Was ist RAG in diesem Zusammenhang?",
    answer:
      "RAG steht für Retrieval-Augmented Generation. Bei einer Frage sucht das System zuerst die passenden Stellen in den Kanzleidokumenten und formuliert daraus eine Antwort mit Verweis auf das Quelldokument. Das Modell antwortet also aus dem Wissen Ihrer Kanzlei, nicht aus seinem Trainingswissen. Das ist der Unterschied zwischen einer nachvollziehbaren Auskunft und einer erfundenen.",
  },
  {
    question: "Sieht jeder in der Kanzlei alle Inhalte?",
    answer:
      "Nein. Die Wissensdatenbank übernimmt die Zugriffsrechte aus Ihrer Ablage. Wer ein Dokument nicht öffnen darf, bekommt es auch nicht als Quelle in einer Antwort. Gerade bei Mandaten mit besonderer Sensibilität oder bei Interessenkonflikten ist das keine Komfortfrage.",
  },
  {
    question: "Ist das mit der Verschwiegenheitspflicht vereinbar?",
    answer:
      "Wenn die Wissensdatenbank auf Infrastruktur läuft, die die Kanzlei kontrolliert, ja. Eine solche Datenbank enthält konzentriert das Sensibelste, was eine Kanzlei hat. Genau deshalb bauen wir sie ausschließlich innerhalb einer privaten Umgebung und nicht auf einem öffentlichen Dienst.",
  },
  {
    question: "Wie viele Dokumente braucht es, damit es sich lohnt?",
    answer:
      "Es geht weniger um die Menge als um die Wiederholung. Wenn dieselben Rechtsfragen in Ihrer Kanzlei mehrfach im Jahr auftauchen, lohnt sich die Datenbank bereits bei wenigen hundert Dokumenten. Bei reiner Einzelfallarbeit ohne Wiederholung ist der Nutzen kleiner, das sagen wir dann auch.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <div className="mx-auto max-w-3xl text-center">
          <Typo.H1>
            Wissensdatenbank für die Kanzlei: die eigenen Schriftsätze
            durchsuchbar machen
          </Typo.H1>
          <GeoSummary align="center" className="mt-4">
            Eine Kanzlei-Wissensdatenbank macht Schriftsätze, Vermerke und
            Musterformulierungen per RAG durchsuchbar: Mitarbeitende fragen in
            normaler Sprache und bekommen eine Antwort aus den eigenen
            Dokumenten, mit Verweis auf die Fundstelle. Sie läuft innerhalb der
            privaten KI-Umgebung der Kanzlei, konform mit § 203 StGB.
          </GeoSummary>
          <ContactButton icon="chat">Beratung anfragen</ContactButton>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <Image
              src="/images/anwaelte-kanzlei-wissensdatenbank/foto.png"
              alt="Archivregale mit beschrifteten Aktenkästen"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 768px, 100vw"
            />
          </div>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <Typo.H2 className="mb-4 text-center">
          Das Wissen ist da, nur findet es niemand
        </Typo.H2>
        <Typo.Paragraph className="text-center text-gray-600">
          Die überzeugendste Argumentation Ihrer Kanzlei steht in einem
          Schriftsatz von vor drei Jahren. Wer heute vor derselben Frage steht,
          fragt einen Kollegen, sucht in Ordnerstrukturen oder erarbeitet alles
          noch einmal. Das ist keine Frage der Sorgfalt, sondern der
          Auffindbarkeit: Volltextsuche findet Wörter, nicht Gedanken.
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox size="small">
          <IntroBox.PreHeadline>So funktioniert es</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Von der Ablage zur Antwort mit Fundstelle
          </IntroBox.Headline>
        </IntroBox>
        <FlowDiagram
          className="mt-12"
          nodes={[
            {
              icon: <FolderSearch className="h-5 w-5" />,
              label: "Quellen anbinden",
              sublabel: "Ablage, DMS, Kanzleisoftware",
            },
            {
              icon: <Layers className="h-5 w-5" />,
              label: "Index aufbauen",
              sublabel: "nach Bedeutung, nicht nach Stichwort",
            },
            {
              icon: <MessageSquare className="h-5 w-5" />,
              label: "Frage stellen",
              sublabel: "in normaler Sprache",
              highlight: true,
            },
            {
              icon: <Quote className="h-5 w-5" />,
              label: "Antwort mit Quelle",
              sublabel: "jede Aussage pruefbar am Original",
            },
          ]}
          caption="Die Dokumente bleiben, wo sie sind. Die Wissensdatenbank erschließt sie, statt eine zweite Ablage aufzumachen."
        />
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Inhalte</IntroBox.PreHeadline>
          <IntroBox.Headline>Was hineingehört</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={2} className="mt-12">
          {quellen.map((q) => (
            <SimpleCard key={q.title} align="left" className="h-full">
              <Typo.H3 className="mt-0!">{q.title}</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                {q.text}
              </Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <Image
              src="/images/anwaelte-kanzlei-wissensdatenbank/ablauf.png"
              alt="Welche Quellen in die Kanzlei-Wissensdatenbank einfließen"
              fill
              className="object-contain"
              sizes="(min-width: 768px) 768px, 100vw"
            />
          </div>
        </div>
      </ContentWrapper>

      <ContentWrapper bodyWidth="small">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Voraussetzung</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Warum das nur auf eigener Infrastruktur geht
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Eine Wissensdatenbank bündelt genau das, was der Verschwiegenheit
            unterliegt: Mandatsfälle, Einschätzungen, interne Diskussionen. Die
            Infrastrukturfrage ist deshalb keine Nebensache, sondern die
            Voraussetzung. Wie diese Umgebung entsteht, beschreibt die Seite zur{" "}
            <InternalLink
              href="/branchen/anwaelte/private-ai/private-ai-implementierung"
              variant="underline"
            >
              Einführung von Private AI in der Kanzlei
            </InternalLink>
            . Wer für die tägliche Textarbeit lieber eine verwaltete Umgebung
            möchte, findet sie unter{" "}
            <InternalLink
              href="/branchen/anwaelte/claude-cowork"
              variant="underline"
            >
              Claude Cowork für Anwaltskanzleien
            </InternalLink>
            .
          </IntroBox.Paragraph>
        </IntroBox>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer
          faqs={faqs}
          intro="Was Kanzleien uns zur Wissensdatenbank am häufigsten fragen."
        />
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
