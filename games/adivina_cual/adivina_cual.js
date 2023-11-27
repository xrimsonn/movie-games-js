var peliculas = [];
var currentIndex = 0;
var boton1 = document.getElementById('generarPeliculas');
var boton2 = document.getElementById('generarPeliculas2');
var boton3 = document.getElementById('generarPeliculas3');
var boton4 = document.getElementById('generarPeliculas4');
var boton5 = document.getElementById('generarPeliculas5');
var reiniciarbtn = document.getElementById('reiniciar');
var Aciertos = document.querySelector('#Aciertos');
var Errores = document.querySelector('#Errores');
var RecordM = document.querySelector('#Record');
var a = 0,
  e = 0,
  record = 0;

const htmlElement = document.documentElement;
var banderaclicks = true;
var nombreArchivo = window.location.pathname.split('/').pop();
var pelicula1,
  pelicula3,
  pelicula2,
  pelicula4,
  pelicula5,
  peliculasV = [];
console.log(nombreArchivo);
function cargarDatos() {
  fetch('../peliculas.json')
    .then((response) => response.json())
    .then((data) => {
      peliculas = data;
      console.log(peliculas);
      generarPeliculas();
    })
    .catch((error) => {
      console.error('Error al cargar los datos: ', error);
    });
}

function generarPeliculas() {
  if (currentIndex < peliculas.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  var poster = Math.random();
  pelicula1 = peliculas[Math.floor(poster * peliculas.length)];
  pelicula3 = peliculas[Math.floor(Math.random() * peliculas.length)];
  pelicula2 = peliculas[Math.floor(Math.random() * peliculas.length)];
  pelicula4 = peliculas[Math.floor(Math.random() * peliculas.length)];
  pelicula5 = peliculas[Math.floor(Math.random() * peliculas.length)];
  peliculasV = [pelicula2, pelicula4, pelicula5, pelicula3];
  peliculasV[Math.floor(Math.random() * 3)] =
    peliculas[Math.floor(poster * peliculas.length)];
  document.getElementById('imagenposter').src =
    'https://image.tmdb.org/t/p/w500/' + pelicula1.poster_path;
  document.getElementById('imagen2').src =
    'https://image.tmdb.org/t/p/w185/' + peliculasV[2].poster_path;
  document.getElementById('imagen3').src =
    'https://image.tmdb.org/t/p/w185/' + peliculasV[0].poster_path;
  document.getElementById('imagen4').src =
    'https://image.tmdb.org/t/p/w185/' + peliculasV[3].poster_path;
  document.getElementById('imagen5').src =
    'https://image.tmdb.org/t/p/w185/' + peliculasV[1].poster_path;
}

function efecto(boton, color) {
  boton.style.backgroundColor = color;
  boton.style.animation = 'blur-out-expand 0.3s linear both';
}
function verPoster() {
  banderaclicks = false;
  document.getElementById('imagenposter').style.filter = `none`;
  setTimeout(() => {
    verificarPutuacion();
  }, 1000);
}
function verificarRespuesta(event) {
  if (banderaclicks) {
    if (event.target === boton2) {
      if (pelicula1 === peliculasV[2]) {
        efecto(boton2, 'greenyellow');
        a++;
        Aciertos.textContent = `Aciertos: ${a}`;
      } else {
        efecto(boton2, 'red');
        e++;
        Errores.textContent = `Errores: ${e}`;
      }
    } else if (event.target === boton3) {
      if (pelicula1 === peliculasV[0]) {
        efecto(boton3, 'greenyellow');
        a++;
        Aciertos.textContent = `Aciertos: ${a}`;
      } else {
        efecto(boton3, 'red');
        e++;
        Errores.textContent = `Errores: ${e}`;
      }
    } else if (event.target === boton4) {
      if (pelicula1 === peliculasV[3]) {
        efecto(boton4, 'greenyellow');
        a++;
        Aciertos.textContent = `Aciertos: ${a}`;
      } else {
        efecto(boton4, 'red');
        e++;
        Errores.textContent = `Errores: ${e}`;
      }
    } else if (event.target === boton5) {
      if (pelicula1 === peliculasV[1]) {
        efecto(boton5, 'greenyellow');
        a++;
        Aciertos.textContent = `Aciertos: ${a}`;
      } else {
        efecto(boton5, 'red');
        e++;
        Errores.textContent = `Errores: ${e}`;
      }
    }
    setTimeout(() => {
      boton1.style.backgroundColor = 'transparent';
      boton2.style.backgroundColor = 'transparent';
      boton3.style.backgroundColor = 'transparent';
      boton4.style.backgroundColor = 'transparent';
      boton5.style.backgroundColor = 'transparent';
      boton1.style.animation = 'none';
      boton2.style.animation = 'none';
      boton3.style.animation = 'none';
      boton4.style.animation = 'none';
      boton5.style.animation = 'none';
    }, 300);
    verPoster();

    setTimeout(() => {
      banderaclicks = true;
      generarPeliculas();
    }, 1100);
  }
}

function verificarPutuacion() {
  if (nombreArchivo === 'facil.html') establecer(20, 50, 25);
  else if (nombreArchivo === 'medio.html') establecer(40, 40, 30);
  else if (nombreArchivo === 'dificil.html') establecer(50, 30, 35);
}
function reiniciar() {
  if (record < a && RecordM) {
    record = a;
    RecordM.textContent = `Record: ${record}`;
  }
  a = 0;
  e = 0;
  banderaclicks = true;
  Errores.textContent = `Errores: ${e}`;
  Aciertos.textContent = `Aciertos: ${a}`;
  if (RecordM) cambiar();
  generarPeliculas();
}
function establecer(blur, brightness, invert) {
  document.getElementById(
    'imagenposter'
  ).style.filter = `blur(${blur}px) brightness(${brightness}%) invert(${invert}%)`;
}
function cambiar() {
  if (htmlElement.getAttribute('data-theme') === 'light') {
    htmlElement.setAttribute('data-theme', 'dark');
  } else {
    htmlElement.setAttribute('data-theme', 'light');
  }
}

boton1.addEventListener('click', verificarRespuesta);
boton2.addEventListener('click', verificarRespuesta);
boton3.addEventListener('click', verificarRespuesta);
boton4.addEventListener('click', verificarRespuesta);
boton5.addEventListener('click', verificarRespuesta);

reiniciarbtn.addEventListener('click', reiniciar);
cargarDatos();
verificarPutuacion();
