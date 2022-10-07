import {login} from './DatabaseController';


export const loginUser = (email,password) => {
  try{
    return login(email,password);
  }
  catch{
    throw "Error";
  }
  
  //after login is successful, sessioncontroller automatically checks for any updates on user authentication (no need to do extra code here)

}

