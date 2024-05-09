// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB20hZj4tqfFJK_3bBXo8qBE6y_zP0IdoI",
  authDomain: "connectify2-cb944.firebaseapp.com",
  projectId: "connectify2-cb944",
  storageBucket: "connectify2-cb944.appspot.com",
  messagingSenderId: "840301167727",
  appId: "1:840301167727:web:f684850306ba2411b0f99a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
