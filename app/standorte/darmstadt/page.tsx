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
      source: "/ai-workflows-darmstadt",
      preHeadline: "AI Workflows Darmstadt",
      headline: "AI Workflows & Automatisierung in Darmstadt",
      metaTitle: "AI Workflows Darmstadt - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Darmstadt. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Darmstadt",
        "KI Automatisierung Darmstadt",
        "Workflow Automatisierung Darmstadt",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-darmstadt",
      preHeadline: "n8n Automation Darmstadt",
      headline: "n8n Automation in Darmstadt - Workflows automatisieren",
      metaTitle: "n8n Automation Darmstadt | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Darmstadt. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Darmstadt",
        "n8n Darmstadt",
        "Workflow Automation Darmstadt",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-darmstadt",
      preHeadline: "n8n Darmstadt",
      headline: "n8n Agentur in Darmstadt",
      metaTitle: "n8n Darmstadt - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Darmstadt. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Darmstadt und Umgebung.",
      keywords: [
        "n8n Darmstadt",
        "n8n Agentur Darmstadt",
        "n8n Beratung Darmstadt",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-darmstadt",
      preHeadline: "Automation Darmstadt",
      headline: "Automation & Prozessoptimierung in Darmstadt",
      metaTitle: "Automation Darmstadt - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Darmstadt. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Darmstadt",
        "Prozessautomatisierung Darmstadt",
        "Workflow Automation Darmstadt",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-darmstadt",
      preHeadline: "IT Dienstleister Darmstadt",
      headline: "IT Dienstleister in Darmstadt - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Darmstadt - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Darmstadt. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Darmstadt.",
      keywords: [
        "IT Dienstleister Darmstadt",
        "IT Service Darmstadt",
        "Digitalisierung Darmstadt",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-darmstadt",
      preHeadline: "KI Beratung Darmstadt",
      headline: "KI Beratung in Darmstadt - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Darmstadt - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Darmstadt. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Darmstadt",
        "KI Lösungen Darmstadt",
        "Künstliche Intelligenz Darmstadt",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Darmstadt",
  slug: "darmstadt",
  bundesland: "Hessen",
  publish: false,
  nearbySmall: [
    "Rüsselsheim am Main",
    "Langen",
    "Dreieich",
    "Rodgau",
    "Bensheim",
    "Pfungstadt",
    "Dieburg",
    "Groß-Gerau",
  ],
  crossReference: [
    { name: "Frankfurt am Main", slug: "frankfurt-am-main" },
    { name: "Offenbach am Main", slug: "offenbach-am-main" },
    { name: "Mannheim", slug: "mannheim" },
    { name: "Heidelberg", slug: "heidelberg" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Darmstadt | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Pharma-, Raumfahrt- und Cybersecurity-Automatisierung in Darmstadt: n8n-Workflows für Merck KGaA, ESA-ESOC, EUMETSAT, Software AG und ATHENE - GxP-, ESA-OPS- und ISO-27001-konform.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI-Agentur Darmstadt",
      "n8n Darmstadt",
      "Merck Workflow Darmstadt",
      "ESA-ESOC Automatisierung",
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
          url: "/images/cities/darmstadt.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch KI-Agentur Darmstadt",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/darmstadt.jpg"],
    },
    alternates: {
      canonical: "/standorte/darmstadt",
    },
  };
}

const darmstadtFaqs = [
  {
    question: "Wir liefern an Merck KGaA - wie deckt n8n GxP für das älteste Pharma-Unternehmen der Welt ab?",
    answer:
      "Self-hosted, on-premise, mit Anbindung an Veeva Vault, TrackWise und SAP S/4HANA. Wir bauen Workflows für Studien-, Chargen- und Pharmakovigilanz-Doku nach 21 CFR Part 11, Annex 11 und ICH-GCP. Marktzulassungs-Workflows an FDA, EMA und MHRA laufen versioniert und auditfest, mit elektronischer Signatur und vollem Audit-Trail.",
  },
  {
    question: "Lässt sich die Software-AG-zu-IBM-Migration mit n8n unterstützen?",
    answer:
      "Ja, das ist ein klassisches Konsolidierungs-Projekt. Wir migrieren bestehende webMethods-, ARIS- und Cumulocity-Integrationen behutsam und mit Parallelbetrieb in IBM- oder n8n-Strecken. Adabas/Natural-Modernisierungen bei Bestandskunden lassen sich phasenweise durch dokumentierte Schnittstellen ablösen.",
  },
  {
    question: "Hilft n8n bei ESA-ESOC und EUMETSAT in den Missions-Operations?",
    answer:
      "Routine-Operations-Monitoring, automatisierte Anomaliedetektion und Reports an Mitgliedsstaaten lassen sich mit n8n als Workflow-Backbone realisieren. Anbindung an SCOS-2000, EGOS-MS und MetOp-Datenpipelines ist möglich. Alles on-premise im ESOC-RZ, mit Vier-Augen-Freigaben für kritische Telecommand-Sequenzen.",
  },
  {
    question: "Was bringt das ATHENE-/CISPA-Anwendern in regulierten Branchen?",
    answer:
      "ATHENE arbeitet mit über 600 Forschern an KI-getriebenem Threat Hunting und Compliance-Automatisierung. Wir packen diese Forschung in produktive n8n-Workflows: automatisierte SBOM-Erzeugung, Sicherheitslücken-Triage und ISO-27001-konformes Vorfallsmanagement, mit Anbindung an SIEM-Systeme wie Splunk oder Elastic.",
  },
  {
    question: "Wir sind ENTEGA- oder Stadtwerks-IT - lässt sich Marktkommunikation automatisieren?",
    answer:
      "Ja. Smart-Meter-Rollout, dynamische Tarife, EDIFACT-MAKO (Marktkommunikation Strom/Gas), Heizkostenverordnung und CO2-Bepreisung sind klassische RPA-/Workflow-Felder. Wir docken an SAP IS-U, robotron und kVASy an, mit automatisiertem Klärfall-Management für UTILMD, MSCONS und ORDERS.",
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
          imageSrc="/images/cities/darmstadt.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Darmstadt"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Darmstadt -{" "}
                Wissenschaftsstadt zwischen Merck, ESA und{" "}
                <BackgroundHero.Highlight>Cybersecurity</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Merck KGaA, ESA-ESOC, Software AG und ATHENE prägen die
            Wissenschaftsstadt Darmstadt. Wir automatisieren GxP-,
            Mission-Operations- und Cybersecurity-Workflows mit self-hosted
            n8n - 21 CFR Part 11-, ESA-OPS- und ISO-27001-konform.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">
              Pharma-/Raumfahrt-Workflow besprechen
            </ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={11000}
              label="Merck-Mitarbeiter in Darmstadt"
              index={0}
            />
            <BackgroundHero.Stat
              value={63000}
              label="Merck KGaA weltweit"
              index={1}
            />
            <BackgroundHero.Stat
              value={1300}
              label="Beschäftigte ESA-ESOC + EUMETSAT"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 2. StatsList horizontal */}
      <ContentWrapper colorScheme="primary">
        <StatsList
          cols={4}
          stats={[
            { value: 162000, label: "Einwohner Darmstadt" },
            { value: 50000, label: "Studierende (4 Hochschulen)" },
            { value: 5000, label: "TU Darmstadt Mitarbeiter" },
            { value: 1668, label: "Merck-Gründungsjahr" },
          ]}
        />
      </ContentWrapper>

      {/* 4. DataTable - Pharma-/Cybersecurity-Vergleich */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>
            Pharma-, Raumfahrt- und Cybersecurity-Prozesse automatisieren
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
                <DataTable.Cell bold>Merck-CoA-Review (GxP-Charge)</DataTable.Cell>
                <DataTable.Cell>3 Std./Charge</DataTable.Cell>
                <DataTable.Cell>15 Min</DataTable.Cell>
                <DataTable.Cell bold>~92 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>EMA-/FDA-Marktzulassung Doku</DataTable.Cell>
                <DataTable.Cell>2 Tage</DataTable.Cell>
                <DataTable.Cell>3 Std.</DataTable.Cell>
                <DataTable.Cell bold>~94 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>ESA-Routine-Mission-Report</DataTable.Cell>
                <DataTable.Cell>4 Std./Pass</DataTable.Cell>
                <DataTable.Cell>15 Min</DataTable.Cell>
                <DataTable.Cell bold>~94 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>ATHENE SBOM-/Schwachstellen-Triage</DataTable.Cell>
                <DataTable.Cell>2 Std./Repo</DataTable.Cell>
                <DataTable.Cell>5 Min</DataTable.Cell>
                <DataTable.Cell bold>~96 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>ENTEGA UTILMD/MSCONS-Klärfall</DataTable.Cell>
                <DataTable.Cell>30 Min/Fall</DataTable.Cell>
                <DataTable.Cell>2 Min</DataTable.Cell>
                <DataTable.Cell bold>~93 %</DataTable.Cell>
              </DataTable.Row>
            </DataTable.Body>
          </DataTable>
        </div>
      </ContentWrapper>

      {/* 3. IntroBox + Deep Dive Text */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Merck, ESA-ESOC, Software AG, ATHENE - Pharma trifft Raumfahrt trifft Cybersecurity
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo das älteste Pharma-Unternehmen der Welt auf europäische Missions-Kontrolle trifft
          </IntroBox.Headline>
          <IntroBox.Subline>
            Darmstadt ist offizielle Wissenschaftsstadt mit vier Welten in
            einem: Merck KGaA als ältestes Pharma- und Chemie-Unternehmen
            der Welt (gegründet 1668), ESA-ESOC als Missions-Kontrollzentrum
            für ESA-Satelliten, Software AG mit jahrzehntelangem
            Adabas/Natural-Erbe und ATHENE als europaweit größtes IT-Sicherheits-
            Forschungszentrum. Vier extreme Compliance-Welten, eine
            gemeinsame Antwort: auditfeste, on-premise Workflows.
          </IntroBox.Subline>
        </IntroBox>
        <div className="mt-8 space-y-6">
          <Typo.Paragraph>
            Merck KGaA mit Hauptsitz in Darmstadt beschäftigt rund 11.000
            Mitarbeiter am Standort und 63.000 weltweit. Pharma, Life Science
            und Performance Materials operieren in über 65 Ländern unter
            strengsten regulatorischen Anforderungen: GxP, EMA, FDA, MHRA.
            Studien-, Chargen- und Compliance-Dokumentation, Lieferanten-Audits,
            Marktzulassungen und Pharmakovigilanz nach 21 CFR Part 11 und
            Annex 11 sind hochgradig formularlastig und prädestiniert für
            Workflow- und KI-Automatisierung. Merck selbst investiert
            intensiv in eigene Digital-Assistenten und automatisierte
            Lab-Workflows - Zulieferer und Engineering-Dienstleister müssen
            dasselbe Niveau halten.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Direkt nebenan steuert ESA-ESOC mit rund 1.300 Beschäftigten
            (zusammen mit EUMETSAT) Dutzende Missionen: BepiColombo, Gaia,
            Mars Express, ExoMars. EUMETSAT betreibt MetOp- und Meteosat-
            Satelliten. Jede Mission hat eigene Datenpipelines, Routine-
            Operations und automatisierte Reports an Mitgliedsstaaten.
            Anomaliedetektion mit KI ist ein Wachstumsfeld. Die Software AG
            (heute Teil von IBM/SilverLake) mit rund 1.800 Beschäftigten in
            Darmstadt durchlebt eine massive Konsolidierung: webMethods,
            ARIS, Cumulocity und Adabas/Natural-Modernisierungen erzeugen
            globalen Beratungsumsatz und Workflow-Bedarf.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Das ATHENE-Forschungszentrum als Nationales Forschungszentrum
            für angewandte Cybersicherheit, betrieben von TU Darmstadt,
            Fraunhofer SIT und IGD, beschäftigt über 600 Forscher. Hinzu
            kommt EBay-Erbe der Deutschen Telekom mit rund 5.500 Beschäftigten
            in der Region, die TU Darmstadt mit 5.000 Mitarbeitern und das
            Universitätsklinikum mit etwa 3.500. ENTEGA als regionaler
            Energieversorger steht unter Smart-Meter-Rollout- und MAKO-Druck.
            Wie wir die Implementierung in sechs Phasen ausrollen, beschreiben
            wir auf{" "}
            <Link href="/unser-prozess" className="text-primary-600 hover:underline">
              Unser Prozess
            </Link>
            .
          </Typo.Paragraph>
        </div>
        <div className="mt-10">
          <BoundlessImageCard imagePosition="right">
            <BoundlessImageCard.Image
              src="/images/cities/darmstadt.jpg"
              alt="GxP- und Cybersecurity-Automatisierung für Merck-Zulieferer und Pharma-Mittelstand in Darmstadt"
            />
            <BoundlessImageCard.Content>
              <Typo.H2>
                Merck baut KI-Lab-Assistenten - was machen Zulieferer und Mittelstand?
              </Typo.H2>
              <Typo.Paragraph>
                Merck investiert in eigene Digital-Assistenten und
                Lab-Automation. Mittelständische Pharma-Engineering-Dienstleister,
                Verpacker und IT-Häuser brauchen einen pragmatischen Hebel:
                schlanke n8n-Workflows zwischen Veeva Vault, SAP und Merck-
                Lieferantenportal - self-hosted, modular, ohne Vendor Lock-in.
              </Typo.Paragraph>
            </BoundlessImageCard.Content>
          </BoundlessImageCard>
        </div>
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
        <Typo.H2>Häufige Fragen aus Darmstadt</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={darmstadtFaqs} />
        </div>
      </ContentWrapper>

      {/* 6. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
