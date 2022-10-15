
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

    if(currentUser === null){
      console.log("No user detected do something");
      const error = {
        type:400
      }
      throw error;  
    }
    
    else{
      console.log(currentUser.uid);
    createAGame(title,location,sportType,startDate,endDate,description,maxPlayers,currentUser.uid)
    }



}
/**
 * This function is called to get all the facilities in database.
 * @returns {facilities[]} facilities array
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
