// loading the module
let express = require('express');
let bodyParser = require('body-parser');
let cors = require("cors"); // this will load the cors module

// creating reference 
let app = express();

// middleware
app.use(bodyParser.json());
app.use(cors()); // this will enable cors for usage

// creating an array named customers with 2 objects/elements
let customers = [
    {cid:100,cname:"John",age:21},
    {cid:101,cname:"Mary",age:24}
];

// search customer by id
// http://localhost:9090/findCustomerById/100
// http://localhost:9090/findCustomerById/101
app.get('/findCustomerById/:cid',(request,response)=>{ 
  let cid = request.params.cid;
  let customer = customers.find(c=>c.cid==cid);
  if(customer==undefined){
    response.json({"msg":"Customer not present with id"+ cid});
  } else { 
    response.json(customer);
  }
})

// get all customers details
// http://localhost:9090/getAllCustomerDetails
app.get("/getallCustomerDetails", (request,response) => { 
  response.json(customers);
})

// add new customer
// http://localhost:9090/storeCustomerInfo
// { "cid": 100, "cname": "Mahesh", "age": 25 }
app.post("/storeCustomerInfo", (request,response) => { 
  let cust = request.body;              // in json format
  let customer = customers.find(c=>c.cid==cust.cid); // finding the customer with cid
  if (customer==undefined){  // if the is not present is the existing array, append it to the cust array
    customers.push(cust); // adding the customer to the array
    response.json({"msg":"Customer added successfully"});
  }else { 
    response.json({"msg":"Customer id must be unique"});
  }
})

// update customer age
// http://localhost:9090/updateCustomerAge/
app.put("/updateCustomerAge", (request,response) => {
  let cust = request.body;
  let index = customers.findIndex(c => c.cid == cust.cid);
  if (index == -1) {
    response.json({ "msg": "No customer present with id" + cust.cid });
  } else {
    customers[index].age = cust.age;
    response.json({ "msg": "Customer age updated successfully" });
  }
})

// delete customer info
// http://localhost:9090/deleteCustomerInfo/100
app.delete("/deleteCustomerInfo/:cid", (request,response) => {
  let cid = request.params.cid;
  let index = customers.findIndex(c => c.cid == cid);
  if (index == -1) {
    response.json({ "msg": "No customer present with id" + cid });
  } else {
    customers.splice(index, 1); // splice is used to delete the element from array (indexposition,deletecount that is 1 element in this case)
    response.json({ "msg": "Customer deleted successfully" });
  }
} )















// listening to port
app.listen(9090, () => {  
    console.log("server is running on port 9090");
});
