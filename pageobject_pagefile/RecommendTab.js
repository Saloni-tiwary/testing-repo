const { expect } = require("@playwright/test");

class RecommendTab{

 
constructor(page){
this.page=page;
this.RecommendTab=page.locator('.recommend-btn');
this.Recommendpopup=page.locator('section .container');
this.Recommendbutton=page.getByRole('button', { name: '+ Recommend' })
this.UnivDropdown=page.locator('.track-dropdown');
this.EnterURL=page.getByPlaceholder('Share any video/article, which benefits your organization!')
this.LearningMin= page.getByPlaceholder('Min')
this.RecommendingSaveButton= page.locator('#popup').getByRole('button', { name: 'Recommend' })
}
async recommendTabVisible(){
    await this.RecommendTab.click("[data-option*=recommend]");
    await expect(this.Recommendpopup).toContainText('Recommend');

}
async recommendButtonClick(){
    await this.Recommendbutton.click();
}
async linkFill(Url){
    await this.UnivDropdown.waitFor({state: 'attached'});
    await this.EnterURL.fill(Url);
    await page.keyboard.press('Enter');
}
async minFill(Min){
    await this.LearningMin.fill(Min);
}
async saveLink(){
    await this.RecommendingSaveButton.click()
}
}
module.exports={RecommendTab};





