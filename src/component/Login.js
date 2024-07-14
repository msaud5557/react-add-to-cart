import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/AuthSlice';  // Updated import statement
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginEvent = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    navigate('/');
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form className='form-group custom-form' onSubmit={handleLoginEvent}>
        <label>Email</label>
        <input
          type="email"
          required
          name="email"
          placeholder="Enter your email"
          className='form-control'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder='Enter Your Password'
          className='form-control'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type='submit' className='btn btn-success btn-md'>LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
