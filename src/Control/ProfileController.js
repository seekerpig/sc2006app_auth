import { async } from '@firebase/util';
import { areArraysEqual } from '@mui/base';
import { amber } from '@mui/material/colors';
import React from 'react'
import { useState, useEffect,useLayoutEffect } from "react";
import Game from '../Entity/Game';
import User from "../Entity/User";
import { getAGame, getGames, retrieveAUser } from "./DatabaseController";
import { GameInfo,GetGames } from './GamesInfoController';




  



export const retrieveProfile = (userId) => {
  //SO basically here, need to first useAuth from sessioncontroller and check whether if there is a currentUser
  //If no current User, then show alert or something

  //if there is currentUser, retrieve data from databasecontroller (need create a new function in databasecontroller.js to retrieve data based on id and collection)
  

    const [user2, setUser] = useState(null);
    
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false);

    
  
    console.log(userId);
    useLayoutEffect(() => {
      (async () => {
        try {
          const doc =  await retrieveAUser(userId);
          
          let results;
          if (doc.data() == null) {
            setIsPending(false);
            setError("Could not find that user");
          } else {
            console.log("Data successfully retrieved");
            console.log(doc.data());
            results = new User( 
              
              userId,
              doc.data().name,
              doc.data().email,
              doc.data().phoneNo,
              doc.data().description,
              doc.data().profileUrl,
              doc.data().gameList
            );
          
          console.log(results);
          setUser(results);
          
        }
        } catch (err) {
          console.log(err);
          console.log(userId)
          console.log('Error occured when fetching User');
        }
      })();
    }, []);
    
    console.log(user2);
  
    return { error, isPending, user2 };
  //this function is not yet implemented in profile page, so need to import into profile page also, cause profile page is currently hardcoded.
}

export const retrieveUserGame = (userId) => {
  const [games2, setGame] = useState(null);
    
   // const [isPending, setIsPending] = useState(false);
    //const [error, setError] = useState(false);
  
  useEffect(() => {
    (async () => {
  try{
    const doc = await retrieveAUser(userId);
    const allData = await getGames();
    const gameObjectList = [];
    const listOfGame = Object.values(doc.data().gameList);
    
    let result;

    listOfGame.forEach(x => {
      allData.forEach((doc) => {
        if(doc.id===x){
          
          const userListArray = Object.values(doc.data().userList);
          gameObjectList.push(new Game(doc.id,doc.data().title,doc.data().sportType,doc.data().description,doc.data().startTime,doc.data().endTime,doc.data().location,doc.data().maxPlayers,userListArray.length,doc.data().userList))
        }
      })
    })
        
      setGame(gameObjectList);
    //console.log(allData);
    //console.log("List of game");
    //console.log(listOfGame);
    console.log(gameObjectList);
    //return (gameObjectList);
    //gameObjectList;

  }
  catch(e){
    console.log(e);
  } })();
},[]);
console.log("Game Results");
//console.log(gameObjectList)
//return gameObjectList
return{games2 };
}

const listGenerator = (gameId) => {
  console.log("Called");
  console.log(gameId);
  
  

}
