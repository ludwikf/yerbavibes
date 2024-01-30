// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "yerbavibes-651c1.firebaseapp.com",
  projectId: "yerbavibes-651c1",
  storageBucket: "yerbavibes-651c1.appspot.com",
  messagingSenderId: "538027569573",
  appId: "1:538027569573:web:9506b436657545ba42384c",
  measurementId: "G-YWVTCSZ8GD",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
