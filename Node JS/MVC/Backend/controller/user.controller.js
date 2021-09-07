// load user model 
let userModel = require('../model/user.model');

let signUp = async (request,response) => {
  let user = request.body; // receives data from post method
  let userInfo = userModel.findOne({email: user.email});
  if(userInfo!=null) {
    let result = await userModel.insertMany(user); // making it sync(wait for the result)
    response.send("Account created successfully");
  } else {
    response.send("Email already exists/email id must be unique");
  }
  // let result = await userModel.insertMany(user); //making it sync(wait for the result)
} 

let signIn = async (request,response) => {
  let user = request.body; // receives data from post method
  let userInfo = await userModel.findOne({email: user.email, password: user.password});
  if(userInfo!=null) { 
    response.send("Login Successful");

  } else {
    response.send("Invalid email or password");
  }
}


module.exports = {signIn,signUp };