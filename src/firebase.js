// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config — get this from Firebase Console > Project settings > General > SDK setup and config
const firebaseConfig = {
  apiKey: "AIzaSyDslfaD4KSCc3uQ5WEO88fFj6T9sRPBrWQ",
  authDomain: "kag-tiles-54095.firebaseapp.com",
  projectId: "kag-tiles-54095",
  storageBucket: "kag-tiles-54095.firebasestorage.app",
  messagingSenderId: "997098427550",
  appId: "1:997098427550:web:11ab2a757162a4beb4178f",
  measurementId: "G-3THDHH246L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore
const db = getFirestore(app);

export { db };