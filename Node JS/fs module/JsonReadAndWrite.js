let fs = require('fs');
  let employees = JSON.parse(fs.readFileSync('employees.json').toString());

  employees.push({id:105,name:"Kibria", age:28});
  fs.writeFileSync('employees.json', JSON.stringify(employees));

  console.log('New Record Stored!');