// js/firebase-config.js
// Import necessary Firebase modules (modular SDK)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

// Firebase configuration (replace with your own if needed)
const firebaseConfig = {
  apiKey: "AIzaSyBDLESgaScv18TNsp2-xDgSi5GbYMRHVMk",
  authDomain: "soil-876a9.firebaseapp.com",
  projectId: "soil-876a9",
  storageBucket: "soil-876a9.firebasestorage.app",
  messagingSenderId: "121202971646",
  appId: "1:121202971646:web:4f2ebc3b1bd2cbfd7ba6af",
  measurementId: "G-4NH9QKMVL7"
};

// Initialize Firebase services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export to use in other modules
export { auth, db };
