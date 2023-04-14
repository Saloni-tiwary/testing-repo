const { test, expect, request} = require('@playwright/test');
const {RecommendTab} = require('../pageobject_pagefile/recommend-tab.js');
const{SimilarRecommendation}=require('../pageobject_pagefile/similar-recommendation');
const {NavigationURL}= require('../pageobject_pagefile/navigating-base-url');
const{LinkOuterCard}=require('../pageobject_pagefile/link-outercard');
const{DeleteLinkOutercard}=require('../pageobject_pagefile/delete-link-outercard');
const{RecommendSampleLinkWithOutClick}=require('../pageobject_pagefile/recommending-sample-link-noclick')
const{urls}=require('../constant/urls');
const{DeleteSampleLinkAPI}=require('../pageobject_pagefile/delete-samplelink-api')
const{RecommendingSampleLink}=require('../pageobject_pagefile/recommending-sample-link')

test('Verify that a Video can be recommended', async({page})=>{
     
    
    try{
       // test.setTimeout(150000)
        const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL()
     
    const recommendVideoLink=new RecommendTab(page)
    const linkoutercard= new LinkOuterCard(page);
    const deletelinkoutercard= new DeleteSampleLinkAPI(page);
    const recommendinglink=new RecommendingSampleLink(page)
    await recommendinglink.recommendingSampleArticleLink(urls.URLV2,urls.MIN,"Playwright Masterclass - Playwright Test")
    await recommendVideoLink.univNameVisible();
//     await linkoutercard.linkFirstOuterCardClick();

//     await recommendVideoLink.recommendButtonClick();
//     await recommendVideoLink.linkFill(urls.URLV2);
//     await recommendVideoLink.minFill(urls.URLV2);
//    await recommendVideoLink.saveLink();
   await recommendVideoLink.videoFirstLinkOuterCardVerify("Playwright Masterclass - Playwright Test");
    await deletelinkoutercard.deletingSampleLinkapi("Playwright Masterclass - Playwright Test")
}catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
     

    
})
test("verify that a article link can be recommended",async({page})=>{
     

    try{
       // test.setTimeout(150000)
        const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL()
    const recommendinglink=new RecommendingSampleLink(page)
    const recommendVideoLink=new RecommendTab(page)
    const linkoutercard= new LinkOuterCard(page);
    const deletelinkoutercard= new DeleteSampleLinkAPI(page);

    await recommendVideoLink.univNameVisible();
    await recommendinglink.recommendingSampleArticleLink(urls.URLAR2,urls.MIN,"Matplotlib: Formatting Axes")

//     await linkoutercard.linkFirstOuterCardClick();
    
//     await recommendVideoLink.recommendButtonClick();
//     await recommendVideoLink.linkFill(urls.URLAR2);
//     await recommendVideoLink.minFill(urls.MIN);
//    await recommendVideoLink.saveLink();
   await recommendVideoLink.articleFirstLinkOuterCardVerify("Matplotlib: Formatting Axes");
    
    await deletelinkoutercard.deletingSampleLinkapi("Matplotlib: Formatting Axes");
     
}catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }

})
test("verify that a user can recommend a book",async({page})=>{
     
     
    try{
       // test.setTimeout(150000)
        const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL()
    const recommendVideoLink=new RecommendTab(page)
    const recommendinglink=new RecommendingSampleLink(page)
    const linkoutercard= new LinkOuterCard(page);
    const deletelinkoutercard= new DeleteSampleLinkAPI(page);
    await recommendVideoLink.univNameVisible();
    await recommendinglink.recommendingSampleArticleLink(urls.URLB,urls.MIN,"Audible com | Try Audible Free Today")
//     await linkoutercard.linkFirstOuterCardClick();
    
//     await recommendVideoLink.recommendButtonClick();
//     await recommendVideoLink.linkFill(urls.URLB);
//     await recommendVideoLink.minFill(urls.MIN);
//    await recommendVideoLink.saveLink();
   await recommendVideoLink.bookFirstLinkOuterCardVerify("Audible com | Try Audible Free Today");
   
    await deletelinkoutercard.deletingSampleLinkapi("Audible com | Try Audible Free Today");
     
}catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }

})
test("verify that an audio can be recommended",async({page})=>{
     
    try{
       // test.setTimeout(150000)
        const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL()
    const recommendVideoLink=new RecommendTab(page)
    const recommendinglink=new RecommendingSampleLink(page)
    const linkoutercard= new LinkOuterCard(page);
    const deletelinkoutercard= new DeleteSampleLinkAPI(page);
    await recommendVideoLink.univNameVisible();
    await recommendinglink.recommendingSampleArticleLink(urls.URLAU2,urls.MIN,"175  Psychological Safety in Today's Workplace with Dr  Amy Edmondson (Part 1) - The Greg McKeown Podcast | Podcast on Spotify")
//     await linkoutercard.linkFirstOuterCardClick();
    
//     await recommendVideoLink.recommendButtonClick();
//     await recommendVideoLink.linkFill(urls.URLAU2);
//     await recommendVideoLink.minFill(urls.MIN);
//    await recommendVideoLink.saveLink();
   await recommendVideoLink.audioFirstLinkOuterCardVerify("175  Psychological Safety in Today's Workplace with Dr  Amy Edmondson (Part 1) - The Greg McKeown Podcast | Podcast on Spotify");
    await deletelinkoutercard.deletingSampleLinkapi("175  Psychological Safety in Today's Workplace with Dr  Amy Edmondson (Part 1) - The Greg McKeown Podcast | Podcast on Spotify");
}catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }

})
test("verify same link cannot be recommended again",async({page})=>{
    try{
       //test.setTimeout(150000)
        const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL()
    
    const similarRecommendation=new SimilarRecommendation(page)
    const linkoutercard= new LinkOuterCard(page);
    await linkoutercard.linkFirstOuterCardClick();
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
        //test.setTimeout(150000)
        const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL()
    const recommendVideoLink=new RecommendTab(page)
    const linkoutercard= new LinkOuterCard(page);
    const similarRecommendation=new SimilarRecommendation(page)
    await recommendVideoLink.univNameVisible();
    await linkoutercard.linkFirstOuterCardClick();
    
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
