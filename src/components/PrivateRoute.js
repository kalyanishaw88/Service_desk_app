import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function PrivateRoute() {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  // For admin-only routes
  if (location.pathname === '/admin' && user?.role !== 'admin') {
    return <Navigate to="/" />;
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
