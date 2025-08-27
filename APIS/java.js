/* -Clase anterior-
let titulo = document.querySelector('#titulo')
let imagen = document.querySelector('#imagen')
let boton = document.querySelector('#boton')

boton.onclick = function (){
    fetch('https://pokeapi.co/api/v2/pokemon-form/157/')
    .then(respuesta => respuesta.json())
    .then (datos => {
        console.log(datos)
        titulo.textContent = datos.name
        imagen.src = datos.sprites.front_shiny
    })
} 
*/ 

function cargarPokemon(id, imgId, nameId) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(respuesta => respuesta.json())
    .then(data => {
      document.querySelector(imgId).src = data.sprites.front_default;
      document.querySelector(nameId).textContent = data.name;
    })
    .catch(err => console.error(err));
}

cargarPokemon(1, '#pokemon1', '#nombre1');
cargarPokemon(2, '#pokemon2', '#nombre2');
cargarPokemon(3, '#pokemon3', '#nombre3');
cargarPokemon(4, '#pokemon4', '#nombre4');
cargarPokemon(5, '#pokemon5', '#nombre5');
cargarPokemon(6, '#pokemon6', '#nombre6');
