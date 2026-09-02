import type { Metadata } from "next";
import Image from "next/image";
import ContentWrapper from "@/components/layout/content-wrapper";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import Typo from "@/components/ui/typo";
import GeoSummary from "@/components/ui/geo-summary";
import IntroBox from "@/components/ui/intro-box";
import ComparisonCard, {
  AfterCard,
  BeforeCard,
  ComparisonHeadline,
  ComparisonList,
  ComparisonListItem,
} from "@/components/cards/comparison-card";
import { FaqContainer } from "@/components/ui/faqs";
import ContactButton from "@/components/buttons/contact-button";
import InternalLink from "@/components/buttons/internal-link";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { ogImages } from "@/lib/og";

const TITLE = "Schriftsatz-Entwürfe mit KI";

export const metadata: Metadata = {
  title: `${TITLE} für Anwaltskanzleien | Bluebatch`,
  description:
    "Schriftsatz-Entwürfe mit KI: aus Aktenlage und den eigenen Mustern der Kanzlei entsteht ein Rohling, den der Berufsträger prüft und freigibt. Kein autonomer Versand, Endkontrolle bleibt Pflicht.",
  keywords: [
    "Schriftsatz KI",
    "Schriftsatz Entwurf automatisch",
    "KI Anwalt Textentwurf",
    "Claude Kanzlei",
  ],
  openGraph: {
    title: `${TITLE} für Anwaltskanzleien`,
    description:
      "Aus Aktenlage und eigenen Mustern entsteht ein Rohling, den der Berufsträger prüft und freigibt.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages(TITLE, "Anwälte"),
  },
  alternates: {
    canonical: "/branchen/anwaelte/claude-cowork/schriftsatz-entwuerfe",
  },
};

const bausteine = [
  {
    title: "Aktenlage als Grundlage",
    text: "Der Entwurf entsteht aus den Dokumenten des Mandats, nicht aus einer allgemeinen Vorstellung des Modells vom Sachverhalt. Geladen werden nur die Unterlagen, die der Fall braucht.",
  },
  {
    title: "Ihre Kanzleisprache",
    text: "Als Muster dienen Ihre eigenen Schriftsätze. Aufbau, Ansprache und Formulierungsgewohnheiten kommen aus dem Haus, damit der Entwurf nicht nach Standardtext klingt.",
  },
  {
    title: "Belegte Bezugnahmen",
    text: "Verweise auf Anlagen und Aktenstellen werden mit Fundstelle ausgegeben, damit die Prüfung nicht zur zweiten Recherche wird.",
  },
  {
    title: "Freigabe als Pflichtschritt",
    text: "Der Entwurf landet zur Bearbeitung beim Berufsträger. Ein Versand an Gericht oder Mandant ohne Freigabe ist im Ablauf nicht vorgesehen, nicht bloß abgeschaltet.",
  },
];

const faqs = [
  {
    question: "Schreibt die KI den Schriftsatz?",
    answer:
      "Nein, sie schreibt einen Rohling. Struktur, Sachverhaltsdarstellung und die wiederkehrenden Passagen stehen, die juristische Argumentation und die Verantwortung bleiben beim Anwalt. Die BRAK hat klargestellt, dass KI die gewissenhafte anwaltliche Leistung unterstützt, aber nicht ersetzt, und dass die Endkontrolle vor Versand Pflicht bleibt.",
  },
  {
    question: "Wie viel Zeit spart das realistisch?",
    answer:
      "Der Gewinn liegt beim ersten Drittel eines Schriftsatzes, also bei Struktur, Sachverhalt und Standardpassagen. Bei wiederkehrenden Verfahrenstypen ist das der größte Teil der Tipparbeit. Bei einem Schriftsatz, der vollständig aus neuer Argumentation besteht, ist der Gewinn klein, und dann sagen wir das auch.",
  },
  {
    question: "Braucht jedes Mandat eine Einwilligung dafür?",
    answer:
      "Sobald der Entwurf aus Mandatsinhalten entsteht, ja, so verlangt es § 43e Abs. 5 BRAO. Deshalb sitzt vor der Umgebung ein Einwilligungs-Flag pro Mandat. Wie diese Trennung technisch funktioniert, beschreibt unsere Seite zum Gateway nach § 43e BRAO.",
  },
  {
    question: "Was ist mit Halluzinationen bei Fundstellen?",
    answer:
      "Genau deshalb arbeiten wir mit Bezug auf die eigenen Dokumente statt auf freies Modellwissen. Zitierte Stellen werden mit Quellverweis ausgegeben, sodass sie am Original prüfbar sind. Für Rechtsprechung und Literatur bleibt die Prüfung an der amtlichen Quelle unverzichtbar, dabei hilft kein Modell.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <div className="mx-auto max-w-3xl text-center">
          <Typo.H1>
            Schriftsatz-Entwürfe mit KI: der Rohling kommt aus der Akte
          </Typo.H1>
          <GeoSummary align="center" className="mt-4">
            Ein KI-gestützter Schriftsatz-Entwurf entsteht in der
            Anwaltskanzlei aus der Aktenlage und den eigenen Mustern des
            Hauses: Struktur, Sachverhalt und wiederkehrende Passagen stehen,
            der Berufsträger prüft und gibt frei. Ein Versand an Gericht oder
            Mandant ohne Freigabe ist ausgeschlossen.
          </GeoSummary>
          <ContactButton icon="chat">Beratung anfragen</ContactButton>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <Image
              src="/images/schriftsatz-entwuerfe/foto.png"
              alt="Ausgedruckter Schriftsatz-Entwurf mit handschriftlichen Korrekturen"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 768px, 100vw"
            />
          </div>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Vorher und nachher</IntroBox.PreHeadline>
          <IntroBox.Headline>Was sich im Alltag ändert</IntroBox.Headline>
        </IntroBox>
        <div className="mt-12">
          <ComparisonCard>
            <BeforeCard>
              <ComparisonHeadline>Heute</ComparisonHeadline>
              <ComparisonList>
                <ComparisonListItem>
                  Der Entwurf beginnt beim weißen Blatt oder bei einem alten
                  Schriftsatz, der mühsam umgeschrieben wird.
                </ComparisonListItem>
                <ComparisonListItem>
                  Der Sachverhalt wird aus der Akte neu zusammengetragen, obwohl
                  alles schon dokumentiert ist.
                </ComparisonListItem>
                <ComparisonListItem>
                  Wer schnell sein will, kopiert Passagen in einen privaten
                  ChatGPT-Account.
                </ComparisonListItem>
              </ComparisonList>
            </BeforeCard>
            <AfterCard>
              <ComparisonHeadline>Mit Entwurfs-Workflow</ComparisonHeadline>
              <ComparisonList>
                <ComparisonListItem>
                  Struktur und Sachverhaltsdarstellung stehen als Rohling
                  bereit, gespeist aus den Dokumenten des Mandats.
                </ComparisonListItem>
                <ComparisonListItem>
                  Bezugnahmen kommen mit Fundstelle, die Prüfung geht schneller
                  als das Schreiben.
                </ComparisonListItem>
                <ComparisonListItem>
                  Der erlaubte Weg ist der bequemere, damit erledigt sich die
                  Schatten-KI von selbst.
                </ComparisonListItem>
              </ComparisonList>
            </AfterCard>
          </ComparisonCard>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox size="small">
          <IntroBox.PreHeadline>Aufbau</IntroBox.PreHeadline>
          <IntroBox.Headline>Woraus der Entwurf entsteht</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={2} className="mt-12">
          {bausteine.map((b) => (
            <SimpleCard key={b.title} align="left" className="h-full">
              <Typo.H3 className="mt-0!">{b.title}</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                {b.text}
              </Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <Image
              src="/images/schriftsatz-entwuerfe/ablauf.png"
              alt="Woraus ein Schriftsatz-Entwurf in der Kanzlei entsteht"
              fill
              className="object-contain"
              sizes="(min-width: 768px) 768px, 100vw"
            />
          </div>
        </div>
        <Typo.Paragraph className="mx-auto mt-10 max-w-2xl text-center text-gray-600">
          Die Muster und Vorlagen dafür kommen aus der{" "}
          <InternalLink
            href="/branchen/anwaelte/private-ai/kanzlei-wissensdatenbank"
            variant="underline"
          >
            Wissensdatenbank der Kanzlei
          </InternalLink>
          , der berufsrechtliche Rahmen aus dem{" "}
          <InternalLink
            href="/branchen/anwaelte/ki-anwaltskanzlei-43e-brao"
            variant="underline"
          >
            Gateway nach § 43e BRAO
          </InternalLink>
          .
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer
          faqs={faqs}
          intro="Was Kanzleien uns zu KI-gestützten Entwürfen am häufigsten fragen."
        />
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
