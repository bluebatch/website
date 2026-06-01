"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const STORAGE_KEY = "bb_meta_attribution";
const ATTRIBUTION_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days, Meta-Standard

interface Attribution {
  fbclid: string | null;
  fbc: string | null;
  ts: number;
  utm: Record<string, string>;
}

function isMetaTraffic(params: URLSearchParams): boolean {
  const source = params.get("utm_source")?.toLowerCase();
  if (source === "facebook" || source === "fb" || source === "instagram" || source === "ig") {
    return true;
  }
  if (params.has("fbclid")) return true;
  if (params.get("hsa_src")?.toLowerCase() === "fb") return true;
  return false;
}

function collectUtm(params: URLSearchParams): Record<string, string> {
  const utm: Record<string, string> = {};
  for (const [k, v] of params.entries()) {
    if (k.startsWith("utm_") || k.startsWith("hsa_") || k === "fbclid") {
      utm[k] = v;
    }
  }
  return utm;
}

function buildFbc(fbclid: string): string {
  // Meta-Format: fb.{subdomain_index}.{ts_ms}.{fbclid}
  // subdomain_index=1 means cookie set on root domain
  return `fb.1.${Date.now()}.${fbclid}`;
}

function readAttribution(): Attribution | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as Attribution;
    if (Date.now() - data.ts > ATTRIBUTION_TTL_MS) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

function writeAttribution(att: Attribution): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(att));
  } catch {
    // ignore quota / disabled storage
  }
}

function generateEventId(): string {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  return `evt-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function sendPageView(att: Attribution): void {
  const payload = {
    eventId: generateEventId(),
    eventName: "PageView",
    eventSourceUrl: window.location.href,
    ...(att.fbc ? { fbc: att.fbc } : {}),
  };
  const body = JSON.stringify(payload);

  // Prefer sendBeacon — survives navigation, doesn't block, no CORS prompt
  if (typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
    try {
      const blob = new Blob([body], { type: "application/json" });
      const ok = navigator.sendBeacon("/api/fb-events", blob);
      if (ok) return;
    } catch {
      // fall through to fetch
    }
  }

  // Fallback: keepalive fetch (fire-and-forget, survives page unload)
  try {
    void fetch("/api/fb-events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    });
  } catch {
    // swallow — tracking must never crash the page
  }
}

export default function MetaAdsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    let attribution = readAttribution();
    const isMetaEntry = isMetaTraffic(params);

    if (isMetaEntry) {
      const fbclid = params.get("fbclid");
      const utm = collectUtm(params);
      attribution = {
        fbclid: fbclid ?? attribution?.fbclid ?? null,
        fbc: fbclid ? buildFbc(fbclid) : (attribution?.fbc ?? null),
        ts: Date.now(),
        utm: { ...(attribution?.utm ?? {}), ...utm },
      };
      writeAttribution(attribution);
    }

    if (!attribution) return;

    // Defer to idle / next tick so page render isn't blocked at all
    const fire = () => sendPageView(attribution!);
    if (typeof window.requestIdleCallback === "function") {
      window.requestIdleCallback(fire, { timeout: 1000 });
    } else {
      setTimeout(fire, 0);
    }
  }, [pathname]);

  return null;
}
