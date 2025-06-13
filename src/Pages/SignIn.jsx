import React from "react";
import { Link } from "react-router";

const SignIn = () => {
  return (
    <div>
      <div className="card bg-base-100 mx-auto my-[10%] max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-4xl">Sign In now...</h2>
          <form className="fieldset">
            <label className="label">Full Name</label>
            <input type="text" className="input" placeholder="Full Name" />
            <label className="label">Contact No</label>
            <input type="number" className="input" placeholder="Contact Number" />
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Create Account</button>
          </form>
          <Link to={'/login'}>Back to Login</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
