// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpTzxRx8hyRmag1OFKb5-EWI4JNwctMw0",
  authDomain: "fetchtrue-2025.firebaseapp.com",
  projectId: "fetchtrue-2025",
  storageBucket: "fetchtrue-2025.firebasestorage.app",
  messagingSenderId: "1041578063290",
  appId: "1:1041578063290:web:39d50d60f9292ff2529983",
  measurementId: "G-R4N68J6K6X"
};

// Initialize Firebase
const app = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

export const auth = getAuth(app);