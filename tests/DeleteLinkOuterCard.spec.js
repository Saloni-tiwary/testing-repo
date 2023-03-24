const{test,expect}=require('@playwright/test')
const{LinkOuterCard}=require('../pageobject_pagefile/link-outercard');
const{NavigationURL}=require('../pageobject_pagefile/navigating-base-url');
const{DeleteLinkOutercard}=require('../pageobject_pagefile/delete-link-outercard');
const {RecommendTab} = require('../pageobject_pagefile/recommend-tab.js');

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
    const Urlvideo='https://www.youtube.com/watch?v=TW4WgGTp-iw';
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

    








  






