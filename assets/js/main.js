import Leon from "../class/Leon.js";
import Lobo from "../class/Lobo.js";
import Oso from "../class/Oso.js";
import Serpiente from "../class/Serpiente.js";
import Aguila from "../class/Aguila.js";

import { obtenerData } from "./obtenerDatos.js";

const btnRegistrar = document.getElementById("btnRegistrar");
const animal = document.querySelector("#animal");
const edadI = document.getElementById("edad");
const comentariosI = document.getElementById("comentarios");
const imagenAnimal = document.getElementById("imagenAnimal");

let name_Animal;
let imagen_Animal;
let sonido_Animal;

//Evento change para traer imagen
animal.addEventListener("change", async (e) => {
  e.preventDefault();
  let data = await obtenerData.mostrar();
  const nombreAnimal = animal.value;

  const animalSeleccionado = data.find(
    (animal) => animal.name === nombreAnimal
  );
 
  const { name, imagen, sonido } = animalSeleccionado;  
  imagenAnimal.src = `./assets/imgs/${imagen}`;

  name_Animal = name;
  sonido_Animal = sonido;
  imagen_Animal = imagen;
});

// Evento click en el botón registrar para agregar info del animal
btnRegistrar.addEventListener("click", () => {
  const nombreAnimal = document.getElementById("animal").value;
  const edad = edadI.value;
  const comentarios = comentariosI.value;  
  
  //Validación del formulario si no se completa todos los campos
  if (nombreAnimal === "Seleccione un animal" || edad === "Seleccione un rango de años" || comentarios === "") {
    document.getElementById("validationModalBody").innerHTML = "Por favor, complete todos los campos.";
    $('#validationModal').modal('show');

  } else {
    
    //Instanciación de las clases de los animales
    let instanciaAnimal;

    switch (nombreAnimal) {
      case "Leon":
        instanciaAnimal = new Leon(
          name_Animal,
          imagen_Animal,
          sonido_Animal,
          edad,
          comentarios
        );
        break;
      case "Lobo":
        instanciaAnimal = new Lobo(
          name_Animal,
          imagen_Animal,
          sonido_Animal,
          edad,
          comentarios
        );
        break;
      case "Oso":
        instanciaAnimal = new Oso(
          name_Animal,
          imagen_Animal,
          sonido_Animal,
          edad,
          comentarios
        );
        break;
      case "Serpiente":
        instanciaAnimal = new Serpiente(
          name_Animal,
          imagen_Animal,
          sonido_Animal,
          edad,
          comentarios
        );
        break;
      case "Aguila":
        instanciaAnimal = new Aguila(
          name_Animal,
          imagen_Animal,
          sonido_Animal,
          edad,
          comentarios
        );
        break;
      default:
        console.error("Animal no reconocido");
        return;
    }
    console.log(instanciaAnimal);

    //Limpieza del formulario despues de hacer click en el botón agregar
    animal.selectedIndex = 0; 
    edadI.selectedIndex = 0; 
    comentariosI.value = ""; 
    imagenAnimal.src = "./assets/imgs/lion.svg"; 
   
    
    // Crear las card de los animales en el area de Animales de investigación
    let cardsAnimales = document.getElementById("Animales");
    cardsAnimales.innerHTML += `
    
    <div class="row">
    <div class="col-md-4 mb-3 mx-3">
      <div class="card cardInvestigacion" style="width: 10rem;" data-edad="${edad}" data-comentario="${comentarios}" > 
        <img src="./assets/imgs/${imagen_Animal}" class="card-img-top" alt="${name_Animal}">
          <div class="card-body card-investigation">
            <div class="player">
              <audio id="player" class="audio-player" src="./assets/sounds/${sonido_Animal}"></audio>
            </div>
              <div>
                <button id="toggleButton" class="toggleButton">
                    <img src="./assets/imgs/audio.svg" alt="Reproducir" class="imgButton" />
                </button>
              </div>
          </div>
      </div>      
    </div>    
  </div>  
    `;
  }

  // Evento clicK para abrir el modal y mostrar los detalles del animal
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("card-img-top")) {
      const card = event.target.closest(".cardInvestigacion");
      const imagen = card.querySelector(".card-img-top").src;
      const nombre = card.querySelector(".card-img-top").alt;
      const edad = card.getAttribute("data-edad");
      const comentario = card.getAttribute("data-comentario");

      document.getElementById("modalNombre").textContent = nombre;
      document.getElementById("modalEdad").textContent = edad;
      document.getElementById("modalComentario").textContent = comentario;
      document.getElementById("modalImagen").src = imagen;

      // Mostrar el modal
      const animalModal = new bootstrap.Modal(document.getElementById("animalModal"));
      animalModal.show();
    }
  });


  // Agregar evento de reproducción de sonido para cada botón
  const toggleButtons = document.querySelectorAll(".toggleButton");
    toggleButtons.forEach((button) => {
      button.addEventListener("click", () => {
      const audioPlayer = button.parentElement.previousElementSibling.querySelector('.audio-player');
      audioPlayer.paused ? audioPlayer.play() : audioPlayer.pause();
    });
  });    

});  