let axios = require('axios');

let token = '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';
axios.defaults.headers['Authorization'] = `Bearer ${token}`;


// axios.post('https://api.github.com/repos/keenwarrior-archive/high-time/issues', {
//     title : "A code generated issue",
//     body: "just some random body"
// }).then(function(response){
//     console.log(response.data);
// }).catch(function(error){
//     console.log(error);
// })


axios.patch('https://api.github.com/repos/keenwarrior-archive/high-time/issues/1', {
    assignee : "keenwarrior",
}).then(function(response){
    console.log(response.data);
}).catch(function(error){
    console.log(error);
})


