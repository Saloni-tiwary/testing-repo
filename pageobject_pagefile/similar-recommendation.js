const { expect } = require("@playwright/test");

class SimilarRecommendation{
    constructor(page){
        this.page=page
        this.RecommendTab= page.locator('.recommend-btn');
        this.EnterURL=page.getByPlaceholder('Share any video/article, which benefits your organization!');
        this.LearningMin=page.getByPlaceholder('Min');
        this.RecommendingSaveButton=page.locator('#popup').getByRole('button', { name: 'Recommend' });
        this.DuplicateMessage=page.locator(".duplicate-message");
        this.ViewSimilarURL=page.locator(".duplicate-message a")
        this.LinkName=page.locator(".link-name");
        this.CloseHeader= page.locator("i#close-icon");

    }
   async clickRecommendTab(){
    const header=await this.CloseHeader.isVisible()
    
    if(header===true){
        await this.CloseHeader.click()
        await this.RecommendTab.click()
    }
    else{
    
        await this.RecommendTab.click()
    }

       
    }

    async enterURL(Url){

    await this.EnterURL.fill(Url);
    await this.page.keyboard.press('Enter');
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
    async navigateSimilarUrl(){
        await this.ViewSimilarURL.click()
    }
    async navigatedSimilarUrlVerify(){
        await expect(this.LinkName).toContainText("@commitlint/prompt-cli - npm");
    }



}
module.exports={SimilarRecommendation}

 