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
import { Factory, Car, BatteryCharging } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";


export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-agentur-salzgitter",
  rewrites: [
    {
      source: "/ai-workflows-salzgitter",
      preHeadline: "AI Workflows Salzgitter",
      headline: "AI Workflows & Automatisierung in Salzgitter",
      metaTitle: "AI Workflows Salzgitter - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Salzgitter. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Salzgitter",
        "KI Automatisierung Salzgitter",
        "Workflow Automatisierung Salzgitter",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-salzgitter",
      preHeadline: "n8n Automation Salzgitter",
      headline: "n8n Automation in Salzgitter - Workflows automatisieren",
      metaTitle: "n8n Automation Salzgitter | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Salzgitter. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Salzgitter",
        "n8n Salzgitter",
        "Workflow Automation Salzgitter",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-salzgitter",
      preHeadline: "n8n Salzgitter",
      headline: "n8n Agentur in Salzgitter",
      metaTitle: "n8n Salzgitter - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Salzgitter. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Salzgitter und Umgebung.",
      keywords: [
        "n8n Salzgitter",
        "n8n Agentur Salzgitter",
        "n8n Beratung Salzgitter",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-salzgitter",
      preHeadline: "Automation Salzgitter",
      headline: "Automation & Prozessoptimierung in Salzgitter",
      metaTitle: "Automation Salzgitter - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Salzgitter. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Salzgitter",
        "Prozessautomatisierung Salzgitter",
        "Workflow Automation Salzgitter",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-salzgitter",
      preHeadline: "IT Dienstleister Salzgitter",
      headline: "IT Dienstleister in Salzgitter - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Salzgitter - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Salzgitter. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Salzgitter.",
      keywords: [
        "IT Dienstleister Salzgitter",
        "IT Service Salzgitter",
        "Digitalisierung Salzgitter",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-salzgitter",
      preHeadline: "KI Beratung Salzgitter",
      headline: "KI Beratung in Salzgitter - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Salzgitter - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Salzgitter. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Salzgitter",
        "KI Lösungen Salzgitter",
        "Künstliche Intelligenz Salzgitter",
        "Bluebatch",
      ],
    },
      {
      source: "/ki-agentur-salzgitter",
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Salzgitter",
  slug: "salzgitter",
  bundesland: "Niedersachsen",
  publish: false,
  nearbySmall: [
    "Wolfenbüttel",
    "Goslar",
    "Peine",
  ],
  crossReference: [
    { name: "Braunschweig", slug: "braunschweig" },
    { name: "Hildesheim", slug: "hildesheim" },
    { name: "Wolfsburg", slug: "wolfsburg" },
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
    "KI-Agentur in Salzgitter | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Ihr Partner für n8n-Workflows, KI-Automatisierung und Prozessoptimierung in der Stahl- und Batterie-Stadt zwischen Hannover und Wolfsburg.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Salzgitter", "n8n Salzgitter", "Workflow-Automatisierung Salzgitter", "KI Beratung Salzgitter", "Prozessoptimierung Salzgitter", "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [
        {
          url: "/images/cities/salzgitter.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch Workflow-Automatisierung Salzgitter",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/salzgitter.jpg"],
    },
    alternates: {
      canonical: "/ki-agentur-salzgitter",
    },
  };
}

const salzgitterFaqs = [
  {
    question: "SALCOS bringt grünen Stahl ab 2025 – wie automatisieren wir CBAM und H2-Herkunftsnachweise?",
    answer:
      "Über 2 Mrd. € Investition in wasserstoffbasierte Direktreduktion verlangen end-to-end Datenflüsse: H2-Lieferverträge, CertifHy/RED-II-Nachweise, CBAM-Reporting an DEHSt, EU-Emissionshandel (ETS) und Lieferanten-Tracking. n8n verbindet Energiezähler, Stromherkunfts-Register, SAP und EHS-Software – auditfest und self-hosted.",
  },
  {
    question: "VW-Motorenwerk im Verbrenner-Auslauf – welche Workflows brauchen die Transformation?",
    answer:
      "1,5 Mio. Motoren/Jahr werden über die nächsten Jahre auf Elektro umgestellt. Workflows für Produktions-Hochlauf neuer Linien, Qualifizierungs-Tracking von Mitarbeitern, Tier-1-Lieferanten-Wechsel und JIT/JIS-Anbindung an Wolfsburg sind Pflicht.",
  },
  {
    question: "PowerCo-Gigafactory: welche Workflows brauchen Batteriezellfertigung?",
    answer:
      "Zellfertigung verlangt MES-Anbindung mit lückenloser Chargenrückverfolgung, EHS-Workflows für Lithium und Lösemittel, Predictive Maintenance für Trocknungsanlagen und Lieferanten-Onboarding für kritische Rohstoffe (Lithium, Kobalt, Nickel). n8n koppelt MES, SAP, Qualität und Behörden zu einer Pipeline.",
  },
  {
    question: "Tier-1-Zulieferer für VW und MAN – wie erfüllen wir IATF 16949 und JIS-Anforderungen?",
    answer:
      "IATF-konforme Audit-Trails, JIS-EDI über DELJIT/DELFOR, Werkstoffzeugnisse 3.1/3.2, IMDS-Datenpflege für VW. n8n automatisiert die Pflege dieser Standards gegen Konzern-Portale und vermeidet Lieferanten-Rauswurf.",
  },
  {
    question: "Salzgitter AG Stahlhandel weltweit – wie automatisieren wir Sanktionsprüfung und Zoll?",
    answer:
      "Weltweiter Stahlhandel mit ATLAS/NCTS, Sanktionsprüfung (DPL, EU-Konsolidiert), ITAR-Vorgaben und Trade Compliance. n8n verbindet SAP GTS, ATLAS und Sanktionslisten-APIs – mit lückenlosem Audit-Trail.",
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
          imageSrc="/images/cities/salzgitter.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Salzgitter"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Salzgitter –{" "}
                vom Hochofen zum{" "}
                <BackgroundHero.Highlight>grünen Stahl- und Batterie-Cluster</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Salzgitter AG investiert 2 Mrd. € in SALCOS für klimaneutralen Stahl, VW baut hier eine der größten Gigafactories Europas, MAN fertigt Achsen. Wir automatisieren genau die Workflows, die ein Industriecluster im Wandel braucht – CBAM, IATF und Zell-MES.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">Automatisierung für Salzgitter besprechen</ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={105000}
              label="Einwohner"
              index={0}
            />
            <BackgroundHero.Stat
              value={7000}
              label="Salzgitter AG Beschäftigte"
              index={1}
            />
            <BackgroundHero.Stat
              value={7000}
              label="VW-Werk-Beschäftigte"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 3. ProsCons */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Was Salzgitter hinter sich lässt – und wo es jetzt steht</Typo.H2>
        <div className="mt-8">
          <ProsCons>
            <ProsCons.Cons>
              <ProsCons.Item
                title="Klassische Hochöfen vor dem Aus"
                description="Bis Ende des Jahrzehnts werden die Hochöfen schrittweise stillgelegt – Generationen-altes Stahlkocher-Know-how muss in DRI- und H2-Welt überführt werden."
              />
              <ProsCons.Item
                title="VW-Motorenwerk verliert Verbrenner-Geschäft"
                description="1,5 Mio. Verbrennungsmotoren/Jahr – mit dem politisch beschlossenen Verbrenner-Aus 2035 muss sich das zweitgrößte Motorenwerk der Welt komplett neu erfinden."
              />
              <ProsCons.Item
                title="Bosch Mahle Turbo Systems – Turbolader-Geschäft im Auslauf"
                description="Spezial-Turbolader für Verbrenner-Motoren verlieren langfristig Markt, 500 Beschäftigte am Standort unter Transformations-Druck."
              />
              <ProsCons.Item
                title="Fachkräftekonkurrenz mit Wolfsburg, Braunschweig, Hannover"
                description="Industriemechaniker, Verfahrenstechniker und Elektroniker sind Mangelberufe – Salzgitter konkurriert mit den anderen niedersächsischen Industrie-Schwergewichten."
              />
            </ProsCons.Cons>
            <ProsCons.Pros>
              <ProsCons.Item
                title="Salzgitter AG mit SALCOS – Modellregion klimaneutraler Stahl"
                description="2+ Mrd. € Investition, CO2-armer Stahl ab Ende 2025 an VW, eines der größten Dekarbonisierungs-Projekte der europäischen Industrie."
              />
              <ProsCons.Item
                title="PowerCo SE – VW-Batterietochter mit 40-GWh-Gigafactory"
                description="Hauptsitz in Salzgitter, geplanter Hochlauf bis 2027 – eine der größten Batteriezellfabriken Europas im Aufbau."
              />
              <ProsCons.Item
                title="MAN Truck & Bus (2.500 MA) im Nutzfahrzeug-Wandel"
                description="Achsen- und Komponentenfertigung für die nächste Generation E-Trucks und H2-LKW – strategisch zentral für VW Trinity und VW-Nfz-Strategie."
              />
              <ProsCons.Item
                title="Salzgitter Flachstahl – 4,7 Mio. t/3,6 Mrd. € Umsatz (2024)"
                description="Hauptverwendung Auto-Industrie und Bauwesen, mit klarer Leitkundenstrategie für CO2-armen Stahl."
              />
            </ProsCons.Pros>
          </ProsCons>
        </div>
      </ContentWrapper>

      {/* 5. BoundlessImage */}
      <ContentWrapper colorScheme="gray-light">
        <BoundlessImageCard imagePosition="right">
          <BoundlessImageCard.Image
            src="/images/cities/salzgitter.jpg"
            alt="SALCOS und PowerCo Gigafactory Salzgitter"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>SALCOS & PowerCo – wo Hochofen war, fließt heute Wasserstoff und Lithium</Typo.H2>
            <Typo.Paragraph>
              Die Salzgitter AG ersetzt klassische Hochöfen durch H2-Direktreduktion und liefert ab Ende 2025 grünen Stahl an VW. Wenige Kilometer entfernt baut PowerCo eine Gigafactory für 40 GWh Zellkapazität. Beide Welten brauchen End-to-End-Workflows – CO2-Tracking, MES-Chargen, IATF-Audit-Trails. n8n verbindet diese Schnittstellen – ein Use-Case, den wir mehrfach gebaut haben.
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
            Doppelte Transformation: grüner Stahl und E-Mobilität
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was passiert mit den Prozessen, wenn aus Hochofen H2-Direktreduktion und aus Verbrenner Zelle wird?
          </IntroBox.Headline>
          <IntroBox.Subline>
            Salzgitter erlebt die historischste Doppel-Transformation eines deutschen Industriestandorts: Die Salzgitter AG ersetzt ihre klassischen Hochöfen durch wasserstoffbasierte Direktreduktion (SALCOS, 2+ Mrd. €), VW wandelt sein größtes Motorenwerk weltweit Richtung Elektroantrieb und baut über PowerCo eine 40-GWh-Gigafactory. MAN, Bosch Mahle Turbo, Alstom – alle hängen an dieser Transformation. Jede dieser Säulen hat eigene Prozess-Pains.
          </IntroBox.Subline>
        </IntroBox>
      </ContentWrapper>

      {/* 4. SimpleGrid cols=3 */}
      <ContentWrapper>
        <Typo.H2>Wo n8n in Salzgitter heute den Hebel ansetzt</Typo.H2>
        <Typo.Paragraph>
          Drei Cluster, drei sehr unterschiedliche Pain-Points – aber alle mit einem gemeinsamen Bedürfnis: Workflows, die Datenflüsse zwischen Spezialsystemen orchestrieren.
        </Typo.Paragraph>
        <SimpleGrid cols={3}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Factory className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Grüner Stahl & SALCOS</Typo.H3>
            <Typo.Paragraph>
              H2-Lieferverträge, CertifHy/RED-II-Nachweise, CBAM, EU-ETS, Lieferanten-Onboarding für DRI – auditfeste Daten-Pipelines aus Energie, SAP und EHS.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Car className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Automotive & Tier-1</Typo.H3>
            <Typo.Paragraph>
              IATF 16949, JIS/JIT via DELJIT/DELFOR, IMDS-Pflege für VW, Werkstoffzeugnisse und Lieferanten-Portale. Plus Produktions-Hochlauf für neue E-Antriebs-Linien.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <BatteryCharging className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Batterie & PowerCo</Typo.H3>
            <Typo.Paragraph>
              MES-Anbindung mit Chargenrückverfolgung, EHS für Lithium/Lösemittel, Predictive Maintenance für Anlagen und Lieferanten-Onboarding für kritische Rohstoffe.
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
        <Typo.H2>Häufige Fragen aus Salzgitter</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={salzgitterFaqs} />
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
