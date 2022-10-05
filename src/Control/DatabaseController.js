import { initializeApp } from "firebase/app";
import { useContext } from "react";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore,useAuth, collection, getDocs, doc, getDoc,setDoc,addDoc,updateDoc } from "firebase/firestore";
import Game from "../Entity/Game";
import User from "../Entity/User";
import { getStorage, ref, uploadBytes,uploadBytesResumable, getDownloadURL } from "firebase/storage";
import * as React from "react";
import {JoinGame} from "./JoinGameController";


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

// export const getCollection = () => {

//   const [games, setGames] = useState(null);

//   useEffect(() => {
//     let ref = collection(db, "Games");
//     getDocs(ref).then((snapshot) => {
//       let results = [];
//       snapshot.docs.forEach((doc) => {
//         let id = {
//           gameId: doc.id,
//         }
//         let data = Object.assign(id, doc.data());
//         results.push(
//           data
//         );
//       });
//       setGames(results);
//     });
//     // return () => unsub();
//   }, []);

//   return { games };
// }


export const login = (email, password) => {
  console.log('trying to login');
  return signInWithEmailAndPassword(auth, email, password);
}

export const signUp = (email, password, name, phoneNo, description, profileImg) => {
  console.log('hello sign up');
  const storage = getStorage();
  
  
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    const storageRef = ref(storage, 'images/' + user.uid);
    console.log(user.uid);
    const uploadTask = uploadBytesResumable(storageRef, profileImg);
  
  // Register three observers:
  // 1. 'state_changed' observer, called any time the state changes
  // 2. Error observer, called on failure
  // 3. Completion observer, called on successful completion
  uploadTask.on('state_changed', 
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    }, 
    (error) => {
      // Handle unsuccessful uploads
      switch (error.code) {
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          // User canceled the upload
          break;
        case 'storage/unknown':
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    }, 
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setDoc(doc(db,"Users",user.uid),{
          name: name,
          email:email,
          phoneNo:phoneNo,
          description:description,
          profileUrl:downloadURL,
          gameList: []
  
  
        });
      });
    }
  );
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  
  
  
  //return signInWithEmailAndPassword(auth, email, password);
  

  //NEED CODE HERE TO DEAL W CREATING ENTITY in db with name, phone no etc.. and profile img
}



export const getGames = async () => {

  let ref = collection(db, "Games");
  return await getDocs(ref);
  
}

export const getAGame = async (gameId) => {
  console.log("Get a Game");
  const ref = doc(db, "Games", gameId);
  return await getDoc(ref);
  
}

export const retrieveAUser = async  (userId) => {
  //console.log("Get a Game");
  const ref = doc(db, "Users", userId);
  return await getDoc(ref);
  
}

export const createAGame = async (title, location, sportType, startDate, endDate, description, maxPlayers,creator) => {
  //const gameDocRef = doc(db, "Games");
  const activeUser = await getDoc(doc(db,"Users",creator));
  console.log(activeUser.data().uid);

  //console.log(activeUser.data().gameList);

  await addDoc(collection(db, "Games"), {
    currentPlayers: 1,
    description: description,
    startTime: new Date(startDate),
    endTime: new Date(endDate),
    location: location,
    sportType: sportType,
    title: title,
    maxPlayers: maxPlayers,
    userList: []
  }).then(docRef => {
    console.log(docRef.id);
    console.log(creator);
    JoinGame(docRef.id,creator);
  })
  }

  export const joinAGame = async(gameId,userId)=>{
    const game = await getDoc(doc(db,"Games",gameId));
 
    const gameListArray = Object.values(game.data().userList);
    if (gameListArray.includes(userId)){
      
      console.log("Duplicate games");
      return 200;
      
      
      
    }
    else{
    
    gameListArray.push(userId);

    const user = await getDoc(doc(db,"Users",userId));
    const userListArray = Object.values(user.data().gameList);
    
    userListArray.push(gameId);
    const player = game.data().currentPlayers+1;
    //player = player +1;
    //console.log(player);
    console.log("Player count = ");
    console.log(user.data());
    console.log("Player below");
    console.log(player);
    console.log("Game is here");
    console.log(game.data());
    updateDoc(doc(db,"Games",gameId),{
        currentPlayers: player,
        userList: gameListArray
    })
    updateDoc(doc(db,"Users",userId),{
      gameList:userListArray
    })
    return 100;
  }

  }
