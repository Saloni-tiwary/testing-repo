const { test, expect, request} = require('@playwright/test');
const {NavigationURL}= require('../pageobject_pagefile/navigating-base-url');
const{LinkOuterCard}=require('../pageobject_pagefile/link-outercard');
 
const{RecommendingSampleLink}=require('../pageobject_pagefile/recommending-sample-link')
const{ProblemInCompletion}=require('../pageobject_pagefile/problem-in-completion')
const{DeleteSampleLinkAPI}=require('../pageobject_pagefile/delete-samplelink-api');
 
const{urls}=require('../constant/urls');
 


 
  test("Verify if the video is not watched and done button is clicked then problem in completion URL is visible",async({page})=>{
    try{
      const samplelink=new RecommendingSampleLink(page);
    const samplelinkdeletion=new DeleteSampleLinkAPI(page);
      const navigationurl= new NavigationURL(page)
      await navigationurl.navigationURL();
      const linkoutercard= new LinkOuterCard(page);
      const problemincompletion=new ProblemInCompletion(page);
     
    //   const editpopupinnerview=new EditPopupLinkInnerview(page);
    //   const linkinnerviewui=new LinkInnerViewUI(page);
      await samplelink.recommendingSampleArticleLink(urls.URL20,urls.MIN,"Supported languages | Playwright");
   await linkoutercard.linkOuterCardClick("Supported languages | Playwright");
    await problemincompletion.takeawayDoneButtonClick();
    await problemincompletion.problemInCompletionURLVisisbleVerify();
    await samplelinkdeletion.deletingSampleLinkapi("Supported languages | Playwright");
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }

  })

  test("verify problem in completion cannot be used without giving the takeaways",async({page})=>{
    try{
      const samplelink=new RecommendingSampleLink(page);
    const samplelinkdeletion=new DeleteSampleLinkAPI(page);   
   
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page); 
    const problemincompletion=new ProblemInCompletion(page);
    await samplelink.recommendingSampleArticleLink(urls.URL21,urls.MIN,"Troubleshooting | Playwright");
   await linkoutercard.linkOuterCardClick("Troubleshooting | Playwright"); 
    await problemincompletion.takeawayDoneButtonClick();
    await problemincompletion.clickProblemInCompletionURL();
    await problemincompletion.emptyTakeawayWarningVerify();
    await samplelinkdeletion.deletingSampleLinkapi("Troubleshooting | Playwright");
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
  })
  test("verify on clicking the problem in completion URL a popup opens asking reasons for using the feature",async({page})=>{ 
    try{
      const samplelink=new RecommendingSampleLink(page);
    const samplelinkdeletion=new DeleteSampleLinkAPI(page);   
    
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page); 
    const problemincompletion=new ProblemInCompletion(page);
    await samplelink.recommendingSampleArticleLink(urls.URL22,urls.MIN,"Docker | Playwright");
   await linkoutercard.linkOuterCardClick("Docker | Playwright"); 
    await problemincompletion.takeawayDoneButtonClick();
    await problemincompletion.givingValidTakeaway();
    await problemincompletion.clickProblemInCompletionURL();
    await problemincompletion.problemInCompletionPopupVisibleVerify();
    await problemincompletion.closeProbInCompletionPopup();
    await samplelinkdeletion.deletingSampleLinkapi("Docker | Playwright");
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }

 
     
  })
  test("verify on not giving any reason in the popup and clicking done button an error message is thrown",async({page})=>{
    try{
      const samplelink=new RecommendingSampleLink(page);
    const samplelinkdeletion=new DeleteSampleLinkAPI(page);   
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page); 
    const problemincompletion=new ProblemInCompletion(page);
    await samplelink.recommendingSampleArticleLink(urls.URL23,urls.MIN,"Continuous Integration | Playwright");
    await linkoutercard.linkOuterCardClick("Continuous Integration | Playwright"); 
    await problemincompletion.takeawayDoneButtonClick();
    await problemincompletion.givingValidTakeaway();
    await problemincompletion.clickProblemInCompletionURL();
    await problemincompletion.problemInCompletionPopupDoneButtonClick();
    await problemincompletion.giveValidReasonErrorMessageVerify();
    await problemincompletion.closeProbInCompletionPopup();
    await samplelinkdeletion.deletingSampleLinkapi("Continuous Integration | Playwright");
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
  })
  test("verify on giving reasons in problem in completion learning minutes are accumulated",async({page})=>{
    try{
      const samplelink=new RecommendingSampleLink(page);
    const samplelinkdeletion=new DeleteSampleLinkAPI(page);   
    
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page); 
    const problemincompletion=new ProblemInCompletion(page);
    await samplelink.recommendingSampleArticleLink(urls.URL24,urls.MIN,"Selenium Grid | Playwright");
    await linkoutercard.linkOuterCardClick("Selenium Grid | Playwright"); 
    await problemincompletion.takeawayDoneButtonClick();
    await problemincompletion.givingValidTakeaway();
    await problemincompletion.clickProblemInCompletionURL();
    await problemincompletion.givingInputInProblemInCompletionPopup();
    await problemincompletion.problemInCompletionPopupDoneButtonClick();
    await problemincompletion.closePayItForwardPopup();
    await problemincompletion.learningMinutesAccumulatedVerify();    
    await samplelinkdeletion.deletingSampleLinkapi("Selenium Grid | Playwright");
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
  })
  
   
   




     



 



 