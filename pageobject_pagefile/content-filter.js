const { expect } = require("@playwright/test");

        class ContentFilter{
        constructor(page){
        
        
        this.page=page;
        this.ContentFilterDropdown=page.locator('.filter-dropdown');
        this.ContentTypeVideo=page.locator("[data-type='video']");
        this.ContentTypeAudio=page.locator("[data-type='audio']");
        this.ContentTypeArticle=page.locator("[data-type='article']");
        this.ContentTypeBook= page.locator("[data-type='book']");
        this.ContentAllTypeSelected=page.locator(".content-type");
        this.ContentVideoTypeSelected=page.locator("span[class='challenge-type video']");
        this.ContentAudioTypeSelected=page.locator("span[class='challenge-type audio']");
        this.ContentBookTypeSelected=page.locator("span[class='challenge-type book']");
        this.ContentArticleTypeSelected=page.locator("span[class='challenge-type article']");
        }

    async allTypeContent(){
          await expect((this.ContentAllTypeSelected).nth(0)).toContainText("All Type");
        }
    
    async contentFilterClick(){
      await this.ContentFilterDropdown.click()
    }
    async contentFilterClickableVerify(){
      await expect(this.ContentAllTypeSelected.nth(0)).toContainText("All Type");
    }
    async videoFilterSelect(){
      await this.ContentTypeVideo.click()
    }
    async videoFilterAppliedVerify(){
      for(let i=0;i<15;i++){ 
        await expect((this.ContentVideoTypeSelected).nth(i)).toBeVisible();
    }
    }
    async audioFilterSelect(){
      await this.ContentTypeAudio.click()
    }
    async audioFilterAppliedVerify(){
      for(let i=0;i<15;i++){ 
        await expect((this.ContentAudioTypeSelected).nth(i)).toBeVisible();
    }
    }
    async articleFilterSelect(){
    await this.ContentTypeArticle.click()
    }

    async articleFilterAppliedVerify(){
      for(let i=0;i<15;i++){ 
        await expect((this.ContentArticleTypeSelected).nth(i)).toBeVisible();
    }
    }

    async bookFilterSelect(){
      await this.ContentTypeBook.click()
    }

    async bookFilterAppliedVerify(){
      for(let i=0;i<3;i++){ 
        await expect((this.ContentBookTypeSelected).nth(i)).toBeVisible();
    }
    }


  }

  module.exports={ContentFilter}
     