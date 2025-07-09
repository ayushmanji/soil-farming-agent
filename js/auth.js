// js/auth.js
import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js';

// REGISTER
export function handleRegistration(event) {
  event.preventDefault();

  const name = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert('Registration successful!');
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert('Registration error: ' + error.message);
    });
}

// LOGIN
export function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const adminEmail = "admin@soil.com"; // 🔐 Replace with your admin email

      if (user.email === adminEmail) {
        window.location.href = "admin.html";
      } else {
        window.location.href = "soil-details.html";
      }
    })
    .catch((error) => {
      alert("Login error: " + error.message);
    });
}
