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
import ProsCons from "@/components/sections/pros-cons";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import Typo from "@/components/ui/typo";
import { FaqContainer } from "@/components/ui/faqs";
import { CityLinksFromMeta } from "@/components/standorte/city-links";
import ContactButton from "@/components/buttons/contact-button";
import { Zap, Cog, FlaskConical, Building2, ShoppingCart, HeartPulse } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-workflows-essen",
      preHeadline: "AI Workflows Essen",
      headline: "AI Workflows & Automatisierung in Essen",
      metaTitle: "AI Workflows Essen - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Essen. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Essen",
        "KI Automatisierung Essen",
        "Workflow Automatisierung Essen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-essen",
      preHeadline: "n8n Automation Essen",
      headline: "n8n Automation in Essen - Workflows automatisieren",
      metaTitle: "n8n Automation Essen | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Essen. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Essen",
        "n8n Essen",
        "Workflow Automation Essen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-essen",
      preHeadline: "n8n Essen",
      headline: "n8n Agentur in Essen",
      metaTitle: "n8n Essen - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Essen. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Essen und Umgebung.",
      keywords: [
        "n8n Essen",
        "n8n Agentur Essen",
        "n8n Beratung Essen",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-essen",
      preHeadline: "Automation Essen",
      headline: "Automation & Prozessoptimierung in Essen",
      metaTitle: "Automation Essen - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Essen. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Essen",
        "Prozessautomatisierung Essen",
        "Workflow Automation Essen",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-essen",
      preHeadline: "IT Dienstleister Essen",
      headline: "IT Dienstleister in Essen - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Essen - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Essen. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Essen.",
      keywords: [
        "IT Dienstleister Essen",
        "IT Service Essen",
        "Digitalisierung Essen",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-essen",
      preHeadline: "KI Beratung Essen",
      headline: "KI Beratung in Essen - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Essen - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Essen. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Essen",
        "KI Lösungen Essen",
        "Künstliche Intelligenz Essen",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Essen",
  slug: "essen",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Hattingen",
    "Velbert",
    "Gladbeck",
    "Ratingen",
    "Heiligenhaus",
    "Witten",
    "Herten",
  ],
  crossReference: [
    { name: "Dortmund", slug: "dortmund" },
    { name: "Duisburg", slug: "duisburg" },
    { name: "Bochum", slug: "bochum" },
    { name: "Gelsenkirchen", slug: "gelsenkirchen" },
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

  const title = overrides?.metaTitle ?? "Künstliche Intelligenz in Essen | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Ihr Partner für n8n-Workflows, KI-Automatisierung und Prozessoptimierung in Essen - von RWE und E.ON über thyssenkrupp und Brenntag bis HOCHTIEF und Evonik.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI-Agentur Essen",
      "Workflow-Automatisierung Essen",
      "n8n Essen",
      "KI Automatisierung Essen",
      "Prozessoptimierung Essen",
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
          url: "/images/cities/essen.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch KI-Agentur Essen",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/essen.jpg"],
    },
    alternates: {
      canonical: "/standorte/essen",
    },
  };
}

const essenFaqs = [
  {
    question: "E.ON, RWE – wie automatisiert n8n Marktkommunikation und CSRD?",
    answer:
      "Millionen Marktnachrichten pro Tag (EDIFACT, MaKo, MaBiS, MSCONS), Smart-Meter-Rollout, BNetzA-Vorgaben und CSRD/ESRS-Daten werden in n8n-Pipelines abgebildet – auditfest und im eigenen Rechenzentrum. Wir kennen die Standard-Stacks der großen Versorger.",
  },
  {
    question: "Brenntag operiert in 70+ Ländern – wie schaffen wir REACH und Gefahrgut?",
    answer:
      "REACH-Compliance, ADR-Gefahrgut-Dokumente, kundenspezifische SDB, Multi-Country-Etikettierung, Bestelleingangs-OCR und Frachtbuchungen sind klassische Document-AI- und n8n-Use-Cases für Chemiedistribution.",
  },
  {
    question: "thyssenkrupp im Konzernumbau – wie unterstützen wir IT-Migrationen?",
    answer:
      "Trennung von Steel, Marine und Materials Services erzeugt getrennte ERP-Mandanten, Stammdatenbereinigung und Lieferanten-Re-Onboarding. n8n macht diese Migrationen mit Workflows beherrschbar – ohne in Kern-SAP-Systeme einzugreifen.",
  },
  {
    question: "HOCHTIEF und Bau – wie hilft KI bei Lieferscheinen und Nachträgen?",
    answer:
      "KI-basierte Belegerkennung, automatische Zuordnung von Subunternehmer-Rechnungen zu Vergaben (VOB), Bautagebücher, Nachweise und Aufmaß-Workflows reduzieren manuelle Erfassung massiv. n8n verbindet RIB iTWO, SAP RE-FX und Dokumentenmanagement.",
  },
  {
    question: "Aldi Nord – wie passt n8n in eine Discounter-Lieferkette?",
    answer:
      "Lieferantenrechnungen, Promotion-Planung, Eigenmarken-Spezifikationen, EAN-Pflege und EDI-Workflows mit tausenden Lieferanten werden automatisiert. Wir docken an Aldi-typische SAP- und Stammdaten-Plattformen an.",
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
          imageSrc="/images/cities/essen.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Essen"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Essen –{" "}
                3 DAX-Konzerne, Energie-Hauptstadt und{" "}
                <BackgroundHero.Highlight>HQ-Dichte</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            E.ON, RWE, Brenntag, thyssenkrupp, HOCHTIEF, Evonik, Aldi Nord –
            keine andere deutsche Großstadt bündelt so viele börsennotierte
            Konzern-Hauptsitze auf engstem Raum. Wir bauen n8n-Workflows
            für Energie-Marktkommunikation, Chemiedistribution,
            Konzern-Umbau-IT und Bau-Lieferketten.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">
              Essener Workflow besprechen
            </ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={574682}
              label="Einwohner (Rang 11)"
              index={0}
            />
            <BackgroundHero.Stat
              value={3}
              label="DAX-Konzerne mit HQ"
              index={1}
            />
            <BackgroundHero.Stat
              value={271635}
              label="Sozialversicherungspflichtig Beschäftigte"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 2. IntroBox */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <Typo.H2>Warum Essen eine spezialisierte KI-Agentur braucht</Typo.H2>
          <Typo.Paragraph>
            Drei DAX-Konzerne (E.ON, RWE, Brenntag) und drei MDAX-Konzerne
            (thyssenkrupp, HOCHTIEF, Evonik) – Essen ist die
            HQ-dichteste Großstadt Deutschlands. Aus Kohle und Stahl wurde
            Konzern-Steuerung, Energiewende und Spezialchemie-Verteilung.
            CSRD, EU Chips Act, CBAM und massive IT-Migrationen rund um
            die thyssenkrupp-Auftrennung erzeugen einen
            Automatisierungsdruck, der ohne durchgängige Workflows nicht
            mehr zu bewältigen ist.
          </Typo.Paragraph>
        </IntroBox>
      </ContentWrapper>

      {/* 4. BoundlessImageCard */}
      <ContentWrapper>
        <BoundlessImageCard imagePosition="right">
          <BoundlessImageCard.Image
            src="/images/cities/essen.jpg"
            alt="Essen DAX- und MDAX-HQs – n8n-Workflows für Energie, Chemie und Bau"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>Strukturwandel zur HQ-Stadt – Essen automatisiert Konzernsteuerung</Typo.H2>
            <Typo.Paragraph>
              Essen ist Sinnbild für den deutschen Strukturwandel: aus der
              Kruppstadt mit Bergbau wurde die Stadt der DAX-/MDAX-Hauptsitze.
              RAG-Stiftungs- und Strukturstärkungsgesetz-Programme treiben
              zusätzlichen Digitalisierungsdruck. Wir helfen den
              Mittelstands-Zulieferern dieser Konzerne, mit schlanken
              n8n-Workflows die Anforderungen ihrer Großkunden zu erfüllen –
              vom Lieferanten-Portal bis zur CSRD-Datenanlieferung.
            </Typo.Paragraph>
            <div className="mt-4">
              <Link href="/unser-prozess" className="text-primary-600 hover:underline font-semibold">
                Unser 6-Phasen-Prozess →
              </Link>
            </div>
          </BoundlessImageCard.Content>
        </BoundlessImageCard>
      </ContentWrapper>

      {/* 3. SimpleGrid cols=2 — Schlüsselbranchen */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Essener Cluster, die Automatisierung erzwingen</Typo.H2>
        <Typo.Paragraph>
          E.ON steuert anders als HOCHTIEF, Brenntag anders als Aldi Nord.
          Wir bauen für jeden Cluster die passenden n8n-Bausteine – vom
          MaKo-Pipeline bis zum CBAM-Reporting.
        </Typo.Paragraph>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Zap className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>E.ON, RWE – Energie-Hauptstadt Deutschlands</Typo.H3>
            <Typo.Paragraph>
              E.ON mit 8 Mio. Kunden, RWE als einer der größten
              Erneuerbare-Energien-Erzeuger Europas. Marktkommunikation
              (EDIFACT, MaKo, MaBiS, MSCONS), Smart-Meter-Rollout, BNetzA-
              und CSRD-Reporting werden in n8n-Pipelines abgebildet.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <FlaskConical className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Brenntag, Evonik – Chemiedistribution &amp; Spezialchemie</Typo.H3>
            <Typo.Paragraph>
              Brenntag agiert in über 70 Ländern, Evonik mit Hochleistungs-
              polymeren. REACH-Compliance, ADR-Gefahrgut-Dokumente,
              kundenspezifische SDB, Multi-Country-Etikettierung und
              Bestelleingangs-OCR sind klassische Document-AI- und
              n8n-Felder.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Cog className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>thyssenkrupp – Konzern im Umbau</Typo.H3>
            <Typo.Paragraph>
              Trennung von Steel, Marine und Materials Services. Wir bauen
              Workflows für getrennte ERP-Mandanten, Stammdatenbereinigung,
              neue Buchhaltungsstrukturen und Lieferanten-Re-Onboarding –
              ohne in das Kern-SAP einzugreifen.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Building2 className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>HOCHTIEF – globaler Baukonzern</Typo.H3>
            <Typo.Paragraph>
              Tonnenweise Lieferscheine, Subunternehmer-Rechnungen,
              Bautagebücher, VOB-Vergaben und Nachträge werden mit KI-OCR
              und n8n erfasst. Wir verbinden RIB iTWO, SAP RE-FX und
              Dokumentenmanagement-Plattformen.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <ShoppingCart className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Aldi Nord – Discounter-Lieferkette</Typo.H3>
            <Typo.Paragraph>
              Täglich tausende Lieferantenrechnungen, Promotion-Planung,
              Eigenmarken-Spezifikationen und EAN-Pflege. EDI-Workflows
              mit den Lieferanten und automatisierte Rechnungsverarbeitung
              docken an Aldi-typische SAP-Plattformen an.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <HeartPulse className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Universitätsklinikum Essen – Westdeutsches Tumorzentrum</Typo.H3>
            <Typo.Paragraph>
              Maximalversorger mit onkologischem Schwerpunkt.
              Studienverwaltung, eCRF-Daten, Drittmittel-Reporting und
              DRG-Kodierung werden mit n8n und KI orchestriert – unter
              hohem Personalmangel-Druck.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 5. KpiCard Row */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Essen in Zahlen</Typo.H2>
        <SimpleGrid cols={4}>
          <KpiCard
            value={19750}
            subtitle="RWE-Konzernbeschäftigte"
          />
          <KpiCard
            value={17440}
            subtitle="Brenntag-Konzernbeschäftigte"
          />
          <KpiCard
            value={17930}
            subtitle="thyssenkrupp Materials Services"
          />
          <KpiCard
            value={3}
            subtitle="MDAX-Konzerne mit HQ"
          />
        </SimpleGrid>
      </ContentWrapper>

      {/* 7.5. Bonus — Steinkohle-Erbe vs. Energie-DAX */}
      <ContentWrapper>
        <Typo.H2>Essen zwischen Zollverein-Tradition und Energie-DAX</Typo.H2>
        <Typo.Paragraph>
          Wenige Städte haben sich so radikal umgebaut: Aus Krupp-Stahl und
          Steinkohle wurde der größte Energie- und Rohstoffhandels-Hub
          Deutschlands.
        </Typo.Paragraph>
        <div className="mt-8">
          <ProsCons>
            <ProsCons.Pros>
              <ProsCons.Item
                title="Energie-Hauptstadt mit DAX-Power"
                description="E.ON-HQ mit ca. 75.000 Mitarbeitern, RWE-HQ als DAX-Konzern, Brenntag als Weltmarktführer im Chemiehandel, Evonik als Industriespezialist – Energiehandel, ETS-Zertifikate und SAP IS-U laufen hier."
              />
              <ProsCons.Item
                title="MDAX-Headquarter-Dichte"
                description="Brenntag, GFT (HOCHTIEF-Eigentümer), Hochtief, Schenker-Wurzeln: drei MDAX-Konzerne in einer Stadt mit dem Schwerpunkt SAP S/4HANA, Compliance-Workflows und Konzern-Konsolidierung."
              />
            </ProsCons.Pros>
            <ProsCons.Cons>
              <ProsCons.Item
                title="Steinkohle-Erbe als Identitätsanker"
                description="Zollverein UNESCO-Welterbe, Krupp-Tradition, IG Metall, Mitbestimmung – Betriebsräte und Restrukturierungspflichten sind hier kein Detail. Automatisierung muss tariflich und sozialpartnerschaftlich begleitet werden."
              />
              <ProsCons.Item
                title="Strukturwandel-Müdigkeit"
                description="Nach Zechensterben, Stahl-Restrukturierung und Energiewende sind Belegschaften skeptisch gegenüber 'der nächsten Welle'. Wir liefern Pilot-Workflows mit klarem ROI, statt Folien."
              />
            </ProsCons.Cons>
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
        <Typo.H2>Häufige Fragen aus Essen</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={essenFaqs} />
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
