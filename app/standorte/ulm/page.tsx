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
import { Truck, Siren, Store, Home } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-agentur-ulm",
  rewrites: [
    {
      source: "/ai-workflows-ulm",
      preHeadline: "AI Workflows Ulm",
      headline: "AI Workflows & Automatisierung in Ulm",
      metaTitle: "AI Workflows Ulm - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Ulm. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Ulm",
        "KI Automatisierung Ulm",
        "Workflow Automatisierung Ulm",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-ulm",
      preHeadline: "n8n Automation Ulm",
      headline: "n8n Automation in Ulm - Workflows automatisieren",
      metaTitle: "n8n Automation Ulm | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Ulm. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Ulm",
        "n8n Ulm",
        "Workflow Automation Ulm",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-ulm",
      preHeadline: "n8n Ulm",
      headline: "n8n Agentur in Ulm",
      metaTitle: "n8n Ulm - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Ulm. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Ulm und Umgebung.",
      keywords: [
        "n8n Ulm",
        "n8n Agentur Ulm",
        "n8n Beratung Ulm",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-ulm",
      preHeadline: "Automation Ulm",
      headline: "Automation & Prozessoptimierung in Ulm",
      metaTitle: "Automation Ulm - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Ulm. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Ulm",
        "Prozessautomatisierung Ulm",
        "Workflow Automation Ulm",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-ulm",
      preHeadline: "IT Dienstleister Ulm",
      headline: "IT Dienstleister in Ulm - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Ulm - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Ulm. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Ulm.",
      keywords: [
        "IT Dienstleister Ulm",
        "IT Service Ulm",
        "Digitalisierung Ulm",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-ulm",
      preHeadline: "KI Beratung Ulm",
      headline: "KI Beratung in Ulm - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Ulm - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Ulm. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Ulm",
        "KI Lösungen Ulm",
        "Künstliche Intelligenz Ulm",
        "Bluebatch",
      ],
    },
      {
      source: "/ki-agentur-ulm",
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Ulm",
  slug: "ulm",
  bundesland: "Baden-Württemberg",
  publish: false,
  nearbySmall: [
    "Neu-Ulm",
    "Ehingen",
    "Blaubeuren",
    "Laupheim",
    "Biberach an der Riß",
    "Geislingen an der Steige",
  ],
  crossReference: [
    { name: "Stuttgart", slug: "stuttgart" },
    { name: "Augsburg", slug: "augsburg" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Ulm | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Workflows für Ulmer Truck, Retail und Forschung: Wasserstoff-LKW-Pipelines für Daimler Truck, Feuerwehr-Sonderfahrzeuge für Iveco Magirus, Filial-Workflows für Müller Drogerie und BIM-Pipelines für Schwörer.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Ulm",
      "n8n Ulm",
      "Daimler Truck Wasserstoff",
      "Iveco Magirus",
      "Müller Drogerie Filiale",
      "Bluebatch",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [{ url: "/images/cities/ulm.jpg", width: 1200, height: 630, alt: "Ulm - Daimler Truck, Iveco und Schwörer Haus" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/cities/ulm.jpg"] },
    alternates: { canonical: "/ki-agentur-ulm" },
  };
}

const ulmFaqs = [
  {
    question: "Daimler-Truck-Zulieferer: wie hilft n8n bei E-Mobility-Transformation?",
    answer:
      "Lieferanten-Onboarding für Wasserstoff-/Brennstoffzellen-Komponenten, IATF-Audits und PPAP-Pakete in n8n-Pipelines. EDI-Anbindung an Daimler-Lieferantenportale und ZEUS-Compliance integriert.",
  },
  {
    question: "Iveco-Magirus-Umfeld: was bringt Automatisierung bei kommunaler Vergabe?",
    answer:
      "VgV-/UVgO-Ausschreibungen, CE-/EN-1846-Konformität, kommunale Lieferungs-Dokumentation und After-Sales in n8n-Pipelines. Anbindung an Vergabe-Plattformen wie evergabe.de.",
  },
  {
    question: "Müller-Drogerie-Filialnetz: wie skalieren Filial-Workflows?",
    answer:
      "Filial-Bestellsysteme, Lieferanten-EDI (EDIFACT, EANCOM), Promotion-Management und KI-Personalisierung im E-Commerce. Anbindung an SAP Retail, Filial-Apps und CRM.",
  },
  {
    question: "Schwörer Haus oder Fertighaus-Mittelstand: was bringt n8n?",
    answer:
      "Konfigurator-zu-Bau-Phasen-Workflows, KfW-Förderprogramm-Anträge und Energieausweis-Workflows. Anbindung an BIM-Tools (Allplan, Revit), DATEV und KfW-Portale.",
  },
  {
    question: "Uni Ulm: kann n8n Drittmittel- und Patent-Reporting abbilden?",
    answer:
      "Ja. DFG-, BMBF- und EU-Horizon-Projekte mit Zeiterfassung, Verwendungsnachweis und Quartalsreports. Anbindung an HISinOne, SAP CO, easy-Online und Patent-Datenbanken inklusive.",
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
              {overrides?.preHeadline ?? "Standort Ulm - Donau-Universitätsstadt"}
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              {overrides?.headline ?? "KI-Agentur in Ulm - für Daimler Truck, Iveco und Müller Drogerie"}
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Daimler Truck baut in Ulm Nutzfahrzeuge, Iveco fertigt Magirus-Feuerwehr-Fahrzeuge, Müller Drogerie hat Ulm-Hauptsitz und die Universität Ulm prägt KI- und Quantenforschung. Wir bauen Workflows für Nutzfahrzeug-Compliance, Drogerie-Filialnetz und Forschung.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Beratung anfragen
              </ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/cities/ulm.jpg"
              alt="Ulm - Daimler Truck, Iveco und Schwörer Haus"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 4. SimpleGrid cols=2 - 4 Specialty-Use-Cases */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Workflow-Bausteine für Ulmer Truck, Retail und Forschung</Typo.H2>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Truck className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Daimler-Truck-Lieferanten- und IATF-Pipelines</Typo.H3>
            <Typo.Paragraph>
              Lieferanten-Onboarding für Wasserstoff-/E-Mobility-Komponenten, IATF-Audits, PPAP-Pakete und ZEUS-Compliance. EDI-Anbindung an Daimler-Lieferantenportale.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Siren className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Feuerwehr-Sonderfahrzeug-Workflows</Typo.H3>
            <Typo.Paragraph>
              VgV-/UVgO-Ausschreibungen, CE-/EN-1846-Konformität, kommunale Lieferungs-Dokumentation und After-Sales in n8n-Pipelines. Anbindung an Vergabe-Plattformen wie evergabe.de.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Store className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Müller-Drogerie-Filial- und EDI-Workflows</Typo.H3>
            <Typo.Paragraph>
              Filial-Bestellsysteme, Lieferanten-EDI (EDIFACT, EANCOM), Promotion-Management und KI-Personalisierung im E-Commerce. Anbindung an SAP Retail, Filial-Apps und CRM.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Home className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Fertighaus-BIM- und KfW-Förder-Pipelines</Typo.H3>
            <Typo.Paragraph>
              Konfigurator-zu-Bau-Phasen-Workflows, KfW-Förderprogramm-Anträge und Energieausweis-Workflows. Anbindung an BIM-Tools (Allplan, Revit), DATEV und KfW-Portale.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 2. IntroBox - Specialty-Cluster-Story */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Ulm - höchster Kirchturm der Welt und Quanten-Cluster
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo Daimler Truck Wasserstoff-LKW entwickelt und Müller Drogerie 900+ Filialen versorgt, müssen Workflows industriell und retail-fähig sein
          </IntroBox.Headline>
          <IntroBox.Subline>
            Daimler Truck (Hauptsitz Ulm/Stuttgart), Iveco Magirus (Feuerwehr-Marktführer), Müller Drogerie mit 900+ Filialen, Schwörer Haus (Fertighaus-Marktführer) und Universität Ulm - diese Mischung verlangt Pipelines für Truck-IATF, Retail-Filial-Operations und Quantenforschung.
          </IntroBox.Subline>
        </IntroBox>
      </ContentWrapper>

      {/* 3. NumberedList - 5 Stadt-Eigenheiten */}
      <ContentWrapper bodyWidth="small">
        <Typo.H2>5 Eigenheiten der Ulmer Wirtschaft, die Workflows beeinflussen</Typo.H2>
        <div className="mt-6">
          <NumberedList>
            <NumberedList.Item title="Daimler Truck und Wasserstoff-/Brennstoffzellen-Transformation:">
              Daimler Truck mit Standort Ulm transformiert sich zu Wasserstoff- und Brennstoffzellen-LKW. Lieferanten-Onboarding, IATF-16949, PPAP und ZEUS-Fahrzeug-Komplett-Compliance sind Pipeline-Themen.
            </NumberedList.Item>
            <NumberedList.Item title="Iveco Magirus und Feuerwehr-Sonderfahrzeuge:">
              Iveco Magirus in Ulm ist Marktführer für Feuerwehr-Sonderfahrzeuge mit kommunaler Vergabe nach VgV/UVgO. Ausschreibungs-Workflows, CE-/EN-1846-Konformität und After-Sales sind Themen.
            </NumberedList.Item>
            <NumberedList.Item title="Müller Drogerie und 900+ Filialnetz:">
              Müller Holding mit über 900 Filialen in DACH ist Workflow-intensiv: Filial-Bestellsysteme, Lieferanten-EDI, Promotion-Management und KI-Personalisierung im E-Commerce.
            </NumberedList.Item>
            <NumberedList.Item title="Schwörer Haus und Fertighaus-Auftragsabwicklung:">
              Schwörer Haus (Hohenstein, Region Ulm) ist Fertighaus-Marktführer mit BIM-basierter Bauplanung. Auftragsabwicklung von Konfigurator zu Bau-Phasen, KfW-Förderprogramme und Energieausweis-Workflows.
            </NumberedList.Item>
            <NumberedList.Item title="Universität Ulm und Quanten-/KI-Cluster:">
              Universität Ulm mit QU-IUlm Quantenforschung, KI-Anwendungs-Labor und translationaler Medizin (PsyArXiv, Unfallchirurgie). Drittmittel, Industriepartnerschaften und Patente sind Pipeline-Themen.
            </NumberedList.Item>
          </NumberedList>
        </div>
      </ContentWrapper>

      {/* 5. StatsList horizontal */}
      <ContentWrapper colorScheme="primary">
        <StatsList
          cols={4}
          stats={[
            { value: 130000, label: "Einwohner Ulm" },
            { value: 900, suffix: "+", label: "Müller-Drogerie-Filialen DACH" },
            { value: 161, suffix: " m", label: "Höhe Ulmer Münster (höchster Kirchturm)" },
            { value: 1477, label: "Grundsteinlegung Ulmer Münster" },
          ]}
        />
      </ContentWrapper>

      {/* 7.5. Bonus — Nutzfahrzeug-Transformation Ulm */}
      <ContentWrapper>
        <Typo.H2>Ulm zwischen Wasserstoff-Zukunft und Iveco-Magirus-Bestand</Typo.H2>
        <Typo.Paragraph>
          Wenige Städte spüren den Strukturwandel im Nutzfahrzeugbau so direkt
          - Daimler Truck blickt nach vorn, Iveco-Magirus kämpft mit den
          Folgen alter Geschäftsmodelle.
        </Typo.Paragraph>
        <div className="mt-8">
          <ProsCons>
            <ProsCons.Pros>
              <ProsCons.Item
                title="Daimler Truck Wasserstoff-Zentrale"
                description="Cellcentric als JV mit Volvo, Brennstoffzellen-LKW-Entwicklung, Hauptsitz Daimler Truck mit Werk Wörth in der Nähe. ALM-Workflows, Wasserstoff-Lieferketten und FCEV-Zertifizierungen sind der Fokus."
              />
              <ProsCons.Item
                title="Universität &amp; Wissenschaftsstadt"
                description="Uni Ulm mit Schwerpunkt Quantencomputing und Batterieforschung, dazu Helmholtz-Institut Ulm. Forschungs-zu-Produkt-Workflows sind hier Standard, nicht Ausnahme."
              />
            </ProsCons.Pros>
            <ProsCons.Cons>
              <ProsCons.Item
                title="Iveco-Magirus-Bestandsdruck"
                description="Magirus als Feuerwehrfahrzeug-Hersteller, Iveco-Werk vor Restrukturierung. ERP-Migrationen, Lieferanten-Konsolidierung und Produktionsverlagerungen erzeugen massiven Workflow-Bedarf."
              />
              <ProsCons.Item
                title="Verbrenner-LKW-Auslauf"
                description="EURO-7-Norm und CO2-Flottenziele zwingen Daimler Truck und Iveco zur Doppel-Strategie. Workflows müssen Diesel-Bestand und Wasserstoff-/Batterie-Linien parallel managen."
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
        <Typo.H2>Häufige Fragen aus Ulm</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={ulmFaqs} />
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
