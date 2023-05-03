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
 
    const accessToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImQxNzJhY2MxMDJjMGRhYWQzNThiZmM5ZDYwZWEyMWJhOWVjY2I2ZWUifQ.eyJpc3MiOiJodHRwczovL2FueXdoZXJlLnN0YWdpbmcuYW55d2hlcmVhdXRoLmNvbSIsImlhdCI6MTY4MzEwMDExOCwicHJval9pZCI6ImFueXdoZXJld29ya3MiLCJ0eXBlIjoidXNlciIsInN1YiI6IjBjZWY5MDExLTM4YTItNDVjOC1hNjdmLTRmNjQ2OWM0MDlmYyIsImV4cCI6MTY4MzEwNzMxOCwianRpIjoiZTc5ZGE4VkxQbjZPcTZFRiJ9.YuZ7BcMrEl19xDlIwvMXq7BgiKdpdw0x9Ylz_4bDsTcKSdLAzuG6b3nfltWdCSBuLCPQqacJmStilhelRAPhSM6STbDRK24TY9vW-GAiNYvIXZV7rjKZiDaa4fSw742fy3b8ldTDzT_oxm5bglIc3AtIN7_TiI1zzJEpT58T6xu-jG5hseVlLPJtKM9h2rJGAPd88my7hU_AWe6ofiK7uEWf6NJPLMBeZjFbuZsjl1o501yAbpuXoz6lgb5vEsUjzS3T7h82WQYioEU1MNq2cc9BiT7sGL2mHsXqLLsbg-uTX1p9pKdXwprKpLMEl6di5VHKu0lgtNY1D7OLehGDPA"

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
  const response = await fetch(process.env.URL_RECOMMEND, {
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
 


 