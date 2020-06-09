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