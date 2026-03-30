import fs from "fs";
import path from "path";
import type { Page } from "@playwright/test";
import { BASE_ORIGIN, isInternalUrl, normalizePathname } from "../helpers/crawl";

// ─── Results File ──────────────────────────────────────────

const RESULTS_DIR = path.join(__dirname, "..", "results");
const RESULTS_JSON = path.join(RESULTS_DIR, "seo-scores.json");

export interface TestResult {
  test: string;
  score: number;
  threshold: number;
  passed: boolean;
  details: string[];
  timestamp: string;
}

/**
 * Persist a test score to the shared results JSON file.
 * Call this at the end of each SEO test.
 */
export function reportScore(
  testName: string,
  score: number,
  threshold: number,
  details: string[] = [],
): void {
  fs.mkdirSync(RESULTS_DIR, { recursive: true });

  let results: TestResult[] = [];
  if (fs.existsSync(RESULTS_JSON)) {
    try {
      results = JSON.parse(fs.readFileSync(RESULTS_JSON, "utf-8"));
    } catch {
      results = [];
    }
  }

  // Replace existing entry for this test or add new
  results = results.filter((r) => r.test !== testName);
  results.push({
    test: testName,
    score,
    threshold,
    passed: score >= threshold,
    details,
    timestamp: new Date().toISOString(),
  });

  // Sort by test name for consistency
  results.sort((a, b) => a.test.localeCompare(b.test));

  fs.writeFileSync(RESULTS_JSON, JSON.stringify(results, null, 2));

  // Also write markdown summary
  writeMarkdownReport(results);
}

function writeMarkdownReport(results: TestResult[]): void {
  const now = new Date().toISOString().slice(0, 16).replace("T", " ");
  const overallScore = results.length > 0
    ? Math.round(results.reduce((sum, r) => sum + r.score, 0) / results.length)
    : 0;
  const allPassed = results.every((r) => r.passed);

  let md = `# SEO Audit Results\n\n`;
  md += `**Date:** ${now}  \n`;
  md += `**Overall Score:** ${overallScore}/100 ${allPassed ? "\u{1F44D}" : "\u{1F44E}"}\n\n`;

  md += `| # | Test | Score | Threshold | Result |\n`;
  md += `|---|------|-------|-----------|--------|\n`;
  results.forEach((r, i) => {
    const emoji = r.passed ? "\u2705" : "\u274C";
    md += `| ${i + 1} | ${r.test} | ${r.score}/100 | ${r.threshold} | ${emoji} |\n`;
  });

  // Details section
  const failing = results.filter((r) => !r.passed);
  if (failing.length > 0) {
    md += `\n## Issues to Fix\n\n`;
    for (const r of failing) {
      md += `### ${r.test} (${r.score}/100)\n\n`;
      for (const d of r.details.slice(0, 20)) {
        md += `- ${d}\n`;
      }
      if (r.details.length > 20) {
        md += `- ... and ${r.details.length - 20} more\n`;
      }
      md += `\n`;
    }
  }

  // Passing tests details
  const passing = results.filter((r) => r.passed);
  if (passing.length > 0) {
    md += `## Passing Tests\n\n`;
    for (const r of passing) {
      md += `### ${r.test} (${r.score}/100)\n\n`;
      for (const d of r.details.slice(0, 10)) {
        md += `- ${d}\n`;
      }
      if (r.details.length > 10) {
        md += `- ... and ${r.details.length - 10} more\n`;
      }
      md += `\n`;
    }
  }

  fs.writeFileSync(path.join(RESULTS_DIR, "seo-report.md"), md);
}

// ─── Scoring ───────────────────────────────────────────────

export function computeScore(value: number, max: number): number {
  if (max <= 0) return 100;
  return Math.round(Math.min(value / max, 1) * 100);
}

export function verdict(score: number, threshold: number): string {
  const emoji = score >= threshold ? "\u{1F44D}" : "\u{1F44E}";
  const label = score >= threshold ? "PASS" : "FAIL";
  return `${emoji} ${label} — Score: ${score}/100 (threshold: ${threshold})`;
}

// ─── Link Collection ───────────────────────────────────────

export interface CollectedLink {
  href: string;
  text: string;
  location: "body" | "nav" | "footer" | "other";
}

/**
 * Collect all internal links from a page, categorized by location.
 */
export async function collectPageLinks(page: Page): Promise<CollectedLink[]> {
  return page.evaluate((origin: string) => {
    const links: { href: string; text: string; location: string }[] = [];

    document.querySelectorAll("a[href]").forEach((a) => {
      const href = a.getAttribute("href");
      if (!href) return;

      // Check if internal
      try {
        const url = new URL(href, window.location.origin);
        if (url.origin !== origin) return;
      } catch {
        if (href.startsWith("http")) return; // external
      }

      // Skip non-navigable
      if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;

      // Determine location: anything not in nav/footer/header is "body"
      let location = "body";
      const el = a as HTMLElement;
      if (el.closest("nav")) location = "nav";
      else if (el.closest("footer")) location = "footer";
      else if (el.closest("header")) location = "nav";

      // Get text (innerText, img alt, or aria-label)
      let text = (el.innerText || "").trim();
      if (!text) {
        const img = el.querySelector("img");
        if (img) text = img.alt || "";
      }
      if (!text) {
        text = el.getAttribute("aria-label") || "";
      }

      links.push({ href, text, location });
    });

    return links as { href: string; text: string; location: "body" | "nav" | "footer" | "other" }[];
  }, BASE_ORIGIN);
}

/**
 * Extract just the internal link hrefs from a page (normalized pathnames).
 */
export async function collectLinkHrefs(page: Page): Promise<string[]> {
  const links = await collectPageLinks(page);
  return links.map((l) => {
    try {
      return normalizePathname(l.href);
    } catch {
      return l.href;
    }
  });
}

// ─── Hub Discovery ─────────────────────────────────────────

export interface Hub {
  /** Folder route, e.g. "/blog" */
  route: string;
  /** Canonical URL (mainRewrite or route), e.g. "/blog-workflow" */
  canonicalUrl: string;
  /** Children with their folder routes and canonical URLs */
  children: { route: string; canonicalUrl: string }[];
}

/**
 * Discover content hubs from the app/ directory structure.
 * A hub = directory with page.tsx AND subdirectories that also have page.tsx.
 * Route groups like (grosshandel) are transparent.
 */
export function discoverHubs(): Hub[] {
  const appDir = path.join(process.cwd(), "app");
  const hubs: Hub[] = [];

  // Build the canonical URL map (same logic as get-canonical-path.ts)
  const canonicalMap = buildCanonicalMap(appDir);

  function getCanonical(route: string): string {
    return canonicalMap.get(route) ?? route;
  }

  function findChildPages(dir: string, parentRoute: string): { route: string; canonicalUrl: string }[] {
    const children: { route: string; canonicalUrl: string }[] = [];
    if (!fs.existsSync(dir)) return children;

    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      if (entry.name.startsWith("_") || entry.name.startsWith("[")) continue;

      const fullPath = path.join(dir, entry.name);

      // Route group — recurse transparently
      if (entry.name.startsWith("(")) {
        children.push(...findChildPages(fullPath, parentRoute));
        continue;
      }

      const childRoute = `${parentRoute}/${entry.name}`;
      const childPage = path.join(fullPath, "page.tsx");
      if (fs.existsSync(childPage)) {
        children.push({ route: childRoute, canonicalUrl: getCanonical(childRoute) });
      }
    }
    return children;
  }

  function walk(dir: string, currentRoute: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      if (entry.name.startsWith("_") || entry.name.startsWith("[")) continue;

      const fullPath = path.join(dir, entry.name);

      // Route group — recurse transparently
      if (entry.name.startsWith("(")) {
        walk(fullPath, currentRoute);
        continue;
      }

      const route = `${currentRoute}/${entry.name}`;
      const pagePath = path.join(fullPath, "page.tsx");

      if (fs.existsSync(pagePath)) {
        const children = findChildPages(fullPath, route);
        if (children.length > 0) {
          hubs.push({
            route,
            canonicalUrl: getCanonical(route),
            children,
          });
        }
      }

      // Continue walking to find nested hubs (e.g. /use-cases/grosshandel)
      walk(fullPath, route);
    }
  }

  walk(appDir, "");
  return hubs;
}

function buildCanonicalMap(appDir: string): Map<string, string> {
  const map = new Map<string, string>();

  function walk(dir: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      if (entry.name.startsWith("_")) continue;

      const fullPath = path.join(dir, entry.name);

      if (entry.name.startsWith("(")) {
        walk(fullPath);
        continue;
      }

      const pagePath = path.join(fullPath, "page.tsx");
      if (fs.existsSync(pagePath)) {
        const content = fs.readFileSync(pagePath, "utf-8");
        const match = content.match(/mainRewrite:\s*["']([^"']+)["']/);
        if (match) {
          let route = fullPath.replace(appDir, "");
          route = route.replace(/\/\([^)]+\)/g, "");
          map.set(route, match[1]);
        }
      }

      walk(fullPath);
    }
  }

  walk(appDir);
  return map;
}
