import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './loginSignUI.css'; // Import the CSS file

function AuthPage({ setLoggedIn }) {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [userEmail, setUserEmail] = useState(""); // Replaced username with userEmail
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const login = () => {
    alert('login');
  };

  const signUp = () => {
    // Sign-up logic can be added here if needed
    alert('Sign-up functionality is currently not implemented.');
  };

  return (
    <div className="auth-page">
      <h3 style={{color:"#008bd4"}}> This is a Basic UI of React Login With sign To start working on any demo project </h3>
      <div className="auth-container">
        {isLogin ? (
          <>
            <h1 className="auth-title">Login</h1>
            {error && <div className="error">{error}</div>}
            <input
              type="email"
              className="auth-input"
              placeholder="Email"
              value={userEmail} // Updated
              onChange={(e) => setUserEmail(e.target.value)} // Updated
            />
            <input
              type="password"
              className="auth-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="auth-button" onClick={login}>Login</button>
            <button className="switch-button" onClick={() => setIsLogin(false)}> Switch to  Sign Up</button>
          </>
        ) : (
          <>
            <h1 className="auth-title">Sign Up</h1>
            {error && <div className="error">{error}</div>}
            <input
              type="email"
              className="auth-input"
              placeholder="Email"
              value={userEmail} // Updated
              onChange={(e) => setUserEmail(e.target.value)} // Updated
            />
            <input
              type="password"
              className="auth-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              className="auth-input"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button className="auth-button" onClick={signUp}>Sign Up</button>
            <button className="switch-button" onClick={() => setIsLogin(true)}> Switch to  Login</button>
          </>
        )}
      </div>
    </div>
  );
}

export default AuthPage;
