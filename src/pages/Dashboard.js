import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div style={styles.container}>
      <h2>Welcome, {user.name}</h2>
      <div style={styles.links}>
        <Link to="/raise-ticket" style={styles.link}>Raise Ticket</Link>
        <Link to="/my-tickets" style={styles.link}>My Tickets</Link>
        {user.role === 'admin' && <Link to="/admin" style={styles.link}>Admin Panel</Link>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '30px',
    textAlign: 'center',
  },
  links: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  link: {
    backgroundColor: '#34495e',
    color: 'white',
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    width: '200px',
    margin: '0 auto',
  },
};

export default Dashboard;
