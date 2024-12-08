import React from 'react';
import { Link } from 'react-router-dom';
import './Patient.css'; 
// import PatientDashboard from './Patient/PatientDashboard';

const PatientNavbar = () => {
  return (
    <nav className="patient-navbar">
      <div className="navbar-left">
        <ul>
          <li><Link to="/patient-dashboard" className="nav-link">Dashboard</Link></li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li><Link to="/" className="nav-link">Logout</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default PatientNavbar;
