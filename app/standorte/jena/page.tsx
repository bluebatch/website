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
import { Microscope, Cpu, ScanEye, FlaskConical } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-agentur-jena",
  rewrites: [
    {
      source: "/ai-workflows-jena",
      preHeadline: "AI Workflows Jena",
      headline: "AI Workflows & Automatisierung in Jena",
      metaTitle: "AI Workflows Jena - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Jena. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: ["AI Workflows Jena", "KI Automatisierung Jena", "Workflow Automatisierung Jena", "Bluebatch"],
    },
    {
      source: "/n8n-automation-jena",
      preHeadline: "n8n Automation Jena",
      headline: "n8n Automation in Jena - Workflows automatisieren",
      metaTitle: "n8n Automation Jena | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Jena. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: ["n8n Automation Jena", "n8n Jena", "Workflow Automation Jena", "Bluebatch"],
    },
    {
      source: "/n8n-jena",
      preHeadline: "n8n Jena",
      headline: "n8n Agentur in Jena",
      metaTitle: "n8n Jena - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Jena. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Jena und Umgebung.",
      keywords: ["n8n Jena", "n8n Agentur Jena", "n8n Beratung Jena", "Bluebatch"],
    },
    {
      source: "/automation-jena",
      preHeadline: "Automation Jena",
      headline: "Automation & Prozessoptimierung in Jena",
      metaTitle: "Automation Jena - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Jena. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: ["Automation Jena", "Prozessautomatisierung Jena", "Workflow Automation Jena", "Bluebatch"],
    },
    {
      source: "/it-dienstleister-jena",
      preHeadline: "IT Dienstleister Jena",
      headline: "IT Dienstleister in Jena - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Jena - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Jena. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Jena.",
      keywords: ["IT Dienstleister Jena", "IT Service Jena", "Digitalisierung Jena", "Bluebatch"],
    },
    {
      source: "/ki-beratung-jena",
      preHeadline: "KI Beratung Jena",
      headline: "KI Beratung in Jena - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Jena - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Jena. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: ["KI Beratung Jena", "KI Lösungen Jena", "Künstliche Intelligenz Jena", "Bluebatch"],
    },
    { source: "/ki-agentur-jena" },
  ],
};

export const metaCustom: CityMeta = {
  name: "Jena",
  slug: "jena",
  bundesland: "Thüringen",
  publish: false,
  nearbySmall: ["Weimar", "Gera", "Apolda", "Naumburg (Saale)", "Eisenberg"],
  crossReference: [
    { name: "Erfurt", slug: "erfurt" },
    { name: "Leipzig", slug: "leipzig" },
    { name: "Halle (Saale)", slug: "halle-saale" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Jena | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Workflows für Optik- und Photonik-Unternehmen in Jena: ZEISS SMT, JenOptik, SCHOTT, Analytik Jena und das UKJ. EUV-Lithographie-Compliance, MDR und Exportkontrolle mit n8n.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Jena",
      "n8n Jena",
      "Optik Photonik Automatisierung",
      "MDR Workflow Jena",
      "Exportkontrolle Dual-Use",
      "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [{ url: "/images/cities/jena.jpg", width: 1200, height: 630, alt: "Jena Lichtstadt - Optik-Cluster" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/cities/jena.jpg"] },
    alternates: { canonical: "/ki-agentur-jena" },
  };
}

const jenaFaqs = [
  {
    question: "Wie helfen Workflows einem Tochterstandort von ZEISS SMT?",
    answer:
      "ZEISS Semiconductor Manufacturing Technology beliefert ASML für EUV-Lithographie. Reinraum-Dokumentation, Charge-Tracking, Lieferanten-Qualifizierung und US-Exportkontrolle (ITAR/EAR) müssen lückenlos auditierbar sein. n8n verbindet PLM, MES, SAP-Modulen und Compliance-Tools wie Descartes Systems oder MIC zu durchgängigen Belegketten.",
  },
  {
    question: "Wir sind Photonik-Mittelstand - wo lohnt sich KI zuerst?",
    answer:
      "Bei Angebotskonfiguration und CPQ für komplexe optische Komponenten, bei Klassifikation eingehender Anfragen mit AI Agents und in der MDR-Technischen-Dokumentation. Die spezialisierten Workflows skalieren dort am besten, wo Personalknappheit herrscht.",
  },
  {
    question: "MDR-Compliance bei Medizintechnik - kann n8n da konkret helfen?",
    answer:
      "Ja. Technische Dokumentation, klinische Bewertung, Post-Market-Surveillance und Vigilance-Meldungen werden in n8n-Pipelines abgebildet - mit Notified-Body-Schnittstellen (TÜV SÜD, BSI) und revisionssicheren Logs. Versionierung von Risikomanagement-Akten nach ISO 14971 inklusive.",
  },
  {
    question: "BMBF- und EU-Förderprojekte sind sehr dokumentationsintensiv - Lösung?",
    answer:
      "Workflows, die Zeiterfassung, Belegmanagement, Verwendungsnachweise und Quartalsreports automatisch generieren. Anbindung an PT-Outline, easy-Online, ECAS/EU-Funding & Tenders und SAP CO. Spart spürbar Verwaltungsoverhead in Photonik-Verbundprojekten.",
  },
  {
    question: "Wir wachsen mit dem Westbahnhof-Campus auf 2.500 Mitarbeiter - HR-Workflow?",
    answer:
      "End-to-End-Onboarding ist genau der Use-Case: Reisekostenfreigaben, IT-Bereitstellung, Sicherheitsfreigaben, Zugangskarten, Schulungsplanung. n8n verbindet Workday/SuccessFactors, Active Directory, Ivanti, SAP Concur - einmal eingerichtet, skaliert das ohne weiteres Personal in HR.",
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
              {overrides?.preHeadline ?? "Standort Jena - Lichtstadt"}
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              {overrides?.headline ?? "KI-Agentur in Jena - für Europas Photonik-Hauptstadt"}
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              ZEISS, JenOptik, SCHOTT, Analytik Jena und das Universitätsklinikum
              prägen Jena. Wir bauen Workflows für genau die Compliance-Themen,
              die Optik- und Photonik-Unternehmen bewältigen müssen: EUV-Lithographie-Audits,
              MDR-Dokumentation und Dual-Use-Exportkontrolle.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Photonik-Workflow besprechen
              </ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/cities/jena.jpg"
              alt="Jena Lichtstadt - Optik- und Photonik-Cluster"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 3. NumberedList - 5 Dinge die Jena einzigartig machen */}
      <ContentWrapper bodyWidth="small">
        <Typo.H2>5 Eigenheiten der Jenaer Wirtschaft, die Workflows beeinflussen</Typo.H2>
        <div className="mt-6">
          <NumberedList>
            <NumberedList.Item title="EUV-Lithographie-Optiken für ASML:">
              ZEISS Semiconductor Manufacturing Technology in Jena ist Weltmarktführer für
              EUV-Spiegel- und Linsensysteme. Lieferantenqualifizierung, Reinraum-Logs und
              Charge-Tracking unterliegen extremen Dokumentationspflichten.
            </NumberedList.Item>
            <NumberedList.Item title="ITAR/EAR-Exportkontrolle bei Dual-Use-Optiken:">
              Photonik-Komponenten enthalten oft US-Bauteile mit Re-Export-Beschränkungen.
              Endverbleibserklärungen, BAFA-Genehmigungen und automatisierte Sanktionslisten-Prüfungen
              werden zur Pflicht - mit Audit-Trail.
            </NumberedList.Item>
            <NumberedList.Item title="MDR-Compliance bei Medizinprodukten:">
              OP-Mikroskope, Augenheilkunde, Diagnostik - fast alle Photonik-Unternehmen
              haben einen MedTech-Arm. Technische Dokumentation und Post-Market-Surveillance
              binden ganze Teams, wenn nicht automatisiert.
            </NumberedList.Item>
            <NumberedList.Item title="Universitätsklinikum mit Spitzenforschung Sepsis/Infektion:">
              Drittmittel-Reporting, DRG-Abrechnung, Ethikkommissionen, Forschungsdaten-Management -
              ein dichtes Geflecht aus klinischen und Forschungs-Workflows.
            </NumberedList.Item>
            <NumberedList.Item title="500 Mio. EUR Westbahnhof-Campus - 2.500 neue Stellen:">
              Größtes Standort-Wachstum der Stadtgeschichte. Onboarding, Reisekosten,
              IT-Bereitstellung und Beschaffung skalieren nicht ohne automatisierte Pipelines.
            </NumberedList.Item>
          </NumberedList>
        </div>
      </ContentWrapper>

      {/* 5. StatsList horizontal */}
      <ContentWrapper colorScheme="primary">
        <StatsList
          cols={4}
          stats={[
            { value: 111000, label: "Einwohner Jena" },
            { value: 10000, suffix: "+", label: "Beschäftigte im Optik-Cluster" },
            { value: 500, suffix: " Mio. €", label: "Investition Westbahnhof-Campus" },
            { value: 2500, label: "Neue Arbeitsplätze geplant" },
          ]}
        />
      </ContentWrapper>

      {/* 4. SimpleGrid cols=2 - 4 Optik-spezifische Use-Cases */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Workflow-Bausteine für Jenaer Optik- und MedTech-Unternehmen</Typo.H2>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Microscope className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Reinraum-Dokumentation für ZEISS-Zulieferer</Typo.H3>
            <Typo.Paragraph>
              Partikelmessungen, Klimaprotokolle, Personenverkehrs-Logs werden automatisiert
              erfasst und nach DIN EN ISO 14644 archiviert. Anbindung an Vaisala viewLinc
              oder Ellab ValSuite.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <ScanEye className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>MDR Technische Dokumentation für Medizinoptik</Typo.H3>
            <Typo.Paragraph>
              ISO 13485 Lenkungsstand, klinische Bewertung, PMS-Plan und Vigilance-Meldungen
              orchestriert in versionierten n8n-Pipelines - mit Notified-Body-Anbindung.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Cpu className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Dual-Use-Exportworkflows</Typo.H3>
            <Typo.Paragraph>
              BAFA-Antragstellung, Endverbleibserklärungen, EAR/ITAR-Klassifikation und
              SAP GTS-Anbindung als automatisierte Pipeline mit Vier-Augen-Freigabe.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <FlaskConical className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Drittmittel- und Verbundprojekt-Verwaltung</Typo.H3>
            <Typo.Paragraph>
              BMBF-, EU- und Carl-Zeiss-Stiftung-Förderanträge mit automatisierter
              Zeiterfassung, Verwendungsnachweis und Reporting. Schnittstellen zu
              PT-Outline, easy-Online und SAP CO.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 2. IntroBox - Optik-Cluster Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            175 Jahre Carl Zeiss - 175 Jahre Präzision
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo Linsen für ASML geschliffen werden, müssen Workflows mikrometergenau sein
          </IntroBox.Headline>
          <IntroBox.Subline>
            Jena vereint über 100 Optik- und Photonik-Unternehmen mit Hochschulforschung
            in einer Dichte, die weltweit einmalig ist. Diese Spezialisierung verlangt
            spezialisierte Prozesse - generische ERP-Workflows reichen für EUV-Lithographie
            oder MDR-Bewertungen nicht aus.
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
        <Typo.H2>Häufige Fragen aus Jena</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={jenaFaqs} />
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
