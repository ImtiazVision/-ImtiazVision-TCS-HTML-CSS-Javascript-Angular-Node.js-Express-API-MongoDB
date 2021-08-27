
let readline = require('readline-sync');
let id = readline.questionInt("Enter the id");
let name = readline.question('Enter your name: ');
let age = readline.question('Enter your age: ');
let salary = readline.questionFloat('Enter your salary: ');
let emailId = readline.questionEMail('Enter your email: ');
console.log("Your id is " + id);
console.log("Your name is " + name);
console.log("Your age is " + age);
console.log("Your Salary is " + salary);
console.log("Your email id  is " + emailId);