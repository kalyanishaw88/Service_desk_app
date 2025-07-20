import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2025 Service Desk App</p>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: 'auto',
    padding: '10px',
    backgroundColor: '#2c3e50',
    color: '#fff',
    textAlign: 'center',
  },
};

export default Footer;
