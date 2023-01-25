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
test("verify same link cannot be recommended again",async({page})=>{
  await expect(page.locator('.recommend-link')).toBeVisible()
  await page.locator('.recommend-link').click("[data-option*=recommend]");
  await page.getByPlaceholder('Share any video/article, which benefits your organization!').fill("https://stackoverflow.com/questions/74980624/can-i-use-textsplit-with-find-formula");
  await page.keyboard.press('Enter');
  await page.getByPlaceholder('Min').fill('10');
  await page.locator('#popup').getByRole('button', { name: 'Recommend' }).click({timeout:10000});
 // await page.waitForSelector(".duplicate-message");
  await expect(page.locator(".duplicate-message")).toHaveText("Oops! We have predicted a similar recommendation View");
})
test('verify that link outer card more options are selectable', async({page})=>{
  await page.locator(".challenge-image").nth(0).hover()
  await page.locator(".link-dropdown").nth(0).click()
  await expect(page.locator(".edit-content").nth(0)).toContainText("Edit")
})
test("verify that link oter card add to learn options are clickable",async({page})=>{
  await page.locator('[data-tippy-content="Add to Learn" ]').nth(0).click();
  await expect(page.locator("[data-tippy-content='Added to Learn' ]").nth(0)).toBeEnabled();

})
test("verify on clicking menu, sidebar disappers if visible",async({page})=>{
  await page.locator(".menu-icon").click();
  await expect(page.locator(".au")).toHaveClass('au')
  })
  test("verify on clicking the menu sidebar appears, if not visible before",async({page})=>{
    await page.locator(".menu-icon").click();
    await page.locator(".menu-icon").click();
    await expect(page.locator(".sidebar-open")).toHaveClass("au sidebar-open");
  })
test("verify that content filter dropdown is clickable",async({page})=>{
  await page.locator('.filter-dropdown').click();
  await expect(page.locator(".content-type").nth(0)).toContainText("All Type");
})

/*test.only("verify on selecting video type content filter only recommended video is displayed on home page",async({page})=>{
  await page.locator('.filter-dropdown').click();
  await page.locator("[data-type='video']").click();
   page.waitForNavigation();
 
  //for(let i=0;i<20;i++){
    //const content=await page.locator("challenge-image").nth(0);
    await expect(page.getByAltText('link').nth(0)).to
  //}*/
  


