const{test,expect}=require('@playwright/test')
const{LinkOuterCard}=require('../pageobject_pagefile/link-outercard');
const{NavigationURL}=require('../pageobject_pagefile/navigating-base-url');
const{TakeawaysAndRemoveProgress}=require('../pageobject_pagefile/takeaways-and-remove-progress');
//const{RecommendTab} = require('../pageobject_pagefile/recommend-tab.js');
//const{DeleteLinkOutercard}=require('../pageobject_pagefile/delete-link-outercard');
const{RecommendingSampleLink}=require('../pageobject_pagefile/recommending-sample-link');
const{urls}=require('../constant/urls');
//const{DeletingSampleLink}=require('../pageobject_pagefile/deleting-samplelink-innerview');
const{DeleteSampleLinkAPI}=require('../pageobject_pagefile/delete-samplelink-api')

 
 
// test('Recommending a sample article', async({page})=>{
    
//     const navigationurl= new NavigationURL(page)
//     await navigationurl.navigationURL()
//     const recommendingsamplelink=new RecommendingSampleLink(page);
//     await recommendingsamplelink.recommendingSampleArticleLink(urls.URL25,urls.MIN,"Playwright Automatic Screenshots");
// })





test("verify that a user cannot give an empty takeaway",async({page})=>{
  try{
    const samplelink=new RecommendingSampleLink(page);
  const deletelink=new DeleteSampleLinkAPI(page);
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await samplelink.recommendingSampleArticleLink(urls.URL27,urls.MIN,"Cucumber Java Tutorial");
    await linkoutercard.linkOuterCardClick("Cucumber Java Tutorial");
    await takeawaysandremoveprogress.givingEmptyTakeaway();
    await takeawaysandremoveprogress.savingTakeaway();
    await takeawaysandremoveprogress.completeTakeawayWarning();
    await deletelink.deletingSampleLinkapi("Cucumber Java Tutorial") ;
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
  })
  test("verify the takeaway text area has user's profile pic",async({page})=>{
    try{
      const samplelink=new RecommendingSampleLink(page);
  const deletelink=new DeleteSampleLinkAPI(page);
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await samplelink.recommendingSampleArticleLink(urls.URL39,urls.MIN,"JSON Data Types");
    await linkoutercard.linkOuterCardClick("JSON Data Types");
    await takeawaysandremoveprogress.userImageVisible();
    await deletelink.deletingSampleLinkapi("JSON Data Types");
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
  })
  test("verify that the takeaway text area has user's name",async({page})=>{
    try{
      const samplelink=new RecommendingSampleLink(page);
  const deletelink=new DeleteSampleLinkAPI(page);
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await samplelink.recommendingSampleArticleLink(urls.URL40,urls.MIN,"API automation testing using Playwright");
    await linkoutercard.linkOuterCardClick("API automation testing using Playwright");
    await takeawaysandremoveprogress.userNameVisible();
    await deletelink.deletingSampleLinkapi("API automation testing using Playwright");
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
  })
 
 
   
  test("verify on giving a takeaway (apart from video link) the progress percentage goes to 45%",async({page})=>{
    try{
      const samplelink=new RecommendingSampleLink(page);
    const deletelink=new DeleteSampleLinkAPI(page);
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await samplelink.recommendingSampleArticleLink(urls.URL28,urls.MIN,"Appium Java Tutorial");
    await linkoutercard.linkOuterCardClick("Appium Java Tutorial");
    await takeawaysandremoveprogress.givingFirstValidTakeaway();
    await takeawaysandremoveprogress.progressBarto45Verification();
    await deletelink.deletingSampleLinkapi("Appium Java Tutorial");
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
 
  })
   
  test("verify on clicking remove progress the progress is removed",async({page})=>{
    try{
      const samplelink=new RecommendingSampleLink(page);
    const deletelink=new DeleteSampleLinkAPI(page);
    
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await samplelink.recommendingSampleArticleLink(urls.URL29,urls.MIN,"REST Assured Tutorial for Beginners");
    await linkoutercard.linkOuterCardClick("REST Assured Tutorial for Beginners");
    await takeawaysandremoveprogress.givingFirstValidTakeaway();
    await takeawaysandremoveprogress.moreOptionsClick();
    await takeawaysandremoveprogress.removeProgressSelect();
    await takeawaysandremoveprogress.removingProgressClick();
    await takeawaysandremoveprogress.progressRemovedConfirmation();
    await deletelink.deletingSampleLinkapi("REST Assured Tutorial for Beginners");
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
  })
  test("verify on clicking no on the remove progress popup, popup goes away",async({page})=>{
    try{
      const samplelink=new RecommendingSampleLink(page);
    const deletelink=new DeleteSampleLinkAPI(page);
    
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await samplelink.recommendingSampleArticleLink(urls.URL30,urls.MIN,"REST Assured with Java: Introduction to Course");
    await linkoutercard.linkOuterCardClick("REST Assured with Java: Introduction to Course");
    await takeawaysandremoveprogress.givingFirstValidTakeaway();
    await takeawaysandremoveprogress.progressBarto45Verification();
    await takeawaysandremoveprogress.moreOptionsClick();
    await takeawaysandremoveprogress.removeProgressSelect();
    await takeawaysandremoveprogress.noButtonRemovePopupClick();
    await takeawaysandremoveprogress.popupGoneConfirmation();
    await deletelink.deletingSampleLinkapi("REST Assured with Java: Introduction to Course");
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
  })
  test("verify on clicking cancel on remove progress popup,popup goes away",async({page})=>{
    try{
      const samplelink=new RecommendingSampleLink(page);
    const deletelink=new DeleteSampleLinkAPI(page);
    
    
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await samplelink.recommendingSampleArticleLink(urls.URL31,urls.MIN,"Introduction To APIs");
    await linkoutercard.linkOuterCardClick("Introduction To APIs");
    await takeawaysandremoveprogress.givingFirstValidTakeaway();
    await takeawaysandremoveprogress.progressBarto45Verification();
    await takeawaysandremoveprogress.moreOptionsClick();
    await takeawaysandremoveprogress.removeProgressSelect();
    await takeawaysandremoveprogress.popupCloseByClickCancel();
    await takeawaysandremoveprogress.popupGoneConfirmation();
    await deletelink.deletingSampleLinkapi("Introduction To APIs");
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
  
  })
  test("verify that the progress bar is reflected in the link outercard ",async({page})=>{
    try{
      const samplelink=new RecommendingSampleLink(page);
    const deletelinkfromoutercard=new DeleteSampleLinkAPI(page);
    
    
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await samplelink.recommendingSampleArticleLink(urls.URL32,urls.MIN,"Types of API");
    await linkoutercard.linkOuterCardClick("Types of API");
    await takeawaysandremoveprogress.givingFirstValidTakeaway();
    await takeawaysandremoveprogress.progressBarto45Verification();
    await takeawaysandremoveprogress.menuIconClick();
    await takeawaysandremoveprogress.homeIconClick();
    await takeawaysandremoveprogress.progressBarVisibleonOuterCard();
    await deletelinkfromoutercard.deletingSampleLinkapi("Types of API");
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
 
  })
  test("verify that takeaways have the date visible",async({page})=>{
    try{
      const samplelink=new RecommendingSampleLink(page);
    const deletelink=new DeleteSampleLinkAPI(page);
    
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await samplelink.recommendingSampleArticleLink(urls.URL33,urls.MIN,"Introduction to REST API");
   await linkoutercard.linkOuterCardClick("Introduction to REST API");
    await takeawaysandremoveprogress.givingFirstValidTakeaway();
    await takeawaysandremoveprogress.progressBarto45Verification();
    await takeawaysandremoveprogress.takeawayDateVisible();
    await deletelink.deletingSampleLinkapi("Introduction to REST API");
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
 
  })
    
  test("verify that on completing the takeaway step learning minutes are accumulated ",async({page})=>{
    try{
      const samplelink=new RecommendingSampleLink(page);
    const deletelink=new DeleteSampleLinkAPI(page);
    
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await samplelink.recommendingSampleArticleLink(urls.URL34,urls.MIN,"Difference between API and Web Service");
    await linkoutercard.linkOuterCardClick("Difference between API and Web Service");
    await takeawaysandremoveprogress.givingFirstValidTakeaway();
    await takeawaysandremoveprogress.savingTakeaway();
    await takeawaysandremoveprogress.closingPayItForwardPopup();
    await takeawaysandremoveprogress.learningDoneMessage();  
    await deletelink.deletingSampleLinkapi("Difference between API and Web Service");
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
  })
  test("verify that the takeaways can be edited",async({page})=>{
    try{
      const samplelink=new RecommendingSampleLink(page);
    const deletelink=new DeleteSampleLinkAPI(page);
    
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page); 
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await samplelink.recommendingSampleArticleLink(urls.URL35,urls.MIN,"Using Playwright for API testing | Reflect");
    await linkoutercard.linkOuterCardClick("Using Playwright for API testing | Reflect");
   await takeawaysandremoveprogress.givingFirstValidTakeaway();
    await takeawaysandremoveprogress.savingTakeaway();
    await takeawaysandremoveprogress.closingPayItForwardPopup();
    await takeawaysandremoveprogress.clickEditTakeawayTab();
    await takeawaysandremoveprogress.givingSecondValidTakeaway();
    await takeawaysandremoveprogress.savingEditedTakeaway();
    await takeawaysandremoveprogress.secondTakeawaySavedConfirmation();
    await deletelink.deletingSampleLinkapi("Using Playwright for API testing | Reflect");
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
 
  
  })
  test("verify that the edited takeaway has edited visible in the takeaway text area",async({page})=>{
    try{
      const samplelink=new RecommendingSampleLink(page);
    const deletelink=new DeleteSampleLinkAPI(page);
    
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await samplelink.recommendingSampleArticleLink(urls.URL36,urls.MIN,"WADL vs WSDL");
    await linkoutercard.linkOuterCardClick("WADL vs WSDL");
   await takeawaysandremoveprogress.givingFirstValidTakeaway();
    await takeawaysandremoveprogress.savingTakeaway();
    await takeawaysandremoveprogress.closingPayItForwardPopup();
    await takeawaysandremoveprogress.clickEditTakeawayTab();
    await takeawaysandremoveprogress.givingSecondValidTakeaway();
    await takeawaysandremoveprogress.savingEditedTakeaway();
     await takeawaysandremoveprogress.editedTextVisible();
     await deletelink.deletingSampleLinkapi("WADL vs WSDL");
    }catch (error) {
      console.error(`Test failed: ${error}`);
      throw error;
    }
  })
  test("verify that the given takeaway cannot be edited to null takeaway",async({page})=>{
    try{
      const samplelink=new RecommendingSampleLink(page);
    const deletelink=new DeleteSampleLinkAPI(page);
   
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await samplelink.recommendingSampleArticleLink(urls.URL37,urls.MIN,"Stateful vs  Stateless Architecture");
    await linkoutercard.linkOuterCardClick("Stateful vs  Stateless Architecture");
   await takeawaysandremoveprogress.givingFirstValidTakeaway();
    await takeawaysandremoveprogress.savingTakeaway();
    await takeawaysandremoveprogress.closingPayItForwardPopup();
    await takeawaysandremoveprogress.clickEditTakeawayTab();
    await takeawaysandremoveprogress.givingEmptyTakeaway();
    await takeawaysandremoveprogress.savingEditedTakeaway();
    await takeawaysandremoveprogress.emptyEditedTakeawayWarning();
    await deletelink.deletingSampleLinkapi("Stateful vs  Stateless Architecture");
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
 
  })
   
  test("verify on clicking cancel after giving edited takeaway, the previous takeaway remains entact",async({page})=>{
    try{
      const samplelink=new RecommendingSampleLink(page);
    const deletelink=new DeleteSampleLinkAPI(page);
    
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await samplelink.recommendingSampleArticleLink(urls.URL38,urls.MIN,"JSON Syntax");
    await linkoutercard.linkOuterCardClick("JSON Syntax");
   await takeawaysandremoveprogress.givingFirstValidTakeaway();
    await takeawaysandremoveprogress.savingTakeaway();
    await takeawaysandremoveprogress.closingPayItForwardPopup();
    await takeawaysandremoveprogress.clickEditTakeawayTab();
    await takeawaysandremoveprogress.givingThirdValidTakeaway();
    await takeawaysandremoveprogress.clickTakeawayEditCancelButton()
    await takeawaysandremoveprogress.prevTakeawayEntactConfirmation();
    await deletelink.deletingSampleLinkapi("JSON Syntax");
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
  })
  
  