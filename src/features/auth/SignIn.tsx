import './SignIn.scss'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

import { useAppDispatch, useAppSelector } from '../../app/hook';

import { login } from '../../services/authService';
import Header from '../../components/Header/Header'
import URL_CONST from '../../constants/URL_const';
const SignIn = () => {
  // const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated); 
  useEffect(() => {
    if (isAuthenticated) {
      navigate(URL_CONST.HOME);
    }
  },[])
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login(username, navigate));
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
