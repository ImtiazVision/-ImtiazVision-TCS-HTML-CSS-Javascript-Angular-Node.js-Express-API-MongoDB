// load the module
// const { request, response } = require('express');
let express = require('express');
let bodyParser = require('body-parser');

let userDetails = [];

// creating reference of the express module
let app = express();
// which is use to enable post data receiving from normal html forn 
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{ 
  res.send("Welcome to Express JS Simple Module");
})
app.get("/aboutus", (req, res) => {
  // res.send("Welcome to About Us Page");
  res.sendFile(__dirname + "/aboutus.html");
})
app.get("/contactus", (req, res) => {
  // res.send("Welcome to Contact Us Page");
  res.sendFile(__dirname + "/contactus.html");
})
app.get("/login", (req, res) => {
  // res.send("Welcome Login Page");
  res.sendFile(__dirname + "/login.html");
})
app.get("/index", (request, response) => {
  // res.send("Welcome to index page");
  // res.sendFile("C:\\Users\\ahmed\\Desktop\\01.Sandbox Practices\\01. TCS HTML CSS Javascript Angular Node.js Express API MongoDB\\Node JS\\express modules\\index.html");
  // response.send(__dirname);
  response.sendFile(__dirname + "/index.html");
})

app.get("/checkUser",(request,response)=>{ 
  let username = request.query.username;
  let password = request.query.password;
  let found = userDetails.find(u=>u.uname==user && u.pname==pass);
  if(found!=undefined){
    response.send("Login Successful");
  } else { 
    response.send("Login Failed");
  }
})

app.get("/SignUp",(request,response)=>{ 
  response.sendFile(__dirname + "/register.html");
})
app.get("/register", (request, response) => {
  response.send("Get method..");
})
app.post("/register",(request,response)=>{
  // response.send("Post method..");
  let userDetail = request.body;
  // console.log(userDetail);
  userDetails.push(userDetail);
  // response.send("Account Created Successfully");
  response.sendFile(__dirname + "/login.html");
  })





app.listen(9090,()=>console.log("Server running on port number 9090"));