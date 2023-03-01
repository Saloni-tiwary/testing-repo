const{test,expect}=require('@playwright/test');
const{LinkOuterCard}=require('../pageobject_pagefile/LinkOuterCard');
const{NavigationURL}=require('../pageobject_pagefile/NavigatingbaseURL');
const{LinkInnerViewUI}=require('../pageobject_pagefile/LinkInnerViewUI');
const{PayItforwardLinkInnerview}=require('../pageobject_pagefile/PayItForwardLinkInnerview');







test("verify when a user clicks on pay it forward option pay it forward popup opens",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const payitforwardlinkinnerview=new PayItforwardLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await payitforwardlinkinnerview.payItForwardOptionClick();
    await payitforwardlinkinnerview.payItForwardPopupConfirmation();
})
test("verify that a link cannot be paid forwarded without recepients",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const payitforwardlinkinnerview=new PayItforwardLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await payitforwardlinkinnerview.payItForwardOptionClick();
    await payitforwardlinkinnerview.shareButtonDisabled();

     
  })
  test("verify that a user cannot choose oneself while paying forward a link",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const payitforwardlinkinnerview=new PayItforwardLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await payitforwardlinkinnerview.payItForwardOptionClick();
    await payitforwardlinkinnerview.typeSelfAsRecipient();
    await payitforwardlinkinnerview.shareButtonDisabled();
  })
  test("verify that on giving just two characters search dropdown should not open",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const payitforwardlinkinnerview=new PayItforwardLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await payitforwardlinkinnerview.payItForwardOptionClick();
    await payitforwardlinkinnerview.typeTwoCharacterAsInput();
    await payitforwardlinkinnerview.recepientDropdownNotVisisbleConfirmation();
  })
  test("verify that a link is forwarded to multiple people",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const payitforwardlinkinnerview=new PayItforwardLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await payitforwardlinkinnerview.payItForwardOptionClick();
    await payitforwardlinkinnerview.typefirstOtherrecipient();
    await payitforwardlinkinnerview.firstOtherRecipientClick();
    await payitforwardlinkinnerview.typeSecondOtherRecipient();
    await payitforwardlinkinnerview.secondOtherRecipientClick();
    await payitforwardlinkinnerview.shareButtonClick();
    await payitforwardlinkinnerview.sucessMessageConfirmation();
  })
  test("verify that link is forwarded with notes",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const payitforwardlinkinnerview=new PayItforwardLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await payitforwardlinkinnerview.payItForwardOptionClick();
    await payitforwardlinkinnerview.typeSecondOtherRecipient();
    await payitforwardlinkinnerview.secondOtherRecipientClick();
    await payitforwardlinkinnerview.typeNotes();
    await payitforwardlinkinnerview.shareButtonClick();
    await payitforwardlinkinnerview.sucessMessageConfirmation();
  })


    