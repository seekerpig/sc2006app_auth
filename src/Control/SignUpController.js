import {signUp} from './DatabaseController';

export const SignUp = async (email, password, name, phoneNo, description, profileImg) => {

  try{
    await signUp(email, password, name, phoneNo, description, profileImg);
  }
  catch{
    console.log("error occured");
    
  }
  
}
