const{test,expect}=require('@playwright/test')
const{LinkOuterCard}=require('../pageobject_pagefile/LinkOuterCard');
const{NavigationURL}=require('../pageobject_pagefile/NavigatingbaseURL');
const{PayItForwardOuterCard}=require('../pageobject_pagefile/PayItForwardOuterCard');




test("verify that on clicking pay it forward the popup box opens",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const payitforwardoutercard=new PayItForwardOuterCard(page);
    await linkoutercard.linkOuterCardHover();
    await linkoutercard.linkMoreOptionsClick();
    await payitforwardoutercard.payItForwardOptionClick();
    await payitforwardoutercard.payItForwardPopupBoxOpen();
})
     
     




test("verify that pay it forward popup contains embed link image",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const payitforwardoutercard=new PayItForwardOuterCard(page);
    await linkoutercard.linkOuterCardHover();
    await linkoutercard.linkMoreOptionsClick();
    await payitforwardoutercard.payItForwardOptionClick();       
    await payitforwardoutercard.embedImgVisible();

       })
  


test("verify that a person can be selected only once in payit forward",async({page})=>{
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const payitforwardoutercard=new PayItForwardOuterCard(page);
  await linkoutercard.linkOuterCardHover();
  await linkoutercard.linkMoreOptionsClick();
  await payitforwardoutercard.payItForwardOptionClick();
  await payitforwardoutercard.typeOtherNameAsInput();
  await payitforwardoutercard.selectingOtherUser();
  await payitforwardoutercard.typeOtherNameAsInput();
  await payitforwardoutercard.selectingOtherUser();
  await payitforwardoutercard.similarUserWarning();
    
  })
  test("verify link cannot be forwarded to self", async({page})=>{
  const navigationurl= new NavigationURL(page)
  await navigationurl.navigationURL();
  const linkoutercard= new LinkOuterCard(page);
  const payitforwardoutercard=new PayItForwardOuterCard(page);
  await linkoutercard.linkOuterCardHover();
  await linkoutercard.linkMoreOptionsClick();
  await payitforwardoutercard.payItForwardOptionClick();
  await payitforwardoutercard.typeSelfNameAsInput();
  await payitforwardoutercard.selectingSelfUser();
  await payitforwardoutercard.payItForwardButtonDisabled();

  })


  test("verify that a link can be shared without notes",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const payitforwardoutercard=new PayItForwardOuterCard(page);
    await linkoutercard.linkOuterCardHover();
    await linkoutercard.linkMoreOptionsClick();
    await payitforwardoutercard.payItForwardOptionClick();
    await payitforwardoutercard.typeOtherNameAsInput();
    await payitforwardoutercard.selectingOtherUser();
    await payitforwardoutercard.shareButtonClick();
    await payitforwardoutercard.successConfirmation();

  })

  test("verify that notes can be added while paying forward a link",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const payitforwardoutercard=new PayItForwardOuterCard(page);
    await linkoutercard.linkOuterCardHover();
    await linkoutercard.linkMoreOptionsClick();
    await payitforwardoutercard.payItForwardOptionClick();
    await payitforwardoutercard.typeOtherNameAsInput();
    await payitforwardoutercard.selectingOtherUser();
    await payitforwardoutercard.typeNotes();
    await payitforwardoutercard.shareButtonClick();
    await payitforwardoutercard.successConfirmation();

  })


  test("verify that on giving just two characters search dropdown should not open",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const payitforwardoutercard=new PayItForwardOuterCard(page);
    await linkoutercard.linkOuterCardHover();
    await linkoutercard.linkMoreOptionsClick();
    await payitforwardoutercard.payItForwardOptionClick();
    await payitforwardoutercard.twoCharactersTyped();
    await payitforwardoutercard.dropDownNotVisible();

  })

  test.only("verify that a link is forwarded to multiple people",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const linkoutercard= new LinkOuterCard(page);
    const payitforwardoutercard=new PayItForwardOuterCard(page);
    await linkoutercard.linkOuterCardHover();
    await linkoutercard.linkMoreOptionsClick();
    await payitforwardoutercard.payItForwardOptionClick();
    await payitforwardoutercard.typeOtherNameAsInput();
    await payitforwardoutercard.selectingOtherUser();
    await payitforwardoutercard.selectInputFieldAgain();
    await payitforwardoutercard.typeSecondOtherUser();
    await payitforwardoutercard.selectSecondOtherUser();
    await payitforwardoutercard.shareButtonClick();
    await payitforwardoutercard.successConfirmation();


  })



 