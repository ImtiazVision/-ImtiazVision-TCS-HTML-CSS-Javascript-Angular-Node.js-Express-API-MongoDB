// load the module and create the reference of mongodb module 

let mongoClient = require('mongodb').MongoClient;

let url = "mongodb://localhost:27017"; // default port number for MongoDB. Database connectivity

// connect the database
mongoClient.connect(url, (err, client) => {
  if (!err) {
    console.log("Connected") // if there is no error
    let db = client.db("tcsmean"); // database name connected
    if (!err) {
      console.log("Connected")
      let db = client.db("tcsmean")
      // delete document using _id
      db.collection("Employees").deleteOne({_id:19},(err,result)=>{
        if(!err){
          if(result.deletedCount>0){
            console.log("Record deleted successfully")
          } else {
            console.log("Record not found")
          }
        } else {
          console.log(err)
        }
      })
    } else {
      console.log(err)
    }
  }})