import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import RaiseTicket from './pages/RaiseTicket';
import MyTickets from './pages/MyTickets';
import AdminPanel from './pages/AdminPanel';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/raise-ticket" element={<RaiseTicket />} />
            <Route path="/my-tickets" element={<MyTickets />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
