class Human {

    static population = []

    constructor(name){
        this.name = name;
        this.alive = true;

        Human.population.push(this);
    }

    dance = function(){
        console.log(this.name, "dance so well");
    }
}

class Hitman extends Human {

    constructor(name){
        super(name);
        this.kills = 0;
    }

    kill = function(target){

        if(this === target){
            console.log("Suicide is never an option");
            return;
        }

        if(target.alive){
            target.alive = false;
            this.kills += 1;
        } else {
            console.log("You can not kill someone already dead")
        }
    }

}

let anuj = new Human("Anuj");
let ravi = new Human("Ravi");
let mohit = new Human("Mohit");
let gogo = new Hitman("Crime Master")

// gogo.kill(mohit);
// gogo.kill(mohit);
// gogo.kill(mohit);
// gogo.kill(mohit);
// gogo.kill(mohit);

// gogo.kill(gogo);

gogo.dance();



// console.log(Human.population);