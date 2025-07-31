/* Objetos */ 

let estudiantes = [{
    nombre: 'Sasha',
    apellido: 'Cisneros',
    edad: 16, 
    notaExamen: 10
},
{
    nombre: 'Martina',
    apellido: 'Semper',
    edad: 16, 
    notaExamen: 8
}, {  
    nombre: 'Martina',
    apellido: 'Ferrando',
    edad: 16,
    notaExamen: 8
},
{  
    nombre: 'Camilo',
    apellido: 'Yorgovan',
    edad: 16,
    notaExamen: 5
}
]

for (let index = 0; index < estudiantes.length; index++) {
    // Mostrar todos los elementos del arreglo
   console.log(estudiantes[index].nombre + ' ' + estudiantes[index].apellido + '  Su nota es: '+ estudiantes[index].notaExamen)} 

