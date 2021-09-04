// loading the mongoose module
let mongoose = require('mongoose');

// to avoid creating in lower case with s postfix 
mongoose.pluralize(null);
// creating schema for mongoose
let productSchema = mongoose.Schema({ 
    _id : Number,
    pname : String,
    price : Number
});

// using schema creating model
// 1st parameter is collection name
// 2nd parameter is schema reference
let productModel = mongoose.model('Product', productSchema);

// we can import using require function,in another file
module.exports = productModel; // exporting the model to use in other file