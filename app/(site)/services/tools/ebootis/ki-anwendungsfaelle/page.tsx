import type { Metadata } from "next";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import GeoSummary from "@/components/ui/geo-summary";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import IntroBox from "@/components/ui/intro-box";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnCallToAction,
  Hero2ColumnSubtext,
  Hero2ColumnImage,
} from "@/components/heroes/hero-2-column";
import ContactButton from "@/components/buttons/contact-button";
import InternalLink from "@/components/buttons/internal-link";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { FaqContainer } from "@/components/ui/faqs";

export const metadata: Metadata = {
  title: "KI-Anwendungsfälle mit e.bootis: Use-Cases für den Großhandel | Bluebatch",
  description:
    "Konkrete KI-Use-Cases auf Basis Ihrer e.bootis-Daten: Angebotserstellung, Bedarfsprognose aus Lagerdaten, PIM-Produkttexte und Kundenservice aus Auftragsdaten, angebunden über die OpenEngine.",
  openGraph: {
    title: "KI-Anwendungsfälle mit e.bootis: Use-Cases für den Großhandel | Bluebatch",
    description:
      "Angebotserstellung, Bedarfsprognose, PIM-Produkttexte und Kundenservice: KI-Use-Cases auf Basis der e.bootis-Daten, angebunden über die OpenEngine.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=KI-Anwendungsf%C3%A4lle%20mit%20e.bootis%3A%20Use-Cases%20f%C3%BCr%20den%20Gro%C3%9Fhandel&eyebrow=Tools",
        width: 1200,
        height: 630,
        alt: "KI-Anwendungsfälle mit e.bootis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KI-Anwendungsfälle mit e.bootis: Use-Cases für den Großhandel | Bluebatch",
    description:
      "KI-Use-Cases auf Basis der e.bootis-Daten: Angebote, Bedarfsprognose, PIM-Texte und Kundenservice.",
    images: ["/og?title=KI-Anwendungsf%C3%A4lle%20mit%20e.bootis%3A%20Use-Cases%20f%C3%BCr%20den%20Gro%C3%9Fhandel&eyebrow=Tools"],
  },
  alternates: {
    canonical: "/services/tools/ebootis/ki-anwendungsfaelle",
  },
};

const useCases = [
  {
    icon: "📝",
    title: "Angebotserstellung",
    description:
      "Die KI entwirft Angebote aus Kunden-, Artikel- und Preisdaten in e.bootis. Ihr Vertrieb prüft und gibt frei, statt jede Position von Hand zusammenzustellen.",
  },
  {
    icon: "📦",
    title: "Bedarfsprognose und Nachbestellung",
    description:
      "Aus Lager- und Verkaufsdaten von e.bootis leitet die KI Nachbestellvorschläge ab und erkennt Bedarfsspitzen frühzeitig, bevor ein Artikel ausläuft.",
  },
  {
    icon: "🏷️",
    title: "PIM-Produkttexte",
    description:
      "Auf Basis der Produktdaten und Klassifizierungen aus dem integrierten PIM erzeugt die KI konsistente Produkttexte für Web-Shop und Kataloge.",
  },
  {
    icon: "💬",
    title: "Kundenservice aus Auftragsdaten",
    description:
      "Ein KI-Chatbot beantwortet Fragen zu Auftragsstatus, Lieferterminen und Beständen direkt aus den Auftragsdaten in e.bootis, für Team und Kunden.",
  },
  {
    icon: "🔎",
    title: "Produktdaten klassifizieren",
    description:
      "Die KI ordnet neue Artikel den passenden Klassifizierungen im PIM zu und hält digitale Objekte und Attribute sauber und vollständig.",
  },
  {
    icon: "📥",
    title: "Auftrags- und Belegerfassung",
    description:
      "Eingehende Bestellungen und Belege werden ausgelesen und als Auftrag in e.bootis übernommen, ohne dass jemand die Daten manuell abtippt.",
  },
];

const faqs = [
  {
    question: "Auf welchen Daten arbeitet die KI bei e.bootis?",
    answer:
      "Auf den vorhandenen ERP-Daten: Kunden, Artikel, Preise, Bestände, Aufträge, Belege und die Produktdaten aus dem integrierten PIM. Die KI wird über die OpenEngine angebunden und arbeitet damit auf echten e.bootis-Daten, nicht auf einer Kopie.",
  },
  {
    question: "Brauche ich für KI-Use-Cases einen e.bootis-Wechsel?",
    answer:
      "Nein. Bluebatch setzt auf Ihrer bestehenden e.bootis-Installation auf und bindet die KI über die OpenEngine an. e.bootis bleibt das führende System, die KI erledigt Vorarbeit, Ihr Team prüft und gibt frei.",
  },
  {
    question: "Entscheidet die KI eigenständig, zum Beispiel beim Bestellen?",
    answer:
      "In der Regel arbeitet die KI mit Vorschlag und Freigabe. Bei der Nachbestellung erzeugt sie zum Beispiel einen Vorschlag aus den Lagerdaten, die finale Entscheidung trifft ein Mensch. Der Grad der Automatisierung wird pro Use-Case festgelegt.",
  },
  {
    question: "Womit fängt man am besten an?",
    answer:
      "Sinnvoll ist ein Use-Case mit klarem, wiederkehrendem Aufwand, etwa Angebotserstellung oder Produkttexte. Ein e.bootis-Assessment prüft Ihre Installation und liefert eine priorisierte Reihenfolge, welche Anwendungsfälle sich zuerst lohnen.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>e.bootis-Tools</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              KI-Anwendungsfälle mit e.bootis
            </Hero2ColumnHeadline>
            <GeoSummary>
              KI-Anwendungsfälle mit e.bootis nutzen die vorhandenen ERP-Daten
              des Großhandels: Angebotserstellung, Bedarfsprognose aus
              Lagerdaten, Produkttexte aus dem integrierten PIM und
              Kundenservice aus Auftragsdaten. Über die OpenEngine bindet
              Bluebatch KI an e.bootis an, ohne Sonderprogrammierung. e.bootis
              bleibt das führende System, die KI arbeitet auf echten Beständen,
              Preisen und Aufträgen.
            </GeoSummary>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Use-Case besprechen</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Angebote, Bedarfsprognose, PIM-Texte und Kundenservice aus
              e.bootis-Daten
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/machine-learning.jpg"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Die Use-Cases */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Konkrete Use-Cases</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was KI mit Ihren e.bootis-Daten leisten kann
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Sechs Anwendungsfälle, die direkt auf den Daten Ihres ERP aufsetzen
          </IntroBox.Paragraph>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-8">
          {useCases.map((uc) => (
            <SimpleCard key={uc.title}>
              <SimpleCard.Icon>
                <>{uc.icon}</>
              </SimpleCard.Icon>
              <Typo.H3 className="mb-3 text-xl">{uc.title}</Typo.H3>
              <Typo.Paragraph textColor="muted" size="sm">
                {uc.description}
              </Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      {/* Warum e.bootis dafür ideal ist */}
      <ContentWrapper>
        <IntroBox size="small">
          <IntroBox.PreHeadline>Warum e.bootis</IntroBox.PreHeadline>
          <IntroBox.Headline>
            KI ist nur so gut wie die Daten darunter
          </IntroBox.Headline>
        </IntroBox>
        <div className="mx-auto mt-8 max-w-3xl">
          <Typo.Paragraph className="text-gray-600 mb-4">
            Der größte Hebel für KI im Großhandel sind saubere, erreichbare
            Daten. e.bootis-ERP II hält Artikel, Preise, Bestände, Aufträge und
            Produktinformationen aus dem integrierten PIM an einer Stelle, ohne
            Datenredundanz. Genau darauf setzen die Anwendungsfälle auf.
          </Typo.Paragraph>
          <Typo.Paragraph className="text-gray-600 mb-4">
            Über die OpenEngine sind diese Daten ohne aufwendige
            Sonderprogrammierung erreichbar. Bluebatch bindet die KI an,
            e.bootis bleibt das führende System. Passende Prozesse und weitere
            Ideen finden Sie in unserem{" "}
            <InternalLink
              href="/branchen/grosshandel"
              variant="underline"
              resolve={false}
            >
              Großhandel-Bereich
            </InternalLink>{" "}
            und bei den{" "}
            <InternalLink
              href="/branchen/grosshandel/workflows"
              variant="underline"
              resolve={false}
            >
              Großhandel-Workflows
            </InternalLink>
            .
          </Typo.Paragraph>
          <Typo.Paragraph className="text-gray-600">
            Wie die technische Anbindung im Detail funktioniert, erklärt der{" "}
            <InternalLink
              href="/services/tools/ebootis"
              variant="underline"
              resolve={false}
            >
              e.bootis-Tool-Hub
            </InternalLink>
            .
          </Typo.Paragraph>
        </div>
      </ContentWrapper>

      {/* FAQ */}
      <ContentWrapper bodyWidth="small">
        <FaqContainer faqs={faqs}>
          <FaqContainer.Headline>
            Häufige Fragen zu KI mit e.bootis
          </FaqContainer.Headline>
        </FaqContainer>
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
