//1 Creación de un arreglo
let colores = ['Azul', 'Violeta', 'Blanco','Turquesa', 'Rosa'];

//2  Acceso a elementos
console.log(colores);

let primero = colores[0];
let ultimo = colores[colores.length - 1];

console.log(primero);
console.log(ultimo);

//3  Tamaño del arreglo:

console.log(colores.length);

//4 Agregar al final
colores.push("Naranja");

//5 Agregar al inicio
colores.unshift("Rojo");
console.log(colores);

//6 Eliminar del final
colores.pop();

//7 Eliminar del principio
colores.shift();

//8 Reemplazo de un valor
colores[2] = "Amarillo";
console.log(colores);

//9 Recorrido del arreglo

for (let i = 0; i < colores.length; i++) {
    console.log(colores[i]);
  
}


//10 Desafío creativo

let nuevosColores = []

for (let i = 0; i < 3; i++) {
  let color = prompt(`Ingresá el color ${i + 1}:`);
  nuevosColores.push(color);
}

console.log("Los colores ingresados son:", nuevosColores);