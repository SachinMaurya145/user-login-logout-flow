import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './loginSignUI.css'; // Import the CSS file

function AuthPage({ setLoggedIn }) {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [username, setUsername] = useState('eve.holt@req768res.in');
  const [password, setPassword] = useState('cityslick875a');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const login = async () => {
    try {
      const response = await axios.post('https://reqres.in/api/login', {
        email: username,
        password: password,
      });
      const { token } = response.data;
      localStorage.setItem('token', token);
      setLoggedIn(true);
      alert('Login successful!');
      navigate('/home'); // Navigate to the home page after successful login
    } catch (error) {
      setError('Login failed. Please check your credentials.');
    }
  };

  const signUp = async () => {
    // Sign-up logic can be added here if needed
    alert('Sign-up functionality is currently not implemented.');
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        {isLogin ? (
          <>
            <h1 className="auth-title">Login</h1>
            {error && <div className="error">{error}</div>}
            <input
              type="text"
              className="auth-input"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              className="auth-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="auth-button" onClick={login}>Login</button>
            <button className="switch-button" onClick={() => setIsLogin(false)}> Sign Up</button>
          </>
        ) : (
          <>
            <h1 className="auth-title">Sign Up</h1>
            {error && <div className="error">{error}</div>}
            <input
              type="text"
              className="auth-input"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
            <button className="switch-button" onClick={() => setIsLogin(true)}> Login</button>
          </>
        )}
      </div>
    </div>
  );
}

export default AuthPage;
