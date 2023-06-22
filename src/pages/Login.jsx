import React, { useState } from 'react';
import '../style/login.scss';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (username, password) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.status === 200) {
        const data = await response.json();
        const { foundUser, encodedToken } = data;
        localStorage.setItem('encoded-token', encodedToken);
        navigate('/');
      } else {
        console.error('Invalid credentials. Please try again.');
        toast.error('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error(error);
      toast.error(error);
    }
  };

  const guestloginHandler = () => {
    const guestusername = 'pallavi';
    const guestuserpassword = 'p123';
    handleLogin(guestusername, guestuserpassword);
  };

  const loginHandler = () => {
    handleLogin(username, password);
  };

  return (
    <>
      <div className='login-form border-4'>
        <h1 className='login-heading text-4xl text-center font-semibold'>Login Page</h1>
        <div>
          <input
            placeholder='Username'
            className='input-box'
            type='uname'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            placeholder='Password'
            className='input-box'
            type='pass'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button className='login-button' onClick={loginHandler}>
            Login
          </button>
          <br />
          <button className='login-button' onClick={guestloginHandler}>
            Login as Guest User
          </button>

          <Link to='/signup'>
            <p className='login-signup-text'>Need an Account? Sign Up</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
