const{test,expect}=require('@playwright/test');
const{LinkOuterCard}=require('../pageobject_pagefile/link-outercard');
const{NavigationURL}=require('../pageobject_pagefile/navigating-base-url');
const{LinkInnerViewUI}=require('../pageobject_pagefile/linkinner-view-ui');
const{PayItforwardLinkInnerview}=require('../pageobject_pagefile/pay-it-forward-link-innerview');







test("verify when a user clicks on pay it forward option pay it forward popup opens",async({page})=>{
    try{
      const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const payitforwardlinkinnerview=new PayItforwardLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await linkoutercard.linkFirstOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await payitforwardlinkinnerview.payItForwardOptionClick();
    await payitforwardlinkinnerview.payItForwardPopupConfirmation();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
})
test("verify that a link cannot be paid forwarded without recepients",async({page})=>{
    try{
      const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const payitforwardlinkinnerview=new PayItforwardLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await linkoutercard.linkFirstOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await payitforwardlinkinnerview.payItForwardOptionClick();
    await payitforwardlinkinnerview.shareButtonDisabled();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
     
  })
  test("verify that a user cannot choose oneself while paying forward a link",async({page})=>{
    try{
      const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const payitforwardlinkinnerview=new PayItforwardLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await linkoutercard.linkFirstOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await payitforwardlinkinnerview.payItForwardOptionClick();
    await payitforwardlinkinnerview.typeSelfAsRecipient();
    await payitforwardlinkinnerview.shareButtonDisabled();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
  })
  test("verify that on giving just two characters search dropdown should not open",async({page})=>{
    try{
      const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const payitforwardlinkinnerview=new PayItforwardLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await linkoutercard.linkFirstOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await payitforwardlinkinnerview.payItForwardOptionClick();
    await payitforwardlinkinnerview.typeTwoCharacterAsInput();
    await payitforwardlinkinnerview.recepientDropdownNotVisisbleConfirmation();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
  })
  test("verify that a link is forwarded to multiple people",async({page})=>{
    try{
      const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const payitforwardlinkinnerview=new PayItforwardLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await linkoutercard.linkFirstOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await payitforwardlinkinnerview.payItForwardOptionClick();
    await payitforwardlinkinnerview.typefirstOtherrecipient();
    await payitforwardlinkinnerview.firstOtherRecipientClick();
    await payitforwardlinkinnerview.typeSecondOtherRecipient();
    await payitforwardlinkinnerview.secondOtherRecipientClick();
    await payitforwardlinkinnerview.shareButtonClick();
    await payitforwardlinkinnerview.sucessMessageConfirmation();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
  })
  test("verify that link is forwarded with notes",async({page})=>{
    try{
      const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const payitforwardlinkinnerview=new PayItforwardLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await linkoutercard.linkFirstOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await payitforwardlinkinnerview.payItForwardOptionClick();
    await payitforwardlinkinnerview.typeSecondOtherRecipient();
    await payitforwardlinkinnerview.secondOtherRecipientClick();
    await payitforwardlinkinnerview.typeNotes();
    await payitforwardlinkinnerview.shareButtonClick();
    await payitforwardlinkinnerview.sucessMessageConfirmation();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
  })


    