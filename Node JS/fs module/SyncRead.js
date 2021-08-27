let fs = require('fs'); // load the data

var data = fs.readFileSync('demo1.txt');  // store the data in a variable
console.log(data.toString()); // convert the data to string and print it
