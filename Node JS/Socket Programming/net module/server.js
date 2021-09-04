// load the module
let net = require("net");

// creating the server reference
let server = net.createServer();


server.on("connection",(socket)=>{ 
  console.log("Client connected..");

  // receive data from client program
  socket.on("data",(msg)=>{ 
    console.log("Message received from client: "+msg.toString());
  })

  // send data to client application
  socket.write("Hello client, You Successfully connected chatting application!");


})



// running server on port number 9090
server.listen(9090,()=>console.log("server is listening on port 9090"));