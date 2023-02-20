const { test, expect, request} = require('@playwright/test');
const { HomePage } = require('../pageobject_pagefile/ HomePage');
const {NavigationURL}= require('../pageobject_pagefile/navigatingbaseURL')

    
// test('recommend tab UI', async({page})=>{
//     const recommendLink=new RecommendTab(page)
//     recommendLink.recommendTabVisible()
//})
test("verify on clicking menu, sidebar disappers if visible",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
     const homepage=new HomePage(page)
     await homepage.menuIconclick(); //menu icon disappers 
     await homepage.checkMenuIconDisappears();
    })
test("verify on clicking the menu sidebar appears, if not visible before",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL()
    const homepage=new HomePage(page)
     await homepage.menuIconclick(); //menu icon disappers 
     await homepage.menuIconclick();//menu icon reappers
     await homepage.menuIconAppears();
    })