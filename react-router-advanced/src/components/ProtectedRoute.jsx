// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />; // Redirect if not logged in
  }
  return children; // Render children if authenticated
};

export default ProtectedRoute;
