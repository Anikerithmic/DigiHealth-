import React from 'react';
import DoctorNavbar from './DoctorNavbar'; // If DoctorNavbar is inside the Doctor folder

import './Doctor.css';

const Doctor = () => {
  return (
    <div className="doctor-container">
      <DoctorNavbar />
      <h1>Doctor Dashboard</h1>
      <p>Access and manage patient information.</p>
    </div>
  );
};

export default Doctor;
