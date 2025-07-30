/* Objetos */ 

let estudiantes = [{
    nombre: 'Sasha',
    apellido: 'Cisneros',
    edad: 16
},
{
    nombre: 'Martina',
    apellido: 'Semper',
    edad: 16
}, {  
    nombre: 'Martina',
    apellido: 'Ferrando',
    edad: 16
}
]

for (let index = 0; index < estudiantes.length; index++) {
    // Mostrar todos los elementos del arreglo
   console.log(estudiantes[index].apellido + ' '+ (estudiantes[index].nombre)) }
