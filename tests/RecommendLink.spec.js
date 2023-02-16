const { test, expect, request} = require('@playwright/test');
//const {LoginPage}=require('../pageobject_pagefile/LoginPage')
const {RecommendTab} = require('../pageobject_pagefile/RecommendTab.js')
const{SimilarRecommendation}=require('../pageobject_pagefile/SimilarRecommendation')
const globalSetup = require('./global-setup.js');

test.describe('My test suite', () => {
  test.beforeAll(async () => {
    await globalSetup();
  });

    

 
 
test('recommend tab UI', async({page})=>{
    const recommendLink=new RecommendTab(page)
    recommendLink.recommendTabVisible()
    
})
test('Verify that a Video can be recommended', async({page})=>{
    const Url='https://www.youtube.com/watch?v=Pm2BvdiZUXA';
    const Min="14"
    const recommendVideoLink=new RecommendTab(page)
   await recommendVideoLink.recommendTabVisible();
   await recommendVideoLink.recommendButtonClick();
    await recommendVideoLink.linkFill(Url);
   await recommendVideoLink.minFill(Min);
   await recommendVideoLink.saveLink();
})
test.only("verify same link cannot be recommended again",async({page})=>{
    const Url="https://stackoverflow.com/questions/74980624/can-i-use-textsplit-with-find-formula"
    const Min="10"
    const similarRecommendation=new SimilarRecommendation(page)
   await similarRecommendation.clickRecommendTab();
   await similarRecommendation.enterURL(Url);
   await similarRecommendation.enterMin(Min);
   await similarRecommendation.saveUrl();
   await similarRecommendation.similarURLWarning();
     
  })


      
       
})
     
  