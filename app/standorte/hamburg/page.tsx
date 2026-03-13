import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentWrapper from "@/components/layout/content-wrapper";
import BackgroundHero from "@/components/heroes/background-hero";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import ContactButton from "@/components/buttons/contact-button";
import Typo from "@/components/ui/typo";
import IntroBox from "@/components/ui/intro-box";
import StatsList from "@/components/ui/stats-list";
import TabGroup, {
  TabNavigation,
  TabItem,
  TabContent,
} from "@/components/ui/tab-group";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import BoundlessImageCard from "@/components/cards/boundless-image-card";
import SavingsCard, {
  SavingsBadge,
  SavingsItems,
  SavingsItem,
} from "@/components/cards/savings-card";
import SectionHeader from "@/components/ui/section-header";
import { FaqContainer } from "@/components/ui/faqs";
import { CityLinksFromMeta } from "@/components/standorte/city-links";
import { getRewriteOverrides } from "@/lib/get-rewrites";
import { rewriteSiteConfig } from "./rewrite.site";
import type { CityMeta } from "@/lib/meta-custom";

export const metaCustom: CityMeta = {
  name: "Hamburg",
  slug: "hamburg",
  bundesland: "Hamburg",
  publish: true,
  nearbySmall: [
    "Norderstedt",
    "Pinneberg",
    "Ahrensburg",
    "Wedel",
    "Reinbek",
    "Buxtehude",
    "Elmshorn",
    "Stade",
    "Geesthacht",
    "Henstedt-Ulzburg",
    "Bad Oldesloe",
    "Lüneburg",
  ],
  crossReference: [
    { name: "Bremen", slug: "bremen" },
    { name: "Kiel", slug: "kiel" },
    { name: "Lübeck", slug: "luebeck" },
    { name: "Hannover", slug: "hannover" },
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
    alternates: {
      canonical: `/standorte/${metaCustom.slug}`,
    },
    ...(overrides?.keywords && { keywords: overrides.keywords }),
  };
}

const stats = [
  { value: 161.9, suffix: " Mrd. \u20AC", label: "BIP 2024" },
  { value: 8.3, suffix: " Mio. TEU", label: "Containerumschlag 2025" },
  { value: 1095400, label: "Beschäftigte (Rekord)" },
  { value: 132000, label: "Unternehmen" },
];

const faqs = [
  {
    question: "Warum ist n8n ideal für die Logistikbranche?",
    answer:
      "n8n ist Open-Source und kann self-hosted betrieben werden. Mit über 1.200 Integrationen lassen sich ERP-Systeme, Warehouse-Management-Systeme (WMS), Transport-Management-Systeme (TMS) und Carrier-APIs nahtlos verbinden. So automatisieren Sie Zolldokumentation, Sendungsverfolgung und Lagerverwaltung in einem einzigen Workflow.",
  },
  {
    question: "Kann n8n mit unseren Legacy-Systemen arbeiten?",
    answer:
      "Ja. n8n unterstützt HTTP-Requests, Webhooks, SOAP-APIs und Custom Nodes. Selbst ältere Systeme ohne moderne API-Schnittstellen lassen sich über Datei-basierte Schnittstellen (CSV, XML, EDIFACT) oder Datenbank-Direktverbindungen integrieren.",
  },
  {
    question: "Wie sicher sind unsere Daten bei einer n8n-Lösung?",
    answer:
      "Bei einer Self-Hosted-Installation bleiben Ihre Daten vollständig auf Ihrer eigenen Infrastruktur. Es werden keine Daten an Drittanbieter übermittelt. Das macht n8n 100 % DSGVO-konform — besonders wichtig für Hamburger Unternehmen mit sensiblen Logistik- und Kundendaten.",
  },
  {
    question: "Was kostet Workflow-Automatisierung mit Bluebatch?",
    answer:
      "Die Kosten hängen vom Umfang und der Komplexität ab. Erste Automatisierungsprojekte starten bereits ab wenigen Tausend Euro. Der Return on Investment liegt typischerweise bei 3 bis 6 Monaten — durch eingesparte Arbeitszeit, weniger Fehler und schnellere Durchlaufzeiten.",
  },
  {
    question: "Wie unterstützt n8n die Hamburger Hafenlogistik?",
    answer:
      "n8n automatisiert die komplexen Prozessketten zwischen Reedereien, Speditionen, Zollbehörden und Hinterlandverkehren. Typische Anwendungsfälle sind automatisierte Zolldokumentation, Echtzeit-Container-Tracking über Carrier-APIs, Disposition von Schiene, Straße und Binnenschifffahrt sowie die Integration mit der smartPORT-Infrastruktur der Hamburg Port Authority.",
  },
  {
    question: "Kann n8n mit Zoll- und Hafenbehörden-APIs arbeiten?",
    answer:
      "Ja. n8n unterstützt beliebige REST- und SOAP-APIs sowie Datei-basierte Schnittstellen wie EDIFACT und XML. Damit lassen sich Zollsysteme (ATLAS), Hafenbehörden-Portale und Carrier-Plattformen direkt in Ihre Workflows einbinden — für automatisierte Voranmeldungen, Statusabfragen und Dokumentengenerierung.",
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
      <BackgroundHero imageSrc="/images/cities/hamburg.jpg" overlayOpacity={0.8} opacityBackground="white">
        <BackgroundHero.TopLabel>
          {overrides?.preHeadline ?? "Standort Hamburg"}
        </BackgroundHero.TopLabel>
        <BackgroundHero.Headline>
          {overrides?.headline ??
            "n8n-Automatisierung für Hamburgs Wirtschaft"}
        </BackgroundHero.Headline>
        <BackgroundHero.Description>
          Von Hafen-Logistik bis E-Commerce —
          Workflow-Automatisierung und KI-Lösungen für Unternehmen in
          der Hansestadt. Bluebatch unterstützt Hamburger Firmen bei der
          Digitalisierung und Prozessoptimierung mit n8n.
        </BackgroundHero.Description>
        <BackgroundHero.CallToAction>
          <ContactButton icon="chat">
            Kostenlose Erstberatung
          </ContactButton>
        </BackgroundHero.CallToAction>
      </BackgroundHero>

      {/* 2. StatsList — Hamburg in Zahlen */}
      <ContentWrapper colorScheme="gradient-primary-dark">
        <StatsList stats={stats} cols={4} />
      </ContentWrapper>

      {/* 3. IntroBox */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.Headline>
            Automatisierung für die Handelsmetropole
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Seit der Hansezeit ist Hamburg Deutschlands Tor zur Welt — heute als
            Europas drittgrößter Hafen und mit der Speicherstadt als
            UNESCO-Welterbe-Symbol hanseatischer Handelstradition. Hamburg wächst
            wirtschaftlich deutlich über dem Bundestrend: +1,7 % reales
            BIP-Wachstum gegenüber -0,2 % bundesweit. Mit der höchsten
            Firmendichte Deutschlands (70 Unternehmen pro 1.000 Einwohner) und
            einem historischen Beschäftigungsrekord von über 1,09 Millionen
            sozialversicherungspflichtig Beschäftigten stoßen viele Unternehmen
            an personelle Grenzen. Von der HafenCity bis zum Schanzenviertel —
            Workflow-Automatisierung ermöglicht es, mit bestehenden Teams mehr
            zu leisten und repetitive Aufgaben zu eliminieren.
          </IntroBox.Paragraph>
        </IntroBox>
      </ContentWrapper>

      {/* 4. TabGroup — Branchen-Automatisierung */}
      <ContentWrapper>
        <Typo.H2 className="text-center">
          Branchen-Automatisierung in Hamburg
        </Typo.H2>
        <Typo.Paragraph className="text-center max-w-3xl mx-auto">
          Hamburgs Wirtschaft ist vielseitig — und jede Branche hat eigene
          Automatisierungspotenziale. Wir kennen die Anforderungen und liefern
          passgenaue n8n-Workflows.
        </Typo.Paragraph>

        <TabGroup defaultValue="hafen">
          <TabNavigation>
            <TabItem value="hafen">Hafen &amp; Logistik</TabItem>
            <TabItem value="luftfahrt">Luftfahrt</TabItem>
            <TabItem value="medien">Medien &amp; Publishing</TabItem>
            <TabItem value="ecommerce">E-Commerce</TabItem>
          </TabNavigation>

          <TabContent value="hafen">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>
                  Hafen &amp; Logistik — 8,3 Mio. TEU pro Jahr
                </Typo.H3>
                <Typo.Paragraph>
                  Der Hamburger Hafen ist der größte Seehafen Deutschlands und
                  der drittgrößte Europas. Mit der smartPORT-Initiative der
                  Hamburg Port Authority setzt Hamburg Maßstäbe bei der
                  Digitalisierung von Hafenoperationen. n8n-Workflows
                  automatisieren die komplexen Prozessketten zwischen Reedereien,
                  Speditionen und Behörden.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>
                    Automatisierte Zolldokumentation und Abfertigungsprozesse
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Echtzeit-Container-Tracking mit API-Anbindung an
                    Carrier-Systeme
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Sendungsverfolgung über Schiene, Straße und
                    Binnenschifffahrt
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Lagerverwaltung und WMS-Integration
                  </Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/digital-marketplace.jpg"
                  alt="Digitale Logistik und Containerumschlag im Hamburger Hafen"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>

          <TabContent value="luftfahrt">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>
                  Luftfahrt — Europas zweitwichtigster Standort
                </Typo.H3>
                <Typo.Paragraph>
                  Hamburg ist nach Toulouse der zweitwichtigste Standort der
                  zivilen Luftfahrtindustrie weltweit. Airbus beschäftigt in
                  Hamburg-Finkenwerder rund 15.800 Mitarbeiter, im gesamten
                  Luftfahrtcluster der Metropolregion arbeiten über 40.000
                  Menschen. Die Fertigung und Wartung erfordert höchste
                  Präzision — n8n unterstützt dabei.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>
                    Qualitätssicherungs-Workflows mit automatischer
                    Dokumentation
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Lieferkettenkoordination zwischen Zulieferern und
                    Produktionslinien
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Wartungsdokumentation und Compliance-Reporting
                  </Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/technology-integration.jpg"
                  alt="Technologieintegration und Qualitätssicherung in der Hamburger Luftfahrtindustrie"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>

          <TabContent value="medien">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>
                  Medien &amp; Publishing — Deutschlands Medienhauptstadt
                </Typo.H3>
                <Typo.Paragraph>
                  Hamburg ist der wichtigste Verlagsstandort Deutschlands. Der
                  Spiegel, Die Zeit, RTL Deutschland und Gruner+Jahr haben hier
                  ihren Sitz. Die Branche steht unter enormem
                  Digitalisierungsdruck — automatisierte Workflows helfen,
                  mit der Geschwindigkeit digitaler Medien Schritt zu halten.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>
                    Content-Management-Workflows für Multi-Channel-Publishing
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Automatisierte Cross-Channel-Distribution
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Anzeigenvermarktung und Reporting-Automatisierung
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Redaktionsprozesse und Freigabe-Workflows
                  </Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/document-automation.jpg"
                  alt="Automatisierte Medienproduktion und digitales Publishing am Verlagsstandort Hamburg"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>

          <TabContent value="ecommerce">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>
                  E-Commerce — Otto Group, About You, Tchibo
                </Typo.H3>
                <Typo.Paragraph>
                  Hamburg ist einer der wichtigsten E-Commerce-Standorte
                  Deutschlands. Die Otto Group als einer der weltweit größten
                  Onlinehändler, About You und Tchibo haben hier ihren
                  Hauptsitz. n8n automatisiert die komplexen Prozesse zwischen
                  Bestellung, Fulfillment und Kundenservice.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>
                    Bestellabwicklung und Order-Management-Automatisierung
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Retouren-Management mit automatischer Statusverfolgung
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Kundenservice-Workflows mit KI-gestützter Triage
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Marktplatz-Anbindung (Amazon, Otto, Zalando)
                  </Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/process-automation.jpg"
                  alt="E-Commerce-Prozessautomatisierung und Fulfillment-Workflows in Hamburg"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>
        </TabGroup>
      </ContentWrapper>

      {/* 5. BoundlessImageCard — Hafen-Automatisierung */}
      <ContentWrapper>
        <BoundlessImageCard imagePosition="right">
          <BoundlessImageCard.Image
            src="/images/data-flow.jpg"
            alt="Digitaler Datenfluss und smartPORT-Automatisierung im Hamburger Hafen"
          />
          <BoundlessImageCard.Content>
            <Typo.H2>Hafen-Automatisierung mit smartPORT-DNA</Typo.H2>
            <Typo.Paragraph>
              Der Hamburger Hafen setzt mit der smartPORT-Initiative der Hamburg
              Port Authority (HPA) Maßstäbe bei der Digitalisierung von
              Hafenoperationen. n8n-Workflows ergänzen diese Infrastruktur und
              automatisieren die Koordination zwischen Reedereien, Speditionen
              und Behörden.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Das Ergebnis: kürzere Durchlaufzeiten bei der
              Schiffsabfertigung, weniger manuelle Fehler in der
              Zolldokumentation und eine nahtlose Anbindung an
              Hinterlandverkehre über Schiene, Straße und Binnenschifffahrt.
            </Typo.Paragraph>
          </BoundlessImageCard.Content>
        </BoundlessImageCard>
      </ContentWrapper>

      {/* 6. SavingsCard */}
      <ContentWrapper bodyWidth="small">
        <SavingsCard>
          <SavingsBadge>ROI in 3-6 Monaten</SavingsBadge>
          <SavingsItems>
            <SavingsItem label="Weniger manuelle Zolldokumentation">
              80%
            </SavingsItem>
            <SavingsItem label="Schnellere Container-Disposition">
              60%
            </SavingsItem>
            <SavingsItem label="Weniger Fehler bei multimodaler Transportplanung">
              40%
            </SavingsItem>
          </SavingsItems>
        </SavingsCard>
      </ContentWrapper>

      {/* 7. Unsere Leistungen in Hamburg */}
      <ContentWrapper colorScheme="gray-light">
        <SectionHeader
          smallHeadline="Leistungen"
          largeHeadline="Unsere Leistungen in Hamburg"
          description="Von der ersten Analyse bis zum laufenden Betrieb — wir begleiten Hamburger Unternehmen auf dem gesamten Weg zur Automatisierung."
          showButton={false}
        />
        <SimpleGrid cols={3}>
          <SimpleCard align="left">
            <Typo.H3>n8n Workflow-Entwicklung</Typo.H3>
            <Typo.Paragraph>
              Maßgeschneiderte Automatisierungen für Ihre Branche — ob
              Logistik, E-Commerce, Medien oder Luftfahrt. Von
              Hafenlogistik-Koordination über Echtzeit-Containertracking bis
              zur automatisierten Zollabwicklung entwickeln wir Workflows, die
              exakt zu Ihren Prozessen passen.
            </Typo.Paragraph>
            <Link href="/services/custom-nodes" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-800 transition-colors">
              Mehr erfahren <span aria-hidden="true">&rarr;</span>
            </Link>
          </SimpleCard>
          <SimpleCard align="left">
            <Typo.H3>KI-Integration</Typo.H3>
            <Typo.Paragraph>
              AI Agents für intelligente Entscheidungen in Ihren Workflows.
              Intelligente Dokumentenklassifikation für Frachtpapiere und
              Zollerklärungen, KI-gestützte Kundenservice-Triage im
              E-Commerce und automatisierte Inhaltsanalyse für Verlage.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <Typo.H3>API-Integrationen</Typo.H3>
            <Typo.Paragraph>
              Nahtlose Verbindung Ihrer bestehenden Systeme — ERP, CRM, WMS,
              TMS und branchenspezifische Software. Anbindung an
              Hafenbehörden-APIs, DB Cargo, Binnenschifffahrt-Systeme und
              Carrier-Plattformen. Auch Legacy-Systeme werden angebunden.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <Typo.H3>Self-Hosted Setup</Typo.H3>
            <Typo.Paragraph>
              DSGVO-konforme Installation auf Ihrer eigenen Infrastruktur.
              Volle Datenkontrolle für sensible Lieferketten- und
              Reederei-Daten — besonders wichtig für Hamburgs regulierte
              Logistik- und Luftfahrtbranchen.
            </Typo.Paragraph>
            <Link href="/services/n8n-hosting" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-800 transition-colors">
              Mehr erfahren <span aria-hidden="true">&rarr;</span>
            </Link>
          </SimpleCard>
          <SimpleCard align="left">
            <Typo.H3>Schulungen</Typo.H3>
            <Typo.Paragraph>
              Ihr Team wird zum Automatisierungsexperten. Praxisnahe
              Schulungen für n8n mit branchenspezifischen Beispielen aus
              Hafenlogistik, Medienproduktion und E-Commerce-Fulfillment,
              damit Sie Workflows eigenständig erstellen und anpassen können.
            </Typo.Paragraph>
            <Link href="/services/schulungen" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-800 transition-colors">
              Mehr erfahren <span aria-hidden="true">&rarr;</span>
            </Link>
          </SimpleCard>
          <SimpleCard align="left">
            <Typo.H3>Wartung &amp; Support</Typo.H3>
            <Typo.Paragraph>
              Laufende Betreuung und Weiterentwicklung Ihrer
              Automatisierungslösung. Monitoring, Updates und schnelle
              Reaktionszeiten — damit Ihre Hafen-, Fulfillment- und
              Redaktions-Workflows rund um die Uhr zuverlässig laufen.
            </Typo.Paragraph>
            <Link href="/services/workflow-wartung" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-800 transition-colors">
              Mehr erfahren <span aria-hidden="true">&rarr;</span>
            </Link>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 8. City Links */}
      <ContentWrapper colorScheme="gradient-night">
        <CityLinksFromMeta
          crossReference={metaCustom.crossReference}
          nearbySmall={metaCustom.nearbySmall}
        />
      </ContentWrapper>

      {/* 9. FAQ */}
      <ContentWrapper bodyWidth="small">
        <FaqContainer faqs={faqs}>
          <FaqContainer.Headline>Häufige Fragen zur Workflow-Automatisierung in Hamburg</FaqContainer.Headline>
        </FaqContainer>
      </ContentWrapper>

      {/* 10. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
