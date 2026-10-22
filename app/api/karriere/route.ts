import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// Bewerbungen laufen bewusst NICHT über /api/contact. Dort feuert jeder Submit
// ein Meta-"Lead"-Event, und ein Bewerber als Meta-Conversion verzerrt die
// Ads-Optimierung. Sie landen auch nicht mehr in HubSpot, sondern als Zeile in
// einem Google Sheet: Eine Apps-Script-Web-App im Sheet hängt jede Bewerbung
// an (Quelltext und Einrichtung in scripts/bewerbungen-sheet.gs). URL und
// Geheimwort kommen aus der Umgebung, das Repo ist öffentlich.
const SHEET_URL = process.env.BEWERBUNGEN_SHEET_URL;
const SHEET_SECRET = process.env.BEWERBUNGEN_SHEET_SECRET;

// Wer das Formular schneller abschickt, ist sehr wahrscheinlich ein Bot.
const MIN_FILL_MS = 2500;

interface Payload {
  firstname?: string;
  lastname?: string;
  email?: string;
  position?: string; // beworbene Stelle bzw. "Initiativbewerbung"
  profileUrl?: string; // LinkedIn, GitHub oder Portfolio
  message?: string;
  pageUri?: string;
  website?: string; // Honeypot, für Menschen unsichtbar und immer leer
  fillMs?: number; // Zeit vom Laden des Formulars bis zum Absenden
}

export async function POST(req: NextRequest) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "invalid JSON" }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "email required" }, { status: 400 });
  }

  // Bots bekommen dieselbe Antwort wie Menschen, damit sie nicht nachjustieren,
  // es wird aber nichts geschrieben.
  const isBot =
    Boolean(body.website?.trim()) ||
    (typeof body.fillMs === "number" && body.fillMs < MIN_FILL_MS);
  if (isBot) return NextResponse.json({ ok: true });

  if (!SHEET_URL || !SHEET_SECRET) {
    console.error("karriere: BEWERBUNGEN_SHEET_URL oder _SECRET fehlt");
    return NextResponse.json(
      { ok: false, error: "not_configured" },
      { status: 500 },
    );
  }

  try {
    // Apps Script antwortet mit einem Redirect auf script.googleusercontent.com,
    // dort liegt die eigentliche Antwort. fetch folgt ihm per GET, das passt.
    const res = await fetch(SHEET_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: SHEET_SECRET,
        firstname: body.firstname,
        lastname: body.lastname,
        email,
        position: body.position,
        profileUrl: body.profileUrl,
        message: body.message,
        pageUri: body.pageUri,
      }),
    });
    // Apps Script kennt keine Statuscodes, Fehler stehen nur im JSON.
    const result = (await res.json().catch(() => null)) as {
      ok?: boolean;
      error?: string;
    } | null;
    if (!res.ok || !result?.ok) {
      return NextResponse.json(
        { ok: false, error: "sheet_error", status: res.status, detail: result?.error },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "network" }, { status: 502 });
  }
}
