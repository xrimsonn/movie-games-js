import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";
const signinForm = document.querySelector('#signinform');

signinForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // get user info
    const email = signinForm['correo'].value;
    const password = signinForm['Contrasena'].value;

    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password);
        console.log(credentials);

        const modal = bootstrap.Modal.getInstance(document.querySelector('#signinmodal'));
        modal.hide();
        showMessage('Inicio de sesión exitoso, Bienvenido '+email)
        
    } 
    catch (err) {
        if(err.code === 'auth/wrong-password'){
            showMessage('Contraseña incorrecta', 'error')
        }
        else if(err.code === 'auth/user-not-found'){
            showMessage('Usuario no encontrado', 'error')
        }
        else if(err.code === 'auth/invalid-login-credentials'){
            showMessage('Credenciales invalidas', 'error')
        }
    }

   
});