import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentWrapper from "@/components/layout/content-wrapper";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnCallToAction,
  Hero2ColumnImage,
} from "@/components/heroes/hero-2-column";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import Typo from "@/components/ui/typo";
import IntroBox from "@/components/ui/intro-box";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import NumberedList from "@/components/ui/numbered-list";
import StatsList from "@/components/ui/stats-list";
import { FaqContainer } from "@/components/ui/faqs";
import { CityLinksFromMeta } from "@/components/standorte/city-links";
import ContactButton from "@/components/buttons/contact-button";
import { Sword, ChefHat, Globe, Hammer } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-agentur-solingen",
  rewrites: [
    {
      source: "/ai-workflows-solingen",
      preHeadline: "AI Workflows Solingen",
      headline: "AI Workflows & Automatisierung in Solingen",
      metaTitle: "AI Workflows Solingen - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Solingen. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Solingen",
        "KI Automatisierung Solingen",
        "Workflow Automatisierung Solingen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-solingen",
      preHeadline: "n8n Automation Solingen",
      headline: "n8n Automation in Solingen - Workflows automatisieren",
      metaTitle: "n8n Automation Solingen | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Solingen. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Solingen",
        "n8n Solingen",
        "Workflow Automation Solingen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-solingen",
      preHeadline: "n8n Solingen",
      headline: "n8n Agentur in Solingen",
      metaTitle: "n8n Solingen - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Solingen. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Solingen und Umgebung.",
      keywords: [
        "n8n Solingen",
        "n8n Agentur Solingen",
        "n8n Beratung Solingen",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-solingen",
      preHeadline: "Automation Solingen",
      headline: "Automation & Prozessoptimierung in Solingen",
      metaTitle: "Automation Solingen - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Solingen. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Solingen",
        "Prozessautomatisierung Solingen",
        "Workflow Automation Solingen",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-solingen",
      preHeadline: "IT Dienstleister Solingen",
      headline: "IT Dienstleister in Solingen - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Solingen - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Solingen. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Solingen.",
      keywords: [
        "IT Dienstleister Solingen",
        "IT Service Solingen",
        "Digitalisierung Solingen",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-solingen",
      preHeadline: "KI Beratung Solingen",
      headline: "KI Beratung in Solingen - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Solingen - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Solingen. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Solingen",
        "KI Lösungen Solingen",
        "Künstliche Intelligenz Solingen",
        "Bluebatch",
      ],
    },
      {
      source: "/ki-agentur-solingen",
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Solingen",
  slug: "solingen",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Hilden",
    "Haan",
    "Langenfeld",
    "Leichlingen",
    "Wermelskirchen",
    "Erkrath",
  ],
  crossReference: [
    { name: "Wuppertal", slug: "wuppertal" },
    { name: "Remscheid", slug: "remscheid" },
    { name: "Düsseldorf", slug: "duesseldorf" },
    { name: "Leverkusen", slug: "leverkusen" },
    { name: "Köln", slug: "koeln" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Solingen | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Workflows für Solinger Schneidwaren-Hersteller: Solinger-Siegel-Compliance, Co-Branding-Royalty-Pipelines, DTC-Workflows für USA/Japan und Manufaktur-Auftragsabwicklung für Zwilling, Wüsthof und Mittelstand.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Solingen",
      "n8n Solingen",
      "Solinger Verordnung Workflow",
      "Schneidwaren Automatisierung",
      "Klingenstadt",
      "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [{ url: "/images/cities/solingen.jpg", width: 1200, height: 630, alt: "Solingen - Klingenstadt und Schneidwaren-Cluster" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/cities/solingen.jpg"] },
    alternates: { canonical: "/ki-agentur-solingen" },
  };
}

const solingenFaqs = [
  {
    question: "Können wir Solinger-Siegel-Compliance mit n8n abbilden?",
    answer:
      "Ja. Verarbeitungs-Logs, Werkstoff-Charge-Tracking und Herkunftsdeklarationen werden in revisionssicheren Pipelines orchestriert. Bei Markenrechtsstreitigkeiten haben Sie auf Knopfdruck lückenlose Verarbeitungs-Nachweise nach Solinger Verordnung.",
  },
  {
    question: "Wir betreiben Co-Branding mit Sterneköchen - wo hilft Automatisierung?",
    answer:
      "Bei Royalty-Tracking, Mengenmeldungen und vertraglich vereinbarten Quartals-Reports. Workflows verbinden NetSuite/SAP, DocuSign, PIM-Systeme und Marketing-Tools - damit Lizenzpartner zeitnahe und korrekte Abrechnungen erhalten.",
  },
  {
    question: "DTC-Vertrieb in die USA - welche Workflows brauchen wir?",
    answer:
      "Zoll-Klassifikation (HTS), Sales-Tax via Avalara, FedEx-/DHL-Versand und Premium-Customer-Service mit AI-Agent-Vorsortierung. Retouren werden klassifiziert und an Manufaktur oder Refurb-Linie geroutet.",
  },
  {
    question: "Manufaktur mit 40+ Fertigungsschritten - kann n8n da helfen?",
    answer:
      "Ja. MES-, ERP- und QM-Systeme werden zu durchgängigen Charge-Pipelines verbunden. Härteprotokolle, Schleif-Logs und Qualitätsfreigaben revisionssicher dokumentiert - Voraussetzung für Premium-Garantie-Versprechen.",
  },
  {
    question: "Lohnt sich n8n für Werkzeug- und Schließtechnik-Mittelstand?",
    answer:
      "Definitiv. CPQ für Sonderanfertigungen, Lieferanten-Onboarding und Auftragsabwicklung sind unmittelbare Hebel. Mittelständler im Bergischen Land profitieren überproportional von schlanken Automatisierungen.",
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

      {/* 1. Hero2Column mit Image (statt BackgroundHero — Varianz!) */}
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>
              {overrides?.preHeadline ?? "Standort Solingen - Klingenstadt"}
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              {overrides?.headline ?? "KI-Agentur in Solingen - für die deutsche Schneidwaren-Hauptstadt"}
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Wüsthof, Zwilling J.A. Henckels, Robert Herder und über 100 Hersteller machen Solingen zur weltweit einzigen Stadt mit geschützter Herkunftsbezeichnung für Schneidwaren. Wir bauen Workflows für Markenrechtsschutz, Manufaktur-Logistik und Premium-DTC-Vertrieb.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Beratung anfragen
              </ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/cities/solingen.jpg"
              alt="Solingen - Klingenstadt und Schneidwaren-Cluster"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 5. StatsList horizontal */}
      <ContentWrapper colorScheme="primary">
        <StatsList
          cols={4}
          stats={[
            { value: 159000, label: "Einwohner Solingen" },
            { value: 90, suffix: " %", label: "Anteil deutscher Schneidwaren-Produktion" },
            { value: 1938, label: "Solinger Verordnung in Kraft" },
            { value: 100, suffix: "+", label: "Schneidwaren-Hersteller in Solingen" },
          ]}
        />
      </ContentWrapper>

      {/* 3. NumberedList - 5 Stadt-Eigenheiten */}
      <ContentWrapper bodyWidth="small">
        <Typo.H2>5 Eigenheiten der Solinger Wirtschaft, die Workflows beeinflussen</Typo.H2>
        <div className="mt-6">
          <NumberedList>
            <NumberedList.Item title="Solinger Verordnung als geographische Schutzmarke:">
              Seit 1938 dürfen nur in Solingen veredelte Schneidwaren das Solingen-Siegel führen. Herkunftsnachweise, Verarbeitungs-Logs und Markenrechts-Dokumentation gehören in revisionssichere Pipelines, sonst droht Markenmissbrauchs-Verfahren.
            </NumberedList.Item>
            <NumberedList.Item title="Zwilling, Wüsthof und Premium-Manufaktur-Geschäft:">
              Hochpreisige Messer mit 40+ Fertigungsschritten erfordern detaillierte Charge-Verfolgung, Härteprotokolle und Qualitätsdokumentation. Manuelle Excel-Listen skalieren in der Premium-Manufaktur nicht.
            </NumberedList.Item>
            <NumberedList.Item title="DTC-Geschäft mit hohem Markenpremium:">
              Solinger Hersteller verkaufen zunehmend direkt an Endkunden in den USA, Japan und der EU - mit Premium-Preisen und entsprechend hoher Service-Erwartung. CRM, Shopify-Pipelines und KI-Personalisierung sind Pflicht.
            </NumberedList.Item>
            <NumberedList.Item title="Co-Branding mit Sterneköchen und Influencern:">
              Lizenzdeals mit Jamie Oliver, Tim Mälzer und Gordon Ramsay-Tochterunternehmen erfordern Royalty-Tracking, vertragliche Mengen-Reports und schnelle Marketing-Workflows zwischen PIM und Social-Media-Tools.
            </NumberedList.Item>
            <NumberedList.Item title="Werkzeugindustrie und Solinger Hochlandszene:">
              Neben Schneidwaren gibt es eine starke Werkzeug- und Elektrotechnik-Tradition (Schließtechnik, BIA). Hidden Champions mit 50-500 MA brauchen schlanke Auftragsabwicklung und CPQ-Workflows.
            </NumberedList.Item>
          </NumberedList>
        </div>
      </ContentWrapper>

      {/* 4. SimpleGrid cols=2 - 4 Specialty-Use-Cases */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Workflow-Bausteine für Solinger Schneidwaren-Hersteller</Typo.H2>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Sword className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Solinger-Siegel- und Herkunftsnachweis-Workflows</Typo.H3>
            <Typo.Paragraph>
              Verarbeitungs-Logs, Werkstoff-Charge-Tracking und Herkunftsdeklarationen werden lückenlos dokumentiert. Anbindung an SAP, branchen-spezifische PLM-Tools und Markenrechts-Datenbanken.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <ChefHat className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Co-Branding- und Royalty-Pipelines mit Sterneköchen</Typo.H3>
            <Typo.Paragraph>
              Lizenz-Verträge, Mengenmeldungen, Royalty-Berechnungen und Marketing-Freigaben in DocuSign-, NetSuite- und PIM-Pipelines orchestriert. Quartalsweise Reports automatisch generiert.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Globe className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>DTC-Shop- und Versand-Workflows USA/Japan/EU</Typo.H3>
            <Typo.Paragraph>
              Bestell-, Zoll- und Retouren-Orchestrierung zwischen Shopify, Avalara, FedEx/DHL und ERP. Internationale Steuer-IDs und Importdokumentation für Premium-Schneidwaren-Versand.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Hammer className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Manufaktur-Auftragsabwicklung und Härteprotokolle</Typo.H3>
            <Typo.Paragraph>
              40+ Fertigungsschritte mit Wärmebehandlung, Schleifen und Polieren werden in MES-/ERP-Pipelines abgebildet. Härteprotokolle und Qualitäts-Logs revisionssicher archiviert.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 2. IntroBox - Specialty-Cluster-Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Solingen - einzige geschützte Herkunftsbezeichnung für Schneidwaren weltweit
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo "Made in Solingen" rechtlich geschützt ist, müssen Workflows die Echtheit lückenlos belegen
          </IntroBox.Headline>
          <IntroBox.Subline>
            Über 90 % der deutschen Schneidwaren-Produktion stammen aus dem Bergischen Land. Diese Konzentration verlangt spezialisierte Prozesse für Markenrechtsschutz nach der Solinger Verordnung, Manufaktur-Auftragsabwicklung und Premium-Markenführung im DTC-Geschäft.
          </IntroBox.Subline>
        </IntroBox>
      </ContentWrapper>

      {/* 8. City Links */}
      <ContentWrapper colorScheme="gradient-night">
        <CityLinksFromMeta
          crossReference={metaCustom.crossReference}
          nearbySmall={metaCustom.nearbySmall}
        />
      </ContentWrapper>

      {/* 6. FAQ */}
      <ContentWrapper bodyWidth="small">
        <Typo.H2>Häufige Fragen aus Solingen</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={solingenFaqs} />
        </div>
        <div className="mt-8">
          <Typo.Paragraph>
            Wie wir die Implementierung Schritt für Schritt strukturieren, beschreiben wir
            auf der Seite{" "}
            <Link href="/unser-prozess" className="text-primary-600 hover:underline">
              Unser Prozess
            </Link>
            .
          </Typo.Paragraph>
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
