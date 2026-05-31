import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
 apiKey: "AIzaSyDAX-cRYrEaB0wvBPjYeAF4ToZzO-0qGRU",
  authDomain: "korae-59ebd.firebaseapp.com",
  projectId: "korae-59ebd",
  storageBucket: "korae-59ebd.firebasestorage.app",
  messagingSenderId: "782818191512",
  appId:"1:782818191512:web:569f57bcc07a3ba1f348ed",
  measurementId: "G-J4Y3ELJQ5L"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);