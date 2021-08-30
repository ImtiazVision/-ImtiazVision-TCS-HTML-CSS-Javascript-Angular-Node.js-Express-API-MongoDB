// load the module
let net = require("net");

// let readline = require("readline");

// this code is used to connect server program using IP and port number. 127.0.0.1 is the default IP address and we can also put "localhost" means local machine/our pc.
let client = net.createConnection(9090, "localhost",()=>{

  // send data to server program
  client.write("Hello Server, I am a Client....");

  // It is used to receive data from server program.
  client.on("data", (msg) => {
    console.log(msg.toString());
    // client.end();
  })
  

})


