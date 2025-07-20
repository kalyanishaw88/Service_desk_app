import React, { useEffect, useState } from 'react';

function AdminPanel() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const allTickets = JSON.parse(localStorage.getItem('tickets')) || [];
    setTickets(allTickets);
  }, []);

  const updateTicket = (id, updates) => {
    const updatedTickets = tickets.map(ticket =>
      ticket.id === id ? { ...ticket, ...updates } : ticket
    );
    setTickets(updatedTickets);
    localStorage.setItem('tickets', JSON.stringify(updatedTickets));
  };

  const handleStatusChange = (id, e) => {
    updateTicket(id, { status: e.target.value });
  };

  const handleResponseChange = (id, e) => {
    updateTicket(id, { response: e.target.value });
  };

  return (
    <div style={styles.container}>
      <h2>Admin Ticket Panel</h2>
      {tickets.length === 0 ? (
        <p>No tickets available.</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th>User</th>
              <th>Title</th>
              <th>Priority</th>
              <th>Category</th>
              <th>Status</th>
              <th>Response</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.userEmail}</td>
                <td>{ticket.title}</td>
                <td>{ticket.priority}</td>
                <td>{ticket.category}</td>
                <td>
                  <select value={ticket.status} onChange={(e) => handleStatusChange(ticket.id, e)}>
                    <option>Open</option>
                    <option>In Progress</option>
                    <option>Resolved</option>
                  </select>
                </td>
                <td>
                  <textarea
                    value={ticket.response}
                    onChange={(e) => handleResponseChange(ticket.id, e)}
                    rows="2"
                    cols="20"
                  />
                </td>
                <td>
                  <button
                    onClick={() => updateTicket(ticket.id, { response: ticket.response })}
                    style={styles.button}
                  >
                    Save
                  </button>
                </td>
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
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  thtd: {
    padding: '10px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '5px 10px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

export default AdminPanel;
