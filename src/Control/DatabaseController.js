// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtIYhQTwSkF8ZL75Vrd18lRLHsVsPx57E",
  authDomain: "sc2006app.firebaseapp.com",
  projectId: "sc2006app",
  storageBucket: "sc2006app.appspot.com",
  messagingSenderId: "258220254585",
  appId: "1:258220254585:web:8648b75b7750f54ebbfba8",
  measurementId: "G-Y97WP5YR5N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Intialize Firestore
const db = getFirestore();
const auth = getAuth(app);

export { db, auth }
// export { auth }

// export const auth = getAuth(app);

// export default app;