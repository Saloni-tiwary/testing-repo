const { test,expect } = require("@playwright/test");
const authorizedFetch=require ('../Config/global-setup2')
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


       

  const result = await authorizedFetch(`https://stag.adaptiveu.info/api/v1/university/anywhereworks/link/${str}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        //Authorization: `Bearer ${accessToken}` // Use the access token obtained during authentication
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