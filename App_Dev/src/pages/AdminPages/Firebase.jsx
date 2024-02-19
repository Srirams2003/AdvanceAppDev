// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const Firebase =() => {  

    const firebaseConfig = {
        apiKey: "AIzaSyCjTaUamoCxbKA1X4Ri92M67CZCRmXllhM",
        authDomain: "adminpage-e37fc.firebaseapp.com",
        projectId: "adminpage-e37fc",
        storageBucket: "adminpage-e37fc.appspot.com",
        messagingSenderId: "377396402949",
        appId: "1:377396402949:web:58e5be796d692bbc2e756c",
        measurementId: "G-D5W99TVRDR"
    };
    
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    // Initialize Firebase
} 

export default Firebase;