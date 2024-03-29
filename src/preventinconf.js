import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js';
import { auth } from './app/firebase.js'; // import firebase auth module
import { loginCheck } from './app/prevent.js';
//import './app/signupForm.js';
//import './app/logout.js';
//import './app/loginCheck.js';
//import './app/signinForm.js';

onAuthStateChanged(auth, async (user) => {
  loginCheck(user);
  console.log(user);
});
