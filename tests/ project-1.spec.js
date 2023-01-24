const { test, expect, } = require('@playwright/test');


    

test.beforeEach(async ({page})=> {
    
    
   // var context= await browser.newContext();
   // var page= await context.newPage();
    await page.goto('https://my.staging.adaptiveu.app/')
    await page.locator("#email").type("shakti.choudhary@anywhere.co");
    await page.locator("[type='password']").type("password");
    await page.locator("#login_submit").click();
  await expect(page.locator("[data-awd-tooltip='Learning']")).toHaveClass('awd-tooltip awd-tooltip--right awd-tooltip-sm')
  await page.locator('#close-icon svg').click();
})
 

test('recommend tab UI', async({page})=>{
    await expect(page.locator('.recommend-link')).toBeVisible()
    await page.locator('.recommend-link').click("[data-option*=recommend]");
    await expect(page.locator('section .container')).toContainText('Recommend');
})
    // video link
test('Verify that a Video can be recommended', async({page})=>{
    await expect(page.locator('.recommend-link')).toBeVisible();
    await page.getByRole('button', { name: '+ Recommend' }).click();// used timeout here 
    //tried these for dropdown component 
  /* await page.locator('span').filter({ hasText: 'AnywhereWorks' }).click();
   await page.locator('#popup').getByRole('listitem').getByText('AnywhereWorks').click();
    if (await page.locator('.track-dropdown').isVisible()) {
        
   // page.waitForSelector('.track-dropdown')

 // const dropdown= await expeact(page.locator('.track-dropdown')).toBeVisible();
  // if(dropdown==true){*/

   
    await page.getByPlaceholder('Share any video/article, which benefits your organization!').fill('https://www.youtube.com/watch?v=Pm2BvdiZUXA');
   await page.keyboard.press('Enter');
   await page.getByPlaceholder('Min').fill('14')
   await page.locator('#popup').getByRole('button', { name: 'Recommend' }).click();

     await expect(page.locator(".tippy").nth(0)).toHaveText("10 Minute Timer");
   
   
})

//article link
test('verify that an article can be recommended',async({page})=>{
    await expect(page.locator('.recommend-link')).toBeVisible()
    await page.locator('.recommend-link').click("[data-option*=recommend]");
    await page.getByPlaceholder('Share any video/article, which benefits your organization!').fill("https://playwright.dev/docs/actionability");
    await page.keyboard.press('Enter');
    await page.getByPlaceholder('Min').fill('10');
    await page.locator('#popup').getByRole('button', { name: 'Recommend' }).dblclick();
    await expect(page.locator(".tippy").nth(0)).toHaveText("Auto-waiting | Playwright");

})

//await page.locator(".more-settings").click();
    //const enabled=await expect(page.locator("#video ")).isEnabled()
   // if(enabled==true){
       // await page.locator('#popup').getByRole('button', { name: 'Recommend' }).click()

    //
    await page.getByPlaceholder('Min').fill('12');
   await page.locator('#popup').getByRole('button', { name: 'Recommend' }).click();
  //  await page.goto('https://my.staging.adaptiveu.app/react/v2/anywhereworks/home?category=all&contentType=all&sortby=recent');
  //});
    //await expect(page.locator('section .container')).toContainText('Recommend');
