import type { MetadataRoute } from "next";
import { collectRewriteRules } from "@/lib/get-rewrites";

export default function robots(): MetadataRoute.Robots {
  const { disallowPaths } = collectRewriteRules();

  // For each disallowed path, allow its subpages (longer prefix wins in robots.txt)
  const allowPaths = [
    "/",
    ...disallowPaths.map((p) => `${p}/`),
  ];

  return {
    rules: {
      userAgent: "*",
      allow: allowPaths,
      disallow: disallowPaths,
    },
    sitemap: "https://bluebatch.io/sitemap.xml",
  };
}
