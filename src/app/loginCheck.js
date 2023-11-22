const element1 = document.querySelector('#btn-inicio');
const element2 = document.querySelector('#registro');
const element3 = document.querySelector('#login');
let decision = false;

export const loginCheck = (user) => {
  console.log('ejecutando check in');
  // Verificar si ya se redirigió

  if (user) {
    // Usuario autenticado
    // Redirigir al usuario a la página que eligió

    window.location.href = '../../user/feed.html';

    if (element2) {
      element2.style.display = 'none';
    }
    if (element3) {
      element3.style.display = 'none';
    }
  } else {
    // Usuario no autenticado
    // Guardar flag en sessionStorage
    if (element1) {
      element1.style.display = 'none';
    }

    sessionStorage.setItem('isAuthenticated', false);
  }
};
