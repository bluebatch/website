"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { tracking, Ga4Event } from "@/lib/tracking";

const SUPPRESSED_PATHS = ["/impressum", "/datenschutz"];

const GA_MEASUREMENT_ID = "G-EL0E8GDKZB";
const CONSENT_KEY = "cookie_consent";

interface ConsentPreferences {
  essential: true; // always true, cannot be disabled
  statistics: boolean;
  marketing: boolean;
  externalMedia: boolean;
}

const DEFAULT_PREFERENCES: ConsentPreferences = {
  essential: true,
  statistics: false,
  marketing: false,
  externalMedia: false,
};

const ALL_GRANTED: ConsentPreferences = {
  essential: true,
  statistics: true,
  marketing: true,
  externalMedia: true,
};

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer: any[];
    gtag: (...args: unknown[]) => void;
    openConsentSettings: () => void;
  }
}

function getGtag() {
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function (...args: unknown[]) {
      window.dataLayer.push(args);
    };
  }
  return window.gtag;
}

function applyConsent(prefs: ConsentPreferences) {
  const consentState = {
    analytics_storage: prefs.statistics ? "granted" : "denied",
    ad_storage: prefs.marketing ? "granted" : "denied",
    ad_user_data: prefs.marketing ? "granted" : "denied",
    ad_personalization: prefs.marketing ? "granted" : "denied",
  };

  const gtag = getGtag();
  gtag("consent", "update", consentState);

  // After granting analytics, fire a pageview since the initial one was suppressed
  if (prefs.statistics) {
    tracking.ga4(Ga4Event.PageView, {
      page_location: window.location.href,
      page_title: document.title,
    });
  }

  // Notify other consent-gated trackers (e.g. Meta Pixel)
  window.dispatchEvent(
    new CustomEvent("bluebatch:consent-update", { detail: prefs })
  );
}

function savePreferences(prefs: ConsentPreferences) {
  localStorage.setItem(CONSENT_KEY, JSON.stringify(prefs));
}

function loadPreferences(): ConsentPreferences | null {
  const stored = localStorage.getItem(CONSENT_KEY);
  if (!stored) return null;
  try {
    return JSON.parse(stored) as ConsentPreferences;
  } catch {
    return null;
  }
}

const CATEGORIES = [
  {
    key: "essential" as const,
    label: "Essenziell",
    description:
      "Essenzielle Services ermöglichen grundlegende Funktionen und sind für das ordnungsgemäße Funktionieren der Website erforderlich.",
    locked: true,
  },
  {
    key: "statistics" as const,
    label: "Statistik",
    description:
      "Statistik-Cookies sammeln Nutzungsdaten, die uns Aufschluss darüber geben, wie unsere Besucher mit unserer Website umgehen.",
    locked: false,
  },
  {
    key: "marketing" as const,
    label: "Marketing",
    description:
      "Marketing Services werden von Drittanbietern oder Herausgebern genutzt, um personalisierte Werbung anzuzeigen. Sie tun dies, indem sie Besucher über Websites hinweg verfolgen.",
    locked: false,
  },
  {
    key: "externalMedia" as const,
    label: "Externe Medien",
    description:
      "Inhalte von Videoplattformen und Social-Media-Plattformen werden standardmäßig blockiert. Wenn externe Services akzeptiert werden, ist für den Zugriff auf diese Inhalte keine manuelle Einwilligung mehr erforderlich.",
    locked: false,
  },
];

export default function CookieConsent() {
  const pathname = usePathname();
  const isSuppressed = SUPPRESSED_PATHS.includes(pathname ?? "");
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] =
    useState<ConsentPreferences>(DEFAULT_PREFERENCES);

  const closeBanner = useCallback((prefs: ConsentPreferences) => {
    applyConsent(prefs);
    savePreferences(prefs);
    setShowBanner(false);
    setShowDetails(false);
  }, []);

  useEffect(() => {
    const stored = loadPreferences();
    if (!stored) {
      if (!isSuppressed) setShowBanner(true);
    } else {
      setPreferences(stored);
      applyConsent(stored);
    }

    window.openConsentSettings = () => {
      const current = loadPreferences();
      setPreferences(current ?? DEFAULT_PREFERENCES);
      setShowDetails(true);
      setShowBanner(true);
    };
  }, [isSuppressed]);

  useEffect(() => {
    if (!showBanner) return;
    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = html.style.overflow;
    const prevHtmlOverflowX = html.style.overflowX;
    const prevBodyOverflow = body.style.overflow;
    const prevBodyOverscroll = body.style.overscrollBehavior;
    html.style.overflow = "hidden";
    html.style.overflowX = "hidden";
    body.style.overflow = "hidden";
    body.style.overscrollBehavior = "none";
    return () => {
      html.style.overflow = prevHtmlOverflow;
      html.style.overflowX = prevHtmlOverflowX;
      body.style.overflow = prevBodyOverflow;
      body.style.overscrollBehavior = prevBodyOverscroll;
    };
  }, [showBanner]);

  function handleAcceptAll() {
    setPreferences(ALL_GRANTED);
    closeBanner(ALL_GRANTED);
  }

  function handleDenyAll() {
    closeBanner(DEFAULT_PREFERENCES);
  }

  function handleSavePreferences() {
    closeBanner(preferences);
  }

  function toggleCategory(key: keyof ConsentPreferences) {
    if (key === "essential") return;
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <>
      {/* Step 1: Initialize dataLayer and set default consent to denied */}
      <Script
        id="gtag-consent-default"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied'
            });
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
        }}
      />

      {/* Step 2: Load GA4 script (safe to load — consent defaults to denied) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />

      {/* Step 3: Cookie consent banner */}
      {showBanner && (
        <div
          role="dialog"
          aria-label="Cookie-Einstellungen"
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden overscroll-contain bg-black/70 p-[15px] sm:p-0"
        >
          <div className="flex h-full w-full max-w-2xl flex-col rounded-2xl bg-white shadow-2xl sm:h-auto sm:max-h-[90dvh]">
            {/* Fixed Header */}
            <div className="shrink-0 border-b border-gray-100 px-6 pt-6 pb-4 shadow-sm sm:px-8 sm:pt-8">
              <h2 className="mb-2 text-lg font-semibold text-gray-900">
                Datenschutz-Präferenz
              </h2>
              <p className="text-sm font-medium text-gray-800">
                Wir benötigen Ihre Einwilligung, bevor Sie unsere Website weiter
                besuchen können.
              </p>
            </div>

            {/* Scrollable middle */}
            <div className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain hyphens-auto [overflow-wrap:anywhere] px-6 pt-4 sm:px-8 sm:pt-6">
              <p className="mb-3 text-xs text-gray-500">
                Wenn Sie unter 16 Jahre alt sind und Ihre Einwilligung zu
                optionalen Services geben möchten, müssen Sie Ihre
                Erziehungsberechtigten um Erlaubnis bitten.
              </p>
              <p className="mb-3 text-xs text-gray-500">
                Wir verwenden Cookies und andere Technologien auf unserer
                Website. Einige von ihnen sind essenziell, während andere uns
                helfen, diese Website und Ihre Erfahrung zu verbessern.
                Personenbezogene Daten können verarbeitet werden (z.&nbsp;B.
                IP-Adressen), z.&nbsp;B. für personalisierte Anzeigen und
                Inhalte oder die Messung von Anzeigen und Inhalten. Weitere
                Informationen über die Verwendung Ihrer Daten finden Sie in
                unserer{" "}
                <a
                  href="/datenschutz"
                  className="underline hover:text-primary-700"
                >
                  Daten&shy;schutz&shy;erklärung
                </a>{" "}
                und unserem{" "}
                <a
                  href="/impressum"
                  className="underline hover:text-primary-700"
                >
                  Impressum
                </a>
                . Es besteht keine Verpflichtung, in die Verarbeitung Ihrer
                Daten einzuwilligen, um dieses Angebot zu nutzen. Sie können
                Ihre Auswahl jederzeit unter Einstellungen widerrufen oder
                anpassen. Bitte beachten Sie, dass aufgrund individueller
                Einstellungen möglicherweise nicht alle Funktionen der Website
                verfügbar sind.
              </p>
              <p className="mb-6 text-xs text-gray-500">
                Einige Services verarbeiten personenbezogene Daten in den USA.
                Mit Ihrer Einwilligung zur Nutzung dieser Services willigen Sie
                auch in die Verarbeitung Ihrer Daten in den USA gemäß Art. 49
                (1) lit. a GDPR ein. Der EuGH stuft die USA als ein Land mit
                unzureichendem Datenschutz nach EU-Standards ein. Es besteht
                beispielsweise die Gefahr, dass US-Behörden personenbezogene
                Daten in Überwachungsprogrammen verarbeiten, ohne dass für
                Europäerinnen und Europäer eine Klagemöglichkeit besteht.
              </p>

              {/* Category details (expandable) */}
              {showDetails && (
                <div className="mb-6 space-y-3">
                  {CATEGORIES.map((cat) => (
                    <div
                      key={cat.key}
                      className="rounded-lg border border-gray-200 p-4"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="min-w-0 flex-1">
                          <h3 className="text-sm font-medium text-gray-900">
                            {cat.label}
                          </h3>
                          <p className="mt-1 text-xs text-gray-500">
                            {cat.description}
                          </p>
                        </div>
                        {/* Toggle */}
                        <button
                          type="button"
                          role="switch"
                          aria-checked={preferences[cat.key]}
                          aria-label={cat.label}
                          disabled={cat.locked}
                          onClick={() => toggleCategory(cat.key)}
                          className={`relative inline-flex h-6 w-11 shrink-0 rounded-full transition-colors ${
                            preferences[cat.key]
                              ? "bg-primary-700"
                              : "bg-gray-300"
                          } ${cat.locked ? "cursor-not-allowed opacity-70" : "cursor-pointer"}`}
                        >
                          <span
                            className={`pointer-events-none inline-block h-5 w-5 translate-y-0.5 rounded-full bg-white shadow-sm ring-0 transition-transform ${
                              preferences[cat.key]
                                ? "translate-x-5.5"
                                : "translate-x-0.5"
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Fixed Buttons */}
            <div className="shrink-0 flex flex-col gap-3 border-t border-gray-100 px-6 pt-4 pb-6 sm:flex-row sm:px-8 sm:pt-6 sm:pb-8">
              {!showDetails && (
                <button
                  onClick={() => setShowDetails(true)}
                  className="order-3 cursor-pointer rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 sm:order-1 sm:flex-1"
                >
                  Einstellungen
                </button>
              )}
              {showDetails && (
                <button
                  onClick={handleSavePreferences}
                  className="order-3 cursor-pointer rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 sm:order-1 sm:flex-1"
                >
                  Auswahl speichern
                </button>
              )}
              <button
                onClick={handleDenyAll}
                className="order-2 cursor-pointer rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 sm:flex-1"
              >
                Alle ablehnen
              </button>
              <button
                onClick={handleAcceptAll}
                className="order-1 cursor-pointer rounded-lg border border-cta-500 bg-cta-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-cta-600 hover:bg-cta-600 sm:order-3 sm:flex-1"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
