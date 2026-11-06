/**
 * Durchklick-Test für den Funnel /claude-cowork-schulung-nuernberg.
 *
 * Klickt alle Fragen bis zur Anmeldung durch und prüft, dass die
 * Mehrfachauswahl („Was Claude übernehmen soll“) als Liste an /api/funnel
 * geht. Alle /api/-Aufrufe werden abgefangen: Es entsteht kein HubSpot-Kontakt
 * und kein Meta-Event.
 */

import { test, expect } from "@playwright/test";
import { BASE_URL } from "../helpers/crawl";

test("Nürnberg-Funnel: 3 Fragen, Mehrfachauswahl kommt als Liste an", async ({
  page,
}) => {
  test.setTimeout(90_000);
  let payload: Record<string, unknown> | null = null;
  await page.route("**/api/**", async (route) => {
    if (route.request().url().includes("/api/funnel")) {
      payload = route.request().postDataJSON();
    }
    await route.fulfill({ status: 200, json: { ok: true } });
  });

  await page.goto(`${BASE_URL}/claude-cowork-schulung-nuernberg`);
  // Cookie-Dialog verdeckt sonst den Funnel
  await page.getByRole("button", { name: "Alle ablehnen" }).click();

  // Frage 1 (Pills, springt automatisch weiter)
  await expect(page.getByText("Kennst du Claude Cowork schon?")).toBeVisible();
  await page.getByRole("button", { name: "Schon gehört" }).click();

  // Frage 2: 8 Bereiche
  await expect(page.getByText("In welchem Bereich arbeitest du?")).toBeVisible();
  for (const b of [
    "Geschäftsführung / Inhaber",
    "Büro und Verwaltung",
    "Vertrieb",
    "Marketing und Kommunikation",
    "Finanzen und Controlling",
    "Personal / HR",
    "IT und Technik",
    "Etwas anderes",
  ]) {
    await expect(page.getByRole("button", { name: b, exact: true })).toBeVisible();
  }
  await page.getByRole("button", { name: "Vertrieb", exact: true }).click();

  // Frage 3: Mehrfachauswahl, Weiter erst nach Auswahl aktiv
  await expect(page.getByText("Was soll Claude für dich übernehmen?")).toBeVisible();
  const weiter = page.getByRole("button", { name: "Weiter" });
  await expect(weiter).toBeDisabled();
  await page.getByRole("button", { name: /Kleine Skripte und Automationen/ }).click();
  await page.getByRole("button", { name: /Claude an deine Tools anbinden/ }).click();
  await page.getByRole("button", { name: /Tabellen und Daten/ }).click();
  await expect(weiter).toBeEnabled();
  await weiter.click();

  // Ladeschritt (2 s), danach Anmeldung
  await expect(
    page.getByText("Sichere dir deinen Platz am 10.12.2026"),
  ).toBeVisible({ timeout: 10_000 });
  await expect(page.getByText("850 € netto").first()).toBeVisible();

  await page.getByRole("button", { name: /Do, 10\.12\.2026/ }).click();
  await page.getByPlaceholder("Vorname", { exact: true }).fill("Test");
  await page.getByPlaceholder("Nachname", { exact: true }).fill("Durchklick");
  await page.getByPlaceholder("Firma", { exact: true }).fill("Testfirma");
  await page.getByRole("checkbox").check();
  await page.getByPlaceholder("vorname.nachname@firma.de").fill("test@example.com");
  await page.getByRole("button", { name: "Verbindlich anmelden" }).click();

  await expect(page.getByText("Du bist dabei!")).toBeVisible();
  await expect.poll(() => payload).not.toBeNull();
  const answers = (payload as unknown as { answers: Record<string, unknown> }).answers;
  expect(answers["Kennt Claude Cowork"]).toBe("Schon gehört");
  expect(answers["Bereich"]).toBe("Vertrieb");
  expect(answers["Was Claude übernehmen soll"]).toEqual([
    "Kleine Skripte und Automationen",
    "Claude an deine Tools anbinden",
    "Tabellen und Daten",
  ]);
  expect(answers).not.toHaveProperty("Größter Zeitfresser");
});
