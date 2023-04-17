import React, { useContext } from 'react';
import { UserContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useContext(UserContext);

    if(user){
        return children;

    }

    return (
    <Navigate to='/login' replace={true}></Navigate>
    );
};

export default PrivateRoute;