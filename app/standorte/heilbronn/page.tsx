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
  rewrites: [
    {
      source: "/ai-workflows-heilbronn",
      preHeadline: "AI Workflows Heilbronn",
      headline: "AI Workflows & Automatisierung in Heilbronn",
      metaTitle: "AI Workflows Heilbronn - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Heilbronn. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Heilbronn",
        "KI Automatisierung Heilbronn",
        "Workflow Automatisierung Heilbronn",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-heilbronn",
      preHeadline: "n8n Automation Heilbronn",
      headline: "n8n Automation in Heilbronn - Workflows automatisieren",
      metaTitle: "n8n Automation Heilbronn | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Heilbronn. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Heilbronn",
        "n8n Heilbronn",
        "Workflow Automation Heilbronn",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-heilbronn",
      preHeadline: "n8n Heilbronn",
      headline: "n8n Agentur in Heilbronn",
      metaTitle: "n8n Heilbronn - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Heilbronn. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Heilbronn und Umgebung.",
      keywords: [
        "n8n Heilbronn",
        "n8n Agentur Heilbronn",
        "n8n Beratung Heilbronn",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-heilbronn",
      preHeadline: "Automation Heilbronn",
      headline: "Automation & Prozessoptimierung in Heilbronn",
      metaTitle: "Automation Heilbronn - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Heilbronn. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Heilbronn",
        "Prozessautomatisierung Heilbronn",
        "Workflow Automation Heilbronn",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-heilbronn",
      preHeadline: "IT Dienstleister Heilbronn",
      headline: "IT Dienstleister in Heilbronn - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Heilbronn - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Heilbronn. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Heilbronn.",
      keywords: [
        "IT Dienstleister Heilbronn",
        "IT Service Heilbronn",
        "Digitalisierung Heilbronn",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-heilbronn",
      preHeadline: "KI Beratung Heilbronn",
      headline: "KI Beratung in Heilbronn - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Heilbronn - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Heilbronn. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Heilbronn",
        "KI Lösungen Heilbronn",
        "Künstliche Intelligenz Heilbronn",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Heilbronn",
  slug: "heilbronn",
  bundesland: "Baden-Württemberg",
  publish: false,
  nearbySmall: [
    "Neckarsulm",
    "Öhringen",
    "Weinsberg",
    "Bad Friedrichshall",
    "Mosbach",
    "Eppingen",
    "Lauffen am Neckar",
    "Sinsheim",
  ],
  crossReference: [
    { name: "Stuttgart", slug: "stuttgart" },
    { name: "Karlsruhe", slug: "karlsruhe" },
    { name: "Ludwigsburg", slug: "ludwigsburg" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Heilbronn | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Retail- und Automotive-Automatisierung in Heilbronn: n8n-Workflows für die Schwarz-Gruppe (Lidl, Kaufland), Audi Neckarsulm, Bechtle, Würth und das IPAI – CSRD-, IATF-16949- und Catena-X-konform.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI-Agentur Heilbronn",
      "n8n Heilbronn",
      "Schwarz Gruppe Workflow",
      "IPAI Heilbronn",
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
          url: "/images/cities/heilbronn.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch KI-Agentur Heilbronn",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/heilbronn.jpg"],
    },
    alternates: {
      canonical: "/standorte/heilbronn",
    },
  };
}

const heilbronnFaqs = [
  {
    question: "Wir liefern an Lidl oder Kaufland – wie integriert ihr n8n in die Schwarz-IT-Welt?",
    answer:
      "Self-hosted on-premise, mit Anbindung an SAP S/4HANA Retail, das Schwarz-IT-Lieferantenportal und Schwarz Digits. Wir decken EDIFACT-Bestell-Workflows nach EANCOM, Eigenmarken-Spezifikationen, Pestizid- und Tierwohl-Nachweise und das CSRD-Lieferketten-Reporting nach ESRS S2 ab.",
  },
  {
    question: "Hilft n8n bei Audi Neckarsulm und dem e-tron-GT-Hochlauf?",
    answer:
      "Ja. Audi Neckarsulm produziert A6, A7, A8 und e-tron GT. Wir bauen JIT/JIS-Workflows nach VDA 4905, Catena-X-Anbindung für PCF und Traceability, IATF-16949-konforme APQP-/PPAP-Doku und KSS-Bestellabwicklung. Identisch zum Audi-Stammwerk Ingolstadt – nur näher an euch.",
  },
  {
    question: "Was bringt n8n im IPAI-Umfeld neben Audi, Porsche, Würth und Fraunhofer?",
    answer:
      "Das IPAI auf 23 Hektar bringt bis 2027 bis zu 5.000 hochqualifizierte Stellen. Wir helfen euren KI-Anwendungen, in die Unternehmens-Workflows zu landen: Anbindung an SAP, ERP-Systeme und das Würth-Lieferantenportal. So wird aus IPAI-Forschung produktive Workflow-Automatisierung in eurem Tagesgeschäft.",
  },
  {
    question: "Hilft das auch Bechtle bei der Konzern-Konsolidierung?",
    answer:
      "Ja. Bechtle ist als DAX-IT-Dienstleister durch zahlreiche Akquisitionen gewachsen und kämpft mit Multi-Currency-Buchhaltung, Lizenz-Management und Konzern-Konsolidierung. Wir automatisieren die Integration neuer Töchter in SAP S/4HANA und die monatliche Konsolidierung nach IFRS.",
  },
  {
    question: "Wir sind 250-MA-Hidden-Champion in Heilbronn-Franken – lohnt sich das?",
    answer:
      "Gerade dann. Im IPAI-Umfeld konkurriert ihr um Fachkräfte mit Lidl, Audi und Porsche. Bewerbermanagement, Onboarding, Auftragsabwicklung und CSRD-ESG-Reporting müssen automatisiert sein, sonst verliert ihr im Personalmarkt. Wir bauen das zum Festpreis in 4 bis 8 Wochen produktiv.",
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
          imageSrc="/images/cities/heilbronn.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Heilbronn"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Heilbronn –{" "}
                Retail-, Automotive- und KI-Automatisierung in Europas{" "}
                <BackgroundHero.Highlight>KI-Quartier</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Schwarz-Gruppe, Audi Neckarsulm, Bechtle, Würth und das IPAI
            prägen Heilbronn-Franken. Wir automatisieren CSRD-, Catena-X-
            und IATF-Workflows mit self-hosted n8n – DSGVO-konform und
            on-premise.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">
              Retail-/Automotive-Workflow besprechen
            </ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={14000}
              label="Audi Neckarsulm Beschäftigte"
              index={0}
            />
            <BackgroundHero.Stat
              value={5000}
              label="Geplante IPAI-Arbeitsplätze"
              index={1}
            />
            <BackgroundHero.Stat
              value={23}
              suffix=" ha"
              label="IPAI-Fläche"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 4. DataTable – Retail-/Automotive-Vergleich */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>
            Retail- und Automotive-Prozesse automatisieren
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
                <DataTable.Cell bold>Lidl/Kaufland EDIFACT-Bestellung</DataTable.Cell>
                <DataTable.Cell>25 Min/Order</DataTable.Cell>
                <DataTable.Cell>1 Min</DataTable.Cell>
                <DataTable.Cell bold>~96 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>CSRD-Pestizid-/Tierwohl-Nachweis</DataTable.Cell>
                <DataTable.Cell>3 Std./Lieferant</DataTable.Cell>
                <DataTable.Cell>15 Min</DataTable.Cell>
                <DataTable.Cell bold>~92 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Audi Neckarsulm VDA-4905</DataTable.Cell>
                <DataTable.Cell>20 Min/Order</DataTable.Cell>
                <DataTable.Cell>30 Sek</DataTable.Cell>
                <DataTable.Cell bold>~97 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Würth-Lieferantenportal-Sync</DataTable.Cell>
                <DataTable.Cell>40 Min/Tag</DataTable.Cell>
                <DataTable.Cell>2 Min</DataTable.Cell>
                <DataTable.Cell bold>~95 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Bewerbermanagement IPAI-Umfeld</DataTable.Cell>
                <DataTable.Cell>2 Std./Bewerbung</DataTable.Cell>
                <DataTable.Cell>10 Min</DataTable.Cell>
                <DataTable.Cell bold>~92 %</DataTable.Cell>
              </DataTable.Row>
            </DataTable.Body>
          </DataTable>
        </div>
      </ContentWrapper>

      {/* 3. IntroBox + Deep Dive Text */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Schwarz-Gruppe, Audi, IPAI – Europas KI-Cluster trifft Premium-Automotive
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo Europas größter Einzelhändler auf Europas größtes KI-Ökosystem trifft
          </IntroBox.Headline>
          <IntroBox.Subline>
            Heilbronn-Franken ist Schwarz-Land, Audi-Region und ab 2027
            Europas größtes KI-Quartier. Lidl, Kaufland, PreZero, Schwarz IT,
            Schwarz Digits, Audi Neckarsulm, Bechtle, Würth und das IPAI mit
            Audi, Porsche und Fraunhofer als Erstmietern erzeugen eine extreme
            Wirtschaftsdichte. Die Automatisierungsanforderungen reichen von
            CSRD-Lieferketten bis Catena-X.
          </IntroBox.Subline>
        </IntroBox>
        <div className="mt-8 space-y-6">
          <Typo.Paragraph>
            Die Schwarz-Gruppe ist Europas größter Einzelhandelskonzern mit
            Lidl in über 30 Ländern, Kaufland-Filialen, PreZero-Recycling und
            zwei eigenen IT-Konzernen: Schwarz IT und Schwarz Digits (mit
            eigener Sovereign-Cloud-Sparte). Bestellabwicklung, Promotion-Disposition,
            Eigenmarken-Spezifikationen, Frischelogistik und Pfandsysteme
            erzeugen Milliarden Transaktionen pro Jahr. CSRD- und LkSG-Pflichten
            zu Pestiziden, Tierwohl und PreZero-Recycling sind massive
            Workflow-Themen, mit eigenen Schwarz-IT-Lieferantenportalen.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Direkt nebenan in Neckarsulm betreibt Audi sein zweitgrößtes
            deutsches Werk mit rund 14.000 Beschäftigten und über 40.000
            sv-pflichtigen Jobs in der Gemeinde gesamt. Hier laufen A6, A7,
            A8 und e-tron GT vom Band, mit identischen IATF-16949-Anforderungen
            wie im Stammwerk Ingolstadt: JIT/JIS-Sequenzierung, Catena-X-Datenräume,
            APQP- und PPAP-Doku. Bechtle ist als DAX-IT-Dienstleister vor
            Ort, Würth aus Künzelsau (Befestigungstechnik) zählt zu den
            größten regionalen Arbeitgebern, Bosch entwickelt in Abstatt
            Fahrwerkstechnologien, Magna/Getrag Getriebe in Untergruppenbach.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Das Herzstück der Heilbronner Transformation ist das IPAI –
            Innovation Park Artificial Intelligence: 23 Hektar Kreis-förmiges
            KI-Quartier mit Audi, Porsche, Würth und Fraunhofer als
            Erstmietern, finanziert mit 50 Millionen Euro Startkapital der
            Dieter-Schwarz-Stiftung. Bis 2027 sollen hier bis zu 5.000
            hochqualifizierte Stellen entstehen. Dazu kommt der Bildungscampus
            mit TUM Heilbronn, DHBW und Hochschule Heilbronn. Wie wir die
            Implementierung in sechs Phasen ausrollen, beschreiben wir auf{" "}
            <Link href="/unser-prozess" className="text-primary-600 hover:underline">
              Unser Prozess
            </Link>
            .
          </Typo.Paragraph>
        </div>
        <div className="mt-10">
          <BoundlessImageCard imagePosition="right">
            <BoundlessImageCard.Image
              src="/images/cities/heilbronn.jpg"
              alt="CSRD- und Catena-X-Automatisierung für Heilbronner Mittelstand"
            />
            <BoundlessImageCard.Content>
              <Typo.H2>
                Schwarz Digits baut eigene Cloud – was machen Mittelständler in Heilbronn-Franken?
              </Typo.H2>
              <Typo.Paragraph>
                Schwarz Digits, Bechtle und Audi leisten sich eigene
                Software- und KI-Teams. Hidden-Champion-Mittelständler in
                Heilbronn-Franken brauchen einen pragmatischen Hebel: schlanke
                n8n-Workflows zwischen SAP, dem Schwarz- oder Würth-
                Lieferantenportal und CSRD-Reporting. Self-hosted, in eurem
                deutschen Rechenzentrum, modular erweiterbar.
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
            { value: 128000, label: "Einwohner Heilbronn" },
            { value: 353000, label: "Einwohner Landkreis Heilbronn" },
            { value: 40000, suffix: "+", label: "SV-Jobs in Neckarsulm" },
            { value: 50, suffix: " Mio. €", label: "Schwarz-Stiftung in IPAI" },
          ]}
        />
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
        <Typo.H2>Häufige Fragen aus Heilbronn</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={heilbronnFaqs} />
        </div>
      </ContentWrapper>

      {/* 6. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
