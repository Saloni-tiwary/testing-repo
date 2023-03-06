const{test,expect}=require('@playwright/test');
const{LinkOuterCard}=require('../pageobject_pagefile/link-outercard');
const{NavigationURL}=require('../pageobject_pagefile/navigating-base-url');
const{EditPopupLinkInnerview}=require('../pageobject_pagefile/edit-popup-linkInnerview');
const{LinkInnerViewUI}=require('../pageobject_pagefile/linkinner-view-ui');




test("verify on clicking the edit option edit popup is visible",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopupinnerview=new EditPopupLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await editpopupinnerview.editOptionClick();
    await editpopupinnerview.editPopupConfirmation();
  
  })
  test("verify on giving null minutes from edit the link is not saved",async({page})=>{




    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopupinnerview=new EditPopupLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await editpopupinnerview.editOptionClick();
    await editpopupinnerview.nullMinInput();
    await editpopupinnerview.clickSaveButton();
    await editpopupinnerview.linkMinError();


})
test("verify that min field is not accepting special characters as input",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopupinnerview=new EditPopupLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await editpopupinnerview.editOptionClick();
    await editpopupinnerview.linkMinSpecialCharFill();
    await editpopupinnerview.clickSaveButton();
    await editpopupinnerview.linkMinError();

})
test("verify that min field is not accepting 0/null value",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopupinnerview=new EditPopupLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await editpopupinnerview.editOptionClick();
    await editpopupinnerview.linkZeroMinFill();
    await editpopupinnerview.clickSaveButton();
    await editpopupinnerview.linkMinError();


  })
  test("verify that min field is not accepting only alphabets ",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopupinnerview=new EditPopupLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await editpopupinnerview.editOptionClick();
    await editpopupinnerview.linkMinAlphabetsFill();
    await editpopupinnerview.clickSaveButton();
    await editpopupinnerview.linkMinError();

  })
  test("verify that on updating the minutes, the same is reflected in the link innerview",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopupinnerview=new EditPopupLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await editpopupinnerview.editOptionClick();
    await editpopupinnerview.linkMinValidInput();
    await editpopupinnerview.clickSaveButton();
    await editpopupinnerview.validLinkMinConfirmation();

  })
  test("verify if the link title is edited, the updated title is reflected in the linkinnerview",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopupinnerview=new EditPopupLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await editpopupinnerview.editOptionClick();
    await editpopupinnerview.validLinkTitleInput();
    await editpopupinnerview.clickSaveButton();
    await editpopupinnerview.validLinkTitleConfirm();

  })
  test("verify that the title should not contain only special characters",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopupinnerview=new EditPopupLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await editpopupinnerview.editOptionClick();
    await editpopupinnerview.specialCharLinkTitleInput();
    await editpopupinnerview.clickSaveButton();
    await editpopupinnerview.invalidTitleWarning();

  })
  // only numbers is left, would write after recommend link feature is fixed

  test("verify that the link should not have an empty title",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopupinnerview=new EditPopupLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await editpopupinnerview.editOptionClick();
    await editpopupinnerview.nullLinkTitleInput();
    await editpopupinnerview.clickSaveButton();
    await editpopupinnerview.linkTitleError();

  })
  //leading and trailing spaces 
  test("verify that a link title should not accept more than 200 characters",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopupinnerview=new EditPopupLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await editpopupinnerview.editOptionClick();
    await editpopupinnerview.linkTitleMaxCharLimitBreach();
    await editpopupinnerview.clickSaveButton();
    await editpopupinnerview.linkTitleError();
 
  
  })
  test("verify if the link field is empty  it should not be saved",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopupinnerview=new EditPopupLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await editpopupinnerview.editOptionClick();
    await editpopupinnerview.linkURLEmpty();
    await editpopupinnerview.clickSaveButton();
    await editpopupinnerview.linkURLError();
 
  })
   
  test("verify if the link field contains only alphabets it should not be saved",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopupinnerview=new EditPopupLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await editpopupinnerview.editOptionClick();
    await editpopupinnerview.linkURLonlyAlphabetsInput();
    await editpopupinnerview.clickSaveButton();
    await editpopupinnerview.linkURLError();
 
  })
  test("verify if the link field contains only numbers it should not be saved",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopupinnerview=new EditPopupLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await editpopupinnerview.editOptionClick();
    await editpopupinnerview.linkURLonlyNumbersInput();
    await editpopupinnerview.clickSaveButton();
    await editpopupinnerview.linkURLError();
 
  })
  test("verify if the link field contains only special charcters should not be saved",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopupinnerview=new EditPopupLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await editpopupinnerview.editOptionClick();
    await editpopupinnerview.linkURLonlySpecialcharInput();
    await editpopupinnerview.clickSaveButton();
    await editpopupinnerview.linkURLError();
 
  })
   
  test("verify if invalid link is added an error message is thrown",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopupinnerview=new EditPopupLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await editpopupinnerview.editOptionClick();
    await editpopupinnerview.invalidLinkURLInput();
    await editpopupinnerview.clickSaveButton();
    await editpopupinnerview.linkURLwarning();
  })
 