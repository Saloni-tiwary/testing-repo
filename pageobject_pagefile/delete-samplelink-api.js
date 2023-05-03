const { test,expect } = require("@playwright/test");
class DeleteSampleLinkAPI
{
    constructor(page){
        this.page=page;
        this.CardBody=page.locator(".name");
        this.MoreOptionsDropdown=page.locator("div.card-dropdown span");;
        this.DeleteOptionLinkOuterCard=page.locator("[data-status='delete']");
        this.DeleteLinkConfirmation=page.locator("button.btn-cta-danger");
        this.DeleteContainer=page.locator(".container");

    }
    async deletingSampleLinkapi(linkTitle){
         let str = linkTitle;
         str = str.toLowerCase(); // convert to lowercase
         str = str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "-"); // replace special characters and spaces with "-"
         console.log(str);


        const accessToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImQxNzJhY2MxMDJjMGRhYWQzNThiZmM5ZDYwZWEyMWJhOWVjY2I2ZWUifQ.eyJpc3MiOiJodHRwczovL2FueXdoZXJlLnN0YWdpbmcuYW55d2hlcmVhdXRoLmNvbSIsImlhdCI6MTY4MzA5Njg2MCwicHJval9pZCI6ImFueXdoZXJld29ya3MiLCJ0eXBlIjoidXNlciIsInN1YiI6IjBjZWY5MDExLTM4YTItNDVjOC1hNjdmLTRmNjQ2OWM0MDlmYyIsImV4cCI6MTY4MzEwNDA2MCwianRpIjoiNTE4ZDhkcEpYck5mZjN3QSJ9.PmPIEBvtNwbLCuFzTOb7H0dCNYDTRjEFeDTvKRq4hBz5glaHOtFsUaUnj9ElekDd9R7alv61g8LM2h4Q7WIktTYVJeMik6jYAq-AEKaX-NYCuG9B_8gKDjALQjdNeQfVutMYAtAAFGu8N65LXXLYhhWCF4tb9w4ap6yBkHDhCdJqoMtpjyaKkYJt3LtDeSTA3FrNgj8K4dffsHOEmWDDwP-8yLKOmB1tMTBqR6rnLaN78f7QAw15pMMqu_tEwgVjgIrUA07am8KJvO1L2_1MYLBAgIEwWTUmYds7sGwIjso48joFIfhfMrQ1oHgcQGQMpQHy7qOY0YE6uewn3JrspQ"
 
 
                            
  
    
  const result = await fetch(`https://stag.adaptiveu.info/api/v1/university/anywhereworks/link/${str}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}` // Use the access token obtained during authentication
      }
    })
    const response= {
      
      ok: result.ok,
      status: result.status,
      statusText: result.statusText,
      body: await result.json()

 
    };
   console.log("link is deleted"+response);


    // const cardbody=await this.CardBody;
    // const count= await cardbody.count();
    // for(let i=0;i<count;i++){
    //     var text=linkTitle
    //     if(await this.CardBody.nth(i).textContent()===text){
    //         await this.CardBody.nth(i).hover();
    //         await this.MoreOptionsDropdown.nth(i).click();
    //         await this.DeleteOptionLinkOuterCard.nth(i).click();
    //         await this.DeleteLinkConfirmation.waitFor();
    //         await this.DeleteLinkConfirmation.click({delay:2000});
    //         await expect(this.DeleteContainer).not.toBeVisible();
    //         break;
    //     }
    // }
}
}
module.exports={DeleteSampleLinkAPI}