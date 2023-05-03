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
 
    const accessToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImQxNzJhY2MxMDJjMGRhYWQzNThiZmM5ZDYwZWEyMWJhOWVjY2I2ZWUifQ.eyJpc3MiOiJodHRwczovL2FueXdoZXJlLnN0YWdpbmcuYW55d2hlcmVhdXRoLmNvbSIsImlhdCI6MTY4MzA5Njg2MCwicHJval9pZCI6ImFueXdoZXJld29ya3MiLCJ0eXBlIjoidXNlciIsInN1YiI6IjBjZWY5MDExLTM4YTItNDVjOC1hNjdmLTRmNjQ2OWM0MDlmYyIsImV4cCI6MTY4MzEwNDA2MCwianRpIjoiNTE4ZDhkcEpYck5mZjN3QSJ9.PmPIEBvtNwbLCuFzTOb7H0dCNYDTRjEFeDTvKRq4hBz5glaHOtFsUaUnj9ElekDd9R7alv61g8LM2h4Q7WIktTYVJeMik6jYAq-AEKaX-NYCuG9B_8gKDjALQjdNeQfVutMYAtAAFGu8N65LXXLYhhWCF4tb9w4ap6yBkHDhCdJqoMtpjyaKkYJt3LtDeSTA3FrNgj8K4dffsHOEmWDDwP-8yLKOmB1tMTBqR6rnLaN78f7QAw15pMMqu_tEwgVjgIrUA07am8KJvO1L2_1MYLBAgIEwWTUmYds7sGwIjso48joFIfhfMrQ1oHgcQGQMpQHy7qOY0YE6uewn3JrspQ"

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
 


 