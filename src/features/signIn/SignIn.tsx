import './SignIn.scss'

import { useState, useEffect } from 'react'

import Header from '../../components/Header/Header'
const SignIn = () => {

  const handleLogin = () => {

  }

  return (
    <div className="sign-in-container">
      <Header />
      <div className="content">
        <h1>Sign In</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
          <button type="submit" className="submit">Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn