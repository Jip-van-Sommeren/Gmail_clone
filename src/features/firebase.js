// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import firebase from "firebase";
// import { auth } from "firebase/auth";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkcy2F-GKWtoLXD8yv4Uv1KjRNy9wdrA0",
  authDomain: "clone-720e3.firebaseapp.com",
  projectId: "clone-720e3",
  storageBucket: "clone-720e3.appspot.com",
  messagingSenderId: "395636295908",
  appId: "1:395636295908:web:4e3aedf66da54c19ab44f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };
