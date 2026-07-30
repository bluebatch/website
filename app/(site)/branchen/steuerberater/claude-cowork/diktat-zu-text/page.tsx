import type { Metadata } from "next";
import Image from "next/image";
import { Briefcase, Inbox, Keyboard, Mic } from "lucide-react";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import IntroBox from "@/components/ui/intro-box";
import GeoSummary from "@/components/ui/geo-summary";
import ContactButton from "@/components/buttons/contact-button";
import InternalLink from "@/components/buttons/internal-link";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { FaqContainer } from "@/components/ui/faqs";
import type { PageConfig } from "@/lib/get-subpages";

export const pageConfig: PageConfig = {
  title: "Diktat zu Text",
  description:
    "Spracheingabe wird zur fertig formulierten E-Mail in Outlook, DATEV oder Word: circa 150 Stunden Ersparnis pro Jahr.",
};

export const metadata: Metadata = {
  title: "Diktat zu Text - E-Mails diktieren in der Steuerkanzlei | Bluebatch",
  description:
    "Diktat zu Text für Steuerkanzleien: Spracheingabe wird zur fertig formulierten E-Mail in Outlook, DATEV oder Word. Circa 150 Stunden Ersparnis pro Jahr, für wen sich das lohnt und wie es sich im Alltag anfühlt.",
  openGraph: {
    title: "Diktat zu Text in der Steuerkanzlei - Bluebatch",
    description:
      "Einsprechen statt tippen: KI formuliert aus dem Diktat eine fertige E-Mail in Outlook, DATEV oder Word. Circa 150 Stunden Ersparnis pro Jahr im Kanzleialltag.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
  },
  alternates: {
    canonical: "/branchen/steuerberater/claude-cowork/diktat-zu-text",
  },
};

const zielgruppen = [
  {
    icon: Briefcase,
    title: "Berufsträger mit vollem Kalender",
    body: "Zwischen zwei Mandantenterminen bleibt selten Zeit für sauber formulierte Antworten. Wer Rückmeldungen direkt nach dem Gespräch einspricht, hat sie erledigt, bevor der nächste Termin beginnt, statt abends einen Stapel offener Mails abzuarbeiten.",
  },
  {
    icon: Inbox,
    title: "Sachbearbeiter mit viel Mandantenkorrespondenz",
    body: "Belege anfordern, Rückfragen klären, Zwischenstände mitteilen: Ein großer Teil der täglichen Korrespondenz sind kurze, wiederkehrende Nachrichten. Eingesprochen sind sie in Sekunden formuliert, im richtigen Ton und ohne Tippfehler.",
  },
  {
    icon: Keyboard,
    title: "Alle, die schneller denken als tippen",
    body: "Die meisten Menschen sprechen deutlich schneller, als sie schreiben. Wer seine Gedanken bisher mühsam in Sätze getippt hat, dem nimmt das Diktat den Umweg über die Tastatur ab, die KI macht aus dem gesprochenen Gedanken den fertigen Text.",
  },
];

const faqs = [
  {
    question: "Wie funktioniert Diktat zu Text im Kanzleialltag?",
    answer:
      "Sie sprechen frei ein, was Sie mitteilen wollen, in normalem Gesprächstempo, mit Versprechern und halben Sätzen. Die KI transkribiert nicht nur, sie formuliert: Aus dem Diktat wird eine vollständige, geschliffene E-Mail mit Anrede, Struktur und Grußformel, direkt dort, wo Sie arbeiten, in Outlook, DATEV oder Word.",
  },
  {
    question: "Wie viel Zeit spart Diktat zu Text wirklich?",
    answer:
      "In der Praxis liegt die Ersparnis bei circa 150 Stunden pro Jahr für Vielschreiber. Die Zeit kommt aus zwei Quellen: Sprechen ist schneller als Tippen, und das Nachformulieren entfällt, weil die KI den Rohtext direkt in eine versandfertige Form bringt.",
  },
  {
    question: "Muss ich für das Diktat ein neues Programm lernen?",
    answer:
      "Nein. Der Text entsteht direkt in den Programmen, in denen die Kanzlei ohnehin arbeitet: Outlook für Mails, DATEV für die Fallbearbeitung, Word für Schreiben und Vermerke. Es gibt keinen Medienbruch und kein Kopieren zwischen Anwendungen.",
  },
  {
    question: "Was passiert mit dem diktierten Inhalt, ist das § 203-konform?",
    answer:
      "Diktate enthalten regelmäßig Mandanteninformationen, deshalb gehört die Umgebung an den Anfang der Einrichtung. Im Rahmen von Claude Cowork läuft die Verarbeitung in einer verwalteten, § 203-konformen Umgebung, ohne Training fremder Modelle mit Ihren Inhalten. Welche Variante zu Ihrer Kanzlei passt, klären wir im Erstgespräch.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <div className="text-center max-w-3xl mx-auto">
          <Typo.H1>
            Diktat zu Text: E-Mails einsprechen statt tippen
          </Typo.H1>
          <GeoSummary align="center" className="mt-4">
            Diktat zu Text heißt: Steuerberater und Sachbearbeiter sprechen
            eine Nachricht einfach ein, die KI formuliert daraus eine
            fertige, geschliffene E-Mail direkt in Outlook, DATEV oder
            Word. Wer täglich viele Mails, Vermerke und Mandantenantworten
            schreibt, spart mit diesem Claude-Cowork-Use-Case circa 150
            Stunden pro Jahr.
          </GeoSummary>
          <ContactButton icon="chat">Beratung anfragen</ContactButton>
        </div>
      </ContentWrapper>

      {/* Wie es sich im Alltag anfühlt */}
      <ContentWrapper colorScheme="gray-light">
        <SimpleGrid cols={2} className="items-center gap-8 md:gap-12">
          <div>
            <Typo.H2 className="mb-4">
              Wie sich das im Alltag anfühlt
            </Typo.H2>
            <Typo.Paragraph className="text-gray-600 mb-4">
              Sie kommen aus einem Mandantengespräch, öffnen Outlook und
              sprechen ein: was besprochen wurde, was der Mandant noch
              liefern muss, bis wann. In normalem Tempo, mit halben Sätzen,
              so wie man eben denkt. Die KI macht daraus keine wortwörtliche
              Abschrift, sondern eine fertige E-Mail: höfliche Anrede, klare
              Struktur, sauberer Schluss.
            </Typo.Paragraph>
            <Typo.Paragraph className="text-gray-600 mb-6">
              Das funktioniert überall dort, wo in der Kanzlei Text
              entsteht: in Outlook für die Mandantenmail, in DATEV für die
              Fallbearbeitung, in Word für Vermerke und Schreiben. Kein
              Umkopieren, kein Nachformulieren, nur ein kurzer Prüfblick
              vor dem Senden. Nach ein paar Tagen fühlt sich Tippen wie ein
              Umweg an.
            </Typo.Paragraph>
            <InternalLink href="/branchen/steuerberater/claude-cowork">
              Teil von Claude Cowork für Steuerberater
            </InternalLink>
          </div>
          <div className="relative aspect-video mx-auto w-1/2 md:w-full">
            <Image
              src="/images/communication-tools.jpg"
              alt="Steuerberaterin diktiert eine E-Mail per Spracheingabe"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Für wen lohnt sich das */}
      <ContentWrapper colorScheme="white">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Für wen lohnt sich das</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Circa 150 Stunden pro Jahr, wer sie am ehesten hebt
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Diktat zu Text lohnt sich für alle, die viel schreiben. Drei
            Gruppen profitieren im Kanzleialltag besonders deutlich.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={3} className="mt-12">
          {zielgruppen.map((z) => {
            const Icon = z.icon;
            return (
              <SimpleCard key={z.title} align="left">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-800">
                  <Icon className="h-6 w-6" />
                </span>
                <Typo.H3>{z.title}</Typo.H3>
                <Typo.Paragraph>{z.body}</Typo.Paragraph>
              </SimpleCard>
            );
          })}
        </SimpleGrid>
      </ContentWrapper>

      {/* Abgrenzung und Einordnung */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <div className="text-center">
          <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-800">
            <Mic className="h-6 w-6" />
          </span>
          <Typo.H2 className="mb-4">
            Ausgehende Texte diktieren, eingehende Mails automatisieren
          </Typo.H2>
          <Typo.Paragraph className="text-gray-600 mb-4">
            Diktat zu Text beschleunigt das, was Sie selbst formulieren
            wollen: Der Mensch gibt den Inhalt vor, die KI übernimmt die
            Form. Für die andere Richtung, die Flut eingehender Mails, gibt
            es einen eigenen Baustein: Der{" "}
            <InternalLink
              href="/branchen/steuerberater/ki-agenten/mail-agent"
              variant="underline"
            >
              Mail-Agent für Steuerkanzleien
            </InternalLink>{" "}
            sortiert und beantwortet eingehende Nachrichten als digitaler
            Mitarbeiter. Beides zusammen entlastet das Postfach von beiden
            Seiten.
          </Typo.Paragraph>
          <Typo.Paragraph className="text-gray-600 mb-6">
            Im Erstgespräch schauen wir uns an, wer in Ihrer Kanzlei wie
            viel schreibt, und wo das Diktat den größten Hebel hat.
          </Typo.Paragraph>
          <ContactButton icon="chat">Erstgespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper bodyWidth="small">
        <FaqContainer faqs={faqs} />
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
