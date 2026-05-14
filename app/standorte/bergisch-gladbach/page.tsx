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
import { FlaskConical, Coffee, Building2, HeartPulse } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-workflows-bergisch-gladbach",
      preHeadline: "AI Workflows Bergisch Gladbach",
      headline: "AI Workflows & Automatisierung in Bergisch Gladbach",
      metaTitle: "AI Workflows Bergisch Gladbach - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Bergisch Gladbach. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: ["AI Workflows Bergisch Gladbach", "KI Automatisierung Bergisch Gladbach", "Workflow Automatisierung Bergisch Gladbach", "Bluebatch"],
    },
    {
      source: "/n8n-automation-bergisch-gladbach",
      preHeadline: "n8n Automation Bergisch Gladbach",
      headline: "n8n Automation in Bergisch Gladbach - Workflows automatisieren",
      metaTitle: "n8n Automation Bergisch Gladbach | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Bergisch Gladbach. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: ["n8n Automation Bergisch Gladbach", "n8n Bergisch Gladbach", "Workflow Automation Bergisch Gladbach", "Bluebatch"],
    },
    {
      source: "/n8n-bergisch-gladbach",
      preHeadline: "n8n Bergisch Gladbach",
      headline: "n8n Agentur in Bergisch Gladbach",
      metaTitle: "n8n Bergisch Gladbach - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Bergisch Gladbach. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Bergisch Gladbach und Umgebung.",
      keywords: ["n8n Bergisch Gladbach", "n8n Agentur Bergisch Gladbach", "n8n Beratung Bergisch Gladbach", "Bluebatch"],
    },
    {
      source: "/automation-bergisch-gladbach",
      preHeadline: "Automation Bergisch Gladbach",
      headline: "Automation & Prozessoptimierung in Bergisch Gladbach",
      metaTitle: "Automation Bergisch Gladbach - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Bergisch Gladbach. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: ["Automation Bergisch Gladbach", "Prozessautomatisierung Bergisch Gladbach", "Workflow Automation Bergisch Gladbach", "Bluebatch"],
    },
    {
      source: "/it-dienstleister-bergisch-gladbach",
      preHeadline: "IT Dienstleister Bergisch Gladbach",
      headline: "IT Dienstleister in Bergisch Gladbach - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Bergisch Gladbach - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Bergisch Gladbach. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Bergisch Gladbach.",
      keywords: ["IT Dienstleister Bergisch Gladbach", "IT Service Bergisch Gladbach", "Digitalisierung Bergisch Gladbach", "Bluebatch"],
    },
    {
      source: "/ki-beratung-bergisch-gladbach",
      preHeadline: "KI Beratung Bergisch Gladbach",
      headline: "KI Beratung in Bergisch Gladbach - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Bergisch Gladbach - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Bergisch Gladbach. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: ["KI Beratung Bergisch Gladbach", "KI Lösungen Bergisch Gladbach", "Künstliche Intelligenz Bergisch Gladbach", "Bluebatch"],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Bergisch Gladbach",
  slug: "bergisch-gladbach",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: ["Overath", "Rösrath", "Wermelskirchen", "Burscheid"],
  crossReference: [
    { name: "Köln", slug: "koeln" },
    { name: "Leverkusen", slug: "leverkusen" },
    { name: "Solingen", slug: "solingen" },
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

  const title = overrides?.metaTitle ?? "KI in Bergisch Gladbach | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Biotech, Lebensmittel und Mittelstandsholding nebeneinander: Wir automatisieren Workflows für Miltenyi Biotec, Krüger, INDUS und das Bergische Hidden-Champion-Umfeld.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Bergisch Gladbach",
      "n8n Bergisch Gladbach",
      "Biotech Automatisierung NRW",
      "Lebensmittel Workflows",
      "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [{ url: "/images/cities/bergisch-gladbach.jpg", width: 1200, height: 630, alt: "Bergisch Gladbach Biotech und Lebensmittel" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/cities/bergisch-gladbach.jpg"] },
    alternates: { canonical: "/standorte/bergisch-gladbach" },
  };
}

const bergischGladbachFaqs = [
  {
    question: "Wir liefern an Miltenyi Biotec oder gehören dazu - passen n8n-Workflows zu GMP?",
    answer:
      "Ja. ATMP-Produktion verlangt 21 CFR Part 11 + EU GMP Annex 1 + Annex 11. Wir bauen versionierte Pipelines mit elektronischer Signatur, Audit-Trail und Vier-Augen-Freigabe. Anbindung an PAS-X (Werum/Körber), SAP S/4HANA, LIMS und Quality-Management-Tools wie SoftExpert.",
  },
  {
    question: "Krüger ist FMCG mit großer Vertriebs-Komplexität - konkreter Use-Case?",
    answer:
      "Promotion-Disposition, Listungs-Verwaltung mit LEH-Kunden, Mengensteuerung in Saison-Produkten und IFS Food-Audits. n8n verbindet SAP, GS1-Datenpools, Vertriebs-CRM (Salesforce/Hubspot) und Auditmanagement zu durchgängigen Datenflüssen.",
  },
  {
    question: "INDUS hat ca. 45 Töchter - wie skaliert n8n im Holding-Kontext?",
    answer:
      "Pro Tochter eine n8n-Instanz, plus eine zentrale Konsolidierungs-Ebene für Reporting und Compliance-Steuerung. So bleiben Tochter-Prozesse autonom, aber Konzern-Reports (HGB-/CSRD-Konsolidierung, Working Capital, Intercompany) entstehen automatisiert.",
  },
  {
    question: "Das Zanders-Areal wird neu entwickelt - wo greift Automatisierung?",
    answer:
      "Quartiers-Genehmigungen mit Bezirksregierung Köln, Investorenmanagement, BImSchG-Pflichten und Förderanträge (EFRE, NRW.URBAN). Workflows orchestrieren die Schnittstellen zwischen Stadt, RBK-Kreis, Investoren und Bauherren.",
  },
  {
    question: "Wir sind Tochter eines DAX-Konzerns - was bringt uns lokales n8n?",
    answer:
      "Lokale Spezialprozesse, die der Konzern-SAP nicht abbilden will: regionale Genehmigungen, Werks-spezifische Schichtplanung, KMU-Lieferanten-Onboarding. Wie wir Konzern-Töchter integrieren, beschreiben wir auf der Seite Unser Prozess.",
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


      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>
              {overrides?.preHeadline ?? "Standort Bergisch Gladbach"}
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              {overrides?.headline ?? "KI in Bergisch Gladbach - für Biotech, FMCG und INDUS-Mittelstand"}
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Miltenyi Biotec entwickelt globale ATMP-Therapien, Krüger ist europäischer
              Marktführer für Instant-Produkte, INDUS hält 45 Beteiligungen. Wir
              automatisieren Workflows, die GMP-Compliance, FMCG-Vertrieb und
              Holding-Konsolidierung verbinden.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Automatisierung im Bergischen besprechen
              </ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/cities/bergisch-gladbach.jpg"
              alt="Bergisch Gladbach - Biotech, Lebensmittel, INDUS-Mittelstand"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>
      <ContentWrapper bodyWidth="small">
        <Typo.H2>5 Eigenheiten der Bergisch-Gladbacher Wirtschaft</Typo.H2>
        <div className="mt-6">
          <NumberedList>
            <NumberedList.Item title="ATMP-Produktion bei Miltenyi Biotec:">
              Zell- und Gentherapien sind Personalised Medicine im strengsten GMP-Rahmen.
              Jede Charge ist ein Unikat mit eigener Spender-Identität, Lieferketten-Doku
              und Patienten-spezifischem Freigabeprozess.
            </NumberedList.Item>
            <NumberedList.Item title="MACS-Technologie als Welt-Standard:">
              Miltenyis magnetische Zellsortierung ist Weltmarktführer. Forschungspartner,
              Klinikkooperationen und kommerzielle Kunden weltweit erzeugen ein dichtes
              Geflecht aus B2B-Vertriebsworkflows.
            </NumberedList.Item>
            <NumberedList.Item title="Krüger als Hidden Champion in Instant-Kaffee:">
              Europäischer Marktführer für lösliche Kaffee-, Kakao- und Teespezialitäten.
              Private-Label-Geschäft mit LEH-Ketten in 50+ Ländern erfordert pro-Markt
              spezifische Etikettierungs- und Compliance-Workflows.
            </NumberedList.Item>
            <NumberedList.Item title="INDUS Holding mit 45 Beteiligungen:">
              Börsennotierte Mittelstands-Holding (ca. 11.000 Konzernbeschäftigte) mit
              dezentralen Töchtern in Maschinenbau, Bau, Medizin- und Infrastruktur-Technik.
              Holding-Konsolidierung trifft Tochter-Autonomie.
            </NumberedList.Item>
            <NumberedList.Item title="Zanders-Areal als Strukturwandel-Projekt:">
              Das ehemalige Papier-Werk wird in ein urbanes Quartier transformiert -
              eines der größten innerstädtischen Entwicklungsprojekte im Rheinland mit
              komplexen Genehmigungs-Workflows.
            </NumberedList.Item>
          </NumberedList>
        </div>
      </ContentWrapper>
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            113.000 Einwohner, 3 Weltmarkt-Player
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Die unterschätzte Wirtschaftsmacht zwischen Köln und Leverkusen
          </IntroBox.Headline>
          <IntroBox.Subline>
            Bergisch Gladbach hat eine der höchsten Top-Unternehmens-Dichten je Einwohner
            in NRW. Drei sehr unterschiedliche Welten - Biotech-Pionier, FMCG-Marktführer
            und börsennotierte Mittelstandsholding - brauchen drei sehr unterschiedliche
            Workflow-Bausteine.
          </IntroBox.Subline>
        </IntroBox>
      </ContentWrapper>
      <ContentWrapper colorScheme="primary">
        <StatsList
          cols={4}
          stats={[
            { value: 113000, label: "Einwohner Bergisch Gladbach" },
            { value: 5300, label: "Krüger-Beschäftigte weltweit" },
            { value: 3500, label: "Miltenyi-Beschäftigte weltweit" },
            { value: 45, label: "INDUS-Beteiligungen" },
          ]}
        />
      </ContentWrapper>
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Workflow-Bausteine für die Bergisch-Gladbacher Wirtschaft</Typo.H2>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <FlaskConical className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>GMP-Annex-1-Workflows für ATMP- und Biotech-Lieferanten</Typo.H3>
            <Typo.Paragraph>
              Chargen-Freigabe, Sterilitäts-Doku, Annex-11-konforme Audit-Trails,
              elektronische Signatur und Anbindung an PAS-X, LIMS und SAP S/4HANA mit
              Electronic Batch Record.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Coffee className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Private-Label-FMCG-Pipelines</Typo.H3>
            <Typo.Paragraph>
              IFS Food-Audits, GS1-Stammdaten, multilinguale Etikettierungs-Workflows
              für 50+ Länder, Promotion- und Listungs-Disposition mit LEH-Kunden,
              Anbindung an SAP und CRM.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Building2 className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Holding-Konsolidierung für INDUS-Tochter-Setups</Typo.H3>
            <Typo.Paragraph>
              Intercompany-Abrechnung, HGB- und CSRD-Konsolidierung,
              Working-Capital-Reporting und dezentrale Tochter-Workflows mit zentralem
              Reporting-Hub.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <HeartPulse className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Gesundheits- und Klinik-Workflows</Typo.H3>
            <Typo.Paragraph>
              Vinzenz Pallotti Hospital und Pflegeeinrichtungen brauchen DRG-Abrechnung,
              MDR-Dokumentation für Medizinprodukte und automatisierte Personalplanung
              im Drei-Schicht-Betrieb.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>
      <ContentWrapper colorScheme="gradient-night">
        <CityLinksFromMeta
          crossReference={metaCustom.crossReference}
          nearbySmall={metaCustom.nearbySmall}
        />
      </ContentWrapper>
      <ContentWrapper bodyWidth="small">
        <Typo.H2>Häufige Fragen aus Bergisch Gladbach</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={bergischGladbachFaqs} />
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
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
