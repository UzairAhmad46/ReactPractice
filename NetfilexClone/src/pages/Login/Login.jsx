import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import './Login.css';

const Login = () => {
  const [signState, setSignState] = useState('Sign In'); // Initialize state without spaces

  return (
    <>
      <div className="Login">
        <img src={logo} alt="Netflix Logo" className="login-logo" />
        <div className="login-form">
          <h1>{signState}</h1>
          <form>
            {/* Render name input only for 'Sign Up' */}
            {signState === 'Sign Up' && (
              <input type="text" placeholder="Your name" />
            )}
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Enter your password" />
            <button>{signState}</button>
            <div className="form-help">
              <div className="remember">
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>
          <div className="form-switch">
            {/* Switch between Sign In and Sign Up */}
            {signState === 'Sign In' ? (
              <p>
                New to Netflix?{' '}
                <span
                  onClick={() => {
                    setSignState('Sign Up');
                  }}
                >
                  Sign Up Now
                </span>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <span
                  onClick={() => {
                    setSignState('Sign In');
                  }}
                >
                  Sign In Now
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
