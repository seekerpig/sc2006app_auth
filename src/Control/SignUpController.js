import {signUp} from './DatabaseController';

export const SignUp = async (email, password, name, phoneNo, description, profileImg) => {

  
   await signUp(email, password, name, phoneNo, description, profileImg).then(e => {console.log(e)});
    

    
  
  
  
  
}
