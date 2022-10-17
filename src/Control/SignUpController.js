import {signUp} from './DatabaseController';
import { useAuth } from './SessionController';

export const isLoggedin = () => {
  const currentUser = useAuth();
  return currentUser;
}
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
      const a =  await signUp(email, password, name, phoneNo, description, profileImg);
      console.log("a is here");
      console.log(a);
      return 200;
    }
    catch{
      console.log("error");
      return 400;
    }
    

    
  
  
  
  
}
