const { test,expect } = require("@playwright/test");
class DeleteSampleLinkOuterCard
{
    constructor(page){
        this.page=page;
        this.CardBody=page.locator(".name");
        this.MoreOptionsDropdown=page.locator(".link-dropdown");
        this.DeleteOptionLinkOuterCard=page.locator("[data-status='delete']");
        this.DeleteLinkConfirmation=page.locator("button.btn-cta-danger");
        this.DeleteContainer=page.locator(".container");

    }
    async deletingSampleLinkOutercard(testd){

    const cardbody=await this.CardBody;
    const count= await cardbody.count();
    for(let i=0;i<count;i++){
        var text=testd
        if(await this.CardBody.nth(i).textContent()===text){
            await this.CardBody.nth(i).hover();
            await this.MoreOptionsDropdown.nth(0).click();
            await this.DeleteOptionLinkOuterCard.nth(0).click();
            await this.DeleteLinkConfirmation.waitFor();
            await this.DeleteLinkConfirmation.click({delay:2000});
            await expect(this.DeleteContainer).not.toBeVisible();
            break;
        }
    }
}
}
module.exports={DeleteSampleLinkOuterCard}