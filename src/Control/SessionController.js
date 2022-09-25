import React, {useState, useContext, useEffect} from 'react'
import {auth} from "./DatabaseController";
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';


const AuthContext = React.createContext();


export function useAuth(){
    return useContext(AuthContext);
}


export function AuthProvider({children}) {

    const[currentUser, setCurrentUser] = useState();
    const[loading, setLoading] = useState(true);

    function signup(email,password)
    {
        console.log('hello sign up');
        return createUserWithEmailAndPassword(auth,email,password);
    }


    function logout()
    {
        console.log("trying to logout");
        signOut(auth).then(() => {
            console.log("logout successful");
        }).catch((error)=> {
            console.log("failed to logout");
        });
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })

        return unsubscribe;
    }, [])
    


    const value = {
        currentUser,
        signup,
        logout,
    };

  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
    
  )
}
