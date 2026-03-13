/**
 * Shared base type for page-level custom metadata.
 * Every page that exports `metaCustom` must include at least these fields.
 * Domain-specific pages (blog, standorte) extend this with additional fields.
 */
export interface MetaCustom {
  slug: string;
  publish: boolean;
}

/**
 * Blog-specific metadata.
 */
export interface BlogMeta extends MetaCustom {
  author: string;
  date: string;
  image: string;
  tags: string[];
}

/**
 * City/Standorte-specific metadata.
 */
export interface CityMeta extends MetaCustom {
  name: string;
  bundesland: string;
  nearbySmall: string[];
  crossReference: { name: string; slug: string }[];
}
