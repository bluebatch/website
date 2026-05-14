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
import { Printer, Car, FlaskConical, Wheat } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-agentur-wuerzburg",
  rewrites: [
    {
      source: "/ai-workflows-wuerzburg",
      preHeadline: "AI Workflows Würzburg",
      headline: "AI Workflows & Automatisierung in Würzburg",
      metaTitle: "AI Workflows Würzburg - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Würzburg. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Würzburg",
        "KI Automatisierung Würzburg",
        "Workflow Automatisierung Würzburg",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-wuerzburg",
      preHeadline: "n8n Automation Würzburg",
      headline: "n8n Automation in Würzburg - Workflows automatisieren",
      metaTitle: "n8n Automation Würzburg | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Würzburg. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Würzburg",
        "n8n Würzburg",
        "Workflow Automation Würzburg",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-wuerzburg",
      preHeadline: "n8n Würzburg",
      headline: "n8n Agentur in Würzburg",
      metaTitle: "n8n Würzburg - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Würzburg. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Würzburg und Umgebung.",
      keywords: [
        "n8n Würzburg",
        "n8n Agentur Würzburg",
        "n8n Beratung Würzburg",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-wuerzburg",
      preHeadline: "Automation Würzburg",
      headline: "Automation & Prozessoptimierung in Würzburg",
      metaTitle: "Automation Würzburg - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Würzburg. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Würzburg",
        "Prozessautomatisierung Würzburg",
        "Workflow Automation Würzburg",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-wuerzburg",
      preHeadline: "IT Dienstleister Würzburg",
      headline: "IT Dienstleister in Würzburg - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Würzburg - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Würzburg. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Würzburg.",
      keywords: [
        "IT Dienstleister Würzburg",
        "IT Service Würzburg",
        "Digitalisierung Würzburg",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-wuerzburg",
      preHeadline: "KI Beratung Würzburg",
      headline: "KI Beratung in Würzburg - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Würzburg - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Würzburg. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Würzburg",
        "KI Lösungen Würzburg",
        "Künstliche Intelligenz Würzburg",
        "Bluebatch",
      ],
    },
      {
      source: "/ki-agentur-wuerzburg",
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Würzburg",
  slug: "wuerzburg",
  bundesland: "Bayern",
  publish: false,
  nearbySmall: [
    "Schweinfurt",
    "Kitzingen",
    "Ochsenfurt",
    "Karlstadt",
  ],
  crossReference: [
    { name: "Nürnberg", slug: "nuernberg" },
    { name: "Frankfurt am Main", slug: "frankfurt-am-main" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Würzburg | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Workflows für Würzburger Industrie und Forschung: Sicherheitsdruckmaschinen-Service für Koenig & Bauer, IATF-Pipelines für Brose, Drittmittel-Workflows für JMU und HACCP für Mainfränkische Lebensmittel.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Würzburg",
      "n8n Würzburg",
      "Koenig Bauer Workflow",
      "Brose IATF",
      "Mainfranken Automatisierung",
      "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [{ url: "/images/cities/wuerzburg.jpg", width: 1200, height: 630, alt: "Würzburg – Koenig & Bauer und Mainfranken-Cluster" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/cities/wuerzburg.jpg"] },
    alternates: { canonical: "/ki-agentur-wuerzburg" },
  };
}

const wuerzburgFaqs = [
  {
    question: "Koenig & Bauer beliefert Notenbanken – was bringt Automatisierung?",
    answer:
      "Service-Einsätze bei Zentralbanken erfordern Sicherheitsfreigaben, ITAR-/EAR-Klassifikation und revisionssichere Logs. n8n orchestriert Antrags-Workflows mit BAFA, Service-Ticket-Lifecycle und Ersatzteil-Logistik unter Exportkontrolle.",
  },
  {
    question: "Brose-Zulieferer in Würzburg: wie hilft n8n bei IATF-Anforderungen?",
    answer:
      "PPAP-Pakete, EDI-Anbindung an OEM-Portale (Covisint, SupplyOn), 8D-Reports und Charge-Tracking automatisch erstellt. Anbindung an SAP QM, MES und PLM zu IATF-16949-konformen Pipelines mit Vier-Augen-Freigabe.",
  },
  {
    question: "JMU-Forschung: kann n8n Drittmittel-Reporting abbilden?",
    answer:
      "Ja. DFG-, BMBF- und EU-Förderprojekte mit Zeiterfassung, Verwendungsnachweis und Quartalsreports. Anbindung an SAP CO, easy-Online, ECAS und klinische Studien-Datenbanken – mit Audit-Trail für Ethikkommissionen.",
  },
  {
    question: "Wir sind Mainfranken-Mittelstand – wo lohnt sich KI zuerst?",
    answer:
      "Bei Angebotskalkulation (CPQ), bei Eingangsrechnungs-Verarbeitung mit KI und bei Lieferanten-Sanktionslisten-Prüfung. Klassische KMU-Pain-Points mit klarem ROI in 4-8 Wochen.",
  },
  {
    question: "Lebensmittel- und Weinbau: HACCP-Workflows mit n8n?",
    answer:
      "Ja. Charge-Rückverfolgung, Temperatur-Logs und HACCP-Audit-Trails revisionssicher in n8n-Pipelines. Anbindung an QS-, IFS- und Bio-Zertifizierungssysteme – inklusive automatischer Korrektur-Maßnahmen bei Grenzwert-Überschreitung.",
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
              {overrides?.preHeadline ?? "Standort Würzburg – Mainfranken"}
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              {overrides?.headline ?? "KI-Agentur in Würzburg – für Koenig & Bauer, Brose und Mainfranken"}
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Koenig & Bauer baut seit 1817 Druckmaschinen, Brose ist Familien-Weltkonzern für Automotive-Komponenten und die Julius-Maximilians-Universität ist Forschungsmotor. Wir bauen Workflows für Maschinenbau-Service, Automotive-IATF-Pipelines und klinische Forschung.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Beratung anfragen
              </ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/cities/wuerzburg.jpg"
              alt="Würzburg – Koenig & Bauer und Mainfranken-Cluster"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 3. NumberedList – 5 Stadt-Eigenheiten */}
      <ContentWrapper bodyWidth="small">
        <Typo.H2>5 Eigenheiten der Würzburger Wirtschaft, die Workflows beeinflussen</Typo.H2>
        <div className="mt-6">
          <NumberedList>
            <NumberedList.Item title="Koenig & Bauer und Banknoten-Druckmaschinen-Service:">
              Als Marktführer für Banknoten- und Sicherheitsdruckmaschinen unterliegt Koenig & Bauer extremen Sicherheits- und Exportauflagen. Service-Einsätze bei Zentralbanken erfordern Sicherheitsfreigaben, ITAR-/EAR-Klassifikation und revisionssichere Service-Logs.
            </NumberedList.Item>
            <NumberedList.Item title="Brose-Konzern mit Würzburger Standort:">
              Brose Sitech (Joint Venture mit VW) und Brose-Werk Würzburg fertigen Sitzsysteme, Tür- und Antriebsmodule für Premium-OEMs. IATF 16949, PPAP und EDI-Anbindung an Mercedes, BMW und VW gehören zum Tagesgeschäft.
            </NumberedList.Item>
            <NumberedList.Item title="Julius-Maximilians-Universität und Uniklinikum:">
              Mit 25.000 Studierenden und einem der größten Uniklinika Bayerns ist die JMU Forschungsmotor in Onkologie, Strahlentherapie und KI-Diagnostik. Drittmittel-Reporting und Ethikkommissionen sind Workflow-intensiv.
            </NumberedList.Item>
            <NumberedList.Item title="Weinbau Mainfranken und regionale Lebensmittelindustrie:">
              Mainfränkischer Weinbau (Silvaner), Distelhäuser Brauerei und Würzburger Hofbräu prägen die Lebensmittelbranche. HACCP, Charge-Rückverfolgung und Bio-Zertifizierung gehören in automatisierte Pipelines.
            </NumberedList.Item>
            <NumberedList.Item title="Mittelstand und Hidden Champions in Werkzeugmaschinen:">
              Knauf (Gips/Bau), Mainfränkische Werkstätten und Maschinenbau-KMU mit 100-1000 MA – stark exportierend, mit Bedarf an EORI-Workflows, Lieferantenmanagement und CPQ.
            </NumberedList.Item>
          </NumberedList>
        </div>
      </ContentWrapper>

      {/* 4. SimpleGrid cols=2 – 4 Specialty-Use-Cases */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Workflow-Bausteine für Würzburger Industrie und Forschung</Typo.H2>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Printer className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Sicherheitsdruckmaschinen-Service und Exportkontrolle</Typo.H3>
            <Typo.Paragraph>
              Service-Einsätze bei Zentralbanken mit Sicherheitsfreigaben, ITAR-/EAR-Klassifikation und revisionssicheren Service-Logs. Anbindung an SAP, BAFA-Portal und Service-Management.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Car className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>IATF-Pipelines für Brose-Zulieferung</Typo.H3>
            <Typo.Paragraph>
              PPAP-Pakete, EDI-Anbindung an Mercedes-, BMW- und VW-Portale, Charge-Tracking und 8D-Reports in automatisierten Workflows. SAP QM, MES und Lieferantenportale integriert.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <FlaskConical className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Drittmittel- und Ethikkommissions-Workflows JMU</Typo.H3>
            <Typo.Paragraph>
              Forschungsanträge, DFG-Reports, Ethikkommissions-Voten und klinische Studien-Dokumentation in n8n-Pipelines. Anbindung an SAP CO, easy-Online und Studien-Datenbanken.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Wheat className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>HACCP- und Bio-Zertifizierung für Mainfränkische Lebensmittel</Typo.H3>
            <Typo.Paragraph>
              Charge-Rückverfolgung, Temperatur-Logs, HACCP-Audit-Trails und Bio-Zertifizierungs-Dokumentation automatisiert. Schnittstellen zu IFS- und QS-Audit-Systemen.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 5. StatsList horizontal */}
      <ContentWrapper colorScheme="primary">
        <StatsList
          cols={4}
          stats={[
            { value: 127000, label: "Einwohner Würzburg" },
            { value: 25000, suffix: "+", label: "Studierende JMU" },
            { value: 1817, label: "Gründung Koenig & Bauer" },
            { value: 5500, suffix: "+", label: "Beschäftigte am Uniklinikum" },
          ]}
        />
      </ContentWrapper>

      {/* 2. IntroBox – Specialty-Cluster-Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Koenig & Bauer – ältester Druckmaschinen-Bauer der Welt
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo Banknoten-Druckmaschinen entstehen und Brose Sitzsysteme für Mercedes fertigt, müssen Workflows revisionssicher sein
          </IntroBox.Headline>
          <IntroBox.Subline>
            Koenig & Bauer beliefert weltweit Notenbanken mit Sicherheits-Druckmaschinen. Brose Sitech (mit VW) und Brose Standort Würzburg liefern Mercedes, BMW und Audi. Daneben Forschungsuni mit Uniklinikum – ein Mix, der spezialisierte Workflows verlangt.
          </IntroBox.Subline>
        </IntroBox>
      </ContentWrapper>

      {/* 7.5. Bonus — Würzburger Eigenheiten */}
      <ContentWrapper bodyWidth="small">
        <Typo.H2>Fünf Würzburger Eigenheiten</Typo.H2>
        <div className="mt-6">
          <NumberedList>
            <NumberedList.Item title="Koenig &amp; Bauer Banknotendruck.">
              Weltmarktführer für Sicherheitsdruckmaschinen, beliefert
              Notenbanken weltweit. Höchste Audit- und Geheimhaltungsstufe,
              ISO 14298 und BSI-konforme Workflows.
            </NumberedList.Item>
            <NumberedList.Item title="Brose Mechatronik (Coburg/Würzburg-Region).">
              Familien-Tier-1 mit 30.000 Mitarbeitern weltweit. Sitzsysteme,
              Türmodule, E-Mobility-Komponenten für Mercedes, BMW, Audi und VW.
              EDI/VDA und IATF-16949 als Pflicht.
            </NumberedList.Item>
            <NumberedList.Item title="Mainfranken Theater &amp; Kulturcluster.">
              Dreisparten-Haus mit Oper, Schauspiel und Tanz. Workflows für
              Spielplanung, GEMA-Abrechnung, Künstler-Verträge und
              Sponsoring.
            </NumberedList.Item>
            <NumberedList.Item title="JMU Würzburg mit Drittmittel-Stärke.">
              Julius-Maximilians-Universität, gegründet 1402, Nobelpreis-Stadt
              (Röntgen). Über 28.000 Studierende, dichtes Drittmittel-Netzwerk
              mit DFG, BMBF und EU.
            </NumberedList.Item>
            <NumberedList.Item title="Weintradition mit DWI-Anbindung.">
              Würzburger Stein und Frankenwein als Premium-Lage. Workflows für
              Weingüter zwischen Lesebuch, Lagerkellerei, AP-Nummer-Vergabe
              und EU-Bezeichnungsrecht.
            </NumberedList.Item>
          </NumberedList>
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
        <Typo.H2>Häufige Fragen aus Würzburg</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={wuerzburgFaqs} />
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
