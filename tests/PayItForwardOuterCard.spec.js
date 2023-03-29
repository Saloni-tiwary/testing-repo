const{test,expect}=require('@playwright/test')
const{LinkOuterCard}=require('../pageobject_pagefile/link-outercard');
const{NavigationURL}=require('../pageobject_pagefile/navigating-base-url');
const{PayItForwardOuterCard}=require('../pageobject_pagefile/pay-it-forward-outercard');




test("verify that on clicking pay it forward the popup box opens",async({page})=>{
    try{
      const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const payitforwardoutercard=new PayItForwardOuterCard(page);
    await linkoutercard.linkOuterCardHovertoFirstCard();
    await linkoutercard.linkMoreOptionsClick();
    await payitforwardoutercard.payItForwardOptionClick();
    await payitforwardoutercard.payItForwardPopupBoxOpen();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
})
     
     




test("verify that pay it forward popup contains embed link image",async({page})=>{
    try{
      const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const payitforwardoutercard=new PayItForwardOuterCard(page);
    await linkoutercard.linkOuterCardHovertoFirstCard();
    await linkoutercard.linkMoreOptionsClick();
    await payitforwardoutercard.payItForwardOptionClick();       
    await payitforwardoutercard.embedImgVisible();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }

       })
  


test("verify that a person can be selected only once in payit forward",async({page})=>{
  try{
    const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const payitforwardoutercard=new PayItForwardOuterCard(page);
  await linkoutercard.linkOuterCardHovertoFirstCard();
  await linkoutercard.linkMoreOptionsClick();
  await payitforwardoutercard.payItForwardOptionClick();
  await payitforwardoutercard.typeOtherNameAsInput();
  await payitforwardoutercard.selectingOtherUser();
  await payitforwardoutercard.typeOtherNameAsInput();
  await payitforwardoutercard.selectingOtherUser();
  await payitforwardoutercard.similarUserWarning();
}catch (error) {
  console.error(`Test failed: ${error}`);
  throw error;
}
    
  })
  test("verify link cannot be forwarded to self", async({page})=>{
  try{
    const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const payitforwardoutercard=new PayItForwardOuterCard(page);
  await linkoutercard.linkOuterCardHovertoFirstCard();
  await linkoutercard.linkMoreOptionsClick();
  await payitforwardoutercard.payItForwardOptionClick();
  await payitforwardoutercard.typeSelfNameAsInput();
  await payitforwardoutercard.selectingSelfUser();
  await payitforwardoutercard.payItForwardButtonDisabled();
}catch (error) {
  console.error(`Test failed: ${error}`);
  throw error;
}
  })


  test("verify that a link can be shared without notes",async({page})=>{
    try{
      const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const payitforwardoutercard=new PayItForwardOuterCard(page);
    await linkoutercard.linkOuterCardHovertoFirstCard();
    await linkoutercard.linkMoreOptionsClick();
    await payitforwardoutercard.payItForwardOptionClick();
    await payitforwardoutercard.typeOtherNameAsInput();
    await payitforwardoutercard.selectingOtherUser();
    await payitforwardoutercard.shareButtonClick();
    await payitforwardoutercard.successConfirmation();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
  })

  test("verify that notes can be added while paying forward a link",async({page})=>{
    try{
      const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const payitforwardoutercard=new PayItForwardOuterCard(page);
    await linkoutercard.linkOuterCardHovertoFirstCard();
    await linkoutercard.linkMoreOptionsClick();
    await payitforwardoutercard.payItForwardOptionClick();
    await payitforwardoutercard.typeOtherNameAsInput();
    await payitforwardoutercard.selectingOtherUser();
    await payitforwardoutercard.typeNotes();
    await payitforwardoutercard.shareButtonClick();
    await payitforwardoutercard.successConfirmation();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
  })


  test("verify that on giving just two characters search dropdown should not open",async({page})=>{
    try{
      const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const payitforwardoutercard=new PayItForwardOuterCard(page);
    await linkoutercard.linkOuterCardHovertoFirstCard();
    await linkoutercard.linkMoreOptionsClick();
    await payitforwardoutercard.payItForwardOptionClick();
    await payitforwardoutercard.twoCharactersTyped();
    await payitforwardoutercard.dropDownNotVisible();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }
  })

  test("verify that a link is forwarded to multiple people",async({page})=>{
    try{
      const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const payitforwardoutercard=new PayItForwardOuterCard(page);
    await linkoutercard.linkOuterCardHovertoFirstCard();
    await linkoutercard.linkMoreOptionsClick();
    await payitforwardoutercard.payItForwardOptionClick();
    await payitforwardoutercard.typeOtherNameAsInput();
    await payitforwardoutercard.selectingOtherUser();
    await payitforwardoutercard.selectInputFieldAgain();
    await payitforwardoutercard.typeSecondOtherUser();
    await payitforwardoutercard.selectSecondOtherUser();
    await payitforwardoutercard.shareButtonClick();
    await payitforwardoutercard.successConfirmation();
  }catch (error) {
    console.error(`Test failed: ${error}`);
    throw error;
  }

  })



 