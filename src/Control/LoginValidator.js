import React from 'react'
import {login} from './DatabaseController';


export const loginUser = (email,password) => {
  
  return login(email,password);

}

