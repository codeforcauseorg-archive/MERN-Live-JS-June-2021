let express = require("express");
let cors = require("cors");
const bearerToken = require("express-bearer-token");

let admin = require("firebase-admin");
let serviceAccount = require("./service.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

let app = express();

app.use(cors());
app.use(bearerToken());

app.use(function (req, res, next) {
  let token = req.token;
  admin
    .auth()
    .verifyIdToken(token)
    .then(function (response) {
      req.user = response;
      next();
    });
});

app.get("/ping", function (req, res) {
  res.send(`Hello ${req.user.name}`);
});

app.listen(5000);
