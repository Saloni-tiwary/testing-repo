const { expect } = require("@playwright/test");

class HomePage{
    constructor(page){
        this.page=page;
        this.MenuIcon=page.locator(".menu-icon");
        this.SidebarHidden=page.locator(".au");
        this.SidebarVisible=page.locator(".sidebar-open");

    }
       async menuIconclick(){
            await this.MenuIcon.click();
       }
       async checkMenuIconDisappears(){
            await expect(this.SidebarHidden).toHaveClass('au')
        }
        

        async menuIconAppears(){
            await expect(this.SidebarVisible).toHaveClass("au sidebar-open");
        }
}
module.exports={HomePage}
 