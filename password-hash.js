 const crypto = require("crypto");
const  {config}  =require( 'dotenv');
 config()

// import { config } from 'dotenv';
//  config()



 const encrypted = process.env.PASSWORD;
 const encryptionKey = crypto.randomBytes(32); // Load the encryption key from a secure source
 const iv = crypto.randomBytes(16); // Load the IV from a secure source
 
 function decryptPassword(encryptedPassword, encryptionKey, iv) {
   const decipher = crypto.createDecipheriv("aes-256-cbc", encryptionKey, iv);
   let decrypted = decipher.update(encryptedPassword, "hex", "utf8");
   decrypted += decipher.final("utf8");
   return decrypted;
 }
 
 const decryptedPassword = decryptPassword(encrypted, encryptionKey, iv);
 console.log(decryptedPassword);
 