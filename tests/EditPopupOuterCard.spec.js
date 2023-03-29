const{test,expect}=require('@playwright/test');
const{LinkOuterCard}=require('../pageobject_pagefile/link-outercard');
const{NavigationURL}=require('../pageobject_pagefile/navigating-base-url');
const{EditPopupOuterCard}=require('../pageobject_pagefile/editpopup-outerCard');
const {RecommendTab} = require('../pageobject_pagefile/recommend-tab.js');
const{DeleteLinkOutercard}=require('../pageobject_pagefile/delete-link-outercard');
const{RecommendSampleLinkWithOutClick}=require('../pageobject_pagefile/recommending-sample-link-noclick');
const{urls}=require('../constant/urls');
const{DeleteSampleLinkOuterCard}=require('../pageobject_pagefile/delete-samplelink-outercard')
 




// test.beforeEach( async({page})=>{
//   const Urlvideo='https://www.youtube.com/watch?v=TW4WgGTp-iw';
//   const Minvideo="14"
  
//   const navigationurl= new NavigationURL(page)
//   await navigationurl.navigationURL()
//   const recommendVideoLink=new RecommendTab(page)
//   const linkoutercard= new LinkOuterCard(page);
  
//   await recommendVideoLink.univNameVisible();
  
//   await recommendVideoLink.recommendButtonClick();
//   await recommendVideoLink.linkFill(Urlvideo);
//   await recommendVideoLink.minFill(Minvideo);
//  await recommendVideoLink.saveLink();
//  await recommendVideoLink.videoFirstLinkOuterCardVerify();
// })
// test.afterEach(async({page})=>{
     
    
//   const navigationurl= new NavigationURL(page)
//   await navigationurl.navigationURL()
   
//   const linkoutercard= new LinkOuterCard(page);
//   const deletelinkoutercard= new DeleteLinkOutercard(page);
   
//  await linkoutercard.linkOuterCardHover();
//   await linkoutercard.linkMoreOptionsClick();
//   await deletelinkoutercard.deleteOptionClick();
//   await deletelinkoutercard.deleteLinkButtonClick();
//   await deletelinkoutercard.deleteContainerNotVisible();
   

  
// })


test("verify that link edited to no title cannot be saved", async({page})=>{

  try{
    test.setTimeout(130000)
    const samplelink=new RecommendSampleLinkWithOutClick(page)
  const deletelinkoutercard=new DeleteSampleLinkOuterCard(page);

  
  const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopup=new EditPopupOuterCard(page);
    await samplelink.recommendingSampleLinkWithoutClick(urls.URL54,urls.MIN,"Extensibility | Playwright")
    await linkoutercard.linkOuterCardHover("Extensibility | Playwright");
    await linkoutercard.linkMoreOptionsClick();
    await linkoutercard.editOptionClick();
    await editpopup.enterEmptyTitle();
    await editpopup.saveLink();
    await editpopup.linkError();
    await editpopup.editPopupCloseOutercard();
    await deletelinkoutercard.deletingSampleLinkOutercard("Extensibility | Playwright")

  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
})
test("verify that the link title can be edited to other valid title ",async({page})=>{
  try{
    test.setTimeout(130000)
    const samplelink=new RecommendSampleLinkWithOutClick(page)
  const deletelinkoutercard=new DeleteSampleLinkOuterCard(page);
  const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopup=new EditPopupOuterCard(page);
    await samplelink.recommendingSampleLinkWithoutClick(urls.URL55,urls.MIN,"Frames | Playwright")
    await linkoutercard.linkOuterCardHover("Frames | Playwright");
    await linkoutercard.linkMoreOptionsClick();
    await linkoutercard.editOptionClick();
    await editpopup.validSecondTitle();
    await editpopup.saveLink();
    await editpopup.validSecondTitleSavedVerify("valid second title");
    await deletelinkoutercard.deletingSampleLinkOutercard("valid second title")
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
})
test("verify that link title having only special characters cannot be saved",async({page})=>{
  try{
    test.setTimeout(130000)
    const samplelink=new RecommendSampleLinkWithOutClick(page)
  const deletelinkoutercard=new DeleteSampleLinkOuterCard(page);
  const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopup=new EditPopupOuterCard(page);
    await samplelink.recommendingSampleLinkWithoutClick(urls.URL56,urls.MIN,"Introduction to Matplotlib in Python")
    await linkoutercard.linkOuterCardHover("Introduction to Matplotlib in Python");
    await linkoutercard.linkMoreOptionsClick();
    await linkoutercard.editOptionClick();
    await editpopup.enterSpecialCharAsTitle();
    await editpopup.saveLink();
    await editpopup.linkError();
    await editpopup.editPopupCloseOutercard();
    await deletelinkoutercard.deletingSampleLinkOutercard("Introduction to Matplotlib in Python")
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
})
test("verify that a link title containing only numbers can be saved",async({page})=>{
  try{
    test.setTimeout(130000)
    const samplelink=new RecommendSampleLinkWithOutClick(page)
  const deletelinkoutercard=new DeleteSampleLinkOuterCard(page);
  const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopup=new EditPopupOuterCard(page);
    await samplelink.recommendingSampleLinkWithoutClick(urls.URL57,urls.MIN,"Install matplotlib in Python using pip")
    await linkoutercard.linkOuterCardHover("Install matplotlib in Python using pip");
    await linkoutercard.linkMoreOptionsClick();
    await linkoutercard.editOptionClick();
    await editpopup.enterOnlyNumbersAsTitle();
    await editpopup.saveLink();
    await editpopup.onlyNumTitleSavedVerify("12345");
    await deletelinkoutercard.deletingSampleLinkOutercard("12345")
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
})
 test("verify that leading spaces in the link title can be trimmed",async({page})=>{
  
  try{
    test.setTimeout(130000)
    const samplelink=new RecommendSampleLinkWithOutClick(page)
  const deletelinkoutercard=new DeleteSampleLinkOuterCard(page);
  const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopup=new EditPopupOuterCard(page);
    await samplelink.recommendingSampleLinkWithoutClick(urls.URL58,urls.MIN,"Matplotlib: Object-oriented Interface")
    await linkoutercard.linkOuterCardHover("Matplotlib: Object-oriented Interface");
    await linkoutercard.linkMoreOptionsClick();
    await linkoutercard.editOptionClick();
    await editpopup.leadingSpaceInput();
    await editpopup.saveLink();
    await editpopup.leadingSpacesTrimmedVerify("Leading space input");
    await deletelinkoutercard.deletingSampleLinkOutercard("Leading space input")
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }


 })
 test("verify that trailing spaces can be trimmed",async({page})=>{
  try{
    test.setTimeout(130000)
    const samplelink=new RecommendSampleLinkWithOutClick(page)
  const deletelinkoutercard=new DeleteSampleLinkOuterCard(page);

  const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopup=new EditPopupOuterCard(page);
    await samplelink.recommendingSampleLinkWithoutClick(urls.URL59,urls.MIN,"Matplotlib: Mathematical Expressions")
    await linkoutercard.linkOuterCardHover("Matplotlib: Mathematical Expressions");
    await linkoutercard.linkMoreOptionsClick();
    await linkoutercard.editOptionClick();
    await editpopup.trailingSpaceInput();
    await editpopup.saveLink();
    await editpopup.trailingSpaceTrimmedVerify("trailing space input");
    await deletelinkoutercard.deletingSampleLinkOutercard("trailing space input")
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
 })
 test("verify that extra intermediate spaces can be trimmed",async({page})=>{
  try{
    test.setTimeout(130000)
    const samplelink=new RecommendSampleLinkWithOutClick(page)
  const deletelinkoutercard=new DeleteSampleLinkOuterCard(page);
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await samplelink.recommendingSampleLinkWithoutClick(urls.URL60,urls.MIN,"Matplotlib: Create a simple plot")
  await linkoutercard.linkOuterCardHover("Matplotlib: Create a simple plot");
  await linkoutercard.linkMoreOptionsClick();
  await linkoutercard.editOptionClick();
  await editpopup.extraIntermediateSpaceInput();
  await editpopup.saveLink();
  await editpopup.extraIntermediateSpaceTrimmedVerify("t t t");
  await deletelinkoutercard.deletingSampleLinkOutercard("t t t")
}catch (error) {
  console.error(`Test failed: ${error}`);
  throw error;
}
 })

test("verify that the link edited to only special characters in title cannot be saved",async({page})=>{
  try{
    test.setTimeout(130000)
    const samplelink=new RecommendSampleLinkWithOutClick(page)
  const deletelinkoutercard=new DeleteSampleLinkOuterCard(page);
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await samplelink.recommendingSampleLinkWithoutClick(urls.URL61,urls.MIN,"Matplotlib: Line Plot")
  await linkoutercard.linkOuterCardHover("Matplotlib: Line Plot");
    await linkoutercard.linkMoreOptionsClick();
    await linkoutercard.editOptionClick();
    await editpopup.enterEmptyTitle();
    await editpopup.enterSpecialCharacterTitle();
    await editpopup.saveLink();
    await editpopup.linkError();
    await editpopup.editPopupCloseOutercard();
    await deletelinkoutercard.deletingSampleLinkOutercard("Matplotlib: Line Plot")
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }

})
test("verify that the title can have max 200 characters",async({page})=>{
  try{
    test.setTimeout(130000)
    const samplelink=new RecommendSampleLinkWithOutClick(page)
  const deletelinkoutercard=new DeleteSampleLinkOuterCard(page);
   
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await samplelink.recommendingSampleLinkWithoutClick(urls.URL62,urls.MIN,"Matplotlib: Subplots() Function")
  await linkoutercard.linkOuterCardHover("Matplotlib: Subplots() Function");
  await linkoutercard.linkMoreOptionsClick();
  await linkoutercard.editOptionClick();
  await editpopup.enterEmptyTitle();
  await editpopup.fillMaxCharacters();
  await editpopup.saveLink(); 
  await editpopup.linkError();
  await editpopup.editPopupCloseOutercard();
    await deletelinkoutercard.deletingSampleLinkOutercard("Matplotlib: Subplots() Function")
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
})
test("verify when more settings is clicked the edit popup expands unvieling more options", async({page})=>{
  try{
    test.setTimeout(130000)
    const samplelink=new RecommendSampleLinkWithOutClick(page)
  const deletelinkoutercard=new DeleteSampleLinkOuterCard(page);
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await samplelink.recommendingSampleLinkWithoutClick(urls.URL63,urls.MIN,"Matplotlib: Scatter Plot")
  await linkoutercard.linkOuterCardHover("Matplotlib: Scatter Plot");
  await linkoutercard.linkMoreOptionsClick();
  await linkoutercard.editOptionClick();
  await editpopup.moreSettingsClick();
  await editpopup.moreSettingVisible();
  await editpopup.editPopupCloseOutercard();
  await deletelinkoutercard.deletingSampleLinkOutercard("Matplotlib: Scatter Plot")
}catch (error) {
  console.error(`Test failed: ${error}`);
  throw error;
}
})
test("verify that only 5 tags can be added at max in a link", async({page})=>{
  try{
    test.setTimeout(130000)
    const samplelink=new RecommendSampleLinkWithOutClick(page)
  const deletelinkoutercard=new DeleteSampleLinkOuterCard(page);
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await samplelink.recommendingSampleLinkWithoutClick(urls.URL64,urls.MIN,"Matplotlib: Bar Plot")
  await linkoutercard.linkOuterCardHover("Matplotlib: Bar Plot");
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
  await editpopup.editPopupCloseOutercard();
  await deletelinkoutercard.deletingSampleLinkOutercard("Matplotlib: Bar Plot")
}catch (error) {
  console.error(`Test failed: ${error}`);
  throw error;
} 
  
})
test("verify that a user cannot add duplicate tags",async({page})=>{
  try{
    test.setTimeout(130000)
    const samplelink=new RecommendSampleLinkWithOutClick(page)
  const deletelinkoutercard=new DeleteSampleLinkOuterCard(page);
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await samplelink.recommendingSampleLinkWithoutClick(urls.URL65,urls.MIN,"Medium - Where good ideas find you ")
  await linkoutercard.linkOuterCardHover("Medium - Where good ideas find you ");
  await linkoutercard.linkMoreOptionsClick();
  await linkoutercard.editOptionClick();
  await editpopup.moreSettingsClick();
  await editpopup.addFirstTag();
  await editpopup.addFirstTag();
  await editpopup.duplicateTagErrorMessage();
  await editpopup.editPopupCloseOutercard();
  await deletelinkoutercard.deletingSampleLinkOutercard("Medium - Where good ideas find you ")
}catch (error) {
  console.error(`Test failed: ${error}`);
  throw error;
}
})
test("verify that a tag can contain max 25 characters",async({page})=>{
  try{
    test.setTimeout(130000)
    const samplelink=new RecommendSampleLinkWithOutClick(page)
  const deletelinkoutercard=new DeleteSampleLinkOuterCard(page);
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await samplelink.recommendingSampleLinkWithoutClick(urls.URL66,urls.MIN,"Matplotlib: Pie Charts")
  await linkoutercard.linkOuterCardHover("Matplotlib: Pie Charts");
  await linkoutercard.linkMoreOptionsClick();
  await linkoutercard.editOptionClick();
  await editpopup.moreSettingsClick();
  await editpopup.addMaxCharInTag();
  await editpopup.maxCharInTagErrorMessage();
  await editpopup.editPopupCloseOutercard();
  await deletelinkoutercard.deletingSampleLinkOutercard("Matplotlib: Pie Charts")
}catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
})
test("verify on clicking cancel button a tag is deleted",async({page})=>{
  try{
    test.setTimeout(130000)
  const samplelink=new RecommendSampleLinkWithOutClick(page)
  const deletelinkoutercard=new DeleteSampleLinkOuterCard(page);
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await samplelink.recommendingSampleLinkWithoutClick(urls.URL67,urls.MIN,"playwright-core - npm")
  await linkoutercard.linkOuterCardHover("playwright-core - npm");
  await linkoutercard.linkMoreOptionsClick();
  await linkoutercard.editOptionClick();
  await editpopup.moreSettingsClick();
  await editpopup.addFirstTag();
  await editpopup.closeTag();
  await editpopup.tagClosedVerify();
  await editpopup.editPopupCloseOutercard();
  await deletelinkoutercard.deletingSampleLinkOutercard("playwright-core - npm")
}catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
})

test("Verify only one content type can be choosen", async({page})=>{
  try{
    test.setTimeout(130000)
  const samplelink=new RecommendSampleLinkWithOutClick(page)
  const deletelinkoutercard=new DeleteSampleLinkOuterCard(page);
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await samplelink.recommendingSampleLinkWithoutClick(urls.URL68,urls.MIN,"Matplotlib: Three-dimensional Plotting")
  await linkoutercard.linkOuterCardHover("Matplotlib: Three-dimensional Plotting");
  await linkoutercard.linkMoreOptionsClick();
  await linkoutercard.editOptionClick();
  await editpopup.moreSettingsClick();
  await editpopup.videoRadioButtonSelect();
  await editpopup.articleRadioButtonSelect();
  await editpopup.oneRadioButtonEnabled();
  await editpopup.editPopupCloseOutercard();
  await deletelinkoutercard.deletingSampleLinkOutercard("Matplotlib: Three-dimensional Plotting")
}catch (error) {
  console.error(`Test failed: ${error}`);
  throw error;
}
})
test("verify that link cannot be edited 0/null minutes minutes",async({page})=>{
  try{
    test.setTimeout(130000)
  const samplelink=new RecommendSampleLinkWithOutClick(page)
  const deletelinkoutercard=new DeleteSampleLinkOuterCard(page);
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await samplelink.recommendingSampleLinkWithoutClick(urls.URL69,urls.MIN,"Matplotlib Pyplot: Introduction")
  await linkoutercard.linkOuterCardHover("Matplotlib Pyplot: Introduction");
  await linkoutercard.linkMoreOptionsClick();
  await linkoutercard.editOptionClick();
  await editpopup.emptyMinFill();
  await editpopup.saveLink();
  await editpopup.linkMinError();
  await editpopup.editPopupCloseOutercard();
  await deletelinkoutercard.deletingSampleLinkOutercard("Matplotlib Pyplot: Introduction")
}catch (error) {
  console.error(`Test failed: ${error}`);
  throw error;
}
})

test("verify that link cannot be edited to minutes in special characters", async({page})=>{
  try{
    test.setTimeout(130000)
  const samplelink=new RecommendSampleLinkWithOutClick(page)
  const deletelinkoutercard=new DeleteSampleLinkOuterCard(page);

  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await samplelink.recommendingSampleLinkWithoutClick(urls.URL70,urls.MIN,"Matplotlib: Figure Class")
  await linkoutercard.linkOuterCardHover("Matplotlib: Figure Class");
  await linkoutercard.linkMoreOptionsClick();
  await linkoutercard.editOptionClick();
  await editpopup.emptyMinFill();
  await editpopup.symbolMinFill();
  await editpopup.saveLink();
  await editpopup.linkMinError();
  await editpopup.editPopupCloseOutercard();
  await deletelinkoutercard.deletingSampleLinkOutercard("Matplotlib: Figure Class")
}catch (error) {
  console.error(`Test failed: ${error}`);
  throw error;
}
})
test("verify that link cannot be edited to minutes in alphabets",async({page})=>{
  try{
    test.setTimeout(130000)
  const samplelink=new RecommendSampleLinkWithOutClick(page)
  const deletelinkoutercard=new DeleteSampleLinkOuterCard(page);
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await samplelink.recommendingSampleLinkWithoutClick(urls.URL71,urls.MIN,"Matplotlib: Multiplots with subplots() Function")
  await linkoutercard.linkOuterCardHover("Matplotlib: Multiplots with subplots() Function");
  await linkoutercard.linkMoreOptionsClick();
  await linkoutercard.editOptionClick();
  await editpopup.emptyMinFill();
  await editpopup.charMinFill();
  await editpopup.saveLink();
  await editpopup.linkMinError();
  await editpopup.editPopupCloseOutercard();
  await deletelinkoutercard.deletingSampleLinkOutercard("Matplotlib: Multiplots with subplots() Function")
}catch (error) {
  console.error(`Test failed: ${error}`);
  throw error;
}
})
test("verify that the max minutes a link can have is 10000",async({page})=>{
  try{
    test.setTimeout(130000)
  const samplelink=new RecommendSampleLinkWithOutClick(page)
  const deletelinkoutercard=new DeleteSampleLinkOuterCard(page);
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await samplelink.recommendingSampleLinkWithoutClick(urls.URL72,urls.MIN,"Matplotlib: Quiver Plot")
  await linkoutercard.linkOuterCardHover("Matplotlib: Quiver Plot");
  await linkoutercard.linkMoreOptionsClick();
  await linkoutercard.editOptionClick();
  await editpopup.emptyMinFill();
  await editpopup.moreThanMaxMinFill();
  await editpopup.maxMinRedirection();
  await editpopup.editPopupCloseOutercard();
  await deletelinkoutercard.deletingSampleLinkOutercard("Matplotlib: Quiver Plot")
}catch (error) {
  console.error(`Test failed: ${error}`);
  throw error;
}
})
 

   

 