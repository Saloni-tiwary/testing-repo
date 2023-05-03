const { expect } = require("@playwright/test");
const { url } = require("inspector");
const{LinkBuilder} = require('./linkdetails')
class RecommendingSampleLink{

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
this.LinkSource=page.locator("span.source-type");
}
async recommendingSampleArticleLink(Url,Min,linkname){
 
    const accessToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImQxNzJhY2MxMDJjMGRhYWQzNThiZmM5ZDYwZWEyMWJhOWVjY2I2ZWUifQ.eyJpc3MiOiJodHRwczovL2FueXdoZXJlLnN0YWdpbmcuYW55d2hlcmVhdXRoLmNvbSIsImlhdCI6MTY4MzAzMjEzMywicHJval9pZCI6ImFkYXB0aXZldSIsInR5cGUiOiJ1c2VyIiwic3ViIjoiMGNlZjkwMTEtMzhhMi00NWM4LWE2N2YtNGY2NDY5YzQwOWZjIiwiZXhwIjoxNjgzMDM5MzMzLCJqdGkiOiI3MTZmN2E1clF5OEh6ckM0In0.ZYHuvkCp0LS-8tbk6vhhxh0vK_XcDRSg2UzcEPfdzGIQwkGndagGRZXRTLKW14Q4-Wg2vJBZXiCQv4s0jSys14R7fdvoeH0Ae8JnPVYOJw1k2oV8Z8v7jiTO_za7_2atwLT9xreVupckCxYCdXP1tdz0K4iprP5BFyFrNoq4nMeBrjYu37XcDPU6-6AiWU-vvZXDdAdJuVU1QDuMYUaUC4tED-ab6C6zj8B4q5t8V-PfKyrrnnDDATQ9Q_N_lg5SsqVpLGaXErxznnNmCVPxTTJB8XheDXIrXAgZsdcZoUpgIiDgneqmVO3bvJK1xuhL61CZcBDwS3d565Q6NqtmXg"

    const link = new LinkBuilder()
  .setName(linkname)
  .setMinutes(Min)
  .setDescription("")
  .setImage("https://storage.googleapis.com/adaptiveyou/adaptiveu-v2/images/default-green.svg")
  .setOrigin("Stack Overflow")
  .setSemanticName("")
  .addStep({
    subSteps: [
      {
        type: "embed",
        details: Url
    }
    ]
  })
  .addStep({
    subSteps: [
      {
        type: "takeaway"
      }
    ]
  })
  .setContentType([])
  .setCategories([])
  .setSourceSemanticName(["anywhereworks"])
  .setIsAllowDuplicate(false)
  .setSourceType("university")
  .build();
  const response = await fetch('https://stag.adaptiveu.info/api/v1/university/anywhereworks/link', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}` // Use the access token obtained during authentication
      },
      body: JSON.stringify(link)
        
      
    });

//   const response1 = await page.evaluate(async ({accessToken,link}) => {
     

//     return {
//       ok: response.ok,
//       status: response.status,
//       statusText: response.statusText,
//       body: await response.json()
//     };
//   }, {accessToken,link});
   console.log(response);
//   console.log(JSON.stringify(link))
  



     
    // await expect(this.UnivNameVisible).toBeVisible()
    // const header=await this.CloseHeader.isVisible()
    // console.log(header);
    // if(header===true){
    //     await this.CloseHeader.click()
    // }
    // await this.Recommendbutton.click();
    // await this.EnterURL.fill(Url);
    // await this.page.keyboard.press('Enter');
    // await this.LearningMin.fill(Min);
    // await this.RecommendingSaveButton.click();
    // await this.page.waitForLoadState("networkidle");
    // const cardbody=await this.CardBody;
    // const count= await cardbody.count();
    // for(let i=0;i<count;i++){
    //     var text=linkname
    //     if(await this.CardBody.nth(i).textContent()===text){
    //         await this.CardBody.nth(i).click();
    //         await this.LinkSource.waitFor();
    //       break;
    //     }
    


// }

}
}
module.exports={RecommendingSampleLink}
 


 