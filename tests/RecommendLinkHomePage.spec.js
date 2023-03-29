const { test, expect, request} = require('@playwright/test');
const {RecommendTab} = require('../pageobject_pagefile/recommend-tab.js');
const{SimilarRecommendation}=require('../pageobject_pagefile/similar-recommendation');
const {NavigationURL}= require('../pageobject_pagefile/navigating-base-url');
const{LinkOuterCard}=require('../pageobject_pagefile/link-outercard');
const{DeleteLinkOutercard}=require('../pageobject_pagefile/delete-link-outercard');
const{urls}=require('../constant/urls');
 
    

 
 
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
    const linkoutercard= new LinkOuterCard(page);
    const deletelinkoutercard= new DeleteLinkOutercard(page);
    await recommendVideoLink.univNameVisible();
    
    await recommendVideoLink.recommendButtonClick();
    
    await recommendVideoLink.linkFill(urls.URLV);
    await recommendVideoLink.minFill(urls.MIN);
   await recommendVideoLink.saveLink();
   await recommendVideoLink.videoFirstLinkOuterCardVerify("Playwright Installation - 2022");
   await linkoutercard.linkOuterCardHover("Playwright Installation - 2022");
    await linkoutercard.linkMoreOptionsClick();
    await deletelinkoutercard.deleteOptionClick();
    await deletelinkoutercard.deleteLinkButtonClick();
    await deletelinkoutercard.deleteContainerNotVisible();
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
    const linkoutercard= new LinkOuterCard(page);
    const deletelinkoutercard= new DeleteLinkOutercard(page);
    await recommendVideoLink.univNameVisible();
    
    await recommendVideoLink.recommendButtonClick();
    await recommendVideoLink.linkFill(urls.URLAR);
    await recommendVideoLink.minFill(urls.MIN);
   await recommendVideoLink.saveLink();
   await recommendVideoLink.articleFirstLinkOuterCardVerify("Navigations | Playwright");
   await linkoutercard.linkOuterCardHover("Navigations | Playwright");
    await linkoutercard.linkMoreOptionsClick();
    await deletelinkoutercard.deleteOptionClick();
    await deletelinkoutercard.deleteLinkButtonClick();
    await deletelinkoutercard.deleteContainerNotVisible();
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
    const linkoutercard= new LinkOuterCard(page);
    const deletelinkoutercard= new DeleteLinkOutercard(page);
    await recommendVideoLink.univNameVisible();
    
    await recommendVideoLink.recommendButtonClick();
    await recommendVideoLink.linkFill(urls.URLB);
    await recommendVideoLink.minFill(urls.MIN);
   await recommendVideoLink.saveLink();
   await recommendVideoLink.bookFirstLinkOuterCardVerify("Audible com | Try Audible Free Today");
   await linkoutercard.linkOuterCardHover("Audible com | Try Audible Free Today");
    await linkoutercard.linkMoreOptionsClick();
    await deletelinkoutercard.deleteOptionClick();
    await deletelinkoutercard.deleteLinkButtonClick();
    await deletelinkoutercard.deleteContainerNotVisible();
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
    const linkoutercard= new LinkOuterCard(page);
    const deletelinkoutercard= new DeleteLinkOutercard(page);
    await recommendVideoLink.univNameVisible();
    
    await recommendVideoLink.recommendButtonClick();
    await recommendVideoLink.linkFill(urls.URLAU);
    await recommendVideoLink.minFill(urls.MIN);
   await recommendVideoLink.saveLink();
   await recommendVideoLink.audioFirstLinkOuterCardVerify("प्राक्कथन - Bhagavad Gita (Hindi) | Podcast on Spotify");
   await linkoutercard.linkOuterCardHover("प्राक्कथन - Bhagavad Gita (Hindi) | Podcast on Spotify");
    await linkoutercard.linkMoreOptionsClick();
    await deletelinkoutercard.deleteOptionClick();
    await deletelinkoutercard.deleteLinkButtonClick();
    await deletelinkoutercard.deleteContainerNotVisible();
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
    const linkoutercard= new LinkOuterCard(page);
    const deletelinkoutercard= new DeleteLinkOutercard(page);
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


      


     
  