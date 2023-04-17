import React, { createContext, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase_config';



export const UserContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

  const createUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password);
  }
const singIn = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password);
}



    const authInfo ={
        user,
        createUser,
        singIn
    }

    return (
        <UserContext.Provider value={authInfo} >
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;


