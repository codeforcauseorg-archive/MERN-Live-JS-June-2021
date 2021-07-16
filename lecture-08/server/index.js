let express = require("express");

let app = express();

app.use(express.urlencoded());

let users = new Map();

users.set("anuj", "Anuj Garg");
users.set("mohit", "Mohit Sharma");
users.set("rav", "Ravi Saini");


let handleroot = function(req, res){
    if(req.query.name && users.has(req.query.name)){
        res.send("Hello " + users.get(req.query.name));
    } else {
        res.send("Hello who ever you are");
    }
}


let handlebody = function(req, res){
    console.log(req.body);
    res.send("We got it");
}

app.post("/", handlebody);

app.listen(3000, function(err){
    if(!err){
        console.log("App started with success");
    } else {
        console.log(err);
    }
});
