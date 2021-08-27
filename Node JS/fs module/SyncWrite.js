let fs = require("fs");
let msg = "Welcome to file handling with synchronous operation\n";
// fs.writeFileSync("demo1.txt", msg); // This will override the existing data
// If we don't want to lose the data and store it inside the file, we can use {flag: 'a+'} to append the data 
fs.writeFileSync("demo1.txt", msg, {flag: 'a+'});

console.log("Data Stored");
console.log("Normal Statement1");
console.log("Normal Statement2");