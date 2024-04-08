// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog2-30a7b.firebaseapp.com",
  projectId: "mern-blog2-30a7b",
  storageBucket: "mern-blog2-30a7b.appspot.com",
  messagingSenderId: "726250672184",
  appId: "1:726250672184:web:3d89a11979feb8fac0d6cd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);