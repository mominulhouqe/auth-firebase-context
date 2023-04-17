import React, { createContext } from 'react';

export const UserContext = createContext(null);


const AuthProvider = ({children}) => {
    const user = { displayName: "nahid"}
    return (
        <UserContext.Provider value={user} >
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;