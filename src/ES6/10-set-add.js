const list = new Set();
list.add('item 1');
list.add('item 2');
list.add('item 3').add('item 4');

console.log(list);


const mySet = new Set();

// Agregar elementos al Set
mySet.add(1);
mySet.add(5);
mySet.add(5); // Este valor no será añadido porque ya existe en el Set
mySet.add('texto');
mySet.add({a: 1, b: 2});

// Imprimir los elementos del Set
console.log(mySet); 