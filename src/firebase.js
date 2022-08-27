import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDy_tK9rguI71sdnEANw_m5WjxXtxTwDhg",
    authDomain: "e-commerce-95e5d.firebaseapp.com",
    projectId: "e-commerce-95e5d",
    storageBucket: "e-commerce-95e5d.appspot.com",
    messagingSenderId: "525214628672",
    appId: "1:525214628672:web:c2c20dd8f22e27588958a5",
    measurementId: "G-D2Y47JFVCX"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
