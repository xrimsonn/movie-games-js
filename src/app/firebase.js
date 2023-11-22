// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAFdG-IyXSc7S_R6Se_13sIY6eYrcelOek',
  authDomain: 'peliculas-7bea7.firebaseapp.com',
  projectId: 'peliculas-7bea7',
  storageBucket: 'peliculas-7bea7.appspot.com',
  messagingSenderId: '1061563263517',
  appId: '1:1061563263517:web:bdace59ba64e113983f4f4',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
