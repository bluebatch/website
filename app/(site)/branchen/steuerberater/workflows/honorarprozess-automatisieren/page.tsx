import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import type { PageConfig } from "@/lib/get-subpages";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnCallToAction,
  Hero2ColumnImage,
} from "@/components/heroes/hero-2-column";
import GeoSummary from "@/components/ui/geo-summary";
import ContactButton from "@/components/buttons/contact-button";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/ui/timeline-as-steps";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { FaqContainer } from "@/components/ui/faqs";
import IntroBox from "@/components/ui/intro-box";

export const pageConfig: PageConfig = {
  title: "Honorarprozess automatisieren",
  description:
    "Serienrechnung, SEPA-Lastschrift und vollautomatischer Mahnprozess mit Eskalation bis zur Mandatskündigung bei Dauerverzug.",
};

const defaultMeta = {
  title: "Mahnwesen automatisieren: Rechnung, SEPA, Mahnlauf der Kanzlei | Bluebatch",
  description:
    "Honorarprozess für Steuerkanzleien automatisieren: Serienrechnung, SEPA-Lastschrift über Stripe oder lexware, vollautomatischer Mahnlauf mit Eskalation bis zur Mandatskündigung.",
  ogDescription:
    "Serienrechnungen, SEPA-Einzug und ein Mahnprozess, der ohne manuelles Nachhalten läuft. Eskalationsstufen bis zur Mandatskündigung bei Dauerverzug.",
};

export const metadata: Metadata = {
  title: defaultMeta.title,
  description: defaultMeta.description,
  keywords: [
    "Honorarprozess Steuerberater",
    "Mahnwesen Kanzlei automatisieren",
    "Serienrechnung Steuerkanzlei",
    "SEPA-Lastschrift Kanzlei",
    "Stripe Steuerberater",
    "offene Posten Kanzlei",
    "Bluebatch",
  ],
  openGraph: {
    title: defaultMeta.title,
    description: defaultMeta.ogDescription,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Honorarprozess%20automatisieren&eyebrow=Steuerberater",
        width: 1200,
        height: 630,
        alt: "Bluebatch automatisierter Honorarprozess für Steuerkanzleien",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultMeta.title,
    description: defaultMeta.ogDescription,
    images: ["/og?title=Honorarprozess%20automatisieren&eyebrow=Steuerberater"],
  },
  alternates: {
    canonical:
      "/branchen/steuerberater/workflows/honorarprozess-automatisieren",
  },
};

export default function Page() {
  return (
    <>
      {/* 1. HERO */}
      <ContentWrapper isFirstSection colorScheme="gradient-cool">
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>
              Use Case Steuerberater
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Mahnwesen automatisieren: Serienrechnung, SEPA und Mahnlauf ohne Handarbeit
            </Hero2ColumnHeadline>
            <GeoSummary>
              Der automatisierte Honorarprozess von Bluebatch ist ein Workflow
              für Steuerkanzleien, der Serienrechnungen erstellt,
              SEPA-Lastschriften über Stripe oder lexware einzieht und offene
              Honorare vollautomatisch mahnt. Die Eskalation läuft in
              definierten Stufen bis zur Mandatskündigung bei Dauerverzug,
              sodass die Kanzlei keine offenen Posten mehr von Hand nachhalten
              muss.
            </GeoSummary>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Workflow anfragen</ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/invoice-processing.jpg"
              alt="Automatisierte Honorarrechnung mit Zahlungsstatus"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 2. PROBLEM / KONTEXT */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Das Problem</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Die Kanzlei mahnt jeden Mandanten, nur sich selbst nicht
          </IntroBox.Headline>
          <IntroBox.Subline>
            Kanzleien organisieren die Liquidität ihrer Mandanten und lassen
            beim eigenen Honorar Wochen verstreichen. Nicht aus Nachlässigkeit,
            sondern weil Mahnen unangenehm ist und manuell Zeit kostet.
          </IntroBox.Subline>
        </IntroBox>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Typo.H3 className="mt-0!">Rechnungen kommen zu spät</Typo.H3>
            <Typo.Paragraph className="text-sm text-gray-600">
              Wiederkehrende Leistungen wie Finanzbuchhaltung und Lohn werden
              monatlich erbracht, aber oft unregelmäßig abgerechnet, weil die
              Rechnungserstellung Handarbeit ist. Jede verspätete Rechnung
              verschiebt den Zahlungseingang um denselben Zeitraum nach
              hinten.
            </Typo.Paragraph>
          </div>
          <div>
            <Typo.H3 className="mt-0!">Mahnen ist Beziehungsarbeit</Typo.H3>
            <Typo.Paragraph className="text-sm text-gray-600">
              Der Sachbearbeiter, der den Mandanten täglich betreut, soll ihn
              gleichzeitig ans Zahlen erinnern. Das Ergebnis: Mahnungen
              werden aufgeschoben, offene Posten wachsen, und beim
              Jahresgespräch steht ein unangenehmer Betrag im Raum, der
              längst hätte eskaliert werden müssen.
            </Typo.Paragraph>
          </div>
          <div>
            <Typo.H3 className="mt-0!">Dauerverzug ohne Konsequenz</Typo.H3>
            <Typo.Paragraph className="text-sm text-gray-600">
              Einzelne Mandanten zahlen chronisch spät oder gar nicht und
              binden trotzdem volle Kapazität. Ohne definierten
              Eskalationsprozess fehlt der Kanzlei der formale Rahmen, solche
              Mandate konsequent zu beenden, obwohl sie wirtschaftlich längst
              ein Verlustgeschäft sind.
            </Typo.Paragraph>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <Image
              src="/images/cost-savings.jpg"
              alt="Offene Posten und Zahlungseingänge im Überblick"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </ContentWrapper>

      {/* 3. WIE DER WORKFLOW LÄUFT */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Der Workflow</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Vom Dauermandat zur Zahlung, ohne manuelles Nachhalten
          </IntroBox.Headline>
          <IntroBox.Subline>
            Vier Stufen, die ineinandergreifen: abrechnen, einziehen, mahnen,
            eskalieren. Jede Stufe läuft automatisch, jede Eskalation bleibt
            eine dokumentierte Kanzlei-Entscheidung.
          </IntroBox.Subline>
        </IntroBox>

        <TimelineAsSteps>
          <TimelineAsStepsStep value={1}>
            <Typo.H3 className="mt-2!">Serienrechnung für Dauermandate</Typo.H3>
            <Typo.Paragraph>
              Wiederkehrende Leistungen wie FiBu, Lohn und Jahresabschluss
              werden als Serienrechnung angelegt und automatisch zum
              Stichtag erstellt und versendet, aus lexware oder dem
              vorhandenen Fakturasystem der Kanzlei. Die Rechnung kommt
              pünktlich jeden Monat, ohne dass jemand daran denken muss.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={2}>
            <Typo.H3 className="mt-2!">SEPA-Lastschrift statt Warten</Typo.H3>
            <Typo.Paragraph>
              Mandanten mit SEPA-Mandat werden automatisch per Lastschrift
              eingezogen, technisch über Stripe oder lexware. Der Workflow
              versendet die Vorabankündigung, zieht zum Fälligkeitstag ein und
              gleicht den Zahlungseingang mit den offenen Posten ab.
              Rücklastschriften werden erkannt und starten direkt den
              Klärungsprozess.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={3}>
            <Typo.H3 className="mt-2!">Vollautomatischer Mahnlauf</Typo.H3>
            <Typo.Paragraph>
              Für Mandanten ohne Lastschrift überwacht der Workflow die
              Zahlungsziele und versendet Zahlungserinnerung und Mahnstufen
              nach dem Kanzlei-Regelwerk: Tonalität, Fristen und Pausen
              definiert die Kanzlei einmal, der Workflow hält sie zuverlässig
              ein. Der zuständige Partner sieht jederzeit, welcher Mandant in
              welcher Stufe steht.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={4} isLast>
            <Typo.H3 className="mt-2!">
              Eskalation bis zur Mandatskündigung
            </Typo.H3>
            <Typo.Paragraph>
              Bei Dauerverzug greift die letzte Stufe: Der Workflow stellt den
              Vorgang mit kompletter Historie zusammen und legt der
              Kanzleileitung die Entscheidung über die Mandatskündigung vor,
              inklusive vorbereitetem Kündigungsschreiben. So wird aus einem
              unangenehmen Bauchgefühl ein sauberer, dokumentierter Prozess.
              Damit neue Mandate gar nicht erst ohne SEPA-Mandat starten,
              gehört das Thema von Anfang an ins{" "}
              <Link
                href="/branchen/steuerberater/workflows/mandanten-onboarding"
                className="text-primary-600 hover:underline"
              >
                Mandanten-Onboarding
              </Link>
              . Weitere automatisierte Kanzleiprozesse zeigt der{" "}
              <Link
                href="/branchen/steuerberater/workflows"
                className="text-primary-600 hover:underline"
              >
                Workflow-Katalog für Steuerberater
              </Link>
              , oder du{" "}
              <Link
                href="/contact"
                className="text-primary-600 hover:underline"
              >
                sprichst direkt mit uns
              </Link>
              .
            </Typo.Paragraph>
          </TimelineAsStepsStep>
        </TimelineAsSteps>
      </ContentWrapper>

      {/* 4. FAQ */}
      <ContentWrapper>
        <FaqContainer
          faqs={[
            {
              question:
                "Verträgt sich ein automatischer Mahnprozess mit der Mandantenbeziehung?",
              answer:
                "Besser als der manuelle. Automatische Mahnungen sind neutral, pünktlich und für alle Mandanten gleich, das nimmt dem Thema die persönliche Spitze. Der Sachbearbeiter muss nicht mehr selbst ans Geld erinnern und bleibt in der fachlichen Rolle. Tonalität und Fristen bestimmt die Kanzlei, und für definierte Schlüsselmandate lässt sich jede Stufe auf manuelle Freigabe stellen.",
            },
            {
              question:
                "Wie funktioniert die Eskalation bis zur Mandatskündigung konkret?",
              answer:
                "Die Kanzlei definiert die Stufen einmal, zum Beispiel Zahlungserinnerung, erste und zweite Mahnung, Ankündigung der Leistungseinstellung, Vorlage zur Mandatskündigung. Der Workflow durchläuft diese Stufen automatisch und dokumentiert jeden Schritt. Die Kündigung selbst löst nie die Maschine aus: Sie wird der Kanzleileitung mit der vollständigen Historie und einem vorbereiteten Schreiben zur Entscheidung vorgelegt.",
            },
            {
              question:
                "Brauchen wir Stripe, oder geht SEPA-Lastschrift auch über lexware?",
              answer:
                "Beides geht. Stripe bietet SEPA-Lastschrift mit sauberer API, automatischem Mandatsmanagement und Abgleich der Zahlungseingänge, das passt gut zu einem n8n-Workflow. Wer bereits mit lexware fakturiert, kann den Einzug auch dort abwickeln, der Workflow übernimmt dann Überwachung, Abgleich und Mahnlogik. Welche Variante passt, hängt vom vorhandenen Faktura-Setup ab und wird im Setup entschieden.",
            },
            {
              question:
                "Was passiert bei berechtigten Einwänden, etwa wenn ein Mandant die Rechnung reklamiert?",
              answer:
                "Reklamiert ein Mandant, wird der offene Posten mit einem Klick auf Klärung gesetzt: Der Mahnlauf pausiert für diese Rechnung, der zuständige Bearbeiter bekommt den Vorgang zugewiesen, und nach der Klärung läuft der Prozess an der richtigen Stelle weiter. So mahnt der Workflow nie in einen offenen Streitfall hinein, ohne dass deshalb der ganze Prozess manuell wird.",
            },
          ]}
        />
      </ContentWrapper>

      {/* 5. FINAL CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
