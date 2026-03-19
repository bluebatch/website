import type { Metadata } from "next";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import Image from "next/image";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import type { PageConfig } from "@/lib/get-subpages";
import BackgroundHero from "@/components/heroes/background-hero";
import ContactButton from "@/components/buttons/contact-button";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import CardShowcase from "@/components/cards/card-showcase";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { FaqContainer } from "@/components/ui/faqs";
import IntroBox from "@/components/ui/intro-box";
import Customer from "@/components/sections/customer/customer";
import KpiCard from "@/components/cards/kpi-card";

export const pageConfig: PageConfig = {
  title: "3-Wege-Rechnungsprüfung",
  description:
    "Automatischer Abgleich von Bestellung, Wareneingang und Rechnung zur Freigabe.",
};

export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/automatische-rechnungspruefung",
  rewrites: [
    {
      source: "/automatische-rechnungspruefung",
      metaTitle:
        "Automatische Rechnungsprüfung – 3-Wege-Matching | Bluebatch",
      metaDescription:
        "Automatische Rechnungsprüfung mit 3-Wege-Matching für den Großhandel. OCR Rechnungserfassung, Workflow Rechnungseingang und intelligente Abgleichlogik.",
      keywords: [
        "automatische Rechnungsprüfung",
        "3-Wege-Rechnungsprüfung",
        "OCR Rechnungserfassung",
        "Bluebatch",
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: "Automatische Rechnungsprüfung: 3-Wege-Matching – Großhandel | Bluebatch",
  description:
    "Automatische Rechnungsprüfung mit 3-Wege-Matching: Wie Bluebatch Großhändlern hilft, Rechnungen automatisch mit Bestellungen und Wareneingängen abzugleichen.",
  openGraph: {
    title: "Automatische Rechnungsprüfung: 3-Wege-Matching – Großhandel | Bluebatch",
    description:
      "Automatische Rechnungsprüfung: Abgleich von Bestellung, Wareneingang und Rechnung. Nie wieder manuelle Prüfung.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch 3-Wege-Rechnungsprüfung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatische Rechnungsprüfung: 3-Wege-Matching – Großhandel | Bluebatch",
    description:
      "Automatische Rechnungsprüfung mit 3-Wege-Matching. Nie wieder manuelle Prüfung.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/automatische-rechnungspruefung",
  },
};

const stats = [
  { value: 95, suffix: "%", label: "Schnellere Verarbeitung" },
  { value: 90, suffix: "%", label: "Kostenreduktion" },
  { value: 98, suffix: "%+", label: "Matching-Genauigkeit" },
];

const painPoints = [
  {
    value: 12,
    label: "Tage durchschnittliche Bearbeitungszeit",
    valueSuffix: " Tage",
  },
  { value: 20, label: "Fehlerrate bei manueller Eingabe", valueSuffix: "%" },
  { value: 15, label: "Kosten pro Rechnung (manuell)", valueSuffix: "€" },
];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  await enforceMainRewrite(rewriteSiteConfig, searchParams);

  return (
    <>
      <ContentWrapper isFirstSection noPadding>
        <BackgroundHero
          imageSrc="/images/invoice-verification.jpg"
          overlayOpacity={0.85}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            3-Wege-Rechnungsprüfung
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            Automatische Rechnungsprüfung:{" "}
            <BackgroundHero.Highlight>3-Wege-Matching</BackgroundHero.Highlight>
            <br />für den Großhandel
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Unsere automatische Rechnungsprüfung erkennt Abweichungen zwischen
            Bestellung, Wareneingang und Rechnung, routet Ausnahmen intelligent
            und beschleunigt die Freigabe um bis zu 95%. Keine manuellen
            Vergleiche, keine verpassten Skonti.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">ROI-Analyse anfragen</ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            {stats.map((stat, index) => (
              <BackgroundHero.Stat
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                index={index}
              />
            ))}
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* Client Logos */}
      <ContentWrapper noPadding bodyWidth="full">
        <Customer />
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Das Problem</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Warum manuelle Rechnungsprüfung nicht skaliert – ohne Workflow
            Rechnungseingang
          </IntroBox.Headline>
          <IntroBox.Subline>
            Finanzteams verbringen Stunden damit, Zeilen zwischen drei
            Dokumenten zu vergleichen – fehleranfällig und zeitraubend. Ohne
            automatische Rechnungsprüfung bleibt der Prozess ein Engpass.
          </IntroBox.Subline>
        </IntroBox>

        <SimpleGrid cols={3} className="mt-10">
          {painPoints.map((stat) => (
            <KpiCard
              key={stat.label}
              value={stat.value}
              suffix={stat.valueSuffix}
              subtitle={stat.label}
              variant="default"
            />
            // <SimpleCard
            //   key={stat.label}
            //   className="bg-red-50! border border-red-100"
            // >
            //   <Typo.H3 className="text-red-600">{stat.value}</Typo.H3>
            //   <Typo.Paragraph className="text-sm md:text-base text-gray-600 mt-2">
            //     {stat.label}
            //   </Typo.Paragraph>
            // </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <SimpleGrid cols={2} className="items-center gap-12">
          <div className="relative aspect-video">
            <Image
              src="/images/invoice/invoice-3-way-matching.png"
              alt="3-Wege-Matching Visualisierung"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <IntroBox textCentered={false}>
              <IntroBox.PreHeadline>Die Lösung</IntroBox.PreHeadline>
              <IntroBox.Headline>
                Automatische Rechnungserfassung mit intelligentem 3-Wege-Matching
              </IntroBox.Headline>
              <IntroBox.Subline>
                Unser Rechnungsprüfung Workflow vergleicht automatisch jede
                Rechnungszeile mit Bestellung und Wareneingang. Die automatische
                Rechnungsprüfung filtert über Toleranzregeln relevante
                Abweichungen, Exception Routing bringt Ausnahmen zu den
                richtigen Freigebern.
              </IntroBox.Subline>
              <IntroBox.Subline>
                Das Ergebnis: 75-85% aller Rechnungen werden vollautomatisch
                verarbeitet. Ihr Team konzentriert sich nur noch auf echte
                Problemfälle.
              </IntroBox.Subline>
            </IntroBox>
          </div>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="dark">
        <IntroBox dark>
          <IntroBox.PreHeadline>Workflow-Architektur</IntroBox.PreHeadline>
          <IntroBox.Headline>
            OCR Rechnungserfassung und Workflow Eingangsrechnungen
          </IntroBox.Headline>
        </IntroBox>

        <CardShowcase>
          <CardShowcase.Item size="large">
            <CardShowcase.Image
              src="/images/automation-efficiency.jpg"
              alt="OCR Datenextraktion"
            />
            <CardShowcase.Content>
              <CardShowcase.Title>
                1. KI-gestützte Datenextraktion
              </CardShowcase.Title>
              <CardShowcase.Description>
                Rechnungen treffen per E-Mail oder Scan ein. Unsere OCR
                Rechnungserfassung mit GPT-4 extrahiert alle relevanten Daten –
                unabhängig vom Dokumentformat. Die automatische Rechnungsprüfung
                beginnt bereits bei der Erfassung.
              </CardShowcase.Description>
            </CardShowcase.Content>
          </CardShowcase.Item>

          <CardShowcase.Item size="small">
            <CardShowcase.Image
              src="/images/invoice/invoice-end-to-end-process.jpg"
              alt="ERP Integration"
            />
            <CardShowcase.Content>
              <CardShowcase.Title>2. ERP-Abgleich</CardShowcase.Title>
              <CardShowcase.Description>
                Automatischer Lookup von Bestellung und Wareneingang im ERP.
                Zeilenweiser Vergleich von Artikeln, Mengen und Preisen.
              </CardShowcase.Description>
            </CardShowcase.Content>
          </CardShowcase.Item>

          <CardShowcase.Item size="small">
            <CardShowcase.Image
              src="/images/invoice/invoice-human-in-loop.jpg"
              alt="Exception Routing"
            />
            <CardShowcase.Content>
              <CardShowcase.Title>3. Intelligentes Routing</CardShowcase.Title>
              <CardShowcase.Description>
                Toleranzregeln klassifizieren Abweichungen. Kleinere Varianzen
                werden auto-approved, größere an die richtigen Freigeber
                geroutet.
              </CardShowcase.Description>
            </CardShowcase.Content>
          </CardShowcase.Item>

          <CardShowcase.Item size="large">
            <CardShowcase.Image
              src="/images/invoice/invoice-error-handling.png"
              alt="Buchung und Zahlung"
            />
            <CardShowcase.Content>
              <CardShowcase.Title>
                4. Freigabe, Buchung, Zahlung
              </CardShowcase.Title>
              <CardShowcase.Description>
                Genehmigte Rechnungen fließen durch den Workflow
                Eingangsrechnungen automatisch ins ERP zur Buchung.
                Skontofristen werden eingehalten, Duplikate erkannt und
                blockiert – automatische Rechnungsprüfung von Anfang bis Ende.
              </CardShowcase.Description>
            </CardShowcase.Content>
          </CardShowcase.Item>
        </CardShowcase>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>ROI-Kalkulation</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Typische Ergebnisse bei 1.000 Rechnungen/Monat
          </IntroBox.Headline>
        </IntroBox>

        <SimpleGrid cols={3} className="mt-10">
          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/currency-circle.svg"
              alt="Ersparnis"
              color="primary-gradient"
            />
            <Typo.H3>265.000 € jährliche Ersparnis</Typo.H3>
            <Typo.Paragraph>
              Arbeitskosten, Fehlervermeidung, Skontonutzung und vermiedene
              Mahngebühren summieren sich schnell.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/clock.svg"
              alt="Amortisation"
              color="primary-gradient"
            />
            <Typo.H3>2-4 Monate Amortisation</Typo.H3>
            <Typo.Paragraph>
              Die Investition amortisiert sich schnell. Danach sind es reine
              Einsparungen für Ihr Unternehmen.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/badge-check.svg"
              alt="Duplikaterkennung"
              color="primary-gradient"
            />
            <Typo.H3>98%+ Duplikaterkennung</Typo.H3>
            <Typo.Paragraph>
              Automatische Erkennung doppelt eingereichte Rechnungen.
              10.000-50.000 € Ersparnis pro Jahr.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>

      <ContentWrapper>
        <FaqContainer
          faqs={[
            {
              question: "Wie genau ist das automatische Matching?",
              answer:
                "Das System erreicht 98%+ Genauigkeit bei Standard-Rechnungen. Es ist besonders stark bei exakten Vergleichen von SKUs, Mengen und Preisen. Für komplexe Vertragsinterpretationen bleibt menschliche Überprüfung wertvoll – daher kombinieren wir 75-85% automatische Verarbeitung mit Human-in-the-Loop für Ausnahmen.",
            },
            {
              question: "Was passiert bei nicht-matchbaren Rechnungen?",
              answer:
                "Der Workflow klassifiziert Abweichungen (Mengenabweichung, Preisfehler, fehlende PO), sammelt Kontext und routet an den richtigen Mitarbeiter. Dieser erhält eine Benachrichtigung mit allen Details und kann direkt genehmigen, ablehnen oder Korrektur anfordern.",
            },
            {
              question: "Wie lange dauert die Implementierung?",
              answer:
                "Typischerweise 4-8 Wochen: Discovery & Design (Woche 1-2), Entwicklung (Woche 3-4), Testing & Training (Woche 5-6), Go-Live & Optimierung (Woche 7-8). 80% Automatisierungsrate bis Ende Monat 2, steigend auf 85-90% bis Monat 6.",
            },
            {
              question: "Welche ERP-Systeme werden unterstützt?",
              answer:
                "n8n unterstützt alle gängigen ERPs über REST APIs, SOAP, Datenbankverbindungen oder Batch-Dateien: SAP, Oracle NetSuite, Microsoft Dynamics, ERPNext, Odoo und viele mehr. Die Integration ist bidirektional.",
            },
          ]}
        />
      </ContentWrapper>
    </>
  );
}
