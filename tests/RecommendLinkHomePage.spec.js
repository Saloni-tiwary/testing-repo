const { test, expect, request} = require('@playwright/test');
const {RecommendTab} = require('../pageobject_pagefile/recommend-tab.js');
const{SimilarRecommendation}=require('../pageobject_pagefile/similar-recommendation');
const {NavigationURL}= require('../pageobject_pagefile/navigating-base-url');
////const{LinkOuterCard}=require('../pageobject_pagefile/link-outercard');
const{DeleteLinkOutercard}=require('../pageobject_pagefile/delete-link-outercard');
const{urls}=require('../constant/urls');
const{DeleteSampleLinkOuterCard}=require('../pageobject_pagefile/delete-samplelink-outercard')
 
    

 
 
test('recommend tab UI', async({page})=>{
    try{
        const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL()
    const recommendLink=new RecommendTab(page)
   await recommendLink.recommendTabVisible();
}catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
    
})
test('Verify that a Video can be recommended', async({page})=>{
     
    
    try{
        test.setTimeout(120000)
        const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL()
    const recommendVideoLink=new RecommendTab(page)
    
    const deletelinkoutercard= new  DeleteSampleLinkOuterCard(page);
    await recommendVideoLink.univNameVisible();
    
    await recommendVideoLink.recommendButtonClick();
    
    await recommendVideoLink.linkFill(urls.URLV);
    await recommendVideoLink.minFill(urls.MIN);
   await recommendVideoLink.saveLink();
   await recommendVideoLink.videoFirstLinkOuterCardVerify("Playwright Installation - 2022");
    
     
    await deletelinkoutercard.deletingSampleLinkOutercard("Playwright Installation - 2022");
}catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
     

    
})
test("verify that a article link can be recommended",async({page})=>{
    
    
    try{
        test.setTimeout(120000)
        const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL()
    const recommendVideoLink=new RecommendTab(page)
    
    const deletelinkoutercard= new DeleteSampleLinkOuterCard(page);
    await recommendVideoLink.univNameVisible();
    
    await recommendVideoLink.recommendButtonClick();
    await recommendVideoLink.linkFill(urls.URLAR);
    await recommendVideoLink.minFill(urls.MIN);
   await recommendVideoLink.saveLink();
   await recommendVideoLink.articleFirstLinkOuterCardVerify("Navigations | Playwright");
    
    await deletelinkoutercard.deletingSampleLinkOutercard("Navigations | Playwright")
}catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }

})
test("verify that a user can recommend a book",async({page})=>{
     
    try{
        test.setTimeout(120000)
        const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL()
    const recommendVideoLink=new RecommendTab(page)
     
    const deletelinkoutercard= new DeleteSampleLinkOuterCard(page);
    await recommendVideoLink.univNameVisible();
    
    await recommendVideoLink.recommendButtonClick();
    await recommendVideoLink.linkFill(urls.URLB);
    await recommendVideoLink.minFill(urls.MIN);
   await recommendVideoLink.saveLink();
   await recommendVideoLink.bookFirstLinkOuterCardVerify("Audible com | Try Audible Free Today");
    
    await deletelinkoutercard.deletingSampleLinkOutercard("Audible com | Try Audible Free Today");
}catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }

})
test("verify that an audio can be recommended",async({page})=>{
    
    try{
        test.setTimeout(120000)
        const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL()
    const recommendVideoLink=new RecommendTab(page)
     
    const deletelinkoutercard= new DeleteSampleLinkOuterCard(page);
    await recommendVideoLink.univNameVisible();
    
    await recommendVideoLink.recommendButtonClick();
    await recommendVideoLink.linkFill(urls.URLAU);
    await recommendVideoLink.minFill(urls.MIN);
   await recommendVideoLink.saveLink();
   await recommendVideoLink.audioFirstLinkOuterCardVerify("प्राक्कथन - Bhagavad Gita (Hindi) | Podcast on Spotify");
   
    await deletelinkoutercard.deletingSampleLinkOutercard("प्राक्कथन - Bhagavad Gita (Hindi) | Podcast on Spotify");
}catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }

})
test("verify same link cannot be recommended again",async({page})=>{
    try{
        test.setTimeout(120000)
        const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL()
    const recommendLink=new RecommendTab(page)
     
    const similarRecommendation=new SimilarRecommendation(page)
    await recommendLink.univNameVisible();
    await recommendLink.recommendButtonClick();
    await recommendLink.linkFill(urls.URLSAME);
    await recommendLink.minFill(urls.MIN);
   await recommendLink.saveLink();
   await similarRecommendation.similarURLWarning();
}catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
     
  })
test("Verify On entering an exact similar URL the user is able to redirect to it ",async({page})=>{
     
    try{
        test.setTimeout(120000)
        const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL()
    const recommendVideoLink=new RecommendTab(page)
     
    const similarRecommendation=new SimilarRecommendation(page)
    await recommendVideoLink.univNameVisible();
    
    await recommendVideoLink.recommendButtonClick();
    await recommendVideoLink.linkFill(urls.URLSAME);
    await recommendVideoLink.minFill(urls.MIN);
   await recommendVideoLink.saveLink();
   await similarRecommendation.navigateSimilarUrl();
   await similarRecommendation.navigatedSimilarUrlVerify();
}catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
  })


      


     
  