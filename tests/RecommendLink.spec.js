const { test, expect, request} = require('@playwright/test');
const {RecommendTab} = require('../pageobject_pagefile/RecommendTab.js')
const{SimilarRecommendation}=require('../pageobject_pagefile/SimilarRecommendation')
const {NavigationURL}= require('../pageobject_pagefile/NavigatingbaseURL')
    

 
 
test('recommend tab UI', async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL()
    const recommendLink=new RecommendTab(page)
    recommendLink.recommendTabVisible()
    
})
test.only('Verify that a Video can be recommended', async({page})=>{
    const Url='https://www.youtube.com/watch?v=Pm2BvdiZUXA';
    const Min="14"
    try{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL()
    const recommendVideoLink=new RecommendTab(page)
    await recommendVideoLink.recommendButtonClick();
    await recommendVideoLink.linkFill(Url);
    await recommendVideoLink.minFill(Min);
   await recommendVideoLink.saveLink();
    }
    catch(err){console.error(err)}

    
})
test("verify same link cannot be recommended again",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL()
    const Url="https://stackoverflow.com/questions/74980624/can-i-use-textsplit-with-find-formula"
    const Min="10"
    const similarRecommendation=new SimilarRecommendation(page)
   await similarRecommendation.clickRecommendTab();
   await similarRecommendation.enterURL(Url);
   await similarRecommendation.enterMin(Min);
   await similarRecommendation.saveUrl();
   await similarRecommendation.similarURLWarning();
     
  })


      


     
  