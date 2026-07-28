import type { NextConfig } from "next";
import { withBotId } from "botid/next/config";
import { collectRewriteRules } from "./lib/get-rewrites";

const nextConfig: NextConfig = {
  skipTrailingSlashRedirect: true,

  async rewrites() {
    const { rewrites } = collectRewriteRules();

    return [
      ...rewrites,
      {
        source: "/ingest/static/:path*",
        destination: "https://eu-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://eu.i.posthog.com/:path*",
      },
      {
        source: "/ingest/decide",
        destination: "https://eu.i.posthog.com/decide",
      },
    ];
  },

  async redirects() {
    const { redirects } = collectRewriteRules();
    return [
      ...redirects,
      // Legacy tool URLs → Tools liegen jetzt unter services/
      {
        source: "/tools/automation-tools/:slug*",
        destination: "/services/tools/:slug*",
        permanent: true,
      },
      {
        source: "/tools/grosshandel/:slug*",
        destination: "/services/tools/:slug*",
        permanent: true,
      },
      // Tools wurde unter Services verschoben
      {
        source: "/tools/:path*",
        destination: "/services/tools/:path*",
        permanent: true,
      },
      // ROI-Rechner gehört zum Großhandel
      {
        source: "/roi-rechner/:path*",
        destination: "/branchen/grosshandel/roi-rechner/:path*",
        permanent: true,
      },
      // PDL-Rückbau: Branche eingestellt
      {
        source: "/branchen/personaldienstleister/:path*",
        destination: "/branchen",
        permanent: true,
      },
      // Großhandel-Detailseiten hängen jetzt unter ki-agenten/chatbots/workflows
      {
        source: "/branchen/grosshandel/:slug(angebots-bot|invoice-bot)",
        destination: "/branchen/grosshandel/ki-agenten/:slug",
        permanent: true,
      },
      {
        source: "/branchen/grosshandel/ki-chatbot-grosshandel",
        destination: "/branchen/grosshandel/chatbots/ki-chatbot-grosshandel",
        permanent: true,
      },
      {
        source:
          "/branchen/grosshandel/:slug(auftragserfassung|bestellabwicklung|lagerverwaltung|3-wege-rechnungspruefung|zertifikatspruefung-lieferanten|ai-automation-with-easybill)",
        destination: "/branchen/grosshandel/workflows/:slug",
        permanent: true,
      },
      // Use-Cases wurde zu Branchen umbenannt. Detail-Slugs, die unter
      // /branchen nochmal umgezogen sind, VOR dem Catch-all direkt aufs
      // finale Ziel leiten — sonst laufen indexierte Alt-URLs über 2 Hops.
      {
        source:
          "/use-cases/steuerberater/:slug(mail-agent|mandantenkommunikation|jahresabschluss-ki)",
        destination: "/branchen/steuerberater/ki-agenten/:slug",
        permanent: true,
      },
      {
        source:
          "/use-cases/steuerberater/:slug(belegpruefung|dokumentenverarbeitung|datev-jira-task-orchestration|e-rechnung-verarbeitung|mandanten-onboarding)",
        destination: "/branchen/steuerberater/workflows/:slug",
        permanent: true,
      },
      {
        source: "/use-cases/grosshandel/:slug(angebots-bot|invoice-bot)",
        destination: "/branchen/grosshandel/ki-agenten/:slug",
        permanent: true,
      },
      {
        source: "/use-cases/grosshandel/ki-chatbot-grosshandel",
        destination: "/branchen/grosshandel/chatbots/ki-chatbot-grosshandel",
        permanent: true,
      },
      {
        source:
          "/use-cases/grosshandel/:slug(auftragserfassung|bestellabwicklung|lagerverwaltung|3-wege-rechnungspruefung|zertifikatspruefung-lieferanten|ai-automation-with-easybill)",
        destination: "/branchen/grosshandel/workflows/:slug",
        permanent: true,
      },
      {
        source: "/use-cases/:path*",
        destination: "/branchen/:path*",
        permanent: true,
      },
      {
        source: "/use-cases",
        destination: "/branchen",
        permanent: true,
      },
      // Steuerberater-Detailseiten hängen jetzt unter ki-agenten/ bzw. workflows/
      {
        source:
          "/branchen/steuerberater/:slug(mail-agent|mandantenkommunikation|jahresabschluss-ki)",
        destination: "/branchen/steuerberater/ki-agenten/:slug",
        permanent: true,
      },
      {
        source:
          "/branchen/steuerberater/:slug(belegpruefung|dokumentenverarbeitung|datev-jira-task-orchestration|e-rechnung-verarbeitung|mandanten-onboarding)",
        destination: "/branchen/steuerberater/workflows/:slug",
        permanent: true,
      },
      // Legacy short URL → DATEV use-case page
      {
        source: "/n8n-datev",
        destination: "/branchen/steuerberater/workflows/datev-jira-task-orchestration",
        permanent: true,
      },
      // Retired page → Angebot-/Value-Seite (still linked from Standorte)
      {
        source: "/unser-prozess",
        destination: "/mit-euch-wachsen",
        permanent: true,
      },
      // Alte URL → neuer value-driven Slug
      {
        source: "/warum-bluebatch",
        destination: "/mit-euch-wachsen",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com https://*.google-analytics.com https://js-eu1.hsforms.net https://static.hsappstatic.net https://*.hubspot.com https://*.hs-scripts.com https://*.hs-analytics.net https://*.hs-banner.com https://*.hsadspixel.net https://*.hubspotusercontent-eu1.net https://*.posthog.com https://connect.facebook.net",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://static.hsappstatic.net",
              "font-src 'self' data: https://fonts.gstatic.com https://static.hsappstatic.net",
              "img-src 'self' data: blob: https://*.google-analytics.com https://*.googletagmanager.com https://*.hsforms.com https://*.hubspot.com https://*.hs-analytics.net https://*.hs-banner.com https://*.hsadspixel.net https://*.hubspotusercontent-eu1.net https://track.hubspot.com https://www.facebook.com https://*.facebook.com",
              "media-src 'self' blob:",
              "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://www.loom.com https://loom.com https://js-eu1.hsforms.net https://*.hsforms.com https://meetings.hubspot.com https://*.hubspot.com https://www.facebook.com https://*.facebook.com",
              "connect-src 'self' https://*.google-analytics.com https://*.googletagmanager.com https://*.analytics.google.com https://analytics.google.com https://*.hsforms.com https://forms.hubspot.com https://*.hubspot.com https://*.hs-scripts.com https://*.hs-analytics.net https://*.hs-banner.com https://*.hsadspixel.net https://*.hubspotusercontent-eu1.net https://track.hubspot.com https://static.hsappstatic.net https://*.posthog.com https://connect.facebook.net https://www.facebook.com https://*.facebook.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self' https://*.hsforms.com https://forms.hubspot.com https://www.facebook.com https://*.facebook.com",
              "frame-ancestors 'self' https://eu.posthog.com https://*.posthog.com",
              "upgrade-insecure-requests",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default withBotId(nextConfig);
