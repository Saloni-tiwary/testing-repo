const { test,expect } = require("@playwright/test");
class DeleteLinkInnerView{
    constructor(page){
        this.page=page;
        
        this.DeleteOptionLinkInnerview=page.locator(".dropdown-list.delete-content");
        this.DeleteContainer=page.locator(".container");
        this.DeletePopupCancelButton=page.locator(".popup-close");
        this.DeletePopupNoButton=page.getByRole('button',{name:'No'});
        this.DeleteLinkConfirmation=page.locator("button.btn-cta-danger");

    }
    async deleteOptionClick(){
        await this.DeleteOptionLinkInnerview.click();
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
    async deleteLinkButtonClick(){
        await this.DeleteLinkConfirmation.waitFor();
        await this.DeleteLinkConfirmation.click({delay:2000})
    }
    async deleteContainerNotVisible(){
        await expect(this.DeleteContainer).not.toBeVisible();
    }
     
}
 module.exports={DeleteLinkInnerView}