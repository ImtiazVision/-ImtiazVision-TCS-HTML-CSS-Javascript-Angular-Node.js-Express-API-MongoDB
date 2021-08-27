let obj = require("readline"); // readline is an async opreation
var r1 = obj.createInterface({
  input: process.stdin,            // standard input device keyboard
  output: process.stdout           // standard output device console
});

r1.question("Enter the name : ", (name) => {
  console.log("Your name is " + name);
  r1.question("Enter id", (id) => {
    r1.question("Enter age ", (age) => { 
      console.log("Name is "+ name);
      console.log("Id is "+ name);
      console.log("Age is "+ name);
      r1.close();
    })
  });
})