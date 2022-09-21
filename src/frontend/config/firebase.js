// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvyrpwIIMQAMg-JkAvopi5_FWcJ6R6D74",
  authDomain: "hospital-image.firebaseapp.com",
  projectId: "hospital-image",
  storageBucket: "hospital-image.appspot.com",
  messagingSenderId: "466166267254",
  appId: "1:466166267254:web:ff0fd07880fe42895b4e57",
  measurementId: "G-CNQEMTEDY5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)