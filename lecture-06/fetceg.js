let axios = require('axios');


async function takeout(usename){
    let output = await axios.get(`https://api.github.com/users/${usename}`);
    return output;
}

let p = takeout("keenwarrior");



// p.then(function(response){
//     console.log(response.data.name);
// })
