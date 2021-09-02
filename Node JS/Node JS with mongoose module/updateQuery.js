// load the module 
let mongoose = require('mongoose');

// url to connect to the database
let url = 'mongodb://localhost:27017/tcsmean';
mongoose.pluralize(null);     // to avoid lower case collection creation using s.
// connect the database to the server and it return promise object

mongoose.connect(url).
  then(response => console.log("connected")).
  catch(err => console.error(err));

// to use this database connection, we have to call function of mongoose

let db = mongoose.connection;
db.once('open', () => {
  // defining schema for the database to provide rules for collection 
  let productSchema = mongoose.Schema({
    _id: Number,
    pname: String,
    price: Number
  })

  // using schema to create collection in the database
  // 1s parameter is the name of the collection and 2nd parameter is the schema reference
  // mongoose internally create collection name in lower case with post fix s.
  let productModel = mongoose.model('product', productSchema);

  productModel.updateOne({_id:100},{$set:{price:95000}},(err,result)=>{
    if(!err) { 
      // console.log(result);
      if(result.modifiedCount>0 || result.matchedCount > 0){
        console.log("Product updated Successfully");
      } else { 
        console.log("Product not found/ didn't update successfully");
      }
      
    }else {
      console.log(err);
    }
    mongoose.disconnect();
  })


});