"use client";
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', { email, password });
      console.log(response.data);
      // Handle the token, redirect, or update state as needed
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
    }
  };

  return (
    <div className='container'>

      <div className='authorize'>
        <h1 className='text-center m-0'>Sign in</h1>
        <br />
        <br />
        <form action="">
          <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

          <div className='authorize_remember'>
            <label htmlFor="rem">
            <input id='rem' type="checkbox" /> Remember me
            </label>
          </div>

          <button className="btn btnPrimary w-100" onClick={handleLogin}>Login</button>
        </form>
      </div>
      
      
    </div>
  );
};

export default Login;
