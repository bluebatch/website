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
import { Cog, Landmark, Shirt } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";


export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-agentur-moenchengladbach",
  rewrites: [
    {
      source: "/ai-workflows-moenchengladbach",
      preHeadline: "AI Workflows Mönchengladbach",
      headline: "AI Workflows & Automatisierung in Mönchengladbach",
      metaTitle: "AI Workflows Mönchengladbach - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Mönchengladbach. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Mönchengladbach",
        "KI Automatisierung Mönchengladbach",
        "Workflow Automatisierung Mönchengladbach",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-moenchengladbach",
      preHeadline: "n8n Automation Mönchengladbach",
      headline: "n8n Automation in Mönchengladbach - Workflows automatisieren",
      metaTitle: "n8n Automation Mönchengladbach | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Mönchengladbach. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Mönchengladbach",
        "n8n Mönchengladbach",
        "Workflow Automation Mönchengladbach",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-moenchengladbach",
      preHeadline: "n8n Mönchengladbach",
      headline: "n8n Agentur in Mönchengladbach",
      metaTitle: "n8n Mönchengladbach - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Mönchengladbach. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Mönchengladbach und Umgebung.",
      keywords: [
        "n8n Mönchengladbach",
        "n8n Agentur Mönchengladbach",
        "n8n Beratung Mönchengladbach",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-moenchengladbach",
      preHeadline: "Automation Mönchengladbach",
      headline: "Automation & Prozessoptimierung in Mönchengladbach",
      metaTitle: "Automation Mönchengladbach - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Mönchengladbach. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Mönchengladbach",
        "Prozessautomatisierung Mönchengladbach",
        "Workflow Automation Mönchengladbach",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-moenchengladbach",
      preHeadline: "IT Dienstleister Mönchengladbach",
      headline: "IT Dienstleister in Mönchengladbach - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Mönchengladbach - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Mönchengladbach. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Mönchengladbach.",
      keywords: [
        "IT Dienstleister Mönchengladbach",
        "IT Service Mönchengladbach",
        "Digitalisierung Mönchengladbach",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-moenchengladbach",
      preHeadline: "KI Beratung Mönchengladbach",
      headline: "KI Beratung in Mönchengladbach - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Mönchengladbach - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Mönchengladbach. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Mönchengladbach",
        "KI Lösungen Mönchengladbach",
        "Künstliche Intelligenz Mönchengladbach",
        "Bluebatch",
      ],
    },
      {
      source: "/ki-agentur-moenchengladbach",
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Mönchengladbach",
  slug: "moenchengladbach",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Viersen",
    "Korschenbroich",
    "Jüchen",
    "Grevenbroich",
    "Erkelenz",
    "Kaarst",
    "Willich",
  ],
  crossReference: [
    { name: "Düsseldorf", slug: "duesseldorf" },
    { name: "Krefeld", slug: "krefeld" },
    { name: "Aachen", slug: "aachen" },
    { name: "Neuss", slug: "neuss" },
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
    "KI in Mönchengladbach | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Ihr Partner für n8n-Workflows, KI-Automatisierung und Prozessoptimierung im IHK-Bezirk Mittlerer Niederrhein.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Mönchengladbach", "n8n Mönchengladbach", "Workflow-Automatisierung Mönchengladbach", "KI Beratung Mönchengladbach", "Prozessoptimierung Mönchengladbach", "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [
        {
          url: "/images/cities/moenchengladbach.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch Workflow-Automatisierung Mönchengladbach",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/moenchengladbach.jpg"],
    },
    alternates: {
      canonical: "/ki-agentur-moenchengladbach",
    },
  };
}

const moenchengladbachFaqs = [
  {
    question: "SMS group baut Stahlwerke weltweit – welche ETO/CPQ-Workflows brauchen wir am HQ?",
    answer:
      "SMS, Trützschler, Monforts und Starrag konkurrieren weltweit mit Asien. Engineering-to-Order, CPQ-Konfiguration, Konzern-Stücklisten-Pflege und After-Sales (Ersatzteile, Inbetriebnahme-Reports) sind klassische Workflow-Felder. n8n verbindet PLM, SAP, MES und Kunden-Portale.",
  },
  {
    question: "Santander Deutschland-HQ mit MaRisk/BAIT/DORA – wie automatisieren wir Bank-Compliance?",
    answer:
      "Konsumentenkredit-Antragsstrecken, KYC/AML, MaRisk/BAIT/DORA-Reporting an BaFin und EBA, IT-Operational-Resilience und Auslagerungs-Management. n8n läuft self-hosted, BSI-Grundschutz-konform und mit revisionsfestem Audit-Trail.",
  },
  {
    question: "Textilfabrik 7.0 & technische Textilien – welche Workflows skalieren Re-Industrialisierung?",
    answer:
      "Auftragsabwicklung zwischen Weberei, Färberei, Ausrüstung und Konfektion, EDI mit Modemarken (BMG-ECOD, ECOD), Track-and-Trace technischer Textilien und Hochschule-Niederrhein-Forschungskooperation. n8n koppelt MES, ERP und Marktplätze für vernetzte Produktion.",
  },
  {
    question: "Trützschler & Monforts – welche Service-Workflows lohnen sich im globalen Textilmaschinenbau?",
    answer:
      "Spinnerei- und Ausrüstungs-Maschinen laufen weltweit, Service- und Ersatzteil-Logistik in 50+ Länder, Predictive Maintenance via IoT, Inbetriebnahme-Reports und Garantie-Workflows. n8n verbindet Field-Service, ERP und Kunden-Portale.",
  },
  {
    question: "Logistik im Regiopark A52/A61 – wie automatisieren wir Mode- und E-Commerce-Versand?",
    answer:
      "Mode-Distributionszentren und E-Commerce-Hubs entlang A52/A61 brauchen automatisierte Disposition, EDI mit LEH/Mode-Zentralen, Yard-Management und Versand-/Retouren-Tracking. n8n koppelt TMS, WMS, OMS und Carrier-APIs.",
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
          imageSrc="/images/cities/moenchengladbach.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Mönchengladbach"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Mönchengladbach –{" "}
                vom Textil-Manchester zum{" "}
                <BackgroundHero.Highlight>Anlagenbau- und Finanz-HQ</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Aus klassischer Textilindustrie wurde SMS-group-HQ, Santander-Deutschland-Sitz, Trützschler und Textilfabrik 7.0. Wir automatisieren genau die Workflows, die ein niederrheinischer Industriestandort im Wandel braucht – ETO im Anlagenbau, MaRisk/BAIT in der Bank und vernetzte Textilproduktion.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">Automatisierung für Mönchengladbach besprechen</ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={261000}
              label="Einwohner"
              index={0}
            />
            <BackgroundHero.Stat
              value={14400}
              label="SMS group MA (weltweit, HQ MG)"
              index={1}
            />
            <BackgroundHero.Stat
              value={3000}
              label="Santander Deutschland-HQ MA"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 3. ProsCons */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Was Mönchengladbach hinter sich lässt – und wo es jetzt steht</Typo.H2>
        <div className="mt-8">
          <ProsCons>
            <ProsCons.Cons>
              <ProsCons.Item
                title="Klassische Textil-Produktion weitgehend verschwunden"
                description="Ehemals 'deutsches Manchester' mit Webereien und Konfektion – heute nur noch Spezial- und Tech-Textilien, klassische Massen-Produktion längst nach Asien."
              />
              <ProsCons.Item
                title="Industrieumsätze laut IHK rückläufig"
                description="IHK Mittlerer Niederrhein bewertet die regionale Lage als strukturell schwierig, Beschäftigung in Maschinen- und Anlagenbau unter Druck."
              />
              <ProsCons.Item
                title="Mittelstand mit Excel-/Papier-Workflows"
                description="Viele klassische Mittelständler (50-500 MA) in Maschinenbau, Bau, Handwerk und Handel arbeiten noch mit Excel- und Papier-Prozessen – Digitalisierungs-Rückstand kostet Margen."
              />
              <ProsCons.Item
                title="Bundesliga-Wackelkurs Borussia Mönchengladbach"
                description="Verein als überregionaler Marken-Anker mit Sportlich-Wirtschaftlich-Risiko – Hospitality, Ticketing, Sponsoring-Erlöse unter Wettbewerbsdruck."
              />
            </ProsCons.Cons>
            <ProsCons.Pros>
              <ProsCons.Item
                title="SMS group – Weltmarktführer Anlagenbau Stahl/NE-Metalle"
                description="14.400 MA weltweit, Hauptsitz in Mönchengladbach – baut Stahl- und NE-Metallwerke in Indien, USA, China und der EU."
              />
              <ProsCons.Item
                title="Santander Consumer Bank Deutschland-HQ (3.000 MA)"
                description="Schwerpunkt Konsumentenkredite und Auto-Finanzierung, mit MaRisk/BAIT/DORA und massiver Regulatorik – moderne Banken-Workflow-Adresse."
              />
              <ProsCons.Item
                title="Trützschler & Monforts – Weltklasse-Textilmaschinen"
                description="Trützschler als Weltmarktführer Spinnerei-Maschinen, Monforts in Veredelungs-Maschinen – plus Starrag/Dörries Scharmann in Werkzeugmaschinen."
              />
              <ProsCons.Item
                title="Hochschule Niederrhein & Textilfabrik 7.0"
                description="Weltweit führender Fachbereich Textil- und Bekleidungstechnik, Textilfabrik 7.0 als Re-Industrialisierungs-Leuchtturm für vernetzte Produktion."
              />
            </ProsCons.Pros>
          </ProsCons>
        </div>
      </ContentWrapper>

      {/* 2. IntroBox — Pain-Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Strukturwandel vom Textil-Manchester zur Industrie 4.0
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was passiert mit den Prozessen, wenn aus Textil-Tradition Anlagenbau, Finanz und technische Textilien werden?
          </IntroBox.Headline>
          <IntroBox.Subline>
            Mönchengladbach ist seit dem 19. Jahrhundert mit Textil verbunden – ehemals 'das deutsche Manchester'. Heute heißen die Anker SMS group (Welt-Anlagenbauer für Stahl/NE-Metalle), Santander (Deutschland-HQ mit 3.000 MA), Trützschler und Monforts (Textilmaschinen). Die Textilfabrik 7.0 versucht die Re-Industrialisierung der textilen Wertschöpfungskette. Jede dieser Säulen hat eigene Prozess-Pains.
          </IntroBox.Subline>
        </IntroBox>
      </ContentWrapper>

      {/* 4. SimpleGrid cols=3 */}
      <ContentWrapper>
        <Typo.H2>Wo n8n in Mönchengladbach heute den Hebel ansetzt</Typo.H2>
        <Typo.Paragraph>
          Drei Cluster, drei sehr unterschiedliche Pain-Points – aber alle mit einem gemeinsamen Bedürfnis: Workflows, die Datenflüsse zwischen Spezialsystemen orchestrieren.
        </Typo.Paragraph>
        <SimpleGrid cols={3}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Cog className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Großanlagenbau & Werkzeugmaschinen</Typo.H3>
            <Typo.Paragraph>
              ETO/CPQ, Stücklisten-Sync PLM-ERP, globaler Service, Ersatzteil-Logistik in 50+ Länder, Predictive Maintenance via IoT – für SMS, Trützschler, Monforts und Starrag.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Landmark className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Banken & Finanzdienstleistung</Typo.H3>
            <Typo.Paragraph>
              KYC/AML, Konsumkredit-Antragsstrecken, MaRisk/BAIT/DORA-Reporting, Auslagerungs-Management. n8n self-hosted und BSI-Grundschutz-konform für Santander und Co.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Shirt className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Textil 4.0 & Mode-Logistik</Typo.H3>
            <Typo.Paragraph>
              Vernetzte Produktion zwischen Weberei, Färberei und Konfektion, EDI mit Modemarken, Track-and-Trace technischer Textilien, Mode-E-Commerce-Distribution im Regiopark.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 5. BoundlessImage */}
      <ContentWrapper colorScheme="gray-light">
        <BoundlessImageCard imagePosition="right">
          <BoundlessImageCard.Image
            src="/images/cities/moenchengladbach.jpg"
            alt="SMS group HQ und Textilfabrik 7.0 Mönchengladbach"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>SMS group & Textilfabrik 7.0 – wo Webstuhl war, baut heute der Welt-Anlagenbauer</Typo.H2>
            <Typo.Paragraph>
              Aus dem Textil-Manchester wurde Sitz des weltweit führenden Anlagenbauers für Stahl- und NE-Metallwerke. Parallel wird die textile Wertschöpfungskette mit der Textilfabrik 7.0 neu erfunden, Santander steuert die deutsche Konsumkredit-Welt. Quartiers- und Konzern-Management bedeutet: ETO/CPQ, Banken-Compliance, vernetzte Produktion. n8n verbindet diese Schnittstellen – ein Use-Case, den wir mehrfach gebaut haben.
            </Typo.Paragraph>
            <div className="mt-4">
              <Link href="/unser-prozess" className="text-primary-600 hover:underline font-semibold">
                Unser 6-Phasen-Prozess →
              </Link>
            </div>
          </BoundlessImageCard.Content>
        </BoundlessImageCard>
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
        <Typo.H2>Häufige Fragen aus Mönchengladbach</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={moenchengladbachFaqs} />
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
