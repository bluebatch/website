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
import { Car, Plane, GraduationCap, Briefcase, ShoppingBag, FlaskConical } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-workflows-braunschweig",
      preHeadline: "AI Workflows Braunschweig",
      headline: "AI Workflows & Automatisierung in Braunschweig",
      metaTitle: "AI Workflows Braunschweig - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Braunschweig. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Braunschweig",
        "KI Automatisierung Braunschweig",
        "Workflow Automatisierung Braunschweig",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-braunschweig",
      preHeadline: "n8n Automation Braunschweig",
      headline: "n8n Automation in Braunschweig - Workflows automatisieren",
      metaTitle: "n8n Automation Braunschweig | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Braunschweig. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Braunschweig",
        "n8n Braunschweig",
        "Workflow Automation Braunschweig",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-braunschweig",
      preHeadline: "n8n Braunschweig",
      headline: "n8n Agentur in Braunschweig",
      metaTitle: "n8n Braunschweig - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Braunschweig. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Braunschweig und Umgebung.",
      keywords: [
        "n8n Braunschweig",
        "n8n Agentur Braunschweig",
        "n8n Beratung Braunschweig",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-braunschweig",
      preHeadline: "Automation Braunschweig",
      headline: "Automation & Prozessoptimierung in Braunschweig",
      metaTitle: "Automation Braunschweig - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Braunschweig. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Braunschweig",
        "Prozessautomatisierung Braunschweig",
        "Workflow Automation Braunschweig",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-braunschweig",
      preHeadline: "IT Dienstleister Braunschweig",
      headline: "IT Dienstleister in Braunschweig - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Braunschweig - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Braunschweig. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Braunschweig.",
      keywords: [
        "IT Dienstleister Braunschweig",
        "IT Service Braunschweig",
        "Digitalisierung Braunschweig",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-braunschweig",
      preHeadline: "KI Beratung Braunschweig",
      headline: "KI Beratung in Braunschweig - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Braunschweig - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Braunschweig. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Braunschweig",
        "KI Lösungen Braunschweig",
        "Künstliche Intelligenz Braunschweig",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Braunschweig",
  slug: "braunschweig",
  bundesland: "Niedersachsen",
  publish: false,
  nearbySmall: [
    "Wolfenbüttel",
    "Peine",
    "Gifhorn",
    "Helmstedt",
    "Goslar",
  ],
  crossReference: [
    { name: "Wolfsburg", slug: "wolfsburg" },
    { name: "Salzgitter", slug: "salzgitter" },
    { name: "Hannover", slug: "hannover" },
    { name: "Hildesheim", slug: "hildesheim" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Braunschweig | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Ihr Partner für n8n-Workflows, KI-Automatisierung und Prozessoptimierung in Braunschweig - von VW Group Components über DLR und PTB bis New Yorker.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI-Agentur Braunschweig",
      "Workflow-Automatisierung Braunschweig",
      "n8n Braunschweig",
      "KI Automatisierung Braunschweig",
      "Prozessoptimierung Braunschweig",
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
          url: "/images/cities/braunschweig.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch KI-Agentur Braunschweig",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/braunschweig.jpg"],
    },
    alternates: {
      canonical: "/standorte/braunschweig",
    },
  };
}

const braunschweigFaqs = [
  {
    question: "VW Group Components - weltgrößte Achsfertigung, wie passt n8n zu Tier-1?",
    answer:
      "5.700 Beschäftigte fertigen Achsen, Lenkungen, Kunststoff. JIT/JIS-Abrufe, EDI/VDA-Belege, IATF-16949-Doku, Catena-X-Datenraum-Anbindung und PowerCo-Salzgitter-Konnektivität für Batterie-Komponenten werden mit n8n abgebildet.",
  },
  {
    question: "Volkswagen Financial Services - wie hilft n8n in Auto-Banking und Mobility?",
    answer:
      "VWFS mit 5.500 Beschäftigten in Braunschweig ist Bank und Mobility-Anbieter zugleich. KYC, Onboarding, Vertragsmanagement, Kreditprüfung und Schadenabwicklung werden mit n8n und RPA orchestriert - inklusive Händler- und Partner-Integration.",
  },
  {
    question: "DLR, PTB, HZI - wie automatisieren wir Forschungsdaten?",
    answer:
      "Drittmittel-Verwaltung, Projektzeit-Erfassung, Berichtswesen an BMBF und EU, Patentmanagement und Veröffentlichungs-Workflows sind dokumentationsintensiv. Wir bauen n8n-Pipelines, die Forschungs-Standardabläufe wie DLR-Forschungsflughafen-Logistik mit ERP verzahnen.",
  },
  {
    question: "New Yorker - globale Modelogistik, wie passt n8n?",
    answer:
      "Über 1.100 Filialen in 47 Ländern. Saisonale Kollektionen, Lieferantenmanagement, Filialnachschub und E-Commerce-Integration werden mit n8n End-to-End orchestriert - inklusive Multi-Country-Compliance und Etikettierungs-Workflows.",
  },
  {
    question: "Zulieferer-Druck auf der Achse Braunschweig-Wolfsburg-Salzgitter - was bringt n8n?",
    answer:
      "Volkswagen reduziert Standortkapazitäten und fordert Kostensenkungen. Tier-1- und Tier-2-Mittelständler müssen Bestellung, Lieferplanabrufe (EDI/JIS), Qualitätsdokumentation und Kostenanalysen automatisieren. Wir bauen schlanke Workflows ohne SAP-Großprojekt.",
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
          imageSrc="/images/cities/braunschweig.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Braunschweig"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Braunschweig -{" "}
                VW Forschung, DLR-Luftfahrt und{" "}
                <BackgroundHero.Highlight>Europas F&amp;E-Region</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            VW Group Components, VW Financial Services, TU Braunschweig,
            DLR-Forschungsflughafen, PTB, HZI, New Yorker, Klinikum
            Braunschweig - Braunschweig hat den europaweit höchsten Anteil
            F&amp;E-Beschäftigter (10 % der Erwerbstätigen). Wir bauen
            n8n-Workflows für VW-Tier-1, Auto-Banking, Luftfahrtforschung
            und Modelogistik.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">
              Braunschweiger Workflow besprechen
            </ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={251000}
              label="Einwohner Stadt Braunschweig"
              index={0}
            />
            <BackgroundHero.Stat
              value={10}
              suffix=" %"
              label="F&E-Anteil (Europa-Spitze)"
              index={1}
            />
            <BackgroundHero.Stat
              value={200000}
              label="Auto-Beschäftigte Achse BS-WOB-SZ"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 2. IntroBox */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <Typo.H2>Warum Braunschweig eine spezialisierte KI-Agentur braucht</Typo.H2>
          <Typo.Paragraph>
            Braunschweig ist eine der forschungsintensivsten Regionen der EU
            - höchster F&amp;E-Anteil Europas. Volkswagen Group Components
            betreibt hier die weltgrößte zusammenhängende Achsfertigung, VW
            Financial Services steuert den globalen Auto-Bank- und
            Mobility-Konzern, DLR und PTB sind nationale Spitzeneinrichtungen.
            New Yorker exportiert Mode in 47 Länder, das HZI forscht in
            Infektionsmedizin. Diese Vielfalt erzeugt sehr unterschiedliche
            Automatisierungs-Use-Cases - wir kennen sie alle.
          </Typo.Paragraph>
        </IntroBox>
      </ContentWrapper>

      {/* 5. KpiCard Row */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Braunschweig in Zahlen</Typo.H2>
        <SimpleGrid cols={4}>
          <KpiCard
            value={7000}
            subtitle="New-Yorker-Hauptsitz"
          />
          <KpiCard
            value={6300}
            subtitle="TU-Braunschweig-Beschäftigte"
          />
          <KpiCard
            value={5700}
            subtitle="VW-Group-Components-Werk"
          />
          <KpiCard
            value={5500}
            subtitle="VWFS-Beschäftigte"
          />
        </SimpleGrid>
      </ContentWrapper>

      {/* 4. BoundlessImageCard */}
      <ContentWrapper>
        <BoundlessImageCard imagePosition="right">
          <BoundlessImageCard.Image
            src="/images/cities/braunschweig.jpg"
            alt="Braunschweig VW Components, DLR und New Yorker - n8n-Workflows für Forschung und Industrie"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>VW-Transformation, DLR-Forschung und New-Yorker-Mode parallel</Typo.H2>
            <Typo.Paragraph>
              Die Achse Braunschweig-Wolfsburg-Salzgitter mit fast 200.000
              Auto-Beschäftigten steht durch VW-Standortkonsolidierung unter
              extremem Margendruck. Gleichzeitig wächst die Forschungs-Welt
              (DLR, PTB, HZI, TU) und New Yorker expandiert global. Wir
              helfen Zulieferern, Forschungseinrichtungen und Mode-
              Logistikern, mit schlanken n8n-Workflows parallel zu skalieren.
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
        <Typo.H2>Braunschweiger Cluster, die Automatisierung erzwingen</Typo.H2>
        <Typo.Paragraph>
          VW Group Components steuert anders als das DLR, VWFS anders als
          New Yorker. Wir bauen für jeden Cluster die passenden
          n8n-Bausteine - vom JIS-Abruf bis zum Drittmittel-Reporting.
        </Typo.Paragraph>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Car className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>VW Group Components - weltgrößte Achsfertigung</Typo.H3>
            <Typo.Paragraph>
              5.700 Beschäftigte, Achsen, Lenkungen, Kunststoff, Transformation
              zum Batterie-Komponenten-Zentrum. JIT/JIS, EDI/VDA, IATF 16949,
              Catena-X-Anbindung und PowerCo-Salzgitter-Konnektivität werden
              mit n8n auditfest abgebildet.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Briefcase className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Volkswagen Financial Services AG</Typo.H3>
            <Typo.Paragraph>
              5.500 Beschäftigte in Braunschweig. KYC, Vertragsmanagement,
              Kreditprüfung, Schadenabwicklung und Händler-/Partner-
              Integration werden mit n8n und RPA orchestriert - inklusive
              Mobility-Workflow-Anbindung.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Plane className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>DLR-Forschungsflughafen, NFL - Luftfahrtforschung</Typo.H3>
            <Typo.Paragraph>
              DLR-Standort mit niedersächsischem Forschungszentrum für
              Luftfahrt. Drittmittel-Verwaltung, EU-Reporting, Versuchsdaten-
              Management, Sicherheits-Workflows und Industriekooperationen
              werden mit n8n abgebildet.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <GraduationCap className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>TU Braunschweig, PTB, HZI - Forschungs-Cluster</Typo.H3>
            <Typo.Paragraph>
              Älteste technische Universität Deutschlands, PTB als nationales
              Metrologie-Institut, Helmholtz-Zentrum für Infektionsforschung.
              Drittmittel-Workflows, Veröffentlichungen, Förderpflichten an
              BMBF/EU werden mit n8n orchestriert.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <ShoppingBag className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>New Yorker - globale Modelogistik</Typo.H3>
            <Typo.Paragraph>
              7.000 Beschäftigte am Hauptsitz, 1.100+ Filialen in 47 Ländern.
              Saisonale Kollektionen, Lieferantenmanagement, Filialnachschub,
              E-Commerce, Etikettierung und Multi-Country-Compliance
              werden mit n8n End-to-End orchestriert.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <FlaskConical className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Klinikum Braunschweig &amp; Salzgitter-Achse</Typo.H3>
            <Typo.Paragraph>
              4.500 Klinikum-Beschäftigte, dazu Salzgitter AG, MAN Truck
              und zahlreiche Tier-1-Zulieferer in der Region. DRG, OP-Planung
              und Patientenaufnahme bei der Klinik, EDI/JIS-Workflows und
              CSRD bei den Industrieunternehmen werden mit n8n abgebildet.
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
        <Typo.H2>Häufige Fragen aus Braunschweig</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={braunschweigFaqs} />
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
