const{test,expect}=require('@playwright/test')
const{LinkOuterCard}=require('../pageobject_pagefile/link-outercard');
const{NavigationURL}=require('../pageobject_pagefile/navigating-base-url');
const{DeleteLinkOutercard}=require('../pageobject_pagefile/delete-link-outercard');
const {RecommendTab} = require('../pageobject_pagefile/recommend-tab.js');
const{RecommendingSampleLink}=require('../pageobject_pagefile/recommending-sample-link');
const{DeleteSampleLinkOuterCard}=require('../pageobject_pagefile/delete-samplelink-outercard')
 
const{urls}=require('../constant/urls');




test("verify that on clicking the delete from more options delete popup is opened", async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const deletelinkoutercard= new DeleteLinkOutercard(page);
    await linkoutercard.linkOuterCardHover();
    await linkoutercard.linkMoreOptionsClick();
    await deletelinkoutercard.deleteOptionClick();
    await deletelinkoutercard.deletePopupConfirmation();
 
  })
  test("verify on clicking cancel button of the delete popup the popup goes away", async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const deletelinkoutercard= new DeleteLinkOutercard(page);
     
    await linkoutercard.linkOuterCardHover();
    await linkoutercard.linkMoreOptionsClick();
    await deletelinkoutercard.deleteOptionClick();
    await deletelinkoutercard.deletePopupCancelclick();
    await deletelinkoutercard.deletePopupCancelledVerify();
  })
  test("verify on clicking no on the delete popup, popup closes",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const deletelinkoutercard= new DeleteLinkOutercard(page);
    await linkoutercard.linkOuterCardHover();
    await linkoutercard.linkMoreOptionsClick();
    await deletelinkoutercard.deleteOptionClick();
    await deletelinkoutercard.deletePopupNoButtonClick();
    await deletelinkoutercard.deletePopupCancelledVerify();
     

  })
  test('Verify that a link can be deleted', async({page})=>{
     
     
    const deletelinkoutercard=new DeleteSampleLinkOuterCard(page)
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL()
    const recommendVideoLink=new RecommendTab(page)
    //const linkoutercard= new LinkOuterCard(page);
    await recommendVideoLink.univNameVisible();
    
    await recommendVideoLink.recommendButtonClick();
    
    await recommendVideoLink.linkFill(urls.URL53);
    await recommendVideoLink.minFill(urls.MIN);
   await recommendVideoLink.saveLink();
   await recommendVideoLink.videoFirstLinkOuterCardVerify("Evaluating JavaScript | Playwright");
   await deletelinkoutercard.deletingSampleLinkOutercard("Evaluating JavaScript | Playwright")


    
})

    








  






