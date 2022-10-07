import {login} from './DatabaseController';


export const loginUser = (email,password) => {
  try{
    return login(email,password);
  }
  catch{
    console.log("error occured");
  }
  
  //after login is successful, sessioncontroller automatically checks for any updates on user authentication (no need to do extra code here)

}

