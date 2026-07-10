// Zentrales UTM→HubSpot-Mapping. Single source of truth — genutzt vom Kontakt-
// formular (/api/contact), dem Meeting-Tracking (/api/meeting-tracking) UND dem
// Homepage-Chat-Lead-Flow (lead-detect).
//
// Modell (Stand HubSpot-Dropdowns):
//   lead_source  = referral | outbound | inbound  → unsere Web-Flows sind IMMER
//                  eingehend, daher konstant "inbound".
//   lead_medium  = der Kanal/die Plattform (facebook | instagram | linkedin |
//                  website | …). Facebook/Instagram sind hier das MEDIUM, nicht
//                  mehr die Source.
//   lead_campaign = utm_campaign (1:1), lead_content = utm_content (1:1).

export interface MappedLead {
  lead_source: string;
  lead_medium: string;
  lead_campaign?: string;
  lead_content?: string;
}

export function mapLead(
  utm: Record<string, string> = {},
  fbclid?: string | null,
): MappedLead {
  const src = (utm.utm_source ?? "").toLowerCase();
  const hsa = (utm.hsa_src ?? "").toLowerCase();

  // Meta-Klick? Explizite Plattform in utm_source, sonst fbclid/hsa als Signal.
  const isMeta =
    Boolean(fbclid ?? utm.fbclid) ||
    hsa === "fb" ||
    ["facebook", "fb", "instagram", "ig"].includes(src);

  let lead_medium: string;
  if (src === "facebook" || src === "fb") lead_medium = "facebook";
  else if (src === "instagram" || src === "ig") lead_medium = "instagram";
  else if (src === "linkedin") lead_medium = "linkedin";
  // Meta-Klick ohne klare Plattform → Fallback Instagram (bewusste Entscheidung).
  else if (isMeta) lead_medium = "instagram";
  else lead_medium = "website";

  return {
    lead_source: "inbound",
    lead_medium,
    lead_campaign: utm.utm_campaign?.trim() || undefined,
    lead_content: utm.utm_content?.trim() || undefined,
  };
}
