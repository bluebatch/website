import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

// Dynamische Social-Vorschaubilder (og:image / twitter:image). Statt eines
// statischen Default-Bilds bekommt jede Seite hier ein eigenes Bild, gebaut
// aus ihrem Titel: dunkelblauer Bluebatch-Hintergrund, oranger Akzent
// (cta-500), dezentes Flow-/Knoten-Muster für die KI-Workflow-Anmutung, Logo.
//
// Aufruf: /og?title=...&eyebrow=...  (siehe lib/og.ts)

export const runtime = "nodejs";

const PRIMARY_900 = "#00214a";
const PRIMARY_800 = "#002d62";
const CTA = "#f97316";

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return text.slice(0, max - 1).trimEnd() + "…";
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = truncate(
    (searchParams.get("title") || "KI-Agenten, Workflows & Automatisierung").trim(),
    90,
  );
  const eyebrow = truncate((searchParams.get("eyebrow") || "Bluebatch").trim(), 40);

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
          background: `linear-gradient(135deg, ${PRIMARY_800} 0%, ${PRIMARY_900} 100%)`,
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* dezentes Knoten-/Flow-Muster oben rechts */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 480,
            height: 480,
            display: "flex",
            opacity: 0.16,
          }}
        >
          <svg width="480" height="480" viewBox="0 0 480 480" fill="none">
            <circle cx="120" cy="120" r="14" fill="#ffffff" />
            <circle cx="300" cy="90" r="14" fill={CTA} />
            <circle cx="380" cy="240" r="14" fill="#ffffff" />
            <circle cx="220" cy="260" r="14" fill="#ffffff" />
            <circle cx="120" cy="360" r="14" fill={CTA} />
            <circle cx="330" cy="380" r="14" fill="#ffffff" />
            <path
              d="M120 120 L300 90 M300 90 L380 240 M380 240 L220 260 M220 260 L120 120 M220 260 L120 360 M120 360 L330 380 M330 380 L380 240"
              stroke="#ffffff"
              strokeWidth="3"
            />
          </svg>
        </div>

        {/* Eyebrow mit orangem Balken */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 56, height: 8, background: CTA, borderRadius: 4, display: "flex" }} />
          <div
            style={{
              display: "flex",
              fontSize: 30,
              fontWeight: 600,
              color: CTA,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </div>
        </div>

        {/* Titel */}
        <div
          style={{
            display: "flex",
            fontSize: title.length > 55 ? 62 : 74,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            maxWidth: 940,
          }}
        >
          {title}
        </div>

        {/* Logo unten */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="Bluebatch" height={48} />
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
