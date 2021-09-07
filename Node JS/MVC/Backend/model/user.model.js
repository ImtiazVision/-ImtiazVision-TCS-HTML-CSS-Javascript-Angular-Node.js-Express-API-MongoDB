// loading the module
let mongoose = require('mongoose');

// to avoid lowercase
mongoose.pluralize(null);

let userSchema = mongoose.Schema({ 
  email: {type:String,unique:true},
  password: {type:String,unique:true}
});

let userModel = mongoose.model('User',userSchema);

// exporting the module
module.exports = userModel;