// load the fs module 

let fs = require("fs");
// By default old data get overrided
var msg = "Welcome\n";

// fs.writeFile("demo1.txt", msg, (err) => {
//   if(!err){
//     console.log("Data stored in file successfully");

//     }
// })

// The flag parameter append the data in the text file and it is helpful because it prevents data loss
fs.writeFile("demo1.txt", msg,{flag: "a+"}, (err) => {
  if (!err) {
    console.log("Data stored in file successfully");

  }
})