import React, { createContext, useContext, useState } from 'react';
import { login, register } from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem('user'));
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleRegister = async (userData) => {
    try {
      const response = await register(userData);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', response.data.username);
      setToken(response.data.token);
      setUser(response.data.username);
      return { success: true };
    } catch (error) {
      console.error('Registration error:', error.response?.data || error.message);
      return { success: false, error: error.response?.data?.message || 'Registration failed' };
    }
  };

  const handleLogin = async (credentials) => {
    try {
      const response = await login(credentials);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', response.data.username);
      setToken(response.data.token);
      setUser(response.data.username);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.response?.data?.message || 'Login failed' };
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, handleRegister, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
