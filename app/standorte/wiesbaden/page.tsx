import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentWrapper from "@/components/layout/content-wrapper";
import BackgroundHero from "@/components/heroes/background-hero";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import Typo from "@/components/ui/typo";
import IntroBox from "@/components/ui/intro-box";
import BoundlessImageCard from "@/components/cards/boundless-image-card";
import DataTable from "@/components/ui/data-table";
import StatsList from "@/components/ui/stats-list";
import { FaqContainer } from "@/components/ui/faqs";
import { CityLinksFromMeta } from "@/components/standorte/city-links";
import ContactButton from "@/components/buttons/contact-button";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-agentur-wiesbaden",
  rewrites: [
    {
      source: "/ai-workflows-wiesbaden",
      preHeadline: "AI Workflows Wiesbaden",
      headline: "AI Workflows & Automatisierung in Wiesbaden",
      metaTitle: "AI Workflows Wiesbaden - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Wiesbaden. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Wiesbaden",
        "KI Automatisierung Wiesbaden",
        "Workflow Automatisierung Wiesbaden",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-wiesbaden",
      preHeadline: "n8n Automation Wiesbaden",
      headline: "n8n Automation in Wiesbaden - Workflows automatisieren",
      metaTitle: "n8n Automation Wiesbaden | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Wiesbaden. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Wiesbaden",
        "n8n Wiesbaden",
        "Workflow Automation Wiesbaden",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-wiesbaden",
      preHeadline: "n8n Wiesbaden",
      headline: "n8n Agentur in Wiesbaden",
      metaTitle: "n8n Wiesbaden - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Wiesbaden. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Wiesbaden und Umgebung.",
      keywords: [
        "n8n Wiesbaden",
        "n8n Agentur Wiesbaden",
        "n8n Beratung Wiesbaden",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-wiesbaden",
      preHeadline: "Automation Wiesbaden",
      headline: "Automation & Prozessoptimierung in Wiesbaden",
      metaTitle: "Automation Wiesbaden - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Wiesbaden. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Wiesbaden",
        "Prozessautomatisierung Wiesbaden",
        "Workflow Automation Wiesbaden",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-wiesbaden",
      preHeadline: "IT Dienstleister Wiesbaden",
      headline: "IT Dienstleister in Wiesbaden - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Wiesbaden - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Wiesbaden. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Wiesbaden.",
      keywords: [
        "IT Dienstleister Wiesbaden",
        "IT Service Wiesbaden",
        "Digitalisierung Wiesbaden",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-wiesbaden",
      preHeadline: "KI Beratung Wiesbaden",
      headline: "KI Beratung in Wiesbaden - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Wiesbaden - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Wiesbaden. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Wiesbaden",
        "KI Lösungen Wiesbaden",
        "Künstliche Intelligenz Wiesbaden",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-agentur-wiesbaden",
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Wiesbaden",
  slug: "wiesbaden",
  bundesland: "Hessen",
  publish: false,
  nearbySmall: [
    "Hofheim am Taunus",
    "Rüsselsheim am Main",
    "Bad Homburg vor der Höhe",
    "Oberursel",
    "Taunusstein",
    "Eltville am Rhein",
    "Ingelheim am Rhein",
    "Bingen am Rhein",
  ],
  crossReference: [
    { name: "Frankfurt am Main", slug: "frankfurt-am-main" },
    { name: "Mainz", slug: "mainz" },
    { name: "Darmstadt", slug: "darmstadt" },
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
    overrides?.metaTitle ?? "KI-Agentur in Wiesbaden | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Versicherungs- und Behörden-Automatisierung in Wiesbaden: n8n-Workflows für R+V, SV SparkassenVersicherung, HELABA, BKA und Destatis - DSGVO-konform und self-hosted.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Wiesbaden",
      "n8n Wiesbaden",
      "Versicherung Automatisierung Wiesbaden",
      "Compliance Automatisierung Hessen",
      "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [{ url: "/images/cities/wiesbaden.jpg", width: 1200, height: 630, alt: "Wiesbaden Versicherungs-Skyline" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/cities/wiesbaden.jpg"] },
    alternates: { canonical: "/ki-agentur-wiesbaden" },
  };
}

const wiesbadenFaqs = [
  {
    question: "Wie integriert ihr n8n bei einem Versicherer wie R+V oder SV?",
    answer:
      "Self-hosted, on-premise in der bestehenden Rechenzentrums-Infrastruktur. Wir docken an Backend-Systeme wie inSurance Suite, msg.Insurit oder SAP for Insurance an, mit ITIL-konformen Change-Prozessen. Kein einziges Schadens- oder Antragsdokument verlässt das hauseigene Rechenzentrum.",
  },
  {
    question: "Lässt sich BaFin-, MaRisk- und DORA-Compliance mit n8n abbilden?",
    answer:
      "Ja. Jeder Workflow-Schritt wird auditfest in unveränderlichen Logs persistiert, mit Vier-Augen-Freigaben für regulatorisch sensitive Prozesse. DORA-Resilienztests, KYC-Onboarding und KSA-Meldungen an die BaFin werden als versionierte Pipelines geführt.",
  },
  {
    question: "Was bringt n8n in Bundesbehörden wie BKA oder Destatis?",
    answer:
      "Aktenführung, Statistikproduktion und nachgelagerte Berichts-Workflows werden automatisiert, ohne Verlassen der BSI-Grundschutz-zertifizierten Infrastruktur. Über 1.200 Konnektoren (eGovernment-APIs, Fachverfahren, OZG-Schnittstellen) lassen sich anbinden, ohne Vendor Lock-in.",
  },
  {
    question: "Wir sind Dyckerhoff oder Henkell - haben wir denselben Use-Case wie Versicherer?",
    answer:
      "Nein. Für Henkell-Freixenet automatisieren wir Sekt-Etikettierungs- und Steuerprozesse (Branntweinsteuer, Mehrwegpflicht-Reporting), für Dyckerhoff den Zement-Versand mit DACH-Zollformularen. Branche bestimmt die Workflows, das n8n-Fundament bleibt gleich.",
  },
  {
    question: "Müssen wir Open-Source-Workflows selbst hosten oder hostet ihr?",
    answer:
      "Beides möglich. Größere Versicherer und Behörden hosten on-premise - wir liefern Installation, Hardening, Backup-Strategie. Mittelstand und Kommunen entscheiden sich häufig für ein managed Setup in einem deutschen ISO-27001-Rechenzentrum unter unserer Verwaltung.",
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

      {/* 1. BackgroundHero */}
      <ContentWrapper isFirstSection noPadding>
        <BackgroundHero
          imageSrc="/images/cities/wiesbaden.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Wiesbaden"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Wiesbaden -{" "}
                Versicherungs-Automatisierung{" "}
                <BackgroundHero.Highlight>am Rhein</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            R+V, SV SparkassenVersicherung, HELABA, BKA und Destatis prägen den
            Wiesbadener Arbeitsmarkt. Wir automatisieren Schadens-, Compliance-
            und Bürger-Workflows mit self-hosted n8n - BaFin-, MaRisk- und
            DORA-konform.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">
              Versicherungs-Workflow besprechen
            </ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={9000}
              label="Beschäftigte R+V Versicherung"
              index={0}
            />
            <BackgroundHero.Stat
              value={8000}
              label="Mitarbeiter im Bundeskriminalamt"
              index={1}
            />
            <BackgroundHero.Stat
              value={6}
              suffix=" Mrd. €"
              label="R+V-Prämienvolumen Schaden/Unfall"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 4. DataTable - Versicherungs-Vergleich */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>
            Versicherungsprozesse automatisieren
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Der konkrete Zeitgewinn pro Workflow
          </IntroBox.Headline>
        </IntroBox>
        <div className="mt-8">
          <DataTable>
            <DataTable.Head>
              <DataTable.Row>
                <DataTable.HeaderCell>Prozess</DataTable.HeaderCell>
                <DataTable.HeaderCell>Manuell</DataTable.HeaderCell>
                <DataTable.HeaderCell>Automatisiert</DataTable.HeaderCell>
                <DataTable.HeaderCell>Zeitersparnis</DataTable.HeaderCell>
              </DataTable.Row>
            </DataTable.Head>
            <DataTable.Body>
              <DataTable.Row>
                <DataTable.Cell bold>KYC-Vermittler-Onboarding</DataTable.Cell>
                <DataTable.Cell>3-5 Tage</DataTable.Cell>
                <DataTable.Cell>2 Std.</DataTable.Cell>
                <DataTable.Cell bold>~94 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Schadenmeldung erfassen</DataTable.Cell>
                <DataTable.Cell>45 Min/Fall</DataTable.Cell>
                <DataTable.Cell>3 Min</DataTable.Cell>
                <DataTable.Cell bold>~93 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Provisionsabrechnung</DataTable.Cell>
                <DataTable.Cell>2 Tage/Monat</DataTable.Cell>
                <DataTable.Cell>30 Min</DataTable.Cell>
                <DataTable.Cell bold>~96 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>BaFin-MaRisk-Reporting</DataTable.Cell>
                <DataTable.Cell>4 Std./Bericht</DataTable.Cell>
                <DataTable.Cell>20 Min</DataTable.Cell>
                <DataTable.Cell bold>~92 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>OZG-Antragsbearbeitung</DataTable.Cell>
                <DataTable.Cell>3 Std./Antrag</DataTable.Cell>
                <DataTable.Cell>15 Min</DataTable.Cell>
                <DataTable.Cell bold>~92 %</DataTable.Cell>
              </DataTable.Row>
            </DataTable.Body>
          </DataTable>
        </div>
      </ContentWrapper>

      {/* 2. StatsList horizontal */}
      <ContentWrapper colorScheme="primary">
        <StatsList
          cols={4}
          stats={[
            { value: 280000, label: "Einwohner Wiesbaden" },
            { value: 180000, label: "Beschäftigte (sv-pflichtig)" },
            { value: 2700, label: "Destatis-Mitarbeiter" },
            { value: 1806, label: "Älteste Versicherung Deutschlands" },
          ]}
        />
      </ContentWrapper>

      {/* 3. IntroBox + Deep Dive Text */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            R+V, SV, HELABA - plus Bundesbehörden im selben Quadrat
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo Versicherungs-Compliance auf BSI-Grundschutz trifft
          </IntroBox.Headline>
          <IntroBox.Subline>
            Wiesbaden vereint zwei Welten: privatwirtschaftliche Versicherer,
            die unter BaFin, MaRisk und DORA stehen - und Bundesbehörden, die
            unter BSI-Grundschutz und OZG-Folgegesetz operieren. Beide brauchen
            dieselbe Lösung: auditfeste, dokumentierte Workflows ohne Datenfluss
            nach außen.
          </IntroBox.Subline>
        </IntroBox>
        <div className="mt-8 space-y-6">
          <Typo.Paragraph>
            R+V Versicherung, die Nummer eins der genossenschaftlichen
            FinanzGruppe, beschäftigt rund 9.000 Mitarbeiter direkt in
            Wiesbaden und schreibt allein in Schaden und Unfall mehr als
            6 Milliarden Euro Prämienvolumen. SV SparkassenVersicherung führt
            die Tradition der Nassauischen Brandversicherungsanstalt von 1806
            fort - Deutschlands älteste Versicherung. Beide stehen vor
            derselben Realität: bis zu 70 Prozent ihrer Backoffice-Prozesse
            sind automatisierbar, von Antragsprüfung über Risiko-Assessment
            bis Schadenbearbeitung. Insurtechs setzen genau dort an.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Parallel dazu sitzen in Wiesbaden das Bundeskriminalamt (rund
            8.000 Mitarbeiter), das Statistische Bundesamt (rund 2.700) und
            die Landesregierung Hessens. OZG-Folgegesetz, eAkte und KI-Strategie
            des Bundes erzwingen Workflow-Automatisierung - mit der Auflage,
            dass keine Daten das BSI-Grundschutz-zertifizierte Rechenzentrum
            verlassen. Genau dafür ist self-hosted n8n gebaut: Open-Source,
            on-premise, modular erweiterbar.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Mit Henkell-Freixenet, dem weltgrößten Sektproduzenten, kommt eine
            dritte Welt dazu: Branntweinsteuer, Mehrwegpflicht-Reporting,
            Etikettierungs-Compliance und internationaler Zoll. Auch das
            automatisieren wir mit denselben n8n-Bausteinen. Wie wir die
            Implementierung in sechs Phasen strukturieren, beschreiben wir auf
            der Seite{" "}
            <Link href="/unser-prozess" className="text-primary-600 hover:underline">
              Unser Prozess
            </Link>
            .
          </Typo.Paragraph>
        </div>
        <div className="mt-10">
          <BoundlessImageCard imagePosition="right">
            <BoundlessImageCard.Image
              src="/images/cities/banking-compliance.jpg"
              alt="Compliance-Automatisierung für Wiesbadener Versicherer und Bundesbehörden"
            />
            <BoundlessImageCard.Content>
              <Typo.H2>
                R+V investiert in KI - was machen Wiesbadener Makler?
              </Typo.H2>
              <Typo.Paragraph>
                Große Versicherer bauen eigene Data-Science-Teams auf.
                Maklerorganisationen, Vermittlerpools, Schadenregulierer und
                der Wiesbadener Versicherungs-Mittelstand brauchen einen
                anderen Hebel: leichtgewichtige Workflows, die KYC-Antragsprüfung,
                Provisionsabrechnung und Schadenmeldung automatisieren - ohne
                eigenes IT-Großprojekt. Self-hosted, deutsches Rechenzentrum,
                modular erweiterbar.
              </Typo.Paragraph>
            </BoundlessImageCard.Content>
          </BoundlessImageCard>
        </div>
      </ContentWrapper>

      {/* 7. City Links */}
      <ContentWrapper colorScheme="gradient-night">
        <CityLinksFromMeta
          crossReference={metaCustom.crossReference}
          nearbySmall={metaCustom.nearbySmall}
        />
      </ContentWrapper>

      {/* 5. FAQ */}
      <ContentWrapper bodyWidth="small">
        <Typo.H2>Häufige Fragen aus Wiesbaden</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={wiesbadenFaqs} />
        </div>
      </ContentWrapper>

      {/* 6. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
