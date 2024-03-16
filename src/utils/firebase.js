// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGTYRXnIvHXQwwltmiD8MYo5mvN-8dSNM",
  authDomain: "netflixgpt-2452f.firebaseapp.com",
  projectId: "netflixgpt-2452f",
  storageBucket: "netflixgpt-2452f.appspot.com",
  messagingSenderId: "740646969386",
  appId: "1:740646969386:web:4d2ce90b593e6caa736353",
  measurementId: "G-CXTJ9777QM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
