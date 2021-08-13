const http = require("http");
const socketio = require("socket.io");

const httpServer = http.createServer();

const io = socketio(httpServer, {
  cors: {
    origin: "*",
  },
});

const socketBehave = function (socket) {
  console.log("Got connection request");

  socket.on("broadcast", (payload) => {
    io.sockets.emit("broadcast", payload);
  });

};

io.on("connection", socketBehave);

httpServer.listen(5000);

// console.log(String(new Date()))
