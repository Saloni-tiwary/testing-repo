const { test, expect, request} = require('@playwright/test');
const {RecommendTab} = require('../pageobject_pagefile/recommend-tab.js');
 
const {NavigationURL}= require('../pageobject_pagefile/navigating-base-url');
const{LinkOuterCard}=require('../pageobject_pagefile/link-outercard');
const{LinkInnerViewUI}=require('../pageobject_pagefile/linkinner-view-ui');
const{DeleteLinkInnerView}=require('../pageobject_pagefile/delete-link-innerview');
const{RecommendingSampleLink}=require('../pageobject_pagefile/recommending-sample-link')
const{DeletingSampleLink}=require('../pageobject_pagefile/deleting-samplelink-innerview');
const{urls}=require('../constant/urls');

 


test("verify that on clicking the delete from more options innerview delete popup is opened", async({page})=>{
    try{
        const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const deletelinkinnerview=new DeleteLinkInnerView(page)
    const linkinnerviewui= new LinkInnerViewUI(page);
    await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await deletelinkinnerview.deleteOptionClick();
    await deletelinkinnerview.deletePopupConfirmation();
    }catch (error) {
        console.error(`Test failed: ${error}`);
        throw error;
      }
 
  })
  test("verify on clicking cancel button of the delete popup from the innerview the popup goes away", async({page})=>{
   try {
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const deletelinkinnerview=new DeleteLinkInnerView(page)
    const linkinnerviewui= new LinkInnerViewUI(page);
    await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await deletelinkinnerview.deleteOptionClick();
    await  deletelinkinnerview.deletePopupCancelclick();
    await  deletelinkinnerview.deletePopupCancelledVerify();
  }
  catch (error) {
        console.error(`Test failed: ${error}`);
        throw error;
      }
  })
  test("verify on clicking no from the innerview on the delete popup, popup closes",async({page})=>{
    try{
        const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const deletelinkinnerview=new DeleteLinkInnerView(page)
    const linkinnerviewui= new LinkInnerViewUI(page);
    await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await deletelinkinnerview.deleteOptionClick();
    await  deletelinkinnerview.deletePopupNoButtonClick();
    await deletelinkinnerview.deletePopupCancelledVerify();
  }
  catch (error) {
        console.error(`Test failed: ${error}`);
        throw error;
      }
  })
  test('Verify that a link can be deleted from innerview', async({page})=>{
    try{
        const samplelink=new RecommendingSampleLink(page);
     const deletelink=new DeletingSampleLink(page);
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
     
    await samplelink.recommendingSampleArticleLink(urls.URL52,urls.MIN,"Emulation | Playwright");
    await deletelink.deletingSampleLinkFromInnerview();

  }catch (error) {
        console.error(`Test failed: ${error}`);
        throw error;
      }
   


    
})

    








  






