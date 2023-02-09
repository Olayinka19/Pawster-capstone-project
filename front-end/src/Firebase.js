// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn4mg_8U3BHZON6uuQ-ycR1MeD0WvdXLc",
  authDomain: "ola-pawster.firebaseapp.com",
  projectId: "ola-pawster",
  storageBucket: "ola-pawster.appspot.com",
  messagingSenderId: "250681010956",
  appId: "1:250681010956:web:1bfdf9cff741fa575a3729",
  measurementId: "G-8182M4Z97Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);