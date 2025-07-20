import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function RaiseTicket() {
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');
  const [category, setCategory] = useState('General');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTicket = {
      id: Date.now(),
      userEmail: user.email,
      title,
      description,
      priority,
      category,
      status: 'Open',
      response: '',
      assignedTo: '',
      createdAt: new Date().toISOString(),
    };

    const tickets = JSON.parse(localStorage.getItem('tickets')) || [];
    tickets.push(newTicket);
    localStorage.setItem('tickets', JSON.stringify(tickets));
    alert('Ticket Raised Successfully!');
    navigate('/my-tickets');
  };

  return (
    <div style={styles.container}>
      <h2>Raise a Ticket</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        
        <label>
          Priority:
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </label>

        <label>
          Category:
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option>General</option>
            <option>Technical</option>
            <option>Billing</option>
            <option>Access</option>
          </select>
        </label>

        <button type="submit">Submit Ticket</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    padding: '30px',
    maxWidth: '600px',
    margin: 'auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
};

export default RaiseTicket;
