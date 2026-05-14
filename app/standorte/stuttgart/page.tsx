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
import { FaqContainer } from "@/components/ui/faqs";
import { CityLinksFromMeta } from "@/components/standorte/city-links";
import ContactButton from "@/components/buttons/contact-button";
import { Car, Cog, Landmark, FlaskConical, Cpu, Truck } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-agentur-stuttgart",
  rewrites: [
    {
      source: "/ai-workflows-stuttgart",
      preHeadline: "AI Workflows Stuttgart",
      headline: "AI Workflows & Automatisierung in Stuttgart",
      metaTitle: "AI Workflows Stuttgart - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Stuttgart. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: ["AI Workflows Stuttgart", "KI Automatisierung Stuttgart", "Workflow Automatisierung Stuttgart", "Bluebatch"],
    },
    {
      source: "/n8n-automation-stuttgart",
      preHeadline: "n8n Automation Stuttgart",
      headline: "n8n Automation in Stuttgart - Workflows automatisieren",
      metaTitle: "n8n Automation Stuttgart | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Stuttgart. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: ["n8n Automation Stuttgart", "n8n Stuttgart", "Workflow Automation Stuttgart", "Bluebatch"],
    },
    {
      source: "/n8n-stuttgart",
      preHeadline: "n8n Stuttgart",
      headline: "n8n Agentur in Stuttgart",
      metaTitle: "n8n Stuttgart - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Stuttgart. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Stuttgart und Umgebung.",
      keywords: ["n8n Stuttgart", "n8n Agentur Stuttgart", "n8n Beratung Stuttgart", "Bluebatch"],
    },
    {
      source: "/automation-stuttgart",
      preHeadline: "Automation Stuttgart",
      headline: "Automation & Prozessoptimierung in Stuttgart",
      metaTitle: "Automation Stuttgart - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Stuttgart. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: ["Automation Stuttgart", "Prozessautomatisierung Stuttgart", "Workflow Automation Stuttgart", "Bluebatch"],
    },
    {
      source: "/it-dienstleister-stuttgart",
      preHeadline: "IT Dienstleister Stuttgart",
      headline: "IT Dienstleister in Stuttgart - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Stuttgart - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Stuttgart. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Stuttgart.",
      keywords: ["IT Dienstleister Stuttgart", "IT Service Stuttgart", "Digitalisierung Stuttgart", "Bluebatch"],
    },
    {
      source: "/ki-beratung-stuttgart",
      preHeadline: "KI Beratung Stuttgart",
      headline: "KI Beratung in Stuttgart - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Stuttgart - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Stuttgart. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: ["KI Beratung Stuttgart", "KI Lösungen Stuttgart", "Künstliche Intelligenz Stuttgart", "Bluebatch"],
    },
    { source: "/ki-agentur-stuttgart" },
  ],
};

export const metaCustom: CityMeta = {
  name: "Stuttgart",
  slug: "stuttgart",
  bundesland: "Baden-Württemberg",
  publish: true,
  nearbySmall: ["Waiblingen", "Fellbach", "Leonberg", "Filderstadt", "Backnang", "Schorndorf", "Kornwestheim"],
  crossReference: [
    { name: "Karlsruhe", slug: "karlsruhe" },
    { name: "Pforzheim", slug: "pforzheim" },
    { name: "Heilbronn", slug: "heilbronn" },
    { name: "Reutlingen", slug: "reutlingen" },
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
    overrides?.metaTitle ?? "KI-Agentur in Stuttgart | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Workflow-Automatisierung & KI in Stuttgart: für Mercedes-Benz-, Porsche-, Bosch-Zulieferer, Maschinenbau und schwäbischen Mittelstand. Self-hosted n8n, DSGVO-konform.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Stuttgart",
      "n8n Stuttgart",
      "Automotive Automatisierung Stuttgart",
      "Maschinenbau KI Schwaben",
      "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [{ url: "/images/cities/stuttgart.jpg", width: 1200, height: 630, alt: "Stuttgart Automotive-Region" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/cities/stuttgart.jpg"] },
    alternates: { canonical: "/ki-agentur-stuttgart" },
  };
}

const stuttgartFaqs = [
  {
    question: "Habt ihr Erfahrung mit Tier-1-Zulieferern wie Mahle oder Eberspächer?",
    answer:
      "Ja. Wir kennen die typische Stuttgarter Lieferanten-IT: SAP S/4HANA als ERP-Backbone, JAGGAER und Pool4Tool für Beschaffung, Catena-X für die Lieferketten-Daten. Wir bauen n8n-Workflows, die zwischen diesen Systemen vermitteln – inklusive der EDI/VDA-Standards (4905, 4906, 4913).",
  },
  {
    question: "Wir entwickeln für Mercedes oder Porsche – wie passt n8n zur SDV-Strategie?",
    answer:
      "n8n koordiniert die Entwicklungs-Pipelines außerhalb von MBOS oder VW.OS: Jira/Confluence, Polarion, ALM-Tools, GitLab, Mendix, Test-Bench-Daten. Engineering-Stunden in CCB-Boards, Hardware-Bestellungen und Software-Freigaben werden automatisiert dokumentiert – ein typisches SOX/IATF-16949-Audit-Thema.",
  },
  {
    question: "Trumpf, Festo, Stihl – passt KI in den klassischen Maschinenbau?",
    answer:
      "Sehr gut. Predictive Maintenance, automatisierte Angebotskalkulation (CPQ), Ersatzteil-Identifikation per Vision-AI und Service-Disposition sind Stuttgarter Standard-Use-Cases. Wir docken an SAP Service Cloud, Salesforce und herstellereigene IoT-Plattformen an.",
  },
  {
    question: "Wir sind Allianz/LBBW/W&W – welche Compliance-Themen deckt n8n ab?",
    answer:
      "BaFin-Meldungen, MaRisk-Reports, IDD-Vermittler-Tracking, KYC-Onboarding, DORA-Resilienztests und VAIT-Audit-Trails. Alles versioniert, auditfest, im hauseigenen Rechenzentrum.",
  },
  {
    question: "Was ist mit Stuttgart-21-Bauverträgen oder Genehmigungs-Workflows?",
    answer:
      "Großprojekte erzeugen Mengen an Schriftverkehr mit DB, Stadt, Regierungspräsidium. Wir bauen Workflows, die Bauanträge, Nachträge, VOB-Vergaben und Subunternehmer-Bürgschaften strukturiert verwalten – inkl. Plandiagrammen und SAP RE-FX-Anbindung.",
  },
  {
    question: "Welche Implementierungs-Phasen erwartet uns?",
    answer:
      "Wir folgen einem strukturierten 6-Phasen-Ansatz von der Prozess-Analyse bis zum operativen Betrieb. Details und Beispiele auf unserer Seite Unser Prozess.",
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
          imageSrc="/images/cities/stuttgart.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Stuttgart"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Stuttgart –{" "}
                <BackgroundHero.Highlight>
                  Automotive, Maschinenbau und Mittelstand
                </BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Mercedes-Benz, Porsche, Bosch, Trumpf, Festo, Stihl, Mahle – kaum
            ein Quadratkilometer Deutschlands bündelt mehr industrielle Kraft.
            Wir bauen Workflows, die Engineering-Pipelines, Lieferketten und
            Compliance-Prozesse für DAX-Konzerne und schwäbischen Mittelstand
            automatisieren.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">
              Automotive-Workflow besprechen
            </ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={44000}
              label="Mercedes-Benz Beschäftigte am Hauptstandort"
              index={0}
            />
            <BackgroundHero.Stat
              value={50}
              suffix=" %"
              label="Industrie-Exportquote der Region"
              index={1}
            />
            <BackgroundHero.Stat
              value={2.8}
              suffix=" Mio."
              label="Einwohner Metropolregion Stuttgart"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 2. IntroBox */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <Typo.H2>Warum Stuttgart eine spezialisierte KI-Agentur braucht</Typo.H2>
          <Typo.Paragraph>
            Drei Verbrenner-Zentralen, fünf Hidden-Champion-Familien und ein
            Mittelstand, der weiß, wie man Werkzeugmaschinen baut: Stuttgart
            ist die teuerste Tariflohn-Region Deutschlands – und gleichzeitig
            die unter dem stärksten Transformationsdruck. Mercedes, Porsche
            und Bosch haben Tausende Stellen gestrichen, die Margen sinken,
            während Software-Defined-Vehicle und E-Mobilität neue Plattformen
            erzwingen. Automatisierung ist hier kein Buzzword, sondern operative
            Pflicht.
          </Typo.Paragraph>
        </IntroBox>
      </ContentWrapper>

      {/* 3. SimpleGrid cols=2 — Schlüsselbranchen mit Großarbeitgebern */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Schwäbische Cluster, die Automatisierung erzwingen</Typo.H2>
        <Typo.Paragraph>
          Jede Säule der Stuttgarter Wirtschaft hat eigene Workflows – Bosch
          steuert anders als Trumpf, Allianz anders als die Stadtverwaltung.
          Wir bauen für jeden Cluster die passenden n8n-Bausteine.
        </Typo.Paragraph>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Car className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Mercedes-Benz, Porsche, Bosch – Automotive HQ</Typo.H3>
            <Typo.Paragraph>
              Untertürkheim, Sindelfingen, Zuffenhausen, Gerlingen: SDV-Roadmaps,
              CCB-Boards, Lieferanten-Onboarding nach IATF-16949, EDI/VDA-Belege
              und Catena-X-Konnektoren – wir orchestrieren Prozesse, die SAP
              und MBOS allein nicht verbinden.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Cog className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Trumpf, Festo, Stihl – Maschinenbau & Hidden Champions</Typo.H3>
            <Typo.Paragraph>
              Familienunternehmen mit Weltmarktstellung. Wir automatisieren
              CPQ-Konfigurationen, After-Sales-Disposition, Predictive
              Maintenance über IoT-Daten und Service-Tickets in SAP Service
              Cloud oder Salesforce.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Truck className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Mahle, Mann+Hummel, Eberspächer – Tier-1-Zulieferer</Typo.H3>
            <Typo.Paragraph>
              Verbrenner-Auslauf zwingt zur Diversifikation: Batteriethermik,
              Wärmemanagement, Leistungselektronik. Wir bauen Workflows für
              Vorseriendokumentation, APQP-Phasen und kundenseitige
              EDI-Anbindungen.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Landmark className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Allianz, LBBW, W&W – Versicherungs- und Bankenplatz</Typo.H3>
            <Typo.Paragraph>
              Allianz Lebensversicherung mit 6.000 Mitarbeitern, LBBW mit
              10.000, dazu Wüstenrot &amp; Württembergische und Stuttgarter
              Versicherungsgruppe. KYC, IDD-Vermittler-Tracking, BaFin- und
              VAIT-Meldungen werden auditfest abgebildet.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <FlaskConical className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Universität Stuttgart, Fraunhofer, DLR – Forschungs-Ökosystem</Typo.H3>
            <Typo.Paragraph>
              Drittmittelprojekte, BMBF/EU-Förderanträge, Patentverwaltung
              und Spin-off-Begleitung. Workflows, die Forschungsgruppen
              entlasten und Transfer in den Mittelstand beschleunigen.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Cpu className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>IBM Ehningen, HPE, Software-Mittelstand</Typo.H3>
            <Typo.Paragraph>
              IBM Deutschlandzentrale, Hewlett Packard Enterprise und Hunderte
              IT-Mittelständler. Wir verbinden Watsonx-, GreenLake- und
              Eigen-Stacks mit ERP, CRM und Ticketing – ohne Vendor Lock-in.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 4. BoundlessImageCard — Automotive Transformation */}
      <ContentWrapper>
        <BoundlessImageCard imagePosition="left">
          <BoundlessImageCard.Image
            src="/images/process-automation.jpg"
            alt="Stuttgart Automotive-Transformation – n8n-Workflows für SDV und E-Mobilität"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>40 Mrd. EUR Porsche-Umsatz, sinkende Margen – wer zieht mit?</Typo.H2>
            <Typo.Paragraph>
              Porsche meldet 2024 Rekordumsätze von 40,1 Mrd. EUR und 5,6 Mrd. EUR
              operativen Gewinn, aber sinkende Margen durch den Umstieg auf
              E-Mobilität. Mercedes-Strategie 2030, Bosch-Stellenabbau,
              Trumpf-Internationalisierung: jeder Konzern überträgt
              Effizienzdruck an seine Lieferkette. Wir helfen Tier-2- und
              Tier-3-Zulieferern, mit schlanken n8n-Workflows den geforderten
              Tempo-Sprung zu schaffen.
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
        <Typo.H2>Stuttgart in Zahlen</Typo.H2>
        <SimpleGrid cols={4}>
          <KpiCard
            value={460000}
            subtitle="Sozialversicherungspflichtig Beschäftigte"
          />
          <KpiCard
            value={410000}
            subtitle="Bosch-Beschäftigte weltweit"
          />
          <KpiCard
            value={166100}
            subtitle="Mercedes-Benz-Beschäftigte weltweit"
          />
          <KpiCard
            value={10000}
            subtitle="LBBW-Beschäftigte"
          />
        </SimpleGrid>
      </ContentWrapper>

      {/* 6. FAQ */}
      <ContentWrapper bodyWidth="small">
        <Typo.H2>Häufige Fragen aus Stuttgart</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={stuttgartFaqs} />
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>

      {/* 8. City Links */}
      <ContentWrapper>
        <CityLinksFromMeta
          crossReference={metaCustom.crossReference}
          nearbySmall={metaCustom.nearbySmall}
        />
      </ContentWrapper>
    </>
  );
}
