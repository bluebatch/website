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
  title: "Kassenmeldepflicht",
  description:
    "Kassenmeldepflicht nach § 146a AO automatisieren: Mandanten-Formular, Konverter, XML und 1-Klick-Import in ELSTER.",
};

const defaultMeta = {
  title: "Kassenmeldepflicht 2025/26: ELSTER-Meldung automatisieren | Bluebatch",
  description:
    "Kassenmeldepflicht nach § 146a Abs. 4 AO als Workflow: Mandanten erfassen Kassendaten per MS-Forms-Formular, ein Konverter erzeugt die XML, 1-Klick-Import in ELSTER.",
  ogDescription:
    "Elektronische Kassensysteme der Mandanten strukturiert erfassen und als XML mit einem Klick in ELSTER melden, statt jede Kasse einzeln einzutippen.",
};

export const metadata: Metadata = {
  title: defaultMeta.title,
  description: defaultMeta.description,
  keywords: [
    "Kassenmeldepflicht",
    "Kassenmeldung ELSTER",
    "146a AO Meldepflicht",
    "TSE Kassen melden",
    "Kassenmeldung Steuerberater",
    "elektronisches Aufzeichnungssystem melden",
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
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch Kassenmeldepflicht-Workflow für Steuerkanzleien",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultMeta.title,
    description: defaultMeta.ogDescription,
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/branchen/steuerberater/workflows/kassenmeldepflicht",
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
              Kassenmeldepflicht automatisieren: vom Mandanten-Formular zum
              ELSTER-Import
            </Hero2ColumnHeadline>
            <GeoSummary>
              Die Kassenmeldepflicht-Automatisierung von Bluebatch ist ein
              Workflow für Steuerkanzleien, der die Meldung elektronischer
              Kassensysteme nach § 146a Abs. 4 AO abwickelt: Mandanten
              erfassen ihre Kassendaten in einem MS-Forms-Formular, ein
              Konverter erzeugt daraus die XML-Datei und die Kanzlei
              importiert sie mit einem Klick in ELSTER.
            </GeoSummary>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Workflow anfragen</ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/compliance-signs.jpg"
              alt="Compliance-Anforderungen der Kassenmeldepflicht im Überblick"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 2. PROBLEM / KONTEXT */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Der Kontext</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Seit 2025 meldepflichtig: jede elektronische Kasse jedes Mandanten
          </IntroBox.Headline>
          <IntroBox.Subline>
            Die Meldepflicht nach § 146a Abs. 4 AO ist seit dem 1. Januar 2025
            scharf. Für Kanzleien mit Gastronomie-, Handels- und
            Handwerksmandaten bedeutet das laufende Meldungen, nicht eine
            einmalige Aktion.
          </IntroBox.Subline>
        </IntroBox>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Typo.H3 className="mt-0!">Was zu melden ist</Typo.H3>
            <Typo.Paragraph className="text-sm text-gray-600">
              Pro Betriebsstätte jedes elektronische Aufzeichnungssystem mit
              zertifizierter technischer Sicherheitseinrichtung (TSE): Art des
              Systems, Seriennummer, TSE-Daten, Anschaffungsdatum. Auch
              Außerbetriebnahmen sind meldepflichtig. Die Übermittlung läuft
              elektronisch über Mein ELSTER beziehungsweise die
              ERiC-Schnittstelle.
            </Typo.Paragraph>
          </div>
          <div>
            <Typo.H3 className="mt-0!">Laufende Fristen</Typo.H3>
            <Typo.Paragraph className="text-sm text-gray-600">
              Der Bestand war bis zum 31. Juli 2025 zu melden. Seitdem gilt:
              Jede neu angeschaffte und jede außer Betrieb genommene Kasse
              muss binnen eines Monats gemeldet werden. Die Kassenmeldung ist
              damit ein Dauerprozess, der bei jedem Kassenwechsel eines
              Mandanten erneut anfällt.
            </Typo.Paragraph>
          </div>
          <div>
            <Typo.H3 className="mt-0!">Das Datensammel-Problem</Typo.H3>
            <Typo.Paragraph className="text-sm text-gray-600">
              Die eigentliche Arbeit ist nicht die Meldung, sondern die
              Beschaffung der Daten: Seriennummern und TSE-Angaben stehen beim
              Mandanten auf der Kasse, nicht in der Kanzlei. Per Mail und
              Telefon eingesammelt kommen sie unvollständig, in falschen
              Formaten und tröpfchenweise an.
            </Typo.Paragraph>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <Image
              src="/images/data-quality.jpg"
              alt="Strukturierte Kassendaten statt loser Zettelwirtschaft"
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
            Formular, Konverter, XML, Import: die Kassenmeldung in vier
            Schritten
          </IntroBox.Headline>
          <IntroBox.Subline>
            Der Mandant liefert die Daten strukturiert, die Maschine baut die
            Meldung, die Kanzlei behält Prüfung und Abgabe.
          </IntroBox.Subline>
        </IntroBox>

        <TimelineAsSteps>
          <TimelineAsStepsStep value={1}>
            <Typo.H3 className="mt-2!">
              Mandanten-Formular per MS Forms
            </Typo.H3>
            <Typo.Paragraph>
              Der Mandant bekommt einen Link zu einem MS-Forms-Formular, das
              genau die Angaben abfragt, die die Meldung braucht:
              Betriebsstätte, Kassenmodell, Seriennummer, TSE-Daten,
              Anschaffungsdatum. Pflichtfelder und Ausfüllhilfen verhindern,
              dass unvollständige Datensätze ankommen, und ersparen der
              Kanzlei das Nachtelefonieren.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={2}>
            <Typo.H3 className="mt-2!">Konverter prüft und wandelt</Typo.H3>
            <Typo.Paragraph>
              Ein Konverter validiert die Formular-Antworten, prüft
              Plausibilitäten wie Datumsformate und Seriennummern-Muster und
              wandelt die Daten in das XML-Format, das ELSTER für die
              Kassenmeldung erwartet. Fehlerhafte Angaben gehen automatisch
              mit konkretem Hinweis an den Mandanten zurück.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={3}>
            <Typo.H3 className="mt-2!">1-Klick-Import in ELSTER</Typo.H3>
            <Typo.Paragraph>
              Die fertige XML-Datei wird in ELSTER importiert: Der
              Sachbearbeiter kontrolliert die vorbefüllte Meldung und gibt sie
              mit einem Klick ab, statt jede Kasse einzeln in die
              Formularmaske zu tippen. Bei Mandanten mit vielen
              Betriebsstätten macht genau dieser Schritt aus Stunden Minuten.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={4} isLast>
            <Typo.H3 className="mt-2!">Dauerbetrieb statt Einmal-Aktion</Typo.H3>
            <Typo.Paragraph>
              Kauft ein Mandant eine neue Kasse oder nimmt eine alte außer
              Betrieb, füllt er dasselbe Formular erneut aus und die
              Monatsfrist wird per automatischer Erinnerung überwacht. Das
              Formular-Prinzip kennen Mandanten bereits aus dem{" "}
              <Link
                href="/branchen/steuerberater/workflows/mandanten-onboarding"
                className="text-primary-600 hover:underline"
              >
                digitalen Mandanten-Onboarding
              </Link>
              , die Kanzlei sammelt strukturierte Daten statt loser Mails.
              Weitere Prozesse dieser Art zeigt der{" "}
              <Link
                href="/branchen/steuerberater/workflows"
                className="text-primary-600 hover:underline"
              >
                Workflow-Katalog für Steuerberater
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
              question: "Wer ist von der Kassenmeldepflicht betroffen?",
              answer:
                "Jeder Unternehmer, der ein elektronisches Aufzeichnungssystem im Sinne des § 146a AO einsetzt, also eine elektronische Kasse mit zertifizierter technischer Sicherheitseinrichtung (TSE). Das betrifft klassisch Gastronomie, Einzelhandel, Bäckereien und Friseure, aber auch viele Handwerks- und Dienstleistungsbetriebe mit Kassensystem. Für die Kanzlei heißt das: Der eigene Mandantenstamm muss einmal systematisch auf meldepflichtige Kassen durchgesehen werden.",
            },
            {
              question:
                "Welche Fristen gelten für die Kassenmeldung nach § 146a AO?",
              answer:
                "Die elektronische Meldung ist seit dem 1. Januar 2025 möglich und verpflichtend. Vor dem 1. Juli 2025 angeschaffte Systeme waren bis zum 31. Juli 2025 zu melden. Seitdem gilt die laufende Frist: Anschaffung und Außerbetriebnahme sind jeweils binnen eines Monats zu melden. Der Workflow überwacht diese Monatsfrist automatisch, sobald ein Mandant eine Änderung meldet.",
            },
            {
              question:
                "Warum MS Forms und nicht ein eigenes Portal?",
              answer:
                "Weil es die Hürde für den Mandanten minimal hält: Ein Link, keine Registrierung, funktioniert auf dem Handy, und viele Betriebe kennen Microsoft-Formulare bereits. Für die Kanzlei liegt das Ergebnis strukturiert vor und lässt sich direkt maschinell weiterverarbeiten. Wer bereits ein Mandantenportal einsetzt, kann das Formular alternativ dort abbilden, der Konverter dahinter bleibt derselbe.",
            },
            {
              question:
                "Kann die Meldung nicht komplett automatisch abgegeben werden?",
              answer:
                "Die Abgabe bleibt bewusst bei der Kanzlei: Der Sachbearbeiter prüft die vorbefüllte Meldung und löst den Import in ELSTER mit einem Klick aus. So bleibt die fachliche Verantwortung dort, wo sie hingehört, während die fehleranfällige Handarbeit, also Daten einsammeln, abtippen und formatieren, vollständig automatisiert ist.",
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
