const { expect } = require("@playwright/test");
class RecommendSampleLinkWithOutClick{

constructor(page){
this.page=page
this.UnivNameVisible=page.locator(".university-name");
this.Recommendbutton=page.getByRole('button', { name: '+ Recommend' })
this.EnterURL=page.getByPlaceholder('Share any video/article, which benefits your organization!')
this.LearningMin= page.getByPlaceholder('Min')
this.RecommendingSaveButton= page.locator('#popup').getByRole('button', { name: 'Recommend' })
this.LinkOuterCardVerify=page.locator(".tippy").nth(0);
this.CardBody=page.locator(".name");
this.CloseHeader= page.locator("i#close-icon");
}
async recommendingSampleLinkWithoutClick(Url,Min,test){
     
    await expect(this.UnivNameVisible).toBeVisible()
    const header=await this.CloseHeader.isVisible()
    console.log(header);
    if(header===true){
        await this.CloseHeader.click()
    }
    await this.Recommendbutton.click();
    await this.EnterURL.fill(Url);
    await this.page.keyboard.press('Enter');
    await this.LearningMin.fill(Min);
    await this.RecommendingSaveButton.click();
    await this.page.waitForLoadState("networkidle");
    const cardbody=await this.CardBody;
    const count= await cardbody.count();
    for(let i=0;i<count;i++){
        var text=test
        if(await this.CardBody.nth(i).textContent()===text){
            console.log("recommended sample link and not clicked ");
          break;
        }
    


}

}
}
module.exports={RecommendSampleLinkWithOutClick}