import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import '.login/firebaseConfig.js';
// import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);

const firebaseConfig = {
  apiKey: "AIzaSyD48Zkl9-j5VEH9IitsC64W_I-0S8TTnqQ",
  authDomain: "advancedapp-7806c.firebaseapp.com",
  projectId: "advancedapp-7806c",
  storageBucket: "advancedapp-7806c.appspot.com",
  messagingSenderId: "1079118377820",
  appId: "1:1079118377820:web:090401a7d3ba996b544799",
  measurementId: "G-DMNJDSS9K0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage();
const db = getFirestore(app);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
