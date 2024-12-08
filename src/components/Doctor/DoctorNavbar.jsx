import React from 'react';
import { Link } from 'react-router-dom';
import './Doctor.css';

const DoctorNavbar = () => {
  return (
    <nav className="doctor-navbar">
      <ul>
        <li><Link to="/doctor" className="nav-link">Dashboard</Link></li>
        <li><Link to="/" className="nav-link">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default DoctorNavbar;
