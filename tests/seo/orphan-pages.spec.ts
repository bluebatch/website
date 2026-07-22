/**
 * Test 3: Orphan Page Detection
 *
 * Compares sitemap URLs against pages reachable via internal links.
 * Reiner Ja/Nein-Check ohne externe Daten: jede Sitemap-URL muss intern
 * verlinkt sein, sonst schlägt der Test fehl.
 *
 * Funnel-Landingpages (app/(landingpage-funnel)/) sind GEWOLLT unverlinkt und
 * tauchen hier nie auf: sie sind noindex und werden von app/sitemap.ts aus der
 * Sitemap ausgeschlossen. Diese Isolation ist kein Zufall, sondern wird explizit
 * geprüft in tests/technical/funnel-isolation.spec.ts.
 */

import { test, expect } from "./fixtures";
import { seoConfig } from "./seo-config";
import { verdict, reportScore } from "./helpers";
import { crawlSite, normalizePathname, BASE_URL } from "../helpers/crawl";

const cfg = seoConfig.orphanPages;

test("Orphan Page Detection", async ({ page }) => {
  // Step 1: Get sitemap URLs
  const sitemapResponse = await page.goto(`${BASE_URL}/sitemap.xml`, {
    waitUntil: "domcontentloaded",
  });
  const sitemapXml = await sitemapResponse?.text() ?? "";

  const sitemapUrls = new Set<string>();
  const locRegex = /<loc>([^<]+)<\/loc>/g;
  let match;
  while ((match = locRegex.exec(sitemapXml)) !== null) {
    try {
      const url = new URL(match[1]);
      const pathname = url.pathname !== "/" && url.pathname.endsWith("/")
        ? url.pathname.slice(0, -1)
        : url.pathname;
      sitemapUrls.add(pathname);
    } catch {
      // skip invalid URLs
    }
  }

  console.log(`\nSitemap pages: ${sitemapUrls.size}`);

  // Step 2: Crawl site from homepage, collect all reachable URLs
  const crawled = await crawlSite(page);
  const reachableUrls = new Set<string>();
  for (const p of crawled) {
    reachableUrls.add(p.finalPathname);
    // Also add the original pathname if it redirected
    if (p.redirected) {
      reachableUrls.add(p.finalPathname);
    }
  }

  console.log(`Reachable via internal links: ${reachableUrls.size}`);

  // Step 3: Find orphans
  const orphans: { url: string }[] = [];
  for (const url of sitemapUrls) {
    if (!reachableUrls.has(url)) {
      orphans.push({ url });
    }
  }

  // Step 4: Calculate score
  const totalPages = sitemapUrls.size;
  if (totalPages === 0) {
    console.log("No sitemap pages found — skipping.");
    return;
  }

  const score = Math.max(
    0,
    Math.round((1 - orphans.length / totalPages) * 100),
  );

  // Log orphans
  if (orphans.length > 0) {
    console.log(`\nOrphan pages: ${orphans.length}`);
    for (const o of orphans.slice(0, 20)) {
      console.log(`  ${o.url}`);
    }
    if (orphans.length > 20) {
      console.log(`  ... and ${orphans.length - 20} more`);
    }
  } else {
    console.log("\nNo orphan pages found!");
  }

  const details = orphans.map((o) => o.url);
  reportScore("Orphan Pages", score, cfg.passThreshold, details);
  console.log(`\n${verdict(score, cfg.passThreshold)}`);

  // Hard fail: any sitemap page not reachable via internal links is a bug.
  expect(
    orphans,
    `Found ${orphans.length} orphan page(s) — every sitemap URL must be reachable via internal links:\n${orphans.map((o) => `  - ${o.url}`).join("\n")}`,
  ).toEqual([]);
});
