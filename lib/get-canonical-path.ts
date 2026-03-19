import fs from "fs";
import path from "path";

/**
 * Build a map of folder paths → mainRewrite URLs at import time.
 * Used by components to resolve links to their canonical flat URL.
 *
 * Usage:
 *   import { resolveHref } from "@/lib/get-canonical-path";
 *   <Link href={resolveHref(`/standorte/${city.slug}`)}>
 */

let _cache: Map<string, string> | null = null;

function buildMap(): Map<string, string> {
  if (_cache) return _cache;

  const map = new Map<string, string>();
  const appDir = path.join(process.cwd(), "app");

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
  _cache = map;
  return map;
}

/**
 * Resolve a folder path to its mainRewrite URL if one exists.
 * If no mainRewrite, returns the original path unchanged.
 *
 * @example
 * resolveHref("/standorte/berlin") // → "/ki-agentur-berlin"
 * resolveHref("/team")             // → "/team" (no mainRewrite)
 */
export function resolveHref(folderPath: string): string {
  const map = buildMap();
  return map.get(folderPath) ?? folderPath;
}
