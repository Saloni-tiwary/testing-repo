const{test,expect}=require('@playwright/test')
const{LinkOuterCard}=require('../pageobject_pagefile/link-outercard');
const{NavigationURL}=require('../pageobject_pagefile/navigating-base-url');
const{TakeawaysAndRemoveProgress}=require('../pageobject_pagefile/takeaways-and-remove-progress');
const{TakeawaysFormattingOptions}=require('../pageobject_pagefile/takeaways-formatting-options');
const {RecommendTab} = require('../pageobject_pagefile/recommend-tab.js');
const{DeleteLinkOutercard}=require('../pageobject_pagefile/delete-link-outercard');

test.describe.configure({ mode: 'serial' });
test.describe('My other test suite', () => {
test('Recommending a sample article', async({page})=>{
    const Urlarticle= "https://playwright.dev/docs/navigations";
    const Minarticle="14"
    
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL()
    const recommendVideoLink=new RecommendTab(page)
    const linkoutercard= new LinkOuterCard(page);
    
    await recommendVideoLink.univNameVisible();
    
    await recommendVideoLink.recommendButtonClick();
    await recommendVideoLink.linkFill(Urlarticle);
    await recommendVideoLink.minFill(Minarticle);
   await recommendVideoLink.saveLink();
   await recommendVideoLink.articleFirstLinkOuterCardVerify();
  })

test("give a sample takeaway",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page); 
    const takeawayformattingoptions=new TakeawaysFormattingOptions(page);
    await linkoutercard.linkOuterCardClick();
    await takeawayformattingoptions.sampleTakeawayInput();
    await takeawayformattingoptions.clickDoneSavingSampleTakeaway();
    await takeawayformattingoptions.closingPayitforwardPopup();
    await takeawayformattingoptions.learningMinAccumulatedStatusVerify();
})



test("verify as we select the text in the takeaway the formatting options are available", async ({
    page,
  }) => {
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page); 
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    const takeawayformattingoptions=new TakeawaysFormattingOptions(page);
    await linkoutercard.linkOuterCardClick();
    await takeawaysandremoveprogress.clickEditTakeawayTab();
    await takeawayformattingoptions.clickingSampleTakeaway();
    await takeawayformattingoptions.selectingSampleTakeaway();
    await takeawayformattingoptions.verifyingToolTipVisisble();
  })

  test("verify when the bold option is clicked the takeaway turns bold", async ({
    page,
  }) => {

    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page); 
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    const takeawayformattingoptions=new TakeawaysFormattingOptions(page);
    await linkoutercard.linkOuterCardClick();
    await takeawaysandremoveprogress.clickEditTakeawayTab();
    await takeawayformattingoptions.clickingSampleTakeaway();
    await takeawayformattingoptions.selectingSampleTakeaway();
    await takeawayformattingoptions.verifyingToolTipVisisble();
    await takeawayformattingoptions.boldFormatClick();
    await takeawayformattingoptions.boldFormatVisible();
  })




  test("verify when italics option is clicked the takeaway text turn italics", async ({
    page,
  }) => {

    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page); 
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    const takeawayformattingoptions=new TakeawaysFormattingOptions(page);
    await linkoutercard.linkOuterCardClick();
    await takeawaysandremoveprogress.clickEditTakeawayTab();
    await takeawayformattingoptions.clickingSampleTakeaway();
    await takeawayformattingoptions.selectingSampleTakeaway();
    await takeawayformattingoptions.verifyingToolTipVisisble();
    await takeawayformattingoptions.italicsFormatClick();
    await takeawayformattingoptions.italicsFormatVisible();

  });
  test("verify when underlined is clicked the takeaway text is underlined", async ({
    page,
  }) => {
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page); 
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    const takeawayformattingoptions=new TakeawaysFormattingOptions(page);
    await linkoutercard.linkOuterCardClick();
    await takeawaysandremoveprogress.clickEditTakeawayTab();
    await takeawayformattingoptions.clickingSampleTakeaway();
    await takeawayformattingoptions.selectingSampleTakeaway();
    await takeawayformattingoptions.verifyingToolTipVisisble();
    await takeawayformattingoptions.underlineFormatClick();
    await takeawayformattingoptions.underlineFormatVisible();
 
  });
  test("verify a text can be both bold and italics", async ({ page }) => {
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page); 
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    const takeawayformattingoptions=new TakeawaysFormattingOptions(page);
    await linkoutercard.linkOuterCardClick();
    await takeawaysandremoveprogress.clickEditTakeawayTab();
    await takeawayformattingoptions.clickingSampleTakeaway();
    await takeawayformattingoptions.selectingSampleTakeaway();
    await takeawayformattingoptions.verifyingToolTipVisisble();
    await takeawayformattingoptions.boldFormatClick();
    await takeawayformattingoptions.italicsFormatClick();
    await takeawayformattingoptions.boldAndItalicsTextVerify();
 
  });

  test("verify a text can be both bold and underlined", async ({ page }) => {
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page); 
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    const takeawayformattingoptions=new TakeawaysFormattingOptions(page);
    await linkoutercard.linkOuterCardClick();
    await takeawaysandremoveprogress.clickEditTakeawayTab();
    await takeawayformattingoptions.clickingSampleTakeaway();
    await takeawayformattingoptions.selectingSampleTakeaway();
    await takeawayformattingoptions.verifyingToolTipVisisble();
    await takeawayformattingoptions.boldFormatClick();
    await takeawayformattingoptions.underlineFormatClick();
    await takeawayformattingoptions.boldAndUnderlinedTextVerify();
 
  });
  test("verify whether the text can be italics and underlined", async ({
    page,
  }) => {

    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page); 
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    const takeawayformattingoptions=new TakeawaysFormattingOptions(page);
    await linkoutercard.linkOuterCardClick();
    await takeawaysandremoveprogress.clickEditTakeawayTab();
    await takeawayformattingoptions.clickingSampleTakeaway();
    await takeawayformattingoptions.selectingSampleTakeaway();
    await takeawayformattingoptions.verifyingToolTipVisisble();
    await takeawayformattingoptions.italicsFormatClick();
    await takeawayformattingoptions.underlineFormatClick();
    await takeawayformattingoptions.italicsAndUnderlinedTextVerify();
 
  });
  test("verify that a text can be bold italics and underlined", async ({
    page,
  }) => {
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page); 
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    const takeawayformattingoptions=new TakeawaysFormattingOptions(page);
    await linkoutercard.linkOuterCardClick();
    await takeawaysandremoveprogress.clickEditTakeawayTab();
    await takeawayformattingoptions.clickingSampleTakeaway();
    await takeawayformattingoptions.selectingSampleTakeaway();
    await takeawayformattingoptions.verifyingToolTipVisisble();
    await takeawayformattingoptions.boldFormatClick();
    await takeawayformattingoptions.italicsFormatClick();
    await takeawayformattingoptions.underlineFormatClick();
    await takeawayformattingoptions.boldItalicsAndUnderlinedTextVerify();
 
  });
  test("verify that a takeaway can be consolidated into bullet points", async ({page}) => {

    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page); 
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    const takeawayformattingoptions=new TakeawaysFormattingOptions(page);
    await linkoutercard.linkOuterCardClick();
    await takeawaysandremoveprogress.clickEditTakeawayTab();
    await takeawayformattingoptions.clickingSampleTakeaway();
    await takeawayformattingoptions.selectingSampleTakeaway();
    await takeawayformattingoptions.verifyingToolTipVisisble();
    await takeawayformattingoptions.bulletPointFormattingClick();
    await takeawayformattingoptions.bulletPointFormatTextVerify();

  });
  test("verify that a text can be consolidated in numbered points", async ({
    page,
  }) => {
   
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page); 
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    const takeawayformattingoptions=new TakeawaysFormattingOptions(page);
    await linkoutercard.linkOuterCardClick();
    await takeawaysandremoveprogress.clickEditTakeawayTab();
    await takeawayformattingoptions.clickingSampleTakeaway();
    await takeawayformattingoptions.selectingSampleTakeaway();
    await takeawayformattingoptions.verifyingToolTipVisisble();
    await takeawayformattingoptions.numberedFormatClick();
    await takeawayformattingoptions.numberedFormatTextverify();

  });
    
  test("verify if we click on the embed link the page is redirecting to the embedded link",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page); 
    const takeawayformattingoptions=new TakeawaysFormattingOptions(page);
    await linkoutercard.linkOuterCardClick();
    await takeawayformattingoptions.embedLinkClick();
    await takeawayformattingoptions.waitForNavigationAndVerify();
 
 
})
test("verify that hyperlink embedded in takeaway using formatting options is clickable",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page); 
    const takeawaysandremoveprogress=new TakeawaysAndRemoveProgress(page);
    const takeawayformattingoptions=new TakeawaysFormattingOptions(page);
    await linkoutercard.linkOuterCardClick();
    await takeawaysandremoveprogress.clickEditTakeawayTab();
    await takeawayformattingoptions.clickingSampleTakeaway();
    await takeawayformattingoptions.selectingWholeSampleText();
    await takeawayformattingoptions.hyperlinkFormattingOptionClick();
    await takeawayformattingoptions.hyperlinkLinkInput();
    await takeawayformattingoptions.saveButtonClick();
    await takeawayformattingoptions.saveButtonNotVisibleVerify(); 
    await takeawayformattingoptions.hyperLinkClickAndwaitForRedirectionAndVerify();
  
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
})