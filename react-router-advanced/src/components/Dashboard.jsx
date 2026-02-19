// src/components/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Dashboard</h1>
      <p>Welcome to the React Router Advanced Demo!</p>
      <nav>
        <Link to="/profile" style={{ marginRight: "10px" }}>
          Go to Profile
        </Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
};

export default Dashboard;
