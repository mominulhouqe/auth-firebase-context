import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase_config';



export const UserContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const singIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        return signOut(auth)
    }
    // state handle
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, cuurentUser => {

            setUser(cuurentUser)
            setLoading(false)
        });
        return unsubcribe();
    }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        singIn,
        logOut

    }
    return (
        <UserContext.Provider value={authInfo} >
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;


