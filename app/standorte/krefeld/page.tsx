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
import { FlaskConical, Factory, Cog } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";


export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-agentur-krefeld",
  rewrites: [
    {
      source: "/ai-workflows-krefeld",
      preHeadline: "AI Workflows Krefeld",
      headline: "AI Workflows & Automatisierung in Krefeld",
      metaTitle: "AI Workflows Krefeld - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Krefeld. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Krefeld",
        "KI Automatisierung Krefeld",
        "Workflow Automatisierung Krefeld",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-krefeld",
      preHeadline: "n8n Automation Krefeld",
      headline: "n8n Automation in Krefeld - Workflows automatisieren",
      metaTitle: "n8n Automation Krefeld | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Krefeld. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Krefeld",
        "n8n Krefeld",
        "Workflow Automation Krefeld",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-krefeld",
      preHeadline: "n8n Krefeld",
      headline: "n8n Agentur in Krefeld",
      metaTitle: "n8n Krefeld - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Krefeld. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Krefeld und Umgebung.",
      keywords: [
        "n8n Krefeld",
        "n8n Agentur Krefeld",
        "n8n Beratung Krefeld",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-krefeld",
      preHeadline: "Automation Krefeld",
      headline: "Automation & Prozessoptimierung in Krefeld",
      metaTitle: "Automation Krefeld - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Krefeld. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Krefeld",
        "Prozessautomatisierung Krefeld",
        "Workflow Automation Krefeld",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-krefeld",
      preHeadline: "IT Dienstleister Krefeld",
      headline: "IT Dienstleister in Krefeld - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Krefeld - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Krefeld. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Krefeld.",
      keywords: [
        "IT Dienstleister Krefeld",
        "IT Service Krefeld",
        "Digitalisierung Krefeld",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-krefeld",
      preHeadline: "KI Beratung Krefeld",
      headline: "KI Beratung in Krefeld - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Krefeld - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Krefeld. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Krefeld",
        "KI Lösungen Krefeld",
        "Künstliche Intelligenz Krefeld",
        "Bluebatch",
      ],
    },
      {
      source: "/ki-agentur-krefeld",
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Krefeld",
  slug: "krefeld",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Viersen",
    "Meerbusch",
    "Willich",
    "Kempen",
    "Kamp-Lintfort",
    "Tönisvorst",
  ],
  crossReference: [
    { name: "Düsseldorf", slug: "duesseldorf" },
    { name: "Duisburg", slug: "duisburg" },
    { name: "Mönchengladbach", slug: "moenchengladbach" },
    { name: "Neuss", slug: "neuss" },
    { name: "Moers", slug: "moers" },
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
    "KI-Agentur in Krefeld | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Ihr Partner für n8n-Workflows, KI-Automatisierung und Prozessoptimierung im Chempark Krefeld-Uerdingen und im IHK-Bezirk Mittlerer Niederrhein.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Krefeld", "n8n Krefeld", "Workflow-Automatisierung Krefeld", "KI Beratung Krefeld", "Prozessoptimierung Krefeld", "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [
        {
          url: "/images/cities/krefeld.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch Workflow-Automatisierung Krefeld",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/krefeld.jpg"],
    },
    alternates: {
      canonical: "/ki-agentur-krefeld",
    },
  };
}

const krefeldFaqs = [
  {
    question: "Chempark Krefeld-Uerdingen - wie automatisieren wir REACH, CSRD und Anlagensicherheit?",
    answer:
      "Covestro, Lanxess und Bayer im Chempark unterliegen REACH, CLP, Störfallverordnung, IED, ADR/RID und CSRD. n8n verbindet SAP, EHS-Software, Behörden-Schnittstellen (REACH-IT, ELER) und Sicherheitsaudit-Datenbanken - auditfest, self-hosted und mit BSI-Grundschutz.",
  },
  {
    question: "Outokumpu Nirosta in Krefeld - welche Workflows brauchen Edelstahl-Hersteller?",
    answer:
      "Werkstoffzeugnisse EN 10204 3.1/3.2, IATF 16949 für Auto-Kunden, CBAM-Reporting, Chargenrückverfolgung und Versand-EDI mit OEMs. n8n koppelt PLM, MES, SAP und Kunden-Portale - wichtig im Wettbewerb mit Asien.",
  },
  {
    question: "Siempelkamp baut Pressen weltweit - welche Service-Workflows lohnen sich?",
    answer:
      "Weltmarktführer Holzwerkstoff-Pressen plus Guss- und Nukleartechnik - Engineering-to-Order, CPQ, weltweiter Service mit Field-Force, Ersatzteil-Logistik, Inbetriebnahme-Reports. n8n verbindet PLM, ERP, Service-Apps und IoT-Sensorik der Anlagen.",
  },
  {
    question: "Rheinhafen Krefeld als trimodaler Knoten - wie automatisieren wir Hafen-Logistik?",
    answer:
      "ATLAS-Zoll, EDIFACT/EANCOM, intermodaler Umschlag zwischen Wasser, Bahn und LKW, Gefahrgut-Doku für Chemie-Transporte und Sendungsverfolgung. n8n koppelt TOS, TMS, WMS und Carrier-APIs - plus EDI mit Chempark-Logistik.",
  },
  {
    question: "Helios Klinikum Krefeld - welche Workflows entlasten Klinikpersonal?",
    answer:
      "Patientenaufnahme, KIS-ePA-Integration, DRG-Abrechnung mit Kostenträgern, MDR-Doku für Medizinprodukte und Personaleinsatzplanung. AI Agents klassifizieren Eingangsbefunde und Aufnahmedokumente.",
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
          imageSrc="/images/cities/krefeld.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Krefeld"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Krefeld -{" "}
                von der Samt- und Seidenstadt zum{" "}
                <BackgroundHero.Highlight>Chempark-Cluster</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Aus historischer Textilstadt wurde Chempark Krefeld-Uerdingen (Covestro/Lanxess/Bayer), Outokumpu Nirosta und Siempelkamp-HQ. Wir automatisieren genau die Workflows, die ein niederrheinischer Chemie- und Edelstahl-Standort im Wandel braucht - REACH, EN 10204 und globaler Anlagenbau-Service.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">Automatisierung für Krefeld besprechen</ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={228550}
              label="Einwohner"
              index={0}
            />
            <BackgroundHero.Stat
              value={8500}
              label="MA Chempark Krefeld-Uerdingen"
              index={1}
            />
            <BackgroundHero.Stat
              value={9.9}
              suffix=" Mrd. €"
              label="BIP 2022"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 4. SimpleGrid cols=3 */}
      <ContentWrapper>
        <Typo.H2>Wo n8n in Krefeld heute den Hebel ansetzt</Typo.H2>
        <Typo.Paragraph>
          Drei Cluster, drei sehr unterschiedliche Pain-Points - aber alle mit einem gemeinsamen Bedürfnis: Workflows, die Datenflüsse zwischen Spezialsystemen orchestrieren.
        </Typo.Paragraph>
        <SimpleGrid cols={3}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <FlaskConical className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Chemie & Kunststoffe</Typo.H3>
            <Typo.Paragraph>
              REACH/CLP, Störfallverordnung, IED-Emissionen, ADR/RID-Gefahrgut, CSRD und EHS-Compliance für Chempark-Anrainer - self-hosted und BSI-konform.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Factory className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Edelstahl & Metall</Typo.H3>
            <Typo.Paragraph>
              EN 10204-Werkstoffzeugnisse, IATF 16949, CBAM-Reporting, Chargenrückverfolgung und Versand-EDI mit OEMs für Outokumpu Nirosta und Zulieferer.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Cog className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Anlagenbau & Service</Typo.H3>
            <Typo.Paragraph>
              ETO/CPQ, globaler Service mit Field-Force, Ersatzteil-Logistik, Inbetriebnahme-Reports und IoT-Anbindung für Siempelkamp und Mittelstand-Anlagenbau.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 2. IntroBox — Pain-Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Strukturkrise im Mittleren Niederrhein
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was passiert mit den Prozessen, wenn Chemie und Edelstahl unter Energiekosten ächzen?
          </IntroBox.Headline>
          <IntroBox.Subline>
            Die IHK Mittlerer Niederrhein meldet für 2024 eine massive strukturelle Krise mit rückläufigen Industrieumsätzen. Krefeld als Chemie-, Edelstahl- und Anlagenbau-Standort steht unter Energiekosten-Druck und chinesischer Importkonkurrenz. Der Chempark Krefeld-Uerdingen mit Covestro, Lanxess und Bayer ist Anker, Outokumpu Nirosta produziert Edelstahl, Siempelkamp baut Pressen für die Welt. Jede dieser Säulen hat eigene Prozess-Pains.
          </IntroBox.Subline>
        </IntroBox>
      </ContentWrapper>

      {/* 5. BoundlessImage */}
      <ContentWrapper colorScheme="gray-light">
        <BoundlessImageCard imagePosition="right">
          <BoundlessImageCard.Image
            src="/images/cities/krefeld.jpg"
            alt="Chempark Krefeld-Uerdingen und Edelstahl"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>Chempark Uerdingen & Outokumpu - wo Seide war, fließen heute Polymere und Edelstahl</Typo.H2>
            <Typo.Paragraph>
              Aus der historischen Samt- und Seidenstadt wurde Krefeld zum Chemie-Cluster mit einem Drittel der NRW-Chemieproduktion, dazu Outokumpu-Edelstahl und Siempelkamp-Anlagenbau. Quartiers- und Anlagen-Management bedeutet: REACH, IED, CBAM, IATF-Audits und globaler Anlagenbau-Service. n8n verbindet diese Schnittstellen - ein Use-Case, den wir mehrfach gebaut haben.
            </Typo.Paragraph>
            <div className="mt-4">
              <Link href="/unser-prozess" className="text-primary-600 hover:underline font-semibold">
                Unser 6-Phasen-Prozess →
              </Link>
            </div>
          </BoundlessImageCard.Content>
        </BoundlessImageCard>
      </ContentWrapper>

      {/* 3. ProsCons */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Was Krefeld hinter sich lässt - und wo es jetzt steht</Typo.H2>
        <div className="mt-8">
          <ProsCons>
            <ProsCons.Cons>
              <ProsCons.Item
                title="Textilindustrie weitgehend Geschichte"
                description="Aus der historischen 'Samt- und Seidenstadt' sind nur noch technische Textilien und Distribution geblieben - klassische Webereien und Konfektion längst verschwunden."
              />
              <ProsCons.Item
                title="Strukturelle Krise 2024 laut IHK"
                description="Rückläufige Industrieumsätze, steigende Arbeitslosigkeit - Energiekosten und Asien-Konkurrenz belasten Chemie, Edelstahl und Anlagenbau gleichzeitig."
              />
              <ProsCons.Item
                title="ThyssenKrupp/Outokumpu-Tradition unter Druck"
                description="Edelstahlwerk Krefeld-Mitte historisch thyssenkrupp-geprägt, heute unter Outokumpu mit Konzern-Sparkurs."
              />
              <ProsCons.Item
                title="Bayer-Restrukturierung wirkt bis Krefeld"
                description="Bayer-Konzern-Umbau und Pharma/Crop-Science-Sparmaßnahmen reichen bis Krefeld - Personal-Reduzierungen und Standort-Konsolidierungen."
              />
            </ProsCons.Cons>
            <ProsCons.Pros>
              <ProsCons.Item
                title="Chempark Krefeld-Uerdingen (8.500 MA) - Ein Drittel NRW-Chemieproduktion"
                description="Einer der größten Chemieparks Europas: Covestro (Polymere), Lanxess (Spezialchemie), Bayer - plus Currenta als Standortbetreiber."
              />
              <ProsCons.Item
                title="Outokumpu Nirosta - einer der größten Edelstahl-Produzenten Europas"
                description="2.000 MA in Krefeld, traditionsreich aus thyssenkrupp-Erbe - Edelstahl-Champion mit Auto- und Spezial-Anwendungen."
              />
              <ProsCons.Item
                title="Siempelkamp - Weltmarktführer Holzwerkstoff-Pressen"
                description="1.500 MA, plus Aktivitäten in Guss- und Nukleartechnik - globaler Anlagenbauer mit komplexem Engineering-to-Order."
              />
              <ProsCons.Item
                title="Trimodaler Rheinhafen + Helios Klinikum (2.500 MA)"
                description="Trimodaler Knoten Wasser/Schiene/Straße, plus überregionaler Klinikversorger Helios Krefeld und Hochschule Niederrhein-Campus."
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
        <Typo.H2>Häufige Fragen aus Krefeld</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={krefeldFaqs} />
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
