const dragon = 'https://dragonball-api.com/api/characters'

const dragonball = document.getElementById("dragonball");

const inputElement = document.getElementById('input');
let personajes = [];

function showData(dataArray) {
    // El for itera sobre los elementos del array
    for (const item of dataArray) {

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
};


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


//--- DESAFIATE ---


// La función busqueda toma el valor del input y verifica si está en la lista de items
function busqueda(value) {
  if (items.includes(value)) {
    console.log(`${value} está en la lista.`);
  } else {
    console.log(`${value} no está en la lista.`);
  }
}

// Agrega un EventListener al input para escuchar el evento 'input'
inputElement.addEventListener('input', function() {
  // Llama a la función busqueda con el valor actual del input
  busqueda(inputElement.value);
});

input.addEventListener("keyup", (e) =>{
  const str = e.target.value.toLowerCase();
  const filtro = personajes.filter(personajes=>{
    return personajes.name.toLowerCase().includes(str);
  })
  showData(filtro);
})