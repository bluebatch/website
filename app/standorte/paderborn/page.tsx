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
import KpiCard from "@/components/cards/kpi-card";
import NumberedList from "@/components/ui/numbered-list";
import StatsList from "@/components/ui/stats-list";
import { FaqContainer } from "@/components/ui/faqs";
import { CityLinksFromMeta } from "@/components/standorte/city-links";
import ContactButton from "@/components/buttons/contact-button";
import { CreditCard, Car, Gauge, Code } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-agentur-paderborn",
  rewrites: [
    {
      source: "/ai-workflows-paderborn",
      preHeadline: "AI Workflows Paderborn",
      headline: "AI Workflows & Automatisierung in Paderborn",
      metaTitle: "AI Workflows Paderborn - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Paderborn. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Paderborn",
        "KI Automatisierung Paderborn",
        "Workflow Automatisierung Paderborn",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-paderborn",
      preHeadline: "n8n Automation Paderborn",
      headline: "n8n Automation in Paderborn - Workflows automatisieren",
      metaTitle: "n8n Automation Paderborn | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Paderborn. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Paderborn",
        "n8n Paderborn",
        "Workflow Automation Paderborn",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-paderborn",
      preHeadline: "n8n Paderborn",
      headline: "n8n Agentur in Paderborn",
      metaTitle: "n8n Paderborn - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Paderborn. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Paderborn und Umgebung.",
      keywords: [
        "n8n Paderborn",
        "n8n Agentur Paderborn",
        "n8n Beratung Paderborn",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-paderborn",
      preHeadline: "Automation Paderborn",
      headline: "Automation & Prozessoptimierung in Paderborn",
      metaTitle: "Automation Paderborn - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Paderborn. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Paderborn",
        "Prozessautomatisierung Paderborn",
        "Workflow Automation Paderborn",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-paderborn",
      preHeadline: "IT Dienstleister Paderborn",
      headline: "IT Dienstleister in Paderborn - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Paderborn - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Paderborn. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Paderborn.",
      keywords: [
        "IT Dienstleister Paderborn",
        "IT Service Paderborn",
        "Digitalisierung Paderborn",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-paderborn",
      preHeadline: "KI Beratung Paderborn",
      headline: "KI Beratung in Paderborn - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Paderborn - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Paderborn. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Paderborn",
        "KI Lösungen Paderborn",
        "Künstliche Intelligenz Paderborn",
        "Bluebatch",
      ],
    },
      {
      source: "/ki-agentur-paderborn",
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Paderborn",
  slug: "paderborn",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Gütersloh",
    "Detmold",
    "Bad Lippspringe",
    "Delbrück",
    "Salzkotten",
    "Lippstadt",
    "Höxter",
    "Warburg",
    "Büren",
  ],
  crossReference: [
    { name: "Bielefeld", slug: "bielefeld" },
    { name: "Hamm", slug: "hamm" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Paderborn | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Workflows für Paderborner IT und Automotive: PCI-DSS-Pipelines für Diebold Nixdorf, IATF für Benteler, HiL-Validierung für dSPACE und Industrie-Partnerschafts-Workflows für Uni Paderborn / SICP.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Paderborn",
      "n8n Paderborn",
      "Diebold Nixdorf ATM",
      "Benteler IATF",
      "dSPACE HiL",
      "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [{ url: "/images/cities/paderborn.jpg", width: 1200, height: 630, alt: "Paderborn – Diebold Nixdorf, Benteler und Heinz-Nixdorf-Erbe" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/cities/paderborn.jpg"] },
    alternates: { canonical: "/ki-agentur-paderborn" },
  };
}

const paderbornFaqs = [
  {
    question: "Diebold-Nixdorf-Zulieferer: wie hilft n8n bei PCI-DSS?",
    answer:
      "PCI-DSS-Compliance, ATM-Service-Tickets, Bankenpartner-Onboarding und Ersatzteil-Logistik in 100+ Länder. Anbindung an Salesforce Service Cloud, SAP und Banken-Schnittstellen.",
  },
  {
    question: "Benteler-Zulieferer: was bringt IATF-Automatisierung konkret?",
    answer:
      "PPAP-Pakete, EDI-Anbindung an Covisint und OEM-Portale, JIS-/JIT-Lieferpipelines und 8D-Reports. SAP QM, MES und PLM integriert – reduziert manuelle PPAP-Erstellung um 60-80 %.",
  },
  {
    question: "dSPACE-Umfeld: kann n8n HiL-Validierung unterstützen?",
    answer:
      "Ja. Test-Daten-Management, HiL-Simulations-Runs, Validierungs-Reports und ISO-26262-Funktionssicherheits-Workflows in n8n-Pipelines. Anbindung an dSPACE-Tools, SAP und PLM.",
  },
  {
    question: "Uni Paderborn / SICP: wie helfen Workflows bei Industriepartnerschaften?",
    answer:
      "DFG-, BMBF- und EU-Horizon-Projekte mit Industriepartnern (DN, Benteler, dSPACE, SAP) in n8n-Pipelines. Anbindung an HISinOne, SAP CO und easy-Online inklusive.",
  },
  {
    question: "Wir sind Paderborner IT-Mittelstand: wo lohnt sich KI zuerst?",
    answer:
      "Bei CRM-Lead-Klassifikation, bei Eingangsrechnungs-Verarbeitung und bei Multi-Tenant-Onboarding. Drei klassische IT-Mittelstands-Pain-Points mit klarem ROI in 4-8 Wochen.",
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
              {overrides?.preHeadline ?? "Standort Paderborn – IT- und Engineering-Hub Ostwestfalen"}
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              {overrides?.headline ?? "KI-Agentur in Paderborn – für Diebold Nixdorf, Benteler und dSPACE"}
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Diebold Nixdorf (Geldautomaten, POS-Systeme), Benteler-Automotive, dSPACE als HiL-Simulation-Marktführer und das Heinz-Nixdorf-Erbe machen Paderborn zum IT- und Engineering-Hub. Wir bauen Workflows für Banken-POS, IATF-Automotive und HiL-Validierung.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Beratung anfragen
              </ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/cities/paderborn.jpg"
              alt="Paderborn – Diebold Nixdorf, Benteler und Heinz-Nixdorf-Erbe"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 2. IntroBox – Specialty-Cluster-Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Paderborn – Heinz-Nixdorf-Stadt und IT-Hochburg Ostwestfalen
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo Diebold Nixdorf Geldautomaten weltweit wartet und dSPACE HiL-Simulationen für ADAS liefert, müssen Workflows IT- und Automotive-fest sein
          </IntroBox.Headline>
          <IntroBox.Subline>
            Diebold Nixdorf (10.000+ MA Region), Benteler (28.000 weltweit), dSPACE als HiL-Simulation-Marktführer, Universität Paderborn (s-lab, SICP) und Heinz-Nixdorf-MuseumsForum – Paderborn vereint Banken-IT, Automotive und HiL-Validierung in einer Dichte, die spezialisierte Workflows verlangt.
          </IntroBox.Subline>
        </IntroBox>
      </ContentWrapper>

      {/* 4. SimpleGrid cols=2 – 4 Specialty-Use-Cases */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Workflow-Bausteine für Paderborner IT und Automotive</Typo.H2>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <CreditCard className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>PCI-DSS- und Geldautomaten-Service-Workflows</Typo.H3>
            <Typo.Paragraph>
              PCI-DSS-Compliance, ATM-Service-Tickets, Bankenpartner-Onboarding und Ersatzteil-Logistik in 100+ Länder. Anbindung an Salesforce Service Cloud, SAP und Banken-Schnittstellen.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Car className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Benteler-Automotive- und IATF-Pipelines</Typo.H3>
            <Typo.Paragraph>
              PPAP-Pakete, EDI-Anbindung an Covisint, OPS-AT und Premium-OEMs, JIS-/JIT-Lieferpipelines und 8D-Reports. SAP QM, MES und PLM integriert.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Gauge className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>HiL-Validierungs- und ISO-26262-Workflows</Typo.H3>
            <Typo.Paragraph>
              Test-Daten-Management, HiL-Simulations-Runs, Validierungs-Reports und ISO-26262-Funktionssicherheits-Workflows in n8n-Pipelines. Anbindung an dSPACE-Tools, SAP und PLM.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Code className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Software-Drittmittel- und Industriepartnerschafts-Workflows</Typo.H3>
            <Typo.Paragraph>
              DFG-, BMBF- und EU-Horizon-Projekte mit Industriepartnern (DN, Benteler, dSPACE, SAP). Anbindung an HISinOne, SAP CO, easy-Online und Patent-Datenbanken.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 5. StatsList horizontal */}
      <ContentWrapper colorScheme="primary">
        <StatsList
          cols={4}
          stats={[
            { value: 155000, label: "Einwohner Paderborn" },
            { value: 10000, suffix: "+", label: "Diebold-Nixdorf-Region-Beschäftigte" },
            { value: 28000, suffix: "+", label: "Benteler-Mitarbeiter weltweit" },
            { value: 1, label: "Weltgrößtes Computermuseum (HNF)" },
          ]}
        />
      </ContentWrapper>

      {/* 3. NumberedList – 5 Stadt-Eigenheiten */}
      <ContentWrapper bodyWidth="small">
        <Typo.H2>5 Eigenheiten der Paderborner Wirtschaft, die Workflows beeinflussen</Typo.H2>
        <div className="mt-6">
          <NumberedList>
            <NumberedList.Item title="Diebold Nixdorf und Geldautomaten-Service weltweit:">
              Diebold Nixdorf (DN) liefert ATMs und POS-Systeme an Banken weltweit. PCI-DSS-Compliance, Service-Workflows mit Bankenpartner und Ersatzteil-Logistik in 100+ Länder sind Pipeline-Themen.
            </NumberedList.Item>
            <NumberedList.Item title="Benteler-Automotive und IATF-Pipelines:">
              Benteler-Automotive liefert Fahrwerkskomponenten, Modulträger und E-Mobility-Module an Premium-OEMs (BMW, Mercedes, Porsche). IATF-16949, PPAP und JIS-/JIT-Pipelines sind Pflicht.
            </NumberedList.Item>
            <NumberedList.Item title="dSPACE und HiL-Simulation für Automotive-ADAS:">
              dSPACE ist Weltmarktführer für Hardware-in-the-Loop-Simulation für ADAS, autonomes Fahren und E-Mobility. Validierungs-Workflows, Test-Daten-Management und ISO 26262 sind Pipeline-Themen.
            </NumberedList.Item>
            <NumberedList.Item title="Universität Paderborn und SICP-Software-Cluster:">
              Universität Paderborn mit s-lab (Software Quality Lab) und SICP-Software-Innovation-Campus. Drittmittel-Volumen, Industriepartnerschaften mit DN, Benteler, dSPACE und SAP-Kooperationen.
            </NumberedList.Item>
            <NumberedList.Item title="Heinz-Nixdorf-Erbe und MuseumsForum:">
              Heinz Nixdorf war Computer-Pionier (Wincor-Nixdorf), das HNF ist weltgrößtes Computermuseum. Tradition der IT-Industrie prägt KMU-Landschaft und Workflows.
            </NumberedList.Item>
          </NumberedList>
        </div>
      </ContentWrapper>

      {/* 7.5. Bonus — Paderborn in Zahlen */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Paderborn in Zahlen</Typo.H2>
        <SimpleGrid cols={4}>
          <KpiCard
            value={3300}
            subtitle="Diebold Nixdorf-Beschäftigte Paderborn"
          />
          <KpiCard
            value={31000}
            subtitle="Benteler-Mitarbeiter global"
          />
          <KpiCard
            value={20000}
            subtitle="Studierende Universität Paderborn"
          />
          <KpiCard
            value={2300}
            subtitle="dSPACE-Beschäftigte (stark wachsend)"
          />
        </SimpleGrid>
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
        <Typo.H2>Häufige Fragen aus Paderborn</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={paderbornFaqs} />
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
