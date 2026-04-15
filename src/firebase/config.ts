// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA01jHPknxR-E_D3q2xFN8rlARU3HcK1oQ",
  authDomain: "parcial2-f40e1.firebaseapp.com",
  projectId: "parcial2-f40e1",
  storageBucket: "parcial2-f40e1.firebasestorage.app",
  messagingSenderId: "628982795327",
  appId: "1:628982795327:web:c1f6bcf929982b3c82fc8a",
  measurementId: "G-0YXXFEC1Z5"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { app, auth, db };