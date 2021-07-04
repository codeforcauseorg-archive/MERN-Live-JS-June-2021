let promise = new Promise(function(passfn, failfn){

    setTimeout(function(){
        passfn("Ye hai inaam");
    }, 2000);

    setTimeout(function(){
        failfn("abe jaa naa");
    }, 3000);

});


promise.then(function(value){
    console.log("Ye aa gyi value", value);
}).catch(function(err){
    console.log("Error", err);
});



