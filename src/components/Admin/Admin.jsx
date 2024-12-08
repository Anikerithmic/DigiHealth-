import React from 'react';
import AdminNavbar from './AdminNavbar';
import './Admin.css';

const Admin = () => {
  return (
    <div className="admin-container">
      <AdminNavbar />
      <h1>Admin Dashboard</h1>
      <p>Manage the application and its users here.</p>
    </div>
  );
};

export default Admin;
