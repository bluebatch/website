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
import { Gem, Cog, Factory, ShoppingBag } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-agentur-pforzheim",
  rewrites: [
    {
      source: "/ai-workflows-pforzheim",
      preHeadline: "AI Workflows Pforzheim",
      headline: "AI Workflows & Automatisierung in Pforzheim",
      metaTitle: "AI Workflows Pforzheim - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Pforzheim. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Pforzheim",
        "KI Automatisierung Pforzheim",
        "Workflow Automatisierung Pforzheim",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-pforzheim",
      preHeadline: "n8n Automation Pforzheim",
      headline: "n8n Automation in Pforzheim - Workflows automatisieren",
      metaTitle: "n8n Automation Pforzheim | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Pforzheim. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Pforzheim",
        "n8n Pforzheim",
        "Workflow Automation Pforzheim",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-pforzheim",
      preHeadline: "n8n Pforzheim",
      headline: "n8n Agentur in Pforzheim",
      metaTitle: "n8n Pforzheim - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Pforzheim. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Pforzheim und Umgebung.",
      keywords: [
        "n8n Pforzheim",
        "n8n Agentur Pforzheim",
        "n8n Beratung Pforzheim",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-pforzheim",
      preHeadline: "Automation Pforzheim",
      headline: "Automation & Prozessoptimierung in Pforzheim",
      metaTitle: "Automation Pforzheim - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Pforzheim. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Pforzheim",
        "Prozessautomatisierung Pforzheim",
        "Workflow Automation Pforzheim",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-pforzheim",
      preHeadline: "IT Dienstleister Pforzheim",
      headline: "IT Dienstleister in Pforzheim - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Pforzheim - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Pforzheim. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Pforzheim.",
      keywords: [
        "IT Dienstleister Pforzheim",
        "IT Service Pforzheim",
        "Digitalisierung Pforzheim",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-pforzheim",
      preHeadline: "KI Beratung Pforzheim",
      headline: "KI Beratung in Pforzheim - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Pforzheim - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Pforzheim. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Pforzheim",
        "KI Lösungen Pforzheim",
        "Künstliche Intelligenz Pforzheim",
        "Bluebatch",
      ],
    },
      {
      source: "/ki-agentur-pforzheim",
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Pforzheim",
  slug: "pforzheim",
  bundesland: "Baden-Württemberg",
  publish: false,
  nearbySmall: [
    "Mühlacker",
    "Bretten",
    "Vaihingen an der Enz",
    "Calw",
    "Bruchsal",
    "Ettlingen",
    "Remchingen",
  ],
  crossReference: [
    { name: "Karlsruhe", slug: "karlsruhe" },
    { name: "Stuttgart", slug: "stuttgart" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Pforzheim | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Workflows für Pforzheimer Schmuck- und Präzisions-Unternehmen: GwG/LBMA-Edelmetall-Compliance, CAD-CAM-Auftragsabwicklung, IATF-Lieferantenpipelines für Witzenmann und E-Commerce-Workflows für Klingel mit n8n.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Pforzheim",
      "n8n Pforzheim",
      "GwG LBMA Workflow",
      "Schmuck Automatisierung",
      "Witzenmann Zulieferer",
      "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [{ url: "/images/cities/pforzheim.jpg", width: 1200, height: 630, alt: "Pforzheim – Goldstadt und Präzisionstechnik" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/cities/pforzheim.jpg"] },
    alternates: { canonical: "/ki-agentur-pforzheim" },
  };
}

const pforzheimFaqs = [
  {
    question: "Können wir GwG- und LBMA-Compliance mit n8n abbilden?",
    answer:
      "Ja. Wareneingang von Doré-Barren, Schmelzprotokolle, KYC-Checks und Sanktionslisten-Prüfungen werden in revisionssicheren Pipelines orchestriert. Anbindung an branchenspezifische Edelmetall-ERPs und automatisierte LBMA-Responsible-Gold-Reports inklusive.",
  },
  {
    question: "Witzenmann-Zulieferung: was bringt Automatisierung konkret?",
    answer:
      "Erstmusterprüfung, PPAP, 8D-Reports und Charge-Tracking automatisiert an Covisint, SupplyOn oder direkte OEM-Portale. n8n verbindet SAP QM, MES und PLM zu IATF-16949-konformen Lieferpaketen – Vier-Augen-Freigabe inklusive.",
  },
  {
    question: "Wir sind Schmuckmittelstand – wo lohnt sich KI zuerst?",
    answer:
      "Bei CAD-CAM-Auftragsabwicklung, bei automatischer Angebotskalkulation aus Rhino- oder Matrix-Modellen und bei Kunden-Onboarding mit AI Agents. CPQ für Sonderanfertigungen ist der schnellste Hebel.",
  },
  {
    question: "Wie helfen Workflows der Klingel-Gruppe und anderen Versandhändlern?",
    answer:
      "Bestell-, Retouren- und Kundenservice-Pipelines zwischen Shopify/Shopware, ERP, Versanddienstleistern und Customer-Service-Tools wie Zendesk. KI-Klassifikation reduziert manuelle Retouren-Bearbeitung um 40-60 %.",
  },
  {
    question: "Wie schnell sehen wir erste Ergebnisse?",
    answer:
      "Erste produktive Workflows nach 1-2 Wochen, komplexe Edelmetall- oder CAD-CAM-Strecken in 4-8 Wochen. Wir starten immer mit einem konkreten Pain-Point, der sofort Wirkung zeigt.",
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
              {overrides?.preHeadline ?? "Standort Pforzheim – Goldstadt"}
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              {overrides?.headline ?? "KI-Agentur in Pforzheim – für Goldstadt, Witzenmann und Präzisions-Mittelstand"}
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Pforzheim verarbeitet historisch 70 % des deutschen Goldes, Witzenmann ist Weltmarktführer für Metallschläuche und die Hochschule Pforzheim prägt das Design Europas. Wir bauen Workflows für genau diese Spezialisierungen: GwG/LBMA-Edelmetall-Compliance, CAD-CAM-Auftragsabwicklung und IATF-konforme Lieferantenpipelines.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Beratung anfragen
              </ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/cities/pforzheim.jpg"
              alt="Pforzheim – Goldstadt und Präzisionstechnik"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 3. NumberedList – 5 Stadt-Eigenheiten */}
      <ContentWrapper bodyWidth="small">
        <Typo.H2>5 Eigenheiten der Pforzheimer Wirtschaft, die Workflows beeinflussen</Typo.H2>
        <div className="mt-6">
          <NumberedList>
            <NumberedList.Item title="Goldscheideanstalten und LBMA-Compliance:">
              C. Hafner und weitere Edelmetall-Verarbeiter unterliegen Geldwäschegesetz, Edelmetallaufsicht und LBMA-Zertifizierung. Wareneingang, Schmelzprotokolle und Lieferantenprüfung müssen lückenlos auditierbar sein.
            </NumberedList.Item>
            <NumberedList.Item title="Witzenmann-Zulieferung mit IATF 16949:">
              Als Weltmarktführer für Metallschläuche beliefert Witzenmann Automotive- und Anlagenbau weltweit. Lieferanten brauchen IATF-konforme Erstmusterprüfung, Charge-Tracking und PPAP-Dokumentation – automatisiert über PLM/MES.
            </NumberedList.Item>
            <NumberedList.Item title="Schmuck-Mittelstand mit CAD-CAM-Fertigung:">
              Wellendorff, Eppli und über 200 Schmuckmittelständler arbeiten mit Rhino, 3Design oder Matrix. CAD-Modelle, CNC-Fräsung und Wachsausschmelzguss müssen mit Auftragsverwaltung und ERP verbunden sein.
            </NumberedList.Item>
            <NumberedList.Item title="Klingel und Distanzhandels-Erbe:">
              Pforzheim war Versandhandel-Hochburg. Klingel, Wenz und Co. brauchen heute integrierte Bestell-, Retouren- und Kundenservice-Pipelines mit KI-Personalisierung gegen Amazon und Zalando.
            </NumberedList.Item>
            <NumberedList.Item title="Hochschule Pforzheim als Design-Hub:">
              Eine der renommiertesten Design-Hochschulen Europas speist Schmuckdesign, Industriedesign und Wirtschaftsingenieurwesen. Spin-offs und Mittelstand profitieren von Workflows zwischen Kreativtools (Adobe, Figma) und Produktionssystemen.
            </NumberedList.Item>
          </NumberedList>
        </div>
      </ContentWrapper>

      {/* 4. SimpleGrid cols=2 – 4 Specialty-Use-Cases */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Workflow-Bausteine für Pforzheimer Schmuck- und Präzisions-Unternehmen</Typo.H2>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Gem className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>GwG- und LBMA-Workflows für Goldscheideanstalten</Typo.H3>
            <Typo.Paragraph>
              Wareneingang, Schmelzprotokolle, KYC-Prüfungen und Lieferanten-Sanktionslisten automatisiert. Audit-Trail nach Edelmetallaufsicht und LBMA Responsible Gold Guidance, angebunden an SAP oder branchenspezifische Edelmetall-ERPs.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Cog className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>CAD-CAM-Auftragsabwicklung für Schmuckmittelstand</Typo.H3>
            <Typo.Paragraph>
              Vom Rhino-/Matrix-Modell zur CNC-Fräsung und Wachsausschmelzguss – Workflows verbinden CAD-Software, Stücklisten, Lagerverwaltung und Kundenfreigaben mit DocuSign oder Adobe Sign.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Factory className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>IATF-Lieferantenpipelines für Witzenmann-Zulieferung</Typo.H3>
            <Typo.Paragraph>
              Erstmusterprüfberichte, PPAP-Pakete, 8D-Reports und Charge-Tracking automatisch an OEM-Portale wie Covisint oder SupplyOn übergeben. Integration mit SAP QM und MES.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <ShoppingBag className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>E-Commerce- und Retouren-Workflows für Distanzhandel</Typo.H3>
            <Typo.Paragraph>
              Bestell-, Versand- und Retouren-Orchestrierung zwischen Shopify/Shopware, ERP, Lagerverwaltung und Versanddienstleistern. KI-gestützte Retouren-Klassifikation und Personalisierung im Kundenservice.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 5. StatsList horizontal */}
      <ContentWrapper colorScheme="primary">
        <StatsList
          cols={4}
          stats={[
            { value: 127000, label: "Einwohner Pforzheim" },
            { value: 11000, suffix: "+", label: "Beschäftigte Schmuck- und Uhrenindustrie" },
            { value: 4400, label: "Beschäftigte bei Witzenmann" },
            { value: 70, suffix: " %", label: "Anteil am deutschen Goldhandel (historisch)" },
          ]}
        />
      </ContentWrapper>

      {/* 2. IntroBox – Specialty-Cluster-Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Seit 1767 Goldstadt – seit 1854 Heimat des Metallschlauchs
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo Schmuck nach LBMA und Bauteile nach IATF auditiert werden, müssen Workflows lückenlos sein
          </IntroBox.Headline>
          <IntroBox.Subline>
            Über 11.000 Beschäftigte in Schmuck- und Uhrenindustrie, dazu Witzenmann mit 4.400 Mitarbeitenden und die Klingel-Gruppe im Distanzhandel – diese Spezialisierung verlangt spezialisierte Prozesse. Generische ERP-Abläufe reichen für Edelmetall-Schmelzprotokolle oder Goldscheideanstalten nicht aus.
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
        <Typo.H2>Häufige Fragen aus Pforzheim</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={pforzheimFaqs} />
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
