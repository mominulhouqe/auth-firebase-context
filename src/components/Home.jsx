import React, { useContext } from 'react';
import { UserContext } from '../provider/AuthProvider';



const Home = () => {
    const user  = useContext(UserContext);
    return (
        <div>
            <h4>This is home :{user && <span>{user.displayName}</span>} </h4>
        </div>
    );
};

export default Home;