import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, getDocs, where, query, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";

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

// Generic function to get a entire collection from Firebase (Games, Users, or Facilities)
export const getCollection = () => {

  const [games, setGames] = useState(null);

  useEffect(() => {
    let ref = collection(db, "Games");
    getDocs(ref).then((snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        let id = {
          gameId: doc.id,
        }
        let data = Object.assign(id, doc.data());
        results.push(
          data
        );
      });
      setGames(results);
    });
    // return () => unsub();
  }, []);

  return { games };
}

export const getFilteredGames = (sportType) => {

  const [games, setGames] = useState(null);


  useEffect(() => {
    const ref = collection(db, "Games");
    const q = query(ref, where("sportType", "==", sportType));

    const unsub = onSnapshot(q, (querySnapshot) => {
      const results = [];
      querySnapshot.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setGames(results);
    });
    return () => {
      unsub();
    }
  }, []);

  console.log(games);
  return { games };
}

export const login = (email, password) => {
  console.log('trying to login');
  return signInWithEmailAndPassword(auth, email, password);
}

export const signUp = (email, password, name, phoneNo, description, profileImg) => {
  console.log('hello sign up');
  return createUserWithEmailAndPassword(auth, email, password);
  //NEED CODE HERE TO DEAL W CREATING ENTITY in db with name, phone no etc.. and profile img
}



export const getQuery = async () => {

  let ref = collection(db, "Games");
  return await getDocs(ref);
  
}





