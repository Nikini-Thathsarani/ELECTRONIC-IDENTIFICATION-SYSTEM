// Firebase core
import { initializeApp } from "firebase/app";

// Firebase services you NEED
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Optional (analytics)
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDruhDF7p-vQeCTInIxVc7AWKYH-QjV18Q",
  authDomain: "e-id-dd049.firebaseapp.com",
  projectId: "e-id-dd049",
  storageBucket: "e-id-dd049.firebasestorage.app",
  messagingSenderId: "958936174681",
  appId: "1:958936174681:web:1825803aefd98c3de36148",
  measurementId: "G-LPDF5V2KBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize services
export const auth = getAuth(app);        
export const db = getFirestore(app);     
export const storage = getStorage(app); 

// Optional
const analytics = getAnalytics(app);

export default app;