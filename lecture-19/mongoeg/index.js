const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://anuj:anuj@cluster0.x36ik.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

const urlSchema = new mongoose.Schema({
  short: String,
  complete: String,
  creator: String,
});

const UrlModel = mongoose.model("UrlModel", urlSchema);

db.once("open", function () {
  console.log("We are connected");
  //   const first = new UrlModel({ short: 'bingo', complete: "https://www.google.com/", creator:"anujgargcse@gmail.com" });
  //   first.save();
  UrlModel.findOne({ short: "bing" }).then(function (response) {
    console.log(response);
  });
});
