import { test, expect } from "@playwright/test";
import { crawlSite } from "../helpers/crawl";

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

  // Bis 2026-09-18 lief der Sammel-Crawl hier sequenziell auf einer einzigen
  // Page mit einem getAttribute-Round-Trip pro Link — doppelt so langsam wie
  // crawlSite() bei identischer Seitenmenge (6,5 min sauber, 10 min = Timeout
  // unter Last, während derselbe Crawl im internen Check 4 min brauchte).
  // Der Sechser-Pool aus crawlSite() liefert die externen Links jetzt mit.
  const externalLinks = new Map<string, string[]>();
  const crawled = await crawlSite(page);
  for (const { pathname, externalLinks: hrefs } of crawled) {
    for (const href of hrefs) {
      const pages = externalLinks.get(href) || [];
      pages.push(pathname);
      externalLinks.set(href, pages);
    }
  }

  // 2026-10-30: 22 YouTube-Links (alle dasselbe Video, nur &t=/&lc= anders)
  // antworteten nicht. Sequenziell mit 3 Versuchen à 15 s + Backoff sind das
  // ~51 s pro URL, zusammen ~19 min — der Lauf sprengte das Pipeline-Timeout.
  // Deshalb: (1) Links auf ihr Ziel normalisieren (Fragment weg, YouTube nur
  // per Video-ID), (2) parallel prüfen, (3) pro Host abbrechen, sobald der Host
  // selbst nicht erreichbar ist, (4) festes Zeitbudget für den ganzen Check.
  const targets = new Map<string, { urls: string[]; pages: Set<string> }>();
  for (const [url, pages] of externalLinks) {
    const key = normalizeTarget(url);
    const entry = targets.get(key) || { urls: [], pages: new Set<string>() };
    entry.urls.push(url);
    pages.forEach((p) => entry.pages.add(p));
    targets.set(key, entry);
  }

  console.log(
    `\nChecking ${targets.size} external targets (${externalLinks.size} unique links)...\n`,
  );

  const broken: { url: string; status: number; pages: string[] }[] = [];
  const unreachable: { url: string; pages: string[] }[] = [];
  const skipped: string[] = [];

  // A single failed request does NOT mean the link is dead. On 2026-09-03 the
  // last 9 URLs of the list threw in one block (docs.n8n.io, github.com/n8n-io,
  // discord.gg, youtube.com) and every one of them answered 200 seconds later —
  // the run before had checked the same 26 URLs green. That is a rate-limit /
  // network blip, not broken content, and the old catch-all turned it into a red
  // suite. Retry with backoff, and alternate HEAD/GET because some hosts refuse
  // HEAD outright.
  const ATTEMPTS = 3;
  const REQUEST_TIMEOUT = 10_000;
  const CONCURRENCY = 6;
  const BUDGET_MS = 240_000;
  const deadline = Date.now() + BUDGET_MS;
  const deadHosts = new Set<string>();

  async function probe(url: string): Promise<number | null> {
    for (let attempt = 0; attempt < ATTEMPTS; attempt++) {
      if (attempt > 0) {
        await new Promise((r) => setTimeout(r, 2_000 * attempt));
      }
      if (Date.now() > deadline) return null;
      try {
        const response =
          attempt % 2 === 0
            ? await page.request.head(url, { timeout: REQUEST_TIMEOUT })
            : await page.request.get(url, { timeout: REQUEST_TIMEOUT });
        return response.status();
      } catch {
        // try again
      }
    }
    return null;
  }

  const queue = [...targets.entries()];
  async function worker() {
    for (let next = queue.shift(); next; next = queue.shift()) {
      const [key, { urls, pages }] = next;
      const host = new URL(key).host;
      if (Date.now() > deadline || deadHosts.has(host)) {
        skipped.push(key);
        continue;
      }
      const status = await probe(key);
      const where = [...pages].join(", ");
      const label = urls.length > 1 ? `${key} (${urls.length} links)` : key;

      if (status === null) {
        if (Date.now() > deadline) {
          skipped.push(key);
          continue;
        }
        deadHosts.add(host);
        unreachable.push({ url: key, pages: [...pages] });
        console.log(`  UNREACHABLE: ${label} after ${ATTEMPTS} attempts (on: ${where})`);
        continue;
      }

      // Many sites (LinkedIn, etc.) return 999/403/429 for bots — that's fine,
      // it means the URL exists. Only 404/410 are actual broken links.
      if (status === 404 || status === 410) {
        broken.push({ url: key, status, pages: [...pages] });
        console.log(`  BROKEN: ${label} → ${status} (on: ${where})`);
      } else {
        console.log(`  OK: ${label} → ${status}`);
      }
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  // Nicht erreichbar heißt: kein HTTP-Status, nach allen Versuchen. Das ist im
  // Pipeline-Container meist Netz/Rate-Limit und kein toter Link — deshalb nur
  // Warnung. Mit STRICT_EXTERNAL_LINKS=1 zählt es als Fehler (z. B. lokal, um
  // eine wirklich tote Domain zu finden).
  if (unreachable.length || skipped.length) {
    test.info().annotations.push({
      type: "warning",
      description: `Externe Links nicht geprüft: ${unreachable.length} nicht erreichbar (${[...deadHosts].join(", ")}), ${skipped.length} übersprungen`,
    });
    console.log(
      `\nUnreachable: ${unreachable.length}, skipped (dead host / budget): ${skipped.length}`,
    );
  }
  if (process.env.STRICT_EXTERNAL_LINKS === "1") {
    unreachable.forEach(({ url, pages }) => broken.push({ url, status: 0, pages }));
  }

  console.log(`\nBroken external links: ${broken.length}`);
  expect(broken, "Broken external links found").toHaveLength(0);
});

/**
 * Ziel eines externen Links: Fragment weg, YouTube-Links auf die Video-ID
 * reduziert (&t=, &lc=, youtu.be zeigen alle auf dieselbe Seite).
 */
function normalizeTarget(href: string): string {
  try {
    const url = new URL(href);
    url.hash = "";
    const host = url.hostname.replace(/^(www\.|m\.)/, "");
    let videoId: string | null = null;
    if (host === "youtube.com" && url.pathname === "/watch") {
      videoId = url.searchParams.get("v");
    } else if (host === "youtu.be") {
      videoId = url.pathname.slice(1);
    }
    if (videoId) return `https://www.youtube.com/watch?v=${videoId}`;
    return url.toString();
  } catch {
    return href;
  }
}
