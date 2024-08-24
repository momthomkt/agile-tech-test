import './SignIn.scss'

import { useState, useEffect } from 'react'

import { useDispatch } from 'react-redux';
import { login } from '../../services/authService';
import Header from '../../components/Header/Header'
import { AppDispatch } from '../../app/store';
const SignIn = () => {
  const dispatch: AppDispatch = useDispatch();
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login(username));
  };

  return (
    <div className="sign-in-container">
      <Header />
      <div className="content">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
          <button type="submit" className="submit">Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { login } from '../services/authService';

// const LoginPage: React.FC = () => {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     dispatch(login(email, password));
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
