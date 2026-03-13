import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import ContentWrapper from "@/components/layout/content-wrapper";
import BackgroundHero from "@/components/heroes/background-hero";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import Typo from "@/components/ui/typo";
import { CityLinksFromMeta } from "@/components/standorte/city-links";
import type { CityMeta } from "@/lib/meta-custom";
import { getRewriteOverrides } from "@/lib/get-rewrites";
import { rewriteSiteConfig } from "./rewrite.site";
import StatsList from "@/components/ui/stats-list";
import IntroBox from "@/components/ui/intro-box";
import TabGroup, {
  TabNavigation,
  TabItem,
  TabContent,
} from "@/components/ui/tab-group";
import SimpleGrid from "@/components/layout/simple-grid";
import ComparisonCard, {
  BeforeCard,
  AfterCard,
  ComparisonHeadline,
  ComparisonList,
  ComparisonListItem,
  ComparisonFooter,
} from "@/components/cards/comparison-card";
import BoundlessImageCard from "@/components/cards/boundless-image-card";
import { FaqContainer } from "@/components/ui/faqs";
import ContactButton from "@/components/buttons/contact-button";

export const metaCustom: CityMeta = {
  name: "Frankfurt am Main",
  slug: "frankfurt-am-main",
  bundesland: "Hessen",
  publish: true,
  nearbySmall: [
    "Hanau",
    "Bad Homburg vor der Höhe",
    "Oberursel",
    "Hofheim am Taunus",
    "Neu-Isenburg",
    "Langen",
    "Dreieich",
    "Rodgau",
    "Bad Vilbel",
    "Maintal",
    "Rüsselsheim am Main",
    "Hattersheim am Main",
    "Eschborn",
    "Friedrichsdorf",
    "Bad Soden am Taunus",
    "Dietzenbach",
  ],
  crossReference: [
    { name: "Offenbach am Main", slug: "offenbach-am-main" },
    { name: "Darmstadt", slug: "darmstadt" },
    { name: "Wiesbaden", slug: "wiesbaden" },
    { name: "Mainz", slug: "mainz" },
    { name: "Mannheim", slug: "mannheim" },
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
    `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`;
  const description =
    overrides?.metaDescription ??
    `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`;

  return {
    title,
    description,
    keywords: overrides?.keywords ?? [
      "Workflow-Automatisierung Frankfurt",
      "n8n Frankfurt",
      "KI Automatisierung Frankfurt",
      "Prozessoptimierung Frankfurt",
      "Finanzsektor Automatisierung",
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
          url: "/images/bluebatch-social-cover.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch Workflow-Automatisierung Frankfurt am Main",
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

const heroStats = [
  { value: 80, suffix: " Mrd. €", label: "BIP Stadt" },
  { value: 300, suffix: " Mrd. €", label: "BIP Metropolregion" },
  { value: 642366, suffix: "", label: "Beschäftigte (Rekord)" },
  { value: 120000, suffix: "+", label: "Finanzsektor-Beschäftigte" },
  { value: 61.6, suffix: " Mio.", label: "Flughafen-Passagiere" },
];

const faqs = [
  {
    question: "Ist n8n für den regulierten Finanzsektor geeignet?",
    answer:
      "Ja. n8n kann self-hosted auf Ihrer eigenen Infrastruktur betrieben werden — keine Daten werden an Dritte übermittelt. Damit ist die Lösung ideal für BaFin- und EZB-regulierte Umgebungen, in denen Datensouveränität und Compliance oberste Priorität haben.",
  },
  {
    question: "Können KI-Modelle in n8n-Workflows integriert werden?",
    answer:
      "Ja. n8n unterstützt die Integration von OpenAI, Anthropic und lokal gehosteten KI-Modellen. So lassen sich KI-gestützte Dokumentenprüfung, automatische Klassifikation und intelligente Entscheidungsprozesse nahtlos in bestehende Workflows einbinden.",
  },
  {
    question: "Wie schnell amortisiert sich die Investition?",
    answer:
      "Im Finanzsektor liegt der typische ROI-Zeitraum bei 3 bis 6 Monaten — vor allem durch eingesparte Compliance-Stunden, reduzierte Fehlerkosten und beschleunigte Berichterstellung.",
  },
  {
    question: "Unterstützen Sie auch Unternehmen außerhalb Frankfurts?",
    answer:
      "Selbstverständlich. Wir betreuen Unternehmen in der gesamten Rhein-Main-Region — von Darmstadt und Wiesbaden über Mainz bis Offenbach und darüber hinaus.",
  },
  {
    question: "Was passiert bei regulatorischen Änderungen?",
    answer:
      "n8n-Workflows lassen sich schnell anpassen. Neue regulatorische Anforderungen wie MiCA, DORA oder Basel IV können zügig in bestehende Automatisierungen implementiert werden, ohne den laufenden Betrieb zu unterbrechen.",
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
      {/* 1. BackgroundHero */}
      <ContentWrapper isFirstSection noPadding>
        <BackgroundHero
          imageSrc="/images/business-analytics.jpg"
          overlayOpacity={0.8}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Frankfurt am Main"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                Automatisierung für{" "}
                <BackgroundHero.Highlight>
                  Europas Finanzhauptstadt
                </BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Workflow-Automatisierung und KI-Lösungen für den Finanzsektor,
            Logistik und die gesamte Rhein-Main-Region. Von
            Compliance-Reporting bis Frachtabwicklung — wir automatisieren
            Ihre geschäftskritischen Prozesse.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">
              Kostenlose Erstberatung vereinbaren
            </ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={280}
              suffix="+"
              label="Finanzinstitute"
              index={0}
            />
            <BackgroundHero.Stat
              value={81000}
              label="Flughafen-Beschäftigte"
              index={1}
            />
            <BackgroundHero.Stat
              value={5.8}
              suffix=" Mio."
              label="Metropolregion"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 2. StatsList — Frankfurt in Zahlen */}
      <ContentWrapper colorScheme="gradient-primary-dark">
        <StatsList stats={heroStats} cols={5} />
      </ContentWrapper>

      {/* 3. IntroBox */}
      <ContentWrapper bodyWidth="small">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Mainhattan</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo Compliance auf Innovation trifft
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            EZB, BaFin, AMLA — Frankfurt unterliegt den strengsten
            regulatorischen Anforderungen Europas. Gleichzeitig ist die Stadt
            offizieller FinTech-Hub mit über 700 Start-ups im TechQuartier und
            beherbergt den weltweit größten Internet-Austauschknoten DE-CIX.
            n8n verbindet Compliance-Automatisierung mit innovativer
            Prozessgestaltung — self-hosted, DSGVO-konform und auf Ihrer
            eigenen Infrastruktur.
          </IntroBox.Paragraph>
        </IntroBox>
      </ContentWrapper>

      {/* 4. TabGroup — Branchen im Fokus */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2 className="text-center mb-8">
          Branchen im Fokus: Frankfurts Wirtschaftsmotor
        </Typo.H2>
        <TabGroup defaultValue="finance">
          <TabNavigation>
            <TabItem value="finance">Finanzsektor</TabItem>
            <TabItem value="logistik">Flughafen & Logistik</TabItem>
            <TabItem value="messe">Messe Frankfurt</TabItem>
            <TabItem value="fintech">FinTech & IT</TabItem>
          </TabNavigation>

          <TabContent value="finance">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>280+ Finanzinstitute — das Herz Europas</Typo.H3>
                <Typo.Paragraph>
                  Frankfurt ist Sitz der Europäischen Zentralbank, der
                  Deutschen Bundesbank und der neuen EU-Anti-Geldwäsche-Behörde
                  AMLA. Über 120.000 Beschäftigte arbeiten im Finanzsektor —
                  mehr als an jedem anderen Finanzstandort auf dem europäischen
                  Festland. Seit dem Brexit verlagern immer mehr internationale
                  Institute ihre europäischen Hauptsitze hierher.
                </Typo.Paragraph>
                <Typo.H4>n8n-Automatisierung im Finanzsektor:</Typo.H4>
                <Typo.List>
                  <li>
                    Automatisierte KYC/AML-Prüfungen mit KI-gestützter
                    Dokumentenanalyse
                  </li>
                  <li>
                    Echtzeit-Compliance-Reporting an BaFin und EZB
                  </li>
                  <li>
                    Regulatorische Meldungen für MiCA, DORA und Basel IV
                  </li>
                  <li>
                    Automatisierte Risikoüberwachung und Transaktions-Monitoring
                  </li>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/business-professional.jpg"
                  alt="Workflow-Automatisierung im Frankfurter Finanzsektor mit n8n und KI-gestützter Compliance"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>

          <TabContent value="logistik">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>
                  Deutschlands größter Flughafen & 12.000+ Logistikfirmen
                </Typo.H3>
                <Typo.Paragraph>
                  Der Frankfurter Flughafen ist die größte lokale Arbeitsstätte
                  Deutschlands mit rund 81.000 Beschäftigten und über 61,6
                  Millionen Passagieren im Jahr 2024. In der Rhein-Main-Region
                  arbeiten rund 291.000 Beschäftigte in über 12.000
                  Logistikunternehmen — ein Automatisierungspotenzial
                  enormen Ausmaßes.
                </Typo.Paragraph>
                <Typo.H4>n8n-Automatisierung in der Logistik:</Typo.H4>
                <Typo.List>
                  <li>
                    Automatisierte Frachtabwicklung und Zolldokumentation
                  </li>
                  <li>
                    Intelligente Personalplanung und Schichtmanagement
                  </li>
                  <li>Vorausschauende Wartung durch IoT-Datenintegration</li>
                  <li>
                    Echtzeit-Tracking und automatisierte Statusmeldungen
                  </li>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/process-automation.jpg"
                  alt="Prozessautomatisierung fuer Logistik und Frachtabwicklung am Frankfurter Flughafen"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>

          <TabContent value="messe">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>
                  Die älteste Messe der Welt — seit 1240
                </Typo.H3>
                <Typo.Paragraph>
                  Die Messe Frankfurt organisiert hunderte Veranstaltungen
                  jährlich auf 366.637 m² Ausstellungsfläche in 11 Hallen.
                  Mit bis zu 30.000 Ausstellern und 2,5 Millionen Besuchern
                  pro Jahr ist sie einer der weltweit größten
                  Messeveranstalter. Von der Buchmesse über die IAA bis
                  Ambiente und Light+Building — jede Veranstaltung erfordert
                  koordinierte Prozesse.
                </Typo.Paragraph>
                <Typo.H4>n8n-Automatisierung im Messewesen:</Typo.H4>
                <Typo.List>
                  <li>
                    Automatisiertes Ausstellermanagement und Standplatzvergabe
                  </li>
                  <li>
                    Digitale Lead-Erfassung und automatische CRM-Synchronisation
                  </li>
                  <li>
                    Besucherregistrierung und personalisierte Kommunikation
                  </li>
                  <li>
                    Nachbereitungs-Workflows für Follow-up und Auswertung
                  </li>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/trade-exhibition.jpg"
                  alt="Digitale Automatisierung fuer Messe Frankfurt mit Ausstellermanagement und Lead-Erfassung"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>

          <TabContent value="fintech">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>
                  FinTech-Hub Deutschland & DE-CIX
                </Typo.H3>
                <Typo.Paragraph>
                  Frankfurt ist offizieller FinTech-Hub des
                  Bundeswirtschaftsministeriums. Das TechQuartier beherbergt
                  über 700 Start-ups und 50 akademische Innovatoren. Der DE-CIX
                  ist der weltweit größte Internet-Austauschknoten, und die
                  wachsende Rechenzentrumsbranche macht Frankfurt zu einem
                  der wichtigsten IT-Infrastrukturstandorte Europas.
                </Typo.Paragraph>
                <Typo.H4>n8n-Automatisierung für FinTech & IT:</Typo.H4>
                <Typo.List>
                  <li>
                    API-Integrationen für schnelle Skalierung neuer Services
                  </li>
                  <li>
                    Automatisierte Datenverarbeitung und ETL-Pipelines
                  </li>
                  <li>
                    Monitoring, Incident-Management und Alerting-Workflows
                  </li>
                  <li>
                    Automatisierte Onboarding-Prozesse und KYC für FinTechs
                  </li>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/technology-integration.jpg"
                  alt="FinTech-Automatisierung und API-Integration im Frankfurter TechQuartier"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>
        </TabGroup>
      </ContentWrapper>

      {/* 5. ComparisonCard — Compliance: Manuell vs. Automatisiert */}
      <ContentWrapper>
        <Typo.H2 className="text-center mb-8">
          Compliance-Prozesse: Manuell vs. Automatisiert
        </Typo.H2>
        <ComparisonCard>
          <BeforeCard>
            <ComparisonHeadline>Manuelle Compliance</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                Excel-basierte Prüfprozesse mit hohem Fehlerrisiko
              </ComparisonListItem>
              <ComparisonListItem>
                Wochenlange Berichterstellung für regulatorische Meldungen
              </ComparisonListItem>
              <ComparisonListItem>
                Menschliche Fehler bei KYC-Prüfungen und Dokumentensichtung
              </ComparisonListItem>
              <ComparisonListItem>
                Isolierte Datenquellen ohne zentrale Übersicht
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>
              Hohe Kosten, langsame Prozesse, Compliance-Risiken
            </ComparisonFooter>
          </BeforeCard>
          <AfterCard>
            <ComparisonHeadline>n8n-Automatisierung</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                Regelbasierte automatische Prüfung in Echtzeit
              </ComparisonListItem>
              <ComparisonListItem>
                Echtzeit-Reporting direkt an BaFin und EZB
              </ComparisonListItem>
              <ComparisonListItem>
                KI-gestützte Dokumentenprüfung mit automatischer Klassifikation
              </ComparisonListItem>
              <ComparisonListItem>
                Zentrales Datenmanagement über alle Systeme hinweg
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>
              80% weniger manuelle Aufwände, minimierte Fehlerquote
            </ComparisonFooter>
          </AfterCard>
        </ComparisonCard>
      </ContentWrapper>

      {/* 6. Prozess-Teaser */}
      <ContentWrapper colorScheme="gray">
        <IntroBox>
          <IntroBox.PreHeadline>Unser Prozess</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Implementierung für Frankfurts Finanzwelt
          </IntroBox.Headline>
          <IntroBox.Subline>
            Banken, Versicherungen und FinTechs im Rhein-Main-Gebiet brauchen
            Automatisierung mit höchsten Compliance-Standards — von
            KYC/AML-Workflows bis zur regulatorischen Berichterstattung. Unser
            bewährtes 6-Phasen-Framework ist genau dafür gebaut.
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

      {/* 7. BoundlessImageCard — Die Rhein-Main-Region */}
      <ContentWrapper>
        <BoundlessImageCard imagePosition="left">
          <BoundlessImageCard.Image
            src="/images/partnership.jpg"
            alt="Rhein-Main-Region als Wirtschaftsstandort mit 5,8 Millionen Einwohnern und starker Vernetzung"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>Die Rhein-Main-Region: Ihr Automatisierungspartner vor Ort</Typo.H2>
            <Typo.Paragraph>
              Frankfurt profitiert von starken Nachbarstädten mit
              einzigartigen Kompetenzen: Darmstadt mit ESA, EUMETSAT und
              der TU Darmstadt. Wiesbaden als hessische Landeshauptstadt
              mit dem Statistischen Bundesamt (Destatis). Mainz mit dem
              ZDF-Hauptsitz und BioNTech. Offenbach mit dem Deutschen
              Wetterdienst und einer wachsenden Kreativwirtschaft.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Unsere Automatisierungslösungen bedienen die gesamte
              Metropolregion mit ihren 5,8 Millionen Einwohnern und
              über 2,3 Millionen Beschäftigten. Ob Sie in Frankfurt
              selbst oder in einer der umliegenden Städte sitzen — wir
              sind Ihr Partner für intelligente Prozessautomation.
            </Typo.Paragraph>
          </BoundlessImageCard.Content>
        </BoundlessImageCard>
      </ContentWrapper>

      {/* 8. City Links */}
      <ContentWrapper colorScheme="gradient-night">
        <CityLinksFromMeta
          crossReference={metaCustom.crossReference}
          nearbySmall={metaCustom.nearbySmall}
        />
      </ContentWrapper>

      {/* 9. FAQs */}
      <ContentWrapper colorScheme="gray-light">
        <FaqContainer faqs={faqs}>
          <FaqContainer.Headline>Häufige Fragen zur Automatisierung in Frankfurt</FaqContainer.Headline>
        </FaqContainer>
      </ContentWrapper>

      {/* 10. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
