import React, {useState, useContext, useEffect} from 'react'
import {auth} from "./DatabaseController";
import {signOut } from 'firebase/auth';



const AuthContext = React.createContext();

/**
 * Returns current user and logout function. Used to check if there is a current logged in user or a function to log out.
 * @returns currentUser and logout
 */
export function useAuth(){
    return useContext(AuthContext); //returns currentUser and logout function
}

/**
 * This method is used to provide authentication context to all its childrens
 * 
 * @returns a React Component for propagating context to its children
 */
export function AuthProvider({children}) {

    const[currentUser, setCurrentUser] = useState();
    const[loading, setLoading] = useState(true);

    

    /**
     * This method is for logging out the user, it will call firebase to logout
     */
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
