import {signUp} from './DatabaseController';

/**
 * This function calls the database controller sign up to sign up a new user.
 * @param {string} email Email address of the user
 * @param {string} password Password of the user
 * @param {string} name Name of the user
 * @param {number} phoneNo Phone number of the user
 * @param {string} description Description of the user
 * @param {string} profileImg Profile Image Link of the user.
 */
export const SignUp = async (email, password, name, phoneNo, description, profileImg) => {

    try{
   await signUp(email, password, name, phoneNo, description, profileImg);
    }
    catch{
      console.log("error");
    }

    
  
  
  
  
}
