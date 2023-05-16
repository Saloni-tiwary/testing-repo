const { test,expect } = require("@playwright/test");
class LinkInnerViewUI{
    constructor(page){
        this.page=page;
        this.LinkTitle=  page.locator("a span.name");
        this.LinkOuterCard=page.locator(".challenge-image");
        this.LinkInnerviewTitle=page.locator("div h2.link-name");
        this.RecommenderName=page.locator(".creator-name");
        this.UniversityName=page.locator("div a#anywhereworks");
        this.RecommendationDate=page.locator(".creation-date");
        this.LinkInnerViewLearningMin=page.locator(".link-min");
        this.LinkInnerViewMoreOptions=page.locator(".innerview-details div.dropdown.link-dropdown");
        this.MoreOptionsVerify=page.locator("div .dropdown-menu");
        this.LinkOuterCardAddedToLearn=page.locator("figcaption",{has: page.locator("[data-tippy-content='Added to Learn']")}).nth(0);
        this.LinkInnerViewAddedToLearn=page.locator(".add-myq.active")
        


    }
    async sameLinkClickedVerify(){
        let Title=await this.LinkTitle.nth(0).textContent()
        console.log(Title)
        await this.LinkOuterCard.nth(0).click();
        await expect( this.LinkInnerviewTitle).toContainText(Title.substring(0,7));
    }
     
     
    async recommenderNameVisible(){
   await expect(this.RecommenderName).toBeVisible();

}
   async universityNameVisible(){
    await expect(this.UniversityName).toContainText("AnywhereWorks");
}
   async recommendationDateVisible(){
    await expect(this.RecommendationDate).toBeVisible();
   }
   async learningMinutesVisible(){
    await expect(this.LinkInnerViewLearningMin).toBeVisible();
   }
   async moreOptionsClick(){

    await this.LinkInnerViewMoreOptions.click();
   }
 async moreOptionsVisible(){
    
    await expect(this.MoreOptionsVerify.first()).toBeVisible();
 }
 async selectAddedToLearnLinkFromOuterCard(){
    await this.LinkOuterCardAddedToLearn.click();
}
async verifyLinkAddedToLearnInInnerView(){
    await expect(this.LinkInnerViewAddedToLearn).toBeVisible();
}

}
module.exports={LinkInnerViewUI};