import React from 'react';
import HomeNavbar from './HomeNavbar';
import './Home.css';

const Contact = () => {
  return (
    <div className="home-container">
      <HomeNavbar />
      <main>
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out to us:</p>
        <ul>
          <li>Email: support@digihealth.com</li>
          <li>Phone: +91-9876****</li>
          <li>Address: DigiHealth HQ, Kolhapur, Maharashtra</li>
        </ul>
      </main>
    </div>
  );
};

export default Contact;
