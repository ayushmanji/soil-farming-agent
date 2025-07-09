# 🌱 Soil Farming Agent

A dynamic web-based system to help users understand suitable soil types for various crops and connect them with seed distributors. Built with HTML, Tailwind CSS, JavaScript, and Firebase.

[🔗 Live Site](https://soil-876a9.web.app)

---

## 📌 Features

- 👥 User & Admin authentication using Firebase Auth
- 📝 Admin can post soil types and distributor details
- 🌾 Users can view soil details and matching crop suggestions
- 🚚 Distributor directory for users to access seed suppliers
- 🔒 Modular Firebase-based secure backend
- ⚡ Fully hosted on Firebase Hosting

---

## 🧱 Technologies Used

- **Frontend**: HTML5, CSS3 (Tailwind CSS), JavaScript (ES6)
- **Backend**: Firebase (Auth, Firestore, Hosting)
- **Architecture**: Modular JS (auth.js, admin.js, user.js)

---

## 📁 Project Structure

```
├── index.html                 # Landing Page
├── login.html                 # Login Page
├── register.html              # Registration Page
├── admin.html                 # Admin Dashboard
├── soil-details.html          # View Soil Info
├── distributor-details.html   # View Distributors
├── js/
│   ├── auth.js                # Firebase Auth Logic
│   ├── admin.js               # Admin Firestore Actions
│   └── user.js                # Fetch & Display Data
└── js/firebase-config.js      # Firebase Initialization
```

---

## 🔁 Workflow Overview

1. **User Registration**  
   - Users register via `register.html` using Firebase Auth.

2. **Login Flow**  
   - Admin logs in with `admin@soil.com` → redirected to `admin.html`  
   - Regular users log in → redirected to `soil-details.html`

3. **Admin Functionality**  
   - Post soil types and distributors using forms  
   - Data is stored in Firestore collections: `soil_data`, `distributors`

4. **User Functionality**  
   - View dynamic soil and distributor info pulled from Firestore

5. **Deployment**  
   - Hosted using Firebase Hosting  
   - Public URL: [https://soil-876a9.web.app](https://soil-876a9.web.app)

---

## ✅ Test Cases

| Test Case | Input | Expected Output |
|-----------|-------|------------------|
| Register User | Email & Password | User created in Firebase |
| Login Admin | `admin@soil.com` | Redirect to admin.html |
| Login User | Normal email | Redirect to soil-details.html |
| Add Soil | Name, pH, Crops | Appears in Firestore |
| View Data | Open page | Displays Firestore entries |

---

## 🧠 Future Enhancements

- Role-based Firestore access rules
- User profile storage in Firestore
- Real-time search/filter for soils and distributors
- Admin dashboard analytics

---

## 🧾 License

This project is part of an academic submission.  
Author: Ayushman Sharma  
© 2025 Soil Farming Agent
