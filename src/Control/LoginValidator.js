import {login} from './DatabaseController';
import { useAuth } from './SessionController';

/**
 * This function takes in user's email address and password and confirm login
 * @param {string} email Email Address of the user
 * @param {string} password Password of the user
 * @returns Results of login
 */
export const loginUser = (email,password) => {
  try{
    return login(email,password);
  }
  catch{
    console.log("error occured");
  }
  
  //after login is successful, sessioncontroller automatically checks for any updates on user authentication (no need to do extra code here)

}

export const checkLoggedIn = () => {
    const currentUser = useAuth();
    return currentUser;
}

