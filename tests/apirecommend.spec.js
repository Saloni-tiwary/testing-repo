import { test } from '@playwright/test';
import { LinkBuilder } from '../pageobject_pagefile/linkdetails';
//import fetch from 'node-fetch';
 

test('recommending a link using api', async ({ page }) => {
  //await page.goto('https://my.staging.adaptiveu.app/recommend-link');
  const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImQxNzJhY2MxMDJjMGRhYWQzNThiZmM5ZDYwZWEyMWJhOWVjY2I2ZWUifQ.eyJpc3MiOiJodHRwczovL2FueXdoZXJlLnN0YWdpbmcuYW55d2hlcmVhdXRoLmNvbSIsImlhdCI6MTY4MTEwODI4MywicHJval9pZCI6ImFueXdoZXJld29ya3MiLCJ0eXBlIjoidXNlciIsInN1YiI6IjBjZWY5MDExLTM4YTItNDVjOC1hNjdmLTRmNjQ2OWM0MDlmYyIsImV4cCI6MTY4MTExNTQ4MywianRpIjoiYWY5MjQ3RFZrRWZlOUFSNiJ9.dhxK0L6BuvQaqFCzzqBVDbg90hjAd9W9PXKNgxIPH3UI-lQyfEKuqy6xpWJkrdNU_2QqVOt9fWfwwzM2Y9o9YHyOhIWxf1lTv68kRz4_rSu98NLU7G-Cm-5sdL7RNDqc-X87mNHzTRoEnCeHbBGIQ_whh8Emk9RcpEGZOo7HRS8Zyf26TuvydAe32WSKe1akefp089y55rNVSjoNLoJeXwYcTjBO5I5-FpNYjMrqqjbAaRcK8ZEkNJTtToQ_ZPNa3cP84g92j6vELSHjwzJ5JZzX-uA-Mpr_Nx3IcaT8ZCmu4K8VEU6y5iq-4hh9yBFEHpLCbAeMi2daTQpNrg4v9g"
  const link = new LinkBuilder()
  .setName("javascript - Add cookies in playwright test - Stack Overflow")
  .setMinutes("12")
  .setDescription("")
  .setImage("https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon@2.png?v=73d79a89bded")
  .setOrigin("Stack Overflow")
  .setSemanticName("")
  .addStep({
    subSteps: [
      {
        type: "embed",
        details: "https://stackoverflow.com/questions/64211501/add-cookies-in-playwright-test"
      }
    ]
  })
  .addStep({
    subSteps: [
      {
        type: "takeaway"
      }
    ]
  })
  .setContentType([])
  .setCategories([])
  .setSourceSemanticName(["anywhereworks"])
  .setIsAllowDuplicate(false)
  .setSourceType("university")
  .build();
//   const response1 = await fetch('https://stag.adaptiveu.info/api/v1/university/anywhereworks/link', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${accessToken}` // Use the access token obtained during authentication
//   },
//   body: JSON.stringify({
//     linkDetails: link,
//     isAllowDuplicate: false,
//     sourceType: 'university'
//   })
// }, { accessToken, link });
// const result1 = await response1.json()

  //Use page.evaluate() to make the API request
  const response1 = await page.evaluate(async ({accessToken,link}) => {
    const response = await fetch('https://stag.adaptiveu.info/api/v1/university/anywhereworks/link', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}` // Use the access token obtained during authentication
      },
      body: JSON.stringify(link)
        
      
    });

    return {
      ok: response.ok,
      status: response.status,
      statusText: response.statusText,
      body: await response.json()
    };
  }, {accessToken,link});
  console.log(response1);
  console.log(JSON.stringify(link))
  
})


  //
  

   