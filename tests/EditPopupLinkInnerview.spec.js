const { test, expect } = require('@playwright/test');
const {LinkOuterCard}=require('../pageobject_pagefile/link-outercard');
//const {RecommendTab} = require('../pageobject_pagefile/recommend-tab.js');
const {NavigationURL}=require('../pageobject_pagefile/navigating-base-url');
const {EditPopupLinkInnerview}=require('../pageobject_pagefile/edit-popup-linkInnerview');
const {LinkInnerViewUI}=require('../pageobject_pagefile/linkinner-view-ui');
//const{DeleteLinkOutercard}=require('../pageobject_pagefile/delete-link-outercard');
const {RecommendingSampleLink}=require('../pageobject_pagefile/recommending-sample-link')
const {DeletingSampleLink}=require('../pageobject_pagefile/deleting-samplelink-innerview');
const {urls}=require('../constant/urls');
 



test("verify on clicking the edit option edit popup is visible",async({page})=>{
  

  try{
    test.setTimeout(130000)
    const samplelink=new RecommendingSampleLink(page);
  const deletelink=new DeletingSampleLink(page);
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopupinnerview=new EditPopupLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await samplelink.recommendingSampleArticleLink(urls.URL1,urls.MIN,"Screenshots | Playwright");
    //await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await editpopupinnerview.editOptionClick();
    await editpopupinnerview.editPopupConfirmation();
    await editpopupinnerview.closeEditPopupInnerview();
    await deletelink.deletingSampleLinkFromInnerview();
}catch (error) {
      console.error(`Test failed: ${error}`);
      throw error;
    }
     
  })
  test("verify on giving null minutes from edit the link is not saved",async({page})=>{

     
   
     try{
      test.setTimeout(130000)
      const samplelink=new RecommendingSampleLink(page);
     const deletelink=new DeletingSampleLink(page);


    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopupinnerview=new EditPopupLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await samplelink.recommendingSampleArticleLink(urls.URL2,urls.MIN,"The Best Close-Up ASMR Videos from OBJECT");
    //await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await editpopupinnerview.editOptionClick();
    await editpopupinnerview.nullMinInput();
    await editpopupinnerview.clickSaveButton();
    await editpopupinnerview.linkMinError();
    await editpopupinnerview.closeEditPopupInnerview();
    await deletelink.deletingSampleLinkFromInnerview();
  }catch (error) {
      console.error(`Test failed: ${error}`);
      throw error;
    }


})
test("verify that min field is not accepting special characters as input",async({page})=>{
   
 
   try{
    test.setTimeout(130000)
    const samplelink=new RecommendingSampleLink(page);
   const deletelink=new DeletingSampleLink(page);
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopupinnerview=new EditPopupLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await samplelink.recommendingSampleArticleLink(urls.URL3,urls.MIN,"Welcome | Playwright");
    //await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await editpopupinnerview.editOptionClick();
    await editpopupinnerview.linkMinSpecialCharFill();
    await editpopupinnerview.clickSaveButton();
    await editpopupinnerview.linkMinError();
    await editpopupinnerview.closeEditPopupInnerview();
    await deletelink.deletingSampleLinkFromInnerview();
}catch (error) {
      console.error(`Test failed: ${error}`);
      throw error;
    }

})
test("verify that min field is not accepting 0/null value",async({page})=>{
  
   
     try{
      test.setTimeout(130000)
      const samplelink=new RecommendingSampleLink(page);
     const deletelink=new DeletingSampleLink(page);
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopupinnerview=new EditPopupLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await samplelink.recommendingSampleArticleLink(urls.URL4,urls.MIN,"Playwright Library | Playwright");
   // await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await editpopupinnerview.editOptionClick();
    await editpopupinnerview.linkZeroMinFill();
    await editpopupinnerview.clickSaveButton();
    await editpopupinnerview.linkMinError();
    await editpopupinnerview.closeEditPopupInnerview();
    await deletelink.deletingSampleLinkFromInnerview();
}catch (error) {
      console.error(`Test failed: ${error}`);
      throw error;
    }


  })
  test("verify that min field is not accepting only alphabets ",async({page})=>{
     
   
     try{
      test.setTimeout(130000)
      const samplelink=new RecommendingSampleLink(page);
     const deletelink=new DeletingSampleLink(page);
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopupinnerview=new EditPopupLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await samplelink.recommendingSampleArticleLink(urls.URL5,urls.MIN,"APIRequest | Playwright");
   // await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await editpopupinnerview.editOptionClick();
    await editpopupinnerview.linkMinAlphabetsFill();
    await editpopupinnerview.clickSaveButton();
    await editpopupinnerview.linkMinError();
    await editpopupinnerview.closeEditPopupInnerview();
    await deletelink.deletingSampleLinkFromInnerview();
  }catch (error) {
      console.error(`Test failed: ${error}`);
      throw error;
    }
  })
  // test.only("verify that on updating the minutes, the same is reflected in the link innerview",async({page})=>{
    
   
  //    const samplelink=new RecommendingSampleLink(page);
  //    const deletelink=new DeletingSampleLink(page);
  //   const navigationurl= new NavigationURL(page)
  //   await navigationurl.navigationURL();
  //   const linkoutercard= new LinkOuterCard(page);
  //   const editpopupinnerview=new EditPopupLinkInnerview(page);
  //   const linkinnerviewui=new LinkInnerViewUI(page);
  //   await samplelink.recommendingSampleArticleLink(urls.URL6,urls.MIN,"APIRequestContext | Playwright");
  //  // await linkoutercard.linkOuterCardClick();
  //   await linkinnerviewui.moreOptionsClick();
  //   await editpopupinnerview.editOptionClick();
  //   await editpopupinnerview.linkMinValidInput();
  //   await editpopupinnerview.clickSaveButton();
  //   await editpopupinnerview.validLinkMinConfirmation();
    
  //   await deletelink.deletingSampleLinkFromInnerview();

  // })
  test("verify if the link title is edited, the updated title is reflected in the linkinnerview",async({page})=>{
     
   
     try{
      test.setTimeout(130000)
      const samplelink=new RecommendingSampleLink(page);
     const deletelink=new DeletingSampleLink(page);
   
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopupinnerview=new EditPopupLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await samplelink.recommendingSampleArticleLink(urls.URL7,urls.MIN,"APIResponse | Playwright");
   // await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await editpopupinnerview.editOptionClick();
    await editpopupinnerview.validLinkTitleInput();
    await editpopupinnerview.clickSaveButton();
    await editpopupinnerview.validLinkTitleConfirm();
    await deletelink.deletingSampleLinkFromInnerview();
  }catch (error) {
      console.error(`Test failed: ${error}`);
      throw error;
    }
  })
  test("verify that the title should not contain only special characters",async({page})=>{
     
   
     try{
      test.setTimeout(130000)
      const samplelink=new RecommendingSampleLink(page);
     const deletelink=new DeletingSampleLink(page);
    
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopupinnerview=new EditPopupLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await samplelink.recommendingSampleArticleLink(urls.URL8,urls.MIN,"Accessibility | Playwright");
    //await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await editpopupinnerview.editOptionClick();
    await editpopupinnerview.specialCharLinkTitleInput();
    await editpopupinnerview.clickSaveButton();
    await editpopupinnerview.invalidTitleWarning();
    await editpopupinnerview.closeEditPopupInnerview();
    await deletelink.deletingSampleLinkFromInnerview();
  }catch (error) {
      console.error(`Test failed: ${error}`);
      throw error;
    }

  })

  test("verify that a linkname can be edited to only numbers",async({page})=>{
     
   
     try{
      test.setTimeout(130000)
      const samplelink=new RecommendingSampleLink(page);
     const deletelink=new DeletingSampleLink(page);
    
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopupinnerview=new EditPopupLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await samplelink.recommendingSampleArticleLink(urls.URL9,urls.MIN,"Browser | Playwright");
    //await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await editpopupinnerview.editOptionClick();
    await editpopupinnerview.onlyNumInput();
    await editpopupinnerview.clickSaveButton();
    await editpopupinnerview.verifyNumTitleInput();
    await deletelink.deletingSampleLinkFromInnerview();
  }catch (error) {
      console.error(`Test failed: ${error}`);
      throw error;
    }
  })
  

  test("verify that the link should not have an empty title",async({page})=>{
    
   
     try{
      test.setTimeout(130000)
      const samplelink=new RecommendingSampleLink(page);
     const deletelink=new DeletingSampleLink(page);
    
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopupinnerview=new EditPopupLinkInnerview(page);
    
    const linkinnerviewui=new LinkInnerViewUI(page);
    await samplelink.recommendingSampleArticleLink(urls.URL10,urls.MIN,"BrowserContext | Playwright");
    // await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await editpopupinnerview.editOptionClick();
    await editpopupinnerview.nullLinkTitleInput();
    await editpopupinnerview.clickSaveButton();
    await editpopupinnerview.linkTitleError();
    await editpopupinnerview.closeEditPopupInnerview();
    await deletelink.deletingSampleLinkFromInnerview();
  }catch (error) {
      console.error(`Test failed: ${error}`);
      throw error;
    }
  })
  test("verify that Leading spaces are trimmed",async({page})=>{
     
   try{
    test.setTimeout(130000)
     const samplelink=new RecommendingSampleLink(page);
     const deletelink=new DeletingSampleLink(page);
    
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopupinnerview=new EditPopupLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await samplelink.recommendingSampleArticleLink(urls.URL11,urls.MIN,"BrowserServer | Playwright");
    //await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await editpopupinnerview.editOptionClick();
    await editpopupinnerview.leadingSpaceInput();
    await editpopupinnerview.clickSaveButton();
    await editpopupinnerview.leadingSpaceTrimmedVerify();
    await deletelink.deletingSampleLinkFromInnerview();
  }catch (error) {
      console.error(`Test failed: ${error}`);
      throw error;
    }
  })
  test("verify that Trailing spaces are trimmed",async({page})=>{
     
   
     try{
      test.setTimeout(130000)
      const samplelink=new RecommendingSampleLink(page);
     const deletelink=new DeletingSampleLink(page);
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopupinnerview=new EditPopupLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await samplelink.recommendingSampleArticleLink(urls.URL12,urls.MIN,"BrowserType | Playwright");
    //await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await editpopupinnerview.editOptionClick();
    await editpopupinnerview.trailingSpacesInput();
    await editpopupinnerview.clickSaveButton();
    await editpopupinnerview.trailingSpaceTrimmedVerify();
    await deletelink.deletingSampleLinkFromInnerview();
  }catch (error) {
      console.error(`Test failed: ${error}`);
      throw error;
    }
  })
  test("verify that extra intermediate spaces are trimmed",async({page})=>{
     
   
     try{
      test.setTimeout(130000)
      const samplelink=new RecommendingSampleLink(page);
     const deletelink=new DeletingSampleLink(page);
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopupinnerview=new EditPopupLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await samplelink.recommendingSampleArticleLink(urls.URL13,urls.MIN,"CDPSession | Playwright");
    //await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await editpopupinnerview.editOptionClick();
    await editpopupinnerview.extraIntermediateSpaceInput();
    await editpopupinnerview.clickSaveButton();
    await editpopupinnerview.extraIntermediateSpaceTrimmedVerify();
    await deletelink.deletingSampleLinkFromInnerview();

  }catch (error) {
      console.error(`Test failed: ${error}`);
      throw error;
    }
  })
  //leading and trailing spaces 
  test("verify that a link title should not accept more than 200 characters",async({page})=>{
     
   
     try{
      test.setTimeout(130000)
      const samplelink=new RecommendingSampleLink(page);
     const deletelink=new DeletingSampleLink(page);
    
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopupinnerview=new EditPopupLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await samplelink.recommendingSampleArticleLink(urls.URL14,urls.MIN,"ConsoleMessage | Playwright");
   // await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await editpopupinnerview.editOptionClick();
    await editpopupinnerview.linkTitleMaxCharLimitBreach();
    await editpopupinnerview.clickSaveButton();
    await editpopupinnerview.linkTitleError();
    await editpopupinnerview.closeEditPopupInnerview();
    await deletelink.deletingSampleLinkFromInnerview();
  }catch (error) {
      console.error(`Test failed: ${error}`);
      throw error;
    }
  
  })
  test("verify if the link field is empty  it should not be saved",async({page})=>{
     
     try{
      test.setTimeout(130000)
      const samplelink=new RecommendingSampleLink(page);
     const deletelink=new DeletingSampleLink(page);
    
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopupinnerview=new EditPopupLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await samplelink.recommendingSampleArticleLink(urls.URL15,urls.MIN,"Coverage | Playwright");
    // await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await editpopupinnerview.editOptionClick();
    await editpopupinnerview.linkURLEmpty();
    await editpopupinnerview.clickSaveButton();
    await editpopupinnerview.linkURLError();
    await editpopupinnerview.closeEditPopupInnerview();
    await deletelink.deletingSampleLinkFromInnerview();
  }catch (error) {
      console.error(`Test failed: ${error}`);
      throw error;
    }
  })
   
  test("verify if the link field contains only alphabets it should not be saved",async({page})=>{
     
   
     try{
      test.setTimeout(130000)
      const samplelink=new RecommendingSampleLink(page);
     const deletelink=new DeletingSampleLink(page);
   
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopupinnerview=new EditPopupLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await samplelink.recommendingSampleArticleLink(urls.URL16,urls.MIN,"Dialog | Playwright");
    //await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await editpopupinnerview.editOptionClick();
    await editpopupinnerview.linkURLonlyAlphabetsInput();
    await editpopupinnerview.clickSaveButton();
    await editpopupinnerview.linkURLError();
    await editpopupinnerview.closeEditPopupInnerview();
    await deletelink.deletingSampleLinkFromInnerview();
  }catch (error) {
      console.error(`Test failed: ${error}`);
      throw error;
    }
  })
  test("verify if the link field contains only numbers it should not be saved",async({page})=>{
     
   
     try{
      test.setTimeout(130000)
      const samplelink=new RecommendingSampleLink(page);
     const deletelink=new DeletingSampleLink(page);
   
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopupinnerview=new EditPopupLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await samplelink.recommendingSampleArticleLink(urls.URL17,urls.MIN,"Download | Playwright");
   // await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await editpopupinnerview.editOptionClick();
    await editpopupinnerview.linkURLonlyNumbersInput();
    await editpopupinnerview.clickSaveButton();
    await editpopupinnerview.linkURLError();
    await editpopupinnerview.closeEditPopupInnerview();
    await deletelink.deletingSampleLinkFromInnerview();
  }catch (error) {
      console.error(`Test failed: ${error}`);
      throw error;
    }
  })
  test("verify if the link field contains only special charcters should not be saved",async({page})=>{
     
   
     try{
      test.setTimeout(130000)
      const samplelink=new RecommendingSampleLink(page);
     const deletelink=new DeletingSampleLink(page);
    
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopupinnerview=new EditPopupLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await samplelink.recommendingSampleArticleLink(urls.URL18,urls.MIN,"ElementHandle | Playwright");
   // await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsVisible()
    await linkinnerviewui.moreOptionsClick();
    await editpopupinnerview.editOptionClick();
    await editpopupinnerview.linkURLonlySpecialcharInput();
    await editpopupinnerview.clickSaveButton();
    await editpopupinnerview.linkURLError();
    await editpopupinnerview.closeEditPopupInnerview();
    await deletelink.deletingSampleLinkFromInnerview();
  }catch (error) {
      console.error(`Test failed: ${error}`);
      throw error;
    }
  })
   
  test("verify if invalid link is added an error message is thrown",async({page})=>{
    
   
     try{
      test.setTimeout(130000)
      const samplelink=new RecommendingSampleLink(page);
     const deletelink=new DeletingSampleLink(page);
    
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopupinnerview=new EditPopupLinkInnerview(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await samplelink.recommendingSampleArticleLink(urls.URL19,urls.MIN,"FileChooser | Playwright");
   // await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.moreOptionsClick();
    await editpopupinnerview.editOptionClick();
    await editpopupinnerview.invalidLinkURLInput();
    await editpopupinnerview.clickSaveButton();
    await editpopupinnerview.linkURLwarning();
    await editpopupinnerview.closeEditPopupInnerview();
    await deletelink.deletingSampleLinkFromInnerview();
  }catch (error) {
      console.error(`Test failed: ${error}`);
      throw error;
    }
  })
//   test('Verify that a link reccommended can be deleted', async({page})=>{
     
    
//     const navigationurl= new NavigationURL(page)
//     await navigationurl.navigationURL()
     
//     const linkoutercard= new LinkOuterCard(page);
//     const deletelinkoutercard= new DeleteLinkOutercard(page);
     
//    await linkoutercard.linkOuterCardHover();
//     await linkoutercard.linkMoreOptionsClick();
//     await deletelinkoutercard.deleteOptionClick();
//     await deletelinkoutercard.deleteLinkButtonClick();
//     await deletelinkoutercard.deleteContainerNotVisible();
     

    
// })
 