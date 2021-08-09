let express = require("express");
let cors = require("cors");
const bearerToken = require("express-bearer-token");
let admin = require("firebase-admin");
let serviceAccount = require("./service.json");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://anuj:anuj@cluster0.x36ik.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const urlSchema = new mongoose.Schema({
  short: String,
  complete: String,
  creator: String,
});

const UrlModel = mongoose.model("UrlModel", urlSchema);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

let app = express();

app.use(cors());
app.use(bearerToken());
app.use(express.json());

app.get("/:id", function (req, res) {
  let id = req.params.id;
  UrlModel.findOne({ short: id }).then(function (response) {
      if(response){
        res.redirect(response.complete);
      } else {
        res.redirect("https://codeforcause.org/home");
      }
  });
});

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

app.post("/short", function (req, res) {
  let {short, complete} = req.body;
  let creator = req.user.email;

  const first = new UrlModel({ short, complete, creator });
  first.save().then((response)=>{
    res.send(response);
  })
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("We are connected");
  app.listen(5000, function (error) {
    if (!error) {
      console.log("Application started");
    }
  });
  //   const first = new UrlModel({ short: 'bingo', complete: "https://www.google.com/", creator:"anujgargcse@gmail.com" });
  //   first.save();
  // UrlModel.findOne({ short: "bing" }).then(function (response) {
  //   console.log(response);
  // });
});
