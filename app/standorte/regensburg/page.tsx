import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentWrapper from "@/components/layout/content-wrapper";
import BackgroundHero from "@/components/heroes/background-hero";
import IntroBox from "@/components/ui/intro-box";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import KpiCard from "@/components/cards/kpi-card";
import BoundlessImageCard from "@/components/cards/boundless-image-card";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import Typo from "@/components/ui/typo";
import { FaqContainer } from "@/components/ui/faqs";
import { CityLinksFromMeta } from "@/components/standorte/city-links";
import ContactButton from "@/components/buttons/contact-button";
import { Car, Cog, Cpu, FlaskConical, GraduationCap, HeartPulse } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";


export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-agentur-regensburg",
  rewrites: [
    {
      source: "/ai-workflows-regensburg",
      preHeadline: "AI Workflows Regensburg",
      headline: "AI Workflows & Automatisierung in Regensburg",
      metaTitle: "AI Workflows Regensburg - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Regensburg. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Regensburg",
        "KI Automatisierung Regensburg",
        "Workflow Automatisierung Regensburg",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-regensburg",
      preHeadline: "n8n Automation Regensburg",
      headline: "n8n Automation in Regensburg - Workflows automatisieren",
      metaTitle: "n8n Automation Regensburg | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Regensburg. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Regensburg",
        "n8n Regensburg",
        "Workflow Automation Regensburg",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-regensburg",
      preHeadline: "n8n Regensburg",
      headline: "n8n Agentur in Regensburg",
      metaTitle: "n8n Regensburg - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Regensburg. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Regensburg und Umgebung.",
      keywords: [
        "n8n Regensburg",
        "n8n Agentur Regensburg",
        "n8n Beratung Regensburg",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-regensburg",
      preHeadline: "Automation Regensburg",
      headline: "Automation & Prozessoptimierung in Regensburg",
      metaTitle: "Automation Regensburg - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Regensburg. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Regensburg",
        "Prozessautomatisierung Regensburg",
        "Workflow Automation Regensburg",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-regensburg",
      preHeadline: "IT Dienstleister Regensburg",
      headline: "IT Dienstleister in Regensburg - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Regensburg - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Regensburg. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Regensburg.",
      keywords: [
        "IT Dienstleister Regensburg",
        "IT Service Regensburg",
        "Digitalisierung Regensburg",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-regensburg",
      preHeadline: "KI Beratung Regensburg",
      headline: "KI Beratung in Regensburg - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Regensburg - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Regensburg. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Regensburg",
        "KI Lösungen Regensburg",
        "Künstliche Intelligenz Regensburg",
        "Bluebatch",
      ],
    },
      {
      source: "/ki-agentur-regensburg",
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Regensburg",
  slug: "regensburg",
  bundesland: "Bayern",
  publish: false,
  nearbySmall: [
    "Neutraubling",
    "Kelheim",
    "Straubing",
    "Neumarkt in der Oberpfalz",
    "Schwandorf",
  ],
  crossReference: [
    { name: "Nürnberg", slug: "nuernberg" },
    { name: "München", slug: "muenchen" },
    { name: "Ingolstadt", slug: "ingolstadt" },
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
    "KI-Agentur in Regensburg | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Ihr Partner für n8n-Workflows, KI-Automatisierung und Prozessoptimierung im ostbayerischen Donauraum.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Regensburg", "n8n Regensburg", "Workflow-Automatisierung Regensburg", "KI Beratung Regensburg", "Prozessoptimierung Regensburg", "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [
        {
          url: "/images/cities/regensburg.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch Workflow-Automatisierung Regensburg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/regensburg.jpg"],
    },
    alternates: {
      canonical: "/ki-agentur-regensburg",
    },
  };
}

const regensburgFaqs = [
  {
    question: "BMW-Werk Regensburg ist Fabrik des Jahres 2024 – wie passt n8n zur Tier-1-Liefer­kette?",
    answer:
      "BMW fertigt parallel Verbrenner und E-Fahrzeuge auf einer Linie (Production Network 2025+). JIT/JIS-Abrufe, EDI/VDA-Belege, IATF-16949-Doku, Catena-X-Konnektoren und Production-Network-Pipelines werden mit n8n auditfest abgebildet.",
  },
  {
    question: "Continental und Infineon – wie helfen wir SDV- und Halbleiter-Workflows?",
    answer:
      "Continental in Regensburg fokussiert Powertrain und Interior, Infineon ist Teil des bayerischen Halbleiter-Clusters. ASPICE, ISO 26262, SEMI-Standards, MES-Datenflüsse und Engineering-Daten zwischen CAD/PLM/ERP werden mit n8n orchestriert.",
  },
  {
    question: "Krones AG – Weltmarktführer Abfüllanlagen, wie unterstützt n8n Service?",
    answer:
      "Krones beliefert Brauereien und Softdrink-Hersteller weltweit. CPQ-Konfiguration, Wartungsverträge, IoT-Daten installierter Linien, Ersatzteil-eCommerce und Field-Service werden mit n8n und SAP Service Cloud verzahnt.",
  },
  {
    question: "Maschinenfabrik Reinhausen – wie hilft n8n bei Transformatoren-Service?",
    answer:
      "Weltmarktführer für Laststufenschalter. Variantenreiche Auftragsabwicklung, Konfiguration, Service-Workflows mit Energieversorgern weltweit und Ersatzteil-Logistik laufen End-to-End in n8n – mit Multi-Country-Compliance.",
  },
  {
    question: "BioPark, OTH und Universität – wie automatisieren wir Forschungstransfer?",
    answer:
      "Drittmittel-Reporting, BioPark-Spin-off-Begleitung, Industriekooperationen mit OTH und Universität sowie BMBF-/EU-Antragsworkflows werden mit n8n abgebildet. Ideal für die wachsenden Diagnostik- und Medizintechnik-Startups in Regensburg.",
  },
  {
    question: "Welche Phasen erwarten uns bei einer Implementierung?",
    answer:
      "Wir folgen einem strukturierten 6-Phasen-Ansatz von der Analyse bis zum operativen Betrieb. Details und konkrete Beispiele auf unserer Seite Unser Prozess.",
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
          imageSrc="/images/cities/regensburg.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Regensburg"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Regensburg –{" "}
                BMW &quot;Fabrik des Jahres&quot;, Continental und{" "}
                <BackgroundHero.Highlight>Krones</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            BMW Werk Regensburg, Continental, Infineon, Krones AG,
            Maschinenfabrik Reinhausen, Universitätsklinikum, BioPark,
            Universität und OTH Regensburg – eine der dynamischsten
            Wirtschaftsregionen Bayerns. Wir bauen n8n-Workflows für
            BMW-Tier-1-Lieferanten, Halbleiter-Service, Krones-CPQ und
            Forschungstransfer im ostbayerischen Donauraum.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">
              Regensburger Workflow besprechen
            </ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={158000}
              label="Einwohner Stadt Regensburg"
              index={0}
            />
            <BackgroundHero.Stat
              value={330000}
              label="BMWs in Regensburg gefertigt (2024)"
              index={1}
            />
            <BackgroundHero.Stat
              value={100000}
              label="davon vollelektrisch"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 2. IntroBox */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <Typo.H2>Warum Regensburg eine spezialisierte KI-Agentur braucht</Typo.H2>
          <Typo.Paragraph>
            Regensburg ist eine der wachstumsstärksten Regionen Bayerns mit
            UNESCO-Welterbe-Altstadt, BMW-Werk und Halbleiter-Cluster. Das
            BMW-Werk erhielt 2024 den Titel "Fabrik des Jahres" und produzierte
            über 330.000 Fahrzeuge, davon 100.000 vollelektrisch.
            Continental beschäftigt 8.000 Menschen, Krones ist Weltmarktführer
            für Abfüllanlagen, Maschinenfabrik Reinhausen weltführend bei
            Transformatoren-Schaltern. Niedrige Arbeitslosenquote, hoher
            Fachkräftemangel – Automatisierung ist hier Wettbewerbsvorteil.
          </Typo.Paragraph>
        </IntroBox>
      </ContentWrapper>

      {/* 4. BoundlessImageCard */}
      <ContentWrapper>
        <BoundlessImageCard imagePosition="right">
          <BoundlessImageCard.Image
            src="/images/cities/regensburg.jpg"
            alt="Regensburg BMW, Continental und Krones – n8n-Workflows für ostbayerischen Mittelstand"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>100.000 vollelektrische BMWs, UNESCO-Welterbe und Halbleiter</Typo.H2>
            <Typo.Paragraph>
              Regensburg vereint moderne Hightech-Industrie mit historischem
              Stadtkern. Mit niedrigster Arbeitslosenquote und massivem
              Fachkräftemangel müssen Mittelständler und Großunternehmen
              durch Automatisierung kompensieren, was am Arbeitsmarkt fehlt.
              Wir helfen BMW-Zulieferern, Krones-Partnern und Halbleiter-
              Service-Mittelständlern, mit schlanken n8n-Workflows skalierbar
              zu bleiben.
            </Typo.Paragraph>
            <div className="mt-4">
              <Link href="/unser-prozess" className="text-primary-600 hover:underline font-semibold">
                Unser 6-Phasen-Prozess →
              </Link>
            </div>
          </BoundlessImageCard.Content>
        </BoundlessImageCard>
      </ContentWrapper>

      {/* 5. KpiCard Row */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Regensburg in Zahlen</Typo.H2>
        <SimpleGrid cols={4}>
          <KpiCard
            value={9000}
            subtitle="BMW-Werk-Regensburg-Beschäftigte"
          />
          <KpiCard
            value={9500}
            subtitle="Krones-Beschäftigte Hauptsitz"
          />
          <KpiCard
            value={8000}
            subtitle="Continental-Regensburg-Beschäftigte"
          />
          <KpiCard
            value={130000}
            subtitle="SV-pflichtig Beschäftigte"
          />
        </SimpleGrid>
      </ContentWrapper>

      {/* 3. SimpleGrid cols=2 — Schlüsselbranchen */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Regensburger Cluster, die Automatisierung erzwingen</Typo.H2>
        <Typo.Paragraph>
          BMW steuert anders als Krones, Infineon anders als das
          Universitätsklinikum. Wir bauen für jeden Cluster die passenden
          n8n-Bausteine – vom Catena-X-Konnektor bis zur SEMI-konformen
          Service-Pipeline.
        </Typo.Paragraph>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Car className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>BMW Werk Regensburg – Fabrik des Jahres 2024</Typo.H3>
            <Typo.Paragraph>
              9.000 Beschäftigte, 330.000 Fahrzeuge in 2024, davon 100.000
              vollelektrisch. Production Network 2025+ mit paralleler
              Verbrenner-/E-Fertigung. JIT/JIS-Abrufe, EDI/VDA, IATF 16949,
              Catena-X-Konnektoren werden mit n8n auditfest abgebildet.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Cog className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Continental – Powertrain &amp; Interior in Regensburg</Typo.H3>
            <Typo.Paragraph>
              8.000 Beschäftigte, eines der wichtigsten Continental-Zentren
              weltweit. ASPICE-Doku, ISO 26262, Software-Defined-Vehicle-
              Pipelines und Engineering-Daten zwischen CAD/PLM/ERP werden
              mit n8n orchestriert.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Cpu className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Infineon Regensburg – Halbleiter-Cluster Bayern</Typo.H3>
            <Typo.Paragraph>
              2.800 Beschäftigte, großer Produktions- und Forschungsstandort
              des bayerischen Halbleiter-Clusters. SEMI-Standards, IATF für
              Automotive-Wafer, MES-Datenflüsse, Yield-Reporting und
              Lieferanten-Qualifizierung werden mit n8n verzahnt.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <FlaskConical className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Krones AG – Weltmarktführer Abfüllanlagen</Typo.H3>
            <Typo.Paragraph>
              9.500 Beschäftigte am Hauptsitz, weltweit 16.300. CPQ,
              Wartungsverträge, IoT-Daten installierter Anlagen,
              Ersatzteil-eCommerce und After-Sales für Brauereien/Softdrink-
              Hersteller werden mit n8n und SAP Service Cloud verbunden.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <GraduationCap className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Universität Regensburg, OTH, BioPark</Typo.H3>
            <Typo.Paragraph>
              3.500 Uni-Beschäftigte, 30.000 Studierende, BioPark als
              Life-Sciences-Cluster mit Diagnostik- und Medizintechnik-
              Schwerpunkten. Drittmittel-Workflows, Spin-off-Begleitung und
              Industriekooperationen werden mit n8n abgebildet.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <HeartPulse className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Universitätsklinikum Regensburg</Typo.H3>
            <Typo.Paragraph>
              4.700 Beschäftigte, eines der größten Krankenhäuser Bayerns.
              Patientenaufnahme, OP-Planung, Abrechnung und Dokumentation
              werden unter KHPflEG- und ePA-Druck mit n8n und KI
              effizient orchestriert.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 7.5. Bonus — Regensburg in Zahlen */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Regensburg in Zahlen</Typo.H2>
        <SimpleGrid cols={4}>
          <KpiCard
            value={9000}
            subtitle="BMW-Werk Regensburg-Beschäftigte"
          />
          <KpiCard
            value={6000}
            subtitle="Continental-Mitarbeiter Regensburg"
          />
          <KpiCard
            value={3000}
            subtitle="Infineon-Beschäftigte Regensburg"
          />
          <KpiCard
            value={17000}
            subtitle="Krones-Beschäftigte global (HQ Neutraubling)"
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
        <Typo.H2>Häufige Fragen aus Regensburg</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={regensburgFaqs} />
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
