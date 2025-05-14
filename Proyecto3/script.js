let colores = ['Azul', 'Violeta', 'Blanco','Turquesa', 'Rosa'];

console.log(colores);

let primero = colores[0];
let ultimo = colores[colores.length - 1];

console.log(primero);
console.log(ultimo);

console.log(colores.length);

colores.push("Naranja");

colores.unshift("Rojo");

console.log(colores);

colores.pop();

colores.shift();

colores[2] = "Amarillo";
console.log(colores);

for (let i = 0; i < colores.length; i++) {
    console.log(colores[i]);
  }
