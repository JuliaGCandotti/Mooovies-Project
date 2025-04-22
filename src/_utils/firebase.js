// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_OsN4PucR-5BLmVeg9rO1Q9orYAVsmqI",
  authDomain: "mooovies-dbd43.firebaseapp.com",
  projectId: "mooovies-dbd43",
  storageBucket: "mooovies-dbd43.firebasestorage.app",
  messagingSenderId: "550309694226",
  appId: "1:550309694226:web:d6cdeec100aa139b33c1cb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
auth.useDeviceLanguage()
