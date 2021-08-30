// load the module
let express = require('express');
let bodyParser = require('body-Parser');
let cors = require("cors");

// create reference to the app
let app = express();

// app.use(bodyParser.urlencoded({ extended: true })); // passing the value through post method

app.use(bodyParser.json());  // enable json data from request body part

app.use(cors());

let emp = {id: 100, name:"John", age:30};
let employees = [
  { id: 100, name: "Raj", age: 21 },
  { id: 101, name: "Raju", age: 22 },
  { id: 102, name: "Ramesh", age: 23 },
  { id: 103, name: "Rajesh", age: 24 }
]

// http://localhost:9090/sayPlainText
app.get("/sayPlainText", (reques,response) => {
    response.send("Welcome to REST API in plain text format");
});

// http://localhost:9090/sayJson

app.get("/sayJson", (request,response) => { 
    // response.json({"msg": "Welcome to REST API in JSON format"})
    response.json({"msg": emp.name });
  })

app.get("/empInfo", (request,response) => { 
  response.json(emp);   // automatically converts object to JSON
} )
http://localhost:9090/employeesInfo
app.get("/employeesInfo", (request, response) => {
  response.json(employees);   // automatically converts object to JSON
})

// query parameter with single value
// http://localhost:9090/singleQueryParam?name=John
app.get("/singleQueryParam", (request, response) => {
  let name = request.query.name;
  response.send("Welcome User  "
+ name)
})

// path parameter with single value
// http://localhost:9090/singlePathParam/John
app.get("/singlePathParam/:name", (request, response) => {
  let user = request.params.name;
  response.send("Welcome User path param   "
    + user)
})

// path parameter with multiple value
// http://localhost:9090/multiPathParam/100/John/1000
app.get("/multiPathParam/:id/:name/:salary", (request, response) => {
  let id = request.params.id;
  let name = request.params.name;
  let salary = request.params.salary;
  response.send("Welcome User path param   " + "Id is:  "
    + id + " Name is " + name + " Salary is: " + salary)
})


// Store employee details
// http://localhost:9090/storeEmployee
// {"id": 100, "name": "John", "age": 31}   // Whole json object must be passed
app.post("/storeEmployee", (request, response) => {
  let employee = request.body;
  console.log(employee);
  response.send("Employee details stored successfully");

})


// update employee details
// http://localhost:9090/updateEmployee
// {"id": 100, "name": "John", "age": 31}  // partial json object will be passed
app.put("/updateEmployee", (request, response) => {
  let employee = request.body;
  console.log(employee);
  response.send("Employee details updated successfully");

})


// delete employee details
// http://localhost:9090/deleteEmployeeInfo/100
app.delete("/deleteEmployeeInfo/:id", (request, response) => {
  let id = request.params.id;
  response.send("Employee details deleted using id as "+ id);

})













app.listen(9090, () => {
  console.log("Server started on port 9090")
})