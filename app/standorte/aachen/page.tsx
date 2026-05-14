import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentWrapper from "@/components/layout/content-wrapper";
import BackgroundHero from "@/components/heroes/background-hero";
import IntroBox from "@/components/ui/intro-box";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import KpiCard from "@/components/cards/kpi-card";
import BoundlessImageCard from "@/components/cards/boundless-image-card";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import Typo from "@/components/ui/typo";
import { FaqContainer } from "@/components/ui/faqs";
import { CityLinksFromMeta } from "@/components/standorte/city-links";
import ContactButton from "@/components/buttons/contact-button";
import { GraduationCap, Car, FlaskConical, Cog, Cpu, HeartPulse } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-workflows-aachen",
      preHeadline: "AI Workflows Aachen",
      headline: "AI Workflows & Automatisierung in Aachen",
      metaTitle: "AI Workflows Aachen - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Aachen. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Aachen",
        "KI Automatisierung Aachen",
        "Workflow Automatisierung Aachen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-aachen",
      preHeadline: "n8n Automation Aachen",
      headline: "n8n Automation in Aachen - Workflows automatisieren",
      metaTitle: "n8n Automation Aachen | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Aachen. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Aachen",
        "n8n Aachen",
        "Workflow Automation Aachen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-aachen",
      preHeadline: "n8n Aachen",
      headline: "n8n Agentur in Aachen",
      metaTitle: "n8n Aachen - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Aachen. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Aachen und Umgebung.",
      keywords: [
        "n8n Aachen",
        "n8n Agentur Aachen",
        "n8n Beratung Aachen",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-aachen",
      preHeadline: "Automation Aachen",
      headline: "Automation & Prozessoptimierung in Aachen",
      metaTitle: "Automation Aachen - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Aachen. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Aachen",
        "Prozessautomatisierung Aachen",
        "Workflow Automation Aachen",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-aachen",
      preHeadline: "IT Dienstleister Aachen",
      headline: "IT Dienstleister in Aachen - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Aachen - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Aachen. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Aachen.",
      keywords: [
        "IT Dienstleister Aachen",
        "IT Service Aachen",
        "Digitalisierung Aachen",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-aachen",
      preHeadline: "KI Beratung Aachen",
      headline: "KI Beratung in Aachen - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Aachen - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Aachen. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Aachen",
        "KI Lösungen Aachen",
        "Künstliche Intelligenz Aachen",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Aachen",
  slug: "aachen",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Stolberg",
    "Eschweiler",
    "Herzogenrath",
    "Würselen",
    "Alsdorf",
    "Baesweiler",
    "Düren",
    "Jülich",
  ],
  crossReference: [
    { name: "Köln", slug: "koeln" },
    { name: "Mönchengladbach", slug: "moenchengladbach" },
    { name: "Düsseldorf", slug: "duesseldorf" },
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

  const title = overrides?.metaTitle ?? "KI-Agentur in Aachen | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Bluebatch ist Ihre KI-Agentur in Aachen — n8n-Workflows, KI-Automatisierung und Prozessoptimierung für RWTH-Spin-offs, Ford-FRC, FEV, Grünenthal und den Mittelstand im Dreiländereck.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI-Agentur Aachen",
      "Workflow-Automatisierung Aachen",
      "n8n Aachen",
      "KI Automatisierung Aachen",
      "Prozessoptimierung Aachen",
      "RWTH Aachen",
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
          url: "/images/cities/aachen.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch KI-Agentur Aachen",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/aachen.jpg"],
    },
    alternates: {
      canonical: "/standorte/aachen",
    },
  };
}

const aachenFaqs = [
  {
    question: "Arbeitet ihr mit RWTH-Spin-offs zusammen?",
    answer:
      "Ja. Aachen ist Deutschlands stärkster Spin-off-Standort. Wir unterstützen junge Tech-Unternehmen aus dem RWTH-Ökosystem bei der Skalierung von Onboarding, CRM, Förderantragsmanagement und Investor-Reporting. n8n wächst mit, vom Pre-Seed bis zur Series A – ohne dass eigene DevOps-Teams nötig sind.",
  },
  {
    question: "Ford-Werk FRC und FEV – wie hilft n8n bei Engineering-Workflows?",
    answer:
      "Datenflüsse zwischen CAD/PLM/ERP, Versuchsdaten aus Prüfständen, ASPICE-Doku, IATF-16949-Konformität und Lieferanten-Engineering-Daten werden mit n8n orchestriert. Wir kennen die F&E-getriebene Wertschöpfungskette in Aachen.",
  },
  {
    question: "Lindt, Lambertz, Zentis – passt n8n zur Lebensmittelindustrie?",
    answer:
      "Ja. IFS Food, BRC, EU-Verordnung 178/2002, Chargenrückverfolgung, Lieferanten-Audits und mehrsprachige Kennzeichnung sind klassische n8n-Use-Cases. Wir bauen Workflows, die GxP-/IFS-Auditoren akzeptieren.",
  },
  {
    question: "Grünenthal – wie deckt n8n GxP/EMA-Compliance ab?",
    answer:
      "Pharmakovigilanz, AEs/SAEs, eCRF-Datenflüsse, GMP-Audits, Sortenschutz und Studien-Workflows werden auditfest abgebildet. Wir docken an Veeva Vault, ArisGlobal LifeSphere und SAP an – mit voller Mandantentrennung.",
  },
  {
    question: "Wir arbeiten grenzüberschreitend mit NL und BE – wie hilft n8n?",
    answer:
      "Mehrsprachige Dokumente, Intrastat-Meldungen, unterschiedliche MwSt-Regime, Zollabwicklung und länderspezifische Etikettierung werden in n8n-Pipelines abgebildet. Dreiländereck-Compliance ist ein klassisches Aachener Thema.",
  },
  {
    question: "Welche Phasen erwarten uns bei einer Implementierung?",
    answer:
      "Wir folgen einem strukturierten 6-Phasen-Ansatz von der Analyse bis zum operativen Betrieb. Details und konkrete Beispiele auf unserer Seite Unser Prozess.",
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
          imageSrc="/images/cities/aachen.jpg"
          overlayOpacity={0.78}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Aachen"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI-Agentur in Aachen –{" "}
                RWTH, Automotive-Forschung und{" "}
                <BackgroundHero.Highlight>Dreiländereck-Mittelstand</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            RWTH Aachen, Ford Research Center, FEV, Grünenthal, Lindt,
            Universitätsklinikum, Fraunhofer ILT/IPT/IME – Aachen ist
            Deutschlands stärkster Spin-off-Standort und Tor zu Benelux.
            Wir bauen n8n-Workflows für Engineering-Daten, KI-Forschungstransfer,
            Pharma-Compliance und grenzüberschreitende Lieferketten.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">
              Aachener Workflow besprechen
            </ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={262670}
              label="Einwohner Stadt Aachen"
              index={0}
            />
            <BackgroundHero.Stat
              value={47000}
              label="RWTH-Studierende"
              index={1}
            />
            <BackgroundHero.Stat
              value={22}
              suffix=" Mrd. €"
              label="Industrieumsatz Region"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 4. BoundlessImageCard */}
      <ContentWrapper>
        <BoundlessImageCard imagePosition="right">
          <BoundlessImageCard.Image
            src="/images/cities/aachen.jpg"
            alt="Aachen RWTH und Dreiländereck-Lieferketten – n8n-Workflows für Forschung und Mittelstand"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>Dreiländereck und Spin-off-Welle – Aachen skaliert mit n8n</Typo.H2>
            <Typo.Paragraph>
              Aachener Unternehmen haben oft Niederlassungen in NL und BE.
              Multilinguale Dokumente, Intrastat-Meldungen, MwSt-Regime,
              Zollabwicklung – das ist tägliches Geschäft. Gleichzeitig
              entstehen aus der RWTH kontinuierlich neue Spin-offs, die
              ohne Backoffice-Personal schnell professionalisieren müssen.
              Wir helfen beiden Welten – etablierten Mittelständlern und
              Hyperwachstums-Startups – mit den gleichen n8n-Bausteinen.
            </Typo.Paragraph>
            <div className="mt-4">
              <Link href="/unser-prozess" className="text-primary-600 hover:underline font-semibold">
                Unser 6-Phasen-Prozess →
              </Link>
            </div>
          </BoundlessImageCard.Content>
        </BoundlessImageCard>
      </ContentWrapper>

      {/* 2. IntroBox */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <Typo.H2>Warum Aachen eine spezialisierte KI-Agentur braucht</Typo.H2>
          <Typo.Paragraph>
            Aachen verbindet Spitzenforschung mit klassischem Mittelstand
            wie kaum eine andere deutsche Stadt. Die RWTH ist mit 47.000
            Studierenden Deutschlands größte technische Universität und
            Inkubator hunderter Spin-offs. Ford und FEV haben den Standort
            zur Automotive-F&E-Drehscheibe gemacht, Grünenthal forscht im
            Schmerz-Bereich, die Lebensmittelindustrie (Lindt, Lambertz,
            Zentis) produziert hier in höchster Reglementierungsdichte.
            Hinzu kommt die Dreiländereck-Lage – Niederländer und Belgier
            sind Pflicht-Partner, nicht Optionen.
          </Typo.Paragraph>
        </IntroBox>
      </ContentWrapper>

      {/* 3. SimpleGrid cols=2 — Schlüsselbranchen */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Aachener Cluster, die Automatisierung erzwingen</Typo.H2>
        <Typo.Paragraph>
          RWTH-Spin-offs steuern anders als Lindt, Ford-FRC anders als
          Grünenthal. Wir bauen für jeden Cluster die passenden n8n-Bausteine –
          vom Förder-Antrag bis zur Pharmakovigilanz-Pipeline.
        </Typo.Paragraph>
        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <GraduationCap className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>RWTH Aachen – größte technische Uni Deutschlands</Typo.H3>
            <Typo.Paragraph>
              13.000 Beschäftigte, einer der größten Technologieparks Europas.
              Wir bauen Workflows für Drittmittel-Reporting an BMBF, EU
              (Horizon), DFG, GRC, Patentverwaltung, KASTEL/Helmholtz-Cluster
              und Spin-off-Begleitung – vom Pre-Seed bis zur Series A.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Car className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Ford Research Center, FEV – Automotive-F&amp;E</Typo.H3>
            <Typo.Paragraph>
              Ford hat von Produktion auf Entwicklung umgestellt, FEV
              entwickelt Antriebe global. CAD/PLM/ERP-Datenflüsse,
              Versuchsdaten aus Prüfständen, ASPICE-Doku und IATF-16949-
              Konformität werden mit n8n orchestriert.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <FlaskConical className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Grünenthal – Pharma &amp; Schmerztherapie</Typo.H3>
            <Typo.Paragraph>
              4.400 Beschäftigte am Aachener Standort. Pharmakovigilanz
              (AEs/SAEs), eCRF-Daten, GMP-Audits, Sortenschutz und
              Studien-Workflows werden mit n8n und Veeva Vault verzahnt –
              auditfest und mit GxP-Konformität.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Cpu className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>RWTH Aachen Campus – KI-, Photonik- und H2-Cluster</Typo.H3>
            <Typo.Paragraph>
              Helmholtz-Cluster für Wasserstoffwirtschaft (HC-H2), Cluster
              für Smart Logistik, Produktionstechnik, E-Mobility und
              Photonik. Industrie-Forschungs-Kooperationen werden mit n8n,
              Confluence, Jira und SAP zu schlanken Workflows verbunden.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Cog className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Lindt, Lambertz, Zentis – Lebensmittelindustrie</Typo.H3>
            <Typo.Paragraph>
              IFS Food, BRC, EU-Verordnung 178/2002, Chargenrückverfolgung
              und Multi-Sprachen-Kennzeichnung erzeugen enormen
              Dokumentationsaufwand. Wir bauen Workflows, die GxP- und
              IFS-Auditoren akzeptieren – inklusive Lieferanten-Audits.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <SimpleCard.Icon color="white" background="primary-gradient">
              <HeartPulse className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Universitätsklinikum Aachen</Typo.H3>
            <Typo.Paragraph>
              9.500 Beschäftigte, einer der größten Maximalversorger NRWs.
              Verwaltungs-Workflows in Abrechnung, Dokumentation,
              Patientenkommunikation und Studien-Management werden unter
              Personalmangel mit KI-gestützten Workflows entlastet.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 5. KpiCard Row */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Aachen in Zahlen</Typo.H2>
        <SimpleGrid cols={4}>
          <KpiCard
            value={47000}
            subtitle="RWTH-Studierende"
          />
          <KpiCard
            value={13000}
            subtitle="RWTH-Beschäftigte"
          />
          <KpiCard
            value={4400}
            subtitle="Grünenthal-Beschäftigte Aachen"
          />
          <KpiCard
            value={70000}
            subtitle="Industriebeschäftigte Region"
          />
        </SimpleGrid>
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
        <Typo.H2>Häufige Fragen aus Aachen</Typo.H2>
        <div className="mt-6">
          <FaqContainer faqs={aachenFaqs} />
        </div>
      </ContentWrapper>

      {/* 7. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>    </>
  );
}
