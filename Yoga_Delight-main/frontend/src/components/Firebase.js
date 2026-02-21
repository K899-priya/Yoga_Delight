// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAB4ojDM06mV3MU2BFQB7mwO5u0PuMjYMg",
  authDomain: "yoga-delight-7416b.firebaseapp.com",
  projectId: "yoga-delight-7416b",
  storageBucket: "yoga-delight-7416b.firebasestorage.app",
  messagingSenderId: "947691264055",
  appId: "1:947691264055:web:34fad569fcf008d154c7b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};