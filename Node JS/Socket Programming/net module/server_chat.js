// load the module
let net = require("net");

// creating the server reference
let server = net.createServer();

//load the module
let readline = require("readline");

// create the interface
let r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


server.on("connection", (socket) => {
  console.log("Client connected..");

  // receive data from client program
  socket.on("data", (msg) => {
    console.log("Message received from client: " + msg.toString());
  })

  // send data to client application
  socket.write("Hello client, You Successfully connected chatting application!");

  r1.on("line", (input) => { 
    socket.write(`Server Say: ${input}`);
  })


})














// running server on port number 9090
server.listen(9090, () => console.log("server is listening on port 9090"));