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
import { Truck, Cpu, Landmark, Building2, FlaskConical, HeartPulse } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-workflows-bonn",
      preHeadline: "AI Workflows Bonn",
      headline: "AI Workflows & Automatisierung in Bonn",
      metaTitle: "AI Workflows Bonn - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Bonn. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Bonn",
        "KI Automatisierung Bonn",
        "Workflow Automatisierung Bonn",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-bonn",
      preHeadline: "n8n Automation Bonn",
      headline: "n8n Automation in Bonn - Workflows automatisieren",
      metaTitle: "n8n Automation Bonn | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Bonn. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Bonn",
        "n8n Bonn",
        "Workflow Automation Bonn",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-bonn",
      preHeadline: "n8n Bonn",
      headline: "n8n Agentur in Bonn",
      metaTitle: "n8n Bonn - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Bonn. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Bonn und Umgebung.",
      keywords: [
        "n8n Bonn",
        "n8n Agentur Bonn",
        "n8n Beratung Bonn",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-bonn",
      preHeadline: "Automation Bonn",
      headline: "Automation & Prozessoptimierung in Bonn",
      metaTitle: "Automation Bonn - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Bonn. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Bonn",
        "Prozessautomatisierung Bonn",
        "Workflow Automation Bonn",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-bonn",
      preHeadline: "IT Dienstleister Bonn",
      headline: "IT Dienstleister in Bonn - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Bonn - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Bonn. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Bonn.",
      keywords: [
        "IT Dienstleister Bonn",
        "IT Service Bonn",
        "Digitalisierung Bonn",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-bonn",
      preHeadline: "KI Beratung Bonn",
      headline: "KI Beratung in Bonn - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Bonn - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Bonn. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Bonn",
        "KI Lösungen Bonn",
        "Künstliche Intelligenz Bonn",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Bonn",
  slug: "bonn",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Troisdorf",
    "Sankt Augustin",
    "Siegburg",
    "Königswinter",
    "Bornheim",
    "Bad Honnef",
    "Hennef (Sieg)",
    "Meckenheim",
    "Niederkassel",
    "Lohmar",
    "Rheinbach",
    "Wesseling",
    "Brühl",
  ],
  crossReference: [
    { name: "Köln", slug: "koeln" },
    { name: "Leverkusen", slug: "leverkusen" },
    { name: "Koblenz", slug: "koblenz" },
    { name: "Siegburg", slug: "siegburg" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Bonn | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Ihr Partner für n8n-Workflows, KI-Automatisierung und Prozessoptimierung in Bonn - von Deutscher Telekom über DHL bis zu Bundesbehörden und UN-Organisationen.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI-Agentur Bonn",
      "Workflow-Automatisierung Bonn",
      "n8n Bonn",
      "KI Automatisierung Bonn",
      "Prozessoptimierung Bonn",
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
          url: "/images/cities/bonn.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch KI-Agentur Bonn",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/bonn.jpg"],
    },
    alternates: {
      canonical: "/standorte/bonn",
    },
  };
}

const bonnFaqs = [
  {
    question: "DHL Group automatisiert weltweit – wie binden Mittelständler an Track & Trace an?",
    answer:
      "DHL hat 594.000 Beschäftigte global. Zulieferer, IT-Dienstleister, Frachtmakler und Versandkunden müssen EDI, API, Track & Trace und Customs Clearance modernisieren. n8n verbindet DHL-APIs, eigene WMS- und ERP-Systeme End-to-End.",
  },
  {
    question: "Deutsche Telekom – wie hilft n8n Geschäftspartnern und Resellern?",
    answer:
      "Die Telekom investiert in KI-Plattformen (Frag Magenta, T-AI) und reduziert klassische Serviceberatung. Verträge, Tarife, Rechnungen und Provisionen werden mit n8n automatisch verarbeitet – inklusive Anbindung an Telekom-Portale und Reseller-Systeme.",
  },
  {
    question: "Bundesbehörden und OZG – passt n8n in den Public Sector?",
    answer:
      "Aktenführung, Formularverarbeitung, IT-Konsolidierung und KI-gestützte Sachbearbeitung sind klassische OZG-Themen. Für BMVg, BMG, BMU, BSI und BWI bieten wir n8n self-hosted in deutschen Rechenzentren mit BSI-Grundschutz-konformer Konfiguration.",
  },
  {
    question: "UN und GIZ – wie hilft n8n bei mehrsprachigen Workflows?",
    answer:
      "Über 1.000 UN-Beschäftigte und Hunderte zugehörige Organisationen brauchen mehrsprachige Korrespondenz, Übersetzungs- und Compliance-Workflows. UN-Procurement, Spendenmanagement und Geber-Reporting werden mit n8n und KI-Übersetzung orchestriert.",
  },
  {
    question: "Postbank-Integration in Deutsche Bank – wie unterstützt n8n Migrationen?",
    answer:
      "IT-System-Migrationen, Vertragsanpassungen und Kundenkommunikation laufen seit Jahren. RPA und Workflow-Automatisierung mit n8n übernehmen wiederkehrende Aufgaben, ohne in Kern-Banken-IT einzugreifen.",
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
          imageSrc="/images/cities/bonn.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Bonn"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Bonn –{" "}
                DHL, Telekom, Bundesbehörden und{" "}
                <BackgroundHero.Highlight>UN-Standort</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            DHL Group, Deutsche Telekom, Postbank, 18 Bundesbehörden, 20+
            UN-Organisationen, Universitätsklinikum, GIZ, BWI, BSI –
            die ehemalige Bundeshauptstadt ist heute einer der
            internationalsten Standorte Deutschlands. Wir bauen
            n8n-Workflows für DHL-Logistik, Telekom-Services,
            OZG-Digitalisierung und mehrsprachige UN-Workflows.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">
              Bonner Workflow besprechen
            </ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={336000}
              label="Einwohner Bundesstadt Bonn"
              index={0}
            />
            <BackgroundHero.Stat
              value={204.5}
              suffix=" Mrd. €"
              label="Marktkapitalisierung DAX-Konzerne"
              index={1}
            />
            <BackgroundHero.Stat
              value={2}
              label="DAX-Konzerne mit HQ"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 3. SimpleGrid cols=2 — Schlüsselbranchen */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Bonner Cluster, die Automatisierung erzwingen</Typo.H2>
        <Typo.Paragraph>
          DHL steuert anders als die Telekom, das BMVg anders als die UN.
          Wir bauen für jeden Cluster die passenden n8n-Bausteine – vom
          Track-&-Trace-Workflow bis zur mehrsprachigen UN-Korrespondenz.
        </Typo.Paragraph>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Truck className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>DHL Group – größter Logistikkonzern der Welt</Typo.H3>
            <Typo.Paragraph>
              594.000 Beschäftigte global, 9.000 in Bonn. Track & Trace, EDI,
              API, Customs Clearance und Hub-Workflows werden mit n8n
              orchestriert. Wir verbinden DHL-APIs mit eigenen WMS- und
              ERP-Systemen End-to-End.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Cpu className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Deutsche Telekom – T-Systems, Cisco, Microsoft</Typo.H3>
            <Typo.Paragraph>
              16.500 Telekom-Beschäftigte in Bonn. Die Telekom investiert
              in Frag-Magenta-/T-AI-Plattformen. Geschäftspartner und
              Reseller müssen Verträge, Tarife, Rechnungen und Provisionen
              automatisieren – n8n verbindet Telekom-Portale mit eigenen
              Systemen.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Landmark className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>18 Bundesbehörden – BMVg, BMG, BMU, BSI, BWI</Typo.H3>
            <Typo.Paragraph>
              OZG-Umsetzung, Aktenführung, Formularverarbeitung, IT-
              Konsolidierung und KI-gestützte Sachbearbeitung sind zentrale
              Themen. Wir bieten n8n self-hosted in deutschen
              Rechenzentren mit BSI-Grundschutz-konformer Konfiguration.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Building2 className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>UN-Standort &amp; GIZ – internationale Organisationen</Typo.H3>
            <Typo.Paragraph>
              Über 1.000 UN-Beschäftigte plus GIZ und dena. Mehrsprachige
              Korrespondenz, Übersetzungs-Workflows, UN-Procurement,
              Spendenmanagement und Geber-Reporting werden mit n8n und
              KI-Übersetzung orchestriert.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <HeartPulse className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Universitätsklinikum Bonn &amp; Pharma-Cluster</Typo.H3>
            <Typo.Paragraph>
              8.500 UKB-Beschäftigte, dazu Beiersdorf-Forschung, Mibe Pharma
              und Bayer-Nähe. Studienkommunikation, Patientenrekrutierung,
              eCRF-Daten und regulatorisches Reporting (GCP, EMA) werden
              mit n8n und Veeva Vault verbunden.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <FlaskConical className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Universität Bonn, Fraunhofer IAIS, DLR</Typo.H3>
            <Typo.Paragraph>
              6.500 Uni-Beschäftigte, Fraunhofer IAIS, DLR-Außenstelle,
              Max-Planck-Institute. Drittmittel-Workflows, Förderanträge
              und Industriekooperationen rund um Bundespolitik und
              EU-Themen werden mit n8n abgebildet.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 2. IntroBox */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <Typo.H2>Warum Bonn eine spezialisierte KI-Agentur braucht</Typo.H2>
          <Typo.Paragraph>
            Mit zwei DAX-Konzernen (DHL Group, Deutsche Telekom), 18
            Bundesministerien und Behörden sowie 20+ UN-Organisationen ist
            Bonn einer der dichtesten Konzern-, Behörden- und
            NGO-Standorte Deutschlands. OZG, KI-Plattformen der Telekom,
            DHL-Hub-Digitalisierung und mehrsprachige UN-Workflows treiben
            massive Automatisierungs-Bedarfe. Hinzu kommen Postbank-
            Integration und BSI-Cybersecurity-Regulatorik.
          </Typo.Paragraph>
        </IntroBox>
      </ContentWrapper>

      {/* 5. KpiCard Row */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Bonn in Zahlen</Typo.H2>
        <SimpleGrid cols={4}>
          <KpiCard
            value={594000}
            subtitle="DHL-Group-Beschäftigte weltweit"
          />
          <KpiCard
            value={16500}
            subtitle="Telekom-Beschäftigte Bonn"
          />
          <KpiCard
            value={18}
            subtitle="Bundesministerien/Behörden"
          />
          <KpiCard
            value={8500}
            subtitle="UKB-Beschäftigte"
          />
        </SimpleGrid>
      </ContentWrapper>

      {/* 4. BoundlessImageCard */}
      <ContentWrapper>
        <BoundlessImageCard imagePosition="left">
          <BoundlessImageCard.Image
            src="/images/cities/bonn.jpg"
            alt="Bonn DHL, Telekom und UN-Standort – n8n-Workflows für Logistik, IT und Public Sector"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>OZG, DHL und KI bei der Telekom – Bonn als Workflow-Knotenpunkt</Typo.H2>
            <Typo.Paragraph>
              Onlinezugangsgesetz und Konjunkturpaket Digitale Verwaltung
              treiben enorme Anforderungen in den Bonner Bundesbehörden.
              Gleichzeitig automatisiert die Telekom mit Frag Magenta und
              T-AI, DHL digitalisiert Hubs, Sendungsverfolgung und Last
              Mile. Wir helfen Mittelständlern, ihre Schnittstellen zu
              diesen Großorganisationen mit schlanken n8n-Workflows
              kompatibel zu halten.
            </Typo.Paragraph>
            <div className="mt-4">
              <Link href="/unser-prozess" className="text-primary-600 hover:underline font-semibold">
                Unser 6-Phasen-Prozess →
              </Link>
            </div>
          </BoundlessImageCard.Content>
        </BoundlessImageCard>
      </ContentWrapper>

      {/* 7.5. Bonus — Bonn in Zahlen */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Bonn in Zahlen</Typo.H2>
        <SimpleGrid cols={4}>
          <KpiCard
            value={9000}
            subtitle="DHL Group HQ-Beschäftigte in Bonn"
          />
          <KpiCard
            value={15000}
            subtitle="Deutsche Telekom T-Centric-Beschäftigte"
          />
          <KpiCard
            value={20}
            suffix="+"
            subtitle="UN-Organisationen mit Sitz Bonn"
          />
          <KpiCard
            value={20}
            subtitle="Bundesbehörden &amp; Ministerien-Außenstellen"
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
        <Typo.H2>Häufige Fragen aus Bonn</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={bonnFaqs} />
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
