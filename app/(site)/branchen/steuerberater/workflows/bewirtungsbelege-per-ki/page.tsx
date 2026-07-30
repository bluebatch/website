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
  title: "Bewirtungsbelege per KI",
  description:
    "Bewirtungsbeleg mit KI: auslesen, prüfen und buchen - auch handschriftliche Angaben zu Anlass und Teilnehmern.",
};

const defaultMeta = {
  title: "Bewirtungsbeleg: Pflichtangaben prüfen und per KI buchen | Bluebatch",
  description:
    "Bewirtungsbeleg mit KI: auslesen, prüfen und buchen - auch handschriftlich. Pflichtangaben nach § 4 Abs. 5 Nr. 2 EStG prüfen, 70/30-Aufteilung automatisch, DATEV-ready.",
  ogDescription:
    "KI liest Bewirtungsbelege inklusive handschriftlicher Angaben, prüft die Pflichtangaben und übergibt den fertigen Buchungsvorschlag mit 70/30-Aufteilung an DATEV.",
};

export const metadata: Metadata = {
  title: defaultMeta.title,
  description: defaultMeta.description,
  keywords: [
    "Bewirtungsbeleg KI",
    "Bewirtungsbeleg buchen",
    "Bewirtungsbeleg Pflichtangaben",
    "handschriftliche Belege OCR",
    "Bewirtungskosten Steuerberater",
    "DATEV Bewirtungsbeleg",
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
        alt: "Bluebatch Bewirtungsbelege per KI für Steuerkanzleien",
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
    canonical: "/branchen/steuerberater/workflows/bewirtungsbelege-per-ki",
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
              Bewirtungsbeleg mit KI: auslesen, prüfen und buchen - auch handschriftlich
            </Hero2ColumnHeadline>
            <GeoSummary>
              Die KI-Bewirtungsbeleg-Erfassung von Bluebatch ist ein
              n8n-Workflow für Steuerkanzleien, der Bewirtungsbelege per KI-OCR
              ausliest, auch handschriftlich ergänzte Angaben zu Anlass und
              Teilnehmern. Der Workflow prüft die Pflichtangaben nach § 4 Abs.
              5 Nr. 2 EStG, trennt die 70/30-Aufteilung automatisch und
              übergibt den fertigen Buchungsvorschlag an DATEV.
            </GeoSummary>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Workflow anfragen</ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/invoice-verification.jpg"
              alt="Bewirtungsbeleg mit handschriftlichen Angaben wird per KI geprüft"
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
            Warum der Bewirtungsbeleg der unbeliebteste Beleg der Kanzlei ist
          </IntroBox.Headline>
          <IntroBox.Subline>
            Kein anderer Belegtyp kombiniert so viele Fehlerquellen: Kassenbon
            plus handschriftliche Angaben plus Sonderregeln beim
            Betriebsausgabenabzug.
          </IntroBox.Subline>
        </IntroBox>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Typo.H3 className="mt-0!">Handschrift statt Struktur</Typo.H3>
            <Typo.Paragraph className="text-sm text-gray-600">
              Anlass der Bewirtung, Namen der Teilnehmer und Unterschrift
              stehen handschriftlich auf der Rückseite oder auf dem
              Bewirtungsvordruck. Klassische OCR scheitert daran, also tippt
              ein Sachbearbeiter jeden Beleg von Hand ab und entziffert
              Kugelschreiber-Notizen vom Geschäftsessen.
            </Typo.Paragraph>
          </div>
          <div>
            <Typo.H3 className="mt-0!">Strenge Pflichtangaben</Typo.H3>
            <Typo.Paragraph className="text-sm text-gray-600">
              § 4 Abs. 5 Satz 1 Nr. 2 EStG verlangt Ort, Tag, Teilnehmer,
              Anlass und Höhe der Aufwendungen. Bei Gaststättenbewirtung muss
              die maschinelle Rechnung beiliegen, ab 250 Euro inklusive Name
              des Bewirtenden. Fehlt eine Angabe, kippt der
              Betriebsausgabenabzug komplett, nicht nur anteilig.
            </Typo.Paragraph>
          </div>
          <div>
            <Typo.H3 className="mt-0!">70/30 plus Vorsteuer</Typo.H3>
            <Typo.Paragraph className="text-sm text-gray-600">
              Nur 70 Prozent der angemessenen Bewirtungskosten sind als
              Betriebsausgabe abziehbar, 30 Prozent nicht. Die Vorsteuer ist
              bei ordnungsgemäßem Beleg dagegen voll abziehbar. Diese
              Aufteilung inklusive Trinkgeld-Behandlung wird manuell oft
              falsch oder gar nicht gebucht.
            </Typo.Paragraph>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <Image
              src="/images/tax-consulting-workspace.jpg"
              alt="Arbeitsplatz in der Steuerkanzlei mit Belegstapel"
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
            Vom Foto des Kassenbons zum fertigen Buchungsvorschlag
          </IntroBox.Headline>
          <IntroBox.Subline>
            Ein n8n-Workflow mit multimodaler KI, die gedruckte und
            handschriftliche Inhalte in einem Durchgang liest und gegen das
            Regelwerk für Bewirtungskosten prüft.
          </IntroBox.Subline>
        </IntroBox>

        <TimelineAsSteps>
          <TimelineAsStepsStep value={1}>
            <Typo.H3 className="mt-2!">Eingang per Foto oder Scan</Typo.H3>
            <Typo.Paragraph>
              Der Mandant fotografiert den Bewirtungsbeleg mit dem Handy oder
              lädt ihn über den gewohnten Kanal hoch: Mail-Postfach,
              Mandantenportal oder DATEV Upload. Auch geknickte Bons und
              Belege mit Rückseiten-Notizen werden akzeptiert, beide Seiten
              landen im Workflow.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={2}>
            <Typo.H3 className="mt-2!">KI liest Druck und Handschrift</Typo.H3>
            <Typo.Paragraph>
              Ein multimodales KI-Modell extrahiert die maschinellen
              Rechnungsdaten wie Restaurant, Datum, Netto, Umsatzsteuer und
              Trinkgeld und liest zusätzlich die handschriftlichen Angaben zu
              Anlass und Teilnehmern. Genau an dieser Handschrift scheitern
              klassische OCR-Tools, multimodale Modelle lesen sie zuverlässig
              mit.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={3}>
            <Typo.H3 className="mt-2!">Pflichtangaben-Check</Typo.H3>
            <Typo.Paragraph>
              Ein Regelwerk prüft die Vollständigkeit nach § 4 Abs. 5 Nr. 2
              EStG: Ort, Tag, Teilnehmer, Anlass, Höhe, Unterschrift, bei
              Rechnungen ab 250 Euro auch den Namen des Bewirtenden. Fehlt
              etwas, fordert der Workflow die Angabe automatisch beim
              Mandanten nach, bevor der Beleg in die Buchhaltung geht.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={4} isLast>
            <Typo.H3 className="mt-2!">70/30-Buchung an DATEV</Typo.H3>
            <Typo.Paragraph>
              Der Workflow erzeugt den Buchungsvorschlag mit korrekter
              Aufteilung in abziehbare und nicht abziehbare Bewirtungskosten,
              vollem Vorsteuerabzug und quittiertem Trinkgeld und übergibt ihn
              an DATEV. Die gleiche Prüf-Logik nutzen wir auch in der{" "}
              <Link
                href="/branchen/steuerberater/workflows/belegpruefung"
                className="text-primary-600 hover:underline"
              >
                KI-Belegprüfung
              </Link>{" "}
              für alle übrigen Belegtypen. Weitere automatisierte
              Kanzleiprozesse findest du im{" "}
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
              question:
                "Kann die KI wirklich handschriftliche Bewirtungsbelege lesen?",
              answer:
                "Ja. Klassische OCR ist auf gedruckten Text trainiert und scheitert an Kugelschreiber-Notizen. Wir setzen multimodale KI-Modelle ein, die das Belegbild als Ganzes verstehen und Druck und Handschrift gemeinsam auswerten. Unleserliche Passagen werden nicht geraten: Der Beleg wandert dann mit markierter Stelle in die Klärung, ein Mitarbeiter oder der Mandant bestätigt die Angabe.",
            },
            {
              question:
                "Welche Pflichtangaben prüft der Workflow bei Bewirtungskosten?",
              answer:
                "Die Angaben nach § 4 Abs. 5 Satz 1 Nr. 2 EStG: Ort, Tag, Teilnehmer und Anlass der Bewirtung sowie die Höhe der Aufwendungen, dazu die Unterschrift des Bewirtenden. Bei Gaststättenbewirtung muss die maschinell erstellte Rechnung beiliegen, ab 250 Euro inklusive Name des Bewirtenden. Trinkgelder werden nur berücksichtigt, wenn sie auf dem Beleg quittiert oder glaubhaft nachgewiesen sind.",
            },
            {
              question:
                "Wie wird die 70/30-Aufteilung der Bewirtungskosten gebucht?",
              answer:
                "Der Buchungsvorschlag trennt automatisch: 70 Prozent der angemessenen Aufwendungen auf das Konto für abziehbare Bewirtungskosten, 30 Prozent auf nicht abziehbare. Die Vorsteuer wird bei ordnungsgemäßem Beleg in voller Höhe gezogen. Kontenrahmen (SKR 03 oder SKR 04) und mandantenindividuelle Kontierungsregeln werden beim Setup hinterlegt.",
            },
            {
              question:
                "Reicht der digitale Beleg oder muss das Papier-Original aufbewahrt werden?",
              answer:
                "Das digitalisierte Belegbild genügt, wenn die Digitalisierung GoBD-konform erfolgt: vollständige, unveränderbare Ablage mit nachvollziehbarem Verfahren. Der Workflow legt jedes Belegbild inklusive Rückseite revisionssicher ab und dokumentiert jede KI-Extraktion und jede manuelle Korrektur im Audit-Log. Die Details klären wir mit Blick auf eure Verfahrensdokumentation im Setup.",
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
