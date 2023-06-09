const { test, expect, request } = require("@playwright/test");
const { Agent } = require("http");

test("verify when more settings is clicked the edit popup expands unvieling more options", async ({
  page,
}) => {
  await page.goto("https://my.staging.adaptiveu.app/");
  await page.locator(".challenge-image").nth(0).hover();
  await page.locator(".link-dropdown").nth(0).click();
  await page.locator("[data-status='edit']").nth(0).click();
  await page.locator(".more-settings").click();
  await expect(page.locator(".populate")).toBeVisible();
});
