// function hello(){
//     console.log("hello, we are good");
// }


// let hello = function () {
//     console.log("hello, we are good");
// }

let arr = []

for (let index = 0; index < 10; index++) {
    let hello = function () {
        const item = index;
        console.log(item*item);
    }
    arr.push(hello);
}

// console.log(arr);
let myfn = arr[5];

myfn();

// console.log(hello);

// hello();