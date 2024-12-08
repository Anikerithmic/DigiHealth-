import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const HomeNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="home-navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">DigiHealth</Link>
        <ul className="nav-menu">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          
          {/* Services Dropdown */}
          <li className="nav-link dropdown" onClick={toggleDropdown}>
            Services <i className="fa fa-caret-down"></i>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/register-patient" className="dropdown-item">Register New Patient</Link></li>
                <li><Link to="/register-doctor" className="dropdown-item">Register New Doctor</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
          <li><Link to="/login" className="nav-link">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default HomeNavbar;
