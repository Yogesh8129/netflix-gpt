// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLEVVjObEagtW2-GzGRpzrGBcuMDarBHA",
  authDomain: "netflixgpt-26f9f.firebaseapp.com",
  projectId: "netflixgpt-26f9f",
  storageBucket: "netflixgpt-26f9f.appspot.com",
  messagingSenderId: "315470320128",
  appId: "1:315470320128:web:7f368aa31dd703d1c83ee5",
  measurementId: "G-TKBZ4E9BJP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();