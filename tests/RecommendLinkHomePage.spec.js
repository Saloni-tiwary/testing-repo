const { test, expect, request} = require('@playwright/test');
const {RecommendTab} = require('../pageobject_pagefile/recommend-tab.js');
const{SimilarRecommendation}=require('../pageobject_pagefile/similar-recommendation');
const {NavigationURL}= require('../pageobject_pagefile/navigating-base-url');
const{LinkOuterCard}=require('../pageobject_pagefile/link-outercard');
const{DeleteLinkOutercard}=require('../pageobject_pagefile/delete-link-outercard');
 
    

 
 
test('recommend tab UI', async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL()
    const recommendLink=new RecommendTab(page)
   await recommendLink.recommendTabVisible()
    
})
test('Verify that a Video can be recommended', async({page})=>{
    const Urlvideo='https://www.youtube.com/watch?v=hOIJRGuBkS4';
    const Minvideo="14"
    
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL()
    const recommendVideoLink=new RecommendTab(page)
    const linkoutercard= new LinkOuterCard(page);
    const deletelinkoutercard= new DeleteLinkOutercard(page);
    await recommendVideoLink.univNameVisible();
    
    await recommendVideoLink.recommendButtonClick();
    
    await recommendVideoLink.linkFill(Urlvideo);
    await recommendVideoLink.minFill(Minvideo);
   await recommendVideoLink.saveLink();
   await recommendVideoLink.videoFirstLinkOuterCardVerify();
   await linkoutercard.linkOuterCardHover();
    await linkoutercard.linkMoreOptionsClick();
    await deletelinkoutercard.deleteOptionClick();
    await deletelinkoutercard.deleteLinkButtonClick();
    await deletelinkoutercard.deleteContainerNotVisible();
     

    
})
test("verify that a article link can be recommended",async({page})=>{
    const Urlarticle="https://playwright.dev/docs/navigations"
    const Minarticle="14"
    
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL()
    const recommendVideoLink=new RecommendTab(page)
    const linkoutercard= new LinkOuterCard(page);
    const deletelinkoutercard= new DeleteLinkOutercard(page);
    await recommendVideoLink.univNameVisible();
    
    await recommendVideoLink.recommendButtonClick();
    await recommendVideoLink.linkFill(Urlarticle);
    await recommendVideoLink.minFill(Minarticle);
   await recommendVideoLink.saveLink();
   await recommendVideoLink.articleFirstLinkOuterCardVerify();
   await linkoutercard.linkOuterCardHover();
    await linkoutercard.linkMoreOptionsClick();
    await deletelinkoutercard.deleteOptionClick();
    await deletelinkoutercard.deleteLinkButtonClick();
    await deletelinkoutercard.deleteContainerNotVisible();

})
test("verify that a user can recommend a book",async({page})=>{
    const Urlbook="https://www.audible.in/pd/The-Selfish-Gene-Audiobook/B07CNG6GPX"
    const Minbook="14"
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL()
    const recommendVideoLink=new RecommendTab(page)
    const linkoutercard= new LinkOuterCard(page);
    const deletelinkoutercard= new DeleteLinkOutercard(page);
    await recommendVideoLink.univNameVisible();
    
    await recommendVideoLink.recommendButtonClick();
    await recommendVideoLink.linkFill(Urlbook);
    await recommendVideoLink.minFill(Minbook);
   await recommendVideoLink.saveLink();
   await recommendVideoLink.bookFirstLinkOuterCardVerify();
   await linkoutercard.linkOuterCardHover();
    await linkoutercard.linkMoreOptionsClick();
    await deletelinkoutercard.deleteOptionClick();
    await deletelinkoutercard.deleteLinkButtonClick();
    await deletelinkoutercard.deleteContainerNotVisible();

})
test("verify that an audio can be recommended",async({page})=>{
    const Urlaudio="https://open.spotify.com/episode/2Q3frHZltANbcAKT8rZHpG";
    const Minaudio="14";
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL()
    const recommendVideoLink=new RecommendTab(page)
    const linkoutercard= new LinkOuterCard(page);
    const deletelinkoutercard= new DeleteLinkOutercard(page);
    await recommendVideoLink.univNameVisible();
    
    await recommendVideoLink.recommendButtonClick();
    await recommendVideoLink.linkFill(Urlaudio);
    await recommendVideoLink.minFill(Minaudio);
   await recommendVideoLink.saveLink();
   await recommendVideoLink.audioFirstLinkOuterCardVerify();
   await linkoutercard.linkOuterCardHover();
    await linkoutercard.linkMoreOptionsClick();
    await deletelinkoutercard.deleteOptionClick();
    await deletelinkoutercard.deleteLinkButtonClick();
    await deletelinkoutercard.deleteContainerNotVisible();

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
test("Verify On entering an exact similar URL the user is able to redirect to it ",async({page})=>{
    const Urlsimilar="https://stackoverflow.com/questions/74980624/can-i-use-textsplit-with-find-formula"
    const Minsilimar="14";
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL()
    const recommendVideoLink=new RecommendTab(page)
    const linkoutercard= new LinkOuterCard(page);
    const deletelinkoutercard= new DeleteLinkOutercard(page);
    const similarRecommendation=new SimilarRecommendation(page)
    await recommendVideoLink.univNameVisible();
    
    await recommendVideoLink.recommendButtonClick();
    await recommendVideoLink.linkFill(Urlsimilar);
    await recommendVideoLink.minFill(Minsilimar);
   await recommendVideoLink.saveLink();
   await similarRecommendation.navigateSimilarUrl();
   await similarRecommendation.navigatedSimilarUrlVerify();
  })


      


     
  