// js/admin.js
import { db } from './firebase-config.js';
import { collection, addDoc, Timestamp } from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js';

// Submit Soil
export function submitSoil(event) {
  event.preventDefault();

  const name = document.getElementById("soilName").value;
  const ph = document.getElementById("soilPH").value;
  const crops = document.getElementById("soilCrops").value.split(",");

  addDoc(collection(db, "soil_data"), {
    name,
    ph,
    crops,
    createdAt: Timestamp.now()
  }).then(() => {
    alert("Soil data added successfully.");
  }).catch((err) => {
    alert("Error: " + err.message);
  });
}

// Submit Distributor
export function submitDistributor(event) {
  event.preventDefault();

  const name = document.getElementById("distName").value;
  const contact = document.getElementById("distContact").value;
  const location = document.getElementById("distLocation").value;
  const crops = document.getElementById("distCrops").value.split(",");

  addDoc(collection(db, "distributors"), {
    name,
    contact,
    location,
    crops,
    createdAt: Timestamp.now()
  }).then(() => {
    alert("Distributor added successfully.");
  }).catch((err) => {
    alert("Error: " + err.message);
  });
}
