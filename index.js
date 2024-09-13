const dragon = 'https://dragonball-api.com/api/characters'

const dragonball = document.getElementById("dragonball");

//const inputElement = document.getElementById('input');
let personajes = [];

let searchQuery = "";

function showData(dataArray) {

  dragonball.innerHTML = "";
    // El for itera sobre los elementos del array
    for (const item of dataArray) {

      if  ((item.name.toLowerCase().includes(searchQuery.toLowerCase()))) {


      let cardDiv = document.createElement('div');
      cardDiv.className = "cardDragon";
      cardDiv.innerHTML += `
      <img src= "${item.image}" alt= "${item.description}">
      <p class="nombre"> ${item.name} </p>
      <p class="ki"> Ki: ${item.ki} </p>
      <p class="maxki"> MaxKi: ${item.maxKi} </p>   
      <p class="race"> Race: ${item.race} </p> 
      <p class="gender"> Gender: ${item.gender} </p>
      <p class="description"> Description: ${item.description} </p>
      <p class="afilliation"> Affiliation: ${item.affiliation} </p>
    
      `; // Se concatena cada párrafo de la manera que queremos mostrarlo al innerHTML del contenedor

      // Añadir la tarjeta al contenedor principal
    dragonball.appendChild(cardDiv);
    }
  }
};

// Añadimos un event listener para el input de búsqueda
document.getElementById("searchInput").addEventListener("input", function() {
  searchQuery = this.value; // Actualiza el término de búsqueda
  showData(personajes); // Muestra la lista de productos filtrada
});

fetch(dragon)
.then((res) =>{
console.log(res);
return res.ok? res.json(): Promise.reject(res); //esto hace que: si la respuesta es ok manda un rest.json y sino rechaza la promesa
})
.then(data => {
// Acceso al array products dentro de data 
personajes = data.items;
showData(personajes); // Paso products array para la funcion showData
})
.catch((err) => {
console.log(err);
let message = err.statusText || "Ocurrió un error";
dragonball.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
})
.finally(() => 
console.log('Operación de fetch completada.'));


//QUEDAMOS ACÁ CON LO DE LOCAL STORAGE PARTE 2 DESAFIO SEMANA 11
let url= localstorage.setItem('id', items.id)

const PRODUCTS_URL_MODIFICADA = dragon+items[]+".json" 

const PRODUCTS_URL_MODIFICADA = PRODUCTS_URL+localStorage.getItem("catID")+".json" 