import React from 'react'
import { useState, useEffect,useLayoutEffect } from "react";
import User from "../Entity/User";
import { retrieveAUser } from "./DatabaseController";

export const retrieveProfile = (userId) => {
  //SO basically here, need to first useAuth from sessioncontroller and check whether if there is a currentUser
  //If no current User, then show alert or something

  //if there is currentUser, retrieve data from databasecontroller (need create a new function in databasecontroller.js to retrieve data based on id and collection)
  

    const [user2, setUser] = useState(null);
    const [games, setGame] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false);
  
  
    useLayoutEffect(() => {
      (async () => {
        try {
          const doc =  await retrieveAUser(userId);
          console.log(doc.data());
          let results;
          if (doc.data() == null) {
            setIsPending(false);
            setError("Could not find that user");
          } else {
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
          setGame(doc.data().gameList);
        }
        } catch (err) {
          console.log(err);
          console.log(userId)
          console.log('Error occured when fetching User');
        }
      })();
    }, []);
    
    console.log(user2);
  
    return { error, isPending, user2,games };
  //this function is not yet implemented in profile page, so need to import into profile page also, cause profile page is currently hardcoded.
}
