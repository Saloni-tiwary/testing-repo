const { test, expect, request} = require('@playwright/test');
const {LoginPage}=require('../pageobject_pagefile/LoginPage')

    

test.beforeEach(async ({page})=> {
    
    test("login a valid user",async({page})=>{
    const Username="shakti.choudhary@anywhere.co";
    const password="password";
     const loginPage=new LoginPage(page)
    loginPage.goToLink()
    loginPage.validlogin(Username,password)
    loginPage.validateAUIcon()
    loginPage.CloseHeader()
    })
     
})
 

