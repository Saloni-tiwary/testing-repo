import { chromium,expect } from '@playwright/test';
import { config } from 'dotenv';
 config()
 
module.exports=async config => {
  const browser = await chromium.launch({headless: true});
  const page = await browser.newPage();
  await page.goto('https://my.staging.adaptiveu.app/');
  await page.locator("#email").type("shakti.choudhary@anywhere.co");
  await page.locator( "[type='password']").type("password");
  await page.locator("#login_submit").click();
  await expect(page.locator("#sidebar-app-adaptiveu")).toBeVisible({timeout:50000});
  //await page.locator('#close-icon svg').click();
  await page.context().storageState({ path: 'storage-state.json'});
  await browser.close();
};

 
