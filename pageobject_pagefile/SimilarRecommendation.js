const { expect } = require("@playwright/test");

class SimilarRecommendation{
    constructor(page){
        this.page=page
        this.RecommendTab= page.locator('.recommend-link');
        this.EnterURL=page.getByPlaceholder('Share any video/article, which benefits your organization!');
        this.LearningMin=page.getByPlaceholder('Min');
        this.RecommendingSaveButton=page.locator('#popup').getByRole('button', { name: 'Recommend' });
        this.DuplicateMessage=page.locator(".duplicate-message");

    }
   async clickRecommendTab(){

       await this.RecommendTab.click()
    }

    async enterURL(Url){

    await this.EnterURL.fill(Url);
    await page.keyboard.press('Enter');
    }

    async enterMin(Min){
       await this.LearningMin.fill(Min);
    }
    async saveUrl(){
       await this.RecommendingSaveButton.click()
    }
    async similarURLWarning(){
        await expect(this.DuplicateMessage).toHaveText("Oops! We have predicted a similar recommendation View");
    }


}
module.exports={SimilarRecommendation}

 