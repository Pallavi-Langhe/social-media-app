import React from 'react'
import { Link } from "react-router-dom";
import '../style/signup.scss';
import { useState } from "react";
import { toast } from 'react-toastify';

function Signup() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [reenterPassword, setReenterPassword] = useState('');
  const [isAccountCreated, setIsAccountCreated] = useState(false);

  const signupHandler = async () => {
    try {
      if (password !== reenterPassword) {
        toast.error('Passwords do not match');
        return;
      }
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fname, lname, email, username, password }),
      });

      if (response.ok) {
        toast.success('Account created successfully');
        setIsAccountCreated(true);
      } else {
        toast.error('Error creating account. Please try again.');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred. Please try again later.');
    }
  };


  return (
    <>
      <div className='signup-page border-4'>
        <h1 className="signup-heading text-4xl text-center font-semibold">Create New Account</h1>
        <div>
          <input placeholder="First Name" className='signup-input-box' value={fname}
            onChange={(e) => setFname(e.target.value)}></input>
          <input placeholder="Last Name" className='signup-input-box' value={lname}
            onChange={(e) => setLname(e.target.value)}></input>
          <input placeholder="Email Address" className='signup-input-box' value={email}
            onChange={(e) => setEmail(e.target.value)}></input>
          <input placeholder="Username" className='signup-input-box' value={username}
            onChange={(e) => setUsername(e.target.value)}></input>
          <input placeholder="Password" className='signup-input-box' value={password}
            onChange={(e) => setPassword(e.target.value)}></input>

          <input placeholder="Re-enter Password" className='signup-input-box' value={reenterPassword}
            onChange={(e) => setReenterPassword(e.target.value)}></input>

          <button className='signup-button' onClick={signupHandler}> Signup </button>

          <Link to='/login'> <p className='login-signup-text'>Aready Have Account? Login</p></Link>
        </div>
      </div>
    </>

  )
}

export default Signup