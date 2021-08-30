// load the module
let net = require("net");

//load the module
let readline = require("readline");

// create the interface
let r1 = readline.createInterface({ 
  input:process.stdin,
  output:process.stdout
})

// this code is used to connect server program using IP and port number. 127.0.0.1 is the default IP address and we can also put "localhost" means local machine/our pc.
let client = net.createConnection(9090, "localhost", () => {

  // send data to server program
  client.write("Hello Server, I am a Client....");

  // It is used to receive data from server program.
  client.on("data", (msg) => {
    console.log(msg.toString());
  })

  // after entering key, it will again wait for the entry of another data
  r1.on("line",(input) => {
    client.write(`Client Say: ${input}`);
  });


})




