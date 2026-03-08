# LLM-Based Fallback Routing

## Problem

Users or crawlers may hit non-existent URLs that are semantically close to real pages (e.g. `/mein-team`, `/das-team`, `/members` should all serve `/team`). Currently these return a 404.

## Solution

A middleware-based fallback that uses an LLM (GPT-4o-mini) to match unknown paths to existing routes. The result is a **rewrite** (not redirect), so the user keeps the original URL in the address bar. SEO deduplication is handled by the canonical tag on the target page.

## Routing Priority

```
Request hits Next.js Middleware
  1. Exact match      → app/[route]/page.tsx          → serve (next())
  2. Rewrite match    → rewrite.site.ts rules         → rewrite & serve
  3. KV cache hit     → previously resolved by LLM    → rewrite to cached target
  4. KV "no-match"    → previously rejected by LLM    → 404
  5. LLM API call     → GPT-4o-mini determines match  → rewrite or 404
```

## Architecture

### Files to Create

| File | Purpose |
|---|---|
| `lib/llm-router/get-route-registry.ts` | Build-time script: collects all routes + `pageConfig` (title, description) into a static JSON |
| `generated/route-registry.json` | Auto-generated route list with metadata (gitignored) |
| `lib/llm-router/llm-route-matcher.ts` | Calls GPT-4o-mini with the route registry and requested path, returns `{match, confidence}` |
| `lib/llm-router/kv-route-cache.ts` | Vercel KV read/write helpers for caching LLM decisions |
| `middleware.ts` | Orchestrates the full routing chain (update existing or create) |

### Route Registry (Build-Time)

Crawl `app/` directory at build time and collect all valid page routes with their `pageConfig` exports (title + description). Output to `generated/route-registry.json`:

```json
[
  { "path": "/team", "title": "Unser Team", "description": "..." },
  { "path": "/use-cases/grosshandel/angebots-bot", "title": "Angebots-Bot", "description": "..." },
  { "path": "/blog", "title": "Blog", "description": "..." }
]
```

Add a `prebuild` script to `package.json` to regenerate this file on every build.

### LLM Call (GPT-4o-mini)

**Model**: `gpt-4o-mini` — ~$0.15/1M input tokens, ~200ms latency, sufficient for route matching.

**Prompt**:

```
You are a URL router for a German B2B website. Given the available routes below,
determine which route best matches the user's requested path. Consider semantic
meaning in both German and English, not just string similarity.

Available routes:
- /team — "Unser Team"
- /use-cases/grosshandel/angebots-bot — "Angebots-Bot"
- /use-cases/grosshandel/bestellabwicklung — "Automatisierte Bestellabwicklung"
- /blog — "Blog"

Requested path: /mein-team

Respond with JSON only: {"match": "/team", "confidence": 0.95}
If no route fits: {"match": null, "confidence": 0}
```

**Response parsing**: Extract `match` and `confidence` from JSON response. Confidence threshold: **0.7**.

### Vercel KV Cache

- **Key format**: `llm-route:{path}` (e.g. `llm-route:/mein-team`)
- **Value**: `{ "target": "/team" }` or `{ "target": null }` (no match)
- **TTL**: Unlimited (no expiry)
- **Cache invalidation**: Flush all `llm-route:*` keys on deployment via a postbuild script or Vercel deploy hook

### Middleware Flow

```typescript
// middleware.ts (pseudocode)

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // 1. Skip static assets, API routes, _next
  if (isStaticOrInternal(path)) return NextResponse.next();

  // 2. Skip known pages (check against route registry)
  if (isKnownRoute(path)) return NextResponse.next();

  // 3. Skip known rewrite rules (already handled by next.config.ts)
  //    These are handled before middleware, so no action needed

  // 4. Check KV cache
  const cached = await kvGet(`llm-route:${path}`);
  if (cached !== undefined) {
    if (cached.target === null) {
      // Previously determined: no match → 404
      return NextResponse.rewrite(new URL('/404', request.url));
    }
    // Rewrite to cached target
    return NextResponse.rewrite(new URL(cached.target, request.url));
  }

  // 5. Rate limit check (max 60 LLM calls/minute)
  if (await isRateLimited()) {
    return NextResponse.rewrite(new URL('/404', request.url));
  }

  // 6. Call LLM
  const result = await matchRouteWithLLM(path, routeRegistry);

  if (result.confidence >= 0.7 && result.match) {
    await kvSet(`llm-route:${path}`, { target: result.match });
    return NextResponse.rewrite(new URL(result.match, request.url));
  } else {
    await kvSet(`llm-route:${path}`, { target: null });
    return NextResponse.rewrite(new URL('/404', request.url));
  }
}
```

## SEO Considerations

- **Rewrite, not redirect**: User sees `/mein-team` in URL bar, page content is `/team`
- **Canonical tag**: The target page's canonical tag (`/team`) tells search engines the authoritative URL
- **No duplicate content risk**: Canonical handles deduplication
- **Crawl budget**: Cached "no-match" responses prevent repeated LLM calls from bot crawls

## Cost & Performance

| Metric | Value |
|---|---|
| LLM latency | ~200-500ms (first hit only) |
| LLM cost | ~$0.15/1M input tokens (~$0.001 per call) |
| KV cache hit | ~1-5ms |
| KV storage | Vercel KV free tier: 30k requests/month |
| Cache invalidation | On every deployment |

## Rate Limiting

- Max 60 LLM calls per minute (configurable)
- Prevents abuse from bots crawling random paths
- Rate limit counter in Vercel KV with short TTL (60s)

## Cache Invalidation on Deploy

Add to `package.json`:

```json
{
  "scripts": {
    "postbuild": "node scripts/flush-llm-route-cache.mjs"
  }
}
```

The script calls Vercel KV and deletes all keys with prefix `llm-route:`. This ensures new/renamed routes are picked up after deployment.

## Dependencies to Add

- `openai` — GPT-4o-mini API client
- `@vercel/kv` — Vercel KV client

## Environment Variables

- `OPENAI_API_KEY` — for GPT-4o-mini calls
- `KV_REST_API_URL` — Vercel KV (auto-set when linked)
- `KV_REST_API_TOKEN` — Vercel KV (auto-set when linked)

## Open Questions

- Should LLM-routed rewrites also support `preHeadline`/`headline` overrides (like `rewrite.site.ts`)? Probably not — the LLM match is a convenience fallback, not a content variation.
- Should we log LLM-matched paths to identify popular aliases and promote them to proper `rewrite.site.ts` entries?
- Consider a simple string-similarity check (Levenshtein) before the LLM call to catch obvious typos without API cost.
