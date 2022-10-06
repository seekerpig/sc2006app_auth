//import React from 'react'
import {joinAGame} from "./DatabaseController"

export const JoinGame = async (gameId,userId) => {
  //SO basically here, need to first useAuth from sessioncontroller and check whether if there is a currentUser
  //If no current User, then show alert or something
  console.log("In join game");
  
  if(userId === null){
    console.log("something wong");
    const error = {
      type:400
    }
    throw error;
  }
  
    const result = await joinAGame(gameId,userId);
    console.log(result);
    if(result === 200){
      console.log("triggered");
      const error = {
        type:200
      }
      throw error;
    }
    
  
 


  //if there is a current user, add user to the game in firestore
  //AND change the attribute of the user gamelist in database by creating a new function in DatabaseController.js

  //need to import this function into DetailedGamePage Code
}
