//import fetch from "node-fetch";
import { config } from 'dotenv';
 config()

 async function loginhelper(){
const scopes = "adaptiveu-api.full_access"



const responselogin = await fetch('https://auth.adaptiveu.info/o/oauth2/v1/token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: "client_id=" +
    process.env.CLIENT_ID +
    "&client_secret=" +
    process.env.CLIENT_SECRET +
    "&grant_type=password&username=" +
    process.env.USERNAME +
    "&password=" +
    process.env.PASSWORD +
    '&scope=' + scopes + "&access_type=offline"

})

var authResponse = await responselogin.json();
console.log(authResponse);

const accessToken = authResponse.access_token
console.log(accessToken)
 return accessToken;
}
 const authorizedFetch = (() => {
  let accessToken;

   return async (url, options = {}) => {
     if (!accessToken) {
       accessToken = await loginhelper();
     }

     options.headers = {
       ...options.headers,
       Authorization: `Bearer ${accessToken}`
     };
     return fetch(url, options);
   };
})();

//module.exports = loginhelper
// const authorizedFetch = async (url, options = {}) => {
//   const accessToken = await loginhelper();
//   options.headers = {
//     ...options.headers,
//     Authorization: `Bearer ${accessToken}`
//   };
//   if (typeof url !== 'string') {
//     throw new Error('Invalid URL: must be a string');
//   }
//   return fetch(url, options);
// };

 module.exports = authorizedFetch
// //const myAccessToken = accessToken;
// //return myAccessToken;
 

  