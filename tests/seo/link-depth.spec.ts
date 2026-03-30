/**
 * Test 6: Link Depth
 *
 * Checks how many clicks it takes from the homepage to reach each page.
 * Pages reachable in 1-3 clicks = good. More than 3 = bad for SEO.
 * Uses BFS from homepage, tracking depth per discovered URL.
 */

import { test, expect } from "./fixtures";
import { seoConfig } from "./seo-config";
import { collectLinkHrefs, verdict, reportScore } from "./helpers";
import { BASE_URL, normalizePathname } from "../helpers/crawl";

const MAX_GOOD_DEPTH = 3;
const PASS_THRESHOLD = 80;
const CONCURRENCY = 6;

test("Link Depth — max 3 clicks from homepage", async ({ page }) => {
  const context = page.context();

  // BFS: track depth of each discovered URL
  const depthMap = new Map<string, number>();
  const queue: { url: string; depth: number }[] = [{ url: "/", depth: 0 }];
  depthMap.set("/", 0);

  // Create page pool
  const pages = [page];
  for (let i = 1; i < CONCURRENCY; i++) {
    pages.push(await context.newPage());
  }
  const available = [...pages];

  async function visitPage(
    browserPage: ReturnType<typeof pages[0]>,
    url: string,
    depth: number,
  ): Promise<{ url: string; depth: number }[]> {
    const newUrls: { url: string; depth: number }[] = [];
    try {
      const response = await browserPage.goto(`${BASE_URL}${url}`, {
        waitUntil: "domcontentloaded",
        timeout: 30_000,
      });

      const status = response?.status() ?? 0;
      if (status >= 400) return newUrls;

      // Track redirects at the same depth
      const finalUrl = normalizePathname(browserPage.url());
      if (finalUrl !== url && !depthMap.has(finalUrl)) {
        depthMap.set(finalUrl, depth);
      }

      const links = await collectLinkHrefs(browserPage);
      for (const link of links) {
        if (!depthMap.has(link)) {
          depthMap.set(link, depth + 1);
          newUrls.push({ url: link, depth: depth + 1 });
        }
      }
    } catch {
      // skip errors
    }
    return newUrls;
  }

  // BFS with concurrency
  while (queue.length > 0 || available.length < pages.length) {
    const tasks: Promise<void>[] = [];

    while (queue.length > 0 && available.length > 0) {
      const { url, depth } = queue.shift()!;
      const browserPage = available.pop()!;

      tasks.push(
        visitPage(browserPage, url, depth).then((newUrls) => {
          queue.push(...newUrls);
          available.push(browserPage);
        }),
      );
    }

    if (tasks.length > 0) {
      await Promise.all(tasks);
    } else if (available.length < pages.length) {
      await new Promise((r) => setTimeout(r, 50));
    } else {
      break;
    }
  }

  // Close extra pages
  for (let i = 1; i < pages.length; i++) {
    await pages[i].close();
  }

  // Analyze results
  const totalPages = depthMap.size;
  const tooDeep: { url: string; depth: number }[] = [];
  const depthBuckets = new Map<number, number>();

  for (const [url, depth] of depthMap) {
    depthBuckets.set(depth, (depthBuckets.get(depth) ?? 0) + 1);
    if (depth > MAX_GOOD_DEPTH) {
      tooDeep.push({ url, depth });
    }
  }

  tooDeep.sort((a, b) => b.depth - a.depth);

  // Score: percentage of pages within max depth
  const withinDepth = totalPages - tooDeep.length;
  const score = totalPages > 0 ? Math.round((withinDepth / totalPages) * 100) : 100;

  // Log distribution
  console.log(`\nLink Depth Distribution (${totalPages} pages):\n`);
  const sortedDepths = [...depthBuckets.entries()].sort((a, b) => a[0] - b[0]);
  for (const [depth, count] of sortedDepths) {
    const bar = "#".repeat(Math.min(count, 50));
    const marker = depth > MAX_GOOD_DEPTH ? " !!!" : "";
    console.log(`  Depth ${depth}: ${count} pages ${bar}${marker}`);
  }

  if (tooDeep.length > 0) {
    console.log(`\nPages too deep (>${MAX_GOOD_DEPTH} clicks):`);
    for (const p of tooDeep.slice(0, 20)) {
      console.log(`  ${p.url} — ${p.depth} clicks`);
    }
    if (tooDeep.length > 20) {
      console.log(`  ... and ${tooDeep.length - 20} more`);
    }
  } else {
    console.log(`\nAll pages reachable within ${MAX_GOOD_DEPTH} clicks!`);
  }

  const details = tooDeep.map((p) => `${p.url}: ${p.depth} clicks`);
  reportScore("Link Depth", score, PASS_THRESHOLD, details);
  console.log(`\n${verdict(score, PASS_THRESHOLD)}`);
  expect(score).toBeGreaterThanOrEqual(PASS_THRESHOLD);
});
