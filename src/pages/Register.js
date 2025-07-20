import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      password,
      role: 'user',
    };

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const exists = users.find((u) => u.email === email);

    if (exists) {
      alert('User already exists');
      return;
    }

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registered successfully!');
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <h2>Register</h2>
      <form onSubmit={handleRegister} style={styles.form}>
        <input type="text" placeholder="Name" value={name}
          onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Register</button>
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

export default Register;
