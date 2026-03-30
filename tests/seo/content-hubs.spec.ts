/**
 * Test 1: Content Hub Completeness
 *
 * Auto-discovers hubs from app/ directory structure and checks:
 * - Hub page links to each child page (canonical URL)
 * - Each child page links back to the hub
 * - GA4: high-traffic children missing back-links get extra penalty
 */

import { test, expect } from "./fixtures";
import { seoConfig } from "./seo-config";
import { discoverHubs, collectLinkHrefs, verdict, reportScore, type Hub } from "./helpers";
import { BASE_URL } from "../helpers/crawl";

const cfg = seoConfig.contentHubs;

test("Content Hub Completeness", async ({ page, ga4Data }) => {
  const hubs = discoverHubs();
  expect(hubs.length).toBeGreaterThan(0);

  console.log(`\nDiscovered ${hubs.length} hubs:\n`);

  let totalWeightedScore = 0;
  let totalWeight = 0;

  for (const hub of hubs) {
    // Visit hub page and collect its outbound links
    await page.goto(`${BASE_URL}${hub.canonicalUrl}`, {
      waitUntil: "domcontentloaded",
      timeout: 30_000,
    });
    const hubLinks = await collectLinkHrefs(page);

    // Check: hub links to each child
    let hubToChildCount = 0;
    for (const child of hub.children) {
      if (hubLinks.includes(child.canonicalUrl)) {
        hubToChildCount++;
      }
    }

    // Check: each child links back to hub
    let childToHubCount = 0;
    const missingBacklinks: string[] = [];

    for (const child of hub.children) {
      await page.goto(`${BASE_URL}${child.canonicalUrl}`, {
        waitUntil: "domcontentloaded",
        timeout: 30_000,
      });
      const childLinks = await collectLinkHrefs(page);

      if (childLinks.includes(hub.canonicalUrl)) {
        childToHubCount++;
      } else {
        missingBacklinks.push(child.canonicalUrl);
      }
    }

    const childCount = hub.children.length;

    // Score this hub
    const forwardRatio = childCount > 0 ? hubToChildCount / childCount : 1;
    const backRatio = childCount > 0 ? childToHubCount / childCount : 1;
    let hubScore = Math.round((forwardRatio * 0.5 + backRatio * 0.5) * 100);

    // GA4 penalty: if high-traffic children are missing back-links, penalize harder
    for (const missing of missingBacklinks) {
      const ga4 = ga4Data.get(missing);
      if (ga4 && ga4.sessions >= seoConfig.ga4.highTrafficThreshold) {
        hubScore = Math.max(0, hubScore - 5);
      }
    }

    // Weight by children count (more children = more important hub)
    const weight = Math.min(childCount / cfg.minChildrenForFullScore, 1);
    totalWeightedScore += hubScore * weight;
    totalWeight += weight;

    // Log details
    const forwardEmoji = hubToChildCount === childCount ? "\u2705" : "\u26A0\uFE0F";
    const backEmoji = childToHubCount === childCount ? "\u2705" : "\u26A0\uFE0F";
    console.log(`Hub: ${hub.canonicalUrl} (${hub.route})`);
    console.log(`  Children linked from hub: ${hubToChildCount}/${childCount} ${forwardEmoji}`);
    console.log(`  Back-links to hub: ${childToHubCount}/${childCount} ${backEmoji}`);
    if (missingBacklinks.length > 0) {
      console.log(`  Missing back-links: ${missingBacklinks.join(", ")}`);
    }
    console.log(`  Hub score: ${hubScore}/100`);
    console.log();
  }

  const overallScore = totalWeight > 0
    ? Math.round(totalWeightedScore / totalWeight)
    : 100;

  // Collect details for report
  const details: string[] = [];
  for (const hub of hubs) {
    const children = hub.children.length;
    details.push(`${hub.canonicalUrl}: ${children} children`);
  }

  reportScore("Content Hubs", overallScore, cfg.passThreshold, details);
  console.log(verdict(overallScore, cfg.passThreshold));
  expect(overallScore).toBeGreaterThanOrEqual(cfg.passThreshold);
});
