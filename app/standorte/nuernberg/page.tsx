import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentWrapper from "@/components/layout/content-wrapper";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnImage,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnCallToAction,
} from "@/components/heroes/hero-2-column";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import Typo from "@/components/ui/typo";
import IntroBox from "@/components/ui/intro-box";
import BoundlessImageCard from "@/components/cards/boundless-image-card";
import SavingsCard, {
  SavingsBadge,
  SavingsItems,
  SavingsItem,
} from "@/components/cards/savings-card";
import IndustryFit from "@/components/sections/industry-fit";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/ui/timeline-as-steps";
import { FaqContainer } from "@/components/ui/faqs";
import { CityLinksFromMeta } from "@/components/standorte/city-links";
import ContactButton from "@/components/buttons/contact-button";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-agentur-nuernberg",
  rewrites: [
    {
      source: "/ki-agentur-nuernberg",
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Nürnberg",
  slug: "nuernberg",
  bundesland: "Bayern",
  publish: true,
  nearbySmall: [
    "Schwabach",
    "Zirndorf",
    "Lauf an der Pegnitz",
    "Herzogenaurach",
    "Roth",
    "Forchheim",
    "Neumarkt in der Oberpfalz",
    "Ansbach",
  ],
  crossReference: [
    { name: "Fürth", slug: "fuerth" },
    { name: "Erlangen", slug: "erlangen" },
    { name: "Regensburg", slug: "regensburg" },
    { name: "München", slug: "muenchen" },
  ],
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}): Promise<Metadata> {
  await enforceMainRewrite(rewriteSiteConfig, searchParams);
  const params = await searchParams;
  const overrides = getRewriteOverrides(rewriteSiteConfig, params);

  const title =
    overrides?.metaTitle ??
    "KI Agentur Nürnberg - Workflow-Automatisierung & Prozessoptimierung | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Bluebatch ist Ihre KI Agentur in Nürnberg — Deutschlands Automatisierungshauptstadt. Workflow-Automatisierung, n8n-Workflows und KI-Lösungen für Industrie, DATEV-Ökosystem und Mittelstand in der Metropolregion.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Nürnberg",
      "Workflow-Automatisierung Nürnberg",
      "n8n Nürnberg",
      "KI Automatisierung Nürnberg",
      "Prozessoptimierung Nürnberg",
      "DATEV Automatisierung",
      "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [
        {
          url: "/images/team-collaboration.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch Workflow-Automatisierung Nürnberg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/team-collaboration.jpg"],
    },
    alternates: {
      canonical: "/ki-agentur-nuernberg",
    },
  };
}

const nuernbergFaqs = [
  {
    question:
      "Warum ist Nürnberg ein idealer Standort für Workflow-Automatisierung?",
    answer:
      "Nürnberg vereint industrielle Tradition mit KI-Innovation wie kaum eine andere Stadt. Die SPS-Messe mit 1.175 Ausstellern, das Automation Valley mit 300 Unternehmen und Deutschlands erste KI-Universität (UTN) schaffen ein Ökosystem, in dem Automatisierung nicht Trend, sondern Kernkompetenz ist. Dazu kommt ein Patent-Innovations-Index von 2,0 — doppelt so hoch wie der Bundesdurchschnitt.",
  },
  {
    question:
      "Können bestehende DATEV-Prozesse mit n8n automatisiert werden?",
    answer:
      "Ja. n8n integriert sich über APIs und Schnittstellen mit DATEV-Systemen. Typische Anwendungsfälle sind die automatische Belegerfassung und -zuordnung, das Matching von Bankbewegungen mit offenen Posten und die automatisierte Mandantenkommunikation. Gerade im Nürnberger DATEV-Ökosystem mit 850.000 Kunden bundesweit sehen wir enormes Potenzial für Workflow-Automatisierung in Steuerberatungs- und Wirtschaftsprüfungskanzleien.",
  },
  {
    question:
      "Wie profitieren Industrieunternehmen in der Metropolregion von KI-Workflows?",
    answer:
      "Fertigungsunternehmen in der Metropolregion Nürnberg automatisieren mit n8n Prozesse wie Auftragserfassung, Lieferantenmanagement und Qualitätsdokumentation. Ein typischer Workflow verbindet ERP-System, E-Mail-Eingang und Produktionsdatenbank, sodass eingehende Bestellungen automatisch verarbeitet, Verfügbarkeiten geprüft und Auftragsbestätigungen versendet werden. Das spart 60-80 % manuelle Bearbeitungszeit.",
  },
  {
    question:
      "Welche Rolle spielt die SPS-Messe für Automatisierungstrends in Nürnberg?",
    answer:
      "Die SPS (Smart Production Solutions) ist die Weltleitmesse für industrielle Automatisierung — 1.175 Aussteller, 56.000 Besucher und ein klarer Trend: IT und OT wachsen zusammen. Für unsere Kunden bedeutet das, dass Produktionsdaten zunehmend in Software-Workflows einfließen. n8n bildet dabei die Brücke zwischen Shopfloor-Systemen und Geschäftsprozessen wie Einkauf, Vertrieb und Controlling.",
  },
  {
    question: "Ist n8n DSGVO-konform und für den deutschen Mittelstand geeignet?",
    answer:
      "Absolut. n8n kann self-hosted auf Ihren eigenen Servern oder in einem deutschen Rechenzentrum betrieben werden. Alle Daten bleiben unter Ihrer Kontrolle, kein US-Cloud-Zwang. Für Nürnberger Unternehmen, die mit sensiblen Produktions-, Steuer- oder Kundendaten arbeiten, ist das ein entscheidender Vorteil gegenüber Cloud-only-Lösungen wie Zapier oder Make.",
  },
  {
    question:
      "Wie schnell lässt sich ein erster Automatisierungs-Workflow umsetzen?",
    answer:
      "Erste produktive Workflows stehen in 1-2 Wochen. Komplexere Integrationen, etwa die Anbindung von ERP-Systemen an Logistik-Plattformen oder die Automatisierung ganzer Auftragsabwicklungsketten, dauern 4-8 Wochen. In einem kostenlosen Erstgespräch identifizieren wir gemeinsam den Prozess mit dem größten Hebel und starten dort.",
  },
];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  if (!metaCustom.publish) notFound();

  await enforceMainRewrite(rewriteSiteConfig, searchParams);
  const params = await searchParams;
  const overrides = getRewriteOverrides(rewriteSiteConfig, params);

  return (
    <>
      {/* 1. Hero2Column */}
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>
              {overrides?.preHeadline ?? "Standort Nürnberg"}
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              {overrides?.headline ??
                "KI Agentur Nürnberg — Deutschlands Automatisierungshauptstadt"}
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Wo die SPS-Messe auf DATEV trifft und die UTN Deutschlands erste
              KI-Universität ist. In Nürnberg automatisieren wir
              Geschäftsprozesse mit n8n, self-hosted, DSGVO-konform und
              zugeschnitten auf das Ökosystem der Metropolregion.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Beratung anfragen</ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/cities/nuernberg.jpg"
              alt="Nürnberg Skyline, Standort für KI-Workflows und Automatisierung"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 2. Long-form DATEV narrative */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>DATEV-Ökosystem</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Das DATEV-Ökosystem: 850.000 Kunden, ein Standort
          </IntroBox.Headline>
        </IntroBox>

        <div className="mx-auto max-w-3xl space-y-6 mt-10">
          <Typo.Paragraph>
            Montag, 7:30 Uhr. 47 neue Belege im Posteingang. Mandant Müller hat
            wieder Fotos von Kassenzetteln geschickt, diesmal drei Stück, leicht
            verwackelt, einer davon quer. Mandantin Yilmaz schreibt, dass die
            Umsatzsteuervoranmeldung doch bitte bis Mittwoch fertig sein soll,
            obwohl drei Unterlagen fehlen. Und der neue Azubi fragt zum dritten
            Mal, wie man in DATEV eine Splittbuchung anlegt. So beginnt ein
            ganz normaler Tag in einer Nürnberger Steuerberater-Kanzlei.
          </Typo.Paragraph>

          <Typo.Paragraph>
            Dabei sitzt DATEV mit 9.000 Mitarbeitern nur drei Kilometer entfernt
            am Paumgartnerweg. Die Genossenschaft hat ihren KI-Umsatz
            verdreifacht. MyDATEV Kanzlei hat 2.000 Kanzleien in sechs Monaten
            auf die Cloud-Plattform geholt. DATEV investiert massiv in
            KI-gestützte Belegverarbeitung, intelligente
            Kontierungsvorschläge und automatisierte Plausibilitätsprüfungen.
            Die digitale Transformation der Steuerberatung läuft auf
            Hochtouren.
          </Typo.Paragraph>

          <Typo.Paragraph>
            Aber die meisten Kanzleien stecken noch im manuellen Modus. Belege
            abtippen, Konten zuordnen, Mandanten hinterhertelefonieren. Fristen
            in Excel-Listen pflegen. Bankbewegungen Zeile für Zeile mit offenen
            Posten abgleichen. Das kostet nicht nur Zeit, es frisst die Energie,
            die eigentlich in Beratung fließen sollte. Und es führt zu Fehlern,
            die niemand braucht.
          </Typo.Paragraph>

          <Typo.Paragraph>
            Was ein n8n-Workflow ändert: Eine E-Mail mit Beleg trifft ein. OCR
            liest den Inhalt. KI kategorisiert Belegtyp, Lieferant und
            Kostenstelle. Die Buchung geht automatisch ins DATEV-System. Der
            Mandant bekommt eine Bestätigung. 30 Sekunden statt 5 Minuten. Kein
            Abtippen, kein Zuordnen, kein Hinterhertelefonieren.
          </Typo.Paragraph>

          <Typo.Paragraph>
            Fristverwaltung: n8n prüft täglich alle offenen Fristen, gleicht
            sie mit dem Bearbeitungsstand ab und schickt automatisch
            Erinnerungen an Mandanten UND intern an den zuständigen
            Sachbearbeiter. Keine vergessene USt-VA mehr. Kein panischer
            Freitaganruf, weil eine Abgabefrist am Montag ist.
          </Typo.Paragraph>

          <Typo.Paragraph>
            Bankbewegungen: Der Workflow holt neue Kontobewegungen, matcht sie
            automatisch mit offenen Posten und flaggt Abweichungen. Was früher
            eine Stunde pro Mandant dauerte, erledigt sich in Minuten. Der
            Sachbearbeiter prüft nur noch die Ausnahmen, nicht mehr jeden
            einzelnen Posten.
          </Typo.Paragraph>
        </div>
      </ContentWrapper>

      {/* BoundlessImageCard — DATEV Integration */}
      <ContentWrapper>
        <BoundlessImageCard imagePosition="right">
          <BoundlessImageCard.Image
            src="/images/cities/datev-steuerberater.jpg"
            alt="Automatisierter Kanzlei-Arbeitsplatz mit n8n und DATEV-Integration"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>
              So sieht der automatisierte Kanzlei-Arbeitsplatz aus
            </Typo.H2>
            <Typo.Paragraph>
              n8n verbindet sich über DATEVconnect und DATEV-APIs mit den
              Kernprodukten der Genossenschaft. In der Praxis heißt das: Ein
              Beleg kommt per E-Mail, wird automatisch an eine KI-Erkennung
              übergeben, klassifiziert und mit Kontierungsvorschlag ins
              DATEV-System gebucht. Der Sachbearbeiter prüft nur noch
              Ausnahmen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Dasselbe Prinzip gilt für Mandantenanfragen, Fristüberwachung
              und Reporting. Statt fünf Systeme manuell zu bedienen,
              orchestriert n8n den gesamten Informationsfluss. Self-hosted,
              DSGVO-konform und mit voller Kontrolle über sensible
              Mandantendaten.
            </Typo.Paragraph>
          </BoundlessImageCard.Content>
        </BoundlessImageCard>
      </ContentWrapper>

      {/* 3. TimelineAsSteps */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>In 5 Schritten</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Der Weg zur automatisierten Kanzlei
          </IntroBox.Headline>
        </IntroBox>

        <div className="mt-10">
          <TimelineAsSteps>
            <TimelineAsStepsStep value={1}>
              <Typo.H3>Ist-Analyse</Typo.H3>
              <Typo.Paragraph>
                Welche Prozesse fressen die meiste Zeit? Wir analysieren
                Belegvolumen, Mandantenstruktur und bestehende DATEV-Workflows,
                um den größten Hebel zu identifizieren.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={2}>
              <Typo.H3>Pilotworkflow</Typo.H3>
              <Typo.Paragraph>
                Ein Belegtyp, ein Mandant, ein Workflow. Wir starten klein und
                beweisen den ROI an einem konkreten Prozess, bevor wir
                skalieren.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={3}>
              <Typo.H3>DATEV-Anbindung</Typo.H3>
              <Typo.Paragraph>
                API-Integration via DATEVconnect. Wir verbinden n8n mit Ihren
                bestehenden DATEV-Produkten, sodass Daten nahtlos fließen, ohne
                manuelles Eingreifen.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={4}>
              <Typo.H3>Rollout</Typo.H3>
              <Typo.Paragraph>
                Alle Belegtypen, alle Mandanten. Nach dem erfolgreichen Piloten
                übertragen wir die Automatisierung auf den gesamten
                Kanzleibetrieb.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={5}>
              <Typo.H3>Optimierung</Typo.H3>
              <Typo.Paragraph>
                KI lernt eure Buchungslogik. Mit jedem verarbeiteten Beleg
                werden die Kontierungsvorschläge präziser und die Ausnahmequote
                sinkt.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
          </TimelineAsSteps>
        </div>
      </ContentWrapper>

      {/* 4. SavingsCard */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>ROI für Kanzleien</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was Automatisierung einer typischen 10-Personen-Kanzlei bringt
          </IntroBox.Headline>
        </IntroBox>
        <SavingsCard>
          <SavingsBadge>Einsparungspotenzial pro Kanzlei</SavingsBadge>
          <SavingsItems>
            <SavingsItem label="Weniger manuelle Belegerfassung">
              120 Std./Monat
            </SavingsItem>
            <SavingsItem label="Schnellere Mandantenantworten" highlight>
              40 %
            </SavingsItem>
            <SavingsItem label="ROI erreicht in">
              &lt; 3 Monate
            </SavingsItem>
          </SavingsItems>
        </SavingsCard>
      </ContentWrapper>

      {/* 5. IndustryFit */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Passt es?</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Welche Nürnberger Branchen profitieren
          </IntroBox.Headline>
        </IntroBox>
        <IndustryFit>
          <IndustryFit.Good>
            <IndustryFit.GoodItem title="Steuerberatung & DATEV-Kanzleien">
              Belegverarbeitung, Mandantenkommunikation und Fristmanagement
              bieten sofortiges Automatisierungspotenzial mit messbarem ROI.
            </IndustryFit.GoodItem>
            <IndustryFit.GoodItem title="Industrieautomation (SPS/Siemens)">
              Auftragserfassung, Lieferantenmanagement und
              Qualitätsdokumentation profitieren von n8n als Brücke zwischen
              Shopfloor und ERP.
            </IndustryFit.GoodItem>
            <IndustryFit.GoodItem title="Automotive-Zulieferer (Schaeffler/Bosch)">
              Bestellprozesse, Qualitätsdaten und Lieferketten-Kommunikation
              lassen sich end-to-end automatisieren.
            </IndustryFit.GoodItem>
            <IndustryFit.GoodItem title="Elektrogroßhandel">
              Auftragsabwicklung, Rechnungsprüfung und Disposition sind
              klassische High-Volume-Prozesse mit großem Hebel.
            </IndustryFit.GoodItem>
            <IndustryFit.GoodItem title="Medizintechnik">
              Regulatorische Dokumentation, Chargenrückverfolgung und
              Qualitätsmanagement erfordern fehlerfreie, auditierbare
              Workflows.
            </IndustryFit.GoodItem>
          </IndustryFit.Good>
          <IndustryFit.Poor>
            <IndustryFit.PoorItem title="Einzelhandel mit weniger als 10 Mitarbeitern">
              Zu wenig Prozessvolumen, um den Aufwand für individuelle
              Workflow-Automatisierung zu rechtfertigen. Standardtools reichen
              hier oft aus.
            </IndustryFit.PoorItem>
            <IndustryFit.PoorItem title="Handwerksbetriebe ohne digitale Prozesse">
              Wenn es keine digitalen Systeme gibt, die man verbinden kann,
              fehlt die Grundlage für Workflow-Automatisierung. Erst
              digitalisieren, dann automatisieren.
            </IndustryFit.PoorItem>
          </IndustryFit.Poor>
        </IndustryFit>
      </ContentWrapper>

      {/* 6. City Links */}
      <ContentWrapper colorScheme="gradient-night">
        <CityLinksFromMeta
          crossReference={metaCustom.crossReference}
          nearbySmall={metaCustom.nearbySmall}
        />
      </ContentWrapper>

      {/* 7. FAQ */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer faqs={nuernbergFaqs}>
          <FaqContainer.Headline>
            FAQ zur Workflow-Automatisierung in Nürnberg
          </FaqContainer.Headline>
        </FaqContainer>
      </ContentWrapper>

      {/* 8. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
