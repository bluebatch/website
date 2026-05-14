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
import { ShoppingBag, Zap, Newspaper, ShieldCheck, Briefcase, Building2 } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-workflows-duesseldorf",
      preHeadline: "AI Workflows Düsseldorf",
      headline: "AI Workflows & Automatisierung in Düsseldorf",
      metaTitle: "AI Workflows Düsseldorf - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Düsseldorf. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Düsseldorf",
        "KI Automatisierung Düsseldorf",
        "Workflow Automatisierung Düsseldorf",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-duesseldorf",
      preHeadline: "n8n Automation Düsseldorf",
      headline: "n8n Automation in Düsseldorf - Workflows automatisieren",
      metaTitle: "n8n Automation Düsseldorf | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Düsseldorf. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Düsseldorf",
        "n8n Düsseldorf",
        "Workflow Automation Düsseldorf",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-duesseldorf",
      preHeadline: "n8n Düsseldorf",
      headline: "n8n Agentur in Düsseldorf",
      metaTitle: "n8n Düsseldorf - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Düsseldorf. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Düsseldorf und Umgebung.",
      keywords: [
        "n8n Düsseldorf",
        "n8n Agentur Düsseldorf",
        "n8n Beratung Düsseldorf",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-duesseldorf",
      preHeadline: "Automation Düsseldorf",
      headline: "Automation & Prozessoptimierung in Düsseldorf",
      metaTitle: "Automation Düsseldorf - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Düsseldorf. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Düsseldorf",
        "Prozessautomatisierung Düsseldorf",
        "Workflow Automation Düsseldorf",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-duesseldorf",
      preHeadline: "IT Dienstleister Düsseldorf",
      headline: "IT Dienstleister in Düsseldorf - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Düsseldorf - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Düsseldorf. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Düsseldorf.",
      keywords: [
        "IT Dienstleister Düsseldorf",
        "IT Service Düsseldorf",
        "Digitalisierung Düsseldorf",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-duesseldorf",
      preHeadline: "KI Beratung Düsseldorf",
      headline: "KI Beratung in Düsseldorf - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Düsseldorf - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Düsseldorf. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Düsseldorf",
        "KI Lösungen Düsseldorf",
        "Künstliche Intelligenz Düsseldorf",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Düsseldorf",
  slug: "duesseldorf",
  bundesland: "Nordrhein-Westfalen",
  publish: true,
  nearbySmall: [
    "Meerbusch",
    "Ratingen",
    "Hilden",
    "Langenfeld",
    "Erkrath",
    "Dormagen",
    "Grevenbroich",
    "Monheim am Rhein",
    "Mettmann",
    "Haan",
    "Velbert",
    "Kaarst",
  ],
  crossReference: [
    { name: "Köln", slug: "koeln" },
    { name: "Essen", slug: "essen" },
    { name: "Duisburg", slug: "duisburg" },
    { name: "Wuppertal", slug: "wuppertal" },
    { name: "Krefeld", slug: "krefeld" },
    { name: "Mönchengladbach", slug: "moenchengladbach" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Düsseldorf | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Ihr Partner für n8n-Workflows, KI-Automatisierung und Prozessoptimierung in Düsseldorf - von Henkel und E.ON über Metro und Vodafone bis Rheinmetall und der Messe Düsseldorf.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI-Agentur Düsseldorf",
      "Workflow-Automatisierung Düsseldorf",
      "n8n Düsseldorf",
      "KI Automatisierung Düsseldorf",
      "Prozessoptimierung Düsseldorf",
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
          url: "/images/cities/duesseldorf.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch KI-Agentur Düsseldorf",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/duesseldorf.jpg"],
    },
    alternates: {
      canonical: "/standorte/duesseldorf",
    },
  };
}

const duesseldorfFaqs = [
  {
    question: "Henkel, L'Oréal, Beiersdorf - wie deckt n8n Multi-Country-Compliance ab?",
    answer:
      "Mehrsprachen-Etikettierung, REACH/CLP-Konformität, Inhaltsstoff-Dokumentation und länderspezifische Werbeauflagen lassen sich mit n8n und KI-gestützter Klassifikation orchestrieren. Wir kennen die Strukturen rund um SAP S/4HANA, BrandMaker und PIM-Systeme typischer Düsseldorfer Konsumgüter-Konzerne.",
  },
  {
    question: "Wie hilft n8n bei E.ON-, Uniper- und Energie-Marktkommunikation?",
    answer:
      "Wir bauen Pipelines für EDIFACT, INVOIC, MSCONS und APERAK, Smart-Meter-Daten (MaKo, MaBiS), BNetzA-Reporting und CSRD-Datenaggregation. Self-hosted im hauseigenen Rechenzentrum, mit vollem Audit-Trail.",
  },
  {
    question: "Rheinmetall wächst hyperdynamisch - wie skaliert n8n mit?",
    answer:
      "Personalaufbau, Lieferanten-Onboarding mit BAFA-/Dual-Use-Prüfung, Endverbleibserklärungen, KMU-Qualifizierung und Geheimschutz-Workflows sind klassische n8n-Felder. Wir docken an SAP, Salesforce und das Bundesamt für Wirtschaft und Ausfuhrkontrolle an.",
  },
  {
    question: "Können Messe Düsseldorf-Workflows (Medica, drupa, K) automatisiert werden?",
    answer:
      "Ja. Standbuchung, Service-Bestellungen, Zollabwicklung internationaler Exponate, Akkreditierung und Hotelkooperationen werden End-to-End orchestriert. Auch Multi-Sprachen-Kommunikation mit zehntausenden Ausstellern ist Teil unseres Standard-Setups.",
  },
  {
    question: "Wir sind eine Düsseldorfer Werbe- oder Beratungsagentur - passt n8n?",
    answer:
      "Sehr gut. Time Tracking, Projektabrechnung, Mediabuchungs-Reportings, Provisionsmodelle und Kundenkommunikation sind klassische Bottlenecks. Wir integrieren mit Microsoft 365, HubSpot, DATEV und gängigen Mediadaten-Plattformen.",
  },
  {
    question: "Welche Phasen erwarten uns bei einer Implementierung?",
    answer:
      "Wir folgen einem strukturierten 6-Phasen-Ansatz von der Prozess-Analyse über Pilot-Workflows bis zum operativen Betrieb. Details und konkrete Beispiele auf unserer Seite Unser Prozess.",
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
          imageSrc="/images/cities/duesseldorf.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Düsseldorf"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Düsseldorf -{" "}
                DAX-Dichte, Mode und{" "}
                <BackgroundHero.Highlight>Messe-Hub am Rhein</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Henkel, E.ON, Uniper, Rheinmetall, Vodafone, Metro, Trivago, Messe
            Düsseldorf - die NRW-Landeshauptstadt vereint Konzern-Hauptsitze,
            Werbe-Cluster und Modemetropole auf engstem Raum. Wir bauen
            n8n-Workflows, die Multi-Country-Compliance, Energie-Marktkommunikation
            und Eventlogistik automatisieren.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">
              Düsseldorfer Workflow besprechen
            </ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={631000}
              label="Einwohner Landeshauptstadt"
              index={0}
            />
            <BackgroundHero.Stat
              value={62.7}
              suffix=" Mrd. €"
              label="BIP der Stadt (2023)"
              index={1}
            />
            <BackgroundHero.Stat
              value={93600}
              suffix=" €"
              label="BIP pro Kopf"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 3. SimpleGrid cols=2 — Schlüsselbranchen */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Düsseldorfer Cluster, die Automatisierung erzwingen</Typo.H2>
        <Typo.Paragraph>
          Henkel steuert anders als E.ON, Rheinmetall anders als die Messe.
          Wir bauen für jeden Cluster die passenden n8n-Bausteine - von
          REACH-Konformität bis Eventlogistik.
        </Typo.Paragraph>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <ShoppingBag className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Henkel, L&apos;Oréal, Beiersdorf-Region - Konsumgüter &amp; Beauty</Typo.H3>
            <Typo.Paragraph>
              Persil, Schwarzkopf, Loctite, Pritt: 21,6 Mrd. EUR Henkel-Umsatz
              2024, 8.000 Beschäftigte am Standort. Mehrsprachen-Etikettierung,
              REACH/CLP-Compliance, PIM-Datenflüsse und Multi-Country-Marketing
              auf SAP S/4HANA und BrandMaker werden mit n8n orchestriert.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Zap className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>E.ON, Uniper, Westenergie - Energie-HQ Europas</Typo.H3>
            <Typo.Paragraph>
              E.ON SE mit 75.000 Konzernbeschäftigten, Uniper mit 69,6 Mrd. EUR
              Umsatz. Wir bauen EDIFACT-/MSCONS-/APERAK-Pipelines, MaKo- und
              MaBiS-Workflows, Smart-Meter-Datenmanagement und BNetzA-Reporting -
              auditfest und im eigenen Rechenzentrum.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Newspaper className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Vodafone, RTL, Funke - Telekommunikation &amp; Medien</Typo.H3>
            <Typo.Paragraph>
              Vodafone Campus mit 5.000 Beschäftigten, RTL Deutschland, Funke
              Mediengruppe. Vertrags- und Tarifmanagement, Provisionsabrechnung
              für Vertriebspartner, KI-gestützte Service-Workflows und
              Mediadaten-Reporting werden auf eigener n8n-Plattform abgebildet.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <ShieldCheck className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Rheinmetall - Rüstungs-Hyperwachstum</Typo.H3>
            <Typo.Paragraph>
              33.000 Konzernbeschäftigte, Aktienkurs +1.000 % seit 2022.
              Personalaufbau, BAFA-/Dual-Use-Prüfungen, Endverbleibserklärungen,
              Lieferanten-Qualifizierung und KMU-Onboarding in der
              Rüstungs-Wertschöpfungskette sind klassische n8n-Workflows.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Building2 className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Messe Düsseldorf - Medica, drupa, K, Boot, ProWein</Typo.H3>
            <Typo.Paragraph>
              Eine der weltweit führenden Messegesellschaften. Standbuchung,
              Service-Bestellungen, Zollabwicklung internationaler Exponate,
              Akkreditierung und Hotelkooperationen werden End-to-End in
              n8n-Pipelines abgebildet - inklusive Multi-Sprachen-Kommunikation.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Briefcase className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>BCG, McKinsey, Werbe-Hub - Beratung &amp; Agenturen</Typo.H3>
            <Typo.Paragraph>
              Düsseldorf hat die höchste Agenturdichte Deutschlands. Time
              Tracking, Projektabrechnung, Mediabuchungs-Reportings,
              Provisionsmodelle und Kundenkommunikation werden mit n8n,
              Microsoft 365, HubSpot und DATEV verzahnt - ohne Vendor Lock-in.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 5. KpiCard Row */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Düsseldorf in Zahlen</Typo.H2>
        <SimpleGrid cols={4}>
          <KpiCard
            value={21.6}
            suffix=" Mrd. €"
            subtitle="Henkel-Umsatz 2024"
          />
          <KpiCard
            value={75000}
            subtitle="E.ON-Konzernbeschäftigte"
          />
          <KpiCard
            value={33000}
            subtitle="Rheinmetall-Beschäftigte weltweit"
          />
          <KpiCard
            value={9300}
            subtitle="UKD-Universitätsklinikum"
          />
        </SimpleGrid>
      </ContentWrapper>

      {/* 4. BoundlessImageCard */}
      <ContentWrapper>
        <BoundlessImageCard imagePosition="right">
          <BoundlessImageCard.Image
            src="/images/cities/logistics-hub.jpg"
            alt="Düsseldorfer Konzern-Cluster - Multi-Country-Compliance und Eventlogistik mit n8n"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>Henkel in 75 Ländern, Rheinmetall im Hyperwachstum</Typo.H2>
            <Typo.Paragraph>
              Henkel verwaltet Marken in über 75 Ländern, E.ON betreut 8 Mio.
              Kunden in Deutschland, Rheinmetall hat seit 2022 die Belegschaft
              massiv aufgestockt. Diese Komplexität ist mit Excel und PDFs
              nicht mehr zu beherrschen. Wir helfen Düsseldorfer Konzernen
              und ihrem Mittelstand-Ökosystem, schlanke n8n-Workflows zu
              etablieren, die mit dem Tempo wachsen.
            </Typo.Paragraph>
            <div className="mt-4">
              <Link href="/unser-prozess" className="text-primary-600 hover:underline font-semibold">
                Unser 6-Phasen-Prozess →
              </Link>
            </div>
          </BoundlessImageCard.Content>
        </BoundlessImageCard>
      </ContentWrapper>

      {/* 2. IntroBox */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <Typo.H2>Warum Düsseldorf eine spezialisierte KI-Agentur braucht</Typo.H2>
          <Typo.Paragraph>
            Düsseldorf ist mit 93.600 EUR BIP pro Kopf einer der wohlhabendsten
            Wirtschaftsstandorte Europas und gleichzeitig Heimat von DAX-Konzernen
            mit globaler Reichweite. Henkel agiert in über 75 Ländern, E.ON
            verarbeitet Millionen Marktnachrichten pro Tag, Rheinmetall ist
            durch Bundeswehr-Sondervermögen und EU-Aufrüstung im Hyperwachstum.
            Hinzu kommen die Messe Düsseldorf mit Medica und drupa, die
            Mode-Hauptstadt-Funktion und die höchste Werbeagenturdichte
            Deutschlands. Automatisierung ist hier kein nice-to-have - sie
            entscheidet, ob Konzerne, Mittelstand und Kreativwirtschaft
            mithalten.
          </Typo.Paragraph>
        </IntroBox>
      </ContentWrapper>

      {/* 7.5. Bonus — Industrie-Erbe vs. Werbe-/Mode-Hauptstadt */}
      <ContentWrapper>
        <Typo.H2>Düsseldorf zwischen Schwerindustrie und Kreativwirtschaft</Typo.H2>
        <Typo.Paragraph>
          Mannesmann, Henkel, Rheinmetall auf der einen Seite, größte
          Modemesse Europas und Hunderte Werbeagenturen auf der anderen: kaum
          eine deutsche Stadt vereint so gegensätzliche Workflow-Welten.
        </Typo.Paragraph>
        <div className="mt-8">
          <ProsCons>
            <ProsCons.Pros>
              <ProsCons.Item
                title="Industrie-Erbe mit Tiefe"
                description="Henkel-Weltzentrale, Rheinmetall-DAX-Konzern, Vallourec (Mannesmann-Nachfolge): SAP-Backbone, ISO-9001-Audits, Exportkontrolle. Wir kennen die Werks-IT von Reisholz bis Rath."
              />
              <ProsCons.Item
                title="Stahl- und Röhren-Tradition"
                description="Thyssenkrupp Schulte, Salzgitter Mannesmann Stahlhandel, Klöckner & Co. - Großhandelsplattformen mit XRechnung-Pflicht und EDI-Stammdaten."
              />
            </ProsCons.Pros>
            <ProsCons.Cons>
              <ProsCons.Item
                title="Werbe- und Modemetropole"
                description="Größte Modemesse Europas mit Igedo/Gallery, dazu BBDO, GREY, Publicis und Hunderte Agenturen. Workflows leben in Figma, Frame.io, Asana statt SAP - andere Tool-Welt, gleiche Effizienzfrage."
              />
              <ProsCons.Item
                title="Werbeagentur-Cluster mit hohen Margen"
                description="Pitches, Briefings, Kreativ-Approvals, DSGVO-konformes Influencer-Tracking. Hier brauchen wir Connectoren zu HubSpot, Adobe, ContentSquare, nicht zu MES und PLM."
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
        <Typo.H2>Häufige Fragen aus Düsseldorf</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={duesseldorfFaqs} />
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
