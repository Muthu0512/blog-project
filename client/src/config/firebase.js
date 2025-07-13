// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR8jS4C3vQ43b7SjB-uDMOTgEwkFhTqQk",
  authDomain: "blog-project-f6414.firebaseapp.com",
  projectId: "blog-project-f6414",
  storageBucket: "blog-project-f6414.firebasestorage.app",
  messagingSenderId: "881092650594",
  appId: "1:881092650594:web:5e2241b2910fe4a4ef933b",
  measurementId: "G-J5FHQH9K3L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
// const analytics = getAnalytics(app)

export default auth