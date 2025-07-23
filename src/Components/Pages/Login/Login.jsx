import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {

  const [login, setLogin] = useState('signup');
  return (
    <div className='login'>
      <img src={logo} alt="Netflix Clone Logo" className='login-logo' />
      <div className="login-form">
        <h1>{login === 'signup' ? 'Sign Up' : 'Log In'}</h1>
        <form>
          <div className="form-group">
            {login === 'signup' && <input type="text" id="username" name="username" placeholder='Your Name' required />}

            <input type="email" id="email" placeholder='Email' name="email" required />
            <input type="password" placeholder='Password' id="password" name="password" required />
          </div>
          <button type="submit" className='login-button'>{login === 'signup' ? 'Sign Up' : 'Log In'}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="remember" name="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <p>Need Help? </p>
          </div>
        </form>
        <div className="form-switch">
          {login === 'signup' ? (
            <p>Already have an account? <span onClick={() => setLogin('login')}>Log In Now</span></p>
          ) : (
            <p>Don't have an account? <span onClick={() => setLogin('signup')}>Sign Up Now</span></p>
          )}
        </div>
        <div className="form-terms">
          <p>By continuing, you agree to Netflix Clone's Terms of Use and Privacy Policy.</p>
        </div>
      </div>
    </div>
  )
}

export default Login
