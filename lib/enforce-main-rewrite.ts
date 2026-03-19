import { permanentRedirect } from "next/navigation";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";

/**
 * If this page has a mainRewrite and is being accessed via its folder path
 * (not via the rewrite), permanently redirect to the mainRewrite URL.
 *
 * Call at the top of any page component that has mainRewrite:
 *
 *   export default async function Page({ searchParams }) {
 *     await enforceMainRewrite(rewriteSiteConfig, searchParams);
 *     return <> ... </>;
 *   }
 */
export async function enforceMainRewrite(
  config: RewriteSiteConfig,
  searchParams: Promise<Record<string, string | string[] | undefined>>,
): Promise<void> {
  if (!config.mainRewrite) return;

  const params = await searchParams;
  // If _rwsrc is present, this is a rewritten request — don't redirect
  if (params._rwsrc) return;

  // This is a direct folder-path visit — redirect to the canonical URL
  permanentRedirect(config.mainRewrite);
}
