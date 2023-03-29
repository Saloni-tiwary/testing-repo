const { test, expect, request} = require('@playwright/test');
const {NavigationURL}= require('../pageobject_pagefile/navigating-base-url');
const{LinkOuterCard}=require('../pageobject_pagefile/link-outercard')



test("verify that link outer card add to learn options are clickable",async({page})=>{
    try{
        const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    await linkoutercard.addToLearnClick();
    await linkoutercard.addedToLearnVerify();
}catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
})
test('verify that link outer card more options are selectable', async({page})=>{
    try{
        const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    await linkoutercard. linkOuterCardHovertoFirstCard()();
    await linkoutercard.linkMoreOptionsClick();
    await linkoutercard.moreOptionsSelectVerify();
}catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
})


test("verify on clicking edit from more options of link outercard edit popup should populate", async({page})=>{
    try{
        const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    await linkoutercard.linkOuterCardHovertoFirstCard();
    await linkoutercard.linkMoreOptionsClick();
    await linkoutercard.editOptionClick();
    await linkoutercard.editPopupVerify();
}catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
})
test("verify that on clicking pay it forward the popup box opens",async({page})=>{
    try{
        const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    await linkoutercard.linkOuterCardHovertoFirstCard();
    await linkoutercard.linkMoreOptionsClick();
    await linkoutercard.payItForwardClick();
    await linkoutercard.payItForwardPopupVerify();
}catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
})















 