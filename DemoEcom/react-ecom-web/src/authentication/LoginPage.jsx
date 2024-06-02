import "./LoginPage.css"
import React, { useState } from 'react';
import { useAuth } from "./auth";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      window.location.href = '/add-address';
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="loginForm">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
