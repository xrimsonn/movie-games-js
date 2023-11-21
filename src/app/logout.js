import {  signOut } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { auth } from "./firebase.js";   // import firebase auth module
import './showMessage.js';  // import showMessage function  
import { showMessage } from "./showMessage.js";
const logout = document.querySelector('#logout');

logout.addEventListener('click', async () => {   
    await signOut(auth);
    showMessage('Hasta pronto');
    // Esperar 5 segundos antes de redireccionar

    window.location.href = "../../index.html"; 
 
 
    
});