// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTFuihJpAWuofX71zbKdhyQzm2TQGieNI",
  authDomain: "dhadkanportfolio.firebaseapp.com",
  projectId: "dhadkanportfolio",
  storageBucket: "dhadkanportfolio.firebasestorage.app",
  messagingSenderId: "1039339716000",
  appId: "1:1039339716000:web:e1f014b2c83a3c8fe6f8c5",
  measurementId: "G-PR2YM333HD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);