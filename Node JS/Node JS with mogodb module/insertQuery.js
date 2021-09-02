// load the module and create the reference of mongodb module 

let mongoClient = require('mongodb').MongoClient;

let url = "mongodb://localhost:27017"; // default port number for MongoDB

// connect the database
mongoClient.connect(url, (err,client) => {
    if(!err) {
      console.log("Connected")
      let db = client.db("tcsmean"); // database name connected
      let employees = [
        { _id: 17, name: "Rakesh", salary: 47000, deptId: 201, city: "Mumbai" },
        { _id: 18, name: "Makesh", salary: 47000, deptId: 202, city: "Pune" },
        { _id: 18, name: "Jigekesh", salary: 48000, deptId: 203, city: "Philadelphia" }
      ]
      let emp = {_id:16,name:"Lokesh",salary:46000,deptId:200,city: "Bangalore"};
      db.collection("Employees").insertMany(employees,(err,result) => {
        if(!err) {
          console.log("Record inserted Successfully");
          console.log(result);
        } else {
          console.log(err);
        }
        client.close();
      })
    }else {
      console.log(err)
    }
})