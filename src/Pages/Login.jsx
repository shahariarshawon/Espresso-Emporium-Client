import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div>
      <div className="card bg-base-100 mx-auto my-[10%] max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
            <h2 className="text-4xl">Login </h2>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </div>
        <div>
            <p>Don't have an accout?</p>
            <Link to={'/signin'} >Create an account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
