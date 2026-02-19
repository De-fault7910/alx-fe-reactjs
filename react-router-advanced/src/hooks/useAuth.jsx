// src/hooks/useAuth.jsx
import { useState } from "react";

let globalAuth = false; // simple global state simulation

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(globalAuth);

  const login = () => {
    globalAuth = true;
    setIsAuthenticated(true);
  };

  const logout = () => {
    globalAuth = false;
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
};
