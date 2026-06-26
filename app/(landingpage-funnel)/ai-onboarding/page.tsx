import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import ContentWrapper from "@/components/layout/content-wrapper";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
} from "@/components/heroes/hero-2-column";
import AiOnboardingWizard from "./ai-onboarding-wizard";

export const metadata: Metadata = {
  title: "Bis zu 17 KI-Anwendungsfälle aus eurer Website-Domain — kostenlos, ohne E-Mail | Bluebatch",
  description:
    "Gebt nur eure Website-Domain ein und seht in unter 2 Minuten bis zu 17 konkrete KI-Anwendungsfälle für euren Betrieb, mit Zeit- und €-Einsparpotenzial. Kostenlos, ohne E-Mail.",
  keywords: [
    "KI Anwendungsfälle",
    "KI Use-Case Matrix",
    "KI Potenzialanalyse",
    "AI Onboarding",
    "KI Großhandel",
    "Bluebatch",
  ],
  openGraph: {
    title: "Bis zu 17 KI-Anwendungsfälle aus eurer Website-Domain — kostenlos, ohne E-Mail",
    description:
      "Domain eingeben, bis zu 17 konkrete KI-Anwendungsfälle für euren Betrieb sehen, mit Zeit- und €-Einsparpotenzial. Kostenlos, ohne E-Mail.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bis zu 17 KI-Anwendungsfälle aus eurer Domain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bis zu 17 KI-Anwendungsfälle aus eurer Website-Domain — kostenlos, ohne E-Mail",
    description:
      "Domain eingeben, bis zu 17 konkrete KI-Anwendungsfälle für euren Betrieb sehen. Kostenlos, ohne E-Mail.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/ai-onboarding",
  },
};

const reportFacts = [
  { bold: "Wo die Konkurrenz schon KI einsetzt", rest: "— und ihr noch nicht" },
  { bold: "Nur eure Domain", rest: "— keine E-Mail, keine Anmeldung" },
  { bold: "Was euch jeder Monat Stillstand kostet", rest: "" },
  { bold: "Der Fahrplan,", rest: "den sonst nur zahlende Kunden bekommen" },
  { bold: "In unter 2 Minuten", rest: "statt 4-Wochen-Beraterprojekt" },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection colorScheme="white">
        <Hero2Column>
          <Hero2ColumnMediaColumn>
            <div className="mx-auto w-full max-w-[240px] overflow-hidden rounded-2xl shadow-lg sm:max-w-xs lg:max-w-none">
              <Image
                src="/images/claude-cowork.png"
                alt="Claude Cowork — KI-Anwendungsfälle für euren Betrieb"
                width={1080}
                height={1350}
                priority
                className="h-auto w-full"
                sizes="(min-width: 1024px) 40vw, 240px"
              />
            </div>
          </Hero2ColumnMediaColumn>

          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Kostenlos · ohne E-Mail</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Bis zu 17 KI-Anwendungsfälle, allein aus eurer Website-Domain.
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Domain eingeben, kurz warten, fertige Use-Case-Matrix für euren Betrieb.
            </Hero2ColumnDescription>

            <ul className="mb-8 space-y-4">
              {reportFacts.map((fact, i) => (
                <li key={fact.bold} className="flex items-start gap-3.5">
                  <span
                    className="check-box mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-green-500 shadow-sm"
                    style={{ animationDelay: `${0.15 + i * 0.18}s` }}
                  >
                    <svg
                      className="h-5 w-5 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path
                        className="check-mark"
                        style={{ animationDelay: `${0.3 + i * 0.18}s` }}
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <span className="text-lg text-gray-800">
                    <strong className="font-bold text-gray-900">{fact.bold}</strong> {fact.rest}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#start"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-800 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 0a8.25 8.25 0 1116.5 0 8.25 8.25 0 01-16.5 0zm8.25-8.25c2.485 0 4.5 3.694 4.5 8.25s-2.015 8.25-4.5 8.25-4.5-3.694-4.5-8.25 2.015-8.25 4.5-8.25z" />
                </svg>
                Domain eingeben
              </a>
              <a
                href="/sample-reports/wendelstein-steuerberatung.report.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-700 transition-colors hover:border-primary-500 hover:text-primary-700"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                Demo-Report ansehen
              </a>
            </div>
          </Hero2ColumnTextColumn>
        </Hero2Column>
      </ContentWrapper>

      <div id="start">
        <ContentWrapper colorScheme="gray-light">
          <Suspense fallback={null}>
            <AiOnboardingWizard />
          </Suspense>
        </ContentWrapper>
      </div>
    </>
  );
}
