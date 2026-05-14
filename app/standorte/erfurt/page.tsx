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
import { Cpu, Tv, Package, Activity } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-workflows-erfurt",
      preHeadline: "AI Workflows Erfurt",
      headline: "AI Workflows & Automatisierung in Erfurt",
      metaTitle: "AI Workflows Erfurt - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Erfurt. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Erfurt",
        "KI Automatisierung Erfurt",
        "Workflow Automatisierung Erfurt",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-erfurt",
      preHeadline: "n8n Automation Erfurt",
      headline: "n8n Automation in Erfurt - Workflows automatisieren",
      metaTitle: "n8n Automation Erfurt | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Erfurt. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Erfurt",
        "n8n Erfurt",
        "Workflow Automation Erfurt",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-erfurt",
      preHeadline: "n8n Erfurt",
      headline: "n8n Agentur in Erfurt",
      metaTitle: "n8n Erfurt - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Erfurt. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Erfurt und Umgebung.",
      keywords: [
        "n8n Erfurt",
        "n8n Agentur Erfurt",
        "n8n Beratung Erfurt",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-erfurt",
      preHeadline: "Automation Erfurt",
      headline: "Automation & Prozessoptimierung in Erfurt",
      metaTitle: "Automation Erfurt - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Erfurt. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Erfurt",
        "Prozessautomatisierung Erfurt",
        "Workflow Automation Erfurt",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-erfurt",
      preHeadline: "IT Dienstleister Erfurt",
      headline: "IT Dienstleister in Erfurt - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Erfurt - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Erfurt. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Erfurt.",
      keywords: [
        "IT Dienstleister Erfurt",
        "IT Service Erfurt",
        "Digitalisierung Erfurt",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-erfurt",
      preHeadline: "KI Beratung Erfurt",
      headline: "KI Beratung in Erfurt - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Erfurt - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Erfurt. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Erfurt",
        "KI Lösungen Erfurt",
        "Künstliche Intelligenz Erfurt",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Erfurt",
  slug: "erfurt",
  bundesland: "Thüringen",
  publish: false,
  nearbySmall: [
    "Weimar",
    "Gotha",
    "Arnstadt",
    "Sömmerda",
    "Ilmenau",
  ],
  crossReference: [
    { name: "Jena", slug: "jena" },
    { name: "Leipzig", slug: "leipzig" },
    { name: "Kassel", slug: "kassel" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Erfurt | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Workflows für Erfurter Halbleiter, Medien und Logistik: FAB-Lieferanten-Pipelines für X-FAB, ARD-Medienrechte für MDR, E-Commerce-Fulfillment für Zalando und MDR-Workflows für Bauerfeind-Umfeld.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Erfurt",
      "n8n Erfurt",
      "X-FAB Halbleiter",
      "MDR Workflow",
      "Zalando Logistik",
      "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [{ url: "/images/cities/erfurt.jpg", width: 1200, height: 630, alt: "Erfurt - X-FAB Halbleiter und Thüringer Logistik-Drehkreuz" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/cities/erfurt.jpg"] },
    alternates: { canonical: "/standorte/erfurt" },
  };
}

const erfurtFaqs = [
  {
    question: "X-FAB-Zulieferer: wie hilft Automatisierung?",
    answer:
      "Lieferanten-Qualifizierung, Reinraum-Logs nach ISO 14644, ITAR-/EAR-Klassifikation und FAB-Service-Workflows in n8n-Pipelines. Anbindung an SAP, MES und FAB-Compliance-Tools - verkürzt Lieferanten-Onboarding spürbar.",
  },
  {
    question: "MDR- oder Medien-Zulieferer: was bringt n8n?",
    answer:
      "Rechte-Verwaltung, Sendeauftrag-Reporting und GVK-Konvergenz zwischen ARD-Anstalten in n8n-Pipelines. Anbindung an Mediendatenbanken, GEMA, GVL und Produktions-Management.",
  },
  {
    question: "E-Commerce-Logistik: wie helfen Workflows beim Fulfillment?",
    answer:
      "Lager-Pick-Workflows, Versanddienstleister-Integration (DHL, Hermes, GLS), KI-gestützte Retouren-Klassifikation und Bestandsführung. Anbindung an Lager-WMS und ERP - reduziert Retouren-Bearbeitung um 40-60 %.",
  },
  {
    question: "Bauerfeind- oder MedTech-Mittelstand: kann n8n MDR abbilden?",
    answer:
      "Ja. Technische Dokumentation, klinische Bewertung, PMS-Plan und Vigilance-Meldungen in versionierten Pipelines mit Notified-Body-Anbindung. ISO-14971-Risikomanagement inklusive.",
  },
  {
    question: "Wir sind Thüringer Tourismus-Mittelstand: wo lohnt sich KI?",
    answer:
      "Bei Buchungs-Anfrage-Klassifikation, bei mehrsprachigem Concierge-Service mit AI Agents und bei saisonaler Peak-Skalierung. Hotellerie, Tagungs- und Ausflugsanbieter profitieren überproportional.",
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
              {overrides?.preHeadline ?? "Standort Erfurt - Thüringer Landeshauptstadt"}
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              {overrides?.headline ?? "KI-Agentur in Erfurt - für X-FAB Halbleiter, MDR und Zalando-Logistik"}
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              X-FAB betreibt eine der größten Foundries für Spezial-Halbleiter, MDR ist Thüringens Rundfunkanstalt, Zalando-Logistikzentrum versendet Millionen Pakete und CARITAS-Krankenhaus prägt die Gesundheitsbranche. Wir bauen Workflows für Halbleiter-FAB, Medien-Rechte und Logistik.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Beratung anfragen
              </ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/cities/erfurt.jpg"
              alt="Erfurt - X-FAB Halbleiter und Thüringer Logistik-Drehkreuz"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 2. IntroBox - Specialty-Cluster-Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Erfurt - Halbleiter-, Medien- und Logistik-Hub Mitteldeutschland
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo X-FAB Spezial-Halbleiter für die Welt fertigt und Zalando Millionen Pakete täglich versendet, sind Workflows die Lebensader
          </IntroBox.Headline>
          <IntroBox.Subline>
            X-FAB Erfurt (1.700 MA), MDR Hauptsitz, Zalando-Logistikzentrum, Bauerfeind (Medizintechnik), Knauf, CARITAS-Krankenhaus - Erfurt vereint Halbleiter-, Medien-, Logistik- und Gesundheits-Cluster. Diese Mischung verlangt branchenspezifische Pipelines.
          </IntroBox.Subline>
        </IntroBox>
      </ContentWrapper>

      {/* 4. SimpleGrid cols=2 - 4 Specialty-Use-Cases */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Workflow-Bausteine für Erfurter Halbleiter, Medien und Logistik</Typo.H2>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Cpu className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Halbleiter-FAB- und Lieferanten-Pipelines</Typo.H3>
            <Typo.Paragraph>
              Lieferanten-Qualifizierung, Reinraum-Logs nach ISO 14644, ITAR-/EAR-Klassifikation und FAB-Service-Workflows in n8n-Pipelines. Anbindung an SAP, MES und FAB-Compliance-Tools.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Tv className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>ARD-Medienrechte- und Sendeauftrag-Workflows</Typo.H3>
            <Typo.Paragraph>
              Rechte-Verwaltung, Sendeauftrag-Reporting und GVK-Konvergenz zwischen ARD-Anstalten. Anbindung an Mediendatenbanken, GEMA, GVL und Produktions-Management.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Package className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>E-Commerce-Fulfillment- und Retouren-Workflows</Typo.H3>
            <Typo.Paragraph>
              Lager-Pick-Workflows, Versanddienstleister-Integration (DHL, Hermes, GLS), KI-gestützte Retouren-Klassifikation und Bestandsführung. Anbindung an Lager-WMS und ERP.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Activity className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>MDR-Pipelines für Medizintechnik-Mittelstand</Typo.H3>
            <Typo.Paragraph>
              Technische Dokumentation, klinische Bewertung, PMS-Plan und Vigilance-Meldungen in versionierten Pipelines. Notified-Body-Anbindung (TÜV SÜD, BSI) und ISO-14971-Risikomanagement.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 5. StatsList horizontal */}
      <ContentWrapper colorScheme="primary">
        <StatsList
          cols={4}
          stats={[
            { value: 215000, label: "Einwohner Erfurt" },
            { value: 1700, suffix: "+", label: "X-FAB-Beschäftigte" },
            { value: 742, label: "Erfurt urkundlich erwähnt (Bonifatius)" },
            { value: 1, label: "Landeshauptstadt Thüringen" },
          ]}
        />
      </ContentWrapper>

      {/* 3. NumberedList - 5 Stadt-Eigenheiten */}
      <ContentWrapper bodyWidth="small">
        <Typo.H2>5 Eigenheiten der Erfurter Wirtschaft, die Workflows beeinflussen</Typo.H2>
        <div className="mt-6">
          <NumberedList>
            <NumberedList.Item title="X-FAB und Spezial-Halbleiter-Foundry:">
              X-FAB Erfurt ist Marktführer für analoge/Mixed-Signal-Spezial-Halbleiter für Automotive, Medizin und Industrie. Lieferanten-Qualifizierung, Reinraum-Logs, ITAR/EAR und FAB-Compliance sind Pipeline-Themen.
            </NumberedList.Item>
            <NumberedList.Item title="MDR und ARD-Medienrechte-Workflows:">
              MDR Mitteldeutscher Rundfunk Hauptsitz Leipzig/Erfurt mit Studios in Erfurt. Rechte-Verwaltung, Sendeauftrag-Reporting und GVK-Konvergenz mit ARD-Anstalten sind dichtes Workflow-Geflecht.
            </NumberedList.Item>
            <NumberedList.Item title="Zalando-Logistikzentrum und E-Commerce-Fulfillment:">
              Eines der größten Zalando-Logistikzentren versendet Millionen Pakete täglich. Lager-Pick-Workflows, Versanddienstleister-Integration und Retouren-Klassifikation sind hochautomatisiert.
            </NumberedList.Item>
            <NumberedList.Item title="Bauerfeind und MDR-Medizintechnik:">
              Bauerfeind (Zeulenroda, nahe Erfurt) ist Marktführer für orthopädische Hilfsmittel mit MDR-Klasse-I/IIa-Geräten. Technische Dokumentation, Vigilance und Post-Market-Surveillance sind Pflicht.
            </NumberedList.Item>
            <NumberedList.Item title="BUGA-Erfurt-Erbe und Tourismus:">
              BUGA 2021 und mittelalterliche Altstadt machen Erfurt zur Tourismus-Destination. Hotellerie, Tagungs-Workflows und mehrsprachige Pipelines (Ostasien, USA) sind regionale Themen.
            </NumberedList.Item>
          </NumberedList>
        </div>
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
        <Typo.H2>Häufige Fragen aus Erfurt</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={erfurtFaqs} />
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
