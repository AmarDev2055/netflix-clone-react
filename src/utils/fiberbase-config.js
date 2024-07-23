// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtZdVnjY_7rTbKW1aOtj82YkEWzohmbP0",
  authDomain: "react-netflix-project-b0b21.firebaseapp.com",
  projectId: "react-netflix-project-b0b21",
  storageBucket: "react-netflix-project-b0b21.appspot.com",
  messagingSenderId: "477799023404",
  appId: "1:477799023404:web:003e7313fec4ba4e20e289",
  measurementId: "G-FVFMWQR9M2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
