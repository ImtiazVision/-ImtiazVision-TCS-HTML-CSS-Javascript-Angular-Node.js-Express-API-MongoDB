let url = require("url");

let urlDetails = "http://localhost:9090/simpleWebApp?name=Imtiaz&age=24";

console.log(urlDetails);
// let urlRef = url.parse(urlDetails); // query property consider as string only 
let urlRef = url.parse(urlDetails,true); // query property consider as reference now after we put true 
// console.log(urlRef);
console.log("Protocol" + urlRef.protocol);
console.log("Port Number: " +urlRef.port);
console.log("Host Name: " +urlRef.hostname);
console.log("Path Name: " + urlRef.pathname);
// console.log(urlRef);
// console.log(urlRef);

let queryInfo = urlRef.query;
console.log(queryInfo);  // query property consider as string only at this moment
console.log(queryInfo.name);
console.log(queryInfo.age);

