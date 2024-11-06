import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAW6Egh1dQZNVQorpdsOVtJLrah10OAqoY",
    authDomain: "todo-firebase-e4183.firebaseapp.com",
    projectId: "todo-firebase-e4183",
    storageBucket: "todo-firebase-e4183.firebasestorage.app",
    messagingSenderId: "310912846062",
    appId: "1:310912846062:web:d3f71675b231a432f00bff",
    measurementId: "G-SGPJ8ZYPX3"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);