import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentWrapper from "@/components/layout/content-wrapper";
import BackgroundHero from "@/components/heroes/background-hero";
import IntroBox from "@/components/ui/intro-box";
import BoundlessImageCard from "@/components/cards/boundless-image-card";
import DataTable from "@/components/ui/data-table";
import StatsList from "@/components/ui/stats-list";
import { FaqContainer } from "@/components/ui/faqs";
import { CityLinksFromMeta } from "@/components/standorte/city-links";
import ContactButton from "@/components/buttons/contact-button";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import Typo from "@/components/ui/typo";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-workflows-erlangen",
      preHeadline: "AI Workflows Erlangen",
      headline: "AI Workflows & Automatisierung in Erlangen",
      metaTitle: "AI Workflows Erlangen - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Erlangen. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Erlangen",
        "KI Automatisierung Erlangen",
        "Workflow Automatisierung Erlangen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-erlangen",
      preHeadline: "n8n Automation Erlangen",
      headline: "n8n Automation in Erlangen - Workflows automatisieren",
      metaTitle: "n8n Automation Erlangen | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Erlangen. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Erlangen",
        "n8n Erlangen",
        "Workflow Automation Erlangen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-erlangen",
      preHeadline: "n8n Erlangen",
      headline: "n8n Agentur in Erlangen",
      metaTitle: "n8n Erlangen - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Erlangen. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Erlangen und Umgebung.",
      keywords: [
        "n8n Erlangen",
        "n8n Agentur Erlangen",
        "n8n Beratung Erlangen",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-erlangen",
      preHeadline: "Automation Erlangen",
      headline: "Automation & Prozessoptimierung in Erlangen",
      metaTitle: "Automation Erlangen - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Erlangen. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Erlangen",
        "Prozessautomatisierung Erlangen",
        "Workflow Automation Erlangen",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-erlangen",
      preHeadline: "IT Dienstleister Erlangen",
      headline: "IT Dienstleister in Erlangen - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Erlangen - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Erlangen. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Erlangen.",
      keywords: [
        "IT Dienstleister Erlangen",
        "IT Service Erlangen",
        "Digitalisierung Erlangen",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-erlangen",
      preHeadline: "KI Beratung Erlangen",
      headline: "KI Beratung in Erlangen - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Erlangen - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Erlangen. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Erlangen",
        "KI Lösungen Erlangen",
        "Künstliche Intelligenz Erlangen",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Erlangen",
  slug: "erlangen",
  bundesland: "Bayern",
  publish: false,
  nearbySmall: [
    "Herzogenaurach",
    "Forchheim",
    "Bamberg",
    "Höchstadt an der Aisch",
  ],
  crossReference: [
    { name: "Nürnberg", slug: "nuernberg" },
    { name: "Fürth", slug: "fuerth" },
    { name: "Bamberg", slug: "bamberg" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Erlangen | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "MedTech- und Energie-Automatisierung in Erlangen: n8n-Workflows für Siemens Healthineers, Siemens Energy, Universitätsklinikum und das Medical Valley - MDR-, IVDR- und GAMP-5-konform.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI-Agentur Erlangen",
      "n8n Erlangen",
      "MDR Workflow Erlangen",
      "Siemens Zulieferer Workflow",
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
          url: "/images/cities/erlangen.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch KI-Agentur Erlangen",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/erlangen.jpg"],
    },
    alternates: {
      canonical: "/standorte/erlangen",
    },
  };
}

const erlangenFaqs = [
  {
    question: "Wir liefern an Siemens Healthineers - wie deckt n8n MDR und IVDR ab?",
    answer:
      "Self-hosted on-premise mit vollständiger Versionierung jeder technischen Dokumentation. Wir bauen Workflows für Post-Market-Surveillance, Vigilance-Meldungen an BfArM und EMA, UDI-Registrierung in EUDAMED und Lieferanten-Qualifizierung nach MDR Anhang IX - auditfest mit elektronischer Signatur nach 21 CFR Part 11.",
  },
  {
    question: "Lässt sich die Healthineers-Abspaltung als Workflow-Großprojekt abbilden?",
    answer:
      "Genau dafür ist n8n stark. Bei der organisatorischen Trennung von Siemens und Healthineers müssen ERP-Mandanten getrennt, neue Schnittstellen aufgesetzt, Personal- und Buchhaltungsprozesse separiert werden. Wir migrieren bestehende SAP- und Veeva-Vault-Prozesse in saubere, parallel laufende Workflows ohne Stillstand.",
  },
  {
    question: "Was bringt n8n bei Siemens Energy?",
    answer:
      "Siemens Energy in Erlangen betreibt Netze, Generatoren und Wasserstoff-Sparten. Wir automatisieren Angebotskalkulation für Großanlagen, REACH/SCIP-Meldungen, CBAM-Reporting und Projektdokumentation. Anbindung an Siemens-Teamcenter, SAP S/4HANA und Comos-PLM ist Standard.",
  },
  {
    question: "Hilft n8n am Universitätsklinikum Erlangen und im Medical Valley?",
    answer:
      "Ja. Wir automatisieren Patientenaufnahme mit FHIR-Anbindung an die ePA, DRG-Kodierung, Studienverwaltung nach ICH-GCP und Materialwirtschaft. Im Medical Valley unterstützen wir Startups beim Aufbau MDR-konformer Prozesse, bevor sie zertifiziert werden müssen.",
  },
  {
    question: "Wir sind 200-MA-Engineering-Dienstleister im Siemens-Umfeld - lohnt sich das?",
    answer:
      "Gerade dann. Wer aus den Siemens-Rahmenverträgen fliegt, weil EDI- oder Forecast-Anbindung fehlt, verliert Millionenumsatz. Wir bauen die SRM-/SAP-Ariba-Integration und die MDR-Lieferanten-Qualifizierung zum Festpreis in 4 bis 8 Wochen produktiv, on-premise in eurem deutschen Rechenzentrum.",
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
          imageSrc="/images/cities/erlangen.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Erlangen"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Erlangen -{" "}
                Medizintechnik- und Energie-Automatisierung im{" "}
                <BackgroundHero.Highlight>Medical Valley</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Siemens Healthineers, Siemens Energy und das Universitätsklinikum
            prägen den Erlanger Arbeitsmarkt. Wir automatisieren MDR-,
            IVDR- und Pharma-Workflows mit self-hosted n8n - auditfest und
            on-premise.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">
              MedTech-Workflow besprechen
            </ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={24000}
              label="Siemens-Beschäftigte in Erlangen"
              index={0}
            />
            <BackgroundHero.Stat
              value={11000}
              label="Mitarbeiter Siemens Healthineers"
              index={1}
            />
            <BackgroundHero.Stat
              value={22.4}
              suffix=" Mrd. €"
              label="Healthineers-Umsatz GJ 2024"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 4. DataTable - MedTech-Vergleich */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>
            MedTech- und Energie-Prozesse automatisieren
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Der konkrete Zeitgewinn pro Workflow
          </IntroBox.Headline>
        </IntroBox>
        <div className="mt-8">
          <DataTable>
            <DataTable.Head>
              <DataTable.Row>
                <DataTable.HeaderCell>Prozess</DataTable.HeaderCell>
                <DataTable.HeaderCell>Manuell</DataTable.HeaderCell>
                <DataTable.HeaderCell>Automatisiert</DataTable.HeaderCell>
                <DataTable.HeaderCell>Zeitersparnis</DataTable.HeaderCell>
              </DataTable.Row>
            </DataTable.Head>
            <DataTable.Body>
              <DataTable.Row>
                <DataTable.Cell bold>MDR-UDI-Registrierung EUDAMED</DataTable.Cell>
                <DataTable.Cell>3 Std./Produkt</DataTable.Cell>
                <DataTable.Cell>10 Min</DataTable.Cell>
                <DataTable.Cell bold>~94 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Vigilance-Meldung BfArM</DataTable.Cell>
                <DataTable.Cell>90 Min/Case</DataTable.Cell>
                <DataTable.Cell>8 Min</DataTable.Cell>
                <DataTable.Cell bold>~91 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Healthineers-Lieferanten-Qualifizierung</DataTable.Cell>
                <DataTable.Cell>5 Tage</DataTable.Cell>
                <DataTable.Cell>4 Std.</DataTable.Cell>
                <DataTable.Cell bold>~92 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Siemens Energy CBAM-Reporting</DataTable.Cell>
                <DataTable.Cell>6 Std./Monat</DataTable.Cell>
                <DataTable.Cell>20 Min</DataTable.Cell>
                <DataTable.Cell bold>~94 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Uni-Klinikum Studien-Verwaltung</DataTable.Cell>
                <DataTable.Cell>2 Std./Visit</DataTable.Cell>
                <DataTable.Cell>15 Min</DataTable.Cell>
                <DataTable.Cell bold>~88 %</DataTable.Cell>
              </DataTable.Row>
            </DataTable.Body>
          </DataTable>
        </div>
      </ContentWrapper>

      {/* 3. IntroBox + Deep Dive Text */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Siemens, Healthineers, FAU - Medical Valley unter MDR-Druck
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo MRT-Technologie auf Energietechnik und Spitzenforschung trifft
          </IntroBox.Headline>
          <IntroBox.Subline>
            Erlangen ist das Herz des Medical Valley EMN, einer der weltweit
            führenden Health-Tech-Standorte. Siemens Healthineers sitzt hier
            mit dem neuen Innovation Center, Siemens Energy mit Netz- und
            Wasserstoffsparten, das Universitätsklinikum mit 9.000 Beschäftigten
            und die FAU mit 40.000 Studierenden. Die Compliance-Pflichten
            sind massiv: MDR, IVDR, REACH und GAMP 5.
          </IntroBox.Subline>
        </IntroBox>
        <div className="mt-8 space-y-6">
          <Typo.Paragraph>
            Siemens Healthineers ist Weltmarktführer für bildgebende Verfahren
            wie MRT, CT und Röntgen, mit rund 11.000 Beschäftigten in Erlangen
            und weltweit etwa 72.000. Im Geschäftsjahr 2024 erwirtschaftete
            der Konzern 22,4 Milliarden Euro Umsatz. Die EU-Medical-Device-Regulation
            und die IVDR setzen Hersteller wie auch ihre Zulieferer unter
            massiven regulatorischen Druck: technische Dokumentation,
            Auditpfade nach MDR Anhang IX, Lieferanten-Qualifizierung,
            Post-Market-Surveillance und UDI-Registrierung in EUDAMED.
            Ohne Workflow-Automatisierung ist diese Last nicht skalierbar.
            Die für 2026 vorgesehene Abspaltung von Siemens vergrößert den
            Workflow-Bedarf zusätzlich - getrennte SAP-Mandanten,
            Personalprozesse und Buchhaltung.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Siemens Energy mit großem Standort und rund 24.000 Siemens-Mitarbeitern
            am Standort steuert Netze, Generatoren und die wachsende
            Wasserstoff-Sparte. CBAM-Reporting, REACH-SCIP-Meldungen,
            Großprojekt-Dokumentation in Teamcenter und Comos-PLM sind hier
            der Alltag. Auf der anderen Seite betreibt Framatome
            (vormals Areva) eine Brennelementefertigung und Engineering-Standort
            mit rund 1.500 Mitarbeitern, mit allen Spezialitäten des
            kerntechnischen Regulierens.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Im Medical Valley EMN tummeln sich über 500 Akteure aus Medizintechnik,
            IT und Versorgung. Das Universitätsklinikum als Maximalversorger,
            die FAU als eine der größten Universitäten Deutschlands und
            Fraunhofer IIS (Erfinder des MP3-Formats) bilden das wissenschaftliche
            Rückgrat. Hier entstehen Spin-offs, die früh MDR-konforme Prozesse
            brauchen - und Mittelständler, die als Tier-1 oder Tier-2 in
            Siemens-Lieferketten passen müssen. Wie wir das in sechs Phasen
            ausrollen, beschreiben wir auf{" "}
            <Link href="/unser-prozess" className="text-primary-600 hover:underline">
              Unser Prozess
            </Link>
            .
          </Typo.Paragraph>
        </div>
        <div className="mt-10">
          <BoundlessImageCard imagePosition="right">
            <BoundlessImageCard.Image
              src="/images/cities/erlangen.jpg"
              alt="MDR- und IVDR-Automatisierung für Healthineers-Zulieferer in Erlangen"
            />
            <BoundlessImageCard.Content>
              <Typo.H2>
                Healthineers investiert in KI - was machen MedTech-Mittelständler im Medical Valley?
              </Typo.H2>
              <Typo.Paragraph>
                Siemens Healthineers baut massive KI-Teams für bildgebende
                Diagnostik. MedTech-Startups und mittelständische Zulieferer
                im Medical Valley brauchen einen pragmatischen Hebel: schlanke
                Workflows zwischen Veeva Vault QMS, SAP und EUDAMED, ohne
                ein eigenes Compliance-Großprojekt. Self-hosted, in eurem
                deutschen Rechenzentrum, modular erweiterbar.
              </Typo.Paragraph>
            </BoundlessImageCard.Content>
          </BoundlessImageCard>
        </div>
      </ContentWrapper>

      {/* 2. StatsList horizontal */}
      <ContentWrapper colorScheme="primary">
        <StatsList
          cols={4}
          stats={[
            { value: 115900, label: "Einwohner Erlangen" },
            { value: 9000, label: "Beschäftigte Universitätsklinikum" },
            { value: 40000, label: "Studierende FAU" },
            { value: 500, suffix: "+", label: "Akteure Medical Valley EMN" },
          ]}
        />
      </ContentWrapper>

      {/* 7. City Links */}
      <ContentWrapper colorScheme="gradient-night">
        <CityLinksFromMeta
          crossReference={metaCustom.crossReference}
          nearbySmall={metaCustom.nearbySmall}
        />
      </ContentWrapper>

      {/* 5. FAQ */}
      <ContentWrapper bodyWidth="small">
        <Typo.H2>Häufige Fragen aus Erlangen</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={erlangenFaqs} />
        </div>
      </ContentWrapper>

      {/* 6. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
