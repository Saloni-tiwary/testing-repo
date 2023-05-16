const crypto = require("crypto");

const algorithm = "aes-256-cbc";
const encryptionKey = crypto.randomBytes(32); // Generate a random encryption key
const iv = crypto.randomBytes(16); // Generate a random initialization vector

// Encrypt the password
function encryptPassword(password) {
  const cipher = crypto.createCipheriv(algorithm, encryptionKey, iv);
  let encrypted = cipher.update(password, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}

// Decrypt the password
function decryptPassword(encryptedPassword) {
  const decipher = crypto.createDecipheriv(algorithm, encryptionKey, iv);
  let decrypted = decipher.update(encryptedPassword, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

// Example usage
const password = "password";

const encryptedPassword = encryptPassword(password);
console.log("Encrypted password:", encryptedPassword);

const decryptedPassword = decryptPassword(encryptedPassword);
console.log("Decrypted password:", decryptedPassword);
