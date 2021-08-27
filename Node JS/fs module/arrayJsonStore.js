let fs = require('fs');

let employees = [];

let emp1 = {id:100,name:"Imtiaz", age:21};
let emp2 = {id:101,name:"Shanto", age:22};
let emp3 = {id:102,name:"Shanti", age:24};

employees.push(emp1);
employees.push(emp2);
employees.push(emp3);

let employeeString = JSON.stringify(employees);
fs.writeFileSync("employees.json", employeeString);
console.log("Data Stored in file");