// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0dbAHlZ8QO3wPHIireWmjVnW-xKGVDHk",
  authDomain: "espresso-emporium-ab71a.firebaseapp.com",
  projectId: "espresso-emporium-ab71a",
  storageBucket: "espresso-emporium-ab71a.firebasestorage.app",
  messagingSenderId: "80331215306",
  appId: "1:80331215306:web:b2f4a02e97c8aaeae6ff33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);