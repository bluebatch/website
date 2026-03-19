import type { MetadataRoute } from "next";
import { collectRewriteRules } from "@/lib/get-rewrites";

export default function robots(): MetadataRoute.Robots {
  const { disallowPaths } = collectRewriteRules();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: disallowPaths,
    },
    sitemap: "https://bluebatch.io/sitemap.xml",
  };
}
