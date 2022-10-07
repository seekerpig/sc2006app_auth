import {signUp} from './DatabaseController';

export const SignUp = (email, password, name, phoneNo, description, profileImg) => {

  try{
    return signUp(email, password, name, phoneNo, description, profileImg);
  }
  catch{
    console.log("error occured");
  }
  
}
