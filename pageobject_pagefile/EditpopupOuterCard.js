const { expect } = require("@playwright/test");
class EditPopupOuterCard
{
    constructor(page){
    this.page=page;
    this.LinkTitle=page.getByPlaceholder("Enter Title");
    this.SaveButton=page.getByRole('button', { name: 'save' });
    this.EditPopupMoreSettings=page.locator(".more-settings");
    this.MoreSettingsOpen=page.locator(".populate");
    this.Tag=page.getByPlaceholder("Add tag");
    this.ErrorMessage=page.locator(".warning");
    this.CancelTag=page.locator("#close");
    this.TagInputField=page.locator(".tag-name");
    this.RadioButtonVideo=page.locator('#video');
    this.RadioButtonArticle=page.locator("#article");
    this.VideoRadioButtonEnable=page.locator("#video .radio-button")
    this.LinkMin=page.getByPlaceholder("Min")

    }
    async enterEmptyTitle(){
        await this.LinkTitle.fill("");
    }
    async saveLink(){
        await this.SaveButton.click();
    }
    async linkError(){
        await expect(this.LinkTitle).toHaveClass("link-name error");
    }
    async enterSpecialCharacterTitle(){
        await this.LinkTitle.fill("!@#$%^");
    }
    async fillMaxCharacters(){
        for(let i=1;i<=201;i++){
            await this.LinkTitle.type("1")
          }
    }
    async moreSettingsClick(){
        await this.EditPopupMoreSettings.click();
    }
    async moreSettingVisible(){
        await expect(this.MoreSettingsOpen).toBeVisible();
    }
    async addFirstTag(){
        await this.Tag.type("1",{timeout: 5000});
        await this.page.keyboard.press('Enter');
    }
    async addSecondTag(){
        await this.Tag.type("2",{timeout: 5000});
        await this.page.keyboard.press('Enter');
    }
    async addThirdTag(){
        await this.Tag.type("3",{timeout: 5000});
        await this.page.keyboard.press('Enter');
    }
    async addFourthTag(){
        await this.Tag.type("4",{timeout: 5000});
        await this.page.keyboard.press('Enter');
    }
    async addFifthTag(){
        await this.Tag.type("5",{timeout: 5000});
        await this.page.keyboard.press('Enter');
    }
    async addSixthtag(){
        await this.Tag.type("6",{timeout: 5000});
        await this.page.keyboard.press('Enter');
    }
    async errorMessageVisible(){
        await expect(this.ErrorMessage).toBeVisible();
    }
    async duplicateTagErrorMessage(){
        await expect(this.ErrorMessage).toContainText("Already the tag has been added!");
    }
    async addMaxCharInTag(){
        await this.Tag.type("23456789009876543211234567890",{timeout: 5000});
    }
    async maxCharErrorMessage(){
        await expect(this.ErrorMessage).toContainText("Please enter tag with character length less than or equal to 25!");
        await this.page.keyboard.press('Enter');
    }
    async closeTag(){
        await this.CancelTag.first().click();
    }
    async tagClosedVerify(){
        await expect(this.TagInputField).not.toBeVisible();
    }
    async videoRadioButtonSelect(){
        await this.RadioButtonVideo.click();
    }
    async articleRadioButtonSelect(){
        await this.RadioButtonArticle.click()
    }
    async oneRadioButtonEnabled(){
        const RadioButton= await this.videoRadioButtonEnabled.isEnabled()
        if(RadioButton==false){
            console.log("only one content type is selected");
            }
            else{
             console.log("test is failing");
            }
           
    }
    async emptyMinFill(){
        await this.LinkMin.fill("");
    }
    async maxMinFill(){
        await this.LinkMin.type("100001");
    }
    async symbolMinFill(){
        await this.LinkMin.fill("!@#$%");
    }
    async charMinFill(){
        await this.LinkMin.fill("asdf");
    }
    
}
module.exports={EditPopupOuterCard}

 
   
    

   
   
    
   
  
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
  