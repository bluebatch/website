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
import { HardHat, BadgePercent, ToyBrick, Package } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-workflows-fuerth",
      preHeadline: "AI Workflows Fürth",
      headline: "AI Workflows & Automatisierung in Fürth",
      metaTitle: "AI Workflows Fürth - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Fürth. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Fürth",
        "KI Automatisierung Fürth",
        "Workflow Automatisierung Fürth",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-fuerth",
      preHeadline: "n8n Automation Fürth",
      headline: "n8n Automation in Fürth - Workflows automatisieren",
      metaTitle: "n8n Automation Fürth | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Fürth. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Fürth",
        "n8n Fürth",
        "Workflow Automation Fürth",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-fuerth",
      preHeadline: "n8n Fürth",
      headline: "n8n Agentur in Fürth",
      metaTitle: "n8n Fürth - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Fürth. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Fürth und Umgebung.",
      keywords: [
        "n8n Fürth",
        "n8n Agentur Fürth",
        "n8n Beratung Fürth",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-fuerth",
      preHeadline: "Automation Fürth",
      headline: "Automation & Prozessoptimierung in Fürth",
      metaTitle: "Automation Fürth - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Fürth. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Fürth",
        "Prozessautomatisierung Fürth",
        "Workflow Automation Fürth",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-fuerth",
      preHeadline: "IT Dienstleister Fürth",
      headline: "IT Dienstleister in Fürth - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Fürth - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Fürth. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Fürth.",
      keywords: [
        "IT Dienstleister Fürth",
        "IT Service Fürth",
        "Digitalisierung Fürth",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-fuerth",
      preHeadline: "KI Beratung Fürth",
      headline: "KI Beratung in Fürth - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Fürth - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Fürth. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Fürth",
        "KI Lösungen Fürth",
        "Künstliche Intelligenz Fürth",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Fürth",
  slug: "fuerth",
  bundesland: "Bayern",
  publish: false,
  nearbySmall: [
    "Zirndorf",
    "Schwabach",
    "Oberasbach",
    "Langenzenn",
    "Herzogenaurach",
    "Stein",
  ],
  crossReference: [
    { name: "Nürnberg", slug: "nuernberg" },
    { name: "Erlangen", slug: "erlangen" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Fürth | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Workflows für Fürther Marken-Mittelstand: PSA-Compliance für uvex Sports, Heißpräge-Sicherheit für Leonhard Kurz, Spielzeug-DTC für Bruder und Versandhandels-Automatisierung im Quelle-Erbe.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Fürth",
      "n8n Fürth",
      "uvex PSA Compliance",
      "Leonhard Kurz Workflow",
      "Bruder Spielwaren",
      "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [{ url: "/images/cities/fuerth.jpg", width: 1200, height: 630, alt: "Fürth - uvex Sports, Leonhard Kurz und Versandhandels-Erbe" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/cities/fuerth.jpg"] },
    alternates: { canonical: "/standorte/fuerth" },
  };
}

const fuerthFaqs = [
  {
    question: "uvex- oder PSA-Hersteller: wie hilft n8n bei EN-ISO-16321?",
    answer:
      "Notified-Body-Anbindung (TÜV, DEKRA), Konformitätserklärungen, Charge-Tracking und technische Dokumentation in n8n-Pipelines. PSA-Verordnung 2016/425 revisionssicher mit Audit-Trail abgebildet.",
  },
  {
    question: "Leonhard-Kurz-Zulieferer: was bringt Automatisierung?",
    answer:
      "Lieferanten-Workflows mit Notenbanken, ITAR-/EAR-Klassifikation, Charge-Sicherheit und BAFA-Antragstellung in n8n-Pipelines mit Vier-Augen-Freigabe. Anbindung an SAP GTS und Sicherheits-Audit-Tools.",
  },
  {
    question: "Bruder-Style DTC-Spielzeug: wie skalieren wir global?",
    answer:
      "EN-71-Konformität, REACH-Compliance, DTC-Versandpipelines in 60+ Länder und saisonale Peak-Skalierung. Anbindung an Shopify, ERP und Versanddienstleister - mit Altersverifikations- und Steuer-Logik.",
  },
  {
    question: "Wir sind Versandhandel-Mittelstand: wo lohnt sich KI zuerst?",
    answer:
      "Bei Retouren-Klassifikation mit AI Agents, bei Bestellabwicklung zwischen Shop und ERP und bei Customer-Service-Vorsortierung. Drei Bereiche mit klarem ROI in 4-8 Wochen.",
  },
  {
    question: "Klinikum Fürth: kann n8n Pflege-Onboarding abbilden?",
    answer:
      "Ja. Pflege-Personal-Onboarding zwischen Klinik-ERP, SAP HCM, IT-Bereitstellung und Schulungs-Plattformen. MDR-Compliance bei Verbandsmitteln und Drittmittel-Reporting inklusive.",
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
              {overrides?.preHeadline ?? "Standort Fürth - Kleeblattstadt"}
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              {overrides?.headline ?? "KI-Agentur in Fürth - für uvex Sports, Leonhard Kurz und Quelle-Erbe"}
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              uvex Sports liefert Schutzbrillen und Helme weltweit, Leonhard Kurz ist Marktführer für Heißpräge-Technologie, Bruder Spielwaren ist Weltmarke und das Quelle-Erbe lebt in heutigen Versandhändlern weiter. Wir bauen Workflows für PSA-Compliance, Druckveredelung und E-Commerce.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Beratung anfragen
              </ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/cities/fuerth.jpg"
              alt="Fürth - uvex Sports, Leonhard Kurz und Versandhandels-Erbe"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 3. NumberedList - 5 Stadt-Eigenheiten */}
      <ContentWrapper bodyWidth="small">
        <Typo.H2>5 Eigenheiten der Fürther Wirtschaft, die Workflows beeinflussen</Typo.H2>
        <div className="mt-6">
          <NumberedList>
            <NumberedList.Item title="uvex Sports und PSA-Compliance EN ISO 16321:">
              Schutzbrillen, Helme und PSA für Profis (Arbeitsschutz, Motorsport, Wintersport) unterliegen strengsten EN-/ISO-Vorschriften und FFP-Zertifizierung. Notified-Body-Anbindung (TÜV, DEKRA) und Charge-Tracking sind Pflicht.
            </NumberedList.Item>
            <NumberedList.Item title="Leonhard Kurz und Heißpräge-Technologie:">
              Marktführer für Heißpräge-Folien für Banknoten, Sicherheitsdokumente und Premium-Markenverpackung. Lieferanten-Workflows mit Notenbanken (EZB, Fed), ITAR-/EAR-Klassifikation und Charge-Sicherheit sind Pipeline-Themen.
            </NumberedList.Item>
            <NumberedList.Item title="Bruder Spielwaren und Weltmarken-DTC:">
              Bruder ist Weltmarke für hochwertige Spielwaren (LKW, Trecker). Spielzeug-Sicherheit nach EN 71, REACH-Compliance, DTC-Versand in 60+ Länder und saisonale Peaks (Weihnachten) sind Workflow-Themen.
            </NumberedList.Item>
            <NumberedList.Item title="Quelle-Erbe und heutiger Versandhandel:">
              Quelle war Bayerns Versandhandels-Hauptstadt, das Erbe lebt in heutigen Versandhändlern (Erwin Müller, Schöpflin) und Logistik-Dienstleistern weiter. Bestell-, Retouren- und Lagerautomatisierung sind klassische Themen.
            </NumberedList.Item>
            <NumberedList.Item title="Krankenhaus- und Klinikum-Achse Nürnberg-Fürth-Erlangen:">
              Klinikum Fürth, vivantes-Tochter und die Universitätsmedizin Erlangen bilden eine Achse mit hohem Workflow-Bedarf in Pflege-Personal-Onboarding, MDR-Compliance bei Verbandsmitteln und Drittmittel-Forschung.
            </NumberedList.Item>
          </NumberedList>
        </div>
      </ContentWrapper>

      {/* 2. IntroBox - Specialty-Cluster-Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Fürth - einst Bayerns Versandhandels-Hauptstadt
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo PSA für Profis nach EN ISO 16321 zertifiziert wird und Leonhard Kurz Marken weltweit veredelt, sind Workflows die Schlagader
          </IntroBox.Headline>
          <IntroBox.Subline>
            uvex-Gruppe mit 2.700 Mitarbeitern, Leonhard Kurz mit 5.500 weltweit, Bruder Spielwaren als Weltmarke und vivantes-Hospital-Konzern - Fürth ist Mittelstand-Hochburg mit Premium-Marken. PSA-Compliance, Druckveredelungs-Pipelines und Distanzhandels-DNA verlangen spezialisierte Workflows.
          </IntroBox.Subline>
        </IntroBox>
      </ContentWrapper>

      {/* 4. SimpleGrid cols=2 - 4 Specialty-Use-Cases */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Workflow-Bausteine für Fürther Marken-Mittelstand</Typo.H2>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <HardHat className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>PSA-Compliance- und EN-ISO-16321-Workflows</Typo.H3>
            <Typo.Paragraph>
              Notified-Body-Anbindung (TÜV, DEKRA), Konformitätserklärungen, Charge-Tracking und technische Dokumentation in n8n-Pipelines. PSA-Verordnung 2016/425 revisionssicher abgebildet.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <BadgePercent className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Heißpräge-Workflows mit Notenbanken-Sicherheit</Typo.H3>
            <Typo.Paragraph>
              Lieferanten-Workflows mit Notenbanken (EZB, Fed), ITAR-/EAR-Klassifikation, Charge-Sicherheit und BAFA-Antragstellung. Anbindung an SAP GTS und Sicherheits-Audit-Tools.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <ToyBrick className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Spielzeug-Sicherheit und Weltmarken-DTC für Bruder</Typo.H3>
            <Typo.Paragraph>
              EN-71-Konformität, REACH-Compliance, DTC-Versandpipelines in 60+ Länder und saisonale Peak-Skalierung. Anbindung an Shopify, ERP und Versanddienstleister.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Package className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Versandhandels- und Retouren-Pipelines</Typo.H3>
            <Typo.Paragraph>
              Bestell-, Retouren- und Kundenservice-Workflows zwischen Shop, ERP, Lagerverwaltung und Versanddienstleistern. KI-gestützte Retouren-Klassifikation und Customer-Service-Vorsortierung.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 5. StatsList horizontal */}
      <ContentWrapper colorScheme="primary">
        <StatsList
          cols={4}
          stats={[
            { value: 130000, label: "Einwohner Fürth" },
            { value: 2700, suffix: "+", label: "uvex-Beschäftigte" },
            { value: 5500, suffix: "+", label: "Leonhard-Kurz-Mitarbeiter weltweit" },
            { value: 60, suffix: "+", label: "Bruder-Exportländer" },
          ]}
        />
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
        <Typo.H2>Häufige Fragen aus Fürth</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={fuerthFaqs} />
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
