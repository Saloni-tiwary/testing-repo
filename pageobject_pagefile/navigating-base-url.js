const { test,expect } = require("@playwright/test");
    class NavigationURL
{

    constructor(page){
        this.page=page
        this.MyLearningTab=page.locator("a.page-url.page.myq-btn");
        this.HomePageTab=page.locator("a.page-url.page.home-btn");
        this.UniversityName=page.locator("a.university-name.home-redirect");
        this.CardBody=page.locator(".name");

         
        
    }

async navigationURL(){
     await this.page.goto('https://my.staging.adaptiveu.app/');
    
     
}
}
module.exports={NavigationURL}