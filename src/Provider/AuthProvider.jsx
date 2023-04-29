import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase_config';
import { useState } from 'react';
import { useEffect } from 'react';
export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const[lodding,setLodding] = useState(true)
   
    const createUser=(email,password)=>{
        setLodding(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn=(email,password)=>{
        setLodding(true)
return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
return signOut(auth)
    }

    useEffect(()=>{
        const unSubsCribe= onAuthStateChanged(auth,loggedUser=>{
            setLodding(false)
            setUser(loggedUser)
        })

        return unSubsCribe
    },[])

    const authInfo ={
        user,
        lodding,
         createUser,
         logIn,
         logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;