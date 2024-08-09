const regex = /\b(Apple)+\b/g;
const fruits = 'Banana, Apple, Banana,  kiwi, Apple,  kiwi, Apple, Banana';
for(const match of fruits.matchAll(regex));



const nombre = 'Cristian';
nombre = 'Fernando';
console.log(nombre);

const persona = {
  id: 1,
  nombre: 'Cristian',
};

persona.nombre = 'Fernando';
console.log(persona.nombre);