const { test, expect, request} = require('@playwright/test');


    

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
    // video link not completed in headed mode
test('Verify that a Video can be recommended', async({page})=>{
  // await expect(page.locator('.recommend-link')).toBeVisible();
  
    await page.getByRole('button', { name: '+ Recommend' }).click({delay:100});
    await page.locator(".recommend").waitFor();
    // used timeout here 
    console.log("demo msg")
   await page.locator('.track-dropdown').waitFor({state: 'attached'});
    
    //tried these for dropdown component 
  /* await page.locator('span').filter({ hasText: 'AnywhereWorks' }).click();
   await page.locator('#popup').getByRole('listitem').getByText('AnywhereWorks').click();
    if (await page.locator('.track-dropdown').isVisible()) {
        
   // page.waitForSelector('.track-dropdown')

      const dropdown= await expeact(page.locator('.track-dropdown')).toBeVisible();
     if(dropdown==true){*/

   
   await page.getByPlaceholder('Share any video/article, which benefits your organization!').fill('https://www.youtube.com/watch?v=Pm2BvdiZUXA',{delay:100});
   await page.keyboard.press('Enter');
   await page.getByPlaceholder('Min').fill('14')
   await page.locator('#popup').getByRole('button', { name: 'Recommend' }).click();

    // await expect(page.locator(".tippy").nth(0)).toHaveText("10 Minute Timer");
    
   
})

//article link not completed in headed mode
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
test("verify that link outer card add to learn options are clickable",async({page})=>{
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

test("verify on selecting video type content filter only recommended video is displayed on home page",async({page})=>{
  await page.locator('.filter-dropdown').click();
  await page.locator("[data-type='video']").click();
  for(let i=0;i<20;i++){ 
    await expect(page.locator("span[class='challenge-type video']").nth(i)).toBeVisible();
}
})
test("verify on selecting audio content filter only recommended audio files are displayed",async({page})=>{
  await page.locator('.filter-dropdown').click();
  await page.locator("[data-type='audio']").click();
  for(let i=0;i<15;i++){ 
    await expect(page.locator("span[class='challenge-type audio']").nth(i)).toBeVisible();
}
  
})
test("verify on selecting book content filter only recommended books are displayed",async({page})=>{
  await page.locator('.filter-dropdown').click();
  await page.locator("[data-type='book']").click();
  for(let i=0;i<3;i++){ 
    await expect(page.locator("span[class='challenge-type book']").nth(i)).toBeVisible();
  }
})
test("verify on selecting article filter only recommend articles are displayed",async({page})=>{
  await page.locator('.filter-dropdown').click();
  await page.locator("[data-type='article']").click();
  for(let i=0;i<15;i++){ 
    await expect(page.locator("span[class='challenge-type article']").nth(i)).toBeVisible();
  }
})
test("verify on clicking edit from more options of link outercard edit popup should populate", async({page})=>{
  await page.locator(".challenge-image").nth(0).hover();
  await page.locator(".link-dropdown").nth(0).click();
  await page.locator("[data-status='edit']").nth(0).click();
  await expect(page.locator(".container")).toBeVisible();
})
test("verify that link edited to no title cannot be saved", async({page})=>{
  await page.locator(".challenge-image").nth(0).hover();
  await page.locator(".link-dropdown").nth(0).click();
  await page.locator("[data-status='edit']").nth(0).click();
  await page.getByPlaceholder("Enter Title").fill("");
  await page.getByRole('button', { name: 'save' }).click();
  await expect(page.getByPlaceholder("Enter Title")).toHaveClass("link-name error")
})
test("verify that the link edited to only special characters in title cannot be saved",async({page})=>{
  await page.locator(".challenge-image").nth(0).hover();
  await page.locator(".link-dropdown").nth(0).click();
  await page.locator("[data-status='edit']").nth(0).click();
  await page.getByPlaceholder("Enter Title").fill("!@#$%^");
  await page.getByRole('button', { name: 'save' }).click();
  await expect(page.getByPlaceholder("Enter Title")).toHaveClass("link-name error")
  //await expect(page.locator("voice-box warning")).tobevisible()
})

test("verify that the title can have max 200 characters",async({page})=>{
  var data
  await page.locator(".challenge-image").nth(0).hover();
  await page.locator(".link-dropdown").nth(0).click();
  await page.locator("[data-status='edit']").nth(0).click();
  await page.getByPlaceholder("Enter Title").fill("")
  for(let i=1;i<=201;i++){
    await page.getByPlaceholder("Enter Title").type("1")
  }
     
  await page.getByRole('button', { name: 'save' }).click();
  await expect(page.getByPlaceholder("Enter Title")).toHaveClass("link-name error")
})
test("verify when more settings is clicked the edit popup expands unvieling more options", async({page})=>{
  await page.locator(".challenge-image").nth(0).hover();
  await page.locator(".link-dropdown").nth(0).click();
  await page.locator("[data-status='edit']").nth(0).click();
  await page.locator(".more-settings").click();
  await expect(page.locator(".populate")).toBeVisible();
})
test("verify that only 5 tags can be added at max in a link", async({page})=>{
  await page.locator(".challenge-image").nth(0).hover();
  await page.locator(".link-dropdown").nth(0).click();
  await page.locator("[data-status='edit']").nth(0).click();
  await page.locator(".more-settings").click();
   await page.getByPlaceholder("Add tag").type("1",{timeout: 5000});
   await page.keyboard.press('Enter');
   await page.getByPlaceholder("Add tag").type("2",{timeout: 5000});
   await page.keyboard.press('Enter');
   await page.getByPlaceholder("Add tag").type("3",{timeout: 5000});
   await page.keyboard.press('Enter'); 
   await page.getByPlaceholder("Add tag").type("4",{timeout: 5000});
   await page.keyboard.press('Enter');
   await page.getByPlaceholder("Add tag").type("5",{timeout: 5000});
   await page.keyboard.press('Enter');
   await page.getByPlaceholder("Add tag").type("6",{timeout: 5000});
   await page.keyboard.press('Enter');

  await expect(page.locator(".warning")).toBeVisible();
})
test("verify that a user cannot add duplicate tags",async({page})=>{
  await page.locator(".challenge-image").nth(0).hover();
  await page.locator(".link-dropdown").nth(0).click();
  await page.locator("[data-status='edit']").nth(0).click();
  await page.locator(".more-settings").click();
   await page.getByPlaceholder("Add tag").type("1",{timeout: 5000});
   await page.keyboard.press('Enter');
   await page.getByPlaceholder("Add tag").type("1",{timeout: 5000});
   await page.keyboard.press('Enter');
   await expect(page.locator(".warning")).toContainText("Already the tag has been added!")
})
test("verify that a tag can contain max 25 characters",async({page})=>{
  await page.locator(".challenge-image").nth(0).hover();
  await page.locator(".link-dropdown").nth(0).click();
  await page.locator("[data-status='edit']").nth(0).click();
  await page.locator(".more-settings").click();
   await page.getByPlaceholder("Add tag").type("123456789009876543211234567890",{timeout: 5000});
   await page.keyboard.press('Enter');
   await expect(page.locator(".warning")).toContainText("Please enter tag with character length less than or equal to 25!")
})
test("verify on clicking cancel button a tag is deleted",async({page})=>{
  await page.locator(".challenge-image").nth(0).hover();
  await page.locator(".link-dropdown").nth(0).click();
  await page.locator("[data-status='edit']").nth(0).click();
  await page.locator(".more-settings").click();
   await page.getByPlaceholder("Add tag").type("1",{timeout: 5000});
   await page.keyboard.press('Enter');
   await page.locator("#close").first().click();
   await expect(page.locator(".tag-name")).not.toBeVisible();
})

test("Verify only one content type can be choosen", async({page})=>{
  await page.locator(".challenge-image").nth(0).hover();
  await page.locator(".link-dropdown").nth(0).click();
  await page.locator("[data-status='edit']").nth(0).click();
  await page.locator(".more-settings").click();
  await page.locator('#video').click();
  await page.locator("#article").click();
 const RadioButton= await page.locator("#video .radio-button").isEnabled()

 if(RadioButton==false){
 console.log("only one content type is selected");
 }
 else{
  console.log("test is failing");
 }
})

test("verify that link cannot be edited 0/null minutes minutes",async({page})=>{
  await page.locator(".challenge-image").nth(0).hover();
  await page.locator(".link-dropdown").nth(0).click();
  await page.locator("[data-status='edit']").nth(0).click();
  await page.getByPlaceholder("Min").fill("");
  await page.getByRole('button', { name: 'save' }).click();
  await expect(page.getByPlaceholder("Min")).toHaveClass("points error");

})
test("verify that link cannot be edited to minutes in special characters", async({page})=>{
  await page.locator(".challenge-image").nth(0).hover();
  await page.locator(".link-dropdown").nth(0).click();
  await page.locator("[data-status='edit']").nth(0).click();
  await page.getByPlaceholder("Min").fill("")
  await page.getByPlaceholder("Min").fill("!@#$%")
  await page.getByRole('button', { name: 'save' }).click();
  await expect(page.getByPlaceholder("Min")).toHaveClass("points error");
})

test("verify that link cannot be edited to minutes in alphabets",async({page})=>{
  await page.locator(".challenge-image").nth(0).hover();
  await page.locator(".link-dropdown").nth(0).click();
  await page.locator("[data-status='edit']").nth(0).click();
  await page.getByPlaceholder("Min").fill("")
  await page.getByPlaceholder("Min").fill("asdf")
  await page.getByRole('button', { name: 'save' }).click();
  await expect(page.getByPlaceholder("Min")).toHaveClass("points error");
})

test("verify that the max minutes a link can have is 10000",async({page})=>{
  await page.locator(".challenge-image").nth(0).hover();
  await page.locator(".link-dropdown").nth(0).click();
  await page.locator("[data-status='edit']").nth(0).click();
  await page.getByPlaceholder("Min").fill("")
  await page.getByPlaceholder("Min").type("100001")
  await expect(page.getByPlaceholder("Min")).toHaveValue("10000")
})

test("verify that on clicking pay it forward the popup box opens",async({page})=>{
  await page.locator(".challenge-image").nth(0).hover();
  await page.locator(".link-dropdown").nth(0).click();
  await page.locator("[data-status='pay-forward']").nth(0).click();
  await expect(page.locator(".container")).toContainText("Pay it Forward");
})

test("verify that pay it forward popup contaians embed link image",async({page})=>{
  await page.locator(".challenge-image").nth(0).hover();
  await page.locator(".link-dropdown").nth(0).click();
  await page.locator("[data-status='pay-forward']").nth(0).click();
  await expect(page.locator('a').filter({ hasText: '10m' }).first()).toBeVisible();
})

test("verify that a person can be selected only once in payit forward",async({page})=>{
  await page.locator(".challenge-image").nth(0).hover();
  await page.locator(".link-dropdown").nth(0).click();
  await page.locator("[data-status='pay-forward']").nth(0).click();
  await page.locator(".input-value").type("shak",{delay:100})
  await page.locator('a').filter({ hasText: 'Shakkthi Rajkumar' }).click();
  await page.locator(".input-value").type("shak",{delay:100})
  await page.locator('a').filter({ hasText: 'Shakkthi Rajkumar' }).click();
  await expect(page.locator(".warning")).toContainText("The user is already added!")

})
test("verify link cannot be forwarded to self", async({page})=>{
  await page.locator(".challenge-image").nth(0).hover();
  await page.locator(".link-dropdown").nth(0).click();
  await page.locator("[data-status='pay-forward']").nth(0).click();
  await page.locator(".input-value").type("shakti aryan",{delay:100})
  await page.getByRole('navigation').filter({ hasText: 'Shakti Aryan' }).click();
  await expect(page.locator("button.btn-cta").nth(1)).toBeDisabled();
})
test("verify that a link can be shared without notes",async({page})=>{
   
  await page.locator(".challenge-image").nth(0).hover();
  await page.locator(".link-dropdown").nth(0).click();
  await page.locator("[data-status='pay-forward']").nth(0).click();
  await page.locator(".input-value").type("saloni tiwary",{delay:100})
  await page.getByRole('navigation').filter({ hasText: 'Saloni Tiwary' }).click();
  await page.getByRole("button",{name:'Share'}).click();
  await page.locator("div .success").waitFor()
  await expect(page.locator("div .success")).toContainText("Shared")
})
test("verify that notes can be added while paying forward a link",async({page})=>{
  await page.locator(".challenge-image").nth(0).hover();
  await page.locator(".link-dropdown").nth(0).click();
  await page.locator("[data-status='pay-forward']").nth(0).click();
  await page.locator(".input-value").type("saloni tiwary",{delay:100})
  await page.getByRole('navigation').filter({ hasText: 'Saloni Tiwary' }).click();
  await page.getByPlaceholder("Type your note here....").fill("test note",{delay:100})
  await page.getByRole("button",{name:'Share'}).click();
  await page.locator("div .success").waitFor()
  
  await expect(page.locator("div .success")).toContainText("Shared")
})
test("verify that on clicking the delete from more options delete popup is opened", async({page})=>{
  await page.locator(".challenge-image").nth(0).hover();
  await page.locator(".link-dropdown").nth(0).click();
  await page.locator("[data-status='delete']").nth(0).click();
  await expect(page.locator(".container")).toContainText("Delete Link")
})
test("verify on clicking cancel button of the delete popup the popup goes away", async({page})=>{
  await page.locator(".challenge-image").nth(0).hover();
  await page.locator(".link-dropdown").nth(0).click();
  await page.locator("[data-status='delete']").nth(0).click();
  await page.locator(".popup-close").click();
  await expect(page.locator(".popup-close")).not.toBeVisible();
})
test("verify on clicking no on the delete popup, popup closes",async({page})=>{
  await page.locator(".challenge-image").nth(0).hover();
  await page.locator(".link-dropdown").nth(0).click();
  await page.locator("[data-status='delete']").nth(0).click();
  await page.getByRole('button',{name:'No'}).click()
  await expect(page.locator(".container")).not.toBeVisible();
})
//Yet to ask the way out@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@ automation frameworks 
//test("verify on clicking delete from more options the course is deleted",async({page})=>{



  //******************LINK INNERVIEW***************************
  test("verify on clicking the link outercard the link innerview of the same link is opened",async({page})=>{
   const Title= await page.locator("a span.name").nth(0).textContent()
   console.log(Title);
    await page.locator(".challenge-image").nth(0).click();
    await expect(page.locator("div h2.link-name")).toContainText(Title);
})
test("verify that the recommendor's name is  visible in the link innerview",async({page})=>{
  await page.locator(".challenge-image").nth(0).click();
  const RecommenderName= page.locator(".creator-name")
  console.log(await RecommenderName.textContent());
  await expect(RecommenderName).toBeVisible();
})
test("verify that name of the university is visible in the link innerview",async({page})=>{
  await page.locator(".challenge-image").nth(0).click();
  await expect(page.locator("div a#anywhereworks")).toContainText("AnywhereWorks");
})
test("Verify that recommendation date is present on link innerview",async({page})=>{
await page.locator(".challenge-image").nth(0).click();
const RecommendationDate= page.locator(".creation-date")
console.log(await RecommendationDate.textContent());
await expect(RecommendationDate).toBeVisible()
})
test("verify that learning minutes of the link is visible in the link innerview",async({page})=>{
  
  await page.locator(".challenge-image").nth(0).click();
  await expect(page.locator(".link-min")).toBeVisible();
})
test("verify that more options in link innerview is clickable",async({page})=>{
  await page.locator(".challenge-image").nth(0).click();
  await page.locator(".dropdown-select").click();
  await expect(page.locator("div .dropdown-menu").first()).toBeVisible();
})
test("Verify that if the link is added to learn the add to learn checkbox is checked",async({page})=>{
  await page.locator("figcaption",{has: page.locator("[data-tippy-content='Added to Learn']").nth(0)}).click()
  await expect(page.locator(".add-myq.active")).toBeVisible();
  

})

test("verify on clicking the edit option edit popup is visible",async({page})=>{
  await page.locator(".challenge-image").nth(0).click();
  await page.locator(".dropdown-select").click();
  await page.locator(".edit-content").click();
  await expect(page.locator(".container")).toBeVisible();
})
 
test("verify on giving null minutes from edit the link is not saved",async({page})=>{
  await page.locator(".challenge-image").nth(0).click();
  await page.locator(".dropdown-select").click();
  await page.locator(".edit-content").click();
  await page.getByPlaceholder("Min").fill("");
  await page.locator(".recommend").click();
  await expect(page.getByPlaceholder("Min")).toHaveClass("points error");
  
})
test("verify that min field is not accepting special characters as input",async({page})=>{
  await page.locator(".challenge-image").nth(0).click();
  await page.locator(".dropdown-select").click();
  await page.locator(".edit-content").click();
  await page.getByPlaceholder("Min").fill("")
  await page.getByPlaceholder("Min").fill("!@#$%")
  await page.getByRole('button', { name: 'save' }).click();
  await expect(page.getByPlaceholder("Min")).toHaveClass("points error");
})
test("verify that min field is not accepting 0/null value",async({page})=>{
  await page.locator(".challenge-image").nth(0).click();
  await page.locator(".dropdown-select").click();
  await page.locator(".edit-content").click();
  await page.getByPlaceholder("Min").fill("")
  await page.getByRole('button', { name: 'save' }).click();
  await expect(page.getByPlaceholder("Min")).toHaveClass("points error");
})
test("verify taht min field is not accepting only alphabets ",async({page})=>{
  await page.locator(".challenge-image").nth(0).click();
  await page.locator(".dropdown-select").click();
  await page.locator(".edit-content").click();
  await page.getByPlaceholder("Min").fill("")
  await page.getByPlaceholder("Min").fill("ASDF")
  await page.getByRole('button', { name: 'save' }).click();
  await expect(page.getByPlaceholder("Min")).toHaveClass("points error");
})
test("verify that on updating the minutes, the same is reflected in the link innerview",async({page})=>{
  await page.locator(".challenge-image").nth(0).click();
  await page.locator(".dropdown-select").click();
  await page.locator(".edit-content").click();
  await page.getByPlaceholder("Min").fill("10");
  await page.getByRole('button', { name: 'save' }).click();
  await expect(page.locator(".link-min").nth(1)).toHaveText("10m")
})
test("verify if the link title is edited, the updated title is reflected in the linkinnerview",async({page})=>{
  await page.locator(".challenge-image").nth(0).click();
  await page.locator(".dropdown-select").click();
  await page.locator(".edit-content").click();
  await page.getByPlaceholder("Enter Title").fill("testing");
  await page.getByRole('button', { name: 'save' }).click();
  await expect(page.locator(".link-name").nth(0)).toHaveText("testing")
})
test("verify that the title should not contain only special characters",async({page})=>{
  await page.locator(".challenge-image").nth(0).click();
  await page.locator(".dropdown-select").click();
  await page.locator(".edit-content").click();
  await page.getByPlaceholder("Enter Title").fill("!@#$%^&");
  await page.getByRole('button', { name: 'save' }).click();
  await expect(page.locator(".warning")).toContainText("Please provide link name with at least one character other than special characters!")
})
// only numbers is left, would write after recommend link feature is fixed
test.only("verify that the link should not have an empty title",async({page})=>{
  await page.locator(".challenge-image").nth(0).click();
  await page.locator(".dropdown-select").click();
  await page.locator(".edit-content").click();
  await page.getByPlaceholder("Enter Title").fill(" ");
  await page.getByRole('button', { name: 'save' }).click({delay:3000});
  await expect(page.locator(".link-name error")).toBeVisible();
})