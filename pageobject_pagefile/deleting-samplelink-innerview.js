const { test,expect } = require("@playwright/test");
class DeletingSampleLink{


constructor(page){

this.page=page;
this.MoreOptionsDropdown=page.locator(".link-dropdown");
this.DeleteOptionLinkOuterCard=page.locator("[data-status='delete']");
this.DeleteLinkConfirmation=page.locator("button.btn-cta-danger");
this.DeleteContainer=page.locator(".container");
}
async deletingSampleLinkFromInnerview(){
    
await this.LinkInnerViewMoreOptions.click();
await this.DeleteOptionLinkInnerview.click();
await this.DeleteLinkConfirmation.waitFor();
await this.DeleteLinkConfirmation.click({delay:2000})
await expect(this.DeleteContainer).not.toBeVisible();
}

}
module.exports={DeletingSampleLink}