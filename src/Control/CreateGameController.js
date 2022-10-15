
import {createAGame,getFacilities} from'./DatabaseController'


/**
 * This methods takes in the currents User and insert a new game into the database
 * @param {string} title 
 * @param {string} location 
 * @param {string} sportType 
 * @param {Date} startDate 
 * @param {Date} endDate 
 * @param {string} description 
 * @param {number} maxPlayers 
 * @param {User} currentUser 
 */
export const CreateNewGame = async (title, location, sportType, startDate, endDate, description, maxPlayers,currentUser) => {
//export const CreateNewGame = async => {
  //SO basically here, need to first useAuth from sessioncontroller and check whether if there is a currentUser
  //If no current User, then show alert or something
    
    
      //useAuth()
    if(currentUser === null){
      console.log("No user detected do something");
      const error = {
        type:400
      }
      throw error;  
    }
    

    //NEED SOME CODE HERE TO CREATE A NEW DOC IN FIRESTORE
    //NEED TO IMPORT CreateNewGame() from CreateGameController
    else{
      console.log(currentUser.uid);
    createAGame(title,location,sportType,startDate,endDate,description,maxPlayers,currentUser.uid)
    }


  //if there is a current user, ATTEMPT to create a new account in firestore by calling a new function from databasecontroller (need to make the function)
  //if attempt fails, it means that a record alr exist, return false or show alert to show fail or something.

  //need to import this function into CreateGameForm page
}
/**
 * 
 * @returns 
 */
export const getAllFacilities = async() => {
  var facilitiesArray = [];
  const testa = await getFacilities();
  testa.docs.forEach((doc) => (
    //console.log(doc.data().name);
    facilitiesArray.push(doc.data().name)
  ))
  //console.log(facilitiesArray);
  return facilitiesArray;
  //console.log(facilitiesArray);
  //return true;
  //return facilitiesArray;
}
