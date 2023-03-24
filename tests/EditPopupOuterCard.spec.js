const{test,expect}=require('@playwright/test');
const{LinkOuterCard}=require('../pageobject_pagefile/link-outercard');
const{NavigationURL}=require('../pageobject_pagefile/navigating-base-url');
const{EditPopupOuterCard}=require('../pageobject_pagefile/editpopup-outerCard');
const {RecommendTab} = require('../pageobject_pagefile/recommend-tab.js');
const{DeleteLinkOutercard}=require('../pageobject_pagefile/delete-link-outercard');




test('Verify that a Video can be recommended', async({page})=>{
  const Urlvideo='https://www.youtube.com/watch?v=hOIJRGuBkS4';
  const Minvideo="14"
  
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL()
  const recommendVideoLink=new RecommendTab(page)
  const linkoutercard= new LinkOuterCard(page);
  
  await recommendVideoLink.univNameVisible();
  
  await recommendVideoLink.recommendButtonClick();
  await recommendVideoLink.linkFill(Urlvideo);
  await recommendVideoLink.minFill(Minvideo);
 await recommendVideoLink.saveLink();
 await recommendVideoLink.videoFirstLinkOuterCardVerify();
})



test("verify that link edited to no title cannot be saved", async({page})=>{
  const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopup=new EditPopupOuterCard(page);
    await linkoutercard.linkOuterCardHover();
    await linkoutercard.linkMoreOptionsClick();
    await linkoutercard.editOptionClick();
    await editpopup.enterEmptyTitle();
    await editpopup.saveLink();
    await editpopup.linkError();
})
test("verify that the link title can be edited to other valid title ",async({page})=>{
  const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopup=new EditPopupOuterCard(page);
    await linkoutercard.linkOuterCardHover();
    await linkoutercard.linkMoreOptionsClick();
    await linkoutercard.editOptionClick();
    await editpopup.validSecondTitle();
    await editpopup.saveLink();
    await editpopup.validSecondTitleSavedVerify();
})
test("verify that link title having only special characters cannot be saved",async({page})=>{
  const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopup=new EditPopupOuterCard(page);
    await linkoutercard.linkOuterCardHover();
    await linkoutercard.linkMoreOptionsClick();
    await linkoutercard.editOptionClick();
    await editpopup.enterSpecialCharAsTitle();
    await editpopup.saveLink();
    await editpopup.linkError();

})
test("verify that a link title containing only numbers can be saved",async({page})=>{
  const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopup=new EditPopupOuterCard(page);
    await linkoutercard.linkOuterCardHover();
    await linkoutercard.linkMoreOptionsClick();
    await linkoutercard.editOptionClick();
    await editpopup.enterOnlyNumbersAsTitle();
    await editpopup.saveLink();
    await editpopup.onlyNumTitleSavedVerify();
})
 test("verify that leading spaces in the link title can be trimmed",async({page})=>{
  const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopup=new EditPopupOuterCard(page);
    await linkoutercard.linkOuterCardHover();
    await linkoutercard.linkMoreOptionsClick();
    await linkoutercard.editOptionClick();
    await editpopup.leadingSpaceInput();
    await editpopup.saveLink();
    await editpopup.leadingSpacesTrimmedVerify();


 })
 test("verify that trailing spaces can be trimmed",async({page})=>{
  const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopup=new EditPopupOuterCard(page);
    await linkoutercard.linkOuterCardHover();
    await linkoutercard.linkMoreOptionsClick();
    await linkoutercard.editOptionClick();
    await editpopup.trailingSpaceInput();
    await editpopup.saveLink();
    await editpopup.trailingSpaceTrimmedVerify();
 })
 test("verify that extra intermediate spaces can be trimmed",async({page})=>{
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await linkoutercard.linkOuterCardHover();
  await linkoutercard.linkMoreOptionsClick();
  await linkoutercard.editOptionClick();
  await editpopup.extraIntermediateSpaceInput();
  await editpopup.saveLink();
  await editpopup.extraIntermediateSpaceTrimmedVerify();
 })

test("verify that the link edited to only special characters in title cannot be saved",async({page})=>{
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await linkoutercard.linkOuterCardHover();
    await linkoutercard.linkMoreOptionsClick();
    await linkoutercard.editOptionClick();
    await editpopup.enterEmptyTitle();
    await editpopup.enterSpecialCharacterTitle();
    await editpopup.saveLink();
    await editpopup.linkError();


})
test("verify that the title can have max 200 characters",async({page})=>{
   
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await linkoutercard.linkOuterCardHover();
  await linkoutercard.linkMoreOptionsClick();
  await linkoutercard.editOptionClick();
  await editpopup.enterEmptyTitle();
  await editpopup.fillMaxCharacters();
  await editpopup.saveLink(); 
  await editpopup.linkError();

})
test("verify when more settings is clicked the edit popup expands unvieling more options", async({page})=>{
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await linkoutercard.linkOuterCardHover();
  await linkoutercard.linkMoreOptionsClick();
  await linkoutercard.editOptionClick();
  await editpopup.moreSettingsClick();
  await editpopup.moreSettingVisible();

})
test("verify that only 5 tags can be added at max in a link", async({page})=>{
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await linkoutercard.linkOuterCardHover();
  await linkoutercard.linkMoreOptionsClick();
  await linkoutercard.editOptionClick();
  await editpopup.moreSettingsClick();
  await editpopup.addFirstTag();
  await editpopup.addSecondTag();
  await editpopup.addThirdTag();
  await editpopup.addFourthTag();
  await editpopup.addFifthTag();
  await editpopup.addSixthtag();
  await editpopup.errorMessageVisible();
   
  
})
test("verify that a user cannot add duplicate tags",async({page})=>{
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await linkoutercard.linkOuterCardHover();
  await linkoutercard.linkMoreOptionsClick();
  await linkoutercard.editOptionClick();
  await editpopup.moreSettingsClick();
  await editpopup.addFirstTag();
  await editpopup.addFirstTag();
  await editpopup.duplicateTagErrorMessage();

})
test("verify that a tag can contain max 25 characters",async({page})=>{
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await linkoutercard.linkOuterCardHover();
  await linkoutercard.linkMoreOptionsClick();
  await linkoutercard.editOptionClick();
  await editpopup.moreSettingsClick();
  await editpopup.addMaxCharInTag();
  await editpopup.maxCharInTagErrorMessage();

})
test("verify on clicking cancel button a tag is deleted",async({page})=>{
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await linkoutercard.linkOuterCardHover();
  await linkoutercard.linkMoreOptionsClick();
  await linkoutercard.editOptionClick();
  await editpopup.moreSettingsClick();
  await editpopup.addFirstTag();
  await editpopup.closeTag();
  await editpopup.tagClosedVerify();

})

test("Verify only one content type can be choosen", async({page})=>{
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await linkoutercard.linkOuterCardHover();
  await linkoutercard.linkMoreOptionsClick();
  await linkoutercard.editOptionClick();
  await editpopup.moreSettingsClick();
  await editpopup.videoRadioButtonSelect();
  await editpopup.articleRadioButtonSelect();
  await editpopup.oneRadioButtonEnabled();

})
test("verify that link cannot be edited 0/null minutes minutes",async({page})=>{
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await linkoutercard.linkOuterCardHover();
  await linkoutercard.linkMoreOptionsClick();
  await linkoutercard.editOptionClick();
  await editpopup.emptyMinFill();
  await editpopup.saveLink();
  await editpopup.linkMinError();
})

test("verify that link cannot be edited to minutes in special characters", async({page})=>{
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await linkoutercard.linkOuterCardHover();
  await linkoutercard.linkMoreOptionsClick();
  await linkoutercard.editOptionClick();
  await editpopup.emptyMinFill();
  await editpopup.symbolMinFill();
  await editpopup.saveLink();
  await editpopup.linkMinError();

})
test("verify that link cannot be edited to minutes in alphabets",async({page})=>{
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await linkoutercard.linkOuterCardHover();
  await linkoutercard.linkMoreOptionsClick();
  await linkoutercard.editOptionClick();
  await editpopup.emptyMinFill();
  await editpopup.charMinFill();
  await editpopup.saveLink();
  await editpopup.linkMinError();

})
test("verify that the max minutes a link can have is 10000",async({page})=>{
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await linkoutercard.linkOuterCardHover();
  await linkoutercard.linkMoreOptionsClick();
  await linkoutercard.editOptionClick();
  await editpopup.emptyMinFill();
  await editpopup.moreThanMaxMinFill();
  await editpopup.maxMinRedirection();
})
test('Verify that a link reccommended can be deleted', async({page})=>{
     
    
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL()
   
  const linkoutercard= new LinkOuterCard(page);
  const deletelinkoutercard= new DeleteLinkOutercard(page);
   
 await linkoutercard.linkOuterCardHover();
  await linkoutercard.linkMoreOptionsClick();
  await deletelinkoutercard.deleteOptionClick();
  await deletelinkoutercard.deleteLinkButtonClick();
  await deletelinkoutercard.deleteContainerNotVisible();
   

  
})

   

 