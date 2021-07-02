class Human{
    static population = 0;

    constructor(name){
        this.naam = name;
        this.hands = 2;
        Human.population += 1;
    }
}

console.log(Human.population);
let anuj = new Human();
let ravi = new Human();
let ohit = new Human();
console.log(Human.population);




// let Bingo = Human;

// let mohit = new Bingo('Mohit Sharma');
// console.log(mohit);

// let anuj = new Human("Anuj Garg");
// let ravi = new Human("Anuj Garg");
// console.log(anuj);