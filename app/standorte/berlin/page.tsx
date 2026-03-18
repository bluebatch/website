import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentWrapper from "@/components/layout/content-wrapper";
import BackgroundHero from "@/components/heroes/background-hero";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import Typo from "@/components/ui/typo";
import IntroBox from "@/components/ui/intro-box";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import KpiCard from "@/components/cards/kpi-card";
import BoundlessImageCard from "@/components/cards/boundless-image-card";
import ComparisonCard, {
  BeforeCard,
  AfterCard,
  ComparisonHeadline,
  ComparisonList,
  ComparisonListItem,
} from "@/components/cards/comparison-card";
import { FaqContainer } from "@/components/ui/faqs";
import { CityLinksFromMeta } from "@/components/standorte/city-links";
import ContactButton from "@/components/buttons/contact-button";
import { Cpu, ShoppingCart, HeartPulse, Landmark, Plane, Palette } from "lucide-react";
import type { CityMeta } from "@/lib/meta-custom";
import { getRewriteOverrides } from "@/lib/get-rewrites";
import { rewriteSiteConfig } from "./rewrite.site";

export const metaCustom: CityMeta = {
  name: "Berlin",
  slug: "berlin",
  bundesland: "Berlin",
  publish: true,
  nearbySmall: [
    "Falkensee",
    "Bernau bei Berlin",
    "Oranienburg",
    "Teltow",
    "Hennigsdorf",
    "Hohen Neuendorf",
    "Königs Wusterhausen",
    "Ludwigsfelde",
    "Strausberg",
    "Werder (Havel)",
    "Eberswalde",
    "Fürstenwalde/Spree",
  ],
  crossReference: [
    { name: "Potsdam", slug: "potsdam" },
    { name: "Cottbus", slug: "cottbus" },
  ],
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}): Promise<Metadata> {
  const params = await searchParams;
  const overrides = getRewriteOverrides(rewriteSiteConfig, params);

  const title =
    overrides?.metaTitle ??
    "KI Agentur Berlin – n8n, Workflow-Automatisierung & Prozessoptimierung | Bluebatch";
  const description =
    overrides?.metaDescription ??
    "Bluebatch ist Ihre KI Agentur Berlin — Ihr Partner für Workflow-Automatisierung, n8n-Workflows, API-Integrationen und Prozessoptimierung für Startups, Mittelstand und Unternehmen in Deutschlands Startup-Hauptstadt.";

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "KI Agentur Berlin",
      "Workflow-Automatisierung Berlin",
      "n8n Berlin",
      "KI Automatisierung Berlin",
      "Prozessoptimierung Berlin",
      "API Integration Berlin",
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
          url: "/images/cities/berlin.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch Workflow-Automatisierung Berlin",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/cities/berlin.jpg"],
    },
    alternates: {
      canonical: `/standorte/${metaCustom.slug}`,
    },
  };
}

const berlinFaqs = [
  {
    question: "Warum n8n statt Zapier oder Make?",
    answer:
      "n8n ist Open-Source und kann self-hosted betrieben werden — ideal für Berliner Unternehmen mit hohen Datenschutzanforderungen. Mit über 1.200 Integrationen, vollständiger DSGVO-Konformität und ohne Vendor-Lock-in bietet n8n maximale Flexibilität. Gerade für Startups und Tech-Unternehmen in Berlin ist die Möglichkeit, eigene Nodes zu entwickeln und die Plattform frei zu erweitern, ein entscheidender Vorteil.",
  },
  {
    question: "Ist Workflow-Automatisierung auch für Startups geeignet?",
    answer:
      "Gerade für Berliner Startups ist Automatisierung ein Wachstumshebel. Mit über 500 Neugründungen pro Jahr und einem Ökosystem von 2.500+ Tech-Startups stehen Berliner Gründer vor der Herausforderung, schnell zu skalieren, ohne proportional Personal aufzubauen. n8n-Workflows automatisieren Onboarding, Datenverarbeitung, Kundenservice und interne Prozesse — so bleibt Ihr Team für wertschöpfende Aufgaben frei.",
  },
  {
    question: "Wie lange dauert die Implementierung?",
    answer:
      "Erste produktive Workflows liefern wir in 1–2 Wochen. Komplexere Systeme mit mehreren API-Integrationen, KI-Komponenten und individuellen Nodes setzen wir in 4–8 Wochen um. In einem kostenlosen Erstgespräch analysieren wir Ihren konkreten Bedarf und geben Ihnen einen realistischen Zeitrahmen.",
  },
  {
    question: "Können bestehende Systeme integriert werden?",
    answer:
      "Ja — n8n verbindet CRM-Systeme, ERP-Software, Buchhaltungstools, Kommunikationsplattformen und über 1.200 weitere Anwendungen. Ob Salesforce, SAP, HubSpot, Slack oder branchenspezifische Software: Wir schaffen nahtlose Datenflüsse zwischen allen Systemen, die Sie bereits nutzen.",
  },
  {
    question: "Wie unterstützt KI die Automatisierung?",
    answer:
      "AI Agents erweitern jeden n8n-Workflow um intelligente Entscheidungen. Sie klassifizieren eingehende Daten, generieren Texte und E-Mails, extrahieren Informationen aus Dokumenten und treffen regelbasierte Entscheidungen. Berliner Unternehmen nutzen KI-gestützte Workflows bereits für automatisierte Kundenkommunikation, Dokumentenverarbeitung und datenbasierte Entscheidungsprozesse.",
  },
  {
    question:
      "Was unterscheidet Bluebatch als KI Agentur Berlin von anderen IT-Dienstleistern?",
    answer:
      "Als spezialisierte KI Agentur Berlin fokussieren wir uns auf Workflow-Automatisierung mit n8n und KI — kein Bauchladen, sondern tiefe Expertise. Unsere Kunden profitieren von Self-Hosted-Lösungen, die volle Datenkontrolle gewährleisten, individueller Workflow-Entwicklung und langfristiger Betreuung. Wir verstehen die Berliner Startup- und Unternehmenslandschaft und liefern Lösungen, die mit Ihrem Unternehmen skalieren.",
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
      {/* 1. Hero */}
      <ContentWrapper isFirstSection noPadding>
        <BackgroundHero
          imageSrc="/images/cities/berlin.jpg"
          overlayOpacity={0.8}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Berlin"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI Agentur Berlin –{" "}
                <BackgroundHero.Highlight>
                  Workflow-Automatisierung für Deutschlands Startup-Hauptstadt
                </BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Als KI Agentur Berlin sind wir Ihr Partner für n8n-Workflows,
            KI-Automatisierung und Prozessoptimierung in Berlin und Brandenburg.
            Self-hosted, DSGVO-konform und skalierbar.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">Beratung anfragen</ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={207}
              suffix=" Mrd. €"
              label="BIP 2024"
              index={0}
            />
            <BackgroundHero.Stat
              value={2500}
              suffix="+"
              label="Tech-Startups"
              index={1}
            />
            <BackgroundHero.Stat value={57} label="Unicorns" index={2} />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 2. IntroBox */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Europas zweitattraktivster Startup-Standort
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Warum Berlin eine spezialisierte KI Agentur braucht
          </IntroBox.Headline>
          <IntroBox.Subline>
            Berlins Wirtschaft wächst schneller als der Bundesdurchschnitt — zum
            zwölften Mal in Folge. Mit rund 500 Neugründungen pro Jahr, über
            1,68 Millionen Beschäftigten und 43.200 Gewerbeanmeldungen allein
            2025 steigt der Bedarf an intelligenter Automatisierung rasant. Als
            KI Agentur Berlin unterstützen wir Unternehmen dabei, in diesem
            Tempo zu skalieren — mit Workflows, die mitwachsen.
          </IntroBox.Subline>
        </IntroBox>
      </ContentWrapper>

      {/* 3. Schlüsselbranchen */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Branchen in Berlin</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Schlüsselbranchen mit Automatisierungsbedarf
          </IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={3}>
          <SimpleCard>
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Cpu className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>IKT & FinTech</Typo.H3>
            <Typo.Paragraph>
              Berlin ist Deutschlands größter IT-Standort und vereint 89 % der
              deutschen FinTech-Investitionen. Automatisierte Compliance-Checks,
              Datenverarbeitung und Kundenservice sind hier keine Option — sie
              sind Pflicht.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <SimpleCard.Icon color="white" background="primary-gradient">
              <ShoppingCart className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>E-Commerce & Plattformen</Typo.H3>
            <Typo.Paragraph>
              Mit Zalando, Delivery Hero und HelloFresh ist Berlin das Zentrum
              des deutschen E-Commerce. Bestellabwicklung, Logistik und
              Kundenkommunikation verlangen nach durchgängiger Automatisierung.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <SimpleCard.Icon color="white" background="primary-gradient">
              <HeartPulse className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>HealthTech & Life Sciences</Typo.H3>
            <Typo.Paragraph>
              Die Charité als Europas größtes Universitätsklinikum, Bayer und
              über 340 Climate-Tech-Startups treiben Innovationen voran — mit
              wachsendem Bedarf an datengetriebenen Workflows.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Landmark className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Öffentliche Verwaltung</Typo.H3>
            <Typo.Paragraph>
              Mit BärGPT hat Berlin einen eigenen KI-Assistenten für die
              Landesverwaltung eingeführt. Studien zeigen: Bis zu 64 % der
              Arbeitsstunden in Behörden könnten automatisiert werden.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Plane className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Tourismus & Gastgewerbe</Typo.H3>
            <Typo.Paragraph>
              Über 30 Millionen Übernachtungen und 12,7 Millionen Gäste jährlich
              erzeugen enormen operativen Aufwand. Hotels und Veranstalter
              setzen auf automatisierte Buchungs- und Kommunikationssysteme.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <SimpleCard.Icon color="white" background="primary-gradient">
              <Palette className="size-10" strokeWidth={1.5} />
            </SimpleCard.Icon>
            <Typo.H3>Kreativwirtschaft</Typo.H3>
            <Typo.Paragraph>
              Film, Musik, Design und Games — Berlin ist Deutschlands kreatives
              Zentrum mit 437 Mio. Euro Investitionen in ICT und
              Kreativwirtschaft. Automatisierte Produktions-Pipelines sparen
              wertvolle Kreativzeit.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 4. KPI-Karten */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Berlin in Zahlen</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wirtschaftskraft der Hauptstadtregion
          </IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={4}>
          <KpiCard
            value={35}
            suffix=" %"
            subtitle="Aller deutschen VC-Investitionen fließen nach Berlin"
          />
          <KpiCard
            value={40}
            suffix=" %"
            subtitle="Internationale Gründer im Berliner Ökosystem"
          />
          <KpiCard
            value={2500}
            suffix="+"
            subtitle="Tech-Startups — 1 Startup pro 400 Einwohner"
          />
          <KpiCard
            value={94000}
            subtitle="Arbeitsplätze im Startup-Ökosystem"
          />
        </SimpleGrid>
      </ContentWrapper>

      {/* 5. BoundlessImageCard — Industriestandort */}
      <ContentWrapper>
        <BoundlessImageCard imagePosition="right">
          <BoundlessImageCard.Image
            src="/images/technology-integration.jpg"
            alt="Industrielle Innovation in Berlin – Tesla Gigafactory und Siemensstadt 2.0 als Treiber moderner Workflow-Automatisierung"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>KI Agentur Berlin — Partner für den Industriestandort der Zukunft</Typo.H2>
            <Typo.Paragraph>
              Die Tesla Gigafactory in Grünheide produziert mit einer Kapazität
              von 500.000 Fahrzeugen pro Jahr und beschäftigt rund 11.000
              Menschen. In Spandau entsteht mit Siemensstadt 2.0 ein
              Milliardenprojekt, das den historischen Siemens-Campus in ein
              modernes Innovations- und Wohnquartier verwandelt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Diese Großprojekte erfordern modernste Automatisierung — von der
              Produktionssteuerung über Lieferketten-Management bis zur
              Integration von IoT-Daten in Echtzeit-Workflows. Als KI Agentur
              Berlin setzen wir genau hier mit n8n-basierten Lösungen an.
            </Typo.Paragraph>
          </BoundlessImageCard.Content>
        </BoundlessImageCard>
      </ContentWrapper>

      {/* 6. ComparisonCard — Vorher/Nachher */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Der Unterschied</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Vor und nach der Automatisierung mit n8n
          </IntroBox.Headline>
        </IntroBox>
        <ComparisonCard>
          <BeforeCard>
            <ComparisonHeadline>Vorher</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                Manuelles Onboarding neuer Kunden — dauert Tage, bindet das halbe Team
              </ComparisonListItem>
              <ComparisonListItem>
                Investor-Reports per Hand aus fünf verschiedenen Tools zusammenkopiert
              </ComparisonListItem>
              <ComparisonListItem>
                Jede neue Einstellung erzeugt Stunden an Admin-Aufwand statt Produktivität
              </ComparisonListItem>
              <ComparisonListItem>
                Isolierte SaaS-Tools ohne Verbindung — Datensilos bremsen jede Skalierung
              </ComparisonListItem>
            </ComparisonList>
          </BeforeCard>
          <AfterCard>
            <ComparisonHeadline>Nachher mit n8n</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                Automatisiertes Self-Service-Onboarding in Minuten — skaliert mit jeder Funding-Runde
              </ComparisonListItem>
              <ComparisonListItem>
                VC-ready Dashboards und KPI-Reports auf Knopfdruck — immer pitch-bereit
              </ComparisonListItem>
              <ComparisonListItem>
                Automatisierte HR-Workflows von Vertrag bis Tool-Zugang — Talent Retention ab Tag 1
              </ComparisonListItem>
              <ComparisonListItem>
                1.200+ Integrationen nahtlos verbunden — von CRM bis Billing, ein durchgängiger Datenfluss
              </ComparisonListItem>
            </ComparisonList>
          </AfterCard>
        </ComparisonCard>
      </ContentWrapper>

      {/* 7. Prozess-Teaser */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Unser Prozess</IntroBox.PreHeadline>
          <IntroBox.Headline>
            So starten Sie mit n8n in Berlin
          </IntroBox.Headline>
          <IntroBox.Subline>
            Berliner Startups und Scale-ups brauchen Automatisierung, die mit
            ihrem Tempo mithält — schnelle Iterationen, lean Operations und
            skalierbare Workflows ab Tag eins. Unser bewährtes 6-Phasen-Framework
            ist genau dafür gebaut.
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

      {/* 8. City Links */}
      <ContentWrapper colorScheme="gradient-night">
        <CityLinksFromMeta
          crossReference={metaCustom.crossReference}
          nearbySmall={metaCustom.nearbySmall}
        />
      </ContentWrapper>

      {/* 9. FAQ */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer faqs={berlinFaqs}>
          <FaqContainer.Headline>FAQ zur Workflow-Automatisierung in Berlin</FaqContainer.Headline>
        </FaqContainer>
      </ContentWrapper>

      {/* 10. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
