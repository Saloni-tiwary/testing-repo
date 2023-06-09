const { test, expect, request } = require("@playwright/test");
const { Agent } = require("http");

test("verify that link outer card more options are selectable", async ({
  page,
}) => {
  await page.locator(".challenge-image").nth(0).hover();
  await page.locator(".link-dropdown").nth(0).click();
  await expect(page.locator(".edit-content").nth(0)).toContainText("Edit");
});


test("verify that link outer card add to learn options are clickable", async ({
  page,
}) => {
  await page.locator('[data-tippy-content="Add to Learn" ]').nth(0).click();
  await expect(
    page.locator("[data-tippy-content='Added to Learn' ]").nth(0)
  ).toBeEnabled();
});


test("verify on clicking menu, sidebar disappers if visible", async ({
  page,
}) => {
  await page.locator(".menu-icon").click();
  await expect(page.locator(".au")).toHaveClass("au");
});


test("verify on clicking the menu sidebar appears, if not visible before", async ({
  page,
}) => {
  await page.locator(".menu-icon").click();
  await page.locator(".menu-icon").click();
  await expect(page.locator(".sidebar-open")).toHaveClass("au sidebar-open");
});

