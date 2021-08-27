// load the fs module
let fs = require("fs");
// var msg = "Welcome to Node JS File handling";
// // writeFile will do async operation in file handling
// fs.writeFile("demo1.txt",msg, (err)=>
// { if(!err){
//   console.log("Data Stored in file successfully")}});

// callback function is always an asynchronous operation means it will perform operation independently and not wait for other program to finish before running it. 


fs.readFile("demo1.txt",(err,data) => {
  if(!err){
    // console.log("data"); // display data into a buffer format
    console.log(data.toString()); // this convert the buffer (not readable) data into string
  }

})

console.log("Normal Statement1");
console.log("Normal Statement2");