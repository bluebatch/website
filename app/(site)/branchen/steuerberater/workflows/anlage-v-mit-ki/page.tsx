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
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { FaqContainer } from "@/components/ui/faqs";
import IntroBox from "@/components/ui/intro-box";
import WorkflowDiagram from "@/components/sections/workflow-diagram";

export const pageConfig: PageConfig = {
  title: "Anlage V mit KI",
  description:
    "Anlage V per KI erstellen und prüfen: Werte aus Mietverträgen und Belegen automatisch zuordnen.",
};

const defaultMeta = {
  title: "Anlage V mit KI erstellen und prüfen für Steuerkanzleien | Bluebatch",
  description:
    "Anlage V per KI: Mietverträge, Nebenkostenabrechnungen und Darlehensbelege automatisch auslesen, den Zeilen der Anlage V zuordnen und gegen das Vorjahr plausibilisieren.",
  ogDescription:
    "Vermietungseinkünfte ohne Abtipparbeit: KI liest die Unterlagen aus, befüllt die Anlage V als Vorschlag und plausibilisiert gegen Vorjahr und AfA-Verlauf.",
};

export const metadata: Metadata = {
  title: defaultMeta.title,
  description: defaultMeta.description,
  keywords: [
    "Anlage V KI",
    "Anlage V automatisch erstellen",
    "Anlage V prüfen",
    "Vermietung und Verpachtung Automatisierung",
    "AfA Prüfung KI",
    "Steuerkanzlei Automatisierung",
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
        alt: "Bluebatch Anlage V mit KI für Steuerkanzleien",
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
    canonical: "/branchen/steuerberater/workflows/anlage-v-mit-ki",
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
              Anlage V mit KI erstellen und prüfen: Vermietungseinkünfte ohne
              Abtipparbeit
            </Hero2ColumnHeadline>
            <GeoSummary>
              Anlage V per KI heißt für Steuerkanzleien: Ein KI-Workflow
              liest Mietverträge, Nebenkostenabrechnungen, Darlehenszinsen
              und Handwerkerrechnungen aus, ordnet die Werte den Zeilen der
              Anlage V zu und plausibilisiert sie gegen Vorjahreswerte und
              AfA-Verlauf. Die Kanzlei kontrolliert fertige Vorschlagswerte
              pro Objekt, statt jede Position von Hand zu übertragen.
            </GeoSummary>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Use Case besprechen</ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/document-automation.jpg"
              alt="Unterlagen zu einem Mietobjekt werden automatisch ausgelesen"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 2. PROBLEM */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Das Problem</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Warum die Anlage V so viel Zeit frisst wie kaum ein anderes
            Formular
          </IntroBox.Headline>
          <IntroBox.Subline>
            Pro Vermietungsobjekt eine eigene Anlage, pro Anlage ein Stapel
            unterschiedlichster Unterlagen. Und das jedes Jahr wieder.
          </IntroBox.Subline>
        </IntroBox>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Typo.H3 className="mt-0!">Zersplitterte Unterlagen</Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              Mietverträge, Kontoauszüge, Nebenkostenabrechnung der
              Hausverwaltung, Zinsbescheinigung der Bank,
              Handwerkerrechnungen: Die Werte für eine einzige Anlage V
              stecken in einem Dutzend Dokumente in unterschiedlichen
              Formaten.
            </Typo.Paragraph>
          </div>
          <div>
            <Typo.H3 className="mt-0!">Fehleranfällige Übertragung</Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              Jede Zahl wird von Hand in die richtige Zeile übertragen:
              Mieteinnahmen, Umlagen, Erhaltungsaufwand, Schuldzinsen, AfA.
              Zahlendreher und vertauschte Zeilen fallen oft erst beim
              Bescheid auf.
            </Typo.Paragraph>
          </div>
          <div>
            <Typo.H3 className="mt-0!">Prüfung gegen das Vorjahr fehlt</Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              Ob die AfA konsistent fortgeführt wurde, ob Erhaltungsaufwand
              plötzlich vom üblichen Niveau abweicht oder eine Mieteinnahme
              fehlt: Für den systematischen Vorjahresvergleich je Objekt
              fehlt im Tagesgeschäft die Zeit.
            </Typo.Paragraph>
          </div>
        </div>
      </ContentWrapper>

      {/* 3. WORKFLOW */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Der Workflow</IntroBox.PreHeadline>
          <IntroBox.Headline>
            So entsteht die Anlage V per KI: vom Beleg zum Vorschlagswert
          </IntroBox.Headline>
          <IntroBox.Subline>
            Der Workflow baut auf derselben Dokumenten-Pipeline auf wie
            unsere{" "}
            <Link
              href="/branchen/steuerberater/workflows/dokumentenverarbeitung"
              className="text-primary-600 hover:underline"
            >
              KI-Dokumentenverarbeitung
            </Link>
            , spezialisiert auf Vermietung und Verpachtung.
          </IntroBox.Subline>
        </IntroBox>

        <WorkflowDiagram variant="linear">
          <WorkflowDiagram.Step
            n={1}
            title="Unterlagen sammeln"
            description="Mandanten-Upload, Mail, DMS"
          />
          <WorkflowDiagram.Step
            n={2}
            title="KI-Auslesung"
            description="Verträge, Abrechnungen, Belege"
          />
          <WorkflowDiagram.Step
            n={3}
            title="Zeilen-Zuordnung"
            description="Werte je Zeile der Anlage V"
          />
          <WorkflowDiagram.Step
            n={4}
            title="Plausibilisierung"
            description="Vorjahr, AfA-Verlauf, Lücken"
          />
          <WorkflowDiagram.Step
            n={5}
            title="Review und Übergabe"
            description="Kontrolle, dann DATEV"
          />
        </WorkflowDiagram>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <Typo.H3 className="mt-0!">Erstellen: Werte statt Tipperei</Typo.H3>
            <Typo.Paragraph>
              Die KI erkennt pro Objekt Mieteinnahmen und Umlagen aus
              Kontoauszügen und Abrechnungen, ordnet Werbungskosten wie
              Schuldzinsen, Erhaltungsaufwand und Verwaltungskosten den
              passenden Zeilen zu und führt die AfA aus dem Vorjahr fort.
              Das Ergebnis ist eine vollständig vorbefüllte Anlage V als
              Vorschlag, mit Quellenangabe je Wert.
            </Typo.Paragraph>
          </div>
          <div>
            <Typo.H3 className="mt-0!">Prüfen: Abweichungen sichtbar</Typo.H3>
            <Typo.Paragraph>
              Auch bereits erstellte Anlagen lassen sich gegenprüfen: Der
              Workflow vergleicht jede Position mit dem Vorjahr und den
              ausgelesenen Belegen, markiert fehlende Mietmonate,
              AfA-Sprünge, ungewöhnlichen Erhaltungsaufwand und Positionen
              ohne Beleg. Der Bearbeiter sieht nur die markierten Punkte,
              nicht das ganze Formular.
            </Typo.Paragraph>
          </div>
        </div>
      </ContentWrapper>

      {/* 4. NACHVOLLZIEHBARKEIT */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Nachvollziehbarkeit</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Jeder Wert in der Anlage V bleibt auf seinen Beleg rückführbar
          </IntroBox.Headline>
        </IntroBox>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Typo.Paragraph>
            Jeder Vorschlagswert trägt seine Quelle: das Dokument, die
            Fundstelle und die Regel, nach der er zugeordnet wurde. Bei
            Rückfragen des Finanzamts ist damit in Sekunden belegt, woher
            eine Zahl stammt. Freigegeben und eingereicht wird die Anlage V
            ausschließlich durch die Kanzlei, die KI liefert Vorschläge und
            Prüfhinweise, keine fertige Steuererklärung ohne menschliche
            Kontrolle.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Die Anlage V ist einer von vielen automatisierbaren
            Kanzlei-Prozessen. Verwandte Bausteine wie die{" "}
            <Link
              href="/branchen/steuerberater/workflows/belegpruefung"
              className="text-primary-600 hover:underline"
            >
              KI-Belegerfassung
            </Link>{" "}
            und den kompletten Überblick findest du im{" "}
            <Link
              href="/branchen/steuerberater/workflows"
              className="text-primary-600 hover:underline"
            >
              Workflow-Katalog für Steuerberater
            </Link>
            .
          </Typo.Paragraph>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <Image
              src="/images/data-quality.jpg"
              alt="Geprüfte Werte mit Quellenangabe je Position der Anlage V"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </ContentWrapper>

      {/* 5. FAQ */}
      <ContentWrapper colorScheme="gray-light">
        <FaqContainer
          faqs={[
            {
              question:
                "Welche Unterlagen kann die KI für die Anlage V auslesen?",
              answer:
                "Alle üblichen Quellen: Mietverträge, Kontoauszüge, Nebenkosten- und Hausgeldabrechnungen der Hausverwaltung, Zinsbescheinigungen der Bank, Handwerker- und Verwalterrechnungen sowie die Vorjahres-Anlage V als Referenz. PDFs, Scans und Fotos werden gleichermaßen verarbeitet, die Zuordnung erfolgt pro Objekt.",
            },
            {
              question:
                "Erstellt die KI die Anlage V komplett selbstständig?",
              answer:
                "Nein. Der Workflow erstellt eine vollständig vorbefüllte Anlage V als Vorschlag, mit Quellenangabe je Wert und markierten Zweifelsfällen. Kontrolle, Korrektur und Freigabe bleiben bei der Kanzlei, erst danach gehen die Werte in DATEV beziehungsweise in die Erklärung. Die fachliche Verantwortung liegt damit unverändert beim Berufsträger.",
            },
            {
              question:
                "Funktioniert das auch bei Mandanten mit vielen Objekten?",
              answer:
                "Gerade dort lohnt es sich. Der Workflow verarbeitet jedes Objekt als eigenen Fall mit eigener Anlage V, eigener AfA-Fortführung und eigenem Vorjahresvergleich. Ob drei Objekte oder dreißig: Der Kontrollaufwand pro Objekt sinkt auf die Durchsicht der Vorschlagswerte und der markierten Abweichungen.",
            },
            {
              question:
                "Wie kommen die Werte am Ende nach DATEV oder ELSTER?",
              answer:
                "Die geprüften Werte werden strukturiert an die Steuersoftware der Kanzlei übergeben, im DATEV-Umfeld über die vorhandenen Schnittstellen. Die Übermittlung ans Finanzamt läuft wie gewohnt über den bestehenden Kanzlei-Prozess, der Workflow ersetzt die Datenerfassung davor, nicht die Einreichung.",
            },
          ]}
        />
      </ContentWrapper>

      {/* 6. FINAL CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
