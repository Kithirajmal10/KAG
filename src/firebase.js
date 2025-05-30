// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config — get this from Firebase Console > Project settings > General > SDK setup and config
const firebaseConfig = {
  apiKey: "AIzaSyBk4foRN-em0jkSnBGqUleQPwqBjVhj580",
  authDomain: "kag-form.firebaseapp.com",
  projectId: "kag-form",
  storageBucket: "kag-form.firebasestorage.app",
  messagingSenderId: "100908221290",
  appId: "1:100908221290:web:633956157a9968045f9b13",
  measurementId: "G-XCS7N41XY0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore
const db = getFirestore(app);

export { db };
