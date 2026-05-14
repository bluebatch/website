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
import { Cog, Truck, HeartPulse } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-workflows-herne",
      preHeadline: "AI Workflows Herne",
      headline: "AI Workflows & Automatisierung in Herne",
      metaTitle: "AI Workflows Herne - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Herne. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Herne",
        "KI Automatisierung Herne",
        "Workflow Automatisierung Herne",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-herne",
      preHeadline: "n8n Automation Herne",
      headline: "n8n Automation in Herne - Workflows automatisieren",
      metaTitle: "n8n Automation Herne | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Herne. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Herne",
        "n8n Herne",
        "Workflow Automation Herne",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-herne",
      preHeadline: "n8n Herne",
      headline: "n8n Agentur in Herne",
      metaTitle: "n8n Herne - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Herne. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Herne und Umgebung.",
      keywords: [
        "n8n Herne",
        "n8n Agentur Herne",
        "n8n Beratung Herne",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-herne",
      preHeadline: "Automation Herne",
      headline: "Automation & Prozessoptimierung in Herne",
      metaTitle: "Automation Herne - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Herne. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Herne",
        "Prozessautomatisierung Herne",
        "Workflow Automation Herne",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-herne",
      preHeadline: "IT Dienstleister Herne",
      headline: "IT Dienstleister in Herne - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Herne - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Herne. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Herne.",
      keywords: [
        "IT Dienstleister Herne",
        "IT Service Herne",
        "Digitalisierung Herne",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-herne",
      preHeadline: "KI Beratung Herne",
      headline: "KI Beratung in Herne - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Herne - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Herne. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Herne",
        "KI Lösungen Herne",
        "Künstliche Intelligenz Herne",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Herne",
  slug: "herne",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Herten",
    "Castrop-Rauxel",
  ],
  crossReference: [
    { name: "Bochum", slug: "bochum" },
    { name: "Gelsenkirchen", slug: "gelsenkirchen" },
    { name: "Dortmund", slug: "dortmund" },
    { name: "Recklinghausen", slug: "recklinghausen" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Herne | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Ihr Partner für n8n-Workflows, KI-Automatisierung und Prozessoptimierung in Herne - von Kelvion-Wärmeübertragern über Distributionszentren bis zu Klinik-Verbünden und Stadtwerken.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI-Agentur Herne",
      "Workflow-Automatisierung Herne",
      "n8n Herne",
      "KI Automatisierung Herne",
      "Prozessoptimierung Herne",
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
          url: "/images/cities/herne.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch KI-Agentur Herne",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/herne.jpg"],
    },
    alternates: {
      canonical: "/standorte/herne",
    },
  };
}

const herneFaqs = [
  {
    question: "Kelvion steuert weltweit 75+ Länder - wie automatisieren wir Multi-Site-Konzernprozesse?",
    answer:
      "Kelvion und ähnliche globale Mittelständler brauchen Multi-Site-ERP-Konsolidierung, Multi-Currency-Buchhaltung, Konzern-Reporting nach IFRS und einheitliches Lieferanten-Management. n8n verbindet SAP-, Dynamics- und MES-Instanzen verschiedener Tochtergesellschaften zu einer Pipeline.",
  },
  {
    question: "Stadtwerke Herne fällt unter KRITIS - ist n8n MaKo- und BSI-tauglich?",
    answer:
      "Ja. Marktkommunikation MaKo 2024, EDIFACT-Nachrichten an Netzbetreiber und Lieferanten, Smart-Meter-Rollout-Steuerung und BSI-Meldepflichten laufen auf self-hosted n8n. BSI-Grundschutz-konform, mit Härtung nach CIS-Benchmarks und WORM-Audit-Trail.",
  },
  {
    question: "Logistik im Herz des Reviers - wie automatisieren wir ATLAS, EDI und Frachtbriefe?",
    answer:
      "Hochfrequenz-Logistik braucht ATLAS-Zoll, EDIFACT/EANCOM-Anbindung an Verlader und LEH, automatische CMR-Erfassung und Gefahrgut-Doku. n8n koppelt TMS, WMS, ERP und Carrier-APIs zu durchgängigen Sendungs-Workflows.",
  },
  {
    question: "Glasfaser-Ausbau ermöglicht Cloud - wie helfen Workflows in der Migration?",
    answer:
      "Mit FTTH/FTTB können auch Herner Mittelständler von On-Premise auf Cloud migrieren. n8n hilft bei hybriden Übergangsphasen: alte ERPs lokal, neue SaaS in der Cloud, gemeinsame Workflows zwischen beiden Welten - ohne Big-Bang-Migration.",
  },
  {
    question: "Klinik-Verbünde Ev. Krankenhaus + St. Anna - welche Workflows entlasten das Personal?",
    answer:
      "DRG-Abrechnung mit Kostenträgern, KIS-ePA-Integration, Materialwirtschaft nach MDR und Personal-Planung. AI Agents klassifizieren Eingangsbefunde, extrahieren Daten und füllen Vorlagen vor - wichtig bei Personalmangel in Pflege und Verwaltung.",
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
          imageSrc="/images/cities/herne.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Herne"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Herne -{" "}
                von der Zechenstadt zum{" "}
                <BackgroundHero.Highlight>Glasfaser-Hub im Ruhrherz</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Aus Kohle und RAG wurde Kelvion-HQ, Glasfaser-Vorzeigestadt und Logistik-Drehscheibe. Wir automatisieren genau die Workflows, die ein Standort im Herzen des Ruhrgebiets braucht - Multi-Site-Konzernsteuerung, KRITIS-MaKo und ATLAS-Zoll.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">Automatisierung für Herne besprechen</ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={157896}
              label="Einwohner"
              index={0}
            />
            <BackgroundHero.Stat
              value={5250}
              label="Kelvion-Konzernbeschäftigte"
              index={1}
            />
            <BackgroundHero.Stat
              value={1000}
              suffix="+"
              label="neue Logistik-Jobs (letzte Jahre)"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 2. IntroBox — Pain-Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Strukturwandel der zweiten Generation
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was passiert mit den Prozessen, wenn aus Zeche Maschinenbau und Logistik wird?
          </IntroBox.Headline>
          <IntroBox.Subline>
            Herne hat den Bergbau-Abschied lange hinter sich - und ist heute Synonym für die zweite Phase des Strukturwandels. Kelvion baut von hier aus Wärmeübertrager für 75+ Länder, Distributionszentren liefern für ALDI und H.D.S., Stadtwerke Herne meistern MaKo und KRITIS, der Glasfaserausbau macht die Stadt zur IT-affinen Mittelstands-Adresse. Jede dieser Säulen hat eigene Prozess-Pains.
          </IntroBox.Subline>
        </IntroBox>
      </ContentWrapper>

      {/* 5. BoundlessImage */}
      <ContentWrapper colorScheme="gray-light">
        <BoundlessImageCard imagePosition="right">
          <BoundlessImageCard.Image
            src="/images/cities/herne.jpg"
            alt="Kelvion-HQ und Glasfaser-Hub Herne - Strukturwandel"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>Kelvion & Glasfaser-Stadt - wo Kohle war, ist heute globaler Maschinenbau</Typo.H2>
            <Typo.Paragraph>
              Kelvion liefert Wärmeübertrager in 75+ Länder, gesteuert aus Herne. Parallel macht der FTTH-Ausbau die Stadt zur attraktiven Adresse für IT-affine Mittelständler. Globale Konzernsteuerung, Cloud-Migrationen und KRITIS-konforme Versorgungs-Workflows: alles Felder für n8n. Wir verbinden diese Schnittstellen - ein Use-Case, den wir mehrfach gebaut haben.
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
        <Typo.H2>Was Herne hinter sich gelassen hat - und wo es jetzt steht</Typo.H2>
        <div className="mt-8">
          <ProsCons>
            <ProsCons.Cons>
              <ProsCons.Item
                title="Kohle-Erbe - Bergbau seit den 1980ern in Auflösung"
                description="Klassische Zechenstadt mit RAG-Folgen, Brachflächen-Konversion und Altlast-Sanierung über Jahrzehnte."
              />
              <ProsCons.Item
                title="Schwerindustrie schrumpft, Stahlhandel unter Druck"
                description="GMH-Schmiede und Metallverarbeitung im Umfeld kämpfen mit Energiekosten und Asien-Importwettbewerb."
              />
              <ProsCons.Item
                title="Strukturschwacher Stadtteil, Fachkräftekonkurrenz"
                description="Im Ruhrherz konkurrieren Dortmund, Bochum, Essen und Gelsenkirchen um dieselben Fachkräfte - Herner KMU müssen aufholen."
              />
              <ProsCons.Item
                title="On-Premise-Altsysteme im Mittelstand"
                description="Viele KMU sitzen auf 15-20 Jahre alten ERP-/CRM-Insellösungen - Migration auf Cloud/SaaS überfällig, aber risikobehaftet."
              />
            </ProsCons.Cons>
            <ProsCons.Pros>
              <ProsCons.Item
                title="Kelvion Holding (5.250 Konzernbeschäftigte, HQ Herne)"
                description="Globaler Wärmeübertrager-Anbieter für Industrie, Energie, Kälte- und Klimatechnik - wachsend durch Akquisitionen, mit massivem Workflow-Bedarf."
              />
              <ProsCons.Item
                title="Glasfaser-Stadt - konsequenter FTTH/FTTB-Ausbau"
                description="Herne treibt Glasfaser systematisch voran und positioniert sich als IT-affiner Mittelstands-Standort im Ruhrgebiet."
              />
              <ProsCons.Item
                title="Logistik im 500-km-Radius zu einem Drittel der EU-Bevölkerung"
                description="A2/A40/A43 plus Rhein-Herne-Kanal, Distributionszentren von ALDI, Westfalia und Imperial - 1.000+ neue Jobs in den letzten Jahren."
              />
              <ProsCons.Item
                title="Stadtwerke Herne & zwei Klinikverbünde"
                description="Stadtwerke unter KRITIS mit Strom/Gas/Wasser/ÖPNV, Ev. Krankenhaus und St. Anna-Hospital als regionale Versorger."
              />
            </ProsCons.Pros>
          </ProsCons>
        </div>
      </ContentWrapper>

      {/* 4. SimpleGrid cols=3 */}
      <ContentWrapper>
        <Typo.H2>Wo n8n in Herne heute den Hebel ansetzt</Typo.H2>
        <Typo.Paragraph>
          Drei Cluster, drei sehr unterschiedliche Pain-Points - aber alle mit einem gemeinsamen Bedürfnis: Workflows, die Datenflüsse zwischen Spezialsystemen orchestrieren.
        </Typo.Paragraph>
        <SimpleGrid cols={3}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Cog className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Maschinenbau global</Typo.H3>
            <Typo.Paragraph>
              Multi-Site-ERP-Konsolidierung, Multi-Currency-Buchhaltung, M&A-Integration, globale Lieferantenstammdaten und IFRS-Konzern-Reporting für Standorte wie Kelvion.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Truck className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Logistik & Distribution</Typo.H3>
            <Typo.Paragraph>
              ATLAS-Zoll, EDIFACT/EANCOM, CMR/Gefahrgut, Sendungsverfolgung und KEP-Anbindung. TMS, WMS und ERP in einer Pipeline für hochfrequente Distribution.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <HeartPulse className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Versorgung & Klinik</Typo.H3>
            <Typo.Paragraph>
              KRITIS-MaKo für Stadtwerke, Smart-Meter, BSI-Meldepflichten plus KIS, ePA, MDR und DRG-Abrechnung für Klinik-Verbünde. Self-hosted und BSI-Grundschutz-konform.
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
        <Typo.H2>Häufige Fragen aus Herne</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={herneFaqs} />
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
