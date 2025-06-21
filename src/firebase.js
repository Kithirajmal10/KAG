import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDslfaD4KSCc3uQ5WEO88fFj6T9sRPBrWQ",
  authDomain: "kag-tiles-54095.firebaseapp.com",
  projectId: "kag-tiles-54095",
  storageBucket: "kag-tiles-54095.firebasestorage.app",
  messagingSenderId: "997098427550",
  appId: "1:997098427550:web:11ab2a757162a4beb4178f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
