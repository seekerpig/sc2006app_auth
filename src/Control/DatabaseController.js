import { initializeApp } from "firebase/app";

import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, getDocs, doc, getDoc,setDoc,addDoc,updateDoc } from "firebase/firestore";

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
//import { isFunctionDeclaration } from "typescript";

import {JoinGame} from "./JoinGameController";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// the firebaseConfig is only stored here for reference purpose
// during production, it will be stored into a env file
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

/**
 * This methods take in email and password to retrieve user from firebase/auth
 * @param {string} email 
 * @param {string} password 
 
 */
export const login = (email, password) => {
  console.log('trying to login');
  return signInWithEmailAndPassword(auth, email, password);
}
/**
 * This methods takes in the different parameters and create a user in firebase/auth and store the relevant details into firestore and firebase.
 * @param {string} email 
 * @param {string} password 
 * @param {string} name 
 * @param {number} phoneNo 
 * @param {string} description 
 * @param {string} profileImg 
 * @returns 
 */
export const signUp = (email, password, name, phoneNo, description, profileImg) => {
  console.log('hello sign up');
  const storage = getStorage();
  
  try{
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
        default:
          console.log("Do something");
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
        default:
          console.log("Do something");
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
        //return {type:200}
      });
    }
  );
    // ...
  })
  .catch((error) => {
    //const errorCode = error.code;
    console.log("Error occurred in Sign Up")
    //console.error(error.code);
    
    //return error.code;
    //const errorMessage = error.message;
    // ..
  });
}
catch(error) {
  console.log("Error in Sign up");

  console.log(error);
}

  
  return "successful";
  
  //return signInWithEmailAndPassword(auth, email, password);
  

  //NEED CODE HERE TO DEAL W CREATING ENTITY in db with name, phone no etc.. and profile img
}

/**
 * This methods interact with firestore and retrieve all locations object from it.
 * @returns All SportFacilities object in the database
 */
export const getFacilities = async() => {
  //console.log("Get a Game");
  let ref = collection(db, "Facilities");
  return await getDocs(ref);

}
/**
 * This methods takes in one facilities and insert into database if database do not contain the same information.
 */
export const insertFacilities = async (facilities) => {
  const currentFacilities = await getDocs(collection(db,"Facilities"));
  var flag = 0
  currentFacilities.docs.forEach((doc) => {
    if(facilities.id === doc.data().placemarkid){
      console.log("something matched");
      flag = 1;
    }
  })
  if(flag === 0){
    console.log("Adding")
  await addDoc(collection(db,"Facilities"),{
    placemarkid:facilities.id,
    name:facilities.name,
    coordinates:facilities.coordinates
  })
  }
  //console.log(currentFacilities);

}
/**
 * this method returns all game object
 * @returns all game object 
 */
export const getGames = async () => {

  let ref = collection(db, "Games");
  return await getDocs(ref);
  
}
/**
 * This method take in the gameId and retrieve details of the relevant game.
 * @param {string} gameId 
 * @returns a single game object with the corressponding gameId
 */
export const getAGame = async (gameId) => {
  console.log("Get a Game");
  const ref = doc(db, "Games", gameId);
  return await getDoc(ref);
  
}
/**
 * This method take in the userId and retrieve details of the user.
 * @param {string} userId 
 * @returns a single user object with the corresponding userId
 */
export const retrieveAUser = async  (userId) => {
  //console.log("Get a Game");
  const ref = doc(db, "Users", userId);
  return await getDoc(ref);
  
}

/**
 * This method takes in the below parameters and insert a game into the database.
 * @param {string} title 
 * @param {string} location 
 * @param {string} sportType 
 * @param {Date} startDate 
 * @param {Date} endDate 
 * @param {string} description 
 * @param {string} maxPlayers 
 * @param {string} creator 
 */
export const createAGame = async (title, location, sportType, startDate, endDate, description, maxPlayers,creator) => {
  //const gameDocRef = doc(db, "Games");
  const activeUser = await getDoc(doc(db,"Users",creator));
  console.log(activeUser.data().uid);

  //console.log(activeUser.data().gameList);

  await addDoc(collection(db, "Games"), {
    currentPlayers: 0,
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
/**
 * This methods take in the gameId and userId and if user do not have the game user will be able to join the game.
 * @param {string} gameId 
 * @param {string} userId 
 * @returns a code for success/failure
 */
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
