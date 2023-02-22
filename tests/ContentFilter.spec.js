const { test, expect, request} = require('@playwright/test');
const {NavigationURL}= require('../pageobject_pagefile/NavigatingbaseURL');
const{ContentFilter}=require('../pageobject_pagefile/ContentFilter')


test("verify that content filter dropdown is clickable",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const contenttypefilter=new ContentFilter(page)
    await contenttypefilter.contentFilterClick();
    await contenttypefilter.allTypeContent();
     
})
test("verify on selecting video type content filter only recommended video is displayed on home page",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const contenttypefilter=new ContentFilter(page)
    await  contenttypefilter.contentFilterClick();
    await contenttypefilter.videoFilterSelect();
    await contenttypefilter.videoFilterAppliedVerify();
     
  })

  test("verify on selecting audio content filter only recommended audio files are displayed",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const contenttypefilter=new ContentFilter(page)
    await contenttypefilter.contentFilterClick();
    await contenttypefilter.audioFilterSelect();
    await contenttypefilter.audioFilterAppliedVerify();
     
  })

  test("verify on selecting book content filter only recommended books are displayed",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const contenttypefilter=new ContentFilter(page)
    await contenttypefilter.contentFilterClick();
    await contenttypefilter.bookFilterSelect();
    await contenttypefilter.bookFilterAppliedVerify();
     
  })
  test("verify on selecting article filter only recommend articles are displayed",async({page})=>{
    const navigationurl= new NavigationURL(page)
    await navigationurl.navigationURL();
    const contenttypefilter=new ContentFilter(page)
    await contenttypefilter.contentFilterClick();
    await contenttypefilter.articleFilterSelect();
    await contenttypefilter.articleFilterAppliedVerify();
     
  })


