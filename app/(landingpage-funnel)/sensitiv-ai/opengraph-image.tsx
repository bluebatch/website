import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

// Dynamisch generiertes Link-Vorschaubild für /sensitiv-ai. Next setzt daraus
// automatisch die og:image / twitter:image Meta-Tags (auch bei noindex).
export const runtime = "nodejs";
export const alt = "Claude für sensible Daten — DSGVO- & § 203-StGB-konform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = readFileSync(
    join(process.cwd(), "public/logo/Bluebatch_white-with-text.png"),
  );
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #002d62 0%, #001532 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Orange-Glow oben rechts */}
        <div
          style={{
            position: "absolute",
            top: -170,
            right: -120,
            width: 480,
            height: 480,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(249,115,22,0.35) 0%, rgba(249,115,22,0) 70%)",
          }}
        />

        {/* Großes, transluzentes § als Wasserzeichen */}
        <div
          style={{
            position: "absolute",
            right: 60,
            bottom: -70,
            fontSize: 460,
            fontWeight: 700,
            color: "rgba(255,255,255,0.06)",
            lineHeight: 1,
          }}
        >
          §
        </div>

        {/* Logo */}
        <div style={{ display: "flex" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} height={48} alt="" />
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              color: "#fb923c",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 5,
              marginBottom: 18,
            }}
          >
            SENSIBLE DATEN &amp; KI
          </div>
          <div
            style={{
              display: "flex",
              color: "#ffffff",
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            Claude nutzen, auch bei § 203 StGB.
          </div>
          <div
            style={{
              display: "flex",
              color: "#a3c7ef",
              fontSize: 30,
              marginTop: 24,
              maxWidth: 820,
            }}
          >
            DSGVO- und § 203-konform, inklusive Einrichtung.
          </div>
        </div>

        {/* Badges + Domain */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: 12 }}>
            {["DSGVO-konform", "§ 203 StGB", "AWS Frankfurt"].map((t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  color: "#d1e3f7",
                  fontSize: 22,
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 9999,
                  padding: "10px 22px",
                }}
              >
                {t}
              </div>
            ))}
          </div>
          <div
            style={{ display: "flex", color: "rgba(255,255,255,0.5)", fontSize: 22 }}
          >
            bluebatch.io
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
