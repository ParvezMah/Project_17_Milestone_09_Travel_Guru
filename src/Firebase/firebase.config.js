// Import the functions you need from the SDKs you need

import { getAuth } from "firebase/auth";import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCarnqbIa6iniVmiuueqB778z5_f9RYYRw",
  authDomain: "module-52-4-travel-guru.firebaseapp.com",
  projectId: "module-52-4-travel-guru",
  storageBucket: "module-52-4-travel-guru.appspot.com",
  messagingSenderId: "615162013364",
  appId: "1:615162013364:web:d330b20ebbeda3deae99e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 
export default auth;