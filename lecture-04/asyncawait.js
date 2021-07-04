function yedekho(){
    let promise = new Promise(function(passfn, failfn){
        let handlerFn = function(){
            passfn("Ye hai inaam");
        }
        setTimeout(handlerFn, 3000);
    });
    return promise;
}



// async function sayhello(){
//     let value = await yedekho();
//     console.log(value);
//     return "okay"
// }

// promise.catch(function(err){

// })