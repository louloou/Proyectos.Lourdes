//1
let colores = ['Azul', 'Violeta', 'Blanco','Turquesa', 'Rosa'];

//2
console.log(colores);

let primero = colores[0];
let ultimo = colores[colores.length - 1];

console.log(primero);
console.log(ultimo);

//3
console.log(colores.length);

//4
colores.push("Naranja");

//5
colores.unshift("Rojo");
console.log(colores);

//6
colores.pop();

//7
colores.shift();

//8
colores[2] = "Amarillo";
console.log(colores);

//9

for (let i = 0; i < colores.length; i++) {
    console.log(colores[i]);
  
}


//10

let nuevosColores = []

for (let i = 0; i < 3; i++) {
  let color = prompt(`Ingresá el color ${i + 1}:`);
  nuevosColores.push(color);
}

console.log("Los colores ingresados son:", nuevosColores);