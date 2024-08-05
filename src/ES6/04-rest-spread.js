// Arrays Destructuring

let fruits = ['Apple', 'Banana'];
let [a,b]= fruits
console.log(a,b);
console.log(a, fruits[1]);

//Object Destructuring
let user = {username: 'Oscar', age : 34};
let {username, age } = user;
console.log(username, age);
console.log(username, user.age);
