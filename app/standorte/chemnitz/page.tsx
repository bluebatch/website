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
import { Car, Cog, Cpu } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-workflows-chemnitz",
      preHeadline: "AI Workflows Chemnitz",
      headline: "AI Workflows & Automatisierung in Chemnitz",
      metaTitle: "AI Workflows Chemnitz - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Chemnitz. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Chemnitz",
        "KI Automatisierung Chemnitz",
        "Workflow Automatisierung Chemnitz",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-chemnitz",
      preHeadline: "n8n Automation Chemnitz",
      headline: "n8n Automation in Chemnitz - Workflows automatisieren",
      metaTitle: "n8n Automation Chemnitz | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Chemnitz. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Chemnitz",
        "n8n Chemnitz",
        "Workflow Automation Chemnitz",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-chemnitz",
      preHeadline: "n8n Chemnitz",
      headline: "n8n Agentur in Chemnitz",
      metaTitle: "n8n Chemnitz - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Chemnitz. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Chemnitz und Umgebung.",
      keywords: [
        "n8n Chemnitz",
        "n8n Agentur Chemnitz",
        "n8n Beratung Chemnitz",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-chemnitz",
      preHeadline: "Automation Chemnitz",
      headline: "Automation & Prozessoptimierung in Chemnitz",
      metaTitle: "Automation Chemnitz - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Chemnitz. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Chemnitz",
        "Prozessautomatisierung Chemnitz",
        "Workflow Automation Chemnitz",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-chemnitz",
      preHeadline: "IT Dienstleister Chemnitz",
      headline: "IT Dienstleister in Chemnitz - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Chemnitz - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Chemnitz. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Chemnitz.",
      keywords: [
        "IT Dienstleister Chemnitz",
        "IT Service Chemnitz",
        "Digitalisierung Chemnitz",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-chemnitz",
      preHeadline: "KI Beratung Chemnitz",
      headline: "KI Beratung in Chemnitz - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Chemnitz - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Chemnitz. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Chemnitz",
        "KI Lösungen Chemnitz",
        "Künstliche Intelligenz Chemnitz",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Chemnitz",
  slug: "chemnitz",
  bundesland: "Sachsen",
  publish: false,
  nearbySmall: [
    "Zwickau",
    "Freiberg",
    "Limbach-Oberfrohna",
    "Glauchau",
    "Mittweida",
    "Flöha",
    "Döbeln",
  ],
  crossReference: [
    { name: "Dresden", slug: "dresden" },
    { name: "Leipzig", slug: "leipzig" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Chemnitz | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Ihr Partner für n8n-Workflows, KI-Automatisierung und Prozessoptimierung in Chemnitz - vom VW-Motorenwerk über Niles-Simmons-Hegenscheidt bis zu MEMS- und Halbleiterzulieferern.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI-Agentur Chemnitz",
      "Workflow-Automatisierung Chemnitz",
      "n8n Chemnitz",
      "KI Automatisierung Chemnitz",
      "Prozessoptimierung Chemnitz",
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
          url: "/images/cities/chemnitz.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch KI-Agentur Chemnitz",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/chemnitz.jpg"],
    },
    alternates: {
      canonical: "/standorte/chemnitz",
    },
  };
}

const chemnitzFaqs = [
  {
    question: "VW-Motorenwerk fertigt Verbrenner - wie automatisieren wir die Transformation zu E-Antrieb?",
    answer:
      "720.000 Verbrenner-Motoren in 2024, mit Verbrenner-Aus 2035 muss das Werk Kapazitäten umlenken. Zulieferer brauchen Stücklisten-Migration, IMDS-Anpassung, neue IATF-Audits und Lieferanten-Onboarding. n8n koppelt SAP, PLM, MES und VW-Lieferanten-Portale zu einer Pipeline.",
  },
  {
    question: "Niles-Simmons-Hegenscheidt & Werkzeugmaschinenbau - welche Service-Workflows lohnen sich?",
    answer:
      "Globale Service-Tickets, Ersatzteil-Logistik, Wartungsverträge und Garantie-Abwicklung. n8n verbindet Field-Service-Apps, ERP und Kunden-Portale - wichtig im Wettbewerb mit chinesischen und japanischen Werkzeugmaschinen-Herstellern.",
  },
  {
    question: "Silicon-Saxony-Ausläufer - wie schaffen wir Halbleiter-Compliance als Mittelständler?",
    answer:
      "TSMC, Infineon und GlobalFoundries in Dresden saugen Zulieferer aus dem ganzen Cluster, bis nach Chemnitz. n8n hilft bei Onboarding-Workflows: ISO 9001, AS9100-Light, Automotive-Qualifikationen, RoHS/REACH - wichtig, um in den Halbleiter-Lieferantenpool zu kommen.",
  },
  {
    question: "Klinikum Chemnitz mit 13 Tochtergesellschaften - wie konsolidieren wir 7.000-MA-Verbund?",
    answer:
      "Konzern-Reporting, MDK-Prüfungen, DRG-Kodierung und Personaleinsatzplanung über 13 Töchter sind klassisches RPA-Feld. n8n synchronisiert KIS, Materialwirtschaft, HR und Kostenträger zu konsolidierten Konzern-Dashboards.",
  },
  {
    question: "Kulturhauptstadt-Erbe 2025 - wie laufen Förder- und Quartiers-Workflows?",
    answer:
      "Aus der Kulturhauptstadt-Bewerbung sind Förder-, Bau- und Quartiers-Projekte entstanden. n8n hält Fördermittel-Nachweise, EU-Reporting, Subventions-Doku und Investorenkommunikation auditfest und automatisch versendet.",
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
          imageSrc="/images/cities/chemnitz.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Chemnitz"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Chemnitz -{" "}
                vom Sächsischen Manchester zum{" "}
                <BackgroundHero.Highlight>Silicon-Saxony-Ausläufer</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Aus Textil-Tradition und Werkzeugmaschinen-Schwergewicht wurde VW-Motorenwerk, MEMS-Cluster und Kulturhauptstadt 2025. Wir automatisieren genau die Workflows, die ein sächsischer Industriestandort im Wandel braucht - Verbrenner-zu-Elektro, Werkzeugmaschinen-Service und Halbleiter-Onboarding.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">Automatisierung für Chemnitz besprechen</ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={246000}
              label="Einwohner"
              index={0}
            />
            <BackgroundHero.Stat
              value={720000}
              label="VW-Motoren produziert 2024"
              index={1}
            />
            <BackgroundHero.Stat
              value={7000}
              label="Klinikum Chemnitz Beschäftigte"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 4. SimpleGrid cols=3 */}
      <ContentWrapper>
        <Typo.H2>Wo n8n in Chemnitz heute den Hebel ansetzt</Typo.H2>
        <Typo.Paragraph>
          Drei Cluster, drei sehr unterschiedliche Pain-Points - aber alle mit einem gemeinsamen Bedürfnis: Workflows, die Datenflüsse zwischen Spezialsystemen orchestrieren.
        </Typo.Paragraph>
        <SimpleGrid cols={3}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Car className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Automotive & E-Mobilität</Typo.H3>
            <Typo.Paragraph>
              Verbrenner-zu-Elektro-Migration, IATF 16949, IMDS für VW, Stücklisten- und Stammdaten-Pflege. Lieferanten-Portale und JIT/JIS via DELJIT/DELFOR.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Cog className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Werkzeugmaschinen & Service</Typo.H3>
            <Typo.Paragraph>
              Globale Service-Tickets, Ersatzteil-Logistik, Wartungsverträge und Garantie-Abwicklung. Field-Service-Apps, ERP und Kunden-Portale in einer Pipeline.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Cpu className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Halbleiter-Zulieferung</Typo.H3>
            <Typo.Paragraph>
              ISO 9001, AS9100-Light, Automotive-Qualifikationen, RoHS/REACH, MEMS-spezifische QM. Onboarding-Workflows für Silicon-Saxony-Lieferantenpools.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 5. BoundlessImage */}
      <ContentWrapper colorScheme="gray-light">
        <BoundlessImageCard imagePosition="right">
          <BoundlessImageCard.Image
            src="/images/cities/chemnitz.jpg"
            alt="VW-Motorenwerk und Werkzeugmaschinen-Cluster Chemnitz"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>VW-Motorenwerk & Werkzeugmaschinen-Cluster - wo Textil war, fertigt heute die Welt</Typo.H2>
            <Typo.Paragraph>
              Aus dem ehemaligen Textil-Manchester wurde Werkzeugmaschinen-Welthauptstadt und VW-Motorenwerk. Heute kommt die nächste Welle: E-Antrieb statt Verbrenner, MEMS-Zulieferung statt Schwerindustrie. Beide Welten brauchen End-to-End-Workflows - Lieferanten-Onboarding, Service-Pipelines, IATF-Audit-Trails. n8n verbindet diese Schnittstellen - ein Use-Case, den wir mehrfach gebaut haben.
            </Typo.Paragraph>
            <div className="mt-4">
              <Link href="/unser-prozess" className="text-primary-600 hover:underline font-semibold">
                Unser 6-Phasen-Prozess →
              </Link>
            </div>
          </BoundlessImageCard.Content>
        </BoundlessImageCard>
      </ContentWrapper>

      {/* 2. IntroBox — Pain-Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Strukturwandel von Verbrenner zu E-Antrieb und Halbleiter
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was passiert mit den Prozessen, wenn aus Verbrenner-Motoren E-Antriebe und MEMS werden?
          </IntroBox.Headline>
          <IntroBox.Subline>
            Chemnitz hat seine Textil- und Schwerindustrie-Vergangenheit hinter sich und ist heute Sachsens drittgrößte Stadt mit einem der traditionsreichsten Werkzeugmaschinen-Cluster Europas. Das VW-Motorenwerk fertigt Verbrenner - ein auslaufendes Geschäft. Niles-Simmons-Hegenscheidt baut Schwerstwerkzeugmaschinen in alle Welt, der TSMC-/Infineon-Boom in Dresden saugt Zulieferer bis Chemnitz, das Klinikum konsolidiert 13 Töchter. Jede dieser Säulen hat eigene Prozess-Pains.
          </IntroBox.Subline>
        </IntroBox>
      </ContentWrapper>

      {/* 3. ProsCons */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Was Chemnitz hinter sich gelassen hat - und wo es jetzt steht</Typo.H2>
        <div className="mt-8">
          <ProsCons>
            <ProsCons.Cons>
              <ProsCons.Item
                title="VW-Motorenwerk im Verbrenner-Auslauf"
                description="Seit 1988 über 20 Mio. Motoren produziert, mit dem politisch beschlossenen Verbrenner-Aus 2035 muss sich das Werk komplett neu erfinden - 1.800 Beschäftigte unter Transformations-Druck."
              />
              <ProsCons.Item
                title="Werkzeugmaschinenbau unter Asien-Konkurrenzdruck"
                description="Niles-Simmons-Hegenscheidt und andere Werkzeugmaschinen-Hersteller kämpfen mit intensiver Konkurrenz aus China und Japan - Margenerosion zwingt zur Digitalisierung."
              />
              <ProsCons.Item
                title="Höchste Altersdurchschnitte deutscher Großstädte"
                description="Chemnitz hat überdurchschnittlich gealterte Belegschaft, demografischer Druck zwingt zu Effizienz in Verwaltung, Pflege und Bildung."
              />
              <ProsCons.Item
                title="Textil-Industrie längst Geschichte"
                description="'Sächsisches Manchester' verlor seine Textil-Schwergewichte über Jahrzehnte - heute nur noch Spezial-/Composites-Reste der einst dominierenden Industrie."
              />
            </ProsCons.Cons>
            <ProsCons.Pros>
              <ProsCons.Item
                title="Klinikum Chemnitz mit 13 Töchtern (ca. 7.000 MA)"
                description="Sachsens drittgrößtes Krankenhaus, Konzern-Verbund mit 13 Tochterfirmen - Klinik-Workflow-Champion mit komplexer Konsolidierungs-Anforderung."
              />
              <ProsCons.Item
                title="Niles-Simmons-Hegenscheidt - Weltmarktführer Schwerstwerkzeugmaschinen"
                description="1.500 MA, plus Starrag-Heckert und Union Werkzeugmaschinen - Chemnitz ist DAS Zentrum für Schwerstwerkzeugmaschinen weltweit."
              />
              <ProsCons.Item
                title="Silicon-Saxony-Ausläufer mit MEMS und Sensorik"
                description="TSMC, Infineon und GlobalFoundries in Dresden saugen Zulieferer aus dem ganzen Cluster bis Chemnitz - Spitzencluster MERGE, ICM-Forschung."
              />
              <ProsCons.Item
                title="TU Chemnitz + Kulturhauptstadt Europas 2025"
                description="2.300 MA an TU Chemnitz mit Schwerpunkten Leichtbau, Fahrzeugtechnik, Robotik - plus Sichtbarkeit und Förderkulisse aus Kulturhauptstadt-Programm."
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
        <Typo.H2>Häufige Fragen aus Chemnitz</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={chemnitzFaqs} />
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
