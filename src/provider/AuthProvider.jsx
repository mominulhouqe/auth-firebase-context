import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase_config';



export const UserContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const singIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = (email, password) => {
        return signOut(auth, password, email)
    }


    // state handle
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, cuurentUser => {

            setUser(cuurentUser)
        });
        return unsubcribe();
    }, [])

    const authInfo = {
        user,
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


