// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-57c9b.firebaseapp.com",
  projectId: "mern-blog-57c9b",
  storageBucket: "mern-blog-57c9b.appspot.com",
  messagingSenderId: "119476056232",
  appId: "1:119476056232:web:1c44f9144439e67adb529d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
