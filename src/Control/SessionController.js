import React, {useState, useContext, useEffect} from 'react'
import {auth} from "./DatabaseController";
import {signOut } from 'firebase/auth';



const AuthContext = React.createContext();


export function useAuth(){
    return useContext(AuthContext);
}


export function AuthProvider({children}) {

    const[currentUser, setCurrentUser] = useState();
    const[loading, setLoading] = useState(true);

    


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
        logout,
    };

  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
    
  )
}
