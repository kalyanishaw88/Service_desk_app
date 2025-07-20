import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

function MyTickets() {
  const { user } = useContext(AuthContext);
  const [myTickets, setMyTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [statusFilter, setStatusFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const tickets = JSON.parse(localStorage.getItem('tickets')) || [];
    const userTickets = tickets.filter(ticket => ticket.userEmail === user.email);
    setMyTickets(userTickets);
    setFilteredTickets(userTickets);
  }, [user.email]);

  useEffect(() => {
    let filtered = [...myTickets];

    if (statusFilter !== 'All') {
      filtered = filtered.filter(ticket => ticket.status === statusFilter);
    }

    if (searchQuery.trim()) {
      filtered = filtered.filter(ticket =>
        ticket.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredTickets(filtered);
  }, [statusFilter, searchQuery, myTickets]);

  return (
    <div style={styles.container}>
      <h2>My Tickets</h2>

      <div style={styles.controls}>
        <input
          type="text"
          placeholder="Search by title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option>All</option>
          <option>Open</option>
          <option>In Progress</option>
          <option>Resolved</option>
        </select>
      </div>

      {filteredTickets.length === 0 ? (
        <p>No tickets found.</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Priority</th>
              <th>Category</th>
              <th>Status</th>
              <th>Response</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.title}</td>
                <td>{ticket.priority}</td>
                <td>{ticket.category}</td>
                <td>{ticket.status}</td>
                <td>{ticket.response || 'Pending'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '30px',
  },
  controls: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '500px',
    marginBottom: '15px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
};

export default MyTickets;

