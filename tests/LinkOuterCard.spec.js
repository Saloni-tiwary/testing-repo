const { test, expect, request} = require('@playwright/test');
const {NavigationURL}= require('../pageobject_pagefile/NavigatingbaseURL');
const{LinkOuterCard}=require('../pageobject_pagefile/LinkOuterCard')



test("verify that link outer card add to learn options are clickable",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    await linkoutercard.addToLearnClick();
    await linkoutercard.addedToLearnVerify();

})
test('verify that link outer card more options are selectable', async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    await linkoutercard.linkOuterCardClick();
    await linkoutercard.linkMoreOptionsClick();
    await linkoutercard.moreOptionsSelectVerify();
})


test("verify on clicking edit from more options of link outercard edit popup should populate", async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    await linkoutercard.linkOuterCardHover();
    await linkoutercard.linkMoreOptionsClick();
    await linkoutercard.editOptionClick();
    await linkoutercard.editPopupVerify();

})
test("verify that on clicking pay it forward the popup box opens",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    await linkoutercard.linkOuterCardHover();
    await linkoutercard.linkMoreOptionsClick();
    await linkoutercard.payItForwardClick();
    await linkoutercard.payItForwardPopupVerify();
})















 