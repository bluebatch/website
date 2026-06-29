import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

// Dynamisch generiertes Link-Vorschaubild für /chat. Next setzt daraus
// automatisch die og:image / twitter:image Meta-Tags.
export const runtime = "nodejs";
export const alt = "Bluebatch Assistent — KI für Großhandel & Industrie";
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
        {/* dekorativer Orange-Glow oben rechts */}
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 460,
            height: 460,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(249,115,22,0.35) 0%, rgba(249,115,22,0) 70%)",
          }}
        />

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
            BLUEBATCH ASSISTENT
          </div>
          <div
            style={{
              display: "flex",
              color: "#ffffff",
              fontSize: 74,
              fontWeight: 800,
              lineHeight: 1.05,
              maxWidth: 940,
            }}
          >
            Frag uns, was KI für euch tun kann.
          </div>
          <div
            style={{
              display: "flex",
              color: "#a3c7ef",
              fontSize: 30,
              marginTop: 26,
              maxWidth: 860,
            }}
          >
            Use-Cases · Tools · Schulungen, direkt im Chat.
          </div>
        </div>

        {/* Chat-Bubble + powered by */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 9999,
              padding: "16px 28px",
            }}
          >
            <div style={{ display: "flex", gap: 10 }}>
              <div style={{ width: 14, height: 14, borderRadius: 9999, background: "#fb923c" }} />
              <div style={{ width: 14, height: 14, borderRadius: 9999, background: "#75abe7" }} />
              <div style={{ width: 14, height: 14, borderRadius: 9999, background: "#ffffff" }} />
            </div>
            <div style={{ display: "flex", color: "#d1e3f7", fontSize: 24 }}>
              Assistent tippt…
            </div>
          </div>
          <div style={{ display: "flex", color: "rgba(255,255,255,0.5)", fontSize: 22 }}>
            bluebatch.io
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
