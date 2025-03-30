import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function NavLink({ to, children }) {
  const { user } = useAuth();
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        `block px-3 py-2 rounded-md ${isActive ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'}`
      }
    >
      {children}
    </RouterNavLink>
  );
}

function NavLinks() {
  const { user } = useAuth();

  return (
    <>
      <NavLink to="/">Home</NavLink>
      {user ? (
        <>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </>
      )}
    </>
  );
}

export default NavLinks;