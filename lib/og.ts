// Helper für Social-Vorschaubilder. Statt des statischen Default-Bilds
// erzeugt jede Seite über die /og-Route ein eigenes Bild aus ihrem Titel.
//
// Nutzung in der page-Metadata:
//   import { ogImages } from "@/lib/og";
//   openGraph: { ..., images: ogImages("Mail Agent für Steuerberater", "KI-Agenten") }
//   twitter:  { ..., images: ogImages(...).map((i) => i.url) }

interface OgImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}

/**
 * Baut das og:image-Array für eine Seite. `title` ohne "| Bluebatch"-Suffix,
 * `eyebrow` ist die Kategorie/Rubrik (z.B. "Branchen", "Tools", "Services").
 */
export function ogImages(title: string, eyebrow = "Bluebatch"): OgImage[] {
  const params = new URLSearchParams({ title, eyebrow });
  return [
    {
      url: `/og?${params.toString()}`,
      width: 1200,
      height: 630,
      alt: title,
    },
  ];
}
