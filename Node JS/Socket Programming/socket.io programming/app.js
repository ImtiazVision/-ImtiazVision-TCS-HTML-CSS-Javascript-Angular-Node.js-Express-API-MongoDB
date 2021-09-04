

// load the express module 
let express = require("express");

// create the reference of express module 
let app = express();

// load the http module and connect to express module with Server property
let http = require("http").Server(app);

// load the socket.io module and connect http module 
// with IIFE features 
let io = require('socket.io')(http);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "\\index.html");
})

io.on("connection", (socket) => {
  console.log("Client connected");
  // receive the message from client application 
  socket.on("obj", (msg) => {
    console.log(msg);
  })
  // sending data to client 
  socket.emit("obj1", "Hello Client connected server...");
})


// please run the server using http module not express module 
http.listen(9090, () => console.log("Server running on port number 9090"));


















// // load the express module
// let express = require('express');


// // create the reference of express module
// let app = express();

// // load the http module and connect to express module with server properties. here http is connected to the express now
// let http = require('http').Server(app);

// // load the socket.io module and connect http module with IIFE features
// let io = require('socket.io')(http);


// app.get("/",(request,response)=> {
//     response.sendFile(__dirname+"//index.html");
// })

// io.on("connection",(socket)=>{ 
//   console.log("Client connected");
//   // receive the message from client application
//   socket.on("obj",(msg)=>{ 
//     console.log(msg);
//   })
//   // sending data to client application
//   socket.emit("obj1","Hello Client connected to server....");
// })


// // please run the server using http module not the express module

// http.listen(9090,()=> console.log("server is running on port 9090"));