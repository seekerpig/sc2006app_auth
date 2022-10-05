import { async } from '@firebase/util';
import React from 'react'
import {joinAGame} from "./DatabaseController"

export const JoinGame = (gameId,userId) => {
  //SO basically here, need to first useAuth from sessioncontroller and check whether if there is a currentUser
  //If no current User, then show alert or something
  console.log("In join game");
  
  React.useEffect(() => {
    (async () => {
  try{
    console.log(joinAGame(gameId,userId));
  }
  catch(e){
    console.log("triggered");
    console.log(e);
    throw e;
  }
})();
}, []);

  


  //if there is a current user, add user to the game in firestore
  //AND change the attribute of the user gamelist in database by creating a new function in DatabaseController.js

  //need to import this function into DetailedGamePage Code
}
