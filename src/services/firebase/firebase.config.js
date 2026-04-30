// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwXlF02FeozzbhlE0XIxMufdJbhUHoURQ",
  authDomain: "exclusive---ecommerce.firebaseapp.com",
  projectId: "exclusive---ecommerce",
  storageBucket: "exclusive---ecommerce.firebasestorage.app",
  messagingSenderId: "338423785004",
  appId: "1:338423785004:web:2a160d458b882835d91389",
  measurementId: "G-M8TF9SKF4Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);