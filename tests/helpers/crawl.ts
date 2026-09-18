import type { Page, BrowserContext } from "@playwright/test";

// Muss zum webServer-Port in playwright.config.ts passen — ein abweichender
// Port lässt die Crawl-Tests gegen eine fremde App im Devcontainer laufen.
export const BASE_URL = process.env.BASE_URL || "http://localhost:4311";
export const BASE_ORIGIN = new URL(BASE_URL).origin;
export const CANONICAL_ORIGIN = "https://bluebatch.io";

const SKIP_EXTENSIONS = /\.(xml|json|ico|png|jpg|svg|css|js|woff|woff2|ttf|webp|pdf)$/i;
const SKIP_PREFIXES = ["/ingest", "/_next", "/api"];
const SKIP_HREF_PREFIXES = ["#", "mailto:", "tel:", "javascript:"];

const CONCURRENCY = 6;

export function isInternalUrl(href: string): boolean {
  try {
    const url = new URL(href, BASE_URL);
    return url.origin === BASE_ORIGIN;
  } catch {
    return false;
  }
}

export function normalizePathname(href: string): string {
  const url = new URL(href, BASE_URL);
  url.hash = "";
  url.search = "";
  if (url.pathname !== "/" && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.slice(0, -1);
  }
  return url.pathname;
}

function shouldSkip(pathname: string): boolean {
  if (SKIP_EXTENSIONS.test(pathname)) return true;
  return SKIP_PREFIXES.some((p) => pathname.startsWith(p));
}

function isNavigableHref(href: string): boolean {
  return !SKIP_HREF_PREFIXES.some((p) => href.startsWith(p));
}

/**
 * Alle href-Attribute einer Seite in EINEM Round-Trip lesen.
 *
 * Bis 2026-09-18 lief hier `locator("a[href]").all()` plus ein
 * `getAttribute("href")` pro Link — bei ~150 Links je Seite und ~217 Seiten
 * über 30.000 CDP-Round-Trips pro Crawl. Unter Last (zwei Playwright-Läufe
 * hintereinander, Load 20 auf 12 Kernen) trieb genau diese Schleife den
 * externen Link-Check in den 600s-Timeout (`waiting for
 * locator('a[href]').nth(120)`), obwohl die Seite selbst fehlerfrei war.
 */
export async function collectHrefs(page: Page): Promise<string[]> {
  return page.$$eval("a[href]", (anchors) =>
    anchors
      .map((a) => a.getAttribute("href"))
      .filter((href): href is string => !!href),
  );
}

function isHttpUrl(href: string): boolean {
  try {
    const url = new URL(href);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

interface PageLinks {
  internal: string[];
  external: string[];
}

async function collectLinks(page: Page): Promise<PageLinks> {
  const internal: string[] = [];
  const external: string[] = [];
  for (const href of await collectHrefs(page)) {
    if (!isNavigableHref(href)) continue;
    if (isInternalUrl(href)) {
      internal.push(normalizePathname(href));
    } else if (isHttpUrl(href)) {
      external.push(href);
    }
  }
  return { internal, external };
}

export interface CrawledPage {
  pathname: string;
  status: number;
  finalPathname: string;
  redirected: boolean;
  error?: string;
  /** Absolute http(s)-Links auf fremde Origins, wie sie im HTML stehen. */
  externalLinks: string[];
}

/**
 * Crawl the entire site starting from "/" with concurrent page visits.
 * Uses a pool of browser pages to visit multiple URLs in parallel.
 */
export async function crawlSite(
  page: Page,
  onPage?: (crawled: CrawledPage) => void,
): Promise<CrawledPage[]> {
  const context = page.context();
  const visited = new Set<string>();
  const queued = new Set<string>();
  const toVisit: string[] = ["/"];
  queued.add("/");
  const results: CrawledPage[] = [];

  // Create a pool of pages
  const pages: Page[] = [page];
  for (let i = 1; i < CONCURRENCY; i++) {
    pages.push(await context.newPage());
  }
  const available = [...pages];

  async function visitPage(
    browserPage: Page,
    pathname: string,
  ): Promise<void> {
    try {
      const response = await browserPage.goto(`${BASE_URL}${pathname}`, {
        waitUntil: "domcontentloaded",
        timeout: 30_000,
      });

      const status = response?.status() ?? 0;
      const finalPathname = new URL(browserPage.url()).pathname;
      const crawled: CrawledPage = {
        pathname,
        status,
        finalPathname,
        redirected: finalPathname !== pathname,
        externalLinks: [],
      };

      if (status < 400) {
        const links = await collectLinks(browserPage);
        crawled.externalLinks = links.external;
        for (const link of links.internal) {
          if (!visited.has(link) && !queued.has(link)) {
            queued.add(link);
            toVisit.push(link);
          }
        }
      }

      results.push(crawled);
      onPage?.(crawled);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      const crawled: CrawledPage = {
        pathname,
        status: 0,
        finalPathname: pathname,
        redirected: false,
        error: message,
        externalLinks: [],
      };
      results.push(crawled);
      onPage?.(crawled);
    }
  }

  while (toVisit.length > 0 || available.length < pages.length) {
    // Launch as many concurrent visits as we have available pages
    const tasks: Promise<void>[] = [];

    while (toVisit.length > 0 && available.length > 0) {
      const pathname = toVisit.shift()!;
      if (visited.has(pathname)) continue;
      visited.add(pathname);
      if (shouldSkip(pathname)) continue;

      const browserPage = available.pop()!;
      tasks.push(
        visitPage(browserPage, pathname).finally(() => {
          available.push(browserPage);
        }),
      );
    }

    if (tasks.length > 0) {
      await Promise.all(tasks);
    } else if (available.length < pages.length) {
      // Wait a tick for running tasks to complete
      await new Promise((r) => setTimeout(r, 50));
    } else {
      break;
    }
  }

  // Close extra pages (keep original)
  for (let i = 1; i < pages.length; i++) {
    await pages[i].close();
  }

  return results;
}

/**
 * Visit a fixed list of pathnames using the same page pool as crawlSite().
 *
 * Die SEO-Specs haben ihren zweiten Durchlauf bisher sequenziell auf einer
 * einzigen Page gefahren. Das skaliert linear mit der Seitenzahl und ist am
 * 2026-08-20 bei 187 Seiten in den 300s-Timeout des seo-audit-Projekts
 * gelaufen. Der Handler bekommt hier eine Page aus dem Pool, die Ergebnisse
 * behalten die Reihenfolge der Eingabe.
 */
export async function visitPathnames<T>(
  page: Page,
  pathnames: string[],
  handler: (browserPage: Page, pathname: string) => Promise<T>,
): Promise<T[]> {
  const context = page.context();
  const pages: Page[] = [page];
  for (let i = 1; i < Math.min(CONCURRENCY, pathnames.length); i++) {
    pages.push(await context.newPage());
  }

  const results = new Array<T>(pathnames.length);
  let next = 0;

  async function worker(browserPage: Page): Promise<void> {
    while (next < pathnames.length) {
      const index = next++;
      const pathname = pathnames[index];
      await browserPage.goto(`${BASE_URL}${pathname}`, {
        waitUntil: "domcontentloaded",
        timeout: 30_000,
      });
      results[index] = await handler(browserPage, pathname);
    }
  }

  try {
    await Promise.all(pages.map((p) => worker(p)));
  } finally {
    for (let i = 1; i < pages.length; i++) {
      await pages[i].close();
    }
  }

  return results;
}
