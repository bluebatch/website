/**
 * Test 3: Orphan Page Detection
 *
 * Compares sitemap URLs against pages reachable via internal links.
 * Orphan pages with GA4 traffic get a 2x penalty (worse waste).
 */

import { test, expect } from "./fixtures";
import { seoConfig } from "./seo-config";
import { verdict, reportScore } from "./helpers";
import { crawlSite, normalizePathname, BASE_URL } from "../helpers/crawl";

const cfg = seoConfig.orphanPages;

test("Orphan Page Detection", async ({ page, ga4Data }) => {
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
  const orphans: { url: string; hasTraffic: boolean; sessions: number }[] = [];
  for (const url of sitemapUrls) {
    if (!reachableUrls.has(url)) {
      const ga4 = ga4Data.get(url);
      orphans.push({
        url,
        hasTraffic: ga4 ? ga4.sessions > 0 : false,
        sessions: ga4?.sessions ?? 0,
      });
    }
  }

  // Sort: traffic orphans first (most critical)
  orphans.sort((a, b) => b.sessions - a.sessions);

  // Step 4: Calculate score with GA4 weighting
  const totalPages = sitemapUrls.size;
  if (totalPages === 0) {
    console.log("No sitemap pages found — skipping.");
    return;
  }

  // Each orphan costs 1 point, traffic orphans cost 2x
  let penaltyPoints = 0;
  for (const orphan of orphans) {
    penaltyPoints += orphan.hasTraffic
      ? cfg.trafficOrphanPenaltyMultiplier
      : 1;
  }

  const maxPenalty = totalPages; // worst case: all pages orphaned
  const score = Math.max(0, Math.round((1 - penaltyPoints / maxPenalty) * 100));

  // Log orphans
  if (orphans.length > 0) {
    console.log(`\nOrphan pages: ${orphans.length}`);
    const trafficOrphans = orphans.filter((o) => o.hasTraffic);
    if (trafficOrphans.length > 0) {
      console.log(`\nCritical — orphans WITH traffic:`);
      for (const o of trafficOrphans.slice(0, 10)) {
        console.log(`  ${o.url} (${o.sessions} sessions)`);
      }
    }
    const noTrafficOrphans = orphans.filter((o) => !o.hasTraffic);
    if (noTrafficOrphans.length > 0) {
      console.log(`\nOrphans without traffic:`);
      for (const o of noTrafficOrphans.slice(0, 10)) {
        console.log(`  ${o.url}`);
      }
      if (noTrafficOrphans.length > 10) {
        console.log(`  ... and ${noTrafficOrphans.length - 10} more`);
      }
    }
  } else {
    console.log("\nNo orphan pages found!");
  }

  const details = orphans.map((o) =>
    o.hasTraffic ? `${o.url} (${o.sessions} sessions) — CRITICAL` : o.url,
  );
  reportScore("Orphan Pages", score, cfg.passThreshold, details);
  console.log(`\n${verdict(score, cfg.passThreshold)}`);
  expect(score).toBeGreaterThanOrEqual(cfg.passThreshold);
});
