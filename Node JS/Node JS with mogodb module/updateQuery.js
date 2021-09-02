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
      // City update using _id
      db.collection("Employees").updateOne({_id:4},{$set:{city:"Mumbai"}},(err,result)=>{
        if(!err){
          if (result.modifiedCount>0){
            console.log(" Record Updated Successfully")
          } else {
            console.log("Record Not Found")
          }
        }
        else{
          console.log(err)
        }
        client.close();
      })

  } else {
    console.log(err)
  }
}})