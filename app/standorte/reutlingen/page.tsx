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
import { Cpu, ShoppingBag, Sparkles, ShieldCheck } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-agentur-reutlingen",
  rewrites: [
    {
      source: "/ai-workflows-reutlingen",
      preHeadline: "AI Workflows Reutlingen",
      headline: "AI Workflows & Automatisierung in Reutlingen",
      metaTitle: "AI Workflows Reutlingen - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Reutlingen. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Reutlingen",
        "KI Automatisierung Reutlingen",
        "Workflow Automatisierung Reutlingen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-reutlingen",
      preHeadline: "n8n Automation Reutlingen",
      headline: "n8n Automation in Reutlingen - Workflows automatisieren",
      metaTitle: "n8n Automation Reutlingen | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Reutlingen. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Reutlingen",
        "n8n Reutlingen",
        "Workflow Automation Reutlingen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-reutlingen",
      preHeadline: "n8n Reutlingen",
      headline: "n8n Agentur in Reutlingen",
      metaTitle: "n8n Reutlingen - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Reutlingen. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Reutlingen und Umgebung.",
      keywords: [
        "n8n Reutlingen",
        "n8n Agentur Reutlingen",
        "n8n Beratung Reutlingen",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-reutlingen",
      preHeadline: "Automation Reutlingen",
      headline: "Automation & Prozessoptimierung in Reutlingen",
      metaTitle: "Automation Reutlingen - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Reutlingen. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Reutlingen",
        "Prozessautomatisierung Reutlingen",
        "Workflow Automation Reutlingen",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-reutlingen",
      preHeadline: "IT Dienstleister Reutlingen",
      headline: "IT Dienstleister in Reutlingen - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Reutlingen - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Reutlingen. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Reutlingen.",
      keywords: [
        "IT Dienstleister Reutlingen",
        "IT Service Reutlingen",
        "Digitalisierung Reutlingen",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-reutlingen",
      preHeadline: "KI Beratung Reutlingen",
      headline: "KI Beratung in Reutlingen - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Reutlingen - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Reutlingen. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Reutlingen",
        "KI Lösungen Reutlingen",
        "Künstliche Intelligenz Reutlingen",
        "Bluebatch",
      ],
    },
      {
      source: "/ki-agentur-reutlingen",
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Reutlingen",
  slug: "reutlingen",
  bundesland: "Baden-Württemberg",
  publish: false,
  nearbySmall: [
    "Tübingen",
    "Metzingen",
    "Bad Urach",
    "Rottenburg am Neckar",
    "Nürtingen",
    "Filderstadt",
  ],
  crossReference: [
    { name: "Stuttgart", slug: "stuttgart" },
    { name: "Tübingen", slug: "tuebingen" },
    { name: "Ulm", slug: "ulm" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Reutlingen | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Workflows für Reutlinger Halbleiter, Fashion und Maschinenbau: FAB-Lieferanten-Pipelines für Bosch, Outlet-City-Workflows für Hugo Boss-Umfeld, Strickmaschinen-Service für Stoll und CE/ATEX für Hidden Champions.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Reutlingen",
      "n8n Reutlingen",
      "Bosch Halbleiter",
      "Hugo Boss Metzingen",
      "Maschinenbau",
      "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [{ url: "/images/cities/reutlingen.jpg", width: 1200, height: 630, alt: "Reutlingen - Bosch Halbleiter, Hugo Boss und Maschinenbau" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/cities/reutlingen.jpg"] },
    alternates: { canonical: "/ki-agentur-reutlingen" },
  };
}

const reutlingenFaqs = [
  {
    question: "Bosch-Halbleiter-Zulieferer: wie hilft Automatisierung?",
    answer:
      "Lieferanten-Qualifizierung, Reinraum-Logs nach ISO 14644, ESD-Compliance und FAB-Service-Workflows in n8n-Pipelines. Anbindung an SAP, MES und FAB-Compliance-Tools - verkürzt Lieferanten-Onboarding spürbar.",
  },
  {
    question: "Outlet-City-Mittelstand: was bringt n8n im Premium-Fashion?",
    answer:
      "Multilinguale Customer-Service-Pipelines, RFID-Bestandsführung, Saisonal-Peak-Skalierung und DTC-Versand für Premium-Fashion. Anbindung an Shopify, ERP und Versanddienstleister.",
  },
  {
    question: "Stoll-/KARL-MAYER-Umfeld: wie helfen Workflows beim Globalexport?",
    answer:
      "After-Sales-Tickets, Ersatzteil-Bestellungen und ITAR-/EAR-Klassifikation in n8n-Pipelines. SAP GTS, BAFA-ELAN-K2 und Field-Service-Apps integriert - reduziert After-Sales-Bearbeitungszeit um 50-70 %.",
  },
  {
    question: "Wir sind Reutlinger Hidden Champion: wo lohnt sich KI zuerst?",
    answer:
      "Bei CPQ für Sonderanlagen, bei After-Sales-Ticket-Klassifikation und bei Lieferanten-Onboarding. Drei klassische Maschinenbau-Pain-Points mit klarem ROI in 4-8 Wochen.",
  },
  {
    question: "Hochschule Reutlingen-Kooperation: wie helfen Workflows?",
    answer:
      "Bei internationalen Partnerschaften, Dual-Degree-Programmen und industrienaher Forschung. Anbindung an HISinOne, SAP CO und Industriepartner-Verträge - plus Visa-Workflows mit Auslandsbehörden.",
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
              {overrides?.preHeadline ?? "Standort Reutlingen - zwischen Stuttgart und Tübingen"}
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              {overrides?.headline ?? "KI-Agentur in Reutlingen - für Bosch Halbleiter, Hugo Boss-Region und Maschinenbau"}
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Bosch betreibt in Reutlingen die größte Halbleiter-Fab Europas, Hugo Boss-Hauptsitz Metzingen ist nah, Stoll baut Strickmaschinen weltweit. Wir bauen Workflows für Halbleiter-FAB-Lieferanten, Fashion-Outlet-Logistik und Maschinenbau-Compliance.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Beratung anfragen
              </ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/cities/reutlingen.jpg"
              alt="Reutlingen - Bosch Halbleiter, Hugo Boss und Maschinenbau"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 4. SimpleGrid cols=2 - 4 Specialty-Use-Cases */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Workflow-Bausteine für Reutlinger Halbleiter, Fashion und Maschinenbau</Typo.H2>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Cpu className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Halbleiter-FAB-Lieferanten- und Reinraum-Pipelines</Typo.H3>
            <Typo.Paragraph>
              Lieferanten-Qualifizierung, Reinraum-Logs nach ISO 14644, ESD-Compliance und FAB-Service-Workflows in n8n-Pipelines. Anbindung an SAP, MES und FAB-Compliance-Tools.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <ShoppingBag className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Outlet-City- und Fashion-DTC-Workflows</Typo.H3>
            <Typo.Paragraph>
              Multilinguale Customer-Service-Pipelines, RFID-Bestandsführung, Saisonal-Peak-Skalierung und DTC-Versand für Premium-Fashion. Anbindung an Shopify, ERP und Versanddienstleister.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Sparkles className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Strickmaschinen-After-Sales und Globalexport</Typo.H3>
            <Typo.Paragraph>
              Service-Tickets, Ersatzteil-Bestellungen und ITAR-/EAR-Klassifikation für Stoll/KARL MAYER-Umfeld in n8n-Pipelines. SAP GTS, BAFA-ELAN-K2 und Field-Service-Apps integriert.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <ShieldCheck className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>CE- und ATEX-Workflows für Maschinenbau</Typo.H3>
            <Typo.Paragraph>
              Konformitätserklärungen, Betriebsanleitungen, Risikobeurteilung nach EN ISO 12100 und ATEX-Zertifizierung in revisionssicheren n8n-Pipelines mit Notified-Body-Anbindung.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 3. NumberedList - 5 Stadt-Eigenheiten */}
      <ContentWrapper bodyWidth="small">
        <Typo.H2>5 Eigenheiten der Reutlinger Wirtschaft, die Workflows beeinflussen</Typo.H2>
        <div className="mt-6">
          <NumberedList>
            <NumberedList.Item title="Bosch Halbleiter Reutlingen und FAB-Lieferanten:">
              Größte Halbleiter-Fab Europas mit 8-Zoll- und 12-Zoll-Wafer-Produktion. Lieferanten-Qualifizierung, Reinraum-Logs, ESD-Compliance und FAB-Service-Workflows sind Pipeline-Themen.
            </NumberedList.Item>
            <NumberedList.Item title="Hugo Boss Metzingen und Outlet-City:">
              Metzingen Outlet-City mit 60 Mio. Besuchern jährlich und Hugo Boss-Hauptsitz. Fashion-Outlet-Pipelines, RFID-Bestandsführung und multilinguale Customer-Service-Workflows sind Themen.
            </NumberedList.Item>
            <NumberedList.Item title="Stoll und Strickmaschinen-Globalexport:">
              H. Stoll AG (heute KARL MAYER STOLL) baut Flach-Strickmaschinen für Adidas, Nike und Premium-Fashion weltweit. After-Sales-Service in 100+ Länder, ITAR/EAR und CE-Konformität sind Pipeline-Themen.
            </NumberedList.Item>
            <NumberedList.Item title="Bosch-Rexroth, Burkert und Hidden Champions:">
              Bosch-Rexroth (Hydraulik), Bürkert (Mess-, Steuer-, Regeltechnik) und 200+ Maschinenbau-Hidden-Champions. ATEX, IATF und Maschinenrichtlinie sind dichtes Workflow-Geflecht.
            </NumberedList.Item>
            <NumberedList.Item title="Hochschule Reutlingen und ESB Business School:">
              Hochschule Reutlingen mit ESB Business School ist eine der führenden Wirtschaftshochschulen Deutschlands. Internationale Partnerschaften, Dual-Degree-Programme und industrienahe Forschung sind Workflow-Themen.
            </NumberedList.Item>
          </NumberedList>
        </div>
      </ContentWrapper>

      {/* 2. IntroBox - Specialty-Cluster-Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Reutlingen - Europas größte Halbleiter-Fab vor Ort
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo Bosch Halbleiter für 8-Zoll- und 12-Zoll-Wafer produziert und Hugo Boss in Metzingen 60 Mio. Outlet-Besucher empfängt, müssen Workflows global skalieren
          </IntroBox.Headline>
          <IntroBox.Subline>
            Bosch Halbleiter Reutlingen (3.000+ MA), Hugo Boss Metzingen mit Outlet-City, Stoll Strickmaschinen und Hochschule Reutlingen prägen die Region. Halbleiter-FAB-Lieferanten-Compliance, Fashion-Outlet-Pipelines und Maschinenbau-CE-Workflows sind die Themen.
          </IntroBox.Subline>
        </IntroBox>
      </ContentWrapper>

      {/* 5. StatsList horizontal */}
      <ContentWrapper colorScheme="primary">
        <StatsList
          cols={4}
          stats={[
            { value: 118000, label: "Einwohner Reutlingen" },
            { value: 3000, suffix: "+", label: "Bosch-Halbleiter-Beschäftigte" },
            { value: 60000000, label: "Outlet-City-Besucher jährlich" },
            { value: 200, suffix: "+", label: "Maschinenbau-Hidden-Champions Region" },
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
        <Typo.H2>Häufige Fragen aus Reutlingen</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={reutlingenFaqs} />
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
