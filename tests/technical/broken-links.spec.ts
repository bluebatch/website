import { test, expect } from "@playwright/test";
import {
  crawlSite,
  BASE_URL,
  isInternalUrl,
  normalizePathname,
} from "../helpers/crawl";

test("no broken internal links (4xx/5xx)", async ({ page }) => {
  test.setTimeout(600_000);

  const broken: string[] = [];

  const results = await crawlSite(page, (crawled) => {
    console.log(
      `[${crawled.status}] ${crawled.pathname}${crawled.redirected ? ` → ${crawled.finalPathname}` : ""}${crawled.error ? ` ERROR: ${crawled.error}` : ""}`,
    );
    if (crawled.status >= 400 || crawled.error) {
      broken.push(
        `${crawled.pathname} → ${crawled.error ? `ERROR: ${crawled.error}` : `HTTP ${crawled.status}`}`,
      );
    } else if (crawled.redirected) {
      broken.push(
        `${crawled.pathname} → REDIRECT to ${crawled.finalPathname} (stale link — update to ${crawled.finalPathname})`,
      );
    }
  });

  console.log(`\nTotal pages visited: ${results.length}`);
  console.log(`Broken: ${broken.length}`);
  if (broken.length > 0) {
    console.log("\n--- BROKEN LINKS ---");
    broken.forEach((l) => console.log(`  ${l}`));
  }

  expect(broken, "Broken internal links found").toHaveLength(0);
});

test("no broken external links", async ({ page }) => {
  test.setTimeout(600_000);

  const externalLinks = new Map<string, string[]>();
  const visited = new Set<string>();
  const toVisit: string[] = ["/"];

  while (toVisit.length > 0) {
    const pathname = toVisit.shift()!;
    if (visited.has(pathname)) continue;
    visited.add(pathname);
    if (/\.(xml|json|ico|png|jpg|svg|css|js|woff|woff2|ttf|webp|pdf)$/i.test(pathname)) continue;
    if (["/ingest", "/_next", "/api"].some((p) => pathname.startsWith(p))) continue;

    try {
      await page.goto(`${BASE_URL}${pathname}`, {
        waitUntil: "domcontentloaded",
        timeout: 30_000,
      });
    } catch {
      console.log(`  Skipping ${pathname} (connection error)`);
      continue;
    }

    const links = await page.locator("a[href]").all();
    for (const link of links) {
      const href = await link.getAttribute("href");
      if (!href) continue;
      if (["#", "mailto:", "tel:", "javascript:"].some((p) => href.startsWith(p))) continue;

      if (isInternalUrl(href)) {
        const norm = normalizePathname(href);
        if (!visited.has(norm) && !toVisit.includes(norm)) toVisit.push(norm);
      } else {
        try {
          const url = new URL(href);
          if (url.protocol === "http:" || url.protocol === "https:") {
            const pages = externalLinks.get(href) || [];
            pages.push(pathname);
            externalLinks.set(href, pages);
          }
        } catch {
          // skip invalid URLs
        }
      }
    }
  }

  console.log(`\nChecking ${externalLinks.size} unique external links...\n`);

  const broken: { url: string; status: number; pages: string[] }[] = [];

  // A single failed request does NOT mean the link is dead. On 2026-09-03 the
  // last 9 URLs of the list threw in one block (docs.n8n.io, github.com/n8n-io,
  // discord.gg, youtube.com) and every one of them answered 200 seconds later —
  // the run before had checked the same 26 URLs green. That is a rate-limit /
  // network blip, not broken content, and the old catch-all turned it into a red
  // suite. Retry with backoff, and alternate HEAD/GET because some hosts refuse
  // HEAD outright. Only a URL that fails EVERY attempt counts as unreachable,
  // so a genuinely dead domain still fails the test.
  const ATTEMPTS = 3;

  async function probe(url: string): Promise<number | null> {
    for (let attempt = 0; attempt < ATTEMPTS; attempt++) {
      if (attempt > 0) {
        await new Promise((r) => setTimeout(r, 2_000 * attempt));
      }
      try {
        const response =
          attempt % 2 === 0
            ? await page.request.head(url, { timeout: 15_000 })
            : await page.request.get(url, { timeout: 15_000 });
        return response.status();
      } catch {
        // try again
      }
    }
    return null;
  }

  for (const [url, pages] of externalLinks) {
    const status = await probe(url);

    if (status === null) {
      broken.push({ url, status: 0, pages });
      console.log(
        `  UNREACHABLE: ${url} after ${ATTEMPTS} attempts (on: ${pages.join(", ")})`,
      );
      continue;
    }

    // Many sites (LinkedIn, etc.) return 999/403/429 for bots — that's fine,
    // it means the URL exists. Only 404/410 are actual broken links.
    if (status === 404 || status === 410) {
      broken.push({ url, status, pages });
      console.log(`  BROKEN: ${url} → ${status} (on: ${pages.join(", ")})`);
    } else {
      console.log(`  OK: ${url} → ${status}`);
    }
  }

  console.log(`\nBroken external links: ${broken.length}`);
  expect(broken, "Broken external links found").toHaveLength(0);
});
