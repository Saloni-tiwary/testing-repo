const { test, expect, request} = require('@playwright/test');
const {NavigationURL}= require('../pageobject_pagefile/navigating-base-url');
const{LinkOuterCard}=require('../pageobject_pagefile/link-outercard');
const {RecommendTab} = require('../pageobject_pagefile/recommend-tab.js');
const{DeleteLinkOutercard}=require('../pageobject_pagefile/delete-link-outercard');
const{ProblemInCompletion}=require('../pageobject_pagefile/problem-in-completion')
 


test("Giving a sample takeaway", async({page})=>{
    const Urlvideo= 'https://www.youtube.com/watch?v=Pm2BvdiZUXA';
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
  test("Verify if the video is not watched and done button is clicked then problem in completion URL is visible",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page); 
    const problemincompletion=new ProblemInCompletion(page);
    await linkoutercard.linkOuterCardClick();
    await problemincompletion.takeawayDoneButtonClick();
    await problemincompletion.problemInCompletionURLVisisbleVerify();
  })

  test("verify when problem in completion cannot be used without giving the takeaways",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page); 
    const problemincompletion=new ProblemInCompletion(page);
    await linkoutercard.linkOuterCardClick(); 
    await problemincompletion.takeawayDoneButtonClick();
    await problemincompletion.clickProblemInCompletionURL();
    await problemincompletion.emptyTakeawayWarningVerify();
  })
  test("verify on clicking the problem in completion URL a popup opens asking reasons for using the feature",async({page})=>{ 
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page); 
    const problemincompletion=new ProblemInCompletion(page);
    await linkoutercard.linkOuterCardClick(); 
    await problemincompletion.takeawayDoneButtonClick();
    await problemincompletion.givingValidTakeaway();
    await problemincompletion.clickProblemInCompletionURL();
    await problemincompletion.problemInCompletionPopupVisibleVerify();

 
     
  })
  test("verify on not giving any reason in the popup and clicking done button an error message is thrown",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page); 
    const problemincompletion=new ProblemInCompletion(page);
    await linkoutercard.linkOuterCardClick(); 
    await problemincompletion.takeawayDoneButtonClick();
    await problemincompletion.givingValidTakeaway();
    await problemincompletion.clickProblemInCompletionURL();
    await problemincompletion.problemInCompletionPopupDoneButtonClick();
    await problemincompletion.giveValidReasonErrorMessageVerify();
  })
  test("verify on giving reasons in problem in completion learning minutes are accumulated",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page); 
    const problemincompletion=new ProblemInCompletion(page);
    
    await linkoutercard.linkOuterCardClick(); 
    await problemincompletion.takeawayDoneButtonClick();
    await problemincompletion.givingValidTakeaway();
    await problemincompletion.clickProblemInCompletionURL();
    await problemincompletion.givingInputInProblemInCompletionPopup();
    await problemincompletion.problemInCompletionPopupDoneButtonClick();
    await problemincompletion.closePayItForwardPopup();
    await problemincompletion.learningMinutesAccumulatedVerify();    
 
  })
   
  test("deleting the sample takeaway",async({page})=>{
     
    
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
   




     



 



 