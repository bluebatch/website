import type { Metadata } from "next";
import Image from "next/image";
import ContentWrapper from "@/components/layout/content-wrapper";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import Typo from "@/components/ui/typo";
import GeoSummary from "@/components/ui/geo-summary";
import IntroBox from "@/components/ui/intro-box";
import ProseColumns from "@/components/ui/prose-columns";
import { FaqContainer } from "@/components/ui/faqs";
import ContactButton from "@/components/buttons/contact-button";
import InternalLink from "@/components/buttons/internal-link";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { ogImages } from "@/lib/og";

const TITLE = "Rechtsrecherche mit KI";

export const metadata: Metadata = {
  title: `${TITLE} in der Anwaltskanzlei | Bluebatch`,
  description:
    "Rechtsrecherche mit KI in der Kanzlei: Einstieg in eine Rechtsfrage mit prüfbaren Fundstellen, getrennt nach Recherche ohne Mandantenbezug und mandatsbezogener Arbeit hinter dem Einwilligungs-Flag.",
  keywords: [
    "Rechtsrecherche KI",
    "KI Recherche Anwalt",
    "juristische Recherche KI",
    "Legal Research Deutschland",
  ],
  openGraph: {
    title: `${TITLE} in der Anwaltskanzlei`,
    description:
      "Einstieg in eine Rechtsfrage mit prüfbaren Fundstellen, sauber getrennt nach Mandatsbezug.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages(TITLE, "Anwälte"),
  },
  alternates: {
    canonical: "/branchen/anwaelte/claude-cowork/rechtsrecherche-mit-ki",
  },
};

const grenzen = [
  {
    title: "Was KI gut kann",
    text: "Eine unbekannte Rechtsfrage strukturieren, Suchbegriffe und Anspruchsgrundlagen vorschlagen, lange Entscheidungen zusammenfassen und Argumentationslinien gegenüberstellen. Also alles, was vor der eigentlichen Prüfung liegt.",
  },
  {
    title: "Was KI nicht kann",
    text: "Für Aktualität und Richtigkeit einer Fundstelle einstehen. Ein Modell kennt keinen Instanzenzug und weiß nicht, ob eine Entscheidung aufgehoben wurde. Die Prüfung an der amtlichen Quelle oder in der Fachdatenbank bleibt unverzichtbar.",
  },
  {
    title: "Wo wir deshalb aufsetzen",
    text: "Auf dem, was die Kanzlei selbst geschrieben und geprüft hat. Antworten aus den eigenen Schriftsätzen und Vermerken sind belastbar, weil dahinter eine anwaltliche Prüfung steht, die es einmal schon gab.",
  },
];

const faqs = [
  {
    question: "Ersetzt das eine juristische Fachdatenbank?",
    answer:
      "Nein. Eine Fachdatenbank steht für Vollständigkeit und Aktualität der Fundstellen ein, ein Sprachmodell nicht. Was KI ergänzt, ist der Einstieg: die Frage strukturieren, Suchbegriffe finden, lange Entscheidungen erschließen und das eigene Kanzleiwissen einbeziehen. Beides zusammen ist schneller als jedes für sich.",
  },
  {
    question: "Wie gehen Sie mit erfundenen Fundstellen um?",
    answer:
      "Indem wir das Modell nicht frei zitieren lassen. Antworten stützen sich auf angebundene Dokumente mit Quellverweis, damit jede Aussage am Original prüfbar ist. Für externe Rechtsprechung gilt die Regel ohne Ausnahme: keine Fundstelle ohne Nachprüfung an der amtlichen Quelle.",
  },
  {
    question: "Darf ich den Mandantennamen weglassen und einfach recherchieren?",
    answer:
      "Vorsicht. Den Namen zu schwärzen macht eine Anfrage nicht mandantenlos. Aktenzeichen, Beträge, Gegenseite und ein spezifischer Sachverhalt machen die Akte identifizierbar. Sobald diese Merkmale zusammenkommen, liegt eine mandatsbezogene Nutzung vor und § 43e Abs. 5 BRAO greift. Deshalb trennt die Umgebung zwei Räume, statt sich auf Einschätzungen im Einzelfall zu verlassen.",
  },
  {
    question: "Wie kommt das Team in die Nutzung?",
    answer:
      "Über Vorlagen statt über Prompt-Schulungen. Die wiederkehrenden Rechercheaufgaben Ihrer Kanzlei werden als feste Abläufe hinterlegt, damit alle dasselbe Werkzeug gleich nutzen und die Ergebnisse vergleichbar bleiben.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <div className="mx-auto max-w-3xl text-center">
          <Typo.H1>
            Rechtsrecherche mit KI: schneller einsteigen, gleich gründlich
            prüfen
          </Typo.H1>
          <GeoSummary align="center" className="mt-4">
            KI-gestützte Rechtsrecherche übernimmt in der Anwaltskanzlei den
            Einstieg: eine Rechtsfrage strukturieren, Anspruchsgrundlagen
            vorschlagen, lange Entscheidungen erschließen und das eigene
            Kanzleiwissen einbeziehen. Die Bewertung bleibt anwaltliche
            Leistung, und Fundstellen werden an der amtlichen Quelle geprüft.
          </GeoSummary>
          <ContactButton icon="chat">Beratung anfragen</ContactButton>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <Image
              src="/images/rechtsrecherche-mit-ki/foto.png"
              alt="Leerer Lesesaal einer juristischen Bibliothek"
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
          <IntroBox.PreHeadline>Ehrliche Einordnung</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo KI in der Recherche trägt und wo nicht
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Wir verkaufen keine KI, die Rechtsfragen beantwortet. Wir bauen
            eine, die die Vorarbeit abnimmt und dabei nachvollziehbar bleibt.
          </IntroBox.Paragraph>
        </IntroBox>
        <SimpleGrid cols={3} className="mt-12">
          {grenzen.map((g) => (
            <SimpleCard key={g.title} align="left" className="h-full">
              <Typo.H3 className="mt-0!">{g.title}</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                {g.text}
              </Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <Image
              src="/images/rechtsrecherche-mit-ki/ablauf.png"
              alt="Ablauf der KI-gestützten Rechtsrecherche bis zur belegten Fundstelle"
              fill
              className="object-contain"
              sizes="(min-width: 768px) 768px, 100vw"
            />
          </div>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox size="small">
          <IntroBox.PreHeadline>Zwei Räume</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Recherche mit und ohne Mandatsbezug
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Der Unterschied ist berufsrechtlich entscheidend und darf deshalb
            nicht von der Tagesform abhängen. Die Umgebung trennt ihn
            technisch.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="mx-auto mt-12 max-w-4xl">
          <ProseColumns cols={2} wide>
            <ProseColumns.Item title="Offener Raum">
              <Typo.Paragraph className="text-gray-600">
                Allgemeine Rechtsfragen ohne jeden Bezug zu einem konkreten
                Mandat: Wie ist die Rechtslage bei einer bestimmten
                Vertragsklausel, welche Anspruchsgrundlagen kommen typischerweise
                in Betracht. Hier braucht es kein Einwilligungs-Flag, die
                Pflichten aus § 43e Abs. 2 und 3 BRAO gelten trotzdem.
              </Typo.Paragraph>
            </ProseColumns.Item>
            <ProseColumns.Item title="Mandatsbezogener Raum">
              <Typo.Paragraph className="text-gray-600">
                Sobald Sachverhalt, Aktenzeichen oder Beteiligte in die Anfrage
                gehören, wechselt die Arbeit in den geschützten Raum, den das
                Gateway nur mit gesetztem Einwilligungs-Flag öffnet. Das ist
                keine Hürde für den Alltag, sondern die Stelle, an der die
                Entscheidung dokumentiert wird.
              </Typo.Paragraph>
            </ProseColumns.Item>
          </ProseColumns>
        </div>
        <Typo.Paragraph className="mx-auto mt-10 max-w-2xl text-center text-gray-600">
          Wie das Gateway diese Trennung durchsetzt, steht auf der Seite zu{" "}
          <InternalLink
            href="/branchen/anwaelte/ki-anwaltskanzlei-43e-brao"
            variant="underline"
          >
            KI in der Anwaltskanzlei nach § 43e BRAO
          </InternalLink>
          . Der Entwurf, der auf einer Recherche aufsetzt, entsteht im{" "}
          <InternalLink
            href="/branchen/anwaelte/claude-cowork/schriftsatz-entwuerfe"
            variant="underline"
          >
            Workflow für Schriftsatz-Entwürfe
          </InternalLink>
          .
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer
          faqs={faqs}
          intro="Was Kanzleien uns zur KI-gestützten Recherche am häufigsten fragen."
        />
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
