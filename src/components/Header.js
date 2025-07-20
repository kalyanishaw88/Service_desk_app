import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Header() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header style={styles.header}>
      <h2>Service Desk</h2>
      <nav>
        <Link to="/" style={styles.link}>Home</Link>
        {user ? (
          <>
            <Link to="/dashboard" style={styles.link}>Dashboard</Link>
            {user.role === 'admin' && (
              <Link to="/admin" style={styles.link}>Admin Panel</Link>
            )}
            <button onClick={handleLogout} style={styles.button}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/register" style={styles.link}>Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#2c3e50',
    color: '#fff',
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {
    marginRight: '15px',
    color: '#fff',
    textDecoration: 'none',
  },
  button: {
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    padding: '6px 12px',
    cursor: 'pointer',
  },
};

export default Header;
