import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>


      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">Auth</a>
        <Link className="mx-5" to="/">Home</Link>
        <Link className="mx-5" to="/login">Login</Link>
        <Link className="mx-5" to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Header;
