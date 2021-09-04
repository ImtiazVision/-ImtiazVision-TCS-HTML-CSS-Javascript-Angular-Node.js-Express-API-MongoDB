// load the model file i.e. user-defined module. this step is like import in typescript file. here importing from product.model.js file.
let productModel = require('../model/product.model');


// creating an arrow function to get the product details by id. This would return the data as a JSON object (including it being an array)
let getAllProductDetails = (request, response) => { 
  productModel.find({},(err,data)=>{
    if(!err){
      response.send(data);
    }else {
      response.send(err);
    }
  })

}

let storedProductInfo = (request, response) => { 
  let product = request.body; // store data in product variable

  productModel.insertMany(product,(err,result) => {
    if(!err){
      response.send("Record stored successfully");
    }else {
      response.send(err);
    }
  })
}
let deleteProductDetails = (request,response) => {
  let pid = request.params.pid;
  productModel.deleteOne({_id:pid},(err,result) => {
    if(!err){
      response.send("Record deleted successfully" + result);
    }else {
      response.send(err);
    }
  })
}

let updateProductDetails = (request,response) => {
  let product = request.body;
  productModel.updateOne({_id:product.id},{$set:{price:product.price}}, (err,result) => {
    if(!err){
      response.send("Record updated successfully" + result);
    }else {
      response.send(err);
    }
  })
}
module.exports = {getAllProductDetails, storedProductInfo};