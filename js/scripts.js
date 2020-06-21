let enlacesContainer = document.querySelector('.navBar__contenedor-enlaces');
let hamburguerContainer = document.querySelector('.navBar__contenedor-hamburguer');

hamburguerContainer.addEventListener('click', hideShow);

function hideShow(){
     if(enlacesContainer.classList.contains('mostrar')){
          enlacesContainer.classList.remove('mostrar');
     }else{
          enlacesContainer.classList.add('mostrar');
     }
}

var map = L.map('mapa').setView([19.505209, -99.084792], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([19.505209, -99.084792]).addTo(map)
    .bindPopup('Creación de paginas web estaticas')
    .openPopup();