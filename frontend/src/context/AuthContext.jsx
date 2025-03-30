import React, { createContext, useContext, useState } from 'react';
import { login, register } from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleRegister = async (userData) => {
    try {
      const response = await register(userData);
      if (response.data.token && response.data.username) {
        const userInfo = {
          username: response.data.username,
          email: userData.email,
          fullName: userData.fullName
        };
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(userInfo));
        setToken(response.data.token);
        setUser(userInfo);
        return { success: true };
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (error) {
      console.error('Registration error:', error.response?.data || error.message);
      return { success: false, error: error.response?.data?.message || 'Registration failed' };
    }
  };

  const handleLogin = async (credentials) => {
    try {
      const response = await login(credentials);
      const userInfo = {
        username: response.data.username,
        email: response.data.email,
        fullName: response.data.fullName
      };
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(userInfo));
      setToken(response.data.token);
      setUser(userInfo);
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
    <AuthContext.Provider value={{ user, token, handleLogin, handleRegister, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};