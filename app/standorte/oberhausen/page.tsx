import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentWrapper from "@/components/layout/content-wrapper";
import BackgroundHero from "@/components/heroes/background-hero";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import Typo from "@/components/ui/typo";
import IntroBox from "@/components/ui/intro-box";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import BoundlessImageCard from "@/components/cards/boundless-image-card";
import ProsCons from "@/components/sections/pros-cons";
import { FaqContainer } from "@/components/ui/faqs";
import { CityLinksFromMeta } from "@/components/standorte/city-links";
import ContactButton from "@/components/buttons/contact-button";
import { Cog, FlaskConical, ShoppingCart } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";


export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-agentur-oberhausen",
  rewrites: [
    {
      source: "/ai-workflows-oberhausen",
      preHeadline: "AI Workflows Oberhausen",
      headline: "AI Workflows & Automatisierung in Oberhausen",
      metaTitle: "AI Workflows Oberhausen - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Oberhausen. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Oberhausen",
        "KI Automatisierung Oberhausen",
        "Workflow Automatisierung Oberhausen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-oberhausen",
      preHeadline: "n8n Automation Oberhausen",
      headline: "n8n Automation in Oberhausen - Workflows automatisieren",
      metaTitle: "n8n Automation Oberhausen | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Oberhausen. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Oberhausen",
        "n8n Oberhausen",
        "Workflow Automation Oberhausen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-oberhausen",
      preHeadline: "n8n Oberhausen",
      headline: "n8n Agentur in Oberhausen",
      metaTitle: "n8n Oberhausen - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Oberhausen. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Oberhausen und Umgebung.",
      keywords: [
        "n8n Oberhausen",
        "n8n Agentur Oberhausen",
        "n8n Beratung Oberhausen",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-oberhausen",
      preHeadline: "Automation Oberhausen",
      headline: "Automation & Prozessoptimierung in Oberhausen",
      metaTitle: "Automation Oberhausen - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Oberhausen. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Oberhausen",
        "Prozessautomatisierung Oberhausen",
        "Workflow Automation Oberhausen",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-oberhausen",
      preHeadline: "IT Dienstleister Oberhausen",
      headline: "IT Dienstleister in Oberhausen - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Oberhausen - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Oberhausen. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Oberhausen.",
      keywords: [
        "IT Dienstleister Oberhausen",
        "IT Service Oberhausen",
        "Digitalisierung Oberhausen",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-oberhausen",
      preHeadline: "KI Beratung Oberhausen",
      headline: "KI Beratung in Oberhausen - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Oberhausen - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Oberhausen. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Oberhausen",
        "KI Lösungen Oberhausen",
        "Künstliche Intelligenz Oberhausen",
        "Bluebatch",
      ],
    },
      {
      source: "/ki-agentur-oberhausen",
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Oberhausen",
  slug: "oberhausen",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Gladbeck",
    "Dinslaken",
  ],
  crossReference: [
    { name: "Essen", slug: "essen" },
    { name: "Duisburg", slug: "duisburg" },
    { name: "Bottrop", slug: "bottrop" },
    { name: "Mülheim an der Ruhr", slug: "muelheim-an-der-ruhr" },
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
    "KI-Agentur in Oberhausen | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Ihr Partner für n8n-Workflows, KI-Automatisierung und Prozessoptimierung im westlichen Ruhrgebiet.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Oberhausen", "n8n Oberhausen", "Workflow-Automatisierung Oberhausen", "KI Beratung Oberhausen", "Prozessoptimierung Oberhausen", "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [
        {
          url: "/images/cities/oberhausen.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch Workflow-Automatisierung Oberhausen",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/oberhausen.jpg"],
    },
    alternates: {
      canonical: "/ki-agentur-oberhausen",
    },
  };
}

const oberhausenFaqs = [
  {
    question: "MAN Energy Solutions baut Wasserstoffkompressoren - welche Workflows brauchen wir?",
    answer:
      "Engineering-to-Order (ETO), CPQ-Konfiguration, Großmotor-Stücklisten, Service- und After-Sales-Workflows mit Predictive Maintenance. n8n verbindet PLM (Teamcenter), SAP, MES und Field-Service-Plattformen - wichtig für globale Wartung von Großmotoren und Turbinen.",
  },
  {
    question: "OQ Chemicals: wie automatisieren wir Spezialchemie-Compliance?",
    answer:
      "REACH, CLP, Seveso-III, IFRS-Reporting an Muttergesellschaft in Oman sowie 24/7-Anlagenbetrieb-Doku. n8n koppelt LIMS, EHS-Software, SAP und Behörden-Schnittstellen (BImSchG, REACH-IT) - self-hosted und auditfest.",
  },
  {
    question: "CentrO als Erlebniscluster - welche Workflows lohnen sich im Handel und Center-Management?",
    answer:
      "Personaleinsatzplanung über 250+ Shops, Center-Marketing-Automation, Pre- und Post-Visit-Kommunikation, Loyalty-Workflows und Filialdisposition. Plus Reklamations- und Service-Tickets übergreifend zwischen Center und Shops.",
  },
  {
    question: "Babcock-Areal in Konversion - wie helfen Workflows bei der Quartiers-Entwicklung?",
    answer:
      "Konversion komplexer Industrieflächen zieht Genehmigungs-, Vergabe- und Mittelverwendungs-Doku über Jahre hin. n8n verbindet Projektmanagement, Behördenschnittstellen, Förderstellen (Ruhrkonferenz, EU-EFRE) und Investoren-Reporting.",
  },
  {
    question: "GMVA Niederrhein - wie automatisieren wir Müllverwertung und Energiebilanz?",
    answer:
      "Anlieferungs-Quittierung, Wiegescheine, Emissions-Reporting, Strom-/Wärmebilanz und Marktkommunikation. n8n koppelt Wiegesysteme, EHS, BNetzA-Plattformen und Stadtwerke-Abrechnung zu einer Pipeline.",
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
          imageSrc="/images/cities/oberhausen.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Oberhausen"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Oberhausen -{" "}
                vom Stahl-Sterkrade zum{" "}
                <BackgroundHero.Highlight>Wasserstoff- und Erlebnis-Hub</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Aus Babcock und Hütten-Industrie wurde MAN Energy Solutions, OQ Chemicals und CentrO. Wir automatisieren genau die Workflows, die ein Strukturwandel-Standort braucht - Engineering-to-Order für Großmotoren, Chemie-Compliance und Center-Management.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">Automatisierung für Oberhausen besprechen</ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={209000}
              label="Einwohner"
              index={0}
            />
            <BackgroundHero.Stat
              value={3500}
              label="MAN Energy Solutions Beschäftigte"
              index={1}
            />
            <BackgroundHero.Stat
              value={20}
              suffix=" Mio."
              label="CentrO-Besucher (vor Corona)"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 2. IntroBox — Pain-Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Strukturwandel von Schwerindustrie zu Hightech & Handel
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was passiert mit den Prozessen, wenn aus Babcock MAN Wasserstoff wird?
          </IntroBox.Headline>
          <IntroBox.Subline>
            Oberhausen hat den klassischen Schwer- und Anlagenbau weitgehend hinter sich - und steht für die zweite Welle: MAN Energy Solutions baut von hier aus Wasserstoffkompressoren und Großwärmepumpen, OQ Chemicals produziert Oxo-Intermediates, das CentrO orchestriert 250+ Shops. Parallel ist das ehemalige Babcock-Areal in städtebaulicher Konversion. Jede dieser Säulen hat eigene Prozess-Pains.
          </IntroBox.Subline>
        </IntroBox>
      </ContentWrapper>

      {/* 3. ProsCons */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Was Oberhausen hinter sich gelassen hat - und wo es jetzt steht</Typo.H2>
        <div className="mt-8">
          <ProsCons>
            <ProsCons.Cons>
              <ProsCons.Item
                title="Babcock Borsig Insolvenz - Anlagenbau-Erbe abgewickelt"
                description="Letzte Babcock-Reste mit drastischem Personalabbau, keine Transfergesellschaft - Spezial-Anlagenbauer und Engineering-Kompetenz weitgehend verloren."
              />
              <ProsCons.Item
                title="Hütten- und Schwerindustrie weitgehend verschwunden"
                description="Traditionelle Stahl- und Hütten-Werke der Stadt geschlossen oder weit reduziert - Industrie-Beschäftigung musste neu aufgebaut werden."
              />
              <ProsCons.Item
                title="CentrO unter Online-Druck"
                description="Stationärer Handel verliert Marge an E-Commerce, klassische Handels-Cluster müssen Erlebnis und Marketing massiv hochfahren."
              />
              <ProsCons.Item
                title="Strukturschwache Demografie und Fachkräftemangel"
                description="Klinikum Oberhausen, Stadtverwaltung und Mittelstand kämpfen um Fachkräfte gegen die größeren Nachbarn Düsseldorf, Essen und Duisburg."
              />
            </ProsCons.Cons>
            <ProsCons.Pros>
              <ProsCons.Item
                title="MAN Energy Solutions (3.500 MA in Sterkrade)"
                description="Globaler Großmotor-, Turbinen- und Kompressoren-Bauer im Energiewende-Hochlauf - Wasserstoffkompressoren, Großwärmepumpen, Schiffsmotoren auf neuen Kraftstoffen."
              />
              <ProsCons.Item
                title="OQ Chemicals (1.300 MA) - Oxo-Intermediates für die Welt"
                description="Oman-finanzierte Spezialchemie mit großem Standortwerk - Schwerpunkt Spezialchemie, eingebunden in regionale Chemieachse."
              />
              <ProsCons.Item
                title="CentrO - einer der größten Erlebnis-Cluster Europas"
                description="250+ Shops, Gastronomien, Sea Life, Topgolf, neue Stadium-Projekte - 4.000 Beschäftigte kumuliert, ca. 20 Mio. Besucher (vor Corona)."
              />
              <ProsCons.Item
                title="Logistik-Korridor A2/A3/A42/A516 + Containerterminal"
                description="Distributionszentren entlang Autobahn und Rhein-Herne-Kanal - ideal positioniert zwischen Duisport, Düsseldorf und Essen."
              />
            </ProsCons.Pros>
          </ProsCons>
        </div>
      </ContentWrapper>

      {/* 5. BoundlessImage */}
      <ContentWrapper colorScheme="gray-light">
        <BoundlessImageCard imagePosition="right">
          <BoundlessImageCard.Image
            src="/images/cities/logistics-hub.jpg"
            alt="MAN Energy Solutions Sterkrade - Transformation"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>MAN Sterkrade & Babcock-Areal - wo Hütte war, fertigt heute der Wasserstoffkompressor</Typo.H2>
            <Typo.Paragraph>
              MAN Energy Solutions baut in Oberhausen-Sterkrade Großmotoren und H2-Kompressoren für die Energiewende. Das benachbarte Babcock-Areal befindet sich in einer städtebaulichen Konversion zu Gewerbe- und Mischflächen. Beide Welten brauchen End-to-End-Workflows - Engineering-to-Order, Genehmigungs-Pipelines und Investoren-Onboarding. n8n verbindet diese Schnittstellen - ein Use-Case, den wir mehrfach gebaut haben.
            </Typo.Paragraph>
            <div className="mt-4">
              <Link href="/unser-prozess" className="text-primary-600 hover:underline font-semibold">
                Unser 6-Phasen-Prozess →
              </Link>
            </div>
          </BoundlessImageCard.Content>
        </BoundlessImageCard>
      </ContentWrapper>

      {/* 4. SimpleGrid cols=3 */}
      <ContentWrapper>
        <Typo.H2>Wo n8n in Oberhausen heute den Hebel ansetzt</Typo.H2>
        <Typo.Paragraph>
          Drei Cluster, drei sehr unterschiedliche Pain-Points - aber alle mit einem gemeinsamen Bedürfnis: Workflows, die Datenflüsse zwischen Spezialsystemen orchestrieren.
        </Typo.Paragraph>
        <SimpleGrid cols={3}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Cog className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Großanlagenbau & Energietechnik</Typo.H3>
            <Typo.Paragraph>
              ETO/CPQ-Konfiguration, Stücklisten-Sync PLM-ERP, Service-Workflows und Predictive Maintenance für MAN-Großmotoren und Zulieferer-Mittelstand.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <FlaskConical className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Chemie & HSE</Typo.H3>
            <Typo.Paragraph>
              REACH/CLP-Doku, Seveso-III, Anlagen-Wartungs-Workflows, IFRS-Reporting an Konzern-Mütter und Schnittstellen zu Behörden (BImSchG, REACH-IT).
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <ShoppingCart className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Handel & Center-Management</Typo.H3>
            <Typo.Paragraph>
              Personaleinsatzplanung, Center-Marketing-Automation, Loyalty-Workflows, Filialdisposition und Reklamations-Tickets - CentrO und Promenaden-Cluster.
            </Typo.Paragraph>
          </SimpleCard>
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
        <Typo.H2>Häufige Fragen aus Oberhausen</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={oberhausenFaqs} />
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
