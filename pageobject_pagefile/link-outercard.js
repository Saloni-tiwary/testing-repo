const { expect } = require("@playwright/test");

class  LinkOuterCard{
    constructor(page){
        this.page=page;
        this.LinkOuterCard=page.locator(".challenge-image");
        this.MoreOptionsDropdown=page.locator(".link-dropdown");
        this.MoreOptionsSelectable=page.locator(".edit-content");
        this.AddToLearn=page.locator('[data-tippy-content="Add to Learn" ]');
        this.AddedToLearn=page.locator("[data-tippy-content='Added to Learn' ]");
        this.PayItForward=page.locator(".pay-forward");
        this.ContainerPopup=page.locator(".container");
        this.EditOption=page.locator("[data-status='edit']")

    }
    async linkOuterCardHover(){
        await this.LinkOuterCard.nth(0).hover();
    }

  async  linkOuterCardClick(){
        await this.LinkOuterCard.nth(0).click();
    }
    async linkMoreOptionsClick(){
        await this.MoreOptionsDropdown.nth(0).click();
    }
    async payItForwardClick(){
        await this.PayItForward.nth(0).click()
    }
    async payItForwardPopupVerify(){
        await expect(this.ContainerPopup).toContainText("Pay it Forward");
    }
    async moreOptionsSelectVerify(){
        await expect((this.MoreOptionsSelectable).nth(0)).toContainText("Edit")

    }
    async editOptionClick(){
        await this.EditOption.nth(0).click()


    }
   async editPopupVerify(){
         await expect(this.ContainerPopup).toBeVisible();
    }
    async addToLearnClick(){
        await this.AddToLearn.nth(0).click()
    }
    async addedToLearnVerify(){
        await expect((this.AddedToLearn).nth(0)).toBeEnabled();
    }
}

module.exports={LinkOuterCard}

 