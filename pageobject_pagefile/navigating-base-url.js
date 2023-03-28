
    class NavigationURL
{

    constructor(page){
        this.page=page
         
        
    }

async navigationURL(){
     await this.page.goto('https://my.staging.adaptiveu.app/');
     
}
}
module.exports={NavigationURL}