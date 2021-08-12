const http = require("http");
const socketio = require("socket.io");

const httpServer = http.createServer();

const io = socketio(httpServer);

const socketBehave = function (socket) {
  console.log("Got connection request");

  setInterval(function () {
    socket.emit("now", {
      time: String(new Date()),
    });
  }, 1000);
};

io.on("connection", socketBehave);

httpServer.listen(3000);

// console.log(String(new Date()))
