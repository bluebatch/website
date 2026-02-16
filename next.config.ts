import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
            value: "DENY",
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
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://calendly.com https://assets.calendly.com https://*.googletagmanager.com https://*.google-analytics.com https://js-eu1.hsforms.net",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://calendly.com https://assets.calendly.com",
              "font-src 'self' data: https://fonts.gstatic.com",
              "img-src 'self' data: blob: https://*.google-analytics.com https://*.googletagmanager.com",
              "media-src 'self' blob:",
              "frame-src 'self' https://calendly.com https://www.youtube.com https://www.youtube-nocookie.com https://www.loom.com https://loom.com https://js-eu1.hsforms.net https://*.hsforms.com",
              "connect-src 'self' https://calendly.com https://*.google-analytics.com https://*.googletagmanager.com https://*.analytics.google.com https://analytics.google.com https://*.hsforms.com https://forms.hubspot.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self' https://*.hsforms.com https://forms.hubspot.com",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
