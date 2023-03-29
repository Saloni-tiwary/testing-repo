const { test, expect, request} = require('@playwright/test');
const {RecommendTab} = require('../pageobject_pagefile/recommend-tab.js');
const{SimilarRecommendation}=require('../pageobject_pagefile/similar-recommendation');
const {NavigationURL}= require('../pageobject_pagefile/navigating-base-url');
const{LinkOuterCard}=require('../pageobject_pagefile/link-outercard');
const{DeleteLinkOutercard}=require('../pageobject_pagefile/delete-link-outercard');
const{RecommendSampleLinkWithOutClick}=require('../pageobject_pagefile/recommending-sample-link-noclick')
const{urls}=require('../constant/urls');

test('Verify that a Video can be recommended', async({page})=>{
     
    
    try{
        const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL()
     
    const recommendVideoLink=new RecommendTab(page)
    const linkoutercard= new LinkOuterCard(page);
    const deletelinkoutercard= new DeleteLinkOutercard(page);
    await recommendVideoLink.univNameVisible();
    await linkoutercard.linkOuterCardClick();

    await recommendVideoLink.recommendButtonClick();
    await recommendVideoLink.linkFill(urls.URLV2);
    await recommendVideoLink.minFill(urls.MIN);
   await recommendVideoLink.saveLink();
   await recommendVideoLink.videoFirstLinkOuterCardVerify("Playwright Masterclass - Playwright Test");
   await linkoutercard.linkOuterCardHover("Playwright Masterclass - Playwright Test");
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
        const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL()
    const recommendVideoLink=new RecommendTab(page)
    const linkoutercard= new LinkOuterCard(page);
    const deletelinkoutercard= new DeleteLinkOutercard(page);
    await recommendVideoLink.univNameVisible();
    await linkoutercard.linkOuterCardClick();
    
    await recommendVideoLink.recommendButtonClick();
    await recommendVideoLink.linkFill(urls.URLAR2);
    await recommendVideoLink.minFill(urls.MIN);
   await recommendVideoLink.saveLink();
   await recommendVideoLink.articleFirstLinkOuterCardVerify("Matplotlib: Formatting Axes");
   await linkoutercard.linkOuterCardHover("Matplotlib: Formatting Axes");
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
        const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL()
    const recommendVideoLink=new RecommendTab(page)
    const linkoutercard= new LinkOuterCard(page);
    const deletelinkoutercard= new DeleteLinkOutercard(page);
    await recommendVideoLink.univNameVisible();
    await linkoutercard.linkOuterCardClick();
    
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
        const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL()
    const recommendVideoLink=new RecommendTab(page)
    const linkoutercard= new LinkOuterCard(page);
    const deletelinkoutercard= new DeleteLinkOutercard(page);
    await recommendVideoLink.univNameVisible();
    await linkoutercard.linkOuterCardClick();
    
    await recommendVideoLink.recommendButtonClick();
    await recommendVideoLink.linkFill(urls.URLAU2);
    await recommendVideoLink.minFill(urls.MIN);
   await recommendVideoLink.saveLink();
   await recommendVideoLink.audioFirstLinkOuterCardVerify("175  Psychological Safety in Today's Workplace with Dr  Amy Edmondson (Part 1) - The Greg McKeown Podcast | Podcast on Spotify");
   await linkoutercard.linkOuterCardHover("175  Psychological Safety in Today's Workplace with Dr  Amy Edmondson (Part 1) - The Greg McKeown Podcast | Podcast on Spotify");
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
        const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL()
    
    const similarRecommendation=new SimilarRecommendation(page)
    const linkoutercard= new LinkOuterCard(page);
    await linkoutercard.linkOuterCardClick();
   await similarRecommendation.clickRecommendTab();
   await similarRecommendation.enterURL(urls.URLSIM2);
   await similarRecommendation.enterMin(urls.MIN);
   await similarRecommendation.saveUrl();
   await similarRecommendation.similarURLWarning();
}catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
     
  })
test("Verify On entering an exact similar URL the user is able to redirect to it ",async({page})=>{
    
    try{
        const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL()
    const recommendVideoLink=new RecommendTab(page)
    const linkoutercard= new LinkOuterCard(page);
    const similarRecommendation=new SimilarRecommendation(page)
    await recommendVideoLink.univNameVisible();
    await linkoutercard.linkOuterCardClick();
    
    await recommendVideoLink.recommendButtonClick();
    await recommendVideoLink.linkFill(urls.URLSIM3);
    await recommendVideoLink.minFill(urls.MIN);
   await recommendVideoLink.saveLink();
   await similarRecommendation.navigateSimilarUrl();
   await similarRecommendation.navigatedSimilarUrlVerify();
}catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
  })
