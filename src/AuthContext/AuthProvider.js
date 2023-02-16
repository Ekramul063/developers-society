import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';


import app from '../firebase/firebase.config';
const auth = getAuth(app);
export const AuthContext = createContext();
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true);
    const [user,setUser]=useState(null);
    const handleUserSignUp =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const handleUserSignIn =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }
    const googleSignIn = ()=>{
        return signInWithPopup(auth,provider);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=> unsubscribe;
    },[]);
    const authInfo={
       user,
        handleUserSignUp,
        handleUserSignIn,
        logOut,
        googleSignIn,
        loading,
    };
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;