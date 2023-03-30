const { expect } = require("@playwright/test");

class  LinkOuterCard{
    constructor(page){
        this.page=page;
        this.LinkOuterCard=page.locator(".challenge-image");
        this.MoreOptionsDropdown=page.locator("div.card-dropdown span");
        this.MoreOptionsSelectable=page.locator(".edit-content");
        this.AddToLearn=page.locator('[data-tippy-content="Add to Learn" ]');
        this.AddedToLearn=page.locator("[data-tippy-content='Added to Learn' ]");
        this.PayItForward=page.locator(".pay-forward");
        this.ContainerPopup=page.locator(".container");
        this.EditOption=page.locator("[data-status='edit']")
        this.CardBody=page.locator(".name");


    }
    async linkOuterCardHover(linkTitle){
        const cardbody=await this.CardBody;
    const count= await cardbody.count();
    for(let i=0;i<count;i++){
        var text=linkTitle
        if(await this.CardBody.nth(i).textContent()===text){
            await this.CardBody.nth(i).hover();
           // await this.MoreOptionsDropdown.waitFor({ state: "visible"} )
    }
}
    }
    async linkOuterCardHovertoFirstCard(){
        await this.LinkOuterCard.nth(0).hover();
    }


  async  linkOuterCardClick(){
        await this.LinkOuterCard.nth(0).click();
    }
    async link_More_and_Edit_OptionsClick(linkTitle){
        const cardbody=await this.CardBody;
    const count= await cardbody.count();
    for(let i=0;i<count;i++){
        var text=linkTitle
        if(await this.CardBody.nth(i).textContent()===text){
            await this.CardBody.nth(i).hover();
            //await this.MoreOptionsDropdown.waitFor({ state: "visible"} )
            await this.MoreOptionsDropdown.nth(i).click();
            await this.EditOption.nth(i).click();
            break;

    }
}
        
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
     async  linkMoreOptionsClick(){
          await this.MoreOptionsDropdown.nth(0).click();


     }
     async editOptionClick(){
        await this.EditOption.nth(0).click();
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

 