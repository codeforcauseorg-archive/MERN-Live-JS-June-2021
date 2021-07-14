let express = require("express");

let app = express()

let handleroot = function(req, res){
    res.send("Yayyy. We responded from server");
}

app.get("/home", handleroot);

app.listen(3000, function(err){
    if(!err){
        console.log("App started with success");
    } else {
        console.log(err);
    }
});
