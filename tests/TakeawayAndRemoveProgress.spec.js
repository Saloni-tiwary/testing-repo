const{test,expect}=require('@playwright/test')
const{LinkOuterCard}=require('../pageobject_pagefile/link-outercard');
const{NavigationURL}=require('../pageobject_pagefile/navigating-base-url');
const{TakeawaysAndRemoveProgress}=require('../pageobject_pagefile/takeaways-and-remove-progress');
const{RecommendTab} = require('../pageobject_pagefile/recommend-tab.js');
const{DeleteLinkOutercard}=require('../pageobject_pagefile/delete-link-outercard');
const{RecommendingSampleLink}=require('../pageobject_pagefile/recommending-sample-link');

test('Recommending a sample article', async({page})=>{
    const Urlarticle= "https://playwright.dev/docs/navigations";
    const Minarticle="14"
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL()
    const recommendingsamplelink=new RecommendingSampleLink(page);
    await recommendingsamplelink.recommendingSampleArticleLink(Urlarticle,Minarticle);
})





test("verify that a user cannot give an empty takeaway",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await linkoutercard.linkOuterCardClick();
    await takeawaysandremoveprogress.givingEmptyTakeaway();
    await takeawaysandremoveprogress.savingTakeaway();
    await takeawaysandremoveprogress.completeTakeawayWarning();
 
  })
  test("verify the takeaway text area has user's profile pic",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await linkoutercard.linkOuterCardClick();
    await takeawaysandremoveprogress.userImageVisible();
  })
  test("verify that the takeaway text area has user's name",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await linkoutercard.linkOuterCardClick();
    await takeawaysandremoveprogress.userNameVisible();
 
  })
   
  test("verify on giving a takeaway (apart from video link) the progress percentage goes to 45%",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await linkoutercard.linkOuterCardClick();
    await takeawaysandremoveprogress.givingFirstValidTakeaway();
    await takeawaysandremoveprogress.progressBarto45Verification();
 
  })
   
  test("verify on clicking remove progress the progress is removed",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await linkoutercard.linkOuterCardClick();
    await takeawaysandremoveprogress.givingFirstValidTakeaway();
    await takeawaysandremoveprogress.moreOptionsClick();
    await takeawaysandremoveprogress.removeProgressSelect();
    await takeawaysandremoveprogress.removingProgressClick();
    await takeawaysandremoveprogress.progressRemovedConfirmation();
 
  })
  test("verify on clicking no on the remove progress popup, popup goes away",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await linkoutercard.linkOuterCardClick();
    await takeawaysandremoveprogress.givingFirstValidTakeaway();
    await takeawaysandremoveprogress.moreOptionsClick();
    await takeawaysandremoveprogress.removeProgressSelect();
    await takeawaysandremoveprogress.noButtonRemovePopupClick();
    await takeawaysandremoveprogress.popupGoneConfirmation();
 
  })
  test("verify on clicking cancel on remove progress popup,popup goes away",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await linkoutercard.linkOuterCardClick();
    await takeawaysandremoveprogress.givingFirstValidTakeaway();
    await takeawaysandremoveprogress.moreOptionsClick();
    await takeawaysandremoveprogress.removeProgressSelect();
    await takeawaysandremoveprogress.popupCloseByClickCancel();
    await takeawaysandremoveprogress.popupGoneConfirmation();
 
  
  })
  test("verify that the progress bar is reflected in the link outercard ",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await linkoutercard.linkOuterCardClick();
    await takeawaysandremoveprogress.givingFirstValidTakeaway();
    await takeawaysandremoveprogress.menuIconClick();
    await takeawaysandremoveprogress.homeIconClick();
    await takeawaysandremoveprogress.progressBarVisibleonOuterCard();
 
  })
  test("verify that takeaways have the date visible",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await linkoutercard.linkOuterCardClick();
    await takeawaysandremoveprogress.givingFirstValidTakeaway();
    await takeawaysandremoveprogress.takeawayDateVisible();
 
  })
    
  test("verify that on completing the takeaway step learning minutes are accumulated ",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await linkoutercard.linkOuterCardClick();
    await takeawaysandremoveprogress.givingFirstValidTakeaway();
    await takeawaysandremoveprogress.savingTakeaway();
    await takeawaysandremoveprogress.closingPayItForwardPopup();
    await takeawaysandremoveprogress.learningDoneMessage();  
  
  })
  test("verify that the takeaways can be edited",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page); 
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await linkoutercard.linkOuterCardClick();
    await takeawaysandremoveprogress.clickEditTakeawayTab();
    await takeawaysandremoveprogress.givingSecondValidTakeaway();
    await takeawaysandremoveprogress.savingEditedTakeaway();
    await takeawaysandremoveprogress.secondTakeawaySavedConfirmation();
 
  
  })
  test("verify that the edited takeaway has edited visible in the takeaway text area",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await linkoutercard.linkOuterCardClick();
    await takeawaysandremoveprogress.clickEditTakeawayTab();
    await takeawaysandremoveprogress.givingSecondValidTakeaway();
    await takeawaysandremoveprogress.savingEditedTakeaway();
    await takeawaysandremoveprogress.editedTextVisible();
  })
  test("verify that the given takeaway cannot be edited to null takeaway",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await linkoutercard.linkOuterCardClick();
    await takeawaysandremoveprogress.clickEditTakeawayTab();
    await takeawaysandremoveprogress.givingEmptyTakeaway();
    await takeawaysandremoveprogress.savingEditedTakeaway();
    await takeawaysandremoveprogress.emptyEditedTakeawayWarning();
 
  })
   
  test("verify on clicking cancel after giving edited takeaway, the previous takeaway remains entact",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    await linkoutercard.linkOuterCardClick();
    await takeawaysandremoveprogress.clickEditTakeawayTab();
    await takeawaysandremoveprogress.givingThirdValidTakeaway();
    await takeawaysandremoveprogress.savingEditedTakeaway();
    await takeawaysandremoveprogress.prevTakeawayEntactConfirmation();
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

  