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
      source: "/ai-workflows-ingolstadt",
      preHeadline: "AI Workflows Ingolstadt",
      headline: "AI Workflows & Automatisierung in Ingolstadt",
      metaTitle: "AI Workflows Ingolstadt - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Ingolstadt. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Ingolstadt",
        "KI Automatisierung Ingolstadt",
        "Workflow Automatisierung Ingolstadt",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-ingolstadt",
      preHeadline: "n8n Automation Ingolstadt",
      headline: "n8n Automation in Ingolstadt - Workflows automatisieren",
      metaTitle: "n8n Automation Ingolstadt | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Ingolstadt. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Ingolstadt",
        "n8n Ingolstadt",
        "Workflow Automation Ingolstadt",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-ingolstadt",
      preHeadline: "n8n Ingolstadt",
      headline: "n8n Agentur in Ingolstadt",
      metaTitle: "n8n Ingolstadt - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Ingolstadt. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Ingolstadt und Umgebung.",
      keywords: [
        "n8n Ingolstadt",
        "n8n Agentur Ingolstadt",
        "n8n Beratung Ingolstadt",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-ingolstadt",
      preHeadline: "Automation Ingolstadt",
      headline: "Automation & Prozessoptimierung in Ingolstadt",
      metaTitle: "Automation Ingolstadt - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Ingolstadt. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Ingolstadt",
        "Prozessautomatisierung Ingolstadt",
        "Workflow Automation Ingolstadt",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-ingolstadt",
      preHeadline: "IT Dienstleister Ingolstadt",
      headline: "IT Dienstleister in Ingolstadt - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Ingolstadt - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Ingolstadt. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Ingolstadt.",
      keywords: [
        "IT Dienstleister Ingolstadt",
        "IT Service Ingolstadt",
        "Digitalisierung Ingolstadt",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-ingolstadt",
      preHeadline: "KI Beratung Ingolstadt",
      headline: "KI Beratung in Ingolstadt - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Ingolstadt - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Ingolstadt. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Ingolstadt",
        "KI Lösungen Ingolstadt",
        "Künstliche Intelligenz Ingolstadt",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Ingolstadt",
  slug: "ingolstadt",
  bundesland: "Bayern",
  publish: false,
  nearbySmall: [
    "Neuburg an der Donau",
    "Pfaffenhofen an der Ilm",
    "Eichstätt",
    "Schrobenhausen",
  ],
  crossReference: [
    { name: "München", slug: "muenchen" },
    { name: "Augsburg", slug: "augsburg" },
    { name: "Nürnberg", slug: "nuernberg" },
    { name: "Regensburg", slug: "regensburg" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Ingolstadt | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Automotive- und Defence-Automatisierung in Ingolstadt: n8n-Workflows für Audi-Zulieferer, Ceconomy/MediaMarktSaturn und Airbus Defence and Space - IATF-16949-, Catena-X- und ITAR-konform.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI-Agentur Ingolstadt",
      "n8n Ingolstadt",
      "Audi Zulieferer Workflow",
      "Catena-X Ingolstadt",
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
          url: "/images/cities/ingolstadt.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch KI-Agentur Ingolstadt",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/ingolstadt.jpg"],
    },
    alternates: {
      canonical: "/standorte/ingolstadt",
    },
  };
}

const ingolstadtFaqs = [
  {
    question: "Wir sind Audi-Tier-1 in Ingolstadt - wie integriert ihr n8n in unsere JIS-Welt?",
    answer:
      "Self-hosted on-premise mit Anbindung an Audi-Catena-X-Datenräume, EDIFACT-Abrufe nach VDA 4905 und das Audi-Lieferantenportal. Wir decken JIT/JIS-Sequenzierung für das Q6 e-tron- und A6 e-tron-Hochlauf-Programm ab, mit IATF-16949-konformer APQP-Doku und PPAP-Freigaben.",
  },
  {
    question: "Lässt sich Catena-X für Audi-Zulieferer mit n8n abbilden?",
    answer:
      "Ja. Wir verbinden eure SAP S/4HANA mit den Catena-X-Use-Cases Traceability, PCF (Product Carbon Footprint) und Quality. Für den Audi-Hochlauf in Ingolstadt bedeutet das auditfeste CO2-Daten pro Bauteil, vollständige Rückverfolgbarkeit und automatisierte Reklamationsmeldungen über das Asset Administration Shell.",
  },
  {
    question: "Was bringt n8n bei Ceconomy / MediaMarktSaturn mit über 1.000 Filialen?",
    answer:
      "Bestellabwicklung, Retouren-Workflows, Garantiefall-Bearbeitung und EDI-Anbindung an Lieferanten lassen sich zentral automatisieren. Wir docken an SAP CAR, das Ceconomy-Lieferantenportal und Marktplätze wie Otto und Amazon an, mit Fehler-Eskalation in Slack oder MS Teams.",
  },
  {
    question: "Hilft n8n auch bei Airbus Defence and Space in Manching?",
    answer:
      "Im Defence-Umfeld arbeiten wir ausschließlich im VS-NfD-Bereich oder darunter und docken an SAP S/4HANA, IBM Maximo und die NATO-Codifizierungs-Systeme (NCS) an. Exportkontrolle nach AWG, US-ITAR und EU-Dual-Use wird als Pre-Approval-Gate vor jeder Bestellung automatisiert geprüft. Sicherheitsüberprüfungen nach SÜG laufen mit Vier-Augen-Freigaben.",
  },
  {
    question: "Wir sind 200-MA-Maschinenbauer im Raum Eichstätt - lohnt sich das?",
    answer:
      "Gerade dann. Wer aus den Audi-Rahmenverträgen fliegt, weil VDA-4905-EDI oder Catena-X-Anbindung fehlt, verliert sofort Millionenumsatz. Wir bauen die EDI- und JIS-Schnittstellen zum Festpreis, in 4 bis 8 Wochen produktiv - on-premise in eurem deutschen Rechenzentrum.",
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
          imageSrc="/images/cities/ingolstadt.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Ingolstadt"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Ingolstadt -{" "}
                Premium-Automotive und Defence{" "}
                <BackgroundHero.Highlight>an der Donau</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Audi, Ceconomy/MediaMarktSaturn und Airbus Defence and Space in
            Manching prägen den Ingolstädter Arbeitsmarkt. Wir automatisieren
            Catena-X-, IATF-16949- und ITAR-Workflows mit self-hosted n8n.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">
              Automotive-Workflow besprechen
            </ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={40000}
              label="Audi-Mitarbeiter Region"
              index={0}
            />
            <BackgroundHero.Stat
              value={336783}
              label="Audis aus Ingolstadt (2024)"
              index={1}
            />
            <BackgroundHero.Stat
              value={7500}
              label="Audi-Stellenabbau weltweit"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 3. IntroBox + Deep Dive Text */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Audi, Ceconomy, Airbus Defence - drei Welten an der Donau
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo Premium-EV-Hochlauf auf Elektronikhandel und Defence trifft
          </IntroBox.Headline>
          <IntroBox.Subline>
            Ingolstadt hat eine der höchsten Konzernzentralen-Dichten Deutschlands.
            Audi steuert ein Tier-1-Netzwerk in IATF-16949-Qualität, Ceconomy
            den europäischen Elektronikhandel, Airbus Defence in Manching die
            Eurofighter-Endmontage. Drei regulatorische Welten, eine gemeinsame
            Antwort: auditfeste, on-premise Workflows.
          </IntroBox.Subline>
        </IntroBox>
        <div className="mt-8 space-y-6">
          <Typo.Paragraph>
            Audi beschäftigt rund 40.000 Mitarbeiter in der Region und hat
            2024 am Standort Ingolstadt 336.783 Fahrzeuge produziert - Q2,
            A3, Q6 e-tron und A6 e-tron. Mit dem angekündigten Stellenabbau
            von 7.500 Stellen weltweit läuft gleichzeitig der Premium-EV-Hochlauf
            an. Hunderte Tier-1- und Tier-2-Zulieferer arbeiten in JIT/JIS-Anbindung,
            kommunizieren über VDA-4905-EDIFACT und müssen seit kurzem
            Catena-X-Datenräume bedienen: Traceability nach AAS, PCF-Berechnung
            pro Bauteil, Quality-Notifications. Wer hier nicht digital
            lieferfähig ist, fliegt aus dem Lieferantenpool - und das geht
            schnell, wenn Audi unter Margendruck auf chinesische Konkurrenz reagiert.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Direkt daneben sitzt Ceconomy als Holding von MediaMarkt und
            Saturn mit über 1.000 Märkten in 11 europäischen Ländern.
            Bestellabwicklung, Reklamationen, Gewährleistung, Retouren und
            EDI mit hunderten Lieferanten erzeugen hochfrequente Workflows,
            die zwischen SAP CAR, Marktplätzen und Filialwarenwirtschaft
            sauber laufen müssen. In Manching betreibt Airbus Defence and
            Space die Eurofighter-Endmontage, Hensoldt liefert Sensorik,
            KMW Wehrtechnik. Mit dem Sondervermögen Bundeswehr und der NATO-
            Aufrüstung steigen Produktionsfrequenzen drastisch - und damit
            der Druck auf ITAR-, AWG- und EU-Dual-Use-konforme Workflows.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Im Umland kommen Edeka Südbayern als Lebensmittel-Logistiker,
            das Klinikum Ingolstadt und die TH Ingolstadt mit ihrem AI Mobility
            Lab dazu. Dichteste Mittelstands-Cluster in Eichstätt,
            Pfaffenhofen und Neuburg liefern in die Audi-Lieferkette zu.
            Wie wir die Implementierung in sechs Phasen strukturieren,
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
              src="/images/cities/ingolstadt.jpg"
              alt="Catena-X- und JIS-Automatisierung für Audi-Zulieferer in Ingolstadt"
            />
            <BoundlessImageCard.Content>
              <Typo.H2>
                Audi treibt Catena-X - was machen Tier-2 und Tier-3?
              </Typo.H2>
              <Typo.Paragraph>
                Audi betreibt eigene Data-Science- und KI-Teams und prescht
                bei Catena-X vor. Mittelständische Zulieferer in der zweiten
                und dritten Reihe brauchen einen pragmatischen Hebel:
                schlanke n8n-Workflows zwischen SAP S/4HANA, dem
                Audi-Lieferantenportal und Catena-X-Datenräumen. Self-hosted,
                modular, ohne Vendor Lock-in.
              </Typo.Paragraph>
            </BoundlessImageCard.Content>
          </BoundlessImageCard>
        </div>
      </ContentWrapper>

      {/* 4. DataTable - Automotive-Vergleich */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>
            Automotive- und Defence-Prozesse automatisieren
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
                <DataTable.Cell bold>VDA-4905-EDI-Abruf von Audi</DataTable.Cell>
                <DataTable.Cell>20 Min/Order</DataTable.Cell>
                <DataTable.Cell>30 Sek</DataTable.Cell>
                <DataTable.Cell bold>~97 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>APQP-/PPAP-Doku (IATF 16949)</DataTable.Cell>
                <DataTable.Cell>2 Tage/Teil</DataTable.Cell>
                <DataTable.Cell>3 Std.</DataTable.Cell>
                <DataTable.Cell bold>~94 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Catena-X PCF-Berechnung</DataTable.Cell>
                <DataTable.Cell>4 Std./Bauteil</DataTable.Cell>
                <DataTable.Cell>10 Min</DataTable.Cell>
                <DataTable.Cell bold>~96 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Ceconomy Retouren-Workflow</DataTable.Cell>
                <DataTable.Cell>25 Min/Fall</DataTable.Cell>
                <DataTable.Cell>2 Min</DataTable.Cell>
                <DataTable.Cell bold>~92 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>ITAR-Pre-Approval-Check Defence</DataTable.Cell>
                <DataTable.Cell>1 Std./Bestellung</DataTable.Cell>
                <DataTable.Cell>20 Sek</DataTable.Cell>
                <DataTable.Cell bold>~99 %</DataTable.Cell>
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
            { value: 142000, label: "Einwohner Ingolstadt" },
            { value: 40000, label: "Beschäftigte Audi-Region" },
            { value: 12, label: "VW-Konzernmarken (Audi-Verbund)" },
            { value: 100000, prefix: "über €", label: "BIP pro Kopf (Top 3 DE)" },
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
        <Typo.H2>Häufige Fragen aus Ingolstadt</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={ingolstadtFaqs} />
        </div>
      </ContentWrapper>

      {/* 6. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
