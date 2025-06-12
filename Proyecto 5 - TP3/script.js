// Ejercicio 1: Mostrar todos los elementos

let animales = ["perro", "gato", "conejo", "loro"];

for (let i = 0; i < animales.length; i++) {
    console.log(animales[i]); 
}

//Ejercicio 2: Mostrar sólo elementos en posiciones pares

for (let i = 0; i < animales.length; i++) {
  if (i % 2 === 0) {
    console.log(animales[i]);
  }
}

//Ejercicio 3: Sumar los números del arreglo
let numeros = [4, 7, 2, 9, 5];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}
console.log("La suma es:", suma); 

//Ejercicio 4: Multiplicar todos los elementos por 2
let datos = [3, 6, 1, 8];
let multiplicados = []; 

for (let i = 0; i < datos.length; i++) {
  multiplicados.push(datos[i] * 2);  
}
console.log(multiplicados);

// Ejercicio 5: Buscar un nombre
let alumnos = ["Sofía", "Carlos", "Bruno", "Lucía", "Carla"];
let nombre = prompt("Ingresá un nombre:");

if (alumnos.includes(nombre)) {  // preguntar por includes
  console.log("Se encontró el nombre.");
} else {
  console.log("No se encontró el nombre.");
}

//  Ejercicio 6: Reemplazar todos los ceros por cien
let valores = [5, 0, 8, 0, 2];

for (let i = 0; i < valores.length; i++) {
  if (valores[i] === 0) {
    valores[i] = 100;
  }
}

console.log(valores);

// Ejercicio 7: Promedio de notas
let notas = [8, 7, 9, 10, 6];
let sumaPromedio = 0;

for (let i = 0; i < notas.length; i++) {
  sumaPromedio += notas[i];
}

let promedio = sumaPromedio / notas.length;
console.log("El promedio es " + promedio);
