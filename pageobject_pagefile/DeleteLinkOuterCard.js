const { test,expect } = require("@playwright/test");
class DeleteLinkOutercard{
    constructor(page){
        this.page=page;
        this.DeleteOptionLinkOuterCard=page.locator("[data-status='delete']");
        this.DeleteContainer=page.locator(".container");
        this.DeletePopupCancelButton=page.locator(".popup-close");
        this.DeletePopupNoButton=page.getByRole('button',{name:'No'});

    }
    async deleteOptionClick(){
        await this.DeleteOptionLinkOuterCard.nth(0).click();
    }
    async deletePopupConfirmation(){
        await expect(this.DeleteContainer).toContainText("Delete Link");
    }
    async deletePopupCancelclick(){
        await this.DeletePopupCancelButton.click();
    }
    async deletePopupCancelledVerify(){
        await expect(this.DeleteContainer).not.toBeVisible();
    }
    async deletePopupNoButtonClick(){
        await this.DeletePopupNoButton.click();
    }
}
 module.exports={DeleteLinkOutercard}