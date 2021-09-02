// load the module and create the reference of mongodb module 

let mongoClient = require('mongodb').MongoClient;

let url = "mongodb://localhost:27017"; // default port number for MongoDB. Database connectivity

// connect the database
mongoClient.connect(url, (err, client) => {
  if (!err) {
    console.log("Connected") // if there is no error
    let db = client.db("tcsmean"); // database name connected
    if(!err){ 
      console.log("Connected")
      let db = client.db("tcsmean")
      let cursor = db.collection("Employees").find({salary:{$gt:30000}}); // used find() method to retrieve the data from the collection
      cursor.forEach(doc => {
        console.log("Name "+ doc.name+ " Salary "+ doc.salary); // print the data
        console.log(doc);
        client.close(); // close the connection
      })
    }
  
  } else {
    console.log(err)
  }
})