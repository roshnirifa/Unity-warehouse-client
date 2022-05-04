// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDQ7sttuZpo_PLxIQDnbVdHsBB5lTel5oM",
    authDomain: "warehouse-d5a66.firebaseapp.com",
    projectId: "warehouse-d5a66",
    storageBucket: "warehouse-d5a66.appspot.com",
    messagingSenderId: "7353011282",
    appId: "1:7353011282:web:bbae49527c94837288238b",
    measurementId: "G-XVVFBNN4QT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;