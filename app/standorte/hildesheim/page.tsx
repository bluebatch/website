import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentWrapper from "@/components/layout/content-wrapper";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnCallToAction,
  Hero2ColumnImage,
} from "@/components/heroes/hero-2-column";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import Typo from "@/components/ui/typo";
import IntroBox from "@/components/ui/intro-box";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import NumberedList from "@/components/ui/numbered-list";
import StatsList from "@/components/ui/stats-list";
import { FaqContainer } from "@/components/ui/faqs";
import { CityLinksFromMeta } from "@/components/standorte/city-links";
import ContactButton from "@/components/buttons/contact-button";
import { Battery, Sprout, Car, GraduationCap } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-workflows-hildesheim",
      preHeadline: "AI Workflows Hildesheim",
      headline: "AI Workflows & Automatisierung in Hildesheim",
      metaTitle: "AI Workflows Hildesheim - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Hildesheim. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Hildesheim",
        "KI Automatisierung Hildesheim",
        "Workflow Automatisierung Hildesheim",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-hildesheim",
      preHeadline: "n8n Automation Hildesheim",
      headline: "n8n Automation in Hildesheim - Workflows automatisieren",
      metaTitle: "n8n Automation Hildesheim | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Hildesheim. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Hildesheim",
        "n8n Hildesheim",
        "Workflow Automation Hildesheim",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-hildesheim",
      preHeadline: "n8n Hildesheim",
      headline: "n8n Agentur in Hildesheim",
      metaTitle: "n8n Hildesheim - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Hildesheim. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Hildesheim und Umgebung.",
      keywords: [
        "n8n Hildesheim",
        "n8n Agentur Hildesheim",
        "n8n Beratung Hildesheim",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-hildesheim",
      preHeadline: "Automation Hildesheim",
      headline: "Automation & Prozessoptimierung in Hildesheim",
      metaTitle: "Automation Hildesheim - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Hildesheim. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Hildesheim",
        "Prozessautomatisierung Hildesheim",
        "Workflow Automation Hildesheim",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-hildesheim",
      preHeadline: "IT Dienstleister Hildesheim",
      headline: "IT Dienstleister in Hildesheim - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Hildesheim - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Hildesheim. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Hildesheim.",
      keywords: [
        "IT Dienstleister Hildesheim",
        "IT Service Hildesheim",
        "Digitalisierung Hildesheim",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-hildesheim",
      preHeadline: "KI Beratung Hildesheim",
      headline: "KI Beratung in Hildesheim - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Hildesheim - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Hildesheim. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Hildesheim",
        "KI Lösungen Hildesheim",
        "Künstliche Intelligenz Hildesheim",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Hildesheim",
  slug: "hildesheim",
  bundesland: "Niedersachsen",
  publish: false,
  nearbySmall: [
    "Peine",
    "Sarstedt",
    "Alfeld",
    "Bad Salzdetfurth",
  ],
  crossReference: [
    { name: "Hannover", slug: "hannover" },
    { name: "Braunschweig", slug: "braunschweig" },
    { name: "Salzgitter", slug: "salzgitter" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Hildesheim | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Workflows für Hildesheimer Industrie und Forschung: E-Mobility-Pipelines für Bosch, Sortenzulassung für KWS Saat, IATF-Compliance für VW-Zulieferung und Drittmittel-Workflows für Uni Hildesheim.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Hildesheim",
      "n8n Hildesheim",
      "Bosch E-Mobility",
      "KWS Saat Sortenzulassung",
      "VW Zulieferer",
      "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [{ url: "/images/cities/hildesheim.jpg", width: 1200, height: 630, alt: "Hildesheim - Bosch, KWS Saat und VW-Zulieferer-Achse" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/cities/hildesheim.jpg"] },
    alternates: { canonical: "/standorte/hildesheim" },
  };
}

const hildesheimFaqs = [
  {
    question: "Bosch-Zulieferer: wie hilft n8n bei E-Mobility-Transformation?",
    answer:
      "Lieferanten-Onboarding für neue Brennstoffzellen-/E-Mobility-Komponenten, IATF-Audits und PPAP-Pakete in n8n-Pipelines. EDI-Anbindung an Covisint und Bosch-Lieferantenportale automatisiert.",
  },
  {
    question: "KWS-Saat-Umfeld: kann n8n Sortenzulassung abbilden?",
    answer:
      "Ja. Sortenzulassungs-Anträge (BSA), GVO-Compliance, Saatgut-Zertifizierung und FAO-konforme Drittmarkt-Exportworkflows in n8n-Pipelines. Anbindung an SAP und Pflanzenschutz-Datenbanken.",
  },
  {
    question: "VW-Zulieferer: was bringt JIS-/JIT-Automatisierung?",
    answer:
      "JIS-/JIT-Lieferpipelines, EDI-Anbindung an Covisint und OPS-AT, IATF-16949-Audits und PPAP für VW-Zulieferung. Reduziert Stockouts und manuelle Bestell-Bearbeitung um 60-80 %.",
  },
  {
    question: "Uni Hildesheim oder HAWK: wie skaliert Drittmittel-Reporting?",
    answer:
      "DFG-, BMBF- und EU-Förderprojekte mit Zeiterfassung, Verwendungsnachweis und Quartalsreports. Anbindung an HISinOne, SAP CO und easy-Online - spart spürbar Verwaltungsoverhead.",
  },
  {
    question: "Wir sind Hildesheimer Mittelstand: wo lohnt sich KI zuerst?",
    answer:
      "Bei Angebotskalkulation (CPQ), bei Eingangsrechnungs-Verarbeitung und bei Lieferanten-Sanktionslisten-Prüfung. Drei klassische KMU-Pain-Points mit klarem ROI in 4-8 Wochen.",
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

      {/* 1. Hero2Column mit Image (statt BackgroundHero — Varianz!) */}
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>
              {overrides?.preHeadline ?? "Standort Hildesheim - Industrie- und Domstadt"}
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              {overrides?.headline ?? "KI-Agentur in Hildesheim - für Bosch E-Mobility, KWS Saat und VW-Zulieferung"}
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Bosch Hildesheim transformiert sich zur E-Mobility-Achse, KWS Saat ist Welt-Marktführer für Zuckerrüben-Saatgut und die VW-Zulieferer-Industrie ist Region-prägend. Wir bauen Workflows für Bosch-Lieferanten-Pipelines, IATF-Compliance und Saatgut-Forschung.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Beratung anfragen
              </ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/cities/hildesheim.jpg"
              alt="Hildesheim - Bosch, KWS Saat und VW-Zulieferer-Achse"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 5. StatsList horizontal */}
      <ContentWrapper colorScheme="primary">
        <StatsList
          cols={4}
          stats={[
            { value: 104000, label: "Einwohner Hildesheim" },
            { value: 4500, suffix: "+", label: "Bosch-Beschäftigte Hildesheim" },
            { value: 5700, suffix: "+", label: "KWS-Saat-Mitarbeiter weltweit" },
            { value: 2, label: "UNESCO-Welterbe-Stätten" },
          ]}
        />
      </ContentWrapper>

      {/* 4. SimpleGrid cols=2 - 4 Specialty-Use-Cases */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Workflow-Bausteine für Hildesheimer Industrie und Forschung</Typo.H2>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Battery className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Bosch-E-Mobility-Lieferanten-Pipelines</Typo.H3>
            <Typo.Paragraph>
              Lieferanten-Onboarding für E-Mobility- und Brennstoffzellen-Komponenten, IATF-Audits, PPAP-Pakete und Charge-Tracking. EDI-Anbindung an Covisint und Bosch-Lieferantenportale.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Sprout className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>KWS-Sortenzulassung und GVO-Compliance</Typo.H3>
            <Typo.Paragraph>
              Sortenzulassung (BSA), GVO-Compliance, Saatgut-Zertifizierung und FAO-konforme Drittmarkt-Exportworkflows. Anbindung an SAP, Sortenlisten und Pflanzenschutz-Datenbanken.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Car className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>IATF-16949- und JIS-/JIT-VW-Pipelines</Typo.H3>
            <Typo.Paragraph>
              JIS-/JIT-Lieferpipelines, EDI-Anbindung an Covisint und OPS-AT, IATF-16949-Audits und PPAP für VW-Zulieferung. SAP QM, MES und PLM integriert.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <GraduationCap className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Drittmittel- und Hochschul-Workflows</Typo.H3>
            <Typo.Paragraph>
              DFG-, BMBF- und EU-Förderprojekte mit Zeiterfassung, Verwendungsnachweis und Reports. Anbindung an HISinOne, SAP CO und easy-Online für Uni Hildesheim und HAWK.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 3. NumberedList - 5 Stadt-Eigenheiten */}
      <ContentWrapper bodyWidth="small">
        <Typo.H2>5 Eigenheiten der Hildesheimer Wirtschaft, die Workflows beeinflussen</Typo.H2>
        <div className="mt-6">
          <NumberedList>
            <NumberedList.Item title="Bosch und E-Mobility-Transformation:">
              Bosch Hildesheim transformiert sich von klassischer Antriebstechnik zur E-Mobility, Brennstoffzelle und ADAS. Lieferanten-Onboarding für neue Komponenten, IATF-Audits und PPAP-Pakete sind Workflow-Themen.
            </NumberedList.Item>
            <NumberedList.Item title="KWS Saat und Zuckerrüben-Saatgut-Pipelines:">
              KWS Saat ist mit Stammsitz Einbeck (Region Hildesheim) Weltmarktführer für Zuckerrüben-Saatgut, mit starkem Standort in Hildesheim. Sortenzulassung (BSA), GVO-Compliance und Drittmarkt-Exportworkflows nach FAO.
            </NumberedList.Item>
            <NumberedList.Item title="Universität Hildesheim und HAWK:">
              Universität Hildesheim mit Schwerpunkt Bildungs- und Sozialwissenschaften, HAWK mit Engineering. Drittmittel-Reporting, internationale Forschungs-Partnerschaften und Doktoranden-HR-Workflows.
            </NumberedList.Item>
            <NumberedList.Item title="Welterbe-Domstadt und Tourismus:">
              Mariendom und St. Michaeliskirche sind UNESCO-Welterbe. Tourismus-Workflows, mehrsprachige Ticketing-Pipelines und Group-Bookings (China, Italien) sind regionale Themen.
            </NumberedList.Item>
            <NumberedList.Item title="VW-Zulieferung Wolfsburg und Niedersachsen-Achse:">
              Hildesheim ist Teil der VW-Zulieferer-Achse Wolfsburg-Hannover-Hildesheim-Salzgitter. EDI-Anbindung an Covisint, OPS-AT, IATF-16949 und JIS-/JIT-Lieferpipelines.
            </NumberedList.Item>
          </NumberedList>
        </div>
      </ContentWrapper>

      {/* 2. IntroBox - Specialty-Cluster-Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Hildesheim - Industrie zwischen Hannover und Salzgitter
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo Bosch zur Wasserstoff-Brennstoffzelle umrüstet und KWS Saat weltweit Zuckerrüben-Saatgut liefert, müssen Workflows transformation-fest sein
          </IntroBox.Headline>
          <IntroBox.Subline>
            Bosch mit über 4.500 Beschäftigten in Hildesheim, KWS Saat mit 5.700 weltweit, Blaupunkt-Erbe und tradi­tionelle VW-Zulieferung - Hildesheim befindet sich mitten in der E-Mobility-Transformation. Workflows für Bosch-Lieferanten-Pipelines, Energiewende-Förderung und Saatgut-Compliance sind die zentralen Themen.
          </IntroBox.Subline>
        </IntroBox>
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
        <Typo.H2>Häufige Fragen aus Hildesheim</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={hildesheimFaqs} />
        </div>
        <div className="mt-8">
          <Typo.Paragraph>
            Wie wir die Implementierung Schritt für Schritt strukturieren, beschreiben wir
            auf der Seite{" "}
            <Link href="/unser-prozess" className="text-primary-600 hover:underline">
              Unser Prozess
            </Link>
            .
          </Typo.Paragraph>
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
