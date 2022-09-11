import React, {useState, useContext, useEffect} from 'react'
import {auth} from "../firebaseconfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';


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

    function login(email,password)
    {
        console.log('trying to login');
        return signInWithEmailAndPassword(auth,email,password);
    }

    function logout()
    {
        console.log("trying to logout");
        return signOut(auth);
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
        login,
        logout

    };

  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
    
  )
}
