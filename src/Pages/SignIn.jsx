import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const SignIn = () => {
  const {createUser}=use(AuthContext);
  const handleSignIn=e=>{
    e.preventDefault();
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;
    const name=form.name.value;
    const contact=form.contact.value;

    const userProfile={
      name,email,contact
    }
    //create user in the firebase
    createUser(email,password)
    .then(result=>{
      console.log(result.user)
      //saving profile in the database
      fetch('http://localhost:3000/users',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(userProfile)
      })
      .then(res=>res.json())
      .then(data=>{
        // console.log("after saving profile", data);
        if(data.insertedId)
        {
          Swal.fire({
                              position: 'top-end',
                              icon:'success',
                              title:'User has been saved',
                              timer:1500,
                              showConfirmButton:false
                          })
        }
      })
    })
    .catch(error=>{
      console.log(error);
    })

  }
  return (
    <div>
      <div>
        <p className="text-3xl">{createUser.email}</p>
      </div>

      <div className="card bg-base-100 mx-auto my-[10%] max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-4xl">Sign In now...</h2>
          <form onSubmit={handleSignIn} className="fieldset">
            <label className="label">Full Name</label>
            <input type="text" name="name" className="input" placeholder="Full Name" />
            <label className="label">Contact No</label>
            <input type="number" name="contact" className="input" placeholder="Contact Number" />
            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" />
            
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
