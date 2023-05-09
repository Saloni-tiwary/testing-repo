const{test,expect}=require('@playwright/test');
const{LinkOuterCard}=require('../pageobject_pagefile/link-outercard');
const{NavigationURL}=require('../pageobject_pagefile/navigating-base-url');
const{EditPopupOuterCard}=require('../pageobject_pagefile/editpopup-outerCard');
const {RecommendTab} = require('../pageobject_pagefile/recommend-tab.js');
const{DeleteLinkOutercard}=require('../pageobject_pagefile/delete-link-outercard');
const{RecommendingSampleLink}=require('../pageobject_pagefile/recommending-sample-link');
const{urls}=require('../constant/urls');
const{DeleteSampleLinkAPI}=require('../pageobject_pagefile/delete-samplelink-api')
 




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
   // test.setTimeout(130000)
    const samplelink=new RecommendingSampleLink(page)
  const deletelinkoutercard=new DeleteSampleLinkAPI(page);

  
  const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopup=new EditPopupOuterCard(page);
    await samplelink.recommendingSampleArticleLink(urls.URL54,urls.MIN,"Extensibility | Playwright")
    //await linkoutercard.linkOuterCardHover("Extensibility | Playwright");
    await linkoutercard.refreshPage();
    await linkoutercard.link_More_and_Edit_OptionsClick("Extensibility | Playwright");
    //await linkoutercard.editOptionClick();
    await editpopup.enterEmptyTitle();
    await editpopup.saveLink();
    await editpopup.linkError();
    await editpopup.editPopupCloseOutercard();
    await deletelinkoutercard.deletingSampleLinkapi("Extensibility | Playwright")

  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
})
test("verify that the link title can be edited to other valid title ",async({page})=>{
  try{
   // test.setTimeout(130000)
    const samplelink=new RecommendingSampleLink(page)
  const deletelinkoutercard=new DeleteSampleLinkAPI(page);
  const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopup=new EditPopupOuterCard(page);
    await samplelink.recommendingSampleArticleLink(urls.URL55,urls.MIN,"Frames | Playwright")
    //await linkoutercard.linkOuterCardHover("Frames | Playwright");
    await linkoutercard.refreshPage();
    await linkoutercard.link_More_and_Edit_OptionsClick("Frames | Playwright");
   // await linkoutercard.editOptionClick();
    await editpopup.validSecondTitle();
    await editpopup.saveLink();
    await editpopup.validSecondTitleSavedVerify("valid second title");
    await deletelinkoutercard.deletingSampleLinkapi("valid second title")
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
})
test("verify that link title having only special characters cannot be saved",async({page})=>{
  try{
   // test.setTimeout(130000)
    const samplelink=new RecommendingSampleLink(page)
  const deletelinkoutercard=new DeleteSampleLinkAPI(page);
  const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopup=new EditPopupOuterCard(page);
    await samplelink.recommendingSampleArticleLink(urls.URL56,urls.MIN,"Introduction to Matplotlib in Python")
   // await linkoutercard.linkOuterCardHover("Introduction to Matplotlib in Python");
   await linkoutercard.refreshPage(); 
   await linkoutercard.link_More_and_Edit_OptionsClick("Introduction to Matplotlib in Python");
    //await linkoutercard.editOptionClick();
    await editpopup.enterSpecialCharAsTitle();
    await editpopup.saveLink();
    await editpopup.linkError();
    await editpopup.editPopupCloseOutercard();
    await deletelinkoutercard.deletingSampleLinkapi("Introduction to Matplotlib in Python")
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
})
test("verify that a link title containing only numbers can be saved",async({page})=>{
  try{
   // test.setTimeout(130000)
    const samplelink=new RecommendingSampleLink(page)
  const deletelinkoutercard=new DeleteSampleLinkAPI(page);
  const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopup=new EditPopupOuterCard(page);
    await samplelink.recommendingSampleArticleLink(urls.URL57,urls.MIN,"Install matplotlib in Python using pip")
   // await linkoutercard.linkOuterCardHover("Install matplotlib in Python using pip");
   await linkoutercard.refreshPage(); 
   await linkoutercard.link_More_and_Edit_OptionsClick("Install matplotlib in Python using pip");
    //await linkoutercard.editOptionClick();
    await editpopup.enterOnlyNumbersAsTitle();
    await editpopup.saveLink();
    await editpopup.onlyNumTitleSavedVerify("12345");
    await deletelinkoutercard.deletingSampleLinkapi("12345")
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
})
 test("verify that leading spaces in the link title can be trimmed",async({page})=>{
  
  try{
   // test.setTimeout(130000)
    const samplelink=new RecommendingSampleLink(page)
  const deletelinkoutercard=new DeleteSampleLinkAPI(page);
  const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopup=new EditPopupOuterCard(page);
    await samplelink.recommendingSampleArticleLink(urls.URL58,urls.MIN,"Matplotlib: Object-oriented Interface")
    //await linkoutercard.linkOuterCardHover("Matplotlib: Object-oriented Interface");
    await linkoutercard.refreshPage();
    await linkoutercard.link_More_and_Edit_OptionsClick("Matplotlib: Object-oriented Interface");
    //await linkoutercard.editOptionClick();
    await editpopup.leadingSpaceInput();
    await editpopup.saveLink();
    await editpopup.leadingSpacesTrimmedVerify("Leading space input");
    await deletelinkoutercard.deletingSampleLinkapi("Leading space input")
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }


 })
 test("verify that trailing spaces can be trimmed",async({page})=>{
  try{
   // test.setTimeout(130000)
    const samplelink=new RecommendingSampleLink(page)
  const deletelinkoutercard=new DeleteSampleLinkAPI(page);

  const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const editpopup=new EditPopupOuterCard(page);
    await samplelink.recommendingSampleArticleLink(urls.URL59,urls.MIN,"Matplotlib: Mathematical Expressions")
    //await linkoutercard.linkOuterCardHover("Matplotlib: Mathematical Expressions");
    await linkoutercard.refreshPage();
    await linkoutercard.link_More_and_Edit_OptionsClick("Matplotlib: Mathematical Expressions");
    //await linkoutercard.editOptionClick();
    await editpopup.trailingSpaceInput();
    await editpopup.saveLink();
    await editpopup.trailingSpaceTrimmedVerify("trailing space input");
    await deletelinkoutercard.deletingSampleLinkapi("trailing space input")
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
 })
 test("verify that extra intermediate spaces can be trimmed",async({page})=>{
  try{
    //test.setTimeout(130000)
    const samplelink=new RecommendingSampleLink(page)
  const deletelinkoutercard=new DeleteSampleLinkAPI(page);
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await samplelink.recommendingSampleArticleLink(urls.URL60,urls.MIN,"Matplotlib: Create a simple plot")
  await linkoutercard.refreshPage();
  //await linkoutercard.linkOuterCardHover("Matplotlib: Create a simple plot");
   
  await linkoutercard.link_More_and_Edit_OptionsClick("Matplotlib: Create a simple plot");
  //await linkoutercard.editOptionClick();
  await editpopup.extraIntermediateSpaceInput();
  await editpopup.saveLink();
  await editpopup.extraIntermediateSpaceTrimmedVerify("t t t");
  await deletelinkoutercard.deletingSampleLinkapi("t t t")
}catch (error) {
  console.error(`Test failed: ${error}`);
  throw error;
}
 })

test("verify that the link edited to only special characters in title cannot be saved",async({page})=>{
  try{
   // test.setTimeout(130000)
    const samplelink=new RecommendingSampleLink(page)
  const deletelinkoutercard=new DeleteSampleLinkAPI(page);
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await samplelink.recommendingSampleArticleLink(urls.URL61,urls.MIN,"Matplotlib: Line Plot")
  await linkoutercard.refreshPage();
 //await linkoutercard.linkOuterCardHover("Matplotlib: Line Plot");
   await linkoutercard.link_More_and_Edit_OptionsClick("Matplotlib: Line Plot");
   // await linkoutercard.editOptionClick();
    await editpopup.enterEmptyTitle();
    await editpopup.enterSpecialCharacterTitle();
    await editpopup.saveLink();
    await editpopup.linkError();
    await editpopup.editPopupCloseOutercard();
    await deletelinkoutercard.deletingSampleLinkapi("Matplotlib: Line Plot")
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }

})
test("verify that the title can have max 200 characters",async({page})=>{
  try{
   // test.setTimeout(130000)
    const samplelink=new RecommendingSampleLink(page)
  const deletelinkoutercard=new DeleteSampleLinkAPI(page);
   
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await samplelink.recommendingSampleArticleLink(urls.URL62,urls.MIN,"Matplotlib: Subplots() Function")
  //await linkoutercard.linkOuterCardHover("Matplotlib: Subplots() Function");
  await linkoutercard.refreshPage();
  await linkoutercard.link_More_and_Edit_OptionsClick("Matplotlib: Subplots() Function");
  //await linkoutercard.editOptionClick();
  await editpopup.enterEmptyTitle();
  await editpopup.fillMaxCharacters();
  await editpopup.saveLink(); 
  await editpopup.linkError();
  await editpopup.editPopupCloseOutercard();
    await deletelinkoutercard.deletingSampleLinkapi("Matplotlib: Subplots() Function")
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
})
test("verify when more settings is clicked the edit popup expands unvieling more options", async({page})=>{
  try{
   // test.setTimeout(130000)
    const samplelink=new RecommendingSampleLink(page)
  const deletelinkoutercard=new DeleteSampleLinkAPI(page);
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await samplelink.recommendingSampleArticleLink(urls.URL63,urls.MIN,"Matplotlib: Scatter Plot")
  //await linkoutercard.linkOuterCardHover("Matplotlib: Scatter Plot");
  await linkoutercard.refreshPage();
  await linkoutercard.link_More_and_Edit_OptionsClick("Matplotlib: Scatter Plot");
  //await linkoutercard.editOptionClick();
  await editpopup.moreSettingsClick();
  await editpopup.moreSettingVisible();
  await editpopup.editPopupCloseOutercard();
  await deletelinkoutercard.deletingSampleLinkapi("Matplotlib: Scatter Plot")
}catch (error) {
  console.error(`Test failed: ${error}`);
  throw error;
}
})
test("verify that only 5 tags can be added at max in a link", async({page})=>{
  try{
   // test.setTimeout(130000)
    const samplelink=new RecommendingSampleLink(page)
  const deletelinkoutercard=new DeleteSampleLinkAPI(page);
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await samplelink.recommendingSampleArticleLink(urls.URL64,urls.MIN,"Matplotlib: Bar Plot")
  //await linkoutercard.linkOuterCardHover("Matplotlib: Bar Plot");
  await linkoutercard.refreshPage();
  await linkoutercard.link_More_and_Edit_OptionsClick("Matplotlib: Bar Plot");
  //await linkoutercard.editOptionClick();
  await editpopup.moreSettingsClick();
  await editpopup.addFirstTag();
  await editpopup.addSecondTag();
  await editpopup.addThirdTag();
  await editpopup.addFourthTag();
  await editpopup.addFifthTag();
  await editpopup.addSixthtag();
  await editpopup.errorMessageVisible();
  await editpopup.editPopupCloseOutercard();
  await deletelinkoutercard.deletingSampleLinkapi("Matplotlib: Bar Plot")
}catch (error) {
  console.error(`Test failed: ${error}`);
  throw error;
} 
  
})
test.only("verify that a user cannot add duplicate tags",async({page})=>{
  try{
   // test.setTimeout(130000)
    const samplelink=new RecommendingSampleLink(page)
  const deletelinkoutercard=new DeleteSampleLinkAPI(page);
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await samplelink.recommendingSampleArticleLink(urls.URL65,urls.MIN,"Medium - Where good ideas find you ")
  await linkoutercard.refreshPage();
  await linkoutercard.linkOuterCardHover("Medium - Where good ideas find you ");
  await linkoutercard.link_More_and_Edit_OptionsClick("Medium - Where good ideas find you ");
 // await linkoutercard.editOptionClick();
  await editpopup.moreSettingsClick();
  await editpopup.addFirstTag();
  await editpopup.addFirstTag();
  await editpopup.duplicateTagErrorMessage();
  await editpopup.editPopupCloseOutercard();
  await deletelinkoutercard.deletingSampleLinkapi("Medium - Where good ideas find you ")
}catch (error) {
  console.error(`Test failed: ${error}`);
  throw error;
}
})
test("verify that a tag can contain max 25 characters",async({page})=>{
  try{
   // test.setTimeout(130000)
    const samplelink=new RecommendingSampleLink(page)
  const deletelinkoutercard=new DeleteSampleLinkAPI(page);
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await samplelink.recommendingSampleArticleLink(urls.URL66,urls.MIN,"Matplotlib: Pie Charts")
  await linkoutercard.refreshPage();
  //await linkoutercard.linkOuterCardHover("Matplotlib: Pie Charts");
  await linkoutercard.link_More_and_Edit_OptionsClick("Matplotlib: Pie Charts");
  //await linkoutercard.editOptionClick();
  await editpopup.moreSettingsClick();
  await editpopup.addMaxCharInTag();
  await editpopup.maxCharInTagErrorMessage();
  await editpopup.editPopupCloseOutercard();
  await deletelinkoutercard.deletingSampleLinkapi("Matplotlib: Pie Charts")
}catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
})
test("verify on clicking cancel button a tag is deleted",async({page})=>{
  try{
   // test.setTimeout(130000)
  const samplelink=new RecommendingSampleLink(page)
  const deletelinkoutercard=new DeleteSampleLinkAPI(page);
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await samplelink.recommendingSampleArticleLink(urls.URL67,urls.MIN,"playwright-core - npm")
  await linkoutercard.refreshPage();
  //await linkoutercard.linkOuterCardHover("playwright-core - npm");
  await linkoutercard.link_More_and_Edit_OptionsClick("playwright-core - npm");
  //await linkoutercard.editOptionClick();
  await editpopup.moreSettingsClick();
  await editpopup.addFirstTag();
  await editpopup.closeTag();
  await editpopup.tagClosedVerify();
  await editpopup.editPopupCloseOutercard();
  await deletelinkoutercard.deletingSampleLinkapi("playwright-core - npm")
}catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
})

test("Verify only one content type can be choosen", async({page})=>{
  try{
   // test.setTimeout(130000)
  const samplelink=new RecommendingSampleLink(page)
  const deletelinkoutercard=new DeleteSampleLinkAPI(page);
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await samplelink.recommendingSampleArticleLink(urls.URL68,urls.MIN,"Matplotlib: Three-dimensional Plotting")
  await linkoutercard.refreshPage(); 
  //await linkoutercard.linkOuterCardHover("Matplotlib: Three-dimensional Plotting");
  await linkoutercard.link_More_and_Edit_OptionsClick("Matplotlib: Three-dimensional Plotting");
  //await linkoutercard.editOptionClick();
  await editpopup.moreSettingsClick();
  await editpopup.videoRadioButtonSelect();
  await editpopup.articleRadioButtonSelect();
  await editpopup.oneRadioButtonEnabled();
  await editpopup.editPopupCloseOutercard();
  await deletelinkoutercard.deletingSampleLinkapi("Matplotlib: Three-dimensional Plotting")
}catch (error) {
  console.error(`Test failed: ${error}`);
  throw error;
}
})
test("verify that link cannot be edited 0/null minutes minutes",async({page})=>{
  try{
   // test.setTimeout(130000)
  const samplelink=new RecommendingSampleLink(page)
  const deletelinkoutercard=new DeleteSampleLinkAPI(page);
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  
  await samplelink.recommendingSampleArticleLink(urls.URL69,urls.MIN,"Matplotlib Pyplot: Introduction")
  
  await linkoutercard.refreshPage();//await linkoutercard.linkOuterCardHover("Matplotlib Pyplot: Introduction");
  await linkoutercard.link_More_and_Edit_OptionsClick("Matplotlib Pyplot: Introduction");
 
  //await linkoutercard.editOptionClick();
  await editpopup.emptyMinFill();
  await editpopup.saveLink();
  await editpopup.linkMinError();
  await editpopup.editPopupCloseOutercard();
  await deletelinkoutercard.deletingSampleLinkapi("Matplotlib Pyplot: Introduction")
}catch (error) {
  console.error(`Test failed: ${error}`);
  throw error;
}
})

test("verify that link cannot be edited to minutes in special characters", async({page})=>{
  try{
   // test.setTimeout(130000)
  const samplelink=new RecommendingSampleLink(page)
  const deletelinkoutercard=new DeleteSampleLinkAPI(page);

  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await samplelink.recommendingSampleArticleLink(urls.URL70,urls.MIN,"Matplotlib: Figure Class")
  
  await linkoutercard.refreshPage();//await linkoutercard.linkOuterCardHover("Matplotlib: Figure Class");
  await linkoutercard.link_More_and_Edit_OptionsClick("Matplotlib: Figure Class");
 // await linkoutercard.editOptionClick();
  await editpopup.emptyMinFill();
  await editpopup.symbolMinFill();
  await editpopup.saveLink();
  await editpopup.linkMinError();
  await editpopup.editPopupCloseOutercard();
  await deletelinkoutercard.deletingSampleLinkapi("Matplotlib: Figure Class")
}catch (error) {
  console.error(`Test failed: ${error}`);
  throw error;
}
})
test("verify that link cannot be edited to minutes in alphabets",async({page})=>{
  try{
    //test.setTimeout(130000)
  const samplelink=new RecommendingSampleLink(page)
  const deletelinkoutercard=new DeleteSampleLinkAPI(page);
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await samplelink.recommendingSampleArticleLink(urls.URL71,urls.MIN,"Matplotlib: Multiplots with subplots() Function")
  
  await linkoutercard.refreshPage();//await linkoutercard.linkOuterCardHover("Matplotlib: Multiplots with subplots() Function");
  await linkoutercard.link_More_and_Edit_OptionsClick("Matplotlib: Multiplots with subplots() Function");
  //await linkoutercard.editOptionClick();
  await editpopup.emptyMinFill();
  await editpopup.charMinFill();
  await editpopup.saveLink();
  await editpopup.linkMinError();
  await editpopup.editPopupCloseOutercard();
  await deletelinkoutercard.deletingSampleLinkapi("Matplotlib: Multiplots with subplots() Function")
}catch (error) {
  console.error(`Test failed: ${error}`);
  throw error;
}
})
test("verify that the max minutes a link can have is 10000",async({page})=>{
  try{
   // test.setTimeout(130000)
  const samplelink=new RecommendingSampleLink(page)
  const deletelinkoutercard=new DeleteSampleLinkAPI(page);
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const editpopup=new EditPopupOuterCard(page);
  await samplelink.recommendingSampleArticleLink(urls.URL72,urls.MIN,"Matplotlib: Quiver Plot")
 
  await linkoutercard.refreshPage(); //await linkoutercard.linkOuterCardHover("Matplotlib: Quiver Plot");
  await linkoutercard.link_More_and_Edit_OptionsClick("Matplotlib: Quiver Plot");
  //await linkoutercard.editOptionClick();
  await editpopup.emptyMinFill();
  await editpopup.moreThanMaxMinFill();
  await editpopup.maxMinRedirection();
  await editpopup.editPopupCloseOutercard();
  await deletelinkoutercard.deletingSampleLinkapi("Matplotlib: Quiver Plot")
}catch (error) {
  console.error(`Test failed: ${error}`);
  throw error;
}
})
 

   

 