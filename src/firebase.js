// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGhNeKPmySmhzTEY6qULMqiN23LLDefaE",
  authDomain: "test2-67c24.firebaseapp.com",
  projectId: "test2-67c24",
  storageBucket: "test2-67c24.appspot.com",
  messagingSenderId: "855936820644",
  appId: "1:855936820644:web:30a69d22cbe1484a410d31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);