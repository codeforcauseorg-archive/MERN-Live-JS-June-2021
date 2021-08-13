const io = require("socket.io-client");

const socket = io("http://localhost:3000/");

socket.on("connect", () => {
  console.log("We are connected to server");
});

socket.on("broadcast", (payload) => {
    console.log(payload);
});