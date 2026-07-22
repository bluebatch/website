/**
 * SEO-Test-Fixtures.
 *
 * Bewusst ohne externe Daten: Das Website-Repo ist self-containing — Tests
 * laden keine Google-Credentials und keine GA4-/GSC-Daten (site-structure.md).
 * Traffic-basierte SEO-Steuerung (Link Equity, Kannibalisierung) macht der
 * Website-Agent außerhalb dieses Repos.
 */

export { test, expect } from "@playwright/test";
