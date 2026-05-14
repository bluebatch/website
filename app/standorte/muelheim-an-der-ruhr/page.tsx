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
import { ShoppingCart, Cog, FlaskConical } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";


export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-agentur-muelheim-an-der-ruhr",
  rewrites: [
    {
      source: "/ai-workflows-muelheim-an-der-ruhr",
      preHeadline: "AI Workflows Mülheim an der Ruhr",
      headline: "AI Workflows & Automatisierung in Mülheim an der Ruhr",
      metaTitle: "AI Workflows Mülheim an der Ruhr - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Mülheim an der Ruhr. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Mülheim an der Ruhr",
        "KI Automatisierung Mülheim an der Ruhr",
        "Workflow Automatisierung Mülheim an der Ruhr",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-muelheim-an-der-ruhr",
      preHeadline: "n8n Automation Mülheim an der Ruhr",
      headline: "n8n Automation in Mülheim an der Ruhr - Workflows automatisieren",
      metaTitle: "n8n Automation Mülheim an der Ruhr | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Mülheim an der Ruhr. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Mülheim an der Ruhr",
        "n8n Mülheim an der Ruhr",
        "Workflow Automation Mülheim an der Ruhr",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-muelheim-an-der-ruhr",
      preHeadline: "n8n Mülheim an der Ruhr",
      headline: "n8n Agentur in Mülheim an der Ruhr",
      metaTitle: "n8n Mülheim an der Ruhr - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Mülheim an der Ruhr. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Mülheim an der Ruhr und Umgebung.",
      keywords: [
        "n8n Mülheim an der Ruhr",
        "n8n Agentur Mülheim an der Ruhr",
        "n8n Beratung Mülheim an der Ruhr",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-muelheim-an-der-ruhr",
      preHeadline: "Automation Mülheim an der Ruhr",
      headline: "Automation & Prozessoptimierung in Mülheim an der Ruhr",
      metaTitle: "Automation Mülheim an der Ruhr - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Mülheim an der Ruhr. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Mülheim an der Ruhr",
        "Prozessautomatisierung Mülheim an der Ruhr",
        "Workflow Automation Mülheim an der Ruhr",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-muelheim-an-der-ruhr",
      preHeadline: "IT Dienstleister Mülheim an der Ruhr",
      headline: "IT Dienstleister in Mülheim an der Ruhr - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Mülheim an der Ruhr - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Mülheim an der Ruhr. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Mülheim an der Ruhr.",
      keywords: [
        "IT Dienstleister Mülheim an der Ruhr",
        "IT Service Mülheim an der Ruhr",
        "Digitalisierung Mülheim an der Ruhr",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-muelheim-an-der-ruhr",
      preHeadline: "KI Beratung Mülheim an der Ruhr",
      headline: "KI Beratung in Mülheim an der Ruhr - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Mülheim an der Ruhr - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Mülheim an der Ruhr. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Mülheim an der Ruhr",
        "KI Lösungen Mülheim an der Ruhr",
        "Künstliche Intelligenz Mülheim an der Ruhr",
        "Bluebatch",
      ],
    },
      {
      source: "/ki-agentur-muelheim-an-der-ruhr",
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Mülheim an der Ruhr",
  slug: "muelheim-an-der-ruhr",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Ratingen",
    "Dinslaken",
  ],
  crossReference: [
    { name: "Essen", slug: "essen" },
    { name: "Duisburg", slug: "duisburg" },
    { name: "Oberhausen", slug: "oberhausen" },
    { name: "Düsseldorf", slug: "duesseldorf" },
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
    "KI in Mülheim | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Ihr Partner für n8n-Workflows, KI-Automatisierung und Prozessoptimierung in der Handels-Hauptstadt des Ruhrgebiets.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Mülheim an der Ruhr", "n8n Mülheim an der Ruhr", "Workflow-Automatisierung Mülheim an der Ruhr", "KI Beratung Mülheim an der Ruhr", "Prozessoptimierung Mülheim an der Ruhr", "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [
        {
          url: "/images/cities/muelheim-an-der-ruhr.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch Workflow-Automatisierung Mülheim an der Ruhr",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/muelheim-an-der-ruhr.jpg"],
    },
    alternates: {
      canonical: "/ki-agentur-muelheim-an-der-ruhr",
    },
  };
}

const muelheimanderruhrFaqs = [
  {
    question: "ALDI Süd steuert weltweit – wie automatisieren wir Konzern-Workflows in Mülheim?",
    answer:
      "ALDI Süd hat eigene IT-Plattformen. Für Zulieferer und Tochter-Dienstleister bauen wir EDI, Stammdaten-Synchronisation, CSRD-/LkSG-Reporting und Marketing-Workflows. n8n koppelt Lieferanten-Portale, ERP und Cloud-DWH zu einer durchgängigen Pipeline.",
  },
  {
    question: "Siemens Energy in Mülheim-Mintard – wie helfen Workflows in der Gasturbinen-Hyperphase?",
    answer:
      "Engineering-to-Order, CPQ, globaler Service mit Field-Force, Ersatzteilversorgung und Predictive Maintenance für Gasturbinen und Generatoren. n8n verbindet PLM (Teamcenter), SAP, MES, IoT-Plattformen und Service-Apps – wichtig im aktuellen Energie-Boom.",
  },
  {
    question: "Brenntag als Weltmarktführer Chemiehandel – welche Workflows sind sinnvoll?",
    answer:
      "Sicherheitsdatenblätter in 25+ Sprachen, REACH/CLP-Compliance, ADR-Gefahrgut, Lieferketten-Workflows und globale Stammdaten. n8n synchronisiert SAP, EHS-Software, Behörden-Schnittstellen und Kunden-Portale weltweit.",
  },
  {
    question: "Tengelmann-Gruppe steuert OBI, KiK und Trei – wie automatisieren wir Holding-Funktionen?",
    answer:
      "Holdings brauchen Konzern-Konsolidierung, M&A-Integration, einheitliches Beteiligungs-Reporting, Treasury und gemeinsame Compliance. n8n verbindet ERP-Inseln der Töchter zu konsolidierten Holding-Dashboards.",
  },
  {
    question: "Max-Planck-Institute & Spin-offs – welche Workflows brauchen Deep-Tech-Startups?",
    answer:
      "Labordatenmanagement (ELN/LIMS), Fördermittel-Abrechnung (DFG, BMBF, EU), IP-/Patent-Workflows und Transfer-Compliance. n8n hilft jungen Spin-offs aus MPI Kohlenforschung und MPI CEC, früh skalierbare Prozesse aufzubauen.",
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
          imageSrc="/images/cities/muelheim-an-der-ruhr.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Mülheim an der Ruhr"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Mülheim –{" "}
                von der Stahlstadt zur{" "}
                <BackgroundHero.Highlight>Handels- und Energie-Zentrale Deutschlands</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Aus Mannesmann und Stahl wurde ALDI-Süd-HQ, Brenntag, Siemens Energy Mintard und zwei Max-Planck-Institute. Wir automatisieren genau die Workflows, die ein Handels- und Energie-Zentrum braucht – Konzern-Konsolidierung, ETO im Großmotorenbau und Lieferanten-EDI.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">Automatisierung für Mülheim besprechen</ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={172000}
              label="Einwohner"
              index={0}
            />
            <BackgroundHero.Stat
              value={4500}
              label="Siemens Energy Beschäftigte"
              index={1}
            />
            <BackgroundHero.Stat
              value={3}
              label="Konzern-HQs (ALDI Süd, Tengelmann, Brenntag)"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 5. BoundlessImage */}
      <ContentWrapper colorScheme="gray-light">
        <BoundlessImageCard imagePosition="right">
          <BoundlessImageCard.Image
            src="/images/cities/muelheim-an-der-ruhr.jpg"
            alt="ALDI Süd HQ und Siemens Energy Mintard – Transformation"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>ALDI-Süd-HQ & Siemens Mintard – wo Mannesmann war, läuft heute der Welt-Handel</Typo.H2>
            <Typo.Paragraph>
              Aus dem ehemaligen Stahl-Mülheim wurde Handels-Hauptstadt: ALDI Süd, Tengelmann und Brenntag steuern globale Konzernfunktionen, Siemens Energy in Mintard liefert Gasturbinen in alle Welt. Beide Welten brauchen End-to-End-Workflows – Lieferketten-Steuerung, ETO-Konfiguration, Service-Pipelines. n8n verbindet diese Schnittstellen – ein Use-Case, den wir mehrfach gebaut haben.
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
        <Typo.H2>Wo n8n in Mülheim heute den Hebel ansetzt</Typo.H2>
        <Typo.Paragraph>
          Drei Cluster, drei sehr unterschiedliche Pain-Points – aber alle mit einem gemeinsamen Bedürfnis: Workflows, die Datenflüsse zwischen Spezialsystemen orchestrieren.
        </Typo.Paragraph>
        <SimpleGrid cols={3}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <ShoppingCart className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Handelskonzerne & Holdings</Typo.H3>
            <Typo.Paragraph>
              EDI-Anbindung an Discount/LEH, Stammdaten-Synchronisation, CSRD-/LkSG-Reporting, Treasury, Konzern-Konsolidierung und Marketing-Workflows.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Cog className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Energie- & Großanlagenbau</Typo.H3>
            <Typo.Paragraph>
              ETO/CPQ, Stücklisten-Sync PLM-ERP, globaler Service mit Field-Force, Ersatzteilversorgung und Predictive Maintenance für Gasturbinen, Generatoren und Großmotoren.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <FlaskConical className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Chemie, Forschung & Spin-offs</Typo.H3>
            <Typo.Paragraph>
              REACH/CLP, ADR-Gefahrgut, Sicherheitsdatenblätter mehrsprachig, ELN/LIMS für Labore und BMBF/EU-Fördermittel-Workflows für Spin-offs.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 2. IntroBox — Pain-Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Strukturwandel von Stahl zu Handelsmetropole
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was passiert mit den Prozessen, wenn aus Stahl drei Konzern-HQs werden?
          </IntroBox.Headline>
          <IntroBox.Subline>
            Mülheim hat in 50 Jahren seine Stahlindustrie verloren – und gleich drei der größten Handelskonzerne Deutschlands neu aufgebaut. ALDI Süd steuert von hier aus 50.000 Beschäftigte weltweit, Tengelmann hält OBI, KiK und Trei, Brenntag handelt Chemikalien rund um den Globus. Siemens Energy boomt in Mintard, die Max-Planck-Institute ziehen Spin-offs an. Jede dieser Säulen hat eigene Prozess-Pains.
          </IntroBox.Subline>
        </IntroBox>
      </ContentWrapper>

      {/* 3. ProsCons */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Was Mülheim hinter sich gelassen hat – und wo es jetzt steht</Typo.H2>
        <div className="mt-8">
          <ProsCons>
            <ProsCons.Cons>
              <ProsCons.Item
                title="Mannesmann-Konzern aufgelöst, Stahl- und Röhren-Industrie reduziert"
                description="Mannesmann-Tradition mit Stahlrohrfertigung weitgehend Geschichte, SMS group als Anlagenbauer übernahm Teile – klassische Schwerindustrie schrumpfte massiv."
              />
              <ProsCons.Item
                title="Bergbau-Erbe an Ruhr und Speldorf"
                description="Mülheim-Speldorf und Umgebung mit jahrzehntelangem Strukturwandel und Brachflächen-Konversion."
              />
              <ProsCons.Item
                title="Tengelmann-Gruppe nach Kaiser's-Verkauf neu aufgestellt"
                description="Verkauf von Kaiser's-Tengelmann an EDEKA und REWE 2017 – Holding musste sich neu erfinden, OBI/KiK/Trei als Schwerpunkte."
              />
              <ProsCons.Item
                title="Klassischer Mittelstand zwischen Großkonzernen"
                description="Maschinenbau- und Engineering-KMU 50-500 MA müssen sich gegen Konzern-Standards (EDI, LkSG, CSRD) behaupten oder Lieferantenstatus verlieren."
              />
            </ProsCons.Cons>
            <ProsCons.Pros>
              <ProsCons.Item
                title="ALDI SÜD Konzernzentrale (1.500 MA Mülheim, 50.000 weltweit)"
                description="Einer der größten Discount-Konzerne der Welt, mit komplexen Lieferketten-, Stammdaten- und ESG-Workflows."
              />
              <ProsCons.Item
                title="Siemens Energy Mintard (4.500 MA) im Energie-Boom"
                description="Globale Gasturbinen- und Generator-Produktion mit 1.200+ Auszubildenden, Wasserstoffhochlauf treibt das Wachstum."
              />
              <ProsCons.Item
                title="Brenntag SE – Weltmarktführer Chemiehandel"
                description="Globaler Vertrieb von Industrie- und Spezialchemikalien, 800 MA in Mülheim, komplexe HSE- und Stammdaten-Workflows."
              />
              <ProsCons.Item
                title="Zwei Max-Planck-Institute (Kohlenforschung & CEC)"
                description="700 Beschäftigte, Spitzenforschung in chemischer Energiekonversion – Spin-offs und Deep-Tech-Startups als Wachstumsmotor."
              />
            </ProsCons.Pros>
          </ProsCons>
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
        <Typo.H2>Häufige Fragen aus Mülheim</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={muelheimanderruhrFaqs} />
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
