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
import ProsCons from "@/components/sections/pros-cons";
import { FaqContainer } from "@/components/ui/faqs";
import { CityLinksFromMeta } from "@/components/standorte/city-links";
import ContactButton from "@/components/buttons/contact-button";
import { Factory, Settings, ShieldCheck, Wrench } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-agentur-siegen",
  rewrites: [
    {
      source: "/ai-workflows-siegen",
      preHeadline: "AI Workflows Siegen",
      headline: "AI Workflows & Automatisierung in Siegen",
      metaTitle: "AI Workflows Siegen - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Siegen. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Siegen",
        "KI Automatisierung Siegen",
        "Workflow Automatisierung Siegen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-siegen",
      preHeadline: "n8n Automation Siegen",
      headline: "n8n Automation in Siegen - Workflows automatisieren",
      metaTitle: "n8n Automation Siegen | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Siegen. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Siegen",
        "n8n Siegen",
        "Workflow Automation Siegen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-siegen",
      preHeadline: "n8n Siegen",
      headline: "n8n Agentur in Siegen",
      metaTitle: "n8n Siegen - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Siegen. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Siegen und Umgebung.",
      keywords: [
        "n8n Siegen",
        "n8n Agentur Siegen",
        "n8n Beratung Siegen",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-siegen",
      preHeadline: "Automation Siegen",
      headline: "Automation & Prozessoptimierung in Siegen",
      metaTitle: "Automation Siegen - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Siegen. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Siegen",
        "Prozessautomatisierung Siegen",
        "Workflow Automation Siegen",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-siegen",
      preHeadline: "IT Dienstleister Siegen",
      headline: "IT Dienstleister in Siegen - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Siegen - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Siegen. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Siegen.",
      keywords: [
        "IT Dienstleister Siegen",
        "IT Service Siegen",
        "Digitalisierung Siegen",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-siegen",
      preHeadline: "KI Beratung Siegen",
      headline: "KI Beratung in Siegen - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Siegen - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Siegen. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Siegen",
        "KI Lösungen Siegen",
        "Künstliche Intelligenz Siegen",
        "Bluebatch",
      ],
    },
      {
      source: "/ki-agentur-siegen",
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Siegen",
  slug: "siegen",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Kreuztal",
    "Netphen",
    "Freudenberg",
    "Olpe",
    "Betzdorf",
    "Attendorn",
  ],
  crossReference: [
    { name: "Bonn", slug: "bonn" },
    { name: "Hagen", slug: "hagen" },
    { name: "Koblenz", slug: "koblenz" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Siegen | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Workflows für Siegener Maschinen- und Anlagenbau: Globalexport-Pipelines mit BAFA für Achenbach Buschhütten, After-Sales weltweit für SMS group, CE/ATEX für Hidden Champions und Drittmittel für Uni Siegen.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Siegen",
      "n8n Siegen",
      "Achenbach Buschhütten Export",
      "Maschinenbau Workflow",
      "BAFA Exportkontrolle",
      "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [{ url: "/images/cities/siegen.jpg", width: 1200, height: 630, alt: "Siegen - Achenbach Buschhütten und Hidden Champions" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/cities/siegen.jpg"] },
    alternates: { canonical: "/ki-agentur-siegen" },
  };
}

const siegenFaqs = [
  {
    question: "Achenbach- oder SMS-Zulieferer: wie hilft n8n bei Exportkontrolle?",
    answer:
      "ITAR-/EAR-Klassifikation, Endverbleibserklärungen, BAFA-Antragstellung und Sanktionslisten-Prüfung in n8n-Pipelines mit Vier-Augen-Freigabe. Anbindung an SAP GTS, BAFA-ELAN-K2 und Compliance-Tools.",
  },
  {
    question: "Wir sind Hidden Champion im Maschinenbau: wo lohnt sich KI zuerst?",
    answer:
      "Bei CPQ für Sonderanlagen, bei After-Sales-Ticket-Klassifikation und bei Lieferanten-Onboarding. Drei klassische Maschinenbau-Pain-Points mit klarem ROI in 4-8 Wochen.",
  },
  {
    question: "Können wir CE/ATEX-Konformität mit n8n abbilden?",
    answer:
      "Ja. Konformitätserklärungen, Betriebsanleitungen, Risikobeurteilung nach EN ISO 12100 und ATEX-Zertifizierung in revisionssicheren n8n-Pipelines mit Notified-Body-Anbindung.",
  },
  {
    question: "After-Sales weltweit: wie skaliert Field Service?",
    answer:
      "AI-Agent-Vorklassifikation für eingehende Service-Tickets, automatische Ersatzteil-Bestellung mit Verfügbarkeitsprüfung und Garantie-Workflow mit Vier-Augen-Freigabe. Reduziert Bearbeitungszeit pro Ticket um 50-70 %.",
  },
  {
    question: "Uni Siegen: kann n8n Drittmittel-Reporting abbilden?",
    answer:
      "Ja. DFG-, BMBF- und EU-Horizon-Projekte mit Zeiterfassung, Verwendungsnachweis und Quartals-Reports. Anbindung an HISinOne, SAP CO, easy-Online und Industriepartner-Verträge inklusive.",
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
              {overrides?.preHeadline ?? "Standort Siegen - Hidden-Champion-Region"}
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              {overrides?.headline ?? "KI-Agentur in Siegen - für Achenbach Buschhütten, Maschinenbau und Universität"}
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Achenbach Buschhütten baut Walzwerke für die Welt, das Siegerland ist Hidden-Champion-Hochburg mit hunderten KMU im Maschinen- und Anlagenbau und die Universität Siegen prägt die Region mit Engineering-Forschung. Wir bauen Workflows für Anlagenbau-Compliance, Maschinen-Service und Drittmittel.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Beratung anfragen
              </ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/cities/siegen.jpg"
              alt="Siegen - Achenbach Buschhütten und Hidden Champions"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 3. NumberedList - 5 Stadt-Eigenheiten */}
      <ContentWrapper bodyWidth="small">
        <Typo.H2>5 Eigenheiten der Siegener Wirtschaft, die Workflows beeinflussen</Typo.H2>
        <div className="mt-6">
          <NumberedList>
            <NumberedList.Item title="Achenbach Buschhütten und Walzwerk-Globalexport:">
              Als Weltmarktführer für Folien- und Bandwalzwerke liefert Achenbach in 100+ Länder. ITAR-/EAR-Klassifikation, Endverbleibserklärungen, BAFA-Antragstellung und Sanktionslisten-Prüfung sind Pflicht.
            </NumberedList.Item>
            <NumberedList.Item title="SMS group und Stahltechnologie-Anlagenbau:">
              SMS group (Hauptsitz Düsseldorf, starke Siegener Präsenz) baut Stahl-Walzwerke und Gießanlagen weltweit. After-Sales-Service auf 5 Kontinenten, Ersatzteil-Logistik und IATF-/ISO-Compliance sind Pipeline-Themen.
            </NumberedList.Item>
            <NumberedList.Item title="Hidden Champions im Maschinen- und Anlagenbau:">
              200+ KMU mit 50-500 MA, oft Weltmarktführer in Nischen (Förder-, Hydraulik-, Antriebs-, Mess-Technik). CE-Konformität, ATEX-Zertifizierung und Maschinenrichtlinie 2006/42/EG sind Workflow-Themen.
            </NumberedList.Item>
            <NumberedList.Item title="Universität Siegen und FOMAAS-Forschung:">
              Universität Siegen mit Schwerpunkt Maschinenbau, Mechatronik und FOMAAS-Forschung. DFG-, BMBF- und EU-Förderprojekte, Industriepartnerschaften mit lokalen Hidden Champions und Doktoranden-HR sind Pipeline-Themen.
            </NumberedList.Item>
            <NumberedList.Item title="Krombacher und regionale Lebensmittel-Industrie:">
              Krombacher (Kreuztal), Eichhof und Region-Mittelstand - HACCP, Charge-Rückverfolgung und Lebensmittelhygiene-Workflows nach IFS Food gehören zum Alltag.
            </NumberedList.Item>
          </NumberedList>
        </div>
      </ContentWrapper>

      {/* 2. IntroBox - Specialty-Cluster-Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Siegen - Heimat der Hidden Champions im Maschinenbau
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo Walzwerke nach Japan exportiert werden und 200+ Maschinenbau-KMU global ausliefern, müssen Workflows export- und ATEX-fest sein
          </IntroBox.Headline>
          <IntroBox.Subline>
            Achenbach Buschhütten als Weltmarktführer für Folienwalzwerke, SMS group (Stahltechnologie), Krombacher-Region und die Universität Siegen mit Engineering-Schwerpunkt - das Siegerland ist Maschinenbau-Hochburg mit ATEX-, Exportkontrolle- und CE-konformen Pipeline-Bedürfnissen.
          </IntroBox.Subline>
        </IntroBox>
      </ContentWrapper>

      {/* 4. SimpleGrid cols=2 - 4 Specialty-Use-Cases */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Workflow-Bausteine für Siegener Maschinen- und Anlagenbau</Typo.H2>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Factory className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Walzwerk-Globalexport und BAFA-Pipelines</Typo.H3>
            <Typo.Paragraph>
              ITAR-/EAR-Klassifikation, Endverbleibserklärungen, BAFA-Antragstellung und Sanktionslisten-Prüfung in n8n-Pipelines. Anbindung an SAP GTS, BAFA-ELAN-K2 und Compliance-Tools.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Settings className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>After-Sales- und Ersatzteil-Workflows weltweit</Typo.H3>
            <Typo.Paragraph>
              Service-Tickets, Ersatzteil-Bestellungen und Garantie-Erstattungen zwischen Salesforce Service Cloud, SAP, Field-Service-Apps und Logistik. KI-gestützte Ticket-Klassifikation und Ersatzteil-Vorschläge.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <ShieldCheck className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>CE-, ATEX- und Maschinenrichtlinie-Workflows</Typo.H3>
            <Typo.Paragraph>
              Konformitätserklärungen, Betriebsanleitungen, Risikobeurteilung nach EN ISO 12100 und ATEX-Zertifizierung in revisionssicheren n8n-Pipelines mit Notified-Body-Anbindung.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Wrench className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>CPQ für Sonderanlagen-Maschinenbau</Typo.H3>
            <Typo.Paragraph>
              Angebotskalkulation für Sonderanlagen mit Konstruktions-Vorlagen, Stücklisten-Erstellung und Preis-Konfiguration. Anbindung an SolidWorks, CREO, SAP und CRM.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 5. StatsList horizontal */}
      <ContentWrapper colorScheme="primary">
        <StatsList
          cols={4}
          stats={[
            { value: 102000, label: "Einwohner Siegen" },
            { value: 200, suffix: "+", label: "Maschinen-/Anlagenbau-KMU Siegerland" },
            { value: 100, suffix: "+", label: "Achenbach-Exportländer" },
            { value: 1972, label: "Universität Siegen gegründet" },
          ]}
        />
      </ContentWrapper>

      {/* 7.5. Bonus — Hidden Champions vs. Peripherie */}
      <ContentWrapper>
        <Typo.H2>Siegerland: Maschinenbau-Tiefe versus geografische Lage</Typo.H2>
        <Typo.Paragraph>
          Hier wohnen mehr Weltmarktführer pro Quadratkilometer als fast
          irgendwo sonst in Deutschland, aber die Lage am Rothaargebirge
          schafft eigene Probleme.
        </Typo.Paragraph>
        <div className="mt-8">
          <ProsCons>
            <ProsCons.Pros>
              <ProsCons.Item
                title="Hidden-Champion-Dichte im Maschinenbau"
                description="Achenbach Buschhütten als Weltmarktführer für Walzwerke, SMS group mit Hauptsitz Mönchengladbach aber Werken im Kreis, Krombacher als Brauerei-Größe, dazu Hunderte familiengeführte Spezialisten in Aluminium- und Stahlweiterverarbeitung."
              />
              <ProsCons.Item
                title="Familienunternehmens-Tradition"
                description="Inhabergeführt seit Generationen, lange Lieferanten-Bindungen, hohe Fertigungstiefe. Klassische SAP-Backbones, MES-Anbindung an Werkzeugmaschinen, EDI mit globalen Kunden - wir kennen die typischen Schwachstellen."
              />
            </ProsCons.Pros>
            <ProsCons.Cons>
              <ProsCons.Item
                title="Periphere Lage"
                description="A45 als Lebensader, Rahmedetal-Sperrung als Dauerthema. Logistik-Workflows müssen Umleitungen, längere Transitzeiten und höhere Frachtkosten abbilden."
              />
              <ProsCons.Item
                title="Fachkräfteknappheit"
                description="Demografie und Pendel-Distanz nach Köln/Dortmund machen Recruiting schwer. Workflows müssen Bewerbermanagement, Onboarding und Aus-/Weiterbildung straffen, weil HR-Kapazität knapp ist."
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
        <Typo.H2>Häufige Fragen aus Siegen</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={siegenFaqs} />
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
