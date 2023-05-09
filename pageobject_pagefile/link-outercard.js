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
        this.LinkSource=page.locator("span.source-type");
        this.MyLearningTab=page.locator("a.page-url.page.myq-btn");
        this.HomePageTab=page.locator("a.page-url.page.home-btn");
        this.UniversityName=page.locator("a.university-name.home-redirect");


    }
    async universityNameVisible(){
        await expect(this.UniversityName).toContainText("AnywhereWorks");
        await this.CardBody.nth(3).waitFor({state:"visible"})

    }
    async refreshPage(){
    await this.MyLearningTab.click();
    await this.page.waitForTimeout(1000);
     await this.HomePageTab.click();
    }

    async linkOuterCardHover(linkTitle){
    const cardbody=await this.CardBody;
     
    const count= await cardbody.count();
    console.log(count)
    for(let i=0;i<count;i++){
        var text=linkTitle
        if(await this.CardBody.nth(i).textContent()===text){
            await this.CardBody.nth(i).hover();
            break;
           // await this.MoreOptionsDropdown.waitFor({ state: "visible"} )
    }
 if(i >= 20) { // check if i is greater than 10
        i = 0;
        // set i back to 0
    }
}
    }
    async linkOuterCardHovertoFirstCard(){
        await this.LinkOuterCard.nth(0).hover();
    }
    async  linkFirstOuterCardClick(){
        await this.LinkOuterCard.nth(0).click()
    }

  async  linkOuterCardClick(linkTitle){
    //await this.LinkOuterCard.nth(0).click()
    
    const cardbody=await this.CardBody;
    await this.CardBody.nth(3).waitFor({state:"attached"})
     
    const count= await cardbody.count();
    for(let i=0;i<count;i++){
        var text1=linkTitle
        if(await this.CardBody.nth(i).textContent()===text1){
            await this.CardBody.nth(i).click();
            await this.LinkSource.waitFor();
             
            break;
            }
            
    if(i >= 20) { // check if i is greater than 10
        i=0
        //  await this.MyLearningTab.click();
        //  await this.HomePageTab.click();
       break;
        
    }
    
}


}
    async link_More_and_Edit_OptionsClick(linkTitle){
        const cardbody=await this.CardBody;
       await this.CardBody.nth(3).waitFor({state:"attached"})
         
    const count= await cardbody.count();
    for(let i=0;i<count;i++){
        var text2=linkTitle
        if(await this.CardBody.nth(i).textContent()===text2){
            await this.CardBody.nth(i).hover();
            //await this.MoreOptionsDropdown.waitFor({ state: "visible"} )
            await this.MoreOptionsDropdown.nth(i).click();
            await this.EditOption.nth(i).click();
            break;

    }
    
   if(i >= 20) { // check if i is greater than 10
        // await this.MyLearningTab.click();
        //  await this.HomePageTab.click();
        i = 0; // set i back to 0
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

 