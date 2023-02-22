const { test,expect } = require("@playwright/test");



class PayItForwardOuterCard{
 constructor(page){
    this.page=page;
    this.EmbedImage=page.locator(".challenge-img");
    this.PayItForwardOption=page.locator("[data-status='pay-forward']");
    this.PayItForwardInputField=page.locator(".input-value");
    this.warning=page.locator(".warning");
    this.SelectingSelf=page.getByRole('navigation').filter({ hasText: 'Shakti Aryan' });
    this.PayItForwardButton=page.getByRole("button",{name:'Share'});
    this.SelectingOther=page.getByRole('navigation').filter({ hasText: 'Saloni Tiwary' });
    this.SuccessMessage=page.locator("div .success");
    this.NotesInputField=page.getByPlaceholder("Type your note here....");
    this.PayItForwardPopupBox=page.locator(".container");
 }
 async payItForwardPopupBoxOpen(){
   await expect(this.PayItForwardPopupBox).toContainText("Pay it Forward");
 }
 async embedImgVisible(){
   await expect(this.EmbedImage).toBeVisible();
 }

 async payItForwardOptionClick(){
  await this.PayItForwardOption.nth(0).click();
 }
 async typeOtherNameAsInput(){
    await this.PayItForwardInputField.type("salo",{delay:600});
 }
 async selectingOtherUser(){
    await (this.SelectingOther).click();
 }
  
 async typeSelfNameAsInput(){
    await this.PayItForwardInputField.type("shakti aryan",{delay:600});
 }
 async selectingSelfUser(){
    await (this.SelectingSelf).click()
 }
 async payItForwardButtonDisabled(){
    await expect(this.PayItForwardButton).toBeDisabled();
 }
 async similarUserWarning(){
    await expect(this.warning).toContainText("The user is already added!");
 }
 async successConfirmation(){
    await this.SuccessMessage.waitFor();
    await expect(this.SuccessMessage).toContainText("Shared");
 }
 async typeNotes(){
    await this.NotesInputField.fill("test note",{delay:600})
 }
 async  shareButtonClick(){
   await (this.PayItForwardButton).click()

 }


}
module.exports={PayItForwardOuterCard};


