import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage({ setLoggedIn }) {
    const [username, setUsername] = useState('eve.holt@reqres.in');
    const [password, setPassword] = useState('cityslicka');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const login = async () => {
    try {
      const response = await axios.post('https://reqres.in/api/login', {
        email: username,
        password: password
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

  return (
    <div>
      <h1>Login</h1>
      {error && <div className="error">{error}</div>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default LoginPage;
