//Declarando
class User {};

/*
Instancia de una clase 
const newUser = new User();
*/

class user{
    //metodos
    greeting(){
        return 'Hello';
    }
};
const gndx = new user();
console.log(gndx.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

//Constructor

class user{
    constructor(){
    console.log('Nuevo Usuario');
    }
    greeting(){
        return 'Hello';
    }
}

const david = new user();
//this

class user {
    constructor(name){
        this.name = name; 
    }
    //metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()}  {${this.name}}`;
    }
}
const ana = new user('Ana');
console.log(ana.greeting());

//Setters -- Getters

class user {
    //Constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak} ${this.name}`;
    }
    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
}
const bebeloper1 =  new user('David', 15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);

