import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const BASE_URL = "https://bluebatch.io";

function getRoutes(dir: string, basePath = ""): string[] {
  const routes: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    // Skip Next.js internal/private folders and route groups
    if (entry.name.startsWith("_") || entry.name.startsWith("(")) continue;

    const fullPath = path.join(dir, entry.name);
    const routePath = `${basePath}/${entry.name}`;

    // Check if this directory has a page.tsx (is an actual route)
    const hasPage = fs.existsSync(path.join(fullPath, "page.tsx"));
    if (hasPage) {
      routes.push(routePath);
    }

    // Recurse into subdirectories
    routes.push(...getRoutes(fullPath, routePath));
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), "app");
  const dynamicRoutes = getRoutes(appDir);

  // Root page
  const routes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  for (const route of dynamicRoutes) {
    routes.push({
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: route.split("/").length <= 2 ? 0.8 : 0.6,
    });
  }

  return routes;
}
