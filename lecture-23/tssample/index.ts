// message = 22;

// const message = function(){
//     return "hello!"
// };

// message();

// let user : Object = {};

// let message : any = {};
// message.age = "hello";

// function greet(name?: string) : string {
//     if(name){
//         console.log("Hello, " + name.toUpperCase() + "!!");
//     }
//     return "hello";
// }

// greet("uuhh");

// const names = ["Alice", "Bob", "Eve"];

// names[0] - names[1]

// type Human = { name: string; age: number };

// let anuj : Human | string = {
//     name : "Anuj",
//     age: 26,
// }

// anuj = "23";

// interface Human {
//   name: string;
//   age: number;
// }

// let anuj : Human  = {
//     name : "Anuj",
//     age: 26,
// }

// class Point {

//     readonly x: number;
//     y?: number;

//     constructor(){
//         this.x = 23;
//     }
// }

// let p = new Point();
// console.log(p.x)

class C {
    #length = 0;

    get length() {
      return this.#length;
    }

    set length(value) {
        console.log(value);
    //   this.#length = 0;
    }

}

let item = new C();
item.length = 999;
item.length = 1000;
item.length = 76;

// console.log(item.length);


