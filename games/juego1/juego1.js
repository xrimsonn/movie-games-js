var peliculas = []; 
var currentIndex = 0;
var boton1 = document.getElementById("generarPeliculas");
var boton2 = document.getElementById("generarPeliculas2");
var reiniciarbtn = document.getElementById("reiniciar");
var Aciertos = document.querySelector("#Aciertos");
var Errores = document.querySelector("#Errores");
var RecordM = document.querySelector("#Record");
var a = 0, e = 0, record = 0;

const htmlElement = document.documentElement;
var banderaclicks = true;
var nombreArchivo = window.location.pathname.split("/").pop();
console.log(nombreArchivo);
function cargarDatos() {
    fetch('../peliculas.json')
        .then(response => response.json())
        .then(data => {
            peliculas = data;
            console.log(peliculas);
            generarPeliculas();
        })
        .catch(error => {
            console.error('Error al cargar los datos: ', error);
        });
        
}


function generarPeliculas() {
    if (currentIndex < peliculas.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    var pelicula1 = peliculas[Math.floor(Math.random() * peliculas.length)];
    var pelicula2 = peliculas[Math.floor(Math.random() * peliculas.length)];
    document.getElementById("imagen1").src = "https://image.tmdb.org/t/p/w500/" + pelicula1.poster_path;
    document.getElementById("imagen2").src = "https://image.tmdb.org/t/p/w500/" + pelicula2.poster_path;
}
function efecto(boton, color){
    boton.style.backgroundColor = color;
    boton.style.animation="blur-out-expand 0.3s linear both";
}
function verificarRespuesta(event) {
   if(banderaclicks){
    if (event.target === boton1) {
        if (peliculas[currentIndex].vote_average >= peliculas[currentIndex === peliculas.length - 1 ? 0 : currentIndex + 1].vote_average) {
            efecto(boton1,"greenyellow");
            
            a++;
            Aciertos.textContent = `Aciertos: ${a}`;
        } else {
            efecto(boton1,"red");
            e++;
            Errores.textContent = `Errores: ${e}`;
        }
    } else if (event.target === boton2) {
        if (peliculas[currentIndex].vote_average <= peliculas[currentIndex === peliculas.length - 1 ? 0 : currentIndex + 1].vote_average) {
            efecto(boton2,"greenyellow");
            a++;
            Aciertos.textContent = `Aciertos: ${a}`;
        } else {
            efecto(boton2,"red");
            e++;
            Errores.textContent = `Errores: ${e}`;
        }
    }
    setTimeout(() => {
        boton1.style.backgroundColor = "transparent";
        boton2.style.backgroundColor = "transparent";
        boton1.style.animation = "none";
        boton2.style.animation = "none";
    }, 300);
    setTimeout(()=>{
        generarPeliculas();
    },150)
    verificarPutuacion();
   }
}
function verificarPutuacion(){
    if(nombreArchivo === "juego2.html")  perder(30);
    else if(nombreArchivo === "juego3.html")  perder(15);
    else if(nombreArchivo === "juego4.html")  perder(5);
}
function reiniciar(){
    if(record<a && RecordM){
        record=a;
        RecordM.textContent = `Record: ${record}`;
    } 
    a=0;e=0;
    banderaclicks = true;
    Errores.textContent = `Errores: ${e}`;
    Aciertos.textContent = `Aciertos: ${a}`;
    if (RecordM) cambiar();
    generarPeliculas();
}
function perder(cantidad){
    if(e>=cantidad){
        banderaclicks = false;
        cambiar();
    }
}
function cambiar() {
    if (htmlElement.getAttribute("data-theme") === "light") {
      htmlElement.setAttribute("data-theme", "dark");
    } else {
      htmlElement.setAttribute("data-theme", "light");
    }
  }
if (banderaclicks){
    boton1.addEventListener("click", verificarRespuesta);
    boton2.addEventListener("click", verificarRespuesta);
}
reiniciarbtn.addEventListener("click", reiniciar);
cargarDatos();

