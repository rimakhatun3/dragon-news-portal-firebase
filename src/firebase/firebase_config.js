// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEjUwZ9rdM4qgZMHTuzx9lsinVJodwffE",
  authDomain: "dragon-news-portal-firebase.firebaseapp.com",
  projectId: "dragon-news-portal-firebase",
  storageBucket: "dragon-news-portal-firebase.appspot.com",
  messagingSenderId: "389138067326",
  appId: "1:389138067326:web:715444b6827e237f2e0d2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;