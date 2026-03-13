import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentWrapper from "@/components/layout/content-wrapper";
import BackgroundHero from "@/components/heroes/background-hero";
import ContactButton from "@/components/buttons/contact-button";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import DataTable from "@/components/ui/data-table";
import BoundlessImageCard from "@/components/cards/boundless-image-card";
import ProsCons from "@/components/sections/pros-cons";
import IntroBox from "@/components/ui/intro-box";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { CityLinksFromMeta } from "@/components/standorte/city-links";
import { FaqContainer } from "@/components/ui/faqs";
import Typo from "@/components/ui/typo";
import type { CityMeta } from "@/lib/meta-custom";
import { getRewriteOverrides } from "@/lib/get-rewrites";
import { rewriteSiteConfig } from "./rewrite.site";

export const metaCustom: CityMeta = {
  name: "München",
  slug: "muenchen",
  bundesland: "Bayern",
  publish: true,
  nearbySmall: [
    "Dachau",
    "Freising",
    "Fürstenfeldbruck",
    "Erding",
    "Germering",
    "Starnberg",
    "Unterschleißheim",
    "Olching",
    "Unterhaching",
    "Ottobrunn",
    "Haar",
    "Karlsfeld",
    "Vaterstetten",
    "Puchheim",
    "Geretsried",
  ],
  crossReference: [
    { name: "Augsburg", slug: "augsburg" },
    { name: "Ingolstadt", slug: "ingolstadt" },
    { name: "Regensburg", slug: "regensburg" },
    { name: "Nürnberg", slug: "nuernberg" },
  ],
};

const defaultMeta = {
  title: `Workflow-Automatisierung München | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in München. n8n-Workflows, API-Integrationen und Prozessoptimierung für DAX-Konzerne, Tech-Giganten und Mittelständler.`,
};

const defaultKeywords = [
  "Workflow-Automatisierung München",
  "n8n München",
  "KI Automatisierung München",
  "Prozessautomatisierung München",
  "Digitalisierung München",
  "Bluebatch",
];

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}): Promise<Metadata> {
  const params = await searchParams;
  const overrides = getRewriteOverrides(rewriteSiteConfig, params);

  const title = overrides?.metaTitle ?? defaultMeta.title;
  const description = overrides?.metaDescription ?? defaultMeta.description;

  return {
    title,
    description,
    keywords: overrides?.keywords ?? defaultKeywords,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [
        {
          url: "/images/bluebatch-social-cover.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch Workflow-Automatisierung München",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/bluebatch-social-cover.jpg"],
    },
    alternates: {
      canonical: `/standorte/${metaCustom.slug}`,
    },
  };
}

const muenchenFaqs = [
  {
    question: "Warum n8n statt Zapier oder Make?",
    answer:
      "n8n ist Open-Source und kann self-hosted betrieben werden — ideal für Münchner Unternehmen mit hohen Datenschutz- und Compliance-Anforderungen. Mit über 1.200 Integrationen, vollständiger DSGVO-Konformität und ohne Vendor-Lock-in bietet n8n maximale Flexibilität. Besonders für DAX-Konzerne und den industriellen Mittelstand in München ist die Möglichkeit, eigene Nodes zu entwickeln und Daten im eigenen Rechenzentrum zu halten, ein entscheidender Vorteil.",
  },
  {
    question: "Ist Workflow-Automatisierung auch für den Mittelstand geeignet?",
    answer:
      "Gerade für den Münchner Mittelstand ist Automatisierung ein entscheidender Wettbewerbsvorteil. Ob Maschinenbau, Automotive-Zulieferer, Halbleiter-Fertigung, Aerospace-Zulieferer oder IT-Dienstleister — n8n-Workflows automatisieren Auftragsverarbeitung, Datenabgleich zwischen ERP und CRM, Qualitätskontrolle in der Produktion und regulatorisches Berichtswesen. So bleibt Ihr Team für wertschöpfende Aufgaben frei, während repetitive Prozesse zuverlässig im Hintergrund laufen.",
  },
  {
    question: "Wie lange dauert die Implementierung?",
    answer:
      "Erste produktive Workflows liefern wir in 1–2 Wochen. Komplexere Systeme mit mehreren API-Integrationen, KI-Komponenten und individuellen Nodes setzen wir in 4–8 Wochen um. In einem kostenlosen Erstgespräch analysieren wir Ihren konkreten Bedarf und geben Ihnen einen realistischen Zeitrahmen.",
  },
  {
    question: "Können bestehende Systeme wie SAP oder Salesforce integriert werden?",
    answer:
      "Ja — n8n verbindet ERP-Systeme wie SAP, CRM-Plattformen wie Salesforce und HubSpot, MES-Systeme aus der Fertigung, IoT-Plattformen (OPC-UA), Banking-APIs, Buchhaltungstools, Kommunikationsplattformen und über 1.200 weitere Anwendungen. Wir schaffen nahtlose Datenflüsse zwischen allen Systemen — von der Produktionslinie über das Backoffice bis zur Cloud — ohne manuelle Datenübertragung und Medienbrüche.",
  },
  {
    question: "Wie unterstützt KI die Automatisierung?",
    answer:
      "AI Agents erweitern jeden n8n-Workflow um intelligente Entscheidungen. Sie klassifizieren eingehende Daten, generieren Texte und E-Mails, extrahieren Informationen aus Dokumenten und treffen regelbasierte Entscheidungen. Münchner Unternehmen nutzen KI-gestützte Workflows bereits für automatisierte Angebotserstellung, Dokumentenverarbeitung und datenbasierte Entscheidungsprozesse.",
  },
  {
    question: "Was unterscheidet Bluebatch von anderen IT-Dienstleistern in München?",
    answer:
      "Wir sind spezialisiert auf Workflow-Automatisierung mit n8n und KI — kein Bauchladen, sondern tiefe Expertise. Unsere Kunden profitieren von Self-Hosted-Lösungen mit voller Datenkontrolle, individueller Workflow-Entwicklung und langfristiger Betreuung. Wir verstehen die spezifischen Anforderungen der Münchner Schlüsselindustrien: Automotive Supply Chains, Halbleiterfertigung, Versicherungs- und Rückversicherungsprozesse, Fintech-Compliance und Aerospace-Zertifizierung — von DAX-Konzernen über Tech-Unternehmen bis zum Hidden Champion im Mittelstand.",
  },
];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  if (!metaCustom.publish) notFound();

  const params = await searchParams;
  const overrides = getRewriteOverrides(rewriteSiteConfig, params);

  return (
    <>
      {/* Section 1: BackgroundHero mit Stats */}
      <ContentWrapper isFirstSection noPadding>
        <BackgroundHero
          imageSrc="/images/cities/muenchen.jpg"
          overlayOpacity={0.8}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort München"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI & Automatisierung im{" "}
                <BackgroundHero.Highlight>Isar Valley</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Workflow-Automatisierung mit n8n für DAX-Konzerne, Tech-Giganten und
            innovative Mittelständler in München. Von BMW über Siemens bis zu
            Europas größtem Apple Engineering Hub — wir automatisieren Prozesse
            dort, wo Deutschlands Wirtschaftskraft zuhause ist.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">
              Automatisierung für München besprechen
            </ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={138}
              suffix=" Mrd. €"
              label="BIP der Stadt München"
              index={0}
            />
            <BackgroundHero.Stat
              value={92}
              suffix=".000"
              label="Unternehmen in München"
              index={1}
            />
            <BackgroundHero.Stat
              value={42.4}
              suffix="%"
              label="Akademikerquote"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* Section 2: IntroBox */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <Typo.H2>
            Münchens Wirtschaft braucht smarte Automatisierung
          </Typo.H2>
          <Typo.Paragraph>
            Höchste Kaufkraft (36.461 Euro pro Einwohner, 35 % über dem
            Bundesdurchschnitt), höchste Akademikerquote aller deutschen Städte
            und eine Arbeitslosenquote von nur 4,5 % — München ist Deutschlands
            Premium-Wirtschaftsstandort. Aber genau deshalb sind die
            Personalkosten hoch und Fachkräfte rar. 33 % der Unternehmen
            berichten von anhaltendem Fachkräftemangel, bis 2030 entstehen
            allein in Bayern 58.000 neue IT-Stellen. Automatisierung ist hier
            kein Luxus, sondern Notwendigkeit.
          </Typo.Paragraph>
        </IntroBox>
      </ContentWrapper>

      {/* Section 3: SimpleGrid — Wirtschaftsmacht München */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Wirtschaftsmacht München</Typo.H2>
        <Typo.Paragraph>
          München vereint DAX-Konzerne und internationale Tech-Giganten auf
          engstem Raum — ein einzigartiges Ökosystem, das skalierbare
          Automatisierung verlangt.
        </Typo.Paragraph>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <Typo.H3>DAX-Konzerne & Industriegrößen</Typo.H3>
            <Typo.Paragraph>
              BMW, Siemens, Allianz, Munich Re, Linde, Infineon, MTU und
              Traton haben ihren Hauptsitz in München. Dazu kommen MAN und
              Rohde & Schwarz. Diese Unternehmen steuern komplexe globale
              Lieferketten, unterliegen strengen Compliance-Anforderungen und
              koordinieren tausende Prozesse über Standorte hinweg — ideale
              Kandidaten für n8n-Workflow-Automatisierung.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <Typo.H3>Internationale Tech-Giganten</Typo.H3>
            <Typo.Paragraph>
              Apple betreibt in München sein größtes europäisches Engineering
              Hub mit über 1.500 Ingenieuren. Google beschäftigt hier über
              3.000 Mitarbeiter im globalen Privacy Engineering Center.
              Microsoft hat seine deutsche Zentrale in München, Amazon/AWS
              rund 2.500 Mitarbeiter. Dazu kommen Adobe, AMD, Intel, Oracle,
              Samsung und viele mehr — alle mit Bedarf an skalierbarer
              Datenverarbeitung und Prozessautomatisierung.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <Typo.H3>Automotive & Präzisionsfertigung</Typo.H3>
            <Typo.Paragraph>
              BMW-Zulieferer, Continental, ZF und Bosch bilden ein dichtes
              Netzwerk der Automobil- und Fertigungsindustrie rund um München.
              Supply-Chain-Automatisierung, Qualitätskontrolle in Echtzeit und
              die nahtlose Integration von MES- und ERP-Systemen sind hier
              geschäftskritisch — und genau das automatisieren wir mit n8n.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <Typo.H3>Versicherung & Fintech</Typo.H3>
            <Typo.Paragraph>
              Allianz und Munich Re sind die weltweit größten Versicherer und
              Rückversicherer — beide mit Hauptsitz in München. Dazu kommen
              über 100 Fintech-Startups im Münchner Ökosystem. Claims
              Processing, KYC/AML-Compliance und regulatorisches Reporting
              erfordern präzise, auditierbare Automatisierung mit höchsten
              Datenschutzstandards.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* Section 4: DataTable — Warum München automatisieren muss */}
      <ContentWrapper>
        <Typo.H2>Warum München automatisieren muss</Typo.H2>
        <Typo.Paragraph>
          Die Stärken des Wirtschaftsstandorts München schaffen gleichzeitig die
          größten Herausforderungen. Workflow-Automatisierung mit n8n und KI
          löst sie gezielt.
        </Typo.Paragraph>
        <DataTable>
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Herausforderung</DataTable.HeaderCell>
              <DataTable.HeaderCell>Situation in München</DataTable.HeaderCell>
              <DataTable.HeaderCell>Lösung mit n8n & KI</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            <DataTable.Row>
              <DataTable.Cell bold>Automotive Supply Chain</DataTable.Cell>
              <DataTable.Cell>
                BMW, Audi-Zulieferer, MAN, Traton — 1.000+ Lieferanten in 40+ Ländern, Just-in-Time-Anforderungen
              </DataTable.Cell>
              <DataTable.Cell>
                Automatisierte Bestellprozesse, Lieferanten-Onboarding, Qualitätssicherung und Echtzeit-Statusverfolgung über die gesamte Supply Chain
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Halbleiter-Produktionsdaten</DataTable.Cell>
              <DataTable.Cell>
                Infineon, Bosch Sensortec — 24/7-Fertigungsüberwachung, Millionen Datenpunkte pro Schicht
              </DataTable.Cell>
              <DataTable.Cell>
                Automatisierte Datenflüsse zwischen MES, ERP und Qualitätssystemen, Echtzeit-Alarmierung bei Abweichungen
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Versicherungs-Claims</DataTable.Cell>
              <DataTable.Cell>
                Allianz, Munich Re — 100.000+ Schadensmeldungen pro Jahr, mehrstufige Prüfprozesse
              </DataTable.Cell>
              <DataTable.Cell>
                KI-gestütztes Claims Processing, automatisierte Dokumentenextraktion und Betrugserkennung, regelbasierte Auszahlungsfreigabe
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Fintech Compliance</DataTable.Cell>
              <DataTable.Cell>
                100+ Fintech-Startups in München, BaFin-Regulierung, stetig wachsende KYC/AML-Anforderungen
              </DataTable.Cell>
              <DataTable.Cell>
                Automatisierte KYC/AML-Workflows, regulatorisches Reporting, Echtzeit-Transaktionsüberwachung und Audit-Trails
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Aerospace Predictive Maintenance</DataTable.Cell>
              <DataTable.Cell>
                MTU Aero Engines — kritische Zuverlässigkeit, strenge Zertifizierungsanforderungen (EASA)
              </DataTable.Cell>
              <DataTable.Cell>
                Prädiktive Wartungsworkflows, automatisierte Sensordatenanalyse, Compliance-Dokumentation und Wartungsplanung
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable.Body>
        </DataTable>
      </ContentWrapper>

      {/* Section 5: BoundlessImageCard — Isar Valley */}
      <ContentWrapper colorScheme="gray">
        <BoundlessImageCard imagePosition="left">
          <BoundlessImageCard.Image
            src="/images/business-growth.jpg"
            alt="Isar Valley München — Europas führender Tech-Standort mit internationalen Technologieunternehmen und innovativen Startups"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>Isar Valley: Europas Tech-Hub</Typo.H2>
            <Typo.Paragraph>
              München wird als &bdquo;Silicon Valley an der Isar&ldquo;
              bezeichnet — und das zu Recht. Eine Studie der Europäischen
              Kommission identifizierte München als den führenden IT-Standort
              Europas. Die Zahl der IKT-Beschäftigten hat sich seit 2014 nahezu
              verdoppelt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Apple, Google, Microsoft und Amazon haben hier ihre größten
              europäischen Standorte aufgebaut. Bayern übertraf 2024 sogar
              Berlin beim eingeworbenen Risikokapital mit 2,3 Milliarden Euro.
              UnternehmerTUM an der TU München ist eines der größten
              Gründerzentren Europas. Diese Tech-Dichte treibt die Nachfrage
              nach skalierbarer Workflow-Automatisierung — und genau hier setzen
              wir mit n8n und KI-Integration an.
            </Typo.Paragraph>
          </BoundlessImageCard.Content>
        </BoundlessImageCard>
      </ContentWrapper>

      {/* Section 6: ProsCons — Automatisierung mit Bluebatch */}
      <ContentWrapper>
        <Typo.H2>Automatisierung mit Bluebatch in München</Typo.H2>
        <Typo.Paragraph>
          Transparenz ist uns wichtig. Deshalb zeigen wir Ihnen nicht nur, was
          wir können — sondern auch, wann wir nicht der richtige Partner sind.
        </Typo.Paragraph>
        <ProsCons>
          <ProsCons.Pros>
            <ProsCons.Item
              title="Open-Source & Self-Hosted"
              description="n8n läuft auf Ihrer Infrastruktur — volle Datenkontrolle, DSGVO-konform und unabhängig von SaaS-Anbietern. Für Münchner DAX-Konzerne und Mittelständler mit deutschen Datenschutzvorgaben nicht optional, sondern zwingend."
            />
            <ProsCons.Item
              title="1.200+ Integrationen"
              description="SAP, Salesforce, MES-Systeme aus der Fertigung, IoT-Plattformen (OPC-UA), Fintech-APIs, Microsoft 365, Slack und hunderte weitere Tools nahtlos verbinden — von der Produktionshalle bis ins Vorstandsbüro."
            />
            <ProsCons.Item
              title="KI-Integration"
              description="AI Agents für intelligente Prozessentscheidungen — von automatischer Dokumentenklassifikation über Claims-Betrugserkennung bis zur prädiktiven Wartung in der Aerospace-Fertigung."
            />
            <ProsCons.Item
              title="Skalierbar"
              description="Von einzelnen Workflows bis Enterprise-Automatisierung mit tausenden Ausführungen pro Tag — ob wachsende Lieferketten, steigende Transaktionsvolumina oder neue Produktlinien."
            />
            <ProsCons.Item
              title="Münchner Expertise"
              description="Wir verstehen die spezifischen Anforderungen der Münchner Industrien: Automotive Supply Chains, Halbleiterfertigung, Versicherungs-Claims-Processing, Fintech-Compliance und Aerospace-Zertifizierung."
            />
          </ProsCons.Pros>
          <ProsCons.Cons>
            <ProsCons.Item
              title="Reine SaaS-Lösung gewünscht"
              description="Wenn Sie eine fertige Cloud-Lösung ohne Self-Hosting suchen, sind Make oder Zapier möglicherweise besser geeignet."
            />
            <ProsCons.Item
              title="Keine internen IT-Ressourcen"
              description="Für den laufenden Betrieb der Automatisierung brauchen Sie mindestens grundlegende IT-Kapazitäten in Ihrem Team."
            />
            <ProsCons.Item
              title="Keine digitalen Schnittstellen"
              description="Wenn Ihre Prozesse vollständig analog ablaufen und keine APIs oder digitale Systeme vorhanden sind, fehlt die Basis."
            />
          </ProsCons.Cons>
        </ProsCons>
      </ContentWrapper>

      {/* Section 7: Prozess-Teaser */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Unser Prozess</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Ihr Weg zur Automatisierung in München
          </IntroBox.Headline>
          <IntroBox.Subline>
            DAX-Konzerne, Automotive-Zulieferer, Halbleiterhersteller und
            Fintech-Startups — Münchens Industrien brauchen Automatisierung mit
            Enterprise-Sicherheit, Präzision und Skalierbarkeit. Unser bewährtes
            6-Phasen-Framework liefert genau das.
          </IntroBox.Subline>
        </IntroBox>
        <div className="mt-8 text-center">
          <Link
            href="/unser-prozess"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50 hover:shadow-sm"
          >
            Unser Prozess im Detail <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </ContentWrapper>

      {/* Section 8: CityLinksFromMeta */}
      <ContentWrapper colorScheme="gradient-night">
        <CityLinksFromMeta
          crossReference={metaCustom.crossReference}
          nearbySmall={metaCustom.nearbySmall}
        />
      </ContentWrapper>

      {/* Section 9: FAQ */}
      <ContentWrapper bodyWidth="small">
        <FaqContainer faqs={muenchenFaqs}>
          <FaqContainer.Headline>FAQ zur Workflow-Automatisierung in München</FaqContainer.Headline>
        </FaqContainer>
      </ContentWrapper>

      {/* Section 10: ConsultationCta */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
