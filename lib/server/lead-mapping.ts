// Zentrales UTM→HubSpot-Dropdown-Mapping. Single source of truth — genutzt vom
// Kontaktformular (/api/contact) UND vom Homepage-Chat-Lead-Flow (lead-detect).
//
// "Paid" = echter Ad-Klick (fbclid / hsa_src=fb / utm_medium=paid|cpc|ppc).
// Alles andere gilt als organisch/inbound.

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
  const med = (utm.utm_medium ?? "").toLowerCase();
  const hsa = (utm.hsa_src ?? "").toLowerCase();

  const isPaid =
    Boolean(fbclid ?? utm.fbclid) ||
    hsa === "fb" ||
    med === "paid" ||
    med === "cpc" ||
    med === "ppc";

  let lead_source: string;
  let lead_medium: string;
  if (isPaid) {
    if (src === "facebook" || src === "fb") lead_source = "facebook";
    else if (src === "instagram" || src === "ig") lead_source = "instagram";
    // Nur fbclid, keine Plattform-Info → Fallback Instagram (bewusste Entscheidung).
    else lead_source = "instagram";
    lead_medium = "paid";
  } else {
    lead_source = "inbound";
    lead_medium = "website";
  }

  return {
    lead_source,
    lead_medium,
    lead_campaign: utm.utm_campaign?.trim() || undefined,
    lead_content: utm.utm_content?.trim() || undefined,
  };
}
