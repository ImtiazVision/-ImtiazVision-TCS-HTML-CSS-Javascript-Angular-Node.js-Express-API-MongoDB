let obj = require("readline"); // readline is an async opreation
var r1 = obj.createInterface({ 
  input:process.stdin,            // standard input device keyboard
  output:process.stdout           // standard output device console
});

r1.question("Enter the name : ", (name)=>{ 
  console.log("Your name is "+ name);
  // r1.close();
})

// r1.question("Enter the id : ", (id) => {
//   console.log("Your id is " + id);
//   r1.close();
// })