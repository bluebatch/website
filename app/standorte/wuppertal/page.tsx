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
import { Pill, Sparkles, Train, Car } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-agentur-wuppertal",
  rewrites: [
    {
      source: "/ai-workflows-wuppertal",
      preHeadline: "AI Workflows Wuppertal",
      headline: "AI Workflows & Automatisierung in Wuppertal",
      metaTitle: "AI Workflows Wuppertal - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Wuppertal. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Wuppertal",
        "KI Automatisierung Wuppertal",
        "Workflow Automatisierung Wuppertal",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-wuppertal",
      preHeadline: "n8n Automation Wuppertal",
      headline: "n8n Automation in Wuppertal - Workflows automatisieren",
      metaTitle: "n8n Automation Wuppertal | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Wuppertal. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Wuppertal",
        "n8n Wuppertal",
        "Workflow Automation Wuppertal",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-wuppertal",
      preHeadline: "n8n Wuppertal",
      headline: "n8n Agentur in Wuppertal",
      metaTitle: "n8n Wuppertal - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Wuppertal. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Wuppertal und Umgebung.",
      keywords: [
        "n8n Wuppertal",
        "n8n Agentur Wuppertal",
        "n8n Beratung Wuppertal",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-wuppertal",
      preHeadline: "Automation Wuppertal",
      headline: "Automation & Prozessoptimierung in Wuppertal",
      metaTitle: "Automation Wuppertal - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Wuppertal. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Wuppertal",
        "Prozessautomatisierung Wuppertal",
        "Workflow Automation Wuppertal",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-wuppertal",
      preHeadline: "IT Dienstleister Wuppertal",
      headline: "IT Dienstleister in Wuppertal - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Wuppertal - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Wuppertal. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Wuppertal.",
      keywords: [
        "IT Dienstleister Wuppertal",
        "IT Service Wuppertal",
        "Digitalisierung Wuppertal",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-wuppertal",
      preHeadline: "KI Beratung Wuppertal",
      headline: "KI Beratung in Wuppertal - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Wuppertal - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Wuppertal. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Wuppertal",
        "KI Lösungen Wuppertal",
        "Künstliche Intelligenz Wuppertal",
        "Bluebatch",
      ],
    },
      {
      source: "/ki-agentur-wuppertal",
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Wuppertal",
  slug: "wuppertal",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Velbert",
    "Schwelm",
    "Haan",
    "Mettmann",
    "Ennepetal",
    "Gevelsberg",
    "Sprockhövel",
    "Radevormwald",
    "Wülfrath",
    "Hilden",
    "Erkrath",
  ],
  crossReference: [
    { name: "Düsseldorf", slug: "duesseldorf" },
    { name: "Solingen", slug: "solingen" },
    { name: "Remscheid", slug: "remscheid" },
    { name: "Hagen", slug: "hagen" },
    { name: "Essen", slug: "essen" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Wuppertal | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Workflows für Wuppertaler Pharma, Retail und Bahn: GMP-Pipelines für Bayer-Umfeld, Direktvertriebs-Workflows für Vorwerk, TSI-Zulassungen für Vossloh und IATF für Coroplast-Automotive.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Wuppertal",
      "n8n Wuppertal",
      "Bayer GMP",
      "Vorwerk Thermomix",
      "Vossloh Bahn",
      "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [{ url: "/images/cities/wuppertal.jpg", width: 1200, height: 630, alt: "Wuppertal – Bayer Pharmazentrale, Vorwerk und Schwebebahn" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/cities/wuppertal.jpg"] },
    alternates: { canonical: "/ki-agentur-wuppertal" },
  };
}

const wuppertalFaqs = [
  {
    question: "Bayer-Zulieferer oder -Partner: kann n8n GMP-Compliance abbilden?",
    answer:
      "Ja. GMP-Compliance, USP-/EP-Pharmakopöe, Pharmakovigilanz-Meldungen und EMA-eCTD-Submissions in versionierten n8n-Pipelines mit Audit-Trail. Anbindung an SAP GxP-Module, MES und LIMS.",
  },
  {
    question: "Vorwerk-Direktvertrieb: wie hilft Automatisierung?",
    answer:
      "Vertriebspartner-Onboarding, Provision-Berechnung, Lead-Routing und KI-Personalisierung in n8n-Pipelines. Anbindung an SAP HCM, CRM und Provisions-Software wie Performio – verkürzt Onboarding-Zeit um 50-70 %.",
  },
  {
    question: "Vossloh- oder Bahn-Zulieferer: was bringt n8n bei TSI-Zulassung?",
    answer:
      "EN-50126/50128/50129-Konformität, TSI-Zulassungen, EBA-Anträge und Schienen-Befestigungs-Dokumentation in revisionssicheren Pipelines. Anbindung an SAP, PLM und EBA-Portale.",
  },
  {
    question: "Coroplast- oder Automotive-Mittelstand: wie hilft IATF-Automatisierung?",
    answer:
      "PPAP-Pakete, EDI-Anbindung an OEM-Portale, REACH-/RoHS-/CLP-Compliance und 8D-Reports. SAP QM, MES und PLM integriert – reduziert manuelle PPAP-Erstellung um 60-80 %.",
  },
  {
    question: "BUW-Industriepartnerschaft: wie helfen Workflows?",
    answer:
      "Drittmittel-, Industriepartnerschafts- und duale-Studiengangs-Workflows in n8n-Pipelines. Anbindung an HISinOne, SAP CO, easy-Online und Patent-Datenbanken inklusive.",
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
              {overrides?.preHeadline ?? "Standort Wuppertal – Bergisches Pharma- und Schwebebahn-Land"}
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              {overrides?.headline ?? "KI-Agentur in Wuppertal – für Bayer Pharma, Vorwerk und Vossloh"}
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Bayer betreibt in Wuppertal-Elberfeld eine der größten Pharma-Produktionen weltweit, Vorwerk produziert Thermomix und Kobold, Vossloh ist Bahn-Infrastruktur-Spezialist und Coroplast liefert Klebebänder. Wir bauen Workflows für Pharma-GxP, DTC-Premium-Hausgeräte und Bahn-Compliance.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Beratung anfragen
              </ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/cities/wuppertal.jpg"
              alt="Wuppertal – Bayer Pharmazentrale, Vorwerk und Schwebebahn"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 2. IntroBox – Specialty-Cluster-Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Wuppertal – Heimat des Aspirin und der Schwebebahn
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo Bayer Wirkstoff-Synthesen orchestriert und Vorwerk Thermomix in 70 Märkte verkauft, müssen Workflows pharma- und retail-präzise sein
          </IntroBox.Headline>
          <IntroBox.Subline>
            Bayer-Pharmazentrale Wuppertal (8.000 MA), Vorwerk (12.000 weltweit), Vossloh (Bahninfrastruktur), Coroplast (Klebebänder), Schwebebahn und Bergische Universität Wuppertal (BUW) – diese Mischung aus Pharma-DAX-Konzern, Premium-DTC und Bahn-Industrie verlangt spezialisierte Workflows.
          </IntroBox.Subline>
        </IntroBox>
      </ContentWrapper>

      {/* 4. SimpleGrid cols=2 – 4 Specialty-Use-Cases */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Workflow-Bausteine für Wuppertaler Pharma, Retail und Bahn</Typo.H2>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Pill className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>GMP- und EMA-Submission-Pipelines für Bayer-Umfeld</Typo.H3>
            <Typo.Paragraph>
              GMP-Compliance, USP-/EP-Pharmakopöe, Pharmakovigilanz-Meldungen und EMA-eCTD-Submissions in versionierten n8n-Pipelines mit Audit-Trail. Anbindung an SAP GxP-Module, MES und LIMS.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Sparkles className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Vorwerk-Vertriebspartner- und Provisions-Workflows</Typo.H3>
            <Typo.Paragraph>
              Vertriebspartner-Onboarding, Provision-Berechnung, Lead-Routing und KI-Personalisierung im Direktvertrieb. Anbindung an SAP HCM, CRM und Provisions-Software wie Performio.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Train className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Bahn-Compliance- und TSI-Zulassungs-Workflows</Typo.H3>
            <Typo.Paragraph>
              EN-50126/50128/50129-Konformität, TSI-Zulassungen, EBA-Anträge und Schienen-Befestigungs-Dokumentation in revisionssicheren Pipelines. Anbindung an SAP, PLM und EBA-Portale.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Car className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Automotive-IATF- und REACH-Pipelines</Typo.H3>
            <Typo.Paragraph>
              PPAP-Pakete, EDI-Anbindung an OEM-Portale (Covisint, SupplyOn), REACH-/RoHS-/CLP-Compliance und 8D-Reports. SAP QM, MES und PLM integriert.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 3. NumberedList – 5 Stadt-Eigenheiten */}
      <ContentWrapper bodyWidth="small">
        <Typo.H2>5 Eigenheiten der Wuppertaler Wirtschaft, die Workflows beeinflussen</Typo.H2>
        <div className="mt-6">
          <NumberedList>
            <NumberedList.Item title="Bayer-Pharmazentrale und GMP-Wirkstoffsynthese:">
              Bayer-Werk Wuppertal-Elberfeld ist Stammwerk für Pharma-Wirkstoffsynthese (Aspirin-Erfindungs-Ort). GMP-Compliance, USP-/EP-Pharmakopöe, Pharmakovigilanz und EMA-eCTD-Submissions sind Pflicht.
            </NumberedList.Item>
            <NumberedList.Item title="Vorwerk und Thermomix-DTC-Direktvertrieb:">
              Vorwerk verkauft Thermomix und Kobold-Staubsauger über Direktvertrieb in 70+ Länder. Vertriebspartner-Management, Provision-Workflows, Lead-Routing und KI-Personalisierung sind Pipeline-Themen.
            </NumberedList.Item>
            <NumberedList.Item title="Vossloh und Bahn-Infrastruktur-Compliance:">
              Vossloh AG (Hauptsitz Werdohl, Werk Wuppertal) liefert Schienen-Befestigungen und Weichensteller weltweit. Bahn-Compliance (EN 50126/50128/50129), TSI und Zulassungen sind Workflow-Themen.
            </NumberedList.Item>
            <NumberedList.Item title="Coroplast und Klebeband-Premium-Mittelstand:">
              Coroplast Wuppertal (PVC-Klebebänder, Bordnetze) liefert Automotive-OEMs. IATF-16949, REACH, RoHS und CLP-Verordnung sind Pflicht – mit EDI-Anbindung an OEM-Portale.
            </NumberedList.Item>
            <NumberedList.Item title="Bergische Universität und Mechatronik-Cluster:">
              BUW mit Schwerpunkt Mechatronik, Sicherheitstechnik und Pflegewissenschaft. Drittmittel-Volumen, Industriepartnerschaften mit Bayer, Vorwerk und Coroplast – HR-Workflows mit dualen Studiengängen.
            </NumberedList.Item>
          </NumberedList>
        </div>
      </ContentWrapper>

      {/* 5. StatsList horizontal */}
      <ContentWrapper colorScheme="primary">
        <StatsList
          cols={4}
          stats={[
            { value: 354000, label: "Einwohner Wuppertal" },
            { value: 8000, suffix: "+", label: "Bayer-Beschäftigte Wuppertal" },
            { value: 12000, suffix: "+", label: "Vorwerk-Mitarbeiter weltweit" },
            { value: 1901, label: "Eröffnung Schwebebahn" },
          ]}
        />
      </ContentWrapper>

      {/* 7.5. Bonus — Wuppertaler Eigenheiten */}
      <ContentWrapper bodyWidth="small">
        <Typo.H2>Fünf Wuppertaler Eigenheiten, die kein Workflow ignorieren kann</Typo.H2>
        <div className="mt-6">
          <NumberedList>
            <NumberedList.Item title="Bayer-Pharmazentrale am Aprather Weg.">
              Wuppertal-Elberfeld ist Geburtsort des Aspirin und bis heute
              Bayer-Hauptstandort der Pharma-Forschung mit über 4.000
              Mitarbeitern. GxP-Workflows, eCTD-Submissions und FDA/EMA-
              Audits sind hier Pflicht.
            </NumberedList.Item>
            <NumberedList.Item title="Vorwerk-Direktvertrieb mit Thermomix.">
              Über 12.000 Mitarbeiter, weltweiter Direktvertrieb von Thermomix
              und Kobold. Provisions-Workflows, Vertriebspartner-Onboarding und
              komplexe CRM/ERP-Integration.
            </NumberedList.Item>
            <NumberedList.Item title="Schwebebahn als Logistik-Konstante.">
              Seit 1901 das Wahrzeichen der Stadt und ÖPNV-Rückgrat. Wartungs-
              und Sicherheits-Workflows nach BOStrab, die jeden Stillstand
              dokumentieren.
            </NumberedList.Item>
            <NumberedList.Item title="Coroplast-Kabel und Klebebänder.">
              Globaler Tier-1 für Automotive-Kabelsätze. EDI/VDA-Anbindung an
              VW, Mercedes und BMW, dazu IATF-16949-Audits und APQP-
              Dokumentation.
            </NumberedList.Item>
            <NumberedList.Item title="Vossloh-Eisenbahninfrastruktur.">
              Weltmarktführer für Schienenbefestigungen mit Stammsitz und
              Forschung in Wuppertal. Workflows für Bahnausschreibungen, EBA-
              Zulassungen und globale Service-Disposition.
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
        <Typo.H2>Häufige Fragen aus Wuppertal</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={wuppertalFaqs} />
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
