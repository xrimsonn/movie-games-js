import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js';
import { auth } from './firebase.js';
import { showMessage } from './showMessage.js';
const signupForm = document.querySelector('#register-form');
signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // get user info
  const email = signupForm['correo'].value;
  const password = signupForm['contrasena'].value;

  console.log(email, password);

  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials);
    // close the signup modal & reset form

    // const signupModal = document.querySelector('#signupmodal');
    // const modal= bootstrap.Modal.getInstance(signupModal);
    // modal.hide();

    showMessage('Welcome! ' + userCredentials.user.email);
  } catch (error) {
    if (error.code === 'auth/invalid-email') {
      showMessage('El correo es invalido', 'error');
    } else if (error.code === 'auth/email-already-in-use') {
      showMessage('Ese correo ya esta en uso', 'error');
    } else if (error.code === 'auth/weak-password') {
      showMessage('La contraseña debe tener al menos 6 caracteres', 'error');
    } else if (error.code) {
      showMessage('Algo salio mal', 'error');
    }
  }
});
