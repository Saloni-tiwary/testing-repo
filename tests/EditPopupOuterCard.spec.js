const{test,expect}=require('@playwright/test');
const{LinkOuterCard}=require('../pageobject_pagefile/LinkOuterCard');
const{NavigationURL}=require('../pageobject_pagefile/NavigatingbaseURL');
const{EditPopupOuterCard}=require('../pageobject_pagefile/EditpopupOuterCard');



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

   

 