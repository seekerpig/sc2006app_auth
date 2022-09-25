import React from 'react'

export const CreateNewGame = (title, location, sportType, startDate, endDate, description, maxPlayers) => {
  //SO basically here, need to first useAuth from sessioncontroller and check whether if there is a currentUser
  //If no current User, then show alert or something

  //if there is a current user, ATTEMPT to create a new account in firestore by calling a new function from databasecontroller (need to make the function)
  //if attempt fails, it means that a record alr exist, return false or show alert to show fail or something.

  //need to import this function into CreateGameForm page
}
