import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDkcy2F-GKWtoLXD8yv4Uv1KjRNy9wdrA0",
//   authDomain: "clone-720e3.firebaseapp.com",
//   projectId: "clone-720e3",
//   storageBucket: "clone-720e3.appspot.com",
//   messagingSenderId: "395636295908",
//   appId: "1:395636295908:web:4e3aedf66da54c19ab44f1"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
