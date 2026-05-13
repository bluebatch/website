"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const HUBSPOT_PORTAL_ID = "146998643";
const CONSENT_KEY = "cookie_consent";

function hasMarketingConsent(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return false;
    const prefs = JSON.parse(raw) as { marketing?: boolean };
    return Boolean(prefs?.marketing);
  } catch {
    return false;
  }
}

export default function HubSpotTracking() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Initial check — read persisted consent from localStorage on mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (hasMarketingConsent()) setEnabled(true);

    function onConsent(e: Event) {
      const detail = (e as CustomEvent<{ marketing?: boolean }>).detail;
      if (detail?.marketing) setEnabled(true);
    }
    window.addEventListener("bluebatch:consent-update", onConsent);
    return () => {
      window.removeEventListener("bluebatch:consent-update", onConsent);
    };
  }, []);

  if (!enabled) return null;

  return (
    <Script
      id="hs-script-loader"
      src={`https://js-eu1.hs-scripts.com/${HUBSPOT_PORTAL_ID}.js`}
      strategy="afterInteractive"
    />
  );
}
