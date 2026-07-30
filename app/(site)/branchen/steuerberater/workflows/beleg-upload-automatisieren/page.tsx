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
  title: "Beleg-Upload automatisieren",
  description:
    "Automatisierter Beleg-Upload beim Mandanten: E-Mail-Weiterleitung, GetMyInvoices, InvoiceFetcher, Übergabe an DATEV Unternehmen Online oder lexware.",
};

const defaultMeta = {
  title: "Belege digitalisieren: Mandanten-Upload automatisieren | Bluebatch",
  description:
    "Automatisierter Beleg-Upload beim Mandanten: E-Mail-Weiterleitung, GetMyInvoices oder InvoiceFetcher, Übergabe an DATEV Unternehmen Online oder lexware per Schnittstelle.",
  ogDescription:
    "Belege kommen automatisch vom Mandanten in die Kanzlei: E-Mail-Weiterleitung, GetMyInvoices, InvoiceFetcher und ein digitaler Buchhaltungsprozess je Mandant.",
};

export const metadata: Metadata = {
  title: defaultMeta.title,
  description: defaultMeta.description,
  keywords: [
    "Beleg-Upload automatisieren",
    "GetMyInvoices Steuerberater",
    "InvoiceFetcher",
    "DATEV Unternehmen Online Belege",
    "lexware Schnittstelle Kanzlei",
    "digitale Belegbereitstellung",
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
        alt: "Bluebatch automatisierter Beleg-Upload für Steuerkanzleien",
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
    canonical: "/branchen/steuerberater/workflows/beleg-upload-automatisieren",
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
              Beleg-Upload automatisieren: Mandantenbelege digital einsammeln
            </Hero2ColumnHeadline>
            <GeoSummary>
              Der automatisierte Beleg-Upload von Bluebatch ist ein Workflow
              für Steuerkanzleien, der Belege per E-Mail-Weiterleitung,
              GetMyInvoices oder InvoiceFetcher direkt vom Mandanten
              einsammelt. Jeder Mandant bekommt einen digitalen
              Buchhaltungsprozess passend zu seinem Tool, mit Übergabe an
              DATEV Unternehmen Online oder lexware per Schnittstelle, statt
              Pendelordner und Schuhkarton zum Monatsende.
            </GeoSummary>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Workflow anfragen</ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/document-automation.jpg"
              alt="Digitaler Belegfluss vom Mandanten in die Kanzlei"
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
            Die Buchhaltung wartet nicht auf die KI, sondern auf die Belege
          </IntroBox.Headline>
          <IntroBox.Subline>
            Der Engpass in der Finanzbuchhaltung liegt selten in der Kanzlei.
            Er liegt beim Mandanten, der Belege sammelt, vergisst und am
            Monatsende gebündelt abliefert.
          </IntroBox.Subline>
        </IntroBox>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Typo.H3 className="mt-0!">Der Pendelordner lebt noch</Typo.H3>
            <Typo.Paragraph className="text-sm text-gray-600">
              Papierbelege im Ordner, PDFs verstreut über drei Mail-Postfächer,
              Portal-Rechnungen von Amazon, Telekom und Co., die niemand
              herunterlädt. Die Kanzlei jagt jedem Kanal einzeln hinterher und
              bucht trotzdem mit Lücken.
            </Typo.Paragraph>
          </div>
          <div>
            <Typo.H3 className="mt-0!">Nachfordern kostet Tage</Typo.H3>
            <Typo.Paragraph className="text-sm text-gray-600">
              Fehlende Belege fallen erst beim Buchen auf. Dann beginnt das
              Mail-Ping-Pong: anfordern, erinnern, warten. Der Abschluss
              verschiebt sich, die Umsatzsteuer-Voranmeldung wird zur
              Zitterpartie, und der Sachbearbeiter arbeitet als Mahnstelle
              statt als Buchhalter.
            </Typo.Paragraph>
          </div>
          <div>
            <Typo.H3 className="mt-0!">Jeder Mandant tickt anders</Typo.H3>
            <Typo.Paragraph className="text-sm text-gray-600">
              Der eine arbeitet mit DATEV Unternehmen Online, der nächste mit
              lexware, der dritte mailt Fotos. Ein einziger starrer Prozess
              für alle funktioniert nicht. Was funktioniert: ein definierter
              digitaler Prozess je Mandant, passend zu seinem Tool.
            </Typo.Paragraph>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <Image
              src="/images/client-portal.jpg"
              alt="Mandant lädt Belege über ein digitales Portal hoch"
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
            So kommen Belege automatisch vom Mandanten in die Kanzlei
          </IntroBox.Headline>
          <IntroBox.Subline>
            Vier Schritte, einmal pro Mandant eingerichtet. Danach fließen
            Belege laufend statt gebündelt zum Monatsende.
          </IntroBox.Subline>
        </IntroBox>

        <TimelineAsSteps>
          <TimelineAsStepsStep value={1}>
            <Typo.H3 className="mt-2!">Kanal-Analyse je Mandant</Typo.H3>
            <Typo.Paragraph>
              Wir erfassen pro Mandant, wo Belege heute entstehen:
              Eingangsrechnungen per Mail, Portal-Rechnungen bei Lieferanten,
              Kassenbons, Ausgangsrechnungen aus dem Fakturatool. Daraus
              entsteht ein Belegkanal-Steckbrief, der festlegt, welcher Kanal
              wie automatisiert wird und welches Zielsystem der Mandant nutzt.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={2}>
            <Typo.H3 className="mt-2!">Automatische Beleg-Abholung</Typo.H3>
            <Typo.Paragraph>
              E-Mail-Rechnungen laufen über eine feste Weiterleitungsadresse
              automatisch in den Workflow. Portal-Rechnungen holen Tools wie
              GetMyInvoices oder InvoiceFetcher selbstständig aus über 10.000
              Portalen ab, von Amazon Business bis Telekom. Papierbelege
              fotografiert der Mandant per Scan-App. Kein Kanal erfordert,
              dass jemand aktiv an Belege denkt.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={3}>
            <Typo.H3 className="mt-2!">
              Übergabe an DATEV Unternehmen Online oder lexware
            </Typo.H3>
            <Typo.Paragraph>
              Je nach Mandanten-Setup landen die Belege per Schnittstelle in
              DATEV Unternehmen Online oder in lexware, sauber getrennt nach
              Eingangs- und Ausgangsrechnungen und dem richtigen Mandanten
              zugeordnet. Eingehende E-Rechnungen im XRechnung- oder
              ZUGFeRD-Format, für deren Empfang seit 2025 ohnehin jede Firma
              gerüstet sein muss, verarbeitet die{" "}
              <Link
                href="/branchen/steuerberater/workflows/e-rechnung-verarbeitung"
                className="text-primary-600 hover:underline"
              >
                E-Rechnung-Verarbeitung
              </Link>{" "}
              direkt strukturiert weiter.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={4} isLast>
            <Typo.H3 className="mt-2!">Monitoring und Nachforderung</Typo.H3>
            <Typo.Paragraph>
              Der Workflow überwacht je Mandant, ob Belege im gewohnten
              Rhythmus eintreffen, und erinnert automatisch, bevor der
              Abschluss wartet. In der Kanzlei schließt sich die Kette: Die{" "}
              <Link
                href="/branchen/steuerberater/workflows/dokumentenverarbeitung"
                className="text-primary-600 hover:underline"
              >
                KI-Dokumentenverarbeitung
              </Link>{" "}
              klassifiziert und extrahiert die eingesammelten Belege. Wie der
              Prozess bei der Mandatsaufnahme von Anfang an sauber aufgesetzt
              wird, zeigt das{" "}
              <Link
                href="/branchen/steuerberater/workflows/mandanten-onboarding"
                className="text-primary-600 hover:underline"
              >
                Mandanten-Onboarding
              </Link>
              , alle weiteren Prozesse stehen im{" "}
              <Link
                href="/branchen/steuerberater/workflows"
                className="text-primary-600 hover:underline"
              >
                Workflow-Katalog
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
                "Was ist der Unterschied zwischen GetMyInvoices und InvoiceFetcher?",
              answer:
                "Beide Tools loggen sich automatisch in Lieferanten-Portale ein und laden Rechnungen herunter, etwa von Amazon, Telekom oder Stromanbietern. GetMyInvoices deckt mehr als 10.000 Portale ab und bietet eine breite Schnittstellen-Palette inklusive DATEV. InvoiceFetcher ist die schlankere Alternative mit Fokus auf den deutschen Markt. Welches Tool passt, hängt von den Portalen des Mandanten und dem Zielsystem ab, das prüfen wir in der Kanal-Analyse.",
            },
            {
              question:
                "Funktioniert der automatisierte Beleg-Upload auch mit lexware statt DATEV?",
              answer:
                "Ja. Der Workflow ist zielsystem-offen: Mandanten mit DATEV Unternehmen Online werden per Belegtransfer angebunden, Mandanten mit lexware über deren Schnittstelle. Die Kanzlei arbeitet weiter in ihrer gewohnten Umgebung, der Workflow sorgt nur dafür, dass Belege vollständig und laufend dort ankommen. Auch gemischte Mandantenstämme sind der Normalfall, nicht die Ausnahme.",
            },
            {
              question:
                "Was muss der Mandant dafür tun und wie viel Umstellung bedeutet das?",
              answer:
                "So wenig wie möglich, das ist das Designziel. E-Mail-Rechnungen leitet der Mandant einmalig per Regel an seine Belegadresse weiter, Portal-Zugänge hinterlegt er einmal im Abhol-Tool, für Papier gibt es die Scan-App. Danach läuft der Prozess ohne aktives Zutun. Erfahrungsgemäß ist die größte Hürde nicht die Technik, sondern die Gewohnheit, deshalb liefern wir je Mandant eine kurze Einrichtungs-Anleitung mit.",
            },
            {
              question:
                "Wie geht der Workflow mit E-Rechnungen um?",
              answer:
                "Seit Januar 2025 müssen Unternehmen E-Rechnungen im strukturierten Format empfangen können, die Pflicht zur Ausstellung folgt stufenweise bis 2028. Der Beleg-Upload-Workflow erkennt XRechnung und ZUGFeRD im Eingang automatisch und übergibt sie strukturiert weiter, statt sie wie ein PDF durch die OCR zu schicken. Damit ist der Empfangsweg für E-Rechnungen bei jedem angebundenen Mandanten von Anfang an geregelt.",
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
