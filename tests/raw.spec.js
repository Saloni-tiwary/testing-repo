const { test, expect, request } = require("@playwright/test");
const { Agent } = require("http");

test("verify that link outer card more options are selectable", async ({
  page,

   await page.goto("https://my.staging.adaptiveu.app/");
   await page.locator("#email").type("shakti.choudhary@anywhere.co");
  await page.locator("[type='password']").type("password");
   await page.locator("#login_submit").click();
   await expect(page.locator("[data-awd-tooltip='Learning']")).toHaveClass(
     "awd-tooltip awd-tooltip--right awd-tooltip-sm"
   );
//   await page.locator("#close-icon svg").click();
 });
