// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWT1c6e4b53wJSz-4wX3VHw_se9-XyplY",
  authDomain: "mooovies-project.firebaseapp.com",
  projectId: "mooovies-project",
  storageBucket: "mooovies-project.firebasestorage.app",
  messagingSenderId: "1074457400639",
  appId: "1:1074457400639:web:9203c6e6141ac6a67bef8a",
  measurementId: "G-0F40QPVPSY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
auth.useDeviceLanguage()
