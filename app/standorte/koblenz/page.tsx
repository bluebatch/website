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
  mainRewrite: "/ki-agentur-koblenz",
  rewrites: [
    {
      source: "/ai-workflows-koblenz",
      preHeadline: "AI Workflows Koblenz",
      headline: "AI Workflows & Automatisierung in Koblenz",
      metaTitle: "AI Workflows Koblenz - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Koblenz. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Koblenz",
        "KI Automatisierung Koblenz",
        "Workflow Automatisierung Koblenz",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-koblenz",
      preHeadline: "n8n Automation Koblenz",
      headline: "n8n Automation in Koblenz - Workflows automatisieren",
      metaTitle: "n8n Automation Koblenz | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Koblenz. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Koblenz",
        "n8n Koblenz",
        "Workflow Automation Koblenz",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-koblenz",
      preHeadline: "n8n Koblenz",
      headline: "n8n Agentur in Koblenz",
      metaTitle: "n8n Koblenz - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Koblenz. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Koblenz und Umgebung.",
      keywords: [
        "n8n Koblenz",
        "n8n Agentur Koblenz",
        "n8n Beratung Koblenz",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-koblenz",
      preHeadline: "Automation Koblenz",
      headline: "Automation & Prozessoptimierung in Koblenz",
      metaTitle: "Automation Koblenz - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Koblenz. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Koblenz",
        "Prozessautomatisierung Koblenz",
        "Workflow Automation Koblenz",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-koblenz",
      preHeadline: "IT Dienstleister Koblenz",
      headline: "IT Dienstleister in Koblenz - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Koblenz - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Koblenz. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Koblenz.",
      keywords: [
        "IT Dienstleister Koblenz",
        "IT Service Koblenz",
        "Digitalisierung Koblenz",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-koblenz",
      preHeadline: "KI Beratung Koblenz",
      headline: "KI Beratung in Koblenz - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Koblenz - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Koblenz. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Koblenz",
        "KI Lösungen Koblenz",
        "Künstliche Intelligenz Koblenz",
        "Bluebatch",
      ],
    },
      {
      source: "/ki-agentur-koblenz",
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Koblenz",
  slug: "koblenz",
  bundesland: "Rheinland-Pfalz",
  publish: false,
  nearbySmall: [
    "Neuwied",
    "Andernach",
    "Bendorf",
    "Lahnstein",
    "Mayen",
    "Montabaur",
  ],
  crossReference: [
    { name: "Bonn", slug: "bonn" },
    { name: "Mainz", slug: "mainz" },
    { name: "Trier", slug: "trier" },
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
    overrides?.metaTitle ??
    "KI-Agentur in Koblenz | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Wehrtechnik- und Mittelstand-Automatisierung in Koblenz: n8n-Workflows für BAAINBw-Zulieferer, Stabilus, ZF Active Safety, Schottel, Novelis und CompuGroup Medical - BAFA-, ITAR- und NCS-konform.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Koblenz",
      "n8n Koblenz",
      "BAAINBw Zulieferer Workflow",
      "Wehrtechnik Automatisierung Koblenz",
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
          url: "/images/cities/koblenz.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch Workflow-Automatisierung Koblenz",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/koblenz.jpg"],
    },
    alternates: {
      canonical: "/ki-agentur-koblenz",
    },
  };
}

const koblenzFaqs = [
  {
    question: "Wir liefern an BAAINBw - wie automatisiert ihr Vergabe- und Compliance-Workflows?",
    answer:
      "Self-hosted on-premise, mit Anbindung an SAP S/4HANA und das Vergabeportal des Bundes (eVergabe). Wir bauen Workflows für VgV-/UVgO-konforme Angebote, NATO-Codifizierungs-Meldungen (NCS, Stock Numbers), BAFA-Exportkontroll-Anträge und Sicherheitsüberprüfungen nach SÜG, mit Vier-Augen-Freigaben und vollständigem Audit-Trail.",
  },
  {
    question: "Hilft n8n im Sondervermögen-Bundeswehr-Tempo?",
    answer:
      "Genau dafür. Mit dem Sondervermögen Bundeswehr und der NATO-Aufrüstung verlangt BAAINBw deutlich höhere Liefer- und Prüfgeschwindigkeit. Wir automatisieren Pre-Approval-Checks für US-ITAR und EU-Dual-Use, NATO-Stock-Number-Pflege, IUID-Markierung und VS-NfD-konforme Doku-Workflows - mit Slack- oder MS-Teams-Eskalationen.",
  },
  {
    question: "Was bringt n8n bei Stabilus und ZF Active Safety im Automotive-Wandel?",
    answer:
      "Stabilus ist Weltmarktführer für Gasfedern (rund 1,1 Mrd. EUR Umsatz), ZF Active Safety produziert Bremssysteme in Koblenz. Wir automatisieren EDI nach VDA-4905, Catena-X-PCF, IATF-16949-konforme APQP-/PPAP-Doku, Reklamationsmanagement und das Lieferanten-Onboarding - on-premise und auditfest.",
  },
  {
    question: "Hilft das bei CompuGroup Medical und Gesundheits-IT?",
    answer:
      "CompuGroup ist europäischer Marktführer für Arztpraxis-Software und sitzt in Koblenz. Wir docken an CGM-Schnittstellen, KV-Connect und TI-Konnektoren der Telematikinfrastruktur an, automatisieren KIM-E-Mail-Workflows, eRezept-Prozesse und Abrechnung gegenüber den KVen.",
  },
  {
    question: "Was machen wir mit Mittelstand am Mittelrhein und BUGA 2029?",
    answer:
      "Hotellerie, Reedereien und Mittelständler entlang von Rhein und Mosel buchen viel manuell. Wir automatisieren Buchungs-Workflows zwischen Channel Manager, IBE und PMS, ATLAS-Zoll am Rheinhafen, BImSchG-Genehmigungen und CSRD-Reporting. BUGA-2029-Projektabwicklung mit komplexer Förderverwaltung läuft als versionierter Workflow.",
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
          imageSrc="/images/cities/koblenz.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Koblenz"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Koblenz -{" "}
                Wehrtechnik und Automotive{" "}
                <BackgroundHero.Highlight>am Deutschen Eck</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            BAAINBw, Stabilus, ZF Active Safety, CompuGroup Medical und
            Schottel prägen den Koblenzer Arbeitsmarkt. Wir automatisieren
            Vergabe-, ITAR- und Catena-X-Workflows mit self-hosted n8n -
            BAFA-, NCS- und ISO-27001-konform.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">
              Wehrtechnik-Workflow besprechen
            </ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={4400}
              label="BAAINBw-Beschäftigte"
              index={0}
            />
            <BackgroundHero.Stat
              value={6800}
              label="Stabilus weltweit (HQ Koblenz)"
              index={1}
            />
            <BackgroundHero.Stat
              value={4500}
              label="Mitarbeiter CompuGroup Medical"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 3. IntroBox + Deep Dive Text */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            BAAINBw, Stabilus, ZF, CompuGroup - Beschaffung, Automotive und Health-IT
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo das Beschaffungsamt der Bundeswehr auf Weltmarktführer-Mittelstand trifft
          </IntroBox.Headline>
          <IntroBox.Subline>
            Koblenz ist Bundeswehr- und Industriestadt zugleich, am
            Zusammenfluss von Rhein und Mosel. Das BAAINBw verantwortet ein
            Beschaffungsvolumen im zweistelligen Milliardenbereich, Stabilus
            ist Weltmarktführer für Gasfedern, CompuGroup führend bei
            Arztpraxis-Software. Mit dem Sondervermögen Bundeswehr und
            BUGA 2029 sind die Workflow-Anforderungen massiv gestiegen.
          </IntroBox.Subline>
        </IntroBox>
        <div className="mt-8 space-y-6">
          <Typo.Paragraph>
            Das BAAINBw - Bundesamt für Ausrüstung, Informationstechnik und
            Nutzung der Bundeswehr - ist eine der größten zivilen Bundesbehörden
            in Rheinland-Pfalz mit rund 4.400 Beschäftigten und verantwortet
            zweistellige Milliardenvolumen pro Jahr. Mit dem Sondervermögen
            Bundeswehr und der NATO-Aufrüstung sollen Materialbeschaffung
            und Vergabeverfahren dramatisch beschleunigt werden. Wehrtechnische
            Zulieferer in der Region müssen ihre Angebots- und Compliance-Prozesse
            automatisieren: BAFA-Exportkontrolle, ITAR-Pre-Approval, NATO-
            Codifizierung (NCS), Stock-Number-Pflege, IUID-Markierung und
            Sicherheitsüberprüfungen nach SÜG. Daneben sitzen in Koblenz das
            Streitkräfteamt und die WTD 41 - eine seltene Konzentration von
            Wehrtechnik-Beschaffung an einem Standort.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Im Automotive-Umfeld steht Stabilus als Weltmarktführer für
            Gasfedern und hydraulische Schwingungsdämpfer mit rund 6.800
            Beschäftigten weltweit und Hauptsitz Koblenz. ZF Active Safety
            produziert mit rund 2.700 Beschäftigten Bremssysteme, beide
            stehen unter Margendruck durch E-Mobilität und China-Wettbewerb.
            Schottel im benachbarten Spay ist Spezialist für Schiffsantriebe
            mit etwa 1.500 Mitarbeitern, Novelis betreibt ein Aluminium-Walzwerk
            mit 1.500 Beschäftigten. EDI nach VDA, Catena-X-PCF und
            IATF-16949-Doku sind hier Pflicht.
          </Typo.Paragraph>
          <Typo.Paragraph>
            CompuGroup Medical als europäischer Marktführer für Arztpraxis-Software
            beschäftigt rund 4.500 Mitarbeiter in Koblenz und versorgt einen
            Großteil deutscher Arztpraxen. Anbindung an die Telematikinfrastruktur
            (TI), KV-Connect, KIM-E-Mail und eRezept sind permanente
            Themen. Hinzu kommen Welterbe Oberes Mittelrheintal mit über
            5 Millionen Übernachtungen, BUGA 2029 als langfristiger
            Investitionsimpuls, das Bundesarchiv, drei Hochschulen und ein
            klassischer rheinischer Mittelstand zwischen Bau, Maschinenbau
            und Logistik. Wie wir die Implementierung in sechs Phasen ausrollen,
            beschreiben wir auf{" "}
            <Link href="/unser-prozess" className="text-primary-600 hover:underline">
              Unser Prozess
            </Link>
            .
          </Typo.Paragraph>
        </div>
        <div className="mt-10">
          <BoundlessImageCard imagePosition="right">
            <BoundlessImageCard.Image
              src="/images/cities/koblenz.jpg"
              alt="BAAINBw-Vergabe- und ITAR-Automatisierung für Koblenzer Wehrtechnik-Zulieferer"
            />
            <BoundlessImageCard.Content>
              <Typo.H2>
                Bundeswehr beschleunigt Beschaffung - was machen Zulieferer?
              </Typo.H2>
              <Typo.Paragraph>
                BAAINBw und Bundeswehr fahren das Tempo hoch. Wehrtechnische
                Mittelständler in der Region brauchen einen pragmatischen
                Hebel: schlanke n8n-Workflows zwischen SAP, eVergabe und
                BAFA-Antragsverfahren, mit lückenloser Audit-Doku. Self-hosted,
                in eurem deutschen Rechenzentrum, modular erweiterbar.
              </Typo.Paragraph>
            </BoundlessImageCard.Content>
          </BoundlessImageCard>
        </div>
      </ContentWrapper>

      {/* 4. DataTable - Wehrtechnik-/Automotive-Vergleich */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>
            Wehrtechnik-, Automotive- und Health-IT-Prozesse automatisieren
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
                <DataTable.Cell bold>BAAINBw-eVergabe-Angebot</DataTable.Cell>
                <DataTable.Cell>2 Tage</DataTable.Cell>
                <DataTable.Cell>4 Std.</DataTable.Cell>
                <DataTable.Cell bold>~92 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>NATO-Codifizierung/Stock-Number</DataTable.Cell>
                <DataTable.Cell>1 Std./Artikel</DataTable.Cell>
                <DataTable.Cell>5 Min</DataTable.Cell>
                <DataTable.Cell bold>~92 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>ITAR-/BAFA-Pre-Approval-Check</DataTable.Cell>
                <DataTable.Cell>45 Min/Bestellung</DataTable.Cell>
                <DataTable.Cell>1 Min</DataTable.Cell>
                <DataTable.Cell bold>~98 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Stabilus/ZF-VDA-EDI-Abruf</DataTable.Cell>
                <DataTable.Cell>20 Min/Order</DataTable.Cell>
                <DataTable.Cell>30 Sek</DataTable.Cell>
                <DataTable.Cell bold>~97 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>CompuGroup eRezept-Workflow</DataTable.Cell>
                <DataTable.Cell>3 Min/Rezept</DataTable.Cell>
                <DataTable.Cell>10 Sek</DataTable.Cell>
                <DataTable.Cell bold>~94 %</DataTable.Cell>
              </DataTable.Row>
            </DataTable.Body>
          </DataTable>
        </div>
      </ContentWrapper>

      {/* 2. StatsList horizontal */}
      <ContentWrapper colorScheme="primary">
        <StatsList
          cols={4}
          stats={[
            { value: 113378, label: "Einwohner Koblenz" },
            { value: 78699, label: "Beschäftigte (sv-pflichtig)" },
            { value: 8.7, suffix: " Mrd. €", label: "BIP Koblenz 2021" },
            { value: 2029, label: "BUGA-Jahr Koblenz/Mittelrhein" },
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
        <Typo.H2>Häufige Fragen aus Koblenz</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={koblenzFaqs} />
        </div>
      </ContentWrapper>

      {/* 6. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
