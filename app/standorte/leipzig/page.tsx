import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentWrapper from "@/components/layout/content-wrapper";
import BackgroundHero from "@/components/heroes/background-hero";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import Typo from "@/components/ui/typo";
import IntroBox from "@/components/ui/intro-box";
import SimpleGrid from "@/components/layout/simple-grid";
import KpiCard from "@/components/cards/kpi-card";
import BoundlessImageCard from "@/components/cards/boundless-image-card";
import CardShowcase from "@/components/cards/card-showcase";
import NumberedList from "@/components/ui/numbered-list";
import TabGroup, {
  TabNavigation,
  TabItem,
  TabContent,
} from "@/components/ui/tab-group";
import { FaqContainer } from "@/components/ui/faqs";
import { CityLinksFromMeta } from "@/components/standorte/city-links";
import ContactButton from "@/components/buttons/contact-button";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-agentur-leipzig",
  rewrites: [
    {
      source: "/ki-agentur-leipzig",
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Leipzig",
  slug: "leipzig",
  bundesland: "Sachsen",
  publish: true,
  nearbySmall: [
    "Markkleeberg",
    "Delitzsch",
    "Schkeuditz",
    "Borna",
    "Merseburg",
    "Grimma",
    "Naumburg (Saale)",
  ],
  crossReference: [
    { name: "Dresden", slug: "dresden" },
    { name: "Halle (Saale)", slug: "halle-saale" },
    { name: "Chemnitz", slug: "chemnitz" },
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
    "KI Agentur Leipzig - n8n, Workflow-Automatisierung & Logistik-Automation | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Bluebatch ist Ihre KI Agentur in Leipzig — Workflow-Automatisierung, n8n-Workflows und Prozessoptimierung für Logistik, Automotive und Startups in Deutschlands schnellstwachsender Großstadt.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Leipzig",
      "Workflow-Automatisierung Leipzig",
      "n8n Leipzig",
      "KI Automatisierung Leipzig",
      "Prozessoptimierung Leipzig",
      "Logistik Automation Leipzig",
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
          url: "/images/cities/leipzig.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch Workflow-Automatisierung Leipzig",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/leipzig.jpg"],
    },
    alternates: {
      canonical: "/ki-agentur-leipzig",
    },
  };
}

const leipzigFaqs = [
  {
    question: "Warum ist Leipzig ein idealer Standort für Logistik-Automation?",
    answer:
      "Leipzig vereint das weltweit größte DHL-Express-Drehkreuz mit über 150.000 Sendungen pro Nacht, Deutschlands einzigen 24/7-Frachtflughafen und Amazon-Logistikzentren. Dieses Volumen erzeugt enormen Automatisierungsbedarf: Sendungsverfolgung, Zolldokumentation, Kapazitätsplanung und Echtzeit-Routing lassen sich mit n8n-Workflows automatisieren und durch KI-Agents intelligent steuern.",
  },
  {
    question: "Welche Automotive-Prozesse automatisiert Bluebatch in Leipzig?",
    answer:
      "Porsche und BMW beschäftigen zusammen rund 9.600 Menschen in Leipzig. Wir automatisieren Zulieferer-Kommunikation, Qualitätsdaten-Erfassung, Schichtplan-Koordination und die Integration von MES- und ERP-Systemen. n8n verbindet SAP, IoT-Sensoren und Kommunikationsplattformen zu durchgängigen Workflows, die in der Fertigung Stunden pro Woche einsparen.",
  },
  {
    question: "Wie hilft KI-Automatisierung Leipziger Startups beim Skalieren?",
    answer:
      "Das SpinLab an der HHL hat über 300 Startups hervorgebracht, darunter das Unicorn Staffbase. Startups, die schnell wachsen, brauchen Automatisierung, die mitskaliert: automatisiertes Kunden-Onboarding, Daten-Pipelines, Investor-Reporting und CRM-Workflows. Mit n8n bauen wir Systeme, die bei 10 Kunden genauso funktionieren wie bei 10.000.",
  },
  {
    question: "Ist n8n für den Energiehandel an der EEX geeignet?",
    answer:
      "Die European Energy Exchange (EEX) macht Leipzig zu einem der größten Energiehandelsplätze Europas. n8n eignet sich hervorragend für automatisierte Marktdaten-Aggregation, Preisalarm-Workflows, regulatorische Reporting-Pipelines und die Integration von Handelssystemen. Self-hosted bedeutet dabei volle Kontrolle über sensible Handelsdaten.",
  },
  {
    question: "Wie schnell sind erste Ergebnisse sichtbar?",
    answer:
      "Erste produktive Workflows liefern wir in 1-2 Wochen. Für komplexe Logistik-Integrationen mit mehreren API-Anbindungen, Echtzeit-Tracking und KI-Klassifikation rechnen wir mit 4-8 Wochen. In einem kostenlosen Erstgespräch analysieren wir Ihren konkreten Bedarf und erstellen einen realistischen Fahrplan.",
  },
  {
    question: "Warum Bluebatch statt einer Leipziger IT-Agentur?",
    answer:
      "Wir sind keine generische IT-Agentur, sondern spezialisiert auf n8n-Workflows und KI-Automatisierung. Das bedeutet: tiefes Wissen statt Bauchladen. Leipziger Unternehmen profitieren von Self-Hosted-Lösungen mit voller DSGVO-Konformität, 1.200+ nativen Integrationen und einer Plattform, die mit ScaDS.AI und dem Leipziger KI-Ökosystem kompatibel ist.",
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
          imageSrc="/images/cities/leipzig.jpg"
          overlayOpacity={0.8}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Boomtown Ost"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI Agentur Leipzig —{" "}
                <BackgroundHero.Highlight>
                  Workflow-Automatisierung für Deutschlands schnellstwachsende Großstadt
                </BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Leipzig wächst so schnell wie keine andere deutsche Großstadt.
            Als KI Agentur automatisieren wir Logistik, Automotive und
            Startup-Prozesse mit n8n-Workflows, die dieses Tempo mithalten.
            Self-hosted, DSGVO-konform und skalierbar.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">Beratung anfragen</ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={620000}
              label="Einwohner (+25% in 20 Jahren)"
              index={0}
            />
            <BackgroundHero.Stat
              value={1.6}
              suffix=" Mio. t"
              label="Cargo/Jahr"
              index={1}
            />
            <BackgroundHero.Stat
              value={300}
              suffix="+"
              label="HHL-Startups"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 2. CardShowcase — Leipzigs Schlüsselsektoren */}
      <ContentWrapper colorScheme="dark">
        <IntroBox>
          <IntroBox.PreHeadline className="text-gray-400">
            Leipzigs Wirtschaftskraft
          </IntroBox.PreHeadline>
          <IntroBox.Headline className="text-white">
            Fünf Sektoren, ein gemeinsamer Nenner: Automatisierungsbedarf
          </IntroBox.Headline>
        </IntroBox>
        <CardShowcase>
          <CardShowcase.Item size="large">
            <CardShowcase.Image
              src="/images/cities/logistics-hub.jpg"
              alt="DHL Express-Drehkreuz Leipzig: größtes Express-Hub weltweit"
            />
            <CardShowcase.Content>
              <CardShowcase.Title>DHL-Hub: Logistik-Weltspitze</CardShowcase.Title>
              <CardShowcase.Description>
                Das weltweit größte Express-Drehkreuz. Über 6.000 Beschäftigte
                sortieren 150.000+ Sendungen pro Nacht. Deutschlands einziger
                24/7-Frachtflughafen macht Leipzig zum Logistik-Epizentrum Europas.
              </CardShowcase.Description>
            </CardShowcase.Content>
          </CardShowcase.Item>
          <CardShowcase.Item size="large">
            <CardShowcase.Image
              src="/images/process-automation.jpg"
              alt="Automotive-Fertigung in Leipzig: Porsche und BMW"
            />
            <CardShowcase.Content>
              <CardShowcase.Title>Automotive: Porsche + BMW</CardShowcase.Title>
              <CardShowcase.Description>
                Porsche (4.300 MA) und BMW (5.300 MA) beschäftigen zusammen
                9.600 Menschen. Just-in-Sequence-Fertigung, Zulieferer-Netzwerke
                und Qualitätssicherung verlangen durchgängige Automatisierung.
              </CardShowcase.Description>
            </CardShowcase.Content>
          </CardShowcase.Item>
          <CardShowcase.Item size="small">
            <CardShowcase.Content>
              <CardShowcase.Title>Energiehandel</CardShowcase.Title>
              <CardShowcase.Description>
                Die European Energy Exchange (EEX), VNG und Siemens Energy
                machen Leipzig zu einem der größten Energiehandelsplätze
                Europas. Marktdaten-Pipelines und Compliance-Reporting
                laufen hier rund um die Uhr.
              </CardShowcase.Description>
            </CardShowcase.Content>
          </CardShowcase.Item>
          <CardShowcase.Item size="small">
            <CardShowcase.Content>
              <CardShowcase.Title>Tech-Szene</CardShowcase.Title>
              <CardShowcase.Description>
                Spreadshirt, Staffbase (Unicorn), CHECK24. Über 300 Startups
                aus dem SpinLab/HHL-Ökosystem mit 800 Mio. EUR kumuliertem
                Umsatz. Wachstum braucht Workflows, die mitgehen.
              </CardShowcase.Description>
            </CardShowcase.Content>
          </CardShowcase.Item>
          <CardShowcase.Item size="small">
            <CardShowcase.Content>
              <CardShowcase.Title>Kreativwirtschaft</CardShowcase.Title>
              <CardShowcase.Description>
                MDR als öffentlich-rechtlicher Sender, die Spinnerei als
                international bekanntes Kunstzentrum und über 5.000
                Kreativunternehmen. Content-Pipelines und
                Redaktionsworkflows profitieren von KI.
              </CardShowcase.Description>
            </CardShowcase.Content>
          </CardShowcase.Item>
        </CardShowcase>
      </ContentWrapper>

      {/* 3. BoundlessImageCard — Logistik-Superhub */}
      <ContentWrapper>
        <BoundlessImageCard imagePosition="right">
          <BoundlessImageCard.Image
            src="/images/cities/logistics-hub.jpg"
            alt="Logistik-Hub Leipzig: DHL-Drehkreuz und Frachtflughafen als Treiber für Workflow-Automatisierung"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>Logistik-Superhub Leipzig: Warum Automatisierung hier Pflicht ist</Typo.H2>
            <Typo.Paragraph>
              Der Flughafen Leipzig/Halle ist mit 1,6 Mio. Tonnen Cargo der
              zweitgrößte Frachtflughafen Deutschlands und der einzige mit
              24/7-Betriebsgenehmigung. DHL hat hier sein weltweit größtes
              Express-Drehkreuz aufgebaut: über 6.000 Beschäftigte sortieren
              jede Nacht mehr als 150.000 Sendungen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Bei diesem Volumen ist manuelle Prozesssteuerung keine Option.
              Sendungsverfolgung über mehrere Carrier, automatische
              Zolldokumentation, Kapazitätsprognosen per KI und
              Echtzeit-Routing-Entscheidungen lassen sich mit
              n8n-Workflows abbilden, die APIs von Carriern,
              Zollsystemen und ERP-Plattformen nahtlos verbinden.
            </Typo.Paragraph>
          </BoundlessImageCard.Content>
        </BoundlessImageCard>
      </ContentWrapper>

      {/* 4. KPI-Karten — Logistik-Zahlen */}
      <ContentWrapper colorScheme="gray-light">
        <SimpleGrid cols={3}>
          <KpiCard
            value={150000}
            suffix="+"
            subtitle="Sendungen pro Nacht am DHL-Hub"
          />
          <KpiCard
            value={24}
            suffix="/7"
            subtitle="Einziger Cargo-Flughafen mit Nachtflugerlaubnis"
          />
          <KpiCard
            value={1.6}
            suffix=" Mio. t"
            subtitle="Cargo pro Jahr — Platz 2 in Deutschland"
          />
        </SimpleGrid>
      </ContentWrapper>

      {/* 5. TabGroup — Branchen-Automatisierung */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Use Cases</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Konkrete n8n-Workflows für Leipziger Unternehmen
          </IntroBox.Headline>
        </IntroBox>

        <TabGroup defaultValue="logistik">
          <TabNavigation>
            <TabItem value="logistik">Logistik-Automation</TabItem>
            <TabItem value="automotive">Automotive-Workflows</TabItem>
            <TabItem value="startups">Startup-Skalierung</TabItem>
          </TabNavigation>

          <TabContent value="logistik">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>Logistik-Automation für das DHL-Ökosystem</Typo.H3>
                <Typo.Paragraph>
                  Leipzigs Logistik-Cluster verarbeitet Millionen Sendungen pro
                  Woche. n8n-Workflows automatisieren die kritischsten Prozesse:
                </Typo.Paragraph>
                <ul className="mt-4 space-y-3 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="font-semibold text-primary-600">1.</span>
                    Multi-Carrier-Tracking: Sendungsstatus von DHL, Amazon und
                    Hermes in einem Dashboard konsolidiert, Ausnahmen
                    automatisch eskaliert
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-primary-600">2.</span>
                    Zolldokumentation: KI liest Frachtpapiere, klassifiziert
                    Waren nach Zolltarif und erstellt Ausfuhranmeldungen
                    automatisch
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-primary-600">3.</span>
                    Kapazitätsprognose: Historische Sendungsdaten plus
                    Wetterdaten plus Saisonmuster ergeben präzise
                    Auslastungsprognosen für die nächsten 72 Stunden
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-primary-600">4.</span>
                    Echtzeit-Routing: Bei Verspätungen oder Ausfällen werden
                    alternative Routen automatisch berechnet und an Fahrer
                    kommuniziert
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
                <Typo.H3>Ergebnis</Typo.H3>
                <Typo.Paragraph>
                  Logistikunternehmen in Leipzig sparen mit automatisierten
                  n8n-Workflows typischerweise 15-25 Stunden pro Woche an
                  manueller Datenverarbeitung. Fehlerquoten in der
                  Zolldokumentation sinken um bis zu 80 %, weil KI-Agents
                  Warencodes konsistent klassifizieren.
                </Typo.Paragraph>
              </div>
            </SimpleGrid>
          </TabContent>

          <TabContent value="automotive">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>Automotive-Workflows für Porsche &amp; BMW-Zulieferer</Typo.H3>
                <Typo.Paragraph>
                  9.600 Arbeitsplätze bei Porsche und BMW bedeuten hunderte
                  Zulieferer in der Metropolregion. n8n automatisiert die
                  Schnittstellen:
                </Typo.Paragraph>
                <ul className="mt-4 space-y-3 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="font-semibold text-primary-600">1.</span>
                    Lieferabrufe automatisch aus SAP extrahieren, an Zulieferer
                    senden und Bestätigungen zurückführen, ohne manuelles
                    Copy-Paste
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-primary-600">2.</span>
                    Qualitätsdaten von IoT-Sensoren in der Fertigung erfassen,
                    Abweichungen per KI erkennen und Eskalationen an das
                    QM-Team auslösen
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-primary-600">3.</span>
                    Schichtplan-Änderungen automatisch an alle Beteiligten
                    kommunizieren, Überstunden-Genehmigungen digital abwickeln
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-primary-600">4.</span>
                    IMDS-Materialdatenblätter automatisch auslesen und in
                    interne Compliance-Systeme überführen
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
                <Typo.H3>Ergebnis</Typo.H3>
                <Typo.Paragraph>
                  Zulieferer, die ihre Kommunikation mit OEMs automatisieren,
                  reduzieren Reaktionszeiten auf Lieferabrufe von Stunden auf
                  Minuten. Qualitätsprobleme werden in Echtzeit erkannt statt
                  erst bei der Endkontrolle, was Ausschusskosten senkt.
                </Typo.Paragraph>
              </div>
            </SimpleGrid>
          </TabContent>

          <TabContent value="startups">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>Startup-Skalierung: Von SpinLab zum Unicorn</Typo.H3>
                <Typo.Paragraph>
                  300+ Startups aus dem SpinLab/HHL-Ökosystem, 800 Mio. EUR
                  kumulierter Umsatz. Staffbase hat es zum Unicorn geschafft.
                  n8n hilft beim nächsten Wachstumssprung:
                </Typo.Paragraph>
                <ul className="mt-4 space-y-3 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="font-semibold text-primary-600">1.</span>
                    Automatisiertes Kunden-Onboarding: Vom Signup über
                    Willkommens-E-Mail bis zur CRM-Einrichtung in unter
                    2 Minuten, ohne manuellen Eingriff
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-primary-600">2.</span>
                    Investor-Reporting: KPIs aus Stripe, HubSpot und
                    Analytics-Tools automatisch in monatliche Reports
                    zusammenführen
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-primary-600">3.</span>
                    Hiring-Pipeline: Bewerbungen aus LinkedIn und Karriereseite
                    automatisch in Personio oder Recruitee überführen,
                    Screening-Workflows per KI
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-primary-600">4.</span>
                    Product-Led Growth: Nutzungsdaten tracken,
                    Churn-Signale per KI erkennen und automatisch
                    Retention-Maßnahmen auslösen
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
                <Typo.H3>Ergebnis</Typo.H3>
                <Typo.Paragraph>
                  Leipziger Startups, die früh auf Automatisierung setzen,
                  skalieren ihre Operations ohne proportional Personal
                  aufzubauen. Das bedeutet: bessere Unit Economics, schnellere
                  Fundraising-Runden und ein Team, das sich auf Produkt statt
                  Admin konzentriert.
                </Typo.Paragraph>
              </div>
            </SimpleGrid>
          </TabContent>
        </TabGroup>
      </ContentWrapper>

      {/* 6. NumberedList — 5 Gründe */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>Warum jetzt?</IntroBox.PreHeadline>
          <IntroBox.Headline>
            5 Gründe warum Leipzig Automatisierung braucht
          </IntroBox.Headline>
        </IntroBox>
        <NumberedList>
          <NumberedList.Item title="Schnellstes Wachstum:">
            25 % mehr Einwohner in 20 Jahren bedeuten wachsende Teams,
            steigende Prozesskomplexität und den dringenden Bedarf,
            Operations zu skalieren ohne proportional Personal aufzubauen.
          </NumberedList.Item>
          <NumberedList.Item title="Logistik-Daten:">
            Jede der 150.000 nächtlichen Sendungen am DHL-Hub erzeugt
            Dutzende Datenpunkte. Zolldeklarationen, Tracking-Events,
            Kapazitätsplanung. Manuell nicht zu bewältigen.
          </NumberedList.Item>
          <NumberedList.Item title="Automotive-Lieferketten:">
            Porsche und BMW produzieren Just-in-Sequence. Ein Fehler in
            der Zulieferer-Kommunikation stoppt die Linie. Automatisierte
            Workflows eliminieren dieses Risiko.
          </NumberedList.Item>
          <NumberedList.Item title="Fachkräfte-Knappheit:">
            Trotz Boomtown-Status kämpft Leipzig um Talente. Automatisierung
            macht vorhandene Teams produktiver, statt auf Neueinstellungen
            zu warten, die nicht kommen.
          </NumberedList.Item>
          <NumberedList.Item title="Startup-DNA:">
            Lean Operations von Tag 1. Wer mit 5 Leuten die Arbeit von
            50 erledigen will, braucht n8n-Workflows, die von Onboarding
            bis Investor-Reporting alles automatisieren.
          </NumberedList.Item>
        </NumberedList>
      </ContentWrapper>

      {/* 7. City Links */}
      <ContentWrapper colorScheme="gradient-night">
        <CityLinksFromMeta
          crossReference={metaCustom.crossReference}
          nearbySmall={metaCustom.nearbySmall}
        />
      </ContentWrapper>

      {/* 8. FAQ */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer faqs={leipzigFaqs}>
          <FaqContainer.Headline>FAQ zur KI-Automatisierung in Leipzig</FaqContainer.Headline>
        </FaqContainer>
      </ContentWrapper>

      {/* 9. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
