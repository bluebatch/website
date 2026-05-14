import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ContentWrapper from "@/components/layout/content-wrapper";
import BackgroundHero from "@/components/heroes/background-hero";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import Typo from "@/components/ui/typo";
import IntroBox from "@/components/ui/intro-box";
import StatsList from "@/components/ui/stats-list";
import BoundlessImageCard from "@/components/cards/boundless-image-card";
import ComparisonCard, {
  BeforeCard,
  AfterCard,
  ComparisonHeadline,
  ComparisonList,
  ComparisonListItem,
} from "@/components/cards/comparison-card";
import DataTable from "@/components/ui/data-table";
import ProsCons from "@/components/sections/pros-cons";
import { FaqContainer } from "@/components/ui/faqs";
import { CityLinksFromMeta } from "@/components/standorte/city-links";
import ContactButton from "@/components/buttons/contact-button";
import type { CityMeta } from "@/lib/meta-custom";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import { getRewriteOverrides } from "@/lib/get-rewrites";


export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/ki-agentur-frankfurt",
  rewrites: [
    {
      source: "/ki-agentur-frankfurt",
    },
  ],
};

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
  await enforceMainRewrite(rewriteSiteConfig, searchParams);
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
      canonical: "/ki-agentur-frankfurt",
    },
  };
}

const frankfurtFaqs = [
  {
    question: "Warum ist n8n besonders für Frankfurter Finanzinstitute geeignet?",
    answer:
      "n8n kann self-hosted auf Ihrer eigenen Infrastruktur betrieben werden — keine Daten verlassen Ihr Rechenzentrum. In einer Stadt mit dreifacher regulatorischer Aufsicht durch EZB, BaFin und die neue AMLA ist das entscheidend. Self-Hosting bedeutet volle Datensouveränität, DSGVO-Konformität und die Möglichkeit, Compliance-Workflows direkt an regulatorische Anforderungen wie MiCA, DORA oder Basel IV anzupassen.",
  },
  {
    question: "Welche Compliance-Prozesse lassen sich mit n8n automatisieren?",
    answer:
      "KYC-Prüfungen mit KI-gestützter Dokumentenanalyse, laufendes AML-Transaktionsmonitoring, automatische Verdachtsmeldungen, regulatorische Reportings an BaFin und EZB, AMLA-konforme Geldwäscheprüfungen und Sanktionslistenabgleiche in Echtzeit. Der globale RegTech-Markt wächst von 20,3 Mrd. auf 72,4 Mrd. USD bis 2032 — Automatisierung ist kein Nice-to-have mehr.",
  },
  {
    question: "Wie schnell amortisiert sich Compliance-Automatisierung?",
    answer:
      "Im Frankfurter Finanzsektor liegt der typische ROI bei 3 bis 6 Monaten. Die größten Einsparungen entstehen durch reduzierte manuelle Compliance-Stunden, minimierte Fehlerkosten bei regulatorischen Meldungen und beschleunigte KYC-Onboarding-Prozesse. Bei einem durchschnittlichen Compliance-Mitarbeitergehalt in Frankfurt spart allein die Automatisierung einer KYC-Prüfung mehrere Stunden pro Vorgang.",
  },
  {
    question: "Können bestehende Banksysteme an n8n angebunden werden?",
    answer:
      "Ja. n8n bietet über 1.200 native Integrationen und lässt sich per REST-API, Webhooks oder Datenbank-Konnektoren an jedes System anbinden — ob SAP, Avaloq, Temenos, Finastra oder proprietäre Core-Banking-Systeme. Deutsche Bank setzt bereits auf 19.000 Tech-Mitarbeiter und KI-Partnerschaften; die technische Infrastruktur für Automatisierung ist in Frankfurt vorhanden.",
  },
  {
    question: "Betreuen Sie auch Unternehmen außerhalb des Finanzsektors?",
    answer:
      "Selbstverständlich. Frankfurt ist weit mehr als Banken: Die Messe Frankfurt erwirtschaftet 780 Mio. Euro Umsatz mit 98.000 Ausstellern, Sanofi beschäftigt 6.200 Mitarbeiter in Frankfurt, und der Flughafen bewegt 2,1 Mio. Tonnen Cargo jährlich. Wir automatisieren Prozesse in Pharma, Logistik, Beratung und Handel in der gesamten Rhein-Main-Region mit 5,94 Mio. Einwohnern.",
  },
  {
    question: "Wie geht n8n mit regulatorischen Änderungen um?",
    answer:
      "n8n-Workflows lassen sich modular anpassen. Neue Regulierungen wie die AMLA-Verordnung (seit Juli 2025 in Frankfurt aktiv), MiCA für Krypto-Assets oder DORA für digitale Resilienz können in bestehende Automatisierungen integriert werden, ohne den laufenden Betrieb zu unterbrechen. Das ist ein entscheidender Vorteil gegenüber monolithischen Compliance-Systemen.",
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
          imageSrc="/images/cities/frankfurt-am-main.jpg"
          overlayOpacity={0.8}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Standort Frankfurt am Main"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                KI Agentur Frankfurt —{" "}
                Compliance-Automatisierung für Europas{" "}
                <BackgroundHero.Highlight>Finanzhauptstadt</BackgroundHero.Highlight>
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            330+ Finanzinstitute, dreifache regulatorische Aufsicht durch EZB,
            BaFin und AMLA, und Deutschlands höchstes BIP pro Kopf. Frankfurt
            braucht Compliance-Automatisierung, die mit dem Regulierungstempo
            Schritt hält, self-hosted, DSGVO-konform und auf Ihrer Infrastruktur.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">Beratung anfragen</ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={74.1}
              suffix=" Mrd. €"
              label="BIP Frankfurt"
              index={0}
            />
            <BackgroundHero.Stat
              value={330}
              suffix="+"
              label="Finanzinstitute"
              index={1}
            />
            <BackgroundHero.Stat
              value={2.1}
              suffix=" Mio. t"
              label="Cargo (Europas Nr. 1)"
              index={2}
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 2. StatsList — Horizontal stats bar */}
      <ContentWrapper colorScheme="primary">
        <StatsList
          cols={4}
          stats={[
            { value: 74200, label: "Banker in Frankfurt" },
            { value: 89400, label: "Beschäftigte Finanzbranche" },
            { value: 780, suffix: " Mio. €", label: "Messe-Umsatz" },
            { value: 700, suffix: "+", label: "Startups (TechQuartier)" },
          ]}
        />
      </ContentWrapper>

      {/* 3. IntroBox + Banking Deep Dive */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>
            Dreifache Regulierung, maximaler Automatisierungsdruck
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wo EZB, BaFin und AMLA auf 330+ Institute treffen
          </IntroBox.Headline>
          <IntroBox.Subline>
            Frankfurt ist der einzige Standort weltweit, an dem drei europäische
            Aufsichtsbehörden gleichzeitig regulieren. Die Konsequenz für jedes
            Institut am Main: exponentiell steigende Compliance-Last bei
            gleichzeitigem Fachkräftemangel.
          </IntroBox.Subline>
        </IntroBox>
        <div className="mt-8 space-y-6">
          <Typo.Paragraph>
            Die Europäische Zentralbank überwacht direkt 113 systemrelevante
            Bankengruppen in der Eurozone. Die BaFin beaufsichtigt zusätzlich
            alle in Deutschland zugelassenen Finanzinstitute. Und seit Juli 2025
            sitzt mit der AMLA die neue EU-Anti-Geldwäschebehörde ebenfalls in
            Frankfurt, mit direkter Aufsicht über die 40 riskantesten
            Finanzunternehmen Europas. Für die 330+ Institute am Main bedeutet
            das: drei Meldeketten, drei Prüfungsrhythmen, drei
            Dokumentationsstandards.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Die regulatorische Dichte macht manuelle Compliance untragbar.
            KYC-Prüfungen, AML-Transaktionsmonitoring, Sanktionslistenabgleiche,
            DORA-Meldungen für digitale Resilienz, MiCA-Anforderungen für
            Krypto-Assets: Jede einzelne Vorschrift erzeugt Prozesse, die in
            Summe ganze Abteilungen binden. Der globale RegTech-Markt wächst
            von 20,3 Mrd. auf 72,4 Mrd. USD bis 2032, weil die
            Automatisierung dieser Prozesse keine strategische Option mehr ist,
            sondern operative Notwendigkeit.
          </Typo.Paragraph>
          <Typo.Paragraph>
            n8n-Workflows automatisieren den gesamten Compliance-Zyklus:
            KYC-Onboarding mit KI-gestützter Dokumentenanalyse, laufendes
            AML-Monitoring in Echtzeit, automatische Sanktionslistenabgleiche
            gegen EU-, UN- und OFAC-Listen, und regulatorische Reportings
            direkt an BaFin, EZB und AMLA.{" "}
            <Link href="/n8n-hosting-deutschland" className="text-primary-600 hover:underline">Self-hosted auf Ihrer Infrastruktur</Link>,
            ohne dass ein einziges Dokument Ihr Rechenzentrum verlässt.
            Wie wir dabei vorgehen, erfahren Sie auf unserer Seite{" "}
            <Link href="/unser-prozess" className="text-primary-600 hover:underline">Unser Prozess</Link>.
          </Typo.Paragraph>
        </div>
        <div className="mt-10">
          <BoundlessImageCard imagePosition="right">
            <BoundlessImageCard.Image
              src="/images/cities/banking-compliance.jpg"
              alt="Compliance-Automatisierung für Frankfurter Finanzinstitute mit n8n"
            />
            <BoundlessImageCard.Content>
              <Typo.H2>19.000 Tech-Mitarbeiter bei der Deutschen Bank, und Sie?</Typo.H2>
              <Typo.Paragraph>
                Die Deutsche Bank hat eine strategische Partnerschaft mit
                IBM/watsonx für KI-gestützte Prozessautomatisierung geschlossen.
                Was für Großbanken mit eigenen Entwicklungsteams gilt, müssen
                mittelständische Finanzdienstleister, Steuerberater und
                Wirtschaftsprüfer in der Rhein-Main-Region mit schlanken Tools
                lösen. n8n ist genau dafür gebaut: Open-Source, self-hosted,
                modular erweiterbar und ohne Vendor Lock-in.
              </Typo.Paragraph>
            </BoundlessImageCard.Content>
          </BoundlessImageCard>
        </div>
      </ContentWrapper>

      {/* 4. DataTable — THE centerpiece */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Bankprozesse automatisieren</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Der Vergleich: Manuell vs. Automatisiert
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
                <DataTable.Cell bold>KYC-Onboarding</DataTable.Cell>
                <DataTable.Cell>5-10 Tage</DataTable.Cell>
                <DataTable.Cell>4 Std.</DataTable.Cell>
                <DataTable.Cell bold>~96 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Transaktionsüberwachung</DataTable.Cell>
                <DataTable.Cell>8 Std./Tag</DataTable.Cell>
                <DataTable.Cell>Echtzeit</DataTable.Cell>
                <DataTable.Cell bold>100 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>BaFin-Meldung</DataTable.Cell>
                <DataTable.Cell>3 Std./Bericht</DataTable.Cell>
                <DataTable.Cell>15 Min.</DataTable.Cell>
                <DataTable.Cell bold>~92 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Kontoabstimmung</DataTable.Cell>
                <DataTable.Cell>2 Std./Tag</DataTable.Cell>
                <DataTable.Cell>10 Min.</DataTable.Cell>
                <DataTable.Cell bold>~92 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Rechnungseingang</DataTable.Cell>
                <DataTable.Cell>15 Min./Rechnung</DataTable.Cell>
                <DataTable.Cell>30 Sek.</DataTable.Cell>
                <DataTable.Cell bold>~97 %</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Sanktionslisten-Check</DataTable.Cell>
                <DataTable.Cell>45 Min.</DataTable.Cell>
                <DataTable.Cell>3 Sek.</DataTable.Cell>
                <DataTable.Cell bold>~99 %</DataTable.Cell>
              </DataTable.Row>
            </DataTable.Body>
          </DataTable>
        </div>
      </ContentWrapper>

      {/* 5. ComparisonCard — Vorher/Nachher Compliance */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Der Unterschied</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Compliance-Prozesse: Vorher vs. Nachher
          </IntroBox.Headline>
        </IntroBox>
        <ComparisonCard>
          <BeforeCard>
            <ComparisonHeadline>Vorher — Manuelle Compliance</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                KYC-Onboarding dauert 5-10 Werktage pro Neukunde, bindet ganze Teams
              </ComparisonListItem>
              <ComparisonListItem>
                BaFin- und EZB-Meldungen werden in Excel zusammenkopiert und manuell validiert
              </ComparisonListItem>
              <ComparisonListItem>
                Sanktionslistenabgleiche laufen als Batch-Job über Nacht, nicht in Echtzeit
              </ComparisonListItem>
              <ComparisonListItem>
                Reaktive Compliance: Verstöße werden erst bei der nächsten Prüfung entdeckt
              </ComparisonListItem>
            </ComparisonList>
          </BeforeCard>
          <AfterCard>
            <ComparisonHeadline>Nachher — n8n-Automatisierung</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                KYC-Prüfung in unter 4 Stunden mit KI-gestützter Dokumentenanalyse und automatischer Risikoklassifizierung
              </ComparisonListItem>
              <ComparisonListItem>
                Echtzeit-Reporting direkt aus dem Quellsystem an BaFin, EZB und AMLA, fehlerfrei und auditierbar
              </ComparisonListItem>
              <ComparisonListItem>
                Kontinuierlicher Sanktionslistenabgleich gegen EU-, UN- und OFAC-Listen bei jeder Transaktion
              </ComparisonListItem>
              <ComparisonListItem>
                Proaktive Alerts: Auffälligkeiten werden in Echtzeit erkannt und eskaliert, bevor sie zum Problem werden
              </ComparisonListItem>
            </ComparisonList>
          </AfterCard>
        </ComparisonCard>
      </ContentWrapper>

      {/* 6. ProsCons — Self-Hosted vs. Cloud */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Infrastruktur-Entscheidung</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Self-Hosted vs. Cloud für Frankfurter Finanzinstitute
          </IntroBox.Headline>
        </IntroBox>
        <div className="mt-8">
          <ProsCons>
            <ProsCons.Pros>
              <ProsCons.Item
                title="Volle Datensouveränität"
                description="Alle Daten bleiben in Ihrem eigenen Rechenzentrum. Keine Abhängigkeit von externen Cloud-Anbietern, keine Datenübertragung in Drittländer."
              />
              <ProsCons.Item
                title="BaFin-konform ab Tag 1"
                description="Self-Hosted n8n erfüllt die Anforderungen der BaFin an IT-Auslagerung und Datenverarbeitung, ohne aufwendige Cloud-Compliance-Prüfungen."
              />
              <ProsCons.Item
                title="Keine US-Cloud-Abhängigkeit"
                description="Kein CLOUD Act, kein FISA 702. Ihre Kundendaten, Transaktionsdaten und Compliance-Dokumente unterliegen ausschließlich deutschem und europäischem Recht."
              />
              <ProsCons.Item
                title="Eigenes Rechenzentrum, volle Kontrolle"
                description="Betrieb auf Ihrer bestehenden Infrastruktur oder bei einem deutschen Hosting-Anbieter. Volle Kontrolle über Updates, Backups und Zugriffsrechte."
              />
              <ProsCons.Item
                title="AMLA-ready"
                description="Die neue Anti-Geldwäschebehörde in Frankfurt stellt hohe Anforderungen an Datenzugriff und Audit-Trails. Self-Hosted n8n liefert lückenlose Nachvollziehbarkeit."
              />
            </ProsCons.Pros>
            <ProsCons.Cons>
              <ProsCons.Item
                title="Daten in US-Cloud"
                description="SaaS-Automatisierungstools wie Zapier oder Make.com speichern Workflow-Daten auf US-Servern. Für regulierte Finanzinstitute ein Compliance-Risiko."
              />
              <ProsCons.Item
                title="Vendor Lock-in"
                description="Proprietäre Plattformen binden Sie an einen Anbieter. Preiserhöhungen, Feature-Änderungen oder Abkündigungen treffen Sie ohne Ausweichmöglichkeit."
              />
              <ProsCons.Item
                title="Keine Audit-Kontrolle"
                description="Bei SaaS-Lösungen haben Sie keinen Zugriff auf Server-Logs, keine Kontrolle über Datenretention und können Auditoren keinen direkten Systemzugang gewähren."
              />
              <ProsCons.Item
                title="Teurer bei Skalierung"
                description="SaaS-Pricing basiert auf Ausführungen pro Monat. Bei tausenden täglichen Compliance-Checks, Buchungen und Abgleichen explodieren die Kosten schnell."
              />
            </ProsCons.Cons>
          </ProsCons>
        </div>
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
        <FaqContainer faqs={frankfurtFaqs}>
          <FaqContainer.Headline>FAQ zur Compliance-Automatisierung in Frankfurt</FaqContainer.Headline>
        </FaqContainer>
      </ContentWrapper>

      {/* 9. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
