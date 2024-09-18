import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext.jsx';

const ProtectedRoute = ({ children, roles }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!roles.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default ProtectedRoute;
