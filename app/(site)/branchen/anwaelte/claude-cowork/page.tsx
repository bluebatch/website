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
import ProseColumns from "@/components/ui/prose-columns";
import { FaqContainer } from "@/components/ui/faqs";
import ContactButton from "@/components/buttons/contact-button";
import InternalLink from "@/components/buttons/internal-link";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { ogImages } from "@/lib/og";

const TITLE = "Claude Cowork für Anwaltskanzleien";

export const metadata: Metadata = {
  title: `${TITLE}: KI als Werkzeug fürs Team | Bluebatch`,
  description:
    "Claude Cowork für Anwaltskanzleien: eine verwaltete, § 203-konforme KI-Umgebung für Schriftsatz-Entwürfe, Recherche und Zusammenfassungen. Ohne eigene Server, mit Freigabe vor Versand.",
  keywords: [
    "Claude Cowork Kanzlei",
    "KI Schriftsatz",
    "KI Rechtsrecherche",
    "ChatGPT Alternative Anwalt",
  ],
  openGraph: {
    title: `${TITLE}: KI als Werkzeug fürs Team`,
    description:
      "Verwaltete, § 203-konforme KI-Umgebung für Schriftsatz-Entwürfe, Recherche und Zusammenfassungen.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages(TITLE, "Anwälte"),
  },
  alternates: {
    canonical: "/branchen/anwaelte/claude-cowork",
  },
};

const seiten = [
  {
    href: "/branchen/anwaelte/claude-cowork/schriftsatz-entwuerfe",
    tag: "Angebot",
    title: "Schriftsatz-Entwürfe mit KI",
    description:
      "Aus Aktenlage und Ihren eigenen Mustern entsteht ein Entwurf, den der Berufsträger prüft und freigibt. Die Kanzleisprache kommt aus Ihren Schriftsätzen, nicht aus dem Modell.",
    linkLabel: "Schriftsatz-Entwürfe mit KI ansehen",
  },
  {
    href: "/branchen/anwaelte/claude-cowork/rechtsrecherche-mit-ki",
    tag: "Anwendungsfall",
    title: "Rechtsrecherche mit KI",
    description:
      "Recherche ohne Mandantenbezug im offenen Raum, mandatsbezogene Fragen hinter dem Einwilligungs-Flag. Immer mit Fundstellen, die sich am Original prüfen lassen.",
    linkLabel: "Rechtsrecherche mit KI ansehen",
  },
];

const faqs = [
  {
    question: "Was ist Claude Cowork für eine Kanzlei?",
    answer:
      "Eine verwaltete KI-Arbeitsumgebung auf Basis von Claude, die wir für die Kanzlei einrichten und betreiben: mit Zugang über Ihr Kanzlei-Verzeichnis, ohne Training mit Ihren Daten, mit Rollen und Protokollierung. Anders als Private AI braucht sie keine eigene Hardware, anders als ein privater ChatGPT-Account läuft sie in einem vertraglich abgesicherten Rahmen.",
  },
  {
    question: "Wo ist der Unterschied zu Private AI?",
    answer:
      "Private AI heißt: Das Modell läuft auf Ihrer eigenen Infrastruktur. Claude Cowork heißt: Sie nutzen ein starkes Frontier-Modell in einer verwalteten Umgebung mit EU-Region und der Vertragskette nach § 43e Abs. 3. Der erste Weg gibt maximale Kontrolle, der zweite maximale Modellqualität bei geringerem Betriebsaufwand.",
  },
  {
    question: "Darf ich damit Akteninhalte verarbeiten?",
    answer:
      "Sobald eine Nutzung unmittelbar einem Mandat dient, verlangt § 43e Abs. 5 BRAO die Einwilligung des Mandanten. Die Umgebung trennt deshalb zwei Räume: allgemeine Arbeit ohne Mandatsbezug und mandatsbezogene Arbeit hinter einem Einwilligungs-Flag. Wie diese Trennung technisch aussieht, steht auf unserer Seite zum Gateway nach § 43e BRAO.",
  },
  {
    question: "Wie schnell ist das Team eingearbeitet?",
    answer:
      "Die Umgebung selbst steht in wenigen Tagen. Entscheidend ist die Einarbeitung: Wir schulen an echten Kanzleifällen statt an Beispielprompts und hinterlegen die wiederkehrenden Aufgaben als feste Vorlagen, damit nicht jeder im Team seinen eigenen Prompt-Stil erfindet.",
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
              Claude Cowork: KI als Werkzeug für das Kanzlei-Team
            </Hero2ColumnHeadline>
            <GeoSummary>
              Claude Cowork ist eine verwaltete KI-Arbeitsumgebung für
              Anwaltskanzleien: Zugang über das Kanzlei-Verzeichnis, EU-Region,
              kein Training mit Kanzleidaten und die Vertragskette nach § 43e
              Abs. 3 BRAO. Gedacht für Schriftsatz-Entwürfe, Recherche und
              Zusammenfassungen, immer mit Freigabe durch den Berufsträger.
            </GeoSummary>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Beratung anfragen</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Ohne eigene Server, ohne privaten ChatGPT-Account
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/berufsrecht/brao-textform.jpg"
              type="image"
              alt="Anwalt bereitet ein Dokument am Kanzleitisch vor"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Problem: Schatten-KI */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <Typo.H2 className="mb-4 text-center">
          Die Alternative zum privaten ChatGPT-Account
        </Typo.H2>
        <Typo.Paragraph className="text-center text-gray-600">
          In den meisten Kanzleien wird längst mit KI gearbeitet, nur nicht
          offiziell. Ein Verbot ohne Alternative verlagert das Problem
          bloß, weil der Zeitdruck bleibt. Claude Cowork ist der erlaubte Weg,
          der bequemer ist als der verbotene: ein Zugang für alle, eine
          nachvollziehbare Umgebung und Vorlagen für die Aufgaben, die täglich
          anfallen.
        </Typo.Paragraph>
      </ContentWrapper>

      {/* Wofür */}
      <ContentWrapper>
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Typo.H2 className="mb-4">Wofür das Team es täglich nutzt</Typo.H2>
        </div>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Entwürfe statt weißes Blatt">
            Schriftsätze, Anschreiben und Vermerke entstehen als Rohling aus
            Aktenlage und Kanzleimustern. Der Berufsträger arbeitet am Entwurf
            weiter, statt bei null anzufangen.
          </ProseColumns.Item>
          <ProseColumns.Item title="Lange Dokumente erschließen">
            Umfangreiche Anlagen, Gutachten oder Gegenschriftsätze
            zusammenfassen und gezielt durchsuchen, mit Verweis auf die Stelle
            im Original.
          </ProseColumns.Item>
          <ProseColumns.Item title="Recherche mit Fundstellen">
            Einstieg in eine Rechtsfrage mit Fundstellen, die sich prüfen
            lassen. Die Bewertung bleibt anwaltliche Leistung, die Vorarbeit
            nicht.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      {/* Seiten */}
      <ContentWrapper colorScheme="gray-light">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Typo.H2 className="mb-4">Themen in diesem Bereich</Typo.H2>
          <Typo.Paragraph className="text-gray-600">
            Wer lieber vollständig im eigenen Haus bleibt, findet die
            Alternative unter{" "}
            <InternalLink
              href="/branchen/anwaelte/private-ai"
              variant="underline"
            >
              Private AI für Anwaltskanzleien
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

      <ContentWrapper bodyWidth="small">
        <FaqContainer
          faqs={faqs}
          intro="Was Kanzleien uns zu einer verwalteten KI-Umgebung am häufigsten fragen."
        />
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
