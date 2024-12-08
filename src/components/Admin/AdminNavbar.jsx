import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

const AdminNavbar = () => {
  return (
    <nav className="admin-navbar">
      <ul>
        <li><Link to="/admin-dashboard" className="nav-link">Dashboard</Link></li>
        <li><Link to="/" className="nav-link">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
