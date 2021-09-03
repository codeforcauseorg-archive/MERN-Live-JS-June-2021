let axios = require("axios");
let fs = require("fs").promises;


(async ()=>{
    const content = await fs.readFile('./mdb.png', {encoding: 'base64'});
    // console.log(content);
    axios.post("http://localhost:3000/images/", {
        content
    }).then((response)=>{
        console.log(response.data);
    }).catch((error)=>{
        console.log(error);
    })
})();
