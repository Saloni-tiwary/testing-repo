const { test,expect } = require("@playwright/test");
class PayItforwardLinkInnerview{
    constructor(page){
        this.page=page;
        this.PayItForwardOption= page.locator(".pay-forward");
        this.Container=page.locator(".container");
        this.ShareButton=page.locator(".share-button",{has:page.locator(".btn-cta")});
        this.ShareButtonDisabled=page.locator("button.btn-cta").nth(1);
        this.RecepientInputField=page.getByPlaceholder("Type to add people");
        this.RecepientDropdown=page.locator("people-search.dropdown.open");
        this.FirstOtherRecipient=page.locator('a').filter({ hasText: 'Shakkthi Rajkumar' });
        this.SecondOtherRecipient=page.locator('a').filter({ hasText: 'Saloni Tiwary' });
        this.PayItForwardNotes=page.getByPlaceholder("Type your note here....");
        this.SuccessMeessage=page.locator("div .success");

    }
    async payItForwardOptionClick(){
        await this.PayItForwardOption.click();
    }
    async payItForwardPopupConfirmation(){
        await expect(this.Container).toBeVisible();
    }
    async shareButtonDisabled(){
        await expect(this.ShareButtonDisabled).toBeDisabled();
    }
    async typeSelfAsRecipient(){
        await this.RecepientInputField.type("shakti aryan",{delay:100});
    }
    async typeTwoCharacterAsInput(){
        await this.RecepientInputField.type("sa",{delay:100});
    }
    async recepientDropdownNotVisisbleConfirmation(){
        await expect(this.RecepientDropdown).not.toBeVisible();
    }
    async typefirstOtherrecipient(){
        await this.RecepientInputField.type('sha',{delay:3000})
        
    }
    async firstOtherRecipientClick(){
        await this.FirstOtherRecipient.click();
    }
    async typeSecondOtherRecipient(){
        await this.RecepientInputField.click();
        await this.RecepientInputField.type('sal',{delay:3000})
    }
    async secondOtherRecipientClick(){
        await this.SecondOtherRecipient.click();
    }
    async shareButtonClick(){
        await this.ShareButton.click()
    }
    async typeNotes(){
        await this.PayItForwardNotes.type("test note",{delay:1000})
    }
    async sucessMessageConfirmation(){
        await this.SuccessMeessage.waitFor()
        await expect(this.SuccessMeessage).toContainText("Shared");
    }
    

    }
    module.exports={PayItforwardLinkInnerview};
 