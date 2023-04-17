import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

const handleRegister = (event) =>{
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const name = form.name.value;
  const password = form.password.value;
}

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register Now</h1>

          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' required placeholder="Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' required placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" required name='password' placeholder="password" className="input input-bordered" />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className='mb-4 ml-4 '>
            <Link to='/login' className="link link-primary">Already have an Account  
            </Link>
            </p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Register;