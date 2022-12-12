// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe9335rj88p7VZUbH-iHqkpxWP-YMYaMM",
  authDomain: "metaverse-91497.firebaseapp.com",
  projectId: "metaverse-91497",
  storageBucket: "metaverse-91497.appspot.com",
  messagingSenderId: "837968587047",
  appId: "1:837968587047:web:b4a9f7b2373cea79636102",
  measurementId: "G-3Y1N11RG28",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
