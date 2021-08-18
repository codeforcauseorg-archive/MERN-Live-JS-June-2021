const http = require("http");
const socketio = require("socket.io");
let admin = require("firebase-admin");
let serviceAccount = require("./service.json");
const httpServer = http.createServer();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

let connections = new Map();

const io = socketio(httpServer, {
  cors: {
    origin: "*",
  },
});

io.use((socket, next) => {
  if (socket.request.headers && socket.request.headers.authorization) {
    let token = socket.request.headers.authorization.substring(7);
    admin
      .auth()
      .verifyIdToken(token)
      .then(function (response) {
        socket.user = response;
        next();
      })
      .catch(function (error) {
        next(new Error("invalid"));
      });
  } else {
    next(new Error("invalid"));
  }

  // if (isValid(socket.request)) {
  //   next();
  // } else {
  //   next(new Error("invalid"));
  // }
});

const getCurrentUsers = function(){
  let sockIter = connections.values();
  let users = [];
  for (const sock of sockIter) {
    users.push({
      uid: sock.user.uid,
      user: sock.user.name,
      photoURL: sock.user.picture,
      email: sock.user.email,
    })
  }
  return users;
}

const socketBehave = function (socket) {
  console.log("Got connection request", socket.user);

  connections.set(socket.user.uid, socket);
  io.sockets.emit("users", getCurrentUsers());

  socket.on("broadcast", (payload) => {
    payload.user = socket.user.name;
    payload.photoURL = socket.user.picture;
    io.sockets.emit("broadcast", payload);
  });

  socket.on("disconnect", function () {
    connections.delete(socket.user.uid);
    io.sockets.emit("users", getCurrentUsers());
  });
};

io.on("connection", socketBehave);

const PORT = process.env["PORT"] || 5000;
httpServer.listen(PORT);

// console.log(String(new Date()))
