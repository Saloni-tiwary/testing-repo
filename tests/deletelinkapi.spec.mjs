import { test } from '@playwright/test';
import fetch from 'node-fetch';

test("delete a link using api", async ({page}) => {
  
  const accessToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImQxNzJhY2MxMDJjMGRhYWQzNThiZmM5ZDYwZWEyMWJhOWVjY2I2ZWUifQ.eyJpc3MiOiJodHRwczovL2FueXdoZXJlLnN0YWdpbmcuYW55d2hlcmVhdXRoLmNvbSIsImlhdCI6MTY4MTEyOTMwNSwicHJval9pZCI6ImFueXdoZXJld29ya3MiLCJ0eXBlIjoidXNlciIsInN1YiI6IjBjZWY5MDExLTM4YTItNDVjOC1hNjdmLTRmNjQ2OWM0MDlmYyIsImV4cCI6MTY4MTEzNjUwNSwianRpIjoiOTVhZGI4emZvNm81dTEzbiJ9.hvWGDsnp5E1eWq8ow02r-brA9Q2y8fWd-ZeDmdQoeWWrITHK-NZQczVTkRMX7QkU6HRa-wFsZ6h9zMXb0fyxjglwiRcr4EZARyexqMhfWy4GUMYP1gDvEApcutx2QfuZL9qOyNZ-U3X_KUbd2agYgvwQjpbbxow1JoZTXYpdElnH3lj_VkPj_RLWu07s2CwrLTj0zbAo-B4FIoktR2JSdNkIbPHyQW-eVNIo2mP_K6EiKGEG_KW0vD2azFPgvbjy5ezp1pyhw-LDgERItVFpSzh9Oscpe-fCTGrbTn8s3yxQDMbXL1db-ZQFkVrxVVa-jikb2_D0tk8MeK4Ii9Nm_A"
 
 

  
    
  const result = await fetch('https://stag.adaptiveu.info/api/v1/university/anywhereworks/link/using-playwright-for-api-testing-reflect', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}` // Use the access token obtained during authentication
      }
    })
    const response= {
      
      ok: result.ok,
      status: result.status,
      statusText: result.statusText,
      body: await result.json()

 
    };
   console.log(response);
  
  
    // const response = await result.json();
    // return response;
     
     
   
   

       
        
      
})
   
    