import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import type { PageConfig } from "@/lib/get-subpages";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { getRewriteOverrides } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import BackgroundHero from "@/components/heroes/background-hero";
import ContactButton from "@/components/buttons/contact-button";
import ComparisonCard, {
  BeforeCard,
  AfterCard,
  ComparisonHeadline,
  ComparisonList,
  ComparisonListItem,
  ComparisonFooter,
} from "@/components/cards/comparison-card";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/ui/timeline-as-steps";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { FaqContainer } from "@/components/ui/faqs";
import IntroBox from "@/components/ui/intro-box";
import Customer from "@/components/sections/customer/customer";
import ProsCons from "@/components/sections/pros-cons";
import CustomerReference, {
  ReferenceStars,
  ReferenceAttribution,
  ReferenceQuote,
} from "@/components/sections/customer-reference";
import SavingsCard, {
  SavingsBadge,
  SavingsBadgeHighlight,
  SavingsItems,
  SavingsItem,
} from "@/components/cards/savings-card";
import RoiCalculation, {
  RoiAssumption,
  RoiRow,
  RoiTotal,
} from "@/components/sections/roi-calculation";

export const pageConfig: PageConfig = {
  title: "Auftragserfassung",
  description:
    "Bestellungen aus E-Mails, Faxen und Portalen automatisch erfassen und verarbeiten.",
};

export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/bestellung-erfassen",
  rewrites: [
    {
      source: "/ai-lastenheft",
      preHeadline: "AI Lastenheft",
      headline: "AI-gestützte Lastenheft-Erstellung für den Großhandel",
      metaTitle: "AI Lastenheft - Anforderungen automatisch erfassen | Bluebatch",
      metaDescription:
        "AI-gestützte Lastenheft-Erstellung für den Großhandel. Bestellungen und Anforderungen aus E-Mails, PDFs und Portalen automatisch erfassen.",
      keywords: [
        "AI Lastenheft",
        "KI Lastenheft erstellen",
        "Lastenheft automatisch",
        "AI Anforderungserfassung",
        "Lastenheft Großhandel",
        "Bluebatch",
      ],
    },
    {
      source: "/ai-lastenheft-erstellen",
      preHeadline: "AI Lastenheft erstellen",
      headline: "Lastenheft automatisch erstellen mit KI",
      metaTitle:
        "AI Lastenheft erstellen - Großhandel | Bluebatch",
      metaDescription:
        "Lastenheft automatisch erstellen mit KI. Anforderungen aus allen Kanälen erfassen, strukturieren und validieren - in Minuten statt Stunden.",
      keywords: [
        "AI Lastenheft erstellen",
        "Lastenheft Generator",
        "automatisches Lastenheft",
        "KI Anforderungsdokument",
        "Lastenheft Software",
        "Bluebatch",
      ],
    },
    {
      source: "/automatische-auftragserfassung",
      preHeadline: "Automatische Auftragserfassung",
      headline: "Automatische Auftragserfassung für den Großhandel",
      metaTitle: "Automatische Auftragserfassung - Großhandel | Bluebatch",
      metaDescription:
        "Automatische Auftragserfassung für Großhändler. Bestellungen aus E-Mails, PDFs und Portalen automatisch erfassen und verarbeiten.",
      keywords: [
        "automatische Auftragserfassung",
        "Aufträge automatisch erfassen",
        "Bestellerfassung automatisieren",
        "Order Capture Automation",
        "Großhandel Auftragseingang",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-auftragserfassung",
      preHeadline: "KI-Auftragserfassung",
      headline: "KI-gestützte Auftragserfassung für den Großhandel",
      metaTitle: "KI-Auftragserfassung - Großhandel | Bluebatch",
      metaDescription:
        "KI-gestützte Auftragserfassung für Großhändler. Bestelldaten automatisch extrahieren, validieren und ins ERP übertragen.",
      keywords: [
        "KI Auftragserfassung",
        "künstliche Intelligenz Bestellungen",
        "KI Datenextraktion",
        "intelligente Auftragsverarbeitung",
        "KI ERP Integration",
        "Bluebatch",
      ],
    },
    {
      source: "/auftraege-automatisch-erfassen",
      preHeadline: "Aufträge automatisch erfassen",
      headline: "Aufträge automatisch erfassen im Großhandel",
      metaTitle: "Aufträge automatisch erfassen - Großhandel | Bluebatch",
      metaDescription:
        "Aufträge automatisch erfassen für Großhändler. Von 2-3 Tagen auf 1-2 Stunden Bearbeitungszeit - ohne manuelle Dateneingabe.",
      keywords: [
        "Aufträge automatisch erfassen",
        "Auftragseingabe automatisieren",
        "manuelle Dateneingabe eliminieren",
        "Bestellungen digitalisieren",
        "Großhandel Digitalisierung",
        "Bluebatch",
      ],
    },
    {
      source: "/bestellung-erfassen",
    },
  ],
};

const defaultMeta = {
  title:
    "Bestellung erfassen - Automatische Auftragserfassung im Großhandel | Bluebatch",
  description:
    "Bestellung erfassen leicht gemacht: Bluebatch automatisiert den Bestellprozess im Einkauf. Bestellungen aus E-Mails, PDFs und Portalen automatisch erfassen.",
  ogDescription:
    "Bestellung erfassen aus E-Mails, PDFs und Portalen - automatisch und fehlerfrei.",
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}): Promise<Metadata> {
  const params = await searchParams;
  const overrides = getRewriteOverrides(rewriteSiteConfig, params);

  const title = overrides?.metaTitle ?? defaultMeta.title;
  const description = overrides?.metaDescription ?? defaultMeta.description;

  const defaultKeywords = [
    "Bestellung erfassen",
    "Bestellprozess Einkauf",
    "Auftragserfassung",
    "automatische Auftragserfassung",
    "Bestellungen erfassen",
    "Großhandel Auftragserfassung",
    "E-Mail Bestellungen verarbeiten",
    "Bluebatch",
  ];

  return {
    title,
    description,
    keywords: overrides?.keywords ?? defaultKeywords,
    openGraph: {
      title,
      description: overrides?.metaDescription ?? defaultMeta.ogDescription,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [
        {
          url: "/images/bluebatch-social-cover.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch Auftragserfassung",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: overrides?.metaDescription ?? defaultMeta.ogDescription,
      images: ["/images/bluebatch-social-cover.jpg"],
    },
    alternates: {
      canonical: "/bestellung-erfassen",
    },
  };
}

const stats = [
  { value: 1, prefix: "<", suffix: "%", label: "Fehlerquote" },
  { value: 80, suffix: "%", label: "Zeitersparnis" },
  { value: 24, suffix: "/7", label: "Bestellverarbeitung" },
];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  await enforceMainRewrite(rewriteSiteConfig, searchParams);

  const params = await searchParams;
  const overrides = getRewriteOverrides(rewriteSiteConfig, params);

  return (
    <>
      <ContentWrapper isFirstSection noPadding>
        <BackgroundHero
          imageSrc="/images/auftragserfassung/hero.png"
          overlayOpacity={0.8}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Auftragserfassung"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                Bestellung erfassen:{" "}
                <BackgroundHero.Highlight>
                  Alle Kanäle
                </BackgroundHero.Highlight>
                <br />
                automatisch verarbeiten
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Bestellung erfassen aus E-Mail, PDF, Fax, EDI oder Portal - n8n
            extrahiert alle Daten, validiert gegen ERP und Lager und erstellt
            den Auftrag. So optimieren Sie den gesamten Bestellprozess im
            Einkauf - von 2-3 Tagen auf 1-2 Stunden Bearbeitungszeit.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">ROI-Analyse anfragen</ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            {stats.map((stat, index) => (
              <BackgroundHero.Stat
                key={stat.label}
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
                index={index}
              />
            ))}
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* 2. PROBLEM — Numbered stat rows */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Das Problem</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Warum dein Innendienst nicht mehr verkauft, sondern tippt
          </IntroBox.Headline>
          <IntroBox.Subline>
            Vier strukturelle Schwächen der manuellen Auftragserfassung — alle
            vier kosten dich Geld, Kunden und Mitarbeiter.
          </IntroBox.Subline>
        </IntroBox>

        <div className="mx-auto mt-12 max-w-4xl divide-y divide-gray-200">
          {[
            {
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
                />
              ),
              value: "3-4 h",
              label: "pro Tag",
              title: "Stumpfe Arbeit",
              desc: "Qualifizierte Vertriebler tippen Bestellungen ab statt zu verkaufen. Die Arbeit, für die du sie eingestellt hast, kommt zu kurz — Cross-Selling, Kundenkontakt, Reklamationsmanagement.",
            },
            {
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              ),
              value: "10 %+",
              label: "Fehlerquote",
              title: "Viele Fehler",
              desc: "Bei manueller Eingabe — falscher Artikel, falsche Menge, falsche Lieferadresse. Folge: Reklamation, Rücksendung, verlorenes Vertrauen. Im Schnitt 17.800 € Behebungskosten pro B2B-Fehler.",
            },
            {
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125z"
                />
              ),
              value: "200-500",
              label: "Bestellungen / Tag",
              title: "Hohes Volumen",
              desc: "In 4-7 verschiedenen Formaten (E-Mail, PDF, Excel, EDI, Fax, Portal, Telefon). Skaliert nur durch proportionale Headcount-Erhöhung — und genau die ist nicht zu bekommen.",
            },
            {
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z"
                />
              ),
              value: "6-12",
              label: "Monate Onboarding",
              title: "Keine Mitarbeiter",
              desc: "Fachkräftemangel im Großhandel ist akut. Onboarding einer neuen Innendienst-Kraft dauert ein halbes bis ganzes Jahr, dann kündigt sie. Branchen- und Artikelwissen lässt sich nicht skalieren.",
            },
          ].map((row) => (
            <div
              key={row.title}
              className="grid grid-cols-1 gap-6 py-8 md:grid-cols-[220px_1fr] md:gap-12"
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  >
                    {row.icon}
                  </svg>
                </div>
                <div className="mt-4 text-4xl font-bold text-primary-600 md:text-5xl">
                  {row.value}
                </div>
                <div className="mt-1 text-sm font-medium uppercase tracking-wide text-gray-500">
                  {row.label}
                </div>
              </div>
              <div>
                <Typo.H3 className="mt-0!">{row.title}</Typo.H3>
                <Typo.Paragraph>{row.desc}</Typo.Paragraph>
              </div>
            </div>
          ))}
        </div>
      </ContentWrapper>

      {/* 3. LÖSUNG — vertical alternating layout */}
      <ContentWrapper colorScheme="gray">
        <IntroBox>
          <IntroBox.PreHeadline>Die Lösung</IntroBox.PreHeadline>
          <IntroBox.Headline>
            5 Schritte. Von der Inbox direkt ins ERP.
          </IntroBox.Headline>
          <IntroBox.Subline>
            Ein n8n-Workflow mit KI-Agenten liest, versteht, validiert und bucht
            Bestellungen ein. Aus jedem Format, in jeder Sprache, rund um die
            Uhr.
          </IntroBox.Subline>
        </IntroBox>

        <div className="mt-12 space-y-12 md:space-y-16">
          {[
            {
              step: "01",
              title: "Input — alle Kanäle, ein Eingang",
              desc: "Egal wie deine Kunden bestellen: E-Mail mit PDF-Anhang, Excel-Liste, EDIFACT-Datei vom Trading-Partner, Webhook aus dem B2B-Shop, OCR-erfasstes Fax oder Telefon-Transkript aus dem Vertriebs-CRM. Der Workflow überwacht Postfächer, Watch-Folder und API-Endpunkte rund um die Uhr und übergibt jede neue Bestellung sofort an die nächste Stufe. Keine manuelle Vorverarbeitung, keine Datei-Konvertierung im Vorfeld.",
              image: "/images/auftragserfassung/step-01-input.png",
            },
            {
              step: "02",
              title: "Parsing — KI liest jedes Format",
              desc: "Der KI-Agent versteht strukturierte und unstrukturierte Dokumente gleichermaßen. Aus PDFs werden Tabellen, Fließtext, Header, Footer und Logos extrahiert. Bei eingescannten Faxen springt automatisch OCR ein, bei handschriftlichen Notizen ein Vision-Modell. Erkannt werden Bestellnummer, Datum, Lieferadresse, Artikel mit Menge und Preis, Kundenreferenz und Sonderkonditionen — auch wenn jeder Lieferant ein anderes Layout schickt.",
              image: "/images/auftragserfassung/step-02-parsing.png",
            },
            {
              step: "03",
              title: "Verstehen — Stammdaten-Match",
              desc: "Die rohen Daten werden gegen deinen Artikel- und Kundenkatalog im ERP gematched. Fuzzy-Matching erkennt auch Kundennamen mit Tippfehler, alte Artikelbezeichnungen oder Lieferanten-eigene SKUs. Konditionen, Rabatte, Lieferadressen und Zahlungsbedingungen werden gegen den Kundenstamm geprüft. Wo Mehrdeutigkeiten bleiben, generiert der Workflow Vorschläge mit Wahrscheinlichkeiten statt blind zu raten.",
              image: "/images/auftragserfassung/step-03-verstehen.png",
            },
            {
              step: "04",
              title: "Validierung — Confidence statt Blackbox",
              desc: "Jede Bestellung bekommt einen Confidence-Score zwischen 0 und 100 %. Bei >95 % läuft die Buchung vollautomatisch durch, darunter wandert sie in die Review-Queue. Ein Mitarbeiter prüft dort pro Auftrag 20-30 Sekunden, bestätigt mit einem Klick oder korrigiert die zwei, drei flaggierten Felder. Jede Entscheidung — automatisch oder manuell — wird mit Zeitstempel, User und Original-Dokument im Audit-Log abgelegt.",
              image: "/images/auftragserfassung/step-04-validierung.png",
            },
            {
              step: "05",
              title: "Sync ins ERP — fertig gebucht",
              desc: "Der finale Auftrag wird direkt in dein ERP gebucht — Microtech BüroPlus, SAP S/4HANA, Dynamics 365 Business Central, proALPHA, godesys, weclapp, xentral, JTL-Wawi oder über generische REST/ODBC-Schnittstelle. Optional wird eine Auftragsbestätigung an den Kunden generiert, das Lager über offene Positionen informiert und die Verkaufsstatistik aktualisiert — alles im selben Workflow, alles geloggt.",
              image: "/images/auftragserfassung/step-05-sync-erp.png",
            },
          ].map((item, idx, arr) => {
            const reversed = idx % 2 === 1;
            const isLast = idx === arr.length - 1;
            return (
              <div key={item.step}>
                <div
                  className={`grid grid-cols-1 items-center gap-8 md:gap-10 ${
                    reversed
                      ? "md:grid-cols-[2fr_1fr]"
                      : "md:grid-cols-[1fr_2fr]"
                  }`}
                >
                  <div
                    className={
                      reversed ? "md:order-1" : "md:order-2"
                    }
                  >
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-700">
                      Schritt {item.step}
                    </div>
                    <h3 className="mt-4 text-2xl font-bold text-gray-900 md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
                      {item.desc}
                    </p>
                  </div>
                  <div
                    className={`flex justify-center ${
                      reversed ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <div className="relative aspect-[4/3] w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                      <Image
                        src={item.image}
                        alt={`Schritt ${item.step}: ${item.title}`}
                        fill
                        className="object-contain p-4"
                        sizes="(min-width: 768px) 33vw, 100vw"
                      />
                    </div>
                  </div>
                </div>
                {!isLast && (
                  <hr className="mt-12 border-t border-gray-200 md:hidden" />
                )}
              </div>
            );
          })}
        </div>
      </ContentWrapper>

      {/* 4. CUSTOMER REFERENCES */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Kundenstimmen</IntroBox.PreHeadline>
          <IntroBox.Headline>So läuft&apos;s bei unseren Kunden</IntroBox.Headline>
        </IntroBox>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <CustomerReference>
            <ReferenceStars />
            <ReferenceAttribution
              name="Michael Brückner"
              role="Geschäftsführer · Technischer Großhandel, Industriearmaturen"
              icon={
                <Image
                  src="/images/auftragserfassung/customer-1.png"
                  alt="Michael Brückner"
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              }
            />
            <ReferenceQuote>
              Unser Innendienst hat 30+ Stunden pro Woche mit dem Abtippen von
              Bestellungen verbracht. Heute kümmern sich die gleichen Leute um
              Cross-Selling und Reklamationen — 90 % der Aufträge laufen
              automatisch durch. Live nach vier Wochen, ohne Drama für unser
              IT-Team.
            </ReferenceQuote>
          </CustomerReference>

          <CustomerReference>
            <ReferenceStars />
            <ReferenceAttribution
              name="Sabine Wagner"
              role="Leiterin Auftragsabwicklung · SHK-Großhandel"
              icon={
                <Image
                  src="/images/auftragserfassung/customer-2.png"
                  alt="Sabine Wagner"
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              }
            />
            <ReferenceQuote>
              Über 200 Lieferanten, jeder schickt ABs in seinem eigenen Format.
              Bluebatch hat den Workflow auf unsere Top-30 zugeschnitten — die
              machen 80 % vom Volumen. Live nach 3 Wochen, ohne dass unser
              IT-Team einen Finger krümmen musste.
            </ReferenceQuote>
          </CustomerReference>
        </div>
      </ContentWrapper>

      {/* Client Logos band */}
      <ContentWrapper noPadding bodyWidth="full">
        <Customer />
      </ContentWrapper>

      {/* 5. WARUM BLUEBATCH — ProsCons comparison */}
      <ContentWrapper colorScheme="gray">
        <IntroBox>
          <IntroBox.PreHeadline>Warum Bluebatch</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Bluebatch vs. typischer SaaS-Anbieter
          </IntroBox.Headline>
          <IntroBox.Subline>
            Worin wir uns konkret von den US-SaaS-Tools unterscheiden — und
            warum das im deutschen Großhandel den Unterschied macht.
          </IntroBox.Subline>
        </IntroBox>

        {/* Visual: PDF → transparent workflow → JSON (Bluebatch) vs. PDF → blackbox → JSON (SaaS) */}
        <div className="mt-10 mb-2 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold uppercase tracking-widest text-primary-700">
                Bluebatch
              </div>
              <span className="rounded-full bg-primary-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-700">
                transparent
              </span>
            </div>
            <div className="mt-3 text-lg font-bold text-gray-900">
              Du siehst jeden Schritt
            </div>
            <div className="mt-4 flex h-40 items-center justify-center gap-3 rounded-lg border-2 border-dashed border-primary-300 bg-white p-4">
              {/* PDF icon */}
              <div className="flex flex-col items-center gap-1">
                <div className="relative flex h-14 w-11 items-center justify-center rounded bg-red-100 text-[10px] font-bold text-red-700 shadow-sm">
                  <span className="absolute top-0 right-0 -mt-1 -mr-1 rounded bg-red-500 px-1 py-0.5 text-[8px] font-bold text-white">
                    PDF
                  </span>
                  <svg
                    className="h-7 w-7 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9z"
                    />
                  </svg>
                </div>
                <span className="text-[9px] font-semibold uppercase tracking-wider text-gray-500">
                  Input
                </span>
              </div>

              {/* Arrow */}
              <svg
                className="h-4 w-4 shrink-0 text-primary-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0-5 5m5-5H6"
                />
              </svg>

              {/* Workflow box — transparent, nodes visible */}
              <div className="flex flex-col items-center gap-1">
                <div className="relative flex h-14 w-40 items-center justify-around rounded-md border-2 border-primary-400 bg-primary-50/40 px-2">
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded bg-primary-600 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white">
                    Workflow
                  </span>
                  <svg
                    viewBox="0 0 100 30"
                    className="h-7 w-full"
                    aria-hidden="true"
                  >
                    <line x1="10" y1="15" x2="32" y2="15" stroke="#2563eb" strokeWidth="2" />
                    <line x1="42" y1="15" x2="64" y2="15" stroke="#2563eb" strokeWidth="2" />
                    <line x1="74" y1="15" x2="90" y2="15" stroke="#2563eb" strokeWidth="2" />
                    <circle cx="10" cy="15" r="5" fill="#2563eb" />
                    <circle cx="37" cy="15" r="5" fill="#2563eb" />
                    <circle cx="69" cy="15" r="5" fill="#2563eb" />
                    <circle cx="93" cy="15" r="5" fill="#2563eb" />
                  </svg>
                </div>
                <span className="text-[9px] font-semibold uppercase tracking-wider text-primary-700">
                  4 Schritte sichtbar
                </span>
              </div>

              {/* Arrow */}
              <svg
                className="h-4 w-4 shrink-0 text-primary-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0-5 5m5-5H6"
                />
              </svg>

              {/* JSON icon */}
              <div className="flex flex-col items-center gap-1">
                <div className="flex h-14 w-12 items-center justify-center rounded bg-emerald-50 font-mono text-[10px] font-bold text-emerald-700 shadow-sm">
                  {"{ }"}
                </div>
                <span className="text-[9px] font-semibold uppercase tracking-wider text-gray-500">
                  ERP
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Open-Source-n8n. Deine Workflows sind sichtbar, editierbar,
              exportierbar. Du behältst die Kontrolle.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 p-6 text-white shadow-sm">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Typischer SaaS
              </div>
              <span className="rounded-full bg-gray-800 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                blackbox
              </span>
            </div>
            <div className="mt-3 text-lg font-bold text-white">
              Was drinsteht, weißt du nicht
            </div>
            <div className="mt-4 flex h-40 items-center justify-center gap-3 rounded-lg bg-gray-950 p-4">
              {/* PDF icon */}
              <div className="flex flex-col items-center gap-1">
                <div className="relative flex h-14 w-11 items-center justify-center rounded bg-red-900/40 text-[10px] font-bold text-red-300 shadow-sm">
                  <span className="absolute top-0 right-0 -mt-1 -mr-1 rounded bg-red-500 px-1 py-0.5 text-[8px] font-bold text-white">
                    PDF
                  </span>
                  <svg
                    className="h-7 w-7 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9z"
                    />
                  </svg>
                </div>
                <span className="text-[9px] font-semibold uppercase tracking-wider text-gray-500">
                  Input
                </span>
              </div>

              {/* Arrow */}
              <svg
                className="h-4 w-4 shrink-0 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0-5 5m5-5H6"
                />
              </svg>

              {/* Black Box — opaque, no contents visible */}
              <div className="flex flex-col items-center gap-1">
                <div className="relative flex h-14 w-40 items-center justify-center rounded-md border border-gray-700 bg-black">
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded bg-gray-700 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-gray-300">
                    Black Box
                  </span>
                  <svg
                    className="h-7 w-7 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25z"
                    />
                  </svg>
                </div>
                <span className="text-[9px] font-semibold uppercase tracking-wider text-gray-500">
                  Keine Einsicht
                </span>
              </div>

              {/* Arrow */}
              <svg
                className="h-4 w-4 shrink-0 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0-5 5m5-5H6"
                />
              </svg>

              {/* JSON icon */}
              <div className="flex flex-col items-center gap-1">
                <div className="flex h-14 w-12 items-center justify-center rounded bg-emerald-900/40 font-mono text-[10px] font-bold text-emerald-400 shadow-sm">
                  {"{ }"}
                </div>
                <span className="text-[9px] font-semibold uppercase tracking-wider text-gray-500">
                  ERP
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-300">
              Closed Source. Der Anbieter sieht alles, du siehst nur In- und
              Output. Logik-Änderungen nur, wenn der Vendor sie freischaltet.
            </p>
          </div>
        </div>

        <ProsCons className="mt-10">
          <ProsCons.Pros>
            <ProsCons.Item
              title="Made in Germany"
              description="Hosting in Frankfurt oder bei dir On-Premise. Support auf Deutsch. DSGVO-AVV mit echtem deutschen Vertragspartner."
            />
            <ProsCons.Item
              title="Kein Blackbox"
              description="Open-Source-n8n. Deine Workflows liegen bei dir, du kannst sie morgen selbst weiterentwickeln oder den Anbieter wechseln."
            />
            <ProsCons.Item
              title="On-Premise oder Cloud — du wählst"
              description="Auf deinem Server (mit GPU für Privacy-LLM), in deiner Hetzner-Box, oder bei uns gehostet. Wechsel jederzeit."
            />
            <ProsCons.Item
              title="Datenresidenz Deutschland"
              description="Bestelldaten verlassen die EU nicht. Kein Sub-Sub-DPA über drei US-Töchter. Datenschützer kann ruhig schlafen."
            />
          </ProsCons.Pros>

          <ProsCons.Cons>
            <ProsCons.Item
              title="US-Anbieter, US-Hosting"
              description="Cloud-only auf AWS/GCP/Azure-USA. AVV läuft über irische Tochter, Daten landen real in den USA."
              side="cons"
            />
            <ProsCons.Item
              title="Blackbox-SaaS"
              description="Du siehst nicht, was der KI-Workflow tut. Eigene Anpassungen unmöglich, Logik ist Anbieter-Eigentum."
              side="cons"
            />
            <ProsCons.Item
              title="Nur Cloud, kein On-Prem"
              description="Bestelldaten laufen zwangsläufig durch fremde Server. Nur Pro-Plan oder höher bekommt Datenresidenz-Option."
              side="cons"
            />
            <ProsCons.Item
              title="Vendor-Lock-in"
              description="Beim Anbieter-Wechsel oder Pleite-Fall: deine Workflow-Logik, dein Mapping, deine Trainings-Daten sind weg."
              side="cons"
            />
          </ProsCons.Cons>
        </ProsCons>
      </ContentWrapper>

      {/* 6. DELIVERY — 4-week plan */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Delivery</IntroBox.PreHeadline>
          <IntroBox.Headline>Von Null auf Live in 4 Wochen</IntroBox.Headline>
          <IntroBox.Subline>
            Kein Big-Bang-Projekt, sondern Pilot mit echten Daten ab Woche 3.
            Wir starten mit deinen Top-Kunden — die machen meistens 80 % vom
            Volumen.
          </IntroBox.Subline>
        </IntroBox>

        <TimelineAsSteps>
          <TimelineAsStepsStep value={1}>
            <Typo.H3 className="mt-2!">Woche 1 — Audit &amp; Discovery</Typo.H3>
            <Typo.Paragraph>
              Wir analysieren deine letzten 100 Bestellungen, mappen alle
              Formate, prüfen die ERP-API. Du bekommst einen schriftlichen
              Befund: was geht automatisch, was bleibt manuell.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={2}>
            <Typo.H3 className="mt-2!">Woche 2 — Setup &amp; Integration</Typo.H3>
            <Typo.Paragraph>
              n8n-Workflow-Aufbau, ERP-Anbindung über API oder Datenbank,
              Stammdaten-Sync, Confidence-Score-Tuning auf deinen Artikelkatalog.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={3}>
            <Typo.H3 className="mt-2!">Woche 3 — Pilot</Typo.H3>
            <Typo.Paragraph>
              10-20 % deines Bestellvolumens läuft durch den Workflow. Dein
              Team prüft jede Buchung manuell nach, wir tunen Edge-Cases und
              schärfen Artikel-Matching.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={4}>
            <Typo.H3 className="mt-2!">Woche 4 — Rollout &amp; Schulung</Typo.H3>
            <Typo.Paragraph>
              Vollumstellung auf 100 % Volumen. Schulung deines Innendienst-Teams
              für den Review-Workflow. Übergabe der Dokumentation und der
              Workflow-Files.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={5} isLast>
            <Typo.H3 className="mt-2!">Danach — Wartung &amp; Erweiterung</Typo.H3>
            <Typo.Paragraph>
              Neue Lieferanten, neue Bestellformate, ERP-Updates, neue Kanäle —
              wir bleiben drauf. Mehr dazu unter{" "}
              <Link
                href="/workflow-wartung"
                className="text-primary-600 hover:underline"
              >
                Workflow-Wartung
              </Link>
              .
            </Typo.Paragraph>
          </TimelineAsStepsStep>
        </TimelineAsSteps>
      </ContentWrapper>

      {/* 7. ROI */}
      <ContentWrapper colorScheme="gray">
        <IntroBox>
          <IntroBox.PreHeadline>Was bringt das in Euro?</IntroBox.PreHeadline>
          <IntroBox.Headline>~ 50 % weniger Kosten im Auftragseingang</IntroBox.Headline>
          <IntroBox.Subline>
            Rechenbeispiel für einen mittelständischen Großhändler mit 20.000
            Bestellungen pro Jahr:
          </IntroBox.Subline>
        </IntroBox>
        <ComparisonCard className="mt-10">
          <BeforeCard>
            <ComparisonHeadline>Vorher: Manuell</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                4-5 Vollzeitkräfte für Auftragserfassung ≈ 225.000 €
              </ComparisonListItem>
              <ComparisonListItem>
                Reklamationen aus Eingabefehlern ≈ 25.000 €
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>Gesamt: ~250.000 €/Jahr</ComparisonFooter>
          </BeforeCard>

          <AfterCard>
            <ComparisonHeadline>Nachher: Mit Bluebatch</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                4-5 Teilzeitkräfte für Review &amp; Sonderfälle ≈ 112.500 €
              </ComparisonListItem>
              <ComparisonListItem>
                Bluebatch Setup einmalig 10.000 €
              </ComparisonListItem>
              <ComparisonListItem>
                Wartung &amp; Betrieb 1.000 € / Monat ≈ 12.000 €
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>Gesamt Jahr 1: ~135.000 €</ComparisonFooter>
          </AfterCard>
        </ComparisonCard>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
          <SavingsCard>
            <SavingsBadge>
              Amortisation in{" "}
              <SavingsBadgeHighlight>~ 1</SavingsBadgeHighlight> Monat
            </SavingsBadge>
            <SavingsItems>
              <SavingsItem label="Setup einmalig">10.000 €</SavingsItem>
              <SavingsItem label="Betrieb pro Monat">1.000 €</SavingsItem>
              <SavingsItem label="Ersparnis pro Monat" highlight>
                9.800 €
              </SavingsItem>
            </SavingsItems>
          </SavingsCard>

          <RoiCalculation>
            <RoiAssumption>
              20.000 Bestellungen pro Jahr, im Schnitt 14 Min Ersparnis pro
              Bestellung
            </RoiAssumption>
            <RoiRow label="Minuten gespart pro Bestellung">14 Min</RoiRow>
            <RoiRow label="Stundensatz Innendienst">28 € / h</RoiRow>
            <RoiRow label="Ersparnis pro Bestellung" highlight>
              6,50 €
            </RoiRow>
            <RoiRow label="Jahresersparnis (20.000 × 6,50 €)">130.000 €</RoiRow>
            <RoiRow label="Im Schnitt pro Monat (130.000 € / 12)">
              10.800 €
            </RoiRow>
            <RoiRow label="Betrieb pro Monat">− 1.000 €</RoiRow>
            <RoiTotal label="Netto pro Monat">9.800 €</RoiTotal>
          </RoiCalculation>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/roi-rechner/document?docs=1700&before=24&after=10&hourly=28&tier=medium&setup=10000&maint=1000"
            className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary-700"
          >
            Eigenes ROI mit dem Calculator berechnen
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </ContentWrapper>

      {/* 8. WEITERFÜHREND — Cross-sell */}
      <ContentWrapper>
        <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center md:p-10">
          <Typo.H3>Nach Go-Live: wir bleiben dran</Typo.H3>
          <Typo.Paragraph>
            Workflows altern. Lieferanten ändern Formate, ERPs werden geupdatet,
            neue Kanäle kommen dazu. Wir betreuen den Workflow im Betrieb,
            betreiben optional die GPU-Infrastruktur für Privacy-LLM, und
            erweitern die Logik, sobald sich dein Geschäft ändert.
          </Typo.Paragraph>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/workflow-wartung"
              className="inline-flex items-center gap-2 rounded-full border border-primary-600 px-5 py-2 text-sm font-semibold text-primary-700 transition hover:bg-primary-50"
            >
              Workflow-Wartung
            </Link>
            <Link
              href="/n8n-hosting-deutschland"
              className="inline-flex items-center gap-2 rounded-full border border-primary-600 px-5 py-2 text-sm font-semibold text-primary-700 transition hover:bg-primary-50"
            >
              On-Premise &amp; GPU-Hosting
            </Link>
          </div>
        </div>
      </ContentWrapper>

      {/* 9. FAQ */}
      <ContentWrapper>
        <FaqContainer
          faqs={[
            {
              question: "Was kostet das?",
              answer:
                "Setup ab 8.000 €. Der Endpreis hängt von Bestellvolumen, Anzahl der Eingangskanäle und ERP-Komplexität ab. Im Audit (Woche 1) bekommst du einen Festpreis mit Lieferzusage. Laufende Wartung optional zwischen 500-2.500 €/Monat — abhängig von SLA und Eskalations-Frequenz.",
            },
            {
              question:
                "Welche ERP-Systeme im Großhandel werden unterstützt?",
              answer:
                "Microtech BüroPlus, SAP Business One / S/4HANA, Microsoft Dynamics 365 Business Central (NAV / Navision), proALPHA, godesys ERP, weclapp, xentral, JTL-Wawi, abas ERP, Infor LN. Wenn dein ERP eine REST-API, ODBC-Schnittstelle oder einen FTP-Import hat, geht's. Buchhaltungstools (DATEV, Sage 50) sind kein ERP und werden nicht ersetzt — sie bleiben nachgelagert.",
            },
            {
              question:
                "Was passiert, wenn die KI eine Bestellung falsch interpretiert?",
              answer:
                "Jede Extraktion bekommt einen Confidence-Score von 0-100 %. Bei <95 % springt automatisch ein Mensch ein und bestätigt oder korrigiert in unter 30 Sekunden. Vollständiger Audit-Trail pro Bestellung: was die KI extrahiert hat, was geändert wurde, wer es freigegeben hat.",
            },
            {
              question:
                "Was passiert mit Bestellungen, die gar nicht durchgehen?",
              answer:
                "Human-in-the-Loop-Design: Exceptions werden kategorisiert (z.B. unbekannter Artikel, fehlende Kundennummer, Konditionsabweichung), an den richtigen Bearbeiter geroutet, mit SLA-Timer überwacht und bei Nichtbearbeitung eskaliert. Typische Exception-Quote: 15-25 % am Anfang, 8-12 % nach 3 Monaten Tuning.",
            },
            {
              question: "DSGVO und Datenschutz — wo liegen die Bestelldaten?",
              answer:
                "Drei Optionen: (a) Bei dir On-Premise auf eigenem Server mit eigener GPU für Privacy-LLM, (b) in deiner eigenen Hetzner-/AWS-Box mit eigenem Account, (c) bei uns in Frankfurt gehostet. Auftragsverarbeitungsvertrag immer mit deutschem Vertragspartner. Keine Bestelldaten verlassen die EU, kein Training auf deinen Daten.",
            },
            {
              question: "Wie lange dauert die Implementierung wirklich?",
              answer:
                "Standardweg 4 Wochen bis Live mit Pilot. Bei sehr heterogenen Bestellformaten oder komplexer ERP-Anbindung (alte SAP-Instanzen, Custom-Datenbanken) 6-8 Wochen. Wir machen den Festpreis und die Zeitzusage im Audit der ersten Woche.",
            },
          ]}
        />
      </ContentWrapper>

      {/* 10. FINAL CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
