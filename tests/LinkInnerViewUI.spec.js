const{test,expect}=require('@playwright/test');
const{LinkOuterCard}=require('../pageobject_pagefile/link-outercard');
const{NavigationURL}=require('../pageobject_pagefile/navigating-base-url');
const{LinkInnerViewUI}=require('../pageobject_pagefile/linkinner-view-ui');





test("verify on clicking the link outercard the link innerview of the same link is opened",async({page})=>{
    try{
      const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkinnerviewui=new LinkInnerViewUI(page);
    await linkinnerviewui.sameLinkClickedVerify();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
 })
 test("verify that the recommendor's name is  visible in the link innerview",async({page})=>{
    try{
      const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.recommenderNameVisible();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
 
  })
  test("verify that name of the university is visible in the link innerview",async({page})=>{
  try{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.universityNameVisible();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
  })

  test("Verify that recommendation date is present on link innerview",async({page})=>{
  try{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.recommendationDateVisible();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
    })
    test("verify that learning minutes of the link is visible in the link innerview",async({page})=>{
try{
  const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const linkinnerviewui=new LinkInnerViewUI(page);
    await linkoutercard.linkOuterCardClick();
    await linkinnerviewui.learningMinutesVisible();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }   
      })
    
    test("verify that more options in link innerview is clickable",async({page})=>{
      try{
        const navigationurl= new NavigationURL(page)
        await navigationurl.navigationURL();
        const linkoutercard= new LinkOuterCard(page);
        const linkinnerviewui=new LinkInnerViewUI(page);
        await linkoutercard.linkOuterCardClick();
        await linkinnerviewui.moreOptionsClick();
        await linkinnerviewui.moreOptionsVisible();
      }catch (error) {
        console.error(`Test failed: ${error}`);
        throw error;
      }
      })
    
    test("Verify that if the link is added to learn the add to learn checkbox is checked",async({page})=>{
    try{
      const navigationurl= new NavigationURL(page)
        await navigationurl.navigationURL();
        const linkinnerviewui=new LinkInnerViewUI(page);
        await linkinnerviewui.selectAddedToLearnLinkFromOuterCard();
        await linkinnerviewui.verifyLinkAddedToLearnInInnerView();
      }catch (error) {
        console.error(`Test failed: ${error}`);
        throw error;
      }
        
      
      })//failing

 