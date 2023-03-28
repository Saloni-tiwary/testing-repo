const { test,expect } = require("@playwright/test");
class TakeawaysAndRemoveProgress{
    constructor(page){
        this.page=page;
        this.UserImage=page.locator(".user-img");
        this.TakeawayTextArea=page.locator("div.ql-editor")
        this.TakeawayDoneButton=page.getByRole("button",{name:"Done"});
        this.EditedTakeawaySave=page.getByRole("button",{name:"Save"});
        this.WarningMessage=page.locator(".warning");
        this.UserName=page.locator(".user-name");
        this.CardInnerview=page.locator(".link-name");
        this.InnerProgress=page.locator(".inner-progress");
        this.ProgressPercentage=page.locator(".progress-percentage");
        this.Dropdown=page.locator(".dropdown-select");
        this.RemoveProgress=page.locator(".remove-progress");
        this.RemovingProgress=page.locator(".btn-cta-danger");
        this.NobuttonRemoveProgressPopup=page.locator(".btn").nth(1);
        this.RemoveProgressPopup=page.locator(".container");
        this.PopupCloseButton=page.locator(".popup-close");
        this.MenuIcon=page.locator(".menu-icon");
        this.Homebutton=page.locator("[page='home']");
        this.OuterCardProgressBar=page.locator("[data-semanticname='types-of-api'] .working-on");
        this.TakeawayDate=page.locator(".takeaway-date");
        this.PayitForwardPopupclose=page.locator(".popup-close");
        this.DoneStatus=page.locator(".done-status");
        this.TakeawayEditor=page.locator(".review-edit");
        this.EditedVisible=page.getByRole('main').getByRole('listitem').getByText('(edited)');
        this.CancelButton=page.locator(".review-cancel")
        
    }
    async givingEmptyTakeaway(){
        await this.TakeawayTextArea.fill("  ");
    }
    async savingTakeaway(){
        await this.TakeawayDoneButton.click();
    
    }
    async completeTakeawayWarning(){
        await expect(this.WarningMessage).toContainText("Complete the takeaway step");
    }
    async userImageVisible(){
        await expect(this.UserImage).toBeVisible();
    }
    async userNameVisible(){
        await expect(this.UserName).toContainText("Shakti Aryan");
    }
    async givingFirstValidTakeaway(){
      await this.TakeawayTextArea.fill("test");
      await this.CardInnerview.click({clickCount:3,delay:2000});
    // await this.InnerProgress.waitFor("visible");
    }
    async progressBarto45Verification(){
        await expect(this.ProgressPercentage).toContainText("45");
    }
    async moreOptionsClick(){
        await this.Dropdown.click();
    }
    async removeProgressSelect(){
        await this.RemoveProgress.click();
    }
    async removingProgressClick(){
        await this.RemovingProgress.click();
    }
    async progressRemovedConfirmation(){
        await expect(this.InnerProgress).not.toBeVisible();
    }
    async noButtonRemovePopupClick(){
        await this.NobuttonRemoveProgressPopup.click();
    }
    async popupGoneConfirmation(){
        await expect(this.RemoveProgressPopup).not.toBeVisible();
    }
    async popupCloseByClickCancel(){
        await this.PopupCloseButton.click()
    }
    async menuIconClick(){
        await this.MenuIcon.click();
    }
    async homeIconClick(){
        await this.Homebutton.click();
    }
    async progressBarVisibleonOuterCard(){
        await expect(this.OuterCardProgressBar).toBeVisible();
    }
    async takeawayDateVisible(){
        await expect(this.TakeawayDate).toBeVisible();
    
    }
    async closingPayItForwardPopup(){
        await this.PayitForwardPopupclose.click();
    }
    async learningDoneMessage(){
        await expect(this.DoneStatus).toBeVisible();
    }
    async clickEditTakeawayTab(){
        await this.TakeawayEditor.click();
    }
    async givingSecondValidTakeaway(){
        await this.TakeawayTextArea.fill("");
        await this.TakeawayTextArea.fill("testing sample takeaway");
    }
    async secondTakeawaySavedConfirmation(){
        await expect(this.TakeawayTextArea).toContainText("testing sample takeaway")
    }
    async editedTextVisible(){
        await expect((this.TakeawayDate).nth(0)).toContainText('(edited)')
    }
    async givingThirdValidTakeaway(){
        await this.TakeawayTextArea.fill("");
        await this.TakeawayTextArea.fill("sample2");
    }
    async clickTakeawayEditCancelButton(){
        await this.CancelButton.click();
    }
    async prevTakeawayEntactConfirmation(){
        await expect(this.TakeawayTextArea).not.toHaveText("sample2")
    }
    async emptyEditedTakeawayWarning(){
        await expect(this.WarningMessage).toContainText("Takeaway step cannot be empty");
    }
    async savingEditedTakeaway(){
        await this.EditedTakeawaySave.click()
    }

}
 
  module.exports={TakeawaysAndRemoveProgress}
  
  
   
  
   
   