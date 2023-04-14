const { expect } = require("@playwright/test");
const{LinkBuilder} = require('./linkdetails')
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
async recommendingSampleLinkWithoutClick(Url,Min,linkname){
 
const accessToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImQxNzJhY2MxMDJjMGRhYWQzNThiZmM5ZDYwZWEyMWJhOWVjY2I2ZWUifQ.eyJpc3MiOiJodHRwczovL2FueXdoZXJlLnN0YWdpbmcuYW55d2hlcmVhdXRoLmNvbSIsImlhdCI6MTY4MTIxODIyOSwicHJval9pZCI6ImFueXdoZXJld29ya3MiLCJ0eXBlIjoidXNlciIsInN1YiI6IjBjZWY5MDExLTM4YTItNDVjOC1hNjdmLTRmNjQ2OWM0MDlmYyIsImV4cCI6MTY4MTIyNTQyOSwianRpIjoiZDE1NzY0Y0RRVkFNNTBpWiJ9.dtbIJyECneV5vDIUXDySzI4vZcgpWLVuNduoI7H6y9wlTEqqEcG7pKllEztnNl5pbWkhgF3uMJ46JtVvU9wHPLwfRfnLJD2kGD67XqFJjcX6KlwYI3rOZeDgNjEb4SiAVp7MYuLwXRx53O-yAHxXVHt4Y5fZEyUdPkomZDU5ETFxJlNM5_7RWBaBq7val8COPjqwYUzdyGSKmAkOa0iwmdb5O3ApxNrrixE5YKb4mhO8_uiWObNgvlY8rrwRwm0Z-uQ1licJL6s1LDQw-Hi7WnFzGYUp2COLoaPP9WDNpFyHtGK0spPBAETt5s-AO34rPEip6wmObe-vDNCGrSBxwg"

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
    console.log(response);






     
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
//     const cardbody=await this.CardBody;
//     const count= await cardbody.count();
//     for(let i=0;i<count;i++){
//         var text=linkname
//         if(await this.CardBody.nth(i).textContent()===text){
//             console.log("recommended sample link and not clicked ");
//           break;
//         }
    


// }

}
}
module.exports={RecommendSampleLinkWithOutClick}