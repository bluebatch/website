/**
 * Test 7: Duplicate Titles & H1s (Kannibalisierungs-Onsite-Guard)
 *
 * Zwei indexierbare Seiten mit (nahezu) identischem Title oder H1 konkurrieren
 * bei Google um dieselbe Suchintention (Kannibalisierungs-Potenzial).
 *
 * Self-contained by design: prüft NUR Onsite-Signale über die eigene Sitemap —
 * keine Google-Credentials, keine GSC-/GA4-Daten (site-structure.md). Echte
 * Kannibalisierung (Query → mehrere rankende URLs) erkennt und steuert der
 * Website-Agent außerhalb dieses Repos.
 *
 * Hard-Fail: exakt gleicher normalisierter Title oder H1 auf zwei URLs.
 * Warnung (nur Log): gleiche Token-Menge in anderer Reihenfolge.
 */

import { test, expect } from "./fixtures";
import { BASE_URL } from "../helpers/crawl";

function normalize(text: string): string {
  return text
    .replace(/\s*[|–-]\s*Bluebatch.*$/i, "") // Brand-Suffix entfernen
    .replace(/&amp;/g, "&")
    .replace(/&shy;|­/g, "") // Soft-Hyphens (z.B. Daten­schutz)
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function tokenKey(text: string): string {
  return normalize(text)
    .replace(/[^a-zä-ü0-9 ]/gi, "")
    .split(" ")
    .filter(Boolean)
    .sort()
    .join(" ");
}

test("Duplicate Titles & H1s — Kannibalisierungs-Potenzial", async ({
  page,
}) => {
  test.setTimeout(300_000);

  // 1. Sitemap-URLs einsammeln (nur indexierbare Seiten stehen drin)
  const sitemapResponse = await page.request.get(`${BASE_URL}/sitemap.xml`);
  const xml = await sitemapResponse.text();
  const urls: string[] = [];
  const locRegex = /<loc>([^<]+)<\/loc>/g;
  let match;
  while ((match = locRegex.exec(xml)) !== null) {
    urls.push(new URL(match[1]).pathname);
  }
  expect(urls.length, "Sitemap leer").toBeGreaterThan(0);

  // 2. Title + erste H1 jeder Seite aus dem Server-HTML ziehen
  const titles = new Map<string, string[]>(); // normalisiert → URLs
  const h1s = new Map<string, string[]>();
  const tokenTitles = new Map<string, string[]>();

  for (const url of urls) {
    const response = await page.request.get(`${BASE_URL}${url}`);
    if (!response.ok()) continue;
    const html = await response.text();

    const titleMatch = html.match(/<title>([^<]*)<\/title>/);
    const h1Match = html.match(/<h1[^>]*>(.*?)<\/h1>/s);

    if (titleMatch) {
      const t = normalize(titleMatch[1]);
      if (t) {
        titles.set(t, [...(titles.get(t) ?? []), url]);
        const tk = tokenKey(titleMatch[1]);
        tokenTitles.set(tk, [...(tokenTitles.get(tk) ?? []), url]);
      }
    }
    if (h1Match) {
      const h = normalize(h1Match[1].replace(/<[^>]+>/g, ""));
      if (h) h1s.set(h, [...(h1s.get(h) ?? []), url]);
    }
  }

  // 3. Auswerten
  const duplicates: string[] = [];
  for (const [title, pages] of titles) {
    if (pages.length > 1) {
      duplicates.push(`Title "${title}": ${pages.join(", ")}`);
    }
  }
  for (const [h1, pages] of h1s) {
    if (pages.length > 1) {
      duplicates.push(`H1 "${h1}": ${pages.join(", ")}`);
    }
  }

  // Warnungen: gleiche Wörter, andere Reihenfolge (kein Fail)
  for (const [key, pages] of tokenTitles) {
    if (pages.length > 1 && !duplicates.some((d) => pages.every((p) => d.includes(p)))) {
      console.log(`WARNUNG — ähnliche Titles (${key}): ${pages.join(", ")}`);
    }
  }

  console.log(
    `\n${urls.length} Sitemap-Seiten geprüft, ${duplicates.length} exakte Duplikate.`,
  );

  expect(
    duplicates,
    "Exakt gleiche Titles/H1s auf mehreren indexierbaren Seiten — Kannibalisierungs-Potenzial. Seiten branchenspezifisch differenzieren (site-structure.md, Grundsatz Kannibalisierung).",
  ).toEqual([]);
});
