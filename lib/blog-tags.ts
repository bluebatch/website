export interface BlogTag {
  id: string;
  label: string;
}

export const blogTags: BlogTag[] = [
  { id: "n8n", label: "n8n" },
  { id: "ki", label: "KI" },
  { id: "automatisierung", label: "Automatisierung" },
  { id: "grosshandel", label: "Großhandel" },
  { id: "steuerberater", label: "Steuerberater" },
  { id: "personaldienstleister", label: "Personaldienstleister" },
  { id: "invoicing", label: "Rechnungen" },
  { id: "datev", label: "DATEV" },
  { id: "supply-chain", label: "Supply Chain" },
  { id: "custom-nodes", label: "Custom Nodes" },
  { id: "development", label: "Development" },
];

export function getTagById(id: string): BlogTag | undefined {
  return blogTags.find((tag) => tag.id === id);
}

export function getTagsByIds(ids: string[]): BlogTag[] {
  return ids
    .map((id) => getTagById(id))
    .filter((tag): tag is BlogTag => tag !== undefined);
}
