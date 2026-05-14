import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentWrapper from "@/components/layout/content-wrapper";
import BackgroundHero from "@/components/heroes/background-hero";
import IntroBox from "@/components/ui/intro-box";
import BoundlessImageCard from "@/components/cards/boundless-image-card";
import DataTable from "@/components/ui/data-table";
import StatsList from "@/components/ui/stats-list";
import { FaqContainer } from "@/components/ui/faqs";
import { CityLinksFromMeta } from "@/components/standorte/city-links";
import ContactButton from "@/components/buttons/contact-button";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import Typo from "@/components/ui/typo";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";


export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-agentur-mainz",
  rewrites: [
    {
      source: "/ai-workflows-mainz",
      preHeadline: "AI Workflows Mainz",
      headline: "AI Workflows & Automatisierung in Mainz",
      metaTitle: "AI Workflows Mainz - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Mainz. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Mainz",
        "KI Automatisierung Mainz",
        "Workflow Automatisierung Mainz",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-mainz",
      preHeadline: "n8n Automation Mainz",
      headline: "n8n Automation in Mainz - Workflows automatisieren",
      metaTitle: "n8n Automation Mainz | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Mainz. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Mainz",
        "n8n Mainz",
        "Workflow Automation Mainz",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-mainz",
      preHeadline: "n8n Mainz",
      headline: "n8n Agentur in Mainz",
      metaTitle: "n8n Mainz - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Mainz. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Mainz und Umgebung.",
      keywords: [
        "n8n Mainz",
        "n8n Agentur Mainz",
        "n8n Beratung Mainz",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-mainz",
      preHeadline: "Automation Mainz",
      headline: "Automation & Prozessoptimierung in Mainz",
      metaTitle: "Automation Mainz - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Mainz. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Mainz",
        "Prozessautomatisierung Mainz",
        "Workflow Automation Mainz",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-mainz",
      preHeadline: "IT Dienstleister Mainz",
      headline: "IT Dienstleister in Mainz - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Mainz - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Mainz. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Mainz.",
      keywords: [
        "IT Dienstleister Mainz",
        "IT Service Mainz",
        "Digitalisierung Mainz",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-mainz",
      preHeadline: "KI Beratung Mainz",
      headline: "KI Beratung in Mainz - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Mainz - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Mainz. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Mainz",
        "KI Lösungen Mainz",
        "Künstliche Intelligenz Mainz",
        "Bluebatch",
      ],
    },
      {
      source: "/ki-agentur-mainz",
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Mainz",
  slug: "mainz",
  bundesland: "Rheinland-Pfalz",
  publish: false,
  nearbySmall: [
    "Ingelheim am Rhein",
    "Bingen am Rhein",
    "Rüsselsheim am Main",
    "Neu-Isenburg",
    "Langen",
    "Alzey",
  ],
  crossReference: [
    { name: "Wiesbaden", slug: "wiesbaden" },
    { name: "Frankfurt am Main", slug: "frankfurt-am-main" },
    { name: "Darmstadt", slug: "darmstadt" },
    { name: "Koblenz", slug: "koblenz" },
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
    "KI-Agentur in Mainz | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Biotech- und Pharma-Automatisierung in Mainz: GxP-konforme n8n-Workflows für BioNTech-Zulieferer, Schott, Boehringer-Ingelheim-Achse und Universitätsmedizin - self-hosted und auditfest.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Mainz",
      "n8n Mainz",
      "Pharma Automatisierung Mainz",
      "GxP Workflow Mainz",
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
          url: "/images/cities/mainz.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch Workflow-Automatisierung Mainz",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/mainz.jpg"],
    },
    alternates: {
      canonical: "/ki-agentur-mainz",
    },
  };
}

const mainzFaqs = [
  {
    question: "Wir sind BioNTech-Zulieferer - wie integriert ihr n8n in unsere GxP-Welt?",
    answer:
      "Self-hosted on-premise in eurer validierten IT-Umgebung. Wir docken an eQMS-Systeme wie Veeva Vault oder TrackWise, an SAP S/4HANA und an LIMS-Lösungen an, mit vollständigem Audit-Trail nach 21 CFR Part 11 und Annex 11. Kein Studien-, Chargen- oder Pharmakovigilanz-Datensatz verlässt euer Rechenzentrum.",
  },
  {
    question: "Wie automatisiert ihr Schott-Vial-Lieferketten für Pharma-Glasfläschchen?",
    answer:
      "Wir verbinden SAP S/4HANA, das Schott-Lieferantenportal und Kundenbestellsysteme über EDI/EDIFACT mit n8n-Workflows. Chargenfreigabe, COA-Dokumente und Mehrwegpfand-Tracking laufen automatisiert, inklusive Anbindung an die GS1-Serialisierung für DSCSA und EU-FMD.",
  },
  {
    question: "Hilft n8n bei ZDF und SWR in der Medienproduktion?",
    answer:
      "Ja. Wir automatisieren Content-Ingest aus AVID, Rechte-Management in vMix oder Mediagenix und Distribution an Mediatheken und Streaming-Plattformen. KI-gestützte Metadaten-Generierung und automatische Untertitelung über Whisper-Modelle laufen self-hosted, ohne dass Rohmaterial an US-Clouds wandert.",
  },
  {
    question: "Was bringt das Forschungs-Spin-offs rund um BioNTech und die JGU?",
    answer:
      "Junge Biotech-Startups müssen schon vor Phase I GMP-konform dokumentieren. Wir bauen früh skalierbare Workflows für Studiendaten-Ingest, Lieferanten-Audits und Pharmakovigilanz-Meldungen an PEI und EMA auf - mit n8n statt teurer eQMS-Suite, voll auditierbar von Tag eins an.",
  },
  {
    question: "Wir sind ein DTC-Weinhändler in Rheinhessen - ist das nicht zu kleinteilig für Automatisierung?",
    answer:
      "Im Gegenteil. Wir verbinden Shopify oder Shopware mit DHL, BranntweinMonG-Meldung an den Zoll, Mehrwegpfand-Reporting und Buchhaltung in DATEV. Saisonale Lastspitzen rund um die Rheinhessen-Weinmessen lassen sich so ohne zusätzliches Personal abfangen.",
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
          imageSrc="/images/cities/mainz.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Mainz"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Mainz -{" "}
                Biotech-Automatisierung{" "}
                <BackgroundHero.Highlight>am Rhein</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            BioNTech, Schott, ZDF und die Universitätsmedizin prägen den
            Mainzer Arbeitsmarkt. Wir automatisieren GxP-, Studien- und
            Lieferketten-Workflows mit self-hosted n8n - 21 CFR Part 11,
            Annex 11 und LkSG-konform.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">
              Biotech-Workflow besprechen
            </ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={4500}
              label="BioNTech-Mitarbeiter in Mainz"
              index={0}
            />
            <BackgroundHero.Stat
              value={5500}
              label="Schott-Beschäftigte am Standort"
              index={1}
            />
            <BackgroundHero.Stat
              value={8000}
              label="Beschäftigte Universitätsmedizin"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 3. IntroBox + Deep Dive Text */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            BioNTech, Schott, ZDF - Biotech-Cluster mit Pharma-Glas und Medien
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo mRNA-Pipelines auf Pharma-Glas und Medien-Compliance treffen
          </IntroBox.Headline>
          <IntroBox.Subline>
            Mainz hat sich in fünf Jahren vom Provinzstandort zum europäischen
            Biotech-Hotspot entwickelt. Wer im GxP-Umfeld liefert, im Pharma-Glas
            mit Schott zusammenarbeitet oder beim ZDF Medienproduktion verantwortet,
            braucht heute dieselbe Lösung: auditfeste, dokumentierte Workflows
            ohne Datenfluss in US-Clouds.
          </IntroBox.Subline>
        </IntroBox>
        <div className="mt-8 space-y-6">
          <Typo.Paragraph>
            BioNTech beschäftigt rund 4.500 Mitarbeiter direkt in Mainz und
            führt eine der weltweit breitesten mRNA-Pipelines, von der
            Onkologie über Infektionskrankheiten bis zu seltenen Erkrankungen.
            Auf der anderen Rheinseite produziert Boehringer Ingelheim mit
            rund 9.000 Beschäftigten in Ingelheim. Dazwischen sitzt Schott in
            Mainz, Weltmarktführer für Pharma-Vials, mit rund 5.500 lokalen und
            17.100 weltweiten Mitarbeitern. Diese drei Pole erzwingen
            GxP-Compliance bei hunderten Zulieferern - von Logistikern über
            Engineering-Dienstleister bis zu IT-Häusern. Veeva Vault, TrackWise
            und SAP S/4HANA müssen sauber miteinander reden, auditfest und
            ohne manuelle Schnittstellen.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Parallel sitzen in Mainz das ZDF mit rund 3.700 Beschäftigten, die
            Universitätsmedizin mit etwa 8.000 Mitarbeitern und die
            Johannes-Gutenberg-Universität mit ihren 4 Hochschulen. ZDF und SWR
            stehen unter massivem Effizienzdruck durch sinkende Rundfunkbeiträge,
            Streaming-Konkurrenz und neue Medienstaatsverträge. Die
            Universitätsmedizin kämpft wie alle Maximalversorger mit DRG-Kodierung,
            ePA-Integration nach §§ 341 ff. SGB V und akutem Pflegekräftemangel.
            Beide haben dieselbe Anforderung an Automatisierung: keine
            Patientendaten oder Rohmaterial darf in US-Clouds verarbeitet werden.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Hinzu kommt Rheinhessen als größtes deutsches Weinanbaugebiet mit
            seiner wachsenden DTC-Szene. Branntweinsteuermeldung an den Zoll,
            Mehrwegpfand-Reporting und DATEV-Buchhaltung sind Pflicht - und
            lassen sich mit denselben n8n-Bausteinen abbilden wie die
            Pharma-Workflows. Wie wir die Implementierung in sechs Phasen
            strukturieren, beschreiben wir auf der Seite{" "}
            <Link href="/unser-prozess" className="text-primary-600 hover:underline">
              Unser Prozess
            </Link>
            .
          </Typo.Paragraph>
        </div>
        <div className="mt-10">
          <BoundlessImageCard imagePosition="right">
            <BoundlessImageCard.Image
              src="/images/cities/mainz.jpg"
              alt="GxP-Automatisierung für Mainzer Biotech- und Pharma-Zulieferer"
            />
            <BoundlessImageCard.Content>
              <Typo.H2>
                BioNTech baut eigene KI-Teams - was machen Mainzer Zulieferer?
              </Typo.H2>
              <Typo.Paragraph>
                Große Biotechs leisten sich eigene Data-Science-Abteilungen.
                Mittelständische Zulieferer in Engineering, Logistik, Lab-Services
                und IT brauchen einen anderen Hebel: schlanke, GxP-konforme
                Workflows, die eQMS-, ERP- und LIMS-Systeme miteinander
                verbinden, ohne ein eigenes IT-Großprojekt. Self-hosted, in
                eurem deutschen Rechenzentrum, modular erweiterbar.
              </Typo.Paragraph>
            </BoundlessImageCard.Content>
          </BoundlessImageCard>
        </div>
      </ContentWrapper>

      {/* 2. StatsList horizontal */}
      <ContentWrapper colorScheme="primary">
        <StatsList
          cols={4}
          stats={[
            { value: 224684, label: "Einwohner Mainz" },
            { value: 128398, label: "Beschäftigte (sv-pflichtig)" },
            { value: 7200, label: "BioNTech weltweit" },
            { value: 17100, label: "Schott AG weltweit" },
          ]}
        />
      </ContentWrapper>

      {/* 4. DataTable - Biotech-Vergleich */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>
            Biotech- und Pharma-Prozesse automatisieren
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
                <DataTable.Cell bold>GxP-Lieferanten-Audit</DataTable.Cell>
                <DataTable.Cell>5 Tage</DataTable.Cell>
                <DataTable.Cell>4 Std.</DataTable.Cell>
                <DataTable.Cell bold>~92 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Chargenfreigabe (CoA-Review)</DataTable.Cell>
                <DataTable.Cell>3 Std./Charge</DataTable.Cell>
                <DataTable.Cell>15 Min</DataTable.Cell>
                <DataTable.Cell bold>~92 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Pharmakovigilanz-Meldung PEI</DataTable.Cell>
                <DataTable.Cell>90 Min/Case</DataTable.Cell>
                <DataTable.Cell>8 Min</DataTable.Cell>
                <DataTable.Cell bold>~91 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Vial-Bestell-EDI an Schott</DataTable.Cell>
                <DataTable.Cell>45 Min/Order</DataTable.Cell>
                <DataTable.Cell>2 Min</DataTable.Cell>
                <DataTable.Cell bold>~96 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>ZDF Content-Metadaten-Pflege</DataTable.Cell>
                <DataTable.Cell>20 Min/Asset</DataTable.Cell>
                <DataTable.Cell>30 Sek</DataTable.Cell>
                <DataTable.Cell bold>~97 %</DataTable.Cell>
              </DataTable.Row>
            </DataTable.Body>
          </DataTable>
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
        <Typo.H2>Häufige Fragen aus Mainz</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={mainzFaqs} />
        </div>
      </ContentWrapper>

      {/* 6. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
