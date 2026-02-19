// src/components/Login.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin();            // Set authenticated state in App.jsx
    navigate("/profile"); // Redirect to Profile after login
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Login Page</h1>
      <p>Please click the button below to simulate login.</p>
      <button
        onClick={handleLogin}
        style={{ padding: "10px 20px", cursor: "pointer" }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
