import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { getMainRewriteMap } from "@/lib/get-rewrites";

const BASE_URL = "https://bluebatch.io";

interface RouteEntry {
  routePath: string;
  filePath: string;
}

function getRoutes(dir: string, basePath = ""): RouteEntry[] {
  const routes: RouteEntry[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    // Skip Next.js internal/private folders
    if (entry.name.startsWith("_")) continue;

    const fullPath = path.join(dir, entry.name);

    // Route groups: recurse without adding to URL path
    if (entry.name.startsWith("(")) {
      routes.push(...getRoutes(fullPath, basePath));
      continue;
    }

    const routePath = `${basePath}/${entry.name}`;
    const pagePath = path.join(fullPath, "page.tsx");

    // Check if this directory has a page.tsx (is an actual route)
    if (fs.existsSync(pagePath)) {
      routes.push({ routePath, filePath: pagePath });
    }

    // Recurse into subdirectories
    routes.push(...getRoutes(fullPath, routePath));
  }

  return routes;
}

/**
 * Check if a page exports metaCustom with publish: false.
 * Uses static file reading — works reliably without dynamic imports.
 */
function isUnpublished(filePath: string): boolean {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    // Only check pages that export metaCustom
    if (!content.includes("metaCustom")) return false;
    // Check for publish: false
    return /publish:\s*false/.test(content);
  } catch {
    return false;
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const appDir = path.join(process.cwd(), "app");
  const allRoutes = getRoutes(appDir);
  const mainRewriteMap = getMainRewriteMap();

  // Root page — check if it has a mainRewrite
  const rootRewrite = mainRewriteMap.get("/");
  const routes: MetadataRoute.Sitemap = [
    {
      url: rootRewrite ? `${BASE_URL}${rootRewrite}` : BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  for (const { routePath, filePath } of allRoutes) {
    if (isUnpublished(filePath)) continue;

    // If this route has a mainRewrite, use the flat URL instead
    const mainRewrite = mainRewriteMap.get(routePath);
    const url = mainRewrite
      ? `${BASE_URL}${mainRewrite}`
      : `${BASE_URL}${routePath}`;

    routes.push({
      url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: routePath.split("/").length <= 2 ? 0.8 : 0.6,
    });
  }

  return routes;
}
