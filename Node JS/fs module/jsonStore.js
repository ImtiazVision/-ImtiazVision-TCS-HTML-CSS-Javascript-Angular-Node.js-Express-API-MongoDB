let fs = require('fs');

let emp = {id:100,name:"Imtiaz",age:21};

let empString = JSON.stringify(emp); // converting object to string

fs.writeFile('emp.json', empString, (err)=> { 
  if(!err) { 
    console.log('Data stored in file'); 
  }
} )