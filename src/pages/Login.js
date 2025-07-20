import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Fake user authentication
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      login(user);
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    padding: '30px',
    maxWidth: '400px',
    margin: 'auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
};

export default Login;
