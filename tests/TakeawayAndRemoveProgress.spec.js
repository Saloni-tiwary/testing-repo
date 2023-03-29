const{test,expect}=require('@playwright/test')
const{LinkOuterCard}=require('../pageobject_pagefile/link-outercard');
const{NavigationURL}=require('../pageobject_pagefile/navigating-base-url');
const{TakeawaysAndRemoveProgress}=require('../pageobject_pagefile/takeaways-and-remove-progress');
//const{RecommendTab} = require('../pageobject_pagefile/recommend-tab.js');
//const{DeleteLinkOutercard}=require('../pageobject_pagefile/delete-link-outercard');
const{RecommendingSampleLink}=require('../pageobject_pagefile/recommending-sample-link');
const{urls}=require('../constant/urls');
const{DeletingSampleLink}=require('../pageobject_pagefile/deleting-samplelink-innerview');
const{DeleteSampleLinkOuterCard}=require('../pageobject_pagefile/delete-samplelink-outercard')

 
 
// test('Recommending a sample article', async({page})=>{
    
//     const navigationurl= new NavigationURL(page)
//     await navigationurl.navigationURL()
//     const recommendingsamplelink=new RecommendingSampleLink(page);
//     await recommendingsamplelink.recommendingSampleArticleLink(urls.URL25,urls.MIN,"Playwright Automatic Screenshots");
// })





test("verify that a user cannot give an empty takeaway",async({page})=>{
  try{
    const samplelink=new RecommendingSampleLink(page);
  const deletelink=new DeletingSampleLink(page);
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await samplelink.recommendingSampleArticleLink(urls.URL27,urls.MIN,"Cucumber Java Tutorial");
   // await linkoutercard.linkOuterCardClick();
    await takeawaysandremoveprogress.givingEmptyTakeaway();
    await takeawaysandremoveprogress.savingTakeaway();
    await takeawaysandremoveprogress.completeTakeawayWarning();
    await deletelink.deletingSampleLinkFromInnerview();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
  })
  test("verify the takeaway text area has user's profile pic",async({page})=>{
    try{
      const samplelink=new RecommendingSampleLink(page);
  const deletelink=new DeletingSampleLink(page);
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await samplelink.recommendingSampleArticleLink(urls.URL39,urls.MIN,"JSON Data Types");
   // await linkoutercard.linkOuterCardClick();
    await takeawaysandremoveprogress.userImageVisible();
    await deletelink.deletingSampleLinkFromInnerview();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
  })
  test("verify that the takeaway text area has user's name",async({page})=>{
    try{
      const samplelink=new RecommendingSampleLink(page);
  const deletelink=new DeletingSampleLink(page);
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await samplelink.recommendingSampleArticleLink(urls.URL40,urls.MIN,"JSON Content Type");
    //await linkoutercard.linkOuterCardClick();
    await takeawaysandremoveprogress.userNameVisible();
    await deletelink.deletingSampleLinkFromInnerview();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
  })
 
 
   
  test("verify on giving a takeaway (apart from video link) the progress percentage goes to 45%",async({page})=>{
    try{
      const samplelink=new RecommendingSampleLink(page);
    const deletelink=new DeletingSampleLink(page);
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await samplelink.recommendingSampleArticleLink(urls.URL28,urls.MIN,"Appium Java Tutorial");
   // await linkoutercard.linkOuterCardClick();
    await takeawaysandremoveprogress.givingFirstValidTakeaway();
    await takeawaysandremoveprogress.progressBarto45Verification();
    await deletelink.deletingSampleLinkFromInnerview();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
 
  })
   
  test("verify on clicking remove progress the progress is removed",async({page})=>{
    try{
      const samplelink=new RecommendingSampleLink(page);
    const deletelink=new DeletingSampleLink(page);
    
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await samplelink.recommendingSampleArticleLink(urls.URL29,urls.MIN,"REST Assured Tutorial for Beginners");
    //await linkoutercard.linkOuterCardClick();
    await takeawaysandremoveprogress.givingFirstValidTakeaway();
    await takeawaysandremoveprogress.moreOptionsClick();
    await takeawaysandremoveprogress.removeProgressSelect();
    await takeawaysandremoveprogress.removingProgressClick();
    await takeawaysandremoveprogress.progressRemovedConfirmation();
    await deletelink.deletingSampleLinkFromInnerview();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
  })
  test("verify on clicking no on the remove progress popup, popup goes away",async({page})=>{
    try{
      const samplelink=new RecommendingSampleLink(page);
    const deletelink=new DeletingSampleLink(page);
    
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await samplelink.recommendingSampleArticleLink(urls.URL30,urls.MIN,"REST Assured with Java: Introduction to Course");
    //await linkoutercard.linkOuterCardClick();
    await takeawaysandremoveprogress.givingFirstValidTakeaway();
    await takeawaysandremoveprogress.progressBarto45Verification();
    await takeawaysandremoveprogress.moreOptionsClick();
    await takeawaysandremoveprogress.removeProgressSelect();
    await takeawaysandremoveprogress.noButtonRemovePopupClick();
    await takeawaysandremoveprogress.popupGoneConfirmation();
    await deletelink.deletingSampleLinkFromInnerview();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
  })
  test("verify on clicking cancel on remove progress popup,popup goes away",async({page})=>{
    try{
      const samplelink=new RecommendingSampleLink(page);
    const deletelink=new DeletingSampleLink(page);
    
    
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await samplelink.recommendingSampleArticleLink(urls.URL31,urls.MIN,"Introduction To APIs");
   // await linkoutercard.linkOuterCardClick();
    await takeawaysandremoveprogress.givingFirstValidTakeaway();
    await takeawaysandremoveprogress.progressBarto45Verification();
    await takeawaysandremoveprogress.moreOptionsClick();
    await takeawaysandremoveprogress.removeProgressSelect();
    await takeawaysandremoveprogress.popupCloseByClickCancel();
    await takeawaysandremoveprogress.popupGoneConfirmation();
    await deletelink.deletingSampleLinkFromInnerview();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
  
  })
  test("verify that the progress bar is reflected in the link outercard ",async({page})=>{
    try{
      const samplelink=new RecommendingSampleLink(page);
    const deletelinkfromoutercard=new DeleteSampleLinkOuterCard(page);
    
    
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await samplelink.recommendingSampleArticleLink(urls.URL32,urls.MIN,"Types of API");
    //await linkoutercard.linkOuterCardClick();
    await takeawaysandremoveprogress.givingFirstValidTakeaway();
    await takeawaysandremoveprogress.progressBarto45Verification();
    await takeawaysandremoveprogress.menuIconClick();
    await takeawaysandremoveprogress.homeIconClick();
    await takeawaysandremoveprogress.progressBarVisibleonOuterCard();
    await deletelinkfromoutercard.deletingSampleLinkOutercard("Types of API");
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
 
  })
  test("verify that takeaways have the date visible",async({page})=>{
    try{
      const samplelink=new RecommendingSampleLink(page);
    const deletelink=new DeletingSampleLink(page);
    
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await samplelink.recommendingSampleArticleLink(urls.URL33,urls.MIN,"Introduction to REST API");
   // await linkoutercard.linkOuterCardClick();
    await takeawaysandremoveprogress.givingFirstValidTakeaway();
    await takeawaysandremoveprogress.progressBarto45Verification();
    await takeawaysandremoveprogress.takeawayDateVisible();
    await deletelink.deletingSampleLinkFromInnerview();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
 
  })
    
  test("verify that on completing the takeaway step learning minutes are accumulated ",async({page})=>{
    try{
      const samplelink=new RecommendingSampleLink(page);
    const deletelink=new DeletingSampleLink(page);
    
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await samplelink.recommendingSampleArticleLink(urls.URL34,urls.MIN,"Difference between API and Web Service");
   // await linkoutercard.linkOuterCardClick();
    await takeawaysandremoveprogress.givingFirstValidTakeaway();
    await takeawaysandremoveprogress.savingTakeaway();
    await takeawaysandremoveprogress.closingPayItForwardPopup();
    await takeawaysandremoveprogress.learningDoneMessage();  
    await deletelink.deletingSampleLinkFromInnerview();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
  })
  test("verify that the takeaways can be edited",async({page})=>{
    try{
      const samplelink=new RecommendingSampleLink(page);
    const deletelink=new DeletingSampleLink(page);
    
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page); 
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await samplelink.recommendingSampleArticleLink(urls.URL35,urls.MIN,"API Request Anatomy");
   // await linkoutercard.linkOuterCardClick();
   await takeawaysandremoveprogress.givingFirstValidTakeaway();
    await takeawaysandremoveprogress.savingTakeaway();
    await takeawaysandremoveprogress.closingPayItForwardPopup();
    await takeawaysandremoveprogress.clickEditTakeawayTab();
    await takeawaysandremoveprogress.givingSecondValidTakeaway();
    await takeawaysandremoveprogress.savingEditedTakeaway();
    await takeawaysandremoveprogress.secondTakeawaySavedConfirmation();
    await deletelink.deletingSampleLinkFromInnerview();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
 
  
  })
  test("verify that the edited takeaway has edited visible in the takeaway text area",async({page})=>{
    try{
      const samplelink=new RecommendingSampleLink(page);
    const deletelink=new DeletingSampleLink(page);
    
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await samplelink.recommendingSampleArticleLink(urls.URL36,urls.MIN,"WADL vs WSDL");
   // await linkoutercard.linkOuterCardClick();
   await takeawaysandremoveprogress.givingFirstValidTakeaway();
    await takeawaysandremoveprogress.savingTakeaway();
    await takeawaysandremoveprogress.closingPayItForwardPopup();
    await takeawaysandremoveprogress.clickEditTakeawayTab();
    await takeawaysandremoveprogress.givingSecondValidTakeaway();
    await takeawaysandremoveprogress.savingEditedTakeaway();
     await takeawaysandremoveprogress.editedTextVisible();
     await deletelink.deletingSampleLinkFromInnerview();
    }catch (error) {
      console.error(`Test failed: ${error}`);
      throw error;
    }
  })
  test("verify that the given takeaway cannot be edited to null takeaway",async({page})=>{
    try{
      const samplelink=new RecommendingSampleLink(page);
    const deletelink=new DeletingSampleLink(page);
   
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await samplelink.recommendingSampleArticleLink(urls.URL37,urls.MIN,"Stateful vs  Stateless Architecture");
   // await linkoutercard.linkOuterCardClick();
   await takeawaysandremoveprogress.givingFirstValidTakeaway();
    await takeawaysandremoveprogress.savingTakeaway();
    await takeawaysandremoveprogress.closingPayItForwardPopup();
    await takeawaysandremoveprogress.clickEditTakeawayTab();
    await takeawaysandremoveprogress.givingEmptyTakeaway();
    await takeawaysandremoveprogress.savingEditedTakeaway();
    await takeawaysandremoveprogress.emptyEditedTakeawayWarning();
    await deletelink.deletingSampleLinkFromInnerview();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
 
  })
   
  test("verify on clicking cancel after giving edited takeaway, the previous takeaway remains entact",async({page})=>{
    try{
      const samplelink=new RecommendingSampleLink(page);
    const deletelink=new DeletingSampleLink(page);
    
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await samplelink.recommendingSampleArticleLink(urls.URL38,urls.MIN,"JSON Syntax");
   // await linkoutercard.linkOuterCardClick();
   await takeawaysandremoveprogress.givingFirstValidTakeaway();
    await takeawaysandremoveprogress.savingTakeaway();
    await takeawaysandremoveprogress.closingPayItForwardPopup();
    await takeawaysandremoveprogress.clickEditTakeawayTab();
    await takeawaysandremoveprogress.givingThirdValidTakeaway();
    await takeawaysandremoveprogress.clickTakeawayEditCancelButton()
    await takeawaysandremoveprogress.prevTakeawayEntactConfirmation();
    await deletelink.deletingSampleLinkFromInnerview();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
  })
  
  