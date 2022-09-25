import React from 'react'
import {signUp} from './DatabaseController';

export const SignUp = (email, password, name, phoneNo, description, profileImg) => {
  return signUp(email, password, name, phoneNo, description, profileImg);
}
