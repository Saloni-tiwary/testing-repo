const { chromium } = require('@playwright/test');

module.exports = async config => {
  const browser = await chromium.launch({headless: false});
  const page = await browser.newPage();
  
  await page.goto('https://my.staging.adaptiveu.app/');
  await page.locator("#email").type("shakti.choudhary@anywhere.co");
  await page.locator( "[type='password']").type("password");
  await page.locator("#login_submit").click();
  await expect(page.locator("[data-awd-tooltip='Learning']")).toHaveClass('awd-tooltip awd-tooltip--right awd-tooltip-sm');
  await page.locator('#close-icon svg').click();
  await page.context().storageState({ path: 'storage-state.json'});
  await browser.close();
};
 