let frutas = ["manzana", "banana", "cereza", "mango", "piña"];

let frutasEliminadas = frutas.splice(1, 2);

console.log(frutas); // ["manzana","mango","piña"]

console.log(frutasEliminadas); // ["banana", "cereza"]

frutas.splice(1, 0, "fresa", "kiwi");

console.log(frutas); // ["manzana","fresa","kiwi","mango","piña"]