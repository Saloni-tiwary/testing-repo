const { expect } = require("@playwright/test");
const { Console } = require("console");

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
this.CloseHeader= page.locator("i#close-icon");
this.CardBody=page.locator(".name");

}
async recommendTabVisible(){

    await this.RecommendTab.click("[data-option*=recommend]");
    await expect(this.Recommendpopup).toContainText('Recommend');

}
async univNameVisible(){
await expect(this.UnivNameVisible).toBeVisible();
const header=await this.CloseHeader.isVisible()
    console.log(header);
    if(header===true){
        await this.CloseHeader.click()
    }

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
    await this.RecommendingSaveButton.click();
    await this.page.waitForLoadState("networkidle");
}
async videoFirstLinkOuterCardVerify(test1){
     
    const cardbody=await this.CardBody;
    const count= await cardbody.count();
    for(let i=0;i<count;i++){
        var text=test1
        if(await this.CardBody.nth(i).textContent()===text){
            console.log("video is recommended")
          break;
        }
    


}

    
}
async articleFirstLinkOuterCardVerify(test2){
    const cardbody=await this.CardBody;
    const count= await cardbody.count();
    for(let i=0;i<count;i++){
        var text=test2
        if(await this.CardBody.nth(i).textContent()===text){
           console.log("article is recommended")
          break;
        }
    }
}
async bookFirstLinkOuterCardVerify(test3){
    const cardbody=await this.CardBody;
    const count= await cardbody.count();
    for(let i=0;i<count;i++){
        var text=test3
        if(await this.CardBody.nth(i).textContent()===text){
            console.log("book is recommended")
          break;
        }
    }
}
async audioFirstLinkOuterCardVerify(test4){
    const cardbody=await this.CardBody;
    const count= await cardbody.count();
    for(let i=0;i<count;i++){
        var text=test4
        if(await this.CardBody.nth(i).textContent()===text){
             console.log("audio is recommended")
          break;
        }
    }
    //await expect(this.LinkOuterCardVerify).toContainText("175 Psychological Safety")
}
}
module.exports={RecommendTab};





