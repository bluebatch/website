import fs from "fs";
import path from "path";

export interface RewriteOverride {
  source: string;
  preHeadline?: string;
  headline?: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
}

export interface RewriteSiteConfig {
  mainRewrite?: string;
  rewrites: RewriteOverride[];
}

interface CollectedRules {
  rewrites: { source: string; destination: string }[];
  redirects: {
    source: string;
    destination: string;
    permanent: boolean;
  }[];
  disallowPaths: string[];
}

/**
 * Crawl app/ directory for page.tsx files that export rewriteSiteConfig,
 * and also legacy rewrite.site.ts files.
 * Returns rewrites, redirects (301 for mainRewrite), and disallow paths.
 *
 * Build will FAIL if two pages produce the same rewrite source URL.
 */
export function collectRewriteRules(): CollectedRules {
  const appDir = path.join(process.cwd(), "app");
  const pageFiles = findFiles(appDir, "page.tsx");
  const legacyFiles = findFiles(appDir, "rewrite.site.ts");

  const rewrites: CollectedRules["rewrites"] = [];
  const redirects: CollectedRules["redirects"] = [];
  const disallowPaths: string[] = [];

  // Track all sources for duplicate detection
  const seenSources = new Map<string, string>();

  function registerSource(source: string, destination: string) {
    const existing = seenSources.get(source);
    if (existing && existing !== destination) {
      throw new Error(
        `Duplicate rewrite URL: "${source}" maps to both "${existing}" and "${destination}". Each rewrite source must be unique.`,
      );
    }
    seenSources.set(source, destination);
  }

  // Process page.tsx files for rewriteSiteConfig
  for (const filePath of pageFiles) {
    const content = fs.readFileSync(filePath, "utf-8");
    if (!content.includes("rewriteSiteConfig")) continue;

    const route = pageFileToRoute(filePath);
    const mainRewrite = extractMainRewrite(content);
    const sources = extractSources(content);

    // mainRewrite: flat URL becomes the canonical entry point
    if (mainRewrite) {
      registerSource(mainRewrite, route);

      // Rewrite: /flat-url → /folder/path (invisible, serves the page)
      rewrites.push({
        source: mainRewrite,
        destination: `${route}?_rwsrc=${encodeURIComponent(mainRewrite)}`,
      });

      // Redirect is handled by enforceMainRewrite() in the page component.
      // We only track disallowPaths for robots.txt.
      if (route !== "/") {
        disallowPaths.push(route);
      }
    }

    // Additional rewrites (keyword aliases)
    for (const source of sources) {
      registerSource(source, route);
      rewrites.push({
        source,
        destination: `${route}?_rwsrc=${encodeURIComponent(source)}`,
      });
    }
  }

  // Process legacy rewrite.site.ts files (backwards compatibility)
  for (const filePath of legacyFiles) {
    const content = fs.readFileSync(filePath, "utf-8");
    const sources = extractSources(content);
    const route = rewriteFileToRoute(filePath);
    const mainRewrite = extractMainRewrite(content);

    if (mainRewrite) {
      registerSource(mainRewrite, route);
      rewrites.push({
        source: mainRewrite,
        destination: `${route}?_rwsrc=${encodeURIComponent(mainRewrite)}`,
      });
      if (route !== "/") {
        disallowPaths.push(route);
      }
    }

    for (const source of sources) {
      registerSource(source, route);
      rewrites.push({
        source,
        destination: `${route}?_rwsrc=${encodeURIComponent(source)}`,
      });
    }
  }

  return { rewrites, redirects, disallowPaths };
}

/**
 * Get the canonical URL for a page route.
 * If the page has a mainRewrite, return that. Otherwise return the route itself.
 */
export function getCanonicalUrl(
  route: string,
  config?: RewriteSiteConfig,
): string {
  if (config?.mainRewrite) return config.mainRewrite;
  return route;
}

/**
 * Get all mainRewrite mappings: route → mainRewrite URL.
 * Used by sitemap and navigation.
 */
export function getMainRewriteMap(): Map<string, string> {
  const appDir = path.join(process.cwd(), "app");
  const pageFiles = findFiles(appDir, "page.tsx");
  const legacyFiles = findFiles(appDir, "rewrite.site.ts");
  const map = new Map<string, string>();

  for (const filePath of pageFiles) {
    const content = fs.readFileSync(filePath, "utf-8");
    if (!content.includes("rewriteSiteConfig")) continue;
    const mainRewrite = extractMainRewrite(content);
    if (mainRewrite) {
      map.set(pageFileToRoute(filePath), mainRewrite);
    }
  }

  for (const filePath of legacyFiles) {
    const content = fs.readFileSync(filePath, "utf-8");
    const mainRewrite = extractMainRewrite(content);
    if (mainRewrite) {
      map.set(rewriteFileToRoute(filePath), mainRewrite);
    }
  }

  return map;
}

function findFiles(dir: string, filename: string): string[] {
  const results: string[] = [];

  function walk(currentDir: string) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.name === filename) {
        results.push(fullPath);
      }
    }
  }

  walk(dir);
  return results;
}

function extractSources(content: string): string[] {
  const sources: string[] = [];
  const regex = /source:\s*["']([^"']+)["']/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    sources.push(match[1]);
  }
  return sources;
}

function extractMainRewrite(content: string): string | null {
  const match = content.match(/mainRewrite:\s*["']([^"']+)["']/);
  return match ? match[1] : null;
}

function pageFileToRoute(filePath: string): string {
  const appDir = path.join(process.cwd(), "app");
  // page.tsx is inside the route directory, so go up one level
  let relative = path.dirname(filePath).replace(appDir, "");
  // Strip Next.js route groups like (grosshandel) from the path
  relative = relative.replace(/\/\([^)]+\)/g, "");
  return relative || "/";
}

function rewriteFileToRoute(filePath: string): string {
  const appDir = path.join(process.cwd(), "app");
  let relative = path.dirname(filePath).replace(appDir, "");
  relative = relative.replace(/\/\([^)]+\)/g, "");
  return relative || "/";
}

/**
 * Get rewrite overrides for the current request based on searchParams.
 * Used in page components to detect rewritten URLs and apply overrides.
 */
export function getRewriteOverrides(
  config: RewriteSiteConfig,
  searchParams: Record<string, string | string[] | undefined>,
): RewriteOverride | null {
  const rwsrc =
    typeof searchParams._rwsrc === "string" ? searchParams._rwsrc : null;
  if (!rwsrc) return null;
  return config.rewrites.find((r) => r.source === rwsrc) ?? null;
}
