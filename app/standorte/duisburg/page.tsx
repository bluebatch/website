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
import KpiCard from "@/components/cards/kpi-card";
import BoundlessImageCard from "@/components/cards/boundless-image-card";
import ProsCons from "@/components/sections/pros-cons";
import { FaqContainer } from "@/components/ui/faqs";
import { CityLinksFromMeta } from "@/components/standorte/city-links";
import ContactButton from "@/components/buttons/contact-button";
import { Factory, Truck, ShoppingCart } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-workflows-duisburg",
      preHeadline: "AI Workflows Duisburg",
      headline: "AI Workflows & Automatisierung in Duisburg",
      metaTitle: "AI Workflows Duisburg - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Duisburg. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Duisburg",
        "KI Automatisierung Duisburg",
        "Workflow Automatisierung Duisburg",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-duisburg",
      preHeadline: "n8n Automation Duisburg",
      headline: "n8n Automation in Duisburg - Workflows automatisieren",
      metaTitle: "n8n Automation Duisburg | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Duisburg. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Duisburg",
        "n8n Duisburg",
        "Workflow Automation Duisburg",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-duisburg",
      preHeadline: "n8n Duisburg",
      headline: "n8n Agentur in Duisburg",
      metaTitle: "n8n Duisburg - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Duisburg. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Duisburg und Umgebung.",
      keywords: [
        "n8n Duisburg",
        "n8n Agentur Duisburg",
        "n8n Beratung Duisburg",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-duisburg",
      preHeadline: "Automation Duisburg",
      headline: "Automation & Prozessoptimierung in Duisburg",
      metaTitle: "Automation Duisburg - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Duisburg. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Duisburg",
        "Prozessautomatisierung Duisburg",
        "Workflow Automation Duisburg",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-duisburg",
      preHeadline: "IT Dienstleister Duisburg",
      headline: "IT Dienstleister in Duisburg - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Duisburg - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Duisburg. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Duisburg.",
      keywords: [
        "IT Dienstleister Duisburg",
        "IT Service Duisburg",
        "Digitalisierung Duisburg",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-duisburg",
      preHeadline: "KI Beratung Duisburg",
      headline: "KI Beratung in Duisburg - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Duisburg - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Duisburg. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Duisburg",
        "KI Lösungen Duisburg",
        "Künstliche Intelligenz Duisburg",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Duisburg",
  slug: "duisburg",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Dinslaken",
    "Ratingen",
    "Kamp-Lintfort",
    "Voerde",
    "Wesel",
    "Rheinberg",
  ],
  crossReference: [
    { name: "Essen", slug: "essen" },
    { name: "Düsseldorf", slug: "duesseldorf" },
    { name: "Oberhausen", slug: "oberhausen" },
    { name: "Krefeld", slug: "krefeld" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Duisburg | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Ihr Partner für n8n-Workflows, KI-Automatisierung und Prozessoptimierung in Duisburg - von thyssenkrupp Steel Europe über duisport bis Klöckner & Co und Krohne Messtechnik.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI-Agentur Duisburg",
      "Workflow-Automatisierung Duisburg",
      "n8n Duisburg",
      "KI Automatisierung Duisburg",
      "Prozessoptimierung Duisburg",
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
          url: "/images/cities/duisburg.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch KI-Agentur Duisburg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/duisburg.jpg"],
    },
    alternates: {
      canonical: "/standorte/duisburg",
    },
  };
}

const duisburgFaqs = [
  {
    question: "thyssenkrupp baut auf 16.000 Stellen ab – wie helfen Workflows in der Restrukturierung?",
    answer:
      "Personalmanagement, Transfergesellschaften, Qualifizierungs-Tracking und Schulungs-Workflows sind in Spitzenzeiten kaum manuell zu stemmen. n8n verbindet SAP HCM, Lernplattformen und Behörden-Schnittstellen (Agentur für Arbeit, Transfer-KuG) zu einer durchgängigen Pipeline.",
  },
  {
    question: "CBAM kommt 2026 – kann n8n CO2-Grenzausgleich abbilden?",
    answer:
      "Ja. CBAM verlangt detaillierte CO2-Daten pro Importprodukt. n8n orchestriert die Datensammlung aus Lieferantenportalen, prüft Plausibilität, generiert die quartalsweisen CBAM-Reports und meldet an die DEHSt – inklusive Audit-Trail.",
  },
  {
    question: "Wir liefern an HKM oder TKS – können Werkstoffzeugnisse (EN 10204) automatisiert werden?",
    answer:
      "Ja, klassischer n8n-Use-Case. PDF-Werkstoffzeugnisse 3.1/3.2 werden per OCR und KI extrahiert, gegen Bestellung geprüft, in PLM/QM-System abgelegt und an den Kunden weitergeleitet. Materialrückverfolgbarkeit über Charge ist Standard.",
  },
  {
    question: "Duisport-Anbindung: lässt sich ATLAS/NCTS-Zoll mit n8n verbinden?",
    answer:
      "Ja. Zollanmeldungen, ATLAS-Ausfuhr, NCTS-Versandverfahren und Hafentelematik (DAKOSY, dbh) sind via n8n integrierbar. Wir bauen die Schnittstellen self-hosted, BSI-konform und auditfest – wichtig für Reedereien und Spediteure am Rhein.",
  },
  {
    question: "Wasserstoff-Hub: brauchen wir spezielle Workflows für H2-Herkunftsnachweise?",
    answer:
      "Ja. CertifHy, RED-II und nationale Wasserstoff-Strategie verlangen lückenlose Herkunftsnachweise. n8n verbindet Elektrolyseur-Daten, Stromzertifikate und Lieferdokumente – Pflicht für Stahl- und Chemieabnehmer in Duisburg.",
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
          imageSrc="/images/cities/duisburg.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Duisburg"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Duisburg –{" "}
                vom Stahlkocher zum{" "}
                <BackgroundHero.Highlight>grünen Hochofen</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            thyssenkrupp baut von 27.000 auf 16.000 Stellen ab und gleichzeitig Europas größte Direktreduktionsanlage. Duisport schlägt 60 Mio. Tonnen um. Wir automatisieren genau die Workflows, die ein Standort im Umbruch braucht – CBAM-Reporting, Werkstoffzeugnisse und Hafen-Telematik.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">Automatisierung für Duisburg besprechen</ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={506000}
              label="Einwohner"
              index={0}
            />
            <BackgroundHero.Stat
              value={60}
              suffix=" Mio."
              label="t Hafenumschlag duisport"
              index={1}
            />
            <BackgroundHero.Stat
              value={26822}
              label="thyssenkrupp-Steel-Beschäftigte"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 5. BoundlessImage — TKS Direktreduktion / duisport */}
      <ContentWrapper colorScheme="gray-light">
        <BoundlessImageCard imagePosition="right">
          <BoundlessImageCard.Image
            src="/images/cities/duisburg.jpg"
            alt="Direktreduktionsanlage und Hafen in Duisburg – Transformation"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>TKS-Direktreduktion & duisport – die Transformation in Beton</Typo.H2>
            <Typo.Paragraph>
              Auf dem TKS-Gelände entsteht Europas größte Direktreduktionsanlage für grünen Stahl. duisport baut den China-Hub und logport-Areale weiter aus. Beide Welten brauchen End-to-End-Workflows – Subventionsreporting, H2-Herkunftsnachweise, CBAM, Zollabwicklung und Werkstoff-Tracking. n8n verbindet diese Schnittstellen – ein Use-Case, den wir mehrfach gebaut haben.
            </Typo.Paragraph>
            <div className="mt-4">
              <Link href="/unser-prozess" className="text-primary-600 hover:underline font-semibold">
                Unser 6-Phasen-Prozess →
              </Link>
            </div>
          </BoundlessImageCard.Content>
        </BoundlessImageCard>
      </ContentWrapper>

      {/* 4. SimpleGrid cols=3 — Lösungs-Use-Cases */}
      <ContentWrapper>
        <Typo.H2>Wo n8n in Duisburg heute den Hebel ansetzt</Typo.H2>
        <Typo.Paragraph>
          Drei Cluster, drei sehr unterschiedliche Pain-Points – aber alle mit einem gemeinsamen Bedürfnis: Workflows, die Datenflüsse zwischen Spezialsystemen orchestrieren.
        </Typo.Paragraph>
        <SimpleGrid cols={3}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Factory className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Stahl & Schwerindustrie</Typo.H3>
            <Typo.Paragraph>
              Werkstoffzeugnisse EN 10204, CBAM-Reporting, IATF-16949-Audits, Lieferanten-Onboarding für H2-Stahl und Personalmanagement in der Restrukturierung. Anbindung an SAP, PLM, MES.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Truck className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Hafen & Logistik</Typo.H3>
            <Typo.Paragraph>
              ATLAS/NCTS-Zoll, DAKOSY/dbh-Hafentelematik, EU-Zollkodex, Track & Trace für Container und Bahn-Disposition aus China. duisport, DB Cargo, Reedereien in einer Pipeline.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <ShoppingCart className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Stahlhandel & Mittelstand</Typo.H3>
            <Typo.Paragraph>
              B2B-Beschaffung, XOM-/kloeckner.i-Anbindung, EDI-Workflows für Zerspaner und Schmieden, Werkstoffdaten-Pipelines und automatische Angebotskalkulation.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 3. ProsCons – Was war, was kommt */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Was Duisburg hinter sich lässt – und wo es jetzt steht</Typo.H2>
        <div className="mt-8">
          <ProsCons>
            <ProsCons.Cons>
              <ProsCons.Item
                title="thyssenkrupp Steel: Abbau von 27.000 auf 16.000 Stellen bis 2030"
                description="11.000 Arbeitsplätze direkt im Konzern, dazu Zulieferer und Dienstleister – die größte Stahl-Restrukturierung Deutschlands seit Jahrzehnten."
              />
              <ProsCons.Item
                title="HKM (Hüttenwerke Krupp Mannesmann) unter Verkaufsdruck"
                description="Salzgitter und TKS prüfen Ausstieg aus dem 3.000-Mitarbeiter-Werk in Hüttenheim – Zukunft der Hochöfen ungewiss."
              />
              <ProsCons.Item
                title="Klassische Stahlhandel-Margen unter Druck"
                description="Schmolz + Bickenbach (Swiss Steel) und Stahlumformer kämpfen mit Energiepreisen und Importkonkurrenz."
              />
              <ProsCons.Item
                title="Strukturschwache Stadtteile, hohe Arbeitslosigkeit"
                description="Duisburg hat eine der höchsten Arbeitslosenquoten Westdeutschlands – Sozial- und Verwaltungs-Workflows überlastet."
              />
            </ProsCons.Cons>
            <ProsCons.Pros>
              <ProsCons.Item
                title="Direktreduktionsanlage TKS – 2 Mrd. € für grünen Stahl"
                description="Europas größtes H2-Stahl-Projekt, IPCEI-gefördert – neue Lieferketten, neue Compliance, neue Workflows."
              />
              <ProsCons.Item
                title="duisport – Weltgrößter Binnenhafen, China-Endbahnhof"
                description="60 Mio. t Umschlag, drittgrößter Containerhafen Europas, 80 Züge/Woche aus China – Logistik 4.0 auf Hochtouren."
              />
              <ProsCons.Item
                title="Krohne Messtechnik & Klöckner & Co als digitale Anker"
                description="Krohne (Weltmarktführer Durchflussmessung, 2.000 HQ-Beschäftigte) und Klöckner mit XOM Materials und kloeckner.i Hub."
              />
              <ProsCons.Item
                title="Universität Duisburg-Essen + Fraunhofer IMS"
                description="Eine der größten Unis Deutschlands plus Mikroelektronik-Forschung – Drittmittel- und Forschungs-Workflows in industrieller Größe."
              />
            </ProsCons.Pros>
          </ProsCons>
        </div>
      </ContentWrapper>

      {/* 2. IntroBox — Pain-Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Strukturwandel im Stahl ist Dauerzustand
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was passiert mit den Prozessen, wenn 11.000 Stahl-Stellen wegfallen?
          </IntroBox.Headline>
          <IntroBox.Subline>
            Duisburg ist seit Jahrzehnten Synonym für Stahl – und steht heute mitten in der größten Restrukturierung der Konzerngeschichte. thyssenkrupp Steel schrumpft bis 2030 von 27.000 auf 16.000 Beschäftigte. HKM (Krupp-Mannesmann) und Schmolz + Bickenbach kämpfen ebenfalls mit Effizienzdruck. Parallel investiert TKS 2 Mrd. € in grünen Stahl, duisport rollt CBAM und ATLAS aus, Krohne und Klöckner & Co digitalisieren ihre Beschaffung. Jede dieser Säulen hat eigene Prozess-Pains.
          </IntroBox.Subline>
        </IntroBox>
      </ContentWrapper>

      {/* 7.5. Bonus — Duisburg in Zahlen */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Duisburg in Zahlen</Typo.H2>
        <SimpleGrid cols={4}>
          <KpiCard
            value={60}
            suffix=" Mio. t"
            subtitle="duisport-Umschlag p.a., Europas größter Binnenhafen"
          />
          <KpiCard
            value={27000}
            subtitle="thyssenkrupp Steel-Beschäftigte am Standort"
          />
          <KpiCard
            value={30}
            suffix=" %"
            subtitle="Anteil Duisburgs am China-Bahn-Verkehr DE"
          />
          <KpiCard
            value={50000}
            subtitle="Logistik-Beschäftigte in der Region"
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
        <Typo.H2>Häufige Fragen aus Duisburg</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={duisburgFaqs} />
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
