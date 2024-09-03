const dragon = 'https://dragonball-api.com/api/characters'

const dragonball = document.getElementById("dragonball");

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
const items = data.items;
showData(items); // Paso products array para la funcion showData
})
.catch((err) => {
console.log(err);
let message = err.statusText || "Ocurrió un error";
dragonball.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
})
.finally(() => 
console.log('Operación de fetch completada.'));


