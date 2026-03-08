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
  rewrites: RewriteOverride[];
}

/**
 * Crawl app/ directory for rewrite.site.ts files and collect rewrite rules.
 * Used in next.config.ts to generate Next.js rewrite rules.
 */
export function collectRewriteRules(): {
  source: string;
  destination: string;
}[] {
  const appDir = path.join(process.cwd(), "app");
  const rewriteFiles = findFiles(appDir, "rewrite.site.ts");
  const rules: { source: string; destination: string }[] = [];

  for (const filePath of rewriteFiles) {
    const content = fs.readFileSync(filePath, "utf-8");
    const sources = extractSources(content);
    const destination = filePathToRoute(filePath);

    for (const source of sources) {
      rules.push({
        source,
        destination: `${destination}?_rwsrc=${encodeURIComponent(source)}`,
      });
    }
  }

  return rules;
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

function filePathToRoute(filePath: string): string {
  const appDir = path.join(process.cwd(), "app");
  const relative = path.dirname(filePath).replace(appDir, "");
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
