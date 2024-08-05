var lastName = 'David';   //  Global
lastName = 'Oscar'
console.log(lastName);


let fruit = 'Apple'; //Alcance Bloque
fruit = 'kiwi'
console.log(fruit);

const animal = 'Dog';    //Alcance Bloque
animal = 'Pato'
console.log(animal);

const fruits = () => {
    if (true) {
        var fruit1 = 'Apple';  //function Scope
        let fruit2 = 'kiwi';  // Block  Scope 
        const fruit3 = 'banana'; // Block  Scope 
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
    
}

fruits();

