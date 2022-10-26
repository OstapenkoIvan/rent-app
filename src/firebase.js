// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//realtor-app-b8079 - firebase key

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJHycuBvnaADsgMa7Jvwhb5miGnKsZmVw",
  authDomain: "realtor-app-b8079.firebaseapp.com",
  projectId: "realtor-app-b8079",
  storageBucket: "realtor-app-b8079.appspot.com",
  messagingSenderId: "969992656018",
  appId: "1:969992656018:web:4a13decb838afab91a824b",
  measurementId: "G-S8YY2SW3JZ",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
