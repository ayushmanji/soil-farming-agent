// js/user.js
import { db } from './firebase-config.js';
import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js';

// Load Soil Data
export async function loadSoils() {
  const soilContainer = document.getElementById("soilList");
  const querySnapshot = await getDocs(collection(db, "soil_data"));

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const div = document.createElement("div");
    div.className = "p-4 border rounded bg-white shadow mb-4";
    div.innerHTML = `
      <h3 class="text-xl font-bold text-earth-brown">${data.name}</h3>
      <p class="text-sm">pH: ${data.ph}</p>
      <p class="text-sm">Crops: ${data.crops.join(", ")}</p>
    `;
    soilContainer.appendChild(div);
  });
}

// Load Distributors
export async function loadDistributors() {
  const distContainer = document.getElementById("distList");
  const querySnapshot = await getDocs(collection(db, "distributors"));

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const div = document.createElement("div");
    div.className = "p-4 border rounded bg-white shadow mb-4";
    div.innerHTML = `
      <h3 class="text-xl font-bold text-earth-brown">${data.name}</h3>
      <p class="text-sm">Contact: ${data.contact}</p>
      <p class="text-sm">Location: ${data.location}</p>
      <p class="text-sm">Crops: ${data.crops.join(", ")}</p>
    `;
    distContainer.appendChild(div);
  });
}
