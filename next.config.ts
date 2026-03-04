import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  skipTrailingSlashRedirect: true,

  async rewrites() {
    return [
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
            value: "ALLOW-FROM https://eu.posthog.com",
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
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://calendly.com https://assets.calendly.com https://*.googletagmanager.com https://*.google-analytics.com https://js-eu1.hsforms.net https://static.hsappstatic.net https://*.hubspot.com https://*.posthog.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://calendly.com https://assets.calendly.com https://static.hsappstatic.net",
              "font-src 'self' data: https://fonts.gstatic.com https://static.hsappstatic.net",
              "img-src 'self' data: blob: https://*.google-analytics.com https://*.googletagmanager.com https://*.hsforms.com https://*.hubspot.com",
              "media-src 'self' blob:",
              "frame-src 'self' https://calendly.com https://www.youtube.com https://www.youtube-nocookie.com https://www.loom.com https://loom.com https://js-eu1.hsforms.net https://*.hsforms.com https://meetings.hubspot.com https://*.hubspot.com",
              "connect-src 'self' https://calendly.com https://*.google-analytics.com https://*.googletagmanager.com https://*.analytics.google.com https://analytics.google.com https://*.hsforms.com https://forms.hubspot.com https://*.hubspot.com https://static.hsappstatic.net https://*.posthog.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self' https://*.hsforms.com https://forms.hubspot.com",
              "frame-ancestors https://eu.posthog.com https://*.posthog.com",
              "upgrade-insecure-requests",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
