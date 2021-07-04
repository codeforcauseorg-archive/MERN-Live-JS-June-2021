let axios = require('axios');

let p = axios.get("https://api.github.com/users/keenwarrior");

// console.log(p);

p.then(function(value){
    console.log((value.data));
})