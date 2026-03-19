import type { Page, BrowserContext } from "@playwright/test";

export const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
export const BASE_ORIGIN = new URL(BASE_URL).origin;
export const CANONICAL_ORIGIN = "https://bluebatch.io";

const SKIP_EXTENSIONS = /\.(xml|json|ico|png|jpg|svg|css|js|woff|woff2|ttf|webp)$/i;
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

async function collectLinks(page: Page): Promise<string[]> {
  const hrefs: string[] = [];
  const links = await page.locator("a[href]").all();
  for (const link of links) {
    const href = await link.getAttribute("href");
    if (!href || !isNavigableHref(href) || !isInternalUrl(href)) continue;
    hrefs.push(normalizePathname(href));
  }
  return hrefs;
}

export interface CrawledPage {
  pathname: string;
  status: number;
  finalPathname: string;
  redirected: boolean;
  error?: string;
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
      };

      results.push(crawled);
      onPage?.(crawled);

      if (status < 400) {
        const links = await collectLinks(browserPage);
        for (const link of links) {
          if (!visited.has(link) && !queued.has(link)) {
            queued.add(link);
            toVisit.push(link);
          }
        }
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      const crawled: CrawledPage = {
        pathname,
        status: 0,
        finalPathname: pathname,
        redirected: false,
        error: message,
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
