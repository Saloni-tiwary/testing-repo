const { expect } = require("@playwright/test");

class RecommendTab{

 
constructor(page){
this.page=page;
this.RecommendTab=page.locator('.recommend-btn');
this.Recommendpopup=page.locator('section .container');
this.Recommendbutton=page.getByRole('button', { name: '+ Recommend' })
this.UnivDropdown=page.locator('div .track-dropdown');
this.EnterURL=page.getByPlaceholder('Share any video/article, which benefits your organization!')
this.LearningMin= page.getByPlaceholder('Min')
this.RecommendingSaveButton= page.locator('#popup').getByRole('button', { name: 'Recommend' })
this.LinkOuterCardVerify=page.locator(".tippy").nth(0);
this.UnivNameVisible=page.locator(".university-name");

}
async recommendTabVisible(){

    await this.RecommendTab.click("[data-option*=recommend]");
    await expect(this.Recommendpopup).toContainText('Recommend');

}
async univNameVisible(){
await expect(this.UnivNameVisible).toBeVisible()
}
async recommendButtonClick(){
    
    await this.Recommendbutton.click();
     
}
async linkFill(Url){
    
    await this.EnterURL.fill(Url);
    //await this.page.waitForSelector('.track-dropdown');
    //await this.UnivDropdown.waitFor();
    
    await this.page.keyboard.press('Enter');
}
async minFill(Min){
    await this.LearningMin.fill(Min);
}
async saveLink(){
    await this.RecommendingSaveButton.click()
}
async videoFirstLinkOuterCardVerify(){
    await expect(this.LinkOuterCardVerify).toContainText("10 Minute Timer")
}
async articleFirstLinkOuterCardVerify(){
    await expect(this.LinkOuterCardVerify).toContainText("test a website that has a page")
}
async bookFirstLinkOuterCardVerify(){
    await expect(this.LinkOuterCardVerify).toContainText("Audible com")
}
async audioFirstLinkOuterCardVerify(){
    await expect(this.LinkOuterCardVerify).toContainText("175 Psychological Safety")
}
}
module.exports={RecommendTab};





