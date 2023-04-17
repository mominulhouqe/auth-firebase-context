import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(UserContext);

  const handleLogOut = () => {
    logOut()
      .then(result => {

      })
      .catch(error => {
        console.log(error.message);
      })
  }
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">Auth</a>
        <Link className="mx-5" to="/">Home</Link>
        <Link className="mx-5" to="/order">Order</Link>
        {
          user && <Link className="mx-5" to="/profile">Profile</Link>
        }
        <Link className="mx-5" to="/login">Login</Link>
        <Link className="mx-5" to="/register">Register</Link>
        {
          user ? <> <small>{user.email}</small>  <button onClick={handleLogOut} className="btn btn-success mx-5">Sing Out</button>  </> : <Link to='/login' className="btn btn-success mx-5">Login</Link>
        }
      </div>
    </div>
  );
};

export default Header;
